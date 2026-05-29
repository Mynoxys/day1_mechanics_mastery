// localStorage-backed data layer for the CSE 114 trainer + shared grading logic.
// No backend: everything lives in the browser, JSON-guarded so a corrupt key
// never throws. This is the "data layer" from the build plan (traps / attempts
// / sessions), deliberately simple per "no complex database thing".

import { nanoid } from "nanoid";
import {
  type Attempt,
  type ExamSession,
  type Question,
  type Trap,
  MASTERY_TARGET,
} from "./types";

const KEYS = {
  traps: "cse114:traps",
  attempts: "cse114:attempts",
  sessions: "cse114:sessions",
} as const;

function read<T>(key: string): T[] {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as T[]) : [];
  } catch {
    return [];
  }
}

function write<T>(key: string, value: T[]): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // out of quota / private mode — fail silent, session still works in-memory
  }
}

// ---- Traps ----

export function getTraps(): Trap[] {
  return read<Trap>(KEYS.traps);
}

export function getActiveTraps(): Trap[] {
  return getTraps().filter((t) => t.masteredAt === null);
}

export function addTrap(
  input: Omit<Trap, "id" | "createdAt" | "masteryStreak" | "masteredAt">,
): Trap {
  const traps = getTraps();
  // De-dupe: one active trap per question. If it already exists, just refresh it.
  const existing = traps.find(
    (t) => t.questionId === input.questionId && t.masteredAt === null,
  );
  if (existing) {
    existing.myWrongAnswer = input.myWrongAnswer;
    if (input.ruleViolated) existing.ruleViolated = input.ruleViolated;
    write(KEYS.traps, traps);
    return existing;
  }
  const trap: Trap = {
    ...input,
    id: nanoid(8),
    createdAt: Date.now(),
    masteryStreak: 0,
    masteredAt: null,
  };
  write(KEYS.traps, [trap, ...traps]);
  return trap;
}

export function updateTrap(id: string, patch: Partial<Trap>): void {
  const traps = getTraps().map((t) => (t.id === id ? { ...t, ...patch } : t));
  write(KEYS.traps, traps);
}

export function deleteTrap(id: string): void {
  write(
    KEYS.traps,
    getTraps().filter((t) => t.id !== id),
  );
}

/** Drill outcome: 3 consecutive correct masters the trap (removes it from rotation). */
export function markTrapResult(id: string, correct: boolean): void {
  const traps = getTraps().map((t) => {
    if (t.id !== id) return t;
    if (correct) {
      const streak = t.masteryStreak + 1;
      return {
        ...t,
        masteryStreak: streak,
        masteredAt: streak >= MASTERY_TARGET ? Date.now() : t.masteredAt,
      };
    }
    return { ...t, masteryStreak: 0, masteredAt: null };
  });
  write(KEYS.traps, traps);
}

export function resetMastery(id: string): void {
  updateTrap(id, { masteryStreak: 0, masteredAt: null });
}

// ---- Attempts ----

export function getAttempts(): Attempt[] {
  return read<Attempt>(KEYS.attempts);
}

export function addAttempt(input: Omit<Attempt, "id" | "timestamp">): Attempt {
  const attempt: Attempt = { ...input, id: nanoid(8), timestamp: Date.now() };
  write(KEYS.attempts, [attempt, ...getAttempts()].slice(0, 2000));
  return attempt;
}

// ---- Sessions ----

export function getSessions(): ExamSession[] {
  return read<ExamSession>(KEYS.sessions);
}

/** Upsert by id — re-saving a session (e.g. after self-grading) updates it. */
export function addSession(session: ExamSession): void {
  const rest = getSessions().filter((s) => s.id !== session.id);
  write(KEYS.sessions, [session, ...rest].slice(0, 200));
}

// ---- Backup ----

export function exportAll(): string {
  return JSON.stringify(
    {
      exportedAt: new Date().toISOString(),
      traps: getTraps(),
      attempts: getAttempts(),
      sessions: getSessions(),
    },
    null,
    2,
  );
}

export function downloadBackup(): void {
  const blob = new Blob([exportAll()], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `cse114-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export function importAll(json: string): boolean {
  try {
    const data = JSON.parse(json);
    if (data.traps) write(KEYS.traps, data.traps);
    if (data.attempts) write(KEYS.attempts, data.attempts);
    if (data.sessions) write(KEYS.sessions, data.sessions);
    return true;
  } catch {
    return false;
  }
}

// ========================================================================
// Grading — shared by the simulator and the trap drill so they agree.
// ========================================================================

export type UserAnswer =
  | { kind: "choice"; index: number | null }
  | { kind: "choices"; indices: number[] }
  | { kind: "text"; value: string }
  | { kind: "fields"; values: Record<string, string> };

export interface GradeResult {
  correct: boolean | null; // null => needs self-grade (code questions)
  score: number; // points earned (trace can award partial)
  myAnswerText: string; // human-readable, for attempt/trap records + review
  correctAnswerText: string;
}

/** Trim, collapse whitespace, normalize newlines, lowercase. For prose/output. */
function normText(s: string): string {
  return s
    .replace(/\r/g, "")
    .split("\n")
    .map((l) => l.trim().replace(/[ \t]+/g, " "))
    .join("\n")
    .trim()
    .toLowerCase();
}

/** Strip ALL whitespace + lowercase. For short code rewrites ("x = x * 5"). */
function normTight(s: string): string {
  return s.replace(/\s+/g, "").toLowerCase();
}

function textMatches(
  value: string,
  answer: string,
  acceptable: string[] | undefined,
): boolean {
  const candidates = [answer, ...(acceptable ?? [])];
  const v = normText(value);
  const vt = normTight(value);
  return candidates.some((c) => normText(c) === v || normTight(c) === vt);
}

export function gradeAnswer(q: Question, a: UserAnswer): GradeResult {
  switch (q.type) {
    case "mc": {
      const idx = a.kind === "choice" ? a.index : null;
      return {
        correct: idx === q.correctIndex,
        score: idx === q.correctIndex ? q.points : 0,
        myAnswerText: idx === null ? "(blank)" : q.choices[idx],
        correctAnswerText: q.choices[q.correctIndex],
      };
    }
    case "multi": {
      const picked = a.kind === "choices" ? [...a.indices].sort() : [];
      const want = [...q.correctIndices].sort();
      const correct =
        picked.length === want.length && picked.every((x, i) => x === want[i]);
      return {
        correct,
        score: correct ? q.points : 0,
        myAnswerText:
          picked.length === 0
            ? "(blank)"
            : picked.map((i) => q.choices[i]).join(", "),
        correctAnswerText: want.map((i) => q.choices[i]).join(", "),
      };
    }
    case "output":
    case "short": {
      const value = a.kind === "text" ? a.value : "";
      const correct = value.trim() !== "" && textMatches(value, q.answer, q.acceptable);
      return {
        correct,
        score: correct ? q.points : 0,
        myAnswerText: value.trim() === "" ? "(blank)" : value,
        correctAnswerText: q.answer,
      };
    }
    case "trace": {
      const values = a.kind === "fields" ? a.values : {};
      let right = 0;
      q.fields.forEach((f) => {
        if (textMatches(values[f.label] ?? "", f.answer, f.acceptable)) right++;
      });
      const allRight = right === q.fields.length;
      const score = q.partialCredit
        ? Math.round((right / q.fields.length) * q.points)
        : allRight
          ? q.points
          : 0;
      return {
        correct: allRight,
        score,
        myAnswerText:
          q.fields
            .map((f) => `${f.label} = ${values[f.label]?.trim() || "∅"}`)
            .join("\n") || "(blank)",
        correctAnswerText: q.fields
          .map((f) => `${f.label} = ${f.answer}`)
          .join("\n"),
      };
    }
    case "code": {
      const value = a.kind === "text" ? a.value : "";
      return {
        correct: null, // self-graded against reference in review/drill
        score: 0,
        myAnswerText: value.trim() === "" ? "(blank)" : value,
        correctAnswerText: q.referenceSolution,
      };
    }
  }
}
