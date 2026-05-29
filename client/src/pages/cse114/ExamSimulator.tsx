// Respondus-fidelity exam simulator: one question at a time, no going back,
// every submit is final. The whole point is training the "commit and move on"
// reflex that LockDown Browser forces. intro -> running (locked, timed) -> review.

import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useRoute } from "wouter";
import {
  AlertTriangle,
  Check,
  ChevronRight,
  Clock,
  Flag,
  Home,
  Plus,
  RotateCcw,
  Trophy,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { QuestionView, emptyAnswer } from "@/components/cse114/QuestionView";
import {
  addAttempt,
  addSession,
  addTrap,
  gradeAnswer,
  type GradeResult,
  type UserAnswer,
} from "@/components/cse114/store";
import {
  GOTCHA_LABELS,
  TOPIC_LABELS,
  type ExamSession,
  type ExamSet,
  type Question,
} from "@/components/cse114/types";
import { examMaxScore, getExam } from "@/components/cse114/exams";

function fmtTime(s: number): string {
  if (s < 0) s = 0;
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

interface Done {
  answer: UserAnswer;
  result: GradeResult;
  timeSec: number;
}

export default function ExamSimulator() {
  const [, params] = useRoute("/cse114/sim/:examId");
  const exam = getExam(params?.examId ?? "");

  if (!exam) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <Card className="p-8 text-center max-w-md">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Exam not found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            That exam isn't in the registry yet.
          </p>
          <Link href="/cse114">
            <Button>Back to CSE 114 hub</Button>
          </Link>
        </Card>
      </div>
    );
  }
  return <ExamRunner exam={exam} />;
}

function ExamRunner({ exam }: { exam: ExamSet }) {
  const questions = exam.questions;
  const total = questions.length;
  const maxScore = useMemo(() => examMaxScore(exam), [exam]);

  const [phase, setPhase] = useState<"intro" | "running" | "review">("intro");
  const [current, setCurrent] = useState(0);
  const [working, setWorking] = useState<UserAnswer>(() => emptyAnswer(questions[0]));
  const [done, setDone] = useState<Record<number, Done>>({});
  const [selfGrade, setSelfGrade] = useState<Record<number, boolean>>({});
  const [trapped, setTrapped] = useState<Record<number, boolean>>({});
  const [trapNotes, setTrapNotes] = useState<Record<number, string>>({});
  const [secondsLeft, setSecondsLeft] = useState(exam.durationMinutes * 60);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [advancing, setAdvancing] = useState(false);

  const examStart = useRef(0);
  const questionStart = useRef(0);
  const sessionId = useRef("");

  const q = questions[current];

  // ---- timer ----
  useEffect(() => {
    if (phase !== "running") return;
    if (secondsLeft <= 0) {
      handleTimeout();
      return;
    }
    const id = setInterval(() => setSecondsLeft((t) => t - 1), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, secondsLeft]);

  function begin() {
    examStart.current = Date.now();
    questionStart.current = Date.now();
    sessionId.current = `sim-${exam.id}-${Date.now()}`;
    setPhase("running");
    document.documentElement.requestFullscreen?.()?.catch(() => {});
  }

  function makeEntry(idx: number, answer: UserAnswer): Done {
    return {
      answer,
      result: gradeAnswer(questions[idx], answer),
      timeSec: Math.round((Date.now() - questionStart.current) / 1000),
    };
  }

  function doSubmit() {
    setConfirmOpen(false);
    const entry = makeEntry(current, working);
    const nextDone = { ...done, [current]: entry };
    setDone(nextDone);
    addAttempt({
      questionId: q.id,
      examSetId: exam.id,
      myAnswer: entry.result.myAnswerText,
      correct: entry.result.correct === true,
      selfGraded: q.type === "code",
      timeSpentSec: entry.timeSec,
      mode: "sim",
    });

    if (current + 1 < total) {
      setAdvancing(true);
      window.setTimeout(() => {
        const next = current + 1;
        setCurrent(next);
        setWorking(emptyAnswer(questions[next]));
        questionStart.current = Date.now();
        setAdvancing(false);
      }, 900);
    } else {
      finalize(nextDone);
    }
  }

  function handleTimeout() {
    const nextDone = done[current]
      ? done
      : { ...done, [current]: makeEntry(current, working) };
    setDone(nextDone);
    finalize(nextDone);
  }

  function finalize(doneMap: Record<number, Done>) {
    setPhase("review");
    try {
      if (document.fullscreenElement) document.exitFullscreen?.();
    } catch {
      /* ignore */
    }
    persistSession(doneMap, selfGrade);
  }

  function persistSession(
    doneMap: Record<number, Done>,
    grades: Record<number, boolean>,
  ) {
    const perQuestion = questions.map((qq, i) => {
      const e = doneMap[i];
      const correct =
        qq.type === "code" ? grades[i] === true : e?.result.correct === true;
      return {
        questionId: qq.id,
        correct,
        timeSpentSec: e?.timeSec ?? 0,
        myAnswer: e?.result.myAnswerText ?? "(not answered)",
      };
    });
    const score = questions.reduce((sum, qq, i) => {
      const e = doneMap[i];
      if (!e) return sum;
      if (qq.type === "code") return sum + (grades[i] ? qq.points : 0);
      return sum + e.result.score;
    }, 0);
    const session: ExamSession = {
      id: sessionId.current,
      examSetId: exam.id,
      examTitle: exam.title,
      mode: "sim",
      examType: exam.examType,
      startedAt: examStart.current,
      endedAt: Date.now(),
      score,
      maxScore,
      perQuestion,
    };
    addSession(session);
  }

  // Re-save the session whenever self-grades change in review.
  useEffect(() => {
    if (phase === "review") persistSession(done, selfGrade);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selfGrade]);

  function correctOf(i: number): boolean {
    const e = done[i];
    if (!e) return false;
    return questions[i].type === "code"
      ? selfGrade[i] === true
      : e.result.correct === true;
  }
  function scoreOf(i: number): number {
    const e = done[i];
    if (!e) return 0;
    return questions[i].type === "code"
      ? selfGrade[i]
        ? questions[i].points
        : 0
      : e.result.score;
  }

  function addQuestionToTrap(i: number) {
    const qq = questions[i];
    const e = done[i];
    const note =
      trapNotes[i]?.trim() ||
      (qq.gotchas && qq.gotchas[0] ? GOTCHA_LABELS[qq.gotchas[0]] : "review this");
    addTrap({
      questionId: qq.id,
      questionSnapshot: qq,
      myWrongAnswer: e?.result.myAnswerText ?? "(not answered)",
      ruleViolated: note,
      topic: qq.topic,
      gotchas: qq.gotchas ?? [],
    });
    setTrapped((t) => ({ ...t, [i]: true }));
    toast.success("Added to trap list", { description: note });
  }

  // ======================= INTRO =======================
  if (phase === "intro") {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900">
        <header className="sticky top-0 z-10 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
          <div className="container flex items-center justify-between py-4">
            <Link href="/cse114">
              <Button variant="ghost" className="gap-2">
                <Home className="w-4 h-4" /> CSE 114 hub
              </Button>
            </Link>
          </div>
        </header>
        <div className="container max-w-2xl py-12">
          <Card className="p-8">
            <span className="inline-block bg-neutral-900 text-white text-xs font-bold tracking-wider px-3 py-1 rounded-full mb-4">
              {exam.examType === "midterm" ? "MIDTERM" : "FINAL"} · EXAM SIMULATOR
            </span>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {exam.title}
            </h1>
            {exam.blurb && (
              <p className="text-gray-600 dark:text-gray-300 mb-6">{exam.blurb}</p>
            )}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="rounded-lg bg-gray-50 dark:bg-slate-800 p-4">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {total}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">questions</div>
              </div>
              <div className="rounded-lg bg-gray-50 dark:bg-slate-800 p-4">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {exam.durationMinutes} min
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">on the clock</div>
              </div>
            </div>
            <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-900/30 p-4 mb-6">
              <div className="flex items-center gap-2 font-bold text-amber-800 dark:text-amber-300 mb-2">
                <AlertTriangle className="w-5 h-5" /> LockDown conditions
              </div>
              <ul className="text-sm text-amber-900 dark:text-amber-200 space-y-1 list-disc list-inside">
                <li>One question at a time. You cannot go back.</li>
                <li>Submitting an answer is final — there is no review until the end.</li>
                <li>The clock does not stop. When it hits 0:00, the exam ends.</li>
                <li>No IDE, no autocomplete. Write code like it's paper.</li>
              </ul>
            </div>
            <Button size="lg" className="w-full bg-neutral-900 hover:bg-neutral-800 text-white" onClick={begin}>
              Begin Exam <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  // ======================= RUNNING (lockdown) =======================
  if (phase === "running") {
    const lowTime = secondsLeft < 600;
    const elapsed = Math.round((Date.now() - questionStart.current) / 1000);
    return (
      <div className="fixed inset-0 z-50 bg-neutral-950 text-neutral-100 font-mono flex flex-col">
        {/* Minimal top bar: total time + position only. Nothing else. */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-neutral-800">
          <div
            className={`flex items-center gap-2 text-lg font-bold ${
              lowTime ? "text-red-400" : "text-emerald-400"
            }`}
          >
            <Clock className="w-5 h-5" />
            {fmtTime(secondsLeft)}
          </div>
          <div className="text-neutral-400 text-sm">
            Question {current + 1} of {total}
            <span className="ml-3 text-neutral-600">this q: {fmtTime(elapsed)}</span>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="max-w-3xl mx-auto px-6 py-8">
            <div className="text-xs uppercase tracking-widest text-neutral-500 mb-4">
              {q.points} {q.points === 1 ? "point" : "points"}
            </div>
            <QuestionView
              question={q}
              answer={working}
              onChange={setWorking}
              disabled={advancing}
              lockdown
            />
          </div>
        </div>

        <div className="border-t border-neutral-800 px-6 py-4">
          <div className="max-w-3xl mx-auto flex justify-end">
            <Button
              size="lg"
              disabled={advancing}
              onClick={() => setConfirmOpen(true)}
              className="bg-white text-neutral-900 hover:bg-neutral-200"
            >
              {advancing ? (
                "Loading next…"
              ) : current + 1 < total ? (
                <>
                  Submit Answer <ChevronRight className="w-5 h-5 ml-1" />
                </>
              ) : (
                <>
                  Submit &amp; Finish <Flag className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>

        <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
          <AlertDialogContent className="font-sans">
            <AlertDialogHeader>
              <AlertDialogTitle>Submit this answer?</AlertDialogTitle>
              <AlertDialogDescription>
                This is final. You cannot return to this question.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Keep working</AlertDialogCancel>
              <AlertDialogAction onClick={doSubmit}>Submit (final)</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    );
  }

  // ======================= REVIEW =======================
  const totalScore = questions.reduce((s, _q, i) => s + scoreOf(i), 0);
  const numCorrect = questions.filter((_q, i) => correctOf(i)).length;
  const totalTime = Object.values(done).reduce((s, e) => s + e.timeSec, 0);
  const pct = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <header className="sticky top-0 z-10 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
        <div className="container flex items-center justify-between py-4">
          <Link href="/cse114">
            <Button variant="ghost" className="gap-2">
              <Home className="w-4 h-4" /> CSE 114 hub
            </Button>
          </Link>
          <Link href={`/cse114/sim/${exam.id}`}>
            <Button variant="ghost" className="gap-2" onClick={() => window.location.reload()}>
              <RotateCcw className="w-4 h-4" /> Retake
            </Button>
          </Link>
        </div>
      </header>

      <div className="container max-w-3xl py-8">
        {/* Summary */}
        <Card className="p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-6 h-6 text-amber-500" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {exam.title} — Results
            </h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Stat label="Score" value={`${totalScore}/${maxScore}`} />
            <Stat label="Percent" value={`${pct}%`} />
            <Stat label="Correct" value={`${numCorrect}/${total}`} />
            <Stat label="Time used" value={fmtTime(totalTime)} />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Self-graded code questions: mark each honestly below — wrong ones become traps you can drill.
          </p>
        </Card>

        {/* Per-question review */}
        <div className="space-y-5">
          {questions.map((qq, i) => {
            const e = done[i];
            const ok = correctOf(i);
            const isCode = qq.type === "code";
            const graded = isCode ? selfGrade[i] !== undefined : true;
            return (
              <Card key={qq.id} className="p-5" style={{ borderLeftWidth: 4, borderLeftColor: ok ? "#16a34a" : graded ? "#dc2626" : "#9ca3af" }}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-bold text-gray-900 dark:text-white">Q{i + 1}</span>
                    <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-xs">
                      {TOPIC_LABELS[qq.topic]}
                    </span>
                    <span className="text-gray-400 text-xs">{qq.points} pts</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    {e && <span className="text-gray-400 text-xs">{fmtTime(e.timeSec)}</span>}
                    {graded &&
                      (ok ? (
                        <span className="flex items-center gap-1 text-green-600 font-semibold">
                          <Check className="w-4 h-4" /> {scoreOf(i)} pts
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-red-600 font-semibold">
                          <X className="w-4 h-4" /> 0 pts
                        </span>
                      ))}
                  </div>
                </div>

                {/* Your answer */}
                <div className="mb-3 text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Your answer: </span>
                  <span className="font-mono whitespace-pre-wrap text-gray-900 dark:text-gray-100">
                    {e?.result.myAnswerText ?? "(not reached)"}
                  </span>
                </div>

                <QuestionView
                  question={qq}
                  answer={e?.answer ?? emptyAnswer(qq)}
                  onChange={() => {}}
                  disabled
                  showResult
                  result={e?.result}
                />

                {/* Self-grade for code questions */}
                {isCode && (
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Did you get it right?</span>
                    <Button
                      size="sm"
                      variant={selfGrade[i] === true ? "default" : "outline"}
                      className={selfGrade[i] === true ? "bg-green-600 hover:bg-green-700" : ""}
                      onClick={() => setSelfGrade((g) => ({ ...g, [i]: true }))}
                    >
                      <Check className="w-4 h-4 mr-1" /> Yes
                    </Button>
                    <Button
                      size="sm"
                      variant={selfGrade[i] === false ? "default" : "outline"}
                      className={selfGrade[i] === false ? "bg-red-600 hover:bg-red-700" : ""}
                      onClick={() => setSelfGrade((g) => ({ ...g, [i]: false }))}
                    >
                      <X className="w-4 h-4 mr-1" /> No
                    </Button>
                  </div>
                )}

                {/* Explanation */}
                <details className="mt-3 group">
                  <summary className="cursor-pointer text-sm font-semibold text-blue-600 dark:text-blue-400">
                    Why
                  </summary>
                  <p className="mt-1 text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                    {qq.explanation}
                  </p>
                </details>

                {/* Add to trap list (for wrong answers) */}
                {graded && !ok && (
                  <div className="mt-3 pt-3 border-t border-gray-200 dark:border-slate-700">
                    {trapped[i] ? (
                      <span className="text-sm text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <Check className="w-4 h-4" /> Added to trap list
                      </span>
                    ) : (
                      <div className="flex flex-col sm:flex-row gap-2">
                        <input
                          type="text"
                          value={trapNotes[i] ?? ""}
                          onChange={(ev) => setTrapNotes((n) => ({ ...n, [i]: ev.target.value }))}
                          placeholder={
                            qq.gotchas && qq.gotchas[0]
                              ? `What rule did I violate? (e.g. ${GOTCHA_LABELS[qq.gotchas[0]]})`
                              : "What rule did I violate?"
                          }
                          className="flex-1 rounded-md border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-1.5 text-sm text-gray-900 dark:text-gray-100 outline-none focus:border-blue-500"
                        />
                        <Button size="sm" variant="outline" className="gap-1" onClick={() => addQuestionToTrap(i)}>
                          <Plus className="w-4 h-4" /> Add to traps
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <Link href="/cse114/traps">
            <Button variant="outline">Open trap list</Button>
          </Link>
          <Link href="/cse114/drill">
            <Button>Drill my traps</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-gray-50 dark:bg-slate-800 p-3 text-center">
      <div className="text-xl font-bold text-gray-900 dark:text-white">{value}</div>
      <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
    </div>
  );
}
