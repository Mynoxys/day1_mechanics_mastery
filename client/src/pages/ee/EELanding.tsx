import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  Cpu,
  Zap,
  CircuitBoard,
  Activity,
  Hash,
  Gauge,
  Usb,
  Sigma,
  Target,
} from "lucide-react";
import { Link } from "wouter";

interface ClusterCard {
  num: number;
  title: string;
  route: string;
  color: string;
  bgClass: string;
  icon: typeof Cpu;
  blurb: string;
  questions: string;
}

const clusters: ClusterCard[] = [
  {
    num: 1,
    title: "Bitwise & Number Systems",
    route: "/ee/bitwise-numbers",
    color: "#2563eb",
    bgClass: "bg-blue-100 dark:bg-blue-900",
    icon: Hash,
    blurb: "AND masks, integer division, modulo, hex ↔ dec ↔ binary. Pure math, no lab dependence.",
    questions: "Q2, Q3, Q6, Q19",
  },
  {
    num: 2,
    title: "Microcontroller I/O",
    route: "/ee/microcontroller-io",
    color: "#c026d3",
    bgClass: "bg-fuchsia-100 dark:bg-fuchsia-900",
    icon: Cpu,
    blurb: "AVR PORTA / PORTE / PORTC. Buttons, LEDs, Morse, for-loops, RTC interrupts.",
    questions: "Q4, Q5, Q7, Q18, Q26",
  },
  {
    num: 3,
    title: "DC Circuits",
    route: "/ee/dc-circuits",
    color: "#10b981",
    bgClass: "bg-emerald-100 dark:bg-emerald-900",
    icon: CircuitBoard,
    blurb: "Voltage divider with and without DMM loading. KVL on multi-loop, multi-source circuits.",
    questions: "Q12, Q13, Q16, Q17",
  },
  {
    num: 4,
    title: "Lab Equipment",
    route: "/ee/lab-equipment",
    color: "#06b6d4",
    bgClass: "bg-cyan-100 dark:bg-cyan-900",
    icon: Activity,
    blurb: "I-V slope → R, max-power match, DMM 4-wire ohms, scope V_rms and angular frequency.",
    questions: "Q9, Q10, Q11, Q14, Q15",
  },
  {
    num: 5,
    title: "USB-C Power Delivery",
    route: "/ee/usb-c-power",
    color: "#f59e0b",
    bgClass: "bg-amber-100 dark:bg-amber-900",
    icon: Usb,
    blurb: "CC1/CC2 voltage detection, active vs passive cables, super capacitor, disconnect events.",
    questions: "Q1, Q22, Q23, Q24",
  },
  {
    num: 6,
    title: "ADC Conversion",
    route: "/ee/adc",
    color: "#ef4444",
    bgClass: "bg-red-100 dark:bg-red-900",
    icon: Gauge,
    blurb: "10-bit ADC math, V_ref = 4.3 V, ADC0_MUXPOS pin selection.",
    questions: "Q20, Q21",
  },
  {
    num: 7,
    title: "SPICE Simulation",
    route: "/ee/spice-simulation",
    color: "#0ea5e9",
    bgClass: "bg-sky-100 dark:bg-sky-900",
    icon: Sigma,
    blurb: ".tran / .ac / .dc / .op — what each simulation type plots and when to use it.",
    questions: "Q8",
  },
  {
    num: 8,
    title: "Op-Amps",
    route: "/ee/op-amps",
    color: "#7c3aed",
    bgClass: "bg-purple-100 dark:bg-purple-900",
    icon: Zap,
    blurb: "Inverting transimpedance amplifier: V_out = −I_in · R_f.",
    questions: "Q25",
  },
];

const studyDays = [
  { day: 1, label: "Bitwise + uC", routes: ["/ee/bitwise-numbers", "/ee/microcontroller-io"], color: "#2563eb" },
  { day: 2, label: "DC Circuits", routes: ["/ee/dc-circuits"], color: "#10b981" },
  { day: 3, label: "Lab + USB-C", routes: ["/ee/lab-equipment", "/ee/usb-c-power"], color: "#f59e0b" },
  { day: 4, label: "ADC + Op-Amps + SPICE", routes: ["/ee/adc", "/ee/op-amps", "/ee/spice-simulation"], color: "#ef4444" },
  { day: 5, label: "Drill + Mock Exam", routes: ["/ee/drill", "/ee/mock-exam"], color: "#c026d3" },
];

export default function EELanding() {
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
            ESE 123 Final Exam Prep
          </h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container py-12 space-y-16">
        <section>
          <div className="bg-gradient-to-br from-amber-50 via-emerald-50 to-cyan-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 rounded-2xl p-10 md:p-14">
            <span className="inline-block bg-emerald-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider mb-4">
              ESE 123.01 · Stony Brook · Spring 2026
            </span>
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Master the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-emerald-500 to-cyan-500">
                8 Final Exam Topics
              </span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-6">
              Every cluster is built from the actual practice exam plus your lab manuals.
              Each topic page has interactive widgets, formula cards, worked examples for
              every relevant practice question, and variant problems to drill mastery.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/ee/mock-exam">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-5 text-base rounded-lg flex items-center gap-2">
                  <Target className="w-5 h-5" /> Take Mock Exam
                </Button>
              </Link>
              <Link href="/ee/drill">
                <Button
                  variant="outline"
                  className="px-6 py-5 text-base rounded-lg"
                >
                  Drill Practice
                </Button>
              </Link>
              <Link href="/ee/formula-sheet">
                <Button variant="outline" className="px-6 py-5 text-base rounded-lg">
                  Formula Sheet
                </Button>
              </Link>
              <Link href="/cheat-sheet">
                <Button variant="outline" className="px-6 py-5 text-base rounded-lg">
                  📄 2-Page Cheat Sheet
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Previous-exam study path */}
        <section>
          <div className="bg-gradient-to-br from-rose-50 to-amber-50 dark:from-rose-950/40 dark:to-amber-950/40 border-l-4 border-rose-600 rounded-2xl p-8 md:p-10">
            <div className="flex items-start gap-4 flex-wrap">
              <div className="flex-1 min-w-[260px]">
                <span className="inline-block bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-3">
                  BUILT FROM YOUR ACTUAL LAST EXAM
                </span>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Midterm Recovery — 8 Tight Modules + Mock
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Your last midterm score: <b>13 / 49 (27%)</b>. The 8 modules
                  below target the <b>exact patterns</b> you missed — CV/CC bench
                  mode, multi-R reduction, divider design, scope sine-vs-square
                  RMS, source polarity, nodal analysis, lab error, SPICE match.
                  Then take the 19-question mock with fresh numbers.
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Tighter than the existing topic pages — each module is one
                  rule + one example + 3 drills with reveals. Designed to recover
                  ~36 of the 49 points in about an hour.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-w-[200px]">
                <Link href="/ee/midterm-drill">
                  <Button className="bg-rose-600 hover:bg-rose-700 text-white w-full px-6 py-5 text-base rounded-lg flex items-center justify-center gap-2">
                    <Target className="w-5 h-5" /> Start Midterm Drill
                  </Button>
                </Link>
                <Link href="/ee/midterm-mock">
                  <Button variant="outline" className="border-rose-600 text-rose-700 dark:text-rose-300 w-full px-6 py-5 text-base rounded-lg">
                    Skip to Mock Exam →
                  </Button>
                </Link>
                <Link href="/ee/quiz-retake">
                  <Button variant="outline" className="border-amber-600 text-amber-700 dark:text-amber-300 w-full px-6 py-5 text-base rounded-lg">
                    Practice Final Retake (46/90) — Analysis →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              5-Day Study Schedule
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Topics ordered by exam-point yield. Day 1 alone covers 9 questions.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {studyDays.map((d) => (
              <Card
                key={d.day}
                className="p-4 text-center hover:shadow-md transition-shadow"
                style={{ borderTop: `3px solid ${d.color}` }}
              >
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ color: d.color }}
                >
                  Day {d.day}
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-200 font-semibold mb-2">
                  {d.label}
                </div>
                <div className="flex flex-col gap-1">
                  {d.routes.map((r) => (
                    <Link key={r} href={r}>
                      <span className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white underline font-mono">
                        {r}
                      </span>
                    </Link>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Topic Clusters
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Eight clusters covering all 26 practice-exam questions. Click any to start.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {clusters.map((c) => {
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
                            {c.questions}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {c.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {c.blurb}
                        </p>
                        <div className="mt-3 flex items-center gap-1 text-sm font-semibold" style={{ color: c.color }}>
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
          <Card className="p-8 bg-gradient-to-br from-emerald-50 to-cyan-50 dark:from-slate-800 dark:to-slate-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              How to use this section
            </h3>
            <ol className="space-y-2 text-gray-700 dark:text-gray-200 list-decimal list-inside">
              <li>
                Walk the topic clusters in order. Each page teaches the concept,
                then shows you the verbatim practice question fully solved, then
                gives you variants to drill.
              </li>
              <li>
                Use the <Link href="/ee/drill" className="underline font-semibold">drill page</Link> to grind random
                bitwise / ADC / divider problems until you can answer in under 10 seconds.
              </li>
              <li>
                Take the <Link href="/ee/mock-exam" className="underline font-semibold">timed mock exam</Link> when
                you've covered every topic. Review the per-topic accuracy bars to find weak spots.
              </li>
              <li>
                The <Link href="/ee/formula-sheet" className="underline font-semibold">formula sheet</Link> is your
                last-night-before-the-exam reference.
              </li>
            </ol>
          </Card>
        </section>
      </div>
    </div>
  );
}
