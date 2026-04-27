import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function RotatingFrames() {
  const [mass, setMass] = useState(2);
  const [radius, setRadius] = useState(3);
  const [angularVelocity, setAngularVelocity] = useState(2);
  const [showCentrifugal, setShowCentrifugal] = useState(true);
  const g = 9.8;

  // Rotating frame calculations
  const v = angularVelocity * radius;
  const ac = angularVelocity * angularVelocity * radius; // Centripetal acceleration
  const Fc = mass * ac; // Centripetal force (real force needed)
  const Fcf = mass * ac; // Apparent centrifugal force in rotating frame

  // Rotor ride calculations
  const rotor_radius = 2; // meters
  const rotor_omega_min = Math.sqrt(g / rotor_radius); // Minimum angular velocity to support object
  const rotor_omega = angularVelocity;
  const rotor_normal = mass * rotor_omega * rotor_omega * rotor_radius;
  const rotor_friction_max = 0.5 * rotor_normal; // Assuming μ = 0.5
  const rotor_weight = mass * g;
  const rotor_safe = rotor_friction_max >= rotor_weight;

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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Rotating Reference Frames</h1>
          <div className="w-20" />
        </div>
      </header>

      <div className="container py-12">
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Apparent Forces in Rotating Frames
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              In a rotating reference frame, objects appear to experience fictitious forces: the centrifugal force (outward) and the Coriolis force (perpendicular to motion). These are NOT real forces—they are artifacts of observing from an accelerating frame. In the inertial frame, only real forces (tension, friction, gravity) exist.
            </p>
          </div>
        </section>

        {/* Interactive Visualization */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Interactive Diagram */}
            <Card className="interactive-panel">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Rotating Frame Simulator
              </h3>

              {/* SVG Visualization */}
              <svg width={500} height={450} className="border border-gray-200 dark:border-slate-600 rounded-lg mb-6 bg-gray-50 dark:bg-slate-700">
                {/* Rotating platform */}
                <circle cx="250" cy="225" r="150" fill="none" stroke="#d1d5db" strokeWidth="3" />
                <circle cx="250" cy="225" r="3" fill="#1f2937" />

                {/* Object on platform */}
                <circle cx={250 + radius * 30} cy="225" r="12" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />

                {/* Centripetal force (real, toward center) */}
                <line x1={250 + radius * 30} y1="225" x2={250 + radius * 15} y2="225" stroke="#ef4444" strokeWidth="3" />
                <polygon points={`${250 + radius * 15},225 ${250 + radius * 15 + 8},220 ${250 + radius * 15 + 8},230`} fill="#ef4444" />
                <text x={250 + radius * 22} y="210" fill="#ef4444" fontSize="12" fontWeight="bold">
                  Fc (real)
                </text>

                {/* Centrifugal force (apparent, outward) */}
                {showCentrifugal && (
                  <>
                    <line x1={250 + radius * 30} y1="225" x2={250 + radius * 45} y2="225" stroke="#f59e0b" strokeWidth="3" strokeDasharray="5,5" />
                    <polygon points={`${250 + radius * 45},225 ${250 + radius * 45 - 8},220 ${250 + radius * 45 - 8},230`} fill="#f59e0b" />
                    <text x={250 + radius * 37} y="210" fill="#f59e0b" fontSize="12" fontWeight="bold">
                      Fcf (apparent)
                    </text>
                  </>
                )}

                {/* Angular velocity indicator */}
                <path d={`M ${250 + radius * 25} 225 A ${radius * 25} ${radius * 25} 0 0 0 ${250 + radius * 25 * 0.8} ${225 - radius * 25 * 0.6}`} fill="none" stroke="#7c3aed" strokeWidth="2" />
                <polygon points={`${250 + radius * 25 * 0.8},${225 - radius * 25 * 0.6} ${250 + radius * 25 * 0.8 - 8},${225 - radius * 25 * 0.6 + 5} ${250 + radius * 25 * 0.8 + 5},${225 - radius * 25 * 0.6 - 5}`} fill="#7c3aed" />
                <text x={250 + radius * 15} y={225 - radius * 18} fill="#7c3aed" fontSize="11" fontWeight="bold">
                  ω = {angularVelocity.toFixed(2)} rad/s
                </text>

                {/* Radius line */}
                <line x1="250" y1="225" x2={250 + radius * 30} y2="225" stroke="#1f2937" strokeWidth="1" strokeDasharray="3,3" />
                <text x={250 + radius * 15} y="210" fill="#1f2937" fontSize="10" fontWeight="bold">
                  r = {radius.toFixed(1)} m
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

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Angular Velocity: {angularVelocity.toFixed(2)} rad/s
                  </label>
                  <Slider
                    value={[angularVelocity]}
                    onValueChange={(val) => setAngularVelocity(val[0])}
                    min={0.5}
                    max={5}
                    step={0.1}
                    className="w-full"
                  />
                </div>

                <Button
                  variant={showCentrifugal ? "default" : "outline"}
                  onClick={() => setShowCentrifugal(!showCentrifugal)}
                  className="w-full"
                >
                  {showCentrifugal ? "Hide Centrifugal Force" : "Show Centrifugal Force"}
                </Button>
              </div>
            </Card>

            {/* Right: Explanation & Calculations */}
            <div className="space-y-8">
              {/* Force Analysis */}
              <Card className="interactive-panel">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Inertial vs. Rotating Frame
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 font-mono text-sm">
                  <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded border-l-4 border-l-blue-600">
                    <p><strong>Inertial Frame (Lab):</strong></p>
                    <p>Only real force: Tension = Fc</p>
                    <p>Fc = m × ω² × r</p>
                    <p className="font-bold text-blue-600 dark:text-blue-400">{Fc.toFixed(2)} N</p>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-900 p-4 rounded border-l-4 border-l-amber-600">
                    <p><strong>Rotating Frame (Platform):</strong></p>
                    <p>Apparent forces balance:</p>
                    <p>Tension = Centrifugal Force</p>
                    <p>Fcf = m × ω² × r</p>
                    <p className="font-bold text-amber-600 dark:text-amber-400">{Fcf.toFixed(2)} N (outward)</p>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded border-l-4 border-l-purple-600">
                    <p><strong>Tangential Velocity:</strong></p>
                    <p>v = ω × r</p>
                    <p className="font-bold text-purple-600 dark:text-purple-400">{v.toFixed(2)} m/s</p>
                  </div>
                </div>
              </Card>

              {/* Key Concepts */}
              <Card className="interactive-panel">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Critical Distinction
                </h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-300 text-sm">
                  <p>
                    <strong>Inertial Frame:</strong> Only real forces exist. The object accelerates toward the center because tension pulls it inward.
                  </p>
                  <p>
                    <strong>Rotating Frame:</strong> Fictitious centrifugal force appears to push outward. Tension balances this apparent force, so the object appears stationary.
                  </p>
                  <p>
                    <strong>Both describe the same physics,</strong> just from different perspectives. Always use the inertial frame for calculations unless told otherwise.
                  </p>
                </div>
              </Card>

              {/* Try This */}
              <Card className="interactive-panel border-l-4 border-l-purple-600">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Try This:
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>🔹 Double ω. How does Fc change?</li>
                  <li>🔹 What happens to Fc if r → 0?</li>
                  <li>🔹 At what ω does Fc equal the weight?</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Rotor Ride Section */}
        <section className="mb-16">
          <Card className="interactive-panel">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              The Rotor Ride (Amusement Park Physics)
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">How It Works</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A rotor is a cylindrical chamber that spins. As it rotates faster, the floor drops, but riders don't fall because friction holds them against the wall.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Angular Velocity: {rotor_omega.toFixed(2)} rad/s
                    </label>
                    <Slider
                      value={[rotor_omega]}
                      onValueChange={(val) => setAngularVelocity(val[0])}
                      min={0.5}
                      max={5}
                      step={0.1}
                      className="w-full"
                    />
                  </div>

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
                </div>

                {/* Safety indicator */}
                <div className={`p-4 rounded-lg border-l-4 ${rotor_safe ? "bg-green-50 dark:bg-green-900 border-l-green-600" : "bg-red-50 dark:bg-red-900 border-l-red-600"}`}>
                  <p className={`font-bold ${rotor_safe ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                    {rotor_safe ? "✓ Safe - Friction holds you!" : "✗ Unsafe - You would fall!"}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Force Analysis</h4>
                <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg space-y-3 font-mono text-sm">
                  <p><strong>Normal Force (Centripetal):</strong></p>
                  <p>N = m × ω² × r</p>
                  <p className="font-bold text-blue-600 dark:text-blue-400">{rotor_normal.toFixed(0)} N</p>

                  <p className="pt-2"><strong>Maximum Static Friction:</strong></p>
                  <p>f_max = μ × N (μ ≈ 0.5)</p>
                  <p className="font-bold text-blue-600 dark:text-blue-400">{rotor_friction_max.toFixed(0)} N</p>

                  <p className="pt-2"><strong>Weight (Downward):</strong></p>
                  <p>W = m × g</p>
                  <p className="font-bold text-blue-600 dark:text-blue-400">{rotor_weight.toFixed(0)} N</p>

                  <p className="pt-2"><strong>Minimum ω for Safety:</strong></p>
                  <p>ω_min = √(g / r)</p>
                  <p className="font-bold text-blue-600 dark:text-blue-400">{rotor_omega_min.toFixed(2)} rad/s</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900 rounded-lg border-l-4 border-l-blue-600">
              <p className="text-gray-700 dark:text-gray-200">
                <strong>Key Insight:</strong> The rotor works because the normal force (providing centripetal acceleration) is large enough that friction can support your weight. Faster rotation = larger normal force = more friction available.
              </p>
            </div>
          </Card>
        </section>

        {/* Next Steps */}
        <section className="text-center py-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            You've Completed Day 3!
          </h3>
          <Link href="/">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg rounded-lg">
              Back to Home
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
