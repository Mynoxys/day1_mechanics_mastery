import { MockExamShell, type MathQuestion } from "@/components/math/MockExamShell";
import { InlineMath, BlockMath } from "@/components/math/Katex";

const TIMER = 75 * 60;

const T_RIEMANN = "Riemann/FTC";
const C_RIEMANN = "#2563eb";
const T_TECH = "Integration techniques";
const C_TECH = "#7c3aed";
const T_NUMERIC = "Numerical / improper";
const C_NUMERIC = "#0ea5e9";
const T_VOLUME = "Volumes";
const C_VOLUME = "#10b981";

const BANK: MathQuestion[] = [
  {
    kind: "numeric",
    id: "1",
    topic: T_RIEMANN,
    topicColor: C_RIEMANN,
    points: 5,
    prompt: (
      <>
        Use a left Riemann sum with <strong>n = 4</strong> to approximate{" "}
        <InlineMath math="\int_0^4 x^2\,dx" />.
      </>
    ),
    expectedAnswer: 14,
    tolerance: 0.001,
    solution: (
      <>
        <InlineMath math="\Delta x = 1" />, sample points <InlineMath math="x_i^* = 0, 1, 2, 3" />.<br />
        <BlockMath math="L_4 = 1\cdot(0^2 + 1^2 + 2^2 + 3^2) = 0 + 1 + 4 + 9 = 14" />
      </>
    ),
  },
  {
    kind: "numeric",
    id: "2",
    topic: T_RIEMANN,
    topicColor: C_RIEMANN,
    points: 5,
    prompt: (
      <>
        Use the limit-of-Riemann-sums definition of the definite integral to evaluate{" "}
        <InlineMath math="\int_0^2 x^2\,dx" />.
      </>
    ),
    expectedAnswer: 8 / 3,
    tolerance: 0.005,
    solution: (
      <>
        <InlineMath math="\Delta x = 2/n,\;x_i = 2i/n" />.<br />
        <InlineMath math="\sum_{i=1}^n x_i^2 \Delta x = \sum_{i=1}^n (2i/n)^2 (2/n) = (8/n^3)\sum i^2 = (8/n^3)\cdot n(n+1)(2n+1)/6" />.<br />
        Limit as <InlineMath math="n\to\infty" />: <InlineMath math="\;8/3 \approx 2.667" />.
      </>
    ),
  },
  {
    kind: "numeric",
    id: "3a",
    topic: T_RIEMANN,
    topicColor: C_RIEMANN,
    points: 4,
    prompt: (
      <>
        A particle has velocity <InlineMath math="v(t) = t^2 - 4t" /> m/s on{" "}
        <InlineMath math="[0, 5]" />. Find the <em>displacement</em> (signed area).
      </>
    ),
    expectedAnswer: -25 / 3,
    unit: "m",
    tolerance: 0.005,
    solution: (
      <>
        <BlockMath math="\int_0^5 (t^2 - 4t)\,dt = \Bigl[\tfrac{t^3}{3} - 2t^2\Bigr]_0^5 = \tfrac{125}{3} - 50 = -\tfrac{25}{3} \approx -8.333" />
      </>
    ),
  },
  {
    kind: "numeric",
    id: "3b",
    topic: T_RIEMANN,
    topicColor: C_RIEMANN,
    points: 4,
    prompt: <>Same particle. Find the <em>total distance</em> traveled on <InlineMath math="[0,5]" />.</>,
    expectedAnswer: 13,
    unit: "m",
    tolerance: 0.005,
    solution: (
      <>
        <InlineMath math="v = 0" /> at <InlineMath math="t = 0, 4" />. On <InlineMath math="(0,4)" />, <InlineMath math="v < 0" />; on <InlineMath math="(4,5)" />, <InlineMath math="v > 0" />.
        <BlockMath math="\int_0^5 |v|\,dt = -\int_0^4 v\,dt + \int_4^5 v\,dt = \tfrac{32}{3} + \tfrac{7}{3} = 13" />
      </>
    ),
  },
  {
    kind: "mc",
    id: "4",
    topic: T_RIEMANN,
    topicColor: C_RIEMANN,
    points: 4,
    prompt: (
      <>
        Use FTC Part 1 to find <InlineMath math="\dfrac{d}{dx}\!\int_2^{x^2}\sqrt{1+t^3}\,dt" />.
      </>
    ),
    choices: [
      <InlineMath math="\sqrt{1+x^3}" />,
      <InlineMath math="2x\sqrt{1+x^6}" />,
      <InlineMath math="\sqrt{1+x^6}" />,
      <InlineMath math="x^2\sqrt{1+x^6}" />,
    ],
    correctIndex: 1,
    solution: (
      <>
        Chain rule: <InlineMath math="\frac{d}{dx}\int_2^{u(x)}f(t)\,dt = f(u(x))\cdot u'(x)" /> where <InlineMath math="u = x^2, u' = 2x, f(u) = \sqrt{1+u^3} = \sqrt{1+x^6}" />.
      </>
    ),
  },
  {
    kind: "numeric",
    id: "5a",
    topic: T_TECH,
    topicColor: C_TECH,
    points: 3,
    prompt: <>Evaluate <InlineMath math="\int_0^2 (x^2 + 3x + 1)\,dx" />.</>,
    expectedAnswer: 32 / 3,
    tolerance: 0.005,
    solution: (
      <>
        <InlineMath math="\bigl[\tfrac{x^3}{3} + \tfrac{3x^2}{2} + x\bigr]_0^2 = \tfrac{8}{3} + 6 + 2 = \tfrac{32}{3} \approx 10.667" />
      </>
    ),
  },
  {
    kind: "numeric",
    id: "5b",
    topic: T_TECH,
    topicColor: C_TECH,
    points: 3,
    prompt: <>Evaluate <InlineMath math="\int_0^{\ln 2} e^x\,dx" />.</>,
    expectedAnswer: 1,
    tolerance: 0.005,
    solution: <><InlineMath math="e^x\big|_0^{\ln 2} = 2 - 1 = 1" /></>,
  },
  {
    kind: "numeric",
    id: "5c",
    topic: T_TECH,
    topicColor: C_TECH,
    points: 4,
    prompt: <>Evaluate <InlineMath math="\int_0^1 x e^{x^2}\,dx" /> (substitution).</>,
    expectedAnswer: (Math.E - 1) / 2,
    tolerance: 0.005,
    solution: (
      <>
        <InlineMath math="u = x^2,\;du = 2x\,dx" />.
        <BlockMath math="= \tfrac{1}{2}\int_0^1 e^u\,du = \tfrac{1}{2}(e - 1) \approx 0.859" />
      </>
    ),
  },
  {
    kind: "numeric",
    id: "5d",
    topic: T_TECH,
    topicColor: C_TECH,
    points: 4,
    prompt: <>Evaluate <InlineMath math="\int_0^{\pi} x\cos x\,dx" /> (integration by parts).</>,
    expectedAnswer: -2,
    tolerance: 0.005,
    solution: (
      <>
        IBP with <InlineMath math="u = x,\;dv = \cos x\,dx \Rightarrow v = \sin x" />.
        <BlockMath math="= x\sin x\Big|_0^\pi - \int_0^\pi \sin x\,dx = 0 - [-\cos x]_0^\pi = -(1 - (-1)) = -2" />
      </>
    ),
  },
  {
    kind: "numeric",
    id: "5e",
    topic: T_TECH,
    topicColor: C_TECH,
    points: 4,
    prompt: <>Evaluate <InlineMath math="\int_0^1 \dfrac{1}{x^2 + 4x + 3}\,dx" /> (partial fractions).</>,
    expectedAnswer: 0.5 * Math.log(3 / 2),
    tolerance: 0.005,
    solution: (
      <>
        <InlineMath math="x^2 + 4x + 3 = (x+1)(x+3)" />, so <InlineMath math="\tfrac{1}{(x+1)(x+3)} = \tfrac{1}{2}\bigl(\tfrac{1}{x+1} - \tfrac{1}{x+3}\bigr)" />.
        <BlockMath math="= \tfrac{1}{2}\bigl[\ln(x+1) - \ln(x+3)\bigr]_0^1 = \tfrac{1}{2}\bigl(\ln\tfrac{2}{4} - \ln\tfrac{1}{3}\bigr) = \tfrac{1}{2}\ln\tfrac{3}{2} \approx 0.2027" />
      </>
    ),
  },
  {
    kind: "numeric",
    id: "6a",
    topic: T_NUMERIC,
    topicColor: C_NUMERIC,
    points: 3,
    prompt: (
      <>
        Approximate <InlineMath math="\int_0^2 \sqrt{1+x^3}\,dx" /> by the <strong>Trapezoidal rule</strong> with{" "}
        <InlineMath math="n = 8" />. Round to 4 decimals.
      </>
    ),
    expectedAnswer: 3.2517,
    tolerance: 0.002,
    solution: (
      <>
        <InlineMath math="\Delta x = 0.25" />, <InlineMath math="T_8 = \tfrac{\Delta x}{2}\bigl[f_0 + 2(f_1+\dots+f_7) + f_8\bigr]" />.
        <br />Computed: <InlineMath math="T_8 \approx 3.2517" />.
      </>
    ),
  },
  {
    kind: "numeric",
    id: "6b",
    topic: T_NUMERIC,
    topicColor: C_NUMERIC,
    points: 3,
    prompt: <>Same integral by the <strong>Midpoint rule</strong> with <InlineMath math="n = 8" />.</>,
    expectedAnswer: 3.2361,
    tolerance: 0.002,
    solution: (
      <>
        <InlineMath math="M_8 = \Delta x \sum_{i=1}^{8} f(\bar{x}_i)" /> with midpoints at <InlineMath math="0.125, 0.375, \dots, 1.875" />.
        <br /><InlineMath math="M_8 \approx 3.2361" />.
      </>
    ),
  },
  {
    kind: "numeric",
    id: "6c",
    topic: T_NUMERIC,
    topicColor: C_NUMERIC,
    points: 4,
    prompt: <>Same integral by <strong>Simpson's rule</strong> with <InlineMath math="n = 8" />.</>,
    expectedAnswer: 3.2412,
    tolerance: 0.002,
    solution: (
      <>
        <InlineMath math="S_8 = \tfrac{\Delta x}{3}\bigl[f_0 + 4(f_1+f_3+f_5+f_7) + 2(f_2+f_4+f_6) + f_8\bigr]" />.
        <br /><InlineMath math="S_8 \approx 3.2412" />.
      </>
    ),
  },
  {
    kind: "numeric",
    id: "7",
    topic: T_NUMERIC,
    topicColor: C_NUMERIC,
    points: 5,
    prompt: (
      <>
        Smallest <InlineMath math="n" /> so that the Trapezoidal rule on{" "}
        <InlineMath math="\int_0^2 (x^4 + 1)\,dx" /> is accurate to within <InlineMath math="0.001" />.
        (Use <InlineMath math="|E_T| \le K(b-a)^3 / (12n^2)" />, with <InlineMath math="K = \max|f''|" /> on the interval.)
      </>
    ),
    expectedAnswer: 179,
    tolerance: 0.01,
    solution: (
      <>
        <InlineMath math="f''(x) = 12x^2" />, max on <InlineMath math="[0,2]" /> is <InlineMath math="48" />.
        <BlockMath math="|E_T| \le \frac{48 \cdot 8}{12 n^2} = \frac{32}{n^2} \le 0.001 \;\Rightarrow\; n^2 \ge 32000 \;\Rightarrow\; n \ge 178.9" />
        Smallest integer: <InlineMath math="n = 179" />.
      </>
    ),
  },
  {
    kind: "mc",
    id: "8",
    topic: T_NUMERIC,
    topicColor: C_NUMERIC,
    points: 4,
    prompt: (
      <>
        Use the Comparison Theorem to determine whether{" "}
        <InlineMath math="\int_1^{\infty} \dfrac{1}{x^2 + 1}\,dx" /> converges or diverges.
      </>
    ),
    choices: [
      <>Converges by comparison with <InlineMath math="\int_1^{\infty} 1/x^2\,dx" /> (which converges, p = 2 &gt; 1).</>,
      <>Diverges by comparison with <InlineMath math="\int_1^{\infty} 1/x\,dx" /> (which diverges).</>,
      <>Cannot be determined from comparison alone.</>,
      <>Diverges; the integrand is bounded below by a positive constant.</>,
    ],
    correctIndex: 0,
    solution: (
      <>
        For <InlineMath math="x \ge 1" />: <InlineMath math="0 \le \tfrac{1}{x^2+1} \le \tfrac{1}{x^2}" />. Since <InlineMath math="\int_1^{\infty} 1/x^2\,dx" /> converges (p-test, p=2), so does the smaller integral.
      </>
    ),
  },
  {
    kind: "numeric",
    id: "9",
    topic: T_TECH,
    topicColor: C_TECH,
    points: 4,
    prompt: <>Evaluate <InlineMath math="\int_0^{\pi/4} \sin(2x)\,dx" /> by substitution.</>,
    expectedAnswer: 0.5,
    tolerance: 0.005,
    solution: (
      <>
        <InlineMath math="u = 2x,\;du = 2\,dx" />, limits <InlineMath math="0 \to \pi/2" />.
        <BlockMath math="= \tfrac{1}{2}\int_0^{\pi/2}\sin u\,du = \tfrac{1}{2}\bigl[-\cos u\bigr]_0^{\pi/2} = \tfrac{1}{2}(0 - (-1)) = \tfrac{1}{2}" />
      </>
    ),
  },
  {
    kind: "numeric",
    id: "10",
    topic: T_VOLUME,
    topicColor: C_VOLUME,
    points: 5,
    prompt: (
      <>
        The region bounded by <InlineMath math="y = \sqrt{x}, y = 0, x = 4" /> is rotated about the
        x-axis. Find the volume (use disks). Round to 4 decimals.
      </>
    ),
    expectedAnswer: 8 * Math.PI,
    tolerance: 0.005,
    solution: (
      <>
        <BlockMath math="V = \pi\int_0^4 (\sqrt{x})^2\,dx = \pi\int_0^4 x\,dx = \pi\cdot\tfrac{x^2}{2}\Big|_0^4 = 8\pi \approx 25.1327" />
      </>
    ),
  },
  {
    kind: "numeric",
    id: "11",
    topic: T_VOLUME,
    topicColor: C_VOLUME,
    points: 5,
    prompt: (
      <>
        The region bounded by <InlineMath math="y = x^2, y = 0, x = 1, x = 3" /> is rotated about the
        y-axis. Find the volume by <strong>cylindrical shells</strong>. Round to 4 decimals.
      </>
    ),
    expectedAnswer: 40 * Math.PI,
    tolerance: 0.005,
    solution: (
      <>
        Shell radius <InlineMath math="x" />, height <InlineMath math="x^2" />.
        <BlockMath math="V = 2\pi\int_1^3 x\cdot x^2\,dx = 2\pi\cdot\tfrac{x^4}{4}\Big|_1^3 = 2\pi\cdot 20 = 40\pi \approx 125.6637" />
      </>
    ),
  },
];

export default function MathMockExam1() {
  return (
    <MockExamShell
      title="Mock Exam 1"
      subtitle="Ch 5 Integration · Ch 6 Volumes (sampler)"
      backHref="/math"
      backLabel="Back to Math"
      timerSeconds={TIMER}
      bank={BANK}
      primaryColor="#10b981"
      secondaryColor="#06b6d4"
      introBlurb={
        <>
          Calibrated to the topic distribution of the AMS 161 sample exam #1.
          Eleven problems (numbered to match the original) covering Riemann sums,
          FTC parts 1 &amp; 2, evaluation techniques (substitution, by parts, partial
          fractions), numerical integration (Trap / Mid / Simpson + error bounds),
          improper integrals via comparison, and volumes of revolution.
        </>
      }
    />
  );
}
