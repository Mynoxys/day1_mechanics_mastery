import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { WorkedExample } from "@/components/midterm/WorkedExample";
import { PracticeProblem } from "@/components/midterm/PracticeProblem";
import { FormulaBlock } from "@/components/midterm/FormulaBlock";

const ACCENT = "#10b981"; // emerald

type PipeKind = "string" | "openOpen" | "closedOpen";

export default function WavesMusic() {
  const [pipeKind, setPipeKind] = useState<PipeKind>("string");
  const [n, setN] = useState(1);
  const [length, setLength] = useState(0.6);
  const v = 345; // speed of sound, default

  const fForKind = (kind: PipeKind, harm: number, L: number) => {
    if (kind === "closedOpen") {
      const k = 2 * harm - 1;
      return (k * v) / (4 * L);
    }
    return (harm * v) / (2 * L);
  };

  const harmInBucket = pipeKind === "closedOpen" ? 2 * n - 1 : n;
  const f = fForKind(pipeKind, n, length);
  const lambda = v / f;

  // SVG: draw the standing wave shape over span [60, 460]
  const span = 400;
  const x0 = 60;
  const points = Array.from({ length: 100 }, (_, i) => {
    const x = (i / 99) * span;
    const u = x / span;
    let amp;
    if (pipeKind === "closedOpen") {
      amp = Math.sin((harmInBucket * Math.PI * u) / 2);
    } else {
      amp = Math.sin(harmInBucket * Math.PI * u);
    }
    return `${x0 + x},${180 - amp * 50}`;
  }).join(" ");

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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Day 6 · Waves &amp; Music
          </h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container py-12">
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Traveling, Standing, and Doppler-Shifted Waves
          </h2>
          <div className="prose dark:prose-invert max-w-none space-y-4">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              The <strong>traveling wave</strong>{" "}
              <span className="font-mono">y(x, t) = A sin(kx ± ωt)</span> packs all the wave's
              properties into 4 numbers:
            </p>
            <ul className="text-lg text-gray-600 dark:text-gray-300 list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>Amplitude A</strong> — height of the wave (m)
              </li>
              <li>
                <strong>Wave number k = 2π/λ</strong> — "spatial" frequency (rad/m)
              </li>
              <li>
                <strong>Angular frequency ω = 2πf</strong> — "temporal" frequency (rad/s)
              </li>
              <li>
                <strong>Sign of ωt</strong> — direction! <em>Plus = wave moves in −x direction</em>;{" "}
                <em>minus = wave moves in +x direction</em>. (Counterintuitive trap; memorize.)
              </li>
            </ul>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              And one master equation: <span className="font-mono">v = ω/k = fλ</span>.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">
              Standing Waves on Strings &amp; in Pipes
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Constraints at the ends create discrete allowed wavelengths. Three boundary cases
              cover everything you'll see:
            </p>
            <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-6 my-4 space-y-2 font-mono">
              <p>
                <strong>String (fixed-fixed) / Pipe (open-open):</strong> f_n = n·v/(2L), n = 1, 2,
                3, ... (all integers — both even and odd harmonics)
              </p>
              <p>
                <strong>Pipe (closed-open):</strong> f_n = n·v/(4L), <em>n only ODD</em>: 1, 3, 5,
                7, ...
              </p>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              For closed-open pipes, successive overtones differ by{" "}
              <span className="font-mono">2f₁</span>, not f₁. This is the trap in the "Prof H
              screwed up" problem.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Wave speed depends on medium. On a string under tension:{" "}
              <span className="font-mono">v = √(T/μ)</span> where μ is mass per unit length. In
              air, v ≈ 345 m/s; in water, v ≈ 1450 m/s.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">
              Doppler &amp; Decibels
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <strong>Doppler formula:</strong>{" "}
              <span className="font-mono">f' = f·(v ± v_obs)/(v ∓ v_src)</span>. Approaching =
              numerator +, denominator −, both raise f'. Receding = the opposite signs, both lower
              f'. Memorize this with the rule: "approach → up, recede → down."
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <strong>Reflected/Sonar Doppler</strong> applies the formula <em>twice</em>: once
              source-to-target, then target-to-source (target becomes the new source). Sub-and-
              squid-style problem.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <strong>Decibels:</strong>{" "}
              <span className="font-mono">β = 10·log(I/I₀)</span>. Combined with{" "}
              <span className="font-mono">I ∝ 1/r²</span>: a 20 dB drop = 100× intensity drop = 10×
              farther distance.
            </p>
          </div>
        </section>

        {/* Simulator */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Standing-Wave Simulator
          </h3>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="interactive-panel">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Pick Boundary, Pick Mode
              </h4>

              <svg
                width={500}
                height={300}
                className="border border-gray-200 dark:border-slate-600 rounded-lg mb-6 bg-gray-50 dark:bg-slate-700"
              >
                {/* Pipe / string body */}
                <line x1={x0} y1="180" x2={x0 + span} y2="180" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3 3" />

                {/* End caps */}
                {pipeKind === "closedOpen" ? (
                  <>
                    {/* closed end (left) */}
                    <line x1={x0} y1="120" x2={x0} y2="240" stroke="#1f2937" strokeWidth="3" />
                    <text x={x0 - 10} y="270" fontSize="11" fill="#1f2937" textAnchor="middle">
                      closed
                    </text>
                    {/* open end (right) */}
                    <text x={x0 + span} y="270" fontSize="11" fill="#1f2937" textAnchor="middle">
                      open
                    </text>
                  </>
                ) : pipeKind === "openOpen" ? (
                  <>
                    <text x={x0} y="270" fontSize="11" fill="#1f2937" textAnchor="middle">
                      open
                    </text>
                    <text x={x0 + span} y="270" fontSize="11" fill="#1f2937" textAnchor="middle">
                      open
                    </text>
                  </>
                ) : (
                  <>
                    <line x1={x0} y1="120" x2={x0} y2="240" stroke="#1f2937" strokeWidth="3" />
                    <line
                      x1={x0 + span}
                      y1="120"
                      x2={x0 + span}
                      y2="240"
                      stroke="#1f2937"
                      strokeWidth="3"
                    />
                    <text x={x0} y="270" fontSize="11" fill="#1f2937" textAnchor="middle">
                      fixed
                    </text>
                    <text x={x0 + span} y="270" fontSize="11" fill="#1f2937" textAnchor="middle">
                      fixed
                    </text>
                  </>
                )}

                {/* Wave envelope (positive and negative) */}
                <polyline points={points} fill="none" stroke={ACCENT} strokeWidth="2.5" />
                <polyline
                  points={Array.from({ length: 100 }, (_, i) => {
                    const x = (i / 99) * span;
                    const u = x / span;
                    let amp;
                    if (pipeKind === "closedOpen") {
                      amp = -Math.sin((harmInBucket * Math.PI * u) / 2);
                    } else {
                      amp = -Math.sin(harmInBucket * Math.PI * u);
                    }
                    return `${x0 + x},${180 - amp * 50}`;
                  }).join(" ")}
                  fill="none"
                  stroke={ACCENT}
                  strokeWidth="2"
                  strokeOpacity="0.4"
                  strokeDasharray="3 3"
                />

                {/* Length label */}
                <line x1={x0} y1="105" x2={x0 + span} y2="105" stroke="#7c3aed" strokeWidth="1" strokeDasharray="3 2" />
                <line x1={x0} y1="100" x2={x0} y2="110" stroke="#7c3aed" strokeWidth="1" />
                <line x1={x0 + span} y1="100" x2={x0 + span} y2="110" stroke="#7c3aed" strokeWidth="1" />
                <text x={x0 + span / 2} y="95" fontSize="11" fill="#7c3aed" textAnchor="middle" fontWeight="bold">
                  L = {length.toFixed(2)} m
                </text>

                {/* Mode info */}
                <text x="20" y="30" fontSize="13" fill="#1f2937" fontWeight="bold">
                  Harmonic n = {harmInBucket}, f = {f.toFixed(1)} Hz
                </text>
                <text x="20" y="48" fontSize="11" fill="#374151">
                  λ = v/f = 345/{f.toFixed(1)} = {lambda.toFixed(3)} m
                </text>
              </svg>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Boundary type:
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {([
                      { key: "string", label: "String (fixed-fixed)" },
                      { key: "openOpen", label: "Pipe open-open" },
                      { key: "closedOpen", label: "Pipe closed-open" },
                    ] as { key: PipeKind; label: string }[]).map((b) => (
                      <Button
                        key={b.key}
                        onClick={() => setPipeKind(b.key)}
                        variant={pipeKind === b.key ? "default" : "outline"}
                        style={pipeKind === b.key ? { backgroundColor: ACCENT, color: "white" } : {}}
                        size="sm"
                      >
                        {b.label}
                      </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Mode index n: {n}{" "}
                    {pipeKind === "closedOpen" && (
                      <span className="text-gray-500">→ harmonic {harmInBucket} (odd only)</span>
                    )}
                  </label>
                  <Slider value={[n]} onValueChange={(v) => setN(v[0])} min={1} max={6} step={1} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Length L: {length.toFixed(2)} m (using v_sound = 345 m/s)
                  </label>
                  <Slider
                    value={[length]}
                    onValueChange={(v) => setLength(v[0])}
                    min={0.05}
                    max={2.0}
                    step={0.01}
                  />
                </div>
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="interactive-panel">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Calculation
                </h4>
                <div className="space-y-3 font-mono text-sm">
                  <div className="bg-amber-50 dark:bg-amber-900 p-4 rounded border-l-4 border-l-amber-600">
                    <p>
                      <strong>Boundary formula</strong>
                    </p>
                    {pipeKind === "closedOpen" ? (
                      <>
                        <p>f_n = n·v/(4L), n = 1, 3, 5, ...</p>
                        <p>= {harmInBucket}·345/(4·{length.toFixed(2)})</p>
                      </>
                    ) : (
                      <>
                        <p>f_n = n·v/(2L), n = 1, 2, 3, ...</p>
                        <p>= {harmInBucket}·345/(2·{length.toFixed(2)})</p>
                      </>
                    )}
                    <p className="font-bold text-amber-600 dark:text-amber-400">
                      f = {f.toFixed(2)} Hz
                    </p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded border-l-4 border-l-blue-600">
                    <p>
                      <strong>Wavelength</strong>
                    </p>
                    <p>λ = v/f = 345/{f.toFixed(2)}</p>
                    <p className="font-bold text-blue-600 dark:text-blue-400">
                      λ = {lambda.toFixed(3)} m
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="interactive-panel" style={{ borderLeftWidth: 4, borderLeftColor: ACCENT }}>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Try this:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li>• Set L = 0.392 m, open-open, n=1 → f = 440 Hz (the flute's A).</li>
                  <li>• Switch to closed-open same L: f = 220 Hz (one octave lower!) — closed pipes sound lower for the same length.</li>
                  <li>
                    • Set closed-open, slide n: 1, 3, 5, 7. Notice n=2 produces 1, 3, 5 (it skips
                    even harmonics).
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Formulas */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Core Formulas</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <FormulaBlock
              accentColor={ACCENT}
              name="Traveling wave"
              formula={
                <div className="space-y-1 text-base">
                  <div>y(x, t) = A sin(kx ± ωt)</div>
                  <div>k = 2π/λ, ω = 2πf</div>
                  <div>v = ω/k = fλ</div>
                </div>
              }
              variables={[
                { symbol: "k", meaning: "wave number", units: "rad/m" },
                { symbol: "ω", meaning: "angular frequency", units: "rad/s" },
                { symbol: "+ωt", meaning: "wave moves in −x direction" },
                { symbol: "−ωt", meaning: "wave moves in +x direction" },
              ]}
              whenToUse="Reading off wave properties from a given y(x,t) expression."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Wave on a string"
              formula={<div>v = √(T/μ)</div>}
              variables={[
                { symbol: "T", meaning: "tension in the string", units: "N" },
                { symbol: "μ", meaning: "mass per unit length", units: "kg/m" },
              ]}
              whenToUse="Strings: guitar, violin, vocal cords. Heavier strings or looser strings → slower wave → lower pitch."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Standing wave: string / open-open pipe"
              formula={<div>f_n = n·v/(2L), n = 1, 2, 3, ...</div>}
              variables={[
                { symbol: "L", meaning: "string or pipe length", units: "m" },
                { symbol: "n", meaning: "harmonic number (any integer)" },
              ]}
              whenToUse="String fixed at both ends (guitar, violin). Pipe open at both ends (flute)."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Standing wave: closed-open pipe"
              formula={
                <div className="space-y-1 text-base">
                  <div>f_n = n·v/(4L), n = 1, 3, 5, ... (odd only!)</div>
                  <div>Successive overtones differ by 2f₁</div>
                </div>
              }
              variables={[
                { symbol: "L", meaning: "pipe length", units: "m" },
              ]}
              whenToUse="Pipe closed at one end, open at the other (clarinet, saxophone, organ pipes). The 'odd only' rule is the trap on every exam."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Doppler shift"
              formula={<div>f' = f · (v ± v_obs) / (v ∓ v_src)</div>}
              variables={[
                { symbol: "v", meaning: "speed of sound (in air ≈ 345 m/s, in water ≈ 1450 m/s)" },
                { symbol: "v_obs", meaning: "observer speed (numerator)" },
                { symbol: "v_src", meaning: "source speed (denominator)" },
              ]}
              whenToUse="Sign rule: approaching → numerator +, denominator −. Both raise f'. For sonar/reflection: apply twice."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Decibels & inverse-square"
              formula={
                <div className="space-y-1 text-base">
                  <div>β = 10·log(I/I₀)</div>
                  <div>I ∝ 1/r²</div>
                  <div>20 dB drop = 10× distance</div>
                </div>
              }
              variables={[
                { symbol: "I₀", meaning: "reference intensity (10⁻¹² W/m²)" },
                { symbol: "I", meaning: "actual intensity at observer", units: "W/m²" },
                { symbol: "r", meaning: "distance from source (point source)", units: "m" },
              ]}
              whenToUse="Sound-loudness problems and 'how far must I stand to drop X dB' problems."
            />
          </div>
        </section>

        {/* Worked Example */}
        <section className="mb-16">
          <WorkedExample
            accentColor={ACCENT}
            title="Decoding y(x,t) = 0.25 sin(3.14x + 450t)"
            problemStatement={
              <p>
                A wave on a string has equation{" "}
                <span className="font-mono">y(x, t) = 0.25·sin(3.14x + 450t)</span> in MKS units.
                Find: (a) frequency, (b) period, (c) wavelength, (d) wave speed, (e) amplitude,
                (f) direction of travel, (g) string mass density μ if tension is 100 N.
              </p>
            }
            steps={[
              {
                heading: "Read off A, k, ω from the equation",
                body: (
                  <p>
                    A = 0.25 m, k = 3.14 rad/m, ω = 450 rad/s. The "+ωt" sign is critical for part
                    (f).
                  </p>
                ),
              },
              {
                heading: "(a) frequency f = ω/(2π)",
                body: <p>= 450/(2π) = 450/6.283</p>,
                result: { label: "f", value: "≈ 71.62 Hz", color: "green" },
              },
              {
                heading: "(b) period T = 1/f",
                body: <p>= 1/71.62</p>,
                result: { label: "T", value: "≈ 0.0140 s", color: "green" },
              },
              {
                heading: "(c) wavelength λ = 2π/k",
                body: <p>= 2π/3.14 = 6.283/3.14</p>,
                result: { label: "λ", value: "= 2.00 m", color: "green" },
              },
              {
                heading: "(d) wave speed v = ω/k = fλ",
                body: <p>= 450/3.14 (or 71.62 × 2)</p>,
                result: { label: "v", value: "≈ 143.3 m/s", color: "green" },
              },
              {
                heading: "(e) amplitude",
                body: <p>Just A from the equation.</p>,
                result: { label: "A", value: "= 0.25 m", color: "green" },
              },
              {
                heading: "(f) direction of travel",
                body: (
                  <p>
                    The "+ωt" sign means as t increases, x must DECREASE to keep the phase
                    constant. So the wave moves in the −x direction. (If it had been "−ωt", the
                    wave would move in +x.)
                  </p>
                ),
                result: { label: "Direction", value: "−x direction", color: "green" },
              },
              {
                heading: "(g) string mass density μ = T/v²",
                body: <p>= 100 / (143.3)² = 100 / 20,540</p>,
                result: { label: "μ", value: "≈ 4.87 × 10⁻³ kg/m", color: "green" },
              },
            ]}
            keyInsight={
              <>
                The hardest part of this problem is part (f): the sign rule trips up almost
                everyone the first time. Memory aid:{" "}
                <em>
                  <strong>(kx + ωt)</strong> moves <strong>backward</strong>;{" "}
                  <strong>(kx − ωt)</strong> moves <strong>forward</strong>.
                </em>{" "}
                Or remember: at fixed x, increasing t must be balanced by something — if it's
                +ωt, then x must decrease (wave traveled left).
              </>
            }
          />
        </section>

        {/* Practice */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Practice Problems (6)
          </h3>

          <div className="space-y-6">
            <PracticeProblem
              accentColor={ACCENT}
              title="Flute (open-open pipe at A 440 Hz)"
              statement={
                <p>
                  A flute should play A (<strong>f = 440 Hz</strong>) in its fundamental mode.
                  Speed of sound v = 345 m/s. Treat as an open-open pipe.
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: "Sketch / describe the node pattern of fundamental mode",
                  solutionSteps: (
                    <p>
                      Open-open pipe fundamental: antinodes at both ends, ONE node in the middle.
                      Half a wavelength fits inside the pipe (L = λ/2).
                    </p>
                  ),
                  answer: { value: "Antinode — Node — Antinode" },
                },
                {
                  label: "(b)",
                  question: "Length of the resonant cavity for A 440",
                  solutionSteps: (
                    <p>
                      f₁ = v/(2L) → L = v/(2f) = 345/(2·440) = 345/880
                    </p>
                  ),
                  answer: { value: "L ≈ 0.392", unit: "m" },
                },
                {
                  label: "(c)",
                  question: "Length to play middle C (262 Hz) in fundamental",
                  solutionSteps: <p>L = v/(2f) = 345/(2·262) = 345/524</p>,
                  answer: { value: "L ≈ 0.658", unit: "m" },
                },
                {
                  label: "(d)",
                  question: "How to play high A (880 Hz) — can't shrink the flute that small",
                  solutionSteps: (
                    <p>
                      You can't (the length would be 0.196 m, smaller than the flute can be made).
                      Instead, <strong>overblow</strong> at the same length to excite the n=2
                      harmonic. f₂ = 2·v/(2L) = v/L = 345/0.392 = 880 Hz ✓. Node pattern: A—N—A—N—A
                      (one full wavelength fits).
                    </p>
                  ),
                  answer: { value: "Overblow to 2nd harmonic" },
                },
              ]}
            />

            <PracticeProblem
              accentColor={ACCENT}
              title="Guitar A-string (110 Hz)"
              statement={
                <p>
                  Guitar A-string (the 5th string) plays A at <strong>f = 110 Hz</strong>{" "}
                  (fundamental). String length <strong>L = 0.648 m</strong>, tension{" "}
                  <strong>T = 100 N</strong>.
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: "Node pattern for fundamental",
                  solutionSteps: (
                    <p>
                      String fixed at both ends. Fundamental has nodes at both ends and ONE
                      antinode in the middle. Length = λ/2.
                    </p>
                  ),
                  answer: { value: "Node — Antinode — Node" },
                },
                {
                  label: "(b)",
                  question: "Mass per unit length μ",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>v_string = 2L·f = 2·0.648·110 = 142.56 m/s</p>
                      <p>v² = T/μ → μ = T/v² = 100/(142.56)² = 100/20323</p>
                    </div>
                  ),
                  answer: { value: "μ ≈ 4.92 × 10⁻³", unit: "kg/m" },
                },
                {
                  label: "(c)",
                  question: "How to play C (131 Hz) on this string without changing T or μ",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>
                        v unchanged (depends only on T and μ). Change effective L by pressing a fret:
                      </p>
                      <p>L_new = v/(2·f_new) = 142.56/(2·131) = 142.56/262</p>
                    </div>
                  ),
                  answer: { value: "L_new ≈ 0.544 m (fret ≈ 10.4 cm from bridge)" },
                },
              ]}
            />

            <PracticeProblem
              accentColor={ACCENT}
              title="Saxophone (closed-open pipe)"
              statement={
                <p>
                  A saxophone is a closed-open pipe (mouthpiece reed = closed end, bell = open end).
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: "Which sketch is the fundamental node pattern? (Label 'A')",
                  solutionSteps: (
                    <p>
                      Closed-open fundamental: NODE at the closed end, ANTINODE at the open end.
                      Quarter-wavelength fits (L = λ/4). Look for the sketch with one node and one
                      antinode.
                    </p>
                  ),
                  answer: { value: "Node (closed) — Antinode (open), 1 quarter-wavelength" },
                },
                {
                  label: "(b)",
                  question: "Cavity length L to produce B♭ (116.5 Hz) fundamental",
                  solutionSteps: <p>L = v/(4f) = 345/(4·116.5) = 345/466</p>,
                  answer: { value: "L ≈ 0.740", unit: "m" },
                },
                {
                  label: "(c)",
                  question: "To play one octave higher (twice the frequency), what opens?",
                  solutionSteps: (
                    <p>
                      The <strong>octave key</strong> opens, effectively halving the resonant
                      length so f' = 2f. (Note: simply opening more tone holes shortens the cavity
                      gradually but the octave key creates a discrete jump.)
                    </p>
                  ),
                  answer: { value: "Open the octave key" },
                },
                {
                  label: "(d)",
                  question: "Node pattern for the new (octave) note (label 'D')",
                  solutionSteps: (
                    <p>
                      Same closed-open fundamental pattern (Node — Antinode), just half the length.
                      So the look is same node-count, smaller spatial extent.
                    </p>
                  ),
                  answer: { value: "Same pattern (1 node + 1 antinode), half the length" },
                },
              ]}
            />

            <PracticeProblem
              accentColor={ACCENT}
              title="Closed Organ Pipe — Prof H Screwed Up!"
              statement={
                <p>
                  Two successive overtones of a closed organ pipe are <strong>280 Hz</strong> and{" "}
                  <strong>320 Hz</strong>.
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: "Fundamental frequency (formal answer)",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>For a closed pipe, successive overtones differ by 2f₁:</p>
                      <p>2f₁ = 320 − 280 = 40 → f₁ = 20 Hz</p>
                    </div>
                  ),
                  answer: { value: "f₁ = 20 Hz (if the problem were valid)" },
                },
                {
                  label: "(b)",
                  question: "Length of the organ pipe",
                  solutionSteps: <p>L = v/(4f₁) = 345/(4·20) = 345/80</p>,
                  answer: { value: "L = 4.31 m" },
                },
                {
                  label: "(c)",
                  question: "Why is the problem flawed?",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>
                        For closed pipe: f_n = n·f₁ for ODD n only. With f₁ = 20, valid frequencies
                        are 20, 60, 100, 140, 180, 220, 260, <strong>300</strong>, 340, ...
                      </p>
                      <p>
                        But 280 = 14·20 (even multiple — not allowed!). And 320 = 16·20 (also even
                        multiple). Neither is a valid closed-pipe overtone.
                      </p>
                    </div>
                  ),
                  answer: {
                    value: "280 & 320 are even multiples of f₁ — but a closed pipe has only odd multiples. Inconsistent."
                  },
                },
              ]}
            />

            <PracticeProblem
              accentColor={ACCENT}
              title="Jet Plane Decibels"
              statement={
                <p>
                  Standing 10 m from a jet plane: 140 dB (painful). Where should you stand to drop
                  the level to 120 dB?
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: "Required distance r₂",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>20 dB drop ⇒ I₂/I₁ = 10⁻². With I ∝ 1/r²:</p>
                      <p>(r₁/r₂)² = 10⁻² → r₁/r₂ = 0.1 → r₂ = 10·r₁ = 10·10</p>
                    </div>
                  ),
                  answer: { value: "r₂ = 100 m" },
                },
              ]}
            />

            <PracticeProblem
              accentColor={ACCENT}
              title="Submarine vs Squid (sonar Doppler with reflection)"
              statement={
                <p>
                  A submarine chases a squid; both move in the same direction (left). Sub at 15
                  m/s, squid at 20 m/s (squid is faster, so escaping). Sub emits sonar at f = 12000
                  Hz. Speed of sound in water = 1450 m/s.
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: "Frequency the squid hears",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>Sub (source) moves toward squid: denominator gets minus.</p>
                      <p>Squid (observer) moves AWAY from sub: numerator gets minus.</p>
                      <p>f_squid = 12000·(1450 − 20)/(1450 − 15) = 12000·1430/1435</p>
                    </div>
                  ),
                  answer: { value: "f_squid ≈ 11,958.2", unit: "Hz" },
                },
                {
                  label: "(b)",
                  question: "Frequency of the reflection received back at the sub",
                  solutionSteps: (
                    <div className="space-y-1">
                      <p>Now squid is the source (re-emitting at f_squid), sub is the observer.</p>
                      <p>Squid (source) moves AWAY from sub: denominator gets plus.</p>
                      <p>Sub (observer) moves TOWARD squid: numerator gets plus.</p>
                      <p>f_sub = 11958.2·(1450 + 15)/(1450 + 20) = 11958.2·1465/1470</p>
                    </div>
                  ),
                  answer: { value: "f_sub ≈ 11,917.5", unit: "Hz" },
                },
                {
                  label: "(c)",
                  question: "Beat frequency at the sub (between emitted and returned)",
                  solutionSteps: <p>Δf = |12000 − 11917.5|</p>,
                  answer: { value: "Δf ≈ 82.5", unit: "Hz" },
                },
              ]}
            />
          </div>
        </section>

        {/* Pitfalls */}
        <section className="mb-16">
          <Card className="interactive-panel border-l-4" style={{ borderLeftColor: "#dc2626" }}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Common Pitfalls
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">×</span>
                <span>
                  <strong>Wrong sign rule on (kx ± ωt).</strong>{" "}
                  <em>Plus → wave moves backward (−x).</em> Most common Day-6 mistake.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">×</span>
                <span>
                  <strong>Treating closed-open pipe as open-open.</strong> Different formula AND
                  closed-open has only odd harmonics. The Prof H trap exploits exactly this.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">×</span>
                <span>
                  <strong>Doppler sign confusion.</strong> Default: approaching raises f',
                  receding lowers f'. If your answer goes the wrong way, you flipped a sign.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">×</span>
                <span>
                  <strong>Forgetting to apply Doppler twice for reflection problems.</strong> The
                  source-target shift, then the target-becomes-source shift on the way back.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">×</span>
                <span>
                  <strong>Using v = 345 m/s in water.</strong> v_water = 1450 m/s. v_air = 345 m/s.
                  Read the problem.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">×</span>
                <span>
                  <strong>Mixing up "harmonic" and "overtone."</strong> Fundamental = 1st harmonic
                  = no overtone. 1st overtone = 2nd available frequency. For closed pipes the 1st
                  overtone is the 3rd harmonic (3f₁), not the 2nd.
                </span>
              </li>
            </ul>
          </Card>
        </section>

        {/* Next */}
        <section className="text-center py-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Day 7: Fluids
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Last topic: pressure, buoyancy, and Bernoulli's flow equation.
          </p>
          <Link href="/fluids">
            <Button
              className="text-white px-8 py-4 text-lg rounded-lg"
              style={{ backgroundColor: "#0ea5e9" }}
            >
              Continue to Fluids <ChevronRight className="w-5 h-5 ml-2 inline" />
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
