import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function FormulaSheet() {
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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Formula Sheet & Reference</h1>
          <div className="w-20" />
        </div>
      </header>

      <div className="container py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Complete Physics Reference</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            All formulas, problem-solving strategies, and key concepts organized by topic. Use this as your quick reference while solving problems.
          </p>
        </section>

        {/* DYNAMICS SECTION */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-600">
            Day 1: Dynamics & Forces
          </h3>

          {/* Newton's Laws */}
          <Card className="p-6 mb-6 border-l-4 border-l-blue-600">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Newton's Laws</h4>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded">
                <p className="font-mono font-bold text-lg mb-2">F_net = ma</p>
                <p className="text-sm">The net force on an object equals its mass times acceleration.</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded">
                <p className="font-mono font-bold text-lg mb-2">F_friction = μ × N</p>
                <p className="text-sm">Friction force depends on the coefficient of friction (μ) and normal force (N).</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded">
                <p className="font-mono font-bold text-lg mb-2">F_action = -F_reaction</p>
                <p className="text-sm">Forces always come in equal and opposite pairs.</p>
              </div>
            </div>
          </Card>

          {/* Inclined Planes */}
          <Card className="p-6 mb-6 border-l-4 border-l-green-600">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Inclined Planes</h4>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="bg-green-50 dark:bg-green-900 p-4 rounded">
                <p className="font-mono font-bold text-lg mb-2">F_parallel = mg sin(θ)</p>
                <p className="text-sm">Component of weight parallel to the plane.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900 p-4 rounded">
                <p className="font-mono font-bold text-lg mb-2">F_perpendicular = mg cos(θ)</p>
                <p className="text-sm">Component of weight perpendicular to the plane (equals normal force).</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900 p-4 rounded">
                <p className="font-mono font-bold text-lg mb-2">a = g(sin(θ) - μ cos(θ))</p>
                <p className="text-sm">Acceleration down a plane with friction.</p>
              </div>
            </div>
          </Card>

          {/* Tension & Pulleys */}
          <Card className="p-6 mb-6 border-l-4 border-l-orange-600">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Tension & Coupled Systems</h4>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded">
                <p className="font-mono font-bold text-lg mb-2">T = m × a</p>
                <p className="text-sm">Tension in a rope equals mass times acceleration (for massless rope).</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded">
                <p className="font-mono font-bold text-lg mb-2">a = (m_hanging × g - f) / (m_total)</p>
                <p className="text-sm">System acceleration for coupled blocks with friction.</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded">
                <p className="font-mono font-bold text-lg mb-2">Key: Both masses have SAME acceleration</p>
                <p className="text-sm">This constraint is the key to solving coupled systems.</p>
              </div>
            </div>
          </Card>
        </section>

        {/* ENERGY SECTION */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-amber-600">
            Day 2: Energy & Momentum
          </h3>

          {/* Energy */}
          <Card className="p-6 mb-6 border-l-4 border-l-amber-600">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Energy Forms</h4>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="bg-amber-50 dark:bg-amber-900 p-4 rounded">
                <p className="font-mono font-bold text-lg mb-2">PE_grav = mgh</p>
                <p className="text-sm">Gravitational potential energy (relative to reference point).</p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900 p-4 rounded">
                <p className="font-mono font-bold text-lg mb-2">KE = 0.5 × m × v²</p>
                <p className="text-sm">Kinetic energy of a moving object.</p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900 p-4 rounded">
                <p className="font-mono font-bold text-lg mb-2">PE_spring = 0.5 × k × x²</p>
                <p className="text-sm">Elastic potential energy stored in a compressed or stretched spring.</p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900 p-4 rounded">
                <p className="font-mono font-bold text-lg mb-2">E_total = PE + KE = constant</p>
                <p className="text-sm">In a closed system with no friction, total mechanical energy is conserved.</p>
              </div>
            </div>
          </Card>

          {/* Momentum */}
          <Card className="p-6 mb-6 border-l-4 border-l-red-600">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Momentum & Collisions</h4>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="bg-red-50 dark:bg-red-900 p-4 rounded">
                <p className="font-mono font-bold text-lg mb-2">p = m × v</p>
                <p className="text-sm">Momentum is mass times velocity.</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900 p-4 rounded">
                <p className="font-mono font-bold text-lg mb-2">p_before = p_after</p>
                <p className="text-sm">Momentum is ALWAYS conserved in collisions (elastic or inelastic).</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900 p-4 rounded">
                <p className="font-mono font-bold text-lg mb-2">Elastic: KE is conserved</p>
                <p className="text-sm">Objects bounce apart; kinetic energy before = kinetic energy after.</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900 p-4 rounded">
                <p className="font-mono font-bold text-lg mb-2">Inelastic: KE is NOT conserved</p>
                <p className="text-sm">Objects stick together or deform; some energy becomes heat/sound.</p>
              </div>
            </div>
          </Card>
        </section>

        {/* CIRCULAR MOTION SECTION */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-purple-600">
            Day 3: Circular Motion & Gravitation
          </h3>

          {/* Circular Motion */}
          <Card className="p-6 mb-6 border-l-4 border-l-purple-600">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Circular Motion</h4>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded">
                <p className="font-mono font-bold text-lg mb-2">a_c = v² / r</p>
                <p className="text-sm">Centripetal acceleration (always points toward center).</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded">
                <p className="font-mono font-bold text-lg mb-2">F_c = m × v² / r</p>
                <p className="text-sm">Centripetal force (the NET force pointing toward center).</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded">
                <p className="font-mono font-bold text-lg mb-2">v = 2πr / T</p>
                <p className="text-sm">Velocity in circular motion (2πr is the circumference).</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded">
                <p className="font-mono font-bold text-lg mb-2">T = 2π√(r/g) [for vertical circle]</p>
                <p className="text-sm">Period of vertical circular motion.</p>
              </div>
            </div>
          </Card>

          {/* Gravitation */}
          <Card className="p-6 mb-6 border-l-4 border-l-indigo-600">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Gravitation & Orbits</h4>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="bg-indigo-50 dark:bg-indigo-900 p-4 rounded">
                <p className="font-mono font-bold text-lg mb-2">F_grav = G × M × m / r²</p>
                <p className="text-sm">Gravitational force between two masses (G = 6.67×10⁻¹¹ N⋅m²/kg²).</p>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900 p-4 rounded">
                <p className="font-mono font-bold text-lg mb-2">v_orbit = √(GM / r)</p>
                <p className="text-sm">Orbital velocity (gravitational force = centripetal force).</p>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900 p-4 rounded">
                <p className="font-mono font-bold text-lg mb-2">v_escape = √(2GM / r)</p>
                <p className="text-sm">Escape velocity (needs twice the energy of orbital velocity).</p>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900 p-4 rounded">
                <p className="font-mono font-bold text-lg mb-2">T² ∝ r³ [Kepler's 3rd Law]</p>
                <p className="text-sm">Period squared is proportional to radius cubed.</p>
              </div>
            </div>
          </Card>
        </section>

        {/* PROBLEM-SOLVING STRATEGIES */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-slate-400">
            Universal Problem-Solving Strategy
          </h3>

          <Card className="p-6 space-y-6">
            <div className="space-y-3">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Read & Identify</h4>
                  <p className="text-gray-600 dark:text-gray-300">Read the problem carefully. Identify what you're given and what you need to find.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Draw a Diagram</h4>
                  <p className="text-gray-600 dark:text-gray-300">Sketch the situation. For forces, draw a Free Body Diagram (FBD) showing ALL forces.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Choose a Law or Principle</h4>
                  <p className="text-gray-600 dark:text-gray-300">Decide which physics law applies: Newton's Laws, Energy Conservation, Momentum Conservation, or Circular Motion.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Set Up Equations</h4>
                  <p className="text-gray-600 dark:text-gray-300">Write the relevant equations with the values you know. Use consistent units (SI).</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Solve Algebraically</h4>
                  <p className="text-gray-600 dark:text-gray-300">Rearrange equations to isolate the unknown. Solve step-by-step.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">6</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Check Your Answer</h4>
                  <p className="text-gray-600 dark:text-gray-300">Does the answer make sense? Check units. Is the magnitude reasonable?</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* KEY INSIGHTS */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-slate-400">
            Key Insights & Common Mistakes
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-l-4 border-l-green-600">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">✓ Always Draw FBDs</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Free Body Diagrams show all forces clearly. This prevents missing forces and sign errors.</p>
            </Card>

            <Card className="p-6 border-l-4 border-l-red-600">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-3">✗ Don't Forget Friction</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Friction opposes motion. If there's motion, there's friction (unless stated otherwise).</p>
            </Card>

            <Card className="p-6 border-l-4 border-l-green-600">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">✓ Tension is Same Throughout</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">In a massless rope over a frictionless pulley, tension is the same on both sides.</p>
            </Card>

            <Card className="p-6 border-l-4 border-l-red-600">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-3">✗ Don't Confuse Weight & Mass</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Weight = mg (force), Mass = m (property). They're different!</p>
            </Card>

            <Card className="p-6 border-l-4 border-l-green-600">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">✓ Energy is Conserved</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">In ideal systems, total mechanical energy is constant. Use this to avoid complex force analysis.</p>
            </Card>

            <Card className="p-6 border-l-4 border-l-red-600">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-3">✗ Don't Forget Centripetal Force</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">In circular motion, there's ALWAYS a net force toward the center. It's not a separate force—it's the NET force.</p>
            </Card>
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center py-12">
          <Link href="/exercises">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg">
              Back to Exercise Bank →
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
