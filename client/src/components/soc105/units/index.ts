// Unit registry. To add a unit: write unitN.ts (see ../types.ts) and add it to UNITS.
import type { Concept, ContrastSet, Question, Unit, UnitId } from "../types";
import { unit1 } from "./unit1";
import { unit2 } from "./unit2";
import { unit3 } from "./unit3";
import { unit4 } from "./unit4";

export const UNITS: Unit[] = [unit1, unit2, unit3, unit4];

// The next in-class exam. Update when a new exam is announced.
export const NEXT_EXAM = {
  label: "Exam 1",
  date: "2026-09-24", // Thursday, in class
  units: ["u1", "u2", "u3", "u4"] as UnitId[],
  length: 60,
};

export const UNIT_BY_ID: Record<string, Unit> = Object.fromEntries(UNITS.map((u) => [u.id, u]));

export const CONCEPT_BY_ID: Record<string, Concept> = Object.fromEntries(
  UNITS.flatMap((u) => u.concepts.map((c) => [c.id, c])),
);

// Which unit a concept / question / contrast set belongs to (ids are unit-prefixed).
export function unitOf(id: string): Unit | undefined {
  return UNIT_BY_ID[id.split("-")[0]];
}

export interface BankQuestion extends Question {
  unitId: UnitId;
}

export const ALL_QUESTIONS: BankQuestion[] = UNITS.flatMap((u) =>
  u.questions.map((q) => ({ ...q, unitId: u.id })),
);

export const QUESTION_BY_ID: Record<string, BankQuestion> = Object.fromEntries(
  ALL_QUESTIONS.map((q) => [q.id, q]),
);

export const ALL_CONTRAST_SETS: (ContrastSet & { unitId: UnitId })[] = UNITS.flatMap((u) =>
  u.contrastSets.map((s) => ({ ...s, unitId: u.id })),
);

// Dev-only integrity check: surfaces authoring mistakes in the console instead of
// letting a broken question silently mis-grade.
export function validateUnits(units: Unit[] = UNITS): string[] {
  const problems: string[] = [];
  const ids = new Set<string>();
  const conceptIds = new Set(units.flatMap((u) => u.concepts.map((c) => c.id)));
  const seen = (id: string) => {
    if (ids.has(id)) problems.push(`duplicate id ${id}`);
    ids.add(id);
  };
  for (const u of units) {
    u.concepts.forEach((c) => seen(c.id));
    for (const s of u.contrastSets) {
      seen(s.id);
      s.conceptIds.forEach((c) => conceptIds.has(c) || problems.push(`${s.id}: unknown concept ${c}`));
    }
    for (const f of u.falseFriends) {
      seen(f.id);
      if (!conceptIds.has(f.conceptId)) problems.push(`${f.id}: unknown concept ${f.conceptId}`);
    }
    u.magnitudes.forEach((m) => seen(m.id));
    for (const q of u.questions) {
      seen(q.id);
      const correct = q.options.filter((o) => o.correct).length;
      if (correct !== 1) problems.push(`${q.id}: ${correct} correct options`);
      if (q.format === "tf" && (q.options.length !== 2 || q.options[0].text !== "True" || q.options[1].text !== "False"))
        problems.push(`${q.id}: tf options must be [True, False]`);
      q.options.forEach((o, i) => o.why.trim() || problems.push(`${q.id}: option ${i} has no why`));
      q.conceptIds.forEach((c) => conceptIds.has(c) || problems.push(`${q.id}: unknown concept ${c}`));
    }
  }
  return problems;
}

if (import.meta.env.DEV) {
  const problems = validateUnits();
  if (problems.length) console.warn("[soc105] content problems:\n" + problems.join("\n"));
}
