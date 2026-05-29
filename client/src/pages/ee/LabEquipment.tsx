import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { LiveValue } from "@/components/ee/LiveValue";
import { ScopeTrace } from "@/components/ee/ScopeTrace";
import { CircuitSchematic } from "@/components/ee/CircuitSchematic";
import { FormulaBlock } from "@/components/midterm/FormulaBlock";
import { WorkedExample, Eq, Why } from "@/components/midterm/WorkedExample";
import { PracticeProblem } from "@/components/midterm/PracticeProblem";

const ACCENT = "#06b6d4";

function DmmPlacementFig() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <div className="text-xs font-mono text-center mb-1 text-gray-700 dark:text-gray-200">
          V mode: parallel · R_in → ∞
        </div>
        <CircuitSchematic
          width={220}
          height={150}
          noGrid
          wires={[
            { x1: 30, y1: 90, x2: 30, y2: 50 },
            { x1: 30, y1: 50, x2: 100, y2: 50 },
            { x1: 130, y1: 50, x2: 200, y2: 50 },
            { x1: 200, y1: 50, x2: 200, y2: 130 },
            { x1: 30, y1: 120, x2: 30, y2: 130 },
            { x1: 30, y1: 130, x2: 200, y2: 130 },
            // V meter probes
            { x1: 100, y1: 50, x2: 100, y2: 75 },
            { x1: 130, y1: 50, x2: 130, y2: 75 },
          ]}
          components={[
            { kind: "V", x: 30, y: 105, color: "#f59e0b", labelPos: "left" },
            { kind: "R", x: 115, y: 50, label: "DUT", color: "#10b981" },
            { kind: "VOLTMETER", x: 115, y: 90, color: "#475569" },
          ]}
        />
      </div>
      <div>
        <div className="text-xs font-mono text-center mb-1 text-gray-700 dark:text-gray-200">
          A mode: series · R_in → 0
        </div>
        <CircuitSchematic
          width={220}
          height={150}
          noGrid
          wires={[
            { x1: 30, y1: 90, x2: 30, y2: 50 },
            { x1: 30, y1: 50, x2: 70, y2: 50 },
            { x1: 100, y1: 50, x2: 140, y2: 50 },
            { x1: 170, y1: 50, x2: 200, y2: 50 },
            { x1: 200, y1: 50, x2: 200, y2: 130 },
            { x1: 30, y1: 120, x2: 30, y2: 130 },
            { x1: 30, y1: 130, x2: 200, y2: 130 },
          ]}
          components={[
            { kind: "V", x: 30, y: 105, color: "#f59e0b", labelPos: "left" },
            { kind: "AMMETER", x: 85, y: 50, color: "#475569" },
            { kind: "R", x: 155, y: 50, label: "DUT", color: "#10b981" },
          ]}
        />
      </div>
    </div>
  );
}

export default function LabEquipment() {
  const [vpp, setVpp] = useState(2.0);
  const [freq, setFreq] = useState(1000);
  const [vDiv, setVDiv] = useState(0.5);
  const [tDiv, setTDiv] = useState(0.0005);

  const vRms = vpp / (2 * Math.SQRT2);
  const omega = 2 * Math.PI * freq;
  const period = 1 / freq;

  const signal = (t: number) => (vpp / 2) * Math.sin(omega * t);
  const signal2 = (t: number) => (vpp / 4) * Math.sin(omega * t * 2 + 1);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/ee">
            <Button variant="ghost" className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <ChevronLeft className="w-5 h-5" /> Back to ESE 123
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Lab Equipment</h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container py-12 space-y-12">
        <section>
          <span className="inline-block bg-cyan-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-3">
            CLUSTER 4 · Q9 Q10 Q11 Q14 Q15
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            DMM, Power Supply, Oscilloscope
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            From the I-V curve in Lab 1: slope of I vs V = conductance, and resistance is its
            reciprocal. From Pre-lab 4 (rms): for a sine wave, V<sub>rms</sub> = V<sub>p</sub>/√2 = V<sub>pp</sub>/(2√2).
            Adjust the simulated scope below to read off voltages and timing.
          </p>
        </section>

        <section className="grid md:grid-cols-5 gap-8">
          <Card className="md:col-span-3 interactive-panel space-y-3">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Simulated dual-trace scope
            </h3>
            <ScopeTrace
              signal={signal}
              signal2={signal2}
              vDiv={vDiv}
              tDiv={tDiv}
            />
            <div className="grid grid-cols-3 gap-3">
              <LiveValue label="V_pp" value={vpp.toFixed(2)} unit="V" accentColor={ACCENT} />
              <LiveValue label="V_rms" value={vRms.toFixed(3)} unit="V" accentColor="#10b981" />
              <LiveValue label="ω" value={omega.toFixed(0)} unit="rad/s" accentColor="#c026d3" />
              <LiveValue label="frequency" value={freq.toFixed(0)} unit="Hz" />
              <LiveValue label="period" value={(period * 1000).toFixed(3)} unit="ms" />
            </div>
          </Card>
          <Card className="md:col-span-2 interactive-panel space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Controls</h3>
            <div>
              <Label className="text-xs">V_pp: {vpp.toFixed(2)} V</Label>
              <Slider min={0.1} max={5} step={0.05} value={[vpp]} onValueChange={(v) => setVpp(v[0])} />
            </div>
            <div>
              <Label className="text-xs">f: {freq.toFixed(0)} Hz</Label>
              <Slider min={50} max={5000} step={50} value={[freq]} onValueChange={(v) => setFreq(v[0])} />
            </div>
            <div>
              <Label className="text-xs">V/div: {vDiv.toFixed(2)} V</Label>
              <Slider min={0.1} max={2} step={0.1} value={[vDiv]} onValueChange={(v) => setVDiv(v[0])} />
            </div>
            <div>
              <Label className="text-xs">t/div: {(tDiv * 1000).toFixed(2)} ms</Label>
              <Slider
                min={0.0001}
                max={0.005}
                step={0.0001}
                value={[tDiv]}
                onValueChange={(v) => setTDiv(v[0])}
              />
            </div>
          </Card>
        </section>

        <section className="grid md:grid-cols-3 gap-4">
          <FormulaBlock
            name="Resistance from I-V slope"
            formula={<>R = 1 / slope</>}
            variables={[
              {
                symbol: "slope",
                meaning:
                  "dI/dV from the line you fit through your I-vs-V data points — also called conductance",
                units: "A/V",
              },
              {
                symbol: "R",
                meaning: "resistance you're measuring (the inverse of conductance)",
                units: "Ω",
              },
            ]}
            whenToUse={
              <>
                Ohm's law V = IR rearranges to I = V/R, so a plot of I (y-axis)
                vs V (x-axis) for a resistor is a straight line through the
                origin with slope 1/R. Bigger slope = more current per volt =
                lower resistance. Lab procedure: sweep V, measure I at each
                point, fit a line, take 1/slope. The benefit over a single V/I
                ratio: the fit averages out noise from any one measurement.
              </>
            }
            accentColor={ACCENT}
          />
          <FormulaBlock
            name="Max power transfer"
            formula={<>P<sub>load</sub> max ⇔ R<sub>load</sub> = R<sub>source</sub></>}
            variables={[
              {
                symbol: "R_source",
                meaning:
                  "the Thévenin equivalent resistance of the supply (its 'internal resistance') — for a regulated bench supply, R_source = V_set / I_limit",
                units: "Ω",
              },
            ]}
            whenToUse={
              <>
                Two competing effects: low R_load means high current but low
                voltage across it; high R_load means high voltage but low
                current. Power is the product, so it peaks when these balance —
                which happens precisely when R_load matches R_source. This is
                the "impedance matching" rule. For a regulated CV/CC supply,
                R_source = V_set / I_limit is the slope of the V-I corner; load
                R = that for max power into the load.
              </>
            }
            accentColor="#10b981"
          />
          <FormulaBlock
            name="Sine RMS / angular freq"
            formula={
              <>
                V<sub>rms</sub> = V<sub>pp</sub>/(2√2) &nbsp; · &nbsp; ω = 2πf
              </>
            }
            variables={[
              {
                symbol: "V_pp",
                meaning:
                  "peak-to-peak voltage — distance from the highest peak to the lowest trough on the scope",
              },
              {
                symbol: "V_p",
                meaning: "amplitude (= V_pp/2) — distance from zero to either peak",
              },
              {
                symbol: "V_rms",
                meaning:
                  "the DC voltage that would deliver the same average power as the AC waveform — only equal to V_p/√2 for SINE waves",
              },
              {
                symbol: "ω",
                meaning:
                  "angular frequency — radians per second the wave advances. For sine of period T: ω = 2π/T = 2πf",
                units: "rad/s",
              },
            ]}
            whenToUse={
              <>
                The √2 factor only applies to clean SINE waves — square waves
                have V_rms = V_p (no √2!), triangle has V_p/√3. Easy lab trap:
                computing V_rms with /√2 on a square-wave channel gives a 41%
                error. ω vs f: scopes show frequency f in Hz, but most physics
                math wants ω in rad/s — convert with 2π every time.
              </>
            }
            accentColor="#c026d3"
          />
        </section>

        <WorkedExample
          title="Q9 — slope to resistance"
          accentColor={ACCENT}
          problemStatement={<>The slope of an I-vs-V plot is 0.021 A/V. Find the resistance in ohms.</>}
          steps={[
            {
              heading: "Identify what the slope represents physically",
              body: (
                <>
                  <Why>
                    On a plot with current I (vertical) versus voltage V (horizontal),
                    the slope is rise-over-run: dI/dV. By Ohm's law I = V/R, so
                    differentiating: dI/dV = 1/R. <strong>The slope of an I-vs-V plot
                    equals the conductance G = 1/R</strong> — not the resistance.
                  </Why>
                  <Eq>slope = dI/dV = 1/R = G   (conductance, units: S = A/V)</Eq>
                </>
              ),
            },
            {
              heading: "Invert to get the resistance",
              body: (
                <>
                  <Why>
                    Take the reciprocal of the slope:
                  </Why>
                  <Eq>R = 1 / slope = 1 / (0.021 A/V) ≈ 47.62 Ω</Eq>
                  <Why>
                    Sanity unit check: (A/V)⁻¹ = V/A = Ω. ✓ A small slope means a
                    large R (a stiff resistor barely passes current); a steep slope
                    means a small R. 0.021 A/V is shallow → large-ish R.
                  </Why>
                </>
              ),
              result: { label: "R", value: "47.6 Ω", color: "cyan" },
            },
          ]}
          keyInsight={<>If the plot were V vs I, the slope would equal R directly. Always confirm which axis is which.</>}
        />

        <WorkedExample
          title="Q10 — max power from a 6.79 V, 0.392 A supply"
          accentColor="#10b981"
          problemStatement={
            <>
              A lab power supply is programmed for 6.79 V and 0.392 A. What load resistance
              draws maximum power from this supply?
            </>
          }
          steps={[
            {
              heading: "Compute the supply's effective Thévenin resistance",
              body: (
                <>
                  <Why>
                    A bench supply with a programmed voltage limit V_set and current
                    limit I_limit acts as a constant voltage source up until the load
                    tries to draw more than I_limit. At that crossover point — the
                    "compliance" point — the supply is putting out V_set at I_limit.
                    Treating it as a Thévenin equivalent (ideal voltage source in
                    series with internal resistance):
                  </Why>
                  <Eq>R_source = V_set / I_limit = 6.79 / 0.392 ≈ 17.32 Ω</Eq>
                  <Why>
                    This R_source is the resistance the supply "looks like" to the
                    outside world when operating at the corner of its V-I envelope.
                  </Why>
                </>
              ),
            },
            {
              heading: "Apply the max-power-transfer theorem",
              body: (
                <>
                  <Why>
                    The maximum-power-transfer theorem says: a source with internal
                    resistance R_source delivers maximum power to the load when
                    R_load = R_source. Match them:
                  </Why>
                  <Eq>R_load = R_source ≈ 17.32 Ω</Eq>
                  <Why>
                    Why this is the answer: a load smaller than R_source will draw
                    too much current and the supply's voltage will sag (you can't get
                    more than P = V_set·I_limit / 4 into any load). A load larger than
                    R_source draws too little current. The sweet spot is at R_load =
                    R_source.
                  </Why>
                </>
              ),
              result: { label: "R_load", value: "17.3 Ω", color: "green" },
            },
          ]}
          keyInsight={<>This is the impedance the supply "looks like" to the load. Match it for max P delivered.</>}
        />

        <WorkedExample
          title="Q11 — DMM ohms function (multi-select)"
          accentColor="#c026d3"
          problemStatement={<>Select all true statements about the DMM (34461A) ohms function.</>}
          steps={[
            {
              heading: "(TRUE) Better accuracy with 4-wire at low R",
              body: (
                <>
                  <Why>
                    In standard 2-wire ohms mode, the same probes carry the meter's
                    test current AND sense the voltage. Each lead has its own
                    resistance (~0.1 Ω per lead, plus contact resistance), and that
                    drop is added to the resistance you're trying to measure. For a
                    1 kΩ resistor, 0.2 Ω of lead error is negligible. For a 0.5 Ω
                    shunt resistor, 0.2 Ω of lead error is a 40% mistake.
                  </Why>
                  <Why>
                    <strong>4-wire (Kelvin) mode</strong> uses one pair of probes to
                    force the test current, and a separate pair (with negligible
                    sense current) to read the voltage right at the resistor's
                    terminals. The lead drops on the current pair are bypassed by the
                    sense pair, so they don't enter the calculation.
                  </Why>
                </>
              ),
            },
            {
              heading: "(FALSE) 4-wire works on powered circuits",
              body: (
                <>
                  <Why>
                    The DMM measures resistance by sourcing a small known current
                    through the unknown R and measuring the voltage drop. If your
                    circuit is powered, its own voltage sources fight with the
                    meter's current source, giving meaningless readings (and
                    potentially damaging the meter's input stage). Always
                    de-energize before measuring R.
                  </Why>
                </>
              ),
            },
            {
              heading: "(FALSE) Hazardous voltages on Overload",
              body: (
                <>
                  <Why>
                    "Overload" (or "OL") on the ohms range simply means the
                    resistance is outside the chosen range — bigger than the meter
                    can resolve at that setting. The meter's own test source is a
                    low-current (typically &lt; 1 mA) limited supply, not a
                    high-voltage source. There's nothing dangerous about an OL
                    indication.
                  </Why>
                </>
              ),
            },
            {
              heading: "(TRUE) Built-in current source",
              body: (
                <>
                  <Why>
                    Underneath, the ohms function uses Ohm's law: it forces a known
                    test current I_test through the resistor and measures the
                    resulting voltage V across it. Then R = V / I_test. Different
                    ranges use different test currents (smaller currents on higher
                    R ranges so you don't drop too many volts). This is why you
                    can't measure R on a live circuit — the test current is
                    fundamental to how the function works.
                  </Why>
                </>
              ),
              result: { label: "Correct selections", value: "1 and 4", color: "purple" },
            },
          ]}
          keyInsight={<>Two-wire ohms includes lead R (~0.1 Ω each). Four-wire uses one pair to source current, another to sense V — eliminates the lead contribution.</>}
        />

        <Card className="interactive-panel">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            DMM placement: voltmeter vs ammeter
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            The two ways you wire a DMM are physically different. Voltmeter goes <em>across</em> the
            component (parallel) and must not draw current. Ammeter goes <em>in line</em> (series)
            and must not drop voltage.
          </p>
          <DmmPlacementFig />
        </Card>

        <WorkedExample
          title="Q14 — RMS of bottom trace"
          accentColor={ACCENT}
          figure={
            <ScopeTrace
              width={400}
              height={220}
              vDiv={1}
              tDiv={5e-3}
              signal={(t) => 2 * Math.sin((2 * Math.PI * t) / 20e-3)}
              signal2={(t) => 1.41 * Math.sin((2 * Math.PI * t) / 10e-3 + 0.5)}
            />
          }
          problemStatement={
            <>
              Read V<sub>pp</sub> of the bottom trace from the scope screenshot. Compute RMS.
              For the scope_75 traces from Lab 4/5, V<sub>pp</sub> ≈ 4 V (verify from the gridlines + V/div).
            </>
          }
          steps={[
            {
              heading: "Read V_pp directly off the scope using the V/div setting",
              body: (
                <>
                  <Why>
                    Oscilloscope screens are gridded; each vertical box ("div")
                    represents the voltage shown by the V/div knob. If the trace's
                    peak-to-peak excursion spans N vertical divisions, then V_pp =
                    N × V/div.
                  </Why>
                  <Why>
                    For the scope_75 traces from Lab 4/5, count the vertical
                    distance from the most-positive peak to the most-negative trough
                    of the bottom trace. Multiply by the V/div setting on the bottom-
                    channel knob. The example here: 4 div × 1 V/div = 4 V_pp.
                  </Why>
                  <Eq>V_pp = (vertical divisions peak-to-trough) × (V/div setting)</Eq>
                </>
              ),
            },
            {
              heading: "Convert V_pp to V_rms for a sine wave",
              body: (
                <>
                  <Why>
                    For a pure sine, V(t) = V_p · sin(ωt) where V_p is the peak
                    amplitude and V_pp = 2·V_p. The RMS value is the time-averaged
                    "effective" voltage that produces the same heating in a resistor
                    as a DC voltage of the same value:
                  </Why>
                  <Eq>V_rms = V_p / √2 = (V_pp / 2) / √2 = V_pp / (2√2)</Eq>
                  <Eq>V_rms = 4 / 2.828 ≈ 1.41 V</Eq>
                  <Why>
                    Memorize the "magic number" 2√2 ≈ 2.828. For a sine, dividing
                    V_pp by 2.828 gives RMS. (The 2 is for peak-to-peak → peak; the
                    √2 is for peak → RMS.)
                  </Why>
                </>
              ),
              result: { label: "V_rms", value: "≈ 1.41 V", color: "cyan" },
            },
          ]}
          keyInsight={
            <>
              The exact answer depends on the V/div setting your TA used. Open the scope image,
              count divisions, multiply, divide by 2√2.
            </>
          }
        />

        <WorkedExample
          title="Q15 — angular frequency of top trace"
          accentColor="#c026d3"
          figure={
            <ScopeTrace
              width={400}
              height={220}
              vDiv={2}
              tDiv={5e-3}
              signal={(t) => 2 * Math.sin((2 * Math.PI * t) / 20e-3)}
            />
          }
          problemStatement={
            <>
              Read the period from the gridlines + t/div, convert to angular frequency.
              ω = 2πf = 2π/T.
            </>
          }
          steps={[
            {
              heading: "Read the period T from the scope using the t/div setting",
              body: (
                <>
                  <Why>
                    Each horizontal box on the scope screen represents the time set
                    by the time-per-division knob. To read the period, find one full
                    cycle of the waveform on screen (e.g. zero-crossing to next
                    zero-crossing in the same direction, or peak to peak), count the
                    horizontal divisions it covers, and multiply by t/div.
                  </Why>
                  <Eq>T = (horizontal divisions per cycle) × (t/div setting)</Eq>
                  <Why>
                    Example: if the trace covers 4 horizontal divisions per cycle
                    and the knob is on 5 ms/div:
                  </Why>
                  <Eq>T = 4 · 5 ms = 20 ms = 0.020 s</Eq>
                </>
              ),
            },
            {
              heading: "Convert period to angular frequency",
              body: (
                <>
                  <Why>
                    Frequency f (Hz) is cycles per second: f = 1/T. Angular
                    frequency ω (rad/s) is "radians of phase swept per second";
                    since one cycle = 2π radians, ω = 2π · f = 2π / T:
                  </Why>
                  <Eq>ω = 2π / T = 2π / 0.020 = 6.283 / 0.020 ≈ 314.2 rad/s</Eq>
                  <Why>
                    Sanity: f = 1/0.020 = 50 Hz, and ω = 2π · 50 ≈ 314 rad/s. ✓
                  </Why>
                </>
              ),
              result: { label: "ω", value: "≈ 314 rad/s", color: "purple" },
            },
          ]}
          keyInsight={<>If your trace shows 1 ms per cycle, ω = 2π/0.001 = 6283 rad/s. Always read T off the screen first.</>}
        />

        <section>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Drill — variant problems</h3>
          <div className="space-y-4">
            <PracticeProblem
              title="Variant: I-V slope"
              accentColor={ACCENT}
              statement={<>Slope of I vs V is 0.005 A/V.</>}
              parts={[
                {
                  label: "(a)",
                  question: "Find R.",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Slope of an I-vs-V plot equals the conductance G = 1/R, so
                        the resistance is the reciprocal of the slope:
                      </p>
                      <Eq>R = 1 / slope = 1 / 0.005 A/V = 200 V/A = 200 Ω</Eq>
                      <p>
                        A small slope (just 5 mA per volt) means a large resistance
                        — the resistor barely passes any current per applied volt.
                      </p>
                    </div>
                  ),
                  answer: { value: "200 Ω" },
                },
              ]}
            />
            <PracticeProblem
              title="Variant: max power match"
              accentColor="#10b981"
              statement={<>A supply is set to 12 V, 1.5 A.</>}
              parts={[
                {
                  label: "(a)",
                  question: "What R draws maximum power?",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        The supply's effective Thévenin source resistance at the
                        compliance corner equals V_set / I_limit:
                      </p>
                      <Eq>R_source = 12 V / 1.5 A = 8 Ω</Eq>
                      <p>
                        Max-power-transfer theorem says R_load should match
                        R_source for maximum power delivery, so:
                      </p>
                      <Eq>R_load = R_source = 8 Ω</Eq>
                    </div>
                  ),
                  answer: { value: "8 Ω" },
                },
              ]}
            />
            <PracticeProblem
              title="Variant: sine RMS"
              accentColor="#c026d3"
              statement={<>A scope shows a sine wave with V_pp = 6 V at 60 Hz.</>}
              parts={[
                {
                  label: "(a)",
                  question: "V_rms?",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        For a pure sine, V_rms = V_pp / (2√2). The factor of 2
                        converts peak-to-peak into peak; the √2 converts peak into
                        RMS:
                      </p>
                      <Eq>V_rms = V_pp / (2√2) = 6 / 2.828 ≈ 2.121 V</Eq>
                      <p>
                        Same as 6/2 = 3 V peak, then 3/√2 = 2.12 V RMS — equivalent
                        order-of-operations.
                      </p>
                    </div>
                  ),
                  answer: { value: "2.12 V" },
                },
                {
                  label: "(b)",
                  question: "ω?",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Angular frequency converts cycles-per-second to
                        radians-per-second by multiplying by 2π:
                      </p>
                      <Eq>ω = 2π · f = 2π · 60 = 376.99 rad/s ≈ 377 rad/s</Eq>
                      <p>
                        377 rad/s is a standard mental anchor for North American
                        AC mains (60 Hz). For 50 Hz mains (most of the rest of the
                        world), ω = 314 rad/s.
                      </p>
                    </div>
                  ),
                  answer: { value: "377 rad/s" },
                },
              ]}
            />
          </div>
        </section>

        <section>
          <Card className="p-6 border-l-4 border-l-amber-500">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Common traps</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200 space-y-1">
              <li>Slope of I-vs-V = 1/R, NOT R. Slope of V-vs-I = R.</li>
              <li>RMS for a sine: divide V_pp by 2√2 (≈ 2.828), not by 2.</li>
              <li>ω is in rad/s, f in Hz. ω = 2π·f. Don't forget the 2π.</li>
              <li>4-wire ohms: ALL FOUR PROBES on the resistor; current pair outside, sense pair inside.</li>
              <li>Power supply current limit IS its source impedance under max-power conditions.</li>
            </ul>
          </Card>
        </section>
      </div>
    </div>
  );
}
