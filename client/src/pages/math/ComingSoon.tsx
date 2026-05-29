import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, Hammer } from "lucide-react";
import { Link } from "wouter";
import { ReactNode } from "react";

interface Props {
  title: string;
  phase: string;
  blurb: ReactNode;
  accentColor?: string;
}

export function ComingSoon({ title, phase, blurb, accentColor = "#2563eb" }: Props) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <header
        className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm"
        style={{ borderTopWidth: 4, borderTopColor: accentColor }}
      >
        <div className="container flex items-center justify-between py-4">
          <Link href="/math">
            <Button variant="ghost" className="flex items-center gap-2">
              <ChevronLeft className="w-5 h-5" />
              Back to Math
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container py-16">
        <Card
          className="max-w-2xl mx-auto p-10 text-center"
          style={{ borderTop: `4px solid ${accentColor}` }}
        >
          <Hammer
            className="w-12 h-12 mx-auto mb-4"
            style={{ color: accentColor }}
          />
          <span
            className="inline-block text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-3"
            style={{ background: accentColor }}
          >
            {phase}
          </span>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            {title}
          </h2>
          <div className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
            {blurb}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/math">
              <Button variant="outline">Back to Math hub</Button>
            </Link>
            <Link href="/math/cheat-sheet">
              <Button style={{ background: accentColor, color: "white" }}>
                Open cheat sheet (live now)
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
