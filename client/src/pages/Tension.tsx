import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Tension() {
  const [mass1, setMass1] = useState(2);
  const [mass2, setMass2] = useState(3);
  const [mu_k, setMu_k] = useState(0.1);
  const g = 9.8;

  // Calculate system dynamics
  const weight1 = mass1 * g;
  const weight2 = mass2 * g;
  const normal1 = weight1;
  const friction1 = mu_k * normal1;

  // For a pulley system: m2 pulls m1 horizontally
  // m2 falls, m1 slides horizontally
  // Both have same acceleration (connected by rope)
  // m2: m2*g - T = m2*a
  // m1: T - f = m1*a
  // Adding: m2*g - f = (m1 + m2)*a
  const acceleration = (weight2 - friction1) / (mass1 + mass2);
  const tension = mass1 * (acceleration + 0);
  const tension2 = mass2 * (g - acceleration);

  // Use average for consistency
  const T = (tension + tension2) / 2;

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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tension & Pulleys</h1>
          <div className="w-20" />
        </div>
      </header>

      <div className="container py-12">
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Understanding Tension in Ropes
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Tension is the force transmitted through a rope or string. In a pulley system, tension connects two masses, forcing them to move together with the same acceleration. This is the foundation of coupled systems.
            </p>
          </div>
        </section>

        {/* Interactive Visualization */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Interactive Diagram */}
            <Card className="interactive-panel">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Pulley System Simulator
              </h3>

              {/* SVG Visualization */}
              <svg width={500} height={450} className="border border-gray-200 dark:border-slate-600 rounded-lg mb-6 bg-gray-50 dark:bg-slate-700">
                {/* Horizontal surface */}
                <rect x="50" y="320" width="400" height="100" fill="#d1d5db" />
                <line x1="50" y1="320" x2="450" y2="320" stroke="#1f2937" strokeWidth="3" />

                {/* Pulley */}
                <circle cx="420" cy="80" r="20" fill="#6b7280" stroke="#1f2937" strokeWidth="2" />
                <circle cx="420" cy="80" r="15" fill="#9ca3af" />

                {/* Rope from m1 to pulley */}
                <line x1="150" y1="250" x2="400" y2="100" stroke="#ea580c" strokeWidth="3" />

                {/* Rope from pulley to m2 */}
                <line x1="420" y1="100" x2="420" y2="200" stroke="#ea580c" strokeWidth="3" />

                {/* Block 1 (horizontal) */}
                <rect x="120" y="270" width="60" height="50" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />
                <text x="135" y="300" fill="white" fontSize="12" fontWeight="bold">
                  {mass1} kg
                </text>

                {/* Block 2 (hanging) */}
                <rect x="390" y="200" width="60" height="60" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
                <text x="405" y="235" fill="white" fontSize="12" fontWeight="bold">
                  {mass2} kg
                </text>

                {/* Tension arrows */}
                <g>
                  <line x1="150" y1="295" x2="100" y2="295" stroke="#ea580c" strokeWidth="2" />
                  <polygon points="100,295 110,290 110,300" fill="#ea580c" />
                  <text x="70" y="285" fill="#ea580c" fontSize="12" fontWeight="bold">
                    T
                  </text>
                </g>

                <g>
                  <line x1="420" y1="200" x2="420" y2="150" stroke="#ea580c" strokeWidth="2" />
                  <polygon points="420,150 415,160 425,160" fill="#ea580c" />
                  <text x="430" y="175" fill="#ea580c" fontSize="12" fontWeight="bold">
                    T
                  </text>
                </g>

                {/* Weight of m2 */}
                <g>
                  <line x1="420" y1="260" x2="420" y2="320" stroke="#1e40af" strokeWidth="2" />
                  <polygon points="420,320 415,310 425,310" fill="#1e40af" />
                  <text x="430" y="290" fill="#1e40af" fontSize="12" fontWeight="bold">
                    W2
                  </text>
                </g>

                {/* Friction on m1 */}
                <g>
                  <line x1="180" y1="295" x2="230" y2="295" stroke="#991b1b" strokeWidth="2" />
                  <polygon points="230,295 220,290 220,300" fill="#991b1b" />
                  <text x="200" y="310" fill="#991b1b" fontSize="12" fontWeight="bold">
                    f
                  </text>
                </g>

                {/* Acceleration indicator */}
                <rect x="50" y="20" width="400" height="40" fill="#dbeafe" stroke="#0284c7" strokeWidth="2" rx="8" />
                <text x="250" y="48" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#0c4a6e">
                  a = {acceleration.toFixed(2)} m/s²
                </text>
              </svg>

              {/* Controls */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Mass 1 (horizontal): {mass1} kg
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
                    Mass 2 (hanging): {mass2} kg
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
                    μk (Friction): {mu_k.toFixed(2)}
                  </label>
                  <Slider
                    value={[mu_k]}
                    onValueChange={(val) => setMu_k(val[0])}
                    min={0}
                    max={0.5}
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
                  System Analysis
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 font-mono text-sm">
                  <div className="bg-gray-50 dark:bg-slate-600 p-4 rounded">
                    <p><strong>Mass 1 (Horizontal):</strong></p>
                    <p>Weight: W1 = {weight1.toFixed(2)} N</p>
                    <p>Normal: N = {normal1.toFixed(2)} N</p>
                    <p>Friction: f = {friction1.toFixed(2)} N</p>
                  </div>

                  <div className="bg-gray-50 dark:bg-slate-600 p-4 rounded">
                    <p><strong>Mass 2 (Hanging):</strong></p>
                    <p>Weight: W2 = {weight2.toFixed(2)} N</p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded border-l-4 border-l-blue-600">
                    <p><strong>System Acceleration:</strong></p>
                    <p>a = (W2 - f) / (m1 + m2)</p>
                    <p>a = ({weight2.toFixed(2)} - {friction1.toFixed(2)}) / {(mass1 + mass2).toFixed(1)}</p>
                    <p className="font-bold text-blue-600 dark:text-blue-400">{acceleration.toFixed(3)} m/s²</p>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded border-l-4 border-l-orange-600">
                    <p><strong>Tension in Rope:</strong></p>
                    <p>T = m1 * a</p>
                    <p>T = {mass1} * {acceleration.toFixed(3)}</p>
                    <p className="font-bold text-orange-600 dark:text-orange-400">{T.toFixed(2)} N</p>
                  </div>
                </div>
              </Card>

              {/* Key Concepts */}
              <Card className="interactive-panel">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  The Constraint
                </h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <p>
                    <strong>Both masses accelerate together:</strong> The rope connects them, so they must have the same acceleration magnitude.
                  </p>
                  <p>
                    <strong>Tension is the same throughout:</strong> Assuming a massless, frictionless pulley, the tension in the rope is uniform.
                  </p>
                  <p>
                    <strong>The key insight:</strong> You cannot solve for m1 and m2 independently. You must treat them as a system.
                  </p>
                </div>
              </Card>

              {/* Try This */}
              <Card className="interactive-panel border-l-4 border-l-purple-600">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Try This:
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>🔹 What happens if m2 = 0? Does m1 accelerate?</li>
                  <li>🔹 What if friction = 0? How does acceleration change?</li>
                  <li>🔹 Can you find the condition where a = 0?</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Worked Example */}
        <section className="mb-16">
          <Card className="interactive-panel">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Worked Example: Multi-Block System
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Problem Statement</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  A 2 kg block slides down a ramp (30 degrees) connected by a rope over a pulley to a 3 kg block hanging vertically. The coefficient of kinetic friction on the ramp is 0.1. Find the acceleration and tension.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Solution</h4>
                <div className="bg-gray-50 dark:bg-slate-600 p-6 rounded-lg space-y-3 font-mono text-sm">
                  <p><strong>Step 1: Forces on 2 kg block (on ramp)</strong></p>
                  <p>W = 2 * 9.8 = 19.6 N</p>
                  <p>N = 19.6 * cos(30) = 16.97 N</p>
                  <p>f = 0.1 * 16.97 = 1.70 N</p>
                  <p>W_parallel = 19.6 * sin(30) = 9.8 N</p>

                  <p className="pt-2\"><strong>Step 2: Forces on 3 kg block (hanging)</strong></p>\n                  <p>W = 3 * 9.8 = 29.4 N</p>

                  <p className="pt-2\"><strong>Step 3: System equation</strong></p>\n                  <p>For m2 (down): 29.4 - T = 3a</p>
                  <p>For m1 (up ramp): T - 9.8 - 1.70 = 2a</p>
                  <p>Adding: 29.4 - 11.5 = 5a</p>
                  <p className="font-bold text-blue-600 dark:text-blue-400\">a = 3.58 m/s²</p>

                  <p className="pt-2\"><strong>Step 4: Tension</strong></p>\n                  <p>T = 29.4 - 3 * 3.58 = <span className="text-orange-600 dark:text-orange-400\">18.66 N</span></p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900 rounded-lg border-l-4 border-l-blue-600">
              <p className="text-gray-700 dark:text-gray-200">
                <strong>Key Insight:</strong> The heavier hanging mass (3 kg) pulls the lighter block (2 kg) up the ramp. The system accelerates because the weight difference overcomes friction.
              </p>
            </div>
          </Card>
        </section>

        {/* Next Steps */}
        <section className="text-center py-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Ready for Coupled Systems?
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
