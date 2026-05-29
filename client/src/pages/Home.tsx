import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Zap, BookOpen, Brain } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import TodayPlan from "@/components/cse114/TodayPlan";

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
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Study Hub <span className="text-orange-600">· CSE 114</span>
            </h1>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <Link href="/cse114/learn">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-orange-600 cursor-pointer">Learn</span>
            </Link>
            <Link href="/cse114">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-orange-600 cursor-pointer">Exam Trainer</span>
            </Link>
            <a href="#archives" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-orange-600 transition">
              Archives
            </a>
          </nav>
        </div>
      </header>

      {/* TODAY'S PLAN — primary dashboard. Replaces the static CSE 114 hero. */}
      <section className="py-10 md:py-14 bg-gradient-to-br from-orange-50 via-white to-rose-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container max-w-5xl">
          <TodayPlan />
          <div className="mt-6 grid sm:grid-cols-4 gap-3">
            {[
              { label: "Learn", desc: "Chapters", href: "/cse114/learn", color: "#4f46e5" },
              { label: "Exam Sim", desc: "Practice exams", href: "/cse114", color: "#ea580c" },
              { label: "Drill traps", desc: "Logged mistakes", href: "/cse114/drill", color: "#16a34a" },
              { label: "Trap list", desc: "Browse & master", href: "/cse114/traps", color: "#e11d48" },
            ].map((c) => (
              <Link key={c.label} href={c.href}>
                <Card
                  className="p-4 h-full hover:shadow-lg transition-shadow cursor-pointer"
                  style={{ borderTop: `3px solid ${c.color}` }}
                >
                  <div className="text-base font-bold text-gray-900 dark:text-white">{c.label}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{c.desc}</div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ARCHIVES — previous courses ===== */}
      <section id="archives" className="py-10 bg-gray-100 dark:bg-slate-950 border-y border-gray-200 dark:border-slate-800">
        <div className="container text-center">
          <span className="inline-block bg-gray-700 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider mb-2">
            ARCHIVES
          </span>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Past courses — PHY 131 · ESE 123 · AMS 161
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-1">
            Spring 2026 study tools, kept for reference. CSE 114 is the active course above.
          </p>
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

      {/* PHY 131 Midterm Prep */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-fuchsia-50 to-amber-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider mb-4">
              EXAM PREP
            </span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              PHY 131 Midterm Prep
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              7 topics covered on your cumulative exam: rotational mechanics, oscillations, waves
              &amp; sound, fluids. 10-day study schedule, every PDF problem worked through, plus a
              timed mock exam.
            </p>
          </div>

          <div className="grid md:grid-cols-7 gap-2 mb-10 max-w-5xl mx-auto">
            {[
              { day: 1, label: "Rot. Kin.", color: "#06b6d4", route: "/rotational-kinematics" },
              { day: 2, label: "Torque", color: "#c026d3", route: "/torque" },
              { day: 3, label: "Rot. E", color: "#ef4444", route: "/rotational-energy" },
              { day: 4, label: "Ang. Mom.", color: "#3b82f6", route: "/angular-momentum" },
              { day: 5, label: "SHM", color: "#f59e0b", route: "/shm" },
              { day: 6, label: "Waves", color: "#10b981", route: "/waves-music" },
              { day: 7, label: "Fluids", color: "#0ea5e9", route: "/fluids" },
            ].map((d) => (
              <Link key={d.day} href={d.route}>
                <Card
                  className="p-3 text-center hover:shadow-md transition-shadow cursor-pointer h-full"
                  style={{ borderTop: `3px solid ${d.color}` }}
                >
                  <div
                    className="text-2xl font-bold mb-1"
                    style={{ color: d.color }}
                  >
                    D{d.day}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-300 font-semibold">
                    {d.label}
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/midterm-prep">
              <Button className="bg-gradient-to-r from-cyan-600 via-fuchsia-600 to-amber-500 hover:from-cyan-700 hover:via-fuchsia-700 hover:to-amber-600 text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2 mx-auto">
                Open Study Plan <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ESE 123 Final Exam Prep */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-emerald-50 to-cyan-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider mb-4">
              ESE 123 · FINAL EXAM PREP
            </span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Electrical & Computer Engineering
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              8 topic clusters covering all 26 practice-exam questions. Built from
              your project firmware, lab manuals, and pre-labs. Includes a timed mock
              exam with auto-grading and topic-by-topic accuracy.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-3 mb-10 max-w-5xl mx-auto">
            {[
              { label: "Bitwise", color: "#2563eb", route: "/ee/bitwise-numbers" },
              { label: "uC I/O", color: "#c026d3", route: "/ee/microcontroller-io" },
              { label: "DC Circuits", color: "#10b981", route: "/ee/dc-circuits" },
              { label: "Lab Eq.", color: "#06b6d4", route: "/ee/lab-equipment" },
              { label: "USB-C", color: "#f59e0b", route: "/ee/usb-c-power" },
              { label: "ADC", color: "#ef4444", route: "/ee/adc" },
              { label: "SPICE", color: "#0ea5e9", route: "/ee/spice-simulation" },
              { label: "Op-Amps", color: "#7c3aed", route: "/ee/op-amps" },
            ].map((t) => (
              <Link key={t.label} href={t.route}>
                <Card
                  className="p-3 text-center hover:shadow-md transition-shadow cursor-pointer h-full"
                  style={{ borderTop: `3px solid ${t.color}` }}
                >
                  <div className="text-xs text-gray-600 dark:text-gray-300 font-semibold" style={{ color: t.color }}>
                    {t.label}
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center flex flex-wrap gap-3 justify-center">
            <Link href="/ee">
              <Button className="bg-gradient-to-r from-amber-500 via-emerald-500 to-cyan-500 hover:from-amber-600 hover:via-emerald-600 hover:to-cyan-600 text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2">
                Open ESE 123 Hub <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/ee/mock-exam">
              <Button variant="outline" className="px-8 py-6 text-lg rounded-lg">
                Take Mock Exam
              </Button>
            </Link>
            <Link href="/ee/drill">
              <Button variant="outline" className="px-8 py-6 text-lg rounded-lg">
                Drill
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AMS 161 Final Exam Prep */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider mb-4">
              AMS 161 · FINAL EXAM PREP
            </span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Applied Calculus II
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              4 chapters covering all 26 sections of Stewart's Calculus: Concepts and
              Contexts. Typeset math, interactive Riemann/volume/series/Taylor
              visualizers, and a printable 2-page cheat sheet.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-3 mb-10 max-w-4xl mx-auto">
            {[
              { label: "Ch 5 Integration", color: "#2563eb", route: "/math/integration" },
              { label: "Ch 6 Applications", color: "#10b981", route: "/math/applications" },
              { label: "Ch 7 Differential Eqs", color: "#f59e0b", route: "/math/diff-eq" },
              { label: "Ch 8 Series", color: "#7c3aed", route: "/math/series" },
            ].map((t) => (
              <Link key={t.label} href={t.route}>
                <Card
                  className="p-3 text-center hover:shadow-md transition-shadow cursor-pointer h-full"
                  style={{ borderTop: `3px solid ${t.color}` }}
                >
                  <div className="text-xs font-semibold" style={{ color: t.color }}>
                    {t.label}
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center flex flex-wrap gap-3 justify-center">
            <Link href="/math">
              <Button className="bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 hover:from-blue-600 hover:via-cyan-600 hover:to-indigo-600 text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2">
                Open AMS 161 Hub <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/math/cheat-sheet">
              <Button variant="outline" className="px-8 py-6 text-lg rounded-lg">
                📄 2-Page Cheat Sheet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Super Mock Exam — capstone challenge */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-rose-900 to-amber-900 dark:from-black dark:via-red-950 dark:to-amber-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-amber-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
        </div>
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-white text-red-900 px-4 py-1 rounded-full text-xs font-bold tracking-wider mb-4">
              ★ THE GAUNTLET ★
            </span>
            <h2 className="text-5xl font-bold text-white mb-4">
              Super Mock Exam
            </h2>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto mb-3 leading-relaxed">
              The whole program from A to Z — Physics + EE + Calculus II, midterm + finals
              — ranked by difficulty.
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 italic">
              30 problems across 4 tiers. Tier 1 conceptual checks → Tier 4 cross-topic
              monsters. Solve them all and you've mastered the program.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold text-emerald-300">Tier 1</div>
                <div className="text-xs text-white/80">8 quick concept checks</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold text-sky-300">Tier 2</div>
                <div className="text-xs text-white/80">10 single-step calcs</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold text-amber-300">Tier 3</div>
                <div className="text-xs text-white/80">8 multi-step problems</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold text-red-300">Tier 4</div>
                <div className="text-xs text-white/80">4 final-boss monsters</div>
              </div>
            </div>
            <Link href="/super-mock-exam">
              <Button className="bg-white hover:bg-amber-100 text-red-900 px-10 py-7 text-xl rounded-lg font-bold shadow-2xl flex items-center gap-2 mx-auto">
                Enter the Gauntlet <ChevronRight className="w-6 h-6" />
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
              <div className="flex flex-wrap gap-2">
                <Link href="/formula-sheet">
                  <Button variant="ghost" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900 flex items-center gap-2">
                    View Reference <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/cheat-sheet">
                  <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900 flex items-center gap-2">
                    📄 2-Page Cheat Sheet (Physics + EE)
                  </Button>
                </Link>
              </div>
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
