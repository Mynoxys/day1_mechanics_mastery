// Schedule engine — types.
//
// The engine builds a deterministic 37-day plan (May 28 → Jul 3, 2026) from
// the current state. Nothing here is reactive; the plan is a pure function of
// (today, settings, completions). Persistence is localStorage so the plan
// survives killing the dev server.

export type TaskKind =
  | "study-new" // first time through a chapter
  | "revisit" // spaced-repetition pass (+2 / +5 / +12 / +25)
  | "trap-drill" // 15-min daily floor (or 30-min extra block)
  | "simulator" // a locked practice-exam slot
  | "gotcha-drill" // suggested extra (light day)
  | "light-review" // pre-exam day: skim only
  | "exam"; // the actual midterm / final — locked, no other tasks

/** A single thing the student should do on a given day. */
export interface Task {
  /** Stable id within a day. Used as the completion key. */
  id: string;
  kind: TaskKind;
  /** Short title, e.g. "L02 — Elementary Programming" or "Trap drill (15 min)". */
  title: string;
  /** One-line context the student sees in the card. */
  subtitle?: string;
  /** Where the "Open" button goes (internal route). Omitted for the exam itself. */
  href?: string;
  /** Estimated minutes — used for load balancing and the day total. */
  estMinutes: number;
  /** Priority for ordering and adaptive drop. Lower = higher priority. */
  priority: number;
  /** For chapter tasks. */
  lectureId?: string;
  /** For revisits. 1..4 → which SR step this is. */
  revisitNumber?: number;
  /** For simulator. */
  examId?: string;
  /** Instance 1 = first attempt, 2 = retake. */
  examInstance?: 1 | 2;
}

export type DayStatus =
  /** Future or current day that hasn't been touched yet. */
  | "scheduled"
  /** Every task on this day is marked completed. */
  | "completed"
  /** Some completed, some not. */
  | "partial"
  /** Past day with nothing completed. */
  | "skipped"
  /** Exam day — no student tasks. */
  | "locked";

export interface DayPlan {
  /** YYYY-MM-DD (local). The canonical key everywhere. */
  date: string;
  /** Day 1 = course start (May 28, 2026). */
  dayNumber: number;
  /** 0..6 (Sun..Sat). */
  weekday: number;
  /** "midterm" | "final" exam day, else null. */
  exam: "midterm" | "final" | null;
  /** Day-before-exam rest. */
  isPreExam: boolean;
  /** Whether the engine treated this as a rest day from settings.restWeekdays. */
  isRestDay: boolean;
  tasks: Task[];
  /** Sum of estMinutes for un-completed tasks (what's left to do). */
  remainingMinutes: number;
  /** Sum of estMinutes for everything scheduled today. */
  totalMinutes: number;
  status: DayStatus;
}

/**
 * Persisted in localStorage. Pure data only — the engine derives the plan from
 * this every render. Designed so a kill-the-dev-server / fresh-tab user picks
 * up exactly where they were.
 */
export interface ScheduleState {
  /**
   * Schedule version — bump if the constants change in an incompatible way.
   * Lets future-us migrate or reset gracefully.
   */
  version: number;
  /**
   * Anchor for "Day 1". Defaults to COURSE_START_DATE but the settings page
   * can reset it (e.g. to "today" if the user wants a fresh schedule).
   */
  startDate: string; // YYYY-MM-DD
  /** Default chapters/day for the new-content scheduler. */
  pace: 1 | 2 | 3;
  /** Weekdays (0=Sun..6=Sat) that suppress new-content scheduling. */
  restWeekdays: number[];
  /** Lectures the student declared mastered up front — no initial study. */
  masteredChapters: string[];
  /**
   * Per-task completion records, keyed `${date}::${taskId}`. We store the
   * minimal facts the engine needs (date completed, optional drill score).
   */
  completions: Record<string, TaskCompletion>;
  /**
   * Chapter-level completion stamp: date the student first studied it. The
   * engine reads this to schedule revisits at +2/+5/+12/+25.
   */
  chapterStudiedOn: Record<string, string>; // lectureId → YYYY-MM-DD
  /** Revisit drill scores. < 80% triggers an extra +2-day revisit. */
  revisitScores: Record<string, number>; // `${lectureId}::r${1..4}` → 0..100
  /** When the user last force-reset the schedule. */
  lastReset?: string;
}

export interface TaskCompletion {
  date: string; // YYYY-MM-DD when marked done
  /** Optional self-reported score 0–100 (for drills and revisits). */
  score?: number;
}

export const SCHEDULE_VERSION = 1;
