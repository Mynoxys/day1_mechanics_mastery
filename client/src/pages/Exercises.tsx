import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Problem {
  id: string;
  title: string;
  concept: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  givenData: string[];
  find: string[];
  hints: string[];
  solution?: string;
}

const problems: Problem[] = [
  // Dynamics Problems
  {
    id: "d1",
    title: "Block on Inclined Plane",
    concept: "Inclined Planes",
    difficulty: "Easy",
    description: "A 5 kg block rests on a frictionless inclined plane at 30°. Find the acceleration down the plane.",
    givenData: ["m = 5 kg", "θ = 30°", "g = 9.8 m/s²", "No friction"],
    find: ["Acceleration down the plane"],
    hints: ["Resolve weight into components", "Component parallel to plane = mg sin(θ)", "Use F = ma"],
    solution: "a = g sin(θ) = 9.8 × sin(30°) = 4.9 m/s²"
  },
  {
    id: "d2",
    title: "Block on Incline with Friction",
    concept: "Friction",
    difficulty: "Medium",
    description: "A 10 kg block is on a 25° incline with μ_k = 0.2. Find the acceleration.",
    givenData: ["m = 10 kg", "θ = 25°", "μ_k = 0.2", "g = 9.8 m/s²"],
    find: ["Acceleration down the plane"],
    hints: ["Find normal force: N = mg cos(θ)", "Friction force: f = μ_k × N", "Net force = mg sin(θ) - f"],
    solution: "Weight: W = mg = 10 × 9.8 = 98 N. Normal force: N = W cos(25°) = 88.8 N. Friction: f = 0.2 × 88.8 = 17.76 N. Component down plane: W∥ = W sin(25°) = 41.4 N. Net force: F_net = 41.4 - 17.76 = 23.64 N. Acceleration: a = 23.64 / 10 = 2.36 m/s²"
  },
  {
    id: "d3",
    title: "Coupled Blocks with Pulley",
    concept: "Tension & Pulleys",
    difficulty: "Hard",
    description: "A 3 kg block on a table (μ = 0.15) is connected via pulley to a 2 kg hanging block. Find acceleration.",
    givenData: ["m1 = 3 kg (on table)", "m2 = 2 kg (hanging)", "μ = 0.15", "g = 9.8 m/s²"],
    find: ["System acceleration", "Tension in rope"],
    hints: ["Both blocks have same acceleration", "For hanging block: m2g - T = m2a", "For block on table: T - f = m1a", "Add equations to eliminate T"],
    solution: "a = (m2g - μm1g)/(m1 + m2) = 3.92 m/s², T = 11.76 N"
  },

  // Energy Problems
  {
    id: "e1",
    title: "Falling Object - Energy Conservation",
    concept: "Energy Conservation",
    difficulty: "Easy",
    description: "A 2 kg object falls from 10 m. Find its velocity at the ground (no air resistance).",
    givenData: ["m = 2 kg", "h = 10 m", "g = 9.8 m/s²"],
    find: ["Velocity at ground level"],
    hints: ["Use energy conservation: PE_initial = KE_final", "mgh = 0.5mv²", "Solve for v"],
    solution: "v = √(2gh) = √(2 × 9.8 × 10) = 14 m/s"
  },
  {
    id: "e2",
    title: "Spring Potential Energy",
    concept: "Springs",
    difficulty: "Medium",
    description: "A spring with k = 200 N/m is compressed 0.2 m. How much energy is stored?",
    givenData: ["k = 200 N/m", "x = 0.2 m"],
    find: ["Elastic potential energy"],
    hints: ["PE_spring = 0.5 × k × x²", "Substitute values"],
    solution: "PE_spring = 0.5 × 200 × (0.2)² = 4 J"
  },
  {
    id: "e3",
    title: "Energy Transfer: Spring to Kinetic",
    concept: "Energy Conservation",
    difficulty: "Hard",
    description: "A 1 kg mass is pushed by a spring (k = 500 N/m) compressed 0.1 m on a frictionless surface. Find final velocity.",
    givenData: ["m = 1 kg", "k = 500 N/m", "x = 0.1 m"],
    find: ["Final velocity after spring releases"],
    hints: ["Initial PE_spring = Final KE", "0.5kx² = 0.5mv²", "Solve for v"],
    solution: "v = √(kx²/m) = √(500 × 0.01 / 1) = √5 = 2.24 m/s"
  },

  // Momentum Problems
  {
    id: "m1",
    title: "Momentum of Moving Object",
    concept: "Momentum",
    difficulty: "Easy",
    description: "A 1500 kg car travels at 20 m/s. What is its momentum?",
    givenData: ["m = 1500 kg", "v = 20 m/s"],
    find: ["Momentum"],
    hints: ["p = mv", "Substitute values"],
    solution: "p = 1500 × 20 = 30,000 kg⋅m/s"
  },
  {
    id: "m2",
    title: "Elastic Collision - 1D",
    concept: "Collisions",
    difficulty: "Medium",
    description: "Two balls collide elastically: m1 = 2 kg at 5 m/s, m2 = 3 kg at rest. Find final velocities.",
    givenData: ["m1 = 2 kg", "v1_i = 5 m/s", "m2 = 3 kg", "v2_i = 0 m/s"],
    find: ["Final velocities v1_f and v2_f"],
    hints: ["Use momentum conservation: m1v1_i + m2v2_i = m1v1_f + m2v2_f", "Use energy conservation for elastic collision", "For elastic: v1_f = ((m1-m2)/(m1+m2))v1_i"],
    solution: "v1_f = -1 m/s (bounces back), v2_f = 4 m/s"
  },
  {
    id: "m3",
    title: "Inelastic Collision",
    concept: "Collisions",
    difficulty: "Hard",
    description: "Two objects collide and stick: m1 = 4 kg at 6 m/s, m2 = 2 kg at 0 m/s. Find final velocity.",
    givenData: ["m1 = 4 kg", "v1 = 6 m/s", "m2 = 2 kg", "v2 = 0 m/s"],
    find: ["Final velocity after collision"],
    hints: ["Momentum is conserved even in inelastic collisions", "m1v1 + m2v2 = (m1 + m2)v_f", "Solve for v_f"],
    solution: "v_f = (4×6 + 2×0)/(4+2) = 4 m/s"
  },

  // Circular Motion Problems
  {
    id: "c1",
    title: "Centripetal Acceleration",
    concept: "Circular Motion",
    difficulty: "Easy",
    description: "A car travels in a circle of radius 50 m at 15 m/s. Find centripetal acceleration.",
    givenData: ["r = 50 m", "v = 15 m/s"],
    find: ["Centripetal acceleration"],
    hints: ["a_c = v²/r", "Substitute values"],
    solution: "a_c = (15)²/50 = 4.5 m/s²"
  },
  {
    id: "c2",
    title: "Conical Pendulum",
    concept: "Circular Motion",
    difficulty: "Medium",
    description: "A 0.5 kg mass swings in a horizontal circle on a 1 m string at 30° from vertical. Find tension and velocity.",
    givenData: ["m = 0.5 kg", "L = 1 m", "θ = 30°", "g = 9.8 m/s²"],
    find: ["Tension in string", "Velocity"],
    hints: ["Vertical: T cos(θ) = mg", "Horizontal: T sin(θ) = mv²/r", "r = L sin(θ)"],
    solution: "T = 5.66 N, v = 1.68 m/s"
  },
  {
    id: "c3",
    title: "Orbital Velocity",
    concept: "Gravitation",
    difficulty: "Hard",
    description: "Find the orbital velocity of a satellite 400 km above Earth (R_E = 6371 km, M_E = 5.97×10²⁴ kg).",
    givenData: ["h = 400 km", "R_E = 6371 km", "M_E = 5.97×10²⁴ kg", "G = 6.67×10⁻¹¹ N⋅m²/kg²"],
    find: ["Orbital velocity"],
    hints: ["Gravitational force provides centripetal force", "GMm/r² = mv²/r", "v = √(GM/r)", "r = R_E + h"],
    solution: "v = √(GM/r) ≈ 7.67 km/s"
  },
];

const concepts = ["All", "Inclined Planes", "Friction", "Tension & Pulleys", "Energy Conservation", "Springs", "Momentum", "Collisions", "Circular Motion", "Gravitation"];
const difficulties = ["All", "Easy", "Medium", "Hard"];

export default function Exercises() {
  const [selectedConcept, setSelectedConcept] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [expandedProblem, setExpandedProblem] = useState<string | null>(null);

  const filteredProblems = problems.filter(p => {
    const conceptMatch = selectedConcept === "All" || p.concept === selectedConcept;
    const difficultyMatch = selectedDifficulty === "All" || p.difficulty === selectedDifficulty;
    return conceptMatch && difficultyMatch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200";
      case "Medium": return "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200";
      case "Hard": return "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200";
      default: return "";
    }
  };

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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Exercise Bank</h1>
          <div className="w-20" />
        </div>
      </header>

      <div className="container py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Practice Problems</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Work through these problems to master each concept. Filter by topic and difficulty to find problems that match your learning level.
          </p>
        </section>

        {/* Filters */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Concept Filter */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Filter by Concept</h3>
              <div className="flex flex-wrap gap-2">
                {concepts.map(concept => (
                  <button
                    key={concept}
                    onClick={() => setSelectedConcept(concept)}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      selectedConcept === concept
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-600"
                    }`}
                  >
                    {concept}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Filter */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Filter by Difficulty</h3>
              <div className="flex flex-wrap gap-2">
                {difficulties.map(difficulty => (
                  <button
                    key={difficulty}
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      selectedDifficulty === difficulty
                        ? "bg-purple-600 text-white"
                        : "bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-600"
                    }`}
                  >
                    {difficulty}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Problems List */}
        <section>
          <div className="space-y-4">
            {filteredProblems.length > 0 ? (
              filteredProblems.map(problem => (
                <Card key={problem.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div
                    className="cursor-pointer"
                    onClick={() => setExpandedProblem(expandedProblem === problem.id ? null : problem.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {problem.title}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(problem.difficulty)}`}>
                            {problem.difficulty}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{problem.concept}</p>
                        <p className="text-gray-700 dark:text-gray-300">{problem.description}</p>
                      </div>
                      <ChevronRight className={`w-6 h-6 text-gray-400 transition-transform ${expandedProblem === problem.id ? "rotate-90" : ""}`} />
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedProblem === problem.id && (
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-slate-600 space-y-4">
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">Given Data:</h4>
                        <ul className="space-y-1">
                          {problem.givenData.map((data, i) => (
                            <li key={i} className="text-gray-600 dark:text-gray-300">• {data}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">Find:</h4>
                        <ul className="space-y-1">
                          {problem.find.map((item, i) => (
                            <li key={i} className="text-gray-600 dark:text-gray-300">• {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">Hints:</h4>
                        <ul className="space-y-1">
                          {problem.hints.map((hint, i) => (
                            <li key={i} className="text-blue-600 dark:text-blue-400">💡 {hint}</li>
                          ))}
                        </ul>
                      </div>

                      {problem.solution && (
                        <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                          <h4 className="font-bold text-green-900 dark:text-green-200 mb-2">Solution:</h4>
                          <p className="text-green-800 dark:text-green-300 font-mono">{problem.solution}</p>
                        </div>
                      )}
                    </div>
                  )}
                </Card>
              ))
            ) : (
              <Card className="p-8 text-center">
                <p className="text-gray-600 dark:text-gray-300">No problems found matching your filters.</p>
              </Card>
            )}
          </div>
        </section>

        {/* Summary */}
        <section className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Showing {filteredProblems.length} of {problems.length} problems
          </p>
          <Link href="/formula-sheet">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-lg">
              View Formula Sheet →
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
