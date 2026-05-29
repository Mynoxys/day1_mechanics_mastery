import { Button } from "@/components/ui/button";
import { ChevronLeft, Printer } from "lucide-react";
import { Link } from "wouter";
import { ReactNode } from "react";

const printStyles = `
  @page { size: letter; margin: 0.35in; }
  @media print {
    html, body { background: #fff !important; }
    body * { visibility: hidden; }
    .print-area, .print-area * { visibility: visible; }
    .print-area { position: absolute; inset: 0; }
    .no-print { display: none !important; }
    .sheet {
      box-shadow: none !important;
      border: none !important;
      width: 100% !important;
      height: auto !important;
      aspect-ratio: auto !important;
      page-break-after: always;
      break-after: page;
      margin: 0 !important;
      padding: 0 !important;
    }
    .sheet:last-child { page-break-after: auto; break-after: auto; }
  }
`;

function Sec({
  title,
  color,
  tag,
  children,
}: {
  title: string;
  color: string;
  tag?: string;
  children: ReactNode;
}) {
  return (
    <section className="break-inside-avoid mb-2">
      <div
        className="flex items-baseline gap-2 px-1.5 py-0.5 rounded-sm mb-1"
        style={{ background: color, color: "#fff" }}
      >
        <h3 className="text-[10px] font-extrabold uppercase tracking-wide leading-tight">
          {title}
        </h3>
        {tag && (
          <span className="text-[8px] font-medium opacity-90 ml-auto">{tag}</span>
        )}
      </div>
      <div className="space-y-[2px] text-[8.5px] leading-[1.25] text-slate-900">
        {children}
      </div>
    </section>
  );
}

function F({ k, v }: { k: string; v: ReactNode }) {
  return (
    <div className="flex gap-1.5">
      <span className="font-semibold text-slate-700 shrink-0">{k}</span>
      <span className="font-mono text-slate-900">{v}</span>
    </div>
  );
}

function W({ children }: { children: ReactNode }) {
  return (
    <div className="text-[8px] text-emerald-800 bg-emerald-50 border-l-2 border-emerald-500 pl-1.5 py-[1px]">
      <span className="font-bold">▸ </span>
      {children}
    </div>
  );
}

function G({ children }: { children: ReactNode }) {
  return (
    <div className="text-[8px] text-rose-800 bg-rose-50 border-l-2 border-rose-500 pl-1.5 py-[1px]">
      <span className="font-bold">⚠ </span>
      {children}
    </div>
  );
}

function T({ children }: { children: ReactNode }) {
  return (
    <div className="text-[8px] text-amber-900 bg-amber-50 border-l-2 border-amber-500 pl-1.5 py-[1px]">
      <span className="font-bold">→ </span>
      {children}
    </div>
  );
}

const C = {
  blue: "#1d4ed8",
  amber: "#b45309",
  purple: "#7c3aed",
  red: "#b91c1c",
  cyan: "#0e7490",
  teal: "#0f766e",
  magenta: "#a21caf",
  green: "#047857",
  violet: "#6d28d9",
  orange: "#c2410c",
  sky: "#0369a1",
  slate: "#334155",
};

function Page1() {
  return (
    <div className="grid grid-cols-3 gap-x-2 gap-y-1 h-full content-start">
      <Sec title="Antiderivative table" color={C.blue}>
        <F k="∫xⁿ dx" v="= xⁿ⁺¹/(n+1) + C   (n≠−1)" />
        <F k="∫1/x dx" v="= ln|x| + C" />
        <F k="∫eˣ dx" v="= eˣ + C" />
        <F k="∫aˣ dx" v="= aˣ/ln a + C" />
        <F k="∫sin x dx" v="= −cos x + C" />
        <F k="∫cos x dx" v="= sin x + C" />
        <F k="∫sec²x dx" v="= tan x + C" />
        <F k="∫csc²x dx" v="= −cot x + C" />
        <F k="∫sec·tan dx" v="= sec x + C" />
        <F k="∫csc·cot dx" v="= −csc x + C" />
        <F k="∫1/(1+x²)" v="= arctan x + C" />
        <F k="∫1/√(1−x²)" v="= arcsin x + C" />
        <F k="∫tan x dx" v="= ln|sec x| + C" />
        <F k="∫sec x dx" v="= ln|sec x + tan x| + C" />
      </Sec>

      <Sec title="FTC parts" color={C.amber}>
        <F k="Part 1" v="d/dx ∫ₐˣ f(t) dt = f(x)" />
        <F k="Chain" v="d/dx ∫ₐ^u(x) f = f(u)·u'" />
        <F k="Part 2" v="∫ₐᵇ f = F(b) − F(a)" />
        <F k="Net" v="∫ₐᵇ F'(x) dx = F(b)−F(a)" />
        <W>Part 1 differentiates an integral; Part 2 evaluates one. Don't mix them.</W>
      </Sec>

      <Sec title="Substitution" color={C.purple}>
        <F k="Rule" v="u=g(x), du=g'(x)dx" />
        <F k="Indef" v="∫f(g)g' dx = ∫f(u) du" />
        <F k="Def" v="∫ₐᵇ → change limits to g(a),g(b)" />
        <T>Spot u: an inner function whose derivative is also in the integrand.</T>
        <G>For definite integrals, change the limits OR back-substitute — never neither.</G>
      </Sec>

      <Sec title="Integration by Parts" color={C.red}>
        <F k="" v="∫u dv = uv − ∫v du" />
        <F k="LIATE" v="Log · Inv-trig · Algebraic · Trig · Exp" />
        <F k="Pick u" v="= the FIRST in LIATE that's in your integrand" />
        <F k="Recurring" v="∫eˣ sin x  → IBP twice + algebraic trick" />
        <T>If you see ln, arctan, or arcsin standing alone — IBP with dv=dx.</T>
      </Sec>

      <Sec title="Trig integrals" color={C.cyan}>
        <F k="∫sinᵐ cosⁿ" v="m or n odd: peel off, use sin²+cos²=1" />
        <F k="" v="both even: power-reduce sin²= (1−cos 2x)/2" />
        <F k="∫tanᵐ secⁿ" v="n even: peel sec², save sec² for du" />
        <F k="" v="m odd: peel sec·tan, save for du" />
        <F k="Trig sub" v="√(a²−x²): x=a sinθ" />
        <F k="" v="√(a²+x²): x=a tanθ" />
        <F k="" v="√(x²−a²): x=a secθ" />
      </Sec>

      <Sec title="Partial fractions / division" color={C.teal}>
        <F k="If" v="deg(P) ≥ deg(Q) → long-divide first" />
        <F k="Linear" v="A/(x−r)" />
        <F k="Repeated" v="A/(x−r) + B/(x−r)²" />
        <F k="Quadratic" v="(Bx+C)/(x²+px+q)" />
        <F k="Cover-up" v="A = P(r)/Q'(r) for distinct linear roots" />
      </Sec>

      <Sec title="Numerical integration" color={C.magenta}>
        <F k="Trap" v="T_n = Δx/2·(f₀+2f₁+2f₂+…+2f_{n−1}+fₙ)" />
        <F k="Simpson" v="S_n = Δx/3·(f₀+4f₁+2f₂+4f₃+…+fₙ)" />
        <F k="" v="(n even, pattern 1·4·2·4·2·…·4·1)" />
        <F k="|E_T|≤" v="K(b−a)³/(12n²),  K = max|f''|" />
        <F k="|E_S|≤" v="K(b−a)⁵/(180n⁴), K = max|f⁽⁴⁾|" />
        <T>Simpson is exact for cubics. Doubling n divides Simpson error by 16.</T>
      </Sec>

      <Sec title="Improper integrals" color={C.green}>
        <F k="Type 1" v="∫ₐ^∞ f = lim_{t→∞} ∫ₐᵗ f" />
        <F k="Type 2" v="vert. asymptote → split + limit at bad pt" />
        <F k="p-test" v="∫₁^∞ 1/xᵖ converges iff p>1" />
        <F k="" v="∫₀¹ 1/xᵖ converges iff p<1" />
        <F k="Compare" v="0≤f≤g, ∫g conv ⇒ ∫f conv" />
        <G>Always replace ∞ (or the bad endpoint) with t and take the limit at the end.</G>
      </Sec>

      <Sec title="Areas between curves" color={C.violet}>
        <F k="Vert" v="A = ∫ₐᵇ (top − bot) dx" />
        <F k="Horiz" v="A = ∫_c^d (right − left) dy" />
        <T>Sketch first. Where curves cross, the "top/bot" can flip — split the integral.</T>
      </Sec>

      <Sec title="Volumes — pick the slice" color={C.orange}>
        <F k="Disk ⟂ axis" v="V = π∫ R(x)² dx" />
        <F k="Washer ⟂" v="V = π∫(R²−r²) dx" />
        <F k="Shell ‖ axis" v="V = 2π∫ x·f(x) dx" />
        <F k="Cross-sec" v="V = ∫ A(x) dx (any shape)" />
        <T>Slice ⟂ to the axis of rotation → disk/washer. Slice ‖ to it → shell.</T>
        <T>Rotating about y-axis: shells with f(x) is usually less algebra than solving x=f⁻¹(y).</T>
      </Sec>

      <Sec title="Arc length & average value" color={C.sky}>
        <F k="L" v="= ∫ₐᵇ √(1 + (f')²) dx" />
        <F k="" v="= ∫_c^d √(1 + (g')²) dy   if x=g(y)" />
        <F k="Avg" v="f̄ = (1/(b−a)) ∫ₐᵇ f dx" />
        <F k="MVT-int" v="∃ c: f(c) = f̄" />
      </Sec>

      <Sec title="Which technique?" color={C.slate} tag="DECISION FLOW">
        <F k="1." v="Match table directly?  →  done." />
        <F k="2." v="Inner function w/ deriv inside?  →  u-sub." />
        <F k="3." v="Product of unrelated factors?  →  parts (LIATE)." />
        <F k="4." v="Powers of sin/cos/tan/sec?  →  trig identity." />
        <F k="5." v="√(a²±x²) or √(x²−a²)?  →  trig sub." />
        <F k="6." v="P(x)/Q(x)?  →  long-divide if needed, then partial fractions." />
        <F k="7." v="∞ limit or vert asymptote?  →  improper, replace w/ limit." />
        <F k="8." v="None of the above?  →  numerical (Trap/Simpson)." />
      </Sec>
    </div>
  );
}

function Page2() {
  return (
    <div className="grid grid-cols-3 gap-x-2 gap-y-1 h-full content-start">
      <Sec title="Modeling DEs" color={C.amber}>
        <F k="Exponential" v="dy/dt = ky → y = y₀ eᵏᵗ" />
        <F k="Logistic" v="dP/dt = kP(1 − P/M)" />
        <F k="" v="P(t) = M / (1 + A e⁻ᵏᵗ)" />
        <F k="Newton cool" v="dT/dt = −k(T − T_e)" />
        <F k="" v="T = T_e + (T₀−T_e) e⁻ᵏᵗ" />
        <T>Half-life: t₁/₂ = ln 2 / |k|. Doubling time: t₂ = ln 2 / k.</T>
      </Sec>

      <Sec title="Slope fields & Euler" color={C.orange}>
        <F k="At (x,y)" v="draw segment of slope f(x,y)" />
        <F k="Euler" v="y_{n+1} = y_n + h·f(x_n, y_n)" />
        <F k="" v="x_{n+1} = x_n + h" />
        <F k="Smaller h" v="more accurate, more steps" />
        <G>Euler accumulates error each step; halving h roughly halves global error (1st order).</G>
      </Sec>

      <Sec title="Separable equations" color={C.purple}>
        <F k="Form" v="dy/dx = g(x)·h(y)" />
        <F k="Separate" v="dy/h(y) = g(x) dx" />
        <F k="Integrate" v="∫dy/h(y) = ∫g(x) dx + C" />
        <F k="IC" v="solve for C using y(x₀)=y₀" />
        <G>Equilibrium solutions where h(y)=0 are killed by dividing — list them separately.</G>
      </Sec>

      <Sec title="Sequences" color={C.blue}>
        <F k="lim aₙ" v="treat n continuous → L'Hôpital" />
        <F k="Limit laws" v="sum, product, quotient (if denom ≠0)" />
        <F k="Squeeze" v="bₙ ≤ aₙ ≤ cₙ, lim b=lim c=L → lim a=L" />
        <F k="Mono+bounded" v="⇒ converges" />
        <F k="Geo seq" v="rⁿ → 0 if |r|<1, → ±∞ if |r|>1" />
      </Sec>

      <Sec title="Series basics" color={C.red}>
        <F k="∑aₙ converges" v="iff Sₙ = a₁+…+aₙ has a limit" />
        <F k="nth-term test" v="if lim aₙ ≠ 0, ∑ diverges" />
        <F k="Geometric" v="∑arⁿ = a/(1−r), |r|<1 (else div)" />
        <F k="p-series" v="∑1/nᵖ conv iff p>1" />
        <F k="Telescoping" v="cancel internal terms; only ends remain" />
        <G>nth-term test only proves divergence. lim aₙ = 0 does NOT imply convergence.</G>
      </Sec>

      <Sec title="Convergence tests" color={C.teal} tag="LOOKUP">
        <F k="Integral" v="aₙ=f(n), f pos·dec·cont; ∑↔∫₁^∞ f" />
        <F k="Comparison" v="0≤aₙ≤bₙ; ∑bₙ conv ⇒ ∑aₙ conv" />
        <F k="Lim comp" v="lim aₙ/bₙ = c, 0<c<∞: same fate" />
        <F k="Ratio" v="L = lim|a_{n+1}/aₙ|" />
        <F k="" v="L<1 conv abs · L>1 div · L=1 inconc." />
        <F k="Root" v="L = lim ⁿ√|aₙ| (same rules)" />
        <F k="Alt series" v="(−1)ⁿbₙ, bₙ↓0 ⇒ converges" />
        <T>Factorial in aₙ → ratio test. Roots/exp in aₙ → root test. Else integral or comparison.</T>
      </Sec>

      <Sec title="Absolute vs conditional" color={C.magenta}>
        <F k="Abs conv" v="∑|aₙ| converges" />
        <F k="" v="⇒ ∑aₙ converges (rearrangement-stable)" />
        <F k="Cond conv" v="∑aₙ conv but ∑|aₙ| diverges" />
        <F k="AST error" v="|S − Sₙ| ≤ b_{n+1}" />
        <T>Alternating harmonic Σ(−1)ⁿ⁺¹/n is conditionally convergent — sum is ln 2.</T>
      </Sec>

      <Sec title="Power series & radius" color={C.violet}>
        <F k="Form" v="∑cₙ(x−a)ⁿ centered at a" />
        <F k="Radius R" v="ratio test on |c_{n+1}(x−a)/cₙ|" />
        <F k="" v="conv on (a−R, a+R), maybe ± endpoints" />
        <F k="Endpts" v="check by hand — substitute x=a±R" />
        <F k="Diff/int" v="term-by-term inside (a−R, a+R)" />
      </Sec>

      <Sec title="Common Maclaurin series" color={C.green} tag="MEMORIZE">
        <F k="eˣ" v="∑ xⁿ/n!  · all x" />
        <F k="sin x" v="∑(−1)ⁿ x^{2n+1}/(2n+1)! · all x" />
        <F k="cos x" v="∑(−1)ⁿ x²ⁿ/(2n)! · all x" />
        <F k="1/(1−x)" v="∑ xⁿ · |x|<1" />
        <F k="ln(1+x)" v="∑(−1)ⁿ⁺¹ xⁿ/n · |x|<1, conv at x=1" />
        <F k="arctan x" v="∑(−1)ⁿ x^{2n+1}/(2n+1) · |x|≤1" />
        <F k="(1+x)^k" v="∑C(k,n) xⁿ (binomial)" />
        <T>Build new series by substitution: cos(x²) = ∑(−1)ⁿ x⁴ⁿ/(2n)!.</T>
      </Sec>

      <Sec title="Taylor series & remainder" color={C.cyan}>
        <F k="Taylor at a" v="f(x) = ∑ f⁽ⁿ⁾(a)/n! · (x−a)ⁿ" />
        <F k="Maclaurin" v="a = 0" />
        <F k="Tₙ(x)" v="truncation through degree n" />
        <F k="Rₙ(x)" v="= f − Tₙ" />
        <F k="Taylor ineq" v="|Rₙ| ≤ M·|x−a|^{n+1}/(n+1)!" />
        <F k="" v="M = max|f⁽ⁿ⁺¹⁾| on |t−a|≤|x−a|" />
      </Sec>

      <Sec title="Which test? — flow" color={C.slate} tag="DECISION FLOW">
        <F k="1." v="lim aₙ ≠ 0?  →  diverges (nth-term)." />
        <F k="2." v="Geometric/p-series shape?  →  apply rule." />
        <F k="3." v="Sign-alternating?  →  AST." />
        <F k="4." v="Factorials / ratios simplify?  →  ratio test." />
        <F k="5." v="aₙ has nth-power form?  →  root test." />
        <F k="6." v="Looks like a known ∑bₙ?  →  comparison or limit comparison." />
        <F k="7." v="aₙ = f(n) with nice ∫f?  →  integral test." />
        <F k="8." v="Power series in x?  →  ratio test on |c_{n+1}(x−a)/cₙ|." />
      </Sec>

      <Sec title="Constants & traps" color={C.slate}>
        <F k="ln limits" v="ln(1)=0, ln(e)=1, ln(0⁺)=−∞" />
        <F k="Growth" v="n! ≫ aⁿ ≫ nᵖ ≫ ln n" />
        <F k="" v="(use to drop dominated terms)" />
        <F k="Common π" v="∑1/n²=π²/6, arctan 1=π/4" />
        <G>"converges" can mean conditionally — always check ∑|aₙ| if rearrangement matters.</G>
        <G>Power series radius is preserved under term-by-term diff/integ; endpoint convergence is NOT.</G>
        <G>For (−1)ⁿ series with bₙ NOT monotone, AST does not apply — try absolute conv first.</G>
      </Sec>
    </div>
  );
}

export default function MathCheatSheet() {
  return (
    <>
      <style>{printStyles}</style>
      <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
        <header className="no-print sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
          <div className="container flex items-center justify-between py-4">
            <Link href="/math">
              <Button variant="ghost" className="flex items-center gap-2">
                <ChevronLeft className="w-5 h-5" />
                Back to Math
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              AMS 161 · 2-Page Cheat Sheet
            </h1>
            <Button onClick={() => window.print()} className="flex items-center gap-2">
              <Printer className="w-4 h-4" /> Print
            </Button>
          </div>
        </header>

        <div className="print-area">
          <div className="container py-6 flex flex-col items-center gap-4">
            <div
              className="sheet bg-white shadow-md p-3"
              style={{
                width: "8.5in",
                aspectRatio: "8.5 / 11",
                color: "#0f172a",
              }}
            >
              <div className="flex items-baseline justify-between mb-1.5">
                <h2 className="text-sm font-extrabold uppercase tracking-wide">
                  AMS 161 Cheat Sheet · Page 1 / 2
                </h2>
                <span className="text-[8px] text-slate-500">
                  Integration · Applications (Ch 5 + 6)
                </span>
              </div>
              <Page1 />
            </div>

            <div
              className="sheet bg-white shadow-md p-3"
              style={{
                width: "8.5in",
                aspectRatio: "8.5 / 11",
                color: "#0f172a",
              }}
            >
              <div className="flex items-baseline justify-between mb-1.5">
                <h2 className="text-sm font-extrabold uppercase tracking-wide">
                  AMS 161 Cheat Sheet · Page 2 / 2
                </h2>
                <span className="text-[8px] text-slate-500">
                  Differential Eqs · Sequences & Series (Ch 7 + 8)
                </span>
              </div>
              <Page2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
