// Thin reactive wrapper over the localStorage trap store. Components read
// `traps` and call mutators; every mutator re-reads so the UI stays in sync.

import { useCallback, useEffect, useState } from "react";
import {
  addTrap as addTrapStore,
  deleteTrap as deleteTrapStore,
  getTraps,
  markTrapResult as markTrapResultStore,
  resetMastery as resetMasteryStore,
  updateTrap as updateTrapStore,
} from "./store";
import type { Trap } from "./types";

export function useTraps() {
  const [traps, setTraps] = useState<Trap[]>([]);

  const refresh = useCallback(() => setTraps(getTraps()), []);

  useEffect(() => {
    refresh();
    // Keep multiple open tabs roughly in sync.
    const onStorage = (e: StorageEvent) => {
      if (e.key === "cse114:traps") refresh();
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [refresh]);

  const addTrap = useCallback(
    (input: Parameters<typeof addTrapStore>[0]) => {
      const t = addTrapStore(input);
      refresh();
      return t;
    },
    [refresh],
  );

  const updateTrap = useCallback(
    (id: string, patch: Partial<Trap>) => {
      updateTrapStore(id, patch);
      refresh();
    },
    [refresh],
  );

  const deleteTrap = useCallback(
    (id: string) => {
      deleteTrapStore(id);
      refresh();
    },
    [refresh],
  );

  const markResult = useCallback(
    (id: string, correct: boolean) => {
      markTrapResultStore(id, correct);
      refresh();
    },
    [refresh],
  );

  const resetMastery = useCallback(
    (id: string) => {
      resetMasteryStore(id);
      refresh();
    },
    [refresh],
  );

  const active = traps.filter((t) => t.masteredAt === null);
  const mastered = traps.filter((t) => t.masteredAt !== null);

  return {
    traps,
    active,
    mastered,
    refresh,
    addTrap,
    updateTrap,
    deleteTrap,
    markResult,
    resetMastery,
  };
}
