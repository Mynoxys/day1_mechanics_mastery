// SOC 105 hub. Organised around the three question classes in the professor's
// "How I test" syllabus section, not around a flashcard deck: each class gets
// its own drill, and the full mock matches the real 60-question in-class exam.

import { useState } from "react";
import { Link } from "wouter";
import { BookOpen, CalendarClock, Crosshair, Layers, Play, RotateCcw, Scale, Shuffle, Sparkles, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ALL_QUESTIONS, NEXT_EXAM, UNITS } from "@/components/soc105/units";
import { examScore, missedQuestions, resetProgress, tally, useSocStore } from "@/components/soc105/store";
import { Pill, ProgressBar, SKILL_COLOR, SocHeader } from "@/components/soc105/ui";
import type { Skill } from "@/components/soc105/types";

function daysUntil(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const target = new Date(y, m - 1, d);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.round((target.getTime() - today.getTime()) / 86_400_000);
}

const SKILLS: { skill: Skill; title: string; he: string; train: string; mode: string }[] = [
  {
    skill: "conceptual",
    title: "Conceptual",
    he: "Identify a concept from a description (and vice versa), and tell it apart from its closest neighbours.",
    train: "Concepts are taught in contrast sets — siblings side by side with the one feature that separates them.",
    mode: "conceptual",
  },
  {
    skill: "application",
    title: "Application",
    he: "Does this concept fit this phenomenon? Scenarios are new — rarely the lecture or notes examples.",
    train: "Every scenario here is fresh (never the notes’ own examples), including “wrong lens” cases where a concept does not fit.",
    mode: "application",
  },
  {
    skill: "empirical",
    title: "Big empirical",
    he: "Orders of magnitude and why a fact matters — “very few / about half / almost all”, never the exact figure.",
    train: "Magnitude ladders with far-apart options, each explained by why the fact matters for a concept.",
    mode: "empirical",
  },
];

export default function SOC105Hub() {
  const store = useSocStore();
  const [confirmReset, setConfirmReset] = useState(false);
  const days = daysUntil(NEXT_EXAM.date);
  const examPool = ALL_QUESTIONS.filter((q) => NEXT_EXAM.units.includes(q.unitId));
  const overall = tally(examPool, store.items);
  const misses = missedQuestions(ALL_QUESTIONS, store.items).length;
  const unitRange = NEXT_EXAM.units.map((u) => u.slice(1)).join(", ");

  const drillModes = [
    { mode: "mixed", label: "Mixed drill", desc: "Everything, misses come back sooner", icon: Shuffle, color: "var(--soc-accent)" },
    { mode: "conceptual", label: "Tell them apart", desc: "Conceptual — sibling concepts", icon: Layers, color: "var(--soc-conceptual)" },
    { mode: "application", label: "Spot it in the wild", desc: "Application — fresh scenarios", icon: Crosshair, color: "var(--soc-application)" },
    { mode: "wrong-lens", label: "Does it fit?", desc: "When a concept is the wrong lens", icon: Scale, color: "var(--soc-application)" },
    { mode: "false-friends", label: "False friends", desc: "Everyday vs. course meaning", icon: Sparkles, color: "var(--soc-false-friend)" },
    { mode: "empirical", label: "Big facts", desc: "Orders of magnitude + why", icon: CalendarClock, color: "var(--soc-empirical)" },
    { mode: "missed", label: `My misses (${misses})`, desc: "Only questions you last got wrong", icon: XCircle, color: "var(--soc-wrong)" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SocHeader title="SOC 105 · Intro to Sociology" back="/" backLabel="Home" />

      <main className="container max-w-5xl py-8 space-y-12">
        {/* Next exam */}
        <section>
          <Card className="p-5 sm:p-7 border-l-4" style={{ borderLeftColor: "var(--soc-accent)" }}>
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  {NEXT_EXAM.label} · units {unitRange} · {NEXT_EXAM.length} MC & T/F · in class
                </div>
                <div className="text-3xl sm:text-4xl font-bold mt-1">
                  {days > 1 ? `${days} days left` : days === 1 ? "Tomorrow" : days === 0 ? "Today" : "Done"}
                </div>
                <div className="mt-3 max-w-md">
                  <div className="flex justify-between text-sm text-muted-foreground mb-1">
                    <span>Question bank mastered</span>
                    <span>
                      {overall.mastered} / {overall.total}
                    </span>
                  </div>
                  <ProgressBar value={overall.total ? overall.mastered / overall.total : 0} />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full sm:w-auto">
                {store.activeExam ? (
                  <Link href="/soc105/exam">
                    <Button size="lg" className="w-full gap-2 bg-[var(--soc-accent)] hover:opacity-90 text-white">
                      <Play className="w-5 h-5" /> Resume exam ({store.activeExam.answers.filter((a) => a !== null).length}/
                      {store.activeExam.questionIds.length})
                    </Button>
                  </Link>
                ) : (
                  <Link href={`/soc105/exam?units=${NEXT_EXAM.units.join(",")}&n=${NEXT_EXAM.length}`}>
                    <Button size="lg" className="w-full gap-2 bg-[var(--soc-accent)] hover:opacity-90 text-white">
                      <Play className="w-5 h-5" /> Full {NEXT_EXAM.length}-question mock
                    </Button>
                  </Link>
                )}
                <Link href="/soc105/drill">
                  <Button size="lg" variant="outline" className="w-full gap-2">
                    <Shuffle className="w-5 h-5" /> Drill
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </section>

        {/* How he tests */}
        <section>
          <h2 className="text-2xl font-bold mb-1">How he tests — and how this trains it</h2>
          <p className="text-muted-foreground mb-5 max-w-3xl">
            From the “How I test” section of the syllabus. Very little memorization; no trick questions — the obvious answer is
            right <em>if you’ve studied</em>. The real trap is a word’s everyday meaning versus its sociological one.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {SKILLS.map((s) => {
              const pool = examPool.filter((q) => q.skill === s.skill);
              const t = tally(pool, store.items);
              return (
                <Link key={s.skill} href={`/soc105/drill?mode=${s.mode}`}>
                  <Card className="p-5 h-full cursor-pointer hover:shadow-md transition-shadow border-t-4" style={{ borderTopColor: SKILL_COLOR[s.skill] }}>
                    <h3 className="text-lg font-bold" style={{ color: SKILL_COLOR[s.skill] }}>
                      {s.title}
                    </h3>
                    <p className="text-[15px] mt-2">
                      <strong>He asks:</strong> {s.he}
                    </p>
                    <p className="text-[15px] mt-2 text-muted-foreground">
                      <strong className="text-foreground">Here:</strong> {s.train}
                    </p>
                    <div className="mt-4 text-sm text-muted-foreground">
                      {t.seen ? `${Math.round((100 * t.right) / t.seen)}% right · ` : ""}
                      {t.mastered}/{t.total} mastered
                    </div>
                    <div className="mt-1.5">
                      <ProgressBar value={t.total ? t.mastered / t.total : 0} color={SKILL_COLOR[s.skill]} />
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
          <Card className="p-4 mt-4 text-[15px] bg-muted/40">
            <strong>What to prioritise:</strong> he says the most testable material is where the reading, the slides, and lecture
            overlap. Only the readings are in this trainer, so concepts are ranked by the signal the notes give:{" "}
            <Pill color="var(--soc-accent)">Tier 1</Pill> bold terms with a margin definition that recur across units or are
            contrasted with a sibling, <Pill color="var(--muted-foreground)">Tier 2</Pill> other defined terms,{" "}
            <Pill color="var(--muted-foreground)">Tier 3</Pill> running-text ideas. Drills and mocks lean on Tier 1.
          </Card>
        </section>

        {/* Drills */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Drills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {drillModes.map(({ mode, label, desc, icon: Icon, color }) => (
              <Link key={mode} href={`/soc105/drill?mode=${mode}`}>
                <Card className="p-4 h-full cursor-pointer hover:shadow-md transition-shadow flex gap-3 items-start">
                  <span className="rounded-lg p-2 shrink-0" style={{ color, backgroundColor: `color-mix(in oklab, ${color} 12%, transparent)` }}>
                    <Icon className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="font-bold">{label}</div>
                    <div className="text-sm text-muted-foreground">{desc}</div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Units */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Units</h2>
          <div className="space-y-3">
            {UNITS.map((u) => {
              const t = tally(ALL_QUESTIONS.filter((q) => q.unitId === u.id), store.items);
              return (
                <Card key={u.id} className="p-4 sm:p-5">
                  <div className="flex flex-wrap items-center gap-4 justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="text-sm text-muted-foreground font-semibold">Unit {u.number}</div>
                      <h3 className="text-xl font-bold">{u.title}</h3>
                      <p className="text-[15px] text-muted-foreground">{u.subtitle}</p>
                      <div className="mt-2 max-w-sm">
                        <ProgressBar value={t.total ? t.mastered / t.total : 0} />
                        <div className="text-xs text-muted-foreground mt-1">
                          {t.mastered}/{t.total} questions mastered · {u.concepts.length} concepts · {u.contrastSets.length} contrast sets
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Link href={`/soc105/unit/${u.id}`}>
                        <Button variant="outline" className="gap-2">
                          <BookOpen className="w-4 h-4" /> Guide
                        </Button>
                      </Link>
                      <Link href={`/soc105/drill?units=${u.id}`}>
                        <Button variant="outline" className="gap-2">
                          <Shuffle className="w-4 h-4" /> Drill
                        </Button>
                      </Link>
                      <Link href={`/soc105/exam?units=${u.id}&n=20`}>
                        <Button variant="outline" className="gap-2">
                          <Play className="w-4 h-4" /> 20-Q exam
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* History */}
        {store.history.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Past practice exams</h2>
            <div className="space-y-2">
              {store.history.slice(0, 8).map((h) => {
                const s = examScore(h);
                return (
                  <Link key={h.id} href={`/soc105/exam?review=${h.id}`}>
                    <Card className="p-3 px-4 flex items-center justify-between cursor-pointer hover:shadow-sm">
                      <span className="font-medium">
                        {h.label} <span className="text-muted-foreground text-sm">· {new Date(h.startedAt).toLocaleString()}</span>
                      </span>
                      <span className="font-bold tabular-nums">
                        {s.right}/{s.total} ({Math.round((100 * s.right) / s.total)}%)
                      </span>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        <section className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
          <span>
            Source: Nick Wilson’s SOC 105 lecture notes (units {UNITS.map((u) => u.number).join(", ")}). Progress is saved in this browser.
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="gap-2"
            onClick={() => {
              if (confirmReset) {
                resetProgress();
                setConfirmReset(false);
              } else setConfirmReset(true);
            }}
            onBlur={() => setConfirmReset(false)}
          >
            <RotateCcw className="w-4 h-4" /> {confirmReset ? "Click again to reset drill progress" : "Reset drill progress"}
          </Button>
        </section>
      </main>
    </div>
  );
}
