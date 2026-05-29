// CSE 114 exam-trainer data model.
// Questions are authored as plain data (no JSX) so they can be stored in
// localStorage as trap "snapshots" and round-tripped through JSON export/import.

export type Topic =
  | "types-operators"
  | "control-flow"
  | "methods"
  | "arrays"
  | "char-strings"
  | "oop-basics"
  | "inheritance"
  | "polymorphism"
  | "exceptions"
  | "abstract-interfaces"
  | "recursion"
  | "enums";

export const TOPIC_LABELS: Record<Topic, string> = {
  "types-operators": "Types & Operators",
  "control-flow": "Control Flow",
  methods: "Methods",
  arrays: "Arrays",
  "char-strings": "Char & Strings",
  "oop-basics": "OOP Basics",
  inheritance: "Inheritance",
  polymorphism: "Polymorphism",
  exceptions: "Exceptions",
  "abstract-interfaces": "Abstract & Interfaces",
  recursion: "Recursion",
  enums: "Enums",
};

// The classic Java exam gotchas, used as trap categories / drill filters.
export type Gotcha =
  | "integer-division"
  | "type-promotion"
  | "char-arithmetic"
  | "cast-truncation"
  | "operator-precedence"
  | "short-circuit"
  | "eq-vs-equals"
  | "ternary-type"
  | "string-concat-ltr"
  | "modulo-negatives"
  | "pre-post-increment"
  | "array-oob"
  | "uninitialized-local"
  | "overloading"
  | "reference-vs-value"
  | "method-dispatch"
  | "static-vs-instance"
  | "super-this"
  | "exception-order";

export const GOTCHA_LABELS: Record<Gotcha, string> = {
  "integer-division": "Integer division",
  "type-promotion": "Type promotion",
  "char-arithmetic": "Char arithmetic",
  "cast-truncation": "Cast truncation",
  "operator-precedence": "Operator precedence",
  "short-circuit": "Short-circuit eval",
  "eq-vs-equals": "== vs .equals()",
  "ternary-type": "Ternary type",
  "string-concat-ltr": "String concat L→R",
  "modulo-negatives": "Modulo w/ negatives",
  "pre-post-increment": "Pre/post increment",
  "array-oob": "Array index OOB",
  "uninitialized-local": "Uninitialized local",
  overloading: "Method overloading",
  "reference-vs-value": "Reference vs value",
  "method-dispatch": "Method dispatch",
  "static-vs-instance": "Static vs instance",
  "super-this": "super & this",
  "exception-order": "Exception/catch order",
};

export type QuestionType = "mc" | "multi" | "output" | "trace" | "short" | "code";

interface BaseQuestion {
  id: string; // stable, e.g. "mp1-q6"
  type: QuestionType;
  topic: Topic;
  gotchas?: Gotcha[];
  difficulty: 1 | 2 | 3;
  points: number;
  prompt: string; // plain text; supports \n. Inline code as `backticks`.
  code?: string; // optional Java snippet shown in a monospace block
  explanation: string; // why the answer is what it is (plain-language first)
  source?: string; // "Midterm Practice 1" | "Gotcha Bank" | "generated"
}

/** Single correct choice (output-prediction or concept MC). */
export interface MCQuestion extends BaseQuestion {
  type: "mc";
  choices: string[];
  correctIndex: number;
}

/** Multiple correct choices ("select all that apply"). */
export interface MultiQuestion extends BaseQuestion {
  type: "multi";
  choices: string[];
  correctIndices: number[];
}

/** Predict exact printed output. Graded by normalized string compare. */
export interface OutputQuestion extends BaseQuestion {
  type: "output";
  answer: string;
  acceptable?: string[];
}

/** Single value / word / "ERROR". Graded case-insensitively. */
export interface ShortQuestion extends BaseQuestion {
  type: "short";
  answer: string;
  acceptable?: string[];
}

/**
 * A set of labeled fields the student fills in — variable values at end of a
 * trace, or the result of each line in an assignment grid. Graded per field
 * (whitespace-insensitive). `partialCredit` lets the sim award per-field points.
 */
export interface TraceQuestion extends BaseQuestion {
  type: "trace";
  fields: { label: string; answer: string; acceptable?: string[] }[];
  partialCredit?: boolean;
}

/** Free-form code writing. Self-graded against the reference after submit. */
export interface CodeQuestion extends BaseQuestion {
  type: "code";
  starter?: string;
  referenceSolution: string;
  rubric?: string[];
}

export type Question =
  | MCQuestion
  | MultiQuestion
  | OutputQuestion
  | TraceQuestion
  | ShortQuestion
  | CodeQuestion;

export interface ExamSet {
  id: string; // "midterm-practice-1"
  title: string; // "Midterm Practice 1"
  examType: "midterm" | "final";
  durationMinutes: number;
  blurb?: string;
  questions: Question[];
}

// ---- Persisted in localStorage ----

export interface Attempt {
  id: string;
  questionId: string;
  examSetId?: string;
  myAnswer: string; // serialized answer (human-readable)
  correct: boolean;
  selfGraded?: boolean; // true for code questions the student marked themselves
  timeSpentSec: number;
  timestamp: number;
  mode: "sim" | "drill";
}

export interface Trap {
  id: string;
  questionId: string;
  questionSnapshot: Question; // copy, so the trap survives bank changes
  myWrongAnswer: string;
  ruleViolated: string; // one-line note: what rule did I violate?
  topic: Topic;
  gotchas: Gotcha[];
  createdAt: number;
  masteryStreak: number; // consecutive correct in drill
  masteredAt: number | null; // set once streak hits MASTERY_TARGET
}

export interface ExamSession {
  id: string;
  examSetId: string;
  examTitle: string;
  mode: "sim" | "drill";
  examType: "midterm" | "final" | "topic";
  startedAt: number;
  endedAt: number | null;
  score: number;
  maxScore: number;
  perQuestion: {
    questionId: string;
    correct: boolean;
    timeSpentSec: number;
    myAnswer: string;
  }[];
}

export const MASTERY_TARGET = 3; // consecutive correct drills to "master" a trap
