import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, RotateCcw, Play } from "lucide-react";
import type { TraceStep } from "./types";

interface CodeTraceProps {
  code: string;
  steps: TraceStep[];
  accentColor?: string;
  varOrder?: string[];
}

export function CodeTrace({
  code,
  steps,
  accentColor = "#2563eb",
  varOrder,
}: CodeTraceProps) {
  const [stepIdx, setStepIdx] = useState(0);
  const lines = code.replace(/\n$/, "").split("\n");
  const current = steps[stepIdx];
  const seen: Record<string, true> = {};
  steps.forEach((s) => Object.keys(s.vars).forEach((k) => (seen[k] = true)));
  const allVars = Object.keys(seen);
  const orderedVars = varOrder ? varOrder.filter((v) => seen[v]) : allVars;

  return (
    <div className="space-y-3">
      <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-slate-600 bg-gray-900 text-gray-100 font-mono text-sm">
        {lines.map((line, i) => {
          const isActive = i + 1 === current?.line;
          return (
            <div
              key={i}
              className="flex"
              style={
                isActive
                  ? { backgroundColor: accentColor + "33" }
                  : undefined
              }
            >
              <span className="px-2 py-0.5 text-gray-500 select-none w-10 text-right border-r border-gray-700">
                {i + 1}
              </span>
              <span className="px-3 py-0.5 whitespace-pre">{line || " "}</span>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setStepIdx(0)}
          disabled={stepIdx === 0}
        >
          <RotateCcw className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setStepIdx((s) => Math.max(0, s - 1))}
          disabled={stepIdx === 0}
        >
          <ChevronLeft className="w-4 h-4" /> Prev
        </Button>
        <Button
          size="sm"
          onClick={() =>
            setStepIdx((s) => Math.min(steps.length - 1, s + 1))
          }
          disabled={stepIdx >= steps.length - 1}
          style={{ backgroundColor: accentColor }}
        >
          Next <ChevronRight className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setStepIdx(steps.length - 1)}
          disabled={stepIdx >= steps.length - 1}
        >
          <Play className="w-4 h-4" /> End
        </Button>
        <span className="text-xs text-gray-500 dark:text-gray-400 ml-auto font-mono">
          step {stepIdx + 1} / {steps.length}
        </span>
      </div>

      {current && (
        <div className="rounded-lg border border-gray-200 dark:border-slate-600 p-3 bg-gray-50 dark:bg-slate-700">
          <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 font-semibold mb-1">
            Variables
          </div>
          <div className="flex flex-wrap gap-3 font-mono text-sm">
            {orderedVars.map((k) => (
              <div
                key={k}
                className="px-2 py-1 rounded bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600"
              >
                <span className="text-gray-500 dark:text-gray-400 mr-1">
                  {k}
                </span>
                <span style={{ color: accentColor }} className="font-bold">
                  {String(current.vars[k] ?? "—")}
                </span>
              </div>
            ))}
          </div>
          {current.output !== undefined && (
            <div className="mt-2 text-xs text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Output:</span>{" "}
              <span className="font-mono">{current.output || "(none)"}</span>
            </div>
          )}
          {current.note && (
            <div className="mt-2 text-xs text-gray-600 dark:text-gray-300 italic">
              {current.note}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
