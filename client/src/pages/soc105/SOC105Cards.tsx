// SOC 105 flashcards. Generated from each unit's data (concepts, contrast sets,
// false friends, big facts), so every unit gets the same deck with no extra
// authoring. Concept cards go both ways — term → idea and description → term —
// because his conceptual questions ask in both directions.
// Keys: Space / Enter flip · 1 or ← again · 2 or → got it.

import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useSearch } from "wouter";
import { Check, RotateCcw, Undo2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UNITS, unitOf } from "@/components/soc105/units";
import { useSelectedExam } from "@/components/soc105/store";
import { Pill, ProgressBar, SocHeader } from "@/components/soc105/ui";
import type { Tier, UnitId } from "@/components/soc105/types";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------- deck

type Deck = "concepts" | "reverse" | "contrasts" | "friends" | "facts";

const DECKS: { id: Deck; label: string; color: string }[] = [
  { id: "concepts", label: "Term → idea", color: "var(--soc-accent)" },
  { id: "reverse", label: "Idea → term", color: "var(--soc-conceptual)" },
  { id: "contrasts", label: "Tell apart", color: "var(--soc-conceptual)" },
  { id: "friends", label: "False friends", color: "var(--soc-false-friend)" },
  { id: "facts", label: "Big facts", color: "var(--soc-empirical)" },
];

interface FlashCard {
  id: string;
  deck: Deck;
  unitId: UnitId;
  tier: Tier;
  anchor: string; // guide link target
  front: { kicker: string; main: string; sub?: string };
  back: { label: string; text: string; tone?: "strike" | "muted" }[];
}

// Hide the term inside its own definition so "idea → term" cards aren't given away.
function maskTerm(text: string, term: string) {
  const words = term
    .replace(/\(.*?\)/g, "")
    .replace(/[“”"]/g, "")
    .split(/\s+|\//)
    .map((w) => w.replace(/[^A-Za-zÀ-ÿ-]/g, ""))
    .filter((w) => w.length > 3);
  return words.reduce((t, w) => t.replace(new RegExp(`\\b${w}\\w*`, "gi"), "____"), text);
}

function buildCards(unitIds: UnitId[]): FlashCard[] {
  const cards: FlashCard[] = [];
  for (const u of UNITS.filter((x) => unitIds.includes(x.id))) {
    for (const c of u.concepts) {
      const back = [
        { label: "Plain idea", text: c.plainIdea },
        { label: "Course definition", text: c.courseDefinition },
        { label: "Fresh example", text: c.freshExample },
        ...(c.notToConfuse ? [{ label: "Don’t confuse", text: c.notToConfuse, tone: "muted" as const }] : []),
      ];
      cards.push({
        id: `${c.id}:fwd`,
        deck: "concepts",
        unitId: u.id,
        tier: c.tier,
        anchor: c.id,
        front: { kicker: `Unit ${u.number} · what is it?`, main: c.term, sub: c.thinker },
        back,
      });
      cards.push({
        id: `${c.id}:rev`,
        deck: "reverse",
        unitId: u.id,
        tier: c.tier,
        anchor: c.id,
        front: { kicker: `Unit ${u.number} · name the concept`, main: maskTerm(c.courseDefinition, c.term) },
        back: [
          { label: "Concept", text: c.term + (c.thinker ? ` — ${c.thinker}` : "") },
          { label: "Plain idea", text: c.plainIdea },
          ...(c.notToConfuse ? [{ label: "Don’t confuse", text: c.notToConfuse, tone: "muted" as const }] : []),
        ],
      });
    }
    for (const s of u.contrastSets) {
      cards.push({
        id: `${s.id}:cs`,
        deck: "contrasts",
        unitId: u.id,
        tier: 1,
        anchor: "",
        front: { kicker: `Unit ${u.number} · what separates them?`, main: s.title },
        back: [
          { label: "What separates them", text: s.axis },
          { label: "Quick test", text: s.test },
        ],
      });
    }
    for (const f of u.falseFriends) {
      cards.push({
        id: `${f.id}:ff`,
        deck: "friends",
        unitId: u.id,
        tier: 1,
        anchor: f.conceptId,
        front: { kicker: `Unit ${u.number} · in SOC 105, not everyday talk`, main: `“${f.term}”`, sub: "What does it mean in the course?" },
        back: [
          { label: "Everyday (the trap)", text: f.everyday, tone: "strike" },
          { label: "In SOC 105", text: f.course },
          { label: "Exam trap", text: f.trap, tone: "muted" },
        ],
      });
    }
    for (const m of u.magnitudes) {
      cards.push({
        id: `${m.id}:mag`,
        deck: "facts",
        unitId: u.id,
        tier: 2,
        anchor: "",
        front: { kicker: `Unit ${u.number} · rough size — guess first`, main: m.prompt },
        back: [
          { label: "Answer", text: m.answer },
          { label: "Why it matters", text: m.whyItMatters },
        ],
      });
    }
  }
  return cards;
}

// ---------------------------------------------------------------- known-card storage
// Separate key from the drill/exam progress so flashcards can never disturb it.

const CARDS_KEY = "soc105:cards:v1";

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

// Tier 1 cards first (shuffled within tier), so a short session hits the most testable material.
function orderQueue(cards: FlashCard[]) {
  return ([1, 2, 3] as Tier[]).flatMap((t) => shuffle(cards.filter((c) => c.tier === t)));
}

// ---------------------------------------------------------------- page

export default function SOC105Cards() {
  const search = new URLSearchParams(useSearch());
  const [, navigate] = useLocation();
  const { scopeUnits } = useSelectedExam();
  const parsed = (search.get("units") ?? "").split(",").filter((id) => UNITS.some((u) => u.id === id)) as UnitId[];
  const units = parsed.length ? parsed : scopeUnits;
  const deck: Deck = DECKS.some((d) => d.id === search.get("deck")) ? (search.get("deck") as Deck) : "concepts";
  const tier1Only = search.get("tier1") === "1";

  const setParams = (next: { units?: UnitId[]; deck?: Deck; tier1?: boolean }) => {
    const u = next.units ?? units;
    const d = next.deck ?? deck;
    const t = next.tier1 ?? tier1Only;
    navigate(`/soc105/cards?units=${u.join(",")}&deck=${d}${t ? "&tier1=1" : ""}`, { replace: true });
  };

  const [known, setKnown] = useState<Set<string>>(loadKnown);
  const all = useMemo(() => buildCards(units), [units.join(",")]); // eslint-disable-line react-hooks/exhaustive-deps
  const inDeck = useMemo(() => all.filter((c) => c.deck === deck && (!tier1Only || c.tier === 1)), [all, deck, tier1Only]);

  const [queue, setQueue] = useState<FlashCard[]>([]);
  const [flipped, setFlipped] = useState(false);
  const [history, setHistory] = useState<{ card: FlashCard; wasKnown: boolean }[]>([]);
  const [includeKnown, setIncludeKnown] = useState(false);
  const [round, setRound] = useState(0);

  // new deck / filters → fresh queue of the cards you don't know yet
  useEffect(() => {
    const k = loadKnown();
    setQueue(orderQueue(inDeck.filter((c) => includeKnown || !k.has(c.id))));
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
    setQueue(orderQueue(inDeck));
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
          <div className="flex gap-1.5 overflow-x-auto pb-1 -mx-1 px-1">
            {DECKS.map((d) => (
              <button
                key={d.id}
                onClick={() => setParams({ deck: d.id })}
                className={cn(
                  "shrink-0 rounded-full px-3 py-1.5 text-sm font-medium border transition-colors",
                  d.id === deck ? "bg-foreground text-background border-foreground" : "border-border hover:bg-muted",
                )}
              >
                {d.label}
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
                    const next = on ? units.filter((x) => x !== u.id) : [...units, u.id];
                    if (next.length) setParams({ units: UNITS.map((x) => x.id).filter((id) => next.includes(id)) });
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
              <input type="checkbox" className="accent-[var(--soc-accent)]" checked={tier1Only} onChange={(e) => setParams({ tier1: e.target.checked })} />
              Tier 1 only
            </label>
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
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-sm text-muted-foreground">{current.front.kicker}</span>
                  {current.deck !== "contrasts" && current.deck !== "facts" && (
                    <Pill color={current.tier === 1 ? "var(--soc-accent)" : "var(--muted-foreground)"}>Tier {current.tier}</Pill>
                  )}
                </div>
                <div className={cn("font-bold leading-snug", current.deck === "reverse" || current.deck === "facts" ? "text-lg sm:text-xl" : "text-2xl sm:text-3xl")}>
                  {current.front.main}
                </div>
                {current.front.sub && <div className="text-muted-foreground mt-1">{current.front.sub}</div>}

                {flipped ? (
                  <div className="mt-5 pt-5 border-t border-border space-y-3">
                    {current.back.map((b) => (
                      <div key={b.label}>
                        <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{b.label}</div>
                        <div
                          className={cn(
                            "text-[16px] sm:text-[17px] leading-relaxed",
                            b.tone === "strike" && "line-through decoration-[var(--soc-false-friend)]/60 text-muted-foreground",
                            b.tone === "muted" && "text-muted-foreground",
                          )}
                        >
                          {b.text}
                        </div>
                      </div>
                    ))}
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
