import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronLeft, RotateCcw, Check, X, Trophy } from "lucide-react";
import { Link } from "wouter";
import { LiveValue } from "@/components/ee/LiveValue";
import { MultipleChoice } from "@/components/ee/MultipleChoice";
import { InlineMath, BlockMath } from "@/components/math/Katex";

type DrillType =
  | "basic-int"
  | "u-sub"
  | "area"
  | "disk-vol"
  | "separable"
  | "geo-sum"
  | "convergence"
  | "taylor-coef";

interface NumericProblem {
  kind: "numeric";
  prompt: ReactNode;
  expected: number;
  unit?: string;
  tolerance: number;
  solution: ReactNode;
}

interface MCProblem {
  kind: "mc";
  prompt: ReactNode;
  choices: string[];
  correctIndex: number;
  solution: ReactNode;
}

type Problem = NumericProblem | MCProblem;

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function genBasicInt(): Problem {
  // ∫₀^b c·x^n dx = c·b^(n+1)/(n+1)
  const c = randInt(1, 6);
  const n = randInt(1, 4);
  const b = randInt(1, 5);
  const expected = (c * Math.pow(b, n + 1)) / (n + 1);
  return {
    kind: "numeric",
    prompt: (
      <>
        Evaluate <InlineMath math={`\\int_0^{${b}} ${c}x^{${n}}\\,dx`} />.
      </>
    ),
    expected,
    tolerance: 0.005,
    solution: (
      <>
        <InlineMath math={`\\int_0^{${b}} ${c}x^{${n}}\\,dx = \\frac{${c}}{${n + 1}}x^{${n + 1}}\\Big|_0^{${b}} = \\frac{${c}\\cdot ${b}^{${n + 1}}}{${n + 1}} = ${expected}`} />
      </>
    ),
  };
}

function genUSub(): Problem {
  // ∫₀^1 (a x + b)^n dx with u = ax+b
  const a = randInt(2, 5);
  const b = randInt(1, 4);
  const n = randInt(2, 4);
  const upper = a + b;
  const lower = b;
  const expected =
    (Math.pow(upper, n + 1) - Math.pow(lower, n + 1)) / (a * (n + 1));
  return {
    kind: "numeric",
    prompt: (
      <>
        Evaluate <InlineMath math={`\\int_0^1 (${a}x + ${b})^{${n}}\\,dx`} /> using substitution.
      </>
    ),
    expected: +expected.toFixed(4),
    tolerance: 0.005,
    solution: (
      <>
        Let <InlineMath math={`u = ${a}x + ${b}, \\;du = ${a}\\,dx`} />.<br />
        New limits: <InlineMath math={`x=0 \\Rightarrow u=${b}, \\;x=1 \\Rightarrow u=${upper}`} />.<br />
        <InlineMath math={`= \\frac{1}{${a}}\\int_{${b}}^{${upper}} u^{${n}}\\,du = \\frac{1}{${a}(${n + 1})}\\bigl(${upper}^{${n + 1}} - ${b}^{${n + 1}}\\bigr) = ${expected.toFixed(4)}`} />
      </>
    ),
  };
}

function genArea(): Problem {
  // Area between y = a x and y = x²  on [0, a]; intersections at 0 and a; A = ∫₀^a (ax - x²) dx = a³/2 - a³/3 = a³/6
  const a = randInt(2, 5);
  const expected = (a * a * a) / 6;
  return {
    kind: "numeric",
    prompt: (
      <>
        Find the area enclosed between <InlineMath math={`y = ${a}x`} /> and <InlineMath math={`y = x^2`} />.
      </>
    ),
    expected,
    tolerance: 0.005,
    solution: (
      <>
        Intersections: <InlineMath math={`${a}x = x^2 \\Rightarrow x = 0, ${a}`} />. On <InlineMath math={`(0, ${a})`} /> the line is on top, so:
        <BlockMath math={`A = \\int_0^{${a}}(${a}x - x^2)\\,dx = \\Bigl[\\tfrac{${a}}{2}x^2 - \\tfrac{x^3}{3}\\Bigr]_0^{${a}} = \\tfrac{${a}^3}{2} - \\tfrac{${a}^3}{3} = \\tfrac{${a}^3}{6} = ${expected}`} />
      </>
    ),
  };
}

function genDiskVol(): Problem {
  // Region under y = √(c x) on [0, R] rotated about x-axis: V = π ∫₀^R c x dx = π c R² / 2
  const c = randInt(1, 6);
  const R = randInt(1, 4);
  const expected = (Math.PI * c * R * R) / 2;
  return {
    kind: "numeric",
    prompt: (
      <>
        Find the volume of the solid obtained by rotating the region under{" "}
        <InlineMath math={`y = \\sqrt{${c}x}`} /> on <InlineMath math={`[0, ${R}]`} /> about the x-axis. Use disks.
      </>
    ),
    expected: +expected.toFixed(4),
    tolerance: 0.005,
    solution: (
      <>
        <InlineMath math={`V = \\pi\\int_0^{${R}}\\bigl(\\sqrt{${c}x}\\bigr)^2 dx = \\pi\\int_0^{${R}} ${c}x\\,dx = \\pi \\cdot \\tfrac{${c}}{2} x^2\\Big|_0^{${R}} = \\tfrac{${c}\\pi}{2}\\cdot ${R}^2 = ${expected.toFixed(4)}`} />
      </>
    ),
  };
}

function genSeparable(): Problem {
  // dy/dx = k y / x with y(1) = y0; solution y = y0 (x)^k. Ask y(2).
  const k = randInt(1, 3);
  const y0 = randInt(2, 6);
  const expected = y0 * Math.pow(2, k);
  return {
    kind: "numeric",
    prompt: (
      <>
        Solve <InlineMath math={`\\frac{dy}{dx} = \\frac{${k}y}{x}`} /> with{" "}
        <InlineMath math={`y(1) = ${y0}`} />. Find <InlineMath math="y(2)" />.
      </>
    ),
    expected,
    tolerance: 0.005,
    solution: (
      <>
        Separable: <InlineMath math={`\\frac{dy}{y} = ${k}\\frac{dx}{x}`} />.<br />
        Integrate: <InlineMath math={`\\ln|y| = ${k}\\ln|x| + C \\Rightarrow y = A x^{${k}}`} />.<br />
        IC: <InlineMath math={`y(1) = ${y0} \\Rightarrow A = ${y0}`} />, so <InlineMath math={`y = ${y0}\\,x^{${k}}`} />.<br />
        <InlineMath math={`y(2) = ${y0}\\cdot 2^{${k}} = ${expected}`} />.
      </>
    ),
  };
}

function genGeoSum(): Problem {
  // Σ a r^n with a, r given (|r|<1)
  const a = randInt(2, 8);
  const numerator = randInt(1, 4);
  const denominator = randInt(numerator + 2, 8);
  const r = numerator / denominator;
  const expected = a / (1 - r);
  return {
    kind: "numeric",
    prompt: (
      <>
        Find the sum <InlineMath math={`\\sum_{n=0}^{\\infty} ${a}\\left(\\tfrac{${numerator}}{${denominator}}\\right)^n`} />.
      </>
    ),
    expected: +expected.toFixed(4),
    tolerance: 0.005,
    solution: (
      <>
        Geometric series with <InlineMath math={`a = ${a}, r = ${numerator}/${denominator}`} />, <InlineMath math={`|r| < 1`} />.<br />
        Sum <InlineMath math={`= \\frac{a}{1-r} = \\frac{${a}}{1 - ${numerator}/${denominator}} = \\frac{${a}\\cdot ${denominator}}{${denominator - numerator}} = ${expected.toFixed(4)}`} />.
      </>
    ),
  };
}

function genConvergence(): Problem {
  const cases = [
    {
      latex: "\\sum_{n=1}^{\\infty} \\frac{1}{n^{1/2}}",
      verdict: "Diverges (p-series, p = 1/2 ≤ 1)",
      reason: <>p-series with <InlineMath math="p = 1/2 \\le 1" />, so diverges.</>,
    },
    {
      latex: "\\sum_{n=1}^{\\infty} \\frac{1}{n^3}",
      verdict: "Converges (p-series, p = 3 > 1)",
      reason: <>p-series with <InlineMath math="p = 3 > 1" />, converges.</>,
    },
    {
      latex: "\\sum_{n=1}^{\\infty} \\frac{n!}{2^n}",
      verdict: "Diverges (ratio test gives L = ∞)",
      reason: (
        <>
          Ratio test: <InlineMath math="\\lim |a_{n+1}/a_n| = \\lim (n+1)/2 = \\infty > 1" />.
        </>
      ),
    },
    {
      latex: "\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{\\sqrt{n}}",
      verdict: "Converges conditionally (AST applies)",
      reason: (
        <>
          Alternating, <InlineMath math="b_n = 1/\\sqrt{n} \\downarrow 0" /> ⇒ AST converges. But{" "}
          <InlineMath math="\\sum 1/\\sqrt{n}" /> diverges (p = 1/2), so only conditional.
        </>
      ),
    },
    {
      latex: "\\sum_{n=1}^{\\infty} \\frac{2^n}{n!}",
      verdict: "Converges (ratio test, L = 0)",
      reason: <>Ratio test: <InlineMath math="\\lim 2/(n+1) = 0 < 1" /> ⇒ converges absolutely.</>,
    },
    {
      latex: "\\sum_{n=1}^{\\infty} \\frac{n}{n+1}",
      verdict: "Diverges (nth-term test)",
      reason: <><InlineMath math="\\lim n/(n+1) = 1 \\ne 0" /> ⇒ diverges by nth-term test.</>,
    },
  ];
  const c = pick(cases);
  const choices = [
    "Converges (absolutely)",
    "Converges conditionally",
    "Diverges by nth-term test",
    "Diverges (other reason)",
  ];
  let correctIndex = 3;
  if (c.verdict.startsWith("Converges (p")) correctIndex = 0;
  else if (c.verdict.startsWith("Converges (ratio test, L = 0")) correctIndex = 0;
  else if (c.verdict.startsWith("Converges conditionally")) correctIndex = 1;
  else if (c.verdict.includes("nth-term")) correctIndex = 2;
  else correctIndex = 3;
  return {
    kind: "mc",
    prompt: (
      <>
        Does the series <InlineMath math={c.latex} /> converge or diverge? Pick the best description.
      </>
    ),
    choices,
    correctIndex,
    solution: <>{c.verdict}. {c.reason}</>,
  };
}

function genTaylorCoef(): Problem {
  const fns = [
    {
      name: "e^x",
      latex: "e^x",
      coef: (n: number) => 1 / fact(n),
      latexCoef: (n: number) => `\\dfrac{1}{${n}!}`,
    },
    {
      name: "sin x",
      latex: "\\sin(x)",
      coef: (n: number) => (n % 2 === 0 ? 0 : Math.pow(-1, (n - 1) / 2) / fact(n)),
      latexCoef: (n: number) =>
        n % 2 === 0 ? "0" : `\\dfrac{(-1)^{${(n - 1) / 2}}}{${n}!}`,
    },
    {
      name: "cos x",
      latex: "\\cos(x)",
      coef: (n: number) => (n % 2 === 1 ? 0 : Math.pow(-1, n / 2) / fact(n)),
      latexCoef: (n: number) =>
        n % 2 === 1 ? "0" : `\\dfrac{(-1)^{${n / 2}}}{${n}!}`,
    },
    {
      name: "1/(1-x)",
      latex: "\\dfrac{1}{1-x}",
      coef: (_n: number) => 1,
      latexCoef: (_n: number) => "1",
    },
    {
      name: "ln(1+x)",
      latex: "\\ln(1+x)",
      coef: (n: number) => (n === 0 ? 0 : Math.pow(-1, n + 1) / n),
      latexCoef: (n: number) => (n === 0 ? "0" : `\\dfrac{(-1)^{${n + 1}}}{${n}}`),
    },
  ];
  const f = pick(fns);
  const n = randInt(2, 6);
  const expected = f.coef(n);
  return {
    kind: "numeric",
    prompt: (
      <>
        Find the coefficient <InlineMath math={`c_{${n}}`} /> in the Maclaurin series of <InlineMath math={f.latex} />.
      </>
    ),
    expected: +expected.toFixed(6),
    tolerance: 0.005,
    solution: (
      <>
        <InlineMath math={`c_n = \\frac{f^{(n)}(0)}{n!}`} /> for <InlineMath math={f.latex} />:{" "}
        <InlineMath math={`c_{${n}} = ${f.latexCoef(n)} = ${expected.toFixed(6)}`} />.
      </>
    ),
  };
}

function fact(n: number): number {
  if (n <= 1) return 1;
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

const generators: Record<DrillType, () => Problem> = {
  "basic-int": genBasicInt,
  "u-sub": genUSub,
  area: genArea,
  "disk-vol": genDiskVol,
  separable: genSeparable,
  "geo-sum": genGeoSum,
  convergence: genConvergence,
  "taylor-coef": genTaylorCoef,
};

const drillMeta: Record<DrillType, { label: string; color: string }> = {
  "basic-int": { label: "Basic integral", color: "#2563eb" },
  "u-sub": { label: "u-substitution", color: "#7c3aed" },
  area: { label: "Area between curves", color: "#10b981" },
  "disk-vol": { label: "Volume — disks", color: "#0d9488" },
  separable: { label: "Separable DE", color: "#f59e0b" },
  "geo-sum": { label: "Geometric series sum", color: "#db2777" },
  convergence: { label: "Convergence test (MC)", color: "#9333ea" },
  "taylor-coef": { label: "Taylor coefficient", color: "#ea580c" },
};

export default function MathDrill() {
  const [type, setType] = useState<DrillType>("basic-int");
  const [problem, setProblem] = useState<Problem>(() => genBasicInt());
  const [answer, setAnswer] = useState("");
  const [mcChoice, setMcChoice] = useState<number | null>(null);
  const [graded, setGraded] = useState(false);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);

  const meta = drillMeta[type];

  const isCorrect = () => {
    if (problem.kind === "numeric") {
      const v = parseFloat(answer);
      if (Number.isNaN(v)) return false;
      const tol = Math.max(Math.abs(problem.expected * problem.tolerance), 0.001);
      return Math.abs(v - problem.expected) <= tol;
    }
    return mcChoice === problem.correctIndex;
  };

  const grade = () => {
    setGraded(true);
    if (isCorrect()) {
      const s = streak + 1;
      setStreak(s);
      if (s > best) setBest(s);
    } else {
      setStreak(0);
    }
  };

  const next = () => {
    setProblem(generators[type]());
    setAnswer("");
    setMcChoice(null);
    setGraded(false);
  };

  const switchType = (t: DrillType) => {
    setType(t);
    setProblem(generators[t]());
    setAnswer("");
    setMcChoice(null);
    setGraded(false);
    setStreak(0);
  };

  const canCheck =
    !graded &&
    ((problem.kind === "numeric" && answer.length > 0) ||
      (problem.kind === "mc" && mcChoice !== null));

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <header
        className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm"
        style={{ borderTopWidth: 4, borderTopColor: meta.color }}
      >
        <div className="container flex items-center justify-between py-4">
          <Link href="/math">
            <Button variant="ghost" className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <ChevronLeft className="w-5 h-5" /> Back to Math
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Math Drill</h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container py-12 space-y-8 max-w-3xl mx-auto">
        <section className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Speed Drill — Aim for streak ≥ 10
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Random variants of the AMS 161 core skills. New problem on every Next.
          </p>
        </section>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {(Object.keys(drillMeta) as DrillType[]).map((t) => {
            const m = drillMeta[t];
            return (
              <button
                key={t}
                onClick={() => switchType(t)}
                className={`p-3 rounded-lg border-2 transition-colors text-left ${
                  t === type
                    ? "border-current shadow-md"
                    : "border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-500"
                }`}
                style={t === type ? { color: m.color, backgroundColor: m.color + "10" } : {}}
              >
                <div
                  className={`text-xs font-bold uppercase tracking-wide ${
                    t === type ? "" : "text-gray-500 dark:text-gray-400"
                  }`}
                  style={t === type ? { color: m.color } : {}}
                >
                  {m.label}
                </div>
              </button>
            );
          })}
        </div>

        <Card className="interactive-panel" style={{ borderLeftWidth: 4, borderLeftColor: meta.color }}>
          <div className="text-base text-gray-900 dark:text-gray-100 mb-4 leading-relaxed">
            {problem.prompt}
          </div>

          {problem.kind === "numeric" && (
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
                    else if (canCheck) grade();
                  }
                }}
                placeholder="Your answer"
                className="max-w-xs font-mono"
              />
              {problem.unit && (
                <span className="text-sm text-gray-500 dark:text-gray-400">{problem.unit}</span>
              )}
              {!graded && (
                <Button onClick={grade} disabled={!canCheck} style={{ backgroundColor: meta.color }} className="text-white">
                  Check
                </Button>
              )}
              {graded && (
                <Button onClick={next} variant="outline">
                  <RotateCcw className="w-4 h-4 mr-1" /> Next
                </Button>
              )}
            </div>
          )}

          {problem.kind === "mc" && (
            <div className="space-y-3 mb-4">
              <MultipleChoice
                choices={problem.choices}
                selected={mcChoice}
                onSelect={setMcChoice}
                correctIndex={problem.correctIndex}
                graded={graded}
                accentColor={meta.color}
              />
              <div className="flex gap-2">
                {!graded && (
                  <Button onClick={grade} disabled={!canCheck} style={{ backgroundColor: meta.color }} className="text-white">
                    Check
                  </Button>
                )}
                {graded && (
                  <Button onClick={next} variant="outline">
                    <RotateCcw className="w-4 h-4 mr-1" /> Next
                  </Button>
                )}
              </div>
            </div>
          )}

          {graded && (
            <div
              className={`rounded-lg p-3 ${
                isCorrect()
                  ? "bg-green-50 dark:bg-green-900/30 border-l-4 border-l-green-600"
                  : "bg-red-50 dark:bg-red-900/30 border-l-4 border-l-red-600"
              }`}
            >
              <div className="font-bold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
                {isCorrect() ? (
                  <>
                    <Check className="w-5 h-5 text-green-600" /> Correct!
                  </>
                ) : (
                  <>
                    <X className="w-5 h-5 text-red-600" />
                    {problem.kind === "numeric" ? (
                      <>
                        Expected{" "}
                        <span className="font-mono">
                          {problem.expected}
                          {problem.unit ? ` ${problem.unit}` : ""}
                        </span>
                      </>
                    ) : (
                      <>Wrong choice</>
                    )}
                  </>
                )}
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-200">{problem.solution}</div>
            </div>
          )}
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <LiveValue
            label="Current streak"
            value={streak}
            accentColor={streak >= 10 ? "#10b981" : meta.color}
            size="lg"
          />
          <LiveValue label="Best streak" value={best} accentColor="#7c3aed" size="lg" />
        </div>

        {best >= 10 && (
          <Card className="p-6 bg-gradient-to-br from-amber-100 to-emerald-100 dark:from-amber-900/40 dark:to-emerald-900/40 text-center">
            <Trophy className="w-12 h-12 mx-auto mb-3 text-amber-600" />
            <div className="font-bold text-lg text-gray-900 dark:text-white">
              Mastered: {meta.label}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              Streak ≥ 10 unlocked. You're exam-ready on this skill.
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
