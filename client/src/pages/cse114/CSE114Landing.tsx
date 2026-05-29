// CSE 114 hub: launch an exam simulation, work the trap list, or drill a single
// gotcha. Mirrors the EE/Math landing layout (sticky header, hero, card grids).

import { Link } from "wouter";
import {
  AlertTriangle,
  BookOpen,
  Bug,
  ChevronLeft,
  Clock,
  GraduationCap,
  ListChecks,
  Play,
  Target,
} from "lucide-react";
import { LECTURES } from "@/components/cse114/lectures";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTraps } from "@/components/cse114/useTraps";
import { EXAM_REGISTRY } from "@/components/cse114/exams";
import { GOTCHA_LABELS, type Gotcha } from "@/components/cse114/types";
import TodayPlan from "@/components/cse114/TodayPlan";

export default function CSE114Landing() {
  const { active, mastered } = useTraps();
  const midtermExams = EXAM_REGISTRY.filter((e) => e.examType === "midterm");
  const finalExams = EXAM_REGISTRY.filter((e) => e.examType === "final");

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <Button variant="ghost" className="gap-2 text-gray-600 dark:text-gray-300">
              <ChevronLeft className="w-5 h-5" /> Back to Home
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">CSE 114 · Intro to OOP (Java)</h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container max-w-5xl py-10 space-y-14">
        {/* TODAY'S PLAN — the primary dashboard. Replaces the static hero. */}
        <section>
          <TodayPlan />
        </section>

        {/* learn — knowledge prep comes first */}
        <section>
          <SectionHead
            icon={<BookOpen className="w-5 h-5" />}
            title="Learn — chapter by chapter"
            sub="Understand each concept (trap-proof) before you drill it. Start here."
          />
          <Link href="/cse114/learn">
            <Card
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
              style={{ borderLeft: "4px solid #4f46e5" }}
            >
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {LECTURES.length} chapters · L01 → L18
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 max-w-xl">
                    Plain-language idea → how it shows up in code → the trap to avoid → drills. Misses go
                    straight to your trap list.
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-5 py-3 font-semibold">
                  <BookOpen className="w-5 h-5" /> Open chapters
                </span>
              </div>
            </Card>
          </Link>
        </section>

        {/* exam simulator */}
        <section>
          <SectionHead icon={<Play className="w-5 h-5" />} title="Exam Simulator" sub="Then test under LockDown conditions — real practice exams." />
          <div className="space-y-6">
            <ExamGroup title="Midterm practice" exams={midtermExams} accent="#ea580c" />
            <ExamGroup title="Final practice" exams={finalExams} accent="#e11d48" />
          </div>
        </section>

        {/* trap system */}
        <section>
          <SectionHead icon={<ListChecks className="w-5 h-5" />} title="Trap System" sub="Your logged mistakes — browse them or drill them to mastery." />
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/cse114/traps">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full" style={{ borderLeft: "4px solid #6366f1" }}>
                <ListChecks className="w-7 h-7 text-indigo-500 mb-2" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Browse trap list</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  <span className="font-bold">{active.length}</span> active ·{" "}
                  <span className="font-bold text-emerald-600">{mastered.length}</span> mastered
                </p>
              </Card>
            </Link>
            <Link href="/cse114/drill">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full" style={{ borderLeft: "4px solid #16a34a" }}>
                <Target className="w-7 h-7 text-emerald-500 mb-2" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Drill active traps</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  Untimed, immediate feedback. 3 right in a row masters a trap.
                </p>
              </Card>
            </Link>
          </div>
        </section>

        {/* practice by gotcha */}
        <section>
          <SectionHead icon={<Bug className="w-5 h-5" />} title="Practice by gotcha" sub="Drill one classic Java trap at a time, pulled from the exam bank." />
          <div className="flex flex-wrap gap-2">
            {(Object.keys(GOTCHA_LABELS) as Gotcha[]).map((g) => (
              <Link key={g} href={`/cse114/drill/gotcha/${g}`}>
                <span className="inline-block px-3 py-1.5 rounded-full border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm hover:bg-amber-100 dark:hover:bg-amber-900/50 cursor-pointer transition-colors">
                  {GOTCHA_LABELS[g]}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* how to use */}
        <section>
          <Card className="p-7 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-800">
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">The loop that gets you the A</h3>
            </div>
            <ol className="space-y-1.5 text-gray-700 dark:text-gray-200 list-decimal list-inside text-sm">
              <li>Take a practice exam in the simulator — commit to each answer, no peeking back.</li>
              <li>In review, grade your code honestly and add every miss to the trap list.</li>
              <li>Drill your traps until each is mastered (3 correct in a row).</li>
              <li>Retake the same exam, then move to the next one. Watch the trap count fall.</li>
            </ol>
          </Card>
        </section>
      </div>
    </div>
  );
}

function SectionHead({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-2 text-gray-900 dark:text-white">
        {icon}
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{sub}</p>
    </div>
  );
}

function ExamGroup({
  title,
  exams,
  accent,
}: {
  title: string;
  exams: typeof EXAM_REGISTRY;
  accent: string;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
        {title}
      </h3>
      {exams.length === 0 ? (
        <p className="text-sm text-gray-400 dark:text-gray-500 italic">More coming as they're transcribed.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {exams.map((e) => (
            <Link key={e.id} href={`/cse114/sim/${e.id}`}>
              <Card
                className="p-5 hover:shadow-lg transition-shadow cursor-pointer h-full"
                style={{ borderTop: `3px solid ${accent}` }}
              >
                <h4 className="font-bold text-gray-900 dark:text-white">{e.title}</h4>
                <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mt-2">
                  <span>{e.questions.length} questions</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {e.durationMinutes}m
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400 mt-3">
                  <AlertTriangle className="w-3.5 h-3.5" /> LockDown conditions
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
