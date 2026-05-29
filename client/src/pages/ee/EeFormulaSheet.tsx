import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { FormulaBlock } from "@/components/midterm/FormulaBlock";

const sections = [
  {
    title: "Number Systems & Bitwise",
    color: "#2563eb",
    formulas: [
      {
        name: "Single-bit mask",
        formula: <>1 &lt;&lt; n &nbsp;=&nbsp; 2<sup>n</sup></>,
        variables: [{ symbol: "n", meaning: "bit position 0..7" }],
        whenToUse: <>Test or set bit n. <code>if (PORT &amp; (1&lt;&lt;n))</code>.</>,
      },
      {
        name: "Bit-AND extract",
        formula: <>x &amp; mask</>,
        variables: [{ symbol: "mask", meaning: "1s where bits to keep" }],
        whenToUse: <>Isolate bits. <code>0x35 &amp; 0x0F = 0x05</code>.</>,
      },
      {
        name: "Integer arithmetic",
        formula: <>a / b = ⌊a/b⌋ &nbsp;·&nbsp; a % b = remainder</>,
        variables: [{ symbol: "/", meaning: "truncating div" }, { symbol: "%", meaning: "modulo" }],
        whenToUse: <>C int math: 35/2=17 (not 17.5).</>,
      },
      {
        name: "Hex ↔ decimal",
        formula: <>0x<i>HL</i> = 16·H + L</>,
        variables: [{ symbol: "H/L", meaning: "high/low nibble (0-15)" }],
        whenToUse: <>Each hex digit = 4 bits.</>,
      },
    ],
  },
  {
    title: "Microcontroller Registers (AVR)",
    color: "#c026d3",
    formulas: [
      {
        name: "Direction / Output / Input",
        formula: <><code>PORTx_DIR · PORTx_OUT · PORTx_IN</code></>,
        variables: [
          { symbol: "DIR", meaning: "1 = output, 0 = input" },
          { symbol: "OUT", meaning: "drive value if output" },
          { symbol: "IN", meaning: "read pin state" },
        ],
        whenToUse: <>Configure port pins. Set DIR before driving OUT.</>,
      },
      {
        name: "Project pin map",
        formula: <>UP=PE0, OK=PE1, DOWN=PE2 · PORTA = segment LEDs (active-LOW)</>,
        variables: [
          { symbol: "PORTE", meaning: "buttons" },
          { symbol: "PORTA", meaning: "7-seg segments through inverters" },
        ],
        whenToUse: <>Pressed = 1 in your firmware (read from <code>functions.h</code>).</>,
      },
      {
        name: "Delay",
        formula: <><code>_delay_ms(n)</code></>,
        variables: [{ symbol: "n", meaning: "milliseconds; compile-time constant" }],
        whenToUse: <>Morse: 200 ms = dot, 600 ms = dash, 1400 ms = letter/word gap.</>,
      },
    ],
  },
  {
    title: "ADC (10-bit)",
    color: "#ef4444",
    formulas: [
      {
        name: "Code from voltage",
        formula: <>code = round(V<sub>in</sub>·1023/V<sub>ref</sub>)</>,
        variables: [
          { symbol: "V_ref", meaning: "4.3 V (your project)" },
          { symbol: "1023", meaning: "max code" },
        ],
        whenToUse: <>Single conversion. ×64 if accumulating 64 samples.</>,
      },
      {
        name: "Voltage from code",
        formula: <>V<sub>in</sub> = V<sub>ref</sub>·code/1023</>,
        variables: [{ symbol: "code", meaning: "ADC0_RES contents" }],
        whenToUse: <>Recover analog reading from a register dump.</>,
      },
      {
        name: "ADC0_MUXPOS",
        formula: <>writes channel number 0..15</>,
        variables: [
          { symbol: "12", meaning: "USB current (transimpedance amp)" },
          { symbol: "13", meaning: "AVDD" },
          { symbol: "14/15", meaning: "CC1 / CC2" },
        ],
        whenToUse: <>Selects which AIN pin to digitize. Doesn't start the conversion.</>,
      },
    ],
  },
  {
    title: "DC Circuits",
    color: "#10b981",
    formulas: [
      {
        name: "Ohm's Law",
        formula: <>V = I · R</>,
        variables: [],
        whenToUse: <>Linear resistor.</>,
      },
      {
        name: "Voltage divider",
        formula: <>V<sub>out</sub> = V<sub>in</sub>·R<sub>2</sub>/(R<sub>1</sub>+R<sub>2</sub>)</>,
        variables: [
          { symbol: "R1", meaning: "top (V_in to node)" },
          { symbol: "R2", meaning: "bottom (node to GND)" },
        ],
        whenToUse: <>Two series resistors with V across both.</>,
      },
      {
        name: "DMM loading (34461A V-mode)",
        formula: <>R<sub>2,eff</sub> = R<sub>2</sub> ∥ 10MΩ</>,
        variables: [{ symbol: "R_DMM", meaning: "10 MΩ input impedance" }],
        whenToUse: <>When divider Rs are MΩ-scale. Negligible for kΩ.</>,
      },
      {
        name: "Parallel resistors",
        formula: <>1/R<sub>p</sub> = ∑(1/R<sub>i</sub>)</>,
        variables: [],
        whenToUse: <>Multiple branches between two nodes.</>,
      },
      {
        name: "Two-source loop",
        formula: <>V = (V₁R₂ + V₂R₁)/(R₁+R₂)</>,
        variables: [{ symbol: "polarity", meaning: "flip sign if a source is reversed" }],
        whenToUse: <>Sources nose-to-nose with two series Rs.</>,
      },
      {
        name: "Max power transfer",
        formula: <>R<sub>load</sub> = R<sub>source</sub> = V<sub>set</sub>/I<sub>limit</sub></>,
        variables: [],
        whenToUse: <>Match impedances for max P delivered.</>,
      },
    ],
  },
  {
    title: "Op-Amps",
    color: "#7c3aed",
    formulas: [
      {
        name: "Inverting gain",
        formula: <>A<sub>v</sub> = −R<sub>f</sub>/R<sub>in</sub></>,
        variables: [],
        whenToUse: <>Voltage in, voltage out.</>,
      },
      {
        name: "Transimpedance",
        formula: <>V<sub>out</sub> = −I<sub>in</sub>·R<sub>f</sub></>,
        variables: [{ symbol: "Z_t", meaning: "|V/I| in Ω" }],
        whenToUse: <>Current in, voltage out (photodiode, USB current sense).</>,
      },
      {
        name: "Virtual short",
        formula: <>V<sub>+</sub> = V<sub>−</sub> &nbsp; (negative feedback)</>,
        variables: [],
        whenToUse: <>Linear region. Both inputs hold the same voltage.</>,
      },
    ],
  },
  {
    title: "Lab Equipment",
    color: "#06b6d4",
    formulas: [
      {
        name: "I-V slope → R",
        formula: <>R = 1/slope &nbsp; (slope = ΔI/ΔV)</>,
        variables: [],
        whenToUse: <>Plot I vs V, fit line, take 1/slope. (Lab 1.)</>,
      },
      {
        name: "Sine RMS",
        formula: <>V<sub>rms</sub> = V<sub>p</sub>/√2 = V<sub>pp</sub>/(2√2)</>,
        variables: [],
        whenToUse: <>Sine waves only. (Prelab 4.)</>,
      },
      {
        name: "Angular frequency",
        formula: <>ω = 2π·f = 2π/T</>,
        variables: [],
        whenToUse: <>Convert from Hz or period to rad/s.</>,
      },
      {
        name: "DMM 4-wire ohms",
        formula: <>R = V<sub>sense</sub>/I<sub>source</sub></>,
        variables: [],
        whenToUse: <>Low R (&lt; 10 Ω). Excludes lead resistance.</>,
      },
    ],
  },
  {
    title: "USB-C Power Delivery",
    color: "#f59e0b",
    formulas: [
      {
        name: "CC voltage thresholds",
        formula: <>~5 V open · 0.7-2.0 V device · ~0.2 V active cable</>,
        variables: [],
        whenToUse: <>Identify what's plugged in.</>,
      },
      {
        name: "Power",
        formula: <>P = V·I &nbsp;·&nbsp; PD3: ≤ 240 W (48V × 5A)</>,
        variables: [],
        whenToUse: <>Charging math.</>,
      },
      {
        name: "Super-cap energy",
        formula: <>E = ½·C·V²</>,
        variables: [{ symbol: "C", meaning: "F-class for super-caps" }],
        whenToUse: <>Backup-power runtime estimates.</>,
      },
    ],
  },
  {
    title: "SPICE Simulation",
    color: "#0ea5e9",
    formulas: [
      {
        name: ".tran",
        formula: <><code>.tran tstep tstop</code> — x = time</>,
        variables: [],
        whenToUse: <>Time-domain response.</>,
      },
      {
        name: ".ac",
        formula: <><code>.ac dec npts fstart fstop</code> — x = freq</>,
        variables: [],
        whenToUse: <>Frequency response, filter cutoff.</>,
      },
      {
        name: ".dc",
        formula: <><code>.dc src start stop step</code> — x = swept V/I</>,
        variables: [],
        whenToUse: <>I-V curves, transfer functions.</>,
      },
      {
        name: ".op",
        formula: <><code>.op</code> — single point, no x-axis</>,
        variables: [],
        whenToUse: <>Bias / quiescent state.</>,
      },
    ],
  },
];

export default function EeFormulaSheet() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/ee">
            <Button variant="ghost" className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <ChevronLeft className="w-5 h-5" /> Back to ESE 123
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">ESE 123 Formula Sheet</h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container py-12 space-y-12">
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Last-night reference
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Every formula on the practice exam, organized by topic. If you can recite
            these and recognize the trigger conditions, you'll recognize every problem.
          </p>
        </section>

        {sections.map((s) => (
          <section key={s.title}>
            <h3
              className="text-2xl font-bold mb-4 pb-2 border-b-2"
              style={{ color: s.color, borderColor: s.color + "40" }}
            >
              {s.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {s.formulas.map((f) => (
                <FormulaBlock
                  key={f.name}
                  name={f.name}
                  formula={f.formula}
                  variables={f.variables}
                  whenToUse={f.whenToUse}
                  accentColor={s.color}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
