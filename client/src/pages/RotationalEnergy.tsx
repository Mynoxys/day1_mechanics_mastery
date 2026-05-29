import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { WorkedExample, Eq, Why } from "@/components/midterm/WorkedExample";
import { PracticeProblem } from "@/components/midterm/PracticeProblem";
import { FormulaBlock } from "@/components/midterm/FormulaBlock";

const ACCENT = "#ef4444"; // red

export default function RotationalEnergy() {
  const [height, setHeight] = useState(1.5);
  const [shape, setShape] = useState<"solid" | "hollow" | "sphere">("solid");

  const g = 9.8;
  const factors = { solid: 0.5, hollow: 1.0, sphere: 0.4 };
  const f = factors[shape];
  const v = Math.sqrt((2 * g * height) / (1 + f));
  const totalKE = g * height; // per kg, since mass cancels
  const transFraction = 1 / (1 + f);
  const rotFraction = f / (1 + f);

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
            Day 3 · Rotational Energy
          </h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container py-12">
        {/* Intro */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Energy When Things Roll
          </h2>
          <div className="prose dark:prose-invert max-w-none space-y-4">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              A spinning object stores kinetic energy in its rotation:{" "}
              <span className="font-mono" style={{ color: ACCENT }}>
                KE_rot = ½Iω²
              </span>
              . The exact analog of ½mv² with mass replaced by I and v replaced by ω.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When something <strong>rolls without slipping</strong>, it does both at once:
              translation <em>and</em> rotation. Total kinetic energy is the sum:
            </p>
            <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-6 my-4">
              <p className="text-2xl font-mono text-center" style={{ color: ACCENT }}>
                KE_total = ½mv² + ½Iω²
              </p>
              <p className="text-sm text-center mt-2 text-gray-500 dark:text-gray-400">
                With the rolling constraint v = Rω, this becomes ½mv²(1 + I/(mR²))
              </p>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              The factor <strong>I/(mR²)</strong> is what decides who wins a ramp race. It depends
              only on shape:
            </p>
            <ul className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed list-disc list-inside ml-4 space-y-1">
              <li>
                Solid sphere: <span className="font-mono">I/(mR²) = 2/5 = 0.4</span> — fastest roller
              </li>
              <li>
                Solid cylinder: <span className="font-mono">I/(mR²) = 1/2 = 0.5</span>
              </li>
              <li>
                Hollow cylinder (hoop): <span className="font-mono">I/(mR²) = 1</span> — slowest
              </li>
            </ul>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <strong>The intuition:</strong> a rolling object "invests" some of its falling energy
              into spin instead of straight-line motion. Hollow shapes have more I per unit (mR²)
              — they invest more in spin, leaving less for translation. So a hoop loses to a
              solid disc loses to a solid sphere, every time, regardless of mass or radius.
            </p>
          </div>
        </section>

        {/* Simulator */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ramp-Race Simulator
          </h3>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="interactive-panel">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Roll It Down
              </h4>

              <svg
                width={500}
                height={350}
                className="border border-gray-200 dark:border-slate-600 rounded-lg mb-6 bg-gray-50 dark:bg-slate-700"
              >
                {/* Ramp */}
                <polygon
                  points="60,300 440,300 440,200"
                  fill="#e5e7eb"
                  stroke="#374151"
                  strokeWidth="2"
                />
                {/* Ramp slope line for object travel */}
                <line x1="440" y1="200" x2="60" y2="300" stroke="#1f2937" strokeWidth="2" />

                {/* Object (cylinder) */}
                {(() => {
                  const t = 1 - height / 3; // 0 at top, ~0.5 at h=1.5
                  const objX = 60 + t * 380;
                  const objY = 300 - (1 - t) * 100;
                  return (
                    <>
                      <circle
                        cx={objX}
                        cy={objY - 20}
                        r="20"
                        fill={shape === "hollow" ? "none" : ACCENT}
                        stroke="#7f1d1d"
                        strokeWidth="3"
                      />
                      {shape === "sphere" && (
                        <ellipse
                          cx={objX}
                          cy={objY - 20}
                          rx="10"
                          ry="20"
                          fill="none"
                          stroke="#7f1d1d"
                          strokeWidth="1"
                        />
                      )}
                    </>
                  );
                })()}

                {/* Height marker */}
                <line
                  x1="450"
                  y1="200"
                  x2="450"
                  y2="300"
                  stroke="#7c3aed"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <text x="455" y="255" fontSize="11" fill="#7c3aed" fontWeight="bold">
                  h = {height.toFixed(2)} m
                </text>

                {/* Ground line for v label */}
                <text x="80" y="330" fontSize="13" fill="#1f2937" fontWeight="bold">
                  Final speed at bottom: v = {v.toFixed(3)} m/s
                </text>

                {/* Energy bars overlay */}
                <g transform="translate(20, 20)">
                  <rect x="0" y="0" width="140" height="100" fill="white" stroke="#9ca3af" rx="4" />
                  <text x="70" y="15" fontSize="11" fill="#1f2937" fontWeight="bold" textAnchor="middle">
                    Energy split (at bottom)
                  </text>
                  <rect
                    x="10"
                    y="25"
                    width={120 * transFraction}
                    height="20"
                    fill="#3b82f6"
                  />
                  <text x="15" y="40" fontSize="10" fill="white" fontWeight="bold">
                    Trans {(transFraction * 100).toFixed(0)}%
                  </text>
                  <rect
                    x="10"
                    y="55"
                    width={120 * rotFraction}
                    height="20"
                    fill={ACCENT}
                  />
                  <text x="15" y="70" fontSize="10" fill="white" fontWeight="bold">
                    Rot {(rotFraction * 100).toFixed(0)}%
                  </text>
                  <text x="10" y="92" fontSize="10" fill="#374151">
                    Total: gh = {totalKE.toFixed(2)} J/kg
                  </text>
                </g>
              </svg>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Ramp height h: {height.toFixed(2)} m
                  </label>
                  <Slider
                    value={[height]}
                    onValueChange={(v) => setHeight(v[0])}
                    min={0.1}
                    max={3}
                    step={0.05}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Shape:
                  </label>
                  <div className="flex gap-2">
                    {(["solid", "hollow", "sphere"] as const).map((s) => (
                      <Button
                        key={s}
                        onClick={() => setShape(s)}
                        variant={shape === s ? "default" : "outline"}
                        className={shape === s ? "" : ""}
                        style={shape === s ? { backgroundColor: ACCENT, color: "white" } : {}}
                      >
                        {s === "solid" ? "Solid Cyl." : s === "hollow" ? "Hollow Cyl." : "Solid Sphere"}
                      </Button>
                    ))}
                  </div>
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
                      <strong>Energy conservation:</strong>
                    </p>
                    <p>mgh = ½mv²(1 + I/(mR²))</p>
                    <p>For {shape}: I/(mR²) = {f}</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded border-l-4 border-l-blue-600">
                    <p>
                      <strong>Solve for v:</strong>
                    </p>
                    <p>v = √(2gh/(1 + I/(mR²)))</p>
                    <p>v = √(2·9.8·{height.toFixed(2)}/(1 + {f}))</p>
                    <p className="font-bold text-blue-600 dark:text-blue-400">
                      v = {v.toFixed(3)} m/s
                    </p>
                  </div>
                  <div
                    className="p-4 rounded border-l-4"
                    style={{ borderLeftColor: ACCENT, backgroundColor: "rgb(254 226 226 / 0.5)" }}
                  >
                    <p className="text-gray-700 dark:text-gray-200">
                      Notice: <strong>m and R don't appear</strong> in the final answer for v. Two
                      cylinders of any size — same speed at the bottom, as long as they're the
                      same shape.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="interactive-panel" style={{ borderLeftWidth: 4, borderLeftColor: ACCENT }}>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Try this:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li>• Set h to anything. Switch shape — the speed updates instantly. Sphere always wins.</li>
                  <li>• Note the energy split: hollow puts 50% into rotation; solid cylinder 33%; sphere only 28.6%.</li>
                  <li>• If you replaced the rolling cylinder with a sliding (frictionless) block, v = √(2gh) ≈ {Math.sqrt(2 * g * height).toFixed(2)} m/s — even the sphere is slower than that.</li>
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
              name="Rotational Kinetic Energy"
              formula={<div>KE_rot = ½ I ω²</div>}
              variables={[
                {
                  symbol: "I",
                  meaning:
                    "moment of inertia about the rotation axis — the rotational version of mass. Bigger I = more energy stored at the same spin rate. See the 'How to pick I' section above to reason about it",
                  units: "kg·m²",
                },
                {
                  symbol: "ω",
                  meaning: "angular velocity — how fast the object is spinning",
                  units: "rad/s",
                },
              ]}
              whenToUse="The rotational analog of ½mv². Use whenever something is spinning but not translating (a wheel about its fixed axle, a turntable, a flywheel). Note the squared ω: doubling the spin rate quadruples the stored energy — that's why flywheels store so much energy at high rpm."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Total KE for rolling"
              formula={
                <div className="space-y-2">
                  <div>KE = ½mv² + ½Iω²</div>
                  <div className="text-base">= ½mv²·(1 + I/(mR²))</div>
                </div>
              }
              variables={[
                {
                  symbol: "v",
                  meaning:
                    "linear speed of the center of mass (how fast the whole body is traveling)",
                  units: "m/s",
                },
                {
                  symbol: "ω = v/R",
                  meaning:
                    "angular speed, locked to v by the rolling-without-slipping condition (the contact point is momentarily at rest, so the rim must move at exactly v)",
                  units: "rad/s",
                },
                {
                  symbol: "R",
                  meaning: "radius of the rolling object",
                  units: "m",
                },
              ]}
              whenToUse="A rolling object has BOTH translational KE (its CM is moving) AND rotational KE (it's spinning). The second form factors out ½mv² and packages the rotational fraction as 1 + I/(mR²) — that ratio determines how the energy splits. For a hoop (I = MR²), exactly half the energy is rotational. For a solid sphere (I = ²/₅MR²), only ²/₇ is rotational and ⁵/₇ is translational. That's why a solid sphere wins the rolling race down a ramp."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Energy conservation w/ rolling"
              formula={<div>mgh = ½mv²(1 + I/(mR²))</div>}
              variables={[
                {
                  symbol: "h",
                  meaning: "height the object's center of mass dropped (or rose)",
                  units: "m",
                },
              ]}
              whenToUse="A rolling object on a ramp converts its gravitational PE entirely into kinetic energy (assuming no slipping — friction does no work because the contact point is momentarily at rest). All you need is: known h, known I/(mR²) for the shape. Solve for v. The result depends only on the shape and h — NOT on mass or radius. That's why a marble and a bowling ball reach the same speed at the bottom of identical ramps, but a ring is slower than either."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Pulley as energy coupling"
              formula={
                <div className="space-y-1 text-base">
                  <div>½ I_pulley · ω² = ½·(½M·R²)·(v/R)²</div>
                  <div>= ¼ M v²</div>
                </div>
              }
              variables={[
                {
                  symbol: "M",
                  meaning:
                    "pulley mass (treat it as a solid cylinder — I = ½MR²)",
                  units: "kg",
                },
                {
                  symbol: "v",
                  meaning:
                    "speed of the rope, which equals the linear speed of any masses attached to the rope",
                  units: "m/s",
                },
              ]}
              whenToUse="Atwood machines, well-bucket-with-pulley, paper-unspooling — anytime a pulley has nontrivial mass it stores its own KE as it spins. The neat result: when you write down KE for the whole system, the R²s cancel between I = ½MR² and ω² = (v/R)², leaving just ¼Mv². So a massive pulley behaves as if it adds M/2 of effective mass to the system's translational KE."
            />
          </div>
        </section>

        {/* How to pick the right I — reason, don't memorize */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            How to Pick the Right <span style={{ color: ACCENT }}>I</span> — Reasoning, Not Memorizing
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-3xl">
            Every moment of inertia comes from one integral:{" "}
            <span className="font-mono">I = ∫ r² dm</span>. Mass close to the axis barely
            counts (small <span className="font-mono">r²</span>); mass far from the axis
            counts a lot. So the question is always:{" "}
            <em>"where is the mass relative to the axis I'm spinning around?"</em>
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="interactive-panel" style={{ borderLeftWidth: 4, borderLeftColor: ACCENT }}>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                The intuition (in 4 rules)
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <strong>1. Hollow &gt; solid.</strong> A hoop has all its mass at radius{" "}
                  <span className="font-mono">R</span> ⇒{" "}
                  <span className="font-mono">I = MR²</span>. A solid disk has mass spread{" "}
                  <em>inside</em> too, so average r² is smaller ⇒{" "}
                  <span className="font-mono">I = ½MR²</span>.
                </li>
                <li>
                  <strong>2. Sphere &lt; cylinder of same M, R.</strong> A sphere's mass
                  also extends along the axis (small r there), pulling the average r² down.
                  Solid sphere: <span className="font-mono">2/5 MR²</span> &lt; solid cyl{" "}
                  <span className="font-mono">½ MR²</span>.
                </li>
                <li>
                  <strong>3. Axis through center &lt; axis through end.</strong> Move the
                  axis to the end of a rod and the far end is now at distance{" "}
                  <span className="font-mono">L</span> instead of <span className="font-mono">L/2</span>.
                  Center: <span className="font-mono">1/12 ML²</span>. End:{" "}
                  <span className="font-mono">1/3 ML²</span> (4× bigger).
                </li>
                <li>
                  <strong>4. Parallel-axis lifts I by Md².</strong> Need I about an axis{" "}
                  <em>not through the CM</em>?{" "}
                  <span className="font-mono">I = I_cm + M·d²</span> where{" "}
                  <span className="font-mono">d</span> is the offset. Always larger than
                  through CM.
                </li>
              </ul>
            </Card>

            <Card className="interactive-panel" style={{ borderLeftWidth: 4, borderLeftColor: "#f59e0b" }}>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Quick checks ("does the answer feel right?")
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <strong>Rolling race down a ramp?</strong> Smallest{" "}
                  <span className="font-mono">I/MR²</span> wins. Order:{" "}
                  <span className="font-mono">sphere (2/5) &lt; disk (1/2) &lt; hollow sphere (2/3) &lt; hoop (1)</span>.
                </li>
                <li>
                  <strong>Did you forget the axis?</strong> "Solid sphere" alone isn't enough —
                  about a diameter it's <span className="font-mono">2/5 MR²</span>; about a
                  tangent line it's <span className="font-mono">2/5 MR² + MR² = 7/5 MR²</span>{" "}
                  (parallel-axis with d = R).
                </li>
                <li>
                  <strong>Pulley in an Atwood / rolling problem?</strong> Treat as a solid disk:
                  <span className="font-mono"> I = ½MR²</span>. The <span className="font-mono">R²</span>{" "}
                  always cancels with <span className="font-mono">ω = v/R</span> in the energy budget,
                  leaving <span className="font-mono">¼Mv²</span>.
                </li>
                <li>
                  <strong>Compound shape?</strong> I adds. A rod with masses at the ends:{" "}
                  <span className="font-mono">I_rod + I_mass1 + I_mass2 = (1/12)ML² + m₁d₁² + m₂d₂²</span>.
                  Same axis for every term.
                </li>
                <li>
                  <strong>Physical pendulum (SHM page)?</strong> Use I about the <em>pivot</em>,
                  not about the CM. Apply parallel-axis to shift.
                </li>
              </ul>
            </Card>
          </div>

          <Card className="interactive-panel" style={{ borderLeftWidth: 4, borderLeftColor: ACCENT }}>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Common shapes — what to plug in
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              The "why" column is the reasoning, not a derivation — use it to sanity-check
              the formula instead of reaching for a table.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-300 dark:border-slate-600 text-left">
                    <th className="py-2 pr-4 text-gray-700 dark:text-gray-200">Shape & axis</th>
                    <th className="py-2 pr-4 text-gray-700 dark:text-gray-200 font-mono">I</th>
                    <th className="py-2 text-gray-700 dark:text-gray-200">Why this number</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-200">
                  <tr className="border-b border-gray-200 dark:border-slate-700">
                    <td className="py-2 pr-4">Hoop / thin ring (axis through center, ⊥ to plane)</td>
                    <td className="py-2 pr-4 font-mono font-bold" style={{ color: ACCENT }}>MR²</td>
                    <td className="py-2">All mass at distance R. r² = R² for every dm.</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-slate-700">
                    <td className="py-2 pr-4">Hollow cylinder / thin shell (about cylinder axis)</td>
                    <td className="py-2 pr-4 font-mono font-bold" style={{ color: ACCENT }}>MR²</td>
                    <td className="py-2">Same as hoop — depth along axis doesn't change r.</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-slate-700">
                    <td className="py-2 pr-4">Solid disk / cylinder (about cylinder axis)</td>
                    <td className="py-2 pr-4 font-mono font-bold" style={{ color: ACCENT }}>½ MR²</td>
                    <td className="py-2">Mass spread from r=0 to R. Average r² is R²/2.</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-slate-700">
                    <td className="py-2 pr-4">Solid sphere (about a diameter)</td>
                    <td className="py-2 pr-4 font-mono font-bold" style={{ color: ACCENT }}>2/5 MR²</td>
                    <td className="py-2">Mass also concentrated along the axis (small r there) → smaller than disk.</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-slate-700">
                    <td className="py-2 pr-4">Hollow sphere / thin spherical shell (diameter)</td>
                    <td className="py-2 pr-4 font-mono font-bold" style={{ color: ACCENT }}>2/3 MR²</td>
                    <td className="py-2">Between solid sphere and hoop — mass at radius R but spread over a sphere not a ring.</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-slate-700">
                    <td className="py-2 pr-4">Thin rod (axis through center, ⊥ to rod)</td>
                    <td className="py-2 pr-4 font-mono font-bold" style={{ color: ACCENT }}>1/12 ML²</td>
                    <td className="py-2">Mass spread from −L/2 to +L/2. ⟨r²⟩ = L²/12.</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-slate-700">
                    <td className="py-2 pr-4">Thin rod (axis through one end, ⊥ to rod)</td>
                    <td className="py-2 pr-4 font-mono font-bold" style={{ color: ACCENT }}>1/3 ML²</td>
                    <td className="py-2">Same rod, axis shifted to end. Parallel-axis: 1/12 + (L/2)² = 1/3. 4× bigger.</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-slate-700">
                    <td className="py-2 pr-4">Rectangular plate (axis through center, ⊥ to plate)</td>
                    <td className="py-2 pr-4 font-mono font-bold" style={{ color: ACCENT }}>1/12 M(a² + b²)</td>
                    <td className="py-2">Two perpendicular rod-distributions added.</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Point mass at distance d</td>
                    <td className="py-2 pr-4 font-mono font-bold" style={{ color: ACCENT }}>m·d²</td>
                    <td className="py-2">All mass at one r. Building block for compound shapes.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <Card
            className="interactive-panel mt-6"
            style={{ borderLeftWidth: 4, borderLeftColor: "#0ea5e9" }}
          >
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Parallel-axis theorem — the one move that handles "weird" axes
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-200 mb-3">
              Most tables list <span className="font-mono">I_cm</span> (axis through the
              center of mass). When your axis is offset by distance{" "}
              <span className="font-mono">d</span>, just add{" "}
              <span className="font-mono">M·d²</span>:
            </p>
            <div className="bg-gray-50 dark:bg-slate-700 rounded p-3 font-mono text-center text-base mb-3">
              I = I_cm + M·d²
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-200">
              <strong>Quick example.</strong> Solid sphere about a tangent line:{" "}
              <span className="font-mono">I = (2/5)MR² + MR² = (7/5)MR²</span>. Rod about
              one end: <span className="font-mono">I = (1/12)ML² + M(L/2)² = (1/3)ML²</span>{" "}
              — exactly the table value. <strong>Use this any time the axis isn't through the CM</strong>{" "}
              (physical pendulums, swinging planks, off-center pulleys).
            </p>
          </Card>
        </section>

        {/* Worked Example: Cylinder Race */}
        <section className="mb-16">
          <WorkedExample
            accentColor={ACCENT}
            title="The Cylinder Race"
            problemStatement={
              <p>
                Two cylinders of identical mass M and radius R race down a 1.5 m ramp from rest:
                one is hollow (I = MR²), the other solid (I = ½MR²). What's the speed of each at
                the bottom, and which one wins?
              </p>
            }
            steps={[
              {
                heading: "Set up energy conservation: gravitational PE → kinetic energy",
                body: (
                  <>
                    <Why>
                      The ramp is frictionless to slipping (well, there's static friction
                      that lets the cylinders roll, but it does no work because the contact
                      point is momentarily at rest). So mechanical energy is conserved: the
                      potential energy lost in falling height h becomes kinetic energy at the
                      bottom.
                    </Why>
                    <Why>
                      A rolling object has <strong>two</strong> kinds of kinetic energy:
                      translation (the center of mass moving forward) and rotation (the body
                      spinning about its axis). We must include both:
                    </Why>
                    <Eq>M g h = ½ M v² + ½ I ω²</Eq>
                    <Why>
                      <strong>Use the rolling constraint v = R·ω</strong> to convert ω into
                      v. This is the no-slip condition for a wheel: the rim's tangential
                      speed equals the center's translational speed. Squaring: ω² = v²/R².
                      Plug into the rotation term:
                    </Why>
                    <Eq>½ I ω² = ½ I · (v² / R²) = ½ M v² · ( I / (M R²) )</Eq>
                  </>
                ),
              },
              {
                heading: "Factor out ½Mv² and solve symbolically",
                body: (
                  <>
                    <Why>
                      Group the kinetic-energy terms by pulling out ½Mv²:
                    </Why>
                    <Eq>M g h = ½ M v² · ( 1 + I / (M R²) )</Eq>
                    <Why>
                      Mass M cancels off both sides — the answer won't depend on how heavy
                      the cylinder is. Solving for v:
                    </Why>
                    <Eq>v = √( 2 g h / (1 + I/(M R²)) )</Eq>
                    <Why>
                      The <strong>shape factor</strong> I/(MR²) is dimensionless and depends
                      only on geometry. For a solid cylinder it's ½; for a hollow cylinder
                      (thin hoop) it's 1. Notice R also cancels! Two cylinders of different
                      radius but same shape will tie at the bottom.
                    </Why>
                  </>
                ),
              },
              {
                heading: "(a) Hollow cylinder: shape factor I/(MR²) = 1",
                body: (
                  <>
                    <Why>
                      Plug in I/(MR²) = 1, h = 1.5 m, g = 9.8 m/s²:
                    </Why>
                    <Eq>v_hollow = √( 2 · 9.8 · 1.5 / (1 + 1) ) = √(29.4 / 2) = √14.7</Eq>
                    <Eq>v_hollow ≈ 3.83 m/s</Eq>
                  </>
                ),
                result: { label: "v_hollow", value: "≈ 3.83 m/s", color: "red" },
              },
              {
                heading: "(b) Solid cylinder: shape factor I/(MR²) = ½",
                body: (
                  <>
                    <Why>
                      Same h, same g, but I/(MR²) = ½ now:
                    </Why>
                    <Eq>v_solid = √( 2 · 9.8 · 1.5 / (1 + ½) ) = √(29.4 / 1.5) = √19.6</Eq>
                    <Eq>v_solid ≈ 4.43 m/s</Eq>
                  </>
                ),
                result: { label: "v_solid", value: "≈ 4.43 m/s", color: "red" },
              },
              {
                heading: "(c) Compare and identify the winner",
                body: (
                  <>
                    <Why>
                      Both cylinders start from rest at the top of the same ramp. Their
                      time-averaged accelerations down the ramp are constant (since shape
                      factor is constant). Higher final speed → higher acceleration the whole
                      way down → reaches the bottom sooner.
                    </Why>
                    <Why>
                      Because v_solid = 4.43 m/s &gt; v_hollow = 3.83 m/s (and mass cancelled
                      so this isn't about who's heavier), the solid cylinder wins regardless
                      of mass or radius. <strong>Why?</strong> The hollow cylinder has all
                      its mass at the rim (large I), so a bigger fraction of the falling
                      energy goes into <em>spin</em>. Less energy is left for forward motion.
                    </Why>
                  </>
                ),
                result: { label: "Winner", value: "Solid cylinder", color: "green" },
              },
            ]}
            keyInsight={
              <>
                Mass and radius dropped out. The shape factor is everything. This is the same
                ratio that appears in yoyo problems (a = (2/3)g for solid yoyo; a = (1/2)g for a
                hollow one). Different physics setup, same I/(mR²) bookkeeping.
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
              title="Bucket in the Well"
              statement={
                <p>
                  You're lowering a bucket (<strong>2 kg</strong>) into a well using a rope wound
                  around a pulley/spindle of mass <strong>0.8 kg</strong> (treat as solid cylinder).
                  Your hand slips when the bucket is <strong>4 m</strong> above the water. Find the
                  speed at which the bucket hits the water.
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: "Speed of the bucket as it hits water",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>Identify what carries energy.</strong> The bucket descends 4
                        m, so the system loses gravitational PE = m_b·g·h. Where does that
                        energy go? Two places: (1) the bucket's translational kinetic energy
                        ½m_b·v², and (2) the spindle's rotational kinetic energy ½I_p·ω².
                        The well water is at the bottom; nothing else moves.
                      </p>
                      <p>
                        <strong>Couple the rope speed to the spindle's angular speed.</strong>
                        The rope wraps around the spindle of radius R. As the bucket falls
                        with speed v, the rope unwinds at speed v, so the spindle's edge
                        moves at speed v, meaning ω = v/R.
                      </p>
                      <p>
                        <strong>Use the spindle's moment of inertia.</strong> A solid cylinder
                        has I_p = ½ M_p · R². So:
                      </p>
                      <Eq>½ I_p ω² = ½ · (½ M_p R²) · (v/R)² = ¼ M_p v²</Eq>
                      <p>
                        Notice: R cancels. The size of the spindle doesn't matter, only its
                        mass.
                      </p>
                      <p><strong>Energy conservation:</strong></p>
                      <Eq>m_b · g · h = ½ m_b · v² + ¼ M_p · v² = v² · ( ½ m_b + ¼ M_p )</Eq>
                      <p>Plug in m_b = 2 kg, M_p = 0.8 kg, h = 4 m, g = 9.8:</p>
                      <Eq>2 · 9.8 · 4 = v² · ( ½ · 2 + ¼ · 0.8 ) = v² · ( 1 + 0.2 ) = 1.2 v²</Eq>
                      <Eq>v² = 78.4 / 1.2 ≈ 65.33   →   v ≈ 8.08 m/s</Eq>
                      <p>
                        <strong>Compare to free-fall:</strong> if there were no spindle,
                        v_free = √(2gh) = √78.4 ≈ 8.85 m/s. The pulley "drinks" some of the
                        energy, slowing the bucket by about 9%.
                      </p>
                    </div>
                  ),
                  answer: { value: "v ≈ 8.08", unit: "m/s" },
                },
              ]}
            />

            <PracticeProblem
              accentColor={ACCENT}
              title="Atwood with Massive Pulley"
              statement={
                <p>
                  An Atwood's machine has a <strong>3 kg solid-cylinder pulley</strong>, with masses{" "}
                  <strong>2 kg</strong> and <strong>6 kg</strong> on either side. The 6-kg mass
                  drops <strong>4 m</strong>. Find its speed just before it hits the floor.
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: "Speed of the 6-kg mass at impact",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>The trick with Atwood + rope:</strong> the rope speed v is the
                        same on both sides. So both masses move at the same speed v (one
                        going down, the other going up at the same rate). And the pulley
                        rotates at ω = v/R.
                      </p>
                      <p>
                        <strong>Net change in gravitational PE.</strong> The 6-kg mass drops
                        4 m, gaining height-deficit, so PE lost = m₁·g·h. The 2-kg mass goes
                        up 4 m, gaining PE = m₂·g·h. Net change in the system's PE:
                      </p>
                      <Eq>ΔPE = (m₁ − m₂) · g · h = (6 − 2) · 9.8 · 4 = 156.8 J</Eq>
                      <p>
                        <strong>Where does this energy go?</strong> Both masses move at v, so
                        both have ½m·v² of KE. The pulley has ½I·ω² with I = ½M_p·R² and ω =
                        v/R, which simplifies (as in the bucket problem) to ¼M_p·v²:
                      </p>
                      <Eq>KE_total = ½ m₁ v² + ½ m₂ v² + ¼ M_p · v² = ½ (m₁ + m₂) v² + ¼ M_p v²</Eq>
                      <p>
                        Set ΔPE = KE_total (energy conservation), plug in M_p = 3 kg,
                        m₁+m₂ = 8 kg:
                      </p>
                      <Eq>156.8 = ½ · 8 · v² + ¼ · 3 · v² = 4 v² + 0.75 v² = 4.75 v²</Eq>
                      <Eq>v² = 156.8 / 4.75 ≈ 33.01   →   v ≈ 5.74 m/s</Eq>
                      <p>
                        Physical sanity: 4 m fall with no pulley and no counter-mass would
                        give v = √(2·9.8·4) = 8.85 m/s. Here we have both a counter-mass
                        (the 2 kg) and a heavy pulley fighting the fall, hence the much
                        slower 5.74 m/s.
                      </p>
                    </div>
                  ),
                  answer: { value: "v ≈ 5.74", unit: "m/s" },
                },
              ]}
            />

            <PracticeProblem
              accentColor={ACCENT}
              title="Roach on the Toilet Paper Roll"
              statement={
                <p>
                  A roach (<strong>m = 0.1 kg</strong>) clings to the end of a piece of toilet
                  paper. Its weight unwinds the paper from a roll (<strong>M = 0.2 kg</strong>,
                  radius <strong>r = 0.15 m</strong>, treat as solid cylinder). The roach drops{" "}
                  <strong>0.7 m</strong> before hitting the floor.
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: "Moment of inertia I of the roll",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        The problem says to model the roll as a uniform <strong>solid
                        cylinder</strong> rotating about its central axis. The standard table
                        value for that geometry is I = ½ M R². Plug in M = 0.2 kg, R = 0.15
                        m:
                      </p>
                      <Eq>I = ½ · M · R² = ½ · 0.2 · (0.15)² = 0.5 · 0.2 · 0.0225</Eq>
                      <Eq>I = 0.00225 kg·m²</Eq>
                      <p>
                        (If the problem instead said "thin-walled tube," we'd use I = MR² and
                        get 0.0045 kg·m² — exactly twice as much. Always confirm the geometry
                        before pulling a formula from the table.)
                      </p>
                    </div>
                  ),
                  answer: { value: "I = 0.00225", unit: "kg·m²" },
                },
                {
                  label: "(b)",
                  question: "Speed of the roach just before hitting the floor",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>Constraint between roach speed and roll spin.</strong> The
                        toilet paper unwinds from radius r as the roll spins. Each radian of
                        spin lets out r meters of paper. So the speed of the dropping end
                        (and the roach clinging to it) is v = r·ω, equivalently ω = v/r.
                      </p>
                      <p>
                        <strong>Energy conservation.</strong> The roach falls h = 0.7 m,
                        losing m·g·h of PE. That goes into the roach's translational KE
                        (½m·v²) and the roll's rotational KE (½I·ω²):
                      </p>
                      <Eq>m · g · h = ½ m · v² + ½ I · ω²</Eq>
                      <p>Substitute ω = v/r and I = ½M r²:</p>
                      <Eq>½ I ω² = ½ · (½ M r²) · (v/r)² = ¼ M · v²</Eq>
                      <p>(The radius r cancels — same neat trick as the well-bucket.) So:</p>
                      <Eq>m · g · h = ½ m · v² + ¼ M · v² = v² · (½ m + ¼ M)</Eq>
                      <p>Plug in m = 0.1, M = 0.2, h = 0.7, g = 9.8:</p>
                      <Eq>0.1 · 9.8 · 0.7 = v² · (½·0.1 + ¼·0.2) = v² · (0.05 + 0.05) = 0.1 v²</Eq>
                      <Eq>v² = 0.686 / 0.1 = 6.86   →   v ≈ 2.62 m/s</Eq>
                      <p>
                        Compare to free fall (no roll attached): v_free = √(2·9.8·0.7) = 3.71
                        m/s. The roll's inertia limits the roach to ~70% of free-fall speed.
                      </p>
                    </div>
                  ),
                  answer: { value: "v ≈ 2.62", unit: "m/s" },
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
                  <strong>Forgetting the rotational KE term.</strong> If you write mgh = ½mv², your
                  answer is too fast. The rolling object had to spend energy spinning up too.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">×</span>
                <span>
                  <strong>Treating a massive pulley as massless.</strong> ½Iω² shows up in any
                  problem with a pulley that has mass. Without it, your numbers are too high.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">×</span>
                <span>
                  <strong>Wrong I for the shape.</strong> A toilet-paper roll is solid for these
                  problems (I = ½MR²), even though real toilet paper is hollow — the problem says
                  "treat as solid cylinder."
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">×</span>
                <span>
                  <strong>Using v = √(2gh) for rolling.</strong> That formula is for sliding without
                  friction. Rolling redirects energy and gives a smaller v.
                </span>
              </li>
            </ul>
          </Card>
        </section>

        {/* Next */}
        <section className="text-center py-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Day 4: Angular Momentum
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Conservation laws applied to spin: collisions, ice skaters, falling cats.
          </p>
          <Link href="/angular-momentum">
            <Button
              className="text-white px-8 py-4 text-lg rounded-lg"
              style={{ backgroundColor: "#3b82f6" }}
            >
              Continue to Angular Momentum <ChevronRight className="w-5 h-5 ml-2 inline" />
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
