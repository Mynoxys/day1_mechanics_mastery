import { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ChapterSectionProps {
  id: string;
  number: string;
  title: string;
  accentColor: string;
  blurb?: string;
  children: ReactNode;
}

export function ChapterSection({
  id,
  number,
  title,
  accentColor,
  blurb,
  children,
}: ChapterSectionProps) {
  return (
    <section
      id={id}
      className="rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
      style={{ borderLeftWidth: 4, borderLeftColor: accentColor }}
    >
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={id} className="border-b-0">
          <AccordionTrigger className="px-5 py-4 hover:no-underline">
            <div className="flex flex-col items-start text-left">
              <div className="flex items-baseline gap-3">
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded"
                  style={{ background: accentColor + "22", color: accentColor }}
                >
                  § {number}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {title}
                </h3>
              </div>
              {blurb && (
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 font-normal">
                  {blurb}
                </p>
              )}
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-6">
            <div className="space-y-6">{children}</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
