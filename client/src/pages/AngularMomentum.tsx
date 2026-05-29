import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { WorkedExample, Eq, Why } from "@/components/midterm/WorkedExample";
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
                {
                  symbol: "I",
                  meaning:
                    "moment of inertia about the rotation axis — the rotational version of mass. See the rotational-energy page's 'How to pick I' for shape-by-shape reasoning",
                  units: "kg·m²",
                },
                {
                  symbol: "ω",
                  meaning: "angular velocity (how fast it's spinning)",
                  units: "rad/s",
                },
              ]}
              whenToUse="The rotational analog of momentum p = mv. For a rigid body spinning about a fixed axis, L tells you 'how much rotational motion is locked into the body' — and it's conserved unless external torques act. The squared-shape behavior of I means a body with mass concentrated far from the axis (like a hoop) has more L at the same ω than a compact one (like a sphere)."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Angular momentum (point mass)"
              formula={<div>L = m·v·r⊥ = m·v·r·sin θ</div>}
              variables={[
                {
                  symbol: "m",
                  meaning: "mass of the moving object",
                  units: "kg",
                },
                {
                  symbol: "v",
                  meaning: "the object's linear speed",
                  units: "m/s",
                },
                {
                  symbol: "r",
                  meaning:
                    "distance from the chosen pivot to the object at the moment in question",
                  units: "m",
                },
                {
                  symbol: "θ",
                  meaning:
                    "angle between r and v. Motion straight at or away from the pivot has θ = 0 → L = 0; motion perpendicular to r is fully effective",
                },
                {
                  symbol: "r⊥",
                  meaning:
                    "shortcut: perpendicular distance from the pivot to the object's line of motion (just r·sin θ packaged for convenience)",
                  units: "m",
                },
              ]}
              whenToUse="A flying object can have angular momentum about a pivot it isn't attached to — that's how a thrown brick can transfer spin to a hinged door it hits. Use this when you need L of an object that isn't rigidly attached to the rotation axis: just before a collision, on a trajectory near a pivot, etc. After the collision, the object joins the rigid body and you switch to L = Iω."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Conservation of L"
              formula={<div>L_initial = L_final (if Στ_external = 0)</div>}
              variables={[]}
              whenToUse="The angular version of momentum conservation. If no external torque acts during the event of interest, the system's total L stays the same — even if I changes (skater pulling arms in spins faster) or the system rearranges itself (object hits door, pizza-and-door spin together). Pick the pivot first; check whether the external forces (gravity, hinge reaction) produce zero torque about THAT pivot. Hinge forces and gravity at the pivot point both pass through the pivot, so they have no torque — that's the trick that makes 'pizza hits hinged door' an L-conservation problem."
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
                {
                  symbol: "r",
                  meaning:
                    "distance from the rotation axis to the attached point mass",
                  units: "m",
                },
              ]}
              whenToUse="Moments of inertia just add (about the same axis). When something sticks to a rotating body — pizza embedded in a door, wad of clay landing on a turntable, monkey grabbing a rod — compute the new I_total = I_original + m·r² and use that for the post-event motion. Critical that all I terms are about the SAME axis."
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
                heading: "Decide what's conserved during the collision",
                body: (
                  <>
                    <Why>
                      Three quantities could be candidates for conservation: linear momentum,
                      kinetic energy, and angular momentum. Let's filter them:
                    </Why>
                    <Why>
                      <strong>Linear momentum?</strong> Not for the dropped disc — gravity is
                      acting on it during the fall. But for our axis of interest (the spin
                      axis), gravity is parallel to the axis, so it produces no torque about
                      that axis. The friction-stick interaction between the two cylinders is
                      internal to the system, so it produces no <em>external</em> torque
                      about the axis either. Therefore <strong>angular momentum about the
                      spin axis is conserved</strong>.
                    </Why>
                    <Why>
                      <strong>Kinetic energy?</strong> No. The two surfaces grip onto each
                      other and end up rotating together — this is an <em>inelastic</em>
                      angular collision. Energy is lost to friction during the brief
                      stick-slip-stick transition.
                    </Why>
                  </>
                ),
              },
              {
                heading: "Compute L_initial — only the hollow cylinder is spinning",
                body: (
                  <>
                    <Why>
                      Before the drop, the solid disc is sitting still in your hand (no spin),
                      so its angular momentum is zero. All of L_initial comes from the hollow
                      cylinder.
                    </Why>
                    <Why>
                      For a hollow cylinder (thin-walled tube) about its central axis, the
                      moment of inertia is I_hollow = m·R². So:
                    </Why>
                    <Eq>L_i = I_hollow · ω_i = (m R²) · ω_i = (1.5 R²) · ω_i</Eq>
                    <Why>
                      We'll keep R² symbolic — it'll cancel later.
                    </Why>
                  </>
                ),
              },
              {
                heading: "Compute the new I_total once the disc lands and sticks",
                body: (
                  <>
                    <Why>
                      After the drop, the solid disc is now spinning together with the hollow
                      cylinder at the same ω_f. The combined moment of inertia is the sum of
                      both about the common axis.
                    </Why>
                    <Why>
                      A solid disc about its center has I_solid = ½ M R². So:
                    </Why>
                    <Eq>I_total = I_hollow + I_solid = m·R² + ½·M·R² = R² (m + M/2)</Eq>
                    <Eq>I_total = R² · (1.5 + 2/2) = R² · (1.5 + 1) = 2.5 · R²</Eq>
                  </>
                ),
              },
              {
                heading: "Apply L_initial = L_final and solve for ω_f",
                body: (
                  <>
                    <Why>
                      Set the angular momentum before equal to the angular momentum after:
                    </Why>
                    <Eq>L_i = L_f   →   1.5 R² · ω_i = 2.5 R² · ω_f</Eq>
                    <Why>
                      R² appears on both sides and cancels — meaning the answer doesn't
                      depend on the cylinders' size, only their masses and shapes.
                    </Why>
                    <Eq>ω_f = (1.5 / 2.5) · ω_i = 0.6 · ω_i = 0.6 · 20 = 12 rpm</Eq>
                    <Why>
                      The hollow cylinder slowed from 20 rpm to 12 rpm because it had to
                      "share" its spin with the disc that was at rest. The angular momentum
                      it gives up exactly equals the angular momentum the disc gains.
                    </Why>
                  </>
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
                  <div className="space-y-2">
                    <p>
                      <strong>Pivot choice and conserved quantity.</strong> The hinge can
                      exert any force on the door, but those forces act <em>at</em> the
                      hinge, so they produce zero torque about it. Therefore angular
                      momentum about the hinge is conserved during the brief sticky
                      collision. (Linear momentum is not conserved, because the hinge can
                      exert horizontal force on the system.)
                    </p>
                    <p>
                      <strong>L_initial: only the pizza is moving.</strong> The pizza is a
                      "point mass" flying through space toward the door. For a point mass
                      with velocity v, angular momentum about a chosen axis is L = m·v·r⊥,
                      where r⊥ is the perpendicular distance from the axis to the line of
                      motion. The pizza flies perpendicular to the door and strikes at 0.8 m
                      from the hinge, so r⊥ = 0.8 m:
                    </p>
                    <Eq>L_initial = m_pizza · v · r⊥ = 0.3 · 2 · 0.8 = 0.48 kg·m²/s</Eq>
                    <p>
                      <strong>I_final: door + stuck pizza both rotate together.</strong>
                      The door is a uniform rod rotating about <strong>one end</strong> (the
                      hinge), so its moment of inertia is I_door = ⅓ M L² (NOT ¹/₁₂ M L²,
                      which is for rotation about the center):
                    </p>
                    <Eq>I_door = ⅓ · M_door · L² = ⅓ · 1.5 · (1.0)² = 0.500 kg·m²</Eq>
                    <p>
                      The pizza, stuck at r = 0.8 m, becomes a point mass attached to the
                      rotating door. A point mass at radius r contributes I = m·r²:
                    </p>
                    <Eq>I_pizza = m_pizza · r² = 0.3 · (0.8)² = 0.3 · 0.64 = 0.192 kg·m²</Eq>
                    <Eq>I_total = I_door + I_pizza = 0.500 + 0.192 = 0.692 kg·m²</Eq>
                    <p><strong>Apply conservation:</strong></p>
                    <Eq>L_initial = L_final   →   0.48 = I_total · ω = 0.692 · ω</Eq>
                    <Eq>ω = 0.48 / 0.692 ≈ 0.694 rad/s</Eq>
                  </div>
                ),
                answer: { value: "ω ≈ 0.694", unit: "rad/s" },
              },
              {
                label: "(b)",
                question: "Time for door to rotate ¼ turn (no friction so ω is constant)",
                solutionSteps: (
                  <div className="space-y-2">
                    <p>
                      <strong>After the collision</strong>, with a frictionless hinge and no
                      other torque acting (the hinge force has zero lever arm), the door
                      rotates at constant ω. So this is just θ = ω·t.
                    </p>
                    <p>
                      A quarter turn is 90° = π/2 rad ≈ 1.571 rad. Solve for t:
                    </p>
                    <Eq>t = θ / ω = (π/2) / 0.694 = 1.571 / 0.694 ≈ 2.26 s</Eq>
                    <p>
                      Just over 2 seconds for the door to swing through 90° — slow because
                      the pizza barely had any angular momentum to give the relatively
                      heavy door.
                    </p>
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
