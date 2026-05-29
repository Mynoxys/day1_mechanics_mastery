import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { BitArray } from "@/components/ee/BitArray";
import { LiveValue } from "@/components/ee/LiveValue";
import { FormulaBlock } from "@/components/midterm/FormulaBlock";
import { WorkedExample, Eq, Why } from "@/components/midterm/WorkedExample";
import { PracticeProblem } from "@/components/midterm/PracticeProblem";

const ACCENT = "#2563eb";

export default function BitwiseNumbers() {
  const [a, setA] = useState(0x35);
  const [b, setB] = useState(0x0f);
  const result = a & b;

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
            Bitwise & Number Systems
          </h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container py-12 space-y-12">
        <section>
          <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-3">
            CLUSTER 1 · Q2 Q3 Q6 Q19
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Bits, Masks, and Number Bases
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Most exam pain in this cluster comes from sloppy mental arithmetic, not
            tricky concepts. The interactive below lets you build any byte, AND it
            with any mask, and read the result in three bases simultaneously.
          </p>
        </section>

        <section className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <Card className="interactive-panel space-y-6">
              <div>
                <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 font-semibold mb-2">
                  Value A · click bits to flip
                </div>
                <BitArray value={a} onChange={setA} accentColor={ACCENT} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 font-semibold mb-2">
                  Mask B · click bits to flip
                </div>
                <BitArray value={b} onChange={setB} accentColor="#10b981" />
              </div>
              <div className="border-t border-gray-200 dark:border-slate-600 pt-4">
                <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 font-semibold mb-2">
                  A & B (bitwise AND)
                </div>
                <BitArray value={result} accentColor="#c026d3" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <LiveValue label="A & B (dec)" value={result} accentColor="#c026d3" />
                <LiveValue
                  label="A & B (hex)"
                  value={`0x${result.toString(16).toUpperCase().padStart(2, "0")}`}
                  accentColor="#c026d3"
                />
                <LiveValue
                  label="A & B (bin)"
                  value={`0b${result.toString(2).padStart(8, "0")}`}
                  accentColor="#c026d3"
                />
              </div>
            </Card>
          </div>

          <div className="md:col-span-2 space-y-4">
            <FormulaBlock
              name="Single-bit mask"
              formula={<>mask = 1 &lt;&lt; n &nbsp;&nbsp; (or 2<sup>n</sup>)</>}
              variables={[
                {
                  symbol: "n",
                  meaning:
                    "the bit position you care about, counting from the right starting at 0 (so bit 0 is the LSB, bit 7 is the MSB of a byte)",
                },
                {
                  symbol: "mask",
                  meaning:
                    "a byte (or word) with ONLY bit n set to 1, every other bit zero. Used to 'select' that one bit out of a larger value",
                },
              ]}
              whenToUse={
                <>
                  To touch a single bit, you need a number that has a 1 in
                  exactly that position. Shifting a single 1 left by n positions
                  gets you there: <code>1 &lt;&lt; n</code>. Then{" "}
                  <code>x &amp; mask</code> isolates bit n (everything else gets ANDed
                  with 0). <code>if (PORT &amp; (1&lt;&lt;n))</code> reads "is bit n
                  in PORT set?". To set bit n: <code>x |= mask</code>. To clear:{" "}
                  <code>x &amp;= ~mask</code>.
                </>
              }
              accentColor={ACCENT}
            />
            <FormulaBlock
              name="Integer division & modulo"
              formula={<>a / b = ⌊a/b⌋ &nbsp; · &nbsp; a % b = a − (a/b)·b</>}
              variables={[
                {
                  symbol: "/",
                  meaning:
                    "integer division — drops the fractional part (truncates toward zero). 7/2 = 3, not 3.5",
                },
                {
                  symbol: "%",
                  meaning:
                    "the modulo (remainder) operator — what's left after pulling out as many whole copies of b as possible. 7 % 2 = 1",
                },
              ]}
              whenToUse={
                <>
                  In C, when both operands are <code>int</code>, both{" "}
                  <code>/</code> and <code>%</code> do integer math — no
                  rounding, no fractions. The two are linked by the identity{" "}
                  <code>a == (a/b)·b + a%b</code>: divide gives you the
                  quotient, modulo gives you the leftover. Used everywhere in
                  embedded code: <code>n / 16</code> picks the high nibble of
                  a byte, <code>n % 16</code> picks the low nibble. Watch for
                  signed-vs-unsigned and integer overflow.
                </>
              }
              accentColor="#10b981"
            />
            <FormulaBlock
              name="Hex ↔ decimal"
              formula={<>0x<i>HL</i> = H·16 + L</>}
              variables={[
                {
                  symbol: "H",
                  meaning:
                    "high nibble (the digit on the left in hex; 0–15, or 0–F)",
                },
                {
                  symbol: "L",
                  meaning: "low nibble (the digit on the right; 0–15, or 0–F)",
                },
              ]}
              whenToUse={
                <>
                  Hex is base-16, so each digit covers 4 bits — exactly half a
                  byte (a "nibble"). The high nibble is the upper 4 bits, the
                  low nibble is the lower 4 bits. <code>0x35</code> = 3·16 + 5
                  = 53 in decimal = <code>0011 0101</code> in binary. Once you
                  see the digit-to-nibble mapping, hex becomes a compact way to
                  read binary: each hex digit IS a 4-bit pattern.
                </>
              }
              accentColor="#c026d3"
            />
          </div>
        </section>

        <WorkedExample
          title="Q2 — Mask for bit 3"
          accentColor={ACCENT}
          problemStatement={
            <>
              You want this C statement to detect if bit 3 is set and ignore everything
              else: <code>if (PORTD_IN &amp; x)</code>. What value of <strong>x</strong> (decimal)?
            </>
          }
          steps={[
            {
              heading: "What 'detect bit 3' means and how AND-with-mask achieves it",
              body: (
                <>
                  <Why>
                    The C expression <code>PORTD_IN &amp; x</code> performs a bitwise
                    AND between the input register and your value x. Bitwise AND is
                    "1 in both inputs → 1; otherwise 0", computed independently for
                    each of the 8 bit positions. So if x has only one bit set (say bit
                    3), the result of the AND is non-zero <strong>only if PORTD_IN
                    also has bit 3 set</strong>; every other bit position outputs 0
                    regardless. That's how a single-bit mask works.
                  </Why>
                  <Why>
                    To make x have only bit 3 set, we write a binary number with a 1
                    in position 3 (counting from the right, starting at 0) and 0
                    everywhere else. For an 8-bit byte, the bit positions from MSB to
                    LSB are 7, 6, 5, 4, 3, 2, 1, 0:
                  </Why>
                  <Eq>x = 0b 0000 1000</Eq>
                  <Why>
                    The lone "1" sits in column 3 (the 4th column from the right).
                    All seven other columns are 0.
                  </Why>
                </>
              ),
            },
            {
              heading: "Convert binary to decimal",
              body: (
                <>
                  <Why>
                    Each bit position n contributes 2ⁿ to the decimal value. Only bit
                    3 is set, so:
                  </Why>
                  <Eq>x = 2³ = 8 (decimal)</Eq>
                  <Why>
                    The pattern: bit n's value is 2ⁿ. Memorize the powers of 2 from
                    bit 0 up: 1, 2, 4, 8, 16, 32, 64, 128. Bit 3 = 8 is in there.
                  </Why>
                </>
              ),
              result: { label: "x", value: "8", color: "blue" },
            },
          ]}
          keyInsight={<>Bit positions are 7..0. Bit n has value 2<sup>n</sup>. Memorise: 1, 2, 4, 8, 16, 32, 64, 128.</>}
        />

        <WorkedExample
          title="Q3 — 35 % 0b00001010"
          accentColor="#10b981"
          problemStatement={<>Compute <code>35 % 0b00001010</code> in C. Decimal answer.</>}
          steps={[
            {
              heading: "Convert the binary literal to decimal first",
              body: (
                <>
                  <Why>
                    <strong>Don't be fooled by the binary notation.</strong> 0b00001010
                    looks like the digit-string "1010" but it's a binary number; in
                    decimal it's just 10. To convert, identify which bit positions are
                    1 and add the corresponding powers of 2:
                  </Why>
                  <Eq>0b 0000 1010   →   bits set at positions 3 and 1</Eq>
                  <Eq>= 2³ + 2¹ = 8 + 2 = 10</Eq>
                  <Why>
                    Now the problem reads "35 % 10 in C", which is straightforward
                    decimal arithmetic.
                  </Why>
                </>
              ),
            },
            {
              heading: "Compute the remainder",
              body: (
                <>
                  <Why>
                    The <code>%</code> operator returns the remainder when its left
                    operand is divided by its right operand. Concretely: 35 divided
                    by 10 gives quotient 3 with remainder 5 (since 3·10 + 5 = 35):
                  </Why>
                  <Eq>35 = 3 · 10 + 5   →   35 % 10 = 5</Eq>
                  <Why>
                    Quick mental check: any number's remainder mod 10 is its rightmost
                    decimal digit. 35 → 5. ✓
                  </Why>
                </>
              ),
              result: { label: "result", value: "5", color: "green" },
            },
          ]}
          keyInsight={<><code>%</code> always returns the remainder. <code>/</code> truncates the quotient.</>}
        />

        <WorkedExample
          title="Q6 — 35 / 0x2"
          accentColor="#c026d3"
          problemStatement={<>Compute <code>35 / 0x2</code> in C as integers. Decimal answer.</>}
          steps={[
            {
              heading: "Translate hex to decimal",
              body: (
                <>
                  <Why>
                    The literal <code>0x2</code> is hexadecimal, but with only one
                    digit it's trivially the same value as in decimal. 0x = "hex
                    prefix" so 0x2 = 2.
                  </Why>
                  <Eq>0x2 = 2 (decimal)</Eq>
                </>
              ),
            },
            {
              heading: "Integer divide and truncate",
              body: (
                <>
                  <Why>
                    In C, when both operands are integers, <code>/</code> performs
                    <strong> integer division</strong>: it returns just the quotient
                    and discards any remainder, with truncation toward zero. Real-math
                    35÷2 = 17.5, but in C ints, the .5 is dropped:
                  </Why>
                  <Eq>35 / 2:   35 = 17 · 2 + 1   →   quotient = 17, remainder = 1 (dropped)</Eq>
                  <Why>
                    To get 17.5, you'd need at least one of the operands to be
                    floating-point (e.g., <code>35 / 2.0</code> or <code>(double)35 /
                    2</code>). With pure ints the answer is always 17.
                  </Why>
                </>
              ),
              result: { label: "result", value: "17", color: "purple" },
            },
          ]}
          keyInsight={<>Integer division truncates toward zero. 35/2 ≠ 17.5 in C — it's 17.</>}
        />

        <WorkedExample
          title="Q19 — 0x35 bitwise-AND 0xF"
          accentColor="#ef4444"
          problemStatement={<>Compute <code>0x35 &amp; 0xF</code>. Decimal answer.</>}
          steps={[
            {
              heading: "Translate each hex byte into binary",
              body: (
                <>
                  <Why>
                    Each hex digit corresponds to exactly 4 bits (a "nibble"). Convert
                    digit-by-digit using the standard table: 0x3 = 0011, 0x5 = 0101,
                    0x0 = 0000, 0xF = 1111:
                  </Why>
                  <Eq>0x35 = 0011 0101 = 0b 0011 0101</Eq>
                  <Eq>0x0F = 0000 1111 = 0b 0000 1111</Eq>
                  <Why>
                    Lining the bytes up vertically so the bit positions match makes
                    the AND step trivial.
                  </Why>
                </>
              ),
            },
            {
              heading: "Compute the bitwise AND column by column",
              body: (
                <>
                  <Why>
                    Bitwise AND outputs 1 only when both inputs are 1; otherwise 0.
                    Apply this rule to each of the 8 bit positions:
                  </Why>
                  <Eq>  0011 0101    (0x35)</Eq>
                  <Eq>AND 0000 1111  (0x0F)</Eq>
                  <Eq>  ---------</Eq>
                  <Eq>  0000 0101</Eq>
                  <Why>
                    The 0x0F mask is "all 1s in the lower nibble, all 0s in the upper
                    nibble". ANDing with it <strong>preserves the lower nibble of
                    0x35 (which is 0x5) and zeroes out the upper nibble (0x3)</strong>.
                    This is the canonical "extract the low 4 bits" idiom.
                  </Why>
                </>
              ),
            },
            {
              heading: "Convert the result back to decimal",
              body: (
                <>
                  <Why>
                    Bits set in 0b00000101: bit 0 (value 1) and bit 2 (value 4):
                  </Why>
                  <Eq>0b 0000 0101 = 4 + 1 = 5</Eq>
                  <Why>
                    Or in hex: 0x05 = 5 (since the upper nibble is zero). Both confirm
                    the result.
                  </Why>
                </>
              ),
              result: { label: "result", value: "5", color: "red" },
            },
          ]}
          keyInsight={<>AND with 0xF (low nibble) keeps only the bottom 4 bits — a common pattern for "extract low digit".</>}
        />

        <section>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Drill — variant problems</h3>
          <div className="space-y-4">
            <PracticeProblem
              title="Variant: mask for bit 5"
              accentColor={ACCENT}
              statement={<>What decimal value of x makes <code>if (PORT &amp; x)</code> test bit 5 only?</>}
              parts={[
                {
                  label: "(a)",
                  question: "Find x.",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Bit 5 has decimal value 2⁵ — the 6th value in the sequence 1,
                        2, 4, 8, 16, 32, 64, 128 (counting from bit 0). So a mask with
                        only bit 5 set is:
                      </p>
                      <Eq>x = 2⁵ = 32</Eq>
                      <p>
                        In binary: 0b00100000 — a single 1 in the 5th column from the
                        right. This kind of single-bit mask is what you AND with a
                        port to test whether that one specific bit is set.
                      </p>
                    </div>
                  ),
                  answer: { value: "32" },
                },
              ]}
            />
            <PracticeProblem
              title="Variant: integer arithmetic"
              accentColor="#10b981"
              statement="Three quick ones in your head."
              parts={[
                {
                  label: "(a)",
                  question: <code>47 % 8 = ?</code>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Find how many times 8 fits into 47, then keep the remainder.
                        Mental check: 8·5 = 40, 8·6 = 48. So the quotient is 5 (the
                        biggest multiple that fits), and the remainder is 47 − 40 = 7.
                      </p>
                      <Eq>47 = 5 · 8 + 7   →   47 % 8 = 7</Eq>
                    </div>
                  ),
                  answer: { value: "7" },
                },
                {
                  label: "(b)",
                  question: <code>47 / 8 = ?</code>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Same calculation as part (a), but we keep the quotient instead
                        of the remainder. 5·8 = 40 fits into 47; 6·8 = 48 doesn't. So
                        the quotient is 5 — the remainder of 7 is silently dropped:
                      </p>
                      <Eq>47 / 8 = 5 (with remainder 7 truncated)</Eq>
                    </div>
                  ),
                  answer: { value: "5" },
                },
                {
                  label: "(c)",
                  question: <code>0xAB &amp; 0x0F = ?</code>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        ANDing with 0x0F (= 0b00001111) keeps the lower nibble of the
                        left operand and zeros out the upper nibble. The lower nibble
                        of 0xAB is 0xB. The upper nibble (A) is gone:
                      </p>
                      <Eq>0xAB & 0x0F = 0x0B = 11 (decimal)</Eq>
                      <p>
                        Reminder: hex digit B = 11 in decimal (A=10, B=11, C=12, D=13,
                        E=14, F=15).
                      </p>
                    </div>
                  ),
                  answer: { value: "11" },
                },
              ]}
            />
            <PracticeProblem
              title="Variant: bitwise on a port"
              accentColor="#c026d3"
              statement={<>Suppose <code>PORTC_OUT</code> = 0xA7 and you execute <code>PORTC_OUT &amp;= ~0b00010100;</code></>}
              parts={[
                {
                  label: "(a)",
                  question: "What is PORTC_OUT after?",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>What this idiom does.</strong> The pattern <code>x
                        &amp;= ~mask</code> clears (zeros out) all the bits that are
                        set in <em>mask</em>, leaving every other bit unchanged. This
                        is the standard "clear specific bits" idiom in embedded C.
                      </p>
                      <p>
                        <strong>Step 1 — translate to binary.</strong> 0xA7 = the high
                        nibble A (=1010) followed by the low nibble 7 (=0111):
                      </p>
                      <Eq>0xA7 = 0b 1010 0111</Eq>
                      <Eq>mask = 0b 0001 0100   (bits 4 and 2 set)</Eq>
                      <p>
                        <strong>Step 2 — invert the mask</strong> (the unary
                        <code> ~</code> operator flips every bit):
                      </p>
                      <Eq>~mask = 0b 1110 1011   (every bit toggled)</Eq>
                      <p>
                        <strong>Step 3 — AND PORTC_OUT with ~mask.</strong> Only bits
                        that are 1 in BOTH the original value and ~mask survive:
                      </p>
                      <Eq>  1010 0111   (0xA7)</Eq>
                      <Eq>AND 1110 1011  (~mask)</Eq>
                      <Eq>= 1010 0011</Eq>
                      <p>
                        <strong>Step 4 — convert to decimal/hex.</strong> 0b1010 0011
                        = 0xA3. In decimal: 0xA3 = 10·16 + 3 = 163.
                      </p>
                      <p>
                        <strong>Verify:</strong> the original value had bits 0, 1, 2,
                        5, 7 set. After clearing bits 4 and 2, the result has bits 0,
                        1, 5, 7 set — that's 1 + 2 + 32 + 128 = 163. ✓
                      </p>
                    </div>
                  ),
                  answer: { value: "163 (0xA3)" },
                },
              ]}
            />
          </div>
        </section>

        <section>
          <Card className="p-6 border-l-4 border-l-amber-500">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Common traps</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200 space-y-1">
              <li>Bit 3 is the <em>fourth</em> bit from the right (positions 7..0). Don't off-by-one.</li>
              <li><code>0b00001010</code> looks like 1010 = "ten thousand ten" but it's <strong>10</strong>.</li>
              <li><code>35 / 2 = 17</code>, NOT 17.5. C int division always truncates.</li>
              <li><code>&amp;</code> (single) is bitwise; <code>&amp;&amp;</code> is logical. Don't mix them up.</li>
            </ul>
          </Card>
        </section>
      </div>
    </div>
  );
}
