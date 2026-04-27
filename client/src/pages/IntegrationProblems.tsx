import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function IntegrationProblems() {
  const problems = [
    {
      id: 1,
      title: "Batman & Joker Chase",
      description: "Batman pursues the Joker on a circular rooftop. Combine momentum conservation, friction, and circular motion to determine if Batman catches him.",
      concepts: ["Momentum", "Friction", "Circular Motion"],
      difficulty: "Hard",
      link: "/batman-problem",
      color: "from-gray-900 to-black"
    },
    {
      id: 2,
      title: "Roller Coaster Loop",
      description: "A cart enters a vertical loop. Use energy conservation and circular motion to find the minimum speed needed to complete the loop without losing contact.",
      concepts: ["Energy", "Circular Motion", "Normal Forces"],
      difficulty: "Hard",
      link: "/roller-coaster",
      color: "from-red-600 to-orange-500"
    },
    {
      id: 3,
      title: "Satellite Collision",
      description: "Two satellites collide in orbit. Apply momentum conservation, orbital mechanics, and energy principles to analyze the collision and resulting orbit.",
      concepts: ["Momentum", "Orbital Mechanics", "Energy"],
      difficulty: "Expert",
      link: "/satellite-collision",
      color: "from-blue-600 to-cyan-500"
    },
    {
      id: 4,
      title: "Ramp & Spring System",
      description: "A block slides down a ramp, hits a spring, and bounces back. Combine dynamics, energy conservation, and momentum to solve the complete motion.",
      concepts: ["Dynamics", "Energy", "Momentum"],
      difficulty: "Hard",
      link: "/ramp-spring",
      color: "from-green-600 to-emerald-500"
    },
    {
      id: 5,
      title: "🏆 The Final Boss",
      description: "The ultimate challenge! A space rescue mission combines forces, pulleys, projectile motion, orbital mechanics, and collisions. Multi-phase problem testing mastery of ALL concepts.",
      concepts: ["Forces", "Dynamics", "Projectile Motion", "Momentum", "Collisions", "Orbital Mechanics", "Energy"],
      difficulty: "Expert",
      link: "/final-boss",
      color: "from-red-600 via-orange-500 to-yellow-500"
    }
  ];

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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Day 4: Integration Problems</h1>
          <div className="w-20" />
        </div>
      </header>

      <div className="container py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">The Final Boss: Integration Problems</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            These problems combine concepts from Days 1-3. You'll need to think strategically about which laws to apply and when. These are the problems that separate mastery from mere memorization.
          </p>
        </section>

        {/* Problem Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem) => (
            <Card
              key={problem.id}
              className={`p-8 hover:shadow-xl transition-all cursor-pointer border-l-4 overflow-hidden group`}
              style={{
                borderLeftColor: problem.color.split(" ")[1]
              }}
            >
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{problem.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold text-white ${
                    problem.difficulty === "Hard" ? "bg-orange-600" :
                    problem.difficulty === "Expert" ? "bg-red-600" :
                    "bg-blue-600"
                  }`}>
                    {problem.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {problem.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {problem.concepts.map((concept) => (
                    <span key={concept} className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                      {concept}
                    </span>
                  ))}
                </div>
              </div>

              <Link href={problem.link}>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center justify-center gap-2">
                  Solve Problem <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        {/* Tips Section */}
        <section className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Strategy Tips</h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">1.</span>
              <span><strong>Draw Everything:</strong> Sketch the initial state, identify all forces, and mark key moments (collision, peak, etc.)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">2.</span>
              <span><strong>Identify Phases:</strong> Break the problem into distinct phases (e.g., "before collision" and "after collision")</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">3.</span>
              <span><strong>Choose Your Laws:</strong> For each phase, decide: Do I use F=ma, Energy Conservation, or Momentum Conservation?</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">4.</span>
              <span><strong>Check Continuity:</strong> Make sure the final state of one phase matches the initial state of the next</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
