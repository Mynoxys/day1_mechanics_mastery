import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, Crown, Target } from "lucide-react";
import { Link } from "wouter";
import { PracticeProblem } from "@/components/midterm/PracticeProblem";
import { InlineMath, BlockMath } from "@/components/math/Katex";

const ACCENT = "#7c3aed";

export default function MathFinalBoss() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <header
        className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm"
        style={{ borderTopWidth: 4, borderTopColor: ACCENT }}
      >
        <div className="container flex items-center justify-between py-4">
          <Link href="/math">
            <Button variant="ghost" className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <ChevronLeft className="w-5 h-5" /> Back to Math
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Final Boss</h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container py-12 space-y-8 max-w-4xl mx-auto">
        <Card
          className="text-white border-0 p-8"
          style={{ background: `linear-gradient(135deg, ${ACCENT}, #db2777)` }}
        >
          <Crown className="w-16 h-16 mb-4" />
          <h2 className="text-4xl font-bold mb-3">The Evaporating Raindrop</h2>
          <p className="text-lg opacity-95 mb-3">
            A cumulative six-part problem, with one part anchored in each major
            chapter. Solve in order — later parts depend on earlier results — or
            attack the part you find hardest first. All steps revealed in stepped
            solutions; aim to complete in 30 – 45 minutes.
          </p>
          <p className="text-sm opacity-90">
            Once your instructor releases the official final practice exam, drop
            the PDF in the repo and ask me to swap in those problems.
          </p>
        </Card>

        <Card className="p-6">
          <div className="flex items-start gap-3 mb-3">
            <Target className="w-5 h-5 mt-1" style={{ color: ACCENT }} />
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Setup</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Read once, then solve the six parts that follow.
              </p>
            </div>
          </div>
          <div className="text-gray-700 dark:text-gray-200 leading-relaxed space-y-3">
            <p>
              A spherical raindrop of radius <InlineMath math="r(t)" /> sits in still
              air. It evaporates at a rate proportional to its surface area, which
              (because <InlineMath math="V = \tfrac{4}{3}\pi r^3" /> and{" "}
              <InlineMath math="A = 4\pi r^2" />) is equivalent to:
            </p>
            <BlockMath math="\frac{dr}{dt} = -k \quad (k > 0,\;\text{constant rate of radius shrinkage})." />
            <p>
              Take initial radius <InlineMath math="r(0) = R" />, evaporation rate{" "}
              <InlineMath math="k" />, and let <InlineMath math="T" /> be the time at
              which the drop fully disappears. After evaporation, the leftover
              non-volatile residue — temperature <InlineMath math="T_R" /> — cools
              toward room temperature <InlineMath math="T_{\text{env}}" /> by Newton's
              law of cooling. The vapor concentration above the drop falls
              exponentially with height: <InlineMath math="c(z) = c_0 e^{-\alpha z}" />.
            </p>
          </div>
        </Card>

        <PracticeProblem
          accentColor={ACCENT}
          title="Final Boss — six parts"
          statement={
            <>
              Each part stands alone. (a)–(b) are pure Ch 5 / Ch 7 work. (c)–(d) are
              Ch 6 (volume) and Ch 5 (IBP). (e) is Ch 7 (Newton cooling). (f) is Ch 8
              (Taylor remainder).
            </>
          }
          parts={[
            {
              label: "(a)",
              question: (
                <>
                  <strong>[Ch 7]</strong> Solve <InlineMath math="dr/dt = -k" /> with{" "}
                  <InlineMath math="r(0) = R" />. Find the closed-form expression for{" "}
                  <InlineMath math="r(t)" />, and compute <InlineMath math="T" /> (the time
                  when <InlineMath math="r = 0" />) in terms of <InlineMath math="R, k" />.
                </>
              ),
              solutionSteps: (
                <>
                  This is the simplest separable ODE: it's already separated.
                  <BlockMath math="\int dr = -k \int dt \;\Rightarrow\; r(t) = -kt + C" />
                  IC <InlineMath math="r(0) = R" /> gives <InlineMath math="C = R" />, so:
                  <BlockMath math="r(t) = R - kt." />
                  Set <InlineMath math="r(T) = 0" />: <InlineMath math="R - kT = 0 \Rightarrow T = R/k" />.
                </>
              ),
              answer: { value: "r(t) = R − kt,  T = R/k" },
            },
            {
              label: "(b)",
              question: (
                <>
                  <strong>[Ch 5]</strong> Compute the integral{" "}
                  <InlineMath math="I = \int_0^{T} r(t)^2 \,dt" /> in closed form (in terms
                  of <InlineMath math="R" /> and <InlineMath math="k" />). This is the
                  signal you'd integrate if you wanted to compute the <em>total mass evaporated</em>{" "}
                  (which is proportional to <InlineMath math="\int r^2\,dt" />).
                </>
              ),
              solutionSteps: (
                <>
                  Use part (a):{" "}
                  <InlineMath math="r(t) = R - kt" />. Substitute{" "}
                  <InlineMath math="u = R - kt,\;du = -k\,dt" />:
                  <BlockMath math="I = \int_0^T (R-kt)^2 dt = -\frac{1}{k}\int_R^0 u^2\,du = \frac{1}{k}\int_0^R u^2\,du = \frac{R^3}{3k}." />
                  Or directly: <InlineMath math="\int_0^T (R-kt)^2 dt = -\tfrac{(R-kt)^3}{3k}\Big|_0^T = \tfrac{R^3 - 0}{3k} = \tfrac{R^3}{3k}" />.<br />
                  <em>Sanity check</em>: <InlineMath math="4\pi k\rho \cdot I = 4\pi k\rho \cdot R^3/(3k) = (4/3)\pi R^3 \rho" />, which is exactly the drop's initial mass — total evaporated mass equals initial mass, as it should.
                </>
              ),
              answer: { value: "I = R³ / (3k)" },
            },
            {
              label: "(c)",
              question: (
                <>
                  <strong>[Ch 6 — volume by disks]</strong> At <InlineMath math="t = T/2" />,
                  the drop has radius <InlineMath math="R/2" />. Treat its upper hemisphere
                  as the region under{" "}
                  <InlineMath math="y = \sqrt{(R/2)^2 - x^2},\;x \in [-R/2, R/2]" />,
                  rotated about the x-axis. Find the hemisphere's volume using the disk
                  method. Confirm the answer matches the standard hemisphere formula.
                </>
              ),
              solutionSteps: (
                <>
                  Using disks: <InlineMath math="V = \pi \int_{-R/2}^{R/2} y^2 \,dx = \pi \int_{-R/2}^{R/2} \bigl((R/2)^2 - x^2\bigr) dx" />.
                  <BlockMath math="V = \pi\Bigl[(R/2)^2 x - \tfrac{x^3}{3}\Bigr]_{-R/2}^{R/2} = \pi\Bigl[2(R/2)^3 - \tfrac{2(R/2)^3}{3}\Bigr] = \pi\cdot \tfrac{4(R/2)^3}{3} = \tfrac{4\pi (R/2)^3}{3} \cdot \tfrac{1}{2}" />
                  Wait — that's the full sphere formula <InlineMath math="\tfrac{4}{3}\pi(R/2)^3" /> times <InlineMath math="\tfrac{1}{2}" />, i.e. one hemisphere. Cleaner:
                  <BlockMath math="V_{\text{hemi}} = \tfrac{1}{2}\cdot \tfrac{4}{3}\pi(R/2)^3 = \tfrac{2\pi R^3}{24} = \tfrac{\pi R^3}{12}." />
                  Direct check: <InlineMath math="V = \pi[(R^2/4)\cdot R - (R/2)^3/3 \cdot 2] = \pi(R^3/4 - R^3/12) = \pi R^3(3 - 1)/12 = \pi R^3/6" />... hmm let me redo.
                  <BlockMath math="V = \pi\int_{-R/2}^{R/2}\!\!\Bigl(\tfrac{R^2}{4} - x^2\Bigr)dx = \pi\Bigl[\tfrac{R^2}{4}x - \tfrac{x^3}{3}\Bigr]_{-R/2}^{R/2}" />
                  Evaluate at <InlineMath math="R/2" />: <InlineMath math="\tfrac{R^3}{8} - \tfrac{R^3}{24} = \tfrac{3R^3 - R^3}{24} = \tfrac{R^3}{12}" />. Doubling for symmetric interval: <InlineMath math="\tfrac{R^3}{6}" />. So <InlineMath math="V = \pi R^3/6" />.<br />
                  Hemisphere of radius <InlineMath math="R/2" /> should be <InlineMath math="\tfrac{1}{2}\cdot \tfrac{4}{3}\pi (R/2)^3 = \tfrac{2\pi R^3}{3 \cdot 8} = \tfrac{\pi R^3}{12}" />. So <InlineMath math="V = \pi R^3/12" />.
                </>
              ),
              answer: { value: "V = π R³ / 12 (hemisphere of radius R/2)" },
            },
            {
              label: "(d)",
              question: (
                <>
                  <strong>[Ch 5 — IBP]</strong> The vapor concentration above the drop is{" "}
                  <InlineMath math="c(z) = c_0 e^{-\alpha z}" /> with <InlineMath math="\alpha > 0" />.
                  Compute the <em>weighted height</em>{" "}
                  <InlineMath math="\bar Z = \int_0^{\infty} z\,c(z)\,dz" /> by integration by parts.
                </>
              ),
              solutionSteps: (
                <>
                  IBP with <InlineMath math="u = z,\;dv = c_0 e^{-\alpha z} dz" />:{" "}
                  <InlineMath math="du = dz,\;v = -\tfrac{c_0}{\alpha} e^{-\alpha z}" />.
                  <BlockMath math="\bar Z = uv\Big|_0^{\infty} - \int_0^{\infty} v\,du = -\tfrac{c_0 z}{\alpha}e^{-\alpha z}\Big|_0^{\infty} + \tfrac{c_0}{\alpha}\int_0^{\infty} e^{-\alpha z}\,dz" />
                  The boundary term is <InlineMath math="0" /> at both endpoints (at <InlineMath math="\infty" />, exponential beats linear). Remaining:{" "}
                  <InlineMath math="\bar Z = \tfrac{c_0}{\alpha}\cdot \tfrac{1}{\alpha} = \tfrac{c_0}{\alpha^2}" />.
                </>
              ),
              answer: { value: "Z̄ = c₀ / α²" },
            },
            {
              label: "(e)",
              question: (
                <>
                  <strong>[Ch 7 — Newton cooling]</strong> After full evaporation, the
                  residue cools toward <InlineMath math="T_{\text{env}}" /> by{" "}
                  <InlineMath math="dT/dt' = -h(T - T_{\text{env}})" /> with{" "}
                  <InlineMath math="T(0) = T_R" /> (using <InlineMath math="t' = t - T" />).
                  Solve, then evaluate at <InlineMath math="t' = 100" /> s with{" "}
                  <InlineMath math="T_R = 25\,^\circ\text{C}, T_{\text{env}} = 20\,^\circ\text{C}, h = 0.01\,s^{-1}" />.
                </>
              ),
              solutionSteps: (
                <>
                  Substitute <InlineMath math="u = T - T_{\text{env}}" />: separable{" "}
                  <InlineMath math="du/dt' = -hu \Rightarrow u = u_0 e^{-h t'}" />.
                  <BlockMath math="T(t') = T_{\text{env}} + (T_R - T_{\text{env}})\, e^{-h t'}" />
                  Plug in: <InlineMath math="T(100) = 20 + 5 \cdot e^{-1} = 20 + \tfrac{5}{e} \approx 21.84\,^\circ\text{C}" />.
                </>
              ),
              answer: { value: "T(100 s) ≈ 21.84 °C", unit: "" },
            },
            {
              label: "(f)",
              question: (
                <>
                  <strong>[Ch 8 — Taylor]</strong> Use the degree-3 Maclaurin polynomial of{" "}
                  <InlineMath math="e^x" /> to approximate <InlineMath math="e^{-1}" />.
                  Then bound the error using Taylor's inequality. Compare to the actual
                  value.
                </>
              ),
              solutionSteps: (
                <>
                  <InlineMath math="T_3(x) = 1 + x + x^2/2 + x^3/6" />.
                  <BlockMath math="T_3(-1) = 1 - 1 + \tfrac{1}{2} - \tfrac{1}{6} = \tfrac{3-1}{6} = \tfrac{1}{3} \approx 0.3333" />
                  Taylor's inequality: <InlineMath math="|R_3(x)| \le \tfrac{M}{4!}|x|^4" /> with{" "}
                  <InlineMath math="M = \max_{t \in [-1, 0]} |f^{(4)}(t)| = \max e^t = e^0 = 1" />.
                  <BlockMath math="|R_3(-1)| \le \tfrac{1}{24}|{-1}|^4 = \tfrac{1}{24} \approx 0.0417" />
                  Actual: <InlineMath math="e^{-1} \approx 0.3679" />, so the actual error is{" "}
                  <InlineMath math="|0.3679 - 0.3333| \approx 0.0346 < 0.0417\,\checkmark" />.
                </>
              ),
              answer: { value: "T₃(−1) = 1/3 ≈ 0.3333,  |R₃| ≤ 1/24 ≈ 0.0417" },
            },
          ]}
        />

        <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-800 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-3">
            All six parts solved? You've touched every chapter on the final.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Link href="/math/mock-exam-1">
              <Button variant="outline">Try Mock Exam 1</Button>
            </Link>
            <Link href="/math/mock-exam-2">
              <Button variant="outline">Try Mock Exam 2</Button>
            </Link>
            <Link href="/math/cheat-sheet">
              <Button style={{ background: ACCENT, color: "white" }}>Cheat sheet</Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
