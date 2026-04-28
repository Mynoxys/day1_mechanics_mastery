import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { WorkedExample } from "@/components/midterm/WorkedExample";
import { PracticeProblem } from "@/components/midterm/PracticeProblem";
import { FormulaBlock } from "@/components/midterm/FormulaBlock";

const ACCENT = "#0ea5e9"; // sky

export default function Fluids() {
  const [pressureAtm, setPressureAtm] = useState(8); // top tank pressure in atm
  const [waterHeight, setWaterHeight] = useState(0.08); // height inside tank
  const [holeRadius, setHoleRadius] = useState(0.001); // m

  const rho = 1000;
  const g = 9.8;
  const Patm = 100000;
  const P1 = pressureAtm * Patm; // absolute pressure inside tank
  const P2 = Patm;
  // Bernoulli from top (v ~ 0) to exit
  const inside = (P1 - P2) / rho + g * waterHeight;
  const v = Math.sqrt(Math.max(2 * inside, 0));
  const Q = Math.PI * holeRadius * holeRadius * v;

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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Day 7 · Fluids</h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container py-12">
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Pressure, Buoyancy, and Bernoulli
          </h2>
          <div className="prose dark:prose-invert max-w-none space-y-4">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Fluid problems live in three buckets:
            </p>
            <ul className="text-lg text-gray-600 dark:text-gray-300 list-disc list-inside ml-4 space-y-2">
              <li>
                <strong>Hydrostatics</strong> (no flow): pressure varies with depth, P = P₀ + ρgh.
                Pascal's principle: in a connected fluid, pressure changes propagate equally
                everywhere.
              </li>
              <li>
                <strong>Buoyancy</strong> (Archimedes): an object displaces a volume V of fluid;
                the upward force on it is F_buoy = ρ_fluid·V·g. The boat-floating condition is
                buoyancy = weight.
              </li>
              <li>
                <strong>Flow</strong> (Bernoulli + continuity): Bernoulli is energy conservation
                per unit volume of fluid. Continuity is mass conservation: A₁v₁ = A₂v₂.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">
              The big intuition: Bernoulli is energy per volume
            </h3>
            <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-6 my-4">
              <p className="text-2xl font-mono text-center" style={{ color: ACCENT }}>
                P + ½ρv² + ρgh = constant
              </p>
              <p className="text-sm text-center mt-2 text-gray-500 dark:text-gray-400">
                ↑ pressure energy &nbsp; ↑ kinetic energy/vol &nbsp; ↑ gravitational PE/vol
              </p>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Each term has units of pressure (Pa = J/m³). Read it as: along a streamline, the
              total energy per unit volume of fluid is conserved. Where v is fast, P is small;
              where you go up in height, both P and the available "speed-energy" must adjust.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <strong>Torricelli's theorem</strong> is the special case where both surfaces are at
              atmospheric pressure and the reservoir is so big that v_top ≈ 0. Then:{" "}
              <span className="font-mono">v_exit = √(2gh)</span>. That's identical to free-fall
              from height h. The intuition: the fluid converts its potential energy into kinetic
              energy as if it were a falling block.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">
              Pressurized reservoir generalization
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When the top of the tank isn't at atmospheric (super soaker, juice box), you keep the
              full Bernoulli equation:
            </p>
            <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-6 my-4">
              <p className="text-xl font-mono text-center" style={{ color: ACCENT }}>
                v_exit = √(2·(P_top − P_exit)/ρ + 2gh)
              </p>
            </div>
          </div>
        </section>

        {/* Simulator */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Pressurized-Tank Flow Simulator
          </h3>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="interactive-panel">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Tank with adjustable pressure
              </h4>

              <svg
                width={500}
                height={350}
                className="border border-gray-200 dark:border-slate-600 rounded-lg mb-6 bg-gray-50 dark:bg-slate-700"
              >
                {/* Tank */}
                <rect
                  x="100"
                  y="40"
                  width="180"
                  height="240"
                  fill="none"
                  stroke="#1f2937"
                  strokeWidth="3"
                />
                {/* Air pocket */}
                <rect
                  x="103"
                  y="43"
                  width="174"
                  height={Math.max(50 - waterHeight * 200, 30)}
                  fill="#fef3c7"
                />
                <text x="190" y={45 + Math.max(25 - waterHeight * 100, 15)} textAnchor="middle" fontSize="11" fill="#92400e" fontWeight="bold">
                  P = {pressureAtm.toFixed(1)} atm
                </text>
                {/* Water */}
                <rect
                  x="103"
                  y={Math.max(95 - waterHeight * 200, 75)}
                  width="174"
                  height={240 - Math.max(50 - waterHeight * 200, 30) - 3}
                  fill={ACCENT}
                  fillOpacity="0.4"
                />
                {/* Water surface */}
                <line
                  x1="103"
                  y1={Math.max(95 - waterHeight * 200, 75)}
                  x2="277"
                  y2={Math.max(95 - waterHeight * 200, 75)}
                  stroke="#0369a1"
                  strokeWidth="2"
                />

                {/* Hole and exit jet */}
                <rect x="280" y="245" width="6" height="14" fill="#1f2937" />
                <circle cx="284" cy="252" r="3" fill="white" />
                {/* Exit stream */}
                <path
                  d={`M 287 252 Q ${287 + v * 3} 252 ${287 + v * 3} 280 L ${287 + v * 3} 320`}
                  fill="none"
                  stroke={ACCENT}
                  strokeWidth="3"
                />
                <text x={290 + v * 1.5} y="245" fontSize="12" fill={ACCENT} fontWeight="bold">
                  v = {v.toFixed(1)} m/s
                </text>

                {/* Height label */}
                <line
                  x1="85"
                  y1={Math.max(95 - waterHeight * 200, 75)}
                  x2="85"
                  y2="252"
                  stroke="#7c3aed"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
                <text x="50" y="180" fontSize="11" fill="#7c3aed" fontWeight="bold" textAnchor="middle">
                  h = {waterHeight.toFixed(2)} m
                </text>

                {/* Hole label */}
                <text x="290" y="265" fontSize="10" fill="#374151">
                  hole r = {(holeRadius * 1000).toFixed(1)} mm
                </text>
                <text x="290" y="280" fontSize="11" fill="#1f2937" fontWeight="bold">
                  Q = {(Q * 1e6).toFixed(1)} mL/s
                </text>
              </svg>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Tank pressure (absolute): {pressureAtm.toFixed(1)} atm
                  </label>
                  <Slider
                    value={[pressureAtm]}
                    onValueChange={(v) => setPressureAtm(v[0])}
                    min={1}
                    max={10}
                    step={0.1}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Water height above hole: {waterHeight.toFixed(2)} m
                  </label>
                  <Slider
                    value={[waterHeight]}
                    onValueChange={(v) => setWaterHeight(v[0])}
                    min={0.01}
                    max={2}
                    step={0.01}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Hole radius: {(holeRadius * 1000).toFixed(2)} mm
                  </label>
                  <Slider
                    value={[holeRadius]}
                    onValueChange={(v) => setHoleRadius(v[0])}
                    min={0.0005}
                    max={0.01}
                    step={0.0005}
                  />
                </div>
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="interactive-panel">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Calculation Trace
                </h4>
                <div className="space-y-3 font-mono text-sm">
                  <div className="bg-amber-50 dark:bg-amber-900 p-4 rounded border-l-4 border-l-amber-600">
                    <p>
                      <strong>Bernoulli, top (v≈0) to exit (atm)</strong>
                    </p>
                    <p>P_top + ρgh = P_atm + ½ρv²</p>
                    <p>v² = 2·(P_top − P_atm)/ρ + 2gh</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded border-l-4 border-l-blue-600">
                    <p>
                      v² = 2·({P1.toFixed(0)} − 100000)/1000 + 2·9.8·{waterHeight.toFixed(2)}
                    </p>
                    <p>
                      v² = {(((P1 - Patm) * 2) / rho).toFixed(2)} + {(2 * g * waterHeight).toFixed(2)} ={" "}
                      {(v * v).toFixed(2)}
                    </p>
                    <p className="font-bold text-blue-600 dark:text-blue-400">
                      v = {v.toFixed(2)} m/s
                    </p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded border-l-4 border-l-purple-600">
                    <p>
                      <strong>Volume flow rate Q = A·v = πr²·v</strong>
                    </p>
                    <p>
                      = π·({(holeRadius * 1000).toFixed(2)} mm)²·{v.toFixed(2)} m/s
                    </p>
                    <p className="font-bold text-purple-600 dark:text-purple-400">
                      Q = {Q.toExponential(3)} m³/s
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="interactive-panel" style={{ borderLeftWidth: 4, borderLeftColor: ACCENT }}>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Try this:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li>• Set pressure to 1 atm: only gravity drives flow → Torricelli's v = √(2gh).</li>
                  <li>• Set h = 0 (or very small) and increase pressure: now ALL the energy comes from pressure.</li>
                  <li>• Notice: v doesn't depend on hole size, but Q does (linearly in A).</li>
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
              name="Hydrostatic pressure"
              formula={
                <div className="space-y-1 text-base">
                  <div>P = P₀ + ρgh</div>
                  <div>P_abs = P_gauge + P_atm</div>
                </div>
              }
              variables={[
                { symbol: "ρ", meaning: "fluid density (water = 1000)", units: "kg/m³" },
                { symbol: "h", meaning: "depth below the reference surface", units: "m" },
                { symbol: "P_atm", meaning: "atmospheric pressure ≈ 101,325 Pa (often round to 100,000)" },
              ]}
              whenToUse="Pressure at depth in a static fluid. Always check whether the problem gives gauge or absolute pressure."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Archimedes' buoyancy"
              formula={<div>F_buoy = ρ_fluid · V_displaced · g</div>}
              variables={[
                { symbol: "V_displaced", meaning: "volume of fluid pushed out of the way by the object", units: "m³" },
              ]}
              whenToUse="Floating boats, submerged objects, hot-air balloons. Equilibrium: F_buoy = m·g."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Continuity (incompressible)"
              formula={<div>A₁ v₁ = A₂ v₂ = Q</div>}
              variables={[
                { symbol: "A", meaning: "cross-sectional area", units: "m²" },
                { symbol: "v", meaning: "fluid speed at that section", units: "m/s" },
                { symbol: "Q", meaning: "volume flow rate", units: "m³/s" },
              ]}
              whenToUse="Same fluid in a pipe of varying cross-section: where it narrows, it speeds up."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Bernoulli's equation"
              formula={<div>P + ½ρv² + ρgh = constant (along a streamline)</div>}
              variables={[
                { symbol: "P", meaning: "absolute pressure at that point", units: "Pa" },
                { symbol: "½ρv²", meaning: "kinetic energy per unit volume", units: "Pa" },
                { symbol: "ρgh", meaning: "gravitational PE per unit volume", units: "Pa" },
              ]}
              whenToUse="Steady, incompressible, inviscid flow. Connect any two points along a streamline."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Torricelli's theorem"
              formula={<div>v_exit = √(2gh)</div>}
              variables={[
                { symbol: "h", meaning: "depth of the hole below the surface", units: "m" },
              ]}
              whenToUse="Open tank (atm pressure on top), small hole, large reservoir (so v_top ≈ 0). Same as a free-falling object."
            />
          </div>
        </section>

        {/* Worked Example */}
        <section className="mb-16">
          <WorkedExample
            accentColor={ACCENT}
            title="The Super Soaker"
            problemStatement={
              <p>
                A super-soaker reservoir is pumped to <strong>P = 8 atm absolute</strong>. The
                water column inside has height <strong>0.08 m</strong> above the exit hole. The
                exit hole has radius <strong>r = 1 mm</strong>. The gun is fired horizontally,
                held <strong>1.2 m</strong> above the ground. Find: (a) exit velocity, (b) volume
                flow rate, (c) where the water lands.
              </p>
            }
            steps={[
              {
                heading: "Set up Bernoulli from inside (top, v≈0) to exit (atm)",
                body: (
                  <p>
                    P_top + ½ρv_top² + ρgh_top = P_exit + ½ρv_exit² + ρgh_exit. With v_top ≈ 0,
                    take h_exit = 0:
                  </p>
                ),
              },
              {
                heading: "Solve for v_exit",
                body: (
                  <div className="space-y-1">
                    <p>v² = 2·(P_top − P_atm)/ρ + 2gh</p>
                    <p>= 2·(800,000 − 100,000)/1000 + 2·9.8·0.08</p>
                    <p>= 1400 + 1.57 = 1401.57</p>
                  </div>
                ),
                result: { label: "(a) v_exit", value: "≈ 37.4 m/s", color: "cyan" },
              },
              {
                heading: "(b) Volume flow rate Q = πr²·v",
                body: <p>= π·(0.001)²·37.4 = 1.18×10⁻⁴</p>,
                result: { label: "Q", value: "≈ 1.18×10⁻⁴ m³/s ≈ 0.118 L/s", color: "cyan" },
              },
              {
                heading: "(c) Range — projectile motion from 1.2 m height",
                body: (
                  <div className="space-y-1">
                    <p>Time to fall: t = √(2H/g) = √(2·1.2/9.8) = √0.2449</p>
                    <p>t ≈ 0.495 s</p>
                    <p>Horizontal range: d = v·t = 37.4·0.495</p>
                  </div>
                ),
                result: { label: "Range", value: "≈ 18.5 m", color: "cyan" },
              },
            ]}
            keyInsight={
              <>
                The pressure term (1400) totally dominates the gravity term (1.57). For
                pressurized tanks, you can almost always drop the ρgh contribution as a quick
                sanity check — the answer is set by the pressure differential alone.
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
              title="The Juice Box"
              statement={
                <p>
                  A child pressurizes a juice box to <strong>P = 120,000 Pa absolute</strong> by
                  blowing into the straw. The straw rises <strong>0.08 m</strong> above the juice
                  surface; the juice depth is <strong>0.15 m</strong>. Straw radius{" "}
                  <strong>r = 0.001 m</strong>. ρ_juice ≈ ρ_water = 1000 kg/m³.
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: "Velocity of juice as it leaves the straw",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>Bernoulli from juice surface (1) to straw exit (2):</p>
                      <p>120,000 + 0 + 0 = 100,000 + ½·1000·v² + 1000·9.8·0.08</p>
                      <p>20,000 − 784 = 500·v² → v² = 38.43</p>
                    </div>
                  ),
                  answer: { value: "v ≈ 6.20", unit: "m/s" },
                },
                {
                  label: "(b)",
                  question: "Volume flow rate",
                  solutionSteps: <p>Q = πr²·v = π·(0.001)²·6.20 = π·10⁻⁶·6.20</p>,
                  answer: { value: "Q ≈ 1.95×10⁻⁵", unit: "m³/s" },
                },
                {
                  label: "(c)",
                  question: "Why does it stop squirting before all the juice is gone?",
                  solutionSteps: (
                    <p>
                      As juice exits, the gas above it expands (PV = const), so the air pressure
                      inside drops. Eventually P_inside − P_atm − ρg·h_rise reaches zero, and the
                      net pressure pushing juice up the straw is gone. At that point flow stops
                      even though juice remains in the box.
                    </p>
                  ),
                  answer: { value: "Air expansion drops pressure → equilibrium reached" },
                },
              ]}
            />

            <PracticeProblem
              accentColor={ACCENT}
              title="Closed Tank — Can't Drain"
              statement={
                <p>
                  A 2 m tall <em>closed</em> water tank has <strong>1.5 m of water</strong> at the
                  bottom; the air above is at <strong>P_gauge = 200,000 Pa</strong>. A faucet
                  (diameter 1 cm) is at the side, <strong>10 cm above</strong> the base. P_atm =
                  100,000 Pa.
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: "Initial speed of water at the faucet exit",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>P_top_abs = 200,000 + 100,000 = 300,000 Pa.</p>
                      <p>Water column above faucet: 1.5 − 0.1 = 1.4 m.</p>
                      <p>Bernoulli: 300,000 + 0 + 1000·9.8·1.4 = 100,000 + ½·1000·v²</p>
                      <p>313,720 − 100,000 = 500·v² → v² = 427.4</p>
                    </div>
                  ),
                  answer: { value: "v ≈ 20.7", unit: "m/s" },
                },
                {
                  label: "(b)",
                  question: "Speed of water at its highest point in the tank (the surface)",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>Continuity: A_tank · v_top = A_hole · v_exit.</p>
                      <p>
                        A_hole/A_tank ≈ (0.005/R_tank)². For R_tank ≈ 0.5 m, ratio ≈ 10⁻⁴.
                      </p>
                      <p>v_top ≈ 10⁻⁴·20.7</p>
                    </div>
                  ),
                  answer: { value: "v_top ≈ 2×10⁻³", unit: "m/s (essentially zero — justifies the v_top ≈ 0 assumption)" },
                },
                {
                  label: "(c)",
                  question: "Air pressure when water level drops to 0.91 m, and why flow stops",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>Air-volume expansion (assume isothermal, PV=const):</p>
                      <p>V_air_initial: 0.5 m of column. V_air_final: 2 − 0.91 = 1.09 m.</p>
                      <p>P_final · V_final = P_initial · V_initial</p>
                      <p>P_final = 300,000 · 0.5/1.09</p>
                    </div>
                  ),
                  answer: {
                    value: "P_air ≈ 137,600 Pa abs (37,600 Pa gauge). Flow stops because the trapped air expanded and lost pressure — at some point the net pressure differential pushing water out can no longer overcome atmospheric pressure plus the residual water head."
                  },
                },
              ]}
            />

            <PracticeProblem
              accentColor={ACCENT}
              title="Water Tower"
              statement={
                <p>
                  A water tower is open to atmosphere at the top, with the water surface at{" "}
                  <strong>10 m</strong> above ground. A house faucet sits at <strong>1.5 m</strong>
                  {" "}above ground, with opening radius <strong>0.005 m</strong>.
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: "Velocity of water leaving the faucet",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>Both surfaces are at atm — pressures cancel. Effective Δh = 10 − 1.5 = 8.5 m.</p>
                      <p>v = √(2g·Δh) = √(2·9.8·8.5) = √166.6</p>
                    </div>
                  ),
                  answer: { value: "v ≈ 12.91", unit: "m/s" },
                },
                {
                  label: "(b)",
                  question: "Volume flow rate",
                  solutionSteps: <p>Q = πr²·v = π·(0.005)²·12.91 = π·2.5×10⁻⁵·12.91</p>,
                  answer: { value: "Q ≈ 1.01×10⁻³", unit: "m³/s" },
                },
                {
                  label: "(c)",
                  question: "Time to fill a 1 L (10⁻³ m³) bottle",
                  solutionSteps: <p>t = V/Q = 10⁻³ / 1.01×10⁻³</p>,
                  answer: { value: "t ≈ 0.99", unit: "s (~ 1 second)" },
                },
              ]}
            />

            <PracticeProblem
              accentColor={ACCENT}
              title="Leaky Boat (Buoyancy + Bernoulli)"
              statement={
                <p>
                  A simple rectangular boat: <strong>m = 3000 kg</strong>, length{" "}
                  <strong>L = 3 m</strong>, width <strong>w = 2 m</strong>. ρ_water = 1000 kg/m³.
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: "Equilibrium depth y of the boat's bottom",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>Buoyancy = weight: ρ_water·(L·w·y)·g = m·g</p>
                      <p>y = m/(ρ·L·w) = 3000/(1000·6)</p>
                    </div>
                  ),
                  answer: { value: "y = 0.5", unit: "m" },
                },
                {
                  label: "(b)",
                  question: "Velocity of water through a hole in the bottom",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>Hole is at the boat's bottom, depth 0.5 m below water surface.</p>
                      <p>Torricelli (atm on both sides): v = √(2g·0.5) = √9.8</p>
                    </div>
                  ),
                  answer: { value: "v ≈ 3.13", unit: "m/s" },
                },
                {
                  label: "(c)",
                  question: "Volume rate entering the boat (hole radius 0.005 m)",
                  solutionSteps: <p>Q = πr²·v = π·(0.005)²·3.13</p>,
                  answer: { value: "Q ≈ 2.46×10⁻⁴", unit: "m³/s (≈ 0.246 L/s)" },
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
                  <strong>Mixing gauge and absolute pressure.</strong> P_atm is built into Bernoulli
                  through the absolute pressure. If a problem gives gauge pressure, add P_atm before
                  plugging in. The closed-tank problem trips up exactly this.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">×</span>
                <span>
                  <strong>Forgetting v_top ≈ 0 only holds for big reservoirs.</strong> If the tank
                  is small or the hole is large, you need continuity and a quadratic.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">×</span>
                <span>
                  <strong>Using h = absolute height instead of "depth below surface."</strong> In
                  Torricelli, h is the depth of the hole BELOW the water surface, not its position
                  in some lab frame. Same applies to Bernoulli — only the height differential
                  matters.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">×</span>
                <span>
                  <strong>Equating volume flow rate with mass flow rate.</strong> Q (m³/s) is volume
                  per time. ρ·Q is mass per time. Be deliberate.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">×</span>
                <span>
                  <strong>Buoyancy = weight of object.</strong> No — buoyancy = weight of{" "}
                  <em>displaced fluid</em>. For a floating object in equilibrium they happen to be
                  equal, but don't conflate the cause and the result.
                </span>
              </li>
            </ul>
          </Card>
        </section>

        {/* Next */}
        <section className="text-center py-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            All 7 topics covered. Ready to test yourself?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Take the timed mock exam — 8 problems sampled across all topics.
          </p>
          <Link href="/mock-exam">
            <Button className="text-white px-8 py-4 text-lg rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Begin Mock Exam <ChevronRight className="w-5 h-5 ml-2 inline" />
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
