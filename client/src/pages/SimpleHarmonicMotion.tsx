import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { WorkedExample, Eq, Why } from "@/components/midterm/WorkedExample";
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
                {
                  symbol: "A",
                  meaning:
                    "how far the object swings from equilibrium at the extreme — the amplitude",
                  units: "m",
                },
                {
                  symbol: "ω",
                  meaning:
                    "how fast the oscillation cycles — bigger ω = faster wiggle, shorter period",
                  units: "rad/s",
                },
                {
                  symbol: "φ",
                  meaning:
                    "phase offset — sets where in the cycle we are at t = 0 (φ = 0 starts at maximum stretch; φ = π/2 starts at equilibrium moving fast)",
                  units: "rad",
                },
              ]}
              whenToUse="These three describe everything an SHM system does over time. v(t) and a(t) are just time-derivatives of x(t). The line a(t) = −ω²x is the SIGNATURE of SHM: acceleration always points back toward equilibrium with strength proportional to displacement. Any system with a linear restoring force will oscillate with this shape."
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
                {
                  symbol: "k",
                  meaning:
                    "spring stiffness — how many Newtons of pull you get per meter of stretch. Stiffer spring = bigger k = faster oscillation",
                  units: "N/m",
                },
                {
                  symbol: "m",
                  meaning:
                    "the mass attached to the spring — heavier mass = more inertia = slower oscillation",
                  units: "kg",
                },
              ]}
              whenToUse="Apply to any system whose restoring force is linear in displacement (F = −kx). Frequency depends only on the ratio k/m: stiffer makes ω go up (snappier), heavier makes ω go down (sluggish). Notice gravity doesn't appear — a horizontal mass-on-spring and a vertical one have the SAME period, just oscillating around different equilibrium points."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Maximum values (extremes of motion)"
              formula={
                <div className="space-y-1 text-base">
                  <div>x_max = A   (at the turning points)</div>
                  <div>v_max = Aω   (at equilibrium, x = 0)</div>
                  <div>a_max = Aω²   (at the turning points, where v = 0)</div>
                </div>
              }
              variables={[
                {
                  symbol: "A",
                  meaning: "amplitude — the maximum displacement from equilibrium",
                  units: "m",
                },
                {
                  symbol: "ω",
                  meaning: "angular frequency — how fast the oscillation cycles, ω = 2πf",
                  units: "rad/s",
                },
              ]}
              whenToUse="When a problem asks for 'maximum speed' or 'maximum acceleration', these come straight from A and ω with no calculus. The intuition: v_max happens at the CENTER, where you've converted all spring-PE to KE. a_max happens at the ENDS, where the spring is most stretched and pulling hardest. So the two maxima occur at OPPOSITE points of the cycle — easy to flip if you don't picture it."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="x ↔ v at any instant (energy-derived)"
              formula={
                <div className="space-y-1 text-base">
                  <div>v² = ω²(A² − x²)</div>
                  <div>x² = A² − v²/ω²</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 pt-1">
                    Equivalent to energy conservation: ½kA² = ½kx² + ½mv²
                  </div>
                </div>
              }
              variables={[
                {
                  symbol: "x",
                  meaning:
                    "current displacement from equilibrium (signed — sign tells direction)",
                  units: "m",
                },
                {
                  symbol: "v",
                  meaning:
                    "instantaneous speed at that x (always reported as positive — direction is set by where in the cycle you are)",
                  units: "m/s",
                },
              ]}
              whenToUse="Skip computing t entirely. Given x, find v (top form): the object is fastest at the center (x=0 → v = ωA = v_max) and frozen at the ends (x = ±A → v = 0). Given v, find x (bottom form). Both come from rearranging energy conservation: ½kA² (total) = ½kx² (in spring) + ½mv² (kinetic)."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Energy in SHM"
              formula={
                <div className="space-y-1 text-base">
                  <div>E_total = ½kA² = ½mω²A² = ½m·v_max²</div>
                  <div>KE(x) = ½k(A² − x²) = ½mv²</div>
                  <div>PE(x) = ½kx²</div>
                </div>
              }
              variables={[
                {
                  symbol: "k",
                  meaning:
                    "effective spring constant. For non-spring systems use k = mω² to convert",
                  units: "N/m",
                },
                {
                  symbol: "x",
                  meaning: "current displacement from equilibrium",
                  units: "m",
                },
              ]}
              whenToUse="Energy is conserved at value ½kA². At the turning points (x = ±A), all of it is in the spring (PE max, no motion). At the center (x = 0), all of it is kinetic (no stretch, max speed). Anywhere in between, it splits proportionally to x². The third equality E = ½m·v_max² is the same total written in terms of max speed — useful when you know KE_max but not A."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Simple pendulum (small angle)"
              formula={
                <div className="space-y-1 text-base">
                  <div>T = 2π·√(L/g)</div>
                  <div>ω = √(g/L)</div>
                </div>
              }
              variables={[
                {
                  symbol: "L",
                  meaning: "length from pivot to the center of mass of the bob",
                  units: "m",
                },
                {
                  symbol: "g",
                  meaning: "local gravitational acceleration",
                  units: "m/s²",
                },
              ]}
              whenToUse="Point mass on a massless string, small swing angles (≲15°). Striking feature: period depends only on L and g — heavier bob? same T. Bigger swing? same T (within small-angle approximation). Mass cancels because more mass means more inertia AND more weight in the same proportion. Gravity matters because it's the restoring force; a pendulum on the moon swings ~2.5× slower."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Physical pendulum"
              formula={<div>T = 2π·√(I / (m·g·d))</div>}
              variables={[
                {
                  symbol: "I",
                  meaning:
                    "moment of inertia about the pivot — measures how mass is distributed relative to the swing axis. See the rotational-energy page's 'How to pick I' section to reason it out for any shape",
                  units: "kg·m²",
                },
                {
                  symbol: "m",
                  meaning: "total mass of the swinging body",
                  units: "kg",
                },
                {
                  symbol: "d",
                  meaning:
                    "distance from the pivot to the body's center of mass — the lever arm gravity pulls on",
                  units: "m",
                },
              ]}
              whenToUse="When the swinging object isn't a point mass on a string — a rod, sign, or arbitrary rigid body. Gravity exerts torque mg·d about the pivot; the body's resistance to rotational acceleration is I (NOT just mL²). For a uniform rod pivoted at one end: I = ML²/3, d = L/2, giving T = 2π·√(2L/3g) — about 18% slower than a point mass at the same L, because mass higher up the rod swings on a shorter effective lever."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Equilibrium stretch (vertical spring)"
              formula={<div>x_eq = mg/k</div>}
              variables={[
                {
                  symbol: "x_eq",
                  meaning:
                    "how far the spring stretches from its natural length when the mass hangs at rest",
                  units: "m",
                },
              ]}
              whenToUse="Hang a mass on a vertical spring: gravity pulls until spring force balances weight (kx = mg → x = mg/k). The mass then oscillates AROUND this new equilibrium, not around the spring's natural length. The good news: period and frequency are unchanged from the horizontal case — gravity just shifts the center, it doesn't add to the restoring force."
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
                heading: "Decode the equation: pattern-match to x(t) = A cos(ωt + φ)",
                body: (
                  <>
                    <Why>
                      Every SHM position function takes the form x(t) = A·cos(ωt + φ),
                      where A is the amplitude (max displacement from equilibrium), ω is the
                      angular frequency, and φ is a phase constant set by initial conditions.
                      Comparing this to the given equation x(t) = 0.12·cos(12t):
                    </Why>
                    <Eq>A = 0.12 m   (the coefficient in front of cos)</Eq>
                    <Eq>ω = 12 rad/s   (the coefficient of t inside the cos)</Eq>
                    <Eq>φ = 0   (no constant added inside the cos)</Eq>
                    <Why>
                      Now we can derive everything else from these two numbers.
                    </Why>
                  </>
                ),
              },
              {
                heading: "(a) Period — how long does one full oscillation take?",
                body: (
                  <>
                    <Why>
                      Angular frequency ω is "radians swept per second" by the equivalent
                      uniform circular motion that projects to give SHM. One full cycle
                      corresponds to 2π radians. So:
                    </Why>
                    <Eq>T = 2π / ω = 2π / 12 = π/6 ≈ 0.524 s</Eq>
                    <Why>
                      Read it back: about half a second per oscillation, or roughly 1.91 Hz
                      (= 1/T = 12/(2π)).
                    </Why>
                  </>
                ),
                result: { label: "T", value: "≈ 0.524 s", color: "amber" },
              },
              {
                heading: "(b) Maximum speed",
                body: (
                  <>
                    <Why>
                      Take the derivative of x(t): v(t) = dx/dt = −A·ω·sin(ωt). The
                      magnitude is greatest when sin(ωt) = ±1, which gives the maximum
                      speed |v_max| = A·ω. Physically, max speed occurs as the object
                      passes through the equilibrium point x = 0.
                    </Why>
                    <Eq>v_max = A · ω = 0.12 · 12 = 1.44 m/s</Eq>
                  </>
                ),
                result: { label: "v_max", value: "= 1.44 m/s", color: "amber" },
              },
              {
                heading: "(c) Speed at a specific position x = 0.10 m",
                body: (
                  <>
                    <Why>
                      <strong>Why not just use v(t)?</strong> We don't know t at the moment
                      x = 0.10. We'd have to first solve cos(ωt) = 0.10/0.12 for t, then
                      plug into v(t). That's two steps with trig.
                    </Why>
                    <Why>
                      <strong>Faster: use the energy form.</strong> Conservation of energy
                      in SHM gives ½kA² = ½mv² + ½kx². Dividing by ½m and using k/m = ω²:
                    </Why>
                    <Eq>v² = ω² · (A² − x²)</Eq>
                    <Why>
                      Plug in ω = 12, A = 0.12, x = 0.10:
                    </Why>
                    <Eq>v² = (12)² · ( (0.12)² − (0.10)² ) = 144 · (0.0144 − 0.0100)</Eq>
                    <Eq>v² = 144 · 0.0044 = 0.6336</Eq>
                    <Eq>|v| = √0.6336 ≈ 0.796 m/s</Eq>
                    <Why>
                      Sign ambiguity: the object is at x = 0.10 going either left or right,
                      depending on which moment in the cycle. The energy method gives only
                      the magnitude.
                    </Why>
                  </>
                ),
                result: { label: "|v|", value: "≈ 0.796 m/s", color: "amber" },
              },
              {
                heading: "(d) Spring constant of the system",
                body: (
                  <>
                    <Why>
                      For a mass-spring oscillator, ω = √(k/m), or equivalently ω² = k/m.
                      We're told m = 0.100 kg and we already know ω = 12. Solve:
                    </Why>
                    <Eq>k = m · ω² = 0.100 · (12)² = 0.100 · 144 = 14.4 N/m</Eq>
                    <Why>
                      That's a pretty soft spring — 14 N is about the weight of a 1.4 kg
                      object, and that pull would stretch this spring by 1 m. Sanity check
                      passes.
                    </Why>
                  </>
                ),
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
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Period and frequency are reciprocals: T = 1/f. Frequency f
                        (in Hz) is "cycles per second"; period T (in s) is "seconds per
                        cycle." A 2 Hz oscillation completes 2 cycles per second, so each
                        cycle takes:
                      </p>
                      <Eq>T = 1 / f = 1 / 2 = 0.5 s</Eq>
                    </div>
                  ),
                  answer: { value: "T = 0.5", unit: "s" },
                },
                {
                  label: "(b)",
                  question: "Angular frequency ω",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Angular frequency ω is the rate of phase advance in radians per
                        second of the equivalent uniform circular motion. One cycle = 2π
                        radians, and there are f cycles per second, so:
                      </p>
                      <Eq>ω = 2π · f = 2π · 2 = 4π ≈ 12.57 rad/s</Eq>
                      <p>
                        ω is what you plug into formulas like x = A·cos(ωt) or v_max = A·ω.
                        Forgetting the 2π factor here is the most common error in SHM
                        problems.
                      </p>
                    </div>
                  ),
                  answer: { value: "ω ≈ 12.57", unit: "rad/s" },
                },
                {
                  label: "(c)",
                  question: "v_max",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Maximum speed in SHM occurs when the mass passes through the
                        equilibrium point (x = 0) — all the energy is then kinetic. The
                        formula v_max = A·ω comes from differentiating x(t) and noting
                        that the sin term is bounded by ±1:
                      </p>
                      <Eq>v_max = A · ω = 0.12 m · 12.57 rad/s ≈ 1.508 m/s</Eq>
                    </div>
                  ),
                  answer: { value: "v_max ≈ 1.508", unit: "m/s" },
                },
                {
                  label: "(d)",
                  question: "a_max",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Maximum acceleration in SHM occurs at the extremes (x = ±A) where
                        the spring is most stretched/compressed and exerts the largest
                        restoring force. Differentiating v(t) and using |cos| ≤ 1 gives:
                      </p>
                      <Eq>a_max = A · ω² = 0.12 · (12.57)² = 0.12 · 157.91 ≈ 18.95 m/s²</Eq>
                      <p>
                        That's nearly twice gravity — the plant momentarily feels almost
                        twice its weight at the extremes.
                      </p>
                    </div>
                  ),
                  answer: { value: "a_max ≈ 18.95", unit: "m/s²" },
                },
                {
                  label: "(e)",
                  question: "v at x = 4 cm from equilibrium",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Use the energy-form shortcut to skip the trig. Conservation of
                        mechanical energy gives:
                      </p>
                      <Eq>v² = ω² · (A² − x²)</Eq>
                      <p>Plug in ω² = 157.91, A = 0.12 m, x = 0.04 m:</p>
                      <Eq>v² = 157.91 · ((0.12)² − (0.04)²) = 157.91 · (0.0144 − 0.0016)</Eq>
                      <Eq>v² = 157.91 · 0.0128 ≈ 2.021   →   v ≈ 1.422 m/s</Eq>
                      <p>
                        Notice 1.42 m/s is close to v_max = 1.51 m/s — at only 33% of
                        maximum displacement, the mass still has 94% of its peak speed.
                        Speed drops slowly near equilibrium and quickly near the turning
                        points.
                      </p>
                    </div>
                  ),
                  answer: { value: "v ≈ 1.422", unit: "m/s" },
                },
                {
                  label: "(f)",
                  question: "a when |v| = ½v_max",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>Strategy:</strong> use both the SHM relation a = −ω²·x
                        (every SHM has this) AND the energy form to relate v and x.
                      </p>
                      <p>
                        From the energy form solved for x: x² = A² − v²/ω². Then |a| =
                        ω²·|x| gives a² = ω⁴·x² = ω⁴·(A² − v²/ω²) = ω⁴A² − ω²·v². So:
                      </p>
                      <Eq>a² = ω²·(ω²A² − v²) = ω²·(v_max² − v²)</Eq>
                      <p>
                        With v = ½ v_max:
                      </p>
                      <Eq>a² = ω² · (v_max² − v_max²/4) = (3/4) · ω² · v_max² = (3/4)·(A·ω²)²</Eq>
                      <Eq>|a| = (√3 / 2) · A · ω² = (√3 / 2) · a_max</Eq>
                      <Eq>|a| = 0.866 · 18.95 ≈ 16.41 m/s²</Eq>
                      <p>
                        Sanity: when speed is half its peak, acceleration is still ~87% of
                        its peak. Acceleration falls more slowly than speed when moving
                        away from the extreme.
                      </p>
                    </div>
                  ),
                  answer: { value: "|a| ≈ 16.41", unit: "m/s²" },
                },
                {
                  label: "(g)",
                  question: "What amplitude gives a_max = g (so the plant 'feels weightless')",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        At the top of a vertical SHM cycle, the spring is at its most
                        compressed (or, for a hanging plant, the spring is at its least
                        stretched). If the downward acceleration there equals g, the plant
                        is in temporary free fall — the spring exerts zero force on it for
                        an instant.
                      </p>
                      <p>
                        Set a_max = g and solve for A:
                      </p>
                      <Eq>A · ω² = g   →   A = g / ω² = 9.8 / 157.91 ≈ 0.0621 m</Eq>
                      <p>
                        About 6.2 cm of amplitude is enough for this 2 Hz system to make
                        the plant feel weightless at the top of each cycle.
                      </p>
                    </div>
                  ),
                  answer: { value: "A ≈ 0.0621", unit: "m (≈ 6.2 cm)" },
                },
                {
                  label: "(h)",
                  question: "Equilibrium stretch of the spring (vertical hang)",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>Step 1: find the mass.</strong> We're given k = 8 N/m and
                        we computed ω = 12.57 rad/s. From ω² = k/m, the mass is:
                      </p>
                      <Eq>m = k / ω² = 8 / 157.91 ≈ 0.0507 kg</Eq>
                      <p>
                        <strong>Step 2: equilibrium stretch.</strong> When the plant hangs
                        at rest from the spring, the spring force k·x_eq must balance the
                        plant's weight m·g:
                      </p>
                      <Eq>k · x_eq = m · g   →   x_eq = m·g / k = 0.0507 · 9.8 / 8 ≈ 0.0621 m</Eq>
                      <p>
                        <strong>Notice the coincidence:</strong> x_eq ≈ 6.21 cm equals the
                        amplitude that makes a_max = g (part g). That's not random — it's
                        the same physics: the spring force at amplitude A equals the plant's
                        weight (so net force = 0 at the top means net force = −2mg at the
                        bottom).
                      </p>
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
                    <div className="space-y-2">
                      <p>
                        <strong>Why "physical" pendulum and not "simple"?</strong> A simple
                        pendulum is a point mass on a massless string, with T = 2π·√(L/g).
                        A <em>physical</em> pendulum is an extended rigid body — its mass
                        is distributed along its length, so we need its actual moment of
                        inertia. The formula generalizes to:
                      </p>
                      <Eq>T = 2π · √( I / (m·g·d) )</Eq>
                      <p>
                        where I is the moment of inertia about the pivot and d is the
                        distance from pivot to the body's center of mass.
                      </p>
                      <p>
                        <strong>For a uniform rod rotating about its end:</strong> I = ⅓
                        m L² (from the table; do NOT use ¹/₁₂ m L², which is for rotation
                        about the middle), and the center of mass sits at the rod's
                        midpoint, so d = L/2.
                      </p>
                      <Eq>T = 2π · √( (⅓ m L²) / (m · g · L/2) )</Eq>
                      <p>m and one factor of L cancel:</p>
                      <Eq>T = 2π · √( (⅓ L) / (g/2) ) = 2π · √( 2L / (3g) )</Eq>
                      <p>
                        Notice m drops out. A heavier rod swings at the same period as a
                        lighter one of the same length. With g = 9.8:
                      </p>
                      <Eq>T = 2π · √( 2L / 29.4 )   (L in meters, T in seconds)</Eq>
                    </div>
                  ),
                  answer: { value: "T = 2π·√(2L/(3·9.8))", unit: "s (in terms of L)" },
                },
                {
                  label: "(b)",
                  question: "Maximum angular acceleration when θ_max = 0.01 rad",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>Recognize the SHM analog.</strong> For small angles a
                        physical pendulum is an angular SHM oscillator. The angular
                        equation of motion is α = −ω²·θ, where ω here is the angular
                        frequency of the swing (NOT the rotational angular velocity), and
                        equals √(m·g·d / I).
                      </p>
                      <Eq>ω² = m·g·d / I = m·g·(L/2) / (⅓ m L²) = (3 g) / (2 L)</Eq>
                      <p>
                        <strong>Maximum α happens at the extremes</strong> (θ = θ_max),
                        where the restoring torque is largest:
                      </p>
                      <Eq>|α_max| = ω² · θ_max = (3g/(2L)) · 0.01 = (3·9.8 / (2L)) · 0.01</Eq>
                      <Eq>|α_max| = 14.7/L · 0.01 = 0.147 / L   (rad/s², L in m)</Eq>
                    </div>
                  ),
                  answer: { value: "α_max = 0.147/L", unit: "rad/s² (in terms of L)" },
                },
                {
                  label: "(c)",
                  question: "Angular velocity ω_v when θ = 0.005 rad",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>Same energy-form trick as the spring problem</strong>, but
                        in angular variables. For angular SHM:
                      </p>
                      <Eq>ω_v² = ω² · (θ_max² − θ²)</Eq>
                      <p>
                        where ω_v is the angular speed at angle θ, and ω = √(3g/(2L)) is
                        the swing frequency. Plug in θ_max = 0.01, θ = 0.005:
                      </p>
                      <Eq>ω_v² = (3·9.8 / (2L)) · ((0.01)² − (0.005)²) = (14.7 / L) · (0.0001 − 0.000025)</Eq>
                      <Eq>ω_v² = (14.7 / L) · 0.000075 = 0.001103 / L</Eq>
                      <Eq>ω_v ≈ √(0.001103 / L) ≈ 0.0332 / √L   (rad/s, L in m)</Eq>
                      <p>
                        Note: this ω_v is the actual rotation rate of the swinging shingle
                        — meters/radians per second of <em>swing</em>, not the swing's SHM
                        frequency.
                      </p>
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
