import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { ChapterSection } from "@/components/math/ChapterSection";
import { MathFormula } from "@/components/math/MathFormula";
import { RiemannSumViz } from "@/components/math/RiemannSumViz";
import { BlockMath, InlineMath } from "@/components/math/Katex";
import { WorkedExample, Eq, Why } from "@/components/midterm/WorkedExample";
import { PracticeProblem } from "@/components/midterm/PracticeProblem";

const ACCENT = "#2563eb";
const SEE_BELOW = (
  <p className="text-xs italic text-gray-500 dark:text-gray-400">
    See full worked examples + practice at the bottom of this chapter ↓
  </p>
);

export default function Ch5Integration() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <header
        className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm"
        style={{ borderTopWidth: 4, borderTopColor: ACCENT }}
      >
        <div className="container flex items-center justify-between py-4">
          <Link href="/math">
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
            >
              <ChevronLeft className="w-5 h-5" />
              Back to Math
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Ch 5 · Integration
          </h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container py-10 space-y-10">
        <section className="rounded-2xl bg-blue-50 dark:bg-slate-800 p-8">
          <span
            className="inline-block text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-3"
            style={{ background: ACCENT }}
          >
            Sections 5.1 – 5.10
          </span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            From Riemann sums to improper integrals
          </h2>

          <div className="space-y-5 text-gray-700 dark:text-gray-200 max-w-3xl">
            <p>
              At its absolute core, this whole chapter is about answering one
              stubborn question: <em>how do you measure the area under a
              curve?</em> That sounds like a niche geometry problem, but the
              moment you take it seriously it cracks open and becomes the
              central operation of applied math. The reason is that "area
              under a curve" is the visual stand-in for any quantity that
              <em> accumulates</em> as some other quantity changes. If a graph
              shows velocity versus time, the area under it is total distance.
              If it shows electric current versus time, the area is total
              charge that flowed. If it shows a probability density, the area
              is the probability of landing in some range. Heart-rate over
              hours becomes total heartbeats. Power-draw over a day becomes
              total energy. Force times distance becomes work. Each of these is
              a Calc I formula — distance equals rate times time, work equals
              force times distance — quietly upgraded to handle a rate that's
              no longer constant. The upgrade is integration.
            </p>

            <p>
              So when you see <InlineMath math="\int_a^b f(x)\,dx" /> for the
              first time, don't read it as "calculus notation." Read it as
              "what's the total of <InlineMath math="f" />, accumulated from{" "}
              <InlineMath math="a" /> to <InlineMath math="b" />?" The
              elongated S is literally a stretched-out summation sign — it
              still means "add up a bunch of pieces" — and the{" "}
              <InlineMath math="dx" /> is a reminder of the tiny width of each
              piece. That mental picture, the curve covered by a row of skinny
              vertical slivers being added together, is the thing you should
              be holding in your head every time you stare at an integral sign
              for the rest of this course (and frankly the rest of your STEM
              education).
            </p>

            <p>
              <strong>The big arc — why the chapter is in this order.</strong>{" "}
              The chapter walks you through a very deliberate journey, and
              each section solves problems the previous one couldn't.{" "}
              <strong>5.1</strong> defines the integral honestly, as the
              limit of those skinny rectangles — a "Riemann sum" — so you
              actually know what symbol you're computing. <strong>5.2</strong>{" "}
              gives you the bookkeeping properties (linearity, splitting an
              interval, sign-flipping) that you'll lean on for the rest of the
              chapter without thinking about it. <strong>5.3</strong> drops
              the bombshell of FTC Part 2 — the practical shortcut that turns
              "limit of a Riemann sum" into "find an antiderivative and
              subtract," which is the move you'll actually use 99% of the
              time. <strong>5.4</strong> doubles back to FTC Part 1, which
              tells you how derivatives and integrals undo each other when
              the upper limit itself is a variable.
            </p>

            <p>
              Once FTC is on the table, the rest of the chapter is a toolbox
              for one job: <em>given an integrand, find its antiderivative</em>.{" "}
              <strong>5.5</strong> is u-substitution, the chain rule run
              backwards — the first technique you'll reach for and the one
              that handles maybe half of all integrals you'll meet.{" "}
              <strong>5.6</strong> is integration by parts, the product rule
              run backwards, for products of unrelated factors that u-sub
              can't help. <strong>5.7</strong> is the trig department — both
              integrals OF trig functions (using identities to massage powers
              of sin and cos) and trig SUBSTITUTIONS (injecting a trig
              variable to kill an awkward algebraic radical).{" "}
              <strong>5.8</strong> is partial fractions, an algebra trick from
              before calculus existed, which splits a messy rational function
              into a sum of pieces you already know how to integrate.{" "}
              <strong>5.9</strong> admits defeat gracefully: when no closed
              form exists or the integrand is just data, fit better shapes
              (trapezoids and parabolas) and add their areas — that's
              numerical integration. <strong>5.10</strong> stretches the
              definition to handle integrals over infinite intervals or with
              vertical asymptotes, using limits to sneak past restrictions
              the basic Riemann definition imposes.
            </p>

            <p>
              Notice the rhythm: each technique is born because the previous
              ones failed. You don't learn parts because u-sub is boring; you
              learn it because the integrand was a product of two pieces with
              no chain-rule relationship and u-sub literally couldn't apply.
              You don't learn partial fractions for fun; you learn it because
              you found a rational function whose denominator factored but
              whose split form wasn't yet in your table. You don't learn
              improper integrals as a curiosity; you learn them because the
              normalization of a Gaussian or the expected value of a
              continuous random variable demands integrating from{" "}
              <InlineMath math="-\infty" /> to <InlineMath math="\infty" />,
              and the bare definition can't do that. Each new technique
              expands the territory you can actually compute.
            </p>

            <p>
              <strong>What you should already know coming in.</strong> This
              chapter assumes you remember Calc I derivatives cold — not just
              that you've seen them, but that you can take them without
              thinking. Read every derivative rule you know in reverse and
              that's most of your antiderivative table for free:{" "}
              <InlineMath math="x^n" /> integrates to{" "}
              <InlineMath math="x^{n+1}/(n+1)" />,{" "}
              <InlineMath math="\sin x" /> integrates to{" "}
              <InlineMath math="-\cos x" />, <InlineMath math="e^x" /> stays{" "}
              <InlineMath math="e^x" />, <InlineMath math="1/x" /> integrates
              to <InlineMath math="\ln|x|" />, and so on. Reskim the{" "}
              <em>chain rule</em> (it's the engine behind 5.5) and the{" "}
              <em>product rule</em> (engine behind 5.6) — both will reappear
              flipped on their backs. You'll also want comfort with{" "}
              <em>limits</em>, especially limits at infinity, because Riemann
              sums and improper integrals are both defined as limits and the
              "does this number stabilize?" question is the whole content of
              section 5.10.
            </p>

            <p>
              <strong>A preview of pitfalls — the ones every student trips
              on.</strong> Four traps will haunt you all chapter. First, the{" "}
              <em>+C trap</em>: every indefinite integral picks up an
              arbitrary constant, because differentiation kills constants and
              integration has no way to recover them. Forget the +C on
              homework and you're losing points; forget it on a differential
              equation and you're losing the entire solution family. Second,
              the <em>du sign error in u-sub</em>: if{" "}
              <InlineMath math="u = \cos x" />, then{" "}
              <InlineMath math="du = -\sin x\,dx" />, and missing that minus
              flips your final answer. Third, the <em>"forgot to change the
              limits" trap</em> in definite u-substitution: you swapped
              variables but kept the old x-limits, so you're evaluating a
              u-antiderivative at x-numbers — instant wrong answer that looks
              suspiciously plausible. Fourth, the <em>LIATE mis-ordering</em>{" "}
              in integration by parts: pick the wrong factor as{" "}
              <InlineMath math="u" /> and you'll produce a new integral{" "}
              <em>harder</em> than what you started with, then chase your
              tail.
            </p>

            <p>
              Two more I'll preview because they're sneaky: in trig
              substitution you have to draw a right triangle to convert{" "}
              <InlineMath math="\theta" /> back to <InlineMath math="x" /> at
              the end — students routinely forget and leave their answer in
              the wrong variable. In improper integrals, an interior
              singularity (vertical asymptote inside the interval, not at
              the endpoint) must be detected and split — most students miss it
              and silently compute a wrong number. I'll re-flag every one of
              these in context when it shows up, but the time to put them on
              your radar is now.
            </p>

            <p>
              <strong>How to read this chapter.</strong> Every formula card up
              top leads with the plain-language idea (a sentence or two of
              "what does this rule even mean") before the symbolic compression.
              Every section walks through the why before the how: a hook, a
              derivation, one or two worked mini-examples done step by step
              with the reasoning written next to each line, an enumeration of
              the question-types this topic shows up in on exams, and a
              roundup of the most common ways it goes wrong. The full worked
              examples at the bottom are a second pass — same material,
              different problems, more space to breathe. Treat this chapter as
              a workshop, not a reference card: do the mini-examples by hand
              alongside the page, sanity-check every answer by differentiating,
              and you'll come out with the technique in your fingers instead
              of just in your eyes.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Headline formulas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MathFormula
              accentColor={ACCENT}
              name="FTC, Part 2 (Evaluation Theorem)"
              latex="\int_a^b f(x)\,dx = F(b) - F(a)"
              variables={[
                {
                  symbol: "F",
                  meaning:
                    "any function whose derivative is f — an 'antiderivative' of f. Different antiderivatives differ by a constant, but the difference F(b) − F(a) is always the same",
                },
                {
                  symbol: "[a,b]",
                  meaning:
                    "the interval over which we're measuring area: from x = a (left edge) to x = b (right edge)",
                },
              ]}
              whenToUse="The shortcut that makes integrals usable in practice. The limit-of-Riemann-sums definition gives the right answer but is painful to compute; this turns 'area under f from a to b' into 'plug a and b into an antiderivative, subtract.' If you know the Calc I derivative table, you already know most antiderivatives — just read it backwards."
            />
            <MathFormula
              accentColor={ACCENT}
              name="FTC, Part 1 (Accumulation)"
              latex="\frac{d}{dx}\int_a^x f(t)\,dt = f(x)"
              variables={[
                {
                  symbol: "f",
                  meaning:
                    "continuous function whose 'accumulated area so far' we're tracking",
                },
              ]}
              whenToUse="Differentiate an integral whose upper limit is x, without ever computing the integral. The intuition: g(x) = ∫ from a to x of f(t) dt is 'how much area has accumulated by the time we reach x.' The rate at which area accumulates as x grows is just the height of the curve there — that's f(x). Combined with the chain rule: d/dx ∫ from a to u(x) of f(t) dt = f(u(x)) · u'(x)."
            />
            <MathFormula
              accentColor={ACCENT}
              name="Substitution Rule"
              latex="\int f(g(x))\,g'(x)\,dx = \int f(u)\,du"
              variables={[
                {
                  symbol: "u = g(x)",
                  meaning:
                    "the inner function — usually whatever's inside parentheses, under a root, in an exponent, or otherwise the 'argument' of another function",
                },
                {
                  symbol: "du = g'(x)\\,dx",
                  meaning:
                    "the differential of u — must already appear in the integrand (up to a constant) for substitution to work cleanly",
                },
              ]}
              whenToUse="The chain rule, run backwards. Spot an inside function whose derivative is also in the integrand (maybe times a constant). Then u and du replace x and dx, and the integral collapses to one in u alone. For DEFINITE integrals, change the limits when you change variables (a → g(a), b → g(b)) — that way you don't have to back-substitute."
            />
            <MathFormula
              accentColor={ACCENT}
              name="Integration by Parts"
              latex="\int u\,dv = uv - \int v\,du"
              variables={[
                {
                  symbol: "u",
                  meaning:
                    "pick by LIATE — the FIRST type in this list that appears in your integrand: Log, Inverse trig, Algebraic, Trig, Exponential. That choice usually makes the new ∫v du easier than the original",
                },
                {
                  symbol: "dv",
                  meaning: "everything else in the integrand — what's left after you pick u",
                },
              ]}
              whenToUse="The product rule, run backwards. When substitution doesn't apply because the two factors aren't related by differentiation (e.g. x · sin x — neither is the other's derivative), parts shifts the differentiation from one factor to the other. The hope: ∫v du is simpler than ∫u dv. If you see ln, arctan, or arcsin standing alone, set dv = dx so v = x — IBP gets rid of the log/inverse-trig in one move."
            />
            <MathFormula
              accentColor={ACCENT}
              name="Improper Integral (Type 1)"
              latex="\int_a^{\infty} f(x)\,dx = \lim_{t\to\infty}\int_a^t f(x)\,dx"
              variables={[]}
              whenToUse="When the interval of integration is infinite, you can't form a Riemann sum directly (no uniform partition of an infinite interval). The fix: replace ∞ with a finite t, compute normally, then take the limit as t → ∞. If the limit exists and is finite, the integral CONVERGES to that value. If the limit is ±∞ or doesn't exist, it DIVERGES. The classic benchmark: ∫ from 1 to ∞ of 1/x^p dx converges iff p > 1."
            />
            <MathFormula
              accentColor={ACCENT}
              name="Simpson's Rule"
              latex="S_n = \frac{\Delta x}{3}\bigl[f_0 + 4f_1 + 2f_2 + 4f_3 + \dots + f_n\bigr]"
              variables={[
                {
                  symbol: "n",
                  meaning:
                    "number of subintervals — must be EVEN, since Simpson works on pairs of subintervals",
                },
                {
                  symbol: "\\Delta x",
                  meaning: "width of each subinterval, equal to (b − a)/n",
                },
              ]}
              whenToUse="Numerical approximation when no closed-form antiderivative exists (e.g. ∫e^(−x²) dx). Instead of rectangles (Riemann) or trapezoids (Trap rule), fit a parabola through every three consecutive points — much better for smooth functions. Coefficient pattern is 1-4-2-4-2-…-4-1: endpoints get 1, ODD-indexed interior points get 4, EVEN-indexed interior points get 2. Error scales as 1/n⁴, so doubling n divides error by 16 — Simpson is very accurate even with modest n."
            />
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Sections
          </h3>

          <ChapterSection
            id="s5-1"
            number="5.1"
            title="Areas and the Definite Integral"
            accentColor={ACCENT}
            blurb="Approximate area under a curve by rectangles, then take the limit."
          >
            <Why>
              Imagine you've drawn a curve on graph paper and someone asks you
              for the area trapped between the curve and the x-axis from{" "}
              <InlineMath math="x = a" /> to <InlineMath math="x = b" />. If
              the region were a triangle or a rectangle you'd reach for a
              middle-school formula — base times height, half base times
              height — and you'd be done in five seconds. But a curved top has
              no such formula. There's no "area of a wiggly region" entry in
              your geometry textbook, because there are uncountably many
              possible wiggles, and each one would need its own bespoke
              formula. Section 5.1 is the workaround civilization came up
              with: <em>cover the region with shapes you already know how to
              measure</em>, sum those areas, and then make the shapes
              ridiculously small so the approximation gets ridiculously good.
            </Why>
            <Why>
              The shape we'll use is the simplest possible: a rectangle. A row
              of skinny rectangles, each one resting on the x-axis and rising
              to some height we read off the curve. They won't fit perfectly —
              their flat tops can't follow the wiggle — but if we make them
              narrow enough, the gaps shrink to nothing. The answer the
              row-of-rectangles is creeping toward, as the rectangles get
              infinitely skinny, is what we'll <em>define</em> as the area
              under the curve. That definition is the definite integral. It's
              not "approximately" the area; in the limit, it IS the area.
              There is no other coherent way to define the thing.
            </Why>
            <Why>
              The mental image worth carrying around for the rest of the
              chapter: graph paper. Each rectangle is a column of paper
              squares. Wide columns over-count or under-count because they
              can't follow the wiggle — they cut off bumps or include phantom
              area that isn't really under the curve. Narrow columns hug the
              curve better. Make the columns infinitely thin and the
              staircase of rectangle tops dissolves into the smooth curve
              itself, and the total area printed in paper-squares becomes
              exact. That's the only "trick" in section 5.1. Everything else
              is notation for that single idea.
            </Why>
            <Why>
              <strong>Why this matters for the rest of calculus.</strong>{" "}
              Section 5.1 is foundational in the deepest sense: it's the place
              where the integral gets <em>defined</em>. Once you accept this
              definition, every other section in the chapter is in some sense
              an answer to "how do I avoid actually computing this limit
              every time?" FTC Part 2 (5.3) is the first and most spectacular
              such answer — it tells you that if you can find an
              antiderivative, you never have to set up a Riemann sum again.
              The integration techniques in 5.5 through 5.8 are answers in
              turn to "how do I <em>find</em> that antiderivative?" And the
              numerical methods in 5.9 are answers to "what do I do when no
              antiderivative exists and I have to fall back on summing
              shapes?" So even though you'll rarely compute a Riemann sum by
              hand after this section, the Riemann-sum picture is what every
              integral in the rest of the chapter <em>secretly is</em>. Hold
              onto it.
            </Why>

            <Why>
              <strong>Building the formal statement.</strong> Slice{" "}
              <InlineMath math="[a, b]" /> into <InlineMath math="n" /> equal
              pieces. Each piece is a rectangle base of width
            </Why>
            <BlockMath math="\Delta x = \frac{b - a}{n}." />
            <Why>
              Inside each piece, pick one sample point{" "}
              <InlineMath math="x_i^*" /> and use the curve's height there,{" "}
              <InlineMath math="f(x_i^*)" />, as the rectangle's height. Left
              endpoints, right endpoints, midpoints — they all work; they
              just give different staircases that all converge to the same
              limit. The area of one rectangle is height times base,{" "}
              <InlineMath math="f(x_i^*)\Delta x" />. Adding them up gives the{" "}
              <em>Riemann sum</em>:
            </Why>
            <BlockMath math="R_n = \sum_{i=1}^{n} f(x_i^*)\,\Delta x." />
            <Why>
              Letting <InlineMath math="n \to \infty" /> makes the rectangles
              infinitely thin and the staircase melt into the curve. That
              limit is what we call the definite integral — the elongated S of
              the integral sign is literally a stretched "sum":
            </Why>
            <BlockMath math="\int_a^b f(x)\,dx \;=\; \lim_{n\to\infty}\sum_{i=1}^{n} f(x_i^*)\,\Delta x." />

            <Why>
              <strong>A concrete walk-through.</strong> Take{" "}
              <InlineMath math="f(x) = x" /> on <InlineMath math="[0, 1]" />{" "}
              with <InlineMath math="n = 4" /> right-endpoint rectangles. We
              already know the true area is a triangle of base 1 and height 1
              — so the answer should land near <InlineMath math="1/2" />.
            </Why>
            <Eq>Δx = (1 − 0)/4 = 1/4,    x_i = i/4    (i = 1, 2, 3, 4)</Eq>
            <Why>
              Each rectangle's height is{" "}
              <InlineMath math="f(x_i) = x_i = i/4" />. Sum the four heights
              times the common width:
            </Why>
            <Eq>R_4 = (1/4)·[1/4 + 2/4 + 3/4 + 4/4] = (1/4)·(10/4) = 10/16 = 0.625</Eq>
            <Why>
              That's bigger than 1/2 because right endpoints over-shoot for an
              increasing function — every rectangle sits a bit above the
              triangle. Push <InlineMath math="n = 100" /> and the sum
              tightens to 0.505; push <InlineMath math="n = 10000" /> and you
              get 0.50005. The limit is exactly 0.5, matching the triangle. The
              integral has done its job: it gave us the area without a
              triangle formula, just by adding skinny pieces.
            </Why>

            <Why>
              <strong>Play with it.</strong> Below, change the function, the
              number of rectangles, and which sample point you use. Watch the
              Riemann-sum value chase the true area as <InlineMath math="n" />{" "}
              grows. Try switching from left endpoints to right endpoints with
              an increasing function — you'll see one consistently undershoots
              and the other consistently overshoots, but both converge to the
              same number as <InlineMath math="n" /> grows. That's the
              promise of the limit: the choice of sample point stops
              mattering once the rectangles are thin enough.
            </Why>
            <RiemannSumViz accentColor={ACCENT} />

            <Why>
              <strong>A second walk-through — a curve that bows.</strong> The
              triangle case was reassuring but a little dull because we
              already knew the answer. Try a curve where the answer is harder
              to guess: <InlineMath math="f(x) = x^2" /> on{" "}
              <InlineMath math="[0, 2]" />. The exact area, which we'll prove
              in 5.3 using FTC, is <InlineMath math="8/3 \approx 2.667" />.
              With <InlineMath math="n = 4" /> right-endpoint rectangles of
              width <InlineMath math="\Delta x = 0.5" /> at heights{" "}
              <InlineMath math="f(0.5)=0.25" />,{" "}
              <InlineMath math="f(1)=1" />,{" "}
              <InlineMath math="f(1.5)=2.25" />,{" "}
              <InlineMath math="f(2)=4" />:
            </Why>
            <Eq>R₄ = 0.5·(0.25 + 1 + 2.25 + 4) = 0.5·7.5 = 3.75</Eq>
            <Why>
              That's an overestimate (3.75 vs 2.667) because{" "}
              <InlineMath math="x^2" /> is increasing on{" "}
              <InlineMath math="[0,2]" /> and right endpoints sit at the tall
              edge of each strip. Push <InlineMath math="n = 10" /> and you
              get 3.08; <InlineMath math="n = 100" /> gives 2.707;{" "}
              <InlineMath math="n = 1000" /> gives 2.671. The sequence is
              tightening on 2.667 — slowly, but inexorably. The "limit as{" "}
              <InlineMath math="n \to \infty" />" isn't a single mystical
              moment; it's the destination this sequence of finite numbers is
              converging to.
            </Why>

            <Why>
              <strong>Signed area — the unintuitive sign convention.</strong>{" "}
              One subtlety you absolutely must internalize: the definite
              integral measures <em>signed</em> area, not geometric area. When
              the curve dips below the x-axis, <InlineMath math="f(x_i^*)" />{" "}
              is negative, the rectangle "area"{" "}
              <InlineMath math="f(x_i^*)\Delta x" /> is negative, and that
              piece of the sum subtracts. The net result is "area above the
              axis minus area below the axis." So{" "}
              <InlineMath math="\int_0^{2\pi}\sin x\,dx = 0" />, not "two big
              humps of area." The first hump (positive part of sine) gives{" "}
              <InlineMath math="+2" />; the second hump (negative part) gives{" "}
              <InlineMath math="-2" />; they cancel. If you wanted the
              "amount of paint to fill both humps" you'd compute{" "}
              <InlineMath math="\int_0^{2\pi} |\sin x|\,dx = 4" /> instead.
              Signed area is the right convention for physics and probability;
              "absolute" area is occasionally what you actually want. Always
              ask yourself which one the problem is really requesting.
            </Why>

            <Why>
              <strong>How this connects forward.</strong> Riemann sums show
              up explicitly in 5.9, where we'll use them (and slightly
              fancier shapes: trapezoids and parabolas) as <em>numerical</em>{" "}
              approximations for integrals we can't compute symbolically.
              They also show up in 5.10 in disguise: an improper integral
              over an infinite interval is still a "sum of rectangles, then
              take a limit," it's just that one of the limits is now{" "}
              <InlineMath math="\infty" /> and the rectangles run forever.
              And conceptually, every applied integral you'll meet in Ch 6
              (volumes of revolution, work, fluid pressure, probability) is
              constructed by mentally slicing the problem into thin pieces,
              writing each piece as <InlineMath math="(\text{something})\cdot
              dx" />, and integrating — that's a Riemann sum being set up,
              one piece at a time. So even though we'll rarely COMPUTE a
              Riemann sum after this section, the act of SETTING UP integrals
              from physical setups is exactly the Riemann-sum reasoning
              applied with a real-world flavor.
            </Why>

            <Why>
              <strong>Common scenarios where this appears.</strong> First,{" "}
              <em>"prove from the definition"</em> problems — typically
              compute <InlineMath math="\int_a^b f(x)\,dx" /> as a
              limit-of-Riemann-sums for a low-degree polynomial like{" "}
              <InlineMath math="x" />, <InlineMath math="x^2" />, or{" "}
              <InlineMath math="x^3" /> using the closed-form sum formulas{" "}
              <InlineMath math="\sum i = n(n+1)/2" />,{" "}
              <InlineMath math="\sum i^2 = n(n+1)(2n+1)/6" />, etc. Second,{" "}
              <em>"identify the integral that this sum is converging to"</em>{" "}
              problems — you're handed a limit of a sum like{" "}
              <InlineMath math="\lim_{n\to\infty}\sum (i/n)^3 \cdot (1/n)" />{" "}
              and asked to recognize it as{" "}
              <InlineMath math="\int_0^1 x^3\,dx" />. Third, <em>"estimate
              the area"</em> table-of-values problems where you compute{" "}
              <InlineMath math="L_n" /> or <InlineMath math="R_n" /> directly
              from given numerical heights, with no formula in sight. Fourth,{" "}
              <em>conceptual questions about signed area</em> — graph
              recognition where you have to read off positive and negative
              contributions and add them with the right signs.
            </Why>

            <Why>
              <strong>Pitfalls — read each one twice.</strong> (1){" "}
              <em>Forgetting the signed-area convention.</em> Students see a
              curve, mentally picture the geometric "blob," and forget that
              the parts below the axis are negative contributions. Always ask
              "where does <InlineMath math="f" /> change sign on{" "}
              <InlineMath math="[a, b]" />?" If it does, sketch and predict
              the net sign before you compute. (2){" "}
              <em>Confusing the sample point with the partition.</em> The
              partition is{" "}
              <InlineMath math="\{a, a + \Delta x, a + 2\Delta x, \dots, b\}" />
               — those are the rectangle <em>edges</em>. The sample point{" "}
              <InlineMath math="x_i^*" /> is any point INSIDE the i-th strip
              — it's where you read off the height. Different choices of
              sample point give different Riemann sums (left, right, midpoint,
              upper, lower) but all converge to the same definite integral.
              (3) <em>Off-by-one indexing.</em> Left endpoints start at{" "}
              <InlineMath math="x_0 = a" /> and stop at{" "}
              <InlineMath math="x_{n-1}" />; right endpoints start at{" "}
              <InlineMath math="x_1" /> and stop at{" "}
              <InlineMath math="x_n = b" />. Use the wrong index range and
              your sum is missing or duplicating a rectangle. (4){" "}
              <em>Forgetting the <InlineMath math="\Delta x" /> factor.</em>{" "}
              The integrand contributes a HEIGHT,{" "}
              <InlineMath math="f(x_i^*)" />. Multiplying by{" "}
              <InlineMath math="\Delta x" /> turns that height into an AREA.
              Drop the <InlineMath math="\Delta x" /> and you're summing
              heights, which has the wrong units (it's just a number, not an
              area). When in doubt, write{" "}
              <InlineMath math="f(x_i^*)\cdot \Delta x" /> in full — never
              abbreviate by dropping the <InlineMath math="\Delta x" />.
            </Why>

            <Why>
              <strong>The trigger phrase.</strong> You reach for
              Riemann-sum reasoning (and, in practice, for the FTC shortcut in
              5.3) any time you need to total up a quantity that varies
              continuously: distance from a changing velocity, work from a
              changing force, total dose from a changing infusion rate, total
              charge from a changing current, expected value from a
              probability density, mass from a density function. Whenever a
              Calc I formula like "distance = rate × time" fails because the
              rate isn't constant, the fix is integration — and the
              <em> reason</em> integration is the fix is exactly the
              Riemann-sum picture from this section. Take "distance = rate ×
              time" and chop time into infinitely many tiny pieces over which
              the rate IS approximately constant; the "rate × tiny time" for
              each piece is a rectangle area; the sum is the integral; the
              integral is the total distance. Same logic for every other
              accumulation problem you'll meet. That structural pattern —
              "Calc I formula fails because something varies; integrate
              instead" — is the dominant question type for the entire chapter.
            </Why>
          </ChapterSection>

          <ChapterSection
            id="s5-2"
            number="5.2"
            title="The Definite Integral"
            accentColor={ACCENT}
            blurb="Properties of the integral — linearity, additivity over intervals, sign."
          >
            <Why>
              Section 5.1 told you what a definite integral <em>is</em>: the
              limit of those skinny-rectangle sums. Section 5.2 is what
              follows for free from that definition. Once you know an integral
              is "the limit of a sum," every algebraic rule that holds for
              sums automatically holds for integrals — pull constants out,
              split a sum over disjoint chunks, compare term-by-term. These
              are the bookkeeping rules you'll use to manipulate every
              integral you meet for the rest of the chapter, almost without
              thinking. They feel obvious once you've seen them, which is
              exactly why they're worth slowing down and meeting properly:
              "obvious" is the territory where students stop paying attention
              and start making sign errors.
            </Why>

            <Why>
              <strong>Why these rules exist at all.</strong> The integral
              symbol <InlineMath math="\int" /> is a stretched-out{" "}
              <InlineMath math="\sum" /> — it was chosen by Leibniz precisely
              to evoke "sum of infinitesimal pieces." So when we ask "what
              algebraic moves are legal for integrals?", the honest answer is
              "all the moves that are legal for sums, plus the ability to
              take limits without breaking anything." Constants pull out of
              sums; constants pull out of integrals. Sums distribute over
              addition; integrals distribute over addition. Sums split when
              you split the index range; integrals split when you split the
              interval. None of this is calculus magic. It's all just sum
              behavior surviving the limit. Once you internalize that, you
              stop memorizing the four properties and just <em>see</em> why
              each one has to be true.
            </Why>

            <Why>
              Mental image to carry: a definite integral is a number that
              measures signed area. Anything you can do to a number that
              respects "area equals area" is a legal move. Scaling a region
              vertically by 3 scales its area by 3 — that's the constant
              rule. Joining two adjacent regions adds their areas — that's
              the interval-splitting rule. Walking across a region in the
              opposite direction (right-to-left instead of left-to-right)
              flips the sign of every <InlineMath math="\Delta x" /> in the
              sum, and therefore flips the sign of the area — that's the
              limit-flip rule. A region with zero width has zero area — that's
              the trivial-case rule. These are not new rules. They're
              consequences of the picture you already have.
            </Why>

            <Why>
              <strong>Where the rules come from.</strong> Riemann sums obey
              the usual rules of summation: pull constants out of a sum, add
              two sums term-by-term, split a sum into chunks. Because the
              integral is just the limit of those sums, every summation rule
              survives the limit. That's the source of the four core
              properties — they aren't extra definitions, they're inherited
              behavior.
            </Why>
            <BlockMath math="\int_a^b \bigl[c\,f(x) + d\,g(x)\bigr]\,dx = c\int_a^b f(x)\,dx + d\int_a^b g(x)\,dx" />
            <BlockMath math="\int_a^c f(x)\,dx = \int_a^b f(x)\,dx + \int_b^c f(x)\,dx" />
            <BlockMath math="\int_b^a f(x)\,dx = -\int_a^b f(x)\,dx, \qquad \int_a^a f(x)\,dx = 0" />
            <Why>
              The sign-flip rule has a physical reading: integrating from
              right to left, our <InlineMath math="\Delta x" /> values are
              negative, so each rectangle area flips sign. The empty-interval
              rule is just "a strip of zero width has zero area" — pure
              common sense once you picture it.
            </Why>

            <Why>
              <strong>Building up the comparison property.</strong> If{" "}
              <InlineMath math="m" /> is the minimum height of{" "}
              <InlineMath math="f" /> on <InlineMath math="[a, b]" /> and{" "}
              <InlineMath math="M" /> is the maximum, then the region under
              the curve must fit between two rectangles of full width:
            </Why>
            <BlockMath math="m(b - a) \;\le\; \int_a^b f(x)\,dx \;\le\; M(b - a)." />
            <Why>
              The smaller rectangle (height <InlineMath math="m" />) is
              guaranteed to fit underneath; the larger (height{" "}
              <InlineMath math="M" />) is guaranteed to contain it. This is
              how you bound an integral whose exact value you can't compute —
              a recurring move in the improper-integral comparison test in
              5.10.
            </Why>

            <Why>
              <strong>A concrete walk-through.</strong> Suppose you already
              know <InlineMath math="\int_0^2 x^2\,dx = 8/3" /> (we proved
              this in 5.1). Use the properties to evaluate{" "}
              <InlineMath math="\int_0^2 (3x^2 - 5)\,dx" /> without doing any
              new limit-of-Riemann-sums work.
            </Why>
            <Why>
              Step 1 — linearity to peel the constants and the sum apart:
            </Why>
            <Eq>∫₀² (3x² − 5) dx = 3·∫₀² x² dx − 5·∫₀² 1 dx</Eq>
            <Why>
              Step 2 — the first integral is known. The second is the area of
              a rectangle of height 1 over <InlineMath math="[0, 2]" />, which
              is just 2. Plug in:
            </Why>
            <Eq>= 3·(8/3) − 5·2 = 8 − 10 = −2</Eq>
            <Why>
              Sanity check the sign: on <InlineMath math="[0, 2]" /> the
              integrand <InlineMath math="3x^2 - 5" /> starts at{" "}
              <InlineMath math="-5" />, crosses zero near{" "}
              <InlineMath math="x \approx 1.29" />, and ends at{" "}
              <InlineMath math="+7" />. The dip below the axis is large and
              wide; the bump above is small and narrow. Net negative — passes
              the eyeball test.
            </Why>

            <Why>
              <strong>A second walk-through — splitting at a kink.</strong>{" "}
              Try <InlineMath math="\int_{-1}^{2} |x|\,dx" />. The absolute
              value has a kink at <InlineMath math="x = 0" />: to the left{" "}
              <InlineMath math="|x| = -x" />, to the right{" "}
              <InlineMath math="|x| = x" />. There's no single antiderivative
              that works on both sides, so split the interval at the kink:
            </Why>
            <Eq>∫₋₁² |x| dx = ∫₋₁⁰ (−x) dx + ∫₀² x dx</Eq>
            <Why>
              Each piece is now a standard polynomial integral. The first is
              the area of a triangle of base 1 and height 1 (the graph of{" "}
              <InlineMath math="-x" /> on <InlineMath math="[-1, 0]" /> goes
              from 1 down to 0), so it equals <InlineMath math="1/2" />. The
              second is the area of a triangle of base 2 and height 2,
              equal to 2. Total:{" "}
              <InlineMath math="1/2 + 2 = 5/2" />.
            </Why>
            <Eq>= 1/2 + 2 = 5/2</Eq>
            <Why>
              The interval-splitting property is the only reason you can
              integrate piecewise functions at all. Whenever an integrand
              changes formula partway through the interval — absolute values,
              piecewise definitions, sign changes that flip an inequality —
              you split at the breakpoint, integrate each piece with its own
              formula, and add. Same idea for functions with isolated
              discontinuities: the integral over the whole interval is just
              the sum of integrals over the smooth pieces (assuming each
              piece is well-behaved).
            </Why>

            <Why>
              <strong>How these properties connect to later sections.</strong>{" "}
              Linearity is what lets you split a polynomial integrand
              term-by-term — you'll lean on it every single time you
              integrate a polynomial in 5.3. Interval splitting is the
              technical move behind handling improper integrals with
              interior singularities in 5.10: when an integrand blows up at
              some point inside <InlineMath math="[a, b]" />, you split the
              interval at the trouble spot and analyze each half as its own
              improper integral. The comparison property is the seed that
              grows into the Comparison Test for convergence of improper
              integrals in 5.10. And the sign-flip rule shows up
              constantly in u-substitution (5.5) when the bounds get
              reversed by a decreasing substitution — you handle the flip by
              swapping the limits back and absorbing the minus sign. So these
              "boring bookkeeping" rules are actually the connective tissue
              of the whole chapter.
            </Why>

            <Why>
              <strong>Common scenarios where this appears.</strong> First,{" "}
              <em>"use linearity to combine known integrals"</em> problems —
              you're given a list of "known" integrals like{" "}
              <InlineMath math="\int_0^1 f(x)\,dx = 3" />,{" "}
              <InlineMath math="\int_0^1 g(x)\,dx = -2" /> and asked to
              compute <InlineMath math="\int_0^1 (4f - 5g)\,dx" />. The
              entire trick is "pull constants out, distribute the integral
              over the sum, plug in." Second,{" "}
              <em>"interval-splitting / piecewise"</em> problems, including
              absolute values and piecewise-defined integrands. Third,{" "}
              <em>"comparison / bounding"</em> problems — show an integral is{" "}
              <InlineMath math="\le" /> some easy bound, or estimate without
              computing. Fourth, <em>"sign-reversal"</em> problems where you
              swap the limits and have to remember the minus sign appears.
              The properties from this section are tested by simply STATING
              them in different disguises — be alert to all four.
            </Why>

            <Why>
              <strong>Pitfalls — and yes, they recur.</strong> (1){" "}
              <em>Treating the integral as multiplicative.</em> There is no
              rule <InlineMath math="\int fg = (\int f)(\int g)" />. None.
              Ever. The integral of a product is its own beast, handled by
              integration by parts in 5.6 or by substitution in 5.5 — never
              by "just pull each factor's integral out separately." Same for{" "}
              <InlineMath math="\int (f/g)" />: it's not{" "}
              <InlineMath math="(\int f)/(\int g)" />. (2){" "}
              <em>Forgetting the sign-flip when you reverse limits.</em> If
              you swap <InlineMath math="\int_a^b" /> into{" "}
              <InlineMath math="\int_b^a" />, you owe a minus sign — this is
              easy to forget when you're algebraically rearranging
              expressions. (3) <em>Applying the comparison property to
              integrals running in opposite directions.</em> The inequality{" "}
              <InlineMath math="f \le g \Rightarrow \int f \le \int g" /> is
              only true if both integrals have the SAME orientation (both
              run left-to-right). Reverse one set of limits and the
              inequality reverses too. (4){" "}
              <em>Confusing interval-splitting with linearity.</em>{" "}
              Interval-splitting splits the LIMITS of the integral; linearity
              splits the INTEGRAND. They're different moves used in different
              situations: a piecewise integrand splits by interval (at the
              breakpoint); a sum-of-functions integrand splits by linearity
              (term-by-term). Mix them up and you'll write nonsense like{" "}
              <InlineMath math="\int_a^b f(x)\,dx + \int_a^b g(x)\,dx = \int_a^c f(x)\,dx" />,
              which is gibberish.
            </Why>

            <Why>
              <strong>The trigger phrase.</strong> Reach for the linearity
              property any time the integrand visibly splits into a sum or
              has constants attached: <em>scan for plus signs and constant
              multipliers, and pull them out immediately</em>. Reach for the
              interval-splitting property whenever the integrand changes
              formula or sign partway through the interval — and also
              whenever you can split an awkward interval into two easy ones
              whose answers you already know. Reach for the sign-flip rule
              any time a substitution or algebraic move flips the limits
              backwards; absorb the minus sign explicitly so you don't lose
              track of it. The comparison property is your tool for any
              "show the integral is at most X" or "estimate without
              computing" question, including the entire Comparison Test in
              5.10.
            </Why>
          </ChapterSection>

          <ChapterSection
            id="s5-3"
            number="5.3"
            title="Evaluating Definite Integrals (FTC Part 2)"
            accentColor={ACCENT}
            blurb="Shortcut: find an antiderivative, evaluate at the endpoints, subtract."
          >
            <Why>
              The Riemann-sum definition from 5.1 is honest but brutal — even
              for the simple integrand <InlineMath math="x^2" /> on{" "}
              <InlineMath math="[0, 2]" /> you had to invoke a closed-form
              sum-of-squares formula and limit a messy expression in{" "}
              <InlineMath math="n" />. You'd hate to compute every integral
              that way for the rest of your life, and the good news is that
              nobody does. The "shortcut" in section 5.3 — the Fundamental
              Theorem of Calculus, Part 2, often called the "Evaluation
              Theorem" — is one of the most surprising and useful results in
              all of mathematics: it tells you that <em>differentiation and
              integration are inverse operations</em>, so if you can find any
              function whose derivative is your integrand, integration
              collapses into a single subtraction.
            </Why>

            <Why>
              <strong>Why this is shocking, philosophically.</strong> You set
              out to measure an <em>area</em>, a geometric quantity. You did
              it by chopping the region into rectangles and letting the
              chopping get infinitely fine — a process that has nothing to do
              with derivatives. And yet, miraculously, the answer is given by
              "find a function whose RATE of change is your integrand, then
              subtract its values at two points." Why on earth should
              "instantaneous rate" know anything about "total accumulated
              area"? FTC Part 1 (5.4) gives the actual mechanism — the
              accumulator <InlineMath math="g(x) = \int_a^x f(t)\,dt" /> has
              derivative <InlineMath math="f(x)" />, so any antiderivative of{" "}
              <InlineMath math="f" /> differs from <InlineMath math="g" /> by
              a constant, and the constant cancels in the subtraction. But
              once you have FTC Pt 2 in hand you can use it without
              re-deriving it every time, and that's most of what 5.3 is for:
              giving you the practical tool.
            </Why>

            <Why>
              The practical statement: instead of summing rectangles, find
              ANY function <InlineMath math="F" /> whose derivative is the
              integrand <InlineMath math="f" />, plug in the endpoints, and
              subtract. That's it. The entire Calc I derivative table now
              doubles as an antiderivative table — you just read it
              backwards. Power rule? <InlineMath math="x^n" /> integrates to{" "}
              <InlineMath math="x^{n+1}/(n+1)" /> (for{" "}
              <InlineMath math="n \neq -1" />). Sine? Integrates to{" "}
              <InlineMath math="-\cos x" />. Exponential? Integrates to
              itself. Each rule on your Calc I derivative cheat-sheet flips
              into a rule on your Calc II antiderivative cheat-sheet. The
              whole semester of derivatives is, in retrospect, also a whole
              semester of antiderivatives — you just didn't know it yet.
            </Why>

            <Why>
              <strong>Why the subtraction works.</strong> If{" "}
              <InlineMath math="F'(x) = f(x)" />, you can think of{" "}
              <InlineMath math="F" /> as a running odometer of accumulated
              area. To get the area from <InlineMath math="a" /> to{" "}
              <InlineMath math="b" />, you take "odometer at the end" minus
              "odometer at the start." Whatever constant you added to{" "}
              <InlineMath math="F" /> (the "+C") cancels in the subtraction,
              which is why we can pick <em>any</em> antiderivative we like —
              the simplest one available.
            </Why>
            <BlockMath math="\int_a^b f(x)\,dx \;=\; F(b) - F(a), \qquad \text{where } F'(x) = f(x)." />
            <Why>
              The standard shorthand for the right side is the bar notation{" "}
              <InlineMath math="F(x)\big|_a^b" />, which just means "evaluate
              at the top, subtract evaluation at the bottom."
            </Why>

            <Why>
              <strong>A concrete walk-through.</strong> Compute{" "}
              <InlineMath math="\int_0^{\pi} \sin x\,dx" /> — the area under
              one full hump of the sine wave.
            </Why>
            <Why>
              Step 1 — find an antiderivative. The Calc I rule{" "}
              <InlineMath math="\frac{d}{dx}(-\cos x) = \sin x" /> (the minus
              sign is the easy thing to drop; double-check by
              differentiating). So <InlineMath math="F(x) = -\cos x" />.
            </Why>
            <Why>
              Step 2 — apply FTC Pt 2: plug in the endpoints and subtract.
            </Why>
            <Eq>∫₀^π sin x dx = (−cos x) |₀^π = (−cos π) − (−cos 0)</Eq>
            <Eq>             = (−(−1)) − (−(1)) = 1 + 1 = 2</Eq>
            <Why>
              Step 3 — interpret. The area under one sine hump is exactly 2
              square units — a remarkably clean number for a curvy region.
              Sanity check: the hump fits inside a rectangle of width{" "}
              <InlineMath math="\pi \approx 3.14" /> and height 1, so the
              maximum possible area is about 3.14. Our answer 2 is about 64%
              of that bounding box, which feels right for a smooth bell-ish
              shape.
            </Why>

            <Why>
              <strong>One more, with a polynomial.</strong> Try{" "}
              <InlineMath math="\int_1^3 (4x^3 - 2)\,dx" />. Power-rule the
              antiderivative term-by-term —{" "}
              <InlineMath math="x^4" /> for <InlineMath math="4x^3" />, and{" "}
              <InlineMath math="-2x" /> for the constant:
            </Why>
            <Eq>F(x) = x⁴ − 2x</Eq>
            <Eq>F(3) − F(1) = (81 − 6) − (1 − 2) = 75 − (−1) = 76</Eq>
            <Why>
              No Riemann sums, no closed-form sum-of-cubes formula — just a
              derivative table read in reverse, plus a subtraction.
            </Why>

            <Why>
              <strong>Indefinite vs definite — the +C distinction.</strong>{" "}
              When you see a definite integral{" "}
              <InlineMath math="\int_a^b f(x)\,dx" />, the answer is a
              number, and the "+C" never appears in the final answer because
              it cancels in the subtraction <InlineMath math="F(b) - F(a)" />.
              When you see an indefinite integral{" "}
              <InlineMath math="\int f(x)\,dx" />, the answer is a{" "}
              <em>family of functions</em> — every function whose derivative
              is <InlineMath math="f" /> — and you MUST write "+C" to
              indicate the family. Forgetting +C on indefinite integrals is
              the single most common point-loss on Calc II exams. The
              easiest way to remember: if there are limits on the integral
              sign, the answer is a number and no +C; if there aren't, the
              answer is a function family and you owe a +C.
            </Why>

            <Why>
              <strong>A second walk-through — a logarithm appears.</strong>{" "}
              Compute <InlineMath math="\int_1^{e} \dfrac{1}{x}\,dx" />. The
              antiderivative of <InlineMath math="1/x" /> is{" "}
              <InlineMath math="\ln|x|" /> — the absolute value matters in
              general, but here the integration interval{" "}
              <InlineMath math="[1, e]" /> is entirely positive so{" "}
              <InlineMath math="\ln|x| = \ln x" />.
            </Why>
            <Eq>∫₁^e (1/x) dx = ln x |₁^e = ln e − ln 1 = 1 − 0 = 1</Eq>
            <Why>
              The exact value is 1, and the geometric meaning is striking:
              the region under the hyperbola{" "}
              <InlineMath math="y = 1/x" /> from{" "}
              <InlineMath math="x = 1" /> to <InlineMath math="x = e" /> has
              area exactly 1. That's the geometric DEFINITION of Euler's
              number <InlineMath math="e" /> — it's the unique upper limit
              that makes this area equal to 1. (In fact this is one valid
              definition of the natural logarithm:{" "}
              <InlineMath math="\ln x = \int_1^x dt/t" />. From that
              definition you can derive every other property of{" "}
              <InlineMath math="\ln" /> using FTC.)
            </Why>

            <Why>
              <strong>How this connects to the techniques chapters.</strong>{" "}
              FTC Pt 2 is the engine that makes integration techniques
              valuable. Substitution (5.5) doesn't "compute" an integral; it
              <em> rewrites</em> an integral into a form where you can
              recognize an antiderivative from your Calc I table. Same for
              integration by parts (5.6), trig integrals (5.7), partial
              fractions (5.8). Every technique in the chapter is a way to
              massage the integrand until you can spot an antiderivative,
              after which FTC Pt 2 finishes the job. So when you're learning
              5.5–5.8, the constant background question is: "what
              antiderivative am I trying to reveal?" Without FTC Pt 2 these
              techniques would be aimless — you'd transform an integral and
              have nothing useful to do with the transformed version. With
              FTC Pt 2 they have a target: the moment you recognize an
              antiderivative, you're done.
            </Why>

            <Why>
              <strong>Common scenarios where this appears.</strong>{" "}
              First, <em>"direct table-lookup"</em> definite integrals — the
              integrand is something you immediately recognize as a known
              derivative (polynomial, sine/cosine, exponential, 1/x), and
              you apply FTC Pt 2 in two lines. Second, <em>"definite integral
              after a substitution"</em> — you transform the integrand with
              u-sub or trig sub, change the limits accordingly, and apply
              FTC Pt 2 in the new variable. Third, <em>"area between two
              curves"</em> — set up as <InlineMath math="\int_a^b (f - g)\,dx" />,
              find an antiderivative of <InlineMath math="f - g" />, apply
              FTC Pt 2 (this is the start of Ch 6). Fourth,{" "}
              <em>"average value"</em> problems — the average of{" "}
              <InlineMath math="f" /> on <InlineMath math="[a, b]" /> is{" "}
              <InlineMath math="\frac{1}{b-a}\int_a^b f(x)\,dx" />, computed
              by FTC Pt 2. In every case the workflow is the same: find an
              antiderivative, evaluate at the endpoints, subtract.
            </Why>

            <Why>
              <strong>Pitfalls — and how to defuse them.</strong> (1){" "}
              <em>Dropping the lower-limit term.</em> Students compute{" "}
              <InlineMath math="F(b)" /> and call it a day. ALWAYS evaluate
              both endpoints, even when the lower one looks trivially easy
              (like <InlineMath math="F(0)" />). Zero into a polynomial is 0,
              but zero into a logarithm is{" "}
              <InlineMath math="-\infty" /> (improper!) and zero into an
              exponential is 1, not 0. The "trivial" lower bound is where
              the trap lives. (2) <em>Sign errors in antiderivatives that
              start with a minus.</em> Antiderivative of{" "}
              <InlineMath math="\sin x" /> is{" "}
              <InlineMath math="-\cos x" />; antiderivative of{" "}
              <InlineMath math="\frac{1}{1 - x^2}" /> involves{" "}
              <InlineMath math="-\text{arctanh}" /> or partial-fractions
              minus signs. Write these in parentheses —{" "}
              <InlineMath math="(-\cos x)\big|_a^b" /> — so the outer
              subtraction can't accidentally swallow the inner minus. (3){" "}
              <em>+C on a definite integral.</em> If the integral has limits,
              there is no +C. The +C cancels in the subtraction. Writing it
              looks unprofessional, like saying "the temperature was 72
              degrees, plus or minus a constant." (4){" "}
              <em>NO +C on an indefinite integral.</em> The mirror mistake:
              omitting +C when the integral has no limits. Without it, your
              answer claims to be THE antiderivative when really it's just
              ONE antiderivative out of an infinite family. (5){" "}
              <em>Antiderivative miscalculation.</em> The power rule is{" "}
              <InlineMath math="\int x^n\,dx = x^{n+1}/(n+1) + C" /> as long
              as <InlineMath math="n \neq -1" />; the exception{" "}
              <InlineMath math="n = -1" /> gives{" "}
              <InlineMath math="\ln|x|" />. Forgetting this exception
              produces nonsense like{" "}
              <InlineMath math="\int x^{-1}\,dx = x^0/0" />. Sanity-check
              every antiderivative by differentiating it and seeing if you
              recover the integrand.
            </Why>

            <Why>
              <strong>The trigger.</strong> You reach for FTC Pt 2 every
              single time you see a definite integral whose integrand you
              can recognize from the derivative table (directly, or after
              some massaging from 5.5–5.8). It is essentially the only way
              definite integrals get computed by hand. The Riemann-sum
              definition is for understanding what the answer means;
              FTC Pt 2 is for actually getting the number. Find an
              antiderivative, evaluate at the endpoints, subtract — and
              always sanity-check the antiderivative by differentiating it.
            </Why>
          </ChapterSection>

          <ChapterSection
            id="s5-4"
            number="5.4"
            title="The Fundamental Theorem of Calculus (Part 1)"
            accentColor={ACCENT}
            blurb="Differentiation undoes integration — applied to functions defined by an integral."
          >
            <Why>
              FTC Part 2 (5.3) gave you the practical shortcut: to evaluate a
              definite integral, find an antiderivative and subtract. FTC
              Part 1 is the underlying mechanism that <em>justifies</em> that
              shortcut. It says: if you build a new function by integrating{" "}
              <InlineMath math="f" /> from a fixed lower limit up to a
              variable upper limit <InlineMath math="x" />, the derivative of
              that new function is just <InlineMath math="f(x)" /> again.
              Translation: <em>differentiation undoes integration</em>. The
              two operations are inverses, the way addition and subtraction
              are inverses, or the way "exponentiate" and "take a logarithm"
              are inverses.
            </Why>

            <Why>
              The scenario worth picturing: you're walking along the x-axis
              from a fixed starting point <InlineMath math="a" /> to the
              right, and at every step you record the height of a curve{" "}
              <InlineMath math="f(t)" />. The function{" "}
              <InlineMath math="g(x) = \int_a^x f(t)\,dt" /> is your odometer
              of accumulated area so far — how much "stuff under the curve"
              you've swept up by the time you reach the point{" "}
              <InlineMath math="x" />. If you stop and ask "how fast is my
              odometer ticking up at this very moment?", the answer is the
              height of the curve at the place you're currently standing.
              Why? Because the next sliver of area you're about to add is a
              tall thin rectangle of height <InlineMath math="f(x)" /> and
              tiny width <InlineMath math="dx" /> — and the rate of area
              accumulation is its height divided by its width, which is
              just its height. That's FTC Part 1 in one sentence.
            </Why>

            <Why>
              <strong>Why this is the "fundamental" theorem.</strong> Before
              FTC, "integration" (computing areas) and "differentiation"
              (computing instantaneous rates of change) looked like two
              separate subjects — one geometric, one infinitesimal. The
              ancient Greeks had a version of integration (Archimedes,
              method of exhaustion); Newton and Leibniz had differentiation.
              FTC is the bridge that connected them and showed they're the
              same subject viewed from two angles. Without it, you'd
              compute every integral as a limit of sums — slow, painful,
              one problem at a time. With it, the entire derivative table is
              also an antiderivative table, and every integral whose
              integrand you can recognize collapses to a subtraction.
            </Why>
            <Why>
              The answer is intuitive once you picture it. The next sliver of
              area you're about to add is a tall thin rectangle of height{" "}
              <InlineMath math="f(x)" /> and tiny width{" "}
              <InlineMath math="dx" />. The rate at which area accumulates is
              its height. So the derivative of the accumulator{" "}
              <InlineMath math="g" /> is simply the curve's value at the
              moving endpoint — differentiation undoes integration:
            </Why>
            <BlockMath math="g(x) = \int_a^x f(t)\,dt \quad \Longrightarrow \quad g'(x) = f(x)." />

            <Why>
              <strong>The chain-rule extension.</strong> Real problems almost
              always have something more complex than <InlineMath math="x" />{" "}
              up in the upper limit — say{" "}
              <InlineMath math="x^2" />, or <InlineMath math="\sin x" />.
              Treat the inner function as a chain-rule "inside function":
            </Why>
            <BlockMath math="\frac{d}{dx}\int_a^{u(x)} f(t)\,dt = f\bigl(u(x)\bigr)\cdot u'(x)." />
            <Why>
              You plug <InlineMath math="u(x)" /> into <InlineMath math="f" />{" "}
              (that's the "FTC Pt 1" part) and then multiply by{" "}
              <InlineMath math="u'(x)" /> (that's the chain rule kicking in
              because the upper limit is moving faster than 1). If both
              limits are functions of <InlineMath math="x" />, split the
              integral at a constant and apply the rule to each piece, with a
              minus sign for the bottom limit because of the sign-flip rule
              from 5.2.
            </Why>

            <Why>
              <strong>A concrete walk-through.</strong> Compute{" "}
              <InlineMath math="\dfrac{d}{dx}\int_2^{x^2}\sqrt{1 + t^3}\,dt" />.
              Notice we never have to actually integrate{" "}
              <InlineMath math="\sqrt{1 + t^3}" /> — that's hopeless in
              closed form. FTC Pt 1 lets us skip past it.
            </Why>
            <Why>
              Step 1 — match the template. The integrand{" "}
              <InlineMath math="f(t) = \sqrt{1 + t^3}" /> with{" "}
              <InlineMath math="u(x) = x^2" />. So{" "}
              <InlineMath math="u'(x) = 2x" />.
            </Why>
            <Why>
              Step 2 — substitute <InlineMath math="t \to u(x)" /> in the
              integrand and multiply by{" "}
              <InlineMath math="u'(x)" />:
            </Why>
            <Eq>d/dx[∫₂^{"{x²}"} √(1 + t³) dt] = √(1 + (x²)³) · (2x) = 2x·√(1 + x⁶)</Eq>
            <Why>
              Step 3 — sanity check. At <InlineMath math="x = 1" />, the
              upper limit equals 1, which is <em>below</em> the lower limit
              2, so the integral itself is negative. As <InlineMath math="x" />{" "}
              creeps up past 1, the upper limit moves rightward and the
              accumulated area swings less-negative, which means the
              derivative should be positive at <InlineMath math="x = 1" />:{" "}
              our formula gives <InlineMath math="2(1)\sqrt{2} \approx 2.83" />,
              positive. Direction of change checks out.
            </Why>

            <Why>
              <strong>A second walk-through — both limits vary.</strong>{" "}
              Compute{" "}
              <InlineMath math="\dfrac{d}{dx}\int_{\sin x}^{x^3} \cos(t^2)\,dt" />.
              Here both the lower limit AND the upper limit depend on{" "}
              <InlineMath math="x" />. The fix: split the integral at any
              constant <InlineMath math="c" />, using the
              interval-splitting property from 5.2 in reverse:
            </Why>
            <BlockMath math="\int_{\sin x}^{x^3} \cos(t^2)\,dt = \int_{c}^{x^3} \cos(t^2)\,dt - \int_{c}^{\sin x} \cos(t^2)\,dt." />
            <Why>
              Now each integral has a variable upper limit and a constant
              lower limit, so FTC Pt 1 + chain rule applies to each.
              Differentiating term by term:
            </Why>
            <BlockMath math="\frac{d}{dx}\int_{\sin x}^{x^3} \cos(t^2)\,dt = \cos((x^3)^2)\cdot 3x^2 - \cos((\sin x)^2)\cdot \cos x." />
            <Why>
              The minus sign in the second term comes from "the lower limit
              moved up." The rule for the general case: when both limits
              vary, the derivative is{" "}
              <InlineMath math="f(\text{upper}) \cdot (\text{upper})' - f(\text{lower}) \cdot (\text{lower})'" />.
              Same FTC Pt 1 + chain rule, just applied twice with the right
              signs.
            </Why>

            <Why>
              <strong>A short proof of FTC Part 2 from FTC Part 1.</strong>{" "}
              Watch the two halves of FTC click together. Suppose{" "}
              <InlineMath math="F" /> is ANY antiderivative of{" "}
              <InlineMath math="f" />. Let{" "}
              <InlineMath math="g(x) = \int_a^x f(t)\,dt" /> be the
              accumulator. By FTC Pt 1, <InlineMath math="g'(x) = f(x)" /> —
              same as <InlineMath math="F'" />. Two functions with the same
              derivative differ by a constant, so{" "}
              <InlineMath math="F(x) = g(x) + C" /> for some{" "}
              <InlineMath math="C" />. Now compute{" "}
              <InlineMath math="F(b) - F(a) = [g(b) + C] - [g(a) + C] = g(b) - g(a)" />
              — the constant cancels. But{" "}
              <InlineMath math="g(a) = \int_a^a f\,dt = 0" /> and{" "}
              <InlineMath math="g(b) = \int_a^b f\,dt" />. So{" "}
              <InlineMath math="F(b) - F(a) = \int_a^b f\,dt" /> — which is
              FTC Pt 2. The "+C cancels" property of indefinite integrals is
              literally why the choice of antiderivative in FTC Pt 2 doesn't
              matter.
            </Why>

            <Why>
              <strong>How this connects forward.</strong> FTC Pt 1 + chain
              rule problems will hit you again in 5.5 in a different guise:
              substitution is exactly "apply chain rule when undoing an
              integral." The two are mirror images — FTC Pt 1 says "take
              derivative of an integral and the chain rule appears";
              substitution says "see chain-rule structure in an integrand
              and you can integrate it." If you have one technique down,
              you secretly have the other. Section 5.10 also uses the
              accumulator function picture: an improper integral{" "}
              <InlineMath math="\int_a^\infty f\,dt" /> is really{" "}
              <InlineMath math="\lim_{x\to\infty} g(x)" /> where{" "}
              <InlineMath math="g" /> is the accumulator. "Does this
              improper integral converge?" becomes "does the accumulator
              function stabilize as you walk to infinity?"
            </Why>

            <Why>
              <strong>Common scenarios where this appears.</strong> First,{" "}
              <em>"differentiate the accumulator"</em> problems — the
              integrand is something un-integrable in closed form (like{" "}
              <InlineMath math="\sqrt{1 + t^3}" /> or{" "}
              <InlineMath math="e^{-t^2}" />), but FTC Pt 1 lets you
              differentiate without ever computing it. Second,{" "}
              <em>"chain rule needed because the upper limit is a function
              of x"</em> — these are tested EVERYWHERE on exams because they
              cleanly distinguish students who memorized "the answer is{" "}
              <InlineMath math="f(x)" />" from students who actually
              understand the theorem. Third, <em>"both limits vary"</em> —
              split at a constant, apply FTC Pt 1 twice, mind the sign on
              the lower limit term. Fourth, <em>conceptual / proof
              questions</em> — showing that{" "}
              <InlineMath math="\ln x = \int_1^x dt/t" /> really has
              derivative <InlineMath math="1/x" />, or that a given
              accumulator function inherits continuity and differentiability
              from its integrand.
            </Why>

            <Why>
              <strong>Pitfalls — and one is famous.</strong> (1){" "}
              <em>Forgetting the <InlineMath math="\cdot u'(x)" /> factor.</em>{" "}
              If you write <InlineMath math="\sqrt{1 + x^6}" /> alone for
              the example above, you've quietly assumed the upper limit was{" "}
              <InlineMath math="x" />, not <InlineMath math="x^2" /> —
              that's a chain-rule miss exactly like writing{" "}
              <InlineMath math="\cos(x^2)" /> as the derivative of{" "}
              <InlineMath math="\sin(x^2)" /> instead of{" "}
              <InlineMath math="2x\cos(x^2)" />. The chain rule is required
              every time the upper limit is anything other than literal{" "}
              <InlineMath math="x" />. (2){" "}
              <em>Differentiating the integrand instead of evaluating it.</em>{" "}
              FTC Pt 1 says <InlineMath math="g'(x) = f(x)" /> — that's{" "}
              <InlineMath math="f" /> EVALUATED at <InlineMath math="x" />,
              not <InlineMath math="f" /> DIFFERENTIATED. There's no{" "}
              <InlineMath math="f'(x)" /> anywhere in the formula. Students
              who haven't internalized the theorem sometimes write{" "}
              <InlineMath math="g'(x) = f'(x)" />, which is just wrong. (3){" "}
              <em>Sign error when the variable is in the lower limit.</em>{" "}
              An integral <InlineMath math="\int_{u(x)}^{b} f(t)\,dt" /> with
              a variable LOWER limit and constant upper limit equals{" "}
              <InlineMath math="-\int_{b}^{u(x)} f(t)\,dt" /> (sign-flip),
              and then differentiating with FTC Pt 1 + chain rule gives{" "}
              <InlineMath math="-f(u(x))\cdot u'(x)" />. Miss the leading
              minus sign and your answer's wrong by a sign. (4){" "}
              <em>Treating the dummy variable as if it matters.</em> Inside{" "}
              <InlineMath math="\int_a^x f(t)\,dt" />, the{" "}
              <InlineMath math="t" /> is a dummy variable that's been
              integrated out — the final result is a function of{" "}
              <InlineMath math="x" /> alone. Some students write FTC Pt 1
              as <InlineMath math="g'(t) = f(t)" />, mixing up the role of
              dummy variable and outer variable. The variable you
              differentiate with respect to (the outer one) is{" "}
              <InlineMath math="x" />; the variable inside the integrand
              (the dummy one) is <InlineMath math="t" />; the answer
              involves <InlineMath math="x" /> only.
            </Why>

            <Why>
              <strong>The trigger.</strong> You reach for FTC Pt 1 any time
              you see a derivative of an integral whose limits depend on the
              variable you're differentiating with respect to. Common
              appearances: related-rates problems that involve an
              accumulated quantity (e.g., "given that{" "}
              <InlineMath math="P(t) = \int_0^t r(\tau)\,d\tau" /> is total
              population at time <InlineMath math="t" />, what's the growth
              rate at <InlineMath math="t = 5" />?"), and in proving that
              specific functions defined as integrals have the derivatives
              we expect them to have. The recognition pattern is "I see
              both a <InlineMath math="d/dx" /> AND a{" "}
              <InlineMath math="\int" /> stacked together" — that's FTC Pt 1
              territory.
            </Why>
          </ChapterSection>

          <ChapterSection
            id="s5-5"
            number="5.5"
            title="The Substitution Rule"
            accentColor={ACCENT}
            blurb="The chain rule, run backwards. Spot u, replace dx with du, integrate, reverse."
          >
            <Why>
              Substitution is the first and most powerful integration
              technique in the chapter — it'll resolve at least half the
              integrals you meet, and even when it doesn't fully resolve an
              integral, it's often the move that <em>sets up</em> the next
              technique to work. The reason for its dominance: most
              integrands you'll see in practice are built from compositions
              of simple functions (exponentials of polynomials, square roots
              of polynomials, trig functions of polynomials), and
              substitution is exactly the tool engineered to handle
              compositions. Master this section and you've made the single
              biggest leap of the chapter.
            </Why>

            <Why>
              <strong>Prerequisite refresher — the chain rule.</strong>{" "}
              Before we run anything backwards, refresh what's going forward.
              In Calc I you learned that the derivative of a composition{" "}
              <InlineMath math="F(g(x))" /> is "derivative of the outer
              function evaluated at the inner, times derivative of the
              inner":
            </Why>
            <BlockMath math="\frac{d}{dx} F(g(x)) = F'(g(x))\cdot g'(x)." />
            <Why>
              For example,{" "}
              <InlineMath math="\frac{d}{dx} \sin(x^2) = \cos(x^2)\cdot 2x" />
              . The outer function is <InlineMath math="\sin" />, its
              derivative is <InlineMath math="\cos" />, evaluated at the
              inner function <InlineMath math="x^2" />, multiplied by the
              inner derivative <InlineMath math="2x" />. That extra{" "}
              <InlineMath math="2x" /> is the chain rule's signature — it's
              what shows up in derivatives of compositions but never in
              derivatives of "plain" functions. Hold this pattern in your
              head:{" "}
              <em>derivative of composition = outer-derivative-at-inner ×
              inner-derivative</em>. Substitution is what you do when you
              spot that signature in an integrand and want to play the chain
              rule backwards.
            </Why>

            <Why>
              <strong>The "running it backwards" picture.</strong> If
              someone hands you the function{" "}
              <InlineMath math="\cos(x^2)\cdot 2x" /> and says "find me an
              antiderivative," the chain-rule pattern should jump out at
              you: "outer function evaluated at <InlineMath math="x^2" />,
              multiplied by <InlineMath math="(x^2)' = 2x" />." That has to
              be the derivative of <InlineMath math="\sin(x^2)" />. So{" "}
              <InlineMath math="\int \cos(x^2)\cdot 2x\,dx = \sin(x^2) + C" />.
              Substitution is just a careful, mechanical way to do that
              pattern recognition: name the inner function{" "}
              <InlineMath math="u" />, write down{" "}
              <InlineMath math="du = u'(x)\,dx" />, and watch the integrand
              collapse into <InlineMath math="\int \cos(u)\,du" />, which is{" "}
              <InlineMath math="\sin(u) + C = \sin(x^2) + C" />.
            </Why>

            <Why>
              Mental image: you're handed a tangled integrand. Spot the
              "inside function" — the chunk that's nested under a root, in
              an exponent, inside a trig function, raised to a power, or
              otherwise wrapped by another function. Give that chunk a new
              name <InlineMath math="u" />, rewrite{" "}
              <InlineMath math="du = u'(x)\,dx" /> by differentiating, and
              watch the rest of the integrand collapse into a simple
              expression in <InlineMath math="u" /> alone. If the collapse
              works cleanly, integrate in <InlineMath math="u" />, then
              undo your renaming by substituting back. If the collapse
              leaves leftover <InlineMath math="x" />'s you can't get rid
              of, your choice of <InlineMath math="u" /> was wrong — back
              up and try a different inner function.
            </Why>

            <Why>
              <strong>The formal statement.</strong> If{" "}
              <InlineMath math="u = g(x)" />, then{" "}
              <InlineMath math="du = g'(x)\,dx" /> and:
            </Why>
            <BlockMath math="\int f(g(x))\,g'(x)\,dx = \int f(u)\,du." />
            <Why>
              For a <em>definite</em> integral, swap the x-limits for the
              corresponding u-limits as you change variables:
            </Why>
            <BlockMath math="\int_a^b f(g(x))\,g'(x)\,dx = \int_{g(a)}^{g(b)} f(u)\,du." />
            <Why>
              Why bother changing the limits? Two reasons. First, you don't
              have to back-substitute at the end. Second, back-substitution
              is exactly where sign-flip errors and "off by a constant"
              algebra mistakes love to sneak in — skipping that step skips
              the bug.
            </Why>

            <Why>
              <strong>A concrete walk-through.</strong> Evaluate{" "}
              <InlineMath math="\int 2x\sqrt{1 + x^2}\,dx" />.
            </Why>
            <Why>
              Step 1 — spot the inside. The chunk hiding under the radical is
              <InlineMath math="\,1 + x^2" />. Its derivative is{" "}
              <InlineMath math="2x" />, and look — there's already a{" "}
              <InlineMath math="2x" /> sitting out in front of the radical.
              That's the giveaway that substitution will work cleanly:
            </Why>
            <Eq>u = 1 + x²,    du = 2x dx</Eq>
            <Why>
              Step 2 — rewrite the whole integrand in <InlineMath math="u" />
              . The <InlineMath math="2x\,dx" /> becomes <InlineMath math="du" />,
              and <InlineMath math="\sqrt{1 + x^2}" /> becomes{" "}
              <InlineMath math="\sqrt{u}" />:
            </Why>
            <Eq>∫ 2x · √(1 + x²) dx = ∫ √u du = ∫ u^(1/2) du</Eq>
            <Why>
              Step 3 — power-rule integrate in <InlineMath math="u" />, then
              back-substitute (since this is an indefinite integral with no
              limits to swap):
            </Why>
            <BlockMath math="\int u^{1/2}\,du = \tfrac{2}{3} u^{3/2} + C = \tfrac{2}{3}(1 + x^2)^{3/2} + C." />
            <Why>
              Step 4 — sanity check by differentiating. The derivative of{" "}
              <InlineMath math="\tfrac{2}{3}(1 + x^2)^{3/2}" /> is{" "}
              <InlineMath math="\tfrac{2}{3}\cdot \tfrac{3}{2}(1+x^2)^{1/2}\cdot 2x = 2x\sqrt{1+x^2}" />
              — matches the integrand. The chain rule reappears on
              differentiation, which is the round-trip confirmation that
              substitution worked.
            </Why>

            <Why>
              <strong>A definite version, with limits swapped.</strong>{" "}
              Evaluate <InlineMath math="\int_0^2 2x\sqrt{1 + x^2}\,dx" />.
              When <InlineMath math="x = 0" />,{" "}
              <InlineMath math="u = 1" />; when{" "}
              <InlineMath math="x = 2" />, <InlineMath math="u = 5" />:
            </Why>
            <Eq>∫₀² 2x·√(1 + x²) dx = ∫₁⁵ √u du = (2/3)u^(3/2) |₁⁵ = (2/3)(5√5 − 1)</Eq>
            <Why>
              ≈ <InlineMath math="(2/3)(11.18 - 1) \approx 6.79" />. Notice
              there's no back-substitution at the end — the new u-limits
              ate it.
            </Why>

            <Why>
              <strong>A second walk-through — u in an exponent.</strong>{" "}
              The first example had <InlineMath math="u" /> under a radical.
              Now try one where the "tell" is an exponent. Evaluate{" "}
              <InlineMath math="\int x\, e^{x^2}\,dx" />. The inner function
              hiding inside the exponent is <InlineMath math="x^2" />, whose
              derivative is <InlineMath math="2x" /> — and there's a lone{" "}
              <InlineMath math="x" /> sitting in front of the exponential.
              That <InlineMath math="x" /> is HALF of{" "}
              <InlineMath math="2x" />, which means substitution will work
              if we absorb the missing factor of 2 into a constant.
            </Why>
            <Eq>u = x²,    du = 2x dx,    so x dx = du/2</Eq>
            <Why>
              Now swap into the integrand. The{" "}
              <InlineMath math="e^{x^2}" /> becomes{" "}
              <InlineMath math="e^u" />, and <InlineMath math="x\,dx" />{" "}
              becomes <InlineMath math="du/2" />:
            </Why>
            <BlockMath math="\int x e^{x^2}\,dx = \int e^u \cdot \tfrac{du}{2} = \tfrac{1}{2}\int e^u\,du = \tfrac{1}{2}e^u + C = \tfrac{1}{2}e^{x^2} + C." />
            <Why>
              Sanity check by differentiating:{" "}
              <InlineMath math="\frac{d}{dx}\!\left[\tfrac{1}{2}e^{x^2}\right] = \tfrac{1}{2}e^{x^2}\cdot 2x = x e^{x^2}" />.
              Matches the integrand. The pulled-out constant{" "}
              <InlineMath math="1/2" /> is the key bookkeeping move — when
              the derivative of your <InlineMath math="u" /> is a constant
              multiple of what's actually in the integrand, you adjust by
              the reciprocal of that constant. Get comfortable with this;
              it shows up CONSTANTLY in u-sub problems.
            </Why>

            <Why>
              <strong>A third walk-through — u under a more subtle
              radical.</strong> Try{" "}
              <InlineMath math="\int x^2 \sqrt{x^3 + 5}\,dx" />. The inner
              function is <InlineMath math="x^3 + 5" />, whose derivative is{" "}
              <InlineMath math="3x^2" /> — and we have <InlineMath math="x^2" />{" "}
              sitting outside the radical. So <InlineMath math="x^2\,dx" />{" "}
              is one-third of <InlineMath math="du" />:
            </Why>
            <Eq>u = x³ + 5,    du = 3x² dx,    so x² dx = du/3</Eq>
            <BlockMath math="\int x^2 \sqrt{x^3 + 5}\,dx = \tfrac{1}{3}\int u^{1/2}\,du = \tfrac{1}{3}\cdot\tfrac{2}{3}u^{3/2} + C = \tfrac{2}{9}(x^3 + 5)^{3/2} + C." />
            <Why>
              Same pattern as the exponential case — the missing constant
              factor absorbs into a fraction out front. The "tell" for
              u-sub is always the same: an inner function whose derivative
              is also present in the integrand, possibly times a constant.
              Spot the inner; check its derivative; check that derivative
              matches (up to a constant) what's lying around outside.
            </Why>

            <Why>
              <strong>How this connects forward.</strong> Substitution is
              the workhorse you'll lean on inside every other technique. In
              integration by parts (5.6), the new integral on the right side
              of <InlineMath math="\int u\,dv = uv - \int v\,du" /> often
              needs a u-sub to finish. In trig integrals (5.7), after you
              use a Pythagorean identity to peel powers of sin and cos,
              what's left is almost always a substitution problem in
              disguise. In partial fractions (5.8), each fraction piece is
              integrated either by direct lookup or by a quick linear u-sub
              like <InlineMath math="u = x - r" />. Even improper integrals
              (5.10) usually require a substitution before you can take the
              limit. So getting u-sub into your fingers is the foundation
              the rest of the chapter sits on.
            </Why>

            <Why>
              <strong>Common scenarios where this appears.</strong>{" "}
              First, <em>"obvious inner function with its derivative
              hanging around"</em> — these are the bread-and-butter cases
              where the inner is clearly visible (under a root, in an
              exponent, inside a trig argument). Second,{" "}
              <em>"trig with sin/cos coupling"</em> — anything like{" "}
              <InlineMath math="\int \sin^n x \cos x\,dx" /> begs for{" "}
              <InlineMath math="u = \sin x" /> because{" "}
              <InlineMath math="\cos x\,dx" /> is exactly{" "}
              <InlineMath math="du" />. Third, <em>"exponential composed
              with a polynomial"</em> — <InlineMath math="\int p(x) e^{q(x)}\,dx" />{" "}
              works when <InlineMath math="p(x)" /> is (a constant times){" "}
              <InlineMath math="q'(x)" />. Fourth, <em>"rational function
              whose denominator matches the numerator's derivative"</em>{" "}
              — for example{" "}
              <InlineMath math="\int \dfrac{2x + 3}{x^2 + 3x + 7}\,dx" />,
              where <InlineMath math="u = x^2 + 3x + 7" /> makes{" "}
              <InlineMath math="du = (2x + 3)\,dx" /> exactly. Fifth,{" "}
              <em>"linear inner functions"</em> — anything like{" "}
              <InlineMath math="\int f(ax + b)\,dx" /> always works with{" "}
              <InlineMath math="u = ax + b" />, giving you a{" "}
              <InlineMath math="1/a" /> out front; this single pattern
              covers a huge fraction of textbook problems.
            </Why>

            <Why>
              <strong>Pitfalls — these are the points-losers.</strong>{" "}
              (1) <em>Picking u whose derivative isn't in the integrand.</em>{" "}
              You end up with leftover <InlineMath math="x" />'s after the
              swap and no way to express them in <InlineMath math="u" />.
              When this happens, back up and pick a different inner
              function — usually one level "more inside" than your first
              attempt. If no choice of <InlineMath math="u" /> works,
              substitution isn't the right technique here; move on to
              parts (5.6) or trig sub (5.7). (2) <em>Forgetting to change
              the limits</em> on definite integrals. The most common
              instant-zero on exam questions: you change variables, get a
              new integrand in <InlineMath math="u" />, but evaluate the
              new antiderivative at the OLD x-limits. The result is a
              number that looks reasonable but is wrong. The two-line
              prevention: when you write down{" "}
              <InlineMath math="u = g(x)" />, IMMEDIATELY compute{" "}
              <InlineMath math="u" /> at both x-limits and write the new
              u-limits on the integral. Don't proceed until you've done
              this. (3) <em>Sign errors when du has a minus sign.</em> If{" "}
              <InlineMath math="u = \cos x" /> then{" "}
              <InlineMath math="du = -\sin x\,dx" />, so{" "}
              <InlineMath math="\sin x\,dx = -du" />. Forgetting that
              minus is the single most common sign error in trig
              substitution problems. Write{" "}
              <InlineMath math="-du" /> in parentheses explicitly. (4){" "}
              <em>Dropping the dx during the swap.</em> Substitution is{" "}
              <InlineMath math="\int f(g(x))g'(x)\,dx = \int f(u)\,du" />.
              The <InlineMath math="dx" /> on the left becomes{" "}
              <InlineMath math="du" /> on the right; it doesn't vanish.
              Students who write the new integrand without the{" "}
              <InlineMath math="du" /> are missing a factor and will get
              wrong answers. (5) <em>Not back-substituting</em> on
              indefinite integrals. After integrating in{" "}
              <InlineMath math="u" /> you must rewrite the answer in terms
              of <InlineMath math="x" /> — leaving the answer as{" "}
              <InlineMath math="\tfrac{2}{3}u^{3/2} + C" /> when the
              original problem was in <InlineMath math="x" /> is
              incomplete. The exception: definite integrals where you
              already changed the limits don't need back-substitution
              (which is why changing the limits is the better workflow).
            </Why>

            <Why>
              <strong>The trigger.</strong> You reach for u-sub whenever
              you can name an inside function whose derivative is in the
              integrand up to a constant. The pattern recognition gets
              fast with practice — within a few weeks you'll see the
              candidate <InlineMath math="u" /> almost as soon as you see
              the integrand. If there's no such inner function, parts
              (5.6) is your next stop; if the integrand has an awkward
              algebraic radical of the form{" "}
              <InlineMath math="\sqrt{a^2 \pm x^2}" /> or{" "}
              <InlineMath math="\sqrt{x^2 - a^2}" />, trig substitution
              (5.7) is the move; if the integrand is a rational function,
              try partial fractions (5.8). Substitution is the first
              technique you try; the others are what to do when it doesn't
              fit.
            </Why>
          </ChapterSection>

          <ChapterSection
            id="s5-6"
            number="5.6"
            title="Integration by Parts"
            accentColor={ACCENT}
            blurb="When substitution fails on a product, parts is usually the play."
          >
            <Why>
              Substitution (5.5) is the chain rule run backwards.
              Integration by parts is the <em>product rule</em> run
              backwards. They're sibling techniques born from the same idea
              — every differentiation rule has an integration counterpart
              you get by reversing the arrow — but they apply to different
              integrand shapes. Substitution wants compositions (one
              function nested inside another). Parts wants products of
              factors that AREN'T related by differentiation. When you see
              <InlineMath math="\int x \sin x\,dx" />, neither factor is
              the other's derivative or inside-function; substitution has
              nothing to grab. That's where parts steps in.
            </Why>

            <Why>
              <strong>Prerequisite refresher — the product rule.</strong>{" "}
              Before we run anything backwards, recall the forward
              direction. For a product of two functions{" "}
              <InlineMath math="u(x)v(x)" />, the product rule says the
              derivative is "derivative of the first times the second, plus
              the first times the derivative of the second":
            </Why>
            <BlockMath math="\frac{d}{dx}[u(x)\,v(x)] = u'(x)\,v(x) + u(x)\,v'(x)." />
            <Why>
              For example,{" "}
              <InlineMath math="\frac{d}{dx}[x \sin x] = \sin x + x\cos x" />.
              Two terms come out. That observation is the seed of
              integration by parts: if the derivative of a product is a
              SUM of two terms, then integrating one term should give back
              the product minus the integral of the other term. Solve for
              the integral you want and you've got the formula.
            </Why>

            <Why>
              <strong>Why the formula is useful, in plain English.</strong>{" "}
              You have an integrand <InlineMath math="(\text{factor 1})\cdot
              (\text{factor 2})\,dx" /> that you can't integrate directly.
              Parts lets you trade: differentiate one factor (it usually
              becomes <em>simpler</em>) and integrate the other factor (it
              stays roughly the same complexity). If the new integral{" "}
              <InlineMath math="\int v\,du" /> is easier than the original{" "}
              <InlineMath math="\int u\,dv" />, you've made progress.
              Sometimes the new integral is trivial (as in the{" "}
              <InlineMath math="\int x e^x\,dx" /> case below). Sometimes
              it's still hard but a different kind of hard — for example,
              after one parts step you might end up with another product
              that needs parts AGAIN, which is fine (you just iterate).
              Sometimes you cycle back to the original integral with a
              constant factor, in which case you solve algebraically (the
              "appears on both sides" trick for things like{" "}
              <InlineMath math="\int e^x \sin x\,dx" />).
            </Why>

            <Why>
              Mental image: a tug-of-war between two factors, neither of
              which you can integrate directly. Parts picks one factor to
              differentiate (it becomes simpler, eventually maybe even
              disappearing) and the other factor to integrate (it stays
              roughly the same complexity). The trade is worthwhile if
              "differentiate this one, integrate that one" gives an easier
              integral than the original. LIATE — the priority order for
              which factor to differentiate — is just a cheat sheet for
              "which factor SHOULD become simpler when differentiated?"
              Polynomials become simpler (the degree drops). Logarithms
              become simpler (they become <InlineMath math="1/x" />).
              Trig and exponential functions don't really simplify when
              differentiated — they cycle — so they make better{" "}
              <InlineMath math="dv" /> than <InlineMath math="u" />.
            </Why>

            <Why>
              <strong>Deriving the formula.</strong> The product rule for
              derivatives says:
            </Why>
            <BlockMath math="\frac{d}{dx}\bigl[u(x)\,v(x)\bigr] = u'(x)v(x) + u(x)v'(x)." />
            <Why>
              Integrate both sides with respect to <InlineMath math="x" />.
              The left side just gives back <InlineMath math="uv" />. Solve
              for the integral you actually want:
            </Why>
            <BlockMath math="uv = \int u'v\,dx + \int u v'\,dx \quad \Longrightarrow \quad \int u\,dv = uv - \int v\,du." />
            <Why>
              The compressed form on the right uses differentials:{" "}
              <InlineMath math="du = u'\,dx" /> and{" "}
              <InlineMath math="dv = v'\,dx" />. You choose what's{" "}
              <InlineMath math="u" /> and what's <InlineMath math="dv" />,
              compute <InlineMath math="du" /> by differentiating and{" "}
              <InlineMath math="v" /> by integrating, then plug in.
            </Why>

            <Why>
              <strong>LIATE — and why it works.</strong> Pick{" "}
              <InlineMath math="u" /> as the first type in this list that
              appears in your integrand:
              <strong> L</strong>og,
              <strong> I</strong>nverse trig,
              <strong> A</strong>lgebraic,
              <strong> T</strong>rig,
              <strong> E</strong>xponential. The reason for the ordering:
              each type lower on the list is <em>easier</em> to integrate
              than the type above (so it makes a fine{" "}
              <InlineMath math="dv" />), and each type higher on the list
              gets <em>simpler</em> when differentiated (so it makes a fine{" "}
              <InlineMath math="u" />). Mnemonic: LIATE is "what you'd want
              to STAY put as v" — the things low on the list are happy to
              stay an exponential or a trig function after integrating.
            </Why>

            <Why>
              <strong>A concrete walk-through.</strong> Evaluate{" "}
              <InlineMath math="\int x e^x\,dx" />. The integrand is{" "}
              <InlineMath math="\text{Algebraic} \times \text{Exponential}" />.
              By LIATE, Algebraic beats Exponential, so{" "}
              <InlineMath math="u = x" /> and{" "}
              <InlineMath math="dv = e^x\,dx" />.
            </Why>
            <Why>
              Step 1 — fill out the four-corners table:
            </Why>
            <Eq>u = x        ⇒  du = dx</Eq>
            <Eq>dv = eˣ dx   ⇒  v  = eˣ</Eq>
            <Why>
              Step 2 — plug into <InlineMath math="\int u\,dv = uv - \int v\,du" />:
            </Why>
            <BlockMath math="\int x e^x\,dx = x \cdot e^x - \int e^x\,dx = x e^x - e^x + C = (x - 1)e^x + C." />
            <Why>
              Step 3 — sanity check. Differentiate{" "}
              <InlineMath math="(x - 1)e^x" /> by the product rule:{" "}
              <InlineMath math="e^x + (x - 1)e^x = x e^x" />. Matches the
              integrand. Round-trip confirmed.
            </Why>
            <Why>
              Notice what LIATE bought us: the new integral{" "}
              <InlineMath math="\int e^x\,dx" /> is trivial, while the wrong
              choice (<InlineMath math="u = e^x" />,{" "}
              <InlineMath math="dv = x\,dx" />) would have turned the
              problem into <InlineMath math="\int (x^2/2)e^x\,dx" />,
              which is <em>harder</em> than what we started with. Same
              formula, opposite outcomes — the choice of{" "}
              <InlineMath math="u" /> is the whole game.
            </Why>

            <Why>
              <strong>A second walk-through — the lonely logarithm.</strong>{" "}
              Evaluate <InlineMath math="\int \ln x\,dx" />. There's no
              obvious product — it's just <InlineMath math="\ln x" />{" "}
              standing alone. That's the trick: LIATE says Log comes first,
              so let <InlineMath math="u = \ln x" />. The only thing left
              for <InlineMath math="dv" /> is the bare <InlineMath math="dx" />
              itself:
            </Why>
            <Eq>u = ln x       ⇒  du = dx/x</Eq>
            <Eq>dv = dx        ⇒  v  = x</Eq>
            <Why>
              Now plug into the parts formula:
            </Why>
            <BlockMath math="\int \ln x\,dx = x\ln x - \int x \cdot \tfrac{1}{x}\,dx = x\ln x - \int 1\,dx = x\ln x - x + C." />
            <Why>
              The miracle: the <InlineMath math="x" /> in{" "}
              <InlineMath math="v" /> exactly cancels the{" "}
              <InlineMath math="1/x" /> in <InlineMath math="du" />,
              leaving the trivial integral{" "}
              <InlineMath math="\int 1\,dx = x" />. Sanity check:{" "}
              <InlineMath math="\frac{d}{dx}[x\ln x - x] = \ln x + x\cdot(1/x) - 1 = \ln x" />.
              The same trick works for{" "}
              <InlineMath math="\int \arctan x\,dx" />,{" "}
              <InlineMath math="\int \arcsin x\,dx" />, and any other
              "lonely" log or inverse trig function: set{" "}
              <InlineMath math="dv = dx" /> so{" "}
              <InlineMath math="v = x" />, and parts kills the
              awkwardness in one shot.
            </Why>

            <Why>
              <strong>A third walk-through — algebraic times trig.</strong>{" "}
              Evaluate <InlineMath math="\int x \cos x\,dx" />. This is the
              "classic" parts setup. LIATE: Algebraic beats Trig, so{" "}
              <InlineMath math="u = x" /> and{" "}
              <InlineMath math="dv = \cos x\,dx" />:
            </Why>
            <Eq>u = x          ⇒  du = dx</Eq>
            <Eq>dv = cos x dx  ⇒  v  = sin x</Eq>
            <BlockMath math="\int x \cos x\,dx = x \sin x - \int \sin x\,dx = x \sin x - (-\cos x) + C = x \sin x + \cos x + C." />
            <Why>
              Two minus signs combine into a plus — easy to mishandle. Write
              <InlineMath math="-\int \sin x\,dx" /> as{" "}
              <InlineMath math="-(-\cos x) = +\cos x" /> with the negation
              explicit. Sanity check by differentiating:{" "}
              <InlineMath math="\frac{d}{dx}[x\sin x + \cos x] = \sin x + x\cos x - \sin x = x\cos x" />.
              Round trip confirmed. The general lesson:
              algebraic-times-trig and algebraic-times-exponential are the
              two paradigmatic parts setups, and the workflow is the same in
              both: <InlineMath math="u = " />polynomial,{" "}
              <InlineMath math="dv = " />the rest, and parts knocks one
              degree off the polynomial in each iteration.
            </Why>

            <Why>
              <strong>Iterating parts — when one round isn't enough.</strong>{" "}
              For <InlineMath math="\int x^2 e^x\,dx" />, one round of parts
              reduces it to <InlineMath math="\int x e^x\,dx" />, which we
              already solved. A second round of parts on that solves the
              whole thing. In general,{" "}
              <InlineMath math="\int x^n e^x\,dx" /> takes{" "}
              <InlineMath math="n" /> rounds of parts, each one chipping
              one degree off the polynomial. Some problems use a "tabular"
              shortcut for this (especially in physics) — it's just a
              compact way to track repeated parts in a vertical column.
              You'll meet a slicker version of this iteration as a
              <em> reduction formula</em>, where{" "}
              <InlineMath math="I_n" /> is expressed in terms of{" "}
              <InlineMath math="I_{n-1}" /> or{" "}
              <InlineMath math="I_{n-2}" />.
            </Why>

            <Why>
              <strong>How this connects to other techniques.</strong> Parts
              sets up the "appears on both sides" algebraic trick for
              integrals like <InlineMath math="\int e^x \sin x\,dx" />:
              one round of parts gives an expression involving{" "}
              <InlineMath math="\int e^x \cos x\,dx" />; a second round
              gives back a multiple of the original integral; you solve
              algebraically. Parts is also the source of <em>reduction
              formulas</em> you'll see in 5.7 for high powers of trig
              functions — these are formulas like{" "}
              <InlineMath math="\int \sin^n x\,dx = -\sin^{n-1}x\cos x / n + ((n-1)/n)\int \sin^{n-2}x\,dx" />,
              derived by one careful round of parts. And in differential
              equations and physics, parts is what underlies many of the
              integral identities for Laplace transforms and Fourier
              coefficients you'll meet downstream.
            </Why>

            <Why>
              <strong>Common scenarios where this appears.</strong>{" "}
              First, <em>"polynomial times exponential or trig"</em> like{" "}
              <InlineMath math="\int x^n e^{ax}\,dx" /> or{" "}
              <InlineMath math="\int x^n \sin(ax)\,dx" /> — direct parts;
              iterate until the polynomial vanishes. Second,{" "}
              <em>"lonely log or inverse trig"</em> like{" "}
              <InlineMath math="\int \ln x\,dx" />,{" "}
              <InlineMath math="\int \arctan x\,dx" /> — set{" "}
              <InlineMath math="dv = dx" /> trick. Third,{" "}
              <em>"product of exponential and trig"</em> like{" "}
              <InlineMath math="\int e^x \sin x\,dx" /> — two rounds of
              parts cycle back to the original; solve algebraically.
              Fourth, <em>"reduction formula problems"</em> where you're
              asked to derive an identity like{" "}
              <InlineMath math="I_n = (\text{stuff}) + c \cdot I_{n-2}" />{" "}
              by careful application of parts. Fifth,{" "}
              <em>"after a u-sub leaves a product"</em> — sometimes a
              substitution sets up a parts problem in the new variable,
              especially with awkward trig integrals.
            </Why>

            <Why>
              <strong>Pitfalls — and they multiply.</strong> (1){" "}
              <em>Sign drop on the formula.</em> The formula is{" "}
              <InlineMath math="\int u\,dv = uv - \int v\,du" /> — that's
              MINUS, not plus. Students transcribe it as plus all the time
              under exam pressure and get the wrong sign on the final
              answer. (2) <em>Picking LIATE backwards.</em> If you choose{" "}
              <InlineMath math="u = e^x" /> and{" "}
              <InlineMath math="dv = x\,dx" /> on{" "}
              <InlineMath math="\int x e^x\,dx" />, your new integral{" "}
              <InlineMath math="\int (x^2/2)e^x\,dx" /> is WORSE than what
              you started with — same exponential with a higher polynomial.
              If your new integral looks uglier than the original, swap{" "}
              <InlineMath math="u" /> and <InlineMath math="dv" /> and try
              again. (3) <em>Forgetting <InlineMath math="v" /> from
              integrating <InlineMath math="dv" />.</em> The four-corners
              table — <InlineMath math="u, du, dv, v" /> — has four
              entries because all four are needed. Skipping the
              integration step to get <InlineMath math="v" /> means you
              can't plug into the formula. (4) <em>The "lonely log" miss
              </em>: students see <InlineMath math="\int \ln x\,dx" /> and
              freeze because there's "nothing to take as{" "}
              <InlineMath math="dv" />." The answer is to use{" "}
              <InlineMath math="dv = dx" /> literally — the bare{" "}
              <InlineMath math="dx" /> is the <InlineMath math="dv" />.
              Once you see this trick once, you have it forever. (5){" "}
              <em>Iterating without bound.</em> If your second round of
              parts makes the integral WORSE instead of better, you
              probably need a different technique. Iterate parts only when
              each round is making real progress (polynomial dropping in
              degree, or you're heading toward an "appears on both sides"
              cycle).
            </Why>

            <Why>
              <strong>The trigger.</strong> You reach for parts whenever
              you see a product of factors that aren't a
              "function-and-its-derivative" pair — i.e., when u-sub
              doesn't apply because the two factors aren't related by
              differentiation. Common signatures: polynomial times{" "}
              <InlineMath math="\sin" /> or <InlineMath math="\cos" /> or{" "}
              <InlineMath math="e^x" />; a lonely <InlineMath math="\ln" />{" "}
              or arctan; products of two transcendental functions of
              different types. If the integrand visibly contains a
              composition with its inner derivative — that's u-sub
              territory, not parts. If it contains a product of unrelated
              factors — that's parts.
            </Why>
          </ChapterSection>

          <ChapterSection
            id="s5-7"
            number="5.7"
            title="Trigonometric Integrals & Trig Substitution"
            accentColor={ACCENT}
            blurb="Reduce powers of sin/cos with identities; for √(a²±x²), substitute trig."
          >
            <Why>
              This section is really two distinct techniques bolted
              together under one chapter heading, and the two go in
              opposite directions even though they share a vocabulary. The
              first technique — "trigonometric integrals" — handles
              integrands that are ALREADY trigonometric (powers of sine
              and cosine, secant and tangent, the various products and
              sums thereof). Here the work is identity-juggling: you use
              the Pythagorean identity and the double-angle identities to
              rewrite the integrand into a form where substitution can
              finish the job. The second technique — "trigonometric
              substitution" — handles integrands that are ALGEBRAIC but
              contain an awkward radical of one of three specific forms.
              Here the work is the opposite direction: you INTRODUCE a
              trig variable to make the radical collapse, integrate the
              resulting trig expression, then convert back. Same
              vocabulary (sin, cos, identities) doing opposite jobs.
              Knowing which technique to reach for is mostly a matter of
              looking at the integrand and asking "is this already
              trig?" vs "does this have a radical that secretly wants to
              be trig?"
            </Why>

            <Why>
              <strong>Prerequisite refresher — the Pythagorean
              identities.</strong> Both techniques lean heavily on the
              three Pythagorean identities, so they're worth restating in
              one place:
            </Why>
            <Eq>sin²θ + cos²θ = 1</Eq>
            <Eq>1 + tan²θ = sec²θ      (divide the first by cos²)</Eq>
            <Eq>1 + cot²θ = csc²θ      (divide the first by sin²)</Eq>
            <Why>
              These three identities are the engine. Almost every move in
              this section is an algebraic rearrangement of one of these:
              "convert <InlineMath math="\sin^2" /> to{" "}
              <InlineMath math="1 - \cos^2" />" or "convert{" "}
              <InlineMath math="\sec^2" /> to{" "}
              <InlineMath math="1 + \tan^2" />" or similar. Drill them.
              You should be able to produce any one of them from scratch
              in under five seconds.
            </Why>

            <Why>
              <strong>Prerequisite refresher — the double-angle / power-
              reduction identities.</strong> When peeling tricks fail (both
              powers even), you fall back on power-reduction:
            </Why>
            <Eq>sin²θ = (1 − cos 2θ) / 2</Eq>
            <Eq>cos²θ = (1 + cos 2θ) / 2</Eq>
            <Eq>sin θ · cos θ = (sin 2θ) / 2</Eq>
            <Why>
              These let you replace an EVEN power of sin or cos with
              expressions involving the double-angle{" "}
              <InlineMath math="2\theta" /> — which is integrable directly
              once you remember{" "}
              <InlineMath math="\int \cos 2\theta\,d\theta = (1/2)\sin 2\theta + C" />.
              For high even powers, you may need to apply
              power-reduction repeatedly.
            </Why>

            <Why>
              <strong>Trig integrals — the odd-power trick.</strong> For{" "}
              <InlineMath math="\int \sin^m x \cos^n x\,dx" />: if at least
              one of <InlineMath math="m, n" /> is odd, peel off a single
              factor of the odd-powered function, convert what's left using{" "}
              <InlineMath math="\sin^2 + \cos^2 = 1" />, then u-sub. The
              "lone" factor you peeled off is the <InlineMath math="du" />.
              If both powers are even, peel nothing — instead use the
              power-reduction identities{" "}
              <InlineMath math="\sin^2 x = (1 - \cos 2x)/2" /> and{" "}
              <InlineMath math="\cos^2 x = (1 + \cos 2x)/2" /> to drop the
              even power down to the next manageable form.
            </Why>

            <Why>
              <strong>Trig substitution — why these three.</strong> The three
              radicals correspond to the three Pythagorean identities, each
              one engineered to make the radical disappear:
            </Why>
            <Eq>√(a² − x²):  set x = a sin θ  ⇒  √(a² − a² sin²θ) = a cos θ</Eq>
            <Eq>√(a² + x²):  set x = a tan θ  ⇒  √(a² + a² tan²θ) = a sec θ</Eq>
            <Eq>√(x² − a²):  set x = a sec θ  ⇒  √(a² sec²θ − a²) = a tan θ</Eq>
            <Why>
              The pattern: pick the trig identity{" "}
              (<InlineMath math="1 - \sin^2 = \cos^2" />, etc.) that turns
              the expression inside the radical into a perfect square. Then
              the square root cleanly cancels and what was an algebraic
              integrand becomes a trig one. Draw a right triangle to convert
              back from <InlineMath math="\theta" /> to{" "}
              <InlineMath math="x" /> at the end.
            </Why>

            <Why>
              <strong>A concrete walk-through — odd-power trig integral.</strong>{" "}
              Evaluate <InlineMath math="\int \sin^3 x\,dx" />. Power of sine
              is odd, so peel one off:
            </Why>
            <Eq>sin³x = sin x · sin²x = sin x · (1 − cos²x)</Eq>
            <Why>
              Now the integral is{" "}
              <InlineMath math="\int \sin x (1 - \cos^2 x)\,dx" />, and the
              lone <InlineMath math="\sin x" /> is begging to be the{" "}
              <InlineMath math="du" /> for <InlineMath math="u = \cos x" />:
            </Why>
            <Eq>u = cos x,    du = −sin x dx,    so sin x dx = −du</Eq>
            <BlockMath math="\int \sin x(1 - \cos^2 x)\,dx = -\int (1 - u^2)\,du = -\Bigl(u - \tfrac{u^3}{3}\Bigr) + C." />
            <Eq>= −cos x + (cos³ x)/3 + C</Eq>
            <Why>
              Sanity check by differentiating:{" "}
              <InlineMath math="\frac{d}{dx}\bigl[-\cos x + \tfrac{\cos^3 x}{3}\bigr] = \sin x + \cos^2 x \cdot (-\sin x) = \sin x (1 - \cos^2 x) = \sin^3 x" />.
              Round trip confirmed.
            </Why>

            <Why>
              <strong>A concrete walk-through — trig substitution.</strong>{" "}
              Evaluate <InlineMath math="\int \dfrac{dx}{\sqrt{9 - x^2}}" />.
              The radical is <InlineMath math="\sqrt{a^2 - x^2}" /> with{" "}
              <InlineMath math="a = 3" />, so reach for{" "}
              <InlineMath math="x = 3 \sin\theta" />.
            </Why>
            <Why>
              Step 1 — write down the substitution and its consequences:
            </Why>
            <Eq>x = 3 sin θ,    dx = 3 cos θ dθ</Eq>
            <Eq>√(9 − x²) = √(9 − 9 sin²θ) = 3√(cos²θ) = 3 cos θ</Eq>
            <Why>
              Step 2 — plug everything in. The <InlineMath math="3\cos\theta" />{" "}
              in the numerator (from <InlineMath math="dx" />) and the{" "}
              <InlineMath math="3\cos\theta" /> in the denominator (from the
              radical) cancel completely:
            </Why>
            <BlockMath math="\int \dfrac{3\cos\theta\,d\theta}{3\cos\theta} = \int d\theta = \theta + C." />
            <Why>
              Step 3 — back-substitute. From{" "}
              <InlineMath math="x = 3\sin\theta" />, solve{" "}
              <InlineMath math="\theta = \arcsin(x/3)" />:
            </Why>
            <Eq>∫ dx/√(9 − x²) = arcsin(x/3) + C</Eq>
            <Why>
              That matches the standard table entry{" "}
              <InlineMath math="\int dx/\sqrt{a^2 - x^2} = \arcsin(x/a) + C" />{" "}
              — but you didn't memorize a table, you derived it from scratch
              in three lines. Trig substitution <em>is</em> where those
              inverse-trig antiderivatives come from.
            </Why>

            <Why>
              <strong>A third walk-through — both powers even.</strong>{" "}
              When you can't peel a single factor (because both powers of
              sin and cos are even), you fall back on the power-reduction
              identities. Try <InlineMath math="\int \sin^2 x\,dx" />:
            </Why>
            <Eq>sin²x = (1 − cos 2x)/2</Eq>
            <BlockMath math="\int \sin^2 x\,dx = \int \tfrac{1 - \cos 2x}{2}\,dx = \tfrac{x}{2} - \tfrac{\sin 2x}{4} + C." />
            <Why>
              The <InlineMath math="\sin 2x" /> antiderivative requires a
              quick mental u-sub <InlineMath math="u = 2x" />: the
              antiderivative of <InlineMath math="\cos 2x" /> is{" "}
              <InlineMath math="(1/2)\sin 2x" />, divided by the 2 already
              in the denominator gives the <InlineMath math="4" /> below.
              Verify by differentiating: derivative is{" "}
              <InlineMath math="1/2 - (1/4)\cdot 2\cos 2x = 1/2 - (1/2)\cos 2x = (1 - \cos 2x)/2 = \sin^2 x" />.
              Round trip confirmed. The same technique extends to{" "}
              <InlineMath math="\int \cos^2 x\,dx" /> (use{" "}
              <InlineMath math="(1+\cos 2x)/2" /> instead) and to higher
              even powers by repeated application.
            </Why>

            <Why>
              <strong>A fourth walk-through — trig-sub with the
              hyperbolic-shaped radical.</strong> Evaluate{" "}
              <InlineMath math="\int \dfrac{dx}{x^2\sqrt{x^2 + 9}}" />. The
              radical is <InlineMath math="\sqrt{a^2 + x^2}" /> with{" "}
              <InlineMath math="a = 3" />, which calls for{" "}
              <InlineMath math="x = 3\tan\theta" />:
            </Why>
            <Eq>x = 3 tan θ,         dx = 3 sec²θ dθ</Eq>
            <Eq>√(x² + 9) = √(9 tan²θ + 9) = 3 sec θ</Eq>
            <Eq>x² = 9 tan²θ</Eq>
            <Why>
              Plug everything into the integrand:
            </Why>
            <BlockMath math="\int \dfrac{3\sec^2\theta\,d\theta}{9\tan^2\theta \cdot 3\sec\theta} = \tfrac{1}{9}\int \dfrac{\sec\theta}{\tan^2\theta}\,d\theta = \tfrac{1}{9}\int \dfrac{\cos\theta}{\sin^2\theta}\,d\theta." />
            <Why>
              The last simplification rewrote{" "}
              <InlineMath math="\sec\theta/\tan^2\theta" /> as{" "}
              <InlineMath math="(1/\cos\theta)/(\sin^2\theta/\cos^2\theta) = \cos\theta/\sin^2\theta" />.
              Now a quick u-sub with <InlineMath math="u = \sin\theta" />
              gives:
            </Why>
            <BlockMath math="\tfrac{1}{9}\int \dfrac{du}{u^2} = -\tfrac{1}{9u} + C = -\tfrac{1}{9\sin\theta} + C." />
            <Why>
              Now convert <InlineMath math="\theta" /> back to{" "}
              <InlineMath math="x" /> using a reference triangle. With{" "}
              <InlineMath math="x = 3\tan\theta" />, draw a right triangle
              where the opposite side is <InlineMath math="x" />, the
              adjacent is 3, and the hypotenuse (from Pythagoras) is{" "}
              <InlineMath math="\sqrt{x^2 + 9}" />. So{" "}
              <InlineMath math="\sin\theta = x/\sqrt{x^2 + 9}" />:
            </Why>
            <Eq>= −√(x² + 9)/(9x) + C</Eq>
            <Why>
              The reference triangle is non-negotiable for back-conversion
              — it's the only sane way to translate{" "}
              <InlineMath math="\sin\theta" />,{" "}
              <InlineMath math="\cos\theta" />,{" "}
              <InlineMath math="\sec\theta" /> etc. back into expressions
              in <InlineMath math="x" />. Draw it every time, even when
              you think you remember.
            </Why>

            <Why>
              <strong>How this connects to other techniques.</strong> Trig
              substitution often leaves you with a trig INTEGRAL that
              you'd then solve using the techniques in the first half of
              this section — so the two halves chain together naturally.
              Trig substitution also shows up in 5.8 when you have an
              irreducible quadratic in a partial fraction denominator
              (like <InlineMath math="x^2 + 4" />): completing the square
              produces something of the form{" "}
              <InlineMath math="(\text{linear})^2 + a^2" />, which is the{" "}
              <InlineMath math="\sqrt{a^2 + x^2}" /> trig-sub pattern in
              disguise. And reduction formulas derived via integration by
              parts (5.6) handle the high-power trig cases (like{" "}
              <InlineMath math="\int \sin^6 x\,dx" />) more efficiently
              than brute-force power reduction.
            </Why>

            <Why>
              <strong>Common scenarios where this appears.</strong>{" "}
              For trig integrals: (a){" "}
              <em>"odd power of sin or cos"</em> — peel one factor and
              u-sub with the other trig function as <InlineMath math="u" />.
              (b) <em>"both powers even"</em> — power-reduction identities,
              possibly iterated. (c) <em>"product of tan and sec powers"</em> —
              peel a <InlineMath math="\sec^2" /> (which is{" "}
              <InlineMath math="d/dx\tan" />) if tan power is even, or
              peel a <InlineMath math="\sec\tan" /> (which is{" "}
              <InlineMath math="d/dx\sec" />) if sec power is even. For
              trig substitution: (d){" "}
              <em>"radical of form <InlineMath math="\sqrt{a^2 - x^2}" />"</em>{" "}
              — use sin sub. (e){" "}
              <em>"radical of form <InlineMath math="\sqrt{a^2 + x^2}" />"</em>{" "}
              — use tan sub. (f){" "}
              <em>"radical of form <InlineMath math="\sqrt{x^2 - a^2}" />"</em>{" "}
              — use sec sub. (g){" "}
              <em>"completed-square radical"</em> — anything like{" "}
              <InlineMath math="\sqrt{x^2 + 4x + 8} = \sqrt{(x + 2)^2 + 4}" />{" "}
              is a trig-sub setup hiding behind a linear shift; first
              complete the square, then trig-sub on the shifted variable.
            </Why>

            <Why>
              <strong>Pitfalls — and they multiply quickly.</strong> (1){" "}
              <em>Forgetting to convert <InlineMath math="dx" /> alongside{" "}
              <InlineMath math="x" /></em>. When you write{" "}
              <InlineMath math="x = a\sin\theta" />, you also owe{" "}
              <InlineMath math="dx = a\cos\theta\,d\theta" /> — that{" "}
              <InlineMath math="d\theta" /> doesn't appear by magic. Miss
              this step and your final answer is off by a constant factor
              or a whole missing function. (2){" "}
              <em>Failing to draw a reference triangle</em> for
              back-substitution, then writing{" "}
              <InlineMath math="\sin\theta" /> instead of{" "}
              <InlineMath math="x/a" /> in the final answer. Always draw
              the triangle. (3){" "}
              <em>Reaching for "odd-power peel"</em> when both powers are
              even — that trick fundamentally relies on having a single
              odd factor to peel and use as <InlineMath math="du" />; with
              both powers even, you must use power-reduction instead. (4){" "}
              <em>Misidentifying the radical type.</em> The three
              substitutions are NOT interchangeable. Using{" "}
              <InlineMath math="x = a\sin\theta" /> on{" "}
              <InlineMath math="\sqrt{a^2 + x^2}" /> produces{" "}
              <InlineMath math="\sqrt{a^2(1 + \sin^2\theta)}" />, which
              doesn't simplify — there's no Pythagorean identity for{" "}
              <InlineMath math="1 + \sin^2" />. Memorize the
              radical-to-substitution match. (5) <em>Sign issues with sec
              sub on negative <InlineMath math="x" />.</em> Because{" "}
              <InlineMath math="\sec\theta" /> is sometimes negative,
              expressions like{" "}
              <InlineMath math="\sqrt{x^2 - a^2}" /> can require a sign
              flip depending on which branch your problem lives on. For
              standard textbook problems with positive <InlineMath math="x" />,
              you can usually drop the absolute value bars, but be alert.
              (6) <em>Algebra errors when simplifying trig expressions</em>:
              students often write{" "}
              <InlineMath math="\sqrt{\cos^2\theta} = \cos\theta" /> without
              worrying about whether <InlineMath math="\cos\theta" /> is
              positive. In standard trig-sub setups,{" "}
              <InlineMath math="\theta" /> is in a range where the trig
              function is positive, but it's worth being aware.
            </Why>

            <Why>
              <strong>The trigger.</strong> You spot a trig-INTEGRAL
              problem when the integrand is already a product of powers
              of sin, cos, sec, tan, csc, cot — no algebraic factors. The
              question becomes "which identity rewrites this into
              integrable form?" You spot a trig-SUBSTITUTION problem by
              the appearance of one of the three radical signatures —{" "}
              <InlineMath math="\sqrt{a^2 - x^2}" />,{" "}
              <InlineMath math="\sqrt{a^2 + x^2}" />, or{" "}
              <InlineMath math="\sqrt{x^2 - a^2}" /> — in an otherwise
              algebraic integrand. The presence of such a radical is the
              signal that trig sub is on the table. If the radical is
              under a square root sign but doesn't match these patterns
              (e.g. <InlineMath math="\sqrt{x^3 + 1}" />), trig sub
              doesn't apply.
            </Why>
          </ChapterSection>

          <ChapterSection
            id="s5-8"
            number="5.8"
            title="Tables of Integrals & Partial Fractions"
            accentColor={ACCENT}
            blurb="Long-divide first if the numerator's degree ≥ denominator. Then split into partial fractions."
          >
            <Why>
              By the time you reach section 5.8 you've collected a
              powerful toolkit — substitution, parts, trig techniques —
              but a whole class of integrands still defeats every one of
              them: <em>rational functions</em>, ratios of polynomials.
              Some rational functions are friendly:{" "}
              <InlineMath math="1/(x^2 + 1)" /> has direct antiderivative{" "}
              <InlineMath math="\arctan x" />; <InlineMath math="1/x" />{" "}
              integrates to <InlineMath math="\ln|x|" />. But the moment
              the denominator factors into pieces, or the numerator has
              degree comparable to the denominator, the straight-from-the-
              table approach stops working. A messy ratio like{" "}
              <InlineMath math="(2x + 3)/[(x - 1)(x + 2)]" /> doesn't
              match any single Calc I antiderivative.
            </Why>

            <Why>
              <strong>The big idea — split, then integrate piecewise.</strong>{" "}
              The fix is a piece of algebra older than calculus itself:
              SPLIT the messy fraction into a SUM of simple fractions that
              DO match antiderivative table entries, then integrate each
              piece separately. That decomposition is called <em>partial
              fractions</em>. The whole technique sits on three pillars:
              (1) "before we split, the numerator's degree must be less
              than the denominator's" (otherwise long-divide first), (2)
              "the form of each piece is dictated by the factor type"
              (linear, repeated linear, irreducible quadratic), and (3)
              "each piece integrates to a logarithm or arctan that you
              already know from Calc I."
            </Why>

            <Why>
              Mental image: a partial-fraction decomposition is just
              "adding fractions" in reverse. In algebra class you learned
              to combine <InlineMath math="\frac{1}{x} + \frac{1}{x - 1}" />{" "}
              into <InlineMath math="\frac{2x - 1}{x(x - 1)}" /> by
              finding a common denominator and adding the numerators.
              Partial fractions asks you to do the reverse: given the
              combined form, recover the pieces. Once you have the pieces,
              each one is of a shape{" "}
              <InlineMath math="A/(x - r)" /> or{" "}
              <InlineMath math="A/(x - r)^2" /> or{" "}
              <InlineMath math="(Bx + C)/(\text{quadratic})" /> — all
              shapes you know how to integrate. The whole technique is
              "use algebra to convert an unknown-shape integrand into a
              sum of known-shape integrands."
            </Why>

            <Why>
              <strong>Why the technique even works.</strong> A theorem from
              algebra says: any rational function (numerator degree less
              than denominator degree) over the real numbers can be
              uniquely decomposed as a sum of "simple" fractions, where
              "simple" means denominators of the form{" "}
              <InlineMath math="(x - r)^k" /> or{" "}
              <InlineMath math="(x^2 + bx + c)^k" /> for irreducible
              quadratics. That theorem is what justifies the recipe below.
              You're not making things up; you're applying a structural
              decomposition that's guaranteed to exist and be unique.
            </Why>
            <Why>
              Mental image: a partial-fraction decomposition is just adding
              fractions in reverse. If you can stare at{" "}
              <InlineMath math="\frac{1}{x} + \frac{1}{x - 1}" /> and combine
              it to <InlineMath math="\frac{2x - 1}{x(x - 1)}" />, then
              partial fractions is asking you to do the reverse: given the
              combined form, recover the pieces. Once you have the pieces,
              each one integrates to a simple logarithm or arctan.
            </Why>

            <Why>
              <strong>Step 0 — long-divide if top-heavy.</strong> Partial
              fractions only works on <em>proper</em> rational functions
              (numerator degree strictly less than denominator degree). If
              your fraction is top-heavy, do polynomial long division first
              to peel off a polynomial part plus a proper remainder:
            </Why>
            <BlockMath math="\frac{P(x)}{Q(x)} = (\text{polynomial}) + \frac{R(x)}{Q(x)}, \quad \deg R < \deg Q." />
            <Why>
              The polynomial part integrates with the power rule; the
              remainder is what you decompose.
            </Why>

            <Why>
              <strong>The decomposition recipe.</strong> Factor the
              denominator into linear factors and irreducible quadratic
              factors. Each factor type gets its own template piece:
            </Why>
            <Eq>(x − r)            ⇒  A/(x − r)</Eq>
            <Eq>(x − r)^k          ⇒  A₁/(x−r) + A₂/(x−r)² + ... + A_k/(x−r)^k</Eq>
            <Eq>(x² + px + q) irr. ⇒  (Bx + C)/(x² + px + q)</Eq>
            <Why>
              Sum the templates, set the sum equal to the original fraction,
              clear denominators, and solve for the unknowns
              <InlineMath math="\,A, B, C, \dots" /> The fastest way to find
              <InlineMath math="A" /> for a distinct linear factor{" "}
              <InlineMath math="(x - r)" /> is the "cover-up" trick: cover
              the <InlineMath math="(x - r)" /> in the original, set{" "}
              <InlineMath math="x = r" /> in what's left, read off{" "}
              <InlineMath math="A" />.
            </Why>

            <Why>
              <strong>A concrete walk-through.</strong> Evaluate{" "}
              <InlineMath math="\int \dfrac{1}{x(x - 1)}\,dx" />.
            </Why>
            <Why>
              Step 1 — set up the template. Two distinct linear factors:
            </Why>
            <Eq>1/[x(x − 1)] = A/x + B/(x − 1)</Eq>
            <Why>
              Step 2 — clear the denominators by multiplying both sides by{" "}
              <InlineMath math="x(x - 1)" />:
            </Why>
            <Eq>1 = A(x − 1) + B·x</Eq>
            <Why>
              Step 3 — find <InlineMath math="A" /> and{" "}
              <InlineMath math="B" /> with the cover-up trick. Set{" "}
              <InlineMath math="x = 0" /> to kill the{" "}
              <InlineMath math="B" /> term:
            </Why>
            <Eq>x = 0:   1 = A(0 − 1) = −A   ⇒  A = −1</Eq>
            <Eq>x = 1:   1 = B(1) = B        ⇒  B = +1</Eq>
            <Why>
              So <InlineMath math="\frac{1}{x(x - 1)} = -\frac{1}{x} + \frac{1}{x - 1}" />.
              Verify by combining the right side over the common denominator{" "}
              <InlineMath math="x(x - 1)" /> — you should recover the
              original. Always do this check; it catches arithmetic slips.
            </Why>
            <Why>
              Step 4 — integrate each piece. Both are{" "}
              <InlineMath math="1/(x - r)" /> shapes, which integrate to{" "}
              <InlineMath math="\ln|x - r|" />:
            </Why>
            <BlockMath math="\int \dfrac{1}{x(x-1)}\,dx = -\ln|x| + \ln|x - 1| + C = \ln\left|\dfrac{x - 1}{x}\right| + C." />
            <Why>
              The log-of-a-ratio compression is just{" "}
              <InlineMath math="\ln a - \ln b = \ln(a/b)" />. Clean answer
              from a fraction that looked impossible 30 seconds ago.
            </Why>

            <Why>
              <strong>A second walk-through — repeated linear
              factor.</strong> Try{" "}
              <InlineMath math="\int \dfrac{x + 1}{(x - 2)^2}\,dx" />. The
              denominator <InlineMath math="(x - 2)^2" /> is a REPEATED
              linear factor, so the template needs BOTH a{" "}
              <InlineMath math="1/(x - 2)" /> piece and a{" "}
              <InlineMath math="1/(x - 2)^2" /> piece — one of each power
              up to the multiplicity:
            </Why>
            <Eq>(x + 1)/(x − 2)² = A/(x − 2) + B/(x − 2)²</Eq>
            <Why>
              Clear denominators by multiplying both sides by{" "}
              <InlineMath math="(x - 2)^2" />:
            </Why>
            <Eq>x + 1 = A(x − 2) + B</Eq>
            <Why>
              The cover-up trick gives <InlineMath math="B" /> directly:
              set <InlineMath math="x = 2" /> to kill the{" "}
              <InlineMath math="A" /> term:
            </Why>
            <Eq>x = 2:   2 + 1 = B   ⇒  B = 3</Eq>
            <Why>
              For <InlineMath math="A" />, you can't use cover-up cleanly
              on the repeated factor (cover-up only handles the highest-
              power piece of a repeated factor). Instead, compare
              coefficients of <InlineMath math="x" /> on both sides:
              left side has coefficient 1, right side has{" "}
              <InlineMath math="A" />, so <InlineMath math="A = 1" />.
              Alternatively, plug in any easy value of{" "}
              <InlineMath math="x" /> like <InlineMath math="x = 0" />:{" "}
              <InlineMath math="0 + 1 = A(-2) + 3 \Rightarrow A = 1" />.
              Same answer. Now integrate:
            </Why>
            <BlockMath math="\int \dfrac{x + 1}{(x - 2)^2}\,dx = \int \dfrac{1}{x - 2}\,dx + \int \dfrac{3}{(x - 2)^2}\,dx = \ln|x - 2| - \tfrac{3}{x - 2} + C." />
            <Why>
              The second piece used the power rule:{" "}
              <InlineMath math="\int (x - 2)^{-2}\,dx = -(x - 2)^{-1}" />.
              The general rule for repeated factors: a factor{" "}
              <InlineMath math="(x - r)^k" /> in the denominator demands
              terms <InlineMath math="A_1/(x - r), A_2/(x - r)^2, \dots, A_k/(x - r)^k" />,
              one for each power up to <InlineMath math="k" />. Miss any
              of them and your system will fail to balance.
            </Why>

            <Why>
              <strong>A third walk-through — irreducible quadratic
              factor.</strong> Try{" "}
              <InlineMath math="\int \dfrac{1}{x(x^2 + 1)}\,dx" />. The
              denominator factors into a linear piece{" "}
              <InlineMath math="x" /> and an irreducible quadratic{" "}
              <InlineMath math="x^2 + 1" /> (no real roots). The template:
            </Why>
            <Eq>1/[x(x² + 1)] = A/x + (Bx + C)/(x² + 1)</Eq>
            <Why>
              The irreducible-quadratic piece gets a LINEAR numerator{" "}
              <InlineMath math="Bx + C" /> (not just a constant) because
              the quadratic itself is "degree 2 deep" and the numerator
              must be allowed to match. Clear denominators:
            </Why>
            <Eq>1 = A(x² + 1) + (Bx + C)·x</Eq>
            <Why>
              Cover-up at <InlineMath math="x = 0" /> gives{" "}
              <InlineMath math="A = 1" />. Now expand the right side and
              compare coefficients:{" "}
              <InlineMath math="1 = Ax^2 + A + Bx^2 + Cx = (A + B)x^2 + Cx + A" />.
              Matching:{" "}
              <InlineMath math="A + B = 0 \Rightarrow B = -1" />, and{" "}
              <InlineMath math="C = 0" />. So:
            </Why>
            <Eq>1/[x(x² + 1)] = 1/x − x/(x² + 1)</Eq>
            <BlockMath math="\int \dfrac{1}{x(x^2 + 1)}\,dx = \int \dfrac{1}{x}\,dx - \int \dfrac{x}{x^2 + 1}\,dx = \ln|x| - \tfrac{1}{2}\ln(x^2 + 1) + C." />
            <Why>
              The second integral used the u-sub{" "}
              <InlineMath math="u = x^2 + 1" />,{" "}
              <InlineMath math="du = 2x\,dx" />. If the numerator{" "}
              <InlineMath math="Bx + C" /> ever has a CONSTANT part (i.e.{" "}
              <InlineMath math="C \neq 0" />), that part integrates to an{" "}
              <em>arctan</em> via{" "}
              <InlineMath math="\int dx/(x^2 + a^2) = (1/a)\arctan(x/a) + C" />.
              The general rule: irreducible quadratics produce ln + arctan
              combinations.
            </Why>

            <Why>
              <strong>How this connects to other techniques.</strong>{" "}
              Partial fractions is a SETUP technique that produces simpler
              integrals — but those simpler integrals still need to be
              solved by the methods from earlier sections. Linear factor
              pieces integrate by direct lookup (logs). Repeated linear
              pieces use the power rule. Irreducible quadratic pieces
              usually combine a quick u-sub (for the{" "}
              <InlineMath math="Bx" /> part, which integrates to a log)
              with an arctan-from-the-table (for the{" "}
              <InlineMath math="C" /> part, possibly after completing the
              square if the quadratic isn't already in{" "}
              <InlineMath math="x^2 + a^2" /> form). The completing-the-
              square step often turns into a trig-substitution problem.
              So partial fractions chains into u-sub, table-lookup, and
              trig sub in turn.
            </Why>

            <Why>
              <strong>Common scenarios where this appears.</strong>{" "}
              First, <em>"distinct linear factors"</em> — the cleanest
              case, all cover-up. Second, <em>"repeated linear factor"</em>{" "}
              — template includes every power up to the multiplicity;
              cover-up handles only the highest power, the others need
              coefficient comparison or test-point evaluation. Third,{" "}
              <em>"irreducible quadratic factor"</em> — linear numerator
              over the quadratic; usually produces a log + arctan answer.
              Fourth, <em>"long-divide first"</em> — any time the
              numerator's degree is ≥ the denominator's, peel off a
              polynomial part by polynomial long division before
              decomposing. Fifth, <em>"complete the square first"</em> —
              denominators like <InlineMath math="x^2 + 4x + 13" /> aren't
              ready for arctan as-is; complete the square to{" "}
              <InlineMath math="(x + 2)^2 + 9" /> and now it matches the
              arctan template with <InlineMath math="u = x + 2" />,{" "}
              <InlineMath math="a = 3" />.
            </Why>

            <Why>
              <strong>Pitfalls — these multiply with the factor types.</strong>{" "}
              (1) <em>Forgetting to long-divide when top-heavy.</em> If
              the numerator's degree is ≥ the denominator's, you MUST
              long-divide first; otherwise your decomposition system will
              have no solution (or you'll get the algebra to "balance"
              but in a way that loses information). (2){" "}
              <em>Wrong template for repeated factors.</em> A factor{" "}
              <InlineMath math="(x - r)^k" /> needs ALL powers 1 through{" "}
              <InlineMath math="k" /> in the template. Writing only{" "}
              <InlineMath math="A/(x - r)^k" /> (or only{" "}
              <InlineMath math="A/(x - r)" />) is incomplete. (3){" "}
              <em>Wrong template for irreducible quadratic factors.</em>{" "}
              An irreducible quadratic <InlineMath math="(x^2 + bx + c)" />{" "}
              in the denominator demands a LINEAR numerator{" "}
              <InlineMath math="(Bx + C)" /> in its template, not a
              constant. (4) <em>Trying to factor a quadratic that has no
              real roots.</em> If the discriminant{" "}
              <InlineMath math="b^2 - 4c < 0" />, the quadratic is
              irreducible over the reals — leave it as a quadratic in the
              denominator. Don't force a factoring that doesn't exist;
              don't introduce complex numbers in Calc II. (5){" "}
              <em>Skipping the verification step.</em> After you find
              your decomposition coefficients, ALWAYS combine the right
              side back over a common denominator and check that it
              matches the left side. This catches arithmetic slips and
              wrong-template errors instantly. (6){" "}
              <em>Forgetting absolute value bars on the log.</em>{" "}
              <InlineMath math="\int dx/(x - r) = \ln|x - r| + C" />, NOT{" "}
              <InlineMath math="\ln(x - r)" /> — the absolute value is
              required because <InlineMath math="\ln" /> is only defined
              for positive arguments. The exception is when the
              integrand is always positive on the interval of integration
              (e.g., a definite integral with limits where{" "}
              <InlineMath math="x - r > 0" /> throughout).
            </Why>

            <Why>
              <strong>The trigger.</strong> You reach for partial
              fractions whenever you see a rational function whose
              denominator factors (or can be factored after a bit of
              algebra) and isn't already in your antiderivative table —
              typically anything more complicated than{" "}
              <InlineMath math="1/(x^2 + a^2)" /> (which is just arctan).
              The recipe is: (i) check that the numerator degree is less
              than the denominator's, long-divide if not; (ii) factor the
              denominator; (iii) write the template; (iv) solve for the
              coefficients via cover-up + coefficient comparison; (v)
              integrate each piece. Tables of integrals (also part of
              this section's name) are the fallback when the algebra
              gets gnarly — the partial-fraction skill is what gets you
              to a place where you CAN look something up, because tables
              are organized by the simple shapes that decomposition
              produces.
            </Why>
          </ChapterSection>

          <ChapterSection
            id="s5-9"
            number="5.9"
            title="Approximate Integration (Trapezoid & Simpson)"
            accentColor={ACCENT}
            blurb="When an antiderivative doesn't exist or the integrand is data, approximate."
          >
            <Why>
              You've spent five sections collecting techniques for finding
              closed-form antiderivatives, and they're powerful — but
              they're not omnipotent. Some integrands simply have no
              elementary antiderivative at all. Famous examples:{" "}
              <InlineMath math="\int e^{-x^2}\,dx" /> (the Gaussian, the
              integrand behind every probability density in statistics),{" "}
              <InlineMath math="\int \sin(x^2)\,dx" /> (the Fresnel
              integrals, fundamental in optics and diffraction),{" "}
              <InlineMath math="\int \sqrt{1 + x^4}\,dx" /> (a common
              arc-length integrand). These aren't pathological edge cases
              — they show up in real physics and engineering. There's no
              algebraic mistake, no clever substitution you missed; it's
              been PROVEN that no elementary antiderivative exists for
              these, and FTC Pt 2 has nothing to offer.
            </Why>

            <Why>
              Other times the integrand isn't even a formula but a
              <em> column of measured data</em>: heart-rate sampled every
              second, drug concentration sampled every minute, road
              elevation sampled every meter. You have numerical values
              <InlineMath math="f(x_0), f(x_1), \dots, f(x_n)" />, but no
              expression for <InlineMath math="f(x)" /> at intermediate
              points. FTC Pt 2 demands a function with an
              antiderivative; you don't even have a function. In both
              cases — no antiderivative, or no function — the fix is the
              same idea Riemann had: cover the region with simple shapes
              you CAN measure, and add their areas. Section 5.9 just
              picks better shapes than plain rectangles.
            </Why>

            <Why>
              <strong>Prerequisite refresher — what was a Riemann sum,
              again?</strong> From section 5.1: divide{" "}
              <InlineMath math="[a, b]" /> into <InlineMath math="n" />{" "}
              equal subintervals of width{" "}
              <InlineMath math="\Delta x = (b - a)/n" />, pick a sample
              point in each subinterval, evaluate{" "}
              <InlineMath math="f" /> there, and sum heights times width.
              That's the rectangle estimate. The trouble is that
              rectangles have flat tops — they can't follow a curve. Over
              one subinterval, the rectangle's height is whatever{" "}
              <InlineMath math="f" /> happens to be at the sample point,
              and the rectangle either over-shoots or under-shoots the
              actual area under the curve in that strip. With enough
              rectangles the errors dissolve, but you need a LOT of them
              to get a good answer. The two methods in this section use
              better-shaped tops — straight lines (trapezoids) and
              parabolas (Simpson) — so each strip's estimate is much
              better, and you need far fewer strips.
            </Why>

            <Why>
              <strong>The mental picture.</strong> Think of the integration
              region as a country you're trying to measure. Rectangles are
              like covering the country with city blocks — they tile, but
              their square corners can't follow coastlines. Trapezoids
              connect each pair of coastline measurements with a straight
              line — much better fit for smooth coastlines. Simpson goes
              further: every three coastline measurements get a parabola
              drawn through them, and the area under that parabola is your
              estimate for the strip. Parabolas can curve, so they hug
              the coastline even better. Same idea as Riemann (sum simple
              areas), just smarter shapes.
            </Why>

            <Why>
              <strong>The Trapezoidal Rule.</strong> Instead of a rectangle
              over each subinterval, fit a <em>trapezoid</em> whose top edge
              connects the two endpoints of the curve on that slice. Each
              trapezoid has parallel sides <InlineMath math="f(x_{i-1})" />{" "}
              and <InlineMath math="f(x_i)" /> and width{" "}
              <InlineMath math="\Delta x" />, so its area is{" "}
              <InlineMath math="\tfrac{\Delta x}{2}\bigl[f(x_{i-1}) + f(x_i)\bigr]" />.
              Add them up — each interior point gets counted in two adjacent
              trapezoids, hence the 2's:
            </Why>
            <BlockMath math="T_n = \frac{\Delta x}{2}\bigl[f_0 + 2f_1 + 2f_2 + \cdots + 2f_{n-1} + f_n\bigr]." />
            <Why>
              Equivalently, <InlineMath math="T_n" /> is the average of the
              left-endpoint and right-endpoint Riemann sums — the two
              staircase estimates that bracket the truth, averaged.
            </Why>

            <Why>
              <strong>Simpson's Rule.</strong> Better still: instead of
              straight lines on top of each slice, fit a parabola through
              every three consecutive points. Parabolas can curve, so they
              track a smooth curve much more faithfully than line segments.
              Working out the area under each three-point parabola gives the
              coefficient pattern{" "}
              <InlineMath math="[1, 4, 2, 4, 2, \dots, 4, 1]" /> — endpoints
              get weight 1, odd-indexed interior points get 4, even-indexed
              interior points get 2:
            </Why>
            <BlockMath math="S_n = \frac{\Delta x}{3}\bigl[f_0 + 4f_1 + 2f_2 + 4f_3 + \cdots + 4f_{n-1} + f_n\bigr], \quad n \text{ even}." />
            <Why>
              The "n must be even" requirement: Simpson glues parabolas
              across pairs of subintervals, so the total number of
              subintervals has to be a multiple of 2.
            </Why>

            <Why>
              <strong>Error bounds — and why Simpson dominates.</strong>{" "}
              Trapezoid error scales like{" "}
              <InlineMath math="1/n^2" />; Simpson error scales like{" "}
              <InlineMath math="1/n^4" />. The headline:
            </Why>
            <BlockMath math="|E_T| \le \frac{K_2 (b-a)^3}{12 n^2}, \qquad |E_S| \le \frac{K_4 (b-a)^5}{180\, n^4}," />
            <Why>
              where <InlineMath math="K_2" /> bounds{" "}
              <InlineMath math="|f''|" /> on{" "}
              <InlineMath math="[a, b]" /> and <InlineMath math="K_4" />{" "}
              bounds <InlineMath math="|f^{(4)}|" />. Doubling{" "}
              <InlineMath math="n" /> divides trapezoid error by 4 but
              divides Simpson error by 16 — that's the difference between
              "need 1000 slices" and "need 32 slices" for the same accuracy.
            </Why>

            <Why>
              <strong>A concrete walk-through.</strong> Approximate{" "}
              <InlineMath math="\int_0^1 \dfrac{1}{1 + x^2}\,dx" /> using
              both rules with <InlineMath math="n = 4" />. The true value is{" "}
              <InlineMath math="\arctan(1) - \arctan(0) = \pi/4 \approx 0.7854" />,
              so we have a target.
            </Why>
            <Why>
              Step 1 — set up the grid. With{" "}
              <InlineMath math="n = 4" /> and width{" "}
              <InlineMath math="\Delta x = 0.25" />, evaluate{" "}
              <InlineMath math="f(x) = 1/(1 + x^2)" /> at the five points{" "}
              <InlineMath math="x = 0, 0.25, 0.5, 0.75, 1" />:
            </Why>
            <Eq>f₀ = 1/1.0000 = 1.0000</Eq>
            <Eq>f₁ = 1/1.0625 ≈ 0.9412</Eq>
            <Eq>f₂ = 1/1.2500 = 0.8000</Eq>
            <Eq>f₃ = 1/1.5625 = 0.6400</Eq>
            <Eq>f₄ = 1/2.0000 = 0.5000</Eq>
            <Why>
              Step 2 — trapezoid with pattern 1-2-2-2-1:
            </Why>
            <Eq>T₄ = (0.25/2)·[1.0000 + 2(0.9412) + 2(0.8000) + 2(0.6400) + 0.5000]</Eq>
            <Eq>   = 0.125 · 6.2624 ≈ 0.7828</Eq>
            <Why>
              Trapezoid error ≈ <InlineMath math="0.7854 - 0.7828 = 0.0026" /> —
              about 0.3% low. Not bad with only 4 slices.
            </Why>
            <Why>
              Step 3 — Simpson with pattern 1-4-2-4-1 (note odd indices get
              4, even indices get 2):
            </Why>
            <Eq>S₄ = (0.25/3)·[1.0000 + 4(0.9412) + 2(0.8000) + 4(0.6400) + 0.5000]</Eq>
            <Eq>   = (1/12) · [1.0000 + 3.7648 + 1.6000 + 2.5600 + 0.5000]</Eq>
            <Eq>   = (1/12) · 9.4248 ≈ 0.7854</Eq>
            <Why>
              Simpson error ≈ <InlineMath math="|0.7854 - 0.7854|" /> — agrees
              with <InlineMath math="\pi/4" /> to four decimal places using
              the same four slices. That 1/n⁴ scaling earns its keep
              immediately.
            </Why>

            <Why>
              <strong>A second walk-through — integrating tabulated
              data.</strong> Sometimes you don't have a formula at all, just
              measurements. Suppose a car's velocity (in m/s) was sampled
              every 2 seconds over a 10-second interval:
            </Why>
            <Eq>t (s):  0    2    4    6    8    10</Eq>
            <Eq>v (m/s): 0   8   14   18   20   21</Eq>
            <Why>
              Total distance traveled is{" "}
              <InlineMath math="\int_0^{10} v(t)\,dt" /> — but there's no
              formula for <InlineMath math="v(t)" />, just a table. Use
              Simpson with <InlineMath math="n = 5" /> intervals... wait,
              Simpson requires <InlineMath math="n" /> to be EVEN, and we
              have 5 intervals (6 data points = 5 intervals). One option
              is to drop one interval and use Simpson on the remaining
              four; another is to use trapezoid on all five (which is fine
              for unevenly cooperative data). Let's trapezoid:
            </Why>
            <Eq>T₅ = (2/2)·[0 + 2(8) + 2(14) + 2(18) + 2(20) + 21]</Eq>
            <Eq>   = 1 · [0 + 16 + 28 + 36 + 40 + 21] = 141 meters</Eq>
            <Why>
              Estimated distance: 141 m. We have no "true value" to
              compare against because we never had a function — the
              tabulated data IS the function as far as we know. This is
              the everyday workflow in experimental science: numerical
              integration of measured data is how you turn velocity logs
              into displacements, current logs into accumulated charge,
              power logs into total energy. There's no FTC alternative
              because there's no formula to find an antiderivative of.
            </Why>

            <Why>
              <strong>How this connects backwards and forwards.</strong>{" "}
              Numerical integration is the Riemann-sum picture from 5.1
              with smarter shapes — the conceptual core (cover the
              region, sum the areas) is identical, just with trapezoids
              or parabolas replacing rectangles. The error analysis (which
              we touched only briefly) is a topic in numerical analysis
              that you'll meet again in any computational-methods course;
              the broad lesson — "higher-order methods have errors that
              decay faster with <InlineMath math="n" />" — generalizes far
              beyond integration to differential-equation solvers, finite
              elements, and more. In probability and statistics (a Calc
              III / Stat course away), every continuous distribution
              demands evaluating integrals of <InlineMath math="e^{-x^2/2}" />
              type integrands that have no closed-form antiderivative —
              standard normal tables and software libraries get their
              numbers by Simpson-like numerical methods.
            </Why>

            <Why>
              <strong>Common scenarios where this appears.</strong>{" "}
              First, <em>"approximate this specific integral to within X
              decimal places"</em> — usually for an integrand with no
              elementary antiderivative; the question often supplies an
              error bound and asks you to choose <InlineMath math="n" />{" "}
              large enough to meet it. Second, <em>"integrate this table
              of data"</em> — pure numerical work, no formula in sight,
              typically using either trapezoid or Simpson depending on
              whether <InlineMath math="n" /> is even. Third, <em>"compare
              T_n and S_n to the true value"</em> — pedagogical problems
              where you compute both estimates and verify Simpson is more
              accurate, illustrating the <InlineMath math="1/n^4" /> vs{" "}
              <InlineMath math="1/n^2" /> error scaling. Fourth,{" "}
              <em>"how large must n be?"</em> — error-bound questions
              where you invert the error inequality to solve for the
              smallest <InlineMath math="n" /> that guarantees the desired
              accuracy.
            </Why>

            <Why>
              <strong>Pitfalls — and the Simpson pattern is famously
              error-prone.</strong> (1) <em>Using Simpson with an odd
              number of subintervals.</em> Simpson glues parabolas across
              PAIRS of subintervals; an odd number breaks the pairing and
              the formula gives nonsense. Always check that{" "}
              <InlineMath math="n" /> is even before applying Simpson.
              (2) <em>Mixing up the 4-vs-2 pattern.</em> The Simpson
              pattern always STARTS with 4 on <InlineMath math="f_1" />{" "}
              and alternates: 1, 4, 2, 4, 2, 4, 2, ..., 4, 1. So
              ODD-indexed interior points get coefficient 4, EVEN-indexed
              interior points get coefficient 2. The endpoints{" "}
              <InlineMath math="f_0" /> and <InlineMath math="f_n" /> both
              get coefficient 1. Get the indexing wrong and the whole
              estimate is wrong. (3) <em>Forgetting the leading{" "}
              <InlineMath math="\Delta x / 3" /></em> for Simpson — the
              trapezoid rule uses <InlineMath math="\Delta x / 2" />, and
              students transcribe one for the other under time pressure.
              (4) <em>Computing <InlineMath math="\Delta x" /> as{" "}
              <InlineMath math="b - a" /></em> instead of{" "}
              <InlineMath math="(b - a)/n" />. The width is the
              SUBINTERVAL width, not the whole interval width. Easy
              mistake to make on autopilot; double-check. (5){" "}
              <em>Confusing "number of data points" with "number of
              subintervals."</em> If you have{" "}
              <InlineMath math="n + 1" /> data points (indexed{" "}
              <InlineMath math="0, 1, \dots, n" />), you have{" "}
              <InlineMath math="n" /> subintervals. Off-by-one errors here
              are very common. (6) <em>Applying Simpson to wildly
              non-smooth data.</em> Simpson's accuracy depends on{" "}
              <InlineMath math="f" /> being smooth (specifically, having a
              bounded fourth derivative). If your data has spikes,
              corners, or noise, Simpson can be WORSE than trapezoid.
              For noisy data, trapezoid is often the safer choice.
            </Why>

            <Why>
              <strong>The trigger.</strong> You reach for numerical
              integration any time the integrand has no closed-form
              antiderivative (you've exhausted u-sub, parts, trig sub,
              partial fractions, and nothing works) OR is given to you as
              a table of measured values (no formula). Simpson is the
              workhorse — use it whenever you can (i.e., whenever{" "}
              <InlineMath math="n" /> is even and the function is smooth).
              Use trapezoid when <InlineMath math="n" /> is odd, when the
              data is noisy, or when you need a dirt-simple estimate fast.
              In professional software (SciPy, MATLAB), Simpson and
              trapezoid are the building blocks of more sophisticated
              adaptive methods that adjust <InlineMath math="\Delta x" />{" "}
              automatically to meet a requested error tolerance.
            </Why>
          </ChapterSection>

          <ChapterSection
            id="s5-10"
            number="5.10"
            title="Improper Integrals"
            accentColor={ACCENT}
            blurb="Infinite intervals or vertical asymptotes — replace with a limit."
          >
            <Why>
              The Riemann definition of an integral, the one we built so
              carefully in 5.1, has two non-negotiable requirements: a{" "}
              <em>finite</em> interval and a <em>bounded</em> integrand. You
              can't cover an infinite region with finitely many equal-width
              rectangles (each rectangle would be infinitely wide, or you'd
              need infinitely many of them). You can't pick a "height"
              inside a strip that contains a vertical asymptote, because
              the function value is undefined or infinite there. Both of
              these restrictions are real — they're consequences of how we
              defined the integral. Improper integrals are how we sneak
              PAST both restrictions, using the same trick in both cases:
              replace the offending endpoint with a finite variable,
              integrate normally, then take the limit as the variable
              approaches the bad spot.
            </Why>

            <Why>
              <strong>Why we even need this.</strong> Infinite-interval and
              vertical-asymptote integrals show up constantly in
              applications. Probability densities are normalized by{" "}
              <InlineMath math="\int_{-\infty}^{\infty} p(x)\,dx = 1" /> —
              you can't even DEFINE a continuous probability distribution
              without improper integrals. Expected values use{" "}
              <InlineMath math="\int x \cdot p(x)\,dx" />, also over
              infinite intervals. Laplace transforms use{" "}
              <InlineMath math="\int_0^{\infty} e^{-st} f(t)\,dt" /> — the
              foundation of every linear differential equations course.
              Arc lengths, surfaces of revolution, and volumes of
              unbounded regions all reduce to improper integrals. So this
              isn't a niche extension; this is what lets calculus engage
              with continuous probability, signal processing, control
              theory, and quantum mechanics.
            </Why>

            <Why>
              <strong>Prerequisite refresher — what a limit means.</strong>{" "}
              The whole point of an improper integral is that the answer
              is defined as a LIMIT, not a direct evaluation. Recall: when
              we write <InlineMath math="\lim_{t \to \infty} g(t) = L" />,
              we mean "as <InlineMath math="t" /> grows arbitrarily large,{" "}
              <InlineMath math="g(t)" /> gets arbitrarily close to{" "}
              <InlineMath math="L" /> and stays there." If{" "}
              <InlineMath math="g(t)" /> grows without bound, the limit is{" "}
              <InlineMath math="\infty" /> (we say "the limit doesn't
              exist as a finite number"). If <InlineMath math="g(t)" />{" "}
              oscillates and never settles, again the limit doesn't
              exist. Similarly{" "}
              <InlineMath math="\lim_{t \to a^+} g(t)" /> means "approach{" "}
              <InlineMath math="a" /> from the right ({" "}
              <InlineMath math="t" /> larger than{" "}
              <InlineMath math="a" />)." For improper integrals, this
              one-sided limit business matters a lot: if the asymptote is
              at the lower endpoint, you approach from the right; if it's
              at the upper endpoint, you approach from the left.
            </Why>

            <Why>
              The trick. Replace the offending endpoint with a finite
              variable (call it <InlineMath math="t" />), integrate
              normally, then take the limit as{" "}
              <InlineMath math="t" /> approaches the bad spot. If the
              limit is a finite number, the integral{" "}
              <em>converges</em> to that value. If the limit is{" "}
              <InlineMath math="\pm\infty" /> or doesn't exist, the
              integral <em>diverges</em>. Convergence vs divergence is
              the central question of section 5.10 — often you don't even
              care what the exact value is, just whether it's finite at
              all.
            </Why>

            <Why>
              Mental image: imagine peeking under an infinitely long tail
              of a curve, or squeezing in toward a vertical asymptote with
              a measuring stick of length <InlineMath math="t" />, then
              asking what happens to the area you've accumulated as you
              push <InlineMath math="t" /> toward the wall. Sometimes the
              area keeps growing without bound — the tail or the spike is
              too "fat" to fit in finite area. Sometimes the area tightens
              toward a finite ceiling — the tail decays fast enough, or
              the spike is "narrow enough," for the area to stay bounded.
              The verdict depends on how fast the integrand
              decays/blows-up, and "fast enough" has a precise meaning
              we'll capture with the p-test.
            </Why>
            <Why>
              Mental image: imagine peeking under an infinitely long tail or
              squeezing in toward a vertical asymptote with a measuring
              stick of length <InlineMath math="t" />, then asking what
              happens to the area you've accumulated as you push{" "}
              <InlineMath math="t" /> toward the wall. Sometimes the area
              keeps growing without bound (diverges). Sometimes it tightens
              toward a finite ceiling (converges). The verdict depends on
              how fast the integrand decays — and "fast enough" has a
              precise meaning.
            </Why>

            <Why>
              <strong>Type 1 — infinite interval.</strong> Replace{" "}
              <InlineMath math="\infty" /> with a finite{" "}
              <InlineMath math="t" />, integrate, take the limit:
            </Why>
            <BlockMath math="\int_a^{\infty} f(x)\,dx = \lim_{t \to \infty}\int_a^t f(x)\,dx." />
            <Why>
              The benchmark to memorize is the <em>p-test</em>:
            </Why>
            <BlockMath math="\int_1^{\infty} \frac{1}{x^p}\,dx \text{ converges iff } p > 1." />
            <Why>
              The cutoff is <InlineMath math="p = 1" /> exactly. At{" "}
              <InlineMath math="p = 1" /> you get{" "}
              <InlineMath math="\ln x" />, which grows without bound (slowly,
              but it doesn't stop). At <InlineMath math="p > 1" /> the
              integrand decays fast enough that the tail's area is finite;
              at <InlineMath math="p < 1" /> it doesn't.
            </Why>

            <Why>
              <strong>Type 2 — vertical asymptote.</strong> If{" "}
              <InlineMath math="f" /> blows up at one endpoint (say at{" "}
              <InlineMath math="x = a" />), replace that endpoint with a
              variable that approaches from the right:
            </Why>
            <BlockMath math="\int_a^b f(x)\,dx = \lim_{t \to a^+}\int_t^b f(x)\,dx." />
            <Why>
              Same idea, same verdict logic. The p-test reverses on{" "}
              <InlineMath math="[0, 1]" />:{" "}
              <InlineMath math="\int_0^1 dx/x^p" /> converges iff{" "}
              <InlineMath math="p < 1" />. The intuition: at infinity, a
              flatter integrand (small <InlineMath math="p" />) keeps too
              much area; near a vertical asymptote, a steeper integrand
              (large <InlineMath math="p" />) packs too much area into a
              vanishingly small strip. The cutoff is at{" "}
              <InlineMath math="p = 1" /> either way.
            </Why>

            <Why>
              <strong>The Comparison Test.</strong> Sometimes you don't need
              the exact value — just the convergence verdict. If{" "}
              <InlineMath math="0 \le f(x) \le g(x)" /> on the interval, then:
            </Why>
            <Eq>If ∫ g converges, so does ∫ f  (smaller-than-finite is finite)</Eq>
            <Eq>If ∫ f diverges, so does ∫ g  (bigger-than-infinite is infinite)</Eq>
            <Why>
              Pick <InlineMath math="g" /> from your known benchmarks
              (p-tests, exponentials). The trick is to bound your integrand
              by a benchmark whose behavior you already know.
            </Why>

            <Why>
              <strong>A concrete walk-through.</strong> Evaluate{" "}
              <InlineMath math="\int_1^{\infty} \dfrac{1}{x^2}\,dx" />.
            </Why>
            <Why>
              Step 1 — replace the infinite limit with{" "}
              <InlineMath math="t" />:
            </Why>
            <Eq>∫₁^∞ (1/x²) dx = lim_{"{t→∞}"} ∫₁^t x^(−2) dx</Eq>
            <Why>
              Step 2 — integrate normally inside the limit:
            </Why>
            <BlockMath math="\int_1^t x^{-2}\,dx = \left[-\tfrac{1}{x}\right]_1^t = -\tfrac{1}{t} - (-1) = 1 - \tfrac{1}{t}." />
            <Why>
              Step 3 — take the limit. As <InlineMath math="t \to \infty" />,
              the <InlineMath math="1/t" /> term vanishes:
            </Why>
            <Eq>lim_{"{t→∞}"} (1 − 1/t) = 1 − 0 = 1</Eq>
            <Why>
              Verdict: <strong>converges to 1</strong>. Geometric reading:
              the region under <InlineMath math="y = 1/x^2" /> from{" "}
              <InlineMath math="x = 1" /> to infinity stretches forever to
              the right, yet the total area trapped is just one square unit.
              That's the surprising thing about{" "}
              <InlineMath math="1/x^p" /> for <InlineMath math="p > 1" /> —
              the tail decays fast enough to fit infinite length into finite
              area.
            </Why>

            <Why>
              <strong>Contrast with a diverging case.</strong> Try{" "}
              <InlineMath math="\int_1^{\infty} (1/x)\,dx" />.
            </Why>
            <Eq>= lim_{"{t→∞}"} [ln x]₁^t = lim_{"{t→∞}"} (ln t − 0) = +∞</Eq>
            <Why>
              <strong>Diverges</strong>. <InlineMath math="1/x" /> doesn't
              decay fast enough — even though it goes to zero, it goes to
              zero slowly, and slowly-decaying tails accumulate infinite
              area. This is the boundary case <InlineMath math="p = 1" /> in
              the p-test.
            </Why>

            <Why>
              <strong>A walk-through — Type 2, vertical asymptote at the
              endpoint.</strong> Try{" "}
              <InlineMath math="\int_0^1 \dfrac{1}{\sqrt{x}}\,dx" />. The
              integrand <InlineMath math="1/\sqrt{x} = x^{-1/2}" /> blows
              up as <InlineMath math="x \to 0^+" />, so this is improper at
              the LOWER endpoint. Replace 0 with a small positive variable{" "}
              <InlineMath math="t" /> and approach from the right:
            </Why>
            <Eq>∫₀¹ x^(−1/2) dx = lim_{"{t→0⁺}"} ∫_t¹ x^(−1/2) dx</Eq>
            <Why>
              Integrate normally inside the limit. The antiderivative of{" "}
              <InlineMath math="x^{-1/2}" /> is{" "}
              <InlineMath math="2x^{1/2} = 2\sqrt{x}" />:
            </Why>
            <BlockMath math="\int_t^1 x^{-1/2}\,dx = \left[2\sqrt{x}\right]_t^1 = 2\sqrt{1} - 2\sqrt{t} = 2 - 2\sqrt{t}." />
            <Why>
              Take the limit as <InlineMath math="t \to 0^+" />: the{" "}
              <InlineMath math="2\sqrt{t}" /> term goes to 0, leaving 2.
            </Why>
            <Eq>lim_{"{t→0⁺}"} (2 − 2√t) = 2</Eq>
            <Why>
              Verdict: <strong>converges to 2</strong>. Even though the
              integrand explodes near 0 — its graph shoots up to infinity
              — the area under that spike from 0 to 1 is finite, exactly
              2 square units. The singularity is "integrable." Compare to{" "}
              <InlineMath math="\int_0^1 (1/x)\,dx" />, which DIVERGES:
              that integrand also explodes at 0, but it explodes "too
              steeply" and the area is infinite. The boundary case is{" "}
              again at <InlineMath math="p = 1" />, but reversed from the
              Type 1 case: for{" "}
              <InlineMath math="\int_0^1 dx/x^p" />, convergence requires{" "}
              <InlineMath math="p < 1" /> (the LESS steep the spike, the
              more integrable it is).
            </Why>

            <Why>
              <strong>The two p-tests side by side — and why they flip.</strong>{" "}
              The intuition for why the cutoff flips: at infinity, a{" "}
              <em>flatter</em> integrand (small <InlineMath math="p" />)
              keeps too much area in the long tail — the function doesn't
              decay fast enough. Near a vertical asymptote at 0, a{" "}
              <em>steeper</em> integrand (large <InlineMath math="p" />)
              packs too much area into a vanishingly small strip — the
              function blows up too fast. So:
            </Why>
            <Eq>{"∫₁^∞ dx/x^p  converges iff p > 1     (flat tail far away)"}</Eq>
            <Eq>{"∫₀¹ dx/x^p  converges iff p < 1     (sharp spike at 0)"}</Eq>
            <Why>
              Both have their cutoff at <InlineMath math="p = 1" /> —
              that's the boundary line where ln appears, and ln just
              barely grows without bound (slowly, but it doesn't stop).
              Hold these two lines side by side; they're the workhorses
              of section 5.10.
            </Why>

            <Why>
              <strong>Interior singularities — the trap nobody sees
              coming.</strong> The most common bug in this section is
              failing to notice a singularity INSIDE the interval. For
              example, <InlineMath math="\int_{-1}^{1} \dfrac{1}{x}\,dx" />{" "}
              looks like an ordinary definite integral — but{" "}
              <InlineMath math="1/x" /> has a vertical asymptote at{" "}
              <InlineMath math="x = 0" />, which is squarely INSIDE the
              interval <InlineMath math="[-1, 1]" />. You can't just
              compute <InlineMath math="\ln|x|\big|_{-1}^{1} = 0 - 0 = 0" />{" "}
              and call it a day — that "0" is meaningless because the
              integrand is not defined at the interior point. You MUST
              split the interval at the singularity and treat each piece
              as its own improper integral:
            </Why>
            <BlockMath math="\int_{-1}^{1} \dfrac{dx}{x} = \int_{-1}^{0} \dfrac{dx}{x} + \int_{0}^{1} \dfrac{dx}{x}." />
            <Why>
              Each half is improper at the shared endpoint 0. For the
              right half:{" "}
              <InlineMath math="\lim_{t \to 0^+} \int_t^1 dx/x = \lim_{t \to 0^+}[\ln|x|]_t^1 = \lim_{t \to 0^+}(0 - \ln t) = +\infty" />.
              That's already infinite — the whole integral diverges, no
              matter what the left half does. The naive evaluation gave 0
              (the two halves canceled), but that cancellation was
              illegal because both pieces are individually divergent.{" "}
              <em>Always check for interior singularities before
              computing.</em>
            </Why>

            <Why>
              <strong>How this connects forward.</strong> Improper
              integrals are the bridge between Calc II and probability
              theory (where every continuous distribution's normalization
              and moments are improper integrals), differential equations
              (where Laplace transforms are improper integrals), and
              series convergence (the Integral Test in Chapter 8 says
              "<InlineMath math="\sum f(n)" /> converges iff{" "}
              <InlineMath math="\int_1^{\infty} f(x)\,dx" /> converges" —
              a direct application of improper-integral machinery to
              series). The comparison test you learned here generalizes
              to the limit comparison test for series. So the convergence
              ideas in 5.10 are seeded versions of ideas you'll meet
              repeatedly throughout the rest of your math education.
            </Why>

            <Why>
              <strong>Common scenarios where this appears.</strong>{" "}
              First, <em>"Type 1, infinite upper limit"</em> — the
              vanilla improper integral; replace{" "}
              <InlineMath math="\infty" /> with{" "}
              <InlineMath math="t" />, integrate, take{" "}
              <InlineMath math="t \to \infty" />. Second, <em>"Type 2,
              integrand blows up at an endpoint"</em> — replace the bad
              endpoint with <InlineMath math="t" /> and approach from the
              appropriate side. Third, <em>"both limits infinite"</em> —
              split into two improper integrals at any convenient
              constant (often 0); both halves must converge separately
              for the whole to converge. Fourth, <em>"interior
              singularity"</em> — split at the singularity, treat each
              half as Type 2. Fifth, <em>"p-test recognition"</em> — once
              you've seen{" "}
              <InlineMath math="\int 1/x^p\,dx" /> a few times, you
              should recognize these instantly without re-deriving.
              Sixth, <em>"comparison test"</em> — when computing the
              exact value is hard or impossible, bound the integrand
              by a benchmark whose behavior you know (usually a p-series
              or an exponential).
            </Why>

            <Why>
              <strong>Pitfalls — every one of these costs points.</strong>{" "}
              (1) <em>Forgetting to write the limit explicitly.</em>{" "}
              Plugging <InlineMath math="\infty" /> directly into an
              antiderivative is the lazy version of the limit step and
              often gives the right number but obscures whether you
              actually checked convergence. ALWAYS write{" "}
              <InlineMath math="\lim_{t \to \infty}" /> at the front of
              the calculation. (2) <em>Missing an INTERIOR singularity.</em>{" "}
              The example above with{" "}
              <InlineMath math="\int_{-1}^{1} dx/x" /> is the textbook
              warning. Before computing any definite integral, scan the
              integrand for places where it blows up; if any of those
              places lies inside the interval, split there. (3){" "}
              <em>Applying the comparison test in the wrong direction.</em>{" "}
              To show convergence: bound your integrand ABOVE by something
              that CONVERGES. To show divergence: bound your integrand
              BELOW by something that DIVERGES. Mixing these up — e.g.,
              bounding above with something divergent — proves nothing
              ("smaller than infinite" tells you nothing). (4){" "}
              <em>Mistaking <InlineMath math="(\infty - \infty)" /> for
              0.</em> Improper integrals where both halves diverge in
              opposite signs (like{" "}
              <InlineMath math="\int_{-\infty}^{\infty} x\,dx" />) don't
              "cancel out" to 0 — they DIVERGE. The naive answer "the
              positive and negative areas are symmetric" is the
              symmetry-trap reasoning that misses the requirement that
              both halves individually converge. (5){" "}
              <em>Approaching from the wrong side.</em> A Type 2
              singularity at <InlineMath math="x = a" /> (lower limit)
              requires <InlineMath math="t \to a^+" /> (approach from
              the right). A singularity at <InlineMath math="x = b" />{" "}
              (upper limit) requires <InlineMath math="t \to b^-" />{" "}
              (approach from the left). Mixing these can give nonsense
              or sign errors. (6) <em>P-test memorized backward.</em>{" "}
              For <InlineMath math="\int_1^{\infty}" /> the cutoff is{" "}
              <InlineMath math="p > 1" />; for{" "}
              <InlineMath math="\int_0^{1}" /> the cutoff is{" "}
              <InlineMath math="p < 1" />. The intuition (fat tails at
              infinity / sharp spikes near zero) is the right way to
              remember which is which.
            </Why>

            <Why>
              <strong>The trigger.</strong> You spot an improper integral
              by either (i) an <InlineMath math="\infty" /> appearing in
              the limits, or (ii) an integrand that blows up somewhere on
              the integration interval (vertical asymptote — usually
              caused by a zero in a denominator, or a negative power that
              goes to 0). Always make the limit explicit; otherwise you
              cannot tell whether you've actually proven convergence. If
              the exact value is hard to compute, use the comparison test
              to settle convergence by comparing to a known benchmark
              (p-tests and exponential integrals are the workhorses). The
              question "does this converge?" is often more important than
              "what's the value?" — especially in applications like
              probability where divergence means "this isn't a valid
              probability density" and convergence means "it is."
            </Why>
          </ChapterSection>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Worked Examples
          </h3>

          <WorkedExample
            accentColor={ACCENT}
            title="Riemann sum → definite integral (5.1)"
            problemStatement={
              <>
                Use the limit-of-Riemann-sums definition to evaluate{" "}
                <InlineMath math="\int_0^2 x^2\,dx" />. Use right endpoints.
              </>
            }
            steps={[
              {
                heading: "Set up the partition",
                body: (
                  <>
                    <Why>
                      A Riemann sum approximates the area under a curve by a row
                      of rectangles. We divide the interval into n equal pieces;
                      the width of each rectangle is Δx, and we sample the
                      curve's height at one chosen point in each piece (here,
                      the right endpoint).
                    </Why>
                    <Eq>Δx = 2/n,    x_i = 2i/n   (i = 1, ..., n)</Eq>
                    <Why>
                      As n grows, the rectangles get thinner and the
                      approximation tightens onto the true area.
                    </Why>
                  </>
                ),
              },
              {
                heading: "Sum the rectangles",
                body: (
                  <>
                    <Why>
                      Each rectangle has area f(x_i)·Δx = (x_i)²·Δx. Sum over
                      all n rectangles:
                    </Why>
                    <Eq>R_n = Σᵢ₌₁ⁿ (2i/n)² · (2/n) = (8/n³) · Σᵢ₌₁ⁿ i²</Eq>
                    <Why>
                      Use the closed-form for the sum of squares:{" "}
                      <InlineMath math="\sum_{i=1}^n i^2 = n(n+1)(2n+1)/6" />.
                    </Why>
                    <BlockMath math="R_n = \frac{8}{n^3} \cdot \frac{n(n+1)(2n+1)}{6} = \frac{8(n+1)(2n+1)}{6 n^2}" />
                  </>
                ),
              },
              {
                heading: "Take the limit",
                body: (
                  <>
                    <Why>
                      The definite integral is what R_n approaches as n → ∞.
                      Divide top and bottom by n² to see the limit clearly:
                    </Why>
                    <BlockMath math="\lim_{n\to\infty} \frac{8(1 + 1/n)(2 + 1/n)}{6} = \frac{8 \cdot 1 \cdot 2}{6} = \frac{8}{3}" />
                    <Why>
                      So the area under <InlineMath math="y = x^2" /> from 0 to
                      2 is exactly 8/3 ≈ 2.667 — about 2/3 of the area of the
                      enclosing 2×4 box, which passes the eyeball test for a
                      curve that bows away from the corners.
                    </Why>
                  </>
                ),
                result: { label: "Integral", value: "8/3 ≈ 2.667", color: "blue" },
              },
            ]}
            keyInsight={
              <>
                FTC will give the same answer in one line:{" "}
                <InlineMath math="\int_0^2 x^2\,dx = \tfrac{x^3}{3}\Big|_0^2 = \tfrac{8}{3}" />.
                The limit definition is the foundation; the FTC is the shortcut.
                Whenever you reach for FTC, remember it's just hiding the limit
                of Riemann sums underneath — you've already done the hard work
                of justifying it.
              </>
            }
          />

          <WorkedExample
            accentColor={ACCENT}
            title="FTC Pt 1 + chain rule (5.4)"
            problemStatement={
              <>
                Compute <InlineMath math="\dfrac{d}{dx}\!\int_2^{x^2}\!\sqrt{1+t^3}\,dt" />.
              </>
            }
            steps={[
              {
                heading: "Identify the structure",
                body: (
                  <>
                    <Why>
                      We're differentiating an integral whose upper limit is a
                      function of x. The general form is{" "}
                      <InlineMath math="\frac{d}{dx}\int_a^{u(x)} f(t)\,dt" /> —
                      so we need to spot what u(x) is and what f(t) is.
                    </Why>
                    <Eq>u(x) = x²,    f(t) = √(1 + t³)</Eq>
                  </>
                ),
              },
              {
                heading: "Apply FTC Pt 1 + chain rule",
                body: (
                  <>
                    <Why>
                      FTC Pt 1 says <InlineMath math="\frac{d}{dx}\int_a^{x} f(t)\,dt = f(x)" />.
                      When the upper limit is a more complex u(x), the chain
                      rule kicks in and we multiply by u'(x):
                    </Why>
                    <BlockMath math="\frac{d}{dx}\int_2^{u(x)} f(t)\,dt = f(u(x))\cdot u'(x)" />
                    <Why>
                      Plug in <InlineMath math="u'(x) = 2x" /> and{" "}
                      <InlineMath math="f(u(x)) = \sqrt{1 + (x^2)^3} = \sqrt{1 + x^6}" />:
                    </Why>
                    <Eq>d/dx [...] = √(1 + x⁶) · 2x</Eq>
                  </>
                ),
                result: { label: "Derivative", value: "2x · √(1 + x⁶)", color: "blue" },
              },
            ]}
            keyInsight={
              <>
                The 2x factor comes from the chain rule on{" "}
                <InlineMath math="u = x^2" />, NOT from differentiating the
                integrand. Forgetting the chain rule here is the classic FTC Pt 1
                trap — it turns an x⁶ into an x³ inside the radical.
              </>
            }
          />

          <WorkedExample
            accentColor={ACCENT}
            title="u-substitution (5.5)"
            problemStatement={<>Evaluate <InlineMath math="\int_0^1 x e^{x^2}\,dx" />.</>}
            steps={[
              {
                heading: "Choose u",
                body: (
                  <>
                    <Why>
                      Substitution reverses the chain rule. Look for an "inner
                      function" whose derivative also appears in the integrand
                      (perhaps with a constant factor). Here{" "}
                      <InlineMath math="x" /> is exactly half of{" "}
                      <InlineMath math="(x^2)' = 2x" /> — so{" "}
                      <InlineMath math="u = x^2" /> is the right pick.
                    </Why>
                    <Eq>u = x²,    du = 2x dx,    so x dx = du/2</Eq>
                  </>
                ),
              },
              {
                heading: "Change limits",
                body: (
                  <>
                    <Why>
                      For a definite integral, we can either back-substitute at
                      the end OR change the integration limits to match the new
                      variable. Changing limits is faster:
                    </Why>
                    <Eq>x = 0  ⇒  u = 0;    x = 1  ⇒  u = 1</Eq>
                  </>
                ),
              },
              {
                heading: "Integrate in u",
                body: (
                  <>
                    <Why>
                      Now everything is in u and the integrand is the simple{" "}
                      <InlineMath math="\tfrac{1}{2}e^u" />:
                    </Why>
                    <BlockMath math="\int_0^1 x e^{x^2}\,dx = \tfrac{1}{2}\int_0^1 e^u\,du = \tfrac{1}{2}\bigl[e^u\bigr]_0^1 = \tfrac{1}{2}(e - 1)" />
                    <Why>
                      ≈ 0.859. Spot-check: e ≈ 2.72, so (e − 1)/2 ≈ 0.86. The
                      integrand <InlineMath math="x e^{x^2}" /> is positive and
                      grows from 0 at x=0 to e at x=1, averaging maybe ~0.9 over
                      a unit interval — answer matches.
                    </Why>
                  </>
                ),
                result: { label: "Value", value: "(e − 1)/2 ≈ 0.859", color: "blue" },
              },
            ]}
            keyInsight={
              <>
                The trick is spotting that <InlineMath math="x\,dx" /> matches{" "}
                <InlineMath math="(1/2)\,du" /> — that's why{" "}
                <InlineMath math="u = x^2" /> works and not{" "}
                <InlineMath math="u = e^{x^2}" />. If you'd picked the latter,{" "}
                du = <InlineMath math="2x e^{x^2}\,dx" /> and you'd be unable to
                replace dx cleanly.
              </>
            }
          />

          <WorkedExample
            accentColor={ACCENT}
            title="Integration by parts (5.6)"
            problemStatement={<>Evaluate <InlineMath math="\int x e^x\,dx" />.</>}
            steps={[
              {
                heading: "Pick u and dv (LIATE)",
                body: (
                  <>
                    <Why>
                      LIATE ranks function types by which makes a good "u": Log
                      &gt; Inverse trig &gt; Algebraic &gt; Trig &gt;
                      Exponential. Algebraic <InlineMath math="x" /> beats
                      Exponential <InlineMath math="e^x" />, so{" "}
                      <InlineMath math="x" /> becomes u and what's left becomes
                      dv. The reason for the LIATE ordering: each type lower on
                      the list is HARDER to differentiate than the type above
                      — so you want the "harder to differentiate" thing to STAY
                      put as v.
                    </Why>
                    <Eq>u = x  ⇒  du = dx</Eq>
                    <Eq>dv = eˣ dx  ⇒  v = eˣ</Eq>
                  </>
                ),
              },
              {
                heading: "Apply ∫u dv = uv − ∫v du",
                body: (
                  <>
                    <Why>
                      Plug in. The new integral{" "}
                      <InlineMath math="\int v\,du = \int e^x\,dx" /> is much
                      easier than the original — that's the whole point.
                    </Why>
                    <BlockMath math="\int x e^x\,dx = x e^x - \int e^x\,dx = x e^x - e^x + C = (x - 1) e^x + C" />
                    <Why>
                      Sanity check by differentiating:{" "}
                      <InlineMath math="\frac{d}{dx}[(x-1)e^x] = e^x + (x-1)e^x = x e^x \checkmark" />.
                    </Why>
                  </>
                ),
                result: { label: "Antiderivative", value: "(x − 1) eˣ + C", color: "blue" },
              },
            ]}
            keyInsight={
              <>
                If you'd picked <InlineMath math="u = e^x, dv = x\,dx" />, the
                new integral <InlineMath math="\int (x^2/2)e^x\,dx" /> would be{" "}
                <em>worse</em>, not better — same e^x with a higher polynomial
                in front. That's the pitfall LIATE protects you from. When in
                doubt, try one ordering: if the ∫v du looks worse than what you
                started with, swap.
              </>
            }
          />

          <WorkedExample
            accentColor={ACCENT}
            title="Trig integral (5.7)"
            problemStatement={<>Evaluate <InlineMath math="\int \sin^3 x \cos^2 x\,dx" />.</>}
            steps={[
              {
                heading: "Power of sin is odd — peel one off",
                body: (
                  <>
                    <Why>
                      Strategy for{" "}
                      <InlineMath math="\int \sin^m x \cos^n x\,dx" /> when one
                      power is odd: peel off ONE factor of the odd-powered
                      function, and use{" "}
                      <InlineMath math="\sin^2 + \cos^2 = 1" /> to convert the
                      rest into the OTHER trig function. Then substitution
                      handles the rest.
                    </Why>
                    <Eq>sin³x = sin x · sin²x = sin x · (1 − cos²x)</Eq>
                    <Why>
                      Now the integral is{" "}
                      <InlineMath math="\int \sin x (1 - \cos^2 x)\cos^2 x\,dx" />{" "}
                      — and the lone <InlineMath math="\sin x" /> at the front
                      is precisely the derivative (up to sign) of{" "}
                      <InlineMath math="\cos x" />, which is what enables u-sub.
                    </Why>
                  </>
                ),
              },
              {
                heading: "Substitute u = cos x",
                body: (
                  <>
                    <Why>
                      With <InlineMath math="u = \cos x" />,{" "}
                      <InlineMath math="du = -\sin x\,dx" /> — the leading{" "}
                      <InlineMath math="\sin x\,dx" /> becomes <InlineMath math="-du" />.
                      Replace cos x with u everywhere else:
                    </Why>
                    <BlockMath math="\int \sin x (1 - \cos^2 x)\cos^2 x\,dx = -\int (1 - u^2) u^2\,du = -\int (u^2 - u^4)\,du" />
                  </>
                ),
              },
              {
                heading: "Integrate and back-substitute",
                body: (
                  <>
                    <Why>
                      Now it's plain power-rule integration. After integrating,
                      replace u with cos x to get back to the original variable:
                    </Why>
                    <BlockMath math="= -\tfrac{u^3}{3} + \tfrac{u^5}{5} + C = -\tfrac{\cos^3 x}{3} + \tfrac{\cos^5 x}{5} + C" />
                  </>
                ),
                result: { label: "Antiderivative", value: "−cos³x/3 + cos⁵x/5 + C", color: "blue" },
              },
            ]}
            keyInsight={
              <>
                Whenever a trig power is odd, peel off one factor and reuse{" "}
                <InlineMath math="\sin^2 + \cos^2 = 1" /> to convert the rest to
                the "other" function — that puts you in u-sub territory. If
                BOTH powers are even, that trick fails; instead use
                power-reduction identities like{" "}
                <InlineMath math="\sin^2 x = (1 - \cos 2x)/2" />.
              </>
            }
          />

          <WorkedExample
            accentColor={ACCENT}
            title="Partial fractions (5.8)"
            problemStatement={<>Evaluate <InlineMath math="\int \dfrac{1}{(x+1)(x+3)}\,dx" />.</>}
            steps={[
              {
                heading: "Decompose into simpler fractions",
                body: (
                  <>
                    <Why>
                      The integrand <InlineMath math="\frac{1}{(x+1)(x+3)}" /> has
                      no obvious antiderivative — but if we could split it into
                      a sum like{" "}
                      <InlineMath math="\frac{A}{x+1} + \frac{B}{x+3}" />, each
                      piece would integrate cleanly to a logarithm. Find A and B
                      by clearing denominators:
                    </Why>
                    <Eq>1 = A(x + 3) + B(x + 1)</Eq>
                    <Why>
                      The "set x to a root" trick: pick x-values that zero out
                      one term so the other unknown drops out.
                    </Why>
                    <Eq>x = −1:  1 = 2A  ⇒  A = 1/2</Eq>
                    <Eq>x = −3:  1 = −2B  ⇒  B = −1/2</Eq>
                  </>
                ),
              },
              {
                heading: "Integrate each piece",
                body: (
                  <>
                    <Why>
                      Now each fraction is <InlineMath math="\frac{1}{x - r}" />,
                      which integrates to{" "}
                      <InlineMath math="\ln|x - r|" />. Combine using log
                      properties at the end:
                    </Why>
                    <BlockMath math="\int \dfrac{1}{(x+1)(x+3)}\,dx = \tfrac{1}{2}\ln|x+1| - \tfrac{1}{2}\ln|x+3| + C = \tfrac{1}{2}\ln\Bigl|\dfrac{x+1}{x+3}\Bigr| + C" />
                  </>
                ),
                result: { label: "Antiderivative", value: "(1/2) ln |(x+1)/(x+3)| + C", color: "blue" },
              },
            ]}
            keyInsight={
              <>
                The "cover-up" shortcut: for distinct linear factors,{" "}
                <InlineMath math="A = \lim_{x \to r} (x - r) \cdot f(x)" /> at
                each root r — that's just plugging x = r into f(x) after
                covering up the (x − r) factor. Bypasses solving a system. For
                repeated factors or irreducible quadratics you need the full
                system.
              </>
            }
          />

          <WorkedExample
            accentColor={ACCENT}
            title="Improper integral via comparison (5.10)"
            problemStatement={
              <>
                Determine whether <InlineMath math="\int_1^{\infty} \dfrac{1}{x^2 + x}\,dx" />{" "}
                converges or diverges.
              </>
            }
            steps={[
              {
                heading: "Compare with a known integral",
                body: (
                  <>
                    <Why>
                      Computing this integral exactly is doable but messy. Often
                      we just need to know "does it converge or not?" — and the
                      comparison test gives a fast yes/no. Pick a benchmark
                      with known behavior whose integrand is bigger than ours
                      (so its convergence drags ours along):
                    </Why>
                    <Eq>For x ≥ 1:  1/(x² + x)  ≤  1/x²    (since x² + x &gt; x²)</Eq>
                  </>
                ),
              },
              {
                heading: "Apply the comparison test",
                body: (
                  <>
                    <Why>
                      <InlineMath math="\int_1^{\infty} 1/x^2\,dx" /> converges
                      (p-test with p = 2 &gt; 1) to a finite value (1, in fact).
                      Since our integrand is non-negative and bounded above by{" "}
                      <InlineMath math="1/x^2" />, the comparison test
                      guarantees our integral also converges — the area under
                      the smaller curve can't exceed the area under the larger
                      one.
                    </Why>
                  </>
                ),
                result: { label: "Verdict", value: "Converges", color: "green" },
              },
              {
                heading: "(Optional) compute exactly",
                body: (
                  <>
                    <Why>
                      For curiosity, partial fractions gives a telescoping
                      antiderivative:
                    </Why>
                    <Eq>1/(x² + x) = 1/x − 1/(x+1)</Eq>
                    <BlockMath math="\int_1^{\infty} \Bigl(\tfrac{1}{x} - \tfrac{1}{x+1}\Bigr) dx = \lim_{t\to\infty}\Bigl[\ln\tfrac{x}{x+1}\Bigr]_1^t = 0 - \ln\tfrac{1}{2} = \ln 2" />
                    <Why>
                      So the exact value is ln 2 ≈ 0.693, well under the
                      benchmark's value of 1. Comparison gave the right answer
                      without us doing this work.
                    </Why>
                  </>
                ),
              },
            ]}
            keyInsight={
              <>
                Comparison gives a quick yes/no convergence verdict — invaluable
                when the exact value is hard or doesn't have a closed form.
                Always pick a comparand whose convergence you already know
                (p-series and geometric integrals are the workhorses). For
                divergence, you compare in the OTHER direction: find something{" "}
                <em>smaller</em> than your integrand that diverges.
              </>
            }
          />
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Practice Problems
          </h3>

          <PracticeProblem
            accentColor={ACCENT}
            title="Substitution drills"
            statement={<>Evaluate each definite integral by a clean substitution.</>}
            parts={[
              {
                label: "(a)",
                question: <InlineMath math="\int_0^1 (2x + 1)^4\,dx" />,
                solutionSteps: (
                  <>
                    <Why>
                      The inner function (2x + 1) cries out for u-sub; its
                      derivative 2 is just a constant we can pull out.
                    </Why>
                    <Eq>u = 2x + 1,  du = 2 dx,  limits 1 → 3</Eq>
                    <BlockMath math="= \tfrac{1}{2}\int_1^3 u^4\,du = \tfrac{1}{2}\cdot \tfrac{u^5}{5}\Big|_1^3 = \tfrac{1}{10}(243 - 1) = 24.2" />
                  </>
                ),
                answer: { value: "24.2 (= 121/5)" },
              },
              {
                label: "(b)",
                question: <InlineMath math="\int_0^{\pi/2} \cos x \sin^4 x\,dx" />,
                solutionSteps: (
                  <>
                    <Why>
                      cos x is exactly the derivative of sin x, so u = sin x
                      makes cos x dx become plain du.
                    </Why>
                    <Eq>u = sin x,  du = cos x dx,  limits 0 → 1</Eq>
                    <BlockMath math="= \int_0^1 u^4\,du = \tfrac{1}{5}" />
                  </>
                ),
                answer: { value: "1/5" },
              },
              {
                label: "(c)",
                question: <InlineMath math="\int \dfrac{x}{\sqrt{1 - x^2}}\,dx" />,
                solutionSteps: (
                  <>
                    <Why>
                      Spot the inner function 1 − x² under the radical; its
                      derivative −2x almost matches the lone x in the
                      numerator (off by a factor of −2).
                    </Why>
                    <Eq>u = 1 − x²,  du = −2x dx</Eq>
                    <BlockMath math="= -\tfrac{1}{2}\int u^{-1/2}\,du = -\sqrt{u} + C = -\sqrt{1 - x^2} + C" />
                  </>
                ),
                answer: { value: "−√(1 − x²) + C" },
              },
            ]}
          />

          <PracticeProblem
            accentColor={ACCENT}
            title="Integration by parts"
            statement={<>Pick u by LIATE; reduce until the remaining integral matches a table.</>}
            parts={[
              {
                label: "(a)",
                question: <InlineMath math="\int x \sin x\,dx" />,
                solutionSteps: (
                  <>
                    <Why>
                      LIATE: Algebraic x beats Trig sin x, so u = x. The new
                      integral has dx instead of x dx — easier.
                    </Why>
                    <Eq>u = x,  dv = sin x dx  ⇒  du = dx,  v = −cos x</Eq>
                    <BlockMath math="= -x\cos x + \int \cos x\,dx = -x\cos x + \sin x + C" />
                  </>
                ),
                answer: { value: "−x cos x + sin x + C" },
              },
              {
                label: "(b)",
                question: <InlineMath math="\int \ln x\,dx" />,
                solutionSteps: (
                  <>
                    <Why>
                      Standalone ln x with no obvious dv looks impossible —
                      until you use dv = dx (literally just dx) so v = x. Now
                      IBP turns ln x into something integrable.
                    </Why>
                    <Eq>u = ln x,  dv = dx  ⇒  du = dx/x,  v = x</Eq>
                    <BlockMath math="= x\ln x - \int dx = x\ln x - x + C" />
                  </>
                ),
                answer: { value: "x ln x − x + C" },
              },
              {
                label: "(c)",
                question: <InlineMath math="\int x^2 e^x\,dx" />,
                solutionSteps: (
                  <>
                    <Why>
                      Each IBP cycle drops the polynomial degree by 1. Start
                      with u = x² (giving an ∫x e^x dx we already know how to
                      do), then IBP again on that.
                    </Why>
                    <BlockMath math="= x^2 e^x - 2\int x e^x\,dx = x^2 e^x - 2(x e^x - e^x) + C = (x^2 - 2x + 2)e^x + C" />
                  </>
                ),
                answer: { value: "(x² − 2x + 2) eˣ + C" },
              },
            ]}
          />

          <PracticeProblem
            accentColor={ACCENT}
            title="Trig substitution"
            statement={<>For each integrand, identify which trig substitution and integrate.</>}
            parts={[
              {
                label: "(a)",
                question: <InlineMath math="\int \dfrac{dx}{\sqrt{4 - x^2}}" />,
                solutionSteps: (
                  <>
                    <Why>
                      Form √(a² − x²) → use x = a sin θ. Here a = 2.
                    </Why>
                    <Eq>x = 2 sin θ,  dx = 2 cos θ dθ,  √(4 − x²) = 2 cos θ</Eq>
                    <BlockMath math="= \int \dfrac{2\cos\theta}{2\cos\theta}\,d\theta = \theta + C = \arcsin(x/2) + C" />
                  </>
                ),
                answer: { value: "arcsin(x/2) + C" },
              },
              {
                label: "(b)",
                question: <InlineMath math="\int \dfrac{dx}{x^2 \sqrt{x^2 + 9}}" />,
                solutionSteps: (
                  <>
                    <Why>
                      Form √(a² + x²) → use x = a tan θ. Here a = 3.
                    </Why>
                    <Eq>x = 3 tan θ,  √(x² + 9) = 3 sec θ,  dx = 3 sec²θ dθ</Eq>
                    <BlockMath math="= \int \tfrac{3\sec^2\theta}{9\tan^2\theta \cdot 3\sec\theta}\,d\theta = \tfrac{1}{9}\int \tfrac{\cos\theta}{\sin^2\theta}\,d\theta = -\tfrac{1}{9\sin\theta} + C" />
                    <Why>
                      Convert back from θ to x using a reference triangle:
                      sin θ = x/√(x² + 9):
                    </Why>
                    <Eq>= −√(x² + 9)/(9x) + C</Eq>
                  </>
                ),
                answer: { value: "−√(x² + 9) / (9x) + C" },
              },
            ]}
          />

          <PracticeProblem
            accentColor={ACCENT}
            title="Partial fractions"
            statement={<>Long-divide if needed, then decompose.</>}
            parts={[
              {
                label: "(a)",
                question: <InlineMath math="\int \dfrac{x + 4}{x^2 - 5x + 6}\,dx" />,
                solutionSteps: (
                  <>
                    <Why>
                      Factor the denominator first: x² − 5x + 6 = (x − 2)(x − 3).
                      Two distinct linear factors → standard A/(x−2) + B/(x−3)
                      decomposition. Use cover-up to find A, B fast.
                    </Why>
                    <Eq>x = 2:  6 = A(−1)  ⇒  A = −6</Eq>
                    <Eq>x = 3:  7 = B(1)   ⇒  B = 7</Eq>
                    <BlockMath math="= -6\ln|x-2| + 7\ln|x-3| + C" />
                  </>
                ),
                answer: { value: "−6 ln|x − 2| + 7 ln|x − 3| + C" },
              },
              {
                label: "(b)",
                question: <InlineMath math="\int \dfrac{x^2 + 1}{x^2 - 1}\,dx" />,
                solutionSteps: (
                  <>
                    <Why>
                      Numerator's degree equals denominator's, so long-divide
                      first to peel off the polynomial part:
                    </Why>
                    <Eq>(x² + 1)/(x² − 1) = 1 + 2/(x² − 1) = 1 + 1/(x−1) − 1/(x+1)</Eq>
                    <BlockMath math="= x + \ln|x - 1| - \ln|x + 1| + C = x + \ln\Bigl|\dfrac{x-1}{x+1}\Bigr| + C" />
                  </>
                ),
                answer: { value: "x + ln|(x − 1)/(x + 1)| + C" },
              },
            ]}
          />

          <PracticeProblem
            accentColor={ACCENT}
            title="Improper integrals"
            statement={<>Evaluate or determine convergence.</>}
            parts={[
              {
                label: "(a)",
                question: <InlineMath math="\int_0^{\infty} e^{-3x}\,dx" />,
                solutionSteps: (
                  <>
                    <Why>
                      Type 1 (infinite upper limit): replace ∞ with t, integrate
                      normally, take the limit. e^(−3x) decays fast enough for
                      the area under it to be finite.
                    </Why>
                    <BlockMath math="= \lim_{t\to\infty}\Bigl[-\tfrac{1}{3}e^{-3x}\Bigr]_0^t = 0 + \tfrac{1}{3} = \tfrac{1}{3}" />
                  </>
                ),
                answer: { value: "1/3" },
              },
              {
                label: "(b)",
                question: (
                  <>
                    <InlineMath math="\int_1^{\infty} \dfrac{dx}{x^{1/2}}" /> — converges or diverges?
                  </>
                ),
                solutionSteps: (
                  <>
                    <Why>
                      Standard p-test for ∫ from 1 to ∞ of 1/x^p: converges iff
                      p &gt; 1. Here p = 1/2, so the integrand doesn't decay fast
                      enough — diverges.
                    </Why>
                  </>
                ),
                answer: { value: "Diverges" },
              },
              {
                label: "(c)",
                question: (
                  <>
                    Show <InlineMath math="\int_0^1 \dfrac{dx}{\sqrt{x}}" /> converges (Type 2 — bad endpoint).
                  </>
                ),
                solutionSteps: (
                  <>
                    <Why>
                      Type 2: integrand has a vertical asymptote at x = 0. Same
                      trick — replace the bad endpoint with t (a small positive
                      number) and take t → 0⁺.
                    </Why>
                    <BlockMath math="\int_t^1 x^{-1/2} dx = 2\sqrt{x}\Big|_t^1 = 2 - 2\sqrt{t} \;\to\; 2 \text{ as } t \to 0^+" />
                    <Why>
                      Even though the integrand explodes near 0, the area under
                      it is finite — the singularity is integrable. Compare to
                      ∫ from 0 to 1 of 1/x, which DIVERGES (p-test for [0, 1]
                      runs the other way: converges iff p &lt; 1).
                    </Why>
                  </>
                ),
                answer: { value: "Converges to 2" },
              },
            ]}
          />
        </section>

        <section>
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-gray-700 dark:text-gray-200">
                Done with Ch 5? Keep going or test yourself:
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/math/drill">
                  <Button variant="outline">Drill Ch 5</Button>
                </Link>
                <Link href="/math/cheat-sheet">
                  <Button variant="outline">Cheat Sheet</Button>
                </Link>
                <Link href="/math/applications">
                  <Button style={{ background: "#10b981", color: "white" }}>
                    Next: Ch 6 Applications →
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
