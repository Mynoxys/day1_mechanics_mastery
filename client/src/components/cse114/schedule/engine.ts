// Schedule engine — pure functions.
//
// Inputs: ScheduleState (from localStorage), activeTrapCount, today's date.
// Output: 37 DayPlans, each with its ordered Tasks. Views just render this.
//
// Design notes:
//
// - Greedy chapter packing. We walk days forward and put unstudied chapters
//   in `pace` slots per non-blocked day until midterm chapters are placed,
//   then resume after the midterm for final chapters. This is naturally
//   adaptive: if the student skips a day, those chapters keep flowing into
//   the next available slot — no separate "redistribute" step.
//
// - SR triggers are read from state.chapterStudiedOn[id], not from the
//   scheduled study date. So a "marked mastered" chapter (skip initial study)
//   still gets a notional study date — see `effectiveStudyDate`.
//
// - The locked simulator dates always show as their own task. A simulator
//   day still gets the 15-min trap floor; new content is suppressed.
//
// - Load balancing happens last: if total > 4 h, drop the lowest-priority
//   non-essential task (revisit before drill before chapter) and re-flag the
//   day. If < 2 h, append a gotcha-drill suggestion.

import { allDrillQuestions } from "../exams";
import { GOTCHA_LABELS, type Gotcha } from "../types";
import {
  COURSE_END_DATE,
  COURSE_START_DATE,
  DAY_HEAVY_MINUTES,
  DAY_LIGHT_MINUTES,
  FINAL_CHAPTER_ORDER,
  FINAL_DATE,
  MIDTERM_CHAPTER_ORDER,
  MIDTERM_DATE,
  SIMULATOR_SCHEDULE,
  SR_OFFSETS,
  TIME_ESTIMATES,
  TRAP_HEAVY_THRESHOLD,
} from "./constants";
import {
  addDays,
  dayNumber,
  daysBetween,
  isoRange,
  weekdayOf,
} from "./date";
import { isCompleted } from "./store";
import type { DayPlan, DayStatus, ScheduleState, Task } from "./types";
import { getLecture } from "../lectures";

// ---- Helpers ---------------------------------------------------------------

/**
 * The date the student first studied (or declared mastery of) a chapter.
 * Used as the SR anchor. For mastered-but-never-studied chapters we use the
 * course start so revisits still get scheduled.
 */
function effectiveStudyDate(state: ScheduleState, lectureId: string): string | undefined {
  if (state.chapterStudiedOn[lectureId]) return state.chapterStudiedOn[lectureId];
  if (state.masteredChapters.includes(lectureId)) return state.startDate;
  return undefined;
}

function lectureTitle(lectureId: string): string {
  const l = getLecture(lectureId);
  return l ? `${l.code} — ${l.title}` : lectureId.toUpperCase();
}

function isExamDay(iso: string): "midterm" | "final" | null {
  if (iso === MIDTERM_DATE) return "midterm";
  if (iso === FINAL_DATE) return "final";
  return null;
}

function isPreExamDay(iso: string): boolean {
  return addDays(iso, 1) === MIDTERM_DATE || addDays(iso, 1) === FINAL_DATE;
}

/** True if the day cannot host new chapter content (exam / pre-exam / rest / simulator). */
function blocksNewContent(
  iso: string,
  state: ScheduleState,
  simSlots: Set<string>,
): boolean {
  if (isExamDay(iso)) return true;
  if (isPreExamDay(iso)) return true;
  if (simSlots.has(iso)) return true;
  if (state.restWeekdays.includes(weekdayOf(iso))) return true;
  return false;
}

// ---- Chapter scheduling ----------------------------------------------------

/**
 * Walk days from startDate to endDate and assign unstudied chapters greedily
 * (up to `pace` per non-blocked day). Returns Map<iso, lectureId[]>.
 *
 * Midterm chapters fill pre-midterm days; final chapters fill post-midterm
 * days. A chapter the user already studied (chapterStudiedOn set) or marked
 * mastered is skipped — its SR revisits will still come through.
 */
function packChapters(state: ScheduleState): Map<string, string[]> {
  const out = new Map<string, string[]>();
  const simSlots = new Set(SIMULATOR_SCHEDULE.map((s) => s.date));

  const queueFor = (ids: string[], from: string, until: string) => {
    const q = ids.filter(
      (id) =>
        !state.chapterStudiedOn[id] && !state.masteredChapters.includes(id),
    );
    for (const day of isoRange(from, until)) {
      if (q.length === 0) break;
      if (blocksNewContent(day, state, simSlots)) continue;
      const slots = state.pace;
      const todays: string[] = [];
      for (let i = 0; i < slots && q.length > 0; i++) {
        todays.push(q.shift() as string);
      }
      if (todays.length > 0) out.set(day, todays);
    }
  };

  // Pre-midterm window: today/start → day before midterm.
  queueFor(MIDTERM_CHAPTER_ORDER, state.startDate, addDays(MIDTERM_DATE, -1));
  // Post-midterm window: day after midterm → day before final.
  queueFor(FINAL_CHAPTER_ORDER, addDays(MIDTERM_DATE, 1), addDays(FINAL_DATE, -1));

  return out;
}

// ---- Revisit scheduling ----------------------------------------------------

interface ScheduledRevisit {
  lectureId: string;
  revisitNumber: number; // 1..4
}

/**
 * For each studied chapter, compute SR revisit dates (+2, +5, +12, +25) and
 * group by date. A revisit is dropped if it would fall after its target exam
 * (midterm chapters → must land by midterm; final chapters → by final).
 */
function packRevisits(state: ScheduleState): Map<string, ScheduledRevisit[]> {
  const out = new Map<string, ScheduledRevisit[]>();
  const push = (iso: string, r: ScheduledRevisit) => {
    const arr = out.get(iso) ?? [];
    arr.push(r);
    out.set(iso, arr);
  };

  const targetExam = (lectureId: string): string => {
    if (FINAL_CHAPTER_ORDER.includes(lectureId)) return FINAL_DATE;
    return MIDTERM_DATE;
  };

  for (const lectureId of [...MIDTERM_CHAPTER_ORDER, ...FINAL_CHAPTER_ORDER]) {
    const anchor = effectiveStudyDate(state, lectureId);
    if (!anchor) continue;
    const cutoff = targetExam(lectureId);
    SR_OFFSETS.forEach((offset, idx) => {
      const date = addDays(anchor, offset);
      if (date > cutoff) return; // past the exam — no point
      if (date < state.startDate) return; // anchor was in the past, e.g. from reset
      // The +25 step only fires if it's before the exam (already handled).
      push(date, { lectureId, revisitNumber: idx + 1 });
    });

    // Penalty revisit: any past revisit scored < 80 gets an extra +2 day push
    // from its scheduled date. We approximate by adding one extra revisit slot
    // 2 days after the most recent recorded-low score's nominal date.
    SR_OFFSETS.forEach((offset, idx) => {
      const score = state.revisitScores[`${lectureId}::r${idx + 1}`];
      if (score !== undefined && score < 80) {
        const nominal = addDays(anchor, offset);
        const penaltyDate = addDays(nominal, 2);
        if (penaltyDate <= cutoff && penaltyDate >= state.startDate) {
          push(penaltyDate, { lectureId, revisitNumber: idx + 1 });
        }
      }
    });
  }

  return out;
}

// ---- Task builders ---------------------------------------------------------

function studyTask(lectureId: string): Task {
  return {
    id: `study::${lectureId}`,
    kind: "study-new",
    title: lectureTitle(lectureId),
    subtitle: "First pass — concept → code → trap. Take the chapter drills at the end.",
    href: `/cse114/learn/${lectureId}`,
    estMinutes: TIME_ESTIMATES.studyNew,
    priority: 10,
    lectureId,
  };
}

function revisitTask(lectureId: string, revisitNumber: number): Task {
  return {
    id: `revisit::${lectureId}::r${revisitNumber}`,
    kind: "revisit",
    title: `${lectureTitle(lectureId)} — revisit #${revisitNumber}`,
    subtitle: "Re-read the chapter summary, redo the drills. ≥80% advances the SR queue.",
    href: `/cse114/learn/${lectureId}`,
    estMinutes: TIME_ESTIMATES.revisit,
    priority: 30,
    lectureId,
    revisitNumber,
  };
}

function trapDrillTask(extra = false): Task {
  return {
    id: extra ? "trap-drill-extra" : "trap-drill",
    kind: "trap-drill",
    title: extra ? "Extra trap drill (30 min)" : "Trap drill (15 min)",
    subtitle: extra
      ? "Trap list is heavy — clear another block."
      : "Daily floor. Drill until each active trap streaks to 3.",
    href: "/cse114/drill",
    estMinutes: extra ? TIME_ESTIMATES.trapExtra : TIME_ESTIMATES.trapFloor,
    priority: 40,
    examInstance: undefined,
  };
}

function simulatorTask(slot: (typeof SIMULATOR_SCHEDULE)[number]): Task {
  return {
    id: `sim::${slot.examId}::i${slot.instance}`,
    kind: "simulator",
    title: slot.label,
    subtitle: slot.blurb,
    href: `/cse114/sim/${slot.examId}`,
    estMinutes: 130, // ~average across the practice exams + grading
    priority: 5, // simulators are appointment-style — top of the day
    examId: slot.examId,
    examInstance: slot.instance,
  };
}

function lightReviewTask(forExam: "midterm" | "final"): Task {
  return {
    id: `light-review::${forExam}`,
    kind: "light-review",
    title: `${forExam === "midterm" ? "Midterm" : "Final"} — light review only`,
    subtitle:
      "No new content. Skim the cheat sheet, glance at active traps, sleep early. You've earned it.",
    href: "/cse114",
    estMinutes: TIME_ESTIMATES.lightReview,
    priority: 5,
  };
}

function examTask(which: "midterm" | "final"): Task {
  return {
    id: `exam::${which}`,
    kind: "exam",
    title: which === "midterm" ? "MIDTERM — exam day" : "FINAL — exam day",
    subtitle: "Locked. No tasks. Go take it.",
    estMinutes: 0,
    priority: 0,
  };
}

/** Suggested gotcha drill for under-loaded days. Rotates through gotcha categories by day number. */
function gotchaDrillTask(dayNum: number): Task {
  const gotchas = Object.keys(GOTCHA_LABELS) as Gotcha[];
  const g = gotchas[dayNum % gotchas.length];
  return {
    id: `gotcha::${g}`,
    kind: "gotcha-drill",
    title: `Gotcha drill — ${GOTCHA_LABELS[g]}`,
    subtitle: "Light-day suggestion. Targeted gotcha bank.",
    href: `/cse114/drill/gotcha/${g}`,
    estMinutes: TIME_ESTIMATES.gotchaDrill,
    priority: 50,
  };
}

// ---- Status ---------------------------------------------------------------

function dayStatus(
  iso: string,
  today: string,
  exam: "midterm" | "final" | null,
  tasks: Task[],
  state: ScheduleState,
): DayStatus {
  if (exam) return "locked";
  if (tasks.length === 0) return "scheduled";
  const completed = tasks.filter((t) => isCompleted(state, iso, t.id)).length;
  if (completed === tasks.length) return "completed";
  if (iso < today) {
    return completed === 0 ? "skipped" : "partial";
  }
  return completed === 0 ? "scheduled" : "partial";
}

// ---- Master builder --------------------------------------------------------

export interface BuildOptions {
  state: ScheduleState;
  today: string; // YYYY-MM-DD
  activeTrapCount: number;
}

export function buildSchedule({ state, today, activeTrapCount }: BuildOptions): DayPlan[] {
  const chapterPlan = packChapters(state);
  const revisitPlan = packRevisits(state);
  const simByDate = new Map(SIMULATOR_SCHEDULE.map((s) => [s.date, s] as const));

  const days = isoRange(COURSE_START_DATE, COURSE_END_DATE);
  const plans: DayPlan[] = days.map((iso) => {
    const exam = isExamDay(iso);
    const isPre = isPreExamDay(iso);
    const isRest = state.restWeekdays.includes(weekdayOf(iso));
    const dayNum = dayNumber(state.startDate, iso);
    const tasks: Task[] = [];

    if (exam) {
      tasks.push(examTask(exam));
    } else {
      // 1. Simulator (top-of-day, locked appointment).
      const sim = simByDate.get(iso);
      if (sim) tasks.push(simulatorTask(sim));

      // 2. Pre-exam light review.
      if (isPre) {
        const upcoming = addDays(iso, 1) === MIDTERM_DATE ? "midterm" : "final";
        tasks.push(lightReviewTask(upcoming));
      } else {
        // 3. New chapter(s) — only if not blocked.
        const chs = chapterPlan.get(iso) ?? [];
        chs.forEach((id) => tasks.push(studyTask(id)));

        // 4. Revisits due today.
        const revs = revisitPlan.get(iso) ?? [];
        revs.forEach((r) => tasks.push(revisitTask(r.lectureId, r.revisitNumber)));
      }

      // 5. Daily trap drill (floor). Rest weekdays still get it — it's the floor.
      tasks.push(trapDrillTask(false));
      if (activeTrapCount > TRAP_HEAVY_THRESHOLD && !isPre && !sim) {
        tasks.push(trapDrillTask(true));
      }
    }

    // Sort: priority asc, then by kind for stable order.
    tasks.sort((a, b) => a.priority - b.priority);

    // Load balancing.
    if (!exam) {
      let totalRemaining = sumRemaining(tasks, state, iso);

      // Heavy: drop lowest-priority revisit until under cap, but never drop
      // the trap floor or a simulator or the exam.
      while (totalRemaining > DAY_HEAVY_MINUTES) {
        const dropIdx = tasks
          .map((t, i) => ({ t, i }))
          .filter(
            ({ t }) =>
              t.kind === "revisit" &&
              !isCompleted(state, iso, t.id),
          )
          .sort((a, b) => b.t.priority - a.t.priority)[0]?.i;
        if (dropIdx === undefined) break;
        tasks.splice(dropIdx, 1);
        totalRemaining = sumRemaining(tasks, state, iso);
      }

      // Light: suggest a gotcha drill.
      const totalAll = sumAll(tasks);
      if (totalAll < DAY_LIGHT_MINUTES && !isPre && !simByDate.get(iso)) {
        tasks.push(gotchaDrillTask(dayNum));
      }
    }

    const status = dayStatus(iso, today, exam, tasks, state);
    return {
      date: iso,
      dayNumber: dayNum,
      weekday: weekdayOf(iso),
      exam,
      isPreExam: isPre,
      isRestDay: isRest,
      tasks,
      remainingMinutes: sumRemaining(tasks, state, iso),
      totalMinutes: sumAll(tasks),
      status,
    };
  });

  return plans;
}

function sumAll(tasks: Task[]): number {
  return tasks.reduce((s, t) => s + t.estMinutes, 0);
}

function sumRemaining(tasks: Task[], state: ScheduleState, iso: string): number {
  return tasks.reduce(
    (s, t) => s + (isCompleted(state, iso, t.id) ? 0 : t.estMinutes),
    0,
  );
}

// ---- Convenience: today's plan --------------------------------------------

export function planForDate(plans: DayPlan[], iso: string): DayPlan | undefined {
  return plans.find((p) => p.date === iso);
}

/** Days until the next exam (midterm if it's still upcoming, otherwise final). */
export function daysUntilNextExam(today: string): {
  exam: "midterm" | "final";
  date: string;
  days: number;
} {
  if (today <= MIDTERM_DATE) {
    return { exam: "midterm", date: MIDTERM_DATE, days: Math.max(0, daysBetween(today, MIDTERM_DATE)) };
  }
  return { exam: "final", date: FINAL_DATE, days: Math.max(0, daysBetween(today, FINAL_DATE)) };
}

// Re-export so callers can import everything from one place.
export type { DayPlan, Task } from "./types";

// ---- Side effect: drill questions count (for UI hints) --------------------

/** Total question pool size — used by views to size the simulator-day estimate. */
export function totalDrillQuestionPool(): number {
  return allDrillQuestions().length;
}
