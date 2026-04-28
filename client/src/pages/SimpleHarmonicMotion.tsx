import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { WorkedExample } from "@/components/midterm/WorkedExample";
import { PracticeProblem } from "@/components/midterm/PracticeProblem";
import { FormulaBlock } from "@/components/midterm/FormulaBlock";

const ACCENT = "#f59e0b"; // amber

export default function SimpleHarmonicMotion() {
  const [amplitude, setAmplitude] = useState(0.12);
  const [omega, setOmega] = useState(12);
  const [time, setTime] = useState(0);

  const period = (2 * Math.PI) / omega;
  const x = amplitude * Math.cos(omega * time);
  const v = -amplitude * omega * Math.sin(omega * time);
  const a = -amplitude * omega * omega * Math.cos(omega * time);

  const vMax = amplitude * omega;
  const aMax = amplitude * omega * omega;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/midterm-prep">
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
            >
              <ChevronLeft className="w-5 h-5" />
              Back to Midterm Prep
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Day 5 · Simple Harmonic Motion
          </h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container py-12">
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Oscillation Has a Universal Shape
          </h2>
          <div className="prose dark:prose-invert max-w-none space-y-4">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Whenever a system has a restoring force proportional to displacement (
              <span className="font-mono">F = -kx</span>), the motion is{" "}
              <strong>simple harmonic</strong>. The same equation governs:
            </p>
            <ul className="text-lg text-gray-600 dark:text-gray-300 list-disc list-inside ml-4 space-y-1">
              <li>A mass on a spring</li>
              <li>A pendulum (small angles)</li>
              <li>A vibrating string at one frequency</li>
              <li>A circuit with an inductor and capacitor (you'll see this in PHY 132)</li>
            </ul>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              The solution is always:
            </p>
            <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-6 my-4">
              <p className="text-2xl font-mono text-center" style={{ color: ACCENT }}>
                x(t) = A cos(ωt + φ)
              </p>
              <p className="text-sm text-center mt-2 text-gray-500 dark:text-gray-400">
                with ω = √(k/m) for spring, or ω = √(g/L) for pendulum
              </p>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <strong>Two crucial intuitions:</strong>
            </p>
            <ul className="text-lg text-gray-600 dark:text-gray-300 list-disc list-inside ml-4 space-y-2">
              <li>
                <strong>The period depends only on k and m</strong> (or g and L) — not on
                amplitude. Pluck a string harder, same pitch.
              </li>
              <li>
                <strong>Energy oscillates between KE and PE.</strong> ½kA² is the total energy.
                At x=0 it's all KE; at x=±A it's all PE; in between you split. This gives a clean
                way to find v at any x without doing trig:{" "}
                <span className="font-mono">v² = ω²(A² − x²)</span>.
              </li>
            </ul>
          </div>
        </section>

        {/* Simulator */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Phase-Circle Simulator
          </h3>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="interactive-panel">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Spring Mass + Phase Circle
              </h4>

              <svg
                width={500}
                height={400}
                className="border border-gray-200 dark:border-slate-600 rounded-lg mb-6 bg-gray-50 dark:bg-slate-700"
              >
                {/* Phase circle */}
                <g transform="translate(120, 100)">
                  <circle cx="0" cy="0" r="80" fill="none" stroke="#9ca3af" strokeWidth="1" />
                  <line x1="-90" y1="0" x2="90" y2="0" stroke="#d1d5db" strokeWidth="1" />
                  <line x1="0" y1="-90" x2="0" y2="90" stroke="#d1d5db" strokeWidth="1" />
                  <text x="-15" y="-95" fontSize="11" fill="#6b7280">
                    +x
                  </text>
                  {/* Phase point */}
                  <circle
                    cx={80 * Math.cos(omega * time)}
                    cy={-80 * Math.sin(omega * time)}
                    r="6"
                    fill={ACCENT}
                  />
                  <line
                    x1="0"
                    y1="0"
                    x2={80 * Math.cos(omega * time)}
                    y2={-80 * Math.sin(omega * time)}
                    stroke={ACCENT}
                    strokeWidth="1.5"
                  />
                  <text x="-50" y="-100" fontSize="10" fontWeight="bold" fill="#1f2937">
                    Phase circle
                  </text>
                </g>

                {/* Spring + mass */}
                <g transform="translate(280, 200)">
                  <rect x="-10" y="-50" width="10" height="100" fill="#4b5563" />
                  {/* Spring */}
                  <path
                    d={`M 0 0 ${[1, 2, 3, 4, 5, 6, 7]
                      .map(
                        (i) =>
                          `L ${10 + i * 20} ${
                            i % 2 === 0 ? 0 : -8
                          } L ${10 + i * 20 + 10} ${i % 2 === 0 ? 8 : 0}`
                      )
                      .join(" ")} L 160 0`}
                    fill="none"
                    stroke={ACCENT}
                    strokeWidth="2.5"
                  />
                  {/* Mass at displaced position */}
                  <rect
                    x={155 + x * 250}
                    y="-20"
                    width="40"
                    height="40"
                    fill={ACCENT}
                    stroke="#92400e"
                    strokeWidth="2"
                  />
                  <text
                    x={175 + x * 250}
                    y="6"
                    fontSize="11"
                    fill="white"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    m
                  </text>
                  {/* Equilibrium tick */}
                  <line x1="155" y1="-30" x2="155" y2="-25" stroke="#1f2937" strokeWidth="2" />
                  <text x="143" y="-35" fontSize="10" fill="#1f2937">
                    x=0
                  </text>
                  {/* Position label */}
                  <text x="80" y="50" fontSize="13" fill="#1f2937" fontWeight="bold">
                    x = {x.toFixed(3)} m
                  </text>
                </g>

                {/* Time slider readouts */}
                <g transform="translate(20, 320)">
                  <text x="0" y="0" fontSize="12" fill="#1f2937" fontWeight="bold">
                    t = {time.toFixed(2)} s, T = {period.toFixed(3)} s
                  </text>
                  <text x="0" y="20" fontSize="11" fill="#3b82f6">
                    v(t) = {v.toFixed(3)} m/s (max ±{vMax.toFixed(3)})
                  </text>
                  <text x="0" y="38" fontSize="11" fill="#dc2626">
                    a(t) = {a.toFixed(3)} m/s² (max ±{aMax.toFixed(2)})
                  </text>
                </g>
              </svg>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Amplitude A: {amplitude.toFixed(3)} m
                  </label>
                  <Slider
                    value={[amplitude]}
                    onValueChange={(v) => setAmplitude(v[0])}
                    min={0.01}
                    max={0.3}
                    step={0.005}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Angular frequency ω: {omega.toFixed(2)} rad/s (f = {(omega / (2 * Math.PI)).toFixed(2)} Hz)
                  </label>
                  <Slider
                    value={[omega]}
                    onValueChange={(v) => setOmega(v[0])}
                    min={1}
                    max={30}
                    step={0.1}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Time t: {time.toFixed(2)} s
                  </label>
                  <Slider
                    value={[time]}
                    onValueChange={(v) => setTime(v[0])}
                    min={0}
                    max={2}
                    step={0.01}
                  />
                </div>
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="interactive-panel">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Live Calculations
                </h4>
                <div className="space-y-3 font-mono text-sm">
                  <div className="bg-amber-50 dark:bg-amber-900 p-4 rounded border-l-4 border-l-amber-600">
                    <p>
                      <strong>Period & frequency</strong>
                    </p>
                    <p>T = 2π/ω = 6.283/{omega.toFixed(2)} = {period.toFixed(3)} s</p>
                    <p>f = 1/T = {(1 / period).toFixed(2)} Hz</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded border-l-4 border-l-blue-600">
                    <p>
                      <strong>Maximum values</strong>
                    </p>
                    <p>v_max = Aω = {amplitude.toFixed(3)}·{omega.toFixed(2)}</p>
                    <p className="font-bold text-blue-600 dark:text-blue-400">
                      v_max = {vMax.toFixed(3)} m/s
                    </p>
                    <p>a_max = Aω² = {(amplitude * omega * omega).toFixed(3)} m/s²</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded border-l-4 border-l-purple-600">
                    <p>
                      <strong>Energy conservation form</strong>
                    </p>
                    <p>v² = ω²(A² − x²)</p>
                    <p>
                      at x = {x.toFixed(3)}: v² = {omega.toFixed(2)}²·({amplitude.toFixed(3)}² −{" "}
                      {x.toFixed(3)}²)
                    </p>
                    <p className="font-bold text-purple-600 dark:text-purple-400">
                      |v| = {Math.abs(v).toFixed(3)} m/s ✓
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="interactive-panel" style={{ borderLeftWidth: 4, borderLeftColor: ACCENT }}>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Try this:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li>• Slide t and watch the phase point rotate uniformly while x oscillates back and forth — that's the projection.</li>
                  <li>• Double A. v_max doubles, a_max doubles. T stays the same.</li>
                  <li>• Double ω. v_max doubles, a_max quadruples.</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Formulas */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Core Formulas</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <FormulaBlock
              accentColor={ACCENT}
              name="Position, velocity, acceleration"
              formula={
                <div className="space-y-2 text-base">
                  <div>x(t) = A cos(ωt + φ)</div>
                  <div>v(t) = −Aω sin(ωt + φ)</div>
                  <div>a(t) = −Aω² cos(ωt + φ) = −ω²x</div>
                </div>
              }
              variables={[
                { symbol: "A", meaning: "amplitude (max displacement)", units: "m" },
                { symbol: "ω", meaning: "angular frequency", units: "rad/s" },
                { symbol: "φ", meaning: "phase offset (depends on initial conditions)", units: "rad" },
              ]}
              whenToUse="Anytime an SHM problem gives you a position function (or asks for one)."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Spring SHM frequency"
              formula={
                <div className="space-y-1 text-base">
                  <div>ω = √(k/m)</div>
                  <div>T = 2π√(m/k)</div>
                  <div>f = (1/2π)√(k/m)</div>
                </div>
              }
              variables={[
                { symbol: "k", meaning: "spring constant", units: "N/m" },
                { symbol: "m", meaning: "mass on the spring", units: "kg" },
              ]}
              whenToUse="Mass-on-spring or any system with linear restoring force F = −kx."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="v at any x (energy form)"
              formula={<div>v² = ω²(A² − x²)</div>}
              variables={[
                { symbol: "x", meaning: "current displacement from equilibrium", units: "m" },
              ]}
              whenToUse="When you need v at a specific x without computing t. Equivalent to energy conservation ½kA² = ½mv² + ½kx²."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Physical pendulum"
              formula={<div>T = 2π·√(I / (m·g·d))</div>}
              variables={[
                { symbol: "I", meaning: "moment of inertia about the pivot", units: "kg·m²" },
                { symbol: "m", meaning: "total mass of swinging body", units: "kg" },
                { symbol: "d", meaning: "distance from pivot to body's center of mass", units: "m" },
              ]}
              whenToUse="When the swinging object isn't a point mass on a string — like a rod, sign, or arbitrary rigid body. For a uniform rod about its end: T = 2π·√(2L/3g)."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Equilibrium stretch (vertical spring)"
              formula={<div>x_eq = mg/k</div>}
              variables={[
                { symbol: "x_eq", meaning: "stretch from natural length when mass hangs at rest", units: "m" },
              ]}
              whenToUse="A vertical spring with mass hanging — the equilibrium is shifted down by mg/k. Oscillation around this new equilibrium."
            />
          </div>
        </section>

        {/* Worked Example */}
        <section className="mb-16">
          <WorkedExample
            accentColor={ACCENT}
            title="x(t) = 0.12 cos(12t)"
            problemStatement={
              <p>
                An object oscillates according to <span className="font-mono">x(t) = 0.12·cos(12t)</span>{" "}
                (MKS units). Find: <strong>(a)</strong> period, <strong>(b)</strong> v_max,{" "}
                <strong>(c)</strong> v at x = 0.10 m, <strong>(d)</strong> spring constant if mass is
                0.100 kg.
              </p>
            }
            steps={[
              {
                heading: "Read off A and ω from the equation",
                body: <p>A = 0.12 m, ω = 12 rad/s</p>,
              },
              {
                heading: "(a) Period T = 2π/ω",
                body: <p>T = 2π/12 = π/6</p>,
                result: { label: "T", value: "≈ 0.524 s", color: "amber" },
              },
              {
                heading: "(b) v_max = Aω",
                body: <p>= 0.12·12</p>,
                result: { label: "v_max", value: "= 1.44 m/s", color: "amber" },
              },
              {
                heading: "(c) v at x = 0.10 m via energy form",
                body: (
                  <div className="space-y-1">
                    <p>v² = ω²(A² − x²) = 144·(0.0144 − 0.01) = 144·0.0044 = 0.6336</p>
                    <p>v = √0.6336</p>
                  </div>
                ),
                result: { label: "|v|", value: "≈ 0.796 m/s", color: "amber" },
              },
              {
                heading: "(d) Spring constant from ω = √(k/m)",
                body: <p>k = mω² = 0.100·144</p>,
                result: { label: "k", value: "= 14.4 N/m", color: "amber" },
              },
            ]}
            keyInsight={
              <>
                The energy form v² = ω²(A² − x²) is the fastest way to get v at a given x. If you
                tried to do it via t (find t such that x(t) = 0.10, then plug into v(t) = −Aω
                sin(ωt)), you'd get the same answer with much more arithmetic.
              </>
            }
          />
        </section>

        {/* Practice */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Practice Problems
          </h3>

          <div className="space-y-6">
            <PracticeProblem
              accentColor={ACCENT}
              title="The Hanging Plant (8 sub-parts)"
              statement={
                <p>
                  A plant hangs from a vertical spring with{" "}
                  <strong>k = 8 N/m</strong>. You bounce it: amplitude{" "}
                  <strong>12 cm</strong>, frequency <strong>2 Hz</strong>.
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: "Period",
                  solutionSteps: <p>T = 1/f = 1/2 s</p>,
                  answer: { value: "T = 0.5", unit: "s" },
                },
                {
                  label: "(b)",
                  question: "Angular frequency ω",
                  solutionSteps: <p>ω = 2π·f = 2π·2 = 4π</p>,
                  answer: { value: "ω ≈ 12.57", unit: "rad/s" },
                },
                {
                  label: "(c)",
                  question: "v_max",
                  solutionSteps: <p>v_max = Aω = 0.12·12.57</p>,
                  answer: { value: "v_max ≈ 1.508", unit: "m/s" },
                },
                {
                  label: "(d)",
                  question: "a_max",
                  solutionSteps: <p>a_max = Aω² = 0.12·(12.57)² = 0.12·157.91</p>,
                  answer: { value: "a_max ≈ 18.95", unit: "m/s²" },
                },
                {
                  label: "(e)",
                  question: "v at x = 4 cm from equilibrium",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>v² = ω²(A² − x²) = 157.91·(0.0144 − 0.0016) = 157.91·0.0128 = 2.021</p>
                      <p>v = √2.021</p>
                    </div>
                  ),
                  answer: { value: "v ≈ 1.422", unit: "m/s" },
                },
                {
                  label: "(f)",
                  question: "a when |v| = ½v_max",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>v² + (a/ω²)²·ω² = (Aω)² → a² = ω⁴A² − ω²v²</p>
                      <p>With v = ½Aω: a² = A²ω⁴ − A²ω⁴/4 = (3/4)A²ω⁴</p>
                      <p>|a| = (Aω²)·√3/2 = a_max·√3/2 = 18.95·0.866</p>
                    </div>
                  ),
                  answer: { value: "|a| ≈ 16.41", unit: "m/s²" },
                },
                {
                  label: "(g)",
                  question: "What amplitude gives a_max = g (so the plant 'feels weightless')",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>a_max = Aω² = g → A = g/ω² = 9.8/157.91</p>
                    </div>
                  ),
                  answer: { value: "A ≈ 0.0621", unit: "m (≈ 6.2 cm)" },
                },
                {
                  label: "(h)",
                  question: "Equilibrium stretch of the spring (vertical hang)",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>First find m from ω² = k/m → m = k/ω² = 8/157.91 = 0.0507 kg.</p>
                      <p>x_eq = mg/k = 0.0507·9.8/8</p>
                    </div>
                  ),
                  answer: { value: "x_eq ≈ 0.0621", unit: "m (≈ 6.2 cm)" },
                },
              ]}
            />

            <PracticeProblem
              accentColor={ACCENT}
              title="Hanging Shingle (Physical Pendulum)"
              statement={
                <p>
                  A bar (m = 6 kg, length L) extends from a wall pivot, with a sign (M = 12 kg)
                  hanging from it. A breeze causes small-amplitude swinging. The problem says:{" "}
                  <em>"Treat the shingle like a rod rotating about its end."</em> Take that
                  simplification literally — treat the bar as a uniform rod about its end.
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: "Period of the motion",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>For uniform rod about end: I = ⅓mL², d_cm = L/2.</p>
                      <p>T = 2π·√(I / (mgd)) = 2π·√(⅓mL² / (mg·L/2)) = 2π·√(2L / (3g))</p>
                    </div>
                  ),
                  answer: { value: "T = 2π·√(2L/(3·9.8))", unit: "s (in terms of L)" },
                },
                {
                  label: "(b)",
                  question: "Maximum angular acceleration when θ_max = 0.01 rad",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>For a physical pendulum: α(θ) = −ω²·θ where ω² = mgd/I = (3g)/(2L).</p>
                      <p>α_max = ω²·θ_max = (3·9.8/(2L))·0.01 = 0.147/L</p>
                    </div>
                  ),
                  answer: { value: "α_max = 0.147/L", unit: "rad/s² (in terms of L)" },
                },
                {
                  label: "(c)",
                  question: "Angular velocity ω_v when θ = 0.005 rad",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>SHM energy form for the swing: ω_v² = ω²(θ_max² − θ²)</p>
                      <p>= (3g/(2L))·((0.01)² − (0.005)²) = (14.7/L)·0.000075</p>
                      <p>ω_v = √(14.7·0.000075 / L) = √(0.001103 / L)</p>
                    </div>
                  ),
                  answer: { value: "ω_v ≈ 0.0332/√L", unit: "rad/s (in terms of L)" },
                },
              ]}
            />
          </div>
        </section>

        {/* Pitfalls */}
        <section className="mb-16">
          <Card className="interactive-panel border-l-4" style={{ borderLeftColor: "#dc2626" }}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Common Pitfalls
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">×</span>
                <span>
                  <strong>Confusing ω (angular frequency) with f (frequency).</strong> ω = 2πf —
                  always. The argument of cos(·) takes ω·t, not f·t.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">×</span>
                <span>
                  <strong>Thinking T depends on amplitude.</strong> It doesn't — for SHM, period is
                  set entirely by the system (k, m or g, L). Pluck softer or harder; same period.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">×</span>
                <span>
                  <strong>Using the simple-pendulum formula for a rod.</strong> T = 2π·√(L/g) is for
                  a point mass on a massless string. A rod about its end is T = 2π·√(2L/3g) — different
                  by a factor of √(2/3).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">×</span>
                <span>
                  <strong>Forgetting to convert frequency to angular frequency.</strong> If the
                  problem gives f = 2 Hz and you use 2 instead of 4π in your formulas, every
                  velocity and acceleration is off by 2π.
                </span>
              </li>
            </ul>
          </Card>
        </section>

        {/* Next */}
        <section className="text-center py-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Day 6: Waves &amp; Music
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Standing waves, instruments, Doppler, and the trickiest topic on the exam.
          </p>
          <Link href="/waves-music">
            <Button
              className="text-white px-8 py-4 text-lg rounded-lg"
              style={{ backgroundColor: "#10b981" }}
            >
              Continue to Waves &amp; Music <ChevronRight className="w-5 h-5 ml-2 inline" />
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
