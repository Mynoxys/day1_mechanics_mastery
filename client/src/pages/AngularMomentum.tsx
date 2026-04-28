import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { WorkedExample } from "@/components/midterm/WorkedExample";
import { PracticeProblem } from "@/components/midterm/PracticeProblem";
import { FormulaBlock } from "@/components/midterm/FormulaBlock";

const ACCENT = "#3b82f6"; // blue

export default function AngularMomentum() {
  const [m1, setM1] = useState(1.5);
  const [m2, setM2] = useState(2.0);
  const [omegaInitial, setOmegaInitial] = useState(20);

  // Hollow disc m1: I = m1·R² ; Solid disc m2: I = ½m2·R² ; R cancels
  const I1Frac = m1; // (m1·R²)/R²
  const I2Frac = 0.5 * m2;
  const omegaFinal = (I1Frac / (I1Frac + I2Frac)) * omegaInitial;

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
            Day 4 · Angular Momentum
          </h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container py-12">
        {/* Intro */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            The Conservation Law for Spin
          </h2>
          <div className="prose dark:prose-invert max-w-none space-y-4">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Angular momentum L is the rotational analog of linear momentum p. For a rigid body
              spinning about an axis:
            </p>
            <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-6 my-4">
              <p className="text-2xl font-mono text-center" style={{ color: ACCENT }}>
                L = I ω
              </p>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              For a <strong>point mass</strong> moving past a fixed axis:{" "}
              <span className="font-mono" style={{ color: ACCENT }}>
                L = m v r⊥
              </span>{" "}
              where r⊥ is the perpendicular distance from the axis to the particle's line of
              motion. Equivalently L = m·v·r·sin(θ) where θ is the angle between r and v.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <strong>The conservation law:</strong> if no net external torque acts on a system,
              its total angular momentum is conserved.
              <span className="font-mono" style={{ color: ACCENT }}>
                {" "}
                L_initial = L_final.
              </span>{" "}
              This is the rotational version of "momentum is conserved in collisions."
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <strong>The intuitions:</strong>
            </p>
            <ul className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed list-disc list-inside ml-4 space-y-2">
              <li>
                <strong>Ice skater pulling in arms:</strong> arms in → smaller I → faster ω. L
                stays put.
              </li>
              <li>
                <strong>Cat dropped upside down:</strong> with no external torque, can still
                rotate by rearranging its body — twisting one part one way and the other the
                opposite way preserves L=0.
              </li>
              <li>
                <strong>Pizza striking a door:</strong> the pizza brings angular momentum about the
                hinge into the door; after the perfectly inelastic collision, that L is shared
                between pizza-plus-door.
              </li>
            </ul>
          </div>
        </section>

        {/* Simulator */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Drop-a-Disc Simulator
          </h3>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="interactive-panel">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Solid disc dropped onto spinning hollow cylinder
              </h4>

              <svg
                width={500}
                height={350}
                className="border border-gray-200 dark:border-slate-600 rounded-lg mb-6 bg-gray-50 dark:bg-slate-700"
              >
                {/* Initial state (left side) */}
                <text x="100" y="30" fontSize="12" fontWeight="bold" fill="#1f2937" textAnchor="middle">
                  BEFORE
                </text>
                {/* Hollow cylinder spinning */}
                <circle cx="100" cy="180" r="60" fill="none" stroke="#1f2937" strokeWidth="3" />
                <text x="100" y="184" textAnchor="middle" fontSize="11" fill="#1f2937">
                  Hollow {m1.toFixed(1)} kg
                </text>
                <text x="100" y="265" textAnchor="middle" fontSize="11" fill="#1f2937">
                  ω = {omegaInitial} rpm
                </text>
                {/* Spin arrow */}
                <path
                  d="M 70 130 A 40 40 0 1 1 130 130"
                  fill="none"
                  stroke={ACCENT}
                  strokeWidth="2"
                />
                <polygon points="130,130 124,124 130,118" fill={ACCENT} />

                {/* Solid disc above */}
                <circle cx="100" cy="80" r="40" fill={ACCENT} fillOpacity="0.7" stroke="#1e3a8a" strokeWidth="2" />
                <text x="100" y="85" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">
                  Solid {m2.toFixed(1)} kg
                </text>
                <line x1="100" y1="120" x2="100" y2="135" stroke="#7c3aed" strokeWidth="2" />
                <polygon points="100,135 96,130 104,130" fill="#7c3aed" />
                <text x="115" y="125" fontSize="10" fill="#7c3aed">
                  drops
                </text>

                {/* AFTER */}
                <text x="370" y="30" fontSize="12" fontWeight="bold" fill="#1f2937" textAnchor="middle">
                  AFTER
                </text>
                {/* Combined cylinders */}
                <circle cx="370" cy="180" r="60" fill="none" stroke="#1f2937" strokeWidth="3" />
                <circle cx="370" cy="180" r="40" fill={ACCENT} fillOpacity="0.7" stroke="#1e3a8a" strokeWidth="2" />
                <text x="370" y="184" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">
                  combined
                </text>
                <text x="370" y="265" textAnchor="middle" fontSize="11" fill="#1f2937" fontWeight="bold">
                  ω' = {omegaFinal.toFixed(2)} rpm
                </text>
                {/* Spin arrow (slower) */}
                <path
                  d="M 340 130 A 40 40 0 1 1 400 130"
                  fill="none"
                  stroke={ACCENT}
                  strokeWidth="2"
                />
                <polygon points="400,130 394,124 400,118" fill={ACCENT} />

                {/* L conservation arrow */}
                <line
                  x1="170"
                  y1="180"
                  x2="290"
                  y2="180"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                />
                <polygon points="290,180 282,176 282,184" fill="#10b981" />
                <text x="230" y="170" textAnchor="middle" fontSize="11" fill="#10b981" fontWeight="bold">
                  L conserved
                </text>
              </svg>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Hollow cyl. mass m₁: {m1.toFixed(1)} kg (I₁ = m₁R²)
                  </label>
                  <Slider value={[m1]} onValueChange={(v) => setM1(v[0])} min={0.5} max={5} step={0.1} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Solid disc mass m₂: {m2.toFixed(1)} kg (I₂ = ½m₂R²)
                  </label>
                  <Slider value={[m2]} onValueChange={(v) => setM2(v[0])} min={0.5} max={5} step={0.1} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Initial ω: {omegaInitial} rpm
                  </label>
                  <Slider
                    value={[omegaInitial]}
                    onValueChange={(v) => setOmegaInitial(v[0])}
                    min={0}
                    max={100}
                    step={1}
                  />
                </div>
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="interactive-panel">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Conservation in action
                </h4>
                <div className="space-y-3 font-mono text-sm">
                  <div className="bg-amber-50 dark:bg-amber-900 p-4 rounded border-l-4 border-l-amber-600">
                    <p>
                      <strong>L_initial = I₁·ω_i</strong> (only hollow is spinning)
                    </p>
                    <p>= m₁R²·ω_i = {m1.toFixed(1)}·R²·{omegaInitial}</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded border-l-4 border-l-blue-600">
                    <p>
                      <strong>L_final = (I₁ + I₂)·ω_f</strong>
                    </p>
                    <p>= (m₁R² + ½m₂R²)·ω_f = R²({I1Frac.toFixed(2)} + {I2Frac.toFixed(2)})·ω_f</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded border-l-4 border-l-purple-600">
                    <p>
                      <strong>Set equal, R² cancels:</strong>
                    </p>
                    <p>
                      ω_f = m₁ / (m₁ + ½m₂) · ω_i = {(I1Frac / (I1Frac + I2Frac)).toFixed(3)}·{omegaInitial}
                    </p>
                    <p className="font-bold text-purple-600 dark:text-purple-400">
                      ω_f = {omegaFinal.toFixed(2)} rpm
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="interactive-panel" style={{ borderLeftWidth: 4, borderLeftColor: ACCENT }}>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Try this:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li>• Set m₂ = 0: nothing dropped → ω_f = ω_i. ✓</li>
                  <li>• Make m₂ huge compared to m₁: ω_f → 0. The spinning disc is "stalled" by the heavy load.</li>
                  <li>• Notice R never appears — same answer regardless of cylinder size, as long as both have the same R.</li>
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
              name="Angular momentum (rigid body)"
              formula={<div>L = I ω</div>}
              variables={[
                { symbol: "I", meaning: "moment of inertia about rotation axis", units: "kg·m²" },
                { symbol: "ω", meaning: "angular velocity", units: "rad/s" },
              ]}
              whenToUse="When the object is a rigid body rotating about a fixed axis."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Angular momentum (point mass)"
              formula={<div>L = m·v·r⊥ = m·v·r·sin θ</div>}
              variables={[
                { symbol: "m", meaning: "mass", units: "kg" },
                { symbol: "v", meaning: "linear speed", units: "m/s" },
                { symbol: "r", meaning: "distance from axis to mass", units: "m" },
                { symbol: "θ", meaning: "angle between r-vector and v-vector" },
              ]}
              whenToUse="A flying object passing near (or hitting) a fixed pivot — e.g., pizza striking a door at the hinge."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Conservation of L"
              formula={<div>L_initial = L_final (if Στ_external = 0)</div>}
              variables={[]}
              whenToUse="No external torques during the event of interest. Cylinder-on-cylinder drops, pizza-on-door collisions, ice skater spins."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Combining I from multiple parts"
              formula={
                <div className="space-y-1 text-base">
                  <div>I_total = I_body + I_attached_mass</div>
                  <div className="text-sm">I_attached = m·r² (point mass at radius r)</div>
                </div>
              }
              variables={[
                { symbol: "r", meaning: "distance from axis to attached point mass", units: "m" },
              ]}
              whenToUse="A point mass stuck to a rotating body — like the pizza embedded in the door at 0.8 m from the hinge."
            />
          </div>
        </section>

        {/* Worked Example */}
        <section className="mb-16">
          <WorkedExample
            accentColor={ACCENT}
            title="Solid Disc Dropped onto Spinning Hollow Cylinder"
            problemStatement={
              <p>
                A hollow cylinder of mass <strong>m = 1.5 kg</strong> is spinning at{" "}
                <strong>ω = 20 rpm</strong>. You drop a solid cylinder of mass{" "}
                <strong>M = 2 kg</strong> on top of it (assume same radius R, so it lands centered).
                What is the final angular velocity ω_f?
              </p>
            }
            steps={[
              {
                heading: "Identify what's conserved",
                body: (
                  <p>
                    The drop is brief and the floor exerts no horizontal torque about the spin
                    axis. So <strong>L is conserved</strong>. Note: KE is NOT conserved (this is an
                    inelastic collision).
                  </p>
                ),
              },
              {
                heading: "Initial L (only hollow is spinning)",
                body: (
                  <p>
                    I_hollow = mR², so L_i = mR²·ω_i = 1.5·R²·20 (in rpm·R² units — keep the units symbolic for now).
                  </p>
                ),
              },
              {
                heading: "Final I (both spinning together)",
                body: (
                  <p>
                    I_solid = ½MR². I_total = mR² + ½MR² = R²·(m + M/2) = R²·(1.5 + 1) = 2.5·R²
                  </p>
                ),
              },
              {
                heading: "Apply L_i = L_f and cancel R²",
                body: (
                  <div className="space-y-1">
                    <p>1.5·R²·ω_i = 2.5·R²·ω_f</p>
                    <p>ω_f = (1.5/2.5)·ω_i = 0.6·20</p>
                  </div>
                ),
                result: { label: "ω_f", value: "= 12 rpm", color: "blue" },
              },
            ]}
            keyInsight={
              <>
                R never appears in the final answer — the cylinders could be any size as long as
                they're the same R. Only the <em>shape factors</em> (1 for hollow, ½ for solid) and
                the masses matter. This is why the textbook expects you to "drop the solid on top"
                without specifying a radius.
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
            title="The Pizza-Stained Door"
            statement={
              <p>
                Your slovenly roommate left the dorm door open <em>again</em>. You fling a slice of
                pizza (<strong>m = 0.3 kg</strong>) at <strong>v = 2 m/s</strong>. It strikes the
                door <strong>0.8 m</strong> from the hinge and sticks. The door has mass{" "}
                <strong>1.5 kg</strong> and width <strong>1.0 m</strong>. Find (a) the angular
                velocity ω of the door just after impact, and (b) the time for the door to rotate ¼
                turn (assume frictionless hinge).
              </p>
            }
            parts={[
              {
                label: "(a)",
                question: "Angular velocity ω of the pizza-stained door just after the collision",
                solutionSteps: (
                  <div className="space-y-1">
                    <p>Pizza moves perpendicular to door at impact. L_pizza about the hinge = m·v·r:</p>
                    <p>L = 0.3 · 2 · 0.8 = 0.48 kg·m²/s</p>
                    <p>I_door (rod about end) = ⅓ML² = ⅓·1.5·(1.0)² = 0.5 kg·m²</p>
                    <p>I_pizza_now (point at r=0.8) = m·r² = 0.3·0.64 = 0.192 kg·m²</p>
                    <p>I_total = 0.5 + 0.192 = 0.692 kg·m²</p>
                    <p>L_initial = L_final → 0.48 = 0.692·ω</p>
                  </div>
                ),
                answer: { value: "ω ≈ 0.694", unit: "rad/s" },
              },
              {
                label: "(b)",
                question: "Time for door to rotate ¼ turn (no friction so ω is constant)",
                solutionSteps: (
                  <div className="space-y-1">
                    <p>θ = π/2 rad, ω = 0.694 rad/s, constant.</p>
                    <p>t = θ/ω = (π/2) / 0.694 = 1.571 / 0.694</p>
                  </div>
                ),
                answer: { value: "t ≈ 2.26", unit: "s" },
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
                  <strong>Forgetting to add the pizza's I to the door's I after sticking.</strong>{" "}
                  Once attached, the pizza becomes part of the rotating body and contributes m·r²
                  to the total I.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">×</span>
                <span>
                  <strong>Using only the velocity component along v.</strong> L = mvr⊥ — only the
                  velocity component <em>perpendicular</em> to the radial line counts. If pizza
                  flew straight at the hinge, L would be zero.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">×</span>
                <span>
                  <strong>Assuming KE is conserved in inelastic collisions.</strong> When pizza
                  sticks, kinetic energy is lost (to deformation, sound, heat). Only L is
                  conserved. Same as linear sticky collisions.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">×</span>
                <span>
                  <strong>Wrong I for the door.</strong> The door rotates about its <em>edge</em>{" "}
                  (the hinge), not its center. So I = ⅓ML², not ¹/₁₂ML².
                </span>
              </li>
            </ul>
          </Card>
        </section>

        {/* Next */}
        <section className="text-center py-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Day 5: Simple Harmonic Motion
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Springs, pendulums, and the math of oscillation.
          </p>
          <Link href="/shm">
            <Button
              className="text-white px-8 py-4 text-lg rounded-lg"
              style={{ backgroundColor: "#f59e0b" }}
            >
              Continue to SHM <ChevronRight className="w-5 h-5 ml-2 inline" />
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
