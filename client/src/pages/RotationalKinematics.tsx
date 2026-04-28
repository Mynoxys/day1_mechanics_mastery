import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { WorkedExample } from "@/components/midterm/WorkedExample";
import { PracticeProblem } from "@/components/midterm/PracticeProblem";
import { FormulaBlock } from "@/components/midterm/FormulaBlock";

const ACCENT = "#06b6d4"; // cyan

export default function RotationalKinematics() {
  const [omega0Rpm, setOmega0Rpm] = useState(0);
  const [alpha, setAlpha] = useState(1.0);
  const [time, setTime] = useState(10);
  const [markerRadius, setMarkerRadius] = useState(1.5);

  const omega0 = (omega0Rpm * 2 * Math.PI) / 60; // rad/s
  const omegaT = omega0 + alpha * time;
  const theta = omega0 * time + 0.5 * alpha * time * time;
  const turns = theta / (2 * Math.PI);
  const tangentialV = markerRadius * omegaT;

  // Marker dot position based on θ (mod 2π)
  const thetaMod = theta - Math.floor(theta / (2 * Math.PI)) * 2 * Math.PI;
  const cx = 250 + markerRadius * 70 * Math.cos(thetaMod);
  const cy = 200 + markerRadius * 70 * Math.sin(thetaMod);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header */}
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
            Day 1 · Rotational Kinematics
          </h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container py-12">
        {/* Intro */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Spinning, the Same Way Things Move
          </h2>
          <div className="prose dark:prose-invert max-w-none space-y-4">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Rotational kinematics is straight-line kinematics with new variable names. Every
              equation you used for{" "}
              <span style={{ color: ACCENT }} className="font-semibold">
                x, v, a
              </span>{" "}
              has a rotational twin for{" "}
              <span style={{ color: ACCENT }} className="font-semibold">
                θ, ω, α
              </span>
              . If you can solve a "car accelerates from rest" problem, you can solve a "propeller
              spins up from rest" problem — same algebra, different letters.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              The one place rotational kinematics adds something genuinely new is the{" "}
              <strong>radius bridge</strong>: a point at radius{" "}
              <span className="font-mono">r</span> on a spinning disc has{" "}
              <em>tangential</em> speed{" "}
              <span className="font-mono">v_t = rω</span>. The disc has one ω; every point at a
              different radius has a different linear speed. That's why the tip of a propeller can
              hit the speed of sound while the hub barely moves.
            </p>
          </div>
        </section>

        {/* Analogy Grid */}
        <section className="mb-16">
          <Card className="interactive-panel">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              The Linear ↔ Angular Dictionary
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr className="border-b-2 border-gray-200 dark:border-slate-600">
                    <th className="text-left py-3 px-4 font-bold text-gray-900 dark:text-white">
                      Linear
                    </th>
                    <th className="text-left py-3 px-4 font-bold text-gray-900 dark:text-white">
                      Angular
                    </th>
                    <th className="text-left py-3 px-4 font-bold text-gray-900 dark:text-white">
                      Bridge
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-slate-600 font-mono">
                  <tr>
                    <td className="py-2 px-4">position x (m)</td>
                    <td className="py-2 px-4" style={{ color: ACCENT }}>
                      angle θ (rad)
                    </td>
                    <td className="py-2 px-4 text-gray-500">arc length s = rθ</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">velocity v (m/s)</td>
                    <td className="py-2 px-4" style={{ color: ACCENT }}>
                      angular vel ω (rad/s)
                    </td>
                    <td className="py-2 px-4 text-gray-500">
                      v<sub>t</sub> = rω
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">accel a (m/s²)</td>
                    <td className="py-2 px-4" style={{ color: ACCENT }}>
                      angular accel α (rad/s²)
                    </td>
                    <td className="py-2 px-4 text-gray-500">
                      a<sub>t</sub> = rα
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">mass m (kg)</td>
                    <td className="py-2 px-4" style={{ color: ACCENT }}>
                      moment of inertia I (kg·m²)
                    </td>
                    <td className="py-2 px-4 text-gray-500">depends on shape</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">force F (N)</td>
                    <td className="py-2 px-4" style={{ color: ACCENT }}>
                      torque τ (N·m)
                    </td>
                    <td className="py-2 px-4 text-gray-500">τ = rF sinθ</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 italic">
              <strong>Unit conversion drill:</strong> ω [rad/s] = (rpm) × 2π/60. So 200 rpm =
              20.94 rad/s, and 100 rpm = 10.47 rad/s. Always convert before using a formula —
              radians are the natural unit.
            </p>
          </Card>
        </section>

        {/* Simulator */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Interactive Simulator
          </h3>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Diagram */}
            <Card className="interactive-panel">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Spinning Disc with Marker
              </h4>

              <svg
                width={500}
                height={400}
                className="border border-gray-200 dark:border-slate-600 rounded-lg mb-6 bg-gray-50 dark:bg-slate-700"
              >
                {/* Outer disc */}
                <circle
                  cx="250"
                  cy="200"
                  r="160"
                  fill="none"
                  stroke="#9ca3af"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                {/* Filled disc (lighter) */}
                <circle cx="250" cy="200" r="155" fill={ACCENT} fillOpacity="0.08" />

                {/* Hub */}
                <circle cx="250" cy="200" r="6" fill="#1f2937" />

                {/* Reference line at θ=0 */}
                <line
                  x1="250"
                  y1="200"
                  x2="410"
                  y2="200"
                  stroke="#9ca3af"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <text x="412" y="205" fontSize="11" fill="#6b7280">
                  θ = 0
                </text>

                {/* Radius spoke at current θ */}
                <line x1="250" y1="200" x2={cx} y2={cy} stroke={ACCENT} strokeWidth="3" />

                {/* Marker dot */}
                <circle cx={cx} cy={cy} r="10" fill={ACCENT} stroke="#155e75" strokeWidth="2" />

                {/* Tangential velocity arrow */}
                {Math.abs(tangentialV) > 0.05 && (
                  <g>
                    {(() => {
                      // Tangent direction (perpendicular to radius, in rotation direction)
                      const tangentX = -Math.sin(thetaMod);
                      const tangentY = Math.cos(thetaMod);
                      const sign = tangentialV >= 0 ? 1 : -1;
                      const len = Math.min(Math.abs(tangentialV) * 3, 60);
                      const arrowEndX = cx + sign * tangentX * len;
                      const arrowEndY = cy + sign * tangentY * len;
                      return (
                        <>
                          <line
                            x1={cx}
                            y1={cy}
                            x2={arrowEndX}
                            y2={arrowEndY}
                            stroke="#7c3aed"
                            strokeWidth="2.5"
                          />
                          <circle cx={arrowEndX} cy={arrowEndY} r="3" fill="#7c3aed" />
                          <text
                            x={arrowEndX + 6}
                            y={arrowEndY - 6}
                            fontSize="11"
                            fill="#7c3aed"
                            fontWeight="bold"
                          >
                            v_t
                          </text>
                        </>
                      );
                    })()}
                  </g>
                )}

                {/* Radius label */}
                <text x="20" y="30" fontSize="12" fill="#374151">
                  Marker at r = {markerRadius.toFixed(2)} m
                </text>
                <text x="20" y="48" fontSize="12" fill="#374151">
                  θ swept = {theta.toFixed(2)} rad ({turns.toFixed(2)} turns)
                </text>
              </svg>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Initial ω₀: {omega0Rpm} rpm ({omega0.toFixed(2)} rad/s)
                  </label>
                  <Slider
                    value={[omega0Rpm]}
                    onValueChange={(v) => setOmega0Rpm(v[0])}
                    min={0}
                    max={300}
                    step={5}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Angular accel α: {alpha.toFixed(2)} rad/s²
                  </label>
                  <Slider
                    value={[alpha]}
                    onValueChange={(v) => setAlpha(v[0])}
                    min={-3}
                    max={3}
                    step={0.05}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Elapsed time t: {time.toFixed(1)} s
                  </label>
                  <Slider
                    value={[time]}
                    onValueChange={(v) => setTime(v[0])}
                    min={0}
                    max={60}
                    step={0.5}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Marker radius r: {markerRadius.toFixed(2)} m
                  </label>
                  <Slider
                    value={[markerRadius]}
                    onValueChange={(v) => setMarkerRadius(v[0])}
                    min={0.1}
                    max={2.2}
                    step={0.05}
                  />
                </div>
              </div>
            </Card>

            {/* Live Calculation */}
            <div className="space-y-6">
              <Card className="interactive-panel">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Live Calculation
                </h4>
                <div className="space-y-3 font-mono text-sm">
                  <div className="bg-amber-50 dark:bg-amber-900 p-4 rounded border-l-4 border-l-amber-600">
                    <p>
                      <strong>ω(t) = ω₀ + αt</strong>
                    </p>
                    <p>
                      ω({time.toFixed(1)}) = {omega0.toFixed(3)} + ({alpha.toFixed(2)})·
                      {time.toFixed(1)}
                    </p>
                    <p className="font-bold text-amber-600 dark:text-amber-400">
                      ω = {omegaT.toFixed(3)} rad/s = {((omegaT * 60) / (2 * Math.PI)).toFixed(1)}{" "}
                      rpm
                    </p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded border-l-4 border-l-blue-600">
                    <p>
                      <strong>θ(t) = ω₀t + ½αt²</strong>
                    </p>
                    <p>
                      θ = {omega0.toFixed(3)}·{time.toFixed(1)} + 0.5·({alpha.toFixed(2)})·
                      {time.toFixed(1)}²
                    </p>
                    <p className="font-bold text-blue-600 dark:text-blue-400">
                      θ = {theta.toFixed(2)} rad = {turns.toFixed(2)} turns
                    </p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded border-l-4 border-l-purple-600">
                    <p>
                      <strong>Tangential speed at the marker</strong>
                    </p>
                    <p>
                      v_t = rω = {markerRadius.toFixed(2)}·{omegaT.toFixed(3)}
                    </p>
                    <p className="font-bold text-purple-600 dark:text-purple-400">
                      v_t = {tangentialV.toFixed(3)} m/s
                    </p>
                  </div>
                </div>
              </Card>

              <Card
                className="interactive-panel"
                style={{ borderLeftWidth: 4, borderLeftColor: ACCENT }}
              >
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  Try this:
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li>• Set ω₀ = 200 rpm and α = 0. What happens to v_t as r changes?</li>
                  <li>
                    • Set α = -1 and let t increase past where ω = 0 — note that ω goes negative
                    (now spinning the other way).
                  </li>
                  <li>
                    • At what radius does v_t equal 345 m/s (speed of sound) for ω = 100 rad/s?
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Formulas */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            The Five Equations + Two Bridges
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <FormulaBlock
              accentColor={ACCENT}
              name="Constant-α kinematics"
              formula={
                <div className="space-y-2">
                  <div>ω = ω₀ + αt</div>
                  <div>θ = ω₀t + ½αt²</div>
                  <div>ω² = ω₀² + 2αθ</div>
                  <div>θ = ½(ω₀ + ω)t</div>
                </div>
              }
              variables={[
                { symbol: "ω₀", meaning: "initial angular velocity", units: "rad/s" },
                { symbol: "ω", meaning: "angular velocity at time t", units: "rad/s" },
                { symbol: "α", meaning: "angular acceleration (constant)", units: "rad/s²" },
                { symbol: "θ", meaning: "angle swept (radians)", units: "rad" },
                { symbol: "t", meaning: "elapsed time", units: "s" },
              ]}
              whenToUse="Whenever α is constant. Identical to linear kinematics — just substitute symbols."
            />

            <FormulaBlock
              accentColor={ACCENT}
              name="Tangential bridges"
              formula={
                <div className="space-y-2">
                  <div>
                    v<sub>t</sub> = rω
                  </div>
                  <div>
                    a<sub>t</sub> = rα
                  </div>
                  <div>arc length s = rθ</div>
                </div>
              }
              variables={[
                { symbol: "r", meaning: "distance from rotation axis", units: "m" },
                { symbol: "v_t", meaning: "tangential speed of that point", units: "m/s" },
                { symbol: "a_t", meaning: "tangential acceleration of that point", units: "m/s²" },
                { symbol: "s", meaning: "arc length (linear distance traveled)", units: "m" },
              ]}
              whenToUse="When you need to translate between an angular quantity and the linear motion of a specific point on the rotating body."
            />

            <FormulaBlock
              accentColor={ACCENT}
              name="rpm ↔ rad/s"
              formula={<div>ω [rad/s] = rpm × 2π/60</div>}
              variables={[
                { symbol: "rpm", meaning: "revolutions per minute" },
                { symbol: "2π/60", meaning: "= π/30 ≈ 0.1047 conversion factor" },
              ]}
              whenToUse="Always — every problem gives you rpm and every formula needs rad/s."
            />

            <FormulaBlock
              accentColor={ACCENT}
              name="# of revolutions"
              formula={<div># turns = θ / (2π)</div>}
              variables={[
                { symbol: "θ", meaning: "total angle swept", units: "rad" },
              ]}
              whenToUse="When the question asks 'how many times did it spin' — convert from radians."
            />
          </div>
        </section>

        {/* Worked Example: Propeller */}
        <section className="mb-16">
          <WorkedExample
            accentColor={ACCENT}
            title="The 4-Blade Propeller (full a–f)"
            problemStatement={
              <div className="space-y-2">
                <p>
                  A four-blade propeller has each blade of mass <strong>5 kg</strong> and length{" "}
                  <strong>3 m</strong>. The propeller starts from rest and reaches{" "}
                  <strong>200 rpm</strong> after <strong>20 s</strong>.
                </p>
                <p>The questions: (a) α in rad/s², (b) # turns in 20 s, (c) ω at which the tip exceeds the speed of sound (345 m/s), (d) when in time, (e) moment of inertia I treating each blade as a rod about its end, (f) torque required.</p>
              </div>
            }
            steps={[
              {
                heading: "Convert 200 rpm to rad/s",
                body: (
                  <p>
                    ω_f = 200 × 2π/60 = 200 × 0.1047 = <strong>20.94 rad/s</strong>
                  </p>
                ),
              },
              {
                heading: "(a) Angular acceleration α",
                body: <p>ω = ω₀ + αt → α = (20.94 − 0) / 20</p>,
                result: { label: "α", value: "1.047 rad/s² (≈ π/3)", color: "cyan" },
              },
              {
                heading: "(b) Turns in 20 s",
                body: (
                  <p>
                    θ = ω₀t + ½αt² = 0 + ½·(1.047)·(20)² = 209.4 rad. # turns = 209.4 / (2π).
                  </p>
                ),
                result: { label: "# turns", value: "33.3 turns", color: "cyan" },
              },
              {
                heading: "(c) ω where tip exceeds speed of sound",
                body: (
                  <p>
                    Tip is at r = 3 m. v_t = rω → 345 = 3·ω → ω = 345/3.
                  </p>
                ),
                result: { label: "ω_sonic", value: "115 rad/s", color: "cyan" },
              },
              {
                heading: "(d) Time at which that ω is reached",
                body: <p>ω = αt → t = 115 / 1.047</p>,
                result: { label: "t_sonic", value: "≈ 109.8 s", color: "cyan" },
              },
              {
                heading: "(e) Moment of inertia (4 rods about end)",
                body: (
                  <p>
                    For one rod about its end: I_rod = ⅓ M L² = ⅓ · 5 · 3² = 15 kg·m². Four
                    blades total: I = 4 × 15.
                  </p>
                ),
                result: { label: "I", value: "60 kg·m²", color: "cyan" },
              },
              {
                heading: "(f) Required torque (Newton's 2nd for rotation)",
                body: <p>τ = Iα = 60 · 1.047</p>,
                result: { label: "τ", value: "≈ 62.83 N·m", color: "cyan" },
              },
            ]}
            keyInsight={
              <>
                The tip-speed-of-sound condition is what makes propeller design hard — bigger rotors
                must spin slower or their blade tips break the sound barrier and lose lift
                catastrophically. Same physics governs helicopter rotor sizing.
              </>
            }
          />
        </section>

        {/* Practice */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Practice Problem
          </h3>

          <PracticeProblem
            accentColor={ACCENT}
            title="The Grindstone (axe sharpener)"
            statement={
              <p>
                A grindstone of <strong>mass 80 kg</strong> and <strong>radius 0.7 m</strong> is
                used to sharpen an axe. The axe is pressed against the spinning grindstone with a
                normal force <strong>N = 20 N</strong>. The grindstone slows from{" "}
                <strong>100 rpm</strong> to a stop in <strong>2 minutes</strong>.
              </p>
            }
            parts={[
              {
                label: "(a)",
                question: "Angular acceleration α of the grindstone",
                solutionSteps: (
                  <div className="space-y-1">
                    <p>ω₀ = 100 rpm = 100·2π/60 = 10.47 rad/s, ω_f = 0, t = 120 s.</p>
                    <p>α = (ω_f − ω₀)/t = (0 − 10.47)/120</p>
                  </div>
                ),
                answer: { value: "α ≈ −0.0873", unit: "rad/s² (deceleration)" },
              },
              {
                label: "(b)",
                question: "How many turns before it stops",
                solutionSteps: (
                  <div className="space-y-1">
                    <p>θ = ½(ω₀ + ω_f)·t = ½·10.47·120 = 628.3 rad.</p>
                    <p># turns = 628.3 / (2π).</p>
                  </div>
                ),
                answer: { value: "100 turns" },
              },
              {
                label: "(c)",
                question: "Moment of inertia of the grindstone",
                solutionSteps: (
                  <div className="space-y-1">
                    <p>Treat as solid disk: I = ½MR² = ½·80·(0.7)² = ½·80·0.49.</p>
                  </div>
                ),
                answer: { value: "I = 19.6", unit: "kg·m²" },
              },
              {
                label: "(d)",
                question: "Coefficient of kinetic friction μ_k between axe and stone",
                solutionSteps: (
                  <div className="space-y-1">
                    <p>The friction force at the rim provides the decelerating torque:</p>
                    <p>τ_friction = |Iα| = 19.6 · 0.0873 = 1.711 N·m.</p>
                    <p>Friction force at rim: f = τ/R = 1.711/0.7 = 2.444 N.</p>
                    <p>μ_k = f / N = 2.444 / 20.</p>
                  </div>
                ),
                answer: { value: "μ_k ≈ 0.122" },
              },
            ]}
          />
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
                  <strong>Forgetting to convert rpm to rad/s.</strong> If you plug 200 directly
                  into ω = ω₀ + αt, every downstream answer will be off by a factor of 2π/60.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">×</span>
                <span>
                  <strong>Sign confusion on α.</strong> "Slowing down" doesn't mean α &lt; 0
                  universally — it means α opposes ω. If ω is in your "positive" rotation
                  direction, then yes α is negative; if you're spinning the other way, α is
                  positive.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">×</span>
                <span>
                  <strong>Confusing v_t with ω.</strong> ω is the same everywhere on the rigid
                  body. v_t depends on r. Two points at different radii on the same disc have the
                  same ω but different v_t.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">×</span>
                <span>
                  <strong>Wrong moment of inertia formula.</strong> Rod about its center is{" "}
                  ¹/₁₂ ML²; rod about its <em>end</em> is ⅓ ML². Propeller blades rotate about
                  one end (the hub), so use ⅓ ML². Disk: ½MR². Hoop: MR².
                </span>
              </li>
            </ul>
          </Card>
        </section>

        {/* Next */}
        <section className="text-center py-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Day 2: Torque &amp; Statics
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Now that you can describe rotation, learn what causes it.
          </p>
          <Link href="/torque">
            <Button
              className="text-white px-8 py-4 text-lg rounded-lg"
              style={{ backgroundColor: "#c026d3" }}
            >
              Continue to Torque <ChevronRight className="w-5 h-5 ml-2 inline" />
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
