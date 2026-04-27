import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Momentum() {
  const [mass1, setMass1] = useState(2);
  const [velocity1, setVelocity1] = useState(5);
  const [mass2, setMass2] = useState(3);
  const [velocity2, setVelocity2] = useState(-2);
  const [collisionType, setCollisionType] = useState<"inelastic" | "elastic">("inelastic");

  // Before collision
  const p1_before = mass1 * velocity1;
  const p2_before = mass2 * velocity2;
  const p_total_before = p1_before + p2_before;
  const KE_before = 0.5 * mass1 * velocity1 * velocity1 + 0.5 * mass2 * velocity2 * velocity2;

  // After collision
  let v1_after, v2_after;

  if (collisionType === "inelastic") {
    // Perfectly inelastic: stick together
    const v_final = p_total_before / (mass1 + mass2);
    v1_after = v_final;
    v2_after = v_final;
  } else {
    // Elastic collision formula
    v1_after = ((mass1 - mass2) * velocity1 + 2 * mass2 * velocity2) / (mass1 + mass2);
    v2_after = ((mass2 - mass1) * velocity2 + 2 * mass1 * velocity1) / (mass1 + mass2);
  }

  const p1_after = mass1 * v1_after;
  const p2_after = mass2 * v2_after;
  const p_total_after = p1_after + p2_after;
  const KE_after = 0.5 * mass1 * v1_after * v1_after + 0.5 * mass2 * v2_after * v2_after;

  const energyLost = KE_before - KE_after;
  const isElasticCheck = Math.abs(energyLost) < 0.01;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <ChevronLeft className="w-5 h-5" />
              Back
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Momentum & Collisions</h1>
          <div className="w-20" />
        </div>
      </header>

      <div className="container py-12">
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Conservation of Momentum
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Momentum is the product of mass and velocity. In any collision, the total momentum before equals the total momentum after—this is one of the most powerful laws in physics. The difference between elastic and inelastic collisions lies in whether kinetic energy is conserved.
            </p>
          </div>
        </section>

        {/* Interactive Visualization */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Interactive Diagram */}
            <Card className="interactive-panel">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Collision Simulator
              </h3>

              {/* Collision Type Toggle */}
              <div className="mb-6 flex gap-4">
                <Button
                  variant={collisionType === "inelastic" ? "default" : "outline"}
                  onClick={() => setCollisionType("inelastic")}
                  className="flex-1"
                >
                  Inelastic
                </Button>
                <Button
                  variant={collisionType === "elastic" ? "default" : "outline"}
                  onClick={() => setCollisionType("elastic")}
                  className="flex-1"
                >
                  Elastic
                </Button>
              </div>

              {/* SVG Visualization */}
              <svg width={500} height={350} className="border border-gray-200 dark:border-slate-600 rounded-lg mb-6 bg-gray-50 dark:bg-slate-700">
                {/* Before collision */}
                <text x="250" y="30" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1f2937">
                  Before Collision
                </text>

                {/* Mass 1 (before) */}
                <rect x="80" y="70" width="40" height="40" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />
                <text x="100" y="95" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                  {mass1} kg
                </text>

                {/* Velocity 1 arrow (before) */}
                <line x1="120" y1="90" x2={120 + velocity1 * 8} y2="90" stroke="#1e40af" strokeWidth="2" />
                <polygon points={`${120 + velocity1 * 8},90 ${120 + velocity1 * 8 - 8},85 ${120 + velocity1 * 8 - 8},95`} fill="#1e40af" />
                <text x={120 + velocity1 * 4} y="75" fill="#1e40af" fontSize="11" fontWeight="bold">
                  v1 = {velocity1.toFixed(1)} m/s
                </text>

                {/* Mass 2 (before) */}
                <rect x="300" y="70" width="40" height="40" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
                <text x="320" y="95" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                  {mass2} kg
                </text>

                {/* Velocity 2 arrow (before) */}
                <line x1="300" y1="90" x2={300 + velocity2 * 8} y2="90" stroke="#991b1b" strokeWidth="2" />
                <polygon points={`${300 + velocity2 * 8},90 ${300 + velocity2 * 8 - 8},85 ${300 + velocity2 * 8 - 8},95`} fill="#991b1b" />
                <text x={300 + velocity2 * 4} y="75" fill="#991b1b" fontSize="11" fontWeight="bold">
                  v2 = {velocity2.toFixed(1)} m/s
                </text>

                {/* Collision indicator */}
                <circle cx="200" cy="90" r="8" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" />
                <text x="200" y="140" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#f59e0b">
                  COLLISION
                </text>

                {/* After collision */}
                <text x="250" y="200" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1f2937">
                  After Collision
                </text>

                {collisionType === "inelastic" ? (
                  <>
                    {/* Combined mass (inelastic) */}
                    <rect x="180" y="240" width="60" height="40" fill="#8b5cf6" stroke="#7c3aed" strokeWidth="2" />
                    <text x="210" y="265" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                      {(mass1 + mass2)} kg
                    </text>

                    {/* Velocity arrow (inelastic) */}
                    <line x1="240" y1="260" x2={240 + v1_after * 8} y2="260" stroke="#7c3aed" strokeWidth="2" />
                    <polygon points={`${240 + v1_after * 8},260 ${240 + v1_after * 8 - 8},255 ${240 + v1_after * 8 - 8},265`} fill="#7c3aed" />
                    <text x={240 + v1_after * 4} y="230" fill="#7c3aed" fontSize="11" fontWeight="bold">
                      v = {v1_after.toFixed(2)} m/s
                    </text>
                  </>
                ) : (
                  <>
                    {/* Mass 1 (elastic) */}
                    <rect x="100" y="240" width="40" height="40" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />
                    <text x="120" y="265" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                      {mass1} kg
                    </text>

                    {/* Velocity 1 arrow (elastic) */}
                    <line x1="140" y1="260" x2={140 + v1_after * 8} y2="260" stroke="#1e40af" strokeWidth="2" />
                    <polygon points={`${140 + v1_after * 8},260 ${140 + v1_after * 8 - 8},255 ${140 + v1_after * 8 - 8},265`} fill="#1e40af" />
                    <text x={140 + v1_after * 4} y="230" fill="#1e40af" fontSize="11" fontWeight="bold">
                      v1' = {v1_after.toFixed(2)}
                    </text>

                    {/* Mass 2 (elastic) */}
                    <rect x="280" y="240" width="40" height="40" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
                    <text x="300" y="265" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                      {mass2} kg
                    </text>

                    {/* Velocity 2 arrow (elastic) */}
                    <line x1="280" y1="260" x2={280 + v2_after * 8} y2="260" stroke="#991b1b" strokeWidth="2" />
                    <polygon points={`${280 + v2_after * 8},260 ${280 + v2_after * 8 - 8},255 ${280 + v2_after * 8 - 8},265`} fill="#991b1b" />
                    <text x={280 + v2_after * 4} y="230" fill="#991b1b" fontSize="11" fontWeight="bold">
                      v2' = {v2_after.toFixed(2)}
                    </text>
                  </>
                )}
              </svg>

              {/* Controls */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Mass 1: {mass1} kg
                  </label>
                  <Slider
                    value={[mass1]}
                    onValueChange={(val) => setMass1(val[0])}
                    min={1}
                    max={10}
                    step={0.5}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Velocity 1: {velocity1.toFixed(1)} m/s
                  </label>
                  <Slider
                    value={[velocity1]}
                    onValueChange={(val) => setVelocity1(val[0])}
                    min={-10}
                    max={10}
                    step={0.5}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Mass 2: {mass2} kg
                  </label>
                  <Slider
                    value={[mass2]}
                    onValueChange={(val) => setMass2(val[0])}
                    min={1}
                    max={10}
                    step={0.5}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Velocity 2: {velocity2.toFixed(1)} m/s
                  </label>
                  <Slider
                    value={[velocity2]}
                    onValueChange={(val) => setVelocity2(val[0])}
                    min={-10}
                    max={10}
                    step={0.5}
                    className="w-full"
                  />
                </div>
              </div>
            </Card>

            {/* Right: Explanation & Calculations */}
            <div className="space-y-8">
              {/* Momentum Analysis */}
              <Card className="interactive-panel">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Momentum Conservation
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 font-mono text-sm">
                  <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded">
                    <p><strong>Before Collision:</strong></p>
                    <p>p1 = {mass1} × {velocity1.toFixed(1)} = {p1_before.toFixed(2)} kg·m/s</p>
                    <p>p2 = {mass2} × {velocity2.toFixed(1)} = {p2_before.toFixed(2)} kg·m/s</p>
                    <p className="font-bold text-orange-600 dark:text-orange-400">p_total = {p_total_before.toFixed(2)} kg·m/s</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900 p-4 rounded">
                    <p><strong>After Collision:</strong></p>
                    <p>p1' = {mass1} × {v1_after.toFixed(2)} = {p1_after.toFixed(2)} kg·m/s</p>
                    {collisionType === "elastic" && (
                      <p>p2' = {mass2} × {v2_after.toFixed(2)} = {p2_after.toFixed(2)} kg·m/s</p>
                    )}
                    <p className="font-bold text-green-600 dark:text-green-400">p_total' = {p_total_after.toFixed(2)} kg·m/s</p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded border-l-4 border-l-blue-600">
                    <p><strong>Energy Check:</strong></p>
                    <p>KE_before = {KE_before.toFixed(2)} J</p>
                    <p>KE_after = {KE_after.toFixed(2)} J</p>
                    <p>Energy lost = {energyLost.toFixed(2)} J</p>
                    <p className="font-bold">{collisionType === "elastic" ? "✓ Elastic (KE conserved)" : "✗ Inelastic (KE lost)"}</p>
                  </div>
                </div>
              </Card>

              {/* Key Concepts */}
              <Card className="interactive-panel">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Elastic vs. Inelastic
                </h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <p>
                    <strong>Inelastic:</strong> Objects stick together or deform. Momentum is conserved, but kinetic energy is lost (converted to heat, sound, deformation).
                  </p>
                  <p>
                    <strong>Elastic:</strong> Objects bounce off each other. Both momentum AND kinetic energy are conserved.
                  </p>
                </div>
              </Card>

              {/* Try This */}
              <Card className="interactive-panel border-l-4 border-l-purple-600">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Try This:
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>🔹 Set v2 = 0 (stationary target). What happens?</li>
                  <li>🔹 Make m1 = m2 and v2 = 0. What are the final velocities?</li>
                  <li>🔹 Compare inelastic vs. elastic for the same initial conditions.</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Worked Example */}
        <section className="mb-16">
          <Card className="interactive-panel">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Worked Example: Ballistic Pendulum (Problem 7)
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Problem Statement</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  A 10 g bullet is fired at 300 m/s into a 3 kg wooden block hanging from the ceiling. The bullet embeds in the block. How high does the block swing?
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Solution</h4>
                <div className="bg-gray-50 dark:bg-slate-600 p-6 rounded-lg space-y-3 font-mono text-sm">
                  <p><strong>Step 1: Momentum before collision</strong></p>
                  <p>p = 0.01 × 300 = 3 kg·m/s</p>

                  <p className="pt-2"><strong>Step 2: Velocity after collision</strong></p>
                  <p>v = p / (m_bullet + m_block)</p>
                  <p>v = 3 / 3.01 = 0.997 m/s</p>

                  <p className="pt-2"><strong>Step 3: Height using energy</strong></p>
                  <p>KE = PE → 0.5 × m × v² = m × g × h</p>
                  <p>h = v² / (2g) = 0.997² / (2 × 9.8) = 0.994 / 19.6</p>
                  <p className="font-bold text-blue-600 dark:text-blue-400">h = 0.051 m = 5.1 cm</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900 rounded-lg border-l-4 border-l-blue-600">
              <p className="text-gray-700 dark:text-gray-200">
                <strong>Key Insight:</strong> This is a two-step problem: (1) Inelastic collision conserves momentum, (2) Swing uses energy conservation. The bullet's kinetic energy is mostly lost in the collision!
              </p>
            </div>
          </Card>
        </section>

        {/* Next Steps */}
        <section className="text-center py-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            You've Mastered Day 2!
          </h3>
          <Link href="/">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-lg">
              Back to Home
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
