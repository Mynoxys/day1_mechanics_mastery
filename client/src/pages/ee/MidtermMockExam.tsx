import { useState, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronLeft,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ChevronRight,
} from "lucide-react";
import { Link } from "wouter";
import {
  TwoRSeriesDmm,
  TwoRParallelDmm,
  TwoSourceLoopUnmarked,
  BenchSupplyResistor,
  DividerThenParallel,
  TwoBranches,
  ParallelPower,
  DividerDesign,
  ThreeSourceNodal,
  VvsIPlot,
  ScopeFig,
} from "./MidtermFigures";

// ─────────────────────────── scoring types ───────────────────────────

type Result = { correct: boolean; earned: number; max: number };

interface ScoreCtx {
  set: (id: number, res: Result) => void;
  results: Record<number, Result>;
}

// ─────────────────────────── question shell ───────────────────────────

function QShell({
  num,
  pts,
  topic,
  topicColor = "#0ea5e9",
  children,
  result,
}: {
  num: number;
  pts: number;
  topic: string;
  topicColor?: string;
  children: ReactNode;
  result?: Result;
}) {
  const status =
    result == null
      ? "pending"
      : result.correct
        ? "right"
        : result.earned > 0
          ? "partial"
          : "wrong";

  const borderColor =
    status === "right"
      ? "#10b981"
      : status === "wrong"
        ? "#dc2626"
        : status === "partial"
          ? "#f59e0b"
          : "#cbd5e1";

  return (
    <Card
      className="p-5 border-l-4"
      style={{ borderLeftColor: borderColor }}
    >
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-mono font-bold text-slate-700 dark:text-slate-200">
            Q{num}
          </span>
          <Badge
            variant="outline"
            className="text-[10px]"
            style={{ borderColor: topicColor, color: topicColor }}
          >
            {topic}
          </Badge>
          <Badge variant="secondary" className="text-[10px]">
            {pts} pt{pts !== 1 ? "s" : ""}
          </Badge>
        </div>
        {result && (
          <div
            className={`flex items-center gap-1 text-xs font-bold ${
              status === "right"
                ? "text-emerald-600"
                : status === "wrong"
                  ? "text-rose-600"
                  : "text-amber-600"
            }`}
          >
            {status === "right" ? (
              <CheckCircle2 className="w-4 h-4" />
            ) : (
              <XCircle className="w-4 h-4" />
            )}
            {result.earned} / {result.max}
          </div>
        )}
      </div>
      {children}
    </Card>
  );
}

// ─────────────────────────── numeric Q ───────────────────────────

function NumericQ({
  id,
  ctx,
  prompt,
  given,
  figure,
  unit,
  answer,
  tolPct = 2,
  pts,
  explain,
}: {
  id: number;
  ctx: ScoreCtx;
  prompt: ReactNode;
  given?: ReactNode;
  figure?: ReactNode;
  unit: string;
  answer: number;
  tolPct?: number;
  pts: number;
  explain: ReactNode;
}) {
  const [val, setVal] = useState("");
  const [checked, setChecked] = useState(false);
  const result = ctx.results[id];

  const check = () => {
    const v = parseFloat(val);
    const ok =
      !isNaN(v) && Math.abs(v - answer) <= Math.abs(answer) * (tolPct / 100);
    ctx.set(id, { correct: ok, earned: ok ? pts : 0, max: pts });
    setChecked(true);
  };

  const reset = () => {
    setVal("");
    setChecked(false);
    ctx.set(id, undefined as unknown as Result);
  };

  return (
    <>
      {figure && (
        <div className="mb-3 flex justify-center bg-slate-50 dark:bg-slate-800/40 rounded-md py-2 overflow-x-auto">
          {figure}
        </div>
      )}
      <div className="text-sm text-gray-800 dark:text-gray-200 mb-2 leading-relaxed">
        {prompt}
      </div>
      {given && (
        <div className="text-xs font-mono bg-slate-50 dark:bg-slate-800/60 p-2 rounded mb-3">
          {given}
        </div>
      )}
      <div className="flex items-center gap-2 mb-2">
        <Input
          type="number"
          step="any"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="answer"
          disabled={checked}
          className="max-w-[180px] font-mono"
        />
        <span className="text-sm text-gray-500 dark:text-gray-400">{unit}</span>
        {!checked ? (
          <Button onClick={check} size="sm" className="ml-auto">
            Check
          </Button>
        ) : (
          <Button onClick={reset} size="sm" variant="ghost" className="ml-auto">
            <RotateCcw className="w-3.5 h-3.5 mr-1" /> Reset
          </Button>
        )}
      </div>
      {checked && (
        <div
          className={`p-3 rounded text-xs ${
            result?.correct
              ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-100 border-l-2 border-emerald-500"
              : "bg-rose-50 dark:bg-rose-900/30 text-rose-900 dark:text-rose-100 border-l-2 border-rose-500"
          }`}
        >
          <div className="font-bold mb-1">
            Correct answer: {answer} {unit}
            {tolPct ? (
              <span className="font-normal opacity-70"> (±{tolPct}%)</span>
            ) : null}
          </div>
          <div className="leading-relaxed">{explain}</div>
        </div>
      )}
    </>
  );
}

// ─────────────────────────── MCQ ───────────────────────────

function MCQ({
  id,
  ctx,
  prompt,
  given,
  figure,
  choices,
  correct,
  pts,
  explain,
}: {
  id: number;
  ctx: ScoreCtx;
  prompt: ReactNode;
  given?: ReactNode;
  figure?: ReactNode;
  choices: string[];
  correct: number; // 0-indexed
  pts: number;
  explain: ReactNode;
}) {
  const [pick, setPick] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const result = ctx.results[id];

  const check = () => {
    const ok = pick === correct;
    ctx.set(id, { correct: ok, earned: ok ? pts : 0, max: pts });
    setChecked(true);
  };
  const reset = () => {
    setPick(null);
    setChecked(false);
    ctx.set(id, undefined as unknown as Result);
  };

  return (
    <>
      {figure && (
        <div className="mb-3 flex justify-center bg-slate-50 dark:bg-slate-800/40 rounded-md py-2 overflow-x-auto">
          {figure}
        </div>
      )}
      <div className="text-sm text-gray-800 dark:text-gray-200 mb-2 leading-relaxed">
        {prompt}
      </div>
      {given && (
        <div className="text-xs font-mono bg-slate-50 dark:bg-slate-800/60 p-2 rounded mb-3">
          {given}
        </div>
      )}
      <div className="space-y-1.5 mb-3">
        {choices.map((c, i) => (
          <label
            key={i}
            className={`flex items-center gap-2 p-2 rounded cursor-pointer text-sm ${
              checked && i === correct
                ? "bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-500"
                : checked && i === pick && i !== correct
                  ? "bg-rose-50 dark:bg-rose-900/30 border border-rose-500"
                  : "hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent"
            }`}
          >
            <input
              type="radio"
              name={`q-${id}`}
              checked={pick === i}
              disabled={checked}
              onChange={() => setPick(i)}
            />
            <span>{c}</span>
          </label>
        ))}
      </div>
      <div className="flex items-center gap-2">
        {!checked ? (
          <Button
            onClick={check}
            size="sm"
            disabled={pick === null}
            className="ml-auto"
          >
            Check
          </Button>
        ) : (
          <Button onClick={reset} size="sm" variant="ghost" className="ml-auto">
            <RotateCcw className="w-3.5 h-3.5 mr-1" /> Reset
          </Button>
        )}
      </div>
      {checked && (
        <div
          className={`mt-3 p-3 rounded text-xs ${
            result?.correct
              ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-100 border-l-2 border-emerald-500"
              : "bg-rose-50 dark:bg-rose-900/30 text-rose-900 dark:text-rose-100 border-l-2 border-rose-500"
          }`}
        >
          {explain}
        </div>
      )}
    </>
  );
}

// ─────────────────────────── matching Q ───────────────────────────

function MatchQ({
  id,
  ctx,
  prompt,
  rows,
  options,
  correct,
  pts,
  explain,
}: {
  id: number;
  ctx: ScoreCtx;
  prompt: ReactNode;
  rows: string[];
  options: string[];
  correct: number[]; // index per row
  pts: number;
  explain: ReactNode;
}) {
  const [picks, setPicks] = useState<(number | null)[]>(
    rows.map(() => null)
  );
  const [checked, setChecked] = useState(false);
  const result = ctx.results[id];

  const check = () => {
    const right = picks.filter((p, i) => p === correct[i]).length;
    const earned = (right / rows.length) * pts;
    ctx.set(id, {
      correct: right === rows.length,
      earned: Math.round(earned * 100) / 100,
      max: pts,
    });
    setChecked(true);
  };
  const reset = () => {
    setPicks(rows.map(() => null));
    setChecked(false);
    ctx.set(id, undefined as unknown as Result);
  };

  return (
    <>
      <div className="text-sm text-gray-800 dark:text-gray-200 mb-3">
        {prompt}
      </div>
      <div className="space-y-2 mb-3">
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1fr_auto_2fr] items-center gap-2 p-1.5 rounded ${
              checked && picks[i] === correct[i]
                ? "bg-emerald-50 dark:bg-emerald-900/30"
                : checked
                  ? "bg-rose-50 dark:bg-rose-900/30"
                  : ""
            }`}
          >
            <span className="text-sm text-gray-800 dark:text-gray-200">
              {r}
            </span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <Select
              value={picks[i]?.toString() ?? ""}
              onValueChange={(v) => {
                const next = [...picks];
                next[i] = parseInt(v);
                setPicks(next);
              }}
              disabled={checked}
            >
              <SelectTrigger className="w-full text-sm">
                <SelectValue placeholder="select…" />
              </SelectTrigger>
              <SelectContent>
                {options.map((o, j) => (
                  <SelectItem key={j} value={j.toString()}>
                    {o}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        {!checked ? (
          <Button
            onClick={check}
            size="sm"
            disabled={picks.some((p) => p === null)}
            className="ml-auto"
          >
            Check
          </Button>
        ) : (
          <Button onClick={reset} size="sm" variant="ghost" className="ml-auto">
            <RotateCcw className="w-3.5 h-3.5 mr-1" /> Reset
          </Button>
        )}
      </div>
      {checked && (
        <div
          className={`mt-3 p-3 rounded text-xs ${
            result?.correct
              ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-100 border-l-2 border-emerald-500"
              : "bg-amber-50 dark:bg-amber-900/30 text-amber-900 dark:text-amber-100 border-l-2 border-amber-500"
          }`}
        >
          <div className="font-bold mb-1">
            {result?.earned}/{result?.max} correct.
          </div>
          <div className="space-y-0.5">
            {rows.map((r, i) => (
              <div key={i}>
                <span className="font-mono">{r}</span> →{" "}
                <b>{options[correct[i]]}</b>
              </div>
            ))}
          </div>
          <div className="mt-2 leading-relaxed">{explain}</div>
        </div>
      )}
    </>
  );
}

// ─────────────────────────── topics meta ───────────────────────────

const TOPIC_COLOR: Record<string, string> = {
  "DC-DMM": "#10b981",
  "DC-network": "#ea580c",
  "DC-divider": "#d97706",
  "DC-nodal": "#7c3aed",
  "DC-power": "#dc2626",
  "DC-source": "#0891b2",
  scope: "#0e7490",
  spice: "#0369a1",
  lab: "#16a34a",
};

// ─────────────────────────── page ───────────────────────────

export default function MidtermMockExam() {
  const [results, setResults] = useState<Record<number, Result>>({});
  const ctx: ScoreCtx = {
    set: (id, res) =>
      setResults((prev) => {
        const next = { ...prev };
        if (res === undefined) delete next[id];
        else next[id] = res;
        return next;
      }),
    results,
  };

  const totalMax = 49;
  const earned = Object.values(results).reduce((a, b) => a + b.earned, 0);
  const answered = Object.keys(results).length;

  // topic breakdown
  const topicMax: Record<string, number> = {};
  const topicEarned: Record<string, number> = {};

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/ee/midterm-drill">
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
            >
              <ChevronLeft className="w-5 h-5" /> Back to Drill
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Midterm Mock Exam
          </h1>
          <div className="text-sm font-mono">
            <span className="text-2xl font-bold text-rose-600">
              {earned.toFixed(1)}
            </span>
            <span className="text-slate-400"> / {totalMax}</span>
            <span className="text-xs text-slate-500 ml-2">
              ({answered}/19 done)
            </span>
          </div>
        </div>
      </header>

      <div className="container py-8 max-w-3xl space-y-4">
        <section className="mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Same 19-question structure as your real midterm (49 pts total),
            fresh numbers. Each problem includes the schematic or scope trace
            you would see on the printed exam — practice <em>reading</em> the
            picture, not just the words. Click <b>Check</b> as you go — running
            score is in the header. Numeric tolerance ±2%.
          </p>
        </section>

        {/* ───── Q1 — DMM series ───── */}
        <QShell num={1} pts={2} topic="DC-DMM" topicColor={TOPIC_COLOR["DC-DMM"]} result={results[1]}>
          <NumericQ
            id={1}
            ctx={ctx}
            figure={<TwoRSeriesDmm rTop={520} rBot={215} />}
            prompt={
              <>
                The DMM probes are wired so the two resistors are{" "}
                <b>in series</b> between them. Top R = 520 Ω, bottom R = 215 Ω.
                What does the DMM read in 2-wire ohms mode?
              </>
            }
            unit="Ω"
            answer={735}
            pts={2}
            explain={<>Series ⇒ R = 520 + 215 = 735 Ω.</>}
          />
        </QShell>

        {/* ───── Q2 — DMM theory match ───── */}
        <QShell num={2} pts={1} topic="lab" topicColor={TOPIC_COLOR.lab} result={results[2]}>
          <MatchQ
            id={2}
            ctx={ctx}
            prompt={<>To avoid disturbing the circuit, the DMM input resistance should be:</>}
            rows={["when measuring voltage", "when measuring current"]}
            options={[
              "low, approaching 0 Ω",
              "50 Ω to prevent reflections",
              "120 Ω to minimize reflections",
              "high, approaching ∞ Ω",
            ]}
            correct={[3, 0]}
            pts={1}
            explain={
              <>
                Voltmeter is in parallel — must not draw current ⇒ R → ∞.
                Ammeter is in series — must not drop voltage ⇒ R → 0.
              </>
            }
          />
        </QShell>

        {/* ───── Q3 — DMM parallel ───── */}
        <QShell num={3} pts={2} topic="DC-DMM" topicColor={TOPIC_COLOR["DC-DMM"]} result={results[3]}>
          <NumericQ
            id={3}
            ctx={ctx}
            figure={<TwoRParallelDmm rTop={460} rBot={380} />}
            prompt={
              <>
                Same plugboard, but the wiring puts the two resistors{" "}
                <b>in parallel</b> across the DMM. Top R = 460 Ω, bottom R = 380
                Ω. What does the DMM read?
              </>
            }
            unit="Ω"
            answer={208.0952}
            pts={2}
            explain={<>R_p = 460·380/(460+380) = 174800/840 ≈ 208.10 Ω.</>}
          />
        </QShell>

        {/* ───── Q4 — source orientation ───── */}
        <QShell num={4} pts={2} topic="DC-source" topicColor={TOPIC_COLOR["DC-source"]} result={results[4]}>
          <MCQ
            id={4}
            ctx={ctx}
            figure={<TwoSourceLoopUnmarked v1={2.85} v2={4.4} />}
            prompt={
              <>
                Two voltage sources are arranged in a loop with V₁ = 2.85 Vrms
                and V₂ = 4.40 Vrms. The schematic does <b>not</b> show polarity
                markings on either source. What is the equivalent potential?
              </>
            }
            choices={[
              "7.25 Vrms",
              "1.55 Vrms",
              "Not enough information.",
              "−1.55 Vrms",
              "−7.25 Vrms",
            ]}
            correct={2}
            pts={2}
            explain={
              <>
                Without polarity dots you cannot tell if they aid (7.25), oppose
                (1.55), or which sign. Always check for + / − markings before
                committing.
              </>
            }
          />
        </QShell>

        {/* ───── Q5 — CV/CC #1 (CC mode) ───── */}
        <QShell num={5} pts={3} topic="DC-power" topicColor={TOPIC_COLOR["DC-power"]} result={results[5]}>
          <NumericQ
            id={5}
            ctx={ctx}
            figure={<BenchSupplyResistor vSet={24} iSet={1.2} r={15} />}
            prompt={
              <>
                A 15 Ω resistor is connected to a bench supply with set points
                of <b>24.0 V</b> and <b>1.20 A</b>. What power is dissipated?
              </>
            }
            unit="W"
            answer={21.6}
            pts={3}
            explain={
              <>
                I_needed = 24/15 = 1.6 A &gt; 1.2 A → supply enters{" "}
                <b>CC mode</b>. Real I = 1.20 A; P = I²R = 1.44·15 = 21.6 W.
                Real V across R = 18 V (not 24).
              </>
            }
          />
        </QShell>

        {/* ───── Q6 — scope freq ───── */}
        <QShell num={6} pts={2} topic="scope" topicColor={TOPIC_COLOR.scope} result={results[6]}>
          <NumericQ
            id={6}
            ctx={ctx}
            figure={
              <ScopeFig
                vDiv={2}
                tDiv={1e-3}
                signal={(t) => 4 * Math.sin((2 * Math.PI * t) / (4e-3))}
                caption="Channel 1 — read frequency from period."
              />
            }
            prompt={
              <>
                Scope trace: one full cycle spans <b>4 horizontal divisions</b>{" "}
                with the timebase set to <b>1.0 ms/div</b>. What is the
                frequency?
              </>
            }
            unit="Hz"
            answer={250}
            pts={2}
            explain={<>T = 4·1 ms = 4 ms → f = 1/T = 250 Hz.</>}
          />
        </QShell>

        {/* ───── Q7 — multi-R Vout ───── */}
        <QShell num={7} pts={5} topic="DC-network" topicColor={TOPIC_COLOR["DC-network"]} result={results[7]}>
          <NumericQ
            id={7}
            ctx={ctx}
            figure={<DividerThenParallel v={10} r1={500} r2={1000} r3={2000} />}
            prompt={
              <>
                A 10 V source feeds R₁ = 500 Ω in series. The far end of R₁
                connects to node X. From X to ground there are two parallel
                paths: R₂ = 1000 Ω and R₃ = 2000 Ω. What is V_X?
              </>
            }
            unit="V"
            answer={5.7143}
            pts={5}
            explain={
              <>
                R₂∥R₃ = 1000·2000/3000 = 666.67 Ω. Divider: V_X = 10 ·
                666.67/(500+666.67) = 5.714 V.
              </>
            }
          />
        </QShell>

        {/* ───── Q8 — max V across parallel ───── */}
        <QShell num={8} pts={3} topic="DC-power" topicColor={TOPIC_COLOR["DC-power"]} result={results[8]}>
          <NumericQ
            id={8}
            ctx={ctx}
            figure={<ParallelPower rTop={250} rBot={100} pTop={0.5} pBot={0.5} />}
            prompt={
              <>
                A <b>250 Ω, ½ W</b> resistor is in parallel with a{" "}
                <b>100 Ω, ½ W</b> resistor. What is the maximum voltage across
                this combination without exceeding either resistor's rating?
              </>
            }
            unit="V"
            answer={7.0711}
            pts={3}
            explain={
              <>
                For each branch, V_max = √(P·R). 250 Ω: √(0.5·250)=11.18 V. 100
                Ω: √(0.5·100)=7.07 V. Smaller wins ⇒ 7.07 V (the 100 Ω hits ½ W
                first).
              </>
            }
          />
        </QShell>

        {/* ───── Q9 — scope trigger ───── */}
        <QShell num={9} pts={2} topic="scope" topicColor={TOPIC_COLOR.scope} result={results[9]}>
          <NumericQ
            id={9}
            ctx={ctx}
            figure={
              <ScopeFig
                vDiv={0.2}
                tDiv={1e-3}
                signal={(t) => 0.421 + 0.4 * Math.sin((2 * Math.PI * t) / 2e-3)}
                caption="Trigger level marker (T) reads 421 mV."
              />
            }
            prompt={
              <>
                Scope shows a trigger marker labeled <b>421 mV</b> on screen.
                What is the trigger voltage in mV?
              </>
            }
            unit="mV"
            answer={421}
            tolPct={0.5}
            pts={2}
            explain={<>Reading directly: 421 mV. (Free points — read the screen.)</>}
          />
        </QShell>

        {/* ───── Q10 — bridge / branch current ───── */}
        <QShell num={10} pts={5} topic="DC-network" topicColor={TOPIC_COLOR["DC-network"]} result={results[10]}>
          <NumericQ
            id={10}
            ctx={ctx}
            figure={<TwoBranches v={24} r1={200} r2={400} r3={300} r4={600} />}
            prompt={
              <>
                A 24 V source has two parallel branches across it. Top branch:
                R₁ = 200 Ω in series with R₂ = 400 Ω. Bottom branch: R₃ = 300 Ω
                in series with R₄ = 600 Ω. Find the current in the top branch.
              </>
            }
            unit="mA"
            answer={40}
            pts={5}
            explain={
              <>
                Each branch is independent across the source. Top branch
                current = 24 / (200+400) = 24/600 = 0.040 A = 40 mA.
              </>
            }
          />
        </QShell>

        {/* ───── Q11 — SPICE matching ───── */}
        <QShell num={11} pts={1} topic="spice" topicColor={TOPIC_COLOR.spice} result={results[11]}>
          <MatchQ
            id={11}
            ctx={ctx}
            prompt={
              <>
                Match the SPICE simulation type with what appears on the
                horizontal axis of the resulting graph.
              </>
            }
            rows={["frequency", "none", "voltage (or current)", "time"]}
            options={[
              "transient (.tran)",
              "ac (.ac)",
              "dc (.dc)",
              "operating point (.op)",
            ]}
            correct={[1, 3, 2, 0]}
            pts={1}
            explain={
              <>
                .tran→time, .ac→frequency (Bode), .dc→swept V or I, .op→single
                bias point so no x-axis.
              </>
            }
          />
        </QShell>

        {/* ───── Q12 — CV/CC #2 (CV mode) ───── */}
        <QShell num={12} pts={3} topic="DC-power" topicColor={TOPIC_COLOR["DC-power"]} result={results[12]}>
          <NumericQ
            id={12}
            ctx={ctx}
            figure={<BenchSupplyResistor vSet={8} iSet={0.1} r={200} />}
            prompt={
              <>
                A 200 Ω resistor is connected to a bench supply with set points
                of <b>8.0 V</b> and <b>0.10 A</b>. What power is dissipated?
              </>
            }
            unit="W"
            answer={0.32}
            pts={3}
            explain={
              <>
                I_needed = 8/200 = 0.04 A &lt; 0.10 A → supply stays in{" "}
                <b>CV mode</b> at 8 V. P = V²/R = 64/200 = 0.32 W. (Don't be
                fooled — the same template can be CV or CC depending on whether
                V/R exceeds I_set.)
              </>
            }
          />
        </QShell>

        {/* ───── Q13 — RMS sine top ───── */}
        <QShell num={13} pts={2} topic="scope" topicColor={TOPIC_COLOR.scope} result={results[13]}>
          <NumericQ
            id={13}
            ctx={ctx}
            figure={
              <ScopeFig
                vDiv={1}
                tDiv={1e-3}
                signal={(t) => 3 * Math.sin((2 * Math.PI * t) / 4e-3)}
                caption="Sine wave, V_pp = 6.0 V."
              />
            }
            prompt={
              <>
                The top trace is a clean <b>sine wave</b> with peak-to-peak
                amplitude of <b>6.0 V</b>. What is its RMS voltage?
              </>
            }
            unit="V"
            answer={2.1213}
            pts={2}
            explain={
              <>V_p = V_pp/2 = 3.0 V; sine ⇒ V_rms = V_p/√2 = 2.121 V.</>
            }
          />
        </QShell>

        {/* ───── Q14 — angular freq ───── */}
        <QShell num={14} pts={2} topic="scope" topicColor={TOPIC_COLOR.scope} result={results[14]}>
          <NumericQ
            id={14}
            ctx={ctx}
            prompt={
              <>
                A trace has frequency <b>400 Hz</b>. What is its angular
                frequency in rad/s?
              </>
            }
            unit="rad/s"
            answer={2513.27}
            pts={2}
            explain={<>ω = 2πf = 2π·400 ≈ 2513.27 rad/s.</>}
          />
        </QShell>

        {/* ───── Q15 — R from V/I plot ───── */}
        <QShell num={15} pts={2} topic="lab" topicColor={TOPIC_COLOR.lab} result={results[15]}>
          <NumericQ
            id={15}
            ctx={ctx}
            figure={<VvsIPlot slope={12} />}
            prompt={
              <>
                A V vs I plot for a resistor has slope <b>12 V/A</b>. What is
                the resistance?
              </>
            }
            unit="Ω"
            answer={12}
            pts={2}
            explain={<>Slope of V vs I is exactly R. So R = 12 Ω.</>}
          />
        </QShell>

        {/* ───── Q16 — divider design ───── */}
        <QShell num={16} pts={5} topic="DC-divider" topicColor={TOPIC_COLOR["DC-divider"]} result={results[16]}>
          <NumericQ
            id={16}
            ctx={ctx}
            figure={<DividerDesign v={15} r1={2200} vOut={4} />}
            prompt={
              <>
                In a voltage divider with V₁ = <b>15.0 V</b> and R₁ = <b>2200 Ω</b>{" "}
                (top), what value of R₂ (bottom, V_out across R₂) gives V_out ={" "}
                <b>4.0 V</b>?
              </>
            }
            unit="Ω"
            answer={800}
            pts={5}
            explain={
              <>
                R₂ = R₁·V_out/(V_in−V_out) = 2200·4/(15−4) = 8800/11 = 800 Ω.
              </>
            }
          />
        </QShell>

        {/* ───── Q17 — lab error ───── */}
        <QShell num={17} pts={1} topic="lab" topicColor={TOPIC_COLOR.lab} result={results[17]}>
          <MCQ
            id={17}
            ctx={ctx}
            prompt={
              <>
                In Lab 1, the calculated resistance values came out
                consistently <b>higher</b> than the marked resistor values. The
                most likely cause:
              </>
            }
            choices={[
              "The resistors heated up and went out of spec.",
              "The measured value included both the resistor and the test-lead resistance.",
              "The power supplies were overdue for calibration.",
              "The DMM 2-wire technique was used.",
            ]}
            correct={1}
            pts={1}
            explain={
              <>
                Test leads add a small series resistance (~0.2–0.5 Ω). For
                small resistors this shows up. Switching to 4-wire mode
                eliminates it.
              </>
            }
          />
        </QShell>

        {/* ───── Q18 — RMS bottom (square) ───── */}
        <QShell num={18} pts={2} topic="scope" topicColor={TOPIC_COLOR.scope} result={results[18]}>
          <NumericQ
            id={18}
            ctx={ctx}
            figure={
              <ScopeFig
                vDiv={1}
                tDiv={1e-3}
                signal={(t) => {
                  const period = 4e-3;
                  const phase = ((t % period) + period) % period;
                  return phase < period / 2 ? 2 : -2;
                }}
                caption="Square wave between +2.0 V and −2.0 V."
              />
            }
            prompt={
              <>
                The bottom trace is a clean <b>square wave</b> swinging between
                +2.0 V and −2.0 V. What is its RMS voltage?
              </>
            }
            unit="V"
            answer={2}
            pts={2}
            explain={
              <>
                For a square wave, V_rms = V_p (NOT V_p/√2 — that's the sine
                rule). Here V_p = 2 V ⇒ V_rms = 2 V.
              </>
            }
          />
        </QShell>

        {/* ───── Q19 — 3-source nodal ───── */}
        <QShell num={19} pts={5} topic="DC-nodal" topicColor={TOPIC_COLOR["DC-nodal"]} result={results[19]}>
          <NumericQ
            id={19}
            ctx={ctx}
            figure={<ThreeSourceNodal v1={10} v2={5} v3={8} r1={1000} r2={2000} r3={4000} />}
            prompt={
              <>
                Three sources feed into a common node V. Branch 1: V₁ = 10.0 V
                via R₁ = 1000 Ω. Branch 2: V₂ = 5.0 V via R₂ = 2000 Ω. Branch 3:
                V₃ = 8.0 V via R₃ = 4000 Ω. All source positive terminals face
                the node. Find V.
              </>
            }
            unit="V"
            answer={8.2857}
            pts={5}
            explain={
              <>
                Weighted average: V = Σ(V_i/R_i) / Σ(1/R_i) ={" "}
                (10/1000 + 5/2000 + 8/4000) / (1/1000 + 1/2000 + 1/4000) =
                0.0145 / 0.00175 = 8.286 V.
              </>
            }
          />
        </QShell>

        {/* ───── Score breakdown ───── */}
        <Card className="p-6 mt-8 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
          <h2 className="text-2xl font-bold mb-4">Score Summary</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <Stat label="Earned" value={`${earned.toFixed(1)} / ${totalMax}`} />
            <Stat
              label="Percent"
              value={`${((earned / totalMax) * 100).toFixed(0)}%`}
            />
            <Stat label="Answered" value={`${answered} / 19`} />
            <Stat
              label="Real exam"
              value="13 / 49 (27%)"
              subtle="Beat that!"
            />
          </div>
          {answered === 19 && (
            <div className="mt-4 p-3 bg-white/10 rounded text-sm leading-relaxed">
              {earned >= totalMax * 0.8
                ? "🎯 Solid. You're ready. Re-skim the cheat sheet 30 min before the exam."
                : earned >= totalMax * 0.6
                  ? "🟡 Decent improvement — go back and replay any module you missed twice."
                  : "🔴 Replay Module #1 (CV/CC) and #2 (network reduction) — those alone are 16 of the 49 points."}
            </div>
          )}
        </Card>

        <div className="text-center pt-4">
          <Link href="/ee/midterm-drill">
            <Button variant="ghost" className="text-sm">
              ← Back to drill modules
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  subtle,
}: {
  label: string;
  value: string;
  subtle?: string;
}) {
  return (
    <div className="bg-white/10 rounded p-3">
      <div className="text-xs text-white/60 uppercase tracking-wide">{label}</div>
      <div className="text-2xl font-bold mt-0.5">{value}</div>
      {subtle && <div className="text-[11px] text-white/50 mt-0.5">{subtle}</div>}
    </div>
  );
}
