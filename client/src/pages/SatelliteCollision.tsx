import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function SatelliteCollision() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/integration-problems">
            <Button variant="ghost" className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <ChevronLeft className="w-5 h-5" />
              Back
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Satellite Collision</h1>
          <div className="w-20" />
        </div>
      </header>

      <div className="container py-12 max-w-4xl">
        {/* Problem Statement */}
        <section className="mb-12">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Problem Statement</h2>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Scenario:</strong> Two satellites are in circular orbits around Earth. Satellite A (mass = 1000 kg) orbits at radius r_A = 7000 km with orbital velocity v_A = 7.5 km/s. Satellite B (mass = 500 kg) orbits at radius r_B = 7500 km with orbital velocity v_B = 7.2 km/s.
              </p>
              
              <p>
                Due to a navigation error, Satellite B's orbit decays and it collides head-on with Satellite A. The collision is perfectly inelastic (they stick together).
              </p>
              
              <p className="font-bold text-blue-600 dark:text-blue-400">
                Questions:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>What is the velocity of the combined satellite immediately after collision?</li>
                <li>How much kinetic energy is lost in the collision?</li>
                <li>What is the new orbital radius of the combined satellite?</li>
                <li>Will the combined satellite remain in a stable orbit or crash into Earth?</li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Step-by-Step Solution */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step-by-Step Solution</h2>
          
          <div className="space-y-6">
            {/* Step 1 */}
            <Card className="p-6 border-l-4 border-l-blue-600">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Step 1: Analyze the Collision (Momentum Conservation)</h3>
              
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Since the collision is perfectly inelastic, momentum is conserved. The satellites collide head-on, so their velocities are in opposite directions.
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg font-mono text-sm space-y-2">
                  <p><strong>Given:</strong></p>
                  <p>m_A = 1000 kg, v_A = 7.5 km/s = 7500 m/s</p>
                  <p>m_B = 500 kg, v_B = -7.2 km/s = -7200 m/s (opposite direction)</p>
                  
                  <p className="pt-4"><strong>Momentum Conservation:</strong></p>
                  <p>p_before = p_after</p>
                  <p>m_A × v_A + m_B × v_B = (m_A + m_B) × v_after</p>
                  <p>1000 × 7500 + 500 × (-7200) = 1500 × v_after</p>
                  <p>7,500,000 - 3,600,000 = 1500 × v_after</p>
                  <p>3,900,000 = 1500 × v_after</p>
                  <p className="font-bold text-blue-600 dark:text-blue-400">v_after = 2600 m/s = 2.6 km/s</p>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Key Insight:</strong> The combined satellite moves in the direction of Satellite A's original motion, but much slower. Most of the kinetic energy is lost in the collision.
                </p>
              </div>
            </Card>

            {/* Step 2 */}
            <Card className="p-6 border-l-4 border-l-purple-600">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Step 2: Calculate Energy Loss</h3>
              
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  In a perfectly inelastic collision, kinetic energy is NOT conserved (it's converted to heat, deformation, etc.).
                </p>
                
                <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg font-mono text-sm space-y-2">
                  <p><strong>Kinetic Energy Before Collision:</strong></p>
                  <p>KE_before = (1/2) × m_A × v_A² + (1/2) × m_B × v_B²</p>
                  <p>KE_before = (1/2) × 1000 × (7500)² + (1/2) × 500 × (7200)²</p>
                  <p>KE_before = 28.125 × 10⁹ + 12.96 × 10⁹</p>
                  <p>KE_before = 41.085 × 10⁹ J = 41.1 GJ</p>
                  
                  <p className="pt-4"><strong>Kinetic Energy After Collision:</strong></p>
                  <p>KE_after = (1/2) × (m_A + m_B) × v_after²</p>
                  <p>KE_after = (1/2) × 1500 × (2600)²</p>
                  <p>KE_after = 5.07 × 10⁹ J = 5.07 GJ</p>
                  
                  <p className="pt-4"><strong>Energy Lost:</strong></p>
                  <p>ΔE = KE_before - KE_after</p>
                  <p className="font-bold text-purple-600 dark:text-purple-400">ΔE = 36.015 × 10⁹ J ≈ 36 GJ</p>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Key Insight:</strong> 87% of the kinetic energy is lost! This is typical for inelastic collisions.
                </p>
              </div>
            </Card>

            {/* Step 3 */}
            <Card className="p-6 border-l-4 border-l-orange-600">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Step 3: Determine New Orbital Radius</h3>
              
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  After the collision, the combined satellite has velocity 2.6 km/s at approximately the original orbital radius of Satellite A (7000 km). This velocity is too low for a stable circular orbit at that radius. The satellite will enter an elliptical orbit.
                </p>
                
                <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded-lg font-mono text-sm space-y-2">
                  <p><strong>For a circular orbit at r = 7000 km:</strong></p>
                  <p>v_circular = √(GM / r)</p>
                  <p>v_circular = √(3.986 × 10¹⁴ / 7.0 × 10⁶)</p>
                  <p>v_circular = 7,545 m/s ≈ 7.55 km/s</p>
                  
                  <p className="pt-4"><strong>Actual velocity after collision: 2.6 km/s</strong></p>
                  <p>Since 2.6 km/s &lt;&lt; 7.55 km/s, the satellite cannot maintain a circular orbit.</p>
                  
                  <p className="pt-4"><strong>Using Energy Conservation for Elliptical Orbit:</strong></p>
                  <p>E = (1/2)v² - GM/r = -GM/(2a)</p>
                  <p>where a is the semi-major axis of the elliptical orbit.</p>
                  
                  <p className="pt-4">E = (1/2)(2600)² - (3.986 × 10¹⁴)/(7.0 × 10⁶)</p>
                  <p>E = 3.38 × 10⁶ - 5.694 × 10⁷</p>
                  <p>E = -5.36 × 10⁷ J/kg</p>
                  
                  <p className="pt-4">-5.36 × 10⁷ = -(3.986 × 10¹⁴) / (2a)</p>
                  <p className="font-bold text-orange-600 dark:text-orange-400">a = 3.71 × 10⁶ m = 3710 km</p>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Key Insight:</strong> The semi-major axis is 3710 km, which is LESS than Earth's radius (6371 km). This means the satellite's orbit intersects Earth's surface!
                </p>
              </div>
            </Card>

            {/* Step 4 */}
            <Card className="p-6 border-l-4 border-l-red-600">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Step 4: Determine Orbital Fate</h3>
              
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  For a stable orbit, the satellite's trajectory must not intersect Earth's surface. The perigee (closest point) of the elliptical orbit is:
                </p>
                
                <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg font-mono text-sm space-y-2">
                  <p><strong>Perigee Calculation:</strong></p>
                  <p>The collision occurs at r ≈ 7000 km (apogee of new ellipse)</p>
                  <p>For an ellipse: r_apogee = a(1 + e)</p>
                  <p>7000 = 3710(1 + e)</p>
                  <p>1 + e = 1.887</p>
                  <p>e = 0.887 (very eccentric!)</p>
                  
                  <p className="pt-4">r_perigee = a(1 - e) = 3710(1 - 0.887)</p>
                  <p className="font-bold text-red-600 dark:text-red-400">r_perigee = 418 km</p>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Conclusion:</strong> The perigee is 418 km, which is WELL BELOW Earth's surface (radius 6371 km). The combined satellite will crash into Earth's atmosphere and burn up within hours.
                </p>
              </div>
            </Card>

            {/* Final Answer */}
            <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900 border-l-4 border-l-green-600">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Final Answer Summary</h3>
              
              <div className="space-y-3 font-mono text-sm">
                <p><strong>1. Velocity after collision:</strong> 2.6 km/s (in direction of Satellite A)</p>
                <p><strong>2. Energy lost:</strong> 36 GJ (87% of original kinetic energy)</p>
                <p><strong>3. New orbital parameters:</strong></p>
                <p className="ml-4">Semi-major axis: 3710 km</p>
                <p className="ml-4">Eccentricity: 0.887</p>
                <p className="ml-4">Perigee: 418 km</p>
                <p className="ml-4">Apogee: 7000 km</p>
                <p><strong>4. Orbital fate:</strong> ❌ CRASH - The satellite will re-enter Earth's atmosphere and burn up. The collision was catastrophic!</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Physics Principles */}
        <section className="mb-12">
          <Card className="p-6 bg-blue-50 dark:bg-blue-900 border-l-4 border-l-blue-600">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Physics Principles Used</h3>
            
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex gap-3">
                <span className="font-bold text-blue-600 dark:text-blue-400">1.</span>
                <span><strong>Momentum Conservation:</strong> In the collision, momentum is conserved even though kinetic energy is lost.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600 dark:text-blue-400">2.</span>
                <span><strong>Inelastic Collision:</strong> Objects stick together, and kinetic energy is converted to internal energy (heat, deformation).</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600 dark:text-blue-400">3.</span>
                <span><strong>Orbital Mechanics:</strong> The velocity after collision determines the new orbital shape using energy conservation.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600 dark:text-blue-400">4.</span>
                <span><strong>Elliptical Orbits:</strong> An orbit with insufficient velocity becomes elliptical, and if the perigee is below Earth's surface, the satellite crashes.</span>
              </li>
            </ul>
          </Card>
        </section>

        {/* Navigation */}
        <section className="flex justify-between">
          <Link href="/integration-problems">
            <Button variant="outline" className="flex items-center gap-2">
              <ChevronLeft className="w-5 h-5" />
              Back to Integration Problems
            </Button>
          </Link>
          <Link href="/final-boss">
            <Button className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2">
              Next: The Final Boss →
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
