// Learn hub: the chapter index. Walk the course lecture by lecture, midterm
// chapters then final chapters. The knowledge-prep entry point.

import { Link } from "wouter";
import { BookOpen, ChevronLeft, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LECTURES } from "@/components/cse114/lectures";
import type { Lecture } from "@/components/cse114/lectures/types";

export default function LearnHub() {
  const midterm = LECTURES.filter((l) => l.examScope === "midterm");
  const final = LECTURES.filter((l) => l.examScope === "final");

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/cse114">
            <Button variant="ghost" className="gap-2 text-gray-600 dark:text-gray-300">
              <ChevronLeft className="w-5 h-5" /> CSE 114 hub
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Learn — chapter by chapter</h1>
          <div className="w-28" />
        </div>
      </header>

      <div className="container max-w-5xl py-10 space-y-12">
        <section className="rounded-2xl bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 p-8 md:p-10">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-6 h-6 text-indigo-600" />
            <span className="text-xs font-bold tracking-wider text-indigo-700 dark:text-indigo-300 uppercase">
              Knowledge prep
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Understand the concept, then it's trap-proof.
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl">
            Each chapter leads with the plain-language idea, shows how it actually shows up in code, flags
            the trap that bites students, then drills you on it. Walk them in order — every chapter builds on
            the last.
          </p>
        </section>

        <LectureGroup title="Midterm material" subtitle="L01–L09 · due Jun 17" lectures={midterm} accent="#ea580c" />
        <LectureGroup title="Final material" subtitle="L10–L18 · due Jul 1" lectures={final} accent="#e11d48" />
      </div>
    </div>
  );
}

function LectureGroup({
  title,
  subtitle,
  lectures,
  accent,
}: {
  title: string;
  subtitle: string;
  lectures: Lecture[];
  accent: string;
}) {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
      </div>
      {lectures.length === 0 ? (
        <p className="text-sm text-gray-400 italic">Chapters coming soon.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {lectures.map((l) => (
            <Link key={l.id} href={`/cse114/learn/${l.id}`}>
              <Card
                className="p-5 hover:shadow-lg transition-shadow cursor-pointer h-full"
                style={{ borderTop: `3px solid ${accent}` }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs text-gray-400">{l.code}</span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white leading-snug">{l.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{l.oneLiner}</p>
                <div className="flex items-center gap-3 text-xs text-gray-400 mt-3">
                  <span>{l.sections.length} concepts</span>
                  <span className="flex items-center gap-1">
                    <Target className="w-3 h-3" /> {l.drills.length} drills
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
