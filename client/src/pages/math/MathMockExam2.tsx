import { MockExamShell, type MathQuestion } from "@/components/math/MockExamShell";
import { InlineMath, BlockMath } from "@/components/math/Katex";

const TIMER = 75 * 60;

const T_APP = "Applications";
const C_APP = "#10b981";
const T_DE = "Differential equations";
const C_DE = "#f59e0b";
const T_SEQ = "Sequences";
const C_SEQ = "#0ea5e9";
const T_SERIES = "Series";
const C_SERIES = "#7c3aed";

const BANK: MathQuestion[] = [
  {
    kind: "numeric",
    id: "1",
    topic: T_APP,
    topicColor: C_APP,
    points: 5,
    prompt: (
      <>
        Find the exact arc length of <InlineMath math="y = \tfrac{2}{3}x^{3/2}" /> on{" "}
        <InlineMath math="[0, 3]" />.
      </>
    ),
    expectedAnswer: 14 / 3,
    tolerance: 0.005,
    solution: (
      <>
        <InlineMath math="y' = \sqrt{x}" />, so <InlineMath math="1 + (y')^2 = 1 + x" />.
        <BlockMath math="L = \int_0^3 \sqrt{1+x}\,dx = \tfrac{2}{3}(1+x)^{3/2}\Big|_0^3 = \tfrac{2}{3}(8 - 1) = \tfrac{14}{3} \approx 4.667" />
      </>
    ),
  },
  {
    kind: "numeric",
    id: "2",
    topic: T_APP,
    topicColor: C_APP,
    points: 4,
    prompt: (
      <>
        Find the average value of <InlineMath math="f(x) = \dfrac{1}{1+x}" /> on{" "}
        <InlineMath math="[0, 1]" />.
      </>
    ),
    expectedAnswer: Math.log(2),
    tolerance: 0.005,
    solution: (
      <>
        <InlineMath math="\bar f = \tfrac{1}{1-0}\int_0^1 \tfrac{dx}{1+x} = \ln(1+x)\Big|_0^1 = \ln 2 \approx 0.693" />
      </>
    ),
  },
  {
    kind: "mc",
    id: "3",
    topic: T_DE,
    topicColor: C_DE,
    points: 4,
    prompt: (
      <>
        Verify whether <InlineMath math="y = e^{-2x}" /> is a solution of{" "}
        <InlineMath math="y'' + 4y' + 4y = 0" />.
      </>
    ),
    choices: [
      <>Yes — substituting gives <InlineMath math="4e^{-2x} - 8e^{-2x} + 4e^{-2x} = 0" />.</>,
      <>No — substitution gives a nonzero result.</>,
      <>Yes, but only at the equilibrium <InlineMath math="x = 0" />.</>,
      <>Cannot be determined without an initial condition.</>,
    ],
    correctIndex: 0,
    solution: (
      <>
        <InlineMath math="y' = -2e^{-2x},\;y'' = 4e^{-2x}" />.
        <BlockMath math="y'' + 4y' + 4y = 4e^{-2x} - 8e^{-2x} + 4e^{-2x} = 0\;\checkmark" />
      </>
    ),
  },
  {
    kind: "numeric",
    id: "4",
    topic: T_DE,
    topicColor: C_DE,
    points: 4,
    prompt: (
      <>
        General solution of <InlineMath math="dy/dx = -y" />? If <InlineMath math="y(0) = 1" />,
        find <InlineMath math="y(2)" />. Round to 4 decimals.
      </>
    ),
    expectedAnswer: Math.exp(-2),
    tolerance: 0.005,
    solution: (
      <>
        Separable: <InlineMath math="dy/y = -dx \Rightarrow \ln|y| = -x + C \Rightarrow y = Ae^{-x}" />.
        <br /><InlineMath math="y(0) = A = 1" />, so <InlineMath math="y(2) = e^{-2} \approx 0.1353" />.
      </>
    ),
  },
  {
    kind: "numeric",
    id: "5",
    topic: T_DE,
    topicColor: C_DE,
    points: 5,
    prompt: (
      <>
        Solve <InlineMath math="dy/dx = xy" /> with <InlineMath math="y(0) = 2" />. Find <InlineMath math="y(2)" />. Round to 4 decimals.
      </>
    ),
    expectedAnswer: 2 * Math.exp(2),
    tolerance: 0.005,
    solution: (
      <>
        Separable: <InlineMath math="dy/y = x\,dx \Rightarrow \ln|y| = x^2/2 + C \Rightarrow y = Ae^{x^2/2}" />.
        <br /><InlineMath math="y(0) = A = 2" />, so <InlineMath math="y(x) = 2e^{x^2/2}" />.
        <br /><InlineMath math="y(2) = 2e^{2} \approx 14.778" />.
      </>
    ),
  },
  {
    kind: "mc",
    id: "6a",
    topic: T_SEQ,
    topicColor: C_SEQ,
    points: 3,
    prompt: <>Determine the limit of <InlineMath math="a_n = \dfrac{3n+1}{2n^2+n}" />.</>,
    choices: [
      <InlineMath math="0" />,
      <InlineMath math="\tfrac{3}{2}" />,
      <InlineMath math="\infty" />,
      <>Limit does not exist</>,
    ],
    correctIndex: 0,
    solution: (
      <>
        Divide top and bottom by <InlineMath math="n^2" />:{" "}
        <InlineMath math="\tfrac{3/n + 1/n^2}{2 + 1/n} \to \tfrac{0}{2} = 0" />.
      </>
    ),
  },
  {
    kind: "mc",
    id: "6b",
    topic: T_SEQ,
    topicColor: C_SEQ,
    points: 3,
    prompt: <>Determine the limit of <InlineMath math="a_n = \dfrac{n^2 + 1}{2n^2 - 3}" />.</>,
    choices: [<InlineMath math="0" />, <InlineMath math="\tfrac{1}{2}" />, <InlineMath math="1" />, <InlineMath math="\infty" />],
    correctIndex: 1,
    solution: <>Divide by <InlineMath math="n^2" />: <InlineMath math="\to 1/2" />.</>,
  },
  {
    kind: "mc",
    id: "7",
    topic: T_SEQ,
    topicColor: C_SEQ,
    points: 4,
    prompt: (
      <>
        Is the sequence <InlineMath math="a_n = \dfrac{n}{n^2 + 1}" /> monotonic? Is it bounded?
      </>
    ),
    choices: [
      <>Decreasing and bounded.</>,
      <>Increasing and bounded.</>,
      <>Non-monotonic but bounded.</>,
      <>Decreasing and unbounded.</>,
    ],
    correctIndex: 0,
    solution: (
      <>
        Treat <InlineMath math="n" /> as continuous: <InlineMath math="f'(n) = (1 - n^2)/(n^2+1)^2 \le 0" /> for{" "}
        <InlineMath math="n \ge 1" />, so decreasing. <InlineMath math="a_1 = 1/2" /> is an upper bound;{" "}
        <InlineMath math="a_n > 0" /> is a lower bound — bounded.
      </>
    ),
  },
  {
    kind: "numeric",
    id: "8a",
    topic: T_SERIES,
    topicColor: C_SERIES,
    points: 3,
    prompt: <>Find the sum of <InlineMath math="\sum_{n=0}^{\infty} 3\left(\tfrac{1}{4}\right)^n" />.</>,
    expectedAnswer: 4,
    tolerance: 0.005,
    solution: (
      <>
        Geometric, <InlineMath math="a = 3, r = 1/4" />. Sum <InlineMath math="= a/(1-r) = 3/(3/4) = 4" />.
      </>
    ),
  },
  {
    kind: "numeric",
    id: "8b",
    topic: T_SERIES,
    topicColor: C_SERIES,
    points: 3,
    prompt: (
      <>
        Find the sum of <InlineMath math="\sum_{n=1}^{\infty} \dfrac{(-1)^n \cdot 5}{3^n}" />. Round to 4 decimals.
      </>
    ),
    expectedAnswer: -1.25,
    tolerance: 0.005,
    solution: (
      <>
        Factor out: <InlineMath math="5 \sum_{n=1}^{\infty} (-1/3)^n = 5 \cdot \tfrac{-1/3}{1 - (-1/3)} = 5\cdot \tfrac{-1/3}{4/3} = -\tfrac{5}{4}" />.
      </>
    ),
  },
  {
    kind: "numeric",
    id: "8c",
    topic: T_SERIES,
    topicColor: C_SERIES,
    points: 3,
    prompt: <>Find the sum of <InlineMath math="\sum_{n=0}^{\infty} \tfrac{2^n}{3^n}" />.</>,
    expectedAnswer: 3,
    tolerance: 0.005,
    solution: (
      <>
        <InlineMath math="\sum (2/3)^n = 1/(1 - 2/3) = 3" />.
      </>
    ),
  },
  {
    kind: "numeric",
    id: "9",
    topic: T_SERIES,
    topicColor: C_SERIES,
    points: 5,
    prompt: (
      <>
        Find the sum of the telescoping series{" "}
        <InlineMath math="\sum_{n=1}^{\infty} \dfrac{2}{n(n+2)}" /> using partial fractions.
      </>
    ),
    expectedAnswer: 1.5,
    tolerance: 0.005,
    solution: (
      <>
        <InlineMath math="\dfrac{2}{n(n+2)} = \dfrac{1}{n} - \dfrac{1}{n+2}" />.
        <BlockMath math="S_N = \Bigl(1 - \tfrac{1}{3}\Bigr) + \Bigl(\tfrac{1}{2} - \tfrac{1}{4}\Bigr) + \Bigl(\tfrac{1}{3} - \tfrac{1}{5}\Bigr) + \dots = 1 + \tfrac{1}{2} - \tfrac{1}{N+1} - \tfrac{1}{N+2}" />
        Limit: <InlineMath math="1 + 1/2 = 3/2" />.
      </>
    ),
  },
  {
    kind: "mc",
    id: "10a",
    topic: T_SERIES,
    topicColor: C_SERIES,
    points: 3,
    prompt: <>Determine convergence of <InlineMath math="\sum_{n=1}^{\infty} \dfrac{1}{n^{3/2}}" />.</>,
    choices: [
      <>Converges (p-series, <InlineMath math="p = 3/2 > 1" />).</>,
      <>Diverges (p-series, <InlineMath math="p = 3/2 \le 1" />).</>,
      <>Converges (geometric, <InlineMath math="|r| < 1" />).</>,
      <>Diverges (nth-term test).</>,
    ],
    correctIndex: 0,
    solution: <>p-series with <InlineMath math="p = 3/2 > 1" />, so converges.</>,
  },
  {
    kind: "mc",
    id: "10b",
    topic: T_SERIES,
    topicColor: C_SERIES,
    points: 3,
    prompt: <>Determine convergence of <InlineMath math="\sum_{n=2}^{\infty} \dfrac{1}{n(\ln n)^2}" />.</>,
    choices: [
      <>Converges by the integral test.</>,
      <>Diverges by the integral test.</>,
      <>Converges as a p-series.</>,
      <>Diverges by the nth-term test.</>,
    ],
    correctIndex: 0,
    solution: (
      <>
        <InlineMath math="f(x) = 1/(x(\ln x)^2)" /> is positive, decreasing, continuous on{" "}
        <InlineMath math="[2, \infty)" />. With <InlineMath math="u = \ln x" />:{" "}
        <InlineMath math="\int_2^{\infty} \tfrac{dx}{x(\ln x)^2} = \int_{\ln 2}^{\infty} \tfrac{du}{u^2}" /> converges.
      </>
    ),
  },
  {
    kind: "mc",
    id: "10c",
    topic: T_SERIES,
    topicColor: C_SERIES,
    points: 3,
    prompt: <>Determine convergence of <InlineMath math="\sum_{n=1}^{\infty} \dfrac{n^2}{n^2 + 1}" />.</>,
    choices: [
      <>Converges by the ratio test.</>,
      <>Diverges by the nth-term test.</>,
      <>Converges by comparison with <InlineMath math="\sum 1/n^2" />.</>,
      <>Conditionally convergent.</>,
    ],
    correctIndex: 1,
    solution: (
      <><InlineMath math="\lim_{n\to\infty} a_n = 1 \ne 0" />, so the series diverges.</>
    ),
  },
  {
    kind: "mc",
    id: "10d",
    topic: T_SERIES,
    topicColor: C_SERIES,
    points: 4,
    prompt: <>Determine convergence of <InlineMath math="\sum_{n=1}^{\infty} \dfrac{n!}{n^n}" />.</>,
    choices: [
      <>Diverges (the terms grow large).</>,
      <>Converges by the ratio test (<InlineMath math="L = 1/e < 1" />).</>,
      <>Inconclusive — ratio test gives <InlineMath math="L = 1" />.</>,
      <>Converges by comparison with <InlineMath math="\sum 1/n^2" />.</>,
    ],
    correctIndex: 1,
    solution: (
      <>
        <BlockMath math="\Bigl|\frac{a_{n+1}}{a_n}\Bigr| = \frac{(n+1)!\,n^n}{(n+1)^{n+1}\,n!} = \frac{n^n}{(n+1)^n} = \frac{1}{(1 + 1/n)^n} \to \frac{1}{e} < 1" />
        Converges absolutely.
      </>
    ),
  },
];

export default function MathMockExam2() {
  return (
    <MockExamShell
      title="Mock Exam 2"
      subtitle="Ch 6 Applications · Ch 7 Differential Equations · Ch 8 Sequences & Series"
      backHref="/math"
      backLabel="Back to Math"
      timerSeconds={TIMER}
      bank={BANK}
      primaryColor="#7c3aed"
      secondaryColor="#f59e0b"
      introBlurb={
        <>
          Calibrated to the topic distribution of the AMS 161 sample exam #2.
          Sixteen sub-questions across arc length, average value, differential
          equations (verification + separable), sequences (limit, monotonicity,
          boundedness), geometric &amp; telescoping series, and the four classic
          convergence tests (p-series, integral, nth-term, ratio).
        </>
      }
    />
  );
}
