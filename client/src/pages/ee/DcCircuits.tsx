import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { LiveValue } from "@/components/ee/LiveValue";
import { CircuitSchematic } from "@/components/ee/CircuitSchematic";
import { FormulaBlock } from "@/components/midterm/FormulaBlock";
import { WorkedExample, Eq, Why } from "@/components/midterm/WorkedExample";
import { PracticeProblem } from "@/components/midterm/PracticeProblem";
import {
  DividerWithDmm,
  DividerThenThreeParallel,
  TwoSourceLoopWithR,
} from "./MidtermFigures";

const ACCENT = "#10b981";
const DMM_INPUT_IMPEDANCE_MOHM = 10;

export default function DcCircuits() {
  const [v1, setV1] = useState(7.6);
  const [r1, setR1] = useState(20.9); // kΩ
  const [r2, setR2] = useState(10.2); // kΩ
  const [dmmLoading, setDmmLoading] = useState(false);
  const [highImpedance, setHighImpedance] = useState(false);

  const r1Eff = highImpedance ? r1 * 1000 : r1; // kΩ; if MΩ then *1000
  const r2Eff = highImpedance ? r2 * 1000 : r2;
  const dmm_kOhm = DMM_INPUT_IMPEDANCE_MOHM * 1000;

  const r2Loaded = dmmLoading
    ? (r2Eff * dmm_kOhm) / (r2Eff + dmm_kOhm)
    : r2Eff;
  const vOut = (v1 * r2Loaded) / (r1Eff + r2Loaded);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/ee">
            <Button variant="ghost" className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <ChevronLeft className="w-5 h-5" /> Back to ESE 123
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            DC Circuit Analysis
          </h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container py-12 space-y-12">
        <section>
          <span className="inline-block bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-3">
            CLUSTER 3 · Q12 Q13 Q16 Q17
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Voltage Dividers, KVL, and DMM Loading
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            The most common pitfall: forgetting that the DMM has a finite input impedance
            (10 MΩ on a 34461A). When divider resistors are comparable to or larger than 10 MΩ,
            the meter <strong>loads down</strong> the node it's measuring — you read a smaller voltage
            than the true open-circuit value. Use the toggle below to see this effect.
          </p>
        </section>

        <section className="grid md:grid-cols-5 gap-8">
          <Card className="md:col-span-3 interactive-panel space-y-4">
            <CircuitSchematic
              width={420}
              height={260}
              wires={[
                { x1: 60, y1: 60, x2: 60, y2: 200 },   // left rail
                { x1: 60, y1: 60, x2: 220, y2: 60 },   // top
                { x1: 220, y1: 60, x2: 220, y2: 100 }, // R1 top
                { x1: 220, y1: 130, x2: 220, y2: 170 },// between R1 and R2
                { x1: 220, y1: 200, x2: 220, y2: 220 },// R2 bottom
                { x1: 60, y1: 220, x2: 220, y2: 220 },// bottom rail to GND
                { x1: 220, y1: 150, x2: 320, y2: 150 },// out
              ]}
              components={[
                { kind: "V", x: 60, y: 130, label: `V1 = ${v1.toFixed(2)} V` },
                { kind: "R", x: 220, y: 115, label: `R1 = ${r1.toFixed(1)}${highImpedance ? "MΩ" : "kΩ"}` },
                { kind: "R", x: 220, y: 185, label: `R2 = ${r2.toFixed(1)}${highImpedance ? "MΩ" : "kΩ"}` },
                { kind: "NODE", x: 220, y: 150, label: "X" },
                { kind: "GND", x: 220, y: 220 },
                { kind: "NODE", x: 320, y: 150, label: dmmLoading ? "DMM" : "" },
              ]}
            />
            <div className="grid grid-cols-3 gap-3">
              <LiveValue label="V at X" value={vOut.toFixed(3)} unit="V" accentColor={ACCENT} size="lg" />
              <LiveValue
                label="R2 effective"
                value={r2Loaded.toFixed(3)}
                unit={highImpedance ? "kΩ (=" + (r2Loaded / 1000).toFixed(2) + " MΩ)" : "kΩ"}
                accentColor="#06b6d4"
                size="sm"
              />
              <LiveValue
                label="Loading"
                value={dmmLoading ? `${(((r2Eff - r2Loaded) / r2Eff) * 100).toFixed(1)}%` : "off"}
                accentColor="#ef4444"
                size="sm"
              />
            </div>
          </Card>

          <Card className="md:col-span-2 interactive-panel space-y-5">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Controls</h3>
            <div className="space-y-3">
              <div>
                <Label className="text-xs">V1 (V): {v1.toFixed(2)}</Label>
                <Slider min={0} max={12} step={0.1} value={[v1]} onValueChange={(v) => setV1(v[0])} />
              </div>
              <div>
                <Label className="text-xs">R1 ({highImpedance ? "MΩ" : "kΩ"}): {r1.toFixed(1)}</Label>
                <Slider min={0.1} max={50} step={0.1} value={[r1]} onValueChange={(v) => setR1(v[0])} />
              </div>
              <div>
                <Label className="text-xs">R2 ({highImpedance ? "MΩ" : "kΩ"}): {r2.toFixed(1)}</Label>
                <Slider min={0.1} max={50} step={0.1} value={[r2]} onValueChange={(v) => setR2(v[0])} />
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Switch checked={highImpedance} onCheckedChange={setHighImpedance} />
                <Label className="text-sm">High-impedance (MΩ scale, like Q13)</Label>
              </div>
              <div className="flex items-center gap-3">
                <Switch checked={dmmLoading} onCheckedChange={setDmmLoading} />
                <Label className="text-sm">Connect DMM (10 MΩ input)</Label>
              </div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 border-t pt-3">
              Try Q12 preset: 7.6 V, R1=20.9 kΩ, R2=10.2 kΩ, DMM off → 2.49 V.<br />
              Try Q13 preset: 7.2 V, R1=29.8, R2=14.3, MΩ on, DMM on → ~1.19 V.
            </div>
          </Card>
        </section>

        <section className="grid md:grid-cols-3 gap-4">
          <FormulaBlock
            name="Voltage divider"
            formula={<>V<sub>out</sub> = V<sub>in</sub> · R<sub>2</sub> / (R<sub>1</sub> + R<sub>2</sub>)</>}
            variables={[
              {
                symbol: "R1",
                meaning:
                  "the resistor on top — between V_in and the output node we're measuring",
              },
              {
                symbol: "R2",
                meaning:
                  "the resistor on the bottom — between the output node and ground",
              },
            ]}
            whenToUse={
              <>
                Two resistors in series across a voltage source: V_in falls
                across them in proportion to their resistances. The output
                fraction R₂/(R₁+R₂) is "what fraction of the total resistance
                is below the tap point" — that's the fraction of V_in that
                appears at the tap. Sanity check: if R₁ = R₂, V_out = V_in/2;
                if R₂ ≫ R₁, almost all the voltage appears at V_out; if R₂ = 0
                (short to ground), V_out = 0.
              </>
            }
            accentColor={ACCENT}
          />
          <FormulaBlock
            name="DMM loading"
            formula={<>R<sub>2,eff</sub> = R<sub>2</sub> ∥ R<sub>DMM</sub> = R<sub>2</sub>·10MΩ / (R<sub>2</sub>+10MΩ)</>}
            variables={[
              {
                symbol: "R_DMM",
                meaning:
                  "the DMM's input resistance in V mode (10 MΩ for the 34461A in our lab)",
              },
              {
                symbol: "∥",
                meaning:
                  "parallel combination of two resistors — when current can flow through either path",
              },
            ]}
            whenToUse={
              <>
                Connecting a real DMM across R₂ adds a 10 MΩ resistor in
                parallel with R₂, slightly lowering the effective bottom-leg
                resistance — and shifting V_out down. Loading matters when R₂
                is comparable to the DMM's input resistance. Rule of thumb: if
                R₂ ≪ 100 kΩ, loading is &lt;1% and you can ignore it. Once R₂
                is up in the hundreds of kΩ or MΩ, you HAVE to use R₂_eff. This
                is where the lab Q13 trap lives.
              </>
            }
            accentColor="#06b6d4"
          />
          <FormulaBlock
            name="Parallel combination"
            formula={<>1/R<sub>p</sub> = 1/R<sub>a</sub> + 1/R<sub>b</sub> + 1/R<sub>c</sub></>}
            variables={[
              {
                symbol: "R_p",
                meaning:
                  "equivalent resistance of the parallel combination — what a single resistor would need to be to replace the whole bunch",
              },
            ]}
            whenToUse={
              <>
                Multiple branches between the same two nodes share the current.
                Conductances (1/R) add. The result is always SMALLER than the
                smallest individual branch — adding more paths makes it easier
                to flow. Special case: two resistors in parallel is{" "}
                R_p = R_a·R_b / (R_a + R_b) (the "product over sum" shortcut).
                For N identical R's: R_p = R/N.
              </>
            }
            accentColor="#c026d3"
          />
        </section>

        <WorkedExample
          title="Q12 — voltage divider, no loading"
          accentColor={ACCENT}
          problemStatement={
            <>
              V1 = 7.6 V, R1 = 20.9 kΩ, R2 = 10.2 kΩ. Find the potential of node X relative to ground.
              (Resistors are kΩ — DMM loading is negligible at this scale.)
            </>
          }
          steps={[
            {
              heading: "Recognize the topology — this is a basic two-resistor divider",
              body: (
                <>
                  <Why>
                    The circuit is V1 → R1 → node X → R2 → ground. Whenever you have
                    two resistors in series spanning a voltage source with a node tapped
                    in the middle, the voltage at that middle node (relative to ground)
                    follows the <strong>voltage-divider formula</strong>:
                  </Why>
                  <Eq>V_X = V_in · R2 / (R1 + R2)</Eq>
                  <Why>
                    <strong>Where this comes from:</strong> the same current I flows
                    through R1 and R2 (since they're in series). By Ohm's law, I = V_in
                    / (R1 + R2). The voltage drop across R2 is I · R2 = V_in · R2 / (R1
                    + R2). Since R2 is on the ground side, that drop equals V_X.
                  </Why>
                  <Why>
                    <strong>Why R2 in the numerator</strong> (and not R1)? V_X is the
                    voltage measured <em>across R2</em>. R2 is the bottom resistor — the
                    one whose drop determines how high above ground node X sits. Memory
                    aid: "the bottom resistor's name goes on top."
                  </Why>
                </>
              ),
            },
            {
              heading: "Plug in the numbers",
              body: (
                <>
                  <Why>
                    With V1 = 7.6 V, R1 = 20.9 kΩ, R2 = 10.2 kΩ. Note that the kΩ
                    units cancel in the ratio R2/(R1+R2), so we can use them directly:
                  </Why>
                  <Eq>V_X = 7.6 · 10.2 / (20.9 + 10.2) = 7.6 · 10.2 / 31.1</Eq>
                  <Eq>V_X = 7.6 · 0.328 ≈ 2.49 V</Eq>
                  <Why>
                    Sanity: R2 is about 1/3 of the total resistance, so V_X should be
                    about 1/3 of V1. Indeed 2.49/7.6 ≈ 0.328. ✓
                  </Why>
                </>
              ),
              result: { label: "V_X", value: "2.49 V", color: "green" },
            },
          ]}
          keyInsight={<>At kΩ scale, the 10 MΩ DMM is ~1000× larger and barely perturbs the divider. Pure formula works.</>}
        />

        <WorkedExample
          title="Q13 — voltage divider, with DMM loading"
          accentColor="#06b6d4"
          figure={<DividerWithDmm v={7.2} r1={29.8} r2={14.3} rDmm={10} unit="MΩ" />}
          problemStatement={
            <>
              V1 = 7.2 V, R1 = 29.8 <strong>MΩ</strong>, R2 = 14.3 <strong>MΩ</strong>. Find the
              voltage at X <em>as measured by your 34461A DMM</em> (input impedance 10 MΩ).
            </>
          }
          steps={[
            {
              heading: "Why the DMM changes the answer — model its input impedance",
              body: (
                <>
                  <Why>
                    A digital multimeter (DMM) doesn't just observe the node — it
                    <strong> draws current</strong> through its input impedance. For the
                    34461A on a voltage range, that input impedance is roughly 10 MΩ.
                    When you connect the DMM probes between node X and ground, the meter
                    appears as a 10 MΩ resistor in <strong>parallel</strong> with R2.
                  </Why>
                  <Why>
                    With megohm-scale resistors in the divider (here R1 = 29.8 MΩ, R2 =
                    14.3 MΩ), the meter is comparable to the divider resistors. The
                    parallel combination R2 ∥ R_DMM is significantly smaller than R2
                    alone, so the divider's bottom-leg resistance shrinks and V_X drops.
                  </Why>
                  <Why>
                    <strong>Compute R₂,eff = R2 ∥ R_DMM</strong>. The two-resistor
                    parallel formula is R_p = (R_a · R_b) / (R_a + R_b):
                  </Why>
                  <Eq>R_2,eff = (R2 · R_DMM) / (R2 + R_DMM) = (14.3 · 10) / (14.3 + 10)</Eq>
                  <Eq>R_2,eff = 143 / 24.3 ≈ 5.885 MΩ</Eq>
                  <Why>
                    R2 dropped from 14.3 MΩ to about 5.9 MΩ — less than half of its
                    nominal value. Big deal.
                  </Why>
                </>
              ),
            },
            {
              heading: "Apply the divider formula with the loaded R₂,eff",
              body: (
                <>
                  <Why>
                    Now the circuit looks like a normal two-resistor divider, but with
                    R2 replaced by R_2,eff. Use V_X = V_in · R_2,eff / (R1 + R_2,eff):
                  </Why>
                  <Eq>V_X = 7.2 · 5.885 / (29.8 + 5.885) = 7.2 · 5.885 / 35.685</Eq>
                </>
              ),
            },
            {
              heading: "Compute and compare to the no-meter reading",
              body: (
                <>
                  <Eq>V_X = 7.2 · 0.1649 ≈ 1.187 V</Eq>
                  <Why>
                    <strong>Compare to the unloaded answer:</strong> without the DMM
                    connected, V_X would have been 7.2 · 14.3 / (29.8 + 14.3) = 7.2 ·
                    0.324 ≈ 2.33 V. The meter pulls it down to 1.19 V — a roughly 49%
                    error caused by the act of measuring.
                  </Why>
                  <Why>
                    This is the famous "the meter affects the measurement" trap. The
                    fix: use a high-input-impedance buffer (an op-amp voltage follower)
                    between the node and the DMM to isolate them.
                  </Why>
                </>
              ),
              result: { label: "V_X (measured)", value: "1.19 V", color: "cyan" },
            },
          ]}
          keyInsight={<>Anytime you measure a high-impedance node, the DMM "loads" it. Use a buffer (op-amp follower) to measure without disturbing.</>}
        />

        <WorkedExample
          title="Q16 — multi-resistor network"
          accentColor="#c026d3"
          figure={<DividerThenThreeParallel v={5} r1={400} r2={1500} r3={1700} r4={1300} />}
          problemStatement={
            <>
              V1 = 5.0 V, R1 = 400 Ω, R2 = 1500 Ω, R3 = 1700 Ω, R4 = 1300 Ω. Find V at point A.
              (Standard topology: V1 → R1 → node A → three parallel branches R2, R3, R4 → GND.)
            </>
          }
          steps={[
            {
              heading: "Identify the three parallel branches and combine them",
              body: (
                <>
                  <Why>
                    Look at the topology: R2, R3, and R4 all connect from node A on top
                    to ground on the bottom. <strong>Three resistors that share the same
                    pair of nodes are in parallel</strong>. To analyze the rest of the
                    circuit, replace them with one equivalent resistance R_p.
                  </Why>
                  <Why>
                    For three or more resistors in parallel, conductances add (not
                    resistances). Conductance = 1/R, so:
                  </Why>
                  <Eq>1/R_p = 1/R2 + 1/R3 + 1/R4</Eq>
                  <Eq>1/R_p = 1/1500 + 1/1700 + 1/1300</Eq>
                  <Eq>1/R_p = 6.67×10⁻⁴ + 5.88×10⁻⁴ + 7.69×10⁻⁴ = 2.024×10⁻³ S</Eq>
                  <Eq>R_p = 1 / 2.024×10⁻³ ≈ 494 Ω</Eq>
                  <Why>
                    <strong>Sanity check:</strong> R_p must be smaller than the smallest
                    branch (1300 Ω). 494 Ω &lt; 1300 Ω ✓. (Adding more parallel paths
                    always reduces the total resistance.)
                  </Why>
                </>
              ),
            },
            {
              heading: "Now it's a simple two-resistor divider: V1, R1, then R_p",
              body: (
                <>
                  <Why>
                    Once R2/R3/R4 collapse into one R_p, the circuit becomes V1 → R1
                    → node A → R_p → GND. That's a textbook voltage divider, with R_p
                    playing the role of the bottom resistor.
                  </Why>
                  <Eq>V_A = V1 · R_p / (R1 + R_p) = 5.0 · 494 / (400 + 494) = 5.0 · 494 / 894</Eq>
                </>
              ),
            },
            {
              heading: "Compute V_A",
              body: (
                <>
                  <Eq>V_A = 5.0 · 0.5526 ≈ 2.76 V</Eq>
                  <Why>
                    More than half of V1 ends up at node A because R_p (494 Ω) is
                    bigger than R1 (400 Ω). The bigger resistor carries the bigger
                    voltage drop in a divider; here R_p drops 2.76 V while R1 drops 5.0
                    − 2.76 = 2.24 V.
                  </Why>
                </>
              ),
              result: { label: "V_A", value: "2.76 V", color: "purple" },
            },
          ]}
          keyInsight={<>If your schematic differs (e.g. R2/R3/R4 not all to ground), recompute the equivalent. The pattern is always: collapse to two effective resistors, then divide.</>}
        />

        <WorkedExample
          title="Q17 — two-source loop"
          accentColor="#ef4444"
          figure={<TwoSourceLoopWithR v1={4.5} v2={1.6} r1={222} r2={113} />}
          problemStatement={
            <>
              V1 = 4.5 V, V2 = 1.6 V, R1 = 222 Ω, R2 = 113 Ω. Find V (the node between R1 and R2).
              Standard interpretation: V1 → R1 → node V → R2 → V2 (sources nose-to-nose).
            </>
          }
          steps={[
            {
              heading: "Set up KVL or apply the two-source divider formula",
              body: (
                <>
                  <Why>
                    The topology is V1 → R1 → node V → R2 → V2, with both source
                    polarities pushing current toward node V from opposite ends. We can
                    derive the answer two ways:
                  </Why>
                  <Why>
                    <strong>(1) From KVL/Ohm's law:</strong> the same current I flows
                    through both resistors (one branch). Going around the loop, V1 −
                    I·R1 − I·R2 − V2 = 0 → I = (V1 − V2)/(R1 + R2). Then V at the inner
                    node = V1 − I·R1, or equivalently V2 + I·R2.
                  </Why>
                  <Why>
                    <strong>(2) Two-source divider shortcut</strong> (faster once you
                    trust it): V is a weighted average of V1 and V2, weighted by the
                    <em>opposite</em> resistor:
                  </Why>
                  <Eq>V = (V1 · R2 + V2 · R1) / (R1 + R2)</Eq>
                  <Why>
                    <strong>Why R2 multiplies V1 (not R1):</strong> if R2 were enormous
                    compared to R1, the node would be electrically "close" to V1 (R1 is
                    a small drop). So a big R2 weights V1 more. This is the same
                    structure as a voltage divider, just with two sources.
                  </Why>
                  <Eq>V = (4.5 · 113 + 1.6 · 222) / (222 + 113)</Eq>
                </>
              ),
            },
            {
              heading: "Compute the numerator",
              body: (
                <>
                  <Eq>4.5 · 113 = 508.5</Eq>
                  <Eq>1.6 · 222 = 355.2</Eq>
                  <Eq>numerator = 508.5 + 355.2 = 863.7</Eq>
                </>
              ),
            },
            {
              heading: "Divide and check sanity",
              body: (
                <>
                  <Eq>V = 863.7 / 335 ≈ 2.58 V</Eq>
                  <Why>
                    The answer (2.58 V) sits between V1 = 4.5 V and V2 = 1.6 V, as it
                    must. It's closer to V1 because R2 (113 Ω) is smaller than R1 (222
                    Ω) — so node V "feels" more strongly pulled toward V2's side... wait.
                    Recheck: smaller R between V and V2 means smaller drop, so V is
                    close to V2. But 2.58 is closer to V2 (1.6) than V1 (4.5)? Distance
                    to V1 is 1.92; distance to V2 is 0.98. Yes, V is closer to V2. ✓
                    Sign of the formula matches.
                  </Why>
                </>
              ),
              result: { label: "V", value: "2.58 V", color: "red" },
            },
          ]}
          keyInsight={
            <>
              This formula assumes V1 and V2 push current toward node V from opposite sides.
              If one source is reversed, swap its sign in the numerator. Check the schematic for
              source polarity (the long bar is +).
            </>
          }
        />

        <section>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Drill — variant problems</h3>
          <div className="space-y-4">
            <PracticeProblem
              title="Variant: low-impedance divider"
              accentColor={ACCENT}
              statement={<>V1 = 9.0 V, R1 = 4.7 kΩ, R2 = 2.2 kΩ.</>}
              parts={[
                {
                  label: "(a)",
                  question: "Find V at the node.",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Two resistors in series with the source — basic voltage divider.
                        R1 sits on top (V_in side), R2 on the bottom (ground side). The
                        node voltage equals V_in × (bottom resistor) / (sum):
                      </p>
                      <Eq>V = V1 · R2 / (R1 + R2) = 9.0 · 2.2 / (4.7 + 2.2)</Eq>
                      <Eq>V = 9.0 · 2.2 / 6.9 = 9.0 · 0.319 ≈ 2.87 V</Eq>
                      <p>
                        At kΩ scale, no DMM-loading correction is needed — the meter's
                        10 MΩ is ~3000× larger than R2, so it draws negligible current.
                      </p>
                    </div>
                  ),
                  answer: { value: "2.87 V" },
                },
              ]}
            />
            <PracticeProblem
              title="Variant: DMM loading on a 1 MΩ divider"
              accentColor="#06b6d4"
              statement={<>V1 = 5 V, R1 = 1 MΩ, R2 = 1 MΩ. DMM has 10 MΩ input.</>}
              parts={[
                {
                  label: "(a)",
                  question: "Open-circuit V (no DMM)?",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Symmetrical divider: R1 = R2 = 1 MΩ, so each resistor takes
                        exactly half the source voltage. The node is at the midpoint:
                      </p>
                      <Eq>V = 5 · R2 / (R1 + R2) = 5 · 1 / (1 + 1) = 5 / 2 = 2.50 V</Eq>
                    </div>
                  ),
                  answer: { value: "2.50 V" },
                },
                {
                  label: "(b)",
                  question: "Voltage measured by the DMM?",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>The DMM (10 MΩ) is in parallel with R2 (1 MΩ)</strong>
                        when probes are placed across R2. Compute the effective
                        bottom-leg resistance:
                      </p>
                      <Eq>R_2,eff = R2 ∥ R_DMM = (1 · 10) / (1 + 10) = 10 / 11 ≈ 0.909 MΩ</Eq>
                      <p>
                        Now plug R_2,eff into the divider in place of R2:
                      </p>
                      <Eq>V = 5 · 0.909 / (1 + 0.909) = 5 · 0.909 / 1.909 ≈ 2.38 V</Eq>
                      <p>
                        About 5% lower than the open-circuit value — small but
                        measurable. At 10 MΩ resistors, the loading would be much worse.
                      </p>
                    </div>
                  ),
                  answer: { value: "2.38 V" },
                },
              ]}
            />
            <PracticeProblem
              title="Variant: two-loop, two-source"
              accentColor="#ef4444"
              statement={<>Same loop topology as Q17. V1 = 6 V, V2 = 2 V, R1 = 100 Ω, R2 = 200 Ω.</>}
              parts={[
                {
                  label: "(a)",
                  question: "Find V at the inner node.",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Two-source divider formula. The inner-node voltage is a
                        weighted average of V1 and V2, where each source is weighted by
                        the <em>opposite</em> resistor:
                      </p>
                      <Eq>V = (V1 · R2 + V2 · R1) / (R1 + R2)</Eq>
                      <Eq>V = (6 · 200 + 2 · 100) / (100 + 200)</Eq>
                      <Eq>V = (1200 + 200) / 300 = 1400 / 300 ≈ 4.67 V</Eq>
                      <p>
                        Sanity: V (4.67) lies between V1 (6) and V2 (2), and is closer
                        to V1 because R2 (the resistor closer to V2) is larger — so
                        more voltage drops across R2, leaving the inner node closer to
                        V1's potential. ✓
                      </p>
                    </div>
                  ),
                  answer: { value: "4.67 V" },
                },
              ]}
            />
          </div>
        </section>

        <section>
          <Card className="p-6 border-l-4 border-l-amber-500">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Common traps</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200 space-y-1">
              <li>Voltage divider formula uses <em>R2 / (R1+R2)</em>, NOT R2/R1.</li>
              <li>If the DMM is connected, R2 is in <em>parallel</em> with 10 MΩ — not added.</li>
              <li>Two-source loop: source polarity matters. Long bar = +. Reverse a source → flip the sign of its contribution.</li>
              <li>Three resistors in parallel: invert the sum of inverses, not (R1+R2+R3)/3.</li>
              <li>Always check units. 1 MΩ ≠ 1 kΩ. Q13's 29.8 MΩ is comparable to the meter, but 29.8 kΩ would be ~340× smaller.</li>
            </ul>
          </Card>
        </section>
      </div>
    </div>
  );
}
