import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { RegisterDiagram } from "@/components/ee/RegisterDiagram";
import { CodeTrace } from "@/components/ee/CodeTrace";
import { LiveValue } from "@/components/ee/LiveValue";
import { CircuitSchematic } from "@/components/ee/CircuitSchematic";
import { FormulaBlock } from "@/components/midterm/FormulaBlock";
import { WorkedExample, Eq, Why } from "@/components/midterm/WorkedExample";
import { PracticeProblem } from "@/components/midterm/PracticeProblem";

const ACCENT = "#c026d3";

function ButtonWiringFig({ pressed }: { pressed: boolean }) {
  // PE0 with internal pull-up; button to ground; project firmware reads "1" when pressed,
  // because the button is to VCC (active-high). Show generic active-high wiring.
  const pinColor = pressed ? "#2563eb" : "#94a3b8";
  return (
    <CircuitSchematic
      width={360}
      height={170}
      noGrid
      wires={[
        // VCC rail
        { x1: 50, y1: 30, x2: 220, y2: 30 },
        { x1: 50, y1: 30, x2: 50, y2: 65 },
        { x1: 220, y1: 30, x2: 220, y2: 50 },
        // pull-down to GND under the button
        { x1: 50, y1: 95, x2: 50, y2: 130 },
        { x1: 50, y1: 130, x2: 220, y2: 130 },
        { x1: 220, y1: 90, x2: 220, y2: 130 },
        // sense line to PE0
        { x1: 50, y1: 80, x2: 130, y2: 80 },
        { x1: 130, y1: 80, x2: 130, y2: 105 },
      ]}
      components={[
        { kind: "TEXT", x: 50, y: 18, label: "VCC", color: "#dc2626", value: "11" },
        { kind: "BUTTON", x: 220, y: 70, label: pressed ? "pressed" : "open", color: pressed ? "#16a34a" : "#475569", labelPos: "right" },
        { kind: "R", x: 50, y: 80, label: "10 kΩ pull-down", color: "#10b981", labelPos: "left" },
        { kind: "GND", x: 135, y: 130 },
        { kind: "MCU", x: 290, y: 90, value: "AVR", color: "#475569" },
        { kind: "DOT", x: 130, y: 105, color: pinColor },
        { kind: "TEXT", x: 195, y: 102, label: "PE0", color: pinColor, value: "11" },
      ]}
    />
  );
}

function LedWiringFig({ on }: { on: boolean }) {
  const ledColor = on ? "#dc2626" : "#94a3b8";
  return (
    <CircuitSchematic
      width={360}
      height={170}
      noGrid
      wires={[
        // VCC rail
        { x1: 220, y1: 35, x2: 320, y2: 35 },
        { x1: 320, y1: 35, x2: 320, y2: 80 },
        // VCC → R → LED → MCU pin
        { x1: 320, y1: 80, x2: 320, y2: 80 },
        { x1: 320, y1: 80, x2: 280, y2: 80 },
        { x1: 250, y1: 80, x2: 220, y2: 80 },
        { x1: 220, y1: 80, x2: 220, y2: 80 },
        { x1: 200, y1: 80, x2: 160, y2: 80 },
        { x1: 130, y1: 80, x2: 70, y2: 80 },
      ]}
      components={[
        { kind: "TEXT", x: 320, y: 22, label: "VCC", color: "#dc2626", value: "11" },
        { kind: "R", x: 265, y: 80, label: "330 Ω", color: "#10b981" },
        { kind: "LED", x: 180, y: 80, label: on ? "ON" : "off", color: ledColor },
        { kind: "MCU", x: 50, y: 80, value: "AVR", color: "#475569" },
        { kind: "TEXT", x: 95, y: 70, label: "PA0", color: ledColor, value: "11" },
        { kind: "TEXT", x: 180, y: 130, label: "active-low: bit=0 ⇒ ON", color: "#475569", value: "10" },
      ]}
    />
  );
}

const buttonLabels = ["—", "—", "—", "—", "—", "DOWN", "OK", "UP"];
const ledLabels = ["—", "D7", "D6", "D5", "D4", "D3", "D2", "D1"];

const q5Code = `// PORTA = segment lines (active-low) ; PORTC = digit enables
PORTA_DIR = 0xFF; PORTC_DIR = 0xFF;
PORTA_OUT = 0x00;  // turn LED ON
_delay_ms(200);    // dot
PORTA_OUT = 0xFF;  // OFF
_delay_ms(200);
PORTA_OUT = 0x00;  _delay_ms(600);  // dash
PORTA_OUT = 0xFF;  _delay_ms(200);
PORTA_OUT = 0x00;  _delay_ms(200);  // dot
PORTA_OUT = 0xFF;  _delay_ms(1400); // letter gap`;

const q18Code = `int a = 5;
int b = 13;
for (int i = 1; i < a; i++) {
    b = b + i;
}`;

const q18Steps = [
  { line: 1, vars: { a: 5, b: "—", i: "—" }, note: "Initialize a." },
  { line: 2, vars: { a: 5, b: 13, i: "—" }, note: "Initialize b." },
  { line: 3, vars: { a: 5, b: 13, i: 1 }, note: "Enter loop, i=1, 1<5 ✓" },
  { line: 4, vars: { a: 5, b: 14, i: 1 }, note: "b += 1 → 14" },
  { line: 3, vars: { a: 5, b: 14, i: 2 }, note: "i=2, 2<5 ✓" },
  { line: 4, vars: { a: 5, b: 16, i: 2 }, note: "b += 2 → 16" },
  { line: 3, vars: { a: 5, b: 16, i: 3 }, note: "i=3, 3<5 ✓" },
  { line: 4, vars: { a: 5, b: 19, i: 3 }, note: "b += 3 → 19" },
  { line: 3, vars: { a: 5, b: 19, i: 4 }, note: "i=4, 4<5 ✓" },
  { line: 4, vars: { a: 5, b: 23, i: 4 }, note: "b += 4 → 23" },
  { line: 3, vars: { a: 5, b: 23, i: 5 }, note: "i=5, 5<5 ✗ → exit" },
  { line: 5, vars: { a: 5, b: 23, i: 5 }, note: "Loop done. b = 23." },
];

const q26Code = `if (RTC_INTFLAGS & 0b00000001) {
    RTC_INTFLAGS = 0b00000001;
    min++;
    if (min == 55) {
        min = 0;
        hr++;
        if (hr == 25) {
            hr = 0;
        }
    }
}`;

export default function MicrocontrollerIO() {
  const [porte, setPorte] = useState(0b00000001); // UP pressed
  const [porta, setPorta] = useState(0b11011111); // Q7 stem

  const buttonsPressed: string[] = [];
  if (porte & 0b00000001) buttonsPressed.push("UP");
  if (porte & 0b00000010) buttonsPressed.push("OK");
  if (porte & 0b00000100) buttonsPressed.push("DOWN");

  const litLeds: string[] = [];
  for (let i = 0; i < 7; i++) {
    if (((porta >> i) & 1) === 0) litLeds.push(`D${i + 1}`);
  }

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
            Microcontroller I/O
          </h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container py-12 space-y-12">
        <section>
          <span className="inline-block bg-fuchsia-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-3">
            CLUSTER 2 · Q4 Q5 Q7 Q18 Q26
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            AVR PORTs, Buttons, LEDs, Code Tracing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            From your project's <code>functions.h</code>: UP=PE0, OK=PE1, DOWN=PE2.
            PORTA drives the segment LEDs through inverters, so a 0 bit means the
            segment is lit. Click bits below to simulate pressing buttons / driving the display.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="interactive-panel space-y-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">PORTE — buttons</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Buttons read 1 when pressed (active-high in your firmware: <code>if (buttons == up)</code>).
              </p>
            </div>
            <div className="flex justify-center">
              <ButtonWiringFig pressed={(porte & 0b00000001) !== 0} />
            </div>
            <RegisterDiagram
              name="PORTE_IN"
              value={porte}
              bitLabels={buttonLabels}
              onChange={setPorte}
              accentColor="#2563eb"
            />
            <LiveValue
              label="Pressed"
              value={buttonsPressed.length ? buttonsPressed.join(", ") : "(none)"}
              accentColor="#2563eb"
            />
          </Card>

          <Card className="interactive-panel space-y-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">PORTA — LEDs (active-low)</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                A bit = 0 means that segment is ON. Q7 stem: PORTA_OUT = 0b11011111.
              </p>
            </div>
            <div className="flex justify-center">
              <LedWiringFig on={((porta >> 0) & 1) === 0} />
            </div>
            <RegisterDiagram
              name="PORTA_OUT"
              value={porta}
              bitLabels={ledLabels}
              onChange={setPorta}
              accentColor={ACCENT}
            />
            <LiveValue
              label="Lit LEDs"
              value={litLeds.length ? litLeds.join(", ") : "(none — all off)"}
              accentColor={ACCENT}
            />
          </Card>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <FormulaBlock
            name="Test a single port bit"
            formula={<>if (PORTx_IN &amp; (1 &lt;&lt; n)) ...</>}
            variables={[
              {
                symbol: "n",
                meaning:
                  "which pin you're checking, 0–7. PE0 is bit 0, PE1 is bit 1, etc.",
              },
              {
                symbol: "(1 << n)",
                meaning:
                  "a byte with only bit n set (= 2ⁿ). ANDing with PORTx_IN keeps only that one bit, zeroing everything else",
              },
            ]}
            whenToUse={
              <>
                The C condition <code>PORTx_IN &amp; (1 &lt;&lt; n)</code>{" "}
                reads as "is bit n of port x currently HIGH?" — nonzero (truthy)
                if so, zero (falsy) if not. With your project's PORTE buttons
                wired so a press pulls the line HIGH, this is "is the matching
                button pressed?". The wider rule:{" "}
                <code>x &amp; mask</code> isolates the bits the mask has set,
                making it the universal way to test individual bits.
              </>
            }
            accentColor="#2563eb"
          />
          <FormulaBlock
            name="Active-low LED"
            formula={<>LED on ⇔ PORTx_OUT bit = 0</>}
            variables={[
              {
                symbol: "PORTx_OUT",
                meaning:
                  "the output register that drives each pin's voltage. Bit 1 = pin HIGH, bit 0 = pin LOW",
              },
              {
                symbol: "PIN_CTRL",
                meaning:
                  "per-pin config register. Setting INVEN (0x80) inverts the logic — useful if you'd rather think 'bit 1 means LED on'",
              },
            ]}
            whenToUse={
              <>
                Active-low means the LED's anode is tied to power, and the pin
                pulls the cathode LOW to complete the circuit. So the pin must
                read 0 to light the LED. To find which segment is lit on a
                7-segment display: look for the SINGLE 0 BIT in PORTA_OUT. Easy
                exam trap — students see <code>0b11011111</code> and think "bit
                5 is on" but with active-low the lit segment is the one with
                the 0, which is bit 5 → segment D6.
              </>
            }
            accentColor={ACCENT}
          />
        </section>

        <WorkedExample
          title="Q4 — if (PORTE_IN & 0b00000001)"
          accentColor="#2563eb"
          problemStatement={
            <>
              Your project has UP/OK/DOWN buttons on PORTE. From <code>functions.h</code>:
              <br /><code>#define up 0b00000001</code> (PE0)
              <br /><code>#define ok 0b00000010</code> (PE1)
              <br /><code>#define down 0b00000100</code> (PE2)
              <br />The main loop tests <code>if (buttons == up)</code> — i.e. pressing a button reads <strong>1</strong>.
            </>
          }
          steps={[
            {
              heading: "Identify which bit the mask is testing",
              body: (
                <>
                  <Why>
                    The literal <code>0b00000001</code> has only one bit set: bit 0 (the
                    rightmost, least-significant bit). When you AND PORTE_IN with this
                    mask, the result is non-zero <strong>only if bit 0 of PORTE_IN is
                    1</strong>; bits 1 through 7 of PORTE_IN are masked off and ignored.
                  </Why>
                  <Why>
                    From your project's <code>functions.h</code>, <code>up</code> is
                    defined as <code>0b00000001</code> — the UP button is wired to PE0,
                    the bit-0 line of PORT E.
                  </Why>
                  <Eq>0b00000001 → bit 0 only → maps to PE0 → UP button</Eq>
                </>
              ),
            },
            {
              heading: "Apply the active-HIGH polarity convention used in this firmware",
              body: (
                <>
                  <Why>
                    Buttons can be wired one of two ways. <strong>Active-high:</strong>
                    pressing the button connects the input pin to V_DD, so a press
                    reads as bit = 1. <strong>Active-low:</strong> pressing connects
                    the pin to GND, so a press reads as bit = 0. Your board uses the
                    active-high convention (you can confirm in <code>complete_code1.c</code>
                    where the test is <code>if (buttons == up)</code>, looking for the
                    bit to be 1 when pressed).
                  </Why>
                  <Why>
                    So <code>(PORTE_IN &amp; 0b00000001) ≠ 0</code> means: PE0 reads 1,
                    which under our active-high convention means the UP button is being
                    pressed.
                  </Why>
                </>
              ),
              result: { label: "Answer", value: "the UP button is pressed", color: "blue" },
            },
          ]}
          keyInsight={<>Different boards use different polarities — verify by reading <code>complete_code1.c</code> if uncertain. In yours, pressed = 1.</>}
        />

        <WorkedExample
          title="Q7 — Which LED on PORTA_OUT = 0b11011111?"
          accentColor={ACCENT}
          problemStatement={
            <>
              PORTA drives 7-segment LEDs through invert (active-low). After the assignment
              <code>PORTA_OUT = 0b11011111;</code>, find the single LED that lights.
            </>
          }
          steps={[
            {
              heading: "Locate the single 0 bit in the byte",
              body: (
                <>
                  <Why>
                    <strong>Active-low</strong> means the LED lights when the driving
                    pin is LOW (= 0). It's a common arrangement when an inverter or
                    a transistor sits between the GPIO and the LED. So we're hunting
                    for the bit that's <strong>0</strong> in PORTA_OUT — the rest are
                    1s, which keep their LEDs OFF.
                  </Why>
                  <Why>
                    Spread the byte across positions 7..0 to see clearly:
                  </Why>
                  <Eq>0b 1101 1111  =  bit7=1  bit6=1  bit5=0  bit4=1  bit3=1  bit2=1  bit1=1  bit0=1</Eq>
                  <Why>
                    Only bit 5 is 0. So the LED driven by PA5 is the one currently lit.
                  </Why>
                </>
              ),
            },
            {
              heading: "Map the PORTA bit to a labeled LED",
              body: (
                <>
                  <Why>
                    The schematic for your board names the indicator LEDs D1 through
                    D7, wired to PA0 through PA6 respectively (so D1 ↔ PA0, D2 ↔ PA1,
                    ..., D7 ↔ PA6). Bit 5 of PORTA corresponds to PA5, which the
                    schematic labels as D6.
                  </Why>
                  <Eq>bit 5 → PA5 → D6</Eq>
                  <Why>
                    Note: a different board could renumber things (e.g. D1 = PA7),
                    which would shift the answer. Always cross-check the schematic
                    you're working with.
                  </Why>
                </>
              ),
              result: { label: "Answer", value: "D6", color: "purple" },
            },
          ]}
          keyInsight={<>If your schematic numbers differently (e.g. D1=PA7), the answer shifts. Confirm by reading <code>functions1.h</code> segment table — the patterns there reveal the bit-to-segment mapping.</>}
        />

        <Card className="interactive-panel" style={{ borderLeftWidth: 4, borderLeftColor: "#10b981" }}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Q5 — Decode the Morse pattern
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Each <code>_delay_ms</code> with PORTA_OUT = 0x00 (LED ON) is a Morse element.
            Standard timing: <strong>1 unit = ~200 ms</strong> in your lab. So 200 ms = dot,
            600 ms = dash, 1400 ms = letter / word gap. Step through:
          </p>
          <CodeTrace
            code={q5Code}
            varOrder={["t", "PORTA_OUT", "decoded"]}
            steps={[
              { line: 3, vars: { "PORTA_OUT": "0x00", t: "0 ms", decoded: "" }, note: "LED ON" },
              { line: 4, vars: { "PORTA_OUT": "0x00", t: "200 ms", decoded: "·" }, note: "200 ms ON = dot" },
              { line: 5, vars: { "PORTA_OUT": "0xFF", t: "200 ms", decoded: "·" }, note: "OFF (intra-letter gap)" },
              { line: 7, vars: { "PORTA_OUT": "0x00", t: "400 ms", decoded: "·" }, note: "LED ON" },
              { line: 7, vars: { "PORTA_OUT": "0x00", t: "1000 ms", decoded: "·−" }, note: "600 ms ON = dash" },
              { line: 8, vars: { "PORTA_OUT": "0xFF", t: "1000 ms", decoded: "·−" }, note: "OFF gap" },
              { line: 9, vars: { "PORTA_OUT": "0x00", t: "1200 ms", decoded: "·−" }, note: "LED ON" },
              { line: 9, vars: { "PORTA_OUT": "0x00", t: "1400 ms", decoded: "·−·", output: "·−· = R" }, note: "200 ms ON = dot" },
              { line: 10, vars: { "PORTA_OUT": "0xFF", t: "1400 ms", decoded: "·−·" }, note: "1400 ms gap = end of letter / word" },
            ]}
            accentColor="#10b981"
          />
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            <strong>Note:</strong> the actual exam Q5 has a different sequence of delays.
            The decoding method is the same: each ON pulse of 200 ms is a dot, 600 ms is a dash;
            grouped by short gaps to form letters; long gaps separate letters/words. Translate the pattern
            with a Morse table.
          </p>
        </Card>

        <WorkedExample
          title="Q18 — for loop accumulator"
          accentColor="#06b6d4"
          problemStatement={<>Trace the loop. What is <code>b</code> after it ends?</>}
          steps={[
            {
              heading: "Determine which iterations actually run",
              body: (
                <>
                  <Why>
                    The for-loop header is <code>for (int i = 1; i &lt; a; i++)</code>
                    with a = 5. So i starts at 1 and increments by 1 each iteration.
                    The loop body runs as long as the test <code>i &lt; 5</code> is
                    true. That gives i = 1, 2, 3, 4 (four iterations). When i becomes
                    5, the test 5 &lt; 5 fails and the loop exits without running the
                    body for that value.
                  </Why>
                </>
              ),
            },
            {
              heading: "Accumulate into b",
              body: (
                <>
                  <Why>
                    Each iteration runs <code>b = b + i</code>. Starting from b = 13:
                  </Why>
                  <Eq>b after i=1:  13 + 1 = 14</Eq>
                  <Eq>b after i=2:  14 + 2 = 16</Eq>
                  <Eq>b after i=3:  16 + 3 = 19</Eq>
                  <Eq>b after i=4:  19 + 4 = 23</Eq>
                  <Why>
                    Equivalently, the total added to b is 1+2+3+4 = 10, so the final
                    b = 13 + 10 = 23.
                  </Why>
                </>
              ),
              result: { label: "b", value: "23", color: "cyan" },
            },
          ]}
        />
        <CodeTrace code={q18Code} steps={q18Steps} accentColor="#06b6d4" varOrder={["a", "b", "i"]} />

        <WorkedExample
          title="Q26 — alien hour length"
          accentColor="#ef4444"
          problemStatement={<>This RTC-driven snippet from another planet. How many minutes in an alien hour?</>}
          steps={[
            {
              heading: "Read the code as a state machine",
              body: (
                <>
                  <Why>
                    The RTC fires once per "minute". Inside the handler, <code>min</code>
                    is incremented by 1, then tested with <code>if (min == 55)</code>.
                    If equal, the code resets <code>min = 0</code> and increments the
                    hour counter. So the rollover happens <em>when min reaches 55</em>,
                    immediately resetting it to 0.
                  </Why>
                </>
              ),
            },
            {
              heading: "Enumerate the values min visits in one alien hour",
              body: (
                <>
                  <Why>
                    Walk through the sequence: starting at min = 0, the next ticks
                    advance to 1, 2, 3, ..., 54. On the next tick min increments to
                    55, the equality test fires, and min snaps back to 0 (and hr
                    increments). So the values min holds during one full hour are 0,
                    1, 2, ..., 54.
                  </Why>
                  <Eq>distinct values of min per hour = {`{0, 1, 2, ..., 54}`} → 55 values</Eq>
                  <Why>
                    Don't fall for the trap of saying 60 ("because Earth has 60
                    minutes per hour") or 56 (off-by-one because 55 was tested). Read
                    the code: the comparison is == 55, the reset is to 0, so 55
                    distinct values is the right answer.
                  </Why>
                </>
              ),
              result: { label: "Answer", value: "55", color: "red" },
            },
          ]}
          keyInsight={<>The reset-on-equality test is a common embedded pattern. Don't fall for "60 because Earth" — read the code.</>}
        />
        <CodeTrace
          code={q26Code}
          accentColor="#ef4444"
          varOrder={["min", "hr"]}
          steps={[
            { line: 1, vars: { min: 53, hr: 0 }, note: "Pre-tick state" },
            { line: 3, vars: { min: 54, hr: 0 }, note: "min++" },
            { line: 4, vars: { min: 54, hr: 0 }, note: "54 == 55? no" },
            { line: 1, vars: { min: 54, hr: 0 }, note: "Next tick" },
            { line: 3, vars: { min: 55, hr: 0 }, note: "min++" },
            { line: 4, vars: { min: 55, hr: 0 }, note: "55 == 55? yes — rollover" },
            { line: 5, vars: { min: 0, hr: 0 } },
            { line: 6, vars: { min: 0, hr: 1 }, note: "hr++" },
          ]}
        />

        <section>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Drill — variant problems</h3>
          <div className="space-y-4">
            <PracticeProblem
              title="Variant: which port test?"
              accentColor="#2563eb"
              statement={<>You write <code>if (PORTE_IN &amp; 0b00000100) f();</code></>}
              parts={[
                {
                  label: "(a)",
                  question: "Which button triggers f()?",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        The mask <code>0b00000100</code> has only bit 2 set (decimal
                        value 2² = 4). On your board, <code>down = 0b00000100</code>
                        is the constant for the DOWN button (PE2). So the AND is
                        non-zero exactly when PE2 reads HIGH, i.e. when DOWN is being
                        pressed:
                      </p>
                      <Eq>(PORTE_IN & 0b00000100) != 0   ⇔   PE2 == 1   ⇔   DOWN pressed</Eq>
                    </div>
                  ),
                  answer: { value: "DOWN button pressed" },
                },
              ]}
            />
            <PracticeProblem
              title="Variant: trace this loop"
              accentColor="#06b6d4"
              statement={
                <pre className="font-mono text-xs bg-gray-50 dark:bg-slate-700 rounded p-3">{`int x = 2;
for (int i = 0; i < 4; i++) {
    x = x * 2;
}`}</pre>
              }
              parts={[
                {
                  label: "(a)",
                  question: "Final value of x?",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Loop counts: <code>i = 0, 1, 2, 3</code> all satisfy <code>i
                        &lt; 4</code> (4 iterations); when i becomes 4, the test fails
                        and the loop exits. Each pass doubles x:
                      </p>
                      <Eq>after i=0:   x = 2 · 2 = 4</Eq>
                      <Eq>after i=1:   x = 4 · 2 = 8</Eq>
                      <Eq>after i=2:   x = 8 · 2 = 16</Eq>
                      <Eq>after i=3:   x = 16 · 2 = 32</Eq>
                      <p>
                        Equivalently, x is multiplied by 2 four times → x = 2 · 2⁴ =
                        32.
                      </p>
                    </div>
                  ),
                  answer: { value: "32" },
                },
              ]}
            />
            <PracticeProblem
              title="Variant: alien clock"
              accentColor="#ef4444"
              statement={
                <pre className="font-mono text-xs bg-gray-50 dark:bg-slate-700 rounded p-3">{`if (sec == 30) {
    sec = 0;
    min++;
    if (min == 12) { min = 0; hr++; }
}`}</pre>
              }
              parts={[
                {
                  label: "(a)",
                  question: "How many seconds per minute?",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        sec increments and is reset to 0 whenever it equals 30. The
                        distinct values it visits in one minute are 0, 1, 2, ..., 29
                        — that's 30 values. (When sec reaches 30, it instantly snaps
                        to 0, so 30 itself is never "held".)
                      </p>
                      <Eq>distinct values of sec per minute = {`{0..29}`} → 30 values</Eq>
                    </div>
                  ),
                  answer: { value: "30" },
                },
                {
                  label: "(b)",
                  question: "Minutes per hour?",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Same reasoning for the minute counter. It rolls over when min
                        equals 12, so the distinct values per hour are 0, 1, ..., 11
                        — 12 values. (And then hr increments and min resets.)
                      </p>
                      <Eq>distinct values of min per hour = {`{0..11}`} → 12 values</Eq>
                    </div>
                  ),
                  answer: { value: "12" },
                },
              ]}
            />
          </div>
        </section>

        <section>
          <Card className="p-6 border-l-4 border-l-amber-500">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Common traps</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200 space-y-1">
              <li>Active-LOW LEDs (your project): bit 0 means ON. Counterintuitive but standard.</li>
              <li>Buttons can be active-high or active-low depending on board. Yours: pressed ⇒ 1.</li>
              <li>For-loops: <code>i &lt; a</code> stops when i equals a. Final i is a−1 inside the loop.</li>
              <li>Equality reset (<code>if (min == 55) min = 0;</code>): values 0..54, so 55 distinct.</li>
              <li>Bit position counts from 0 (LSB), but the binary literal <code>0b1xxxxxxx</code> is bit 7 first when you read left to right.</li>
            </ul>
          </Card>
        </section>
      </div>
    </div>
  );
}
