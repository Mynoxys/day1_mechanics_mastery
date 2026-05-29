// Reactive wrapper around the schedule store + engine. Components subscribe
// here; every mutator re-reads state so the UI stays in sync (mirrors the
// useTraps pattern that already works elsewhere in this app).

import { useCallback, useEffect, useMemo, useState } from "react";
import { useTraps } from "../useTraps";
import {
  buildSchedule,
  daysUntilNextExam,
  planForDate,
  type DayPlan,
  type Task,
} from "./engine";
import { todayISO } from "./date";
import {
  ESTIMATES,
  getScheduleState,
  markChapterStudied,
  recordRevisitScore,
  resetSchedule,
  setCompletion,
  updateState,
} from "./store";
import { type ScheduleState } from "./types";

const KEY = "cse114:schedule";

export function useSchedule() {
  const [state, setState] = useState<ScheduleState>(() => getScheduleState());
  const { active } = useTraps();
  const today = todayISO();

  const refresh = useCallback(() => setState(getScheduleState()), []);

  useEffect(() => {
    refresh();
    const onStorage = (e: StorageEvent) => {
      if (e.key === KEY) refresh();
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [refresh]);

  const plans = useMemo<DayPlan[]>(
    () => buildSchedule({ state, today, activeTrapCount: active.length }),
    [state, today, active.length],
  );

  const todayPlan = useMemo(() => planForDate(plans, today), [plans, today]);
  const nextExam = useMemo(() => daysUntilNextExam(today), [today]);

  // ---- Task mutations ----

  const completeTask = useCallback(
    (date: string, task: Task, score?: number) => {
      setCompletion(date, task.id, { date: todayISO(), score });
      // Side effects that feed back into the engine:
      if (task.kind === "study-new" && task.lectureId) {
        markChapterStudied(task.lectureId, date);
      }
      if (task.kind === "revisit" && task.lectureId && task.revisitNumber) {
        if (score !== undefined) {
          recordRevisitScore(task.lectureId, task.revisitNumber, score);
        }
      }
      refresh();
    },
    [refresh],
  );

  const uncompleteTask = useCallback(
    (date: string, task: Task) => {
      setCompletion(date, task.id, null);
      refresh();
    },
    [refresh],
  );

  // ---- Settings mutations ----

  const setPace = useCallback(
    (pace: 1 | 2 | 3) => {
      updateState({ pace });
      refresh();
    },
    [refresh],
  );

  const setRestWeekdays = useCallback(
    (restWeekdays: number[]) => {
      updateState({ restWeekdays });
      refresh();
    },
    [refresh],
  );

  const setMasteredChapters = useCallback(
    (ids: string[]) => {
      updateState({ masteredChapters: ids });
      refresh();
    },
    [refresh],
  );

  const reset = useCallback(
    (opts: { keepStudied?: boolean } = {}) => {
      resetSchedule(opts);
      refresh();
    },
    [refresh],
  );

  return {
    state,
    today,
    plans,
    todayPlan,
    nextExam,
    activeTrapCount: active.length,
    completeTask,
    uncompleteTask,
    setPace,
    setRestWeekdays,
    setMasteredChapters,
    reset,
    estimates: ESTIMATES,
  };
}
