import { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export interface ProblemPart {
  label: string; // e.g. "(a)"
  question: ReactNode;
  solutionSteps: ReactNode;
  answer: { value: string; unit?: string };
}

interface PracticeProblemProps {
  title: string;
  statement: ReactNode;
  figure?: ReactNode;
  parts: ProblemPart[];
  accentColor?: string;
}

export function PracticeProblem({
  title,
  statement,
  figure,
  parts,
  accentColor = "#0ea5e9",
}: PracticeProblemProps) {
  return (
    <Card
      className="interactive-panel"
      style={{ borderLeftWidth: 4, borderLeftColor: accentColor }}
    >
      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{title}</h4>
      <div className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{statement}</div>
      {figure && (
        <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4 mb-4">{figure}</div>
      )}

      <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-2">
        Try each part on your own first, then expand to check.
      </p>

      <Accordion type="multiple" className="w-full">
        {parts.map((part, i) => (
          <AccordionItem key={i} value={`part-${i}`}>
            <AccordionTrigger className="text-base">
              <span>
                <span className="font-bold mr-2" style={{ color: accentColor }}>
                  {part.label}
                </span>
                {part.question}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="bg-gray-50 dark:bg-slate-600 p-4 rounded-lg space-y-2 font-mono text-sm text-gray-700 dark:text-gray-200">
                {part.solutionSteps}
                <div className="pt-2 mt-2 border-t border-gray-300 dark:border-slate-500">
                  <span className="font-bold">Answer: </span>
                  <span
                    className="font-bold"
                    style={{ color: accentColor }}
                  >
                    {part.answer.value}
                    {part.answer.unit ? ` ${part.answer.unit}` : ""}
                  </span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  );
}
