import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { useState, useMemo } from "react";

export default function Energy() {
  const [height, setHeight] = useState(5);
  const [mass, setMass] = useState(2);
  const [springCompression, setSpringCompression] = useState(0.1);
  const [springConstant, setSpringConstant] = useState(100);
  const g = 9.8;

  // Gravitational potential energy
  const PE_grav = mass * g * height;

  // Kinetic energy (assuming object falls from rest)
  const velocity = Math.sqrt(2 * g * height);
  const KE = 0.5 * mass * velocity * velocity;

  // Spring potential energy
  const PE_spring = 0.5 * springConstant * springCompression * springCompression;

  // Total mechanical energy (conserved in ideal system)
  const totalEnergy = Math.max(PE_grav + KE, 1);
  
  // Safe calculations for bar heights to prevent NaN
  const PE_ratio = totalEnergy > 0 ? Math.min(PE_grav / totalEnergy, 1) : 0;
  const KE_ratio = totalEnergy > 0 ? Math.min(KE / totalEnergy, 1) : 0;

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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Energy Conservation</h1>
          <div className="w-20" />
        </div>
      </header>

      <div className="container py-12">
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Potential & Kinetic Energy
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Energy is never created or destroyed—it only transforms. When an object falls, potential energy (stored energy due to position) converts to kinetic energy (energy of motion). Understanding this transformation is the key to solving complex collision and spring problems.
            </p>
          </div>
        </section>

        {/* Interactive Visualization */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Interactive Diagram */}
            <Card className="interactive-panel">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Energy Transformation Simulator
              </h3>

              {/* SVG Visualization */}
              <svg width={500} height={400} className="border border-gray-200 dark:border-slate-600 rounded-lg mb-6 bg-gray-50 dark:bg-slate-700">
                {/* Ground */}
                <rect x="50" y="350" width="400" height="50" fill="#d1d5db" />
                <line x1="50" y1="350" x2="450" y2="350" stroke="#1f2937" strokeWidth="3" />

                {/* Falling object at different heights */}
                {/* Top position (potential energy) */}
                <circle cx="250" cy={50 + (1 - height / 10) * 250} r="15" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />

                {/* Height indicator */}
                <line x1="30" y1={50 + (1 - height / 10) * 250} x2="50" y2={50 + (1 - height / 10) * 250} stroke="#1f2937" strokeWidth="2" />
                <text x="10" y={55 + (1 - height / 10) * 250} fill="#1f2937" fontSize="12" fontWeight="bold">
                  h
                </text>

                {/* Ground level indicator */}
                <line x1="30" y1="350" x2="50" y2="350" stroke="#1f2937" strokeWidth="2" />
                <text x="15" y="370" fill="#1f2937" fontSize="12" fontWeight="bold">
                  0
                </text>

                {/* Energy bars */}
                <g>
                  {/* PE bar */}
                  <rect x="280" y={300 - PE_ratio * 80} width="30" height={PE_ratio * 80} fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
                  <text x="285" y="320" fill="#1f2937" fontSize="11" fontWeight="bold">
                    PE
                  </text>

                  {/* KE bar */}
                  <rect x="320" y={300 - KE_ratio * 80} width="30" height={KE_ratio * 80} fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />
                  <text x="320" y="320" fill="#1f2937" fontSize="11" fontWeight="bold">
                    KE
                  </text>

                  {/* Total energy line */}
                  <line x1="275" y1="300" x2="360" y2="300" stroke="#7c3aed" strokeWidth="2" strokeDasharray="5,5" />
                  <text x="365" y="305" fill="#7c3aed" fontSize="11" fontWeight="bold">
                    E_total
                  </text>
                </g>
              </svg>

              {/* Controls */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Height: {height.toFixed(1)} m
                  </label>
                  <Slider
                    value={[height]}
                    onValueChange={(val) => setHeight(val[0])}
                    min={0}
                    max={10}
                    step={0.5}
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
            </Card>

            {/* Right: Explanation & Calculations */}
            <div className="space-y-8">
              {/* Energy Analysis */}
              <Card className="interactive-panel">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Energy Calculations
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 font-mono text-sm">
                  <div className="bg-amber-50 dark:bg-amber-900 p-4 rounded border-l-4 border-l-amber-600">
                    <p><strong>Gravitational Potential Energy:</strong></p>
                    <p>PE = m × g × h</p>
                    <p>PE = {mass} × {g} × {height.toFixed(1)}</p>
                    <p className="font-bold text-amber-600 dark:text-amber-400">{PE_grav.toFixed(2)} J</p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded border-l-4 border-l-blue-600">
                    <p><strong>Kinetic Energy (at ground):</strong></p>
                    <p>v = √(2gh) = {velocity.toFixed(2)} m/s</p>
                    <p>KE = 0.5 × m × v²</p>
                    <p>KE = 0.5 × {mass} × {velocity.toFixed(2)}²</p>
                    <p className="font-bold text-blue-600 dark:text-blue-400">{KE.toFixed(2)} J</p>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded border-l-4 border-l-purple-600">
                    <p><strong>Total Mechanical Energy:</strong></p>
                    <p>E_total = PE + KE</p>
                    <p className="font-bold text-purple-600 dark:text-purple-400">{totalEnergy.toFixed(2)} J</p>
                  </div>
                </div>
              </Card>

              {/* Key Concepts */}
              <Card className="interactive-panel">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  The Conservation Law
                </h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <p>
                    <strong>In an ideal system (no friction):</strong> Total mechanical energy remains constant.
                  </p>
                  <p>
                    <strong>As height decreases:</strong> Potential energy decreases, but kinetic energy increases by the same amount.
                  </p>
                  <p>
                    <strong>At the ground:</strong> All potential energy has converted to kinetic energy.
                  </p>
                </div>
              </Card>

              {/* Try This */}
              <Card className="interactive-panel border-l-4 border-l-purple-600">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Try This:
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>🔹 Set height to 0. What happens to PE and KE?</li>
                  <li>🔹 Double the mass. Does total energy double?</li>
                  <li>🔹 What height gives equal PE and KE?</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Spring Energy Section */}
        <section className="mb-16">
          <Card className="interactive-panel">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Elastic Potential Energy (Springs)
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Spring Diagram */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Spring Simulator</h4>
                
                {/* SVG Spring Visualization */}
                <svg width={400} height={300} className="border border-gray-200 dark:border-slate-600 rounded-lg mb-6 bg-gray-50 dark:bg-slate-700">
                  {/* Wall */}
                  <rect x="20" y="80" width="30" height="140" fill="#4b5563" stroke="#1f2937" strokeWidth="2" />
                  <line x1="20" y1="80" x2="50" y2="80" stroke="#1f2937" strokeWidth="2" />
                  <line x1="20" y1="150" x2="50" y2="150" stroke="#1f2937" strokeWidth="2" />
                  <line x1="20" y1="220" x2="50" y2="220" stroke="#1f2937" strokeWidth="2" />
                  
                  {/* Spring coils - dynamic based on compression */}
                  <path
                    d={`M 50 150 Q 80 130 110 150 Q 140 170 170 150 Q 200 130 230 150 L ${250 - springCompression * 100} 150`}
                    stroke="#ef4444"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  
                  {/* Block */}
                  <rect x={250 - springCompression * 100} y="120" width="40" height="60" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />
                  <text x={270 - springCompression * 100} y="155" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">
                    m
                  </text>
                  
                  {/* Compression indicator */}
                  <line x1="300" y1="60" x2={270 - springCompression * 100} y2="60" stroke="#7c3aed" strokeWidth="2" strokeDasharray="5,5" />
                  <polygon points={`${270 - springCompression * 100},60 ${260 - springCompression * 100},55 ${260 - springCompression * 100},65`} fill="#7c3aed" />
                  <text x="280" y="50" fill="#7c3aed" fontSize="11" fontWeight="bold">
                    x = {springCompression.toFixed(2)}m
                  </text>
                  
                  {/* Energy indicator */}
                  <rect x="50" y="250" width="300" height="30" fill="#dbeafe" stroke="#0284c7" strokeWidth="2" rx="4" />
                  <text x="200" y="272" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0c4a6e">
                    PE_spring = {PE_spring.toFixed(2)} J
                  </text>
                </svg>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Spring Compression: {springCompression.toFixed(2)} m
                    </label>
                    <Slider
                      value={[springCompression]}
                      onValueChange={(val) => setSpringCompression(val[0])}
                      min={0}
                      max={0.3}
                      step={0.01}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Spring Constant (k): {springConstant} N/m
                    </label>
                    <Slider
                      value={[springConstant]}
                      onValueChange={(val) => setSpringConstant(val[0])}
                      min={50}
                      max={500}
                      step={50}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Energy Stored</h4>
                <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg space-y-3 font-mono text-sm">
                  <p><strong>Elastic Potential Energy:</strong></p>
                  <p>PE_spring = 0.5 × k × x²</p>
                  <p>PE_spring = 0.5 × {springConstant} × {springCompression.toFixed(2)}²</p>
                  <p className="font-bold text-blue-600 dark:text-blue-400">{PE_spring.toFixed(2)} J</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900 rounded-lg border-l-4 border-l-blue-600">
              <p className="text-gray-700 dark:text-gray-200">
                <strong>Key Insight:</strong> A compressed spring stores energy proportional to the square of the compression. Stiffer springs (larger k) store more energy for the same compression.
              </p>
            </div>
          </Card>
        </section>

        {/* Next Steps */}
        <section className="text-center py-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Ready for Momentum & Collisions?
          </h3>
          <Link href="/momentum">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg rounded-lg">
              Learn Momentum & Collisions →
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
