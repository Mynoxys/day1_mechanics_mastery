import { ReactNode } from "react";
import { Check, X } from "lucide-react";

interface MultipleChoiceProps {
  choices: ReactNode[];
  selected: number | null;
  onSelect: (index: number) => void;
  correctIndex?: number;
  graded?: boolean;
  accentColor?: string;
}

export function MultipleChoice({
  choices,
  selected,
  onSelect,
  correctIndex,
  graded = false,
  accentColor = "#2563eb",
}: MultipleChoiceProps) {
  return (
    <div className="space-y-2">
      {choices.map((choice, i) => {
        const isSelected = selected === i;
        const isCorrect = graded && correctIndex === i;
        const isWrongPick = graded && isSelected && correctIndex !== i;

        const baseClasses =
          "flex items-start gap-3 w-full p-3 rounded-lg border text-left transition-colors";
        let style: React.CSSProperties = {};
        let stateClass = "border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700";
        if (isSelected && !graded) {
          style = { borderColor: accentColor, backgroundColor: accentColor + "15" };
          stateClass = "";
        }
        if (isCorrect) {
          stateClass = "border-green-500 bg-green-50 dark:bg-green-900/30";
        } else if (isWrongPick) {
          stateClass = "border-red-500 bg-red-50 dark:bg-red-900/30";
        }

        return (
          <button
            key={i}
            type="button"
            disabled={graded}
            onClick={() => onSelect(i)}
            className={`${baseClasses} ${stateClass}`}
            style={style}
          >
            <span
              className="mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0"
              style={{
                borderColor: isSelected || isCorrect ? accentColor : "#cbd5e1",
                backgroundColor: isSelected ? accentColor : "white",
              }}
            >
              {isSelected && !graded && (
                <span className="w-2 h-2 rounded-full bg-white" />
              )}
              {isCorrect && <Check className="w-3 h-3 text-green-600" />}
              {isWrongPick && <X className="w-3 h-3 text-red-600" />}
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
