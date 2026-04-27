import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";

export default function RollerCoaster() {
  const [loopRadius, setLoopRadius] = useState(10);
  const [initialHeight, setInitialHeight] = useState(30);
  const g = 9.8;
  const m = 1000;

  const minSpeedAtTop = Math.sqrt(g * loopRadius);
  const speedAtTop = Math.sqrt(Math.max(0, 2 * g * (initialHeight - 2 * loopRadius)));
  const minHeightNeeded = 2.5 * loopRadius;
  const normalForceAtTop = m * (Math.pow(speedAtTop, 2) / loopRadius - g);
  const willComplete = initialHeight >= minHeightNeeded;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/integration-problems">
            <Button variant="ghost" className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <ChevronLeft className="w-5 h-5" />
              Back
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Roller Coaster Loop</h1>
          <div className="w-20" />
        </div>
      </header>

      <div className="container py-12">
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">The Vertical Loop Challenge</h2>
          <Card className="p-8 bg-gradient-to-r from-red-50 to-orange-50 dark:from-slate-800 dark:to-slate-900 border-l-4 border-l-red-600">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              A roller coaster cart starts from rest at height h and enters a vertical circular loop of radius r. What is the minimum starting height needed for the cart to complete the loop without losing contact with the track at the top?
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">
              This problem combines energy conservation, circular motion, and normal force analysis.
            </p>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Interactive Simulator</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Adjust Parameters</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Loop Radius: {loopRadius} m
                  </label>
                  <Slider
                    value={[loopRadius]}
                    onValueChange={(val) => setLoopRadius(val[0])}
                    min={5}
                    max={20}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Starting Height: {initialHeight} m
                  </label>
                  <Slider
                    value={[initialHeight]}
                    onValueChange={(val) => setInitialHeight(val[0])}
                    min={5}
                    max={50}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Minimum Height Required</p>
                  <p className="text-2xl font-bold text-blue-600">{minHeightNeeded.toFixed(2)} m</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">= 2.5 × radius</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-slate-800 dark:to-slate-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Results</h3>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Speed at Top of Loop</p>
                  <p className="text-2xl font-bold text-orange-600">{speedAtTop.toFixed(2)} m/s</p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Min Speed at Top</p>
                  <p className="text-2xl font-bold text-purple-600">{minSpeedAtTop.toFixed(2)} m/s</p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Normal Force at Top</p>
                  <p className={`text-2xl font-bold ${normalForceAtTop >= 0 ? "text-green-600" : "text-red-600"}`}>
                    {Math.max(0, normalForceAtTop).toFixed(0)} N
                  </p>
                </div>

                <div className={`p-4 rounded-lg ${willComplete ? "bg-green-100 dark:bg-green-900" : "bg-red-100 dark:bg-red-900"}`}>
                  <p className="text-sm font-bold mb-1">Status</p>
                  <p className={`text-lg font-bold ${willComplete ? "text-green-700 dark:text-green-300" : "text-red-700 dark:text-red-300"}`}>
                    {willComplete ? "Cart completes the loop!" : "Cart falls off at the top!"}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step-by-Step Solution</h2>
          
          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-l-blue-600">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Step 1: Identify the Critical Point</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                The critical point is at the TOP of the loop. At this point, the normal force must be ≥ 0 for the cart to maintain contact.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded font-mono text-sm">
                At the top: N + mg = m(v²/r)<br/>
                For minimum speed: N = 0<br/>
                v_min = √(gr) = {minSpeedAtTop.toFixed(2)} m/s
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-purple-600">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Step 2: Apply Energy Conservation</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                From start to top of loop:
              </p>
              <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded font-mono text-sm">
                mgh = (1/2)mv_top² + mg(2r)<br/>
                h_min = 2.5r = {minHeightNeeded.toFixed(2)} m
              </div>
            </Card>

            <Card className={`p-6 border-l-4 ${willComplete ? "border-l-green-600 bg-green-50 dark:bg-green-900" : "border-l-red-600 bg-red-50 dark:bg-red-900"}`}>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Conclusion</h4>
              <p className={`text-lg ${willComplete ? "text-green-700 dark:text-green-300" : "text-red-700 dark:text-red-300"}`}>
                {willComplete 
                  ? `✓ Height ${initialHeight} m ≥ Minimum ${minHeightNeeded.toFixed(2)} m - Cart completes!`
                  : `✗ Height ${initialHeight} m < Minimum ${minHeightNeeded.toFixed(2)} m - Cart falls!`
                }
              </p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
