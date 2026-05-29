import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { LiveValue } from "@/components/ee/LiveValue";
import { CircuitSchematic } from "@/components/ee/CircuitSchematic";
import { FormulaBlock } from "@/components/midterm/FormulaBlock";
import { WorkedExample, Eq, Why } from "@/components/midterm/WorkedExample";
import { PracticeProblem } from "@/components/midterm/PracticeProblem";

const ACCENT = "#7c3aed";

export default function OpAmps() {
  const [iIn, setIIn] = useState(0.914);
  const [rf, setRf] = useState(5.232);

  const vOut = -iIn * rf;
  const transimpedance = Math.abs(vOut / iIn);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/ee">
            <Button variant="ghost" className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <ChevronLeft className="w-5 h-5" /> Back to ESE 123
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Op-Amp Transimpedance</h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container py-12 space-y-12">
        <section>
          <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-3">
            CLUSTER 8 · Q25
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Inverting Transimpedance Amplifier
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            From Prelab 6 / Lab 6 / your USB current sense circuit: an inverting op-amp with a
            current input becomes a current-to-voltage converter. <strong>V<sub>out</sub> = −I<sub>in</sub>·R<sub>f</sub></strong>.
            The "transimpedance" is the magnitude V/I in ohms.
          </p>
        </section>

        <section className="grid md:grid-cols-5 gap-8">
          <Card className="md:col-span-3 interactive-panel space-y-4">
            <CircuitSchematic
              width={420}
              height={240}
              wires={[
                { x1: 40, y1: 130, x2: 130, y2: 130 },
                { x1: 130, y1: 130, x2: 130, y2: 90 },
                { x1: 130, y1: 90, x2: 250, y2: 90 },
                { x1: 250, y1: 90, x2: 250, y2: 110 },
                { x1: 130, y1: 130, x2: 220, y2: 130 },
                { x1: 280, y1: 130, x2: 360, y2: 130 },
                { x1: 220, y1: 170, x2: 220, y2: 200 },
              ]}
              components={[
                { kind: "I", x: 40, y: 130, label: `I_in = ${iIn.toFixed(3)} A` },
                { kind: "R", x: 190, y: 90, label: `R_f = ${rf.toFixed(2)} Ω` },
                { kind: "OPAMP", x: 250, y: 130 },
                { kind: "GND", x: 220, y: 200 },
                { kind: "NODE", x: 360, y: 130, label: "V_out" },
              ]}
            />
            <div className="grid grid-cols-3 gap-3">
              <LiveValue label="V_out" value={vOut.toFixed(3)} unit="V" accentColor={ACCENT} size="lg" />
              <LiveValue label="|V/I|" value={transimpedance.toFixed(3)} unit="Ω" accentColor="#06b6d4" />
              <LiveValue label="sign" value={vOut < 0 ? "negative (inverted)" : "positive"} accentColor="#ef4444" />
            </div>
          </Card>
          <Card className="md:col-span-2 interactive-panel space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Controls</h3>
            <div>
              <Label className="text-xs">I_in: {iIn.toFixed(3)} A</Label>
              <Slider min={0.001} max={2} step={0.001} value={[iIn]} onValueChange={(v) => setIIn(v[0])} />
            </div>
            <div>
              <Label className="text-xs">R_f: {rf.toFixed(2)} Ω</Label>
              <Slider min={1} max={20} step={0.01} value={[rf]} onValueChange={(v) => setRf(v[0])} />
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 border-t pt-2">
              Q25 preset: I = 0.914 A, V = 4.782 V → R = 5.232 Ω.<br />
              In real photodiode amps, R_f is MΩ–GΩ because I_in is nA. Same formula.
            </div>
          </Card>
        </section>

        <section className="grid md:grid-cols-2 gap-4">
          <FormulaBlock
            name="Transimpedance"
            formula={<>V<sub>out</sub> = −I<sub>in</sub> · R<sub>f</sub></>}
            variables={[
              {
                symbol: "I_in",
                meaning:
                  "the current flowing INTO the op-amp's − input (typically from a photodiode, current sensor, or other current source)",
                units: "A",
              },
              {
                symbol: "R_f",
                meaning:
                  "feedback resistor connecting V_out back to the − input — this is the 'gain' setting (in Ω)",
                units: "Ω",
              },
              {
                symbol: "V_out",
                meaning:
                  "output voltage — negative for positive I_in because this is an inverting topology",
                units: "V",
              },
            ]}
            whenToUse={
              <>
                The op-amp's high gain forces the − input to match the + input
                (which is grounded), so the − input is a 'virtual ground' (0 V
                but absorbing all incoming current). All of I_in then has to
                flow through R_f to V_out, dropping I_in·R_f volts. The
                negative sign comes from the geometry: current flowing INTO the
                − node forces V_out negative to maintain the virtual ground.
                Used to convert tiny currents (photodiode pA-µA) into easily
                measurable voltages.
              </>
            }
            accentColor={ACCENT}
          />
          <FormulaBlock
            name="Inverting voltage gain"
            formula={<>A<sub>v</sub> = V<sub>out</sub>/V<sub>in</sub> = −R<sub>f</sub>/R<sub>in</sub></>}
            variables={[
              {
                symbol: "R_in",
                meaning:
                  "input resistor between V_in and the op-amp's − terminal (sets how much current I_in = V_in/R_in flows into the virtual ground)",
              },
              {
                symbol: "R_f",
                meaning:
                  "feedback resistor between the − input and V_out (sets the voltage drop, hence the output)",
              },
            ]}
            whenToUse={
              <>
                Same trick as transimpedance, but the input is a voltage. R_in
                converts V_in to a current (V_in/R_in), and that current flows
                through R_f to make V_out. Result: gain = −R_f/R_in. The
                negative sign means inverting (input goes up, output goes
                down). Replacing R_in with an actual current source recovers
                the transimpedance amp — same circuit, different input form.
              </>
            }
            accentColor="#06b6d4"
          />
        </section>

        <WorkedExample
          title="Q25 — transimpedance from I_in and V_out"
          accentColor={ACCENT}
          problemStatement={
            <>
              An amplifier has input current 0.914 A and output voltage 4.782 V. What is its
              transimpedance in ohms?
            </>
          }
          steps={[
            {
              heading: "Understand what transimpedance means",
              body: (
                <>
                  <Why>
                    A normal amplifier converts a voltage input to a (larger) voltage
                    output, and its "gain" is dimensionless: V_out / V_in (volts over
                    volts). A <strong>transimpedance</strong> amplifier converts a
                    <em> current</em> input to a voltage output, so its gain is V_out /
                    I_in — volts over amps, which is <strong>ohms</strong>. (That's
                    where the name comes from: "trans" because it crosses two domains,
                    "impedance" because the units are resistance.)
                  </Why>
                  <Why>
                    For an inverting transimpedance amp, the relationship is V_out =
                    −I_in · R_f, where R_f is the feedback resistor. The minus sign
                    comes from the inverting topology — input current flowing into the
                    summing junction makes V_out swing the other way. We typically
                    quote the magnitude of the gain:
                  </Why>
                  <Eq>Z_t = |V_out / I_in|   (units: ohms)</Eq>
                </>
              ),
            },
            {
              heading: "Plug in the measured values",
              body: (
                <>
                  <Why>
                    The lab measurement: input current I_in = 0.914 A produces output
                    voltage V_out = 4.782 V. (In a real photodiode amp, I_in would be
                    nanoamps and R_f would be megohms — but the math is the same.)
                  </Why>
                  <Eq>Z_t = |V_out / I_in| = 4.782 V / 0.914 A = 5.232 V/A = 5.23 Ω</Eq>
                  <Why>
                    Since V_out = −I·R_f for this topology, this Z_t is just R_f
                    itself. So the feedback resistor in the circuit is R_f ≈ 5.23 Ω.
                  </Why>
                </>
              ),
              result: { label: "Z_t", value: "5.23 Ω", color: "purple" },
            },
          ]}
          keyInsight={<>Transimpedance has units of resistance even though it's an amplifier gain — the input is current and output is voltage.</>}
        />

        <section>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Drill — variant problems</h3>
          <div className="space-y-4">
            <PracticeProblem
              title="Variant: photodiode amp"
              accentColor={ACCENT}
              statement={<>I_in = 50 µA, R_f = 100 kΩ.</>}
              parts={[
                {
                  label: "(a)",
                  question: "V_out?",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        For an inverting transimpedance amp, all the input current
                        flows through R_f because the (−) input is held at "virtual
                        ground" (the op-amp drives V_out so that its (−) input matches
                        the grounded (+) input). The voltage drop across R_f is I · R_f,
                        and because R_f connects the (−) input (at 0 V) to V_out, the
                        sign of V_out is negative when I_in flows into the (−) node:
                      </p>
                      <Eq>V_out = −I_in · R_f = −(50 × 10⁻⁶ A) × (100 × 10³ Ω)</Eq>
                      <Eq>V_out = −(50e−6 · 100e3) = −5 × 10⁰ = −5 V</Eq>
                      <p>
                        Photodiodes typically produce currents in the µA range, so a
                        100 kΩ feedback resistor turns 50 µA of light-induced current
                        into a clean −5 V signal — easy to read with a normal ADC.
                      </p>
                    </div>
                  ),
                  answer: { value: "−5 V" },
                },
                {
                  label: "(b)",
                  question: "Transimpedance?",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Transimpedance is just |V_out / I_in| in ohms. From V_out =
                        −I·R_f, dividing by I gives:
                      </p>
                      <Eq>|V_out / I_in| = R_f = 100 kΩ</Eq>
                      <p>
                        For an ideal op-amp transimpedance amplifier, the gain magnitude
                        is exactly R_f — a clean, predictable design parameter.
                      </p>
                    </div>
                  ),
                  answer: { value: "100 kΩ" },
                },
              ]}
            />
            <PracticeProblem
              title="Variant: USB current sense"
              accentColor="#06b6d4"
              statement={<>Your project's USB current → V conversion. R_f = 1 Ω, I = 100 mA.</>}
              parts={[
                {
                  label: "(a)",
                  question: "Magnitude of V_out?",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Same formula, different scale. For USB-current sensing we want
                        a small R_f because the currents are in the hundred-mA range,
                        and we want the output to stay below the rail (typically 3.3 V
                        or 5 V on a microcontroller-friendly system):
                      </p>
                      <Eq>|V_out| = I_in · R_f = 0.100 A · 1 Ω = 0.100 V = 100 mV</Eq>
                      <p>
                        100 mV is small but very readable by a typical 12-bit ADC. If
                        we'd used R_f = 100 Ω, V_out would be 10 V — way past the rail,
                        and the op-amp would saturate.
                      </p>
                    </div>
                  ),
                  answer: { value: "100 mV (= 0.1 V)" },
                },
              ]}
            />
          </div>
        </section>

        <section>
          <Card className="p-6 border-l-4 border-l-amber-500">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Common traps</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200 space-y-1">
              <li>The output is NEGATIVE the input current times R_f. Sign matters when computing V relative to ground.</li>
              <li>Transimpedance has units of OHMS, not V/V. Pure resistance.</li>
              <li>Virtual ground at the (−) input means I_in flows entirely through R_f.</li>
              <li>Real op-amps saturate at ±V_supply. If |I·R_f| exceeds the rail, you clip.</li>
            </ul>
          </Card>
        </section>
      </div>
    </div>
  );
}
