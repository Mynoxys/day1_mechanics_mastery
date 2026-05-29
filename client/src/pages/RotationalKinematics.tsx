import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { WorkedExample, Eq, Why } from "@/components/midterm/WorkedExample";
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
                {
                  symbol: "ω₀",
                  meaning: "how fast it's spinning at the start (radians per second)",
                  units: "rad/s",
                },
                {
                  symbol: "ω",
                  meaning: "how fast it's spinning at time t",
                  units: "rad/s",
                },
                {
                  symbol: "α",
                  meaning:
                    "how quickly the spin rate is changing — bigger α = spinning up (or slowing down) faster. Must be CONSTANT for these formulas to apply",
                  units: "rad/s²",
                },
                {
                  symbol: "θ",
                  meaning:
                    "total angle swept (in radians — 2π per full revolution)",
                  units: "rad",
                },
                { symbol: "t", meaning: "elapsed time", units: "s" },
              ]}
              whenToUse="These four are word-for-word the linear kinematics equations with x→θ, v→ω, a→α. Same physics, same algebra — only the symbols change. Pick the equation that has the three quantities you know plus the one you want, exactly like you did in Calc-I-style kinematics."
            />

            <FormulaBlock
              accentColor={ACCENT}
              name="Tangential bridges (linear ↔ angular)"
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
                {
                  symbol: "r",
                  meaning:
                    "distance from the rotation axis to the point you care about — the lever arm",
                  units: "m",
                },
                {
                  symbol: "v_t",
                  meaning:
                    "linear speed of that point along the circle it's tracing",
                  units: "m/s",
                },
                {
                  symbol: "a_t",
                  meaning: "linear acceleration along the tangent direction",
                  units: "m/s²",
                },
                {
                  symbol: "s",
                  meaning:
                    "arc length swept — linear distance traveled along the circle",
                  units: "m",
                },
              ]}
              whenToUse="A spinning object has ONE ω, but every point on it has its own linear speed depending on its distance from the axis. Outer points move faster than inner ones. These three formulas convert: how fast is the rim moving (v = rω)? How long an arc does it trace (s = rθ)? Use this whenever a problem mixes angular language ('the disk spins at 60 rpm') with linear language ('how fast is the edge moving?')."
            />

            <FormulaBlock
              accentColor={ACCENT}
              name="rpm ↔ rad/s"
              formula={<div>ω [rad/s] = rpm × 2π/60</div>}
              variables={[
                {
                  symbol: "rpm",
                  meaning:
                    "revolutions per minute — what record players, drills, and engines are typically labeled with",
                },
                {
                  symbol: "2π/60",
                  meaning:
                    "the conversion factor: 2π radians per revolution, divided by 60 seconds per minute (= π/30 ≈ 0.1047)",
                },
              ]}
              whenToUse="Real-world problems quote rotation speeds in rpm; physics formulas all need rad/s. Don't trust 'rpm × 0.1' — that's a 5% error that will tank an exam answer. Use 2π/60 = π/30 every time. Common values worth memorizing: 60 rpm = 2π rad/s, 1800 rpm = 60π ≈ 188.5 rad/s."
            />

            <FormulaBlock
              accentColor={ACCENT}
              name="# of revolutions"
              formula={<div># turns = θ / (2π)</div>}
              variables={[
                {
                  symbol: "θ",
                  meaning:
                    "total angle swept (in radians, since formulas always use radians)",
                  units: "rad",
                },
              ]}
              whenToUse="The exam question often asks 'how many times did the wheel turn before stopping' rather than the angle in radians. Convert at the END: divide by 2π. The intuition: 2π radians is one full lap; whatever θ you got, divide by that to count laps."
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
                heading: "Set up: convert rpm to rad/s before doing anything",
                body: (
                  <>
                    <Why>
                      Every kinematic formula here (ω = ω₀ + αt, θ = ½αt², etc.) was derived
                      assuming angles in <strong>radians</strong>. The problem hands us 200 rpm
                      — "revolutions per minute" — which is a count of full turns per 60 seconds.
                      One full turn is 2π radians, so to convert we multiply by 2π (to get
                      radians per minute) and divide by 60 (to convert minutes to seconds).
                      If we skip this step and plug 200 directly into the formulas, every answer
                      that follows will be off by a factor of 2π/60 ≈ 0.1047.
                    </Why>
                    <Eq>ω_f = 200 rpm × (2π rad / 1 rev) × (1 min / 60 s)</Eq>
                    <Eq>ω_f = 200 × 0.1047 = 20.94 rad/s</Eq>
                    <Why>
                      Read the answer back as a sentence: "20.94 radians of angle are swept by
                      every blade every second once it's at full speed." That's roughly 3.3 full
                      turns per second.
                    </Why>
                  </>
                ),
              },
              {
                heading: "(a) Angular acceleration α — how fast the spin rate is climbing",
                body: (
                  <>
                    <Why>
                      The propeller starts at rest (ω₀ = 0) and ends at ω_f = 20.94 rad/s. It
                      reaches that speed after t = 20 s of steady spin-up. Since the angular
                      velocity changes <em>linearly</em> with time when α is constant, we use
                      the rotational analog of v = v₀ + at:
                    </Why>
                    <Eq>ω = ω₀ + αt   →   α = (ω − ω₀) / t</Eq>
                    <Why>
                      Plugging in our two endpoints — final ω = 20.94, initial ω₀ = 0, elapsed
                      time t = 20 s:
                    </Why>
                    <Eq>α = (20.94 − 0) / 20 = 1.047 rad/s²</Eq>
                    <Why>
                      Physically, this means the propeller gains roughly 1.05 rad/s of spin
                      every second of operation. After 1 s it's at 1.05 rad/s; after 10 s it's
                      at 10.5 rad/s; after 20 s it's at 20.94 rad/s — exactly what the problem
                      stated.
                    </Why>
                  </>
                ),
                result: { label: "α", value: "1.047 rad/s² (≈ π/3)", color: "cyan" },
              },
              {
                heading: "(b) How many full revolutions during the 20 s spin-up",
                body: (
                  <>
                    <Why>
                      The question asks for <em>turns</em>, but our kinematics formulas only
                      give us θ in <strong>radians</strong>. Strategy: first compute the total
                      angle swept (θ), then divide by 2π to convert radians-of-angle into
                      number-of-revolutions.
                    </Why>
                    <Why>
                      For total angle, we use the rotational analog of x = x₀ + v₀t + ½at². The
                      ω₀t term drops out because the propeller starts from rest:
                    </Why>
                    <Eq>θ = ω₀t + ½αt²   →   θ = 0 + ½ · (1.047) · (20)²</Eq>
                    <Eq>θ = 0.5 · 1.047 · 400 = 209.4 rad</Eq>
                    <Why>
                      That's 209.4 radians of total angle. Each full revolution is 2π ≈ 6.283
                      rad, so:
                    </Why>
                    <Eq># turns = θ / (2π) = 209.4 / 6.283 ≈ 33.3 revolutions</Eq>
                    <Why>
                      Sanity check: average angular velocity during spin-up is (0 + 20.94)/2 =
                      10.47 rad/s. Over 20 s that's 209.4 rad — same answer. ✓
                    </Why>
                  </>
                ),
                result: { label: "# turns", value: "33.3 turns", color: "cyan" },
              },
              {
                heading: "(c) Spin rate at which the blade tip breaks the sound barrier",
                body: (
                  <>
                    <Why>
                      Here we need the <strong>radius bridge</strong>: a point at radius r on a
                      rotating body has tangential (linear) speed v_t = rω. The tip of a blade
                      sits at r = L = 3 m from the rotation axis (the hub). We want to know the
                      angular velocity ω at which that linear tip-speed equals 345 m/s, the
                      speed of sound in air.
                    </Why>
                    <Eq>v_t = rω   →   ω = v_t / r</Eq>
                    <Why>
                      Solve for ω with v_t = 345 m/s and r = 3 m:
                    </Why>
                    <Eq>ω_sonic = 345 / 3 = 115 rad/s</Eq>
                    <Why>
                      So the blade tip hits Mach 1 once the propeller is spinning at 115 rad/s
                      (≈ 1098 rpm). Notice that ω is the same everywhere on the rigid blade —
                      but v_t depends on r. The hub barely moves while the tip is supersonic.
                    </Why>
                  </>
                ),
                result: { label: "ω_sonic", value: "115 rad/s", color: "cyan" },
              },
              {
                heading: "(d) When does that happen, in seconds from start?",
                body: (
                  <>
                    <Why>
                      We just computed the threshold ω_sonic = 115 rad/s. We already know α =
                      1.047 rad/s² (constant) and ω₀ = 0. Reuse the same formula from part (a),
                      but now solve for t instead of α:
                    </Why>
                    <Eq>ω = ω₀ + αt   →   t = (ω − ω₀) / α</Eq>
                    <Eq>t_sonic = (115 − 0) / 1.047 ≈ 109.8 s</Eq>
                    <Why>
                      So if you held α constant, the tip would go supersonic about 90 s
                      <em> after</em> the propeller reaches its rated 200 rpm. In real engines,
                      governors prevent this — but this is exactly why high-RPM rotors must be
                      short.
                    </Why>
                  </>
                ),
                result: { label: "t_sonic", value: "≈ 109.8 s", color: "cyan" },
              },
              {
                heading: "(e) Moment of inertia I — rotational analog of mass",
                body: (
                  <>
                    <Why>
                      Newton's 2nd law for rotation says τ = Iα. Before we can compute the
                      torque needed to spin this thing up (part f), we need I — the body's
                      resistance to angular acceleration. I depends on both mass <em>and</em>
                      how that mass is distributed relative to the rotation axis.
                    </Why>
                    <Why>
                      Each blade is a uniform rod of mass M = 5 kg and length L = 3 m, rotating
                      about <strong>one end</strong> (the hub). The standard table value for a
                      rod about its end is I_rod = ⅓ M L². (If it spun about its <em>center</em>
                      it would be ¹/₁₂ M L² — make sure you use the correct one!)
                    </Why>
                    <Eq>I_one blade = ⅓ · M · L² = ⅓ · 5 · 3² = ⅓ · 5 · 9 = 15 kg·m²</Eq>
                    <Why>
                      The propeller has 4 identical blades, all rotating about the same axis.
                      Moments of inertia from masses sharing one axis simply add:
                    </Why>
                    <Eq>I_total = 4 × I_one blade = 4 × 15 = 60 kg·m²</Eq>
                  </>
                ),
                result: { label: "I", value: "60 kg·m²", color: "cyan" },
              },
              {
                heading: "(f) Required torque — what the engine must supply",
                body: (
                  <>
                    <Why>
                      Now that we know I (the rotational mass) and α (the rotational
                      acceleration), Newton's 2nd law for rotation gives us the net torque
                      required to produce that acceleration. This is the rotational
                      counterpart of F = ma:
                    </Why>
                    <Eq>τ = I · α</Eq>
                    <Eq>τ = 60 kg·m² × 1.047 rad/s² ≈ 62.83 N·m</Eq>
                    <Why>
                      So the motor must apply roughly 63 N·m of net torque (ignoring drag) to
                      spin this propeller from rest to 200 rpm in 20 seconds. In a real engine
                      you'd need <em>more</em> than this to also overcome air drag on the
                      blades.
                    </Why>
                  </>
                ),
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
                  <div className="space-y-2">
                    <p>
                      <strong>What we know:</strong> the stone starts at 100 rpm and slows to
                      a complete stop. "Stops" means the final angular velocity ω_f = 0. The
                      time interval is given as 2 minutes, so we'll convert that to 120 s for
                      our SI units.
                    </p>
                    <p>
                      <strong>Convert rpm → rad/s</strong> (always do this first; the formulas
                      assume radians):
                    </p>
                    <Eq>ω₀ = 100 rpm × (2π / 60) = 10.47 rad/s</Eq>
                    <p>
                      <strong>Pick the right formula.</strong> We have ω₀, ω_f, and t — and we
                      want α. The kinematic equation that links exactly those four quantities
                      is the rotational version of v = v₀ + at:
                    </p>
                    <Eq>ω_f = ω₀ + αt   →   α = (ω_f − ω₀) / t</Eq>
                    <Eq>α = (0 − 10.47) / 120 = −0.0873 rad/s²</Eq>
                    <p>
                      The negative sign is important: it means α points <em>opposite</em> to
                      ω, which is what "deceleration" looks like in vector form. The grindstone
                      is shedding 0.087 rad/s of spin every second.
                    </p>
                  </div>
                ),
                answer: { value: "α ≈ −0.0873", unit: "rad/s² (deceleration)" },
              },
              {
                label: "(b)",
                question: "How many full revolutions before it comes to rest",
                solutionSteps: (
                  <div className="space-y-2">
                    <p>
                      <strong>Strategy:</strong> compute the total angle swept in radians,
                      then divide by 2π to convert to revolutions.
                    </p>
                    <p>
                      Because α is constant, the average angular velocity during the slow-down
                      is just the arithmetic mean of the start and end rates. That gives us a
                      compact formula for total angle that doesn't need α:
                    </p>
                    <Eq>θ = ½ (ω₀ + ω_f) · t</Eq>
                    <Eq>θ = ½ · (10.47 + 0) · 120 = 628.3 rad</Eq>
                    <p>
                      Now convert from radians to revolutions. Each full turn is 2π rad:
                    </p>
                    <Eq># turns = 628.3 / (2π) = 628.3 / 6.283 ≈ 100 turns</Eq>
                    <p>
                      Sanity check: at the average rate of (10.47 + 0)/2 = 5.24 rad/s for 120
                      s we sweep 628 rad — same answer. ✓
                    </p>
                  </div>
                ),
                answer: { value: "100 turns" },
              },
              {
                label: "(c)",
                question: "Moment of inertia I of the grindstone",
                solutionSteps: (
                  <div className="space-y-2">
                    <p>
                      <strong>What is I?</strong> It's the rotational analog of mass — how
                      hard it is to angularly accelerate the body. The value depends on both
                      the total mass and how that mass is distributed relative to the axis.
                    </p>
                    <p>
                      A grindstone is a uniform solid disk rotating about its central axis.
                      For that geometry the standard table entry is:
                    </p>
                    <Eq>I_disk = ½ · M · R²</Eq>
                    <p>
                      Plug in M = 80 kg and R = 0.7 m:
                    </p>
                    <Eq>I = ½ · 80 · (0.7)² = ½ · 80 · 0.49 = 19.6 kg·m²</Eq>
                    <p>
                      (If the stone were a thin hoop instead of a solid disk, I would be M·R²
                      = 39.2 kg·m² — twice as much. Always identify the geometry before
                      pulling a formula.)
                    </p>
                  </div>
                ),
                answer: { value: "I = 19.6", unit: "kg·m²" },
              },
              {
                label: "(d)",
                question: "Coefficient of kinetic friction μ_k between axe and stone",
                solutionSteps: (
                  <div className="space-y-2">
                    <p>
                      <strong>Physical picture:</strong> the only thing slowing the grindstone
                      is the kinetic friction force where the axe presses against its rim. So
                      friction is producing the decelerating torque we already know about
                      (from parts a and c).
                    </p>
                    <p>
                      <strong>Step 1 — torque from rotational Newton's 2nd law.</strong>
                      The net torque on the stone is τ_net = Iα. Since friction is the only
                      torque acting, τ_friction = |Iα| (we take absolute value because we
                      just want the magnitude here):
                    </p>
                    <Eq>τ_friction = |I · α| = 19.6 × 0.0873 = 1.711 N·m</Eq>
                    <p>
                      <strong>Step 2 — convert that torque to a friction force at the rim.</strong>
                      The axe presses at the outer edge of the disk, so the friction force f
                      acts at radius R = 0.7 m, perpendicular to the radius (it's tangent to
                      the rim). The torque produced by such a force is τ = f · R:
                    </p>
                    <Eq>f = τ_friction / R = 1.711 / 0.7 = 2.444 N</Eq>
                    <p>
                      <strong>Step 3 — link friction force to the normal force.</strong>
                      Kinetic friction follows the standard rule f_k = μ_k · N. We're told the
                      axe presses with normal force N = 20 N. Solve for μ_k:
                    </p>
                    <Eq>μ_k = f / N = 2.444 / 20 ≈ 0.122</Eq>
                    <p>
                      A coefficient of ~0.12 is plausible for steel against a sharpening
                      stone. If we'd gotten μ_k &gt; 1, that would be a red flag and we should
                      recheck arithmetic.
                    </p>
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
