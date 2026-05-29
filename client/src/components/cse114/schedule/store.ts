// localStorage layer for the scheduling engine.
//
// Mirrors the design of components/cse114/store.ts: one JSON blob per key,
// fail-silent on quota / parse errors, no backend. The plan is *not* stored —
// it's recomputed from this state every render.

import { todayISO } from "./date";
import {
  COURSE_START_DATE,
  TIME_ESTIMATES,
} from "./constants";
import {
  SCHEDULE_VERSION,
  type ScheduleState,
  type TaskCompletion,
} from "./types";

const KEY = "cse114:schedule";

function defaultState(): ScheduleState {
  return {
    version: SCHEDULE_VERSION,
    startDate: COURSE_START_DATE,
    pace: 2,
    restWeekdays: [],
    masteredChapters: [],
    completions: {},
    chapterStudiedOn: {},
    revisitScores: {},
  };
}

export function getScheduleState(): ScheduleState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw) as Partial<ScheduleState>;
    // If the on-disk shape is older than the current engine, drop the cached
    // schedule fields but keep completions — they're still useful records.
    if (parsed.version !== SCHEDULE_VERSION) {
      return {
        ...defaultState(),
        completions: parsed.completions ?? {},
        chapterStudiedOn: parsed.chapterStudiedOn ?? {},
        revisitScores: parsed.revisitScores ?? {},
      };
    }
    return { ...defaultState(), ...parsed } as ScheduleState;
  } catch {
    return defaultState();
  }
}

export function writeScheduleState(s: ScheduleState): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    // quota / private mode — fail silent; in-memory still works for the session
  }
}

export function updateState(patch: Partial<ScheduleState>): ScheduleState {
  const next = { ...getScheduleState(), ...patch };
  writeScheduleState(next);
  return next;
}

/** Composite key used by completions. */
export function completionKey(date: string, taskId: string): string {
  return `${date}::${taskId}`;
}

export function setCompletion(
  date: string,
  taskId: string,
  c: TaskCompletion | null,
): void {
  const s = getScheduleState();
  const k = completionKey(date, taskId);
  if (c === null) {
    delete s.completions[k];
  } else {
    s.completions[k] = c;
  }
  writeScheduleState(s);
}

export function isCompleted(state: ScheduleState, date: string, taskId: string): boolean {
  return !!state.completions[completionKey(date, taskId)];
}

/**
 * Mark a chapter "studied as of date". This stamps the SR anchor — revisits
 * are computed relative to chapterStudiedOn[lectureId]. The first stamp wins
 * (a second study session is just an early revisit, not a reset).
 */
export function markChapterStudied(lectureId: string, date = todayISO()): void {
  const s = getScheduleState();
  if (!s.chapterStudiedOn[lectureId]) {
    s.chapterStudiedOn[lectureId] = date;
    writeScheduleState(s);
  }
}

/** Record the score on a revisit drill, 0–100. Used to gate the next revisit. */
export function recordRevisitScore(
  lectureId: string,
  revisitNumber: number,
  score: number,
): void {
  const s = getScheduleState();
  s.revisitScores[`${lectureId}::r${revisitNumber}`] = score;
  writeScheduleState(s);
}

export function getRevisitScore(
  state: ScheduleState,
  lectureId: string,
  revisitNumber: number,
): number | undefined {
  return state.revisitScores[`${lectureId}::r${revisitNumber}`];
}

/** Hard reset: wipes only the schedule blob, leaves traps/attempts untouched. */
export function resetSchedule(opts: { keepStudied?: boolean } = {}): void {
  const prev = getScheduleState();
  writeScheduleState({
    ...defaultState(),
    startDate: prev.startDate,
    pace: prev.pace,
    restWeekdays: prev.restWeekdays,
    masteredChapters: prev.masteredChapters,
    chapterStudiedOn: opts.keepStudied ? prev.chapterStudiedOn : {},
    revisitScores: opts.keepStudied ? prev.revisitScores : {},
    lastReset: todayISO(),
  });
}

// ---- Estimates re-exported so views don't pull from constants directly ----

export const ESTIMATES = TIME_ESTIMATES;
