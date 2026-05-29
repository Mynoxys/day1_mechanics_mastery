// Knowledge-prep data model: one Lecture per CSE 114 slide deck (L01–L18).
// Each lecture teaches concepts the "explain, don't tell" way — lead with the
// plain-language idea, then how it shows up in code, then the trap to avoid —
// and ends with drills that reuse the same Question type as the exam engine.

import type { Gotcha, Question, Topic } from "../types";

export interface ConceptSection {
  heading: string;
  /** The mental model, in plain language. Always lead with this. */
  idea: string;
  /** Deeper explanation / how it actually works. */
  detail?: string;
  /** A short Java example. */
  code?: string;
  /** What to NOTICE in the code above. */
  codeCaption?: string;
  /** Trap-proofing: the gotcha tied to this concept and how to never fall for it. */
  trap?: string;
}

export interface Lecture {
  id: string; // "l02"
  code: string; // "L02"
  title: string; // "Elementary Programming"
  examScope: "midterm" | "final";
  topic: Topic;
  oneLiner: string; // short subtitle
  bigPicture: string; // why this lecture matters (1 short paragraph)
  sections: ConceptSection[];
  drills: Question[]; // inline practice — same Question union as exams
  gotchas?: Gotcha[]; // related trap categories (links to gotcha drills)
}
