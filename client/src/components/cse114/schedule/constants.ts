// Hard course milestones and the locked simulator schedule.
//
// All dates are local YYYY-MM-DD strings. Day 1 = course start. The engine
// converts to / from Date objects via the helpers in date.ts.
//
// Why dates and not "Day N"? The brief mixed schemes (Day 1 was originally
// May 27, then corrected to May 28). To avoid ever being off by one again,
// the truth-source is the calendar date; day numbers are computed.

export const COURSE_START_DATE = "2026-05-28"; // Thu — Day 1
export const COURSE_END_DATE = "2026-07-03"; // Fri — Day 37
export const MIDTERM_DATE = "2026-06-17"; // Wed — Day 21
export const FINAL_DATE = "2026-07-01"; // Wed — Day 35

/**
 * Locked simulator slots. Dates are authoritative — the original brief listed
 * day numbers + weekdays that disagreed with the calendar; calendar wins.
 */
export interface SimulatorSlot {
  date: string;
  examId: string;
  instance: 1 | 2;
  label: string;
  blurb: string;
}

export const SIMULATOR_SCHEDULE: SimulatorSlot[] = [
  {
    date: "2026-05-31",
    examId: "midterm-practice-1",
    instance: 1,
    label: "Midterm Practice 1",
    blurb: "Diagnostic — set the baseline.",
  },
  {
    date: "2026-06-06",
    examId: "midterm-practice-2",
    instance: 1,
    label: "Midterm Practice 2",
    blurb: "After L01–L09 first pass.",
  },
  {
    date: "2026-06-09",
    examId: "midterm-practice-3",
    instance: 1,
    label: "Midterm Practice 3",
    blurb: "Full timed conditions.",
  },
  {
    date: "2026-06-12",
    examId: "midterm-practice-1",
    instance: 2,
    label: "Midterm Practice 1 (retake)",
    blurb: "Measure improvement vs the diagnostic.",
  },
  {
    date: "2026-06-14",
    examId: "midterm-practice-2",
    instance: 2,
    label: "Midterm Practice 2 (retake)",
    blurb: "Final check before midterm.",
  },
  {
    date: "2026-06-24",
    examId: "final-practice-1",
    instance: 1,
    label: "Final Practice 1",
    blurb: "Diagnostic after L10–L18 first pass.",
  },
  {
    date: "2026-06-27",
    examId: "final-practice-2",
    instance: 1,
    label: "Final Practice 2",
    blurb: "Full timed conditions.",
  },
  {
    date: "2026-06-29",
    examId: "final-practice-1",
    instance: 2,
    label: "Final Practice 1 (retake)",
    blurb: "Measure improvement before the real thing.",
  },
];

/** Chapter order — both passes. The engine packs in this order. */
export const MIDTERM_CHAPTER_ORDER = [
  "l01",
  "l02",
  "l03",
  "l04",
  "l05",
  "l06",
  "l07",
  "l08",
  "l09",
];

/** Final chapters — packed after the midterm. */
export const FINAL_CHAPTER_ORDER = ["l10", "l11", "l12", "l13", "l18", "l99"];

/** Spaced-repetition offsets in days, applied after a chapter is studied. */
export const SR_OFFSETS = [2, 5, 12, 25] as const;

/** Time estimates the engine sums for the day-total + load balancing. */
export const TIME_ESTIMATES = {
  studyNew: 45, // minutes for first-pass of a chapter (student already saw it once)
  revisit: 12, // ~10–15 min "concept → code → trap" re-read + drills
  trapFloor: 15, // daily floor
  trapExtra: 30, // extra block when active traps > 20
  gotchaDrill: 20, // suggested extra on light days
  lightReview: 30, // pre-exam day skim
} as const;

/** Threshold for triggering the extra trap-drill block. */
export const TRAP_HEAVY_THRESHOLD = 20;

/** Engine balancing thresholds, in minutes per day. */
export const DAY_HEAVY_MINUTES = 240; // 4 h → drop lowest priority
export const DAY_LIGHT_MINUTES = 120; // 2 h → suggest extra
