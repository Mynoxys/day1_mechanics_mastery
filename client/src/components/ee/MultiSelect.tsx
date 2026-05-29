import { ReactNode } from "react";
import { Check, X } from "lucide-react";

interface MultiSelectProps {
  choices: ReactNode[];
  selected: number[];
  onToggle: (index: number) => void;
  correctIndices?: number[];
  graded?: boolean;
  accentColor?: string;
}

export function MultiSelect({
  choices,
  selected,
  onToggle,
  correctIndices = [],
  graded = false,
  accentColor = "#2563eb",
}: MultiSelectProps) {
  return (
    <div className="space-y-2">
      {choices.map((choice, i) => {
        const isSelected = selected.includes(i);
        const shouldBeChecked = correctIndices.includes(i);
        const correctChecked = graded && isSelected && shouldBeChecked;
        const incorrectChecked = graded && isSelected && !shouldBeChecked;
        const missed = graded && !isSelected && shouldBeChecked;

        let stateClass =
          "border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700";
        let style: React.CSSProperties = {};
        if (isSelected && !graded) {
          style = { borderColor: accentColor, backgroundColor: accentColor + "15" };
          stateClass = "";
        }
        if (correctChecked) stateClass = "border-green-500 bg-green-50 dark:bg-green-900/30";
        if (incorrectChecked) stateClass = "border-red-500 bg-red-50 dark:bg-red-900/30";
        if (missed) stateClass = "border-amber-500 bg-amber-50 dark:bg-amber-900/30";

        return (
          <button
            key={i}
            type="button"
            disabled={graded}
            onClick={() => onToggle(i)}
            className={`flex items-start gap-3 w-full p-3 rounded-lg border text-left transition-colors ${stateClass}`}
            style={style}
          >
            <span
              className="mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0"
              style={{
                borderColor: isSelected || shouldBeChecked ? accentColor : "#cbd5e1",
                backgroundColor: isSelected ? accentColor : "white",
              }}
            >
              {isSelected && !graded && <Check className="w-3 h-3 text-white" />}
              {correctChecked && <Check className="w-3 h-3 text-white" />}
              {incorrectChecked && <X className="w-3 h-3 text-white" />}
              {missed && <Check className="w-3 h-3 text-amber-600" />}
            </span>
            <div className="flex-1 text-sm text-gray-900 dark:text-gray-100">
              {choice}
            </div>
          </button>
        );
      })}
    </div>
  );
}
