// Registry of loadable exam sets. Each is a drop-in ExamSet; adding a new
// transcribed exam is just an import + an entry here (no engine changes).

import type { ExamSet, Question } from "../types";
import { midtermPractice1 } from "./midtermPractice1";
import { midtermPractice2 } from "./midtermPractice2";
import { midtermPractice3 } from "./midtermPractice3";
import { midtermHard1 } from "./midtermHard1";
import { midtermHard2 } from "./midtermHard2";
import { midtermHard3 } from "./midtermHard3";
import { finalPractice1 } from "./finalPractice1";
import { finalPractice2 } from "./finalPractice2";
import { gotchaBank } from "./gotchaBank";

export const EXAM_REGISTRY: ExamSet[] = [
  midtermPractice1,
  midtermPractice2,
  midtermPractice3,
  midtermHard1,
  midtermHard2,
  midtermHard3,
  finalPractice1,
  finalPractice2,
];

export function getExam(id: string): ExamSet | undefined {
  return EXAM_REGISTRY.find((e) => e.id === id);
}

export function examMaxScore(exam: ExamSet): number {
  return exam.questions.reduce((sum, q) => sum + q.points, 0);
}

/** Every authored question across all exams. */
export function allExamQuestions(): Question[] {
  return EXAM_REGISTRY.flatMap((e) => e.questions);
}

/** Exam questions + the dedicated gotcha bank — the pool for gotcha-filtered drills. */
export function allDrillQuestions(): Question[] {
  return [...allExamQuestions(), ...gotchaBank];
}
