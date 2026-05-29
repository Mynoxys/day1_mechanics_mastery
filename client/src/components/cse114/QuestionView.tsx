// Renders any Question for input (exam / drill) or result display. Self-contained
// styling with a `lockdown` variant (forced dark, monospace) so it looks right on
// the black exam screen without depending on the app's theme class. Code-question
// self-grading (right/wrong buttons) is owned by the parent, not here.

import { type KeyboardEvent } from "react";
import { Check, X } from "lucide-react";
import { CodeBlock } from "./CodeBlock";
import type { GradeResult, UserAnswer } from "./store";
import type { Question } from "./types";

export function emptyAnswer(q: Question): UserAnswer {
  switch (q.type) {
    case "mc":
      return { kind: "choice", index: null };
    case "multi":
      return { kind: "choices", indices: [] };
    case "trace":
      return { kind: "fields", values: {} };
    default:
      return { kind: "text", value: "" };
  }
}

/** Renders inline `code` spans inside a prompt; preserves newlines via the wrapper. */
function Inline({ text, lockdown }: { text: string; lockdown?: boolean }) {
  const codeCls = lockdown
    ? "font-mono text-[0.9em] px-1 rounded bg-neutral-800 text-amber-300"
    : "font-mono text-[0.9em] px-1 rounded bg-gray-100 dark:bg-slate-700 text-pink-600 dark:text-pink-400";
  return (
    <>
      {text.split("`").map((part, i) =>
        i % 2 === 1 ? (
          <code key={i} className={codeCls}>
            {part}
          </code>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

interface QuestionViewProps {
  question: Question;
  answer: UserAnswer;
  onChange: (a: UserAnswer) => void;
  disabled?: boolean;
  showResult?: boolean;
  result?: GradeResult;
  lockdown?: boolean;
}

export function QuestionView({
  question: q,
  answer,
  onChange,
  disabled = false,
  showResult = false,
  result,
  lockdown = false,
}: QuestionViewProps) {
  const textMain = lockdown ? "text-neutral-100" : "text-gray-900 dark:text-gray-100";
  const inputCls = lockdown
    ? "bg-neutral-900 border border-neutral-700 text-neutral-100 placeholder-neutral-600 focus:border-neutral-400"
    : "bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-gray-900 dark:text-gray-100 focus:border-blue-500";

  function choiceClass(i: number, multi = false): string {
    const base =
      "flex items-start gap-3 w-full p-3 rounded-lg border text-left transition-colors font-mono text-sm";
    const selected = multi
      ? answer.kind === "choices" && answer.indices.includes(i)
      : answer.kind === "choice" && answer.index === i;

    if (showResult) {
      const isCorrect = multi
        ? (q.type === "multi" && q.correctIndices.includes(i))
        : q.type === "mc" && q.correctIndex === i;
      const isWrongPick = selected && !isCorrect;
      if (isCorrect) return `${base} border-green-500 bg-green-50 dark:bg-green-900/30 text-gray-900 dark:text-gray-100`;
      if (isWrongPick) return `${base} border-red-500 bg-red-50 dark:bg-red-900/30 text-gray-900 dark:text-gray-100`;
      return lockdown
        ? `${base} border-neutral-700 text-neutral-300`
        : `${base} border-gray-200 dark:border-slate-600 text-gray-500`;
    }
    if (selected) {
      return lockdown
        ? `${base} border-white bg-neutral-800 text-white`
        : `${base} border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-gray-900 dark:text-gray-100`;
    }
    return lockdown
      ? `${base} border-neutral-700 text-neutral-200 hover:bg-neutral-800`
      : `${base} border-gray-200 dark:border-slate-600 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-slate-700`;
  }

  function ResultRow() {
    if (!showResult || !result) return null;
    const ok = result.correct === true;
    return (
      <div
        className={`mt-3 rounded-md p-3 text-sm ${
          ok
            ? "bg-green-50 dark:bg-green-900/30 border-l-4 border-green-600"
            : "bg-red-50 dark:bg-red-900/30 border-l-4 border-red-600"
        }`}
      >
        <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
          {ok ? <Check className="w-4 h-4 text-green-600" /> : <X className="w-4 h-4 text-red-600" />}
          {ok ? "Correct" : "Not quite"}
        </div>
        {!ok && (
          <div className="mt-1 text-gray-700 dark:text-gray-200">
            <span className="font-semibold">Correct answer:</span>{" "}
            <span className="font-mono whitespace-pre-wrap">{result.correctAnswerText}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <div className={`leading-relaxed whitespace-pre-wrap ${textMain}`}>
        <Inline text={q.prompt} lockdown={lockdown} />
      </div>

      {q.code && <CodeBlock code={q.code} lockdown={lockdown} className="mt-3" />}

      <div className="mt-4 space-y-3">
        {/* ---- Multiple choice ---- */}
        {q.type === "mc" && (
          <div className="space-y-2">
            {q.choices.map((c, i) => (
              <button
                key={i}
                type="button"
                disabled={disabled}
                onClick={() => onChange({ kind: "choice", index: i })}
                className={choiceClass(i)}
              >
                <span className="font-bold opacity-60">{String.fromCharCode(65 + i)}.</span>
                <span className="flex-1 whitespace-pre-wrap">{c}</span>
              </button>
            ))}
          </div>
        )}

        {/* ---- Select all that apply ---- */}
        {q.type === "multi" && (
          <div className="space-y-2">
            {q.choices.map((c, i) => {
              const picked = answer.kind === "choices" && answer.indices.includes(i);
              return (
                <button
                  key={i}
                  type="button"
                  disabled={disabled}
                  onClick={() => {
                    if (answer.kind !== "choices") return;
                    const set = new Set(answer.indices);
                    set.has(i) ? set.delete(i) : set.add(i);
                    onChange({ kind: "choices", indices: Array.from(set) });
                  }}
                  className={choiceClass(i, true)}
                >
                  <span
                    className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${
                      picked ? "bg-blue-600 border-blue-600" : "border-current opacity-60"
                    }`}
                  >
                    {picked && <Check className="w-3 h-3 text-white" />}
                  </span>
                  <span className="flex-1 whitespace-pre-wrap">{c}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* ---- Short answer ---- */}
        {q.type === "short" && (
          <input
            type="text"
            disabled={disabled}
            value={answer.kind === "text" ? answer.value : ""}
            onChange={(e) => onChange({ kind: "text", value: e.target.value })}
            placeholder="your answer"
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
            className={`w-full rounded-md px-3 py-2 font-mono text-sm outline-none ${inputCls}`}
          />
        )}

        {/* ---- Output prediction (can be multi-line) ---- */}
        {q.type === "output" && (
          <textarea
            disabled={disabled}
            value={answer.kind === "text" ? answer.value : ""}
            onChange={(e) => onChange({ kind: "text", value: e.target.value })}
            placeholder="exact printed output"
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
            rows={3}
            className={`w-full rounded-md px-3 py-2 font-mono text-sm outline-none resize-y ${inputCls}`}
          />
        )}

        {/* ---- Trace / assignment grid ---- */}
        {q.type === "trace" && (
          <div className="space-y-2">
            {q.fields.map((f) => {
              const val =
                answer.kind === "fields" ? (answer.values[f.label] ?? "") : "";
              return (
                <div key={f.label} className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <code
                    className={`flex-1 font-mono text-[13px] px-2 py-1 rounded ${
                      lockdown ? "bg-neutral-900 text-neutral-200" : "bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-100"
                    }`}
                  >
                    {f.label}
                  </code>
                  <input
                    type="text"
                    disabled={disabled}
                    value={val}
                    onChange={(e) => {
                      if (answer.kind !== "fields") return;
                      onChange({
                        kind: "fields",
                        values: { ...answer.values, [f.label]: e.target.value },
                      });
                    }}
                    placeholder="value"
                    spellCheck={false}
                    autoComplete="off"
                    className={`sm:w-40 rounded-md px-3 py-1.5 font-mono text-sm outline-none ${inputCls}`}
                  />
                </div>
              );
            })}
          </div>
        )}

        {/* ---- Free-form code ---- */}
        {q.type === "code" && (
          <textarea
            disabled={disabled}
            value={answer.kind === "text" ? answer.value : ""}
            onChange={(e) => onChange({ kind: "text", value: e.target.value })}
            onKeyDown={(e: KeyboardEvent<HTMLTextAreaElement>) => {
              if (e.key === "Tab") {
                e.preventDefault();
                const ta = e.currentTarget;
                const { selectionStart: s, selectionEnd: en, value } = ta;
                const next = value.slice(0, s) + "    " + value.slice(en);
                onChange({ kind: "text", value: next });
                requestAnimationFrame(() => {
                  ta.selectionStart = ta.selectionEnd = s + 4;
                });
              }
            }}
            placeholder="// write your code here — no autocomplete, just like the real exam"
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            data-gramm="false"
            rows={14}
            className={`w-full rounded-md px-3 py-2 font-mono text-[13px] leading-relaxed outline-none resize-y ${inputCls}`}
          />
        )}
      </div>

      {/* Objective-type result feedback (code uses parent's self-grade UI). */}
      {q.type !== "code" && <ResultRow />}

      {/* Code: show the reference solution + rubric in result mode. */}
      {q.type === "code" && showResult && (
        <div className="mt-4 space-y-3">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">
              Reference solution
            </div>
            <CodeBlock code={q.referenceSolution} />
          </div>
          {q.rubric && q.rubric.length > 0 && (
            <div className="rounded-md bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-600 p-3 text-sm">
              <div className="font-semibold text-gray-900 dark:text-white mb-1">
                Did your answer cover these?
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-gray-700 dark:text-gray-200">
                {q.rubric.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
