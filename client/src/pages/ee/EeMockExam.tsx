import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronLeft, Clock, Target, Trophy, RotateCcw } from "lucide-react";
import { Link } from "wouter";
import { MultipleChoice } from "@/components/ee/MultipleChoice";
import { MultiSelect } from "@/components/ee/MultiSelect";
import { Matching } from "@/components/ee/Matching";
import {
  DividerDesign,
  DividerWithDmm,
  DividerThenThreeParallel,
  TwoSourceLoopWithR,
  ScopeFig,
  TransimpedanceFig,
} from "./MidtermFigures";

const TIMER_DURATION = 75 * 60; // 75 minutes

type Question =
  | {
      kind: "numeric";
      id: number;
      topic: string;
      topicColor: string;
      points: number;
      prompt: React.ReactNode;
      expectedAnswer: number;
      unit: string;
      tolerance: number;
      solution: React.ReactNode;
      labDependent?: boolean;
    }
  | {
      kind: "mc";
      id: number;
      topic: string;
      topicColor: string;
      points: number;
      prompt: React.ReactNode;
      choices: string[];
      correctIndex: number;
      solution: React.ReactNode;
      image?: string;
      labDependent?: boolean;
    }
  | {
      kind: "multi";
      id: number;
      topic: string;
      topicColor: string;
      points: number;
      prompt: React.ReactNode;
      choices: string[];
      correctIndices: number[];
      solution: React.ReactNode;
      image?: string;
      labDependent?: boolean;
    }
  | {
      kind: "matching";
      id: number;
      topic: string;
      topicColor: string;
      points: number;
      prompt: React.ReactNode;
      leftItems: string[];
      rightOptions: string[];
      correctMapping: string[];
      solution: React.ReactNode;
      labDependent?: boolean;
    };

const QUESTION_BANK: Question[] = [
  {
    kind: "multi",
    id: 1,
    topic: "USB-C",
    topicColor: "#f59e0b",
    points: 3,
    prompt: <>USB-C charging poses challenges not present in earlier USB. Select all that apply.</>,
    choices: [
      "USB-C cables must contain chips",
      "USB-C can provide currents that are dangerous for some cables.",
      "USB-C cables may contain chips",
      "USB-C cables can be inserted either way around, potentially reversing the polarity of the connection.",
      "USB-C can provide voltages that are dangerous for some devices.",
      "USB-C does not identify charging roles with different connectors.",
    ],
    correctIndices: [1, 2, 3, 4, 5],
    solution: <>"must" is wrong; the rest are real challenges.</>,
  },
  {
    kind: "numeric",
    id: 2,
    topic: "Bitwise",
    topicColor: "#2563eb",
    points: 4,
    prompt: <>You want <code>if (PORTD_IN &amp; x)</code> to detect if bit 3 is set. What value of x (decimal)?</>,
    expectedAnswer: 8,
    unit: "",
    tolerance: 0.001,
    solution: <>2³ = 8 = 0b00001000.</>,
  },
  {
    kind: "numeric",
    id: 3,
    topic: "Bitwise",
    topicColor: "#2563eb",
    points: 4,
    prompt: <>Compute <code>35 % 0b00001010</code> in C (decimal answer).</>,
    expectedAnswer: 5,
    unit: "",
    tolerance: 0.001,
    solution: <>0b00001010 = 10. 35 mod 10 = 5.</>,
  },
  {
    kind: "mc",
    id: 4,
    topic: "Microcontroller",
    topicColor: "#c026d3",
    points: 4,
    prompt: <>The C statement <code>if (PORTE_IN &amp; 0b00000001)</code> executes its target when…</>,
    choices: [
      "the UP button is pressed",
      "the UP button is NOT pressed",
      "the OK button is pressed",
      "the OK button is NOT pressed",
      "the DOWN button is pressed",
      "the DOWN button is NOT pressed",
    ],
    correctIndex: 0,
    solution: <>UP=PE0 (bit 0). Project firmware tests <code>buttons==up</code>: pressed reads 1.</>,
  },
  {
    kind: "numeric",
    id: 5,
    topic: "Microcontroller",
    topicColor: "#c026d3",
    points: 5,
    prompt: (
      <>
        A code snippet alternates PORTA between 0x00 and 0xFF with delays of 200, 600, 200, 1400 ms,
        encoding a single Morse letter (each 200 ms = dot, 600 ms = dash). Treating the pattern
        ON-200 OFF-200 ON-600 OFF-200 ON-200 OFF-1400 as one letter, decode it.
        Enter <strong>1</strong> if the letter is R, <strong>0</strong> otherwise.
      </>
    ),
    expectedAnswer: 1,
    unit: "(0/1)",
    tolerance: 0.5,
    solution: <>·−· is "R" in Morse. (Replace with the actual letter from your exam's specific timing pattern.)</>,
    labDependent: true,
  },
  {
    kind: "numeric",
    id: 6,
    topic: "Bitwise",
    topicColor: "#2563eb",
    points: 4,
    prompt: <>Compute <code>35 / 0x2</code> in C (decimal).</>,
    expectedAnswer: 17,
    unit: "",
    tolerance: 0.001,
    solution: <>Integer divide: ⌊35/2⌋ = 17.</>,
  },
  {
    kind: "mc",
    id: 7,
    topic: "Microcontroller",
    topicColor: "#c026d3",
    points: 4,
    prompt: <>After <code>PORTA_OUT = 0b11011111;</code>, which LED is illuminated? (Active-low; D1 = PA0.)</>,
    choices: ["D1", "D2", "D3", "D4", "D5", "D6", "D7"],
    correctIndex: 5,
    solution: <>Only bit 5 is 0; PA5 ⇒ D6.</>,
    labDependent: true,
  },
  {
    kind: "matching",
    id: 8,
    topic: "SPICE",
    topicColor: "#0ea5e9",
    points: 3,
    prompt: <>Match each SPICE simulation type with its x-axis quantity.</>,
    leftItems: [".tran", ".ac", ".dc", ".op"],
    rightOptions: ["none", "time", "voltage (or current)", "frequency"],
    correctMapping: ["time", "frequency", "voltage (or current)", "none"],
    solution: <>tran=time, ac=frequency, dc=swept V/I, op=single point (no x-axis).</>,
  },
  {
    kind: "numeric",
    id: 9,
    topic: "Lab equipment",
    topicColor: "#06b6d4",
    points: 3,
    prompt: <>Slope of an I-vs-V plot is 0.021 A/V. Find R in ohms.</>,
    expectedAnswer: 47.62,
    unit: "Ω",
    tolerance: 0.02,
    solution: <>R = 1/0.021 = 47.62 Ω.</>,
  },
  {
    kind: "numeric",
    id: 10,
    topic: "Lab equipment",
    topicColor: "#06b6d4",
    points: 3,
    prompt: <>Lab supply set to 6.79 V, 0.392 A. R for max power transfer (ohms)?</>,
    expectedAnswer: 17.32,
    unit: "Ω",
    tolerance: 0.02,
    solution: <>R = V/I = 6.79/0.392 = 17.32 Ω.</>,
  },
  {
    kind: "multi",
    id: 11,
    topic: "Lab equipment",
    topicColor: "#06b6d4",
    points: 5,
    prompt: <>Select all true statements about the DMM's ohms function.</>,
    choices: [
      "Better accuracy with 4-wire mode at low resistances",
      "4-wire mode allows measuring R on a powered circuit",
      "Hazardous voltages are present when the meter shows Overload",
      "A built-in current source applies current through the test leads",
    ],
    correctIndices: [0, 3],
    solution: <>1 and 4 are true. Never measure R on a powered circuit; "Overload" is just out-of-range.</>,
  },
  {
    kind: "numeric",
    id: 12,
    topic: "DC circuits",
    topicColor: "#10b981",
    points: 5,
    prompt: <>V1 = 7.6 V, R1 = 20.9 kΩ, R2 = 10.2 kΩ. Find V at X (relative to GND), in volts.</>,
    expectedAnswer: 2.493,
    unit: "V",
    tolerance: 0.02,
    solution: <>V = 7.6·10.2/(20.9+10.2) = 7.6·10.2/31.1 = 2.49 V.</>,
  },
  {
    kind: "numeric",
    id: 13,
    topic: "DC circuits",
    topicColor: "#10b981",
    points: 5,
    prompt: (
      <>
        V1 = 7.2 V, R1 = 29.8 MΩ, R2 = 14.3 MΩ. Find V at X as measured by a 34461A DMM (10 MΩ input), in volts.
      </>
    ),
    expectedAnswer: 1.187,
    unit: "V",
    tolerance: 0.03,
    solution: <>R2,eff = 14.3∥10 = 5.885 MΩ. V = 7.2·5.885/35.685 = 1.187 V.</>,
  },
  {
    kind: "numeric",
    id: 14,
    topic: "Lab equipment",
    topicColor: "#06b6d4",
    points: 2,
    prompt: <>From the scope screenshot, find the V_rms of the bottom trace (volts). [Read the scale; example value if V_pp ≈ 4 V → V_rms ≈ 1.41 V.]</>,
    expectedAnswer: 1.41,
    unit: "V",
    tolerance: 0.1,
    solution: <>V_rms = V_pp/(2√2). Read V_pp from gridlines × V/div.</>,
    labDependent: true,
  },
  {
    kind: "numeric",
    id: 15,
    topic: "Lab equipment",
    topicColor: "#06b6d4",
    points: 2,
    prompt: <>From the scope screenshot, find ω of the top trace in rad/s. [Example: T = 20 ms → ω ≈ 314.</>,
    expectedAnswer: 314.16,
    unit: "rad/s",
    tolerance: 0.1,
    solution: <>ω = 2π/T. Read T from gridlines × t/div.</>,
    labDependent: true,
  },
  {
    kind: "numeric",
    id: 16,
    topic: "DC circuits",
    topicColor: "#10b981",
    points: 5,
    prompt: <>V1 = 5.0 V, R1 = 400 Ω; R2, R3, R4 (1500/1700/1300 Ω) in parallel from node A to GND. Find V_A (volts).</>,
    expectedAnswer: 2.763,
    unit: "V",
    tolerance: 0.05,
    solution: <>R_p = 1/(1/1500+1/1700+1/1300) ≈ 494 Ω. V_A = 5·494/894 = 2.76 V.</>,
  },
  {
    kind: "numeric",
    id: 17,
    topic: "DC circuits",
    topicColor: "#10b981",
    points: 5,
    prompt: <>V1 = 4.5 V, V2 = 1.6 V, R1 = 222 Ω, R2 = 113 Ω in a two-source loop (sources nose-to-nose). Find V at the inner node.</>,
    expectedAnswer: 2.578,
    unit: "V",
    tolerance: 0.03,
    solution: <>V = (4.5·113 + 1.6·222)/(222+113) = 863.7/335 = 2.58 V.</>,
  },
  {
    kind: "numeric",
    id: 18,
    topic: "Microcontroller",
    topicColor: "#c026d3",
    points: 4,
    prompt: (
      <>
        After this loop runs, what is b?
        <pre className="font-mono text-xs bg-gray-50 dark:bg-slate-700 rounded p-2 mt-2">{`int a = 5;
int b = 13;
for (int i = 1; i < a; i++)
    b = b + i;`}</pre>
      </>
    ),
    expectedAnswer: 23,
    unit: "",
    tolerance: 0.001,
    solution: <>b = 13 + 1 + 2 + 3 + 4 = 23.</>,
  },
  {
    kind: "numeric",
    id: 19,
    topic: "Bitwise",
    topicColor: "#2563eb",
    points: 4,
    prompt: <><code>0x35 &amp; 0xF = ?</code> (decimal).</>,
    expectedAnswer: 5,
    unit: "",
    tolerance: 0.001,
    solution: <>Keep low nibble: 0x5 = 5.</>,
  },
  {
    kind: "numeric",
    id: 20,
    topic: "ADC",
    topicColor: "#ef4444",
    points: 4,
    prompt: <>10-bit ADC, V_ref = 4.3 V, V_in = 2.606 V, single conversion. Code returned?</>,
    expectedAnswer: 620,
    unit: "",
    tolerance: 0.005,
    solution: <>round(2.606·1023/4.3) = round(619.99) = 620.</>,
  },
  {
    kind: "multi",
    id: 21,
    topic: "ADC",
    topicColor: "#ef4444",
    points: 3,
    prompt: <>What is ADC0_MUXPOS used for? (select all true)</>,
    choices: [
      "It selects the input voltage source for the ADC",
      "It indicates whether the ADC is busy",
      "It starts the ADC conversion",
      "It selects the reference voltage for the ADC",
      "It selects the output voltage of the ADC",
    ],
    correctIndices: [0],
    solution: <>MUXPOS just routes one input pin to the ADC core.</>,
  },
  {
    kind: "mc",
    id: 22,
    topic: "USB-C",
    topicColor: "#f59e0b",
    points: 4,
    prompt: <>CC1 = 1.032 V, CC2 = 4.96 V. What's connected?</>,
    choices: [
      "A chargeable USB device with a passive cable.",
      "Nothing.",
      "Another USB power supply.",
      "A chargeable USB device with an active cable.",
    ],
    correctIndex: 0,
    solution: <>1.032 V is in the 0.7-2.0 V "device" range; cable doesn't drop it to ~0.2 V (active), so passive.</>,
  },
  {
    kind: "multi",
    id: 23,
    topic: "USB-C",
    topicColor: "#f59e0b",
    points: 3,
    prompt: <>Upon disconnection of a chargeable USB device, your project: (select all true)</>,
    choices: [
      "Displays the battery capacity in mAh.",
      "Displays the total energy consumed during the charging operation.",
      "Displays the power delivered by the USB-C port.",
      "Disconnects power from the USB-C port.",
    ],
    correctIndices: [1, 3],
    solution: <>Per <code>complete_code1.c</code>: shows total energy, then drops bus.</>,
  },
  {
    kind: "multi",
    id: 24,
    topic: "USB-C",
    topicColor: "#f59e0b",
    points: 2,
    prompt: <>A super capacitor: (select all true)</>,
    choices: [
      "Is polar.",
      "Stores energy to keep the clock running for a brief power interruption.",
      "Prevents back filling of the power supply.",
      "Has a lot of capacitance.",
    ],
    correctIndices: [0, 1, 3],
    solution: <>1, 2, 4 are true. Back-filling prevention is a diode's job.</>,
  },
  {
    kind: "numeric",
    id: 25,
    topic: "Op-amp",
    topicColor: "#7c3aed",
    points: 3,
    prompt: <>Amplifier with input current 0.914 A and output voltage 4.782 V. Transimpedance in ohms?</>,
    expectedAnswer: 5.232,
    unit: "Ω",
    tolerance: 0.02,
    solution: <>Z_t = |V/I| = 4.782/0.914 = 5.232 Ω.</>,
  },
  {
    kind: "numeric",
    id: 26,
    topic: "Microcontroller",
    topicColor: "#c026d3",
    points: 3,
    prompt: (
      <>
        On this alien planet, the clock code resets <code>min</code> to 0 when it hits 55. How many minutes are in an alien hour?
      </>
    ),
    expectedAnswer: 55,
    unit: "minutes",
    tolerance: 0.005,
    solution: <>min cycles 0..54 then resets. 55 distinct values.</>,
  },
];

const totalPoints = QUESTION_BANK.reduce((acc, q) => acc + q.points, 0);

function fmtTime(s: number): string {
  if (s < 0) s = 0;
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

interface AnswerState {
  numeric?: string;
  mc?: number | null;
  multi?: number[];
  matching?: (string | null)[];
}

export default function EeMockExam() {
  const [phase, setPhase] = useState<"intro" | "exam" | "review">("intro");
  const [answers, setAnswers] = useState<AnswerState[]>(() =>
    QUESTION_BANK.map((q) => {
      if (q.kind === "matching") {
        return { matching: q.leftItems.map(() => null) };
      }
      if (q.kind === "multi") return { multi: [] };
      if (q.kind === "mc") return { mc: null };
      return { numeric: "" };
    })
  );
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);

  useEffect(() => {
    if (phase !== "exam") return;
    if (timeLeft <= 0) {
      setPhase("review");
      return;
    }
    const id = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [phase, timeLeft]);

  const start = () => {
    setAnswers(
      QUESTION_BANK.map((q) => {
        if (q.kind === "matching") return { matching: q.leftItems.map(() => null) };
        if (q.kind === "multi") return { multi: [] };
        if (q.kind === "mc") return { mc: null };
        return { numeric: "" };
      })
    );
    setTimeLeft(TIMER_DURATION);
    setPhase("exam");
  };

  const setNumeric = (idx: number, value: string) => {
    setAnswers((prev) => prev.map((a, i) => (i === idx ? { numeric: value } : a)));
  };
  const setMc = (idx: number, value: number) => {
    setAnswers((prev) => prev.map((a, i) => (i === idx ? { mc: value } : a)));
  };
  const toggleMulti = (idx: number, value: number) => {
    setAnswers((prev) =>
      prev.map((a, i) => {
        if (i !== idx) return a;
        const cur = a.multi ?? [];
        return cur.includes(value)
          ? { multi: cur.filter((v) => v !== value) }
          : { multi: [...cur, value].sort() };
      })
    );
  };
  const setMatching = (idx: number, leftIndex: number, value: string | null) => {
    setAnswers((prev) =>
      prev.map((a, i) => {
        if (i !== idx) return a;
        const cur = a.matching ?? [];
        return { matching: cur.map((v, j) => (j === leftIndex ? value : v)) };
      })
    );
  };

  const correctness = useMemo(() => {
    return QUESTION_BANK.map((q, i) => {
      const a = answers[i];
      if (q.kind === "numeric") {
        const v = parseFloat(a.numeric ?? "");
        if (Number.isNaN(v)) return false;
        const tol = Math.max(Math.abs(q.expectedAnswer * q.tolerance), 0.001);
        return Math.abs(v - q.expectedAnswer) <= tol;
      }
      if (q.kind === "mc") {
        return a.mc === q.correctIndex;
      }
      if (q.kind === "multi") {
        const sel = (a.multi ?? []).slice().sort();
        const want = q.correctIndices.slice().sort();
        return sel.length === want.length && sel.every((v, k) => v === want[k]);
      }
      if (q.kind === "matching") {
        return (a.matching ?? []).every((v, k) => v === q.correctMapping[k]);
      }
      return false;
    });
  }, [answers]);

  const earnedPoints = correctness.reduce(
    (acc, ok, i) => acc + (ok ? QUESTION_BANK[i].points : 0),
    0
  );
  const correctCount = correctness.filter(Boolean).length;

  const topicStats = useMemo(() => {
    const stats: Record<string, { color: string; correct: number; total: number; points: number; earnedPts: number }> = {};
    QUESTION_BANK.forEach((q, i) => {
      if (!stats[q.topic]) stats[q.topic] = { color: q.topicColor, correct: 0, total: 0, points: 0, earnedPts: 0 };
      stats[q.topic].total += 1;
      stats[q.topic].points += q.points;
      if (correctness[i]) {
        stats[q.topic].correct += 1;
        stats[q.topic].earnedPts += q.points;
      }
    });
    return stats;
  }, [correctness]);

  const finish = () => setPhase("review");
  const restart = () => setPhase("intro");

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/ee">
            <Button variant="ghost" className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <ChevronLeft className="w-5 h-5" /> Back to ESE 123
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">ESE 123 Mock Exam</h1>
          {phase === "exam" ? (
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono font-bold ${
                timeLeft < 600
                  ? "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300"
                  : "bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300"
              }`}
            >
              <Clock className="w-4 h-4" />
              {fmtTime(timeLeft)}
            </div>
          ) : (
            <div className="w-32" />
          )}
        </div>
      </header>

      <div className="container py-12">
        {phase === "intro" && (
          <Card className="interactive-panel max-w-3xl mx-auto bg-gradient-to-br from-emerald-600 to-cyan-600 text-white border-0">
            <Target className="w-16 h-16 mb-6 mx-auto" />
            <h2 className="text-4xl font-bold mb-4 text-center">Take the Mock</h2>
            <ul className="space-y-3 text-lg max-w-xl mx-auto mb-8">
              <li>• <strong>26 questions</strong> — every problem from the practice exam</li>
              <li>• <strong>{Math.round(TIMER_DURATION / 60)}-minute timer</strong></li>
              <li>• Numeric, multiple-choice, multi-select, and matching</li>
              <li>• Auto-graded on submit, with full per-topic breakdown</li>
              <li>• Total: {totalPoints} points</li>
            </ul>
            <div className="text-center">
              <Button
                onClick={start}
                className="bg-white hover:bg-gray-100 text-emerald-700 px-10 py-6 text-lg rounded-lg"
              >
                Start Exam
              </Button>
            </div>
          </Card>
        )}

        {phase === "exam" && (
          <section>
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {QUESTION_BANK.length} questions · {totalPoints} pts · finish anytime
              </p>
              <Button onClick={finish} variant="outline">
                Finish & Review
              </Button>
            </div>

            <div className="space-y-6">
              {QUESTION_BANK.map((q, i) => (
                <QuestionCard
                  key={q.id}
                  q={q}
                  state={answers[i]}
                  setNumeric={(v) => setNumeric(i, v)}
                  setMc={(v) => setMc(i, v)}
                  toggleMulti={(v) => toggleMulti(i, v)}
                  setMatching={(li, val) => setMatching(i, li, val)}
                  graded={false}
                  correct={correctness[i]}
                />
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button
                onClick={finish}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-5 text-base"
              >
                Finish & Review
              </Button>
            </div>
          </section>
        )}

        {phase === "review" && (
          <section className="space-y-8">
            <Card className="interactive-panel max-w-3xl mx-auto bg-gradient-to-br from-emerald-600 to-cyan-600 text-white border-0 text-center">
              <Trophy className="w-16 h-16 mb-6 mx-auto" />
              <h2 className="text-3xl font-bold mb-2">
                {earnedPoints} / {totalPoints} pts
              </h2>
              <p className="text-lg opacity-90">
                {correctCount} / {QUESTION_BANK.length} questions correct
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 max-w-md mx-auto">
                {Object.entries(topicStats).map(([topic, s]) => {
                  const pct = s.points ? (s.earnedPts / s.points) * 100 : 0;
                  return (
                    <div key={topic} className="bg-white/15 rounded-lg p-3 text-left">
                      <div className="text-xs font-semibold opacity-90">{topic}</div>
                      <div className="font-bold">
                        {s.earnedPts}/{s.points} pts ({pct.toFixed(0)}%)
                      </div>
                      <div className="h-1 bg-white/30 mt-1 rounded">
                        <div
                          className="h-1 rounded"
                          style={{ width: `${pct}%`, backgroundColor: "white" }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6">
                <Button
                  onClick={restart}
                  className="bg-white hover:bg-gray-100 text-emerald-700"
                >
                  <RotateCcw className="w-4 h-4 mr-1" /> Try Again
                </Button>
              </div>
            </Card>

            <div className="space-y-6">
              {QUESTION_BANK.map((q, i) => (
                <QuestionCard
                  key={q.id}
                  q={q}
                  state={answers[i]}
                  setNumeric={() => {}}
                  setMc={() => {}}
                  toggleMulti={() => {}}
                  setMatching={() => {}}
                  graded={true}
                  correct={correctness[i]}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

interface QuestionCardProps {
  q: Question;
  state: AnswerState;
  setNumeric: (v: string) => void;
  setMc: (v: number) => void;
  toggleMulti: (v: number) => void;
  setMatching: (leftIndex: number, value: string | null) => void;
  graded: boolean;
  correct: boolean;
}

function QuestionCard({
  q,
  state,
  setNumeric,
  setMc,
  toggleMulti,
  setMatching,
  graded,
  correct,
}: QuestionCardProps) {
  let body: React.ReactNode = null;
  if (q.kind === "numeric") {
    body = (
      <div className="flex items-center gap-3">
        <Input
          type="text"
          inputMode="decimal"
          value={state.numeric ?? ""}
          onChange={(e) => setNumeric(e.target.value)}
          disabled={graded}
          placeholder="Your answer"
          className="max-w-xs font-mono"
        />
        {q.unit && <span className="text-sm text-gray-500 dark:text-gray-400">{q.unit}</span>}
      </div>
    );
  } else if (q.kind === "mc") {
    body = (
      <MultipleChoice
        choices={q.choices}
        selected={state.mc ?? null}
        onSelect={setMc}
        correctIndex={q.correctIndex}
        graded={graded}
        accentColor={q.topicColor}
      />
    );
  } else if (q.kind === "multi") {
    body = (
      <MultiSelect
        choices={q.choices}
        selected={state.multi ?? []}
        onToggle={toggleMulti}
        correctIndices={q.correctIndices}
        graded={graded}
        accentColor={q.topicColor}
      />
    );
  } else if (q.kind === "matching") {
    body = (
      <Matching
        leftItems={q.leftItems}
        rightOptions={q.rightOptions}
        selections={state.matching ?? q.leftItems.map(() => null)}
        onChange={setMatching}
        correctMapping={q.correctMapping}
        graded={graded}
        accentColor={q.topicColor}
      />
    );
  }

  // Auto-attach SVG schematics for known questions (replaces older raster screenshots).
  let figureNode: ReactNode = null;
  if (q.id === 12) figureNode = <DividerDesign v={7.6} r1={20.9} vOut={2.49} r2Label="R₂ = 10.2 kΩ" />;
  if (q.id === 13) figureNode = <DividerWithDmm v={7.2} r1={29.8} r2={14.3} rDmm={10} unit="MΩ" />;
  if (q.id === 14)
    figureNode = (
      <ScopeFig
        vDiv={1}
        tDiv={5e-3}
        signal={(t) => Math.sin((2 * Math.PI * t) / 20e-3)}
        signal2={(t) => 1.41 * Math.sin((2 * Math.PI * t) / 10e-3 + 0.5)}
        caption="Top: ω trace.  Bottom: V_rms trace."
      />
    );
  if (q.id === 15)
    figureNode = (
      <ScopeFig
        vDiv={2}
        tDiv={5e-3}
        signal={(t) => 2 * Math.sin((2 * Math.PI * t) / 20e-3)}
        caption="Read T from gridlines × t/div."
      />
    );
  if (q.id === 16) figureNode = <DividerThenThreeParallel v={5} r1={400} r2={1500} r3={1700} r4={1300} />;
  if (q.id === 17) figureNode = <TwoSourceLoopWithR v1={4.5} v2={1.6} r1={222} r2={113} />;
  if (q.id === 25) figureNode = <TransimpedanceFig iIn={0.914} rf={5.232} />;

  return (
    <Card
      className="interactive-panel"
      style={{ borderLeftWidth: 4, borderLeftColor: q.topicColor }}
    >
      <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
        <div>
          <span
            className="inline-block text-xs font-bold px-2 py-0.5 rounded-full mr-2"
            style={{ color: q.topicColor, backgroundColor: q.topicColor + "20" }}
          >
            Q{q.id} · {q.topic} · {q.points} pt
          </span>
          {q.labDependent && (
            <span className="inline-block text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300">
              lab-dependent
            </span>
          )}
        </div>
        {graded && (
          <span
            className={`text-sm font-bold px-3 py-1 rounded-full ${
              correct
                ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
                : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200"
            }`}
          >
            {correct ? "✓ correct" : "✗ wrong"}
          </span>
        )}
      </div>
      <div className="text-base text-gray-900 dark:text-gray-100 mb-4">
        {q.prompt}
      </div>
      {figureNode && (
        <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-3 mb-4 max-w-2xl flex justify-center overflow-x-auto">
          {figureNode}
        </div>
      )}
      {body}
      {graded && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-600 text-sm text-gray-700 dark:text-gray-200">
          <span className="font-bold">Solution: </span>
          {q.solution}
        </div>
      )}
    </Card>
  );
}
