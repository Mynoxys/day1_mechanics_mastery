import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, RotateCcw } from "lucide-react";
import { Link } from "wouter";
import { Matching } from "@/components/ee/Matching";
import { CircuitSchematic } from "@/components/ee/CircuitSchematic";
import { FormulaBlock } from "@/components/midterm/FormulaBlock";
import { WorkedExample, Eq, Why } from "@/components/midterm/WorkedExample";
import { PracticeProblem } from "@/components/midterm/PracticeProblem";

const ACCENT = "#0ea5e9";

function RcLowPassFig() {
  return (
    <CircuitSchematic
      width={280}
      height={170}
      noGrid
      wires={[
        { x1: 30, y1: 90, x2: 30, y2: 50 },
        { x1: 30, y1: 50, x2: 80, y2: 50 },
        { x1: 110, y1: 50, x2: 200, y2: 50 },
        { x1: 200, y1: 50, x2: 200, y2: 70 },
        { x1: 200, y1: 100, x2: 200, y2: 130 },
        { x1: 200, y1: 50, x2: 250, y2: 50 },
        { x1: 30, y1: 120, x2: 30, y2: 140 },
        { x1: 30, y1: 140, x2: 200, y2: 140 },
      ]}
      components={[
        { kind: "V", x: 30, y: 105, label: "V1 1V_AC", color: "#f59e0b", labelPos: "left" },
        { kind: "R", x: 95, y: 50, label: "R1 1k", color: "#10b981" },
        { kind: "C", x: 200, y: 85, label: "C1 1µ", color: "#06b6d4", labelPos: "right" },
        { kind: "DOT", x: 200, y: 50, color: "#06b6d4" },
        { kind: "TEXT", x: 252, y: 42, label: "out", color: "#06b6d4", value: "11" },
        { kind: "GND", x: 115, y: 140 },
      ]}
    />
  );
}

function SpiceOutputThumb({
  kind,
  width = 130,
  height = 90,
}: {
  kind: "tran" | "ac" | "dc" | "op";
  width?: number;
  height?: number;
}) {
  const padL = 18;
  const padB = 14;
  const innerW = width - padL - 6;
  const innerH = height - padB - 8;
  const xAxis = (label: string) => (
    <text x={padL + innerW / 2} y={height - 2} fontSize={8} fill="#475569" textAnchor="middle" fontFamily="monospace">
      {label}
    </text>
  );
  const path =
    kind === "tran"
      ? Array.from({ length: 30 }, (_, k) => {
          const t = k / 29;
          const v = 1 - Math.exp(-3 * t);
          const x = padL + t * innerW;
          const y = 8 + innerH - v * innerH;
          return `${k === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
        }).join(" ")
      : kind === "ac"
        ? Array.from({ length: 30 }, (_, k) => {
            const f = k / 29;
            const v = 1 / Math.sqrt(1 + Math.pow(10 * f, 2));
            const x = padL + f * innerW;
            const y = 8 + innerH - v * innerH;
            return `${k === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
          }).join(" ")
        : kind === "dc"
          ? Array.from({ length: 30 }, (_, k) => {
              const v = k / 29;
              const i = v < 0.6 ? 0 : Math.pow((v - 0.6) * 4, 2);
              const x = padL + v * innerW;
              const y = 8 + innerH - Math.min(i, 1) * innerH;
              return `${k === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
            }).join(" ")
          : "";
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="bg-white dark:bg-slate-900/60 rounded border border-slate-200 dark:border-slate-700">
      <line x1={padL} y1={8} x2={padL} y2={8 + innerH} stroke="#475569" strokeWidth={1} />
      <line x1={padL} y1={8 + innerH} x2={padL + innerW} y2={8 + innerH} stroke="#475569" strokeWidth={1} />
      {kind !== "op" && <path d={path} fill="none" stroke="#0ea5e9" strokeWidth={1.5} />}
      {kind === "op" && (
        <text x={width / 2} y={height / 2 + 4} fontSize={10} fill="#475569" textAnchor="middle" fontFamily="monospace">
          [single point]
        </text>
      )}
      {kind === "tran" && xAxis("time")}
      {kind === "ac" && xAxis("freq (log)")}
      {kind === "dc" && xAxis("V_swept")}
      {kind === "op" && xAxis("(no x)")}
    </svg>
  );
}

const leftItems = [".tran (transient)", ".ac (frequency sweep)", ".dc (DC sweep)", ".op (operating point)"];
const correctMapping = ["time", "frequency", "voltage (or current)", "none"];
const rightOptions = ["none", "time", "voltage (or current)", "frequency"];

export default function SpiceSimulation() {
  const [selections, setSelections] = useState<(string | null)[]>(
    leftItems.map(() => null)
  );
  const [graded, setGraded] = useState(false);

  const onChange = (idx: number, value: string | null) => {
    setSelections((prev) => prev.map((p, i) => (i === idx ? value : p)));
  };

  const correctCount = selections.filter((s, i) => s === correctMapping[i]).length;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/ee">
            <Button variant="ghost" className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <ChevronLeft className="w-5 h-5" /> Back to ESE 123
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">SPICE Simulation</h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container py-12 space-y-12">
        <section>
          <span className="inline-block bg-sky-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-3">
            CLUSTER 7 · Q8
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            .tran / .ac / .dc / .op — what's on the x-axis?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            From Prelabs 4-5: each SPICE simulation type produces a different kind of plot.
            The x-axis is the variable being swept (or "none" for a single operating point).
          </p>
        </section>

        <Card className="interactive-panel" style={{ borderLeftWidth: 4, borderLeftColor: ACCENT }}>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
            Schematic ↔ netlist (RC low-pass)
          </h3>
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="flex justify-center">
              <RcLowPassFig />
            </div>
            <pre className="text-[11px] bg-slate-900 text-emerald-200 p-3 rounded leading-tight overflow-x-auto">
{`* RC low-pass filter
V1 in 0 AC 1
R1 in out 1k
C1 out 0 1u
.ac dec 20 1 100k
.tran 0 5m
.dc V1 0 5 0.1
.op
.end`}
            </pre>
          </div>
          <div className="grid grid-cols-4 gap-3 mt-4 text-center">
            <div>
              <SpiceOutputThumb kind="tran" />
              <div className="text-[11px] mt-1 font-mono text-gray-700 dark:text-gray-200">.tran → time</div>
            </div>
            <div>
              <SpiceOutputThumb kind="ac" />
              <div className="text-[11px] mt-1 font-mono text-gray-700 dark:text-gray-200">.ac → freq</div>
            </div>
            <div>
              <SpiceOutputThumb kind="dc" />
              <div className="text-[11px] mt-1 font-mono text-gray-700 dark:text-gray-200">.dc → V_sweep</div>
            </div>
            <div>
              <SpiceOutputThumb kind="op" />
              <div className="text-[11px] mt-1 font-mono text-gray-700 dark:text-gray-200">.op → table</div>
            </div>
          </div>
        </Card>

        <section className="grid md:grid-cols-2 gap-4">
          <FormulaBlock
            name=".tran transient"
            formula={<><code>.tran 0 1ms 0</code></>}
            variables={[
              {
                symbol: "x-axis",
                meaning:
                  "time — what's happening at each moment, plotted moment by moment",
              },
              {
                symbol: "y-axis",
                meaning:
                  "any node voltage or branch current you ask SPICE to record (V(node), I(R1), etc.)",
              },
            ]}
            whenToUse={
              <>
                Watch how the circuit evolves over time — like an oscilloscope
                trace. Use this when timing matters: how quickly an RC charges,
                what an oscillator's waveform looks like, how a switch changes
                voltage at a node, what a digital pulse looks like at the
                output. The arguments are <code>.tran &lt;step&gt; &lt;stop&gt;
                &lt;start&gt;</code> — start at 0, simulate up to stop, output
                points spaced by step.
              </>
            }
            accentColor="#10b981"
          />
          <FormulaBlock
            name=".ac frequency sweep"
            formula={<><code>.ac dec 10 0.1 1k</code></>}
            variables={[
              {
                symbol: "x-axis",
                meaning:
                  "frequency (log scale, since circuits respond differently across many decades)",
              },
              {
                symbol: "y-axis",
                meaning:
                  "magnitude (often in dB) and phase shift of every node voltage relative to the input AC source",
              },
            ]}
            whenToUse={
              <>
                Use when you want to know how the circuit responds to sinusoids
                across a range of frequencies — <em>not</em> a time-domain
                trace, but a steady-state Bode plot. Find filter cutoff
                frequencies (the −3 dB point), op-amp gain bandwidth product,
                resonance peaks of LC circuits. <code>dec 10</code> means 10
                points per decade; <code>0.1 1k</code> means sweep from 0.1 Hz
                to 1 kHz.
              </>
            }
            accentColor={ACCENT}
          />
          <FormulaBlock
            name=".dc DC sweep"
            formula={<><code>.dc V1 0 5 0.1</code></>}
            variables={[
              {
                symbol: "x-axis",
                meaning:
                  "the source you're sweeping (voltage source's V, or current source's I) — NOT time, NOT frequency",
              },
              {
                symbol: "y-axis",
                meaning:
                  "any node voltage or branch current at each value of the swept source",
              },
            ]}
            whenToUse={
              <>
                Hold time still and slowly walk a DC source across a range,
                recording the steady-state circuit at each point. Used to plot
                a diode's I-V curve, an op-amp's transfer function (V_out vs
                V_in), or transistor characteristic curves. Args: source name,
                start, stop, step.
              </>
            }
            accentColor="#f59e0b"
          />
          <FormulaBlock
            name=".op operating point"
            formula={<><code>.op</code></>}
            variables={[
              {
                symbol: "x-axis",
                meaning:
                  "none — there's no sweep variable. .op produces a SINGLE point answer, not a plot",
              },
              {
                symbol: "result",
                meaning:
                  "every node voltage and every branch current at the circuit's quiescent (DC, no signal) state",
              },
            ]}
            whenToUse={
              <>
                Sanity check before any other simulation: 'where does this
                circuit sit when nothing is happening?' For a transistor amp
                you check the bias point; for a digital circuit you check
                quiescent leakage; for a power supply you check the regulated
                output. If .op gives nonsense, the rest of your simulations
                will too — fix the bias before chasing AC behavior.
              </>
            }
            accentColor="#c026d3"
          />
        </section>

        <Card className="interactive-panel" style={{ borderLeftWidth: 4, borderLeftColor: ACCENT }}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Q8 — match each simulation to its x-axis
          </h3>
          <Matching
            leftItems={leftItems}
            rightOptions={rightOptions}
            selections={selections}
            onChange={onChange}
            correctMapping={correctMapping}
            graded={graded}
            accentColor={ACCENT}
          />
          <div className="mt-4 flex items-center gap-3">
            {!graded ? (
              <Button
                onClick={() => setGraded(true)}
                disabled={selections.some((s) => !s)}
                style={{ backgroundColor: ACCENT }}
                className="text-white"
              >
                Check Answers
              </Button>
            ) : (
              <>
                <span className="font-mono text-sm">
                  Score: {correctCount}/{leftItems.length}
                </span>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelections(leftItems.map(() => null));
                    setGraded(false);
                  }}
                >
                  <RotateCcw className="w-4 h-4 mr-1" /> Try again
                </Button>
              </>
            )}
          </div>
        </Card>

        <WorkedExample
          title="Q8 — explained"
          accentColor={ACCENT}
          problemStatement={<>Match SPICE simulation type to the variable on the x-axis of the resulting graph.</>}
          steps={[
            {
              heading: ".tran — transient (time-domain) analysis",
              body: (
                <>
                  <Why>
                    A <code>.tran</code> command tells SPICE to numerically integrate
                    the circuit's differential equations forward in time, starting
                    from initial conditions. The result is a time-series of every
                    node voltage and branch current. Use this to watch capacitors
                    charge, observe ringing, see oscillator startup, etc.
                  </Why>
                  <Eq>x-axis = time   (e.g. seconds, milliseconds)</Eq>
                  <Eq>example syntax: .tran 0 1ms 0   (run from t=0 to 1 ms)</Eq>
                </>
              ),
            },
            {
              heading: ".ac — frequency (small-signal) analysis",
              body: (
                <>
                  <Why>
                    A <code>.ac</code> sweep linearizes the circuit around its DC
                    operating point and computes the steady-state magnitude/phase
                    response at each test frequency. SPICE varies the source
                    frequency (typically over decades) and reports complex
                    impedances/transfer functions at each step. Use this for filter
                    Bode plots, gain bandwidth, resonance peaks.
                  </Why>
                  <Eq>x-axis = frequency   (usually log scale, in Hz)</Eq>
                  <Eq>example syntax: .ac dec 10 0.1 1k   (10 pts/decade, 0.1 Hz to 1 kHz)</Eq>
                </>
              ),
            },
            {
              heading: ".dc — DC parameter sweep",
              body: (
                <>
                  <Why>
                    A <code>.dc</code> sweep steps a chosen DC source (or
                    parameter) through a range of values, solving the steady-state
                    equations at each step. The x-axis is the swept variable, not
                    time. The classic use case is plotting a diode's I-V curve, or
                    an MOSFET's transfer characteristics.
                  </Why>
                  <Eq>x-axis = swept voltage (or current)   (V or A, units of the source)</Eq>
                  <Eq>example syntax: .dc V1 0 5 0.1   (V1 from 0 to 5 V in 0.1 V steps)</Eq>
                </>
              ),
            },
            {
              heading: ".op — operating-point (DC bias) analysis",
              body: (
                <>
                  <Why>
                    The <code>.op</code> command finds a single equilibrium DC
                    solution: every node voltage and every branch current at the
                    quiescent ("Q-point") state with all sources at their nominal
                    DC values. It produces just a table of numbers, not a graph at
                    all — there's nothing being swept.
                  </Why>
                  <Eq>x-axis = none   (output is a single text table)</Eq>
                  <Eq>example syntax: .op</Eq>
                </>
              ),
              result: {
                label: "Pairings",
                value: "tran→time, ac→frequency, dc→voltage, op→none",
                color: "cyan",
              },
            },
          ]}
          keyInsight={<>Mnemonic: Time, Frequency, Voltage sweep, Operating point. The first three are sweeps; the last is one snapshot.</>}
        />

        <section>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Drill — variant problems</h3>
          <div className="space-y-4">
            <PracticeProblem
              title="Variant: which simulation?"
              accentColor={ACCENT}
              statement="You want to plot the cutoff frequency of an RC low-pass filter."
              parts={[
                {
                  label: "(a)",
                  question: "Which SPICE command?",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        "Cutoff frequency" is a property of the filter's frequency
                        response — the frequency at which |H(jω)| drops by 3 dB
                        (about 0.707×) compared to the passband. To see the
                        magnitude as a function of frequency, you need to sweep the
                        frequency of an AC source. That's exactly what <code>.ac</code>
                        does.
                      </p>
                      <Eq>example: .ac dec 10 1 100k   (decade sweep, 1 Hz to 100 kHz)</Eq>
                      <p>
                        Then plot the output magnitude in dB and find where it
                        crosses −3 dB.
                      </p>
                    </div>
                  ),
                  answer: { value: ".ac" },
                },
              ]}
            />
            <PracticeProblem
              title="Variant: I-V of a diode"
              accentColor="#f59e0b"
              statement="You want to plot a diode's I vs V from −0.2 V to 0.7 V."
              parts={[
                {
                  label: "(a)",
                  question: "Which SPICE command?",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        An I-V curve plots a current as a function of a swept DC
                        voltage. That's a DC sweep, so <code>.dc</code> is the
                        right command. We tell it which source to sweep, the
                        start, the end, and the step size:
                      </p>
                      <Eq>.dc V1 -0.2 0.7 0.01   (V1 from −0.2 V to +0.7 V, 10 mV steps)</Eq>
                      <p>
                        SPICE solves the circuit at each step and you plot the
                        diode current versus V1.
                      </p>
                    </div>
                  ),
                  answer: { value: ".dc" },
                },
              ]}
            />
            <PracticeProblem
              title="Variant: bias point only"
              accentColor="#c026d3"
              statement="You want to know all node voltages at the resting state of a transistor amp."
              parts={[
                {
                  label: "(a)",
                  question: "Which SPICE command?",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        "Resting state" = quiescent operating point (the Q-point):
                        a single DC equilibrium with no AC excitation. No sweeping
                        is needed — you just want the numbers at one bias
                        configuration. That's <code>.op</code>:
                      </p>
                      <Eq>.op</Eq>
                      <p>
                        The output is a text table listing every node voltage and
                        every component's quiescent current. Useful for verifying
                        a transistor's V_BE, V_CE, and I_C are in the active
                        region before doing further analysis.
                      </p>
                    </div>
                  ),
                  answer: { value: ".op" },
                },
              ]}
            />
          </div>
        </section>

        <section>
          <Card className="p-6 border-l-4 border-l-amber-500">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Common traps</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200 space-y-1">
              <li>.ac is for AC <em>frequency</em>, not "AC voltage at one point."</li>
              <li>.dc is a sweep, not a static analysis. .op is the static one.</li>
              <li>.op produces no graph — only a text dump of node V and branch I.</li>
              <li>Don't confuse .tran (time-domain) with .ac (frequency-domain). Different physics.</li>
            </ul>
          </Card>
        </section>
      </div>
    </div>
  );
}
