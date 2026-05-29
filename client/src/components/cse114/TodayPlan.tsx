// "Today's Plan" panel — the primary view on the CSE 114 landing.
//
// One big header (date, days-until-next-exam), one ordered list of cards.
// Each card has its title, time estimate, deep link, and a Mark complete
// toggle that feeds back into the SR engine. Completed tasks fade — visible
// for satisfaction, demoted in the eye.

import { useState } from "react";
import { Link } from "wouter";
import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  Brain,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Circle,
  Clock,
  Lock,
  Play,
  RotateCw,
  Settings,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useSchedule } from "@/components/cse114/schedule/useSchedule";
import { addDays, prettyFull, prettyShort } from "@/components/cse114/schedule/date";
import { isCompleted } from "@/components/cse114/schedule/store";
import type { Task, TaskKind } from "@/components/cse114/schedule/types";

const KIND_ICON: Record<TaskKind, React.ReactNode> = {
  "study-new": <BookOpen className="w-5 h-5" />,
  revisit: <RotateCw className="w-5 h-5" />,
  "trap-drill": <Target className="w-5 h-5" />,
  simulator: <Play className="w-5 h-5" />,
  "gotcha-drill": <Brain className="w-5 h-5" />,
  "light-review": <CalendarDays className="w-5 h-5" />,
  exam: <Lock className="w-5 h-5" />,
};

const KIND_ACCENT: Record<TaskKind, string> = {
  "study-new": "#4f46e5", // indigo
  revisit: "#0891b2", // cyan
  "trap-drill": "#16a34a", // green
  simulator: "#ea580c", // orange
  "gotcha-drill": "#9333ea", // purple
  "light-review": "#facc15", // amber
  exam: "#dc2626", // red
};

export default function TodayPlan() {
  const { state, today, plans, todayPlan, nextExam, completeTask, uncompleteTask } = useSchedule();
  const [viewDate, setViewDate] = useState<string>(today);

  const firstDate = plans[0]?.date;
  const lastDate = plans[plans.length - 1]?.date;
  const viewPlan = plans.find((p) => p.date === viewDate) ?? todayPlan;
  const isViewingToday = !viewPlan || viewPlan.date === today;
  const canGoPrev = !!viewPlan && !!firstDate && viewPlan.date > firstDate;
  const canGoNext = !!viewPlan && !!lastDate && viewPlan.date < lastDate;
  const goPrev = () => viewPlan && canGoPrev && setViewDate(addDays(viewPlan.date, -1));
  const goNext = () => viewPlan && canGoNext && setViewDate(addDays(viewPlan.date, 1));

  if (!viewPlan) {
    return (
      <Card className="p-6 border-dashed">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Today ({today}) is outside the course window (May 28 – Jul 3, 2026). Open the calendar
          to plan a specific day.
        </p>
        <Link href="/cse114/schedule">
          <Button variant="outline" className="mt-3">
            Open calendar
          </Button>
        </Link>
      </Card>
    );
  }

  const totalRemaining = viewPlan.remainingMinutes;
  const completedCount = viewPlan.tasks.filter((t) => isCompleted(state, viewPlan.date, t.id)).length;
  const isExamDay = !!viewPlan.exam;

  return (
    <Card className="p-6 md:p-8 bg-gradient-to-br from-white via-orange-50/40 to-rose-50/40 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 border-2 border-orange-200 dark:border-slate-700">
      {/* Header — days-until-exam is the headline, day-number is demoted to a chip */}
      <div className="flex items-start justify-between gap-4 flex-wrap mb-6">
        <div className="min-w-0">
          <div className="text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400 mb-1">
            {isViewingToday ? "Today’s Plan" : "Preview"}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-none">
            <span
              className={
                nextExam.exam === "midterm"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-700"
              }
            >
              {nextExam.days}
            </span>{" "}
            <span className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-semibold">
              day{nextExam.days === 1 ? "" : "s"} until {nextExam.exam}
            </span>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{prettyFull(viewPlan.date)}</p>
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          <Link href="/cse114/schedule">
            <Button variant="outline" size="sm" className="gap-1.5">
              <CalendarDays className="w-4 h-4" /> Calendar
            </Button>
          </Link>
          <Link href="/cse114/schedule/settings">
            <Button variant="ghost" size="sm" className="gap-1.5">
              <Settings className="w-4 h-4" /> Settings
            </Button>
          </Link>
        </div>
      </div>

      {/* Day navigator — preview any day in the 37-day arc without leaving the page */}
      <div className="flex items-center justify-between gap-2 mb-4 rounded-lg border border-gray-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 px-2 py-1.5">
        <Button
          variant="ghost"
          size="sm"
          className="gap-1 h-8"
          onClick={goPrev}
          disabled={!canGoPrev}
          aria-label="Previous day"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Prev</span>
        </Button>
        <div className="text-xs text-center text-gray-600 dark:text-gray-300 min-w-0 truncate">
          {isViewingToday ? (
            <span>Viewing today · {prettyShort(viewPlan.date)}</span>
          ) : (
            <span>
              Viewing {prettyShort(viewPlan.date)} ·{" "}
              <button
                className="underline text-indigo-600 dark:text-indigo-400"
                onClick={() => setViewDate(today)}
              >
                jump to today
              </button>
            </span>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="gap-1 h-8"
          onClick={goNext}
          disabled={!canGoNext}
          aria-label="Next day"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Day summary chip row */}
      <div className="flex flex-wrap items-center gap-2 text-xs mb-5">
        <Chip tone="muted">Day {viewPlan.dayNumber} of 37</Chip>
        <Chip>
          <Clock className="w-3.5 h-3.5" />
          {viewPlan.totalMinutes} min planned
        </Chip>
        {totalRemaining > 0 && completedCount > 0 && (
          <Chip tone="amber">{totalRemaining} min remaining</Chip>
        )}
        {completedCount > 0 && (
          <Chip tone="green">
            <CheckCircle2 className="w-3.5 h-3.5" /> {completedCount} of {viewPlan.tasks.length} done
          </Chip>
        )}
        {viewPlan.isPreExam && (
          <Chip tone="amber">
            <AlertCircle className="w-3.5 h-3.5" /> Pre-exam — sleep early
          </Chip>
        )}
        {viewPlan.isRestDay && !isExamDay && <Chip tone="muted">Rest day — drill only</Chip>}
      </div>

      {/* Exam-day fast path */}
      {isExamDay && (
        <div className="rounded-xl border-2 border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/30 p-6 text-center">
          <Lock className="w-8 h-8 text-red-600 dark:text-red-400 mx-auto mb-2" />
          <div className="text-xl font-bold text-red-700 dark:text-red-300">
            {viewPlan.exam === "midterm" ? "MIDTERM" : "FINAL"} {isViewingToday ? "today" : `on ${prettyShort(viewPlan.date)}`}
          </div>
          <p className="text-sm text-red-700/80 dark:text-red-300/80 mt-1">
            Schedule is locked. Go take it.
          </p>
        </div>
      )}

      {/* Task cards */}
      {!isExamDay && (
        <ol className="space-y-3">
          {viewPlan.tasks.map((task) => {
            const done = isCompleted(state, viewPlan.date, task.id);
            return (
              <TaskRow
                key={task.id}
                task={task}
                done={done}
                onToggle={() =>
                  done ? uncompleteTask(viewPlan.date, task) : completeTask(viewPlan.date, task)
                }
              />
            );
          })}
        </ol>
      )}
    </Card>
  );
}

function Chip({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "green" | "amber" | "muted";
}) {
  const cls =
    tone === "green"
      ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200"
      : tone === "amber"
        ? "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200"
        : tone === "muted"
          ? "bg-gray-100 text-gray-600 dark:bg-slate-700 dark:text-gray-300"
          : "bg-white/70 text-gray-700 dark:bg-slate-700/60 dark:text-gray-200";
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-medium ${cls}`}>
      {children}
    </span>
  );
}

function TaskRow({
  task,
  done,
  onToggle,
}: {
  task: Task;
  done: boolean;
  onToggle: () => void;
}) {
  const icon = KIND_ICON[task.kind];
  const accent = KIND_ACCENT[task.kind];
  return (
    <li
      className={`group rounded-lg border bg-white dark:bg-slate-800 transition-all ${
        done
          ? "border-emerald-200 dark:border-emerald-800 opacity-60"
          : "border-gray-200 dark:border-slate-700 hover:shadow-md"
      }`}
      style={{ borderLeft: `4px solid ${accent}` }}
    >
      <div className="p-4 flex items-start gap-3">
        <button
          onClick={onToggle}
          className="mt-0.5 shrink-0 text-gray-400 hover:text-emerald-600 dark:text-gray-500 dark:hover:text-emerald-400 transition-colors"
          aria-label={done ? "Mark incomplete" : "Mark complete"}
          title={done ? "Mark incomplete" : "Mark complete"}
        >
          {done ? (
            <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          ) : (
            <Circle className="w-6 h-6" />
          )}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span style={{ color: accent }}>{icon}</span>
            <h3
              className={`font-semibold text-gray-900 dark:text-white ${
                done ? "line-through decoration-emerald-500" : ""
              }`}
            >
              {task.title}
            </h3>
            <span className="text-xs text-gray-500 dark:text-gray-400 inline-flex items-center gap-1">
              <Clock className="w-3 h-3" /> {task.estMinutes} min
            </span>
          </div>
          {task.subtitle && (
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{task.subtitle}</p>
          )}
        </div>

        {task.href && (
          <Link href={task.href}>
            <Button
              variant={done ? "ghost" : "default"}
              size="sm"
              className="shrink-0 gap-1.5"
            >
              Open <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        )}
      </div>
    </li>
  );
}
