import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function CircularMotion() {
  const [mass, setMass] = useState(2);
  const [velocity, setVelocity] = useState(5);
  const [radius, setRadius] = useState(3);
  const [angle, setAngle] = useState(45);
  const g = 9.8;

  // Circular motion calculations
  const omega = velocity / radius; // Angular velocity
  const ac = (velocity * velocity) / radius; // Centripetal acceleration
  const Fc = mass * ac; // Centripetal force

  // Conical pendulum calculations
  const angleRad = (angle * Math.PI) / 180;
  const tension = (mass * g) / Math.cos(angleRad);
  const Fc_conical = tension * Math.sin(angleRad);
  const r_conical = (tension * Math.sin(angleRad) * Math.cos(angleRad)) / (mass * g);
  const v_conical = Math.sqrt(g * r_conical * Math.tan(angleRad));
  const period = 2 * Math.PI * r_conical / v_conical;

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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Circular Motion</h1>
          <div className="w-20" />
        </div>
      </header>

      <div className="container py-12">
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Centripetal Force & Circular Motion
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When an object moves in a circle, it experiences constant acceleration toward the center. This centripetal acceleration requires a net force pointing inward. The key insight: there is no "centrifugal force"—only the real forces (tension, friction, gravity) providing the centripetal force.
            </p>
          </div>
        </section>

        {/* Interactive Visualization */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Interactive Diagram */}
            <Card className="interactive-panel">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Circular Motion Simulator
              </h3>

              {/* SVG Visualization */}
              <svg width={500} height={400} className="border border-gray-200 dark:border-slate-600 rounded-lg mb-6 bg-gray-50 dark:bg-slate-700">
                {/* Center point */}
                <circle cx="250" cy="200" r="3" fill="#1f2937" />

                {/* Circular path */}
                <circle cx="250" cy="200" r={radius * 30} fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5" />

                {/* Object on circle */}
                <circle cx={250 + radius * 30} cy="200" r="12" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />

                {/* Velocity vector (tangent) */}
                <line x1={250 + radius * 30} y1="200" x2={250 + radius * 30} y2={200 - velocity * 8} stroke="#f59e0b" strokeWidth="3" />
                <polygon points={`${250 + radius * 30},${200 - velocity * 8} ${250 + radius * 30 - 6},${200 - velocity * 8 + 8} ${250 + radius * 30 + 6},${200 - velocity * 8 + 8}`} fill="#f59e0b" />
                <text x={250 + radius * 30 + 20} y={200 - velocity * 4} fill="#f59e0b" fontSize="12" fontWeight="bold">
                  v
                </text>

                {/* Centripetal force vector (toward center) */}
                <line x1={250 + radius * 30} y1="200" x2={250 + radius * 15} y2="200" stroke="#ef4444" strokeWidth="3" />
                <polygon points={`${250 + radius * 15},200 ${250 + radius * 15 + 8},195 ${250 + radius * 15 + 8},205`} fill="#ef4444" />
                <text x={250 + radius * 22} y="215" fill="#ef4444" fontSize="12" fontWeight="bold">
                  Fc
                </text>

                {/* Radius line */}
                <line x1="250" y1="200" x2={250 + radius * 30} y2="200" stroke="#1f2937" strokeWidth="1" strokeDasharray="3,3" />
                <text x={250 + radius * 15} y="185" fill="#1f2937" fontSize="11" fontWeight="bold">
                  r = {radius.toFixed(1)} m
                </text>

                {/* Angular velocity indicator */}
                <path d={`M ${250 + radius * 25} 200 A ${radius * 25} ${radius * 25} 0 0 0 ${250 + radius * 25 * 0.8} ${200 - radius * 25 * 0.6}`} fill="none" stroke="#7c3aed" strokeWidth="2" />
                <text x={250 + radius * 20} y={200 - radius * 15} fill="#7c3aed" fontSize="11" fontWeight="bold">
                  ω = {omega.toFixed(2)} rad/s
                </text>
              </svg>

              {/* Controls */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Mass: {mass} kg
                  </label>
                  <Slider
                    value={[mass]}
                    onValueChange={(val) => setMass(val[0])}
                    min={0.5}
                    max={10}
                    step={0.5}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Velocity: {velocity.toFixed(1)} m/s
                  </label>
                  <Slider
                    value={[velocity]}
                    onValueChange={(val) => setVelocity(val[0])}
                    min={1}
                    max={15}
                    step={0.5}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Radius: {radius.toFixed(1)} m
                  </label>
                  <Slider
                    value={[radius]}
                    onValueChange={(val) => setRadius(val[0])}
                    min={0.5}
                    max={8}
                    step={0.5}
                    className="w-full"
                  />
                </div>
              </div>
            </Card>

            {/* Right: Explanation & Calculations */}
            <div className="space-y-8">
              {/* Force Analysis */}
              <Card className="interactive-panel">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Centripetal Force Calculations
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 font-mono text-sm">
                  <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded border-l-4 border-l-purple-600">
                    <p><strong>Angular Velocity:</strong></p>
                    <p>ω = v / r</p>
                    <p>ω = {velocity.toFixed(1)} / {radius.toFixed(1)}</p>
                    <p className="font-bold text-purple-600 dark:text-purple-400">{omega.toFixed(3)} rad/s</p>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900 p-4 rounded border-l-4 border-l-red-600">
                    <p><strong>Centripetal Acceleration:</strong></p>
                    <p>ac = v² / r</p>
                    <p>ac = {velocity.toFixed(1)}² / {radius.toFixed(1)}</p>
                    <p className="font-bold text-red-600 dark:text-red-400">{ac.toFixed(2)} m/s²</p>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded border-l-4 border-l-orange-600">
                    <p><strong>Centripetal Force:</strong></p>
                    <p>Fc = m × ac = m × v² / r</p>
                    <p>Fc = {mass} × {ac.toFixed(2)}</p>
                    <p className="font-bold text-orange-600 dark:text-orange-400">{Fc.toFixed(2)} N</p>
                  </div>
                </div>
              </Card>

              {/* Key Concepts */}
              <Card className="interactive-panel">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Critical Insights
                </h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <p>
                    <strong>Centripetal force is not a new force:</strong> It is the NET force pointing toward the center. It can be tension, friction, gravity, or any combination.
                  </p>
                  <p>
                    <strong>Faster motion requires more force:</strong> Centripetal force depends on v², so doubling speed requires 4× the force.
                  </p>
                  <p>
                    <strong>Smaller radius requires more force:</strong> Tighter curves need more centripetal force.
                  </p>
                </div>
              </Card>

              {/* Try This */}
              <Card className="interactive-panel border-l-4 border-l-purple-600">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Try This:
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>🔹 Double the velocity. How does Fc change?</li>
                  <li>🔹 Halve the radius. What happens to Fc?</li>
                  <li>🔹 What velocity gives Fc = 50 N?</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Conical Pendulum Section */}
        <section className="mb-16">
          <Card className="interactive-panel">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              The Conical Pendulum
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Interactive Simulator</h4>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Angle: {angle.toFixed(0)} degrees
                    </label>
                    <Slider
                      value={[angle]}
                      onValueChange={(val) => setAngle(val[0])}
                      min={10}
                      max={80}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  {/* SVG Diagram */}
                  <svg width={300} height={350} className="border border-gray-200 dark:border-slate-600 rounded-lg bg-gray-50 dark:bg-slate-700">
                    {/* Pivot point */}
                    <rect x="135" y="10" width="30" height="20" fill="#6b7280" stroke="#1f2937" strokeWidth="2" />

                    {/* Rope */}
                    <line x1="150" y1="30" x2={150 + 100 * Math.sin(angleRad)} y2={30 + 100 * Math.cos(angleRad)} stroke="#9ca3af" strokeWidth="2" />

                    {/* Mass */}
                    <circle cx={150 + 100 * Math.sin(angleRad)} cy={30 + 100 * Math.cos(angleRad)} r="10" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />

                    {/* Circular path (top view) */}
                    <circle cx="150" cy={30 + 100 * Math.cos(angleRad)} r={100 * Math.sin(angleRad)} fill="none" stroke="#d1d5db" strokeWidth="1" strokeDasharray="3,3" />

                    {/* Weight (downward) */}
                    <line x1={150 + 100 * Math.sin(angleRad)} y1={30 + 100 * Math.cos(angleRad)} x2={150 + 100 * Math.sin(angleRad)} y2={30 + 100 * Math.cos(angleRad) + 40} stroke="#ef4444" strokeWidth="2" />
                    <polygon points={`${150 + 100 * Math.sin(angleRad)},${30 + 100 * Math.cos(angleRad) + 40} ${150 + 100 * Math.sin(angleRad) - 5},${30 + 100 * Math.cos(angleRad) + 32} ${150 + 100 * Math.sin(angleRad) + 5},${30 + 100 * Math.cos(angleRad) + 32}`} fill="#ef4444" />
                    <text x={150 + 100 * Math.sin(angleRad) + 15} y={30 + 100 * Math.cos(angleRad) + 30} fill="#ef4444" fontSize="10" fontWeight="bold">
                      mg
                    </text>

                    {/* Tension (along rope) */}
                    <line x1={150 + 100 * Math.sin(angleRad)} y1={30 + 100 * Math.cos(angleRad)} x2={150 + 50 * Math.sin(angleRad)} y2={30 + 50 * Math.cos(angleRad)} stroke="#3b82f6" strokeWidth="2" />
                    <polygon points={`${150 + 50 * Math.sin(angleRad)},${30 + 50 * Math.cos(angleRad)} ${150 + 60 * Math.sin(angleRad) - 5},${30 + 60 * Math.cos(angleRad) - 5} ${150 + 60 * Math.sin(angleRad) + 5},${30 + 60 * Math.cos(angleRad) + 5}`} fill="#3b82f6" />
                    <text x={150 + 30 * Math.sin(angleRad) - 20} y={30 + 30 * Math.cos(angleRad)} fill="#3b82f6" fontSize="10" fontWeight="bold">
                      T
                    </text>

                    {/* Angle indicator */}
                    <path d={`M 150 30 L 150 130 A 30 30 0 0 1 ${150 + 30 * Math.sin(angleRad)} ${30 + 30 * Math.cos(angleRad)}`} fill="none" stroke="#1f2937" strokeWidth="1" />
                    <text x="155" y="110" fill="#1f2937" fontSize="10" fontWeight="bold">
                      θ
                    </text>
                  </svg>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Conical Pendulum Analysis</h4>
                <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg space-y-3 font-mono text-sm">
                  <p><strong>Tension in Rope:</strong></p>
                  <p>T = mg / cos(θ)</p>
                  <p>T = {(mass * g).toFixed(2)} / cos({angle.toFixed(0)}°)</p>
                  <p className="font-bold text-blue-600 dark:text-blue-400">{tension.toFixed(2)} N</p>

                  <p className="pt-2"><strong>Centripetal Force:</strong></p>
                  <p>Fc = T × sin(θ)</p>
                  <p className="font-bold text-blue-600 dark:text-blue-400">{Fc_conical.toFixed(2)} N</p>

                  <p className="pt-2"><strong>Radius of Circular Path:</strong></p>
                  <p>r = L × sin(θ)</p>
                  <p className="font-bold text-blue-600 dark:text-blue-400">{r_conical.toFixed(2)} m</p>

                  <p className="pt-2"><strong>Orbital Velocity:</strong></p>
                  <p>v = √(gr tan(θ))</p>
                  <p className="font-bold text-blue-600 dark:text-blue-400">{v_conical.toFixed(2)} m/s</p>

                  <p className="pt-2"><strong>Period of Revolution:</strong></p>
                  <p>T = 2πr / v</p>
                  <p className="font-bold text-blue-600 dark:text-blue-400">{period.toFixed(2)} s</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900 rounded-lg border-l-4 border-l-blue-600">
              <p className="text-gray-700 dark:text-gray-200">
                <strong>Key Insight:</strong> The conical pendulum demonstrates that tension provides both the centripetal force (horizontal component) and supports the weight (vertical component). The angle depends on the rotation speed.
              </p>
            </div>
          </Card>
        </section>

        {/* Next Steps */}
        <section className="text-center py-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Ready for Orbital Mechanics?
          </h3>
          <Link href="/orbital">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg rounded-lg">
              Learn Orbital Mechanics →
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
