import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { WorkedExample, Eq, Why } from "@/components/midterm/WorkedExample";
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
                {
                  symbol: "ρ",
                  meaning:
                    "how heavy the fluid is per cubic meter (water = 1000, mercury = 13,600)",
                  units: "kg/m³",
                },
                {
                  symbol: "h",
                  meaning:
                    "depth below the reference surface where you're computing pressure",
                  units: "m",
                },
                {
                  symbol: "P₀",
                  meaning:
                    "pressure at the reference surface — usually atmospheric pressure if open to air",
                  units: "Pa",
                },
                {
                  symbol: "P_atm",
                  meaning: "atmospheric pressure ≈ 101,325 Pa (often round to 100,000 Pa)",
                  units: "Pa",
                },
              ]}
              whenToUse="Every meter of depth in water adds about 10,000 Pa (≈ 0.1 atm) of pressure on top of whatever was at the surface — that's why your ears pop in 10 m of water (one extra atm) but not in a swimming pool. Watch the gauge-vs-absolute distinction: gauge pressure is what tire gauges and most lab equipment read (relative to atmosphere); absolute is what physics formulas (especially Bernoulli) want."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Archimedes' buoyancy"
              formula={<div>F_buoy = ρ_fluid · V_displaced · g</div>}
              variables={[
                {
                  symbol: "ρ_fluid",
                  meaning: "density of the FLUID the object sits in, not the object's own density",
                  units: "kg/m³",
                },
                {
                  symbol: "V_displaced",
                  meaning:
                    "volume of fluid pushed out of the way by the object — equals the object's submerged volume",
                  units: "m³",
                },
              ]}
              whenToUse="Buoyant force is the weight of the fluid the object displaces. The intuition: the fluid 'wants' to occupy that volume; pushing it out of the way costs energy, which becomes a lifting force on the object. For floating: F_buoy = mg → only enough of the object submerges to displace its full weight in fluid. For sinking: full volume is displaced; net downward force is (ρ_obj − ρ_fluid)·V·g."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Continuity (incompressible)"
              formula={
                <div className="space-y-1 text-base">
                  <div>Q = A · v</div>
                  <div>A₁ v₁ = A₂ v₂ = Q</div>
                </div>
              }
              variables={[
                {
                  symbol: "A",
                  meaning: "cross-sectional area of the pipe at that section",
                  units: "m²",
                },
                {
                  symbol: "v",
                  meaning: "speed of the fluid through that cross-section",
                  units: "m/s",
                },
                {
                  symbol: "Q",
                  meaning:
                    "volume flow rate — how many cubic meters of fluid pass per second. Constant along the pipe",
                  units: "m³/s",
                },
              ]}
              whenToUse="Conservation of mass for incompressible fluids: whatever volume enters per second must leave per second. So when the pipe narrows, the fluid has to speed up to push the same volume through. Same physics as a thumb on a garden hose: smaller area, faster jet. The product A·v is constant; halving A doubles v."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Bernoulli's equation"
              formula={<div>P + ½ρv² + ρgh = constant (along a streamline)</div>}
              variables={[
                {
                  symbol: "P",
                  meaning:
                    "absolute static pressure at this point along the streamline",
                  units: "Pa",
                },
                {
                  symbol: "½ρv²",
                  meaning:
                    "the 'dynamic pressure' — kinetic energy per unit volume of the moving fluid",
                  units: "Pa",
                },
                {
                  symbol: "ρgh",
                  meaning:
                    "gravitational PE per unit volume; h is height above some reference",
                  units: "Pa",
                },
              ]}
              whenToUse="Energy conservation per unit volume of fluid. Where the fluid speeds up (½ρv² grows), pressure must drop to compensate — that's why airplane wings lift (faster air over the top → lower P → net upward push) and why a curveball curves. Connect any two points along the same streamline (like inlet and outlet of a pipe). Requires steady, incompressible, frictionless flow."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Torricelli's theorem"
              formula={<div>v_exit = √(2gh)</div>}
              variables={[
                {
                  symbol: "h",
                  meaning: "depth of the small hole below the open top of the tank",
                  units: "m",
                },
              ]}
              whenToUse="Bernoulli applied to an open tank with a small hole: the surface and the hole both have atmospheric pressure (so P cancels), the surface is essentially still (so v_top ≈ 0), and the only thing connecting them is gravity. Result: the water emerges at exactly the speed an object would have after free-falling from height h. Notable: this doesn't depend on fluid density — water and mercury exit at the same speed from the same depth."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Free-fall time (horizontal launch)"
              formula={
                <div className="space-y-1 text-base">
                  <div>H = ½ · g · t²</div>
                  <div>t = √(2H / g)</div>
                  <div>d = v · t</div>
                </div>
              }
              variables={[
                {
                  symbol: "H",
                  meaning: "height the stream is launched from above the landing surface",
                  units: "m",
                },
                {
                  symbol: "t",
                  meaning: "time of flight — how long the droplets stay in the air before hitting ground",
                  units: "s",
                },
                {
                  symbol: "v",
                  meaning: "horizontal exit speed (from Bernoulli or Torricelli) — stays constant in the air",
                  units: "m/s",
                },
                {
                  symbol: "d",
                  meaning: "horizontal range — how far downstream the water lands",
                  units: "m",
                },
              ]}
              whenToUse="Once the fluid leaves the nozzle horizontally, it's no longer a fluid problem — every droplet is in free fall. The vertical and horizontal motions are independent: gravity handles the fall (giving you t), and the exit speed handles the horizontal travel (giving you d = v·t). Use this whenever a fluid problem ends with 'where does the water land?' — solve Bernoulli for v_exit first, then drop into projectile motion."
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
                heading: "Pick the two Bernoulli reference points and write the equation",
                body: (
                  <>
                    <Why>
                      Bernoulli's equation says the quantity P + ½ρv² + ρgh is constant
                      along a streamline (for ideal, incompressible, non-viscous flow). To
                      use it, we pick two points along the same flow path and equate their
                      Bernoulli quantities.
                    </Why>
                    <Why>
                      <strong>Point 1 — inside the reservoir, at the top:</strong> the
                      water there is essentially still because the tank's cross-section
                      is much larger than the hole, so v₁ ≈ 0. Pressure P₁ = 8 atm
                      absolute = 800,000 Pa. Take this point's height as h₁ = 0.08 m
                      above the exit.
                    </Why>
                    <Why>
                      <strong>Point 2 — at the exit hole:</strong> water is now moving at
                      v₂ = v_exit (what we want). The hole opens to atmosphere, so P₂ =
                      P_atm = 100,000 Pa. Set h₂ = 0 (our reference level).
                    </Why>
                    <Eq>P₁ + ½ρ·v₁² + ρ·g·h₁ = P₂ + ½ρ·v₂² + ρ·g·h₂</Eq>
                    <Eq>800,000 + 0 + 1000·9.8·0.08 = 100,000 + ½·1000·v² + 0</Eq>
                  </>
                ),
              },
              {
                heading: "Solve for v_exit",
                body: (
                  <>
                    <Why>
                      Rearrange: move the unknown ½ρv² term to one side and combine the
                      pressure and gravity terms on the other:
                    </Why>
                    <Eq>v² = 2·(P₁ − P₂)/ρ + 2·g·(h₁ − h₂)</Eq>
                    <Eq>v² = 2·(800,000 − 100,000)/1000 + 2·9.8·0.08</Eq>
                    <Eq>v² = 1400 + 1.57 ≈ 1401.57</Eq>
                    <Eq>v_exit ≈ √1401.57 ≈ 37.4 m/s</Eq>
                    <Why>
                      <strong>Notice:</strong> the pressure term (1400) absolutely
                      dominates the gravity term (1.57). For a pressurized tank, we could
                      drop the ρgh term and still get the right answer to 0.06%. Use this
                      as a sanity check, not as a license to skip terms.
                    </Why>
                  </>
                ),
                result: { label: "(a) v_exit", value: "≈ 37.4 m/s", color: "cyan" },
              },
              {
                heading: "(b) Volume flow rate from the exit area and exit velocity",
                body: (
                  <>
                    <Why>
                      Volume flow rate Q (m³/s) is just the cross-sectional area of the
                      exit times the exit speed. The hole is circular with radius r = 1 mm
                      = 0.001 m, so its area is π·r²:
                    </Why>
                    <Eq>Q = A · v = π · r² · v_exit</Eq>
                    <Eq>Q = π · (0.001)² · 37.4 = π · 10⁻⁶ · 37.4 ≈ 1.18 × 10⁻⁴ m³/s</Eq>
                    <Why>
                      Convert: 1.18 × 10⁻⁴ m³/s = 0.118 L/s ≈ 7 L/min. That's the rate at
                      which water leaves the gun.
                    </Why>
                  </>
                ),
                result: { label: "Q", value: "≈ 1.18×10⁻⁴ m³/s ≈ 0.118 L/s", color: "cyan" },
              },
              {
                heading: "(c) Range — once it leaves the gun, it's just projectile motion",
                body: (
                  <>
                    <Why>
                      Bernoulli got us the exit speed, but in the air the water is just a
                      stream of droplets in free fall. We're holding the gun horizontally
                      at H = 1.2 m above ground.
                    </Why>
                    <Why>
                      <strong>Vertical motion:</strong> initial vertical velocity is zero
                      (gun held flat), constant downward acceleration g. Time to fall
                      from height H:
                    </Why>
                    <Eq>H = ½ · g · t²   →   t = √(2 H / g)</Eq>
                    <Eq>t = √(2 · 1.2 / 9.8) = √0.2449 ≈ 0.495 s</Eq>
                    <Why>
                      <strong>Horizontal motion:</strong> water leaves the muzzle at v =
                      37.4 m/s and continues at that speed (no air drag in the model).
                      Range = horizontal speed × time of flight:
                    </Why>
                    <Eq>d = v · t = 37.4 · 0.495 ≈ 18.5 m</Eq>
                  </>
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
                    <div className="space-y-2">
                      <p>
                        <strong>Choose the two Bernoulli points.</strong> Point 1 = juice
                        surface (top of liquid), where v₁ ≈ 0 because the box is wide
                        compared to the straw. Pressure there is the air pressure inside
                        the box, P₁ = 120,000 Pa. Take this as our reference height,
                        h₁ = 0.
                      </p>
                      <p>
                        Point 2 = top of the straw where juice exits. Pressure there is
                        atmospheric, P₂ = 100,000 Pa. Speed v₂ = v (unknown). Height
                        h₂ = 0.08 m above the surface (the juice has to rise up the straw
                        before exiting).
                      </p>
                      <p>
                        <strong>Apply Bernoulli</strong> P + ½ρv² + ρgh = const between
                        the two points:
                      </p>
                      <Eq>P₁ + 0 + 0 = P₂ + ½·ρ·v² + ρ·g·h₂</Eq>
                      <Eq>120,000 = 100,000 + ½·1000·v² + 1000·9.8·0.08</Eq>
                      <Eq>120,000 = 100,000 + 500·v² + 784</Eq>
                      <Eq>500·v² = 120,000 − 100,784 = 19,216   →   v² = 38.43</Eq>
                      <Eq>v ≈ 6.20 m/s</Eq>
                      <p>
                        Note the gravity term ρgh = 784 Pa is small compared to the
                        20,000 Pa pressure difference but not negligible here (≈ 4% of
                        the budget). Don't drop it.
                      </p>
                    </div>
                  ),
                  answer: { value: "v ≈ 6.20", unit: "m/s" },
                },
                {
                  label: "(b)",
                  question: "Volume flow rate",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Cross-sectional area of the straw × the juice's exit speed:
                      </p>
                      <Eq>Q = A · v = π · r² · v = π · (0.001)² · 6.20 ≈ 1.95 × 10⁻⁵ m³/s</Eq>
                      <p>
                        That's about 0.020 L/s — a slow trickle, consistent with a kid
                        squeezing a juice box.
                      </p>
                    </div>
                  ),
                  answer: { value: "Q ≈ 1.95×10⁻⁵", unit: "m³/s" },
                },
                {
                  label: "(c)",
                  question: "Why does it stop squirting before all the juice is gone?",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>The trapped air does the pushing.</strong> When the kid
                        pressurizes the box, they trap a fixed amount of gas at 120,000
                        Pa above the juice. As juice exits, the air volume above
                        increases. By PV = nRT (isothermal expansion), the trapped air's
                        pressure must <em>drop</em> as it expands.
                      </p>
                      <p>
                        Squirting stops when the inside pressure can no longer push juice
                        up the straw against atmospheric pressure plus the residual fluid
                        head:
                      </p>
                      <Eq>P_inside ≤ P_atm + ρ·g·h_rise   →   no more flow</Eq>
                      <p>
                        At that moment juice still remains, but the system has reached
                        mechanical equilibrium. To resume squirting, the kid must
                        re-blow into the box.
                      </p>
                    </div>
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
                    <div className="space-y-2">
                      <p>
                        <strong>Convert gauge to absolute pressure first.</strong>{" "}
                        Gauge pressure is the excess <em>above</em> atmospheric. Bernoulli
                        works with absolute pressures throughout. So:
                      </p>
                      <Eq>P_top,abs = P_gauge + P_atm = 200,000 + 100,000 = 300,000 Pa</Eq>
                      <p>
                        <strong>Pick the two points.</strong> Point 1 = water surface
                        (top of water, just below the trapped air). v₁ ≈ 0 (large area).
                        P₁ = 300,000 Pa absolute. Height: water depth is 1.5 m and the
                        faucet hole is 0.1 m above the base, so the surface is 1.4 m
                        above the faucet. Take h₁ = 1.4 m, h₂ = 0.
                      </p>
                      <p>
                        Point 2 = at the faucet exit, where v₂ = v (unknown) and P₂ =
                        P_atm = 100,000 Pa.
                      </p>
                      <p>
                        <strong>Apply Bernoulli:</strong>
                      </p>
                      <Eq>P₁ + 0 + ρ·g·h₁ = P₂ + ½·ρ·v² + 0</Eq>
                      <Eq>300,000 + 1000·9.8·1.4 = 100,000 + ½·1000·v²</Eq>
                      <Eq>300,000 + 13,720 = 100,000 + 500·v²</Eq>
                      <Eq>500·v² = 213,720   →   v² = 427.4   →   v ≈ 20.7 m/s</Eq>
                      <p>
                        About 75 km/h — fast for a household faucet because the trapped
                        air's pressure (200,000 Pa gauge) is doing most of the pushing.
                        Without that pressurization, you'd only get v = √(2g·1.4) = 5.2
                        m/s from the water head alone.
                      </p>
                    </div>
                  ),
                  answer: { value: "v ≈ 20.7", unit: "m/s" },
                },
                {
                  label: "(b)",
                  question: "Speed of water at its highest point in the tank (the surface)",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>Use continuity (mass conservation).</strong> An
                        incompressible fluid that enters one cross-section must leave
                        another at a rate that conserves volume:
                      </p>
                      <Eq>A_tank · v_top = A_hole · v_exit</Eq>
                      <p>
                        Hole radius is 0.005 m (1 cm diameter), so A_hole = π·(0.005)² ≈
                        7.85×10⁻⁵ m². Tank radius is roughly 0.5 m (typical), so A_tank ≈
                        π·(0.5)² ≈ 0.785 m². The ratio:
                      </p>
                      <Eq>A_hole / A_tank ≈ 7.85×10⁻⁵ / 0.785 ≈ 10⁻⁴</Eq>
                      <Eq>v_top ≈ (A_hole/A_tank) · v_exit ≈ 10⁻⁴ · 20.7 ≈ 2×10⁻³ m/s</Eq>
                      <p>
                        About 2 mm/s — vanishingly slow. This is exactly why we use
                        v_top ≈ 0 in Bernoulli for "large reservoir" problems. The
                        approximation is valid as long as the hole is much smaller than
                        the tank cross-section.
                      </p>
                    </div>
                  ),
                  answer: { value: "v_top ≈ 2×10⁻³", unit: "m/s (essentially zero — justifies the v_top ≈ 0 assumption)" },
                },
                {
                  label: "(c)",
                  question: "Air pressure when water level drops to 0.91 m, and why flow stops",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>The trapped air expands as water leaves.</strong> Initially
                        the tank had 1.5 m of water and 0.5 m of air column above
                        (2.0 m total height). After the water drops to 0.91 m, the air
                        column has expanded to 2 − 0.91 = 1.09 m. Assuming the air stays
                        at the same temperature, PV = constant (isothermal compression):
                      </p>
                      <Eq>P_initial · V_initial = P_final · V_final</Eq>
                      <p>
                        Volumes are proportional to column heights (tank cross-section
                        cancels):
                      </p>
                      <Eq>P_final = P_initial · (V_init / V_final) = 300,000 · (0.5 / 1.09) ≈ 137,600 Pa abs</Eq>
                      <Eq>P_final,gauge = 137,600 − 100,000 = 37,600 Pa gauge</Eq>
                      <p>
                        <strong>Why flow stops.</strong> Bernoulli at this point gives
                        v² ∝ (P_inside + ρ·g·h_water − P_atm). As water leaves, two
                        things happen at once: the air pressure P_inside drops (just
                        computed), and the water head h_water also drops. Eventually the
                        sum reaches P_atm and flow stops. The tank can't fully drain
                        unless atmosphere is admitted.
                      </p>
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
                    <div className="space-y-2">
                      <p>
                        <strong>This is the classic Torricelli setup.</strong> Both the
                        tower surface and the faucet exit are open to the atmosphere, so
                        both pressures equal P_atm and the pressure terms in Bernoulli
                        cancel out. The only thing driving flow is the gravitational
                        head — the height difference between the surface and the faucet:
                      </p>
                      <Eq>Δh = h_surface − h_faucet = 10 − 1.5 = 8.5 m</Eq>
                      <p>
                        With v_top ≈ 0 (huge tower) and the pressure terms gone,
                        Bernoulli reduces to ½ρv² = ρ·g·Δh, so:
                      </p>
                      <Eq>v = √(2 g · Δh) = √(2 · 9.8 · 8.5) = √166.6 ≈ 12.91 m/s</Eq>
                      <p>
                        Roughly 46 km/h — that's why old gravity-fed water systems can
                        produce respectable pressure without a pump, just by elevating
                        the storage tank.
                      </p>
                    </div>
                  ),
                  answer: { value: "v ≈ 12.91", unit: "m/s" },
                },
                {
                  label: "(b)",
                  question: "Volume flow rate",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Cross-sectional area of the faucet × the exit speed:
                      </p>
                      <Eq>Q = π · r² · v = π · (0.005)² · 12.91 = π · 2.5×10⁻⁵ · 12.91</Eq>
                      <Eq>Q ≈ 1.01 × 10⁻³ m³/s ≈ 1 L/s</Eq>
                      <p>
                        About a liter per second — typical for a normal kitchen faucet.
                      </p>
                    </div>
                  ),
                  answer: { value: "Q ≈ 1.01×10⁻³", unit: "m³/s" },
                },
                {
                  label: "(c)",
                  question: "Time to fill a 1 L (10⁻³ m³) bottle",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Time = volume to fill / volumetric flow rate:
                      </p>
                      <Eq>t = V / Q = 10⁻³ m³ / 1.01×10⁻³ m³/s ≈ 0.99 s</Eq>
                      <p>
                        Almost exactly one second. (1 L per second is a useful mental
                        anchor for residential plumbing flow rates.)
                      </p>
                    </div>
                  ),
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
                    <div className="space-y-2">
                      <p>
                        <strong>Archimedes' principle:</strong> a floating boat displaces
                        a volume of water whose weight equals the boat's own weight.
                        Since the boat is rectangular with footprint L × w, if it sits
                        with depth y submerged, it displaces a volume V_disp = L · w · y.
                        The weight of that displaced water is ρ_water · V_disp · g.
                      </p>
                      <p>
                        Setting buoyancy = boat's weight:
                      </p>
                      <Eq>ρ_water · (L · w · y) · g = m · g</Eq>
                      <p>
                        g cancels (gravity affects both sides equally), and we solve for y:
                      </p>
                      <Eq>y = m / (ρ_water · L · w) = 3000 / (1000 · 3 · 2) = 3000 / 6000 = 0.5 m</Eq>
                      <p>
                        So the boat sinks 50 cm into the water at rest.
                      </p>
                    </div>
                  ),
                  answer: { value: "y = 0.5", unit: "m" },
                },
                {
                  label: "(b)",
                  question: "Velocity of water through a hole in the bottom",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>The hole is in the boat's bottom at depth y = 0.5 m</strong>
                        below the lake surface. Inside the boat is air (above the leak,
                        until water rises). Outside the hole is water at lake-bottom
                        level — pressurized by the column of water above it.
                      </p>
                      <p>
                        At the hole, the lake-side pressure is P_atm + ρgh (atmospheric
                        plus the head from 0.5 m of water above). Inside the boat just
                        above the hole, the pressure is just P_atm. The pressure
                        difference drives water up through the hole.
                      </p>
                      <p>
                        Apply Bernoulli from the lake surface (point 1, far from hole) to
                        the hole opening on the inside (point 2). Both ends face air at
                        P_atm, so pressures cancel; height difference is y; v_lake_top ≈
                        0 (lake is huge):
                      </p>
                      <Eq>v = √(2 g · y) = √(2 · 9.8 · 0.5) = √9.8 ≈ 3.13 m/s</Eq>
                      <p>
                        This is just Torricelli's law in reverse — water enters the boat
                        with the same speed it would exit a tank with surface 0.5 m
                        above the hole.
                      </p>
                    </div>
                  ),
                  answer: { value: "v ≈ 3.13", unit: "m/s" },
                },
                {
                  label: "(c)",
                  question: "Volume rate entering the boat (hole radius 0.005 m)",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Cross-sectional area of the hole × the inflow speed:
                      </p>
                      <Eq>Q = π · r² · v = π · (0.005)² · 3.13 ≈ 2.46 × 10⁻⁴ m³/s</Eq>
                      <p>
                        Convert: 2.46 × 10⁻⁴ m³/s = 0.246 L/s ≈ 14.8 L/min. A 5-mm hole
                        adds water to the boat at a worrying rate. (As water accumulates
                        inside, the boat sits lower, increasing y and thus the inflow
                        speed — the leak accelerates over time.)
                      </p>
                    </div>
                  ),
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
