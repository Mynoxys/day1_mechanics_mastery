import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronLeft, RotateCcw, Check, X, Trophy } from "lucide-react";
import { Link } from "wouter";
import { LiveValue } from "@/components/ee/LiveValue";
import { CircuitSchematic } from "@/components/ee/CircuitSchematic";

type DrillType = "bitwise" | "adc" | "divider";

interface Problem {
  prompt: React.ReactNode;
  expected: number;
  unit?: string;
  tolerance: number;
  solution: React.ReactNode;
  figure?: React.ReactNode;
}

function DividerFig({ v1, r1, r2 }: { v1: number; r1: number; r2: number }) {
  return (
    <CircuitSchematic
      width={300}
      height={200}
      noGrid
      wires={[
        { x1: 50, y1: 100, x2: 50, y2: 50 },
        { x1: 50, y1: 50, x2: 200, y2: 50 },
        { x1: 200, y1: 50, x2: 200, y2: 80 },
        { x1: 200, y1: 110, x2: 200, y2: 140 },
        { x1: 200, y1: 170, x2: 200, y2: 180 },
        { x1: 50, y1: 130, x2: 50, y2: 180 },
        { x1: 50, y1: 180, x2: 200, y2: 180 },
        { x1: 200, y1: 125, x2: 270, y2: 125 },
      ]}
      components={[
        { kind: "V", x: 50, y: 115, label: `${v1} V`, color: "#f59e0b", labelPos: "left" },
        { kind: "R", x: 200, y: 95, label: `R₁ = ${r1} kΩ`, color: "#10b981" },
        { kind: "R", x: 200, y: 155, label: `R₂ = ${r2} kΩ`, color: "#10b981" },
        { kind: "DOT", x: 200, y: 125, color: "#06b6d4" },
        { kind: "TEXT", x: 286, y: 118, label: "V_out", color: "#06b6d4", value: "11" },
        { kind: "GND", x: 125, y: 180 },
      ]}
    />
  );
}

function AdcFig({ vRef, bits = 10 }: { vRef: number; bits?: number }) {
  const w = 280;
  const h = 170;
  const padL = 36;
  const padB = 26;
  const innerW = w - padL - 12;
  const innerH = h - padB - 10;
  const codeMax = (1 << bits) - 1;
  const steps = 12;
  const path: string[] = [];
  for (let k = 0; k <= steps; k++) {
    const v = (k / steps) * vRef;
    const code = Math.round((v * codeMax) / vRef);
    const x = padL + (v / vRef) * innerW;
    const y = 10 + innerH - (code / codeMax) * innerH;
    if (k === 0) path.push(`M ${x.toFixed(1)} ${y.toFixed(1)}`);
    else {
      const xPrev = padL + ((k - 1) / steps) * innerW;
      const codePrev = Math.round((((k - 1) / steps) * vRef * codeMax) / vRef);
      const yPrev = 10 + innerH - (codePrev / codeMax) * innerH;
      path.push(`L ${x.toFixed(1)} ${yPrev.toFixed(1)} L ${x.toFixed(1)} ${y.toFixed(1)}`);
    }
  }
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="bg-white dark:bg-slate-800 rounded">
      <line x1={padL} y1={10} x2={padL} y2={10 + innerH} stroke="#475569" strokeWidth={1.2} />
      <line x1={padL} y1={10 + innerH} x2={padL + innerW} y2={10 + innerH} stroke="#475569" strokeWidth={1.2} />
      <path d={path.join(" ")} fill="none" stroke="#06b6d4" strokeWidth={1.6} />
      <text x={padL + innerW / 2} y={h - 8} textAnchor="middle" fontSize={10} fill="#475569" fontFamily="monospace">
        V_in (V)
      </text>
      <text x={10} y={padB + innerH / 2} fontSize={10} fill="#475569" fontFamily="monospace" transform={`rotate(-90 10 ${padB + innerH / 2})`}>
        code
      </text>
      <text x={padL} y={10 + innerH + 12} fontSize={9} fill="#475569" textAnchor="middle">0</text>
      <text x={padL + innerW} y={10 + innerH + 12} fontSize={9} fill="#475569" textAnchor="middle">{vRef}</text>
      <text x={padL - 4} y={10 + innerH + 3} fontSize={9} fill="#475569" textAnchor="end">0</text>
      <text x={padL - 4} y={14} fontSize={9} fill="#475569" textAnchor="end">{codeMax}</text>
    </svg>
  );
}

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genBitwise(): Problem {
  const choice = randInt(0, 3);
  if (choice === 0) {
    const n = randInt(0, 7);
    return {
      prompt: <>What value of x makes <code>if (PORT &amp; x)</code> test bit {n}? (decimal)</>,
      expected: 1 << n,
      tolerance: 0.001,
      solution: <>2^{n} = {1 << n}.</>,
    };
  }
  if (choice === 1) {
    const a = randInt(20, 200);
    const b = randInt(2, 16);
    return {
      prompt: <>Compute <code>{a} % {b}</code> in C (decimal).</>,
      expected: a % b,
      tolerance: 0.001,
      solution: <>{a} = {Math.floor(a / b)}·{b} + {a % b}.</>,
    };
  }
  if (choice === 2) {
    const a = randInt(20, 200);
    const b = randInt(2, 16);
    return {
      prompt: <>Compute <code>{a} / {b}</code> in C (integer, decimal).</>,
      expected: Math.floor(a / b),
      tolerance: 0.001,
      solution: <>⌊{a}/{b}⌋ = {Math.floor(a / b)}.</>,
    };
  }
  const a = randInt(0, 255);
  const b = randInt(0, 255);
  return {
    prompt: (
      <>
        Compute <code>0x{a.toString(16).padStart(2, "0").toUpperCase()} &amp; 0x
        {b.toString(16).padStart(2, "0").toUpperCase()}</code> (decimal).
      </>
    ),
    expected: a & b,
    tolerance: 0.001,
    solution: <>Bitwise AND: {a & b}.</>,
  };
}

function genAdc(): Problem {
  const vref = 4.3;
  const choice = randInt(0, 1);
  if (choice === 0) {
    const v = +(Math.random() * vref).toFixed(3);
    const code = Math.round((v * 1023) / vref);
    return {
      prompt: (
        <>10-bit ADC, V_ref = {vref} V, V_in = {v.toFixed(3)} V, single conversion. Code?</>
      ),
      expected: code,
      tolerance: 0.005,
      solution: <>round({v}·1023/{vref}) = {code}.</>,
      figure: <AdcFig vRef={vref} bits={10} />,
    };
  }
  const code = randInt(0, 1023);
  const v = +((vref * code) / 1023).toFixed(3);
  return {
    prompt: <>ADC0_RES = {code}, V_ref = {vref} V. What was V_in (volts)?</>,
    expected: v,
    unit: "V",
    tolerance: 0.005,
    solution: <>V = {vref}·{code}/1023 = {v} V.</>,
    figure: <AdcFig vRef={vref} bits={10} />,
  };
}

function genDivider(): Problem {
  const v1 = +(Math.random() * 10 + 1).toFixed(2);
  const r1 = +(Math.random() * 9 + 1).toFixed(1);
  const r2 = +(Math.random() * 9 + 1).toFixed(1);
  const vout = +((v1 * r2) / (r1 + r2)).toFixed(3);
  return {
    prompt: (
      <>
        V1 = {v1} V, R1 = {r1} kΩ, R2 = {r2} kΩ. Find V at the divider midpoint (volts).
      </>
    ),
    expected: vout,
    unit: "V",
    tolerance: 0.02,
    solution: (
      <>
        V = {v1}·{r2}/({r1}+{r2}) = {v1}·{r2}/{(r1 + r2).toFixed(1)} = {vout} V.
      </>
    ),
    figure: <DividerFig v1={v1} r1={r1} r2={r2} />,
  };
}

const generators: Record<DrillType, () => Problem> = {
  bitwise: genBitwise,
  adc: genAdc,
  divider: genDivider,
};

const drillMeta: Record<DrillType, { label: string; color: string; bg: string }> = {
  bitwise: { label: "Bitwise / Number Systems", color: "#2563eb", bg: "bg-blue-100 dark:bg-blue-900" },
  adc: { label: "ADC Conversion", color: "#ef4444", bg: "bg-red-100 dark:bg-red-900" },
  divider: { label: "Voltage Divider", color: "#10b981", bg: "bg-emerald-100 dark:bg-emerald-900" },
};

export default function EeDrill() {
  const [type, setType] = useState<DrillType>("bitwise");
  const [problem, setProblem] = useState<Problem>(() => genBitwise());
  const [answer, setAnswer] = useState("");
  const [graded, setGraded] = useState(false);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);

  const meta = drillMeta[type];

  const isCorrect = () => {
    const v = parseFloat(answer);
    if (Number.isNaN(v)) return false;
    const tol = Math.max(Math.abs(problem.expected * problem.tolerance), 0.001);
    return Math.abs(v - problem.expected) <= tol;
  };

  const grade = () => {
    setGraded(true);
    if (isCorrect()) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > best) setBest(newStreak);
    } else {
      setStreak(0);
    }
  };

  const next = () => {
    setProblem(generators[type]());
    setAnswer("");
    setGraded(false);
  };

  const switchType = (t: DrillType) => {
    setType(t);
    setProblem(generators[t]());
    setAnswer("");
    setGraded(false);
    setStreak(0);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/ee">
            <Button variant="ghost" className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <ChevronLeft className="w-5 h-5" /> Back to ESE 123
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Drill</h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container py-12 space-y-8 max-w-3xl mx-auto">
        <section className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Speed Drill — Aim for streak ≥ 10
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Random variants of the highest-leverage exam topics. New problem every refresh.
          </p>
        </section>

        <div className="grid grid-cols-3 gap-3">
          {(Object.keys(drillMeta) as DrillType[]).map((t) => {
            const m = drillMeta[t];
            return (
              <button
                key={t}
                onClick={() => switchType(t)}
                className={`p-4 rounded-lg border-2 transition-colors text-left ${
                  t === type
                    ? "border-current shadow-md"
                    : "border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-500"
                }`}
                style={t === type ? { color: m.color, backgroundColor: m.color + "10" } : {}}
              >
                <div className={`text-xs font-bold uppercase tracking-wide ${t === type ? "" : "text-gray-500 dark:text-gray-400"}`} style={t === type ? { color: m.color } : {}}>
                  {m.label}
                </div>
              </button>
            );
          })}
        </div>

        <Card className="interactive-panel" style={{ borderLeftWidth: 4, borderLeftColor: meta.color }}>
          {problem.figure && (
            <div className="mb-4 flex justify-center bg-slate-50 dark:bg-slate-800/40 rounded-md py-2 overflow-x-auto">
              {problem.figure}
            </div>
          )}
          <div className="text-base text-gray-900 dark:text-gray-100 mb-4">
            {problem.prompt}
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Input
              autoFocus
              type="text"
              inputMode="decimal"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              disabled={graded}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (graded) next();
                  else if (answer) grade();
                }
              }}
              placeholder="Your answer"
              className="max-w-xs font-mono"
            />
            {problem.unit && <span className="text-sm text-gray-500 dark:text-gray-400">{problem.unit}</span>}
            {!graded && (
              <Button
                onClick={grade}
                disabled={!answer}
                style={{ backgroundColor: meta.color }}
                className="text-white"
              >
                Check
              </Button>
            )}
            {graded && (
              <Button onClick={next} variant="outline">
                <RotateCcw className="w-4 h-4 mr-1" /> Next
              </Button>
            )}
          </div>
          {graded && (
            <div
              className={`rounded-lg p-3 ${
                isCorrect()
                  ? "bg-green-50 dark:bg-green-900/30 border-l-4 border-l-green-600"
                  : "bg-red-50 dark:bg-red-900/30 border-l-4 border-l-red-600"
              }`}
            >
              <div className="font-bold mb-1 flex items-center gap-2 text-gray-900 dark:text-white">
                {isCorrect() ? (
                  <>
                    <Check className="w-5 h-5 text-green-600" /> Correct!
                  </>
                ) : (
                  <>
                    <X className="w-5 h-5 text-red-600" /> Expected{" "}
                    {problem.expected}
                    {problem.unit ? ` ${problem.unit}` : ""}
                  </>
                )}
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-200">
                {problem.solution}
              </div>
            </div>
          )}
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <LiveValue label="Current streak" value={streak} accentColor={streak >= 10 ? "#10b981" : meta.color} size="lg" />
          <LiveValue label="Best streak" value={best} accentColor="#7c3aed" size="lg" />
        </div>

        {best >= 10 && (
          <Card className="p-6 bg-gradient-to-br from-amber-100 to-emerald-100 dark:from-amber-900/40 dark:to-emerald-900/40 text-center">
            <Trophy className="w-12 h-12 mx-auto mb-3 text-amber-600" />
            <div className="font-bold text-lg text-gray-900 dark:text-white">
              Mastered: {meta.label}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              Streak ≥ 10 unlocked. You're exam-ready on this topic.
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
