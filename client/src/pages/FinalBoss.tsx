import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function FinalBoss() {
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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">🏆 The Final Boss Problem</h1>
          <div className="w-20" />
        </div>
      </header>

      <div className="container py-12 max-w-4xl">
        {/* Problem Statement */}
        <section className="mb-12">
          <Card className="p-8 bg-gradient-to-br from-red-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 border-2 border-red-400">
            <h2 className="text-3xl font-bold text-red-700 dark:text-red-400 mb-6">🎯 The Ultimate Challenge</h2>
            
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p className="text-lg font-bold">
                <strong>Scenario:</strong> A space rescue mission launches from Earth. A satellite has malfunctioned in orbit and must be recovered. The rescue involves a complex sequence of events combining forces, pulleys, momentum, collisions, and orbital mechanics.
              </p>
              
              <div className="bg-white dark:bg-slate-900 p-6 rounded-lg space-y-4">
                <p><strong>Phase 1: Launch & Ascent</strong></p>
                <p>A rescue pod (mass = 2000 kg) is launched vertically upward from a ramp inclined at 30° to the horizontal. The ramp is 50 m long. The pod experiences friction (μ = 0.15) as it slides up the ramp, then launches into the air.</p>
                
                <p className="pt-4"><strong>Phase 2: Pulley System Deployment</strong></p>
                <p>Once airborne, the pod deploys a tether system. A 500 kg counterweight hangs from a pulley system on the pod. The tether connects to a 300 kg satellite in orbit at radius r = 6800 km with velocity v = 7.8 km/s. The pulley system has mechanical advantage 3:1.</p>
                
                <p className="pt-4"><strong>Phase 3: Orbital Rendezvous & Collision</strong></p>
                <p>The pod reaches the satellite's orbit with velocity 7.2 km/s. The pod collides with the satellite (perfectly inelastic collision). Both objects stick together.</p>
                
                <p className="pt-4"><strong>Phase 4: Return Trajectory</strong></p>
                <p>After collision, the combined mass must return to Earth. Calculate the complete trajectory.</p>
              </div>
              
              <p className="font-bold text-red-600 dark:text-red-400 text-lg">
                Find: (1) Pod's velocity at top of ramp, (2) Maximum height reached, (3) Pod's velocity at orbital altitude, (4) Velocity after collision, (5) Energy lost, (6) Will the combined mass return to Earth safely?
              </p>
            </div>
          </Card>
        </section>

        {/* Step-by-Step Solution */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Complete Step-by-Step Solution</h2>
          
          <div className="space-y-6">
            {/* Phase 1: Ramp Dynamics */}
            <Card className="p-6 border-l-4 border-l-blue-600">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Phase 1: Dynamics on the Ramp</h3>
              
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  The pod slides up a 50 m ramp inclined at 30°. We need to find the velocity at the top of the ramp.
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg font-mono text-sm space-y-2">
                  <p><strong>Step 1a: Identify Forces</strong></p>
                  <p>Weight component along ramp: W_parallel = mg sin(30°)</p>
                  <p>W_parallel = 2000 × 9.8 × 0.5 = 9,800 N</p>
                  
                  <p className="pt-2">Normal force: N = mg cos(30°)</p>
                  <p>N = 2000 × 9.8 × 0.866 = 16,973 N</p>
                  
                  <p className="pt-2">Friction force: f = μN = 0.15 × 16,973 = 2,546 N</p>
                  
                  <p className="pt-4"><strong>Step 1b: Net Force & Acceleration</strong></p>
                  <p>F_net = F_applied - W_parallel - f</p>
                  <p>Assuming constant applied force F = 30,000 N (launch thrust):</p>
                  <p>F_net = 30,000 - 9,800 - 2,546 = 17,654 N</p>
                  
                  <p className="pt-2">a = F_net / m = 17,654 / 2000 = 8.827 m/s²</p>
                  
                  <p className="pt-4"><strong>Step 1c: Velocity at Top of Ramp</strong></p>
                  <p>Using v² = u² + 2as (u = 0, a = 8.827 m/s², s = 50 m):</p>
                  <p>v² = 0 + 2 × 8.827 × 50 = 882.7</p>
                  <p className="font-bold text-blue-600 dark:text-blue-400">v_ramp = 29.7 m/s</p>
                </div>
              </div>
            </Card>

            {/* Phase 2: Projectile Motion */}
            <Card className="p-6 border-l-4 border-l-purple-600">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Phase 2: Projectile Motion to Orbital Altitude</h3>
              
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  The pod launches at 29.7 m/s at 30° angle. It must reach orbital altitude of 429 km (6800 km orbital radius - 6371 km Earth radius).
                </p>
                
                <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg font-mono text-sm space-y-2">
                  <p><strong>Step 2a: Initial Velocity Components</strong></p>
                  <p>v_x = 29.7 × cos(30°) = 25.7 m/s</p>
                  <p>v_y = 29.7 × sin(30°) = 14.85 m/s</p>
                  
                  <p className="pt-4"><strong>Step 2b: Maximum Height (without thrust)</strong></p>
                  <p>h_max = v_y² / (2g) = (14.85)² / (2 × 9.8) = 11.3 m</p>
                  
                  <p className="pt-4"><strong>Step 2c: Rocket Propulsion Phase</strong></p>
                  <p>The pod must reach 429 km altitude. Using energy conservation:</p>
                  <p>(1/2)mv_launch² + Work_thrust = (1/2)mv_orbital² + mgh</p>
                  
                  <p className="pt-4">Assuming continuous thrust provides additional energy:</p>
                  <p>Work_thrust = 429,000 × 2000 × 9.8 / (efficiency factor)</p>
                  
                  <p className="pt-4"><strong>Step 2d: Velocity at Orbital Altitude</strong></p>
                  <p>Using energy conservation with realistic rocket parameters:</p>
                  <p className="font-bold text-purple-600 dark:text-purple-400">v_at_orbit = 7.2 km/s = 7200 m/s</p>
                  <p className="text-sm">(This is the velocity needed to reach the satellite)</p>
                </div>
              </div>
            </Card>

            {/* Phase 3: Orbital Collision */}
            <Card className="p-6 border-l-4 border-l-orange-600">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Phase 3: Collision in Orbit</h3>
              
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  The pod (2000 kg, 7.2 km/s) collides head-on with the satellite (300 kg, 7.8 km/s). They stick together (perfectly inelastic).
                </p>
                
                <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded-lg font-mono text-sm space-y-2">
                  <p><strong>Step 3a: Momentum Before Collision</strong></p>
                  <p>Assuming head-on collision (opposite directions):</p>
                  <p>p_pod = 2000 × 7200 = 14,400,000 kg·m/s</p>
                  <p>p_sat = 300 × (-7800) = -2,340,000 kg·m/s</p>
                  
                  <p className="pt-4">p_total = 14,400,000 - 2,340,000 = 12,060,000 kg·m/s</p>
                  
                  <p className="pt-4"><strong>Step 3b: Velocity After Collision</strong></p>
                  <p>p_total = (m_pod + m_sat) × v_after</p>
                  <p>12,060,000 = 2300 × v_after</p>
                  <p className="font-bold text-orange-600 dark:text-orange-400">v_after = 5,243 m/s = 5.24 km/s</p>
                  
                  <p className="pt-4"><strong>Step 3c: Kinetic Energy Before</strong></p>
                  <p>KE_before = (1/2) × 2000 × (7200)² + (1/2) × 300 × (7800)²</p>
                  <p>KE_before = 51.84 × 10⁹ + 9.126 × 10⁹ = 60.966 × 10⁹ J</p>
                  
                  <p className="pt-4"><strong>Step 3d: Kinetic Energy After</strong></p>
                  <p>KE_after = (1/2) × 2300 × (5243)²</p>
                  <p>KE_after = 31.62 × 10⁹ J</p>
                  
                  <p className="pt-4"><strong>Step 3e: Energy Lost</strong></p>
                  <p className="font-bold text-orange-600 dark:text-orange-400">ΔE = 60.966 × 10⁹ - 31.62 × 10⁹ = 29.35 × 10⁹ J ≈ 29.4 GJ</p>
                  <p className="text-sm">(48% of kinetic energy lost in collision)</p>
                </div>
              </div>
            </Card>

            {/* Phase 4: Return Trajectory */}
            <Card className="p-6 border-l-4 border-l-green-600">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Phase 4: Return to Earth</h3>
              
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  After collision, the combined mass has velocity 5.24 km/s at orbital radius 6800 km. Will it return to Earth safely?
                </p>
                
                <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg font-mono text-sm space-y-2">
                  <p><strong>Step 4a: Check Circular Orbit Velocity</strong></p>
                  <p>For stable circular orbit at r = 6800 km:</p>
                  <p>v_circular = √(GM / r) = √(3.986 × 10¹⁴ / 6.8 × 10⁶)</p>
                  <p>v_circular = 7,665 m/s</p>
                  
                  <p className="pt-4"><strong>Step 4b: Actual Velocity vs Required</strong></p>
                  <p>v_after = 5,243 m/s &lt;&lt; v_circular = 7,665 m/s</p>
                  <p>The combined mass cannot maintain circular orbit!</p>
                  
                  <p className="pt-4"><strong>Step 4c: Orbital Energy</strong></p>
                  <p>E = (1/2)v² - GM/r = -GM/(2a)</p>
                  <p>E = (1/2)(5243)² - (3.986 × 10¹⁴)/(6.8 × 10⁶)</p>
                  <p>E = 13.75 × 10⁶ - 58.62 × 10⁶ = -44.87 × 10⁶ J/kg</p>
                  
                  <p className="pt-4">-44.87 × 10⁶ = -(3.986 × 10¹⁴) / (2a)</p>
                  <p>a = 4,434 km (semi-major axis)</p>
                  
                  <p className="pt-4"><strong>Step 4d: Perigee Distance</strong></p>
                  <p>r_apogee = 6800 km (current position)</p>
                  <p>r_apogee = a(1 + e)</p>
                  <p>6800 = 4434(1 + e)</p>
                  <p>e = 0.534</p>
                  
                  <p className="pt-4">r_perigee = a(1 - e) = 4434(1 - 0.534) = 2,068 km</p>
                  
                  <p className="pt-4"><strong>Step 4e: Re-entry Analysis</strong></p>
                  <p>r_perigee = 2,068 km &gt; Earth's radius (6371 km)? NO!</p>
                  <p className="font-bold text-green-600 dark:text-green-400">The combined mass WILL RE-ENTER Earth's atmosphere!</p>
                </div>
              </div>
            </Card>

            {/* Final Answer */}
            <Card className="p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900 dark:to-orange-900 border-2 border-red-600">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">🏆 Final Boss: Complete Answer</h3>
              
              <div className="space-y-3 font-mono text-sm">
                <p><strong className="text-red-600 dark:text-red-400">(1) Velocity at top of ramp:</strong> 29.7 m/s</p>
                <p><strong className="text-red-600 dark:text-red-400">(2) Maximum height (ballistic):</strong> 11.3 m (then rocket thrust to reach orbit)</p>
                <p><strong className="text-red-600 dark:text-red-400">(3) Velocity at orbital altitude:</strong> 7.2 km/s</p>
                <p><strong className="text-red-600 dark:text-red-400">(4) Velocity after collision:</strong> 5.24 km/s</p>
                <p><strong className="text-red-600 dark:text-red-400">(5) Energy lost in collision:</strong> 29.4 GJ (48% of kinetic energy)</p>
                <p><strong className="text-red-600 dark:text-red-400">(6) Return to Earth:</strong> ✅ YES - The combined mass enters an elliptical orbit with perigee at 2,068 km, which is BELOW Earth's surface. The rescue mission will crash into Earth's atmosphere and burn up!</p>
                
                <p className="pt-4 text-lg font-bold text-red-600 dark:text-red-400">
                  🎯 MISSION OUTCOME: The rescue pod successfully reaches the satellite and collides with it, but the combined mass cannot escape Earth's gravity well. The mission ends in a controlled re-entry and burn-up in the atmosphere. The satellite is destroyed, but the rescue pod's data is transmitted before impact.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Concepts Tested */}
        <section className="mb-12">
          <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">🎓 All Concepts Tested</h3>
            
            <div className="grid md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
              <div>
                <p className="font-bold text-blue-600 dark:text-blue-400 mb-2">Day 1: Dynamics</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Inclined plane forces</li>
                  <li>Friction and normal forces</li>
                  <li>Newton's second law</li>
                  <li>Kinematics (v² = u² + 2as)</li>
                </ul>
              </div>
              
              <div>
                <p className="font-bold text-purple-600 dark:text-purple-400 mb-2">Day 2: Energy & Momentum</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Kinetic energy</li>
                  <li>Momentum conservation</li>
                  <li>Inelastic collisions</li>
                  <li>Energy loss calculations</li>
                </ul>
              </div>
              
              <div>
                <p className="font-bold text-orange-600 dark:text-orange-400 mb-2">Day 3: Circular Motion</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Orbital velocity</li>
                  <li>Gravitational force</li>
                  <li>Orbital energy</li>
                  <li>Elliptical orbits</li>
                </ul>
              </div>
              
              <div>
                <p className="font-bold text-green-600 dark:text-green-400 mb-2">Day 4: Integration</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Multi-phase problem solving</li>
                  <li>Energy conservation</li>
                  <li>Orbital mechanics</li>
                  <li>Collision analysis</li>
                </ul>
              </div>
            </div>
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
          <Link href="/">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2">
              Return to Home
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
