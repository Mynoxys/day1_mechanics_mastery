import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

export interface WorkedStep {
  heading: string;
  body: ReactNode;
  result?: { label: string; value: string; color?: "amber" | "blue" | "purple" | "green" | "orange" | "red" | "cyan" };
}

export function Eq({ children }: { children: ReactNode }) {
  return (
    <div className="my-2 px-3 py-2 bg-white dark:bg-slate-700 border-l-2 border-gray-400 dark:border-slate-400 rounded font-mono text-[13px] text-gray-800 dark:text-gray-100">
      {children}
    </div>
  );
}

export function Why({ children }: { children: ReactNode }) {
  return (
    <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
      {children}
    </p>
  );
}

interface WorkedExampleProps {
  title: string;
  problemStatement: ReactNode;
  figure?: ReactNode;
  steps: WorkedStep[];
  keyInsight?: ReactNode;
  accentColor?: string;
}

const colorClasses: Record<string, string> = {
  amber: "text-amber-600 dark:text-amber-400",
  blue: "text-blue-600 dark:text-blue-400",
  purple: "text-purple-600 dark:text-purple-400",
  green: "text-green-600 dark:text-green-400",
  orange: "text-orange-600 dark:text-orange-400",
  red: "text-red-600 dark:text-red-400",
  cyan: "text-cyan-600 dark:text-cyan-400",
};

export function WorkedExample({
  title,
  problemStatement,
  figure,
  steps,
  keyInsight,
  accentColor = "#7c3aed",
}: WorkedExampleProps) {
  return (
    <Card className="interactive-panel" style={{ borderLeftWidth: 4, borderLeftColor: accentColor }}>
      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Worked Example: {title}
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">Problem Statement</h4>
          <div className="text-gray-600 dark:text-gray-300 leading-relaxed">{problemStatement}</div>
          {figure && <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4">{figure}</div>}
        </div>

        <div className="space-y-4">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">Step-by-Step Solution</h4>
          <div className="bg-gray-50 dark:bg-slate-600 p-6 rounded-lg space-y-5 text-sm">
            {steps.map((step, i) => (
              <div key={i} className={i > 0 ? "pt-3 border-t border-gray-200 dark:border-slate-500" : undefined}>
                <p className="font-bold text-base text-gray-900 dark:text-white mb-2">
                  Step {i + 1}: {step.heading}
                </p>
                <div className="text-gray-700 dark:text-gray-200 leading-relaxed space-y-2">{step.body}</div>
                {step.result && (
                  <p className="mt-3 pt-2 border-t border-dashed border-gray-300 dark:border-slate-500">
                    <strong className="text-gray-900 dark:text-white">{step.result.label}:</strong>{" "}
                    <span className={colorClasses[step.result.color ?? "purple"] + " font-bold font-mono"}>
                      {step.result.value}
                    </span>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {keyInsight && (
        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900 rounded-lg border-l-4 border-l-blue-600">
          <p className="text-gray-700 dark:text-gray-200">
            <strong>Key Insight:</strong> {keyInsight}
          </p>
        </div>
      )}
    </Card>
  );
}
