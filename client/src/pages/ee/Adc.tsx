import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { LiveValue } from "@/components/ee/LiveValue";
import { BitArray } from "@/components/ee/BitArray";
import { FormulaBlock } from "@/components/midterm/FormulaBlock";
import { WorkedExample, Eq, Why } from "@/components/midterm/WorkedExample";
import { PracticeProblem } from "@/components/midterm/PracticeProblem";

const ACCENT = "#ef4444";
const VREF = 4.3;

function QuantizationStaircase({
  vin,
  vref,
  bits = 10,
  width = 360,
  height = 220,
}: {
  vin: number;
  vref: number;
  bits?: number;
  width?: number;
  height?: number;
}) {
  const padL = 44;
  const padB = 30;
  const padT = 12;
  const padR = 14;
  const innerW = width - padL - padR;
  const innerH = height - padT - padB;
  const codeMax = (1 << bits) - 1;
  const visibleSteps = 16;
  const code = Math.round((vin * codeMax) / vref);
  const xOf = (v: number) => padL + (v / vref) * innerW;
  const yOf = (c: number) => padT + innerH - (c / codeMax) * innerH;

  const path: string[] = [];
  for (let k = 0; k <= visibleSteps; k++) {
    const v = (k / visibleSteps) * vref;
    const c = Math.round((v * codeMax) / vref);
    if (k === 0) path.push(`M ${xOf(v).toFixed(1)} ${yOf(c).toFixed(1)}`);
    else {
      const vPrev = ((k - 1) / visibleSteps) * vref;
      const cPrev = Math.round((vPrev * codeMax) / vref);
      path.push(`L ${xOf(v).toFixed(1)} ${yOf(cPrev).toFixed(1)}`);
      path.push(`L ${xOf(v).toFixed(1)} ${yOf(c).toFixed(1)}`);
    }
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="bg-white dark:bg-slate-900/60 rounded border border-gray-200 dark:border-slate-700"
    >
      <line x1={padL} y1={padT} x2={padL} y2={padT + innerH} stroke="#475569" strokeWidth={1.2} />
      <line x1={padL} y1={padT + innerH} x2={padL + innerW} y2={padT + innerH} stroke="#475569" strokeWidth={1.2} />
      <path d={path.join(" ")} fill="none" stroke="#06b6d4" strokeWidth={1.5} />
      {/* current sample marker */}
      <line x1={xOf(vin)} y1={padT} x2={xOf(vin)} y2={padT + innerH} stroke="#ef4444" strokeWidth={1} strokeDasharray="3 3" />
      <line x1={padL} y1={yOf(code)} x2={padL + innerW} y2={yOf(code)} stroke="#ef4444" strokeWidth={1} strokeDasharray="3 3" />
      <circle cx={xOf(vin)} cy={yOf(code)} r={5} fill="#ef4444" stroke="white" strokeWidth={2} />
      <text x={xOf(vin) + 8} y={yOf(code) - 8} fontSize={11} fill="#ef4444" fontFamily="monospace">
        ({vin.toFixed(2)} V, {code})
      </text>
      <text x={padL + innerW / 2} y={height - 8} textAnchor="middle" fontSize={10} fill="#475569" fontFamily="monospace">
        V_in (V)
      </text>
      <text x={12} y={padT + innerH / 2} fontSize={10} fill="#475569" fontFamily="monospace" transform={`rotate(-90 12 ${padT + innerH / 2})`}>
        code
      </text>
      <text x={padL} y={padT + innerH + 14} fontSize={9} fill="#475569" textAnchor="middle">0</text>
      <text x={padL + innerW} y={padT + innerH + 14} fontSize={9} fill="#475569" textAnchor="middle">{vref}</text>
      <text x={padL - 4} y={padT + innerH + 3} fontSize={9} fill="#475569" textAnchor="end">0</text>
      <text x={padL - 4} y={padT + 4} fontSize={9} fill="#475569" textAnchor="end">{codeMax}</text>
    </svg>
  );
}

function MuxDiagram({
  selected,
  channels,
}: {
  selected: number;
  channels: { value: number; pin: string }[];
}) {
  const w = 360;
  const h = 220;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="bg-white dark:bg-slate-900/60 rounded border border-gray-200 dark:border-slate-700">
      {/* mux body */}
      <polygon
        points="180,20 180,200 290,160 290,60"
        fill="white"
        stroke="#475569"
        strokeWidth={2}
      />
      <text x={235} y={115} fontSize={12} fill="#475569" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
        MUX
      </text>
      {channels.map((ch, i) => {
        const yIn = 40 + i * 40;
        const isSel = ch.value === selected;
        return (
          <g key={ch.value}>
            <line
              x1={30}
              y1={yIn}
              x2={180}
              y2={yIn}
              stroke={isSel ? "#ef4444" : "#cbd5e1"}
              strokeWidth={isSel ? 2.5 : 1.5}
            />
            <text x={28} y={yIn - 4} fontSize={10} fill={isSel ? "#ef4444" : "#475569"} fontFamily="monospace" textAnchor="end">
              {ch.pin}
            </text>
          </g>
        );
      })}
      {/* output */}
      <line x1={290} y1={110} x2={345} y2={110} stroke="#ef4444" strokeWidth={2.5} />
      <text x={300} y={102} fontSize={10} fill="#ef4444" fontFamily="monospace">
        → ADC core
      </text>
      {/* MUXPOS register */}
      <rect x={185} y={205} width={100} height={14} fill="white" stroke="#475569" strokeWidth={1} />
      <text x={235} y={215} textAnchor="middle" fontSize={10} fill="#475569" fontFamily="monospace">
        MUXPOS = {selected}
      </text>
    </svg>
  );
}

const muxposChannels: { value: number; label: string; pin: string }[] = [
  { value: 12, label: "USB current (transimpedance amp output)", pin: "AIN12" },
  { value: 13, label: "AVDD (system supply)", pin: "AIN13" },
  { value: 14, label: "CC1 (USB-C orientation)", pin: "AIN14" },
  { value: 15, label: "CC2 (USB-C orientation)", pin: "AIN15" },
];

export default function Adc() {
  const [vin, setVin] = useState(2.606);
  const [muxpos, setMuxpos] = useState(14);

  const code = Math.round((vin * 1023) / VREF);
  const codeBin10 = code.toString(2).padStart(10, "0");
  const channel = muxposChannels.find((c) => c.value === muxpos);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/ee">
            <Button variant="ghost" className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <ChevronLeft className="w-5 h-5" /> Back to ESE 123
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">ADC Conversion</h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container py-12 space-y-12">
        <section>
          <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-3">
            CLUSTER 6 · Q20 Q21
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            10-bit ADC: Voltage to Code
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Your project uses the AVR's 10-bit ADC with the internal 4.3 V reference (Prelab 11).
            Code = ⌊V<sub>in</sub> · 1023 / V<sub>ref</sub>⌋ for a single conversion. ADC0_MUXPOS
            chooses which analog input to read (AIN12 = USB current, AIN13 = AVDD, AIN14/15 = CC1/CC2).
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="interactive-panel space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Voltage → code converter</h3>
            <div className="flex justify-center">
              <QuantizationStaircase vin={vin} vref={VREF} bits={10} />
            </div>
            <div>
              <Label className="text-xs">V_in: {vin.toFixed(3)} V</Label>
              <Slider min={0} max={4.3} step={0.001} value={[vin]} onValueChange={(v) => setVin(v[0])} />
            </div>
            <BitArray value={code & 0xff} accentColor={ACCENT} label="ADC0_RES low byte" />
            <div className="text-xs font-mono text-gray-600 dark:text-gray-300">
              Full 10-bit code: <span className="font-bold">0b{codeBin10}</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <LiveValue label="Code (dec)" value={code} accentColor={ACCENT} />
              <LiveValue label="Vin/Vref" value={(vin / VREF).toFixed(3)} accentColor="#06b6d4" />
              <LiveValue label="Vref" value={VREF.toFixed(1)} unit="V" />
            </div>
          </Card>

          <Card className="interactive-panel space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">ADC0_MUXPOS — channel select</h3>
            <div className="flex justify-center">
              <MuxDiagram
                selected={muxpos}
                channels={muxposChannels.map((c) => ({ value: c.value, pin: c.pin }))}
              />
            </div>
            <Label className="text-xs">MUXPOS register value: {muxpos}</Label>
            <select
              value={muxpos}
              onChange={(e) => setMuxpos(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 font-mono text-sm"
            >
              {muxposChannels.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.value} — {c.pin} — {c.label}
                </option>
              ))}
            </select>
            <div className="rounded-lg bg-amber-50 dark:bg-amber-900/30 border-l-4 border-l-amber-600 p-3">
              <div className="text-sm text-gray-700 dark:text-gray-200">
                The multiplexer routes <span className="font-bold">{channel?.pin}</span> ({channel?.label}) into the ADC core.
                MUXPOS does NOT start the conversion or change the reference.
              </div>
            </div>
          </Card>
        </section>

        <section className="grid md:grid-cols-2 gap-4">
          <FormulaBlock
            name="10-bit ADC code"
            formula={<>code = round(V<sub>in</sub> · 1023 / V<sub>ref</sub>)</>}
            variables={[
              {
                symbol: "V_ref",
                meaning:
                  "the voltage that maps to the maximum code (1023) — sets the 'top' of the ADC's measurement range. Internal 4.3 V in your project",
              },
              {
                symbol: "1023",
                meaning:
                  "the maximum code value for a 10-bit ADC (= 2^10 − 1). Each unit code represents V_ref/1023 ≈ 4.2 mV in your project",
              },
            ]}
            whenToUse={
              <>
                The ADC measures the input voltage as a fraction of V_ref, then
                converts that fraction to a 10-bit integer (0–1023). The
                round() matters: a true voltage of 2.5 V might map to 595 or
                596 depending on rounding. With 64-sample accumulation, you sum
                64 single-conversion codes, so the ADC0_RES register holds
                64×code (max 64×1023 = 65472) — divide by 64 to recover the
                averaged code.
              </>
            }
            accentColor={ACCENT}
          />
          <FormulaBlock
            name="ADC code → voltage"
            formula={<>V<sub>in</sub> = V<sub>ref</sub> · code / 1023</>}
            variables={[
              {
                symbol: "V_ref",
                meaning: "reference voltage you set the ADC to use (4.3 V internally)",
              },
              {
                symbol: "code",
                meaning:
                  "value read from the ADC0_RES register (0 to 1023 for a single conversion)",
              },
            ]}
            whenToUse={
              <>
                Going the other way around — you read the register and want to
                recover the voltage that produced it. If your input is fed
                through a voltage divider (e.g. you scaled a 12 V signal down
                to 3 V to fit the ADC range), don't forget to multiply BACK by
                the divider ratio to recover the original signal voltage.
                Resolution is V_ref/1023 ≈ 4.2 mV per code — that's your
                measurement step size.
              </>
            }
            accentColor="#06b6d4"
          />
        </section>

        <WorkedExample
          title="Q20 — code for V_in = 2.606 V"
          accentColor={ACCENT}
          problemStatement={
            <>
              The 10-bit ADC: 0b0000000000 ↔ 0 V, 0b1111111111 ↔ V<sub>ref</sub> = 4.3 V.
              What integer code does your ADC return for V_in = 2.606 V (single conversion)?
            </>
          }
          steps={[
            {
              heading: "Understand the linear voltage-to-code mapping",
              body: (
                <>
                  <Why>
                    A 10-bit ADC has 2¹⁰ = 1024 distinct output codes, numbered 0
                    through 1023. The chip is wired to map V = 0 V → code 0 and V =
                    V_ref → code 1023. Between those endpoints, the mapping is linear:
                    every step in V corresponds to a step of V_ref/1023 in voltage,
                    which is the smallest voltage difference the ADC can resolve (the
                    "LSB" or least-significant-bit voltage).
                  </Why>
                  <Why>
                    For your project, V_ref = 4.3 V, so 1 LSB ≈ 4.3 / 1023 ≈ 4.20 mV.
                    Any input voltage rounds to the nearest integer multiple of that
                    step:
                  </Why>
                  <Eq>code = round(V_in · 1023 / V_ref)</Eq>
                  <Eq>code = round(2.606 V · 1023 / 4.3 V)</Eq>
                </>
              ),
            },
            {
              heading: "Compute the numerator",
              body: (
                <>
                  <Why>
                    Multiply V_in by the maximum-code constant 1023:
                  </Why>
                  <Eq>2.606 × 1023 = 2666.0   (volts × dimensionless code)</Eq>
                </>
              ),
            },
            {
              heading: "Divide by V_ref and round to the nearest integer",
              body: (
                <>
                  <Eq>2666.0 / 4.3 = 619.99   (still continuous-valued)</Eq>
                  <Eq>round(619.99) = 620</Eq>
                  <Why>
                    Round to nearest because the ADC bins each input into the closest
                    discrete level. (Some textbooks use floor instead of round; check
                    the AVR datasheet — it specifies "nearest" with mid-step ties going
                    even.)
                  </Why>
                  <Why>
                    <strong>Sanity check via fraction:</strong> V_in / V_ref = 2.606 /
                    4.3 ≈ 0.606, so the code should be ≈ 60.6% of 1023 = 620. ✓
                  </Why>
                </>
              ),
              result: { label: "Code", value: "620", color: "red" },
            },
          ]}
          keyInsight={<>If your firmware uses 64-sample accumulation (default in your project), the result register is 64× larger: 64·620 = 39680.</>}
        />

        <WorkedExample
          title="Q21 — ADC0_MUXPOS"
          accentColor="#06b6d4"
          problemStatement={<>What is ADC0_MUXPOS used for? (multi-select)</>}
          steps={[
            {
              heading: "(TRUE) Selects the input voltage source",
              body: (
                <>
                  <Why>
                    The AVR's ADC has one analog-to-digital converter core but many
                    physical input pins (AIN0 through AIN15). To pick which pin's
                    voltage gets converted, the chip uses an analog multiplexer — a
                    bank of switches — controlled by the ADC0_MUXPOS register.
                    Writing 14 to MUXPOS (for example) closes the AIN14 switch and
                    opens all the others, routing AIN14's voltage into the ADC core.
                  </Why>
                  <Why>
                    This IS what MUXPOS does. The name is short for "mux positive
                    input" — it picks the positive side of a single-ended or
                    differential conversion.
                  </Why>
                </>
              ),
            },
            {
              heading: "(FALSE) Indicates ADC busy",
              body: (
                <>
                  <Why>
                    Conversion-status bits live in a different register. The AVR uses
                    ADC0_INTFLAGS (specifically the RESRDY bit) to indicate "result
                    ready"/"conversion complete". Some chips also have a separate
                    ADC0_BUSY bit. None of those are MUXPOS.
                  </Why>
                </>
              ),
            },
            {
              heading: "(FALSE) Starts the conversion",
              body: (
                <>
                  <Why>
                    Starting a conversion is a separate action. On the AVR you either
                    write to ADC0_COMMAND (e.g., STCONV bit), or configure an
                    event-system trigger via STARTEI. Just writing MUXPOS only
                    re-routes the input — it doesn't trigger anything.
                  </Why>
                </>
              ),
            },
            {
              heading: "(FALSE) Selects reference voltage",
              body: (
                <>
                  <Why>
                    The ADC reference (V_ref) is configured in ADC0_CTRLC (the REFSEL
                    bits) or in the VREF peripheral itself. Common choices: V_DD,
                    internal 1.024/2.048/2.5/4.096 V, or external. MUXPOS has no
                    effect on reference selection.
                  </Why>
                </>
              ),
            },
            {
              heading: "(FALSE) Selects ADC output",
              body: (
                <>
                  <Why>
                    There's only one output (ADC0_RES, the result register). There's
                    nothing to "select" on the output side. The conversion result
                    always lands in ADC0_RES regardless of which input pin was
                    sampled.
                  </Why>
                </>
              ),
              result: { label: "Selections", value: "1 only", color: "cyan" },
            },
          ]}
          keyInsight={<>MUXPOS is the input multiplexer's positive pin selector. Don't confuse with reference, command, or status.</>}
        />

        <section>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Drill — variant problems</h3>
          <div className="space-y-4">
            <PracticeProblem
              title="Variant: code at V_in = 1.5 V"
              accentColor={ACCENT}
              statement={<>Vref = 4.3 V, single conversion.</>}
              parts={[
                {
                  label: "(a)",
                  question: "Code?",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Apply the standard formula. V_in = 1.5 V is well below V_ref =
                        4.3 V, so we expect a code somewhere in the bottom third of
                        the range:
                      </p>
                      <Eq>code = round(V_in · 1023 / V_ref) = round(1.5 · 1023 / 4.3)</Eq>
                      <Eq>code = round(1534.5 / 4.3) = round(356.86) = 357</Eq>
                      <p>
                        Sanity: V_in/V_ref = 1.5/4.3 ≈ 0.349, and 0.349 × 1023 ≈ 357. ✓
                      </p>
                    </div>
                  ),
                  answer: { value: "357" },
                },
              ]}
            />
            <PracticeProblem
              title="Variant: voltage from code"
              accentColor="#06b6d4"
              statement={<>ADC0_RES = 512, single conversion, Vref = 4.3 V.</>}
              parts={[
                {
                  label: "(a)",
                  question: "What was V_in?",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>Going backwards.</strong> The forward formula is code =
                        V_in·1023/V_ref. Solve for V_in by multiplying both sides by
                        V_ref/1023:
                      </p>
                      <Eq>V_in = V_ref · code / 1023</Eq>
                      <Eq>V_in = 4.3 · 512 / 1023 = 2201.6 / 1023 ≈ 2.152 V</Eq>
                      <p>
                        Code 512 is exactly halfway through the 0..1023 range, so
                        V_in should be roughly half of V_ref. 4.3/2 = 2.15 V. ✓
                      </p>
                    </div>
                  ),
                  answer: { value: "2.15 V" },
                },
              ]}
            />
            <PracticeProblem
              title="Variant: 64-sample accumulation"
              accentColor="#c026d3"
              statement={<>Same V_in = 2.606 V, but ADC accumulates 64 samples per conversion.</>}
              parts={[
                {
                  label: "(a)",
                  question: "What does ADC0_RES read?",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>What "accumulation" means.</strong> The AVR can be
                        configured to take N samples in a row and add them together
                        before placing the sum in ADC0_RES (instead of taking a single
                        sample). This is a built-in averaging trick that effectively
                        adds bits of resolution by reducing random noise.
                      </p>
                      <p>
                        The single-conversion code for V_in = 2.606 V is 619.99 (we
                        computed this in Q20). With 64-sample accumulation, ADC0_RES =
                        64 × that single-conversion code:
                      </p>
                      <Eq>ADC0_RES = 64 · (V_in · 1023 / V_ref) = 64 · 619.99 ≈ 39,679.4</Eq>
                      <Eq>ADC0_RES ≈ 39,679 or 39,680   (depending on rounding)</Eq>
                      <p>
                        To recover V_in from this register reading, divide by 64 first
                        (to get back to the single-conversion code), then apply the
                        usual code-to-voltage formula. Most projects do exactly that
                        in firmware.
                      </p>
                    </div>
                  ),
                  answer: { value: "39679 (or 39680)" },
                },
              ]}
            />
          </div>
        </section>

        <section>
          <Card className="p-6 border-l-4 border-l-amber-500">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Common traps</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200 space-y-1">
              <li>2^10 = 1024 codes (0..1023). Max code is 1023, not 1024.</li>
              <li>"Single conversion" usually means one ADC trigger producing one result register update — check whether your project's setup divides by N or accumulates ×N.</li>
              <li>MUXPOS just routes. STARTEI / COMMAND / event triggers actually launch a conversion.</li>
              <li>If V_in &gt; V_ref, code saturates at 1023 (clipped) — don't trust above-reference readings.</li>
            </ul>
          </Card>
        </section>
      </div>
    </div>
  );
}
