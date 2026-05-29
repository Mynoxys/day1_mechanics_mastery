// /cse114/schedule — calendar view of the whole 37-day arc.
//
// Grid is week-rows × 7 days, starting on the weekday COURSE_START_DATE lands
// on (Thursday for May 28, 2026). Each cell shows the day number, the date,
// the headline scheduled item, and a status tint. Click a cell to open the
// full task list for that day in a panel below.

import { useState } from "react";
import { Link } from "wouter";
import { CalendarDays, ChevronLeft, Clock, Lock, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useSchedule } from "@/components/cse114/schedule/useSchedule";
import {
  fromISODate,
  prettyFull,
} from "@/components/cse114/schedule/date";
import { isCompleted } from "@/components/cse114/schedule/store";
import type {
  DayPlan,
  DayStatus,
  Task,
  TaskKind,
} from "@/components/cse114/schedule/types";

const STATUS_BG: Record<DayStatus, string> = {
  scheduled: "bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700",
  completed: "bg-emerald-50 dark:bg-emerald-900/30 border-emerald-300 dark:border-emerald-700",
  partial: "bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700",
  skipped: "bg-rose-50 dark:bg-rose-900/20 border-rose-300 dark:border-rose-700",
  locked: "bg-red-50 dark:bg-red-900/30 border-2 border-red-500 dark:border-red-500",
};

const STATUS_LABEL: Record<DayStatus, string> = {
  scheduled: "Scheduled",
  completed: "Completed",
  partial: "Partial",
  skipped: "Skipped",
  locked: "Exam day",
};

const KIND_LABEL: Record<TaskKind, string> = {
  "study-new": "Study",
  revisit: "Revisit",
  "trap-drill": "Trap",
  simulator: "Sim",
  "gotcha-drill": "Gotcha",
  "light-review": "Review",
  exam: "EXAM",
};

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function SchedulePage() {
  const { plans, today, state } = useSchedule();
  const [selected, setSelected] = useState<string>(today);

  const selectedPlan = plans.find((p) => p.date === selected) ?? plans[0];

  // Pre-pad the first week so day-of-week alignment is correct.
  const first = plans[0];
  const leadingBlanks = first ? first.weekday : 0;
  const cells: (DayPlan | null)[] = [
    ...Array.from({ length: leadingBlanks }, () => null),
    ...plans,
  ];
  // Pad trailing so the grid ends on Saturday.
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/cse114">
            <Button variant="ghost" className="gap-2 text-gray-600 dark:text-gray-300">
              <ChevronLeft className="w-5 h-5" /> CSE 114
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <CalendarDays className="w-5 h-5" /> Schedule — 37 days
          </h1>
          <Link href="/cse114/schedule/settings">
            <Button variant="outline" size="sm" className="gap-1.5">
              <Settings className="w-4 h-4" /> Settings
            </Button>
          </Link>
        </div>
      </header>

      <div className="container max-w-6xl py-8 space-y-8">
        {/* Legend */}
        <div className="flex flex-wrap gap-2 text-xs">
          <LegendChip status="scheduled" />
          <LegendChip status="completed" />
          <LegendChip status="partial" />
          <LegendChip status="skipped" />
          <LegendChip status="locked" />
        </div>

        {/* Grid */}
        <div>
          <div className="grid grid-cols-7 gap-2 mb-1 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            {WEEKDAYS.map((w) => (
              <div key={w} className="text-center">
                {w}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {cells.map((cell, i) =>
              cell ? (
                <DayCell
                  key={cell.date}
                  plan={cell}
                  isToday={cell.date === today}
                  isSelected={cell.date === selected}
                  onSelect={() => setSelected(cell.date)}
                />
              ) : (
                <div key={`pad-${i}`} className="aspect-square" />
              ),
            )}
          </div>
        </div>

        {/* Detail panel */}
        {selectedPlan && (
          <Card
            className={`p-6 ${
              selectedPlan.date === today ? "ring-2 ring-orange-500" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-3 flex-wrap mb-4">
              <div>
                <div className="text-xs uppercase font-semibold tracking-wider text-gray-500 dark:text-gray-400">
                  Day {selectedPlan.dayNumber} · {STATUS_LABEL[selectedPlan.status]}
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                  {prettyFull(selectedPlan.date)}
                </h2>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> {selectedPlan.totalMinutes} min planned
                {selectedPlan.remainingMinutes !== selectedPlan.totalMinutes && (
                  <span>· {selectedPlan.remainingMinutes} min remaining</span>
                )}
              </div>
            </div>

            {selectedPlan.tasks.length === 0 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                Nothing scheduled for this day.
              </p>
            ) : (
              <ul className="space-y-2">
                {selectedPlan.tasks.map((t) => {
                  const done = isCompleted(state, selectedPlan.date, t.id);
                  return <DetailRow key={t.id} task={t} done={done} />;
                })}
              </ul>
            )}
          </Card>
        )}
      </div>
    </div>
  );
}

function LegendChip({ status }: { status: DayStatus }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 ${STATUS_BG[status]}`}>
      <span className="text-gray-700 dark:text-gray-200">{STATUS_LABEL[status]}</span>
    </span>
  );
}

function DayCell({
  plan,
  isToday,
  isSelected,
  onSelect,
}: {
  plan: DayPlan;
  isToday: boolean;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const headline = plan.tasks[0];
  const date = fromISODate(plan.date);
  return (
    <button
      onClick={onSelect}
      className={`text-left aspect-square rounded-lg border p-2 flex flex-col gap-1 transition-all overflow-hidden ${
        STATUS_BG[plan.status]
      } ${isSelected ? "ring-2 ring-indigo-500 dark:ring-indigo-400" : ""} ${
        isToday ? "ring-2 ring-orange-500" : ""
      } hover:shadow-md`}
    >
      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
        <span className="text-gray-500 dark:text-gray-400">Day {plan.dayNumber}</span>
        {plan.exam && <Lock className="w-3 h-3 text-red-600 dark:text-red-400" />}
      </div>
      <div className="text-lg font-bold text-gray-900 dark:text-white leading-none">
        {date.getDate()}
      </div>
      <div className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight">
        {date.toLocaleDateString(undefined, { month: "short" })}
      </div>
      {plan.exam ? (
        <div className="mt-auto text-[10px] font-bold text-red-700 dark:text-red-300 uppercase">
          {plan.exam}
        </div>
      ) : (
        <div className="mt-auto text-[10px] text-gray-700 dark:text-gray-300 leading-tight truncate">
          {headline ? `${KIND_LABEL[headline.kind]}: ${shortHeadline(headline)}` : "—"}
        </div>
      )}
      {plan.tasks.length > 1 && (
        <div className="text-[10px] text-gray-500 dark:text-gray-400">
          +{plan.tasks.length - 1} more
        </div>
      )}
    </button>
  );
}

function shortHeadline(t: Task): string {
  if (t.kind === "study-new" && t.lectureId) return t.lectureId.toUpperCase();
  if (t.kind === "revisit" && t.lectureId) return `${t.lectureId.toUpperCase()} #${t.revisitNumber}`;
  if (t.kind === "simulator") return t.title.replace(/practice/i, "").trim();
  if (t.kind === "trap-drill") return "drill";
  if (t.kind === "light-review") return "review";
  if (t.kind === "gotcha-drill") return "gotcha";
  return t.title;
}

function DetailRow({ task, done }: { task: Task; done: boolean }) {
  return (
    <li className="flex items-start gap-3 py-1.5">
      <span
        className={`inline-block w-2 h-2 rounded-full mt-2 shrink-0 ${
          done ? "bg-emerald-500" : "bg-gray-300 dark:bg-slate-600"
        }`}
      />
      <div className="flex-1 min-w-0">
        <div className={`text-sm font-medium ${done ? "line-through text-gray-400" : "text-gray-900 dark:text-white"}`}>
          {task.title}
        </div>
        {task.subtitle && (
          <p className="text-xs text-gray-500 dark:text-gray-400">{task.subtitle}</p>
        )}
      </div>
      <span className="text-xs text-gray-500 dark:text-gray-400 shrink-0">{task.estMinutes}m</span>
      {task.href && (
        <Link href={task.href}>
          <Button size="sm" variant="outline" className="h-7 text-xs">
            Open
          </Button>
        </Link>
      )}
    </li>
  );
}
