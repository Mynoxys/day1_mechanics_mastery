// Drill mode — the forgiving counterpart to the simulator. Untimed, immediate
// feedback, explanations on tap. Two sources:
//   /cse114/drill                  → your active traps (3 right in a row = mastered)
//   /cse114/drill/gotcha/:gotcha   → fresh practice on one gotcha (from the exam bank)

import { useEffect, useMemo, useState } from "react";
import { Link, useRoute } from "wouter";
import { Check, Home, Lightbulb, Sparkles, Target, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { QuestionView, emptyAnswer } from "@/components/cse114/QuestionView";
import { useTraps } from "@/components/cse114/useTraps";
import { addAttempt, gradeAnswer, type GradeResult, type UserAnswer } from "@/components/cse114/store";
import { GOTCHA_LABELS, MASTERY_TARGET, type Gotcha, type Question } from "@/components/cse114/types";
import { allDrillQuestions } from "@/components/cse114/exams";

interface DrillItem {
  question: Question;
  trapId?: string;
  streak?: number;
}

function pickRandom<T>(arr: T[], notKey?: string, keyOf?: (t: T) => string): T | null {
  if (arr.length === 0) return null;
  if (arr.length === 1) return arr[0];
  const pool = notKey && keyOf ? arr.filter((x) => keyOf(x) !== notKey) : arr;
  const from = pool.length > 0 ? pool : arr;
  return from[Math.floor(Math.random() * from.length)];
}

export default function TrapDrill() {
  const [, gp] = useRoute("/cse114/drill/gotcha/:gotcha");
  const gotcha = gp?.gotcha as Gotcha | undefined;
  const mode: "trap" | "gotcha" = gotcha ? "gotcha" : "trap";

  const { active, markResult } = useTraps();

  // Static pool for gotcha practice (shuffled once); live pool for traps.
  const gotchaPool = useMemo<DrillItem[]>(
    () =>
      gotcha
        ? allDrillQuestions()
            .filter((q) => q.gotchas?.includes(gotcha))
            .map((q) => ({ question: q }))
        : [],
    [gotcha],
  );

  const trapPool: DrillItem[] = active.map((t) => ({
    question: t.questionSnapshot,
    trapId: t.id,
    streak: t.masteryStreak,
  }));

  const pool = mode === "gotcha" ? gotchaPool : trapPool;
  const keyOf = (it: DrillItem) => it.trapId ?? it.question.id;

  const [current, setCurrent] = useState<DrillItem | null>(null);
  const [answer, setAnswer] = useState<UserAnswer>({ kind: "text", value: "" });
  const [result, setResult] = useState<GradeResult | null>(null);
  const [phase, setPhase] = useState<"answering" | "selfgrade" | "feedback">("answering");
  const [gotIt, setGotIt] = useState<boolean | null>(null);
  const [showWhy, setShowWhy] = useState(false);
  const [stats, setStats] = useState({ seen: 0, right: 0 });

  function loadItem(it: DrillItem | null) {
    setCurrent(it);
    setAnswer(it ? emptyAnswer(it.question) : { kind: "text", value: "" });
    setResult(null);
    setPhase("answering");
    setGotIt(null);
    setShowWhy(false);
  }

  // Pick a first item once the pool is known, and recover if the current item
  // leaves the pool (e.g. a trap just got mastered).
  useEffect(() => {
    if (current && pool.some((it) => keyOf(it) === keyOf(current))) return;
    if (phase !== "answering" && current) return; // don't yank a graded card
    loadItem(pickRandom(pool, current ? keyOf(current) : undefined, keyOf));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pool.length]);

  function finish(correct: boolean) {
    if (!current) return;
    addAttempt({
      questionId: current.question.id,
      myAnswer: result?.myAnswerText ?? "",
      correct,
      selfGraded: current.question.type === "code",
      timeSpentSec: 0,
      mode: "drill",
    });
    setStats((s) => ({ seen: s.seen + 1, right: s.right + (correct ? 1 : 0) }));

    if (current.trapId) {
      const willMaster = correct && (current.streak ?? 0) + 1 >= MASTERY_TARGET;
      markResult(current.trapId, correct);
      if (willMaster) {
        toast.success("Mastered! 🎉", {
          description: "3 in a row — this trap leaves your drill rotation.",
        });
      }
    }
    setGotIt(correct);
    setPhase("feedback");
  }

  function check() {
    if (!current) return;
    const r = gradeAnswer(current.question, answer);
    setResult(r);
    if (current.question.type === "code") {
      setPhase("selfgrade"); // reveal reference, ask self-grade
    } else {
      finish(r.correct === true);
    }
  }

  function next() {
    loadItem(pickRandom(pool, current ? keyOf(current) : undefined, keyOf));
  }

  // ---- empty states ----
  if (pool.length === 0) {
    return (
      <Shell title={mode === "gotcha" ? `Practice: ${gotcha ? GOTCHA_LABELS[gotcha] : ""}` : "Trap Drill"}>
        <Card className="p-8 text-center">
          <Sparkles className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {mode === "gotcha" ? "No questions tagged with this gotcha yet" : "No active traps"}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {mode === "gotcha"
              ? "More tagged questions arrive as exams are transcribed."
              : "Take an exam and mark your mistakes — they'll show up here to drill."}
          </p>
          <Link href="/cse114">
            <Button>Back to hub</Button>
          </Link>
        </Card>
      </Shell>
    );
  }

  if (!current) {
    return (
      <Shell title="Trap Drill">
        <Card className="p-8 text-center text-gray-600 dark:text-gray-300">Loading…</Card>
      </Shell>
    );
  }

  const q = current.question;

  return (
    <Shell title={mode === "gotcha" ? `Practice: ${gotcha ? GOTCHA_LABELS[gotcha] : ""}` : "Trap Drill"}>
      {/* stats bar */}
      <div className="flex items-center justify-between mb-4 text-sm">
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <Target className="w-4 h-4" />
          {mode === "trap" ? `${pool.length} active trap${pool.length === 1 ? "" : "s"}` : `${pool.length} questions`}
        </div>
        <div className="text-gray-500 dark:text-gray-400">
          This session: {stats.right}/{stats.seen} correct
        </div>
      </div>

      <Card className="p-6">
        {current.trapId && (
          <div className="mb-3 flex items-center gap-2">
            {Array.from({ length: MASTERY_TARGET }).map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-full ${
                  i < (current.streak ?? 0) ? "bg-emerald-500" : "bg-gray-300 dark:bg-slate-600"
                }`}
              />
            ))}
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
              {current.streak ?? 0}/{MASTERY_TARGET} to master
            </span>
          </div>
        )}

        <QuestionView
          question={q}
          answer={answer}
          onChange={setAnswer}
          disabled={phase !== "answering"}
          showResult={phase === "feedback" || phase === "selfgrade"}
          result={result ?? undefined}
        />

        {/* code self-grade */}
        {phase === "selfgrade" && (
          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              Compare with the reference — did you get it right?
            </span>
            <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={() => finish(true)}>
              <Check className="w-4 h-4 mr-1" /> Yes
            </Button>
            <Button size="sm" className="bg-red-600 hover:bg-red-700" onClick={() => finish(false)}>
              <X className="w-4 h-4 mr-1" /> No
            </Button>
          </div>
        )}

        {/* explanation */}
        {(phase === "feedback" || phase === "selfgrade") && (
          <div className="mt-4">
            <button
              type="button"
              onClick={() => setShowWhy((s) => !s)}
              className="flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400"
            >
              <Lightbulb className="w-4 h-4" /> {showWhy ? "Hide" : "Show"} explanation
            </button>
            {showWhy && (
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-200 leading-relaxed">{q.explanation}</p>
            )}
          </div>
        )}

        {/* actions */}
        <div className="mt-5 flex justify-end gap-2">
          {phase === "answering" && (
            <Button onClick={check}>Check</Button>
          )}
          {phase === "feedback" && <Button onClick={next}>Next →</Button>}
        </div>
      </Card>
    </Shell>
  );
}

function Shell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <header className="sticky top-0 z-10 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
        <div className="container flex items-center justify-between py-4">
          <Link href="/cse114">
            <Button variant="ghost" className="gap-2">
              <Home className="w-4 h-4" /> CSE 114 hub
            </Button>
          </Link>
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h1>
          <Link href="/cse114/traps">
            <Button variant="ghost" className="text-sm">
              Trap list
            </Button>
          </Link>
        </div>
      </header>
      <div className="container max-w-2xl py-8">{children}</div>
    </div>
  );
}
