import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { WorkedExample, Eq, Why } from "@/components/midterm/WorkedExample";
import { PracticeProblem } from "@/components/midterm/PracticeProblem";
import { FormulaBlock } from "@/components/midterm/FormulaBlock";

const ACCENT = "#c026d3"; // fuchsia

export default function Torque() {
  const [forceMag, setForceMag] = useState(10);
  const [leverArm, setLeverArm] = useState(1.0);
  const [angleDeg, setAngleDeg] = useState(60);

  const angleRad = (angleDeg * Math.PI) / 180;
  const torque = leverArm * forceMag * Math.sin(angleRad);
  const perpLeverArm = leverArm * Math.sin(angleRad);

  // SVG geometry: bar pivoted at left (60, 200), extends right
  const pivotX = 60;
  const pivotY = 200;
  const barLength = 350;
  const forcePoint = { x: pivotX + leverArm * (barLength / 2.5), y: pivotY };
  const forceLen = Math.min(forceMag * 6, 80);
  const fx = forcePoint.x + forceLen * Math.cos(-angleRad);
  const fy = forcePoint.y - forceLen * Math.sin(angleRad);

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
            Day 2 · Torque & Statics
          </h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container py-12">
        {/* Intro */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            What Causes Things to Spin
          </h2>
          <div className="prose dark:prose-invert max-w-none space-y-4">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Torque is the rotational analog of force. A force <em>pushes</em> things in a line;
              a torque <em>twists</em> things around an axis. The amount of twist depends on{" "}
              <strong>how hard</strong> you push and{" "}
              <strong>where you push</strong>:
            </p>
            <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-6 my-4">
              <p className="text-2xl font-mono text-center" style={{ color: ACCENT }}>
                τ = r · F · sin θ = (lever arm) · F
              </p>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              The "lever arm" is the perpendicular distance from the pivot to the line of action
              of the force. <strong>That's why a longer wrench works better:</strong> bigger r, same
              F, bigger τ. That's why door knobs are far from the hinge: same physics.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Two big things to do with torque:
            </p>
            <ul className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed list-disc list-inside ml-4 space-y-2">
              <li>
                <strong>Newton's 2nd for rotation:</strong>{" "}
                <span className="font-mono" style={{ color: ACCENT }}>
                  Στ = Iα
                </span>{" "}
                — net torque produces angular acceleration. Used for yoyos, pulleys with mass,
                anything actively spinning up.
              </li>
              <li>
                <strong>Statics:</strong>{" "}
                <span className="font-mono" style={{ color: ACCENT }}>
                  ΣF = 0 AND Στ = 0
                </span>{" "}
                — for objects in equilibrium. Used for ladders, signs, diving boards. The two
                conditions together let you solve for unknown forces and reactions.
              </li>
            </ul>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              The <strong>massive trick</strong> in static-equilibrium problems: you can choose{" "}
              <em>any</em> point as your pivot. Pick the pivot at the unknown force you don't
              want to solve for — its lever arm is zero, so it disappears from the torque equation.
            </p>
          </div>
        </section>

        {/* Simulator */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Lever-Arm Simulator
          </h3>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="interactive-panel">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Force on a Bar
              </h4>

              <svg
                width={500}
                height={350}
                className="border border-gray-200 dark:border-slate-600 rounded-lg mb-6 bg-gray-50 dark:bg-slate-700"
              >
                {/* Wall */}
                <rect x="20" y="100" width="30" height="200" fill="#4b5563" />
                <pattern
                  id="wall-hatch"
                  width="8"
                  height="8"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(45)"
                >
                  <line x1="0" y1="0" x2="0" y2="8" stroke="#1f2937" strokeWidth="1" />
                </pattern>
                <rect x="20" y="100" width="30" height="200" fill="url(#wall-hatch)" />

                {/* Pivot */}
                <circle cx={pivotX} cy={pivotY} r="6" fill="#1f2937" />
                <text x={pivotX - 15} y={pivotY + 25} fontSize="11" fill="#374151">
                  pivot
                </text>

                {/* Bar */}
                <line
                  x1={pivotX}
                  y1={pivotY}
                  x2={pivotX + barLength}
                  y2={pivotY}
                  stroke="#374151"
                  strokeWidth="6"
                />

                {/* Distance r marker */}
                <line
                  x1={pivotX}
                  y1={pivotY + 18}
                  x2={forcePoint.x}
                  y2={forcePoint.y + 18}
                  stroke={ACCENT}
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                />
                <line
                  x1={pivotX}
                  y1={pivotY + 14}
                  x2={pivotX}
                  y2={pivotY + 22}
                  stroke={ACCENT}
                  strokeWidth="1.5"
                />
                <line
                  x1={forcePoint.x}
                  y1={forcePoint.y + 14}
                  x2={forcePoint.x}
                  y2={forcePoint.y + 22}
                  stroke={ACCENT}
                  strokeWidth="1.5"
                />
                <text
                  x={(pivotX + forcePoint.x) / 2 - 10}
                  y={pivotY + 35}
                  fontSize="11"
                  fill={ACCENT}
                  fontWeight="bold"
                >
                  r = {leverArm.toFixed(2)} m
                </text>

                {/* Force point dot */}
                <circle cx={forcePoint.x} cy={forcePoint.y} r="4" fill="#1f2937" />

                {/* Force vector */}
                <line
                  x1={forcePoint.x}
                  y1={forcePoint.y}
                  x2={fx}
                  y2={fy}
                  stroke="#1e40af"
                  strokeWidth="3"
                />
                <polygon
                  points={(() => {
                    const dx = fx - forcePoint.x;
                    const dy = fy - forcePoint.y;
                    const len = Math.hypot(dx, dy);
                    if (len < 1) return "0,0";
                    const ux = dx / len;
                    const uy = dy / len;
                    const px = -uy;
                    const py = ux;
                    return `${fx},${fy} ${fx - 8 * ux + 5 * px},${fy - 8 * uy + 5 * py} ${fx - 8 * ux - 5 * px},${fy - 8 * uy - 5 * py}`;
                  })()}
                  fill="#1e40af"
                />
                <text x={fx + 6} y={fy - 6} fontSize="12" fill="#1e40af" fontWeight="bold">
                  F = {forceMag.toFixed(1)} N
                </text>

                {/* Angle arc */}
                <path
                  d={`M ${forcePoint.x + 25} ${forcePoint.y} A 25 25 0 0 0 ${
                    forcePoint.x + 25 * Math.cos(-angleRad)
                  } ${forcePoint.y - 25 * Math.sin(angleRad)}`}
                  stroke="#dc2626"
                  strokeWidth="2"
                  fill="none"
                />
                <text
                  x={forcePoint.x + 32}
                  y={forcePoint.y - 8}
                  fontSize="11"
                  fill="#dc2626"
                  fontWeight="bold"
                >
                  θ = {angleDeg}°
                </text>

                {/* Perpendicular lever arm visualization */}
                <line
                  x1={pivotX}
                  y1={pivotY}
                  x2={pivotX + perpLeverArm * (barLength / 2.5) * Math.cos(angleRad - Math.PI / 2)}
                  y2={pivotY + perpLeverArm * (barLength / 2.5) * Math.sin(angleRad - Math.PI / 2)}
                  stroke="#10b981"
                  strokeWidth="1.5"
                  strokeDasharray="2 4"
                />
                <text x={pivotX + 10} y={pivotY - 8} fontSize="10" fill="#10b981">
                  perp lever arm = r sin θ = {perpLeverArm.toFixed(2)} m
                </text>

                {/* Torque readout */}
                <rect x="280" y="20" width="200" height="50" fill="#fdf4ff" stroke={ACCENT} strokeWidth="1.5" rx="6" />
                <text x="380" y="42" textAnchor="middle" fontSize="13" fill="#6b21a8" fontWeight="bold">
                  τ = r · F · sin θ
                </text>
                <text x="380" y="62" textAnchor="middle" fontSize="14" fill={ACCENT} fontWeight="bold">
                  = {torque.toFixed(2)} N·m
                </text>
              </svg>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Force magnitude F: {forceMag.toFixed(1)} N
                  </label>
                  <Slider value={[forceMag]} onValueChange={(v) => setForceMag(v[0])} min={0} max={30} step={0.5} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Distance from pivot r: {leverArm.toFixed(2)} m
                  </label>
                  <Slider value={[leverArm]} onValueChange={(v) => setLeverArm(v[0])} min={0.1} max={2.5} step={0.05} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Angle θ between r and F: {angleDeg}°
                  </label>
                  <Slider value={[angleDeg]} onValueChange={(v) => setAngleDeg(v[0])} min={0} max={180} step={5} />
                </div>
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="interactive-panel">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  What this tells you
                </h4>
                <div className="space-y-3 font-mono text-sm">
                  <div className="bg-amber-50 dark:bg-amber-900 p-4 rounded border-l-4 border-l-amber-600">
                    <p>
                      <strong>τ = r·F·sin θ</strong>
                    </p>
                    <p>
                      = {leverArm.toFixed(2)} · {forceMag.toFixed(1)} · sin({angleDeg}°)
                    </p>
                    <p>
                      = {leverArm.toFixed(2)} · {forceMag.toFixed(1)} · {Math.sin(angleRad).toFixed(3)}
                    </p>
                    <p className="font-bold text-amber-600 dark:text-amber-400">
                      τ = {torque.toFixed(3)} N·m
                    </p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded border-l-4 border-l-blue-600">
                    <p>
                      <strong>Equivalent view: lever-arm × force</strong>
                    </p>
                    <p>
                      perpendicular lever arm = r·sin θ = {perpLeverArm.toFixed(3)} m
                    </p>
                    <p>τ = (lever arm) · F = {perpLeverArm.toFixed(3)} · {forceMag.toFixed(1)}</p>
                    <p className="font-bold text-blue-600 dark:text-blue-400">
                      = {(perpLeverArm * forceMag).toFixed(3)} N·m ✓
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="interactive-panel" style={{ borderLeftWidth: 4, borderLeftColor: ACCENT }}>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Try this:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li>• Set θ = 0° or 180°: torque is zero. Force pulls along the bar — can't twist it.</li>
                  <li>• Set θ = 90°: maximum torque for a given r and F.</li>
                  <li>
                    • Hold F and θ fixed; double r. Torque doubles. That's why a 2-foot wrench
                    beats a 1-foot wrench.
                  </li>
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
              name="Torque"
              formula={<div>τ = r · F · sin θ = (lever arm) · F</div>}
              variables={[
                {
                  symbol: "r",
                  meaning:
                    "distance from the pivot to the point where the force acts — the longer this is, the more leverage you have",
                  units: "m",
                },
                {
                  symbol: "F",
                  meaning: "size of the force you're applying",
                  units: "N",
                },
                {
                  symbol: "θ",
                  meaning:
                    "angle between r and F. Force perpendicular to r is fully effective (θ = 90° → sin θ = 1); force along r does NOTHING (θ = 0° → sin θ = 0)",
                  units: "rad or °",
                },
                {
                  symbol: "lever arm",
                  meaning:
                    "shortcut: the perpendicular distance from the pivot to the LINE the force is acting along (just r·sin θ, packaged for convenience)",
                  units: "m",
                },
              ]}
              whenToUse="Torque is the rotational version of force — how much something will tend to spin around a pivot. The lever-arm version is the practical one: if you can't see the angle clearly, draw the line of force, then drop a perpendicular from the pivot to that line. The length of that perpendicular IS the lever arm. Pushing on a door near the hinges takes a lot more force than pushing near the handle — same physics."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Newton's 2nd for rotation"
              formula={<div>Στ = Iα</div>}
              variables={[
                {
                  symbol: "Στ",
                  meaning:
                    "net torque (sum of all torques, signed by direction — typically CCW positive) about the chosen axis",
                  units: "N·m",
                },
                {
                  symbol: "I",
                  meaning:
                    "moment of inertia about that axis — how mass is distributed relative to the axis. See the rotational-energy page's 'How to pick I' section for the reasoning",
                  units: "kg·m²",
                },
                {
                  symbol: "α",
                  meaning: "angular acceleration — how quickly the spin rate is changing",
                  units: "rad/s²",
                },
              ]}
              whenToUse="The rotational analog of F = ma. Torque is what makes things spin; I is the rotational version of mass (resistance to angular acceleration); α is the rotational acceleration. Use whenever the body's α ≠ 0 — yoyos unwinding, pulleys spinning up, rods falling. Pick the axis carefully: smart pivot choice can eliminate unknowns from your equation."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Static Equilibrium"
              formula={
                <div className="space-y-2">
                  <div>ΣF_x = 0</div>
                  <div>ΣF_y = 0</div>
                  <div>Στ_about-any-pivot = 0</div>
                </div>
              }
              variables={[]}
              whenToUse="The conditions for an object to be at rest (or moving at constant velocity AND not spinning up): no net force in any direction AND no net torque about ANY pivot. The 'any pivot' part is your superpower: you can pick the pivot to make an unknown force have zero lever arm, eliminating it from the torque equation. Classic move: place pivot at one of the supports of a beam to kill the reaction force at that support."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Common moments of inertia"
              formula={
                <div className="space-y-1 text-base">
                  <div>Solid cylinder/disk: I = ½MR²</div>
                  <div>Hollow cylinder/hoop: I = MR²</div>
                  <div>Solid sphere: I = ⅖MR²</div>
                  <div>Rod about center: I = ¹/₁₂ ML²</div>
                  <div>Rod about end: I = ⅓ ML²</div>
                  <div>Point mass at radius r: I = mr²</div>
                </div>
              }
              variables={[
                {
                  symbol: "M, L, R",
                  meaning: "mass, length, radius of the body",
                },
              ]}
              whenToUse="The bigger the I, the harder to spin up. Hollow > solid (mass at the rim costs more). Sphere < cylinder of same M, R (sphere mass is also along the axis). Rod about end > rod about center (mass farther from axis). For axes not through the center of mass, use the parallel-axis theorem: I = I_cm + Md². See the rotational-energy page's 'How to pick I' for the reasoning behind these numbers."
            />
          </div>
        </section>

        {/* Worked Example 1: Simple Yoyo */}
        <section className="mb-16">
          <WorkedExample
            accentColor={ACCENT}
            title="Simple Yoyo (string wrapped around outside)"
            problemStatement={
              <p>
                A yoyo of mass <strong>M = 0.20 kg</strong> and radius <strong>R = 0.01 m</strong>{" "}
                has a string wrapped around its outside. Released from rest, the string unwinds and
                the yoyo accelerates straight down. Find <strong>(a) acceleration a</strong> and{" "}
                <strong>(b) tension T</strong> in the string. Treat the yoyo as a solid cylinder.
              </p>
            }
            steps={[
              {
                heading: "Identify the three physics relationships at play",
                body: (
                  <>
                    <Why>
                      A yoyo is doing two things at once: its center of mass is falling, and
                      it's spinning around that center. So we need <strong>two</strong> Newton
                      laws — one for translation (linear motion of the center of mass) and one
                      for rotation (about the center). Plus we need a <strong>geometric
                      constraint</strong> linking the two, because the string isn't slipping on
                      the body.
                    </Why>
                    <Why>
                      <strong>Translation (taking down as positive):</strong> two forces act on
                      the yoyo — gravity Mg pulling it down, and the string tension T pulling
                      it up. Newton's 2nd along the vertical:
                    </Why>
                    <Eq>Mg − T = M · a    ...(1)</Eq>
                    <Why>
                      <strong>Rotation about the center of mass:</strong> only the tension
                      produces a torque about the center. Gravity acts <em>at</em> the center,
                      so its torque is zero. The tension pulls tangent to the rim at radius R,
                      so its torque magnitude is T·R. The body resists with I = ½MR² (solid
                      cylinder):
                    </Why>
                    <Eq>τ_net = I · α   →   T · R = (½ M R²) · α    ...(2)</Eq>
                    <Why>
                      <strong>Geometric constraint (no slipping):</strong> as the body rotates
                      by dθ, the string unwinds by R·dθ. Since the string is fixed at the top,
                      the center of the yoyo must descend by exactly that same amount. Taking
                      time derivatives:
                    </Why>
                    <Eq>a = R · α    →    α = a / R    ...(3)</Eq>
                  </>
                ),
              },
              {
                heading: "Use the constraint to eliminate α from the rotation equation",
                body: (
                  <>
                    <Why>
                      We have three unknowns (T, a, α) and three equations. The cleanest move
                      is to substitute α = a/R from (3) into (2) so we get a relationship
                      between T and a only:
                    </Why>
                    <Eq>T · R = ½ M R² · (a / R) = ½ M R · a</Eq>
                    <Why>
                      Divide both sides by R:
                    </Why>
                    <Eq>T = ½ M · a    ...(2′)</Eq>
                    <Why>
                      Read this physically: the tension is exactly half what's needed to give
                      the yoyo's mass an acceleration of a. The other half of the force needed
                      goes into spinning it up.
                    </Why>
                  </>
                ),
              },
              {
                heading: "(a) Combine to solve for the linear acceleration",
                body: (
                  <>
                    <Why>
                      Substitute T = ½Ma from (2′) into the translation equation (1):
                    </Why>
                    <Eq>M g − ½ M a = M a</Eq>
                    <Why>
                      Mass M cancels everywhere — that's the first hint that the answer
                      doesn't depend on how heavy the yoyo is. Move all the a-terms to the
                      right:
                    </Why>
                    <Eq>g = a + ½ a = (3/2) · a</Eq>
                    <Eq>a = (2/3) · g = (2/3) · 9.8 ≈ 6.53 m/s²</Eq>
                    <Why>
                      So the yoyo falls at about 2/3 of free-fall acceleration. The other 1/3
                      of g doesn't get to accelerate the center of mass — it goes into spinning
                      the yoyo up.
                    </Why>
                  </>
                ),
                result: { label: "(a) a", value: "(2/3)·9.8 ≈ 6.53 m/s²", color: "purple" },
              },
              {
                heading: "(b) Plug a back into T = ½Ma to get the tension",
                body: (
                  <>
                    <Why>
                      Now that we know a, we just feed it into the cleaner expression T = ½Ma:
                    </Why>
                    <Eq>T = ½ · M · a = ½ · 0.20 kg · 6.53 m/s² ≈ 0.653 N</Eq>
                    <Why>
                      Sanity check: gravity pulls down with Mg = 0.20 · 9.8 = 1.96 N. The
                      tension only needs to be 0.653 N because the yoyo isn't held in place —
                      it's accelerating downward. The net force Mg − T = 1.96 − 0.65 = 1.31 N,
                      and Ma = 0.20 · 6.53 = 1.31 N. They match. ✓
                    </Why>
                  </>
                ),
                result: { label: "(b) T", value: "≈ 0.653 N", color: "purple" },
              },
            ]}
            keyInsight={
              <>
                Notice <strong>R cancels out</strong> in the answer for a — every solid-cylinder
                yoyo (regardless of size) accelerates at (2/3)g. The size only affects the tension
                when M changes. That's the same factor (2/3) that shows up in the cylinder-race
                problem in Day 3.
              </>
            }
          />
        </section>

        {/* Worked Example 2: Diving Board */}
        <section className="mb-16">
          <WorkedExample
            accentColor={ACCENT}
            title="Diving Board (statics — pick the pivot wisely)"
            problemStatement={
              <p>
                You stand at the end of a diving board: <strong>length 5 m</strong>, mass{" "}
                <strong>20 kg uniform</strong>, supported by a <strong>left support at x=0</strong>{" "}
                and a <strong>center support at x=1 m</strong>. You (mass <strong>80 kg</strong>)
                stand at the right end, x=5 m. Find both support forces.
              </p>
            }
            steps={[
              {
                heading: "Inventory the forces and pick a smart pivot",
                body: (
                  <>
                    <Why>
                      Four vertical forces act on the board: F_left (the left support, unknown
                      sign), F_center (the center support, unknown), the board's own weight
                      W_board = 20·9.8 = 196 N pulling down at the midpoint x = 2.5 m (uniform
                      board), and your weight W_you = 80·9.8 = 784 N pulling down at x = 5 m.
                    </Why>
                    <Why>
                      Because the board is in static equilibrium, ΣF = 0 and Στ = 0 about
                      <em>any</em> chosen pivot. <strong>The trick</strong>: choose the pivot
                      so that one of the unknowns sits on it. The lever arm of a force at the
                      pivot is zero, so its torque is zero, and it disappears from the torque
                      equation. Picking the pivot at the LEFT support kills F_left from the
                      torque sum, leaving F_center as the only unknown there.
                    </Why>
                  </>
                ),
              },
              {
                heading: "Sum torques about x=0 (counter-clockwise = positive)",
                body: (
                  <>
                    <Why>
                      Each torque is (force) × (perpendicular distance from pivot). Forces
                      pushing UP on the board to the right of the pivot rotate it
                      counter-clockwise (positive). Forces pulling DOWN to the right rotate it
                      clockwise (negative).
                    </Why>
                    <Eq>+F_center · 1 m   (center support lifts up at x=1 m, CCW)</Eq>
                    <Eq>− W_board · 2.5 m = −(20·9.8)·2.5 = −490 N·m   (board weight, CW)</Eq>
                    <Eq>− W_you · 5 m = −(80·9.8)·5 = −3920 N·m   (your weight at end, CW)</Eq>
                    <Why>
                      Setting the sum to zero (equilibrium):
                    </Why>
                    <Eq>F_center · 1 − 490 − 3920 = 0</Eq>
                    <Eq>F_center = 4410 N (upward)</Eq>
                    <Why>
                      That's much bigger than the total weight on the board (196 + 784 = 980
                      N). The center support has to push hugely upward because the long lever
                      arm of your weight (×5) needs balancing by the short lever arm of the
                      center support (×1).
                    </Why>
                  </>
                ),
                result: { label: "F_center", value: "≈ 4410 N (up)", color: "green" },
              },
              {
                heading: "Use ΣF_y = 0 to find the left-support force",
                body: (
                  <>
                    <Why>
                      Now we use the second equilibrium condition: total vertical force is
                      zero. Up is positive, down is negative:
                    </Why>
                    <Eq>F_left + F_center − W_board − W_you = 0</Eq>
                    <Eq>F_left + 4410 − 196 − 784 = 0</Eq>
                    <Eq>F_left = 980 − 4410 = −3430 N</Eq>
                    <Why>
                      The negative sign means our initial assumption was wrong: F_left isn't
                      pushing UP on the board, it's pulling DOWN with a magnitude of 3430 N.
                      That makes physical sense — without something pulling the left end down,
                      the board would lever upward around the center support like a seesaw.
                      That's why diving boards are <em>bolted</em> at the deck end, not just
                      rested.
                    </Why>
                  </>
                ),
                result: { label: "F_left", value: "≈ −3430 N (i.e., pulls DOWN)", color: "red" },
              },
            ]}
            keyInsight={
              <>
                The negative sign on F_left is real and meaningful: the bolts at the left edge must{" "}
                <strong>pull the board down</strong> to keep it from levering up around the center
                support. This is why diving boards are bolted (not just rested) at the deck end.
              </>
            }
          />
        </section>

        {/* Practice Problems */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Practice Problems (5)
          </h3>
          <div className="space-y-6">
            <PracticeProblem
              accentColor={ACCENT}
              title="Yoyo with separate body and shaft"
              statement={
                <p>
                  Same setup as the simple yoyo, but now the string wraps around a thin shaft of
                  radius <strong>r = 0.002 m</strong>, while the yoyo body has radius{" "}
                  <strong>R = 0.04 m</strong>. Mass <strong>m = 0.100 kg</strong>; treat the body
                  as a solid cylinder of radius R. Find downward acceleration and string tension.
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: "Downward acceleration of the yoyo",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>Why this is different from the simple yoyo.</strong> Here
                        there are two distinct radii. The string wraps around a small shaft
                        (r = 2 mm), but the body that's spinning is much larger (R = 4 cm).
                        That changes two things: the torque arm of the tension is now r (not
                        R), and the no-slip constraint applies at the shaft, not at the body.
                        But the moment of inertia of the spinning body is still based on its
                        actual shape — I = ½mR².
                      </p>
                      <p><strong>Set up the three equations:</strong></p>
                      <Eq>Translation: m·g − T = m·a    ...(1)</Eq>
                      <Eq>Rotation: T · r = I · α = ½ m R² · α    ...(2)</Eq>
                      <Eq>Constraint at shaft: a = r·α   →   α = a/r    ...(3)</Eq>
                      <p>
                        <strong>Step 1 — Solve rotation for T.</strong> Substitute (3) into
                        (2):
                      </p>
                      <Eq>T · r = ½ m R² · (a / r)   →   T = m R² a / (2 r²)</Eq>
                      <p>
                        <strong>Step 2 — Substitute into translation:</strong>
                      </p>
                      <Eq>m·g − m R² a / (2 r²) = m·a</Eq>
                      <p>m cancels. Group the a's:</p>
                      <Eq>g = a · [ 1 + R² / (2 r²) ]</Eq>
                      <p>
                        <strong>Compute the geometry factor.</strong> R² = (0.04)² = 1.6×10⁻³.
                        2r² = 2·(0.002)² = 8×10⁻⁶. So:
                      </p>
                      <Eq>R² / (2 r²) = 1.6×10⁻³ / 8×10⁻⁶ = 200</Eq>
                      <p>
                        <strong>Step 3 — Solve for a:</strong>
                      </p>
                      <Eq>a = g / (1 + 200) = 9.8 / 201 ≈ 0.0488 m/s²</Eq>
                      <p>
                        That's about 0.5% of free-fall! The body has so much rotational
                        inertia at radius R but the string is wound on a tiny shaft, so almost
                        all of the gravitational pull goes into spinning it up. That's exactly
                        the design principle behind a "sleeping" yoyo trick.
                      </p>
                    </div>
                  ),
                  answer: { value: "a ≈ 0.0488", unit: "m/s²" },
                },
                {
                  label: "(b)",
                  question: "Tension in the string",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>Use the translation equation</strong> (1) — it's simpler than
                        the T = mR²a/(2r²) form because we already know a:
                      </p>
                      <Eq>T = m·(g − a) = 0.100 · (9.8 − 0.0488)</Eq>
                      <Eq>T ≈ 0.100 · 9.751 ≈ 0.975 N</Eq>
                      <p>
                        Notice T is almost equal to the full weight mg = 0.98 N. The yoyo is
                        nearly stationary (a is tiny), so the string is nearly carrying all of
                        its weight. Sanity check ✓.
                      </p>
                    </div>
                  ),
                  answer: { value: "T ≈ 0.975", unit: "N" },
                },
              ]}
            />

            <PracticeProblem
              accentColor={ACCENT}
              title="Massive-pulley incline (T₁ ≠ T₂!)"
              statement={
                <p>
                  A <strong>4 kg</strong> block sits on a <strong>30°</strong> incline, connected
                  via a string over a <strong>3 kg solid-cylinder pulley</strong> to an{" "}
                  <strong>8 kg</strong> hanging mass. Because the pulley has mass, the tensions on
                  the two sides are <em>not equal</em>. Find a, T₁ (incline side), T₂ (hanging
                  side).
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: "Linear acceleration a of the system",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>Why the tensions differ.</strong> A massless pulley would
                        require no torque to angularly accelerate (because I = 0), so any
                        tension difference would produce infinite α. With a massless pulley
                        the rope tension is therefore the same on both sides. Here the pulley
                        has mass M = 3 kg and I = ½MR². To spin it up, there must be a
                        <em>net torque</em> on it — which means T₂ &gt; T₁ if the system
                        accelerates so the heavier 8 kg side falls.
                      </p>
                      <p>
                        <strong>Three free-body equations.</strong> The 4 kg block is on a
                        30° incline; the gravity component pulling it down the incline is
                        m₁·g·sin30° = 4·9.8·0.5 = 19.6 N. The string tension T₁ pulls it up
                        the incline. Newton's 2nd along the incline (up = +):
                      </p>
                      <Eq>T₁ − 19.6 = 4·a   →   T₁ = 4a + 19.6   ...(block 1)</Eq>
                      <p>
                        The 8 kg block hangs; gravity pulls down with m₂g = 78.4 N, tension
                        T₂ pulls up. Newton's 2nd taking down as +:
                      </p>
                      <Eq>78.4 − T₂ = 8·a   →   T₂ = 78.4 − 8a   ...(block 2)</Eq>
                      <p>
                        For the pulley, the two tensions act at radius R but on opposite
                        sides, so they create torques in opposite directions. The net torque
                        about the pulley center spins it up at angular acceleration α, and
                        because the rope doesn't slip, a = R·α (i.e. α = a/R):
                      </p>
                      <Eq>(T₂ − T₁) · R = I · α = ½ M R² · (a/R) = ½ M R · a</Eq>
                      <p>R cancels:</p>
                      <Eq>T₂ − T₁ = ½ M · a = ½ · 3 · a = 1.5 a   ...(pulley)</Eq>
                      <p>
                        <strong>Combine.</strong> Substitute the two block equations into the
                        pulley equation:
                      </p>
                      <Eq>(78.4 − 8a) − (4a + 19.6) = 1.5 a</Eq>
                      <Eq>58.8 − 12 a = 1.5 a   →   58.8 = 13.5 a</Eq>
                      <Eq>a = 58.8 / 13.5 ≈ 4.36 m/s²</Eq>
                      <p>
                        <strong>Sanity check:</strong> if the pulley were massless (M = 0),
                        the equation collapses to 58.8 = 12a → a = 4.9 m/s². Our answer is a
                        bit less because the pulley's inertia "drinks" some of the
                        acceleration. ✓
                      </p>
                    </div>
                  ),
                  answer: { value: "a ≈ 4.36", unit: "m/s²" },
                },
                {
                  label: "(b)",
                  question: "Tension T₁ on the incline side",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Now that we know a, plug it into the incline-block equation T₁ = 4a +
                        19.6:
                      </p>
                      <Eq>T₁ = 4 · 4.36 + 19.6 = 17.44 + 19.6 ≈ 37.0 N</Eq>
                      <p>
                        Read this physically: the string has to pull up with 19.6 N just to
                        hold the block stationary against gravity (the 19.6 term), plus an
                        extra 17.4 N to actually accelerate it up the incline at 4.36 m/s².
                      </p>
                    </div>
                  ),
                  answer: { value: "T₁ ≈ 37.0", unit: "N" },
                },
                {
                  label: "(c)",
                  question: "Tension T₂ on the hanging side",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>Plug a into the hanging-block equation T₂ = 78.4 − 8a:</p>
                      <Eq>T₂ = 78.4 − 8 · 4.36 = 78.4 − 34.88 ≈ 43.6 N</Eq>
                      <p>
                        <strong>Cross-check using the pulley equation:</strong> T₂ − T₁
                        should equal 1.5·a. We get 43.6 − 37.0 = 6.6 N, and 1.5·4.36 = 6.54 N.
                        Consistent. ✓
                      </p>
                      <p>
                        T₂ &gt; T₁ as expected — the larger tension on the falling side is
                        what creates the net torque that spins up the pulley.
                      </p>
                    </div>
                  ),
                  answer: { value: "T₂ ≈ 43.6", unit: "N" },
                },
              ]}
            />

            <PracticeProblem
              accentColor={ACCENT}
              title="Hanging Sign (medical-degree shingle)"
              statement={
                <p>
                  A horizontal bar (<strong>m = 6 kg</strong>) extends from a wall. A sign (
                  <strong>M = 12 kg</strong>) hangs from the bar at <strong>0.8L</strong> from the
                  wall. A wire from the right end of the bar goes back to the wall at{" "}
                  <strong>35°</strong> above the bar. Find tension T in the wire, plus the
                  horizontal "normal" force and the vertical "upward" force the wall exerts on the
                  bar.
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: "Tension in the wire",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>Forces on the bar.</strong> Five forces are present: bar's
                        own weight m·g = 58.8 N pulling down at the bar's center (distance
                        L/2 from the wall, since the bar is uniform), the sign's weight
                        M·g = 117.6 N hanging at 0.8 L, the wire tension T pulling up-and-back
                        toward the wall at 35° above the bar, and the wall reaction split into
                        a horizontal "normal" component N and vertical component F_up.
                      </p>
                      <p>
                        <strong>Pivot choice: at the wall.</strong> Both unknown wall-reaction
                        components (N and F_up) act at the wall — putting the pivot there
                        gives them zero lever arm and zero torque. That removes them from the
                        torque equation, leaving T as the only unknown.
                      </p>
                      <p>
                        <strong>Torques about the wall pivot.</strong> Each weight pulls down
                        on the horizontal bar; the perpendicular distance is just the
                        horizontal position. Their torques are clockwise (negative). For the
                        wire tension T, only the vertical component T·sin35° produces torque
                        on the horizontal bar — the horizontal component T·cos35° pulls along
                        the bar and produces zero torque about the wall pivot.
                      </p>
                      <Eq>Στ = +T·sin35° · L − m·g · (L/2) − M·g · (0.8 L) = 0</Eq>
                      <p>L cancels everywhere — convenient:</p>
                      <Eq>T·sin35° = m·g/2 + M·g·0.8 = (6/2 + 12·0.8)·9.8 = 12.6·9.8 = 123.5 N</Eq>
                      <p>Solve for T:</p>
                      <Eq>T = 123.5 / sin35° = 123.5 / 0.5736 ≈ 215 N</Eq>
                    </div>
                  ),
                  answer: { value: "T ≈ 215", unit: "N" },
                },
                {
                  label: "(b)",
                  question: "Horizontal (normal) force from the wall",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>Now use ΣF_x = 0.</strong> Only two horizontal forces act on
                        the bar: the wall's horizontal push N (which we'll assume points
                        outward, away from the wall), and the horizontal component of the
                        wire tension T·cos35°, which pulls the bar back toward the wall.
                      </p>
                      <Eq>N − T·cos35° = 0</Eq>
                      <Eq>N = T·cos35° = 215 · 0.8192 ≈ 176 N</Eq>
                      <p>
                        Physically: the wire pulls the bar toward the wall, so the wall must
                        push back outward with an equal force to keep ΣF_x = 0.
                      </p>
                    </div>
                  ),
                  answer: { value: "N ≈ 176", unit: "N" },
                },
                {
                  label: "(c)",
                  question: "Vertical (upward) force from the wall",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>Use ΣF_y = 0.</strong> Vertical forces are: F_up from the
                        wall (assumed up), the vertical component of the wire tension
                        T·sin35° (also up), and the two weights pulling down.
                      </p>
                      <Eq>F_up + T·sin35° − m·g − M·g = 0</Eq>
                      <Eq>F_up + 123.5 − 58.8 − 117.6 = 0</Eq>
                      <Eq>F_up = 176.4 − 123.5 ≈ 52.9 N</Eq>
                      <p>
                        Physically: the wire is doing most of the work supporting the
                        weights (123.5 N up), but it can't do it all because the bar weighs
                        58.8 N AND the sign weighs 117.6 N — total 176.4 N down. The wall
                        picks up the remaining 52.9 N of vertical support.
                      </p>
                    </div>
                  ),
                  answer: { value: "F_up ≈ 52.9", unit: "N" },
                },
              ]}
            />

            <PracticeProblem
              accentColor={ACCENT}
              title="Pinned Bar with String at 35°"
              statement={
                <p>
                  A uniform bar of mass <strong>M = 2.5 kg</strong>, length <strong>L = 2 m</strong>{" "}
                  is held horizontally by a pin at its left end and a string attached at the right
                  end at <strong>35°</strong> above the bar.
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: "Tension in the string (while bar is held in equilibrium)",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>Pivot at the pin.</strong> The pin can exert horizontal and
                        vertical force on the bar, but those are unknowns we don't want to
                        deal with for finding T. Putting the pivot at the pin makes both pin
                        reactions have zero lever arm — they vanish from the torque equation.
                      </p>
                      <p>
                        <strong>Torques about the pin.</strong> Two forces matter for torque:
                        gravity (M·g = 24.5 N pulling down at the center of the uniform bar,
                        i.e. at L/2 = 1 m from the pin), and the string tension T at the right
                        end (distance L = 2 m). Only the vertical component of T (= T·sin35°)
                        creates torque on the horizontal bar.
                      </p>
                      <Eq>Στ = T·sin35° · L − M·g · (L/2) = 0</Eq>
                      <p>L cancels:</p>
                      <Eq>T·sin35° = M·g / 2</Eq>
                      <Eq>T = M·g / (2·sin35°) = (2.5·9.8) / (2·0.5736) = 24.5 / 1.147 ≈ 21.4 N</Eq>
                      <p>
                        The wire only needs to lift half the bar's weight effectively, because
                        gravity acts at the midpoint and the wire acts at the end (twice the
                        lever arm of gravity).
                      </p>
                    </div>
                  ),
                  answer: { value: "T ≈ 21.4", unit: "N" },
                },
                {
                  label: "(b)",
                  question: "Initial angular acceleration α the instant the string breaks",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>Now the bar is no longer in equilibrium — it begins to
                        rotate.</strong> Use Newton's 2nd law for rotation, Στ = I·α, about
                        the pin (which stays as the rotation axis).
                      </p>
                      <p>
                        <strong>Net torque.</strong> Tension is gone. The pin's reaction
                        forces both act at the pivot itself, so they produce zero torque
                        about the pin. The only torque-producing force is gravity, which pulls
                        down at the bar's center (L/2 from pin) with force M·g:
                      </p>
                      <Eq>τ_net = M·g · (L/2)</Eq>
                      <p>
                        <strong>Moment of inertia.</strong> The bar is a uniform rod rotating
                        about <strong>one end</strong> (the pin). Use I = ⅓ M L² (NOT
                        ¹/₁₂ M L², which is for rotation about the center):
                      </p>
                      <Eq>I = ⅓ · M · L²</Eq>
                      <p>
                        <strong>Solve for α.</strong> Notice the bar's mass M cancels — the
                        initial angular acceleration depends only on g and L:
                      </p>
                      <Eq>α = τ / I = (M·g·L/2) / (⅓·M·L²) = (3·g) / (2·L) = (3·9.8) / (2·2) = 7.35 rad/s²</Eq>
                      <p>
                        Result depends only on geometry and gravity, not on how heavy the bar
                        is. A heavier bar has more torque AND more inertia, in equal
                        proportion — they cancel.
                      </p>
                    </div>
                  ),
                  answer: { value: "α = 7.35", unit: "rad/s²" },
                },
              ]}
            />

            <PracticeProblem
              accentColor={ACCENT}
              title="Climbing Ladder (frictionless wall)"
              statement={
                <p>
                  A <strong>5 m, 10 kg</strong> ladder leans against a frictionless wall at{" "}
                  <strong>70°</strong> above the ground. A person of <strong>80 kg</strong> stands
                  1 m up the ladder. Ground has friction. Find ground normal force N₁, wall normal
                  force N₂, and friction at the ground.
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: "Normal force N₁ from the ground",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>What forces are vertical?</strong> Two weights pull down (the
                        ladder's 10 kg and the person's 80 kg) and the ground pushes up with
                        N₁. The wall is frictionless, so the wall can only push horizontally
                        — it provides zero vertical force. So all the vertical support comes
                        from the ground.
                      </p>
                      <Eq>ΣF_y = 0:   N₁ − m_ladder·g − m_person·g = 0</Eq>
                      <Eq>N₁ = (10 + 80) · 9.8 = 90 · 9.8 = 882 N</Eq>
                      <p>
                        Pretty much what you'd expect: the ground holds up the combined
                        weight. The wall being frictionless is the key insight that lets us
                        write this so simply.
                      </p>
                    </div>
                  ),
                  answer: { value: "N₁ = 882", unit: "N" },
                },
                {
                  label: "(b)",
                  question: "Normal force N₂ from the wall",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>Pivot choice: at the base of the ladder.</strong> Two
                        unknowns act there (N₁ and friction f). Putting the pivot there
                        eliminates both from the torque equation, leaving N₂ as the only
                        unknown.
                      </p>
                      <p>
                        <strong>Geometry.</strong> The ladder is at 70° above ground, length
                        L = 5 m. The top touches the wall at horizontal distance L·cos70° from
                        the base, vertical height L·sin70°. The ladder's weight acts at its
                        center, which is at L/2 along the ladder, so horizontal distance
                        (L/2)·cos70°. The person stands "1 m up the ladder" — meaning 1 m
                        along the ladder from the base, so horizontal distance 1·cos70°.
                      </p>
                      <p>
                        <strong>Lever arms about the base.</strong> N₂ is horizontal, applied
                        at the top of the ladder. Its lever arm (perpendicular distance from
                        the base to the line of N₂) is the vertical height: L·sin70°. Each
                        weight is vertical, so its lever arm is the horizontal distance from
                        the base.
                      </p>
                      <p>
                        Choose CCW positive. N₂ pulls the top toward the wall, which would
                        rotate the ladder CCW about the base (positive). Both weights produce
                        CW torques (negative).
                      </p>
                      <Eq>Στ_base = +N₂·(L·sin70°) − W_ladder·(L/2)·cos70° − W_person·(1)·cos70° = 0</Eq>
                      <Eq>N₂·5·sin70° = (10·9.8·2.5 + 80·9.8·1) · cos70°</Eq>
                      <Eq>N₂·5·0.9397 = (245 + 784) · 0.3420</Eq>
                      <Eq>N₂ = (1029 · 0.3420) / (5 · 0.9397) = 351.9 / 4.699 ≈ 74.9 N</Eq>
                      <p>
                        Equivalently: N₂ = (cos70°/sin70°) · (245 + 784)/5 = tan(20°)·205.8
                        ≈ 74.9 N. The wall barely needs to push at all because the ladder is
                        nearly vertical (70° is steep).
                      </p>
                    </div>
                  ),
                  answer: { value: "N₂ ≈ 74.9", unit: "N" },
                },
                {
                  label: "(c)",
                  question: "Friction force on the bottom of the ladder",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>Use ΣF_x = 0.</strong> Only two horizontal forces: the wall
                        pushes the top of the ladder away from the wall with force N₂, and
                        friction at the base pushes the bottom of the ladder toward the wall
                        (otherwise the ladder would slide outward).
                      </p>
                      <Eq>ΣF_x = 0:   f − N₂ = 0   →   f = N₂ ≈ 74.9 N</Eq>
                      <p>
                        Friction needs to match the wall normal exactly. If the actual μ_s
                        between the ladder feet and the floor were too small to provide 74.9
                        N (i.e. μ_s · 882 &lt; 74.9, i.e. μ_s &lt; 0.085), the ladder would
                        slip out at the bottom. That's why ladders need decent floor grip.
                      </p>
                    </div>
                  ),
                  answer: { value: "f ≈ 74.9", unit: "N (toward wall)" },
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
                  <strong>Assuming both sides of a massive pulley have equal tension.</strong> They
                  don't! That's exactly what spins the pulley up. Always treat T₁ ≠ T₂ unless the
                  pulley is massless.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">×</span>
                <span>
                  <strong>Wrong torque arm in yoyo problems.</strong> The string applies torque
                  about the <em>shaft</em> (radius r), not the body radius R. But the moment of
                  inertia is computed about R. Two different radii in the same problem.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">×</span>
                <span>
                  <strong>Picking a clumsy pivot in statics.</strong> If two unknowns are on the
                  same vertical line, choose your pivot at one of them — the chosen one's torque is
                  zero, and you've cut your unknowns in half.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">×</span>
                <span>
                  <strong>Using the full force F instead of F·sin θ.</strong> Only the component
                  perpendicular to the radius produces torque. A force pulling along the bar (θ=0)
                  produces zero torque.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">×</span>
                <span>
                  <strong>Negative answers aren't errors</strong> — they tell you the force points
                  the opposite way you assumed. The diving-board left support pulling down is
                  physically real.
                </span>
              </li>
            </ul>
          </Card>
        </section>

        {/* Next */}
        <section className="text-center py-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Day 3: Rotational Energy
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Why hollow cylinders lose the race — and how to use energy conservation when things
            roll.
          </p>
          <Link href="/rotational-energy">
            <Button
              className="text-white px-8 py-4 text-lg rounded-lg"
              style={{ backgroundColor: "#ef4444" }}
            >
              Continue to Rotational Energy <ChevronRight className="w-5 h-5 ml-2 inline" />
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
