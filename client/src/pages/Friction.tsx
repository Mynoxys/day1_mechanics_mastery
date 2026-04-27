import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Friction() {
  const [appliedForce, setAppliedForce] = useState(5);
  const [mu_s, setMu_s] = useState(0.5);
  const [mu_k, setMu_k] = useState(0.3);
  const mass = 10;
  const g = 9.8;
  const weight = mass * g;
  const normalForce = weight;

  // Maximum static friction
  const f_s_max = mu_s * normalForce;
  
  // Kinetic friction (if moving)
  const f_k = mu_k * normalForce;

  // Determine state
  const isMoving = appliedForce > f_s_max;
  const frictionForce = isMoving ? f_k : Math.min(appliedForce, f_s_max);
  const netForce = appliedForce - frictionForce;
  const acceleration = netForce / mass;

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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Friction Fundamentals</h1>
          <div className="w-20" />
        </div>
      </header>

      <div className="container py-12">
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Static vs. Kinetic Friction
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Friction is the resistance to motion between two surfaces in contact. There are two types: <strong>static friction</strong> (prevents motion from starting) and <strong>kinetic friction</strong> (opposes motion once it's started). Understanding the difference is crucial for solving real-world problems.
            </p>
          </div>
        </section>

        {/* Interactive Visualization */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Interactive Diagram */}
            <Card className="interactive-panel">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Interactive Friction Simulator
              </h3>

              {/* SVG Visualization */}
              <svg width={500} height={350} className="border border-gray-200 dark:border-slate-600 rounded-lg mb-6 bg-gray-50 dark:bg-slate-700">
                {/* Ground */}
                <rect x="50" y="250" width="400" height="80" fill="#d1d5db" />
                <line x1="50" y1="250" x2="450" y2="250" stroke="#1f2937" strokeWidth="3" />

                {/* Block */}
                <rect x="180" y="180" width="60" height="70" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />
                <text x="195" y="225" fill="white" fontSize="14" fontWeight="bold">
                  {mass} kg
                </text>

                {/* Applied Force Arrow */}
                <g>
                  <line
                    x1="240"
                    y1="215"
                    x2={240 + appliedForce * 8}
                    y2="215"
                    stroke="#1e40af"
                    strokeWidth="3"
                  />
                  <polygon
                    points={`${240 + appliedForce * 8},215 ${240 + appliedForce * 8 - 10},210 ${240 + appliedForce * 8 - 10},220`}
                    fill="#1e40af"
                  />
                  <rect x={240 + appliedForce * 4 - 50} y="170" width="100" height="20" fill="white" stroke="#1e40af" strokeWidth="1" rx="3" />
                  <text x={240 + appliedForce * 4 - 46} y="185" fill="#1e40af" fontSize="12" fontWeight="bold">
                    F = {appliedForce.toFixed(1)} N
                  </text>
                </g>

                {/* Friction Force Arrow (opposite direction) */}
                {frictionForce > 0 && (
                  <g>
                    <line
                      x1="180"
                      y1="215"
                      x2={180 - frictionForce * 8}
                      y2="215"
                      stroke="#991b1b"
                      strokeWidth="3"
                    />
                    <polygon
                      points={`${180 - frictionForce * 8},215 ${180 - frictionForce * 8 + 10},210 ${180 - frictionForce * 8 + 10},220`}
                      fill="#991b1b"
                    />
                    <rect x={180 - frictionForce * 4 - 50} y="170" width="100" height="20" fill="white" stroke="#991b1b" strokeWidth="1" rx="3" />
                    <text x={180 - frictionForce * 4 - 46} y="185" fill="#991b1b" fontSize="12" fontWeight="bold">
                      f = {frictionForce.toFixed(1)} N
                    </text>
                  </g>
                )}

                {/* Status indicator */}
                <rect x="50" y="20" width="400" height="50" fill={isMoving ? "#fecaca" : "#bbf7d0"} stroke={isMoving ? "#dc2626" : "#16a34a"} strokeWidth="2" rx="8" />
                <text x="250" y="55" textAnchor="middle" fontSize="18" fontWeight="bold" fill={isMoving ? "#991b1b" : "#15803d"}>
                  {isMoving ? "🔴 MOVING" : "🟢 STATIONARY"}
                </text>
              </svg>

              {/* Controls */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Applied Force: {appliedForce.toFixed(1)} N
                  </label>
                  <Slider
                    value={[appliedForce]}
                    onValueChange={(val) => setAppliedForce(val[0])}
                    min={0}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    μₛ (Static): {mu_s.toFixed(2)}
                  </label>
                  <Slider
                    value={[mu_s]}
                    onValueChange={(val) => setMu_s(val[0])}
                    min={0}
                    max={1}
                    step={0.05}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    μₖ (Kinetic): {mu_k.toFixed(2)}
                  </label>
                  <Slider
                    value={[mu_k]}
                    onValueChange={(val) => setMu_k(val[0])}
                    min={0}
                    max={mu_s}
                    step={0.05}
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
                  Force Analysis
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 font-mono text-sm">
                  <div className="bg-gray-50 dark:bg-slate-600 p-4 rounded">
                    <p>Weight: W = {weight.toFixed(1)} N</p>
                    <p>Normal Force: N = {normalForce.toFixed(1)} N</p>
                  </div>

                  <div className="bg-gray-50 dark:bg-slate-600 p-4 rounded">
                    <p><strong>Max Static Friction:</strong></p>
                    <p>f_s,max = μₛ × N</p>
                    <p>f_s,max = {mu_s} × {normalForce.toFixed(1)}</p>
                    <p className="font-bold text-green-600 dark:text-green-400">{f_s_max.toFixed(2)} N</p>
                  </div>

                  <div className="bg-gray-50 dark:bg-slate-600 p-4 rounded">
                    <p><strong>Kinetic Friction:</strong></p>
                    <p>f_k = μₖ × N</p>
                    <p>f_k = {mu_k} × {normalForce.toFixed(1)}</p>
                    <p className="font-bold text-orange-600 dark:text-orange-400">{f_k.toFixed(2)} N</p>
                  </div>

                  <div className="bg-gray-50 dark:bg-slate-600 p-4 rounded">
                    <p><strong>Actual Friction:</strong></p>
                    <p className="font-bold text-red-600 dark:text-red-400">{frictionForce.toFixed(2)} N</p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded border-l-4 border-l-blue-600">
                    <p><strong>Net Force:</strong></p>
                    <p>F_net = {appliedForce.toFixed(1)} - {frictionForce.toFixed(2)}</p>
                    <p className="font-bold text-blue-600 dark:text-blue-400">{netForce.toFixed(2)} N</p>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded border-l-4 border-l-purple-600">
                    <p><strong>Acceleration:</strong></p>
                    <p>a = F_net / m = {netForce.toFixed(2)} / {mass}</p>
                    <p className="font-bold text-purple-600 dark:text-purple-400">{acceleration.toFixed(3)} m/s²</p>
                  </div>
                </div>
              </Card>

              {/* Key Concepts */}
              <Card className="interactive-panel">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  The Critical Threshold
                </h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <p>
                    <strong>When F &lt; f_s,max:</strong> The block stays stationary. Friction exactly equals the applied force.
                  </p>
                  <p>
                    <strong>When F = f_s,max:</strong> The block is on the verge of sliding. This is the "critical" condition.
                  </p>
                  <p>
                    <strong>When F &gt; f_s,max:</strong> The block slides. Kinetic friction takes over, which is usually less than static friction.
                  </p>
                </div>
              </Card>

              {/* Try This */}
              <Card className="interactive-panel border-l-4 border-l-purple-600">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Try This:
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>🔹 Increase applied force until the block moves. What happens?</li>
                  <li>🔹 Once moving, decrease the force. Does it stop immediately?</li>
                  <li>🔹 Why is μₖ always less than μₛ?</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Worked Example */}
        <section className="mb-16">
          <Card className="interactive-panel">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Worked Example: The Magazine & Book Problem
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Problem Statement</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  A magazine (0.25 kg) rests on a book (0.7 kg). The coefficient of static friction between them is μₛ = 0.5. If you pull the book with just enough force that the magazine barely moves with it (no slipping), what force is required?
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Solution</h4>
                <div className="bg-gray-50 dark:bg-slate-600 p-6 rounded-lg space-y-3 font-mono text-sm">
                  <p><strong>Step 1: Find the normal force on the magazine</strong></p>
                  <p>N = m_magazine × g = 0.25 × 9.8 = <span className="text-blue-600 dark:text-blue-400">2.45 N</span></p>

                  <p className="pt-2"><strong>Step 2: Max static friction on magazine</strong></p>
                  <p>f_s,max = μₛ × N = 0.5 × 2.45 = <span className="text-green-600 dark:text-green-400">1.225 N</span></p>

                  <p className="pt-2"><strong>Step 3: For no slipping, magazine must accelerate with the book</strong></p>
                  <p>The friction on the magazine must provide this acceleration.</p>

                  <p className="pt-2"><strong>Step 4: Total system (magazine + book)</strong></p>
                  <p>Total mass = 0.25 + 0.7 = 0.95 kg</p>
                  <p>For critical condition: a = f_s,max / m_magazine</p>
                  <p>a = 1.225 / 0.25 = <span className="text-purple-600 dark:text-purple-400">4.9 m/s²</span></p>

                  <p className="pt-2"><strong>Step 5: Force needed on book</strong></p>
                  <p>F = (Total mass) × a = 0.95 × 4.9 = <span className="text-orange-600 dark:text-orange-400">4.655 N</span></p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900 rounded-lg border-l-4 border-l-blue-600">
              <p className="text-gray-700 dark:text-gray-200">
                <strong>Key Insight:</strong> The friction between the magazine and book is what accelerates the magazine. If you pull too hard, the magazine can't keep up and slips. If you pull gently, both move together.
              </p>
            </div>
          </Card>
        </section>

        {/* Next Steps */}
        <section className="text-center py-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Ready for Tension & Pulleys?
          </h3>
          <Link href="/tension">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg rounded-lg">
              Learn Tension & Pulleys →
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
