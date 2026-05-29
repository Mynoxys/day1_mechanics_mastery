// Renders one lecture (chapter): big picture → concept sections (idea → code →
// trap) → inline drills. The teaching half of the trainer.

import { Link, useRoute } from "wouter";
import { AlertTriangle, ChevronLeft, ChevronRight, GraduationCap, Home, Lightbulb, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CodeBlock } from "@/components/cse114/CodeBlock";
import { DrillCard } from "@/components/cse114/DrillCard";
import { GOTCHA_LABELS } from "@/components/cse114/types";
import { LECTURES, getLecture, lectureNeighbors } from "@/components/cse114/lectures";

export default function LecturePage() {
  const [, params] = useRoute("/cse114/learn/:lectureId");
  const lecture = getLecture(params?.lectureId ?? "");

  if (!lecture) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <Card className="p-8 text-center max-w-md">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Lecture not found</h1>
          <Link href="/cse114/learn">
            <Button>Back to Learn</Button>
          </Link>
        </Card>
      </div>
    );
  }

  const { prev, next } = lectureNeighbors(lecture.id);
  const accent = lecture.examScope === "midterm" ? "#ea580c" : "#e11d48";

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <header className="sticky top-0 z-10 bg-white/95 dark:bg-slate-800/95 backdrop-blur border-b border-gray-200 dark:border-slate-700">
        <div className="container flex items-center justify-between py-3">
          <Link href="/cse114/learn">
            <Button variant="ghost" className="gap-2">
              <ChevronLeft className="w-4 h-4" /> All chapters
            </Button>
          </Link>
          <span className="text-sm font-mono text-gray-500">{lecture.code}</span>
          <Link href="/cse114">
            <Button variant="ghost" className="gap-2 text-sm">
              <Home className="w-4 h-4" /> Hub
            </Button>
          </Link>
        </div>
      </header>

      <article className="container max-w-3xl py-8">
        {/* title */}
        <div className="mb-6">
          <span
            className="inline-block text-white text-xs font-bold tracking-wider px-3 py-1 rounded-full mb-3"
            style={{ backgroundColor: accent }}
          >
            {lecture.examScope === "midterm" ? "MIDTERM" : "FINAL"} · {lecture.code}
          </span>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{lecture.title}</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 mt-1">{lecture.oneLiner}</p>
        </div>

        {/* big picture */}
        <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800 border-l-4 border-blue-500 p-5 mb-8">
          <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300 font-bold mb-1">
            <GraduationCap className="w-5 h-5" /> The big picture
          </div>
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{lecture.bigPicture}</p>
        </div>

        {/* concept sections */}
        <div className="space-y-6">
          {lecture.sections.map((s, i) => (
            <Card key={i} className="p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{s.heading}</h2>
              <p className="text-gray-800 dark:text-gray-100 leading-relaxed">{s.idea}</p>
              {s.detail && (
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-2">{s.detail}</p>
              )}
              {s.code && (
                <div className="mt-3">
                  <CodeBlock code={s.code} />
                  {s.codeCaption && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1.5 italic">{s.codeCaption}</p>
                  )}
                </div>
              )}
              {s.trap && (
                <div className="mt-3 rounded-lg bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-3">
                  <div className="flex items-center gap-1.5 text-amber-800 dark:text-amber-300 font-semibold text-sm mb-0.5">
                    <AlertTriangle className="w-4 h-4" /> Trap to avoid
                  </div>
                  <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">{s.trap}</p>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* drills */}
        {lecture.drills.length > 0 && (
          <section className="mt-10">
            <div className="flex items-center gap-2 mb-1">
              <Target className="w-5 h-5 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Check yourself</h2>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Answer these the way you would on the exam — no peeking. Misses can go straight to your trap list.
            </p>
            <div className="space-y-3">
              {lecture.drills.map((q, i) => (
                <DrillCard key={q.id} q={q} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* related gotchas */}
        {lecture.gotchas && lecture.gotchas.length > 0 && (
          <section className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
              Drill the traps from this chapter
            </h3>
            <div className="flex flex-wrap gap-2">
              {lecture.gotchas.map((g) => (
                <Link key={g} href={`/cse114/drill/gotcha/${g}`}>
                  <span className="inline-block px-3 py-1.5 rounded-full border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm hover:bg-amber-100 cursor-pointer">
                    {GOTCHA_LABELS[g]}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* prev / next */}
        <nav className="mt-10 flex items-center justify-between border-t border-gray-200 dark:border-slate-700 pt-5">
          {prev ? (
            <Link href={`/cse114/learn/${prev.id}`}>
              <Button variant="ghost" className="gap-2">
                <ChevronLeft className="w-4 h-4" /> {prev.code} {prev.title}
              </Button>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/cse114/learn/${next.id}`}>
              <Button variant="ghost" className="gap-2">
                {next.code} {next.title} <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          ) : (
            <span />
          )}
        </nav>

        {LECTURES.length > 0 && (
          <div className="mt-6 text-center">
            <Link href="/cse114/learn">
              <Button variant="outline">All chapters</Button>
            </Link>
          </div>
        )}
      </article>
    </div>
  );
}
