// SOC 105 practice exam: scantron-style (answers hidden until you submit, you can
// change answers and move freely), then a score broken down by question class,
// unit and trap, then a review of every question explaining every option.
// Keys while taking: 1–5 / A–E answer · ← → move.

import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useSearch } from "wouter";
import { ArrowLeft, ArrowRight, Flag, Play, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { NEXT_EXAM, QUESTION_BY_ID, UNITS, UNIT_BY_ID } from "@/components/soc105/units";
import {
  abandonExam,
  buildExam,
  examScore,
  finishExam,
  startExam,
  updateExam,
  useSocStore,
  type ExamSession,
} from "@/components/soc105/store";
import { ProgressBar, QuestionView, SKILL_COLOR, SocHeader, keyToIndex } from "@/components/soc105/ui";
import { SKILL_LABELS, TRAP_LABELS, type Skill, type Trap, type UnitId } from "@/components/soc105/types";
import { cn } from "@/lib/utils";

export default function SOC105Exam() {
  const search = new URLSearchParams(useSearch());
  const store = useSocStore();
  const reviewId = search.get("review");
  const reviewed = reviewId ? store.history.find((h) => h.id === reviewId) : undefined;

  if (reviewed) return <Results exam={reviewed} />;
  if (store.activeExam) return <Taking exam={store.activeExam} />;
  return <Setup initialUnits={search.get("units")} initialN={search.get("n")} />;
}

// ---------------------------------------------------------------- setup

const LENGTHS = [10, 20, 30, 60];

function Setup({ initialUnits, initialN }: { initialUnits: string | null; initialN: string | null }) {
  const [units, setUnits] = useState<UnitId[]>(initialUnits ? (initialUnits.split(",") as UnitId[]) : NEXT_EXAM.units);
  const [n, setN] = useState<number>(initialN ? Number(initialN) : NEXT_EXAM.length);
  const available = UNITS.filter((u) => units.includes(u.id)).reduce((s, u) => s + u.questions.length, 0);
  const label =
    units.length === 1
      ? `Unit ${UNIT_BY_ID[units[0]].number} · ${n} Q`
      : `${units.length === NEXT_EXAM.units.length ? "Cumulative" : "Units " + units.map((u) => u.slice(1)).join(", ")} · ${n} Q`;

  return (
    <div className="min-h-screen bg-background">
      <SocHeader title="Practice exam" />
      <main className="container max-w-2xl py-8 space-y-6">
        <Card className="p-5 sm:p-7 space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Set up a practice exam</h2>
            <p className="text-muted-foreground mt-1">
              Like the real one: multiple choice and true/false, answers hidden until you submit. Roughly 40% application,
              40% conceptual, 20% big empirical, weighted toward Tier-1 concepts and away from questions you saw in your
              last few mocks.
            </p>
          </div>
          <div>
            <div className="font-semibold mb-2">Units</div>
            <div className="flex flex-wrap gap-2">
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
                      "rounded-lg border-2 px-3 py-2 text-left",
                      on ? "border-[var(--soc-accent)]" : "border-border text-muted-foreground",
                    )}
                  >
                    <div className="text-xs">Unit {u.number}</div>
                    <div className="font-semibold">{u.title}</div>
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <div className="font-semibold mb-2">Length</div>
            <div className="flex flex-wrap gap-2">
              {LENGTHS.map((l) => (
                <button
                  key={l}
                  onClick={() => setN(l)}
                  className={cn(
                    "rounded-lg border-2 px-4 py-2 font-semibold tabular-nums",
                    n === l ? "border-[var(--soc-accent)] text-[var(--soc-accent)]" : "border-border",
                  )}
                >
                  {l}
                  {l === NEXT_EXAM.length && <span className="font-normal text-xs text-muted-foreground"> · real length</span>}
                </button>
              ))}
            </div>
            {available < n && <p className="text-sm text-muted-foreground mt-2">Only {available} questions in these units — the exam will use all of them.</p>}
          </div>
          <Button
            size="lg"
            className="w-full gap-2 bg-[var(--soc-accent)] hover:opacity-90 text-white"
            onClick={() => startExam(buildExam(units, n, label))}
          >
            <Play className="w-5 h-5" /> Start: {label}
          </Button>
        </Card>
      </main>
    </div>
  );
}

// ---------------------------------------------------------------- taking

function useElapsed(since: number) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const s = Math.max(0, Math.floor((now - since) / 1000));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

function Taking({ exam }: { exam: ExamSession }) {
  const [, navigate] = useLocation();
  const [confirm, setConfirm] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const elapsed = useElapsed(exam.startedAt);
  const i = exam.current;
  const q = QUESTION_BY_ID[exam.questionIds[i]];
  const answered = exam.answers.filter((a) => a !== null).length;
  const total = exam.questionIds.length;

  const go = (to: number) => {
    setConfirm(false);
    updateExam({ current: Math.max(0, Math.min(total - 1, to)) });
  };
  const choose = (oi: number) => {
    const answers = [...exam.answers];
    answers[i] = oi;
    updateExam({ answers });
  };
  const submit = () => {
    const done = finishExam();
    if (done) navigate(`/soc105/exam?review=${done.id}`, { replace: true });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || !q) return;
      if (e.key === "ArrowRight") go(i + 1);
      else if (e.key === "ArrowLeft") go(i - 1);
      else {
        const di = keyToIndex(e.key);
        if (di !== null && di < exam.optionOrder[i].length) choose(exam.optionOrder[i][di]);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  // a question was removed from the bank since this exam started
  useEffect(() => {
    if (!q) abandonExam();
  }, [q]);
  if (!q) return null;

  return (
    <div className="min-h-screen bg-background">
      <SocHeader title={exam.label} />
      <main className="container max-w-3xl py-6 space-y-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            {answered}/{total} answered
          </span>
          <span className="tabular-nums">⏱ {elapsed}</span>
        </div>
        <ProgressBar value={answered / total} />

        <Card className="p-5 sm:p-7">
          <QuestionView q={q} order={exam.optionOrder[i]} selected={exam.answers[i]} revealed={false} onSelect={choose} number={`${i + 1} / ${total}`} />
          <div className="mt-6 flex items-center gap-2">
            <Button variant="outline" size="lg" onClick={() => go(i - 1)} disabled={i === 0} className="gap-1">
              <ArrowLeft className="w-4 h-4" /> Prev
            </Button>
            {i < total - 1 ? (
              <Button size="lg" onClick={() => go(i + 1)} className="gap-1 ml-auto bg-[var(--soc-accent)] hover:opacity-90 text-white">
                Next <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button size="lg" onClick={() => (answered < total ? setConfirm(true) : submit())} className="gap-1 ml-auto bg-[var(--soc-accent)] hover:opacity-90 text-white">
                <Flag className="w-4 h-4" /> Submit
              </Button>
            )}
          </div>
          {confirm && (
            <div className="mt-4 rounded-lg border border-[var(--soc-wrong)] p-3 flex flex-wrap items-center gap-3">
              <span>{total - answered} unanswered — they’ll count as wrong.</span>
              <Button size="sm" variant="outline" onClick={submit}>
                Submit anyway
              </Button>
            </div>
          )}
        </Card>

        <div className="flex flex-wrap gap-2 justify-between">
          <Button variant="ghost" size="sm" onClick={() => setShowGrid((s) => !s)}>
            {showGrid ? "Hide" : "Show"} question grid
          </Button>
          <div className="flex gap-2">
            {i < total - 1 && (
              <Button variant="ghost" size="sm" onClick={() => (answered < total ? setConfirm(true) : submit())}>
                Submit now
              </Button>
            )}
            <Button variant="ghost" size="sm" className="text-muted-foreground" onClick={abandonExam}>
              Quit exam
            </Button>
          </div>
        </div>
        {confirm && i < total - 1 && (
          <div className="rounded-lg border border-[var(--soc-wrong)] p-3 flex flex-wrap items-center gap-3">
            <span>{total - answered} unanswered — they’ll count as wrong.</span>
            <Button size="sm" variant="outline" onClick={submit}>
              Submit anyway
            </Button>
          </div>
        )}
        {showGrid && (
          <div className="grid grid-cols-8 sm:grid-cols-12 gap-1.5">
            {exam.questionIds.map((id, k) => (
              <button
                key={id}
                onClick={() => go(k)}
                className={cn(
                  "h-9 rounded-md text-sm tabular-nums border",
                  k === i && "ring-2 ring-[var(--soc-accent)]",
                  exam.answers[k] !== null ? "bg-[var(--soc-accent)] text-white border-transparent" : "border-border",
                )}
              >
                {k + 1}
              </button>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

// ---------------------------------------------------------------- results

function Breakdown<K extends string>({ title, rows }: { title: string; rows: { key: K; label: string; right: number; total: number; color?: string }[] }) {
  return (
    <Card className="p-4">
      <div className="font-bold mb-3">{title}</div>
      <div className="space-y-2.5">
        {rows.map((r) => (
          <div key={r.key}>
            <div className="flex justify-between text-sm">
              <span>{r.label}</span>
              <span className="tabular-nums text-muted-foreground">
                {r.right}/{r.total}
              </span>
            </div>
            <ProgressBar value={r.total ? r.right / r.total : 0} color={r.color} />
          </div>
        ))}
      </div>
    </Card>
  );
}

function Results({ exam }: { exam: ExamSession }) {
  const [onlyWrong, setOnlyWrong] = useState(false);
  const { right, total } = examScore(exam);
  const pct = Math.round((100 * right) / total);

  const rows = useMemo(
    () =>
      exam.questionIds
        .map((id, k) => {
          const q = QUESTION_BY_ID[id];
          const a = exam.answers[k];
          return q ? { q, k, a, ok: a !== null && !!q.options[a]?.correct } : null;
        })
        .filter((r): r is NonNullable<typeof r> => r !== null),
    [exam],
  );

  const group = <K extends string>(keyOf: (r: (typeof rows)[number]) => K | undefined) => {
    const m = new Map<K, { right: number; total: number }>();
    rows.forEach((r) => {
      const k = keyOf(r);
      if (!k) return;
      const g = m.get(k) ?? { right: 0, total: 0 };
      g.total++;
      if (r.ok) g.right++;
      m.set(k, g);
    });
    return m;
  };
  const bySkill = group((r) => r.q.skill);
  const byUnit = group((r) => r.q.unitId);
  const byTrap = group((r) => r.q.trap);
  const shown = onlyWrong ? rows.filter((r) => !r.ok) : rows;

  return (
    <div className="min-h-screen bg-background">
      <SocHeader title={`Results · ${exam.label}`} />
      <main className="container max-w-3xl py-6 space-y-6">
        <Card className="p-6 text-center">
          <div className="text-5xl font-bold tabular-nums" style={{ color: pct >= 80 ? "var(--soc-right)" : pct >= 60 ? "var(--soc-empirical)" : "var(--soc-wrong)" }}>
            {pct}%
          </div>
          <div className="text-lg mt-1">
            {right} / {total} correct
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Link href="/soc105/drill?mode=missed">
              <Button className="gap-2 bg-[var(--soc-accent)] hover:opacity-90 text-white">
                <Shuffle className="w-4 h-4" /> Drill my misses
              </Button>
            </Link>
            <Link href={`/soc105/exam?units=${exam.unitIds.join(",")}&n=${total}`}>
              <Button variant="outline" className="gap-2">
                <Play className="w-4 h-4" /> Another exam
              </Button>
            </Link>
          </div>
        </Card>

        <div className="grid sm:grid-cols-2 gap-4">
          <Breakdown
            title="By question class"
            rows={(Object.keys(SKILL_LABELS) as Skill[])
              .filter((s) => bySkill.has(s))
              .map((s) => ({ key: s, label: SKILL_LABELS[s], color: SKILL_COLOR[s], ...bySkill.get(s)! }))}
          />
          <Breakdown
            title="By unit"
            rows={UNITS.filter((u) => byUnit.has(u.id)).map((u) => ({ key: u.id, label: `${u.number}. ${u.title}`, ...byUnit.get(u.id)! }))}
          />
          {byTrap.size > 0 && (
            <div className="sm:col-span-2">
              <Breakdown
                title="By trap — where you get caught"
                rows={(Object.keys(TRAP_LABELS) as Trap[])
                  .filter((t) => byTrap.has(t))
                  .map((t) => ({
                    key: t,
                    label: TRAP_LABELS[t],
                    color: t === "everyday-meaning" ? "var(--soc-false-friend)" : undefined,
                    ...byTrap.get(t)!,
                  }))}
              />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Review</h2>
          <div className="flex gap-1 rounded-lg border border-border p-1">
            {[false, true].map((w) => (
              <button
                key={String(w)}
                onClick={() => setOnlyWrong(w)}
                className={cn("px-3 py-1 rounded-md text-sm", onlyWrong === w ? "bg-foreground text-background" : "text-muted-foreground")}
              >
                {w ? `Wrong only (${rows.filter((r) => !r.ok).length})` : "All"}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {shown.map(({ q, k, a, ok }) => (
            <Card key={q.id} className="p-5 sm:p-6 border-l-4" style={{ borderLeftColor: ok ? "var(--soc-right)" : "var(--soc-wrong)" }}>
              {a === null && <div className="text-sm font-semibold text-[var(--soc-wrong)] mb-2">Unanswered</div>}
              <QuestionView q={q} order={exam.optionOrder[k]} selected={a} revealed number={`${k + 1}.`} />
            </Card>
          ))}
          {shown.length === 0 && <Card className="p-6 text-center">Nothing wrong. 🎉</Card>}
        </div>
      </main>
    </div>
  );
}
