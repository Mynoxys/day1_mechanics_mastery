import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Orbital() {
  const [altitude, setAltitude] = useState(400); // km above Earth
  const [planetMass, setPlanetMass] = useState(1); // 1 = Earth, 0.1 = Moon, etc.
  const [showEscape, setShowEscape] = useState(false);

  // Constants
  const G = 6.674e-11; // Gravitational constant (N⋅m²/kg²)
  const R_earth = 6371; // Earth radius in km
  const M_earth = 5.972e24; // Earth mass in kg
  const M = M_earth * planetMass;
  const R = (R_earth + altitude) * 1000; // Convert to meters

  // Orbital calculations
  const Fg = (G * M) / (R * R); // Gravitational field strength (m/s²)
  const v_orbital = Math.sqrt((G * M) / R); // Orbital velocity
  const v_escape = Math.sqrt((2 * G * M) / R); // Escape velocity
  const period = (2 * Math.PI * R) / v_orbital; // Orbital period in seconds
  const period_hours = period / 3600;
  const period_days = period_hours / 24;

  // Energy calculations
  const mass_obj = 1000; // 1000 kg object
  const KE_orbital = 0.5 * mass_obj * v_orbital * v_orbital;
  const PE_orbital = -(G * M * mass_obj) / R;
  const E_total_orbital = KE_orbital + PE_orbital;
  const E_escape = 0; // At escape velocity, total energy is zero

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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Orbital Mechanics</h1>
          <div className="w-20" />
        </div>
      </header>

      <div className="container py-12">
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Gravitational Force & Orbital Motion
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Gravity provides the centripetal force that keeps satellites in orbit. The orbital velocity depends on the mass of the central body and the orbital radius. Escape velocity is the minimum speed needed to break free from gravitational pull entirely.
            </p>
          </div>
        </section>

        {/* Interactive Visualization */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Interactive Diagram */}
            <Card className="interactive-panel">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Orbital Mechanics Simulator
              </h3>

              {/* SVG Visualization */}
              <svg width={500} height={450} className="border border-gray-200 dark:border-slate-600 rounded-lg mb-6 bg-gray-50 dark:bg-slate-700">
                {/* Planet */}
                <circle cx="250" cy="225" r="40" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />
                <text x="250" y="230" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                  M
                </text>

                {/* Orbital path */}
                <circle cx="250" cy="225" r="120" fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5" />

                {/* Satellite */}
                <circle cx="370" cy="225" r="8" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />

                {/* Orbital velocity vector */}
                <line x1="370" y1="225" x2="370" y2={225 - 40} stroke="#f59e0b" strokeWidth="2" />
                <polygon points={`370,${225 - 40} 365,${225 - 32} 375,${225 - 32}`} fill="#f59e0b" />
                <text x="385" y="190" fill="#f59e0b" fontSize="11" fontWeight="bold">
                  v_orbital
                </text>

                {/* Gravitational force vector */}
                <line x1="370" y1="225" x2="310" y2="225" stroke="#ef4444" strokeWidth="2" />
                <polygon points={`310,225 318,220 318,230`} fill="#ef4444" />
                <text x="330" y="215" fill="#ef4444" fontSize="11" fontWeight="bold">
                  Fg
                </text>

                {/* Radius line */}
                <line x1="250" y1="225" x2="370" y2="225" stroke="#1f2937" strokeWidth="1" strokeDasharray="3,3" />
                <text x="305" y="215" fill="#1f2937" fontSize="10" fontWeight="bold">
                  r
                </text>

                {/* Altitude indicator */}
                <line x1="390" y1="225" x2="390" y2="265" stroke="#1f2937" strokeWidth="1" />
                <line x1="385" y1="265" x2="395" y2="265" stroke="#1f2937" strokeWidth="1" />
                <text x="400" y="250" fill="#1f2937" fontSize="10" fontWeight="bold">
                  h = {altitude} km
                </text>

                {/* Info box */}
                <rect x="50" y="20" width="400" height="60" fill="#dbeafe" stroke="#0284c7" strokeWidth="2" rx="8" />
                <text x="60" y="40" fill="#0c4a6e" fontSize="12" fontWeight="bold">
                  v_orbital = {v_orbital.toFixed(0)} m/s
                </text>
                <text x="60" y="60" fill="#0c4a6e" fontSize="12" fontWeight="bold">
                  Period = {period_hours.toFixed(1)} hours
                </text>
              </svg>

              {/* Controls */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Altitude: {altitude} km
                  </label>
                  <Slider
                    value={[altitude]}
                    onValueChange={(val) => setAltitude(val[0])}
                    min={100}
                    max={35786}
                    step={100}
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    {altitude === 35786 ? "(Geostationary orbit)" : altitude < 2000 ? "(Low Earth Orbit)" : "(Medium Earth Orbit)"}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Planet Mass: {planetMass === 1 ? "Earth" : planetMass === 0.1 ? "Moon" : planetMass === 0.11 ? "Mars" : "Custom"}
                  </label>
                  <Slider
                    value={[planetMass]}
                    onValueChange={(val) => setPlanetMass(val[0])}
                    min={0.1}
                    max={1}
                    step={0.1}
                    className="w-full"
                  />
                </div>

                <div className="flex gap-2">
                  <Button
                    variant={showEscape ? "default" : "outline"}
                    onClick={() => setShowEscape(!showEscape)}
                    className="flex-1"
                  >
                    {showEscape ? "Hide Escape Velocity" : "Show Escape Velocity"}
                  </Button>
                </div>
              </div>
            </Card>

            {/* Right: Explanation & Calculations */}
            <div className="space-y-8">
              {/* Orbital Calculations */}
              <Card className="interactive-panel">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Orbital Parameters
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 font-mono text-sm">
                  <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded border-l-4 border-l-blue-600">
                    <p><strong>Gravitational Field:</strong></p>
                    <p>g = GM / r²</p>
                    <p className="font-bold text-blue-600 dark:text-blue-400">{Fg.toFixed(2)} m/s²</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900 p-4 rounded border-l-4 border-l-green-600">
                    <p><strong>Orbital Velocity:</strong></p>
                    <p>v = √(GM / r)</p>
                    <p className="font-bold text-green-600 dark:text-green-400">{v_orbital.toFixed(0)} m/s</p>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded border-l-4 border-l-purple-600">
                    <p><strong>Orbital Period:</strong></p>
                    <p>T = 2πr / v</p>
                    <p className="font-bold text-purple-600 dark:text-purple-400">
                      {period_days >= 1 ? `${period_days.toFixed(2)} days` : `${period_hours.toFixed(1)} hours`}
                    </p>
                  </div>

                  {showEscape && (
                    <div className="bg-red-50 dark:bg-red-900 p-4 rounded border-l-4 border-l-red-600">
                      <p><strong>Escape Velocity:</strong></p>
                      <p>v_escape = √(2GM / r)</p>
                      <p className="font-bold text-red-600 dark:text-red-400">{v_escape.toFixed(0)} m/s</p>
                      <p className="text-xs mt-2">= {(v_escape / v_orbital).toFixed(2)}× orbital velocity</p>
                    </div>
                  )}
                </div>
              </Card>

              {/* Energy Analysis */}
              <Card className="interactive-panel">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Orbital Energy (1000 kg object)
                </h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-300 font-mono text-sm">
                  <div className="bg-gray-50 dark:bg-slate-600 p-4 rounded">
                    <p><strong>Kinetic Energy:</strong></p>
                    <p className="font-bold text-blue-600 dark:text-blue-400">{(KE_orbital / 1e9).toFixed(2)} GJ</p>
                  </div>

                  <div className="bg-gray-50 dark:bg-slate-600 p-4 rounded">
                    <p><strong>Potential Energy:</strong></p>
                    <p className="font-bold text-red-600 dark:text-red-400">{(PE_orbital / 1e9).toFixed(2)} GJ</p>
                  </div>

                  <div className="bg-gray-50 dark:bg-slate-600 p-4 rounded">
                    <p><strong>Total Energy:</strong></p>
                    <p className="font-bold text-purple-600 dark:text-purple-400">{(E_total_orbital / 1e9).toFixed(2)} GJ</p>
                  </div>
                </div>
              </Card>

              {/* Key Concepts */}
              <Card className="interactive-panel">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Orbital Laws
                </h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-300 text-sm">
                  <p>
                    <strong>Kepler's Third Law:</strong> T² ∝ r³. Satellites farther out orbit more slowly and have longer periods.
                  </p>
                  <p>
                    <strong>Geostationary Orbit:</strong> At ~36,000 km altitude, orbital period = 24 hours, so satellite stays above same location.
                  </p>
                  <p>
                    <strong>Escape Velocity:</strong> √2 times orbital velocity. Needed to break free from gravity entirely.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Worked Example */}
        <section className="mb-16">
          <Card className="interactive-panel">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Worked Example: International Space Station (ISS)
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Problem</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  The ISS orbits at an altitude of 408 km above Earth. Calculate its orbital velocity, period, and the gravitational acceleration at that altitude.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Solution</h4>
                <div className="bg-gray-50 dark:bg-slate-600 p-6 rounded-lg space-y-3 font-mono text-sm">
                  <p><strong>Step 1: Calculate orbital radius</strong></p>
                  <p>r = R_earth + altitude</p>
                  <p>r = 6371 + 408 = 6779 km = 6.779e6 m</p>

                  <p className="pt-2"><strong>Step 2: Orbital velocity</strong></p>
                  <p>v = √(GM / r)</p>
                  <p>v = √(3.986e14 / 6.779e6)</p>
                  <p className="font-bold text-blue-600 dark:text-blue-400">v = 7,680 m/s (7.68 km/s)</p>

                  <p className="pt-2"><strong>Step 3: Orbital period</strong></p>
                  <p>T = 2πr / v</p>
                  <p>T = 2π(6.779e6) / 7680</p>
                  <p className="font-bold text-blue-600 dark:text-blue-400">T = 5,550 seconds = 92.5 minutes</p>

                  <p className="pt-2"><strong>Step 4: Gravitational acceleration</strong></p>
                  <p>g = GM / r²</p>
                  <p className="font-bold text-blue-600 dark:text-blue-400">g = 8.69 m/s² (≈ 0.89g)</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900 rounded-lg border-l-4 border-l-blue-600">
              <p className="text-gray-700 dark:text-gray-200">
                <strong>Key Insight:</strong> The ISS is NOT in zero gravity—it experiences 89% of Earth's surface gravity. The astronauts feel weightless because they are in FREE FALL, constantly accelerating toward Earth at the same rate as the spacecraft.
              </p>
            </div>
          </Card>
        </section>

        {/* Next Steps */}
        <section className="text-center py-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Ready for Rotating Reference Frames?
          </h3>
          <Link href="/rotating-frames">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg rounded-lg">
              Learn Rotating Frames →
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
