import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { BlockMath, InlineMath } from "./Katex";

export interface MathVarDef {
  symbol: string;
  meaning: string;
  units?: string;
}

interface MathFormulaProps {
  name: string;
  latex: string;
  variables?: MathVarDef[];
  whenToUse?: ReactNode;
  accentColor?: string;
}

export function MathFormula({
  name,
  latex,
  variables,
  whenToUse,
  accentColor = "#2563eb",
}: MathFormulaProps) {
  return (
    <Card
      className="interactive-panel h-full"
      style={{ borderLeftWidth: 4, borderLeftColor: accentColor }}
    >
      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{name}</h4>

      <div
        className="py-4 px-3 mb-3 rounded-lg bg-gray-50 dark:bg-slate-700 overflow-x-auto"
        style={{ color: accentColor }}
      >
        <BlockMath math={latex} />
      </div>

      {variables && variables.length > 0 && (
        <div className="space-y-1.5">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Variables
          </p>
          <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
            {variables.map((v, i) => (
              <li key={i} className="flex items-baseline gap-2">
                <span style={{ color: accentColor }}>
                  <InlineMath math={v.symbol} />
                </span>
                <span>= {v.meaning}</span>
                {v.units && (
                  <span className="text-gray-400 dark:text-gray-500 text-xs">
                    ({v.units})
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {whenToUse && (
        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-slate-600 text-sm text-gray-600 dark:text-gray-300">
          <span className="font-semibold">When to use: </span>
          {whenToUse}
        </div>
      )}
    </Card>
  );
}
