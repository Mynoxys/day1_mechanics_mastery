// SOC 105 flashcards. One short, hand-picked deck per unit (see
// components/soc105/cards.ts): sibling concepts share a card and big facts are
// grouped, so a unit is ~10–20 cards instead of one card per term.
// Units without a hand-picked deck fall back to their "tell apart" sets.
// Keys: Space / Enter flip · 1 or ← again · 2 or → got it.

import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useSearch } from "wouter";
import { Check, RotateCcw, Undo2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UNITS, unitOf } from "@/components/soc105/units";
import { CURATED_CARDS, type StudyCard } from "@/components/soc105/cards";
import { useSelectedExam } from "@/components/soc105/store";
import { ProgressBar, SocHeader } from "@/components/soc105/ui";
import type { UnitId } from "@/components/soc105/types";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------- deck

function buildCards(unitIds: UnitId[]): StudyCard[] {
  const cards: StudyCard[] = [];
  for (const u of UNITS.filter((x) => unitIds.includes(x.id))) {
    const curated = CURATED_CARDS.filter((c) => c.unitId === u.id);
    if (curated.length) {
      cards.push(...curated);
      continue;
    }
    for (const s of u.contrastSets.filter((x) => !x.crossUnit)) {
      cards.push({
        id: `${s.id}:cs`,
        unitId: u.id,
        anchor: s.conceptIds.find((id) => id.startsWith(`${u.id}-`)),
        front: s.title,
        back: [s.axis],
        test: s.test,
      });
    }
  }
  return cards;
}

// ---------------------------------------------------------------- known-card storage
// Separate key from the drill/exam progress so flashcards can never disturb it.

const CARDS_KEY = "soc105:cards:v2";

function loadKnown(): Set<string> {
  try {
    const raw = localStorage.getItem(CARDS_KEY);
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
}

function saveKnown(known: Set<string>) {
  try {
    localStorage.setItem(CARDS_KEY, JSON.stringify(Array.from(known)));
  } catch {
    // private mode — keep working in memory
  }
}

function shuffle<T>(xs: T[]): T[] {
  const a = [...xs];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---------------------------------------------------------------- page

export default function SOC105Cards() {
  const search = new URLSearchParams(useSearch());
  const [, navigate] = useLocation();
  const { scopeUnits } = useSelectedExam();
  const parsed = (search.get("units") ?? "").split(",").filter((id) => UNITS.some((u) => u.id === id)) as UnitId[];
  const units = parsed.length ? parsed : scopeUnits;

  const setUnits = (u: UnitId[]) => navigate(`/soc105/cards?units=${u.join(",")}`, { replace: true });

  const [known, setKnown] = useState<Set<string>>(loadKnown);
  const all = useMemo(() => buildCards(units), [units.join(",")]); // eslint-disable-line react-hooks/exhaustive-deps
  const inDeck = all;

  const [queue, setQueue] = useState<StudyCard[]>([]);
  const [flipped, setFlipped] = useState(false);
  const [history, setHistory] = useState<{ card: StudyCard; wasKnown: boolean }[]>([]);
  const [includeKnown, setIncludeKnown] = useState(false);
  const [round, setRound] = useState(0);

  // new deck / filters → fresh queue of the cards you don't know yet
  useEffect(() => {
    const k = loadKnown();
    setQueue(shuffle(inDeck.filter((c) => includeKnown || !k.has(c.id))));
    setFlipped(false);
    setHistory([]);
  }, [inDeck, includeKnown, round]);

  const current = queue[0];
  const knownInDeck = inDeck.filter((c) => known.has(c.id)).length;

  const mark = (gotIt: boolean) => {
    if (!current) return;
    const nextKnown = new Set(known);
    if (gotIt) nextKnown.add(current.id);
    else nextKnown.delete(current.id);
    setKnown(nextKnown);
    saveKnown(nextKnown);
    setHistory((h) => [...h, { card: current, wasKnown: known.has(current.id) }]);
    setQueue((q) => {
      const rest = q.slice(1);
      if (gotIt) return rest;
      // missed: comes back a few cards later
      const at = Math.min(rest.length, 4);
      return [...rest.slice(0, at), current, ...rest.slice(at)];
    });
    setFlipped(false);
  };

  const undo = () => {
    const last = history[history.length - 1];
    if (!last) return;
    const nextKnown = new Set(known);
    if (last.wasKnown) nextKnown.add(last.card.id);
    else nextKnown.delete(last.card.id);
    setKnown(nextKnown);
    saveKnown(nextKnown);
    setHistory((h) => h.slice(0, -1));
    setQueue((q) => [last.card, ...q.filter((c) => c.id !== last.card.id)]);
    setFlipped(false);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || !current) return;
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setFlipped((f) => !f);
      } else if (flipped && (e.key === "1" || e.key === "ArrowLeft")) mark(false);
      else if (flipped && (e.key === "2" || e.key === "ArrowRight")) mark(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const resetDeck = () => {
    const nextKnown = new Set(Array.from(known).filter((id) => !inDeck.some((c) => c.id === id)));
    setKnown(nextKnown);
    saveKnown(nextKnown);
    setQueue(shuffle(inDeck));
    setHistory([]);
    setFlipped(false);
  };

  const unit = current ? unitOf(current.unitId + "-") : undefined;

  return (
    <div className="min-h-screen bg-background">
      <SocHeader title="Flashcards" />
      <main className="container max-w-3xl py-6 space-y-5">
        {/* filters */}
        <div className="space-y-2">
          <div className="flex flex-wrap gap-1.5 items-center">
            <span className="text-sm text-muted-foreground mr-1">Units:</span>
            {UNITS.map((u) => {
              const on = units.includes(u.id);
              return (
                <button
                  key={u.id}
                  onClick={() => {
                    const next = on ? units.filter((x) => x !== u.id) : [...units, u.id];
                    if (next.length) setUnits(UNITS.map((x) => x.id).filter((id) => next.includes(id)));
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
          <div className="flex flex-wrap gap-4 items-center text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-[var(--soc-accent)]" checked={includeKnown} onChange={(e) => setIncludeKnown(e.target.checked)} />
              Include cards I already know
            </label>
          </div>
        </div>

        {/* progress */}
        <div>
          <div className="flex justify-between text-sm text-muted-foreground mb-1">
            <span>
              {knownInDeck}/{inDeck.length} known in this deck
            </span>
            <span>{queue.length} left this round</span>
          </div>
          <ProgressBar value={inDeck.length ? knownInDeck / inDeck.length : 0} />
        </div>

        {current ? (
          <>
            <button
              type="button"
              onClick={() => setFlipped((f) => !f)}
              className="block w-full text-left"
              aria-label={flipped ? "Show front of card" : "Flip card"}
            >
              <Card className={cn("p-6 sm:p-8 min-h-[260px] transition-colors", flipped && "bg-muted/30")}>
                <div className="text-sm text-muted-foreground mb-3">Unit {unit?.number}</div>
                <div className="text-xl sm:text-2xl font-bold leading-snug">{current.front}</div>
                {current.frontSub && <div className="text-muted-foreground mt-2 leading-relaxed">{current.frontSub}</div>}

                {flipped ? (
                  <div className="mt-5 pt-5 border-t border-border space-y-2 text-[16px] sm:text-[17px] leading-relaxed">
                    {current.back.map((line, i) =>
                      typeof line === "string" ? (
                        <p key={i}>{line}</p>
                      ) : (
                        <p key={i}>
                          <span className="font-semibold">{line[0]}</span> — {line[1]}
                        </p>
                      ),
                    )}
                    {current.test && (
                      <p className="text-muted-foreground pt-1">
                        <span className="font-semibold">Quick test:</span> {current.test}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="mt-8 text-sm text-muted-foreground">Say your answer out loud, then tap (or Space) to flip.</div>
                )}
              </Card>
            </button>

            {flipped ? (
              <div className="grid grid-cols-2 gap-3">
                <Button size="lg" variant="outline" className="gap-2 border-[var(--soc-wrong)] text-[var(--soc-wrong)]" onClick={() => mark(false)}>
                  <RotateCcw className="w-4 h-4" /> Again <span className="hidden sm:inline text-xs opacity-70">(1)</span>
                </Button>
                <Button size="lg" className="gap-2 bg-[var(--soc-right)] hover:opacity-90 text-white" onClick={() => mark(true)}>
                  <Check className="w-4 h-4" /> Got it <span className="hidden sm:inline text-xs opacity-80">(2)</span>
                </Button>
              </div>
            ) : (
              <Button size="lg" className="w-full bg-[var(--soc-accent)] hover:opacity-90 text-white" onClick={() => setFlipped(true)}>
                Flip
              </Button>
            )}

            <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
              <Button variant="ghost" size="sm" className="gap-1" onClick={undo} disabled={!history.length}>
                <Undo2 className="w-4 h-4" /> Undo
              </Button>
              {unit && current.anchor && (
                <Link href={`/soc105/unit/${unit.id}#${current.anchor}`}>
                  <span className="underline underline-offset-2 decoration-dotted cursor-pointer text-muted-foreground hover:text-[var(--soc-accent)]">
                    Open in the Unit {unit.number} guide
                  </span>
                </Link>
              )}
            </div>
          </>
        ) : (
          <Card className="p-8 text-center space-y-4">
            <div className="text-lg">
              {!inDeck.length ? "No cards match these filters." : knownInDeck === inDeck.length ? "You know every card in this deck. 🎉" : "Round done."}
            </div>
            {inDeck.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setIncludeKnown(true);
                    setRound((r) => r + 1);
                  }}
                >
                  Go through the whole deck again
                </Button>
                <Button variant="ghost" onClick={resetDeck}>
                  Reset this deck
                </Button>
                <Link href={`/soc105/drill?units=${units.join(",")}`}>
                  <Button className="bg-[var(--soc-accent)] hover:opacity-90 text-white">Drill these units</Button>
                </Link>
              </div>
            )}
          </Card>
        )}
      </main>
    </div>
  );
}
