import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  Sigma,
  Layers,
  Wind,
  Infinity as InfinityIcon,
  Target,
} from "lucide-react";
import { Link } from "wouter";

interface ChapterCard {
  num: number;
  ch: string;
  title: string;
  route: string;
  color: string;
  bgClass: string;
  icon: typeof Sigma;
  blurb: string;
  sections: string;
}

const chapters: ChapterCard[] = [
  {
    num: 1,
    ch: "Ch 5",
    title: "Integration",
    route: "/math/integration",
    color: "#2563eb",
    bgClass: "bg-blue-100 dark:bg-blue-900",
    icon: Sigma,
    blurb:
      "Riemann sums, the definite integral, FTC parts 1 & 2, substitution, integration by parts, trig integrals, partial fractions, numerical methods, improper integrals.",
    sections: "Sections 5.1 – 5.10",
  },
  {
    num: 2,
    ch: "Ch 6",
    title: "Applications of Integration",
    route: "/math/applications",
    color: "#10b981",
    bgClass: "bg-emerald-100 dark:bg-emerald-900",
    icon: Layers,
    blurb:
      "Areas between curves, volumes by disks/washers/shells, arc length, average value of a function. The 'pick the right slice' chapter.",
    sections: "Sections 6.1 – 6.5",
  },
  {
    num: 3,
    ch: "Ch 7",
    title: "Differential Equations",
    route: "/math/diff-eq",
    color: "#f59e0b",
    bgClass: "bg-amber-100 dark:bg-amber-900",
    icon: Wind,
    blurb:
      "Modeling with DEs (population growth, Newton cooling), slope fields, Euler's method, separable equations.",
    sections: "Sections 7.1 – 7.3",
  },
  {
    num: 4,
    ch: "Ch 8",
    title: "Sequences & Series",
    route: "/math/series",
    color: "#7c3aed",
    bgClass: "bg-purple-100 dark:bg-purple-900",
    icon: InfinityIcon,
    blurb:
      "Sequences, series convergence (integral / comparison / alternating / ratio tests), power series, Taylor and Maclaurin series, Taylor polynomial approximations.",
    sections: "Sections 8.1 – 8.8",
  },
];

export default function Math() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
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
            AMS 161 Final Exam Prep
          </h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container py-12 space-y-16">
        <section>
          <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 rounded-2xl p-10 md:p-14">
            <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider mb-4">
              AMS 161.02 · Stony Brook · Spring 2026
            </span>
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Master{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500">
                Applied Calculus II
              </span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-6">
              Four chapters, twenty-six sections — built from your Stewart{" "}
              <em>Calculus: Concepts and Contexts</em> lecture decks plus the
              two midterm sample exams. Every concept gets a typeset formula
              card and (where it makes sense) an interactive visualizer with
              real sliders.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/math/mock-exam-1">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 text-base rounded-lg flex items-center gap-2">
                  <Target className="w-5 h-5" /> Take Mock Exam 1
                </Button>
              </Link>
              <Link href="/math/drill">
                <Button variant="outline" className="px-6 py-5 text-base rounded-lg">
                  Drill Practice
                </Button>
              </Link>
              <Link href="/math/cheat-sheet">
                <Button variant="outline" className="px-6 py-5 text-base rounded-lg">
                  📄 2-Page Cheat Sheet
                </Button>
              </Link>
              <Link href="/math/final-boss">
                <Button variant="outline" className="px-6 py-5 text-base rounded-lg">
                  Final Boss
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              The 4 Chapters
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Each chapter page collapses its Stewart sections into expandable
              cards so you can scan the whole chapter or zoom into one section.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {chapters.map((c) => {
              const Icon = c.icon;
              return (
                <Link key={c.num} href={c.route}>
                  <Card
                    className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full"
                    style={{ borderLeft: `4px solid ${c.color}` }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 ${c.bgClass} rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="w-6 h-6" style={{ color: c.color }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="text-xs font-bold px-2 py-0.5 rounded-full"
                            style={{
                              color: c.color,
                              backgroundColor: c.color + "20",
                            }}
                          >
                            {c.ch} · {c.sections}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {c.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {c.blurb}
                        </p>
                        <div
                          className="mt-3 flex items-center gap-1 text-sm font-semibold"
                          style={{ color: c.color }}
                        >
                          Open <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        <section>
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              How to use this section
            </h3>
            <ol className="space-y-2 text-gray-700 dark:text-gray-200 list-decimal list-inside">
              <li>
                Walk the chapters in order. Inside each chapter, expand the
                sections you're least confident on first — every section starts
                with the headline formula in typeset math.
              </li>
              <li>
                Drag the sliders on the visualizers (Riemann sums, solid of
                revolution, slope fields, partial sums, Taylor polynomials).
                Watching the formulas move as numbers change is faster than
                re-reading the slide deck.
              </li>
              <li>
                Use the{" "}
                <Link href="/math/drill" className="underline font-semibold">
                  drill page
                </Link>{" "}
                (coming in Phase 3) to grind random integrals, separable DEs,
                and convergence problems until you can answer fast.
              </li>
              <li>
                Take{" "}
                <Link href="/math/mock-exam-1" className="underline font-semibold">
                  Mock Exam 1
                </Link>{" "}
                and{" "}
                <Link href="/math/mock-exam-2" className="underline font-semibold">
                  Mock Exam 2
                </Link>{" "}
                under timed conditions when you've covered every chapter. Final
                practice exam will be added when the instructor releases it.
              </li>
              <li>
                The{" "}
                <Link href="/math/cheat-sheet" className="underline font-semibold">
                  2-page cheat sheet
                </Link>{" "}
                is your last-night-before-the-exam reference: antiderivatives,
                "which technique" decision flow, convergence-tests table,
                common Maclaurin series.
              </li>
            </ol>
          </Card>
        </section>
      </div>
    </div>
  );
}
