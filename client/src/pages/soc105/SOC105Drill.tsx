// SOC 105 drill: one question at a time with instant, per-option feedback.
// Misses come back a few answers later (see store.ts), so the drill converges on
// exactly the distinctions you haven't nailed yet.
// Keys: 1–5 / A–E answer · Enter, Space or → next.

import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useSearch } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ALL_QUESTIONS, UNITS, type BankQuestion } from "@/components/soc105/units";
import { MASTERED_BOX, optionOrder, pickNext, recordAnswer, tally, useSocStore } from "@/components/soc105/store";
import { ProgressBar, QuestionView, SocHeader, keyToIndex } from "@/components/soc105/ui";
import type { UnitId } from "@/components/soc105/types";
import { cn } from "@/lib/utils";

const MODES = {
  mixed: { label: "Mixed", test: () => true },
  conceptual: { label: "Tell apart", test: (q: BankQuestion) => q.skill === "conceptual" },
  application: { label: "Apply", test: (q: BankQuestion) => q.skill === "application" },
  "wrong-lens": { label: "Does it fit?", test: (q: BankQuestion) => q.trap === "wrong-lens" },
  "false-friends": { label: "False friends", test: (q: BankQuestion) => q.trap === "everyday-meaning" },
  empirical: { label: "Big facts", test: (q: BankQuestion) => q.skill === "empirical" },
  missed: { label: "My misses", test: () => true },
} as const;
type Mode = keyof typeof MODES;

export default function SOC105Drill() {
  const search = new URLSearchParams(useSearch());
  const [, navigate] = useLocation();
  const store = useSocStore();
  const mode: Mode = (search.get("mode") as Mode) in MODES ? (search.get("mode") as Mode) : "mixed";
  const unitParam = search.get("units");
  const units: UnitId[] = unitParam ? (unitParam.split(",") as UnitId[]) : UNITS.map((u) => u.id);

  const setParams = (next: { mode?: Mode; units?: UnitId[] }) => {
    const m = next.mode ?? mode;
    const u = next.units ?? units;
    const all = u.length === UNITS.length;
    navigate(`/soc105/drill?mode=${m}${all ? "" : `&units=${u.join(",")}`}`, { replace: true });
  };

  const pool = useMemo(
    () =>
      ALL_QUESTIONS.filter((q) => units.includes(q.unitId) && MODES[mode].test(q)).filter(
        (q) => mode !== "missed" || (store.items[q.id] && !store.items[q.id].lastRight),
      ),
    // the on-screen question lives in its own state, so a miss you just fixed
    // leaves the pool without vanishing before you read the feedback
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mode, units.join(","), store.items],
  );

  const [current, setCurrent] = useState<{ q: BankQuestion; order: number[] } | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [session, setSession] = useState({ answered: 0, right: 0 });

  const next = useCallback(() => {
    const q = pickNext(pool, current?.q.id);
    setCurrent(q ? { q, order: optionOrder(q) } : null);
    setSelected(null);
  }, [pool, current?.q.id]);

  // new filters → new question
  useEffect(() => {
    const q = pickNext(pool);
    setCurrent(q ? { q, order: optionOrder(q) } : null);
    setSelected(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, units.join(",")]);

  const answer = useCallback(
    (oi: number) => {
      if (!current || selected !== null) return;
      const right = !!current.q.options[oi].correct;
      setSelected(oi);
      recordAnswer(current.q.id, right);
      setSession((s) => ({ answered: s.answered + 1, right: s.right + (right ? 1 : 0) }));
    },
    [current, selected],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || !current) return;
      if (selected === null) {
        const di = keyToIndex(e.key);
        if (di !== null && di < current.order.length) answer(current.order[di]);
      } else if (e.key === "Enter" || e.key === " " || e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, selected, answer, next]);

  const t = tally(pool, store.items);
  const mastered = pool.filter((q) => (store.items[q.id]?.box ?? 0) >= MASTERED_BOX).length;

  return (
    <div className="min-h-screen bg-background">
      <SocHeader title={`Drill · ${MODES[mode].label}`} />
      <main className="container max-w-3xl py-6 space-y-5">
        {/* filters */}
        <div className="space-y-2">
          <div className="flex gap-1.5 overflow-x-auto pb-1 -mx-1 px-1">
            {(Object.keys(MODES) as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => setParams({ mode: m })}
                className={cn(
                  "shrink-0 rounded-full px-3 py-1.5 text-sm font-medium border transition-colors",
                  m === mode ? "bg-foreground text-background border-foreground" : "border-border hover:bg-muted",
                )}
              >
                {MODES[m].label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5 items-center">
            <span className="text-sm text-muted-foreground mr-1">Units:</span>
            {UNITS.map((u) => {
              const on = units.includes(u.id);
              return (
                <button
                  key={u.id}
                  onClick={() => {
                    const nextUnits = on ? units.filter((x) => x !== u.id) : [...units, u.id];
                    if (nextUnits.length) setParams({ units: UNITS.map((x) => x.id).filter((id) => nextUnits.includes(id)) });
                  }}
                  className={cn(
                    "rounded-full px-3 py-1 text-sm border transition-colors",
                    on ? "border-[var(--soc-accent)] text-[var(--soc-accent)] font-semibold" : "border-border text-muted-foreground",
                  )}
                  title={u.title}
                >
                  {u.number}. {u.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* progress */}
        <div>
          <div className="flex justify-between text-sm text-muted-foreground mb-1">
            <span>
              {mastered}/{pool.length} mastered in this set
            </span>
            <span>
              This session: {session.right}/{session.answered}
              {t.seen ? ` · all-time ${Math.round((100 * t.right) / t.seen)}%` : ""}
            </span>
          </div>
          <ProgressBar value={pool.length ? mastered / pool.length : 0} />
        </div>

        {current ? (
          <Card className="p-5 sm:p-7">
            <QuestionView q={current.q} order={current.order} selected={selected} revealed={selected !== null} onSelect={answer} />
            {selected !== null && (
              <div className="mt-6 flex items-center justify-between gap-3">
                <span className="text-sm text-muted-foreground hidden sm:inline">Enter / Space / → for next</span>
                <Button size="lg" onClick={next} className="gap-2 ml-auto bg-[var(--soc-accent)] hover:opacity-90 text-white">
                  Next <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            )}
            {selected === null && <p className="mt-4 text-sm text-muted-foreground hidden sm:block">Answer with 1–5 or A–E.</p>}
          </Card>
        ) : (
          <Card className="p-8 text-center text-lg">
            {mode === "missed" ? "No misses in these units — nothing to re-drill. 🎉" : "No questions match these filters."}
          </Card>
        )}
      </main>
    </div>
  );
}
