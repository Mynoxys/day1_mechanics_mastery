// The trap list: every mistake you've logged, searchable and filterable, with
// inline notes and mastery progress. Export to JSON for backup.

import { useState } from "react";
import { Link } from "wouter";
import { Download, Home, RotateCcw, Search, Target, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTraps } from "@/components/cse114/useTraps";
import { downloadBackup } from "@/components/cse114/store";
import {
  GOTCHA_LABELS,
  MASTERY_TARGET,
  TOPIC_LABELS,
  type Gotcha,
  type Topic,
} from "@/components/cse114/types";

export default function TrapBrowser() {
  const { traps, active, mastered, updateTrap, deleteTrap, resetMastery } = useTraps();
  const [search, setSearch] = useState("");
  const [topic, setTopic] = useState<Topic | "all">("all");
  const [gotcha, setGotcha] = useState<Gotcha | "all">("all");
  const [status, setStatus] = useState<"all" | "active" | "mastered">("all");

  const filtered = traps.filter((t) => {
    if (status === "active" && t.masteredAt !== null) return false;
    if (status === "mastered" && t.masteredAt === null) return false;
    if (topic !== "all" && t.topic !== topic) return false;
    if (gotcha !== "all" && !t.gotchas.includes(gotcha)) return false;
    if (search.trim()) {
      const hay = (t.questionSnapshot.prompt + " " + t.ruleViolated).toLowerCase();
      if (!hay.includes(search.toLowerCase())) return false;
    }
    return true;
  });

  const selectCls =
    "rounded-md border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-2 py-1.5 text-sm text-gray-900 dark:text-gray-100";

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <header className="sticky top-0 z-10 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
        <div className="container flex items-center justify-between py-4">
          <Link href="/cse114">
            <Button variant="ghost" className="gap-2">
              <Home className="w-4 h-4" /> CSE 114 hub
            </Button>
          </Link>
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">Trap List</h1>
          <Button variant="ghost" className="gap-2 text-sm" onClick={downloadBackup}>
            <Download className="w-4 h-4" /> Export
          </Button>
        </div>
      </header>

      <div className="container max-w-3xl py-8">
        {/* summary + drill CTA */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-bold text-gray-900 dark:text-white">{active.length}</span> active ·{" "}
            <span className="font-bold text-emerald-600">{mastered.length}</span> mastered
          </div>
          {active.length > 0 && (
            <Link href="/cse114/drill">
              <Button className="gap-2">
                <Target className="w-4 h-4" /> Drill active traps
              </Button>
            </Link>
          )}
        </div>

        {/* filters */}
        <div className="flex flex-wrap gap-2 mb-5">
          <div className="relative flex-1 min-w-[180px]">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search prompts and notes…"
              className="w-full rounded-md border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 pl-8 pr-3 py-1.5 text-sm text-gray-900 dark:text-gray-100 outline-none focus:border-blue-500"
            />
          </div>
          <select className={selectCls} value={status} onChange={(e) => setStatus(e.target.value as typeof status)}>
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="mastered">Mastered</option>
          </select>
          <select className={selectCls} value={topic} onChange={(e) => setTopic(e.target.value as Topic | "all")}>
            <option value="all">All topics</option>
            {(Object.keys(TOPIC_LABELS) as Topic[]).map((t) => (
              <option key={t} value={t}>
                {TOPIC_LABELS[t]}
              </option>
            ))}
          </select>
          <select className={selectCls} value={gotcha} onChange={(e) => setGotcha(e.target.value as Gotcha | "all")}>
            <option value="all">All gotchas</option>
            {(Object.keys(GOTCHA_LABELS) as Gotcha[]).map((g) => (
              <option key={g} value={g}>
                {GOTCHA_LABELS[g]}
              </option>
            ))}
          </select>
        </div>

        {/* list */}
        {filtered.length === 0 ? (
          <Card className="p-10 text-center text-gray-500 dark:text-gray-400">
            {traps.length === 0
              ? "No traps yet. Take an exam and mark your mistakes — they'll collect here."
              : "No traps match these filters."}
          </Card>
        ) : (
          <div className="space-y-3">
            {filtered.map((t) => {
              const isMastered = t.masteredAt !== null;
              return (
                <Card
                  key={t.id}
                  className="p-4"
                  style={{ borderLeftWidth: 4, borderLeftColor: isMastered ? "#16a34a" : "#dc2626" }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                        <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-xs">
                          {TOPIC_LABELS[t.topic]}
                        </span>
                        {t.gotchas.map((g) => (
                          <span
                            key={g}
                            className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-xs"
                          >
                            {GOTCHA_LABELS[g]}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-gray-900 dark:text-gray-100 line-clamp-2">
                        {t.questionSnapshot.prompt.replace(/`/g, "")}
                      </p>
                      <p className="text-xs text-red-600 dark:text-red-400 mt-1 font-mono whitespace-pre-wrap line-clamp-2">
                        You answered: {t.myWrongAnswer}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2 flex-shrink-0">
                      {isMastered ? (
                        <span className="text-xs font-semibold text-emerald-600">Mastered</span>
                      ) : (
                        <div className="flex items-center gap-1">
                          {Array.from({ length: MASTERY_TARGET }).map((_, i) => (
                            <span
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i < t.masteryStreak ? "bg-emerald-500" : "bg-gray-300 dark:bg-slate-600"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                      <div className="flex gap-1">
                        {isMastered && (
                          <button
                            title="Reset mastery"
                            onClick={() => resetMastery(t.id)}
                            className="p-1 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                          >
                            <RotateCcw className="w-4 h-4" />
                          </button>
                        )}
                        <button
                          title="Delete trap"
                          onClick={() => deleteTrap(t.id)}
                          className="p-1 text-gray-400 hover:text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <input
                    value={t.ruleViolated}
                    onChange={(e) => updateTrap(t.id, { ruleViolated: e.target.value })}
                    placeholder="What rule did I violate?"
                    className="mt-2 w-full rounded border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-800 px-2 py-1 text-xs text-gray-700 dark:text-gray-200 outline-none focus:border-blue-500"
                  />
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
