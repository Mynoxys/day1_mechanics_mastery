import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronLeft, Clock, Target, Trophy, RotateCcw } from "lucide-react";
import { Link } from "wouter";
import { MultipleChoice } from "@/components/ee/MultipleChoice";
import { MultiSelect } from "@/components/ee/MultiSelect";

export type MathQuestion =
  | {
      kind: "numeric";
      id: string;
      topic: string;
      topicColor: string;
      points: number;
      prompt: ReactNode;
      figure?: ReactNode;
      expectedAnswer: number;
      unit?: string;
      tolerance: number;
      solution: ReactNode;
    }
  | {
      kind: "mc";
      id: string;
      topic: string;
      topicColor: string;
      points: number;
      prompt: ReactNode;
      figure?: ReactNode;
      choices: ReactNode[];
      correctIndex: number;
      solution: ReactNode;
    }
  | {
      kind: "multi";
      id: string;
      topic: string;
      topicColor: string;
      points: number;
      prompt: ReactNode;
      figure?: ReactNode;
      choices: ReactNode[];
      correctIndices: number[];
      solution: ReactNode;
    };

interface AnswerState {
  numeric?: string;
  mc?: number | null;
  multi?: number[];
}

interface MockExamShellProps {
  title: string;
  subtitle: string;
  backHref: string;
  backLabel: string;
  timerSeconds: number;
  bank: MathQuestion[];
  introBlurb: ReactNode;
  primaryColor?: string;
  secondaryColor?: string;
}

function fmtTime(s: number): string {
  if (s < 0) s = 0;
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

function emptyAnswer(q: MathQuestion): AnswerState {
  if (q.kind === "multi") return { multi: [] };
  if (q.kind === "mc") return { mc: null };
  return { numeric: "" };
}

export function MockExamShell({
  title,
  subtitle,
  backHref,
  backLabel,
  timerSeconds,
  bank,
  introBlurb,
  primaryColor = "#2563eb",
  secondaryColor = "#06b6d4",
}: MockExamShellProps) {
  const [phase, setPhase] = useState<"intro" | "exam" | "review">("intro");
  const [answers, setAnswers] = useState<AnswerState[]>(() => bank.map(emptyAnswer));
  const [timeLeft, setTimeLeft] = useState(timerSeconds);

  useEffect(() => {
    if (phase !== "exam") return;
    if (timeLeft <= 0) {
      setPhase("review");
      return;
    }
    const id = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [phase, timeLeft]);

  const totalPoints = useMemo(() => bank.reduce((acc, q) => acc + q.points, 0), [bank]);

  const start = () => {
    setAnswers(bank.map(emptyAnswer));
    setTimeLeft(timerSeconds);
    setPhase("exam");
  };

  const setNumeric = (idx: number, value: string) => {
    setAnswers((prev) => prev.map((a, i) => (i === idx ? { numeric: value } : a)));
  };
  const setMc = (idx: number, value: number) => {
    setAnswers((prev) => prev.map((a, i) => (i === idx ? { mc: value } : a)));
  };
  const toggleMulti = (idx: number, value: number) => {
    setAnswers((prev) =>
      prev.map((a, i) => {
        if (i !== idx) return a;
        const cur = a.multi ?? [];
        return cur.includes(value)
          ? { multi: cur.filter((v) => v !== value) }
          : { multi: [...cur, value].sort() };
      }),
    );
  };

  const correctness = useMemo(() => {
    return bank.map((q, i) => {
      const a = answers[i];
      if (q.kind === "numeric") {
        const v = parseFloat(a.numeric ?? "");
        if (Number.isNaN(v)) return false;
        const tol = Math.max(Math.abs(q.expectedAnswer * q.tolerance), 0.001);
        return Math.abs(v - q.expectedAnswer) <= tol;
      }
      if (q.kind === "mc") {
        return a.mc === q.correctIndex;
      }
      if (q.kind === "multi") {
        const sel = (a.multi ?? []).slice().sort();
        const want = q.correctIndices.slice().sort();
        return sel.length === want.length && sel.every((v, k) => v === want[k]);
      }
      return false;
    });
  }, [answers, bank]);

  const earnedPoints = correctness.reduce((acc, ok, i) => acc + (ok ? bank[i].points : 0), 0);
  const correctCount = correctness.filter(Boolean).length;

  const topicStats = useMemo(() => {
    const stats: Record<string, { color: string; correct: number; total: number; points: number; earnedPts: number }> = {};
    bank.forEach((q, i) => {
      if (!stats[q.topic]) {
        stats[q.topic] = { color: q.topicColor, correct: 0, total: 0, points: 0, earnedPts: 0 };
      }
      stats[q.topic].total += 1;
      stats[q.topic].points += q.points;
      if (correctness[i]) {
        stats[q.topic].correct += 1;
        stats[q.topic].earnedPts += q.points;
      }
    });
    return stats;
  }, [correctness, bank]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <header
        className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm"
        style={{ borderTopWidth: 4, borderTopColor: primaryColor }}
      >
        <div className="container flex items-center justify-between py-4">
          <Link href={backHref}>
            <Button variant="ghost" className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <ChevronLeft className="w-5 h-5" /> {backLabel}
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h1>
          {phase === "exam" ? (
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono font-bold ${
                timeLeft < 600
                  ? "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300"
                  : "bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300"
              }`}
            >
              <Clock className="w-4 h-4" />
              {fmtTime(timeLeft)}
            </div>
          ) : (
            <div className="w-32" />
          )}
        </div>
      </header>

      <div className="container py-12">
        {phase === "intro" && (
          <Card
            className="interactive-panel max-w-3xl mx-auto text-white border-0"
            style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
          >
            <Target className="w-16 h-16 mb-6 mx-auto" />
            <h2 className="text-4xl font-bold mb-3 text-center">{title}</h2>
            <p className="text-center text-lg opacity-90 mb-6">{subtitle}</p>
            <div className="text-base max-w-xl mx-auto mb-8 opacity-95">{introBlurb}</div>
            <ul className="space-y-2 text-base max-w-xl mx-auto mb-8 opacity-95">
              <li>• <strong>{bank.length}</strong> questions · <strong>{totalPoints}</strong> points</li>
              <li>• <strong>{Math.round(timerSeconds / 60)}-minute</strong> timer</li>
              <li>• Numeric, multiple-choice, and select-all-that-apply</li>
              <li>• Auto-graded on submit, with per-topic breakdown + stepped solutions</li>
            </ul>
            <div className="text-center">
              <Button
                onClick={start}
                className="bg-white hover:bg-gray-100 px-10 py-6 text-lg rounded-lg"
                style={{ color: primaryColor }}
              >
                Start Exam
              </Button>
            </div>
          </Card>
        )}

        {phase === "exam" && (
          <section>
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {bank.length} questions · {totalPoints} pts · finish anytime
              </p>
              <Button onClick={() => setPhase("review")} variant="outline">
                Finish & Review
              </Button>
            </div>

            <div className="space-y-6">
              {bank.map((q, i) => (
                <QuestionCard
                  key={q.id}
                  q={q}
                  state={answers[i]}
                  setNumeric={(v) => setNumeric(i, v)}
                  setMc={(v) => setMc(i, v)}
                  toggleMulti={(v) => toggleMulti(i, v)}
                  graded={false}
                  correct={correctness[i]}
                />
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button
                onClick={() => setPhase("review")}
                className="text-white px-8 py-5 text-base"
                style={{ background: primaryColor }}
              >
                Finish & Review
              </Button>
            </div>
          </section>
        )}

        {phase === "review" && (
          <section className="space-y-8">
            <Card
              className="interactive-panel max-w-3xl mx-auto text-white border-0 text-center"
              style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
            >
              <Trophy className="w-16 h-16 mb-6 mx-auto" />
              <h2 className="text-3xl font-bold mb-2">
                {earnedPoints} / {totalPoints} pts
              </h2>
              <p className="text-lg opacity-90">
                {correctCount} / {bank.length} questions correct
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 max-w-md mx-auto">
                {Object.entries(topicStats).map(([topic, s]) => {
                  const pct = s.points ? (s.earnedPts / s.points) * 100 : 0;
                  return (
                    <div key={topic} className="bg-white/15 rounded-lg p-3 text-left">
                      <div className="text-xs font-semibold opacity-90">{topic}</div>
                      <div className="font-bold">
                        {s.earnedPts}/{s.points} pts ({pct.toFixed(0)}%)
                      </div>
                      <div className="h-1 bg-white/30 mt-1 rounded">
                        <div className="h-1 rounded" style={{ width: `${pct}%`, backgroundColor: "white" }} />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6">
                <Button onClick={() => setPhase("intro")} className="bg-white hover:bg-gray-100" style={{ color: primaryColor }}>
                  <RotateCcw className="w-4 h-4 mr-1" /> Try Again
                </Button>
              </div>
            </Card>

            <div className="space-y-6">
              {bank.map((q, i) => (
                <QuestionCard
                  key={q.id}
                  q={q}
                  state={answers[i]}
                  setNumeric={() => {}}
                  setMc={() => {}}
                  toggleMulti={() => {}}
                  graded={true}
                  correct={correctness[i]}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

interface QuestionCardProps {
  q: MathQuestion;
  state: AnswerState;
  setNumeric: (v: string) => void;
  setMc: (v: number) => void;
  toggleMulti: (v: number) => void;
  graded: boolean;
  correct: boolean;
}

function QuestionCard({ q, state, setNumeric, setMc, toggleMulti, graded, correct }: QuestionCardProps) {
  let body: ReactNode = null;
  if (q.kind === "numeric") {
    body = (
      <div className="flex items-center gap-3">
        <Input
          type="text"
          inputMode="decimal"
          value={state.numeric ?? ""}
          onChange={(e) => setNumeric(e.target.value)}
          disabled={graded}
          placeholder="Your answer"
          className="max-w-xs font-mono"
        />
        {q.unit && <span className="text-sm text-gray-500 dark:text-gray-400">{q.unit}</span>}
      </div>
    );
  } else if (q.kind === "mc") {
    body = (
      <MultipleChoice
        choices={q.choices}
        selected={state.mc ?? null}
        onSelect={setMc}
        correctIndex={q.correctIndex}
        graded={graded}
        accentColor={q.topicColor}
      />
    );
  } else {
    body = (
      <MultiSelect
        choices={q.choices}
        selected={state.multi ?? []}
        onToggle={toggleMulti}
        correctIndices={q.correctIndices}
        graded={graded}
        accentColor={q.topicColor}
      />
    );
  }

  return (
    <Card className="interactive-panel" style={{ borderLeftWidth: 4, borderLeftColor: q.topicColor }}>
      <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
        <span
          className="inline-block text-xs font-bold px-2 py-0.5 rounded-full"
          style={{ color: q.topicColor, backgroundColor: q.topicColor + "20" }}
        >
          Q{q.id} · {q.topic} · {q.points} pt
        </span>
        {graded && (
          <span
            className={`text-sm font-bold px-3 py-1 rounded-full ${
              correct
                ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
                : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200"
            }`}
          >
            {correct ? "✓ correct" : "✗ wrong"}
          </span>
        )}
      </div>
      <div className="text-base text-gray-900 dark:text-gray-100 mb-4 leading-relaxed">{q.prompt}</div>
      {q.figure && (
        <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-3 mb-4 max-w-2xl flex justify-center overflow-x-auto">
          {q.figure}
        </div>
      )}
      {body}
      {graded && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-600 text-sm text-gray-700 dark:text-gray-200">
          <div className="font-bold mb-1">Solution</div>
          <div className="space-y-2">{q.solution}</div>
        </div>
      )}
    </Card>
  );
}
