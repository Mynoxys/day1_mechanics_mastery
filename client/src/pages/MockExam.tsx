import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, Clock, Target, Trophy, RotateCcw } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useMemo, useState } from "react";

interface MockQuestion {
  topic: string;
  topicColor: string;
  prompt: string;
  givens?: string;
  expectedAnswer: number;
  unit: string;
  tolerance: number; // fractional, e.g. 0.05 = 5%
  solution: string;
}

const QUESTION_BANK: MockQuestion[] = [
  // Rotational Kinematics
  {
    topic: "Rotational Kinematics",
    topicColor: "#06b6d4",
    prompt:
      "A wheel spins up from 0 to 300 rpm in 15 seconds. Find the angular acceleration α (rad/s²).",
    expectedAnswer: 2.094,
    unit: "rad/s²",
    tolerance: 0.05,
    solution:
      "Convert: ω_f = 300·2π/60 = 31.416 rad/s. α = (ω_f − 0)/t = 31.416/15 ≈ 2.09 rad/s².",
  },
  {
    topic: "Rotational Kinematics",
    topicColor: "#06b6d4",
    prompt:
      "A grindstone slows from 80 rpm to rest uniformly in 60 s. How many turns before it stops?",
    expectedAnswer: 40,
    unit: "turns",
    tolerance: 0.05,
    solution:
      "ω₀ = 80·2π/60 = 8.378 rad/s. θ = ½·(ω₀+0)·t = ½·8.378·60 = 251.3 rad. # turns = 251.3/(2π) = 40.",
  },
  // Torque
  {
    topic: "Torque",
    topicColor: "#c026d3",
    prompt:
      "A solid yoyo (string wraps around its OUTSIDE, R = 0.05 m, M = 0.30 kg) is released from rest. Find its downward acceleration (m/s²).",
    expectedAnswer: 6.533,
    unit: "m/s²",
    tolerance: 0.03,
    solution:
      "For solid cyl with string at R: a = (2/3)·g = 2·9.8/3 ≈ 6.53 m/s². R and M cancel.",
  },
  {
    topic: "Torque",
    topicColor: "#c026d3",
    prompt:
      "A 4 m, 8 kg uniform bar is pinned at its left end with a string at the right end at 30° above horizontal. Find the string tension (N).",
    expectedAnswer: 78.4,
    unit: "N",
    tolerance: 0.05,
    solution:
      "Pivot at pin: T·sin30°·L − Mg·(L/2) = 0 → T = Mg/(2·sin30°) = 8·9.8/(2·0.5) = 78.4 N.",
  },
  // Rotational Energy
  {
    topic: "Rotational Energy",
    topicColor: "#ef4444",
    prompt:
      "A solid sphere (I = (2/5)mR²) rolls without slipping down a 2 m ramp from rest. Find its speed at the bottom (m/s).",
    expectedAnswer: 5.292,
    unit: "m/s",
    tolerance: 0.03,
    solution:
      "v = √(2gh/(1+I/mR²)) = √(2·9.8·2/(1+0.4)) = √(39.2/1.4) = √28 ≈ 5.29 m/s.",
  },
  {
    topic: "Rotational Energy",
    topicColor: "#ef4444",
    prompt:
      "An Atwood with massless pulley: 5 kg and 3 kg, the 5 kg drops 3 m. Speed at impact (m/s)?",
    expectedAnswer: 4.2,
    unit: "m/s",
    tolerance: 0.05,
    solution:
      "Massless pulley: net PE→KE: (5−3)·9.8·3 = ½·(5+3)·v². 58.8 = 4·v² → v² = 14.7 → v ≈ 3.83 m/s. (Wait that's wrong) Actually v² = 58.8/4 = 14.7 → v ≈ 3.83. Tolerance accommodates either form. Let me re-target.",
  },
  // Angular Momentum
  {
    topic: "Angular Momentum",
    topicColor: "#3b82f6",
    prompt:
      "A 2 kg solid disc spinning at 30 rpm has a 1 kg ring (same R) dropped on top. Find the new angular velocity (rpm).",
    expectedAnswer: 20,
    unit: "rpm",
    tolerance: 0.05,
    solution:
      "I_disc = ½·2·R² = R². I_ring = 1·R² = R². L conserved: R²·30 = (R² + R²)·ω' → ω' = 15 rpm. Wait — let me recompute. Disc 2 kg, I_disc = ½·2·R²=R². Ring 1 kg, I_ring = mR² = 1·R²=R². ω' = (R²·30)/(R²+R²)= 30/2=15 rpm.",
  },
  {
    topic: "Angular Momentum",
    topicColor: "#3b82f6",
    prompt:
      "A 0.5 kg ball moving at 4 m/s strikes the end of a 1 kg, 1 m rod (about its center) at 90° and sticks. Find ω just after impact (rad/s).",
    expectedAnswer: 4.8,
    unit: "rad/s",
    tolerance: 0.05,
    solution:
      "L_ball about rod's center = m·v·r = 0.5·4·0.5 = 1.0. I_rod_about_center = (1/12)·1·1² = 0.0833. I_ball_now = 0.5·(0.5)² = 0.125. I_tot = 0.208. ω = L/I = 1.0/0.208 ≈ 4.8 rad/s.",
  },
  // SHM
  {
    topic: "Simple Harmonic Motion",
    topicColor: "#f59e0b",
    prompt:
      "A 0.5 kg mass on a k = 50 N/m spring. Find the period (s).",
    expectedAnswer: 0.628,
    unit: "s",
    tolerance: 0.03,
    solution: "T = 2π·√(m/k) = 2π·√(0.5/50) = 2π·0.1 = 0.628 s.",
  },
  {
    topic: "Simple Harmonic Motion",
    topicColor: "#f59e0b",
    prompt:
      "Oscillator with A = 0.10 m, ω = 8 rad/s. Find the speed at x = 0.06 m (m/s).",
    expectedAnswer: 0.64,
    unit: "m/s",
    tolerance: 0.05,
    solution:
      "v² = ω²·(A² − x²) = 64·(0.01 − 0.0036) = 64·0.0064 = 0.4096. v = 0.64 m/s.",
  },
  // Waves & Music
  {
    topic: "Waves & Music",
    topicColor: "#10b981",
    prompt:
      "An open-open pipe of length 0.5 m sounds its fundamental. Speed of sound = 345 m/s. Frequency (Hz)?",
    expectedAnswer: 345,
    unit: "Hz",
    tolerance: 0.03,
    solution: "f₁ = v/(2L) = 345/(2·0.5) = 345 Hz.",
  },
  {
    topic: "Waves & Music",
    topicColor: "#10b981",
    prompt:
      "Standing 5 m from a speaker, you measure 100 dB. How far must you stand to drop to 80 dB (m)?",
    expectedAnswer: 50,
    unit: "m",
    tolerance: 0.05,
    solution: "20 dB drop = 10× distance → 5·10 = 50 m.",
  },
  // Fluids
  {
    topic: "Fluids",
    topicColor: "#0ea5e9",
    prompt:
      "An open tank has water 3 m deep. A small hole at the bottom releases water. Find the exit speed (m/s).",
    expectedAnswer: 7.668,
    unit: "m/s",
    tolerance: 0.03,
    solution: "Torricelli: v = √(2gh) = √(2·9.8·3) = √58.8 ≈ 7.67 m/s.",
  },
  {
    topic: "Fluids",
    topicColor: "#0ea5e9",
    prompt:
      "A pipe narrows from radius 4 cm to 1 cm. Water enters the wide end at 0.5 m/s. Find the speed in the narrow section (m/s).",
    expectedAnswer: 8,
    unit: "m/s",
    tolerance: 0.03,
    solution:
      "Continuity: A₁v₁ = A₂v₂ → π·(0.04)²·0.5 = π·(0.01)²·v₂ → v₂ = 0.5·16 = 8 m/s.",
  },
];

// Note on the Atwood question above: I want to fix the value
// Recompute: massless pulley + 5kg drops 3m, 3kg rises 3m:
// ΔPE = (5−3)·9.8·3 = 58.8 J
// KE = ½·(5+3)·v² = 4v²
// 58.8 = 4v² → v² = 14.7 → v = 3.83 m/s
// I'll fix the expectedAnswer to 3.83.

QUESTION_BANK[5].expectedAnswer = 3.83;
QUESTION_BANK[5].solution =
  "Energy conservation: (m₁−m₂)·g·h = ½(m₁+m₂)·v². (5−3)·9.8·3 = ½·8·v² → 58.8 = 4·v² → v ≈ 3.83 m/s.";

// Fix angular-momentum disc+ring problem: ω' = (I_disc·30)/(I_disc + I_ring)
// I_disc = ½·2·R² = R², I_ring = 1·R²·1 = R² (oops — the ring has I=mR²)
// ω' = R²·30 / (R² + R²) = 15 rpm
QUESTION_BANK[6].expectedAnswer = 15;
QUESTION_BANK[6].solution =
  "I_disc = ½·2·R² = R². I_ring = 1·R² = R². L_initial = R²·30 = L_final = (2R²)·ω' → ω' = 15 rpm.";

const TIMER_DURATION = 90 * 60; // seconds = 90 minutes

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function MockExam() {
  const [phase, setPhase] = useState<"intro" | "exam" | "review">("intro");
  const [questions, setQuestions] = useState<MockQuestion[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState<boolean[]>([]);
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
    const sampled = shuffle(QUESTION_BANK).slice(0, 8);
    setQuestions(sampled);
    setAnswers(new Array(sampled.length).fill(""));
    setSubmitted(new Array(sampled.length).fill(false));
    setTimeLeft(TIMER_DURATION);
    setPhase("exam");
  };

  const submit = (i: number) => {
    setSubmitted((s) => s.map((b, j) => (j === i ? true : b)));
  };

  const finish = () => setPhase("review");

  const correctness = useMemo(() => {
    return questions.map((q, i) => {
      const v = parseFloat(answers[i]);
      if (Number.isNaN(v)) return false;
      const tol = Math.abs(q.expectedAnswer * q.tolerance);
      return Math.abs(v - q.expectedAnswer) <= tol;
    });
  }, [questions, answers]);

  const correctCount = correctness.filter(Boolean).length;
  const topicStats = useMemo(() => {
    const stats: Record<string, { color: string; correct: number; total: number }> = {};
    questions.forEach((q, i) => {
      if (!stats[q.topic]) stats[q.topic] = { color: q.topicColor, correct: 0, total: 0 };
      stats[q.topic].total++;
      if (correctness[i]) stats[q.topic].correct++;
    });
    return stats;
  }, [questions, correctness]);

  const fmtTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/midterm-prep">
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
            >
              <ChevronLeft className="w-5 h-5" />
              Back to Midterm Prep
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Mock Exam</h1>
          {phase === "exam" ? (
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono font-bold ${
                timeLeft < 600
                  ? "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300"
                  : "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
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
          <section>
            <Card className="interactive-panel max-w-3xl mx-auto bg-gradient-to-br from-purple-600 to-pink-600 text-white border-0">
              <Target className="w-16 h-16 mb-6 mx-auto" />
              <h2 className="text-4xl font-bold mb-4 text-center">Ready?</h2>
              <ul className="space-y-3 text-lg max-w-xl mx-auto mb-8">
                <li>
                  • <strong>8 problems</strong> sampled across all 7 topics
                </li>
                <li>
                  • <strong>90-minute timer</strong> (real exam pace)
                </li>
                <li>
                  • Numerical answers, ~5% tolerance
                </li>
                <li>
                  • Solutions hidden until you Submit each one (or time runs out)
                </li>
                <li>• Topic-by-topic accuracy at the end</li>
              </ul>
              <div className="text-center">
                <Button
                  onClick={start}
                  className="bg-white hover:bg-gray-100 text-purple-700 px-10 py-6 text-lg rounded-lg"
                >
                  Start Exam
                </Button>
              </div>
            </Card>
          </section>
        )}

        {phase === "exam" && (
          <section>
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Submitted: {submitted.filter(Boolean).length} / {questions.length}
              </p>
              <Button onClick={finish} variant="outline">
                Finish &amp; Review
              </Button>
            </div>

            <div className="space-y-6">
              {questions.map((q, i) => (
                <Card
                  key={i}
                  className="interactive-panel"
                  style={{ borderLeftWidth: 4, borderLeftColor: q.topicColor }}
                >
                  <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                    <div>
                      <span
                        className="text-xs font-bold uppercase px-2 py-1 rounded"
                        style={{ backgroundColor: q.topicColor + "33", color: q.topicColor }}
                      >
                        Q{i + 1} · {q.topic}
                      </span>
                      <p className="mt-3 text-base text-gray-900 dark:text-white">{q.prompt}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-wrap">
                    <input
                      type="number"
                      step="any"
                      value={answers[i]}
                      onChange={(e) =>
                        setAnswers((a) => a.map((v, j) => (j === i ? e.target.value : v)))
                      }
                      disabled={submitted[i]}
                      placeholder="Your answer"
                      className="px-4 py-2 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded font-mono w-40 disabled:opacity-50"
                    />
                    <span className="text-gray-600 dark:text-gray-400 font-mono">{q.unit}</span>
                    {!submitted[i] ? (
                      <Button
                        onClick={() => submit(i)}
                        disabled={answers[i] === ""}
                        className="text-white"
                        style={{ backgroundColor: q.topicColor }}
                      >
                        Submit
                      </Button>
                    ) : (
                      <span className="font-bold">
                        {correctness[i] ? (
                          <span className="text-green-600 dark:text-green-400">✓ Correct</span>
                        ) : (
                          <span className="text-red-600 dark:text-red-400">✗ Off (target {q.expectedAnswer} {q.unit})</span>
                        )}
                      </span>
                    )}
                  </div>

                  {submitted[i] && (
                    <div className="mt-4 bg-gray-50 dark:bg-slate-700 p-4 rounded text-sm font-mono text-gray-700 dark:text-gray-200">
                      <p className="font-bold mb-1">Solution:</p>
                      <p>{q.solution}</p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </section>
        )}

        {phase === "review" && (
          <section>
            <Card className="interactive-panel max-w-4xl mx-auto bg-gradient-to-br from-emerald-600 to-cyan-600 text-white border-0 mb-8">
              <Trophy className="w-16 h-16 mb-4 mx-auto" />
              <h2 className="text-4xl font-bold mb-2 text-center">
                {correctCount} / {questions.length} correct ({((correctCount / questions.length) * 100).toFixed(0)}%)
              </h2>
              <p className="text-center text-lg mb-6 opacity-90">
                Time used: {fmtTime(TIMER_DURATION - timeLeft)}
              </p>

              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {Object.entries(topicStats).map(([topic, s]) => (
                  <div key={topic} className="bg-white/15 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{topic}</span>
                      <span className="font-mono font-bold">
                        {s.correct} / {s.total}
                      </span>
                    </div>
                    <div className="mt-2 h-2 bg-white/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white"
                        style={{ width: `${(s.correct / s.total) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="text-center mb-8">
              <Button
                onClick={start}
                variant="outline"
                className="px-6 py-4 text-base"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Retake with new questions
              </Button>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Question Review
            </h3>

            <div className="space-y-4">
              {questions.map((q, i) => (
                <Card
                  key={i}
                  className="interactive-panel"
                  style={{
                    borderLeftWidth: 4,
                    borderLeftColor: correctness[i] ? "#10b981" : "#ef4444",
                  }}
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Q{i + 1} · {q.topic}
                  </p>
                  <p className="text-gray-900 dark:text-white mb-2">{q.prompt}</p>
                  <p className="text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Your answer: </span>
                    <span
                      className={`font-mono font-bold ${
                        correctness[i]
                          ? "text-green-600 dark:text-green-400"
                          : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {answers[i] === "" ? "(blank)" : `${answers[i]} ${q.unit}`}
                    </span>
                    {" "}
                    <span className="text-gray-600 dark:text-gray-400">| Expected: </span>
                    <span className="font-mono font-bold text-gray-900 dark:text-white">
                      {q.expectedAnswer} {q.unit}
                    </span>
                  </p>
                  <div className="mt-2 bg-gray-50 dark:bg-slate-700 p-3 rounded text-sm font-mono text-gray-700 dark:text-gray-200">
                    {q.solution}
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
