import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { useState, useMemo } from "react";

export default function InclinedPlanes() {
  const [angle, setAngle] = useState(30);
  const [mass, setMass] = useState(5);
  const g = 9.8;

  // Calculate forces
  const weight = mass * g;
  const normalForce = weight * Math.cos((angle * Math.PI) / 180);
  const parallelComponent = weight * Math.sin((angle * Math.PI) / 180);

  // SVG dimensions
  const svgWidth = 500;
  const svgHeight = 400;
  const planeStartX = 50;
  const planeStartY = 300;
  const planeLength = 300;

  // Calculate plane end point
  const planeEndX = planeStartX + planeLength * Math.cos((angle * Math.PI) / 180);
  const planeEndY = planeStartY - planeLength * Math.sin((angle * Math.PI) / 180);

  // Block position (middle of plane)
  const blockX = planeStartX + (planeLength / 2) * Math.cos((angle * Math.PI) / 180);
  const blockY = planeStartY - (planeLength / 2) * Math.sin((angle * Math.PI) / 180);

  // Scale for force arrows (visual scaling)
  const forceScale = 0.15;

  // Calculate arrow endpoints for forces
  // Weight (straight down)
  const weightEndX = blockX;
  const weightEndY = blockY + weight * forceScale;

  // Normal force (perpendicular to plane)
  const normalAngleRad = (angle * Math.PI) / 180 + Math.PI / 2;
  const normalEndX = blockX + normalForce * forceScale * Math.cos(normalAngleRad);
  const normalEndY = blockY + normalForce * forceScale * Math.sin(normalAngleRad);

  // Parallel component (along plane, downward)
  const parallelAngleRad = (angle * Math.PI) / 180 - Math.PI;
  const parallelEndX = blockX + parallelComponent * forceScale * Math.cos(parallelAngleRad);
  const parallelEndY = blockY + parallelComponent * forceScale * Math.sin(parallelAngleRad);

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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Inclined Planes</h1>
          <div className="w-20" />
        </div>
      </header>

      <div className="container py-12">
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Understanding Inclined Planes
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When an object rests on an inclined plane, gravity doesn't act straight down relative to the surface. Instead, we must resolve the weight into two components: one perpendicular to the plane (which the surface pushes back against) and one parallel to the plane (which tries to slide the object down).
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
              This is the foundation of understanding friction, tension, and all coupled systems. Master this, and everything else becomes clear.
            </p>
          </div>
        </section>

        {/* Interactive Visualization */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Interactive Diagram */}
            <Card className="interactive-panel">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Interactive Force Diagram
              </h3>

              {/* SVG Visualization */}
              <svg width={svgWidth} height={svgHeight} className="border border-gray-200 dark:border-slate-600 rounded-lg mb-6 bg-gray-50 dark:bg-slate-700">
                {/* Grid background */}
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
                  </pattern>
                </defs>
                <rect width={svgWidth} height={svgHeight} fill="url(#grid)" />

                {/* Inclined plane */}
                <line
                  x1={planeStartX}
                  y1={planeStartY}
                  x2={planeEndX}
                  y2={planeEndY}
                  stroke="#1f2937"
                  strokeWidth="4"
                />

                {/* Ground line */}
                <line
                  x1={planeStartX - 20}
                  y1={planeStartY}
                  x2={planeStartX + planeLength + 50}
                  y2={planeStartY}
                  stroke="#1f2937"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />

                {/* Block (square) */}
                <rect
                  x={blockX - 15}
                  y={blockY - 15}
                  width="30"
                  height="30"
                  fill="#3b82f6"
                  stroke="#1e40af"
                  strokeWidth="2"
                />

                {/* Weight vector (blue) */}
                <g>
                  <line
                    x1={blockX}
                    y1={blockY}
                    x2={weightEndX}
                    y2={weightEndY}
                    stroke="#1e40af"
                    strokeWidth="3"
                  />
                  <polygon
                    points={`${weightEndX},${weightEndY} ${weightEndX - 5},${weightEndY - 10} ${weightEndX + 5},${weightEndY - 10}`}
                    fill="#1e40af"
                  />
                  {/* Label with background for readability */}
                  <rect x={weightEndX + 8} y={weightEndY - 12} width="110" height="20" fill="white" stroke="#1e40af" strokeWidth="1" rx="3" />
                  <text x={weightEndX + 12} y={weightEndY + 2} fill="#1e40af" fontSize="12" fontWeight="bold">
                    W = {weight.toFixed(1)} N
                  </text>
                </g>

                {/* Normal force vector (green) */}
                <g>
                  <line
                    x1={blockX}
                    y1={blockY}
                    x2={normalEndX}
                    y2={normalEndY}
                    stroke="#047857"
                    strokeWidth="3"
                  />
                  <polygon
                    points={`${normalEndX},${normalEndY} ${normalEndX - 5},${normalEndY - 10} ${normalEndX + 5},${normalEndY - 10}`}
                    fill="#047857"
                  />
                  {/* Label with background for readability */}
                  <rect x={normalEndX - 110} y={normalEndY - 30} width="110" height="20" fill="white" stroke="#047857" strokeWidth="1" rx="3" />
                  <text x={normalEndX - 106} y={normalEndY - 14} fill="#047857" fontSize="12" fontWeight="bold">
                    N = {normalForce.toFixed(1)} N
                  </text>
                </g>

                {/* Parallel component vector (red) */}
                <g>
                  <line
                    x1={blockX}
                    y1={blockY}
                    x2={parallelEndX}
                    y2={parallelEndY}
                    stroke="#991b1b"
                    strokeWidth="3"
                  />
                  <polygon
                    points={`${parallelEndX},${parallelEndY} ${parallelEndX - 5},${parallelEndY - 10} ${parallelEndX + 5},${parallelEndY - 10}`}
                    fill="#991b1b"
                  />
                  {/* Label with background for readability */}
                  <rect x={parallelEndX - 130} y={parallelEndY + 5} width="130" height="20" fill="white" stroke="#991b1b" strokeWidth="1" rx="3" />
                  <text x={parallelEndX - 126} y={parallelEndY + 21} fill="#991b1b" fontSize="12" fontWeight="bold">
                    W∥ = {parallelComponent.toFixed(1)} N
                  </text>
                </g>

                {/* Angle indicator */}
                <text x={planeStartX + 30} y={planeStartY - 10} fill="#1f2937" fontSize="16" fontWeight="bold">
                  θ = {angle}°
                </text>
              </svg>

              {/* Controls */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Angle: {angle}°
                  </label>
                  <Slider
                    value={[angle]}
                    onValueChange={(val) => setAngle(val[0])}
                    min={0}
                    max={90}
                    step={1}
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
                    min={1}
                    max={20}
                    step={0.5}
                    className="w-full"
                  />
                </div>
              </div>
            </Card>

            {/* Right: Explanation & Calculations */}
            <div className="space-y-8">
              {/* Concept Explanation */}
              <Card className="interactive-panel">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  The Key Insight
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    <strong>Weight (W):</strong> Always acts straight down due to gravity. Magnitude = <code>m × g</code>
                  </p>
                  <p>
                    <strong>Normal Force (N):</strong> The surface pushes perpendicular to the plane. It balances the perpendicular component of weight.
                  </p>
                  <p>
                    <strong>Parallel Component (W∥):</strong> The component of weight along the plane. This is what tries to slide the object down.
                  </p>
                </div>
              </Card>

              {/* The Math */}
              <Card className="interactive-panel">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  The Mathematics
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 font-mono text-sm">
                  <div className="bg-gray-50 dark:bg-slate-600 p-4 rounded">
                    <p>Weight: W = m × g</p>
                    <p>W = {mass} kg × {g} m/s²</p>
                    <p className="font-bold text-blue-600 dark:text-blue-400">W = {weight.toFixed(2)} N</p>
                  </div>

                  <div className="bg-gray-50 dark:bg-slate-600 p-4 rounded">
                    <p>Normal Force: N = W × cos(θ)</p>
                    <p>N = {weight.toFixed(2)} × cos({angle}°)</p>
                    <p className="font-bold text-green-600 dark:text-green-400">N = {normalForce.toFixed(2)} N</p>
                  </div>

                  <div className="bg-gray-50 dark:bg-slate-600 p-4 rounded">
                    <p>Parallel Component: W∥ = W × sin(θ)</p>
                    <p>W∥ = {weight.toFixed(2)} × sin({angle}°)</p>
                    <p className="font-bold text-red-600 dark:text-red-400">W∥ = {parallelComponent.toFixed(2)} N</p>
                  </div>
                </div>
              </Card>

              {/* Key Observations */}
              <Card className="interactive-panel border-l-4 border-l-purple-600">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Try This:
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>🔹 Increase the angle. What happens to N and W∥?</li>
                  <li>🔹 At 0°, what are N and W∥? (Flat surface)</li>
                  <li>🔹 At 90°, what are N and W∥? (Vertical wall)</li>
                  <li>🔹 Why does N decrease as angle increases?</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Worked Example */}
        <section className="mb-16">
          <Card className="interactive-panel">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Worked Example: Problem 11 from Your PDF
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Problem Statement</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  A 2 kg block sits on a ramp inclined at 30°. The coefficient of kinetic friction is μₖ = 0.1. Find:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>The normal force on the block</li>
                  <li>The component of weight along the plane</li>
                  <li>The friction force (if the block is sliding)</li>
                </ol>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Solution</h4>
                <div className="bg-gray-50 dark:bg-slate-600 p-6 rounded-lg space-y-3 font-mono text-sm">
                  <p><strong>Step 1: Calculate Weight</strong></p>
                  <p>W = m × g = 2 × 9.8 = <span className="text-blue-600 dark:text-blue-400">19.6 N</span></p>

                  <p className="pt-2"><strong>Step 2: Normal Force</strong></p>
                  <p>N = W × cos(30°) = 19.6 × 0.866 = <span className="text-green-600 dark:text-green-400">16.97 N</span></p>

                  <p className="pt-2"><strong>Step 3: Parallel Component</strong></p>
                  <p>W∥ = W × sin(30°) = 19.6 × 0.5 = <span className="text-red-600 dark:text-red-400">9.8 N</span></p>

                  <p className="pt-2"><strong>Step 4: Friction Force</strong></p>
                  <p>f = μₖ × N = 0.1 × 16.97 = <span className="text-orange-600 dark:text-orange-400">1.70 N</span></p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900 rounded-lg border-l-4 border-l-blue-600">
              <p className="text-gray-700 dark:text-gray-200">
                <strong>Key Takeaway:</strong> The normal force is always less than the weight on an incline. As the angle increases, more of the weight acts parallel to the plane (trying to slide the block down) and less perpendicular to the plane.
              </p>
            </div>
          </Card>
        </section>

        {/* Next Steps */}
        <section className="text-center py-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Ready for the Next Concept?
          </h3>
          <Link href="/friction">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg rounded-lg">
              Learn Friction Fundamentals →
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
