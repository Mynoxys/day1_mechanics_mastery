import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Zap, BookOpen, Brain } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Day 1: Dynamics</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#fundamentals" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              Fundamentals
            </a>
            <a href="#concepts" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              Concepts
            </a>
            <a href="#exercises" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              Exercises
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Dynamics</span> in 1 Day
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Learn Newton's Laws, inclined planes, friction, and coupled systems through interactive visualizations and hands-on problem-solving.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/inclined-planes">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2">
                  Start Learning <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button variant="outline" className="px-8 py-6 text-lg rounded-lg">
                View Concepts
              </Button>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative h-96 md:h-full">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663179912018/VoYKQBRGZeBhQvDPXYbGxP/hero-forces-UXitpJ2JxsH6XWoxudpzgQ.webp"
              alt="Force vectors visualization"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Learning Path Overview */}
      <section id="concepts" className="py-20 bg-white dark:bg-slate-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Your Learning Path
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Four interconnected concepts that build your mastery of classical mechanics
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Concept 1: Inclined Planes */}
            <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-blue-600"
              onClick={() => setActiveSection(activeSection === "inclines" ? null : "inclines")}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Inclined Planes</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Resolving forces on slopes</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Learn how gravity resolves into components parallel and perpendicular to an inclined surface. Master the trigonometry that makes this work.
              </p>
              <Link href="/inclined-planes">
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900 flex items-center gap-2">
                  Explore <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </Card>

            {/* Concept 2: Friction */}
            <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-red-600"
              onClick={() => setActiveSection(activeSection === "friction" ? null : "friction")}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-red-600">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Friction Fundamentals</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Static vs. kinetic resistance</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Understand the difference between static friction (prevents motion) and kinetic friction (opposes motion). Learn the critical threshold.
              </p>
              <Link href="/friction">
                <Button variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900 flex items-center gap-2">
                  Explore <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </Card>

            {/* Concept 3: Tension & Pulleys */}
            <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-orange-600"
              onClick={() => setActiveSection(activeSection === "tension" ? null : "tension")}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-orange-600">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Tension & Pulleys</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Ropes, strings, and constraints</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Explore how tension transmits force through ropes and strings. Solve coupled systems where multiple masses move together.
              </p>
              <Link href="/tension">
                <Button variant="ghost" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 dark:hover:bg-orange-900 flex items-center gap-2">
                  Explore <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </Card>

            {/* Concept 4: Coupled Systems */}
            <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-purple-600"
              onClick={() => setActiveSection(activeSection === "coupled" ? null : "coupled")}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-purple-600">4</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Coupled Systems</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Multi-body dynamics</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Combine everything: multiple blocks, ramps, friction, and tension. Solve for acceleration and forces in complex systems.
              </p>
              <Link href="/coupled-systems">
                <Button variant="ghost" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900 flex items-center gap-2">
                  Explore <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Day 2: Energy & Momentum */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Day 2: Energy & Momentum
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Master conservation laws and collision dynamics
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Energy Module */}
            <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-amber-600">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-amber-600">⚡</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Energy Conservation</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Potential, Kinetic & Springs</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Understand how energy transforms between potential and kinetic forms. Master spring systems and energy transformations.
              </p>
              <Link href="/energy">
                <Button variant="ghost" className="text-amber-600 hover:text-amber-700 hover:bg-amber-50 dark:hover:bg-amber-900 flex items-center gap-2">
                  Explore <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </Card>

            {/* Momentum Module */}
            <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-orange-600">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-orange-600">💥</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Momentum & Collisions</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Elastic & Inelastic</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Explore conservation of momentum in collisions. Distinguish between elastic and inelastic collisions with interactive simulations.
              </p>
              <Link href="/momentum">
                <Button variant="ghost" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 dark:hover:bg-orange-900 flex items-center gap-2">
                  Explore <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Day 3: Circular Motion & Gravitation */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Day 3: Circular Motion & Gravitation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Master orbital mechanics and rotating reference frames
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Circular Motion Module */}
            <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-indigo-600">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-indigo-600">⭕</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Circular Motion</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Centripetal Force & Conical Pendulum</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Understand centripetal acceleration and how real forces provide the centripetal force needed for circular motion.
              </p>
              <Link href="/circular-motion">
                <Button variant="ghost" className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-900 flex items-center gap-2">
                  Explore <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </Card>

            {/* Orbital Mechanics Module */}
            <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-purple-600">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-purple-600">🌍</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Orbital Mechanics</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Gravity, Orbits & Escape Velocity</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Explore how gravity provides centripetal force for orbits. Calculate orbital velocity, period, and escape velocity.
              </p>
              <Link href="/orbital">
                <Button variant="ghost" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900 flex items-center gap-2">
                  Explore <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </Card>

            {/* Rotating Frames Module */}
            <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-pink-600">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-pink-600">🎡</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Rotating Frames</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Apparent Forces & Rotor Rides</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Understand fictitious forces in rotating frames. Analyze the physics of amusement park rides like the rotor.
              </p>
              <Link href="/rotating-frames">
                <Button variant="ghost" className="text-pink-600 hover:text-pink-700 hover:bg-pink-50 dark:hover:bg-pink-900 flex items-center gap-2">
                  Explore <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-16">
            How You'll Learn
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Interactive Diagrams
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Visualize forces in real-time. Adjust angles, masses, and friction coefficients to see how the system responds instantly.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Guided Problem-Solving
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Work through real problems from your textbook. We'll break them down step-by-step and show you exactly where each force comes from.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Instant Feedback
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Test your understanding with interactive quizzes. Get immediate feedback on your reasoning before you see the math.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Day 4: Integration Problems */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black dark:from-slate-900 dark:to-slate-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Day 4: Integration Problems
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The final boss: Complex problems combining all three days
            </p>
          </div>
          <div className="text-center">
            <Link href="/integration-problems">
              <Button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 text-lg rounded-lg">
                View Integration Problems →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Exercise Bank & Resources */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-800 dark:to-slate-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Practice & Resources
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Access our complete problem bank and formula reference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Exercise Bank */}
            <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-blue-600">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-blue-600">📚</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Exercise Bank</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">10+ Problems by Difficulty</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Practice problems organized by concept and difficulty level. Each problem includes hints and step-by-step solutions.
              </p>
              <Link href="/exercises">
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900 flex items-center gap-2">
                  Access Problems <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </Card>

            {/* Formula Sheet */}
            <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-purple-600">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-purple-600">📋</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Formula Sheet</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">All Equations & Strategies</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Complete reference guide with all formulas, problem-solving strategies, and key insights organized by topic.
              </p>
              <Link href="/formula-sheet">
                <Button variant="ghost" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900 flex items-center gap-2">
                  View Reference <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Master Day 1?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Start with inclined planes and build your way to complex coupled systems. You'll be solving multi-body dynamics problems with confidence.
          </p>
          <Link href="/inclined-planes">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg rounded-lg">
              Begin Your Journey
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12">
        <div className="container text-center">
          <p className="text-gray-400">
            Day 1: Dynamics & Multi-Body Force Systems • Interactive Physics Mastery
          </p>
        </div>
      </footer>
    </div>
  );
}
