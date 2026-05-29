// Registry of all learning chapters, in course order.

import type { Lecture } from "./types";
import { midtermLectures } from "./midterm";
import { finalLectures } from "./final";

export const LECTURES: Lecture[] = [...midtermLectures, ...finalLectures];

export function getLecture(id: string): Lecture | undefined {
  return LECTURES.find((l) => l.id === id);
}

/** Previous/next chapter for in-page navigation. */
export function lectureNeighbors(id: string): { prev?: Lecture; next?: Lecture } {
  const i = LECTURES.findIndex((l) => l.id === id);
  if (i < 0) return {};
  return { prev: LECTURES[i - 1], next: LECTURES[i + 1] };
}
