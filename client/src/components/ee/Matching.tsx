import { ReactNode } from "react";
import { Check, X } from "lucide-react";

interface MatchingProps {
  leftItems: ReactNode[];
  rightOptions: string[];
  selections: (string | null)[];
  onChange: (leftIndex: number, value: string | null) => void;
  correctMapping?: string[];
  graded?: boolean;
  accentColor?: string;
}

export function Matching({
  leftItems,
  rightOptions,
  selections,
  onChange,
  correctMapping,
  graded = false,
  accentColor = "#2563eb",
}: MatchingProps) {
  return (
    <div className="space-y-2">
      {leftItems.map((left, i) => {
        const sel = selections[i];
        const correct = correctMapping?.[i];
        const isCorrect = graded && sel === correct;
        const isWrong = graded && sel !== null && sel !== correct;

        let stateClass =
          "border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800";
        if (isCorrect) stateClass = "border-green-500 bg-green-50 dark:bg-green-900/30";
        if (isWrong) stateClass = "border-red-500 bg-red-50 dark:bg-red-900/30";

        return (
          <div
            key={i}
            className={`flex items-center gap-3 p-3 rounded-lg border ${stateClass}`}
          >
            <div className="flex-1 text-sm font-mono text-gray-900 dark:text-gray-100">
              {left}
            </div>
            <span className="text-gray-400">→</span>
            <select
              disabled={graded}
              value={sel ?? ""}
              onChange={(e) => onChange(i, e.target.value || null)}
              className="rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-1.5 text-sm font-mono"
              style={
                sel && !graded
                  ? { borderColor: accentColor }
                  : undefined
              }
            >
              <option value="">— select —</option>
              {rightOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {graded && (
              <span className="w-5 flex items-center justify-center">
                {isCorrect && <Check className="w-4 h-4 text-green-600" />}
                {isWrong && <X className="w-4 h-4 text-red-600" />}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
