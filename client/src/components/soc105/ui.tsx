// Shared SOC 105 UI: page header, skill/trap badges, and the question view used
// by both the drill (instant feedback) and the exam review (after grading).

import type { ReactNode } from "react";
import { Link } from "wouter";
import { Check, ChevronLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CONCEPT_BY_ID, UNITS, unitOf, type BankQuestion } from "./units";
import { SKILL_LABELS, TRAP_LABELS, type Skill, type Trap } from "./types";

export const SKILL_COLOR: Record<Skill, string> = {
  conceptual: "var(--soc-conceptual)",
  application: "var(--soc-application)",
  empirical: "var(--soc-empirical)",
};

export function SocHeader({ title, back = "/soc105", backLabel = "SOC 105" }: { title: string; back?: string; backLabel?: string }) {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container flex items-center gap-2 py-3">
        <Link href={back}>
          <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground -ml-2">
            <ChevronLeft className="w-4 h-4" /> {backLabel}
          </Button>
        </Link>
        <h1 className="text-base sm:text-lg font-bold truncate">{title}</h1>
      </div>
    </header>
  );
}

export function Pill({ color, children, className }: { color: string; children: ReactNode; className?: string }) {
  return (
    <span
      className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap", className)}
      style={{ color, backgroundColor: `color-mix(in oklab, ${color} 12%, transparent)` }}
    >
      {children}
    </span>
  );
}

export function SkillPill({ skill }: { skill: Skill }) {
  return <Pill color={SKILL_COLOR[skill]}>{SKILL_LABELS[skill]}</Pill>;
}

export function TrapPill({ trap }: { trap: Trap }) {
  const color = trap === "everyday-meaning" ? "var(--soc-false-friend)" : "var(--muted-foreground)";
  return <Pill color={color}>{TRAP_LABELS[trap]}</Pill>;
}

const LETTERS = "ABCDEF";

interface QuestionViewProps {
  q: BankQuestion;
  order: number[]; // display order → original option index
  selected: number | null; // original option index
  revealed: boolean;
  onSelect?: (optionIndex: number) => void;
  number?: string; // "12 / 60"
}

export function QuestionView({ q, order, selected, revealed, onSelect, number }: QuestionViewProps) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-3">
        {number && <span className="text-sm font-mono text-muted-foreground mr-1">{number}</span>}
        {revealed && (
          <>
            <SkillPill skill={q.skill} />
            {q.trap && <TrapPill trap={q.trap} />}
            <Pill color="var(--muted-foreground)">Unit {unitOf(q.id)?.number}</Pill>
          </>
        )}
      </div>
      <p className="text-lg sm:text-xl leading-relaxed font-medium mb-5">
        {q.format === "tf" && <span className="text-muted-foreground">True/False: </span>}
        {q.stem}
      </p>
      <div className="space-y-2.5">
        {order.map((oi, di) => {
          const o = q.options[oi];
          const isSel = selected === oi;
          const state = !revealed ? (isSel ? "selected" : "idle") : o.correct ? "right" : isSel ? "wrong" : "other";
          return (
            <button
              key={oi}
              type="button"
              disabled={revealed || !onSelect}
              onClick={() => onSelect?.(oi)}
              className={cn(
                "w-full text-left rounded-xl border-2 px-4 py-3 transition-colors",
                state === "idle" && "border-border hover:border-[var(--soc-accent)] hover:bg-muted/50",
                state === "selected" && "border-[var(--soc-accent)] bg-[color-mix(in_oklab,var(--soc-accent)_8%,transparent)]",
                state === "right" && "border-[var(--soc-right)] bg-[color-mix(in_oklab,var(--soc-right)_8%,transparent)]",
                state === "wrong" && "border-[var(--soc-wrong)] bg-[color-mix(in_oklab,var(--soc-wrong)_8%,transparent)]",
                state === "other" && "border-border opacity-90",
              )}
            >
              <div className="flex gap-3 items-start">
                <span
                  className={cn(
                    "shrink-0 w-7 h-7 rounded-full grid place-items-center text-sm font-bold border",
                    state === "right" && "bg-[var(--soc-right)] text-white border-transparent",
                    state === "wrong" && "bg-[var(--soc-wrong)] text-white border-transparent",
                    state === "selected" && "bg-[var(--soc-accent)] text-white border-transparent",
                  )}
                >
                  {state === "right" ? <Check className="w-4 h-4" /> : state === "wrong" ? <X className="w-4 h-4" /> : LETTERS[di]}
                </span>
                <div className="min-w-0">
                  <div className="text-base sm:text-lg leading-snug">{o.text}</div>
                  {revealed && (
                    <p className="mt-1.5 text-sm sm:text-[15px] leading-relaxed text-muted-foreground">
                      {o.correct ? <strong className="text-[var(--soc-right)]">Why it’s right: </strong> : isSel ? <strong className="text-[var(--soc-wrong)]">Why not: </strong> : <strong>Why not: </strong>}
                      {o.why}
                    </p>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
      {revealed && <ConceptFooter q={q} />}
    </div>
  );
}

// After answering: the concepts tested, with a link to their unit guide, plus the
// everyday-vs-course contrast when the question leans on a false friend.
function ConceptFooter({ q }: { q: BankQuestion }) {
  const friends = UNITS.flatMap((u) => u.falseFriends).filter((f) => q.conceptIds.includes(f.conceptId));
  return (
    <div className="mt-5 space-y-3">
      {q.trap === "everyday-meaning" &&
        friends.slice(0, 1).map((f) => (
          <div key={f.id} className="rounded-xl border-l-4 border-[var(--soc-false-friend)] bg-muted/50 p-4 text-[15px] leading-relaxed">
            <div className="font-bold text-[var(--soc-false-friend)] mb-1">False friend: “{f.term}”</div>
            <div><strong>Everyday:</strong> {f.everyday}</div>
            <div><strong>In SOC 105:</strong> {f.course}</div>
          </div>
        ))}
      <div className="flex flex-wrap gap-2 text-sm">
        <span className="text-muted-foreground">Tests:</span>
        {q.conceptIds.map((id) => {
          const c = CONCEPT_BY_ID[id];
          const u = unitOf(id);
          return c && u ? (
            <Link key={id} href={`/soc105/unit/${u.id}#${id}`}>
              <span className="underline underline-offset-2 decoration-dotted cursor-pointer hover:text-[var(--soc-accent)]">{c.term}</span>
            </Link>
          ) : null;
        })}
      </div>
    </div>
  );
}

export function ProgressBar({ value, color = "var(--soc-accent)" }: { value: number; color?: string }) {
  return (
    <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
      <div className="h-full rounded-full transition-all" style={{ width: `${Math.round(value * 100)}%`, backgroundColor: color }} />
    </div>
  );
}

// "1"–"5" or "a"–"e" → display index
export function keyToIndex(key: string): number | null {
  const k = key.toLowerCase();
  if (k >= "1" && k <= "6") return Number(k) - 1;
  const i = "abcdef".indexOf(k);
  return i >= 0 ? i : null;
}
