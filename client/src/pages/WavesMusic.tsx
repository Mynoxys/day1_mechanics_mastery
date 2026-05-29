import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { WorkedExample, Eq, Why } from "@/components/midterm/WorkedExample";
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
                {
                  symbol: "k",
                  meaning:
                    "how squished the wave is in space — bigger k means crests are packed closer together",
                  units: "rad/m",
                },
                {
                  symbol: "ω",
                  meaning:
                    "how fast the wave wiggles in time — like an angular version of frequency, bigger ω means more wiggles per second",
                  units: "rad/s",
                },
                {
                  symbol: "+ωt",
                  meaning:
                    "wave travels in −x direction (to keep phase constant as t grows, x must shrink — the crest moves left)",
                },
                {
                  symbol: "−ωt",
                  meaning:
                    "wave travels in +x direction (the crest moves right as time advances)",
                },
              ]}
              whenToUse="A wave is a shape that moves. y(x,t) = A sin(kx ± ωt) is that shape with two knobs: k (compression in space) and ω (cycling in time). v = ω/k = fλ is just 'speed = (how fast it wiggles) × (how long one wiggle is)' — common sense once translated. To find direction of travel, follow the crest: ask 'as t advances, what does x have to do to keep the phase constant?'"
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Wave on a string"
              formula={<div>v = √(T/μ)</div>}
              variables={[
                {
                  symbol: "T",
                  meaning:
                    "how hard the string is being pulled end-to-end — bigger T = tighter string",
                  units: "N",
                },
                {
                  symbol: "μ",
                  meaning:
                    "how heavy the string is per meter of length — fatter / denser strings have bigger μ",
                  units: "kg/m",
                },
              ]}
              whenToUse="Tighter strings snap waves through faster (bigger T → bigger v); heavier strings drag waves down (bigger μ → smaller v). That's why the thick low-E guitar string vibrates slowly and sounds low, and the thin high-E vibrates fast and sounds high. Same physics for vocal cords: tighten them to sing higher."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Standing wave: string / open-open pipe"
              formula={<div>f_n = n·v/(2L), n = 1, 2, 3, ...</div>}
              variables={[
                {
                  symbol: "L",
                  meaning:
                    "length of the vibrating segment — guitar fret-to-bridge, or the full pipe length",
                  units: "m",
                },
                {
                  symbol: "n",
                  meaning:
                    "which harmonic: n=1 is the fundamental (lowest, loudest), n=2 is one octave up, n=3 is octave + a fifth, etc.",
                },
              ]}
              whenToUse="Both ends look the same to the wave: a string is clamped at both ends (nodes), an open pipe is free at both ends (antinodes). That symmetry lets ALL integer harmonics fit, and the fundamental wavelength is exactly twice the cavity length (L = λ/2). Same formula for both, even though the boundary types are opposite — what matters is the symmetry, not the type."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Standing wave: closed-open pipe"
              formula={
                <div className="space-y-1 text-base">
                  <div>f_n = n·v/(4L), n = 1, 3, 5, ... (odd only)</div>
                  <div>Successive allowed overtones differ by 2f₁</div>
                </div>
              }
              variables={[
                {
                  symbol: "L",
                  meaning:
                    "cavity length, closed end to open end (mouthpiece reed to bell, for a clarinet/sax)",
                  units: "m",
                },
              ]}
              whenToUse="Closed end forces the air still (a node); open end lets it move freely (an antinode). That asymmetry geometrically rules out even harmonics — only patterns with an odd number of quarter-waves fit. So a clarinet of length L sounds an OCTAVE LOWER than an open-open flute of the same length (L = λ/4 vs L = λ/2). The 'odd-only' rule isn't a trick to memorize — it falls out of the geometry. Successive odd harmonics 3f₁, 5f₁, 7f₁, ... are spaced 2f₁ apart, which is how problems back out f₁ from two consecutive overtones."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Doppler shift"
              formula={<div>f' = f · (v ± v_obs) / (v ∓ v_src)</div>}
              variables={[
                {
                  symbol: "f",
                  meaning: "frequency the source actually emits",
                  units: "Hz",
                },
                {
                  symbol: "f'",
                  meaning: "frequency the observer hears",
                  units: "Hz",
                },
                {
                  symbol: "v",
                  meaning:
                    "how fast the wave travels in the medium (air ≈ 345 m/s, water ≈ 1450 m/s)",
                },
                {
                  symbol: "v_obs",
                  meaning:
                    "how fast the observer is moving (always enter as a positive number — the sign comes from the rule below)",
                  units: "m/s",
                },
                {
                  symbol: "v_src",
                  meaning:
                    "how fast the source is moving (positive number; sign from rule below)",
                  units: "m/s",
                },
              ]}
              whenToUse="Approaching makes pitch go UP, receding makes it go DOWN — that's the siren you've heard a thousand times. That's the only thing to memorize. Pick whatever signs in (v ± v_obs) / (v ∓ v_src) make f' bigger when something is approaching and smaller when receding. You can't get it wrong because you can hear the right answer in your head. For echoes / sonar: apply Doppler twice — first the source-to-target trip; then the target re-emits as a new source for the return trip."
            />
            <FormulaBlock
              accentColor={ACCENT}
              name="Decibels & inverse-square"
              formula={
                <div className="space-y-1 text-base">
                  <div>β = 10·log₁₀(I/I₀)</div>
                  <div>I ∝ 1/r²</div>
                  <div>20 dB drop = 10× distance</div>
                </div>
              }
              variables={[
                {
                  symbol: "I",
                  meaning:
                    "how much sound power hits one square meter at the listener",
                  units: "W/m²",
                },
                {
                  symbol: "I₀",
                  meaning:
                    "the quietest sound a human can detect, used as the reference '0 dB' (10⁻¹² W/m²)",
                },
                {
                  symbol: "β",
                  meaning:
                    "loudness in decibels — a logarithmic scale that matches how the ear actually hears",
                  units: "dB",
                },
                {
                  symbol: "r",
                  meaning: "distance from a point source",
                  units: "m",
                },
              ]}
              whenToUse="Sound spreads out spherically from a small source — by the time it reaches you at distance r, the same total power is smeared over a sphere of area 4πr², so intensity falls as 1/r². The decibel scale is logarithmic to match how the ear works (each +10 dB = 10× the intensity, which feels like ~doubling the loudness). Useful rules of thumb: every 6 dB drop ≈ doubling the distance; every 20 dB drop = ten times the distance."
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
                heading: "Pattern-match: identify A, k, ω from the wave's structure",
                body: (
                  <>
                    <Why>
                      The general traveling wave has the form y(x,t) = A·sin(kx ± ωt + φ).
                      Comparing to y(x,t) = 0.25·sin(3.14x + 450t):
                    </Why>
                    <Eq>A = 0.25 m       (the multiplier in front of sin)</Eq>
                    <Eq>k = 3.14 rad/m   (the coefficient of x — the "wave number")</Eq>
                    <Eq>ω = 450 rad/s    (the coefficient of t — angular frequency)</Eq>
                    <Why>
                      <strong>Why the +ωt sign matters:</strong> the relative sign between
                      kx and ωt encodes the direction of travel. We'll deal with that in
                      part (f). Don't lose track of it.
                    </Why>
                  </>
                ),
              },
              {
                heading: "(a) Frequency f from ω",
                body: (
                  <>
                    <Why>
                      Angular frequency ω is "radians per second"; ordinary frequency f is
                      "cycles per second". One cycle = 2π radians, so ω = 2π·f, or
                      equivalently f = ω/(2π):
                    </Why>
                    <Eq>f = ω / (2π) = 450 / 6.283 ≈ 71.62 Hz</Eq>
                    <Why>
                      So the string oscillates ~72 times per second at any fixed point.
                    </Why>
                  </>
                ),
                result: { label: "f", value: "≈ 71.62 Hz", color: "green" },
              },
              {
                heading: "(b) Period T = time per cycle",
                body: (
                  <>
                    <Why>
                      Period and frequency are reciprocals: a wave repeating 71.62 times
                      per second has each cycle taking 1/71.62 of a second:
                    </Why>
                    <Eq>T = 1 / f = 1 / 71.62 ≈ 0.0140 s</Eq>
                  </>
                ),
                result: { label: "T", value: "≈ 0.0140 s", color: "green" },
              },
              {
                heading: "(c) Wavelength λ from k",
                body: (
                  <>
                    <Why>
                      Wave number k is "radians per meter" of spatial advance — it tells
                      you how compressed the spatial pattern is. Just as one cycle in time
                      is 2π radians, one wavelength in space is 2π radians of phase. So:
                    </Why>
                    <Eq>λ = 2π / k = 6.283 / 3.14 ≈ 2.00 m</Eq>
                    <Why>
                      Two meters between adjacent peaks of the wave on the string.
                    </Why>
                  </>
                ),
                result: { label: "λ", value: "= 2.00 m", color: "green" },
              },
              {
                heading: "(d) Wave speed",
                body: (
                  <>
                    <Why>
                      The wave's propagation speed satisfies v = ω/k = f·λ. Either form
                      gives the same answer (which is itself a consistency check):
                    </Why>
                    <Eq>v = ω / k = 450 / 3.14 ≈ 143.3 m/s</Eq>
                    <Eq>or:  v = f · λ = 71.62 · 2.00 ≈ 143.3 m/s   ✓</Eq>
                    <Why>
                      About 143 m/s — typical for a tightly tensioned thin string.
                    </Why>
                  </>
                ),
                result: { label: "v", value: "≈ 143.3 m/s", color: "green" },
              },
              {
                heading: "(e) Amplitude",
                body: (
                  <>
                    <Why>
                      Amplitude is just the maximum displacement — read directly off the
                      equation as the multiplier of the sin function:
                    </Why>
                    <Eq>A = 0.25 m</Eq>
                  </>
                ),
                result: { label: "A", value: "= 0.25 m", color: "green" },
              },
              {
                heading: "(f) Direction of travel — the sign trap",
                body: (
                  <>
                    <Why>
                      A traveling wave keeps its shape over time. The same point on the
                      wave (e.g. a particular crest) travels with a fixed value of phase
                      (kx ± ωt). We "follow the crest" by asking: as t advances, what must
                      x do to keep the phase unchanged?
                    </Why>
                    <Why>
                      Our wave has phase (kx + ωt). For phase to stay constant as t
                      <strong> increases</strong>, x must <strong>decrease</strong>. So the
                      crest moves in the −x direction. Thus:
                    </Why>
                    <Eq>(kx + ωt) form → wave travels in −x direction (leftward)</Eq>
                    <Eq>(kx − ωt) form → wave travels in +x direction (rightward)</Eq>
                    <Why>
                      Memorize this sign rule — it's the most-failed Day 6 question.
                    </Why>
                  </>
                ),
                result: { label: "Direction", value: "−x direction", color: "green" },
              },
              {
                heading: "(g) String mass density μ from wave speed and tension",
                body: (
                  <>
                    <Why>
                      For a transverse wave on a string, the wave speed is determined by
                      the tension T (Newtons of pull) and the linear mass density μ (kg of
                      string per meter):
                    </Why>
                    <Eq>v = √(T / μ)   →   μ = T / v²</Eq>
                    <Why>
                      Plug in T = 100 N and v = 143.3 m/s:
                    </Why>
                    <Eq>μ = 100 / (143.3)² = 100 / 20540 ≈ 4.87 × 10⁻³ kg/m</Eq>
                    <Why>
                      About 4.87 grams per meter. Reasonable for a thin steel string.
                    </Why>
                  </>
                ),
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
                    <div className="space-y-2">
                      <p>
                        <strong>Boundary conditions</strong> determine the standing-wave
                        pattern. At an open end, air molecules can move freely — that's a
                        pressure node and a displacement <strong>antinode</strong>. So an
                        open-open pipe must have antinodes at both ends.
                      </p>
                      <p>
                        <strong>The fundamental mode</strong> is the simplest pattern that
                        respects the boundary conditions. Between two antinodes you need
                        an odd number of half-cycles; the smallest is one half-cycle:
                        antinode — node — antinode. That fits exactly half a wavelength
                        inside the pipe, so L = λ/2.
                      </p>
                    </div>
                  ),
                  answer: { value: "Antinode — Node — Antinode" },
                },
                {
                  label: "(b)",
                  question: "Length of the resonant cavity for A 440",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>Combine wave speed and standing-wave geometry.</strong>
                        For an open-open pipe the n-th harmonic has λ_n = 2L/n, and using
                        v = f·λ:
                      </p>
                      <Eq>f_n = n · v / (2 L)   (n = 1, 2, 3, ...)</Eq>
                      <p>
                        Fundamental means n = 1, so f₁ = v/(2L). Solve for L:
                      </p>
                      <Eq>L = v / (2 f) = 345 / (2 · 440) = 345 / 880 ≈ 0.392 m</Eq>
                      <p>
                        About 39 cm — close to a real concert flute (~67 cm) but shorter
                        because real flutes have an "end correction" that effectively
                        lengthens them.
                      </p>
                    </div>
                  ),
                  answer: { value: "L ≈ 0.392", unit: "m" },
                },
                {
                  label: "(c)",
                  question: "Length to play middle C (262 Hz) in fundamental",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Same formula L = v/(2f); plug in the new frequency:
                      </p>
                      <Eq>L = 345 / (2 · 262) = 345 / 524 ≈ 0.658 m</Eq>
                      <p>
                        Lower note → longer wavelength → longer pipe. Makes intuitive
                        sense: bass instruments are bigger.
                      </p>
                    </div>
                  ),
                  answer: { value: "L ≈ 0.658", unit: "m" },
                },
                {
                  label: "(d)",
                  question: "How to play high A (880 Hz) — can't shrink the flute that small",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>The naive answer fails.</strong> If we kept using n = 1, we'd
                        need L = 345/(2·880) ≈ 0.196 m — about 20 cm. That's shorter than
                        the flute body itself. Trying to shorten the resonant cavity that
                        much by uncovering more tone holes doesn't quite get us there.
                      </p>
                      <p>
                        <strong>Trick: overblow to the n = 2 harmonic.</strong> The same
                        pipe at the same length L = 0.392 m has its n=2 mode at:
                      </p>
                      <Eq>f₂ = 2 · v / (2 L) = v / L = 345 / 0.392 ≈ 880 Hz   ✓</Eq>
                      <p>
                        This is exactly an octave above A 440, which is what we want. By
                        blowing harder/faster (overblowing), the player coaxes the pipe
                        into vibrating at the n=2 mode instead of the fundamental. The
                        node pattern becomes A—N—A—N—A: one full wavelength fits inside
                        the pipe.
                      </p>
                    </div>
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
                    <div className="space-y-2">
                      <p>
                        <strong>Boundary conditions for a string:</strong> the ends are
                        clamped (at the bridge and the nut), so they cannot move
                        transversely. That makes both ends <strong>nodes</strong>. (This
                        is the opposite of an open pipe end, which is an antinode.)
                      </p>
                      <p>
                        Smallest pattern with nodes at both ends: node — antinode — node.
                        Half a wavelength fits inside the string, so L = λ/2 — same
                        geometry as an open-open pipe. Different boundary types, same
                        formula!
                      </p>
                    </div>
                  ),
                  answer: { value: "Node — Antinode — Node" },
                },
                {
                  label: "(b)",
                  question: "Mass per unit length μ",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>Step 1 — find wave speed on the string.</strong> For
                        fundamental on a fixed-fixed string, L = λ/2 → λ = 2L. Wave speed
                        v = f·λ = f·(2L):
                      </p>
                      <Eq>v_string = 2 L · f = 2 · 0.648 · 110 = 142.56 m/s</Eq>
                      <p>
                        <strong>Step 2 — relate wave speed to T and μ.</strong> For a
                        string, v = √(T/μ). Solve for μ:
                      </p>
                      <Eq>v² = T / μ   →   μ = T / v²</Eq>
                      <Eq>μ = 100 / (142.56)² = 100 / 20323 ≈ 4.92 × 10⁻³ kg/m</Eq>
                      <p>
                        About 4.9 g per meter of string — typical for a wound A-string.
                      </p>
                    </div>
                  ),
                  answer: { value: "μ ≈ 4.92 × 10⁻³", unit: "kg/m" },
                },
                {
                  label: "(c)",
                  question: "How to play C (131 Hz) on this string without changing T or μ",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>Insight: wave speed depends only on T and μ, not L.</strong>
                        So the only knob we have is L (the length of vibrating string from
                        nut/fret to bridge). Pressing down on a fret shortens the
                        vibrating segment.
                      </p>
                      <p>
                        v stays at 142.56 m/s. For the new fundamental at 131 Hz:
                      </p>
                      <Eq>L_new = v / (2 · f_new) = 142.56 / (2 · 131) = 142.56 / 262 ≈ 0.544 m</Eq>
                      <p>
                        So the player presses a fret that leaves 54.4 cm of string
                        vibrating — the fret is at 0.648 − 0.544 ≈ 10.4 cm from the
                        nut (or equivalently 54.4 cm from the bridge).
                      </p>
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
                    <div className="space-y-2">
                      <p>
                        <strong>Boundary conditions are different at the two ends.</strong>
                        At the closed end (mouthpiece reed), the air can't move
                        longitudinally — that's a displacement <strong>node</strong>. At
                        the open end (bell), the air moves freely — that's an
                        <strong> antinode</strong>.
                      </p>
                      <p>
                        The simplest pattern matching node–antinode at the two ends is a
                        quarter-wave: the air goes from zero displacement at the reed up
                        to maximum displacement at the bell. So L = λ/4 for the
                        fundamental — quarter, not half. That's why a saxophone of a given
                        length sounds an octave below an open-open pipe of the same
                        length.
                      </p>
                    </div>
                  ),
                  answer: { value: "Node (closed) — Antinode (open), 1 quarter-wavelength" },
                },
                {
                  label: "(b)",
                  question: "Cavity length L to produce B♭ (116.5 Hz) fundamental",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        For closed-open pipe, fundamental: L = λ/4, with v = f·λ giving
                        f = v/(4L), or:
                      </p>
                      <Eq>L = v / (4 f) = 345 / (4 · 116.5) = 345 / 466 ≈ 0.740 m</Eq>
                      <p>
                        About 74 cm — close to the actual length of an alto sax body.
                      </p>
                    </div>
                  ),
                  answer: { value: "L ≈ 0.740", unit: "m" },
                },
                {
                  label: "(c)",
                  question: "To play one octave higher (twice the frequency), what opens?",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>Why this is tricky for closed-open pipes.</strong> A
                        closed-open pipe has only odd harmonics (n = 1, 3, 5, ...), so
                        you can't just overblow to the n=2 mode — that mode doesn't
                        exist. The natural overtone is the n=3 mode at 3·f₁, which is
                        an octave + a fifth above f₁ (not a clean octave).
                      </p>
                      <p>
                        <strong>The octave key</strong> opens a small register hole that
                        forces the air column to behave as if it's half its original
                        length. With a halved L, f₁ doubles — exactly one octave up.
                        It's a clever piece of acoustic engineering.
                      </p>
                    </div>
                  ),
                  answer: { value: "Open the octave key" },
                },
                {
                  label: "(d)",
                  question: "Node pattern for the new (octave) note (label 'D')",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        After the octave key opens, the effective cavity is half as long
                        but its boundaries are still closed at the reed and open at the
                        bell. So the fundamental of the shortened cavity has the same
                        node–antinode pattern, just compressed into half the physical
                        space.
                      </p>
                    </div>
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
                    <div className="space-y-2">
                      <p>
                        <strong>Recall: closed pipes only have odd harmonics.</strong>
                        f_n = n·f₁ where n = 1, 3, 5, 7, ... So consecutive allowed
                        frequencies differ by 2f₁ — for example 3f₁ and 5f₁ are 2f₁
                        apart, 5f₁ and 7f₁ are 2f₁ apart, and so on.
                      </p>
                      <p>
                        If 280 Hz and 320 Hz really were "successive overtones", their
                        difference equals 2·f₁:
                      </p>
                      <Eq>2 f₁ = 320 − 280 = 40   →   f₁ = 20 Hz</Eq>
                      <p>
                        That's the answer the problem <em>wants</em>. (It will turn out
                        to be inconsistent — see part (c).)
                      </p>
                    </div>
                  ),
                  answer: { value: "f₁ = 20 Hz (if the problem were valid)" },
                },
                {
                  label: "(b)",
                  question: "Length of the organ pipe",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Closed-open pipe fundamental: L = λ/4 = v/(4 f₁). Plug in v = 345
                        m/s and f₁ = 20 Hz:
                      </p>
                      <Eq>L = 345 / (4 · 20) = 345 / 80 = 4.31 m</Eq>
                    </div>
                  ),
                  answer: { value: "L = 4.31 m" },
                },
                {
                  label: "(c)",
                  question: "Why is the problem flawed?",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>Check whether 280 and 320 are actually valid harmonics of
                        a 20 Hz closed pipe.</strong> The allowed odd-multiple
                        frequencies are:
                      </p>
                      <Eq>20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, ...   (only odd n)</Eq>
                      <p>
                        Now check the given numbers. 280 / 20 = <strong>14</strong> — an
                        even multiple, so 280 Hz is NOT in the allowed list. Likewise 320
                        / 20 = <strong>16</strong> — also even, also not allowed.
                      </p>
                      <p>
                        <strong>Conclusion:</strong> the professor's two "successive
                        overtones" are mathematically self-consistent (their difference
                        gives a 20 Hz fundamental), but neither 280 nor 320 is a real
                        closed-pipe harmonic of 20 Hz. So the scenario can't actually
                        exist for a closed pipe.
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
                    <div className="space-y-2">
                      <p>
                        <strong>Decibels are logarithmic.</strong> Sound intensity level
                        β = 10·log₁₀(I/I₀), so a drop of Δβ dB corresponds to a
                        multiplicative ratio I₂/I₁ = 10^(Δβ/10). For Δβ = −20 dB:
                      </p>
                      <Eq>I₂ / I₁ = 10^(−20/10) = 10⁻² = 0.01</Eq>
                      <p>
                        <strong>For a point source in free space, intensity falls off as
                        1/r²</strong> (the energy spreads over a sphere of area 4πr²). So:
                      </p>
                      <Eq>I₂ / I₁ = (r₁ / r₂)²   →   (r₁ / r₂)² = 0.01</Eq>
                      <Eq>r₁ / r₂ = √0.01 = 0.1   →   r₂ = 10 · r₁ = 10 · 10 = 100 m</Eq>
                      <p>
                        <strong>Useful rule of thumb:</strong> every 6 dB drop ≈ doubling
                        the distance; every 20 dB drop = ten times the distance. We
                        wanted 20 dB, so we move out by a factor of 10.
                      </p>
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
                    <div className="space-y-2">
                      <p>
                        <strong>The Doppler formula:</strong>
                      </p>
                      <Eq>f_observed = f_emitted · (v ± v_obs) / (v ∓ v_src)</Eq>
                      <p>
                        Sign convention: the upper sign in each pair (+ in numerator, −
                        in denominator) corresponds to <em>approach</em>; the lower sign
                        corresponds to <em>recession</em>. Approach raises pitch,
                        recession lowers it.
                      </p>
                      <p>
                        <strong>Set up the geometry.</strong> Both move leftward in the
                        same direction. The submarine (the source) moves at 15 m/s
                        chasing the squid — that's <em>toward</em> the squid, so source
                        is approaching. The squid (observer) moves at 20 m/s away from
                        the sub (faster, so escaping) — observer is receding.
                      </p>
                      <p>
                        Source approaches → use minus in the denominator (smaller
                        denominator = higher f). Observer recedes → use minus in the
                        numerator (smaller numerator = lower f). The two effects partly
                        compensate:
                      </p>
                      <Eq>f_squid = f_emit · (v − v_obs) / (v − v_src)</Eq>
                      <Eq>f_squid = 12000 · (1450 − 20) / (1450 − 15) = 12000 · 1430 / 1435</Eq>
                      <Eq>f_squid ≈ 12000 · 0.99652 ≈ 11,958.2 Hz</Eq>
                      <p>
                        Net effect: the squid hears the sonar at a <em>slightly lower</em>
                        pitch than emitted, because the squid is escaping faster than the
                        sub is closing in (20 vs 15 m/s).
                      </p>
                    </div>
                  ),
                  answer: { value: "f_squid ≈ 11,958.2", unit: "Hz" },
                },
                {
                  label: "(b)",
                  question: "Frequency of the reflection received back at the sub",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>Reflection problems require Doppler twice.</strong> First
                        the sub-to-squid trip (part a). Now the squid acts as a source
                        re-emitting whatever it just heard (f_squid ≈ 11958.2 Hz), and the
                        sub becomes the observer.
                      </p>
                      <p>
                        <strong>Re-evaluate the geometry for the return trip.</strong>
                        The squid is moving away from the sub (the sound now travels back
                        toward the sub, but the squid is fleeing) → source recedes, so
                        denominator gets a plus. The sub is moving toward the squid (the
                        sub is also chasing) → observer approaches, so numerator gets a
                        plus.
                      </p>
                      <Eq>f_sub = f_squid · (v + v_obs) / (v + v_src)</Eq>
                      <Eq>f_sub = 11958.2 · (1450 + 15) / (1450 + 20) = 11958.2 · 1465 / 1470</Eq>
                      <Eq>f_sub ≈ 11958.2 · 0.99660 ≈ 11,917.5 Hz</Eq>
                    </div>
                  ),
                  answer: { value: "f_sub ≈ 11,917.5", unit: "Hz" },
                },
                {
                  label: "(c)",
                  question: "Beat frequency at the sub (between emitted and returned)",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>Beats arise when two close-frequency waves interfere.</strong>
                        Their amplitudes add and subtract at a rate equal to the
                        difference of their frequencies. The sub hears its own emitted
                        12000 Hz and the reflected 11917.5 Hz simultaneously — beating
                        at:
                      </p>
                      <Eq>Δf = |f_emit − f_return| = |12000 − 11917.5| ≈ 82.5 Hz</Eq>
                      <p>
                        Sonar systems use exactly this beat frequency to compute the
                        radial speed difference between the sub and its target. From Δf
                        the sub can back out the squid's relative speed, even without
                        knowing the squid's exact position.
                      </p>
                    </div>
                  ),
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
