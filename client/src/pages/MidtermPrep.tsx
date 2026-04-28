import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Clock, Target } from "lucide-react";
import { Link } from "wouter";

interface ModuleCard {
  day: number;
  title: string;
  route: string;
  color: string;
  bgClass: string;
  hours: string;
  blurb: string;
  problems: number;
}

const modules: ModuleCard[] = [
  {
    day: 1,
    title: "Rotational Kinematics",
    route: "/rotational-kinematics",
    color: "#06b6d4",
    bgClass: "bg-cyan-100 dark:bg-cyan-900",
    hours: "~2.5 hr",
    blurb: "Linear ↔ angular analogy. Five rotational kinematic equations. rad/s vs rpm.",
    problems: 2,
  },
  {
    day: 2,
    title: "Torque & Statics",
    route: "/torque",
    color: "#c026d3",
    bgClass: "bg-fuchsia-100 dark:bg-fuchsia-900",
    hours: "~3 hr",
    blurb: "τ = rF sinθ = Iα. Static equilibrium. Choosing the smartest pivot.",
    problems: 7,
  },
  {
    day: 3,
    title: "Rotational Energy",
    route: "/rotational-energy",
    color: "#ef4444",
    bgClass: "bg-red-100 dark:bg-red-900",
    hours: "~3 hr",
    blurb: "KE_rot = ½Iω². Rolling without slipping. Why hollow loses the race.",
    problems: 4,
  },
  {
    day: 4,
    title: "Angular Momentum",
    route: "/angular-momentum",
    color: "#3b82f6",
    bgClass: "bg-blue-100 dark:bg-blue-900",
    hours: "~2.5 hr",
    blurb: "L = Iω. Conservation when no external torque. Angular collisions.",
    problems: 2,
  },
  {
    day: 5,
    title: "Simple Harmonic Motion",
    route: "/shm",
    color: "#f59e0b",
    bgClass: "bg-amber-100 dark:bg-amber-900",
    hours: "~3 hr",
    blurb: "x(t) = A cos(ωt+φ). Period depends only on k and m. Physical pendulum.",
    problems: 3,
  },
  {
    day: 6,
    title: "Waves & Music",
    route: "/waves-music",
    color: "#10b981",
    bgClass: "bg-emerald-100 dark:bg-emerald-900",
    hours: "~4 hr",
    blurb: "Standing waves on strings & in pipes. Doppler. Decibels. The trickiest topic.",
    problems: 7,
  },
  {
    day: 7,
    title: "Fluids",
    route: "/fluids",
    color: "#0ea5e9",
    bgClass: "bg-sky-100 dark:bg-sky-900",
    hours: "~3.5 hr",
    blurb: "Pressure, Pascal, Archimedes, Continuity, Bernoulli, Torricelli.",
    problems: 5,
  },
];

export default function MidtermPrep() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
            >
              <ChevronLeft className="w-5 h-5" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            PHY 131 Midterm Prep
          </h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container py-12">
        {/* Hero */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 rounded-2xl p-10 md:p-14">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Master Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-fuchsia-600 to-amber-500">
                7 Midterm Topics
              </span>{" "}
              in 10 Days
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mb-8">
              A complete course-module prep system covering rotational mechanics, oscillations,
              waves &amp; sound, and fluids. Every concept comes with a live simulator, a fully
              worked example from your problem set, and the rest of your problems as expandable
              practice with stepwise reveal-solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/rotational-kinematics">
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2">
                  Start with Day 1 <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/mock-exam">
                <Button
                  variant="outline"
                  className="px-8 py-6 text-lg rounded-lg border-2 flex items-center gap-2"
                >
                  <Target className="w-5 h-5" />
                  Mock Exam
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Schedule Strip */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Your 10-Day Study Plan
          </h3>
          <Card className="interactive-panel overflow-x-auto">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="border-b border-gray-200 dark:border-slate-600">
                  <th className="text-left py-3 px-4 font-bold text-gray-900 dark:text-white w-20">
                    Day
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900 dark:text-white">
                    Topic
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900 dark:text-white">
                    Focus
                  </th>
                  <th className="text-right py-3 px-4 font-bold text-gray-900 dark:text-white w-24">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-slate-600">
                {modules.map((m) => (
                  <tr key={m.day} className="hover:bg-gray-50 dark:hover:bg-slate-700">
                    <td className="py-3 px-4">
                      <span
                        className="inline-flex w-8 h-8 items-center justify-center rounded-full text-white font-bold"
                        style={{ backgroundColor: m.color }}
                      >
                        {m.day}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <Link href={m.route}>
                        <span
                          className="font-semibold hover:underline cursor-pointer"
                          style={{ color: m.color }}
                        >
                          {m.title}
                        </span>
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{m.blurb}</td>
                    <td className="py-3 px-4 text-right text-gray-500 dark:text-gray-400">
                      {m.hours}
                    </td>
                  </tr>
                ))}
                <tr className="hover:bg-gray-50 dark:hover:bg-slate-700">
                  <td className="py-3 px-4">
                    <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-gray-700 dark:bg-gray-300 text-white dark:text-gray-900 font-bold">
                      8
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-900 dark:text-white font-semibold">
                    Mixed Practice
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">
                    Solve 2-3 problems per topic without notes. Identify weak spots.
                  </td>
                  <td className="py-3 px-4 text-right text-gray-500 dark:text-gray-400">~3 hr</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-slate-700">
                  <td className="py-3 px-4">
                    <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-purple-700 text-white font-bold">
                      9
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Link href="/mock-exam">
                      <span className="text-purple-600 hover:underline font-semibold cursor-pointer">
                        Mock Exam
                      </span>
                    </Link>
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">
                    90-minute timed run. Topic-by-topic accuracy report.
                  </td>
                  <td className="py-3 px-4 text-right text-gray-500 dark:text-gray-400">~2 hr</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-slate-700">
                  <td className="py-3 px-4">
                    <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-emerald-600 text-white font-bold">
                      10
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-900 dark:text-white font-semibold">
                    Buffer / Light Review
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">
                    Re-read formulas. Light practice on remaining weak spots. Rest.
                  </td>
                  <td className="py-3 px-4 text-right text-gray-500 dark:text-gray-400">~1-2 hr</td>
                </tr>
              </tbody>
            </table>
          </Card>
        </section>

        {/* Module Cards */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Topic Modules</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m) => (
              <Card
                key={m.day}
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                style={{ borderLeftWidth: 4, borderLeftColor: m.color }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 ${m.bgClass} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-2xl font-bold" style={{ color: m.color }}>
                      {m.day}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {m.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {m.hours}
                      </span>
                      <span>•</span>
                      <span>{m.problems} PDF problem{m.problems === 1 ? "" : "s"}</span>
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {m.blurb}
                </p>
                <Link href={m.route}>
                  <Button
                    variant="ghost"
                    className="w-full justify-between"
                    style={{ color: m.color }}
                  >
                    Open Module <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        {/* How to use */}
        <section className="mb-16">
          <Card className="interactive-panel">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              How to use each module
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 font-bold flex items-center justify-center">
                  1
                </span>
                <p>
                  <strong>Read the concept</strong> — analogies first, then the formal physics.
                  Don't skip; this is what makes the math stick.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900 text-amber-600 font-bold flex items-center justify-center">
                  2
                </span>
                <p>
                  <strong>Play with the simulator.</strong> Move sliders, predict the change first,
                  then watch the numbers update. Build muscle memory for the formulas.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 font-bold flex items-center justify-center">
                  3
                </span>
                <p>
                  <strong>Walk through the worked example.</strong> Cover the right column, attempt
                  each step yourself, then check.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 font-bold flex items-center justify-center">
                  4
                </span>
                <p>
                  <strong>Solve every practice problem on paper</strong> before expanding to see
                  the solution. Every PDF problem is in here.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Mock exam CTA */}
        <section className="text-center py-12">
          <Card className="interactive-panel bg-gradient-to-br from-purple-600 to-pink-600 text-white border-0">
            <h3 className="text-3xl font-bold mb-4">When you're ready: take the Mock Exam</h3>
            <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
              90-minute timer, 8-10 randomized problems, topic-by-topic accuracy at the end. The
              best way to find what's still shaky.
            </p>
            <Link href="/mock-exam">
              <Button className="bg-white hover:bg-gray-100 text-purple-700 px-10 py-6 text-lg rounded-lg">
                Begin Mock Exam <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </Card>
        </section>
      </div>
    </div>
  );
}
