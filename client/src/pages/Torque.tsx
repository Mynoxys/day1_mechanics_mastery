import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { WorkedExample } from "@/components/midterm/WorkedExample";
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
                { symbol: "r", meaning: "distance from pivot to point where force applies", units: "m" },
                { symbol: "F", meaning: "force magnitude", units: "N" },
                { symbol: "θ", meaning: "angle between r-vector and F-vector", units: "degrees or rad" },
                { symbol: "lever arm", meaning: "perpendicular distance from pivot to force line of action", units: "m" },
              ]}
              whenToUse="Always — this is the definition of torque."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Newton's 2nd for rotation"
              formula={<div>Στ = Iα</div>}
              variables={[
                { symbol: "Στ", meaning: "net torque about chosen axis", units: "N·m" },
                { symbol: "I", meaning: "moment of inertia about that axis", units: "kg·m²" },
                { symbol: "α", meaning: "angular acceleration", units: "rad/s²" },
              ]}
              whenToUse="When the body has nonzero α (yoyos, spinning-up pulleys, falling-rod problems)."
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
              whenToUse="When nothing is moving (or moving at constant velocity). Choose pivot to eliminate the unknown you don't care about."
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
                { symbol: "M, L, R", meaning: "mass, length, radius of the body" },
              ]}
              whenToUse="Pick the right one based on the shape and the rotation axis."
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
                heading: "Set up: two equations from two physics laws",
                body: (
                  <div className="space-y-1">
                    <p>Translation (Newton's 2nd ↓): Mg − T = Ma</p>
                    <p>Rotation about the center: τ = Iα → T·R = (½MR²)·α</p>
                    <p>Constraint (no slipping at string): a = Rα → α = a/R</p>
                  </div>
                ),
              },
              {
                heading: "Substitute α into the rotation equation",
                body: (
                  <div className="space-y-1">
                    <p>T·R = ½MR² · (a/R) = ½MRa → T = ½Ma</p>
                  </div>
                ),
              },
              {
                heading: "Plug T into the translation equation",
                body: (
                  <div className="space-y-1">
                    <p>Mg − ½Ma = Ma</p>
                    <p>Mg = (3/2)Ma → a = (2/3)g</p>
                  </div>
                ),
                result: { label: "(a) a", value: "(2/3)·9.8 ≈ 6.53 m/s²", color: "purple" },
              },
              {
                heading: "Solve for tension",
                body: <p>T = ½·M·a = ½ · 0.20 · 6.53</p>,
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
                heading: "Choose pivot at the LEFT support to kill F_left",
                body: (
                  <p>
                    Left support's lever arm becomes 0 — its torque vanishes from Στ = 0, leaving
                    only F_center as the unknown.
                  </p>
                ),
              },
              {
                heading: "Sum torques about x=0 (CCW positive)",
                body: (
                  <div className="space-y-1">
                    <p>+F_center · 1 m (lifts board, CCW)</p>
                    <p>− 20·9.8 · 2.5 m (board weight at midpoint, CW)</p>
                    <p>− 80·9.8 · 5 m (your weight at end, CW)</p>
                    <p>F_center − 490 − 3920 = 0</p>
                  </div>
                ),
                result: { label: "F_center", value: "≈ 4410 N (up)", color: "green" },
              },
              {
                heading: "Sum vertical forces to find F_left",
                body: (
                  <div className="space-y-1">
                    <p>F_left + F_center − W_board − W_you = 0</p>
                    <p>F_left + 4410 − 196 − 784 = 0</p>
                    <p>F_left = 980 − 4410</p>
                  </div>
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
                  question: "Downward acceleration",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>Translation: mg − T = ma</p>
                      <p>Rotation: torque arm is the shaft r, NOT R. T·r = I·α with I = ½mR².</p>
                      <p>Constraint: a = rα (string constraint at shaft).</p>
                      <p>From rotation: T = I·α/r = ½mR²·(a/r)/r = mR²a/(2r²)</p>
                      <p>Sub into translation: mg − mR²a/(2r²) = ma → g = a(1 + R²/(2r²))</p>
                      <p>R²/(2r²) = (0.04)²/(2·(0.002)²) = 0.0016/8e-6 = 200</p>
                      <p>a = g / (1 + 200) = 9.8 / 201</p>
                    </div>
                  ),
                  answer: { value: "a ≈ 0.0488", unit: "m/s²" },
                },
                {
                  label: "(b)",
                  question: "Tension in the string",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>From translation: T = m(g − a) = 0.100·(9.8 − 0.0488)</p>
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
                    <div className="space-y-1">
                      <p>4-kg block (up incline): T₁ − m₁g·sin30° = m₁a → T₁ = 4a + 19.6</p>
                      <p>8-kg block (down): m₂g − T₂ = m₂a → T₂ = 78.4 − 8a</p>
                      <p>Pulley: net τ = (T₂ − T₁)·R = Iα = ½MR²·(a/R) = ½MRa</p>
                      <p>So T₂ − T₁ = ½M·a = 1.5a</p>
                      <p>Substitute: (78.4 − 8a) − (4a + 19.6) = 1.5a</p>
                      <p>58.8 − 12a = 1.5a → 13.5a = 58.8</p>
                    </div>
                  ),
                  answer: { value: "a ≈ 4.36", unit: "m/s²" },
                },
                {
                  label: "(b)",
                  question: "Tension T₁ on the incline side",
                  solutionSteps: <p>T₁ = 4·4.36 + 19.6</p>,
                  answer: { value: "T₁ ≈ 37.0", unit: "N" },
                },
                {
                  label: "(c)",
                  question: "Tension T₂ on the hanging side",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>T₂ = 78.4 − 8·4.36 = 43.6 N</p>
                      <p>Check: T₂ − T₁ = 43.6 − 37.0 = 6.6 ≈ 1.5·4.36 = 6.5 ✓</p>
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
                    <div className="space-y-1">
                      <p>Pivot at the wall. Only the perpendicular (vertical) component of T contributes torque.</p>
                      <p>Στ: T·sin35°·L − m·g·(L/2) − M·g·(0.8L) = 0</p>
                      <p>L cancels: T·sin35° = (6/2 + 12·0.8)·g = (3 + 9.6)·9.8 = 12.6·9.8 = 123.5</p>
                      <p>T = 123.5 / sin35° = 123.5 / 0.5736</p>
                    </div>
                  ),
                  answer: { value: "T ≈ 215", unit: "N" },
                },
                {
                  label: "(b)",
                  question: "Normal (horizontal) force from the wall",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>ΣF_x = 0: N − T·cos35° = 0</p>
                      <p>N = 215·cos35° = 215·0.8192</p>
                    </div>
                  ),
                  answer: { value: "N ≈ 176", unit: "N" },
                },
                {
                  label: "(c)",
                  question: "Upward (vertical) force from the wall",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>ΣF_y = 0: F_up + T·sin35° − m·g − M·g = 0</p>
                      <p>F_up + 123.5 − 58.8 − 117.6 = 0</p>
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
                  question: "Tension in the string",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>Pivot at the pin. Στ = T·sin35°·L − Mg·(L/2) = 0</p>
                      <p>T = Mg / (2·sin35°) = (2.5·9.8) / (2·0.5736) = 24.5 / 1.147</p>
                    </div>
                  ),
                  answer: { value: "T ≈ 21.4", unit: "N" },
                },
                {
                  label: "(b)",
                  question: "Initial angular acceleration α the instant the string breaks",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>Now only weight produces torque (pin reaction at pivot has zero arm).</p>
                      <p>τ = Mg·(L/2). Use I = ⅓ML² for rod about end.</p>
                      <p>α = τ/I = (MgL/2) / (⅓ML²) = (3g)/(2L) = 3·9.8/(2·2)</p>
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
                    <div className="space-y-1">
                      <p>ΣF_y = 0: N₁ − 10g − 80g = 0</p>
                      <p>N₁ = 90·9.8</p>
                    </div>
                  ),
                  answer: { value: "N₁ = 882", unit: "N" },
                },
                {
                  label: "(b)",
                  question: "Normal force N₂ from the wall",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>Pivot at base of ladder. Wall normal acts at top, horizontally.</p>
                      <p>Στ = N₂·(L sin70°) − W_ladder·(L/2)·cos70° − W_person·1·cos70° = 0</p>
                      <p>N₂·5·sin70° = (10g·2.5 + 80g·1)·cos70°</p>
                      <p>N₂ = (cos70°/sin70°) · (245 + 784)/5 = (0.3640)·205.8</p>
                    </div>
                  ),
                  answer: { value: "N₂ ≈ 74.9", unit: "N" },
                },
                {
                  label: "(c)",
                  question: "Friction force on the bottom of the ladder",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>ΣF_x = 0: f − N₂ = 0 → f = N₂</p>
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
