// SOC 105 exam-trainer data model.
// Content is plain data (no JSX), one file per unit in ./units, so a new unit is
// "write unitN.ts + add one line to units/index.ts". Built around the three
// question classes in the professor's "How I test" syllabus section:
// conceptual (tell siblings apart), application (new scenarios, incl. when a
// concept does NOT fit), and "big" empirical (orders of magnitude + why it matters).

export type UnitId = `u${number}`;

export type Skill = "conceptual" | "application" | "empirical";

export const SKILL_LABELS: Record<Skill, string> = {
  conceptual: "Conceptual",
  application: "Application",
  empirical: "Big empirical",
};

// How the question tries to catch you. Drives drill filters and the review hint.
export type Trap =
  | "sibling" // distractors are neighbouring concepts from the same contrast set
  | "everyday-meaning" // casual meaning of the word points to the wrong answer
  | "misattribution" // idea credited to the wrong thinker
  | "reversal" // claim from the notes flipped
  | "wrong-lens" // a concept that does NOT fit the situation
  | "magnitude" // order-of-magnitude options spread far apart
  | "not-all"; // "Which is NOT..." with an "all of these" option

export const TRAP_LABELS: Record<Trap, string> = {
  sibling: "Sibling concepts",
  "everyday-meaning": "Everyday vs. course meaning",
  misattribution: "Wrong thinker",
  reversal: "Reversed claim",
  "wrong-lens": "Wrong lens",
  magnitude: "Order of magnitude",
  "not-all": "Which is NOT…",
};

// 1 = bold term with a margin definition that recurs across units or is set
//     against a sibling (the reading/slides/lecture overlap proxy)
// 2 = bold term with a margin definition
// 3 = idea that only appears in the running text
export type Tier = 1 | 2 | 3;

export interface Concept {
  id: string; // globally unique, prefixed with the unit id: "u2-emergence"
  term: string;
  tier: Tier;
  thinker?: string; // who the notes attach it to, if anyone
  plainIdea: string; // the idea in everyday words, first
  courseDefinition: string; // the notes' definition (quoted or near-quoted)
  freshExample: string; // a NEW everyday example, never the notes' own
  notToConfuse?: string; // the sibling it gets mistaken for, and the tell
}

export interface ContrastSet {
  id: string;
  title: string; // "Realism vs. empiricism"
  conceptIds: string[]; // may reference concepts from earlier units
  axis: string; // the one thing that separates the members
  test: string; // one-line question you can ask to tell them apart
  crossUnit?: boolean; // pairs students confuse ACROSS sections/units
}

export interface FalseFriend {
  id: string;
  conceptId: string;
  term: string;
  everyday: string; // what the word means in casual speech
  course: string; // what it means in SOC 105
  trap: string; // how the everyday reading gets you the wrong exam answer
}

export interface Magnitude {
  id: string;
  prompt: string; // "About how old is modern science?"
  answer: string; // "About 500 years"
  whyItMatters: string;
}

export interface Option {
  text: string;
  correct?: true;
  why: string; // why it's right, or why it's tempting but wrong
}

export interface Question {
  id: string;
  skill: Skill;
  format: "mc" | "tf";
  trap?: Trap;
  tier: Tier;
  conceptIds: string[];
  stem: string;
  options: Option[]; // tf: exactly [True, False]
  fixedOrder?: true; // don't shuffle (magnitude ladders, "all of these" options)
}

export interface Unit {
  id: UnitId;
  number: number;
  title: string;
  subtitle: string;
  sourceUrl: string;
  bigPoints: { point: string; detail: string }[];
  connections: string[]; // how the unit fits the course (before / after)
  concepts: Concept[];
  contrastSets: ContrastSet[];
  falseFriends: FalseFriend[];
  magnitudes: Magnitude[];
  questions: Question[];
}
