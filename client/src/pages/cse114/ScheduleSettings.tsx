// /cse114/schedule/settings — pace, mastered chapters, rest weekdays, reset.

import { Link } from "wouter";
import { useState } from "react";
import { ChevronLeft, RotateCcw, Save, Settings, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { LECTURES } from "@/components/cse114/lectures";
import { useSchedule } from "@/components/cse114/schedule/useSchedule";

const WEEKDAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function ScheduleSettings() {
  const { state, setPace, setMasteredChapters, setRestWeekdays, reset } = useSchedule();
  const [confirmReset, setConfirmReset] = useState(false);

  const toggleMastered = (id: string) => {
    const has = state.masteredChapters.includes(id);
    setMasteredChapters(
      has ? state.masteredChapters.filter((x) => x !== id) : [...state.masteredChapters, id],
    );
  };

  const toggleRest = (day: number) => {
    const has = state.restWeekdays.includes(day);
    setRestWeekdays(
      has ? state.restWeekdays.filter((x) => x !== day) : [...state.restWeekdays, day],
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/cse114/schedule">
            <Button variant="ghost" className="gap-2 text-gray-600 dark:text-gray-300">
              <ChevronLeft className="w-5 h-5" /> Schedule
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Settings className="w-5 h-5" /> Adjust pace
          </h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container max-w-3xl py-8 space-y-8">
        {/* Pace */}
        <Card className="p-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Default pace</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            New chapters scheduled per day on the first pass. You've seen this material before — 2/day
            is the default and finishes L01–L09 in 5 days.
          </p>
          <div className="flex gap-2">
            {([1, 2, 3] as const).map((p) => (
              <button
                key={p}
                onClick={() => setPace(p)}
                className={`flex-1 rounded-lg border-2 p-4 text-center transition-all ${
                  state.pace === p
                    ? "border-orange-500 bg-orange-50 dark:bg-orange-900/30"
                    : "border-gray-200 dark:border-slate-700 hover:border-orange-300"
                }`}
              >
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{p}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  chapter{p === 1 ? "" : "s"}/day
                </div>
              </button>
            ))}
          </div>
        </Card>

        {/* Rest days */}
        <Card className="p-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Rest weekdays</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Selected weekdays get no new content (revisits, the trap floor, and simulator slots still
            land). Useful if you have a recurring conflict.
          </p>
          <div className="flex flex-wrap gap-2">
            {WEEKDAY_LABELS.map((label, day) => {
              const on = state.restWeekdays.includes(day);
              return (
                <button
                  key={day}
                  onClick={() => toggleRest(day)}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                    on
                      ? "bg-amber-500 border-amber-500 text-white"
                      : "border-gray-300 dark:border-slate-600 text-gray-600 dark:text-gray-300 hover:border-amber-400"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </Card>

        {/* Mastered chapters */}
        <Card className="p-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            Chapters already mastered
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Skip the first-pass study session for these. SR revisits still queue (so the material
            stays fresh).
          </p>
          <div className="grid sm:grid-cols-2 gap-2">
            {LECTURES.map((l) => {
              const checked = state.masteredChapters.includes(l.id);
              return (
                <label
                  key={l.id}
                  className="flex items-center gap-3 rounded-lg border border-gray-200 dark:border-slate-700 p-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-800"
                >
                  <Checkbox checked={checked} onCheckedChange={() => toggleMastered(l.id)} />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      {l.code} — {l.title}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {l.oneLiner}
                    </div>
                  </div>
                </label>
              );
            })}
          </div>
        </Card>

        {/* Reset */}
        <Card className="p-6 border-rose-200 dark:border-rose-900">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
            <RotateCcw className="w-5 h-5 text-rose-600" /> Reset schedule
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Clears completions, settings, and SR anchors so the schedule starts fresh from today.
            Your trap list, attempts, and exam sessions are not touched.
          </p>
          {!confirmReset ? (
            <Button
              variant="outline"
              className="text-rose-700 border-rose-300 dark:border-rose-700 dark:text-rose-300"
              onClick={() => setConfirmReset(true)}
            >
              <Trash2 className="w-4 h-4 mr-1.5" /> Reset…
            </Button>
          ) : (
            <div className="flex flex-wrap gap-2">
              <Button
                variant="destructive"
                onClick={() => {
                  reset({ keepStudied: false });
                  setConfirmReset(false);
                }}
              >
                <Trash2 className="w-4 h-4 mr-1.5" /> Yes, reset everything
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  reset({ keepStudied: true });
                  setConfirmReset(false);
                }}
              >
                <Save className="w-4 h-4 mr-1.5" /> Keep my "studied" stamps
              </Button>
              <Button variant="ghost" onClick={() => setConfirmReset(false)}>
                Cancel
              </Button>
            </div>
          )}
        </Card>

        {state.lastReset && (
          <p className="text-xs text-gray-400 dark:text-gray-600 text-center">
            Last reset: {state.lastReset}
          </p>
        )}
      </div>
    </div>
  );
}
