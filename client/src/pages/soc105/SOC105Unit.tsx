// SOC 105 unit guide. Follows the syllabus's own reading advice — "what are the
// three or four main points?" and "how does this unit fit the course?" — then
// teaches concepts as contrast sets (siblings side by side, with the one feature
// that separates them), because that is what his conceptual questions test.

import { useEffect, useState } from "react";
import { Link, useParams } from "wouter";
import { ExternalLink, Eye, Play, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CONCEPT_BY_ID, UNIT_BY_ID, unitOf } from "@/components/soc105/units";
import type { Concept, Magnitude } from "@/components/soc105/types";
import { Pill, SocHeader } from "@/components/soc105/ui";
import NotFound from "@/pages/NotFound";
import { cn } from "@/lib/utils";

function TierPill({ tier }: { tier: 1 | 2 | 3 }) {
  return <Pill color={tier === 1 ? "var(--soc-accent)" : "var(--muted-foreground)"}>Tier {tier}</Pill>;
}

function ConceptCard({ c }: { c: Concept }) {
  return (
    <Card id={c.id} className="p-5 scroll-mt-20">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <h4 className="text-xl font-bold">{c.term}</h4>
        <TierPill tier={c.tier} />
      </div>
      {c.thinker && <div className="-mt-1 mb-2 text-sm text-muted-foreground">{c.thinker}</div>}
      <p className="text-[17px] leading-relaxed">{c.plainIdea}</p>
      <div className="mt-3 rounded-lg bg-muted/60 p-3 text-[15px] leading-relaxed">
        <span className="font-semibold">Course definition: </span>
        {c.courseDefinition}
      </div>
      <p className="mt-3 text-[15px] leading-relaxed">
        <span className="font-semibold" style={{ color: "var(--soc-application)" }}>
          Fresh example:{" "}
        </span>
        {c.freshExample}
      </p>
      {c.notToConfuse && (
        <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">Don’t confuse: </span>
          {c.notToConfuse}
        </p>
      )}
    </Card>
  );
}

function MagnitudeCard({ m }: { m: Magnitude }) {
  const [open, setOpen] = useState(false);
  return (
    <Card className="p-4 border-l-4" style={{ borderLeftColor: "var(--soc-empirical)" }}>
      <p className="text-[17px] font-medium">{m.prompt}</p>
      {open ? (
        <div className="mt-2 text-[15px] leading-relaxed">
          <div className="font-bold" style={{ color: "var(--soc-empirical)" }}>
            {m.answer}
          </div>
          <div className="text-muted-foreground mt-1">{m.whyItMatters}</div>
        </div>
      ) : (
        <Button variant="ghost" size="sm" className="mt-1 gap-2 -ml-2" onClick={() => setOpen(true)}>
          <Eye className="w-4 h-4" /> Guess first, then reveal
        </Button>
      )}
    </Card>
  );
}

export default function SOC105Unit() {
  const { unitId } = useParams<{ unitId: string }>();
  const unit = UNIT_BY_ID[unitId];
  const [tier1Only, setTier1Only] = useState(false);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) document.getElementById(hash)?.scrollIntoView({ block: "start" });
    else window.scrollTo(0, 0);
  }, [unitId]);

  if (!unit) return <NotFound />;
  const concepts = unit.concepts.filter((c) => !tier1Only || c.tier === 1);

  return (
    <div className="min-h-screen bg-background">
      <SocHeader title={`Unit ${unit.number} · ${unit.title}`} />
      <main className="container max-w-3xl py-8 space-y-12">
        <section>
          <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Unit {unit.number}</div>
          <h2 className="text-3xl sm:text-4xl font-bold">{unit.title}</h2>
          <p className="text-lg text-muted-foreground mt-1">{unit.subtitle}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            <Link href={`/soc105/drill?units=${unit.id}`}>
              <Button className="gap-2 bg-[var(--soc-accent)] hover:opacity-90 text-white">
                <Shuffle className="w-4 h-4" /> Drill this unit
              </Button>
            </Link>
            <Link href={`/soc105/exam?units=${unit.id}&n=20`}>
              <Button variant="outline" className="gap-2">
                <Play className="w-4 h-4" /> 20-question exam
              </Button>
            </Link>
            <a href={unit.sourceUrl} target="_blank" rel="noreferrer">
              <Button variant="ghost" className="gap-2">
                <ExternalLink className="w-4 h-4" /> Original notes
              </Button>
            </a>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-1">The big points</h3>
          <p className="text-muted-foreground mb-4">The syllabus says to ask: what are the three or four main points of this unit?</p>
          <ol className="space-y-3">
            {unit.bigPoints.map((b, k) => (
              <li key={k} className="flex gap-3">
                <span className="shrink-0 w-8 h-8 rounded-full grid place-items-center font-bold text-white bg-[var(--soc-accent)]">{k + 1}</span>
                <div>
                  <div className="text-lg font-semibold leading-snug">{b.point}</div>
                  <div className="text-[15px] text-muted-foreground leading-relaxed mt-0.5">{b.detail}</div>
                </div>
              </li>
            ))}
          </ol>
          <Card className="p-4 mt-5 bg-muted/40">
            <div className="font-semibold mb-1">How it fits the course</div>
            {unit.connections.map((c, k) => (
              <p key={k} className="text-[15px] leading-relaxed mt-1">
                {c}
              </p>
            ))}
          </Card>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-1" style={{ color: "var(--soc-conceptual)" }}>
            Tell them apart
          </h3>
          <p className="text-muted-foreground mb-4">
            His distractors are the neighbours in these sets. Learn the one feature that separates them and the quick test.
          </p>
          <div className="space-y-4">
            {unit.contrastSets.map((s) => (
              <Card key={s.id} className="p-5 border-t-4" style={{ borderTopColor: "var(--soc-conceptual)" }}>
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-lg font-bold">{s.title}</h4>
                  {s.crossUnit && <Pill color="var(--soc-false-friend)">Commonly confused across sections</Pill>}
                </div>
                <div className="grid sm:grid-cols-2 gap-2 mt-3">
                  {s.conceptIds.map((id) => {
                    const c = CONCEPT_BY_ID[id];
                    const u = unitOf(id);
                    if (!c || !u) return null;
                    const tile = (
                      <div className={cn("rounded-lg border p-3 h-full text-left hover:bg-muted/50 cursor-pointer", u.id === unit.id ? "border-border" : "border-dashed border-border")}>
                        <div className="font-semibold">
                          {c.term}
                          {u.id !== unit.id && <span className="text-xs text-muted-foreground font-normal"> · Unit {u.number}</span>}
                        </div>
                        <div className="text-sm text-muted-foreground leading-snug mt-0.5">{c.plainIdea}</div>
                      </div>
                    );
                    return u.id === unit.id ? (
                      <button
                        key={id}
                        type="button"
                        onClick={() => {
                          setTier1Only(false);
                          requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }));
                        }}
                      >
                        {tile}
                      </button>
                    ) : (
                      <Link key={id} href={`/soc105/unit/${u.id}#${id}`}>
                        {tile}
                      </Link>
                    );
                  })}
                </div>
                <p className="mt-3 text-[15px] leading-relaxed">
                  <strong>What separates them:</strong> {s.axis}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed rounded-lg p-3" style={{ backgroundColor: "color-mix(in oklab, var(--soc-conceptual) 8%, transparent)" }}>
                  <strong>Quick test:</strong> {s.test}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="flex flex-wrap items-end justify-between gap-2 mb-4">
            <h3 className="text-2xl font-bold">Concepts</h3>
            <button
              onClick={() => setTier1Only((t) => !t)}
              className={cn(
                "rounded-full px-3 py-1 text-sm border",
                tier1Only ? "border-[var(--soc-accent)] text-[var(--soc-accent)] font-semibold" : "border-border text-muted-foreground",
              )}
            >
              {tier1Only ? "Showing Tier 1 only" : "Show Tier 1 only"}
            </button>
          </div>
          <div className="space-y-4">
            {concepts.map((c) => (
              <ConceptCard key={c.id} c={c} />
            ))}
          </div>
        </section>

        {unit.falseFriends.length > 0 && (
          <section>
            <h3 className="text-2xl font-bold mb-1" style={{ color: "var(--soc-false-friend)" }}>
              False friends
            </h3>
            <p className="text-muted-foreground mb-4">
              The syllabus warns the right answer is “obvious” only if you’ve studied — not common sense. These words mean something
              different in the course than in everyday talk.
            </p>
            <div className="space-y-3">
              {unit.falseFriends.map((f) => (
                <Card key={f.id} className="p-4 border-l-4" style={{ borderLeftColor: "var(--soc-false-friend)" }}>
                  <div className="text-lg font-bold">“{f.term}”</div>
                  <div className="grid sm:grid-cols-2 gap-3 mt-2 text-[15px] leading-relaxed">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Everyday</div>
                      <div className="line-through decoration-[var(--soc-false-friend)]/60">{f.everyday}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wide" style={{ color: "var(--soc-false-friend)" }}>
                        In SOC 105
                      </div>
                      <div>{f.course}</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong className="text-foreground">The exam trap:</strong> {f.trap}
                  </p>
                </Card>
              ))}
            </div>
          </section>
        )}

        {unit.magnitudes.length > 0 && (
          <section>
            <h3 className="text-2xl font-bold mb-1" style={{ color: "var(--soc-empirical)" }}>
              Big facts
            </h3>
            <p className="text-muted-foreground mb-4">Rough size, plus why it matters. He never asks for the exact figure.</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {unit.magnitudes.map((m) => (
                <MagnitudeCard key={m.id} m={m} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
