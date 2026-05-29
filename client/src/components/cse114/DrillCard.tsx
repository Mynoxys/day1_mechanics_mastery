// A single self-contained practice question with immediate feedback: render,
// Check, reveal explanation, and (for code) self-grade against the reference.
// Wrong answers can be one-click added to the trap list, unifying learn → trap.
// Used inline on lecture pages.

import { useState } from "react";
import { Check, Lightbulb, Plus, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { QuestionView, emptyAnswer } from "./QuestionView";
import { addTrap, gradeAnswer, type GradeResult, type UserAnswer } from "./store";
import { GOTCHA_LABELS, type Question } from "./types";

export function DrillCard({ q, index }: { q: Question; index?: number }) {
  const [answer, setAnswer] = useState<UserAnswer>(() => emptyAnswer(q));
  const [result, setResult] = useState<GradeResult | null>(null);
  const [phase, setPhase] = useState<"answering" | "selfgrade" | "done">("answering");
  const [correct, setCorrect] = useState(false);
  const [showWhy, setShowWhy] = useState(false);
  const [trapped, setTrapped] = useState(false);

  function check() {
    const r = gradeAnswer(q, answer);
    setResult(r);
    if (q.type === "code") {
      setPhase("selfgrade");
    } else {
      setCorrect(r.correct === true);
      setPhase("done");
    }
  }

  function finishCode(ok: boolean) {
    setCorrect(ok);
    setPhase("done");
  }

  function addToTraps() {
    addTrap({
      questionId: q.id,
      questionSnapshot: q,
      myWrongAnswer: result?.myAnswerText ?? "",
      ruleViolated: q.gotchas?.[0] ? GOTCHA_LABELS[q.gotchas[0]] : "review this",
      topic: q.topic,
      gotchas: q.gotchas ?? [],
    });
    setTrapped(true);
    toast.success("Added to trap list");
  }

  const showResult = phase === "done" || phase === "selfgrade";
  const isWrong = phase === "done" && !correct;

  return (
    <div className="rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4">
      {index !== undefined && (
        <div className="text-xs font-semibold text-gray-400 mb-2">Drill {index + 1}</div>
      )}
      <QuestionView
        question={q}
        answer={answer}
        onChange={setAnswer}
        disabled={phase !== "answering"}
        showResult={showResult}
        result={result ?? undefined}
      />

      {phase === "selfgrade" && (
        <div className="mt-3 flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            Compare to the reference — did you get it right?
          </span>
          <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={() => finishCode(true)}>
            <Check className="w-4 h-4 mr-1" /> Yes
          </Button>
          <Button size="sm" className="bg-red-600 hover:bg-red-700" onClick={() => finishCode(false)}>
            <X className="w-4 h-4 mr-1" /> No
          </Button>
        </div>
      )}

      {showResult && (
        <div className="mt-3">
          <button
            type="button"
            onClick={() => setShowWhy((s) => !s)}
            className="flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400"
          >
            <Lightbulb className="w-4 h-4" /> {showWhy ? "Hide" : "Why"}
          </button>
          {showWhy && (
            <p className="mt-1 text-sm text-gray-700 dark:text-gray-200 leading-relaxed">{q.explanation}</p>
          )}
        </div>
      )}

      <div className="mt-4 flex items-center justify-between">
        {phase === "answering" ? (
          <Button size="sm" onClick={check}>
            Check
          </Button>
        ) : (
          <span />
        )}
        {isWrong &&
          (trapped ? (
            <span className="text-xs text-emerald-600 flex items-center gap-1">
              <Check className="w-3.5 h-3.5" /> in trap list
            </span>
          ) : (
            <Button size="sm" variant="outline" className="gap-1" onClick={addToTraps}>
              <Plus className="w-4 h-4" /> Add to traps
            </Button>
          ))}
      </div>
    </div>
  );
}
