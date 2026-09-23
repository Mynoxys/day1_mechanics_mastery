// localStorage data layer for the SOC 105 trainer: per-question spaced repetition,
// plus in-progress and finished exam sessions. JSON-guarded so a corrupt key never
// throws (same approach as the CSE 114 store).
//
// Spaced repetition is Leitner-style but paced in *answers*, not days — the exam
// is days away, so "see it again in 3 days" is useless. Each answer advances a
// global tick; a question's box sets how many answers later it comes back.

import { useSyncExternalStore } from "react";
import { ALL_QUESTIONS, type BankQuestion } from "./units";
import type { Skill, Trap, UnitId } from "./types";

// answers until a question is due again, by box (box 4 = mastered, rarely shown)
const BOX_GAP = [3, 8, 20, 45, 120];
export const MASTERED_BOX = 3;

export interface ItemState {
  box: number;
  due: number; // tick at which it's due
  seen: number;
  right: number;
  lastRight: boolean;
}

export interface ExamSession {
  id: string;
  label: string;
  unitIds: UnitId[];
  questionIds: string[];
  optionOrder: number[][]; // shuffled option indices per question
  answers: (number | null)[]; // index into the ORIGINAL options array
  current: number;
  startedAt: number;
  finishedAt?: number;
}

interface State {
  tick: number;
  items: Record<string, ItemState>;
  activeExam: ExamSession | null;
  history: ExamSession[]; // finished, newest first
}

const KEY = "soc105:v1";
const EMPTY: State = { tick: 0, items: {}, activeExam: null, history: [] };

function load(): State {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw);
    return { ...EMPTY, ...parsed, items: parsed.items ?? {}, history: parsed.history ?? [] };
  } catch {
    return EMPTY;
  }
}

let state: State = load();
const listeners = new Set<() => void>();

function commit(next: State) {
  state = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // private mode / quota — keep working in memory
  }
  listeners.forEach((l) => l());
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function useSocStore(): State {
  return useSyncExternalStore(subscribe, () => state);
}

export function getState(): State {
  return state;
}

// ---- answering ----

export function recordAnswer(questionId: string, right: boolean) {
  const prev = state.items[questionId];
  const box = right ? Math.min((prev?.box ?? 0) + (prev ? 1 : 2), BOX_GAP.length - 1) : 0;
  const tick = state.tick + 1;
  commit({
    ...state,
    tick,
    items: {
      ...state.items,
      [questionId]: {
        box,
        due: tick + BOX_GAP[box],
        seen: (prev?.seen ?? 0) + 1,
        right: (prev?.right ?? 0) + (right ? 1 : 0),
        lastRight: right,
      },
    },
  });
}

export function resetProgress() {
  commit({ ...EMPTY, history: state.history });
}

// ---- drill picking ----

const TIER_WEIGHT = { 1: 3, 2: 2, 3: 1 } as const;

function weightedPick<T>(xs: T[], weight: (x: T) => number): T | undefined {
  const total = xs.reduce((s, x) => s + weight(x), 0);
  let r = Math.random() * total;
  for (const x of xs) {
    r -= weight(x);
    if (r <= 0) return x;
  }
  return xs[xs.length - 1];
}

// Due misses first, then unseen (tier-1 weighted), then whatever is least mastered.
export function pickNext(pool: BankQuestion[], avoidId?: string): BankQuestion | undefined {
  const candidates = pool.length > 1 ? pool.filter((q) => q.id !== avoidId) : pool;
  const { items, tick } = state;
  const due = candidates.filter((q) => items[q.id] && items[q.id].due <= tick && items[q.id].box < BOX_GAP.length - 1);
  if (due.length) {
    const minBox = Math.min(...due.map((q) => items[q.id].box));
    return weightedPick(due.filter((q) => items[q.id].box === minBox), (q) => TIER_WEIGHT[q.tier]);
  }
  const unseen = candidates.filter((q) => !items[q.id]);
  if (unseen.length) return weightedPick(unseen, (q) => TIER_WEIGHT[q.tier]);
  const sorted = [...candidates].sort((a, b) => items[a.id].box - items[b.id].box || items[a.id].due - items[b.id].due);
  return sorted[0];
}

// ---- stats ----

export interface Tally {
  seen: number;
  right: number;
  mastered: number;
  total: number;
}

export function tally(pool: BankQuestion[], items = state.items): Tally {
  let seen = 0;
  let right = 0;
  let mastered = 0;
  for (const q of pool) {
    const s = items[q.id];
    if (!s) continue;
    seen += s.seen;
    right += s.right;
    if (s.box >= MASTERED_BOX) mastered++;
  }
  return { seen, right, mastered, total: pool.length };
}

export function missedQuestions(pool: BankQuestion[], items = state.items) {
  return pool.filter((q) => items[q.id] && !items[q.id].lastRight);
}

// ---- exams ----

function shuffle<T>(xs: T[]): T[] {
  const a = [...xs];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Display order for a question's options. Magnitude ladders keep their order but
// are randomly flipped (largest-first vs smallest-first), so "the answer is
// usually the second rung" can't become a tell; other fixed orders stay as written.
export function optionOrder(q: BankQuestion): number[] {
  const idx = q.options.map((_, i) => i);
  if (q.format === "tf") return idx;
  if (q.fixedOrder) return q.trap === "magnitude" && Math.random() < 0.5 ? idx.reverse() : idx;
  return shuffle(idx);
}

// The syllabus names three question classes but no ratio; this mix is inferred
// from the real practice exam (application and conceptual dominate).
const SKILL_MIX: Record<Skill, number> = { application: 0.4, conceptual: 0.4, empirical: 0.2 };

export function buildExam(unitIds: UnitId[], length: number, label: string): ExamSession {
  const pool = ALL_QUESTIONS.filter((q) => unitIds.includes(q.unitId));
  // questions used in recent exams go to the back of the line
  const recent = new Set(state.history.slice(0, 3).flatMap((h) => h.questionIds));
  const n = Math.min(length, pool.length);
  const chosen: BankQuestion[] = [];
  // weighted sampling without replacement (key = u^(1/w)), so tier-1 material
  // dominates without crowding out tier 2/3 entirely
  const byWeight = (qs: BankQuestion[]) =>
    qs
      .map((q) => ({ q, key: Math.random() ** (1 / TIER_WEIGHT[q.tier]) }))
      .sort((a, b) => b.key - a.key)
      .map((x) => x.q);
  const take = (qs: BankQuestion[], k: number) => {
    const open = qs.filter((q) => !chosen.includes(q));
    const fresh = byWeight(open.filter((q) => !recent.has(q.id)));
    const stale = byWeight(open.filter((q) => recent.has(q.id)));
    chosen.push(...[...fresh, ...stale].slice(0, k));
  };
  // spread each skill's quota across units in proportion to their bank size
  for (const skill of Object.keys(SKILL_MIX) as Skill[]) {
    const quota = Math.round(n * SKILL_MIX[skill]);
    const skillPool = pool.filter((q) => q.skill === skill);
    for (const uid of unitIds) {
      const unitPool = skillPool.filter((q) => q.unitId === uid);
      take(unitPool, Math.round((quota * unitPool.length) / Math.max(1, skillPool.length)));
    }
  }
  if (chosen.length < n) take(pool, n - chosen.length);
  const questions = shuffle(chosen.slice(0, n));
  return {
    id: `${Date.now()}`,
    label,
    unitIds,
    questionIds: questions.map((q) => q.id),
    optionOrder: questions.map(optionOrder),
    answers: questions.map(() => null),
    current: 0,
    startedAt: Date.now(),
  };
}

export function startExam(session: ExamSession) {
  commit({ ...state, activeExam: session });
}

export function updateExam(patch: Partial<ExamSession>) {
  if (!state.activeExam) return;
  commit({ ...state, activeExam: { ...state.activeExam, ...patch } });
}

export function abandonExam() {
  commit({ ...state, activeExam: null });
}

// Grades the exam and feeds every answer into spaced repetition, so exam misses
// show up in the drill.
export function finishExam(): ExamSession | null {
  const exam = state.activeExam;
  if (!exam) return null;
  exam.questionIds.forEach((id, i) => {
    const q = ALL_QUESTIONS.find((x) => x.id === id);
    const a = exam.answers[i];
    if (q) recordAnswer(id, a !== null && !!q.options[a]?.correct);
  });
  const done = { ...exam, finishedAt: Date.now() };
  commit({ ...state, activeExam: null, history: [done, ...state.history].slice(0, 20) });
  return done;
}

export function examScore(exam: ExamSession) {
  let right = 0;
  exam.questionIds.forEach((id, i) => {
    const q = ALL_QUESTIONS.find((x) => x.id === id);
    const a = exam.answers[i];
    if (q && a !== null && q.options[a]?.correct) right++;
  });
  return { right, total: exam.questionIds.length };
}

export type { Skill, Trap };
