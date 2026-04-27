import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";

export default function BatmanProblem() {
  const [batmanMass, setBatmanMass] = useState(80);
  const [jokerMass, setJokerMass] = useState(70);
  const [batmanVelocity, setBatmanVelocity] = useState(5);
  const [jokerVelocity, setJokerVelocity] = useState(3);
  const [roofRadius, setRoofRadius] = useState(50);

  // Calculate momentum before collision
  const momentumBefore = batmanMass * batmanVelocity + jokerMass * jokerVelocity;
  const totalMass = batmanMass + jokerMass;
  
  // Calculate velocity after collision (perfectly inelastic)
  const velocityAfter = momentumBefore / totalMass;
  
  // Calculate energy before and after
  const energyBefore = 0.5 * batmanMass * Math.pow(batmanVelocity, 2) + 0.5 * jokerMass * Math.pow(jokerVelocity, 2);
  const energyAfter = 0.5 * totalMass * Math.pow(velocityAfter, 2);
  const energyLost = energyBefore - energyAfter;
  
  // Calculate centripetal acceleration needed
  const centripetal = Math.pow(velocityAfter, 2) / roofRadius;
  const g = 9.8;

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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Batman & Joker Chase</h1>
          <div className="w-20" />
        </div>
      </header>

      <div className="container py-12">
        {/* Problem Statement */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">The Rooftop Chase</h2>
          <Card className="p-8 bg-gray-50 dark:bg-slate-800 border-l-4 border-l-gray-900">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Batman (80 kg) runs across a circular rooftop at 5 m/s to catch the Joker (70 kg) who is running at 3 m/s in the same direction. They collide and stick together. The rooftop has a radius of 50 m. Will they stay on the roof after the collision?
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">
              This problem combines momentum conservation (collision), energy analysis, and circular motion.
            </p>
          </Card>
        </section>

        {/* Interactive Simulator */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Interactive Simulator</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Controls */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Adjust Parameters</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Batman's Mass: {batmanMass} kg
                  </label>
                  <Slider
                    value={[batmanMass]}
                    onValueChange={(val) => setBatmanMass(val[0])}
                    min={50}
                    max={150}
                    step={5}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Joker's Mass: {jokerMass} kg
                  </label>
                  <Slider
                    value={[jokerMass]}
                    onValueChange={(val) => setJokerMass(val[0])}
                    min={40}
                    max={120}
                    step={5}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Batman's Velocity: {batmanVelocity} m/s
                  </label>
                  <Slider
                    value={[batmanVelocity]}
                    onValueChange={(val) => setBatmanVelocity(val[0])}
                    min={1}
                    max={10}
                    step={0.5}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Joker's Velocity: {jokerVelocity} m/s
                  </label>
                  <Slider
                    value={[jokerVelocity]}
                    onValueChange={(val) => setJokerVelocity(val[0])}
                    min={0}
                    max={8}
                    step={0.5}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Roof Radius: {roofRadius} m
                  </label>
                  <Slider
                    value={[roofRadius]}
                    onValueChange={(val) => setRoofRadius(val[0])}
                    min={20}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                </div>
              </div>
            </Card>

            {/* Results */}
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Results</h3>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Momentum Before Collision</p>
                  <p className="text-2xl font-bold text-blue-600">{momentumBefore.toFixed(1)} kg·m/s</p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Velocity After Collision</p>
                  <p className="text-2xl font-bold text-purple-600">{velocityAfter.toFixed(2)} m/s</p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Energy Lost in Collision</p>
                  <p className="text-2xl font-bold text-red-600">{energyLost.toFixed(0)} J</p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Centripetal Acceleration</p>
                  <p className="text-2xl font-bold text-orange-600">{centripetal.toFixed(2)} m/s²</p>
                </div>

                <div className={`p-4 rounded-lg ${centripetal > g ? "bg-red-100 dark:bg-red-900" : "bg-green-100 dark:bg-green-900"}`}>
                  <p className="text-sm font-bold mb-1">Status</p>
                  <p className={`text-lg font-bold ${centripetal > g ? "text-red-700 dark:text-red-300" : "text-green-700 dark:text-green-300"}`}>
                    {centripetal > g ? "They fly off the roof!" : "They stay on the roof"}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Step-by-Step Solution */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step-by-Step Solution</h2>
          
          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-l-blue-600">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Step 1: Apply Momentum Conservation</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Before collision, the total momentum is:
              </p>
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded font-mono text-sm mb-3">
                p_total = m_batman × v_batman + m_joker × v_joker<br/>
                p_total = {batmanMass} × {batmanVelocity} + {jokerMass} × {jokerVelocity} = {momentumBefore.toFixed(1)} kg·m/s
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                After the collision (perfectly inelastic), they move together with velocity v_after.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-l-purple-600">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Step 2: Find Velocity After Collision</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Using momentum conservation:
              </p>
              <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded font-mono text-sm mb-3">
                p_before = p_after<br/>
                {momentumBefore.toFixed(1)} = ({batmanMass} + {jokerMass}) × v_after<br/>
                v_after = {momentumBefore.toFixed(1)} / {totalMass} = {velocityAfter.toFixed(2)} m/s
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-orange-600">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Step 3: Check Circular Motion</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                For circular motion on the roof, the centripetal acceleration is:
              </p>
              <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded font-mono text-sm mb-3">
                a_c = v² / r = {velocityAfter.toFixed(2)}² / {roofRadius} = {centripetal.toFixed(2)} m/s²
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                The maximum centripetal acceleration available from gravity is g = 9.8 m/s².
              </p>
            </Card>

            <Card className={`p-6 border-l-4 ${centripetal > g ? "border-l-red-600 bg-red-50 dark:bg-red-900" : "border-l-green-600 bg-green-50 dark:bg-green-900"}`}>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Conclusion</h4>
              <p className={`text-lg whitespace-pre-wrap ${centripetal > g ? "text-red-700 dark:text-red-300" : "text-green-700 dark:text-green-300"}`}>
                {centripetal > g 
                  ? `Required acceleration (${centripetal.toFixed(2)} m/s²) > Available (9.8 m/s²)\nThey lose contact with the roof and fly off!`
                  : `Required acceleration (${centripetal.toFixed(2)} m/s²) < Available (9.8 m/s²)\nThey stay on the roof and continue moving together.`
                }
              </p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
