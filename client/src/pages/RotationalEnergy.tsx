import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { WorkedExample } from "@/components/midterm/WorkedExample";
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
                { symbol: "I", meaning: "moment of inertia about rotation axis", units: "kg·m²" },
                { symbol: "ω", meaning: "angular velocity", units: "rad/s" },
              ]}
              whenToUse="Energy stored purely in spin (e.g., a wheel about its axle, a turntable)."
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
                { symbol: "v", meaning: "linear speed of center of mass", units: "m/s" },
                { symbol: "ω = v/R", meaning: "angular speed (rolling constraint)", units: "rad/s" },
                { symbol: "R", meaning: "radius of the rolling object", units: "m" },
              ]}
              whenToUse="Anything rolling without slipping: balls down ramps, wheels, yoyo unrolling at the bottom."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Energy conservation w/ rolling"
              formula={<div>mgh = ½mv²(1 + I/(mR²))</div>}
              variables={[
                { symbol: "h", meaning: "height dropped (or risen)", units: "m" },
              ]}
              whenToUse="Rolling object on a frictionless ramp / drop / pulley."
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
                { symbol: "M", meaning: "pulley mass (treated as solid cylinder)", units: "kg" },
                { symbol: "v", meaning: "speed of the rope (= linear speed of attached masses)", units: "m/s" },
              ]}
              whenToUse="Atwood / well-bucket / paper-unspooling: massive pulley adds (M/4)v² to the KE budget. R always cancels."
            />
          </div>
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
                heading: "Energy conservation: PE → KE_trans + KE_rot",
                body: (
                  <p>
                    Mgh = ½Mv² + ½Iω². With v = Rω → ω² = v²/R², the I term becomes ½(I/MR²)·Mv².
                  </p>
                ),
              },
              {
                heading: "Solve for v",
                body: (
                  <p>
                    Mgh = ½Mv²(1 + I/(MR²)) → v = √(2gh / (1 + I/(MR²)))
                  </p>
                ),
              },
              {
                heading: "(a) Hollow cylinder: I/(MR²) = 1",
                body: <p>v_hollow = √(2·9.8·1.5 / 2) = √(14.7)</p>,
                result: { label: "v_hollow", value: "≈ 3.83 m/s", color: "red" },
              },
              {
                heading: "(b) Solid cylinder: I/(MR²) = ½",
                body: <p>v_solid = √(2·9.8·1.5 / 1.5) = √(19.6)</p>,
                result: { label: "v_solid", value: "≈ 4.43 m/s", color: "red" },
              },
              {
                heading: "(c) Who wins?",
                body: (
                  <p>
                    Solid cylinder is faster at the bottom — and since both started at the same
                    instant, the solid one reaches the bottom first.
                  </p>
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
                    <div className="space-y-1">
                      <p>Energy: m_b·g·h = ½m_b·v² + ½I_p·ω². With ω = v/R and I_p = ½M_p·R²:</p>
                      <p>m_b·g·h = ½m_b·v² + ¼M_p·v² = v²(½m_b + ¼M_p)</p>
                      <p>v² = m_b·g·h / (½m_b + ¼M_p) = 2·9.8·4 / (½·2 + ¼·0.8)</p>
                      <p>v² = 78.4 / 1.2 = 65.33</p>
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
                    <div className="space-y-1">
                      <p>Net energy change: PE_lost = m₁gh − m₂gh = (6−2)·9.8·4 = 156.8 J</p>
                      <p>KE gained: ½(m₁+m₂)v² + ¼M_p·v²</p>
                      <p>156.8 = 4v² + 0.75v² = 4.75v²</p>
                      <p>v² = 33.01</p>
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
                  solutionSteps: <p>Solid cylinder: I = ½MR² = ½·0.2·(0.15)² = 0.5·0.2·0.0225</p>,
                  answer: { value: "I = 0.00225", unit: "kg·m²" },
                },
                {
                  label: "(b)",
                  question: "Speed of the roach just before hitting the floor",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>String constraint: v_roach = r·ω → ω = v/r.</p>
                      <p>Energy: m·g·h = ½m·v² + ½I·ω² = ½m·v² + ¼M·v²</p>
                      <p>v² = m·g·h / (½m + ¼M) = 0.1·9.8·0.7 / (0.05 + 0.05) = 0.686 / 0.1 = 6.86</p>
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
