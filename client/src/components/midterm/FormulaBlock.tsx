import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

export interface VariableDef {
  symbol: string;
  meaning: string;
  units?: string;
}

interface FormulaBlockProps {
  name: string;
  formula: ReactNode;
  variables: VariableDef[];
  whenToUse?: ReactNode;
  accentColor?: string;
}

export function FormulaBlock({
  name,
  formula,
  variables,
  whenToUse,
  accentColor = "#7c3aed",
}: FormulaBlockProps) {
  return (
    <Card
      className="interactive-panel"
      style={{ borderLeftWidth: 4, borderLeftColor: accentColor }}
    >
      <div className="flex items-baseline justify-between flex-wrap gap-2 mb-3">
        <h4 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h4>
      </div>

      <div
        className="font-mono text-lg text-center py-4 px-4 mb-4 rounded-lg bg-gray-50 dark:bg-slate-700"
        style={{ color: accentColor }}
      >
        {formula}
      </div>

      <div className="space-y-2 mb-3">
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Variables:</p>
        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
          {variables.map((v, i) => (
            <li key={i} className="flex gap-2">
              <span className="font-mono font-bold" style={{ color: accentColor }}>
                {v.symbol}
              </span>
              <span>= {v.meaning}</span>
              {v.units && (
                <span className="text-gray-400 dark:text-gray-500">({v.units})</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {whenToUse && (
        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-slate-600 text-sm text-gray-600 dark:text-gray-300">
          <span className="font-semibold">When to use: </span>
          {whenToUse}
        </div>
      )}
    </Card>
  );
}
