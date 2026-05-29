import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { ChapterSection } from "@/components/math/ChapterSection";
import { MathFormula } from "@/components/math/MathFormula";
import { SeriesPartialSumViz } from "@/components/math/SeriesPartialSumViz";
import { TaylorPolyViz } from "@/components/math/TaylorPolyViz";
import { BlockMath, InlineMath } from "@/components/math/Katex";
import { WorkedExample, Eq, Why } from "@/components/midterm/WorkedExample";
import { PracticeProblem } from "@/components/midterm/PracticeProblem";

const ACCENT = "#7c3aed";
const SEE_BELOW = (
  <p className="text-xs italic text-gray-500 dark:text-gray-400">
    See full worked examples + practice at the bottom of this chapter ↓
  </p>
);

export default function Ch8Series() {
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
            Ch 8 · Sequences & Series
          </h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container py-10 space-y-10">
        <section className="rounded-2xl bg-purple-50 dark:bg-slate-800 p-8">
          <span
            className="inline-block text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-3"
            style={{ background: ACCENT }}
          >
            Sections 8.1 – 8.8
          </span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Convergence — does the infinite sum settle down?
          </h2>

          <div className="text-gray-700 dark:text-gray-200 max-w-3xl space-y-4">
            <p>
              You have been adding finite lists of numbers your entire life.
              Three apples plus four apples plus two apples is nine apples,
              full stop. This chapter asks the next question in the sequence,
              and it is a strange one: <em>can you add infinitely many
              numbers?</em> Stop for a second and notice how unreasonable
              that sounds. Adding requires you to finish. Infinitely many
              additions never finish. So at first glance the whole project
              looks doomed before it starts. The answer, beautifully, is
              "sometimes yes." Sometimes the running total, even though it
              never stops growing, creeps toward a finite ceiling and never
              crosses it. Sometimes it does not. The entire chapter is a
              toolbox for telling those two cases apart.
            </p>

            <p>
              The cleanest example of "sometimes yes" is the geometric
              series you have probably seen since middle school:{" "}
              <InlineMath math="1 + \tfrac{1}{2} + \tfrac{1}{4} + \tfrac{1}{8} + \tfrac{1}{16} + \dots" />.
              Each new term is half the previous, so the running total
              after one term is <InlineMath math="1" />, after two terms is{" "}
              <InlineMath math="1.5" />, after three is{" "}
              <InlineMath math="1.75" />, after four is{" "}
              <InlineMath math="1.875" />. The total is climbing, but each
              new piece is smaller than the gap remaining to{" "}
              <InlineMath math="2" />, so the running total can never
              actually reach <InlineMath math="2" />. It just crawls closer
              and closer. The infinite sum equals exactly{" "}
              <InlineMath math="2" />. That is what we will eventually
              mean by saying the series <em>converges</em>.
            </p>

            <p>
              The cleanest example of "sometimes no" is the harmonic series{" "}
              <InlineMath math="1 + \tfrac{1}{2} + \tfrac{1}{3} + \tfrac{1}{4} + \tfrac{1}{5} + \dots" />.
              The terms shrink to zero, just like the geometric example,
              and the partial sums climb at a glacial pace — after a
              million terms you are only at about{" "}
              <InlineMath math="14.4" />, after a billion terms only about{" "}
              <InlineMath math="21" />. It feels like it must settle. It
              does not. The running total marches off to infinity, taking
              its sweet time about it. The reason the harmonic series
              diverges and the geometric series converges is not that one
              has terms that "go to zero" and the other does not — both
              do. It is that one's terms shrink <em>fast enough</em> to be
              eaten by the inevitable infinity of additions, and the
              other's do not. Distinguishing those two regimes is what
              this chapter is for.
            </p>

            <p>
              <strong>The big arc.</strong> Section 8.1 builds the
              foundation: <em>sequences</em> and limits, because every
              series question is secretly a sequence question (the
              sequence of running totals). Section 8.2 defines a series as
              the limit of its partial sums and hands you the only two
              cases where you can actually write the exact infinite sum
              down in closed form: <em>geometric</em> series and{" "}
              <em>telescoping</em> series. Sections 8.3 and 8.4 give the
              convergence-test toolbox — integral, comparison, limit
              comparison, alternating series, ratio, root — for the vast
              majority of series where you cannot compute the sum but can
              still answer "does it settle, yes or no?" Section 8.5
              introduces <em>power series</em>, where each term contains
              an unknown <InlineMath math="x" />, so the question of
              convergence becomes <em>for which</em>{" "}
              <InlineMath math="x" /> does this thing converge. Section
              8.6 shows how almost every familiar function (arctan, ln,
              exponentials, trig) has a power-series representation
              derivable from the geometric series by substitution,
              differentiation, or integration. Section 8.7 generalizes
              this into the Taylor / Maclaurin recipe — any smooth
              function can be represented as a polynomial of infinite
              degree. Section 8.8 truncates that polynomial at some
              finite degree and gives you a guaranteed bound on the error
              — the practical payoff that lets calculators evaluate{" "}
              <InlineMath math="\sin" />, <InlineMath math="\cos" />,{" "}
              <InlineMath math="e^x" /> at all.
            </p>

            <p>
              <strong>The single mental move</strong> that ties every
              section together is this: a series is a running total of an
              infinite list, and the question "does the series converge"
              is the same question as "does the running total approach a
              finite limit." Picture a hiker walking up a staircase whose
              steps shrink. If the steps shrink fast, the hiker
              approaches a ceiling. If they shrink slowly, the hiker
              keeps climbing forever. Every convergence test in this
              chapter is a different way of measuring "how fast do the
              steps shrink" without you having to compute the limit
              explicitly. The ratio test measures shrinkage by ratio. The
              comparison test measures it relative to a known benchmark
              (the p-series). The integral test measures it relative to
              an area under a curve. AST measures it for staircases that
              alternate going up and down. Memorize that mental image
              first — the rest is technique.
            </p>

            <p>
              <strong>What you should already know.</strong> This chapter
              leans on essentially every previous calculus technique you
              have. Limits — you'll use these constantly, including
              limits at infinity and L'Hôpital's rule for{" "}
              <InlineMath math="\infty/\infty" /> and{" "}
              <InlineMath math="0/0" /> indeterminate forms. The growth
              hierarchy <InlineMath math="\ln n \ll n^p \ll a^n \ll n!" />{" "}
              (memorize once, use everywhere). The exponential, log, and
              trig functions — their values, their derivatives, their
              behavior. Derivatives and the product / chain rule —
              Taylor's coefficient formula is literally repeated
              differentiation, evaluated at the center. Integration,
              including <InlineMath math="u" />-substitution and
              improper integrals — the integral test reduces a sum to an
              improper integral, and §8.6 derives new series by
              integrating known ones term-by-term. If any of these tools
              feel rusty, expect them to surface immediately and slow
              you down. It is worth ten minutes of review on each before
              starting §8.3.
            </p>

            <p>
              <strong>Common pitfalls you'll see again and again.</strong>{" "}
              The <em>nth-term test</em> is a one-way street: if the terms
              of the series do <em>not</em> approach zero, the series
              diverges. But terms going to zero does <em>not</em> prove
              convergence (harmonic series, again). Treating the nth-term
              test as a green light for convergence is the single most
              common error in the chapter. The <em>alternating series
              error bound</em> is the size of the <em>next</em> term you
              would have written, not the last one you included — a
              subscript mistake that swaps "term 5" for "term 6" loses
              full credit on a five-point question. <em>Absolute</em>{" "}
              versus <em>conditional</em> convergence: a series with sign
              flips can converge even when the all-positive version
              diverges (alternating harmonic), and that distinction
              matters because conditional convergence is fragile —
              rearranging the terms can change the sum. For power
              series, <em>always check the endpoints</em>: the ratio
              test gives you the open interval, but the endpoints are
              silent under the ratio test (the limit is exactly{" "}
              <InlineMath math="1" />) and must be plugged in by hand,
              and they can each independently converge or diverge.
              Finally, a huge number of series on exams are
              dressed-up geometric series or p-series in disguise — look
              for the pattern <em>before</em> you reach for an exotic
              test.
            </p>

            <p>
              <strong>How to read this chapter.</strong> The list of
              convergence tests looks intimidating because it is a list:
              integral, direct comparison, limit comparison, alternating,
              ratio, root. Memorizing the tests is not the goal.
              Memorizing the <em>trigger</em> for each test is the goal.
              "I see factorials and powers of <InlineMath math="a" />" —
              ratio test. "I see alternating signs" — AST. "I see a
              rational function in <InlineMath math="n" />" — limit
              comparison with the p-series of matching leading order. "I
              see <InlineMath math="\ln n" /> mixed with{" "}
              <InlineMath math="n" />" — integral test with{" "}
              <InlineMath math="u = \ln x" />. Each section below will
              re-state these triggers, in different framings, more than
              once. That is on purpose. By the time you finish §8.4 you
              should be able to look at a series and reach for the right
              tool in under five seconds, the same way a mechanic reaches
              for the right wrench without thinking.
            </p>

            <p>
              <strong>One more thing before you start.</strong> Power
              series (§8.5 onward) are the climax of the chapter, and
              they are also where the chapter starts to feel like magic.
              The idea that any smooth function — your old friends{" "}
              <InlineMath math="\sin" />, <InlineMath math="\cos" />,{" "}
              <InlineMath math="e^x" />, <InlineMath math="\ln" />,{" "}
              <InlineMath math="\arctan" /> — can be written as a
              polynomial of infinite degree, and that you can compute
              with these "infinite polynomials" the same way you would
              compute with ordinary polynomials (multiply, differentiate,
              integrate term-by-term), is one of the most useful insights
              in undergraduate mathematics. It is how every numerical
              calculation of <InlineMath math="\sin(2.7)" /> or{" "}
              <InlineMath math="e^{1.4}" /> on a calculator or computer
              ultimately gets done. Stick with the chapter long enough to
              see why; the convergence-test bookkeeping in §§8.3–8.4 is
              the price of admission.
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
              name="Geometric series"
              latex="\sum_{n=0}^{\infty} a r^n = \frac{a}{1-r},\;\;|r|<1"
              variables={[
                {
                  symbol: "a",
                  meaning: "first term of the series (the n = 0 term)",
                },
                {
                  symbol: "r",
                  meaning:
                    "common ratio — each term is r times the previous one. |r| < 1 means terms shrink fast enough to total a finite sum",
                },
              ]}
              whenToUse="The most predictable type of series. Each term is a fixed multiple of the previous. Spot it when you see something like (1/2)ⁿ, (3/4)ⁿ, or any constant multiplier. The sum formula a/(1−r) only works for |r| < 1; if |r| ≥ 1, the terms don't shrink fast enough (or grow!) and the series diverges. Common pitfall: many series START at n = 1, not n = 0 — adjust by subtracting the missing first term, or pull out a factor of r."
            />
            <MathFormula
              accentColor={ACCENT}
              name="p-series test"
              latex="\sum_{n=1}^{\infty} \frac{1}{n^p} \text{ converges iff } p > 1"
              variables={[
                {
                  symbol: "p",
                  meaning:
                    "exponent on n in the denominator. p = 1 (harmonic) is the borderline that diverges; p > 1 converges",
                },
              ]}
              whenToUse="Reference benchmark you'll use over and over. Memorize the threshold: terms have to shrink FASTER than 1/n for the sum to be finite. That's why 1/n² converges but 1/n doesn't — even though both have terms going to zero, only one shrinks fast enough. Use as the comparison for direct/limit comparison tests on rational expressions."
            />
            <MathFormula
              accentColor={ACCENT}
              name="Ratio test"
              latex="L = \lim_{n\to\infty}\Bigl|\frac{a_{n+1}}{a_n}\Bigr|; \;\;L<1\Rightarrow \text{conv.}"
              variables={[
                {
                  symbol: "L < 1",
                  meaning:
                    "terms eventually shrink by a constant factor — like geometric with |r| < 1, converges absolutely",
                },
                {
                  symbol: "L > 1",
                  meaning: "terms eventually grow — diverges",
                },
                {
                  symbol: "L = 1",
                  meaning:
                    "borderline — test gives no information (try a different test like comparison or integral)",
                },
              ]}
              whenToUse="Best when terms involve factorials (n!), exponentials (a^n), or anything else where the n+1 vs n ratio simplifies cleanly. The intuition: if successive terms shrink by a fixed factor < 1, the series behaves like a geometric and converges. If they grow, it diverges. If the ratio approaches 1, the test is silent — use comparison or integral test instead."
            />
            <MathFormula
              accentColor={ACCENT}
              name="Alternating series test (AST)"
              latex="\sum (-1)^n b_n \text{ converges if } b_n \downarrow 0"
              variables={[
                {
                  symbol: "b_n",
                  meaning:
                    "positive, eventually monotonically decreasing, going to zero. Both conditions matter — pure 'goes to zero' isn't enough",
                },
              ]}
              whenToUse="Sign-alternating series get convergence almost for free: as long as the term magnitudes shrink monotonically to zero, the partial sums oscillate inside an ever-smaller window and pin down a limit. Bonus: |error after n terms| ≤ b_{n+1} — that's the FIRST OMITTED term, not the last included. Easy to flip on exams."
            />
            <MathFormula
              accentColor={ACCENT}
              name="Power series radius"
              latex="R = \frac{1}{\lim_{n\to\infty}|c_{n+1}/c_n|}"
              variables={[
                {
                  symbol: "c_n",
                  meaning:
                    "coefficient of x^n in the series Σ c_n (x − a)^n. The 'shape' of the series, independent of x",
                },
                {
                  symbol: "R",
                  meaning:
                    "radius of convergence — series converges for all x within distance R of the center, diverges outside",
                },
              ]}
              whenToUse="A power series is geometric in spirit but with x as a variable, so where it converges depends on x. The ratio test on |c_{n+1} (x − a) / c_n| = |x − a|·(c_{n+1}/c_n) gives a condition |x − a| < R. Inside that radius (open interval), it converges. Outside, it diverges. AT the endpoints (|x − a| = R), it's case-by-case — test by hand, plug each in. The endpoints of the convergence interval can each independently converge or diverge."
            />
            <MathFormula
              accentColor={ACCENT}
              name="Taylor series about a"
              latex="f(x) = \sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^n"
              variables={[
                {
                  symbol: "a",
                  meaning:
                    "center of the expansion — the x-value around which we're approximating. a = 0 gives the special case called Maclaurin",
                },
                {
                  symbol: "f^{(n)}(a)",
                  meaning:
                    "n-th derivative of f, evaluated at the center a. The n-th coefficient is this divided by n!",
                },
              ]}
              whenToUse="The idea: any smooth f can be approximated near x = a by a polynomial that matches f, f', f'', f''', … at x = a. The first-order truncation is just the tangent line. Adding more terms makes the polynomial 'curl' to follow f more closely. Memorize the Maclaurin series for e^x, sin, cos, ln(1+x), 1/(1−x) — many other series come from substituting into these."
            />
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Sections
          </h3>

          <ChapterSection
            id="s8-1"
            number="8.1"
            title="Sequences"
            accentColor={ACCENT}
            blurb="A list a₁, a₂, a₃ … . Question: does it converge to a limit?"
          >
            <Why>
              A <strong>sequence</strong> is just a list of numbers in a
              definite order: a first number{" "}
              <InlineMath math="a_1" />, a second number{" "}
              <InlineMath math="a_2" />, a third <InlineMath math="a_3" />,
              and so on forever. You can specify a sequence in three common
              ways — by a closed-form formula (<InlineMath math="a_n = 1/n^2" />),
              by a recursive rule (<InlineMath math="a_1 = 1" />,{" "}
              <InlineMath math="a_{n+1} = \sqrt{2 + a_n}" />), or by simply
              listing terms (<InlineMath math="1, 1, 2, 3, 5, 8, 13, \dots" />{" "}
              for the Fibonacci numbers). What makes a sequence different from
              an arbitrary list is that it is indexed by the positive integers
              — there is a meaningful "next term" question always on the
              table. The only question we will care about for this chapter is
              what happens to the terms in the limit as the index goes to
              infinity.
            </Why>

            <Why>
              Picture the sequence as a row of stepping stones laid out forever
              across a pond. The first stone is at height{" "}
              <InlineMath math="a_1" />, the next is at height{" "}
              <InlineMath math="a_2" />, and so on. If you walk far enough out
              along the row, one of two things can happen. The heights might
              all huddle around one specific value — say, every stone past
              the thousandth is within a hair's breadth of height{" "}
              <InlineMath math="3" />. In that case the sequence{" "}
              <strong>converges</strong> to <InlineMath math="3" />, and we
              write <InlineMath math="\lim_{n\to\infty} a_n = 3" /> or{" "}
              <InlineMath math="a_n \to 3" />. Or the heights might keep
              wandering — climbing without bound to{" "}
              <InlineMath math="+\infty" />, falling to{" "}
              <InlineMath math="-\infty" />, or oscillating forever between
              two values without ever settling. In that case the sequence{" "}
              <strong>diverges</strong>. Convergence is the cooperative
              behavior; divergence is everything else.
            </Why>

            <Why>
              <strong>Why is this the first section?</strong> Because a series
              — the infinite sum that the rest of the chapter is built around
              — is secretly nothing more than a sequence in disguise. When
              we write <InlineMath math="a_1 + a_2 + a_3 + \dots" />, what we
              really mean is the sequence of <em>partial sums</em>{" "}
              <InlineMath math="S_n = a_1 + a_2 + \dots + a_n" />, and we ask
              whether <em>that</em> sequence converges. So every convergence
              question for the rest of the chapter ultimately reduces to a
              sequence convergence question one floor up. Getting good at
              "does this list settle?" right now is exactly the skill you will
              lean on for every test in §§8.3–8.4. Take this section seriously
              even though it looks like warm-up.
            </Why>

            <Why>
              <strong>Quick refresher: what does a limit actually mean?</strong>{" "}
              When we say <InlineMath math="a_n \to L" />, the formal
              definition is that for any tolerance <InlineMath math="\varepsilon > 0" />{" "}
              you set in advance — no matter how strict — there exists some
              index <InlineMath math="N" /> beyond which every single term{" "}
              <InlineMath math="a_n" /> sits within distance{" "}
              <InlineMath math="\varepsilon" /> of <InlineMath math="L" />.
              Translated to English: you cannot make me a tolerance so tight
              that the sequence eventually fails to live inside it. Practical
              consequence: convergence is a <em>tail</em> property — it
              depends only on what the sequence does far out, not on any
              finite block of weird behavior at the start. Throwing away the
              first ten million terms does not change whether or where a
              sequence converges.
            </Why>

            <Why>
              <strong>Tool #1 — Limit laws.</strong> Because each sequence
              term is just a number, you can add, multiply, divide, and
              compose limits the same way you do for ordinary functions of a
              real variable. If <InlineMath math="a_n \to A" /> and{" "}
              <InlineMath math="b_n \to B" />, then{" "}
              <InlineMath math="a_n + b_n \to A + B" />,{" "}
              <InlineMath math="a_n - b_n \to A - B" />,{" "}
              <InlineMath math="a_n b_n \to AB" />, and{" "}
              <InlineMath math="a_n/b_n \to A/B" /> (provided{" "}
              <InlineMath math="B \ne 0" />). For continuous functions{" "}
              <InlineMath math="f" />, <InlineMath math="f(a_n) \to f(A)" />.
              Algebra still works at infinity. The catch is the
              indeterminate forms — <InlineMath math="\infty - \infty" />,{" "}
              <InlineMath math="0 \cdot \infty" />,{" "}
              <InlineMath math="\infty/\infty" />,{" "}
              <InlineMath math="0/0" />, <InlineMath math="1^\infty" />,{" "}
              <InlineMath math="0^0" />, <InlineMath math="\infty^0" /> —
              where the limit laws fail to give a definitive answer and you
              need a sharper tool.
            </Why>

            <Why>
              <strong>Tool #2 — Treat n as continuous.</strong> A sequence is
              only defined at positive integers, but its limit as{" "}
              <InlineMath math="n \to \infty" /> is determined entirely by
              the function's behavior far out. So if you can replace{" "}
              <InlineMath math="n" /> with a real variable{" "}
              <InlineMath math="x" /> and compute{" "}
              <InlineMath math="\lim_{x\to\infty}f(x)" /> for the resulting
              function of a real variable, that limit is the same as the
              sequence limit. Why does this matter so much? Because now every
              tool from real-variable calculus is on the table —
              <strong>most importantly L'Hôpital's rule</strong>. Any time
              you hit an <InlineMath math="\infty/\infty" /> or{" "}
              <InlineMath math="0/0" /> race between a polynomial, an
              exponential, and a logarithm, you can differentiate the
              numerator and denominator separately and try again. Keep
              applying L'Hôpital until one side wins outright or until you
              can simplify algebraically.
            </Why>

            <Why>
              <strong>Tool #3 — The growth hierarchy.</strong> This is the
              single most useful fact in §8.1 and you should memorize it
              cold:
            </Why>
            <Eq>ln n  &lt;&lt;  n^p  &lt;&lt;  a^n  &lt;&lt;  n!   (as n → ∞, for p &gt; 0 and a &gt; 1)</Eq>
            <Why>
              In words: logarithms grow slower than any positive power of{" "}
              <InlineMath math="n" />; powers of <InlineMath math="n" /> grow
              slower than any exponential with base greater than 1;
              exponentials grow slower than factorials. The double-arrow{" "}
              <InlineMath math="\ll" /> means "is dominated by" — the ratio
              of the slower thing to the faster thing goes to zero. So{" "}
              <InlineMath math="\ln n / n \to 0" />,{" "}
              <InlineMath math="n^{100}/2^n \to 0" />,{" "}
              <InlineMath math="2^n/n! \to 0" />. Reverse the roles and the
              limit is <InlineMath math="\infty" />. The hierarchy means
              that a vast number of sequence-limit problems collapse the
              moment you spot which class of growth is on top and which is
              on bottom.
            </Why>

            <Why>
              <strong>A handful of "must-know" limits</strong> that come up
              constantly and are worth memorizing as one-liners:{" "}
              <InlineMath math="\lim 1/n^p = 0" /> for{" "}
              <InlineMath math="p > 0" />;{" "}
              <InlineMath math="\lim a^n = 0" /> for{" "}
              <InlineMath math="|a| < 1" /> and{" "}
              <InlineMath math="\to \pm \infty" /> for{" "}
              <InlineMath math="|a| > 1" /> (the borderline{" "}
              <InlineMath math="a = 1" /> stays at 1; <InlineMath math="a = -1" />{" "}
              oscillates between <InlineMath math="\pm 1" /> and so
              diverges);{" "}
              <InlineMath math="\lim \sqrt[n]{n} = 1" /> (logs of large{" "}
              <InlineMath math="n" /> divided by <InlineMath math="n" /> go
              to zero, then exponentiate);{" "}
              <InlineMath math="\lim \sqrt[n]{a} = 1" /> for any{" "}
              <InlineMath math="a > 0" />; and the classic{" "}
              <InlineMath math="\lim (1 + x/n)^n = e^x" /> — one of the
              definitions of the exponential. Any time you see the shape{" "}
              <InlineMath math="(1 + \text{small})^{\text{large}}" /> you
              should immediately think "is this an{" "}
              <InlineMath math="e^{\text{something}}" />?" and reach for
              this identity.
            </Why>

            <Why>
              <strong>Mini-example 1 (rational expression).</strong> Find{" "}
              <InlineMath math="\lim_{n \to \infty} \dfrac{3n^2 + 5}{n^2 + 2n}" />.
            </Why>
            <Why>
              Top and bottom both blow up, so it's an{" "}
              <InlineMath math="\infty/\infty" /> race between two
              polynomials of the same degree (2). The standard trick: divide
              every term in the numerator <em>and</em> every term in the
              denominator by the highest power of <InlineMath math="n" />{" "}
              that appears anywhere (here <InlineMath math="n^2" />). This
              kills everything except the dominant terms in the limit and
              exposes what really matters as <InlineMath math="n" /> grows.
            </Why>
            <BlockMath math="a_n = \dfrac{3n^2 + 5}{n^2 + 2n} = \dfrac{3 + 5/n^2}{1 + 2/n}" />
            <Why>
              Now read off the limit. As <InlineMath math="n \to \infty" />,
              every <InlineMath math="1/n" /> and{" "}
              <InlineMath math="1/n^2" /> piece vanishes, leaving the
              ratio of the leading coefficients:{" "}
              <InlineMath math="3/1 = 3" />. So{" "}
              <InlineMath math="a_n \to 3" />. Sanity check by hand: plug{" "}
              <InlineMath math="n = 100" />, getting{" "}
              <InlineMath math="(30005)/(10200) \approx 2.942" /> — yes,
              creeping toward 3 from below. The shortcut you can use on
              every rational-in-<InlineMath math="n" /> limit going forward:
              the limit is just the ratio of leading coefficients when
              numerator and denominator have the same degree; it is 0 if
              the denominator wins on degree; and it is{" "}
              <InlineMath math="\pm \infty" /> (divergent) if the
              numerator wins.
            </Why>

            <Why>
              <strong>Mini-example 2 (L'Hôpital flavor).</strong> Find{" "}
              <InlineMath math="\lim_{n \to \infty} \dfrac{n^2}{e^n}" />.
            </Why>
            <Why>
              By the growth hierarchy this is "polynomial over exponential"
              — exponential wins, limit is <InlineMath math="0" />, done.
              But let's confirm with L'Hôpital so you see the mechanism. The
              form is <InlineMath math="\infty/\infty" />, so replace{" "}
              <InlineMath math="n" /> by the real variable{" "}
              <InlineMath math="x" /> and differentiate the top and bottom
              independently:
            </Why>
            <BlockMath math="\lim_{x \to \infty}\dfrac{x^2}{e^x} \stackrel{\text{H}}{=} \lim_{x \to \infty}\dfrac{2x}{e^x} \stackrel{\text{H}}{=} \lim_{x \to \infty}\dfrac{2}{e^x} = 0" />
            <Why>
              Each application of L'Hôpital lowered the polynomial's degree
              by 1 while the exponential stood still — after two
              applications the numerator was a constant and the exponential
              walked away with it. This pattern (apply L'Hôpital{" "}
              <InlineMath math="k" /> times to a degree-<InlineMath math="k" />{" "}
              polynomial in the top, killing it) is the rigorous version of
              "exponentials beat polynomials" from the hierarchy. The same
              maneuver works in the opposite direction:{" "}
              <InlineMath math="\lim_{n\to\infty} \ln n / n^{0.01} = 0" />{" "}
              — one application of L'Hôpital gives{" "}
              <InlineMath math="(1/n)/(0.01 n^{-0.99}) = 100/n^{0.01} \to 0" />.
            </Why>

            <Why>
              <strong>Mini-example 3 (1+1/n disguise).</strong> Find{" "}
              <InlineMath math="\lim_{n \to \infty}\left(\dfrac{n + 3}{n}\right)^{2n}" />.
            </Why>
            <Why>
              Inside the parentheses, <InlineMath math="(n+3)/n = 1 + 3/n" />.
              So the sequence is <InlineMath math="(1 + 3/n)^{2n} = \bigl[(1 + 3/n)^n\bigr]^2" />.
              By the must-know limit{" "}
              <InlineMath math="(1 + a/n)^n \to e^a" />, the inner part
              tends to <InlineMath math="e^3" />, and we square it:
            </Why>
            <BlockMath math="\lim_{n \to \infty}\left(\dfrac{n + 3}{n}\right)^{2n} = (e^3)^2 = e^6 \approx 403.4" />
            <Why>
              The play: any time you see "(1 + something-small)^(something
              large)," the moves are (a) get the inside into the form{" "}
              <InlineMath math="1 + a/n" />, (b) get the outside exponent
              into the form of an integer times <InlineMath math="n" />,
              and (c) read off <InlineMath math="e^a" /> raised to whatever
              extra exponent. Skipping that algebra is how students wreck
              an otherwise-easy problem.
            </Why>

            <Why>
              <strong>Tool #4 — Monotone Bounded Theorem.</strong> A
              sequence that is <em>increasing and bounded above</em> (every
              term is at most some fixed ceiling) must converge to some
              limit at most that ceiling. Same for <em>decreasing and
              bounded below</em>. The picture: every step goes up, but you
              are constrained by a ceiling overhead, so the steps must
              eventually bunch up against some height. They cannot keep
              rising past the ceiling, and (because the sequence is
              monotone) they cannot bounce back down. So they must
              converge. This is one of those theorems whose power lies in
              what it does not require: it tells you a limit <em>exists</em>{" "}
              without ever telling you what number the limit is. That is
              exactly the right tool for sequences defined recursively
              (where you cannot write a closed form).
            </Why>

            <Why>
              To use it: check monotonicity (compute{" "}
              <InlineMath math="a_{n+1} - a_n" /> and show it has constant
              sign, or compute <InlineMath math="a_{n+1}/a_n" /> and
              compare to 1 when terms are positive). Check boundedness
              (find an obvious ceiling, usually by induction). Conclude
              convergence. Then to find the <em>value</em> of the limit{" "}
              <InlineMath math="L" />: take limits on both sides of the
              recursive rule and solve the resulting algebraic equation. For
              example, if <InlineMath math="a_1 = 1" /> and{" "}
              <InlineMath math="a_{n+1} = \sqrt{2 + a_n}" />, you check
              that <InlineMath math="a_n" /> is increasing (it is) and
              bounded above by 2 (it is, by induction). Then the limit{" "}
              <InlineMath math="L" /> satisfies{" "}
              <InlineMath math="L = \sqrt{2 + L}" />, so{" "}
              <InlineMath math="L^2 = 2 + L" />, so{" "}
              <InlineMath math="L^2 - L - 2 = 0" />, so{" "}
              <InlineMath math="L = 2" /> (the positive root). The negative
              root <InlineMath math="L = -1" /> is rejected because the
              sequence is positive.
            </Why>

            <Why>
              <strong>Squeeze theorem.</strong> The little brother of the
              monotone bounded theorem and equally useful: if you can pin{" "}
              <InlineMath math="a_n" /> between two sequences{" "}
              <InlineMath math="b_n \le a_n \le c_n" /> that both converge
              to the same limit <InlineMath math="L" />, then{" "}
              <InlineMath math="a_n \to L" /> too. The classic application
              is sin and cos in numerators:{" "}
              <InlineMath math="|\sin n| \le 1" />, so{" "}
              <InlineMath math="-1/n \le \sin(n)/n \le 1/n" />, and both
              outer sequences go to 0, so <InlineMath math="\sin(n)/n \to 0" />.
              You did not need to know anything about what{" "}
              <InlineMath math="\sin(n)" /> "does" at integer{" "}
              <InlineMath math="n" /> — only that it is bounded.
            </Why>

            <Why>
              <strong>How to read a sequence-limit problem in 5 seconds.</strong>{" "}
              Rational expression in <InlineMath math="n" />, no exotic
              functions? Divide top and bottom by the highest power. Mix of
              polynomial, exponential, factorial — only one of each
              appearing? Quote the growth hierarchy and stop. A logarithm
              over a power of <InlineMath math="n" />, or any{" "}
              <InlineMath math="\infty/\infty" /> that algebra does not
              dissolve? Treat <InlineMath math="n" /> as continuous and
              L'Hôpital. Anything that looks like{" "}
              <InlineMath math="(1 + a/n)^n" />? It is{" "}
              <InlineMath math="e^a" />. <InlineMath math="\sqrt[n]{n}" />{" "}
              or <InlineMath math="\sqrt[n]{\text{constant}}" />? Both
              equal 1 in the limit. Bounded numerator (trig, signed)
              divided by something growing without bound? Squeeze
              theorem. Recursive definition? Monotone bounded plus
              fixed-point equation.
            </Why>

            <Why>
              <strong>How this connects to the rest of the chapter.</strong>{" "}
              Section 8.2 will define a series as the limit of the
              sequence of partial sums, so every convergence question
              becomes a sequence limit question of the form "does{" "}
              <InlineMath math="S_n" /> approach something finite?" The
              growth hierarchy you just memorized is exactly what will
              power the ratio test in §8.4 (factorials beat exponentials
              beat powers — that asymmetry is why the ratio test can
              detect convergence so cleanly). The monotone bounded theorem
              is the secret engine behind the integral test and direct
              comparison test (a partial sum of positive terms is
              automatically increasing, so it converges iff it is
              bounded). Every single tool you learned in this section
              will resurface in §§8.3–8.4 with a new label.
            </Why>
          </ChapterSection>

          <ChapterSection
            id="s8-2"
            number="8.2"
            title="Series"
            accentColor={ACCENT}
            blurb="Run the sequence of partial sums S_n = a_1 + … + a_n; the series converges iff S_n converges."
          >
            <Why>
              An <strong>infinite series</strong> is the attempt to add up
              infinitely many numbers in a fixed order:{" "}
              <InlineMath math="a_1 + a_2 + a_3 + a_4 + \dots" />, written
              compactly as <InlineMath math="\sum_{n=1}^{\infty} a_n" />. On
              the face of it the act is impossible, because addition is a
              two-input operation that you have to <em>finish</em>, and
              infinitely many additions never finish. The trick that gives
              the symbol meaning is to refuse to do all the additions at
              once. Instead, take a snapshot of the running total after each
              new term arrives and watch how the snapshots evolve.
            </Why>

            <BlockMath math="S_n = a_1 + a_2 + \dots + a_n" />

            <Why>
              The quantity <InlineMath math="S_n" /> is called the{" "}
              <strong>n-th partial sum</strong>. It is an ordinary, finite
              sum — no metaphysics. As <InlineMath math="n" /> grows,{" "}
              <InlineMath math="S_n" /> traces out a perfectly ordinary
              sequence of real numbers. The infinite series is, by
              definition, the limit of that sequence. If{" "}
              <InlineMath math="S_n \to S" /> for some finite{" "}
              <InlineMath math="S" />, we say the series{" "}
              <strong>converges</strong> and we call <InlineMath math="S" />{" "}
              the <em>sum</em> of the series. If <InlineMath math="S_n" />{" "}
              fails to settle — it diverges to <InlineMath math="\pm\infty" />,
              or it oscillates without limit — we say the series{" "}
              <strong>diverges</strong>. There is no third option.
            </Why>

            <Why>
              Translate that back into the picture from the chapter
              opener: a series is a hiker climbing a staircase whose
              steps shrink, and "converges" means the hiker's altitude
              approaches a finite ceiling. Convergence is a statement
              about the running total, not about the individual terms.
              That distinction matters because it is the source of one
              of the most common errors in the chapter (see the nth-term
              test below).
            </Why>

            <Why>
              <strong>The friendliest case: geometric series.</strong> A
              series is <em>geometric</em> when each term is a fixed
              multiple of the previous:{" "}
              <InlineMath math="a + ar + ar^2 + ar^3 + \dots = \sum_{n=0}^\infty ar^n" />.
              Here <InlineMath math="a" /> is the first term and{" "}
              <InlineMath math="r" /> is the common ratio. The reason
              geometric series get such elaborate billing is that they
              are essentially the only series where you can write down
              the exact value of the partial sum in closed form, and
              from that closed form you can read off the convergence
              behavior directly.
            </Why>

            <Why>
              <strong>Deriving the partial-sum formula.</strong> Start
              with the partial sum and the same sum multiplied by{" "}
              <InlineMath math="r" />:
            </Why>
            <BlockMath math="S_n = a + ar + ar^2 + \dots + ar^n" />
            <BlockMath math="r S_n = ar + ar^2 + ar^3 + \dots + ar^{n+1}" />
            <Why>
              Subtract: every middle term cancels, leaving only the
              first term of the first sum and the last term of the
              second:
            </Why>
            <BlockMath math="S_n - r S_n = a - a r^{n+1} \;\Longrightarrow\; S_n = a \cdot \dfrac{1 - r^{n+1}}{1 - r}" />
            <Why>
              That formula is the entire geometric-series story compressed
              into one line. Whether <InlineMath math="S_n" /> settles as{" "}
              <InlineMath math="n \to \infty" /> depends entirely on what{" "}
              <InlineMath math="r^{n+1}" /> does. If{" "}
              <InlineMath math="|r| < 1" />, the powers{" "}
              <InlineMath math="r^{n+1}" /> shrink to zero (because the
              base has magnitude less than 1, repeated multiplication
              decimates it), and{" "}
              <InlineMath math="S_n \to a/(1 - r)" />. That is the famous
              closed form for the infinite sum of a convergent geometric
              series. If <InlineMath math="|r| \ge 1" />, the terms{" "}
              <InlineMath math="ar^n" /> do not shrink — they either stay
              the same magnitude or grow — and the partial sums cannot
              possibly converge. So you have not just memorized a rule;
              you have <em>derived</em> the condition{" "}
              <InlineMath math="|r| < 1" /> from the algebra.
            </Why>

            <Why>
              <strong>Re-indexing trap.</strong> The closed form{" "}
              <InlineMath math="a/(1 - r)" /> uses <em>the first term you
              actually include</em> as <InlineMath math="a" />, regardless
              of where the index starts. So{" "}
              <InlineMath math="\sum_{n=0}^\infty (1/2)^n = 1/(1 - 1/2) = 2" />,
              but <InlineMath math="\sum_{n=1}^\infty (1/2)^n" /> drops the
              <InlineMath math="n = 0" /> term <InlineMath math="(1/2)^0 = 1" />,
              giving <InlineMath math="2 - 1 = 1" />. Equivalently you can
              factor: <InlineMath math="\sum_{n=1}^\infty (1/2)^n = (1/2) \sum_{n=0}^\infty (1/2)^n = 1/2 \cdot 2 = 1" />.
              Either way, the answer for "starting at <InlineMath math="n=1" />"
              is half of "starting at <InlineMath math="n=0" />" in this
              example. Always identify what the actual first term is
              before plugging into <InlineMath math="a/(1-r)" />.
            </Why>

            <Why>
              <strong>Mini-example 1 (basic geometric).</strong> Compute{" "}
              <InlineMath math="\sum_{n=0}^\infty 3 \cdot (2/3)^n" />.
            </Why>
            <Why>
              First term is <InlineMath math="a = 3" /> (the{" "}
              <InlineMath math="n = 0" /> term is{" "}
              <InlineMath math="3 \cdot 1 = 3" />); common ratio is{" "}
              <InlineMath math="r = 2/3" />, which has magnitude less than
              1, so the series converges:
            </Why>
            <BlockMath math="\sum_{n=0}^\infty 3 \cdot (2/3)^n = \dfrac{3}{1 - 2/3} = \dfrac{3}{1/3} = 9" />
            <Why>
              Sanity check the first few partial sums:{" "}
              <InlineMath math="3, 3 + 2 = 5, 5 + 4/3 \approx 6.33" />,
              then <InlineMath math="\approx 7.22, 7.81, 8.21, \dots" />{" "}
              — climbing toward 9 from below, as expected.
            </Why>

            <Why>
              <strong>The nth-term test — a free divergence detector.</strong>{" "}
              If <InlineMath math="\lim_{n \to \infty} a_n \ne 0" />, the
              series <InlineMath math="\sum a_n" /> diverges. The reasoning
              is brutal: if every chunk you are adding has size at least,
              say, <InlineMath math="0.5" /> forever, your running total
              jumps up by at least <InlineMath math="0.5" /> at every
              step and so cannot possibly settle to a finite limit. So{" "}
              <strong>terms going to zero is a necessary condition for any
              hope of convergence</strong>.
            </Why>

            <Why>
              <strong>And here is the trap.</strong> Terms going to zero is
              necessary but <em>not sufficient</em>. The harmonic series{" "}
              <InlineMath math="\sum 1/n" /> has terms{" "}
              <InlineMath math="1/n \to 0" />, yet the sum diverges. So
              passing the nth-term test does <em>not</em> mean the series
              converges — it only means the test failed to detect
              divergence. Treating the nth-term test as a convergence
              certificate is the most common rookie error in the chapter
              and you will lose easy points to it on exams. Restated for
              emphasis: the nth-term test only ever returns one
              conclusion, "diverges," or no conclusion at all. It never
              concludes "converges."
            </Why>

            <Why>
              <strong>Mini-example 2 (nth-term divergence).</strong>{" "}
              Does <InlineMath math="\sum_{n=1}^\infty \dfrac{n}{2n + 1}" />{" "}
              converge or diverge?
            </Why>
            <Why>
              Quick check the terms:{" "}
              <InlineMath math="a_n = n/(2n + 1) \to 1/2" /> as{" "}
              <InlineMath math="n \to \infty" /> (divide top and bottom by{" "}
              <InlineMath math="n" />; we're back to a §8.1 limit). The
              terms approach <InlineMath math="1/2" />, not zero, so by
              the nth-term test the series diverges immediately. No
              fancy test needed. You should always sanity-check{" "}
              <InlineMath math="\lim a_n" /> before attempting any
              other convergence analysis — it is the cheapest move and
              catches a surprising number of problems.
            </Why>

            <Why>
              <strong>Telescoping series — the second case you can sum
              exactly.</strong> A telescoping series is one where each term
              can be written as a difference{" "}
              <InlineMath math="a_n = b_n - b_{n+k}" /> for some sequence{" "}
              <InlineMath math="b_n" /> and some shift{" "}
              <InlineMath math="k" />. When you write out the partial sum,
              almost every term cancels with an opposite-signed term a few
              positions later, like the segments of a sliding telescope
              collapsing into themselves. What survives is a small handful
              of "boundary" terms at the beginning and at the end. Take{" "}
              <InlineMath math="N \to \infty" />, the end-terms vanish (if{" "}
              <InlineMath math="b_n \to 0" />), and you are left with
              just the beginning terms.
            </Why>

            <Why>
              The standard trick to <em>create</em> a telescoping form is
              partial fractions: if your term is a fraction whose
              denominator factors as <InlineMath math="n(n + k)" /> for
              some small integer <InlineMath math="k" />, decompose using
              partial fractions and the differences will line up
              automatically. The wider the shift <InlineMath math="k" />,
              the more boundary terms survive.
            </Why>

            <Why>
              <strong>Mini-example 3 (telescoping with shift 2).</strong>{" "}
              Compute <InlineMath math="\sum_{n=1}^{\infty} \dfrac{2}{n(n+2)}" />.
            </Why>
            <Why>
              Step 1 — split each term using partial fractions. We want
              constants <InlineMath math="A" /> and <InlineMath math="B" />{" "}
              with <InlineMath math="2/(n(n+2)) = A/n + B/(n+2)" />.
              Multiplying through gives{" "}
              <InlineMath math="2 = A(n + 2) + Bn" />. Setting{" "}
              <InlineMath math="n = 0" />: <InlineMath math="2 = 2A" />,
              so <InlineMath math="A = 1" />. Setting{" "}
              <InlineMath math="n = -2" />:{" "}
              <InlineMath math="2 = -2B" />, so{" "}
              <InlineMath math="B = -1" />. Therefore:
            </Why>
            <BlockMath math="\dfrac{2}{n(n+2)} = \dfrac{1}{n} - \dfrac{1}{n+2}" />
            <Why>
              Step 2 — write out the partial sum <InlineMath math="S_N" />.
              With a shift of <em>2</em> (not 1), terms cancel with terms
              two positions later, so you need to be careful: the first
              and second "positive" terms have no partner among the first
              two "negatives," and the last two "negatives" never get a
              positive partner. Write enough terms to see the pattern:
            </Why>
            <Eq>S_N = (1 − 1/3) + (1/2 − 1/4) + (1/3 − 1/5) + (1/4 − 1/6) + ... + (1/N − 1/(N+2))</Eq>
            <Why>
              The <InlineMath math="-1/3" /> from the first parenthesis
              cancels the <InlineMath math="+1/3" /> from the third; the{" "}
              <InlineMath math="-1/4" /> from the second cancels the{" "}
              <InlineMath math="+1/4" /> from the fourth; and so on, all
              the way through. What survives is the first two positive
              fractions (which never get cancelled because their negative
              partners would be at indices 0 and −1, off the bottom of
              the sum) and the last two negative fractions (whose
              positive partners would be at indices <InlineMath math="N+1" />{" "}
              and <InlineMath math="N+2" />, off the top of the sum):
            </Why>
            <Eq>S_N = 1 + 1/2 − 1/(N+1) − 1/(N+2)</Eq>
            <Why>
              Step 3 — take <InlineMath math="N \to \infty" />. The two
              negative tail-terms <InlineMath math="1/(N+1)" /> and{" "}
              <InlineMath math="1/(N+2)" /> both go to zero, leaving:
            </Why>
            <BlockMath math="\sum_{n=1}^{\infty}\dfrac{2}{n(n+2)} = 1 + \dfrac{1}{2} = \dfrac{3}{2}" />
            <Why>
              Sanity check: the terms are all positive, so the partial
              sums are increasing. The first few are{" "}
              <InlineMath math="2/3 \approx 0.67" />,{" "}
              <InlineMath math="1.0" />, <InlineMath math="1.2" />,{" "}
              <InlineMath math="1.31" />, <InlineMath math="1.39" />,{" "}
              <InlineMath math="1.44" /> — climbing toward 1.5 from
              below. ✓ The lesson on shift-of-<InlineMath math="k" />{" "}
              telescoping: you always end up with the first{" "}
              <InlineMath math="k" /> positive terms surviving at the
              bottom and the last <InlineMath math="k" /> negative terms
              going to zero at the top.
            </Why>

            <SeriesPartialSumViz defaultSeries="geometric-half" accentColor={ACCENT} />

            <Why>
              <strong>Mini-example 4 (telescoping with logs).</strong>{" "}
              Show that{" "}
              <InlineMath math="\sum_{n=1}^\infty \ln\left(\dfrac{n}{n+1}\right)" />{" "}
              diverges.
            </Why>
            <Why>
              Use log laws to split: <InlineMath math="\ln(n/(n+1)) = \ln n - \ln(n+1)" />.
              Now write out the partial sum and watch the telescope:
            </Why>
            <Eq>S_N = (ln 1 − ln 2) + (ln 2 − ln 3) + (ln 3 − ln 4) + ... + (ln N − ln(N+1))</Eq>
            <Why>
              Every <InlineMath math="\ln k" /> for{" "}
              <InlineMath math="k = 2, 3, \dots, N" /> appears once
              positive and once negative — they all cancel — leaving only
              <InlineMath math="S_N = \ln 1 - \ln(N+1) = -\ln(N+1)" />.
              As <InlineMath math="N \to \infty" />, this goes to{" "}
              <InlineMath math="-\infty" />, so the series diverges. The
              reason the telescope did not "save" the series is that the
              tail piece <InlineMath math="-\ln(N+1)" /> did not vanish —
              the boundary survivors did not approach a finite limit.
              Telescoping is a method for evaluating the partial sum
              exactly; it does not guarantee the answer is finite.
            </Why>

            <Why>
              <strong>Linearity.</strong> Convergent series add and scalar-
              multiply the way you would hope:{" "}
              <InlineMath math="\sum (c a_n + d b_n) = c \sum a_n + d \sum b_n" />{" "}
              whenever both component sums converge. This lets you split a
              complicated series into pieces you can handle individually.
              Be careful: linearity only works when both pieces converge.
              You cannot "split" a divergent series by separating it into
              two divergent halves and getting nonsense like{" "}
              <InlineMath math="\infty - \infty = 0" />.
            </Why>

            <Why>
              <strong>Pitfalls (read three times).</strong> First, the
              nth-term test is only ever a divergence test. If the terms
              go to zero, you have learned nothing about convergence —
              you still have to apply one of the §8.3 / §8.4 tests to
              decide. Second, the geometric formula{" "}
              <InlineMath math="a/(1-r)" /> assumes{" "}
              <InlineMath math="a" /> is the actual first term you are
              summing; re-index carefully if the sum does not start at{" "}
              <InlineMath math="n = 0" />. Third, for telescoping, write
              out enough terms to be sure of the cancellation pattern;
              a shift of <InlineMath math="k" /> leaves{" "}
              <InlineMath math="k" /> surviving terms at each end, not
              one. Mis-identifying the survivors is how telescoping
              problems go off the rails.
            </Why>

            <Why>
              <strong>How to spot what to do.</strong> Each term is a
              constant times the previous? Geometric — check{" "}
              <InlineMath math="|r| < 1" />, identify{" "}
              <InlineMath math="a" /> (the first term you actually sum),
              apply <InlineMath math="a/(1-r)" />. Terms obviously do not
              go to zero? nth-term test, instant divergence. A fraction
              whose denominator factors into two pieces a fixed distance
              apart (like <InlineMath math="n(n+1)" /> or{" "}
              <InlineMath math="(2n - 1)(2n + 1)" />)? Try partial
              fractions and look for telescoping. Logs of ratios? Use
              log laws to expose a telescoping form. Anything else?
              That's exactly what §§8.3–8.4 are for — they give you
              tests that decide convergence without producing the exact
              value of the sum.
            </Why>

            <Why>
              <strong>How this connects to the rest of the chapter.</strong>{" "}
              §§8.3–8.4 will introduce a battery of tests that answer
              "does <InlineMath math="S_n" /> converge?" without
              computing <InlineMath math="S_n" /> in closed form. Those
              tests are tuned to the kinds of series you cannot
              telescope — most of the interesting ones. The geometric
              series and p-series you have met (or will meet in 8.3) are
              the two benchmark series you will compare against
              constantly. By §8.5, the geometric formula{" "}
              <InlineMath math="\sum x^n = 1/(1-x)" /> reappears with{" "}
              <InlineMath math="x" /> kept as a variable — and it
              becomes the seed from which all of §8.6's power-series
              representations grow. Hold onto it.
            </Why>
          </ChapterSection>

          <ChapterSection
            id="s8-3"
            number="8.3"
            title="Integral & Comparison Tests"
            accentColor={ACCENT}
            blurb="Compare a series to an integral or to a known series."
          >
            <Why>
              The vast majority of series you will meet are not geometric
              and not telescoping, so you cannot sum them in closed form.
              But you do not have to. For practical and theoretical
              purposes, the binary question — does the sum settle to a
              finite limit, yes or no — is what matters most often. Knowing
              that a series converges is enough to use it in calculations
              (truncate to enough terms for the precision you want); knowing
              it diverges tells you to stop bothering. The §8.3 strategy for
              positive-term series is the simplest imaginable: trap the
              unknown series between things you already understand.
            </Why>

            <Why>
              "Things you already understand" comes in two flavors. (a)
              You compare the series term-by-term against a benchmark
              series whose convergence behavior you already know — the
              <em> comparison</em> family of tests. (b) You compare the
              series against an integral of a closely related continuous
              function — the <em>integral test</em>. Both rest on the
              same underlying observation: positive-term series have
              <em>monotone increasing</em> partial sums, so by the
              monotone bounded theorem (§8.1) such a series converges if
              and only if the partial sums stay bounded. The whole
              section is about cleverly bounding the partial sums by
              something you already know.
            </Why>

            <Why>
              <strong>The integral test — why it works.</strong> Picture
              the terms <InlineMath math="a_n = f(n)" /> as the heights
              of unit-width rectangles standing on the x-axis. Stack one
              rectangle at each positive integer. Now draw the smooth
              curve <InlineMath math="y = f(x)" /> through (or near) the
              tops of the rectangles. There are two natural ways to line
              up the rectangles relative to the curve: each rectangle's
              left edge at integer <InlineMath math="n" /> (so the
              rectangle of height <InlineMath math="f(n)" /> sits between{" "}
              <InlineMath math="x = n" /> and <InlineMath math="x = n+1" />),
              or each rectangle's right edge at integer{" "}
              <InlineMath math="n" /> (height <InlineMath math="f(n)" />,
              between <InlineMath math="x = n - 1" /> and{" "}
              <InlineMath math="x = n" />).
            </Why>

            <Why>
              When <InlineMath math="f" /> is decreasing, those two
              alignments give opposite inequalities: the
              right-edge rectangles all sit <em>under</em> the curve, so
              the rectangle-area (which is just the sum) is at most the
              area under the curve from the start. The left-edge
              rectangles all stick <em>above</em> the curve, so the sum
              is at least the area under the curve. Combine both bounds
              and you sandwich the partial sum and the integral within a
              constant of each other. They converge or diverge together —
              that is the integral test:
            </Why>
            <BlockMath math="\sum_{n=N}^{\infty} a_n \;\;\text{converges} \iff \int_N^{\infty} f(x)\,dx \;\;\text{converges}" />

            <Why>
              The hypotheses matter. For the rectangle picture to work
              cleanly, <InlineMath math="f(x)" /> needs to be{" "}
              <strong>positive, continuous, and eventually
              decreasing</strong> on <InlineMath math="[N, \infty)" /> (it
              is fine if these only hold past some finite{" "}
              <InlineMath math="N" /> — convergence is a tail property).
              "Eventually decreasing" is usually verified by checking{" "}
              <InlineMath math="f'(x) \le 0" /> for large{" "}
              <InlineMath math="x" />. If the function bounces around or
              has gaps, the test does not apply — you need a different
              tool.
            </Why>

            <Why>
              <strong>Crucial caveat.</strong> The integral test only
              certifies the convergence or divergence of the series. The
              numerical value of the integral and the numerical value of
              the sum are <em>different numbers in general</em> — the
              integral test is <em>not</em> a way to compute the sum.
              Forgetting this and writing "and so the series equals 2"
              after computing <InlineMath math="\int_1^\infty dx/x^2 = 1" />{" "}
              (the actual sum is <InlineMath math="\pi^2/6 \approx 1.645" />)
              is a common exam slip.
            </Why>

            <Why>
              <strong>The big payoff: the p-series test.</strong> Apply
              the integral test to{" "}
              <InlineMath math="\sum 1/n^p" /> with{" "}
              <InlineMath math="f(x) = 1/x^p" />. For{" "}
              <InlineMath math="p \ne 1" />,{" "}
              <InlineMath math="\int_1^\infty dx/x^p = x^{1-p}/(1 - p)" />{" "}
              evaluated as the upper limit goes to{" "}
              <InlineMath math="\infty" />. If{" "}
              <InlineMath math="p > 1" />, the exponent{" "}
              <InlineMath math="1 - p" /> is negative and{" "}
              <InlineMath math="x^{1-p} \to 0" />, so the integral
              converges. If <InlineMath math="p < 1" />, the exponent is
              positive and the integral diverges. The borderline{" "}
              <InlineMath math="p = 1" /> is the harmonic series:{" "}
              <InlineMath math="\int_1^\infty dx/x = \ln x \Big|_1^\infty = \infty" />,
              so the harmonic series diverges. Net verdict:{" "}
              <strong><InlineMath math="\sum 1/n^p" /> converges if and only
              if <InlineMath math="p > 1" /></strong>. Memorize this
              cold. It is your single most useful comparison benchmark
              for the rest of the chapter.
            </Why>

            <Why>
              Geometrically the p-series test says: terms have to shrink
              <em>faster</em> than <InlineMath math="1/n" /> for the sum
              to be finite. Even though <InlineMath math="1/n \to 0" />,
              it shrinks too slowly to be summable. <InlineMath math="1/n^{1.001}" />{" "}
              shrinks just barely faster and is summable; the cutoff is
              that sharp. The harmonic series is the iconic example of
              "terms go to zero but not fast enough."
            </Why>

            <Why>
              <strong>Direct comparison — sandwich logic.</strong> If you
              have two non-negative series and{" "}
              <InlineMath math="0 \le a_n \le b_n" /> for all (or
              eventually all) <InlineMath math="n" />, then partial-sum
              inequalities follow term-by-term: every partial sum of{" "}
              <InlineMath math="\sum a_n" /> is at most the corresponding
              partial sum of <InlineMath math="\sum b_n" />. So:
            </Why>
            <Eq>If Σ b_n converges and 0 ≤ a_n ≤ b_n, then Σ a_n converges (squeezed under a finite roof).</Eq>
            <Eq>If Σ a_n diverges and a_n ≤ b_n,           then Σ b_n diverges (pushed up by an infinite floor).</Eq>
            <Why>
              <strong>Direction matters and is easy to get backwards.</strong>{" "}
              Bounding your series <em>above</em> by something convergent
              is informative ("you cannot be bigger than something
              finite, so you must be finite"). Bounding it <em>below</em>{" "}
              by something convergent tells you nothing ("a small finite
              number does not pin down anything about you"). Conversely,
              bounding your series <em>below</em> by something divergent
              shows you diverge; bounding it <em>above</em> by something
              divergent tells you nothing. Memorize the direction with
              this slogan: "smaller than convergent = convergent; bigger
              than divergent = divergent." The other two combinations
              are silent.
            </Why>

            <Why>
              <strong>Limit comparison — when the inequality is too
              fussy.</strong> Often two series clearly behave the same
              way at infinity ("for big <InlineMath math="n" />, this
              looks like that"), but pinning down a clean{" "}
              <InlineMath math="a_n \le b_n" /> by hand is annoying or
              even false for small <InlineMath math="n" />. Limit
              comparison rescues you. Compute the limit of the ratio of
              the two terms:
            </Why>
            <BlockMath math="\lim_{n \to \infty} \dfrac{a_n}{b_n} = c" />
            <Why>
              If <InlineMath math="0 < c < \infty" /> (finite and
              strictly positive), then{" "}
              <InlineMath math="\sum a_n" /> and{" "}
              <InlineMath math="\sum b_n" /> share fate — both converge
              or both diverge. The intuition: a finite positive ratio
              means <InlineMath math="a_n" /> and{" "}
              <InlineMath math="b_n" /> are eventually within a constant
              factor of each other, and multiplying every term by a
              constant cannot turn convergence into divergence. The
              edge cases <InlineMath math="c = 0" /> or{" "}
              <InlineMath math="c = \infty" /> are more delicate — if{" "}
              <InlineMath math="c = 0" /> and{" "}
              <InlineMath math="\sum b_n" /> converges, then so does{" "}
              <InlineMath math="\sum a_n" />; if{" "}
              <InlineMath math="c = \infty" /> and{" "}
              <InlineMath math="\sum b_n" /> diverges, then so does{" "}
              <InlineMath math="\sum a_n" /> — but in practice the
              finite-positive case is what you almost always get and
              what almost every textbook problem asks for.
            </Why>

            <Why>
              The art of limit comparison is choosing the right{" "}
              <InlineMath math="b_n" />. The trick is to write
              <InlineMath math="a_n" /> as a fraction, identify the
              "dominant" terms in the numerator and denominator (the
              highest-degree powers of <InlineMath math="n" /> when the
              term is rational, or the fastest-growing factor more
              generally), discard the slow stuff, and use the ratio of
              dominants as your benchmark <InlineMath math="b_n" />. Then
              compute the limit and watch the lower-order junk wash out.
            </Why>

            <Why>
              <strong>Mini-example 1 (integral test).</strong> Does{" "}
              <InlineMath math="\sum_{n=2}^{\infty} \dfrac{1}{n \ln n}" /> converge?
            </Why>
            <Why>
              Set <InlineMath math="f(x) = 1/(x \ln x)" />. For{" "}
              <InlineMath math="x \ge 2" /> it is positive (both factors
              positive), continuous (no zeros in the denominator), and
              decreasing (both <InlineMath math="x" /> and{" "}
              <InlineMath math="\ln x" /> grow, so their product grows,
              so the reciprocal shrinks). All integral-test conditions
              met. Apply the test with the substitution{" "}
              <InlineMath math="u = \ln x" />,{" "}
              <InlineMath math="du = dx/x" /> — notice the{" "}
              <InlineMath math="dx/x" /> in our integrand is exactly{" "}
              <InlineMath math="du" />, the substitution being absolutely
              clean:
            </Why>
            <BlockMath math="\int_2^{\infty} \dfrac{dx}{x \ln x} = \int_{\ln 2}^{\infty} \dfrac{du}{u} = \ln u\Big|_{\ln 2}^{\infty} = \infty" />
            <Why>
              Integral diverges, so the series diverges — but only barely
              (the rate of divergence is "log of a log"). To appreciate
              how thin the margin is, bump the exponent on{" "}
              <InlineMath math="\ln n" /> up to <InlineMath math="(\ln n)^2" />.
              The integral becomes (same substitution){" "}
              <InlineMath math="\int du/u^2 = -1/u" /> evaluated to
              infinity, which is finite. So{" "}
              <InlineMath math="\sum 1/(n (\ln n)^p)" /> converges if and
              only if <InlineMath math="p > 1" /> — the p-series threshold
              migrates outward into a "log p-series." This is what makes{" "}
              <InlineMath math="1/(n \ln n)" /> such a classic textbook
              series: it sits right at the cliff edge.
            </Why>

            <SeriesPartialSumViz defaultSeries="harmonic" accentColor={ACCENT} />

            <Why>
              <strong>Mini-example 2 (limit comparison with a p-series).</strong>{" "}
              Does <InlineMath math="\sum_{n=1}^\infty \dfrac{2n^2 + 3n}{n^4 + n + 5}" />{" "}
              converge?
            </Why>
            <Why>
              First, scan the dominant behavior. Numerator grows like{" "}
              <InlineMath math="2n^2" />; denominator grows like{" "}
              <InlineMath math="n^4" />. Their ratio behaves like{" "}
              <InlineMath math="2n^2/n^4 = 2/n^2" /> for large{" "}
              <InlineMath math="n" />. So the right benchmark is{" "}
              <InlineMath math="b_n = 1/n^2" /> — a p-series with{" "}
              <InlineMath math="p = 2 > 1" />, which converges. Apply
              limit comparison: compute{" "}
              <InlineMath math="\lim a_n/b_n" />:
            </Why>
            <BlockMath math="\lim_{n \to \infty} \dfrac{(2n^2 + 3n)/(n^4 + n + 5)}{1/n^2} = \lim_{n \to \infty} \dfrac{n^2 (2n^2 + 3n)}{n^4 + n + 5} = \lim_{n \to \infty} \dfrac{2n^4 + 3n^3}{n^4 + n + 5} = 2" />
            <Why>
              The limit is 2 (finite and strictly positive — divide top
              and bottom of the last fraction by{" "}
              <InlineMath math="n^4" /> and the leading term is 2). Limit
              comparison says: same fate as <InlineMath math="\sum 1/n^2" />,
              which converges. So the original series converges. Notice
              you never had to compute the sum — you only had to identify
              the right benchmark and verify the ratio is well-behaved.
              That is the workflow.
            </Why>

            <Why>
              <strong>Mini-example 3 (direct comparison upper bound).</strong>{" "}
              Does <InlineMath math="\sum_{n=1}^\infty \dfrac{\cos^2 n}{n^2 + 1}" />{" "}
              converge?
            </Why>
            <Why>
              The trig in the numerator is hard to handle directly, but
              note that <InlineMath math="0 \le \cos^2 n \le 1" /> for
              every <InlineMath math="n" />, so the term is sandwiched:
            </Why>
            <Eq>0 ≤ cos²(n)/(n² + 1) ≤ 1/(n² + 1) ≤ 1/n²</Eq>
            <Why>
              The right-hand side <InlineMath math="\sum 1/n^2" />{" "}
              converges (p-series, <InlineMath math="p = 2" />), so by
              direct comparison the original series converges too. The
              point is that direct comparison handles the "I have an
              ugly bounded factor times a clean rational" pattern
              effortlessly — bound the ugly factor by its supremum and
              you are left with a p-series problem.
            </Why>

            <Why>
              <strong>Mini-example 4 (integral test on a different
              integrand).</strong> Does{" "}
              <InlineMath math="\sum_{n=1}^\infty \dfrac{1}{n^2 + 1}" />{" "}
              converge?
            </Why>
            <Why>
              You could limit-compare with <InlineMath math="1/n^2" />,
              and you should get convergence. But for variety, apply the
              integral test:
            </Why>
            <BlockMath math="\int_1^\infty \dfrac{dx}{x^2 + 1} = \arctan x \Big|_1^\infty = \dfrac{\pi}{2} - \dfrac{\pi}{4} = \dfrac{\pi}{4}" />
            <Why>
              Integral is finite, so the series converges. Note again
              that the value <InlineMath math="\pi/4 \approx 0.785" />{" "}
              is the value of the integral, not the sum. The sum is
              actually <InlineMath math="\approx 1.077" /> (you'd need a
              Fourier-series argument or a residue calculation to get
              its exact closed form). The integral test gave us yes/no,
              not the value.
            </Why>

            <Why>
              <strong>The "which test to use" decision tree, in prose.</strong>{" "}
              Imagine reading the algebraic shape of{" "}
              <InlineMath math="a_n" /> the way a doctor reads symptoms.
              If <InlineMath math="a_n" /> is a rational expression in{" "}
              <InlineMath math="n" /> (no logs, no trig, no factorials),
              the play is almost always limit comparison with the
              p-series whose <InlineMath math="p" /> matches the
              difference in degrees: if the denominator degree exceeds
              the numerator degree by <InlineMath math="k" />, compare to{" "}
              <InlineMath math="1/n^k" />. If <InlineMath math="a_n" />{" "}
              involves <InlineMath math="\ln n" /> in a way that pairs
              well with substitution (especially{" "}
              <InlineMath math="dx/x" /> showing up because of an{" "}
              <InlineMath math="1/n" /> factor), the play is the integral
              test with <InlineMath math="u = \ln x" />. If you can
              easily bound your term above by something obviously
              convergent (a trig factor capped at 1, an exponential
              decay, a clean p-series), direct comparison wins for its
              brevity. If <InlineMath math="a_n" /> involves factorials
              or terms-to-the-n, hold off on §8.3 entirely and reach for
              the ratio test in §8.4.
            </Why>

            <Why>
              <strong>Pitfalls, expanded.</strong>{" "}
              <em>First,</em> the integral test only certifies
              convergence — the integral value and the sum value are
              <em> different numbers</em>. Do not equate them.{" "}
              <em>Second,</em> the comparison tests require positive
              (or non-negative) terms; if your series has signed terms,
              you must either work with{" "}
              <InlineMath math="\sum |a_n|" /> (testing absolute
              convergence) or switch to an alternating-series tool in
              §8.4. <em>Third,</em> the direction of direct comparison
              is easy to flip — restate the slogan to yourself before
              writing your conclusion: "smaller than convergent =
              convergent; bigger than divergent = divergent." Anything
              else is silent. <em>Fourth,</em> limit comparison requires
              you to pick a sensible <InlineMath math="b_n" />; the
              standard play is "discard lower-order junk and use the
              ratio of dominants." If your limit comes out 0 or{" "}
              <InlineMath math="\infty" />, you almost certainly picked
              the wrong benchmark — go back and reconsider.{" "}
              <em>Fifth,</em> the p-series threshold{" "}
              <InlineMath math="p > 1" /> is strict; the harmonic series{" "}
              <InlineMath math="\sum 1/n" /> (which is{" "}
              <InlineMath math="p = 1" />) <strong>diverges</strong>, even
              though its terms go to zero. Confusing{" "}
              <InlineMath math="p \ge 1" /> with{" "}
              <InlineMath math="p > 1" /> loses an entire problem.
            </Why>

            <Why>
              <strong>How this connects to the rest of the chapter.</strong>{" "}
              The benchmarks you collected here — the p-series test and
              the geometric series from §8.2 — are the two reference
              series you compare to constantly in §§8.4 and 8.5. The
              ratio test in §8.4 is, philosophically, a fancier
              comparison test: it compares your series implicitly to a
              geometric series with ratio{" "}
              <InlineMath math="L = \lim |a_{n+1}/a_n|" />. The integral
              test surfaces again in §8.8 when you bound the error of a
              Taylor approximation by an integral of the remainder.
              Keep §8.3's habits alive: the workflow "scan algebra, pick
              benchmark, apply test" is the workflow for the entire
              rest of the chapter.
            </Why>
          </ChapterSection>

          <ChapterSection
            id="s8-4"
            number="8.4"
            title="Alternating Series, Ratio Test & Absolute Convergence"
            accentColor={ACCENT}
            blurb="Sign-alternating sums converge under mild conditions; absolute convergence is stronger."
          >
            <Why>
              Every series we have studied so far had non-negative terms,
              and that monotone-positive setting is what made the
              comparison and integral tests work — positive partial sums
              are monotone increasing, and monotone increasing sequences
              converge iff bounded. Once we allow the terms to flip sign,
              the picture changes qualitatively. The partial sums no
              longer just climb. They <em>oscillate</em>, bouncing back
              and forth around their target. That oscillation opens up
              two new ideas: (a) a powerful new convergence test that
              works <em>only</em> for sign-alternating series — the
              Alternating Series Test (AST) — and (b) a more subtle
              distinction between two grades of convergence (absolute vs.
              conditional) that did not exist for positive-only series.
              §8.4 also introduces the ratio and root tests, which work
              on any series (positive or signed) and reduce convergence
              to a single limit computation.
            </Why>

            <Why>
              <strong>The Alternating Series Test (AST) — intuition first.</strong>{" "}
              Picture the partial sums of an alternating series{" "}
              <InlineMath math="\sum (-1)^{n+1} b_n" /> (with{" "}
              <InlineMath math="b_n > 0" />) as the positions of a hiker
              on a number line. You start at 0, step right by{" "}
              <InlineMath math="b_1" /> (to <InlineMath math="b_1" />),
              left by <InlineMath math="b_2" /> (to{" "}
              <InlineMath math="b_1 - b_2" />), right by{" "}
              <InlineMath math="b_3" />, left by <InlineMath math="b_4" />,
              and so on, alternating direction with every step. If each
              step is <em>smaller than the last</em> (the magnitudes{" "}
              <InlineMath math="b_n" /> are monotonically decreasing) and
              the steps eventually shrink to zero (
              <InlineMath math="b_n \to 0" />), the hiker is doing the
              classic "spiral in on a target" walk. After two steps you
              know the target is between your current position and your
              previous one; after four steps you know it is in a
              narrower window; the windows nest inside each other and
              shrink to a point. That point is the sum, and the
              alternating series converges to it.
            </Why>
            <BlockMath math="\sum_{n=1}^{\infty}(-1)^{n+1} b_n \text{ converges if } b_n > 0,\;\; b_n \downarrow,\;\; b_n \to 0" />

            <Why>
              <strong>All three conditions matter.</strong>{" "}
              "Positive" matters because the test reasons about the
              magnitudes <InlineMath math="b_n" />, not the signed
              <InlineMath math="a_n" />. "Monotonically decreasing"
              matters because if the steps wobble in size, the windows
              do not nest cleanly — the spiral argument breaks and you
              might step outside the previous window, ruining the
              squeeze. "Going to zero" matters because if the steps stay
              a fixed size, the hiker just rattles back and forth across
              the same interval forever and never settles. Practically,
              you usually verify monotonicity by showing{" "}
              <InlineMath math="b_{n+1}/b_n \le 1" /> for large{" "}
              <InlineMath math="n" />, or by writing{" "}
              <InlineMath math="b_n = f(n)" /> for a continuous function{" "}
              <InlineMath math="f" /> and computing{" "}
              <InlineMath math="f'(x) \le 0" />. Always check{" "}
              <InlineMath math="b_n \to 0" /> with one of the §8.1 tools.
            </Why>

            <Why>
              <strong>AST error bound — and the #1 exam trap.</strong>{" "}
              Because the partial sums are squeezed inside each
              successive oscillation, the true sum sits between any two
              consecutive partial sums. The error after{" "}
              <InlineMath math="N" /> terms cannot be larger than the
              size of the very <em>next</em> term you would have added —
              the term you stopped before:
            </Why>
            <BlockMath math="|S - S_N| \le b_{N+1}" />
            <Why>
              <strong>Read that subscript carefully.</strong> It is{" "}
              <InlineMath math="b_{N+1}" />, the magnitude of the{" "}
              <em>first omitted</em> term, not the magnitude of the last
              included term. This is the single most common
              alternating-series exam mistake, by a wide margin. Let
              me restate it three different ways so it sticks:
            </Why>
            <Why>
              (1) "The error of the partial sum through{" "}
              <InlineMath math="N" /> terms is at most the size of term{" "}
              <InlineMath math="N+1" />, which you did <em>not</em>{" "}
              include." (2) "The error is bounded by the next chunk you
              <em>would have written down</em> if you had taken one more
              step." (3) "Index the bound at the next term, not the
              last term." If you take nothing else from this section,
              take that.
            </Why>

            <Why>
              <strong>Why the bound is exactly that next term.</strong>{" "}
              Geometric picture: the partial sums{" "}
              <InlineMath math="S_1, S_2, S_3, \dots" /> are positions on
              the number line that alternate above and below the true
              sum <InlineMath math="S" />. Consecutive pairs sandwich{" "}
              <InlineMath math="S" />:{" "}
              <InlineMath math="S_2 \le S \le S_1" />,{" "}
              <InlineMath math="S_2 \le S \le S_3" />,{" "}
              <InlineMath math="S_4 \le S \le S_3" />, etc. The distance
              between <InlineMath math="S_N" /> and{" "}
              <InlineMath math="S_{N+1}" /> is exactly{" "}
              <InlineMath math="b_{N+1}" /> (you took one step of that
              size). Since <InlineMath math="S" /> sits between them, the
              distance from <InlineMath math="S_N" /> to{" "}
              <InlineMath math="S" /> is no more than{" "}
              <InlineMath math="b_{N+1}" />. That is the proof in two
              sentences, and it tells you why the bound is the size of
              the next term, not anything else.
            </Why>

            <Why>
              <strong>Absolute vs conditional convergence.</strong> Once
              you allow signed terms, two grades of convergence become
              meaningful. A series <InlineMath math="\sum a_n" /> is{" "}
              <strong>absolutely convergent</strong> if the all-positive
              version <InlineMath math="\sum |a_n|" /> converges. That
              is a strong property: any absolutely convergent series is
              automatically convergent in the ordinary sense, and the
              sum is unchanged under any rearrangement of the terms.
              Absolute convergence behaves the way you would naively
              expect addition to behave.
            </Why>

            <Why>
              A series that converges but whose absolute-value version{" "}
              <InlineMath math="\sum |a_n|" /> diverges is called{" "}
              <strong>conditionally convergent</strong>. The signs are
              the only thing saving it — strip them and the series falls
              apart. The poster child is the alternating harmonic series:{" "}
              <InlineMath math="\sum (-1)^{n+1}/n = \ln 2" /> converges
              (by AST: <InlineMath math="b_n = 1/n" /> is positive,
              decreasing, and goes to zero), but the corresponding
              all-positive series is{" "}
              <InlineMath math="\sum 1/n" />, the harmonic series, which
              diverges. So the alternating harmonic is conditionally
              convergent — its convergence is fragile.
            </Why>

            <Why>
              <strong>Why "fragile" is the right word.</strong> Riemann's
              rearrangement theorem says that for any conditionally
              convergent series and any real number{" "}
              <InlineMath math="L" /> you choose, there exists a
              rearrangement of the terms (using each term exactly once)
              whose sum equals <InlineMath math="L" /> — including{" "}
              <InlineMath math="L = +\infty" /> or{" "}
              <InlineMath math="-\infty" />. For the alternating harmonic
              specifically, you can rearrange to get any answer you
              want. That is wild. It tells you that the order of
              addition matters genuinely for conditionally convergent
              series; "sum" is a slippery concept when convergence is
              not absolute. For absolutely convergent series, by
              contrast, you can rearrange freely without changing the
              sum.
            </Why>

            <Why>
              <strong>The workflow for sign-alternating series.</strong>{" "}
              When you see <InlineMath math="\sum (-1)^n b_n" />, your
              checklist is: (a) does <InlineMath math="b_n" /> satisfy
              AST's three conditions (positive, decreasing, goes to
              zero)? If yes, the series converges. (b) Then, separately,
              ask: does <InlineMath math="\sum b_n" /> (the all-positive
              version) converge? If yes, the original is absolutely
              convergent — strongest grade. If no, it is conditionally
              convergent — weaker grade. The two questions are
              independent, and a complete answer reports both pieces.
            </Why>

            <Why>
              <strong>The Ratio Test — "does it eventually look
              geometric?"</strong> A series may have any pattern of
              signs (or none); the ratio test treats it by working with
              magnitudes. Compute the limit of the ratio of consecutive
              term-magnitudes:
            </Why>
            <BlockMath math="L = \lim_{n \to \infty}\Bigl|\dfrac{a_{n+1}}{a_n}\Bigr|" />
            <Why>
              The reasoning is a direct comparison to a geometric series.
              If the ratio approaches a number <InlineMath math="L < 1" />,
              then eventually (for all large enough{" "}
              <InlineMath math="n" />) each term is at most{" "}
              <InlineMath math="L" /> times the previous, in magnitude.
              That means the tail is dominated term-by-term by a
              geometric series with ratio <InlineMath math="L" />, which
              converges absolutely. By direct comparison (§8.3),{" "}
              <InlineMath math="\sum |a_n|" /> converges, so{" "}
              <InlineMath math="\sum a_n" /> converges absolutely. If
              instead <InlineMath math="L > 1" />, the terms eventually
              grow in magnitude, so they cannot even go to zero, and the
              nth-term test kills the series instantly. The verdict
              table:
            </Why>
            <Eq>L &lt; 1  →  converges (absolutely)</Eq>
            <Eq>L &gt; 1  →  diverges</Eq>
            <Eq>L = 1  →  test is inconclusive (try something else)</Eq>

            <Why>
              <strong>The L = 1 boundary is genuinely silent.</strong>{" "}
              All p-series have <InlineMath math="L = 1" /> under the
              ratio test (the ratio{" "}
              <InlineMath math="(n/(n+1))^p \to 1" />), and the p-series
              family contains both convergent ({" "}
              <InlineMath math="p > 1" />) and divergent ({" "}
              <InlineMath math="p \le 1" />) examples. So the ratio test
              cannot distinguish them — it gives <InlineMath math="L = 1" />{" "}
              for all of them and asks you to look elsewhere. When you
              get <InlineMath math="L = 1" />, do not try harder; switch
              to a comparison test or the integral test.
            </Why>

            <Why>
              <strong>The Root Test</strong> is the same philosophy via
              <InlineMath math="L = \lim \sqrt[n]{|a_n|}" /> instead of a
              ratio. Use the root test specifically when{" "}
              <InlineMath math="a_n" /> has the form{" "}
              <InlineMath math="(\text{something})^n" />, because then
              the n-th root cancels the exponent cleanly and you are
              left with a tractable limit. For example,{" "}
              <InlineMath math="\sum (2n/(n+1))^n" /> has{" "}
              <InlineMath math="\sqrt[n]{|a_n|} = 2n/(n+1) \to 2 > 1" />,
              so it diverges. Same verdict table as the ratio test:{" "}
              <InlineMath math="L < 1 \Rightarrow" /> converges,{" "}
              <InlineMath math="L > 1 \Rightarrow" /> diverges,{" "}
              <InlineMath math="L = 1 \Rightarrow" /> silent.
            </Why>

            <Why>
              <strong>Mini-example 1 (AST + error bound).</strong> For{" "}
              <InlineMath math="\sum_{n=1}^{\infty} (-1)^{n+1}/n^2" />,
              find <InlineMath math="S_3" /> and give a guaranteed bound
              on <InlineMath math="|S - S_3|" />.
            </Why>
            <Why>
              First check AST conditions on{" "}
              <InlineMath math="b_n = 1/n^2" />: positive (yes, square is
              positive); decreasing (yes,{" "}
              <InlineMath math="1/(n+1)^2 < 1/n^2" />); goes to zero
              (yes, by §8.1). ✓ The series converges. Compute the
              partial sum:
            </Why>
            <Eq>S_3 = 1 − 1/4 + 1/9 = 1 − 0.25 + 0.1111... ≈ 0.8611</Eq>
            <Why>
              Now the error bound. The error after 3 terms is at most
              the size of term 4 (the <em>next</em>, omitted one), which
              is <InlineMath math="b_4 = 1/16 = 0.0625" />:
            </Why>
            <Eq>|S − S_3| ≤ b_4 = 1/16 = 0.0625</Eq>
            <Why>
              The true sum is{" "}
              <InlineMath math="\pi^2/12 \approx 0.8225" />, so the
              actual error is{" "}
              <InlineMath math="|0.8611 - 0.8225| \approx 0.0386" /> —
              safely under the predicted 0.0625. ✓ The bound is honest
              but not tight, which is the normal situation; AST gives
              you a guarantee, not a precise estimate. Notice the index
              shift one more time: we summed through{" "}
              <InlineMath math="n = 3" /> and the bound is{" "}
              <InlineMath math="b_4" />, the next term. Re-write the
              same answer with the wrong index and you would have said
              the bound is <InlineMath math="b_3 = 1/9 \approx 0.111" />
              — which is loose but coincidentally still correct, or you
              would have said <InlineMath math="b_4" /> is{" "}
              <InlineMath math="1/9" />, which is wrong. Pay attention.
            </Why>

            <SeriesPartialSumViz defaultSeries="alternating-harmonic" accentColor={ACCENT} />

            <Why>
              <strong>Mini-example 2 (absolute vs conditional).</strong>{" "}
              Classify <InlineMath math="\sum_{n=1}^\infty (-1)^n/\sqrt{n}" />{" "}
              as absolutely convergent, conditionally convergent, or
              divergent.
            </Why>
            <Why>
              Step 1 — does the alternating series itself converge?
              Apply AST to <InlineMath math="b_n = 1/\sqrt{n}" />:
              positive (yes), decreasing (yes, since{" "}
              <InlineMath math="\sqrt{n}" /> increases), goes to zero
              (yes, <InlineMath math="1/\sqrt{n} \to 0" />). ✓ AST says
              the series converges.
            </Why>
            <Why>
              Step 2 — does the all-positive version{" "}
              <InlineMath math="\sum 1/\sqrt{n} = \sum 1/n^{1/2}" />{" "}
              converge? That is a p-series with{" "}
              <InlineMath math="p = 1/2 < 1" />, so by the p-series test
              (§8.3) it <em>diverges</em>.
            </Why>
            <Why>
              Conclusion: the series converges, but not absolutely.
              Therefore it is <strong>conditionally convergent</strong>.
              The sign flips are doing all the work; without them the
              terms shrink too slowly for the sum to be finite.
            </Why>

            <Why>
              <strong>Mini-example 3 (ratio test with factorials).</strong>{" "}
              Does <InlineMath math="\sum_{n=1}^\infty \dfrac{n!}{n^n}" />{" "}
              converge?
            </Why>
            <Why>
              Compute the ratio. The factorial relationship{" "}
              <InlineMath math="(n+1)! = (n+1) \cdot n!" /> is the whole
              reason the ratio test handles factorials so cleanly:
            </Why>
            <BlockMath math="\dfrac{a_{n+1}}{a_n} = \dfrac{(n+1)!/(n+1)^{n+1}}{n!/n^n} = \dfrac{(n+1) \cdot n!}{n!} \cdot \dfrac{n^n}{(n+1)^{n+1}} = (n+1) \cdot \dfrac{n^n}{(n+1)^{n+1}}" />
            <Why>
              Simplify: split off one factor of{" "}
              <InlineMath math="(n+1)" /> from the denominator:
            </Why>
            <BlockMath math="= \dfrac{n^n}{(n+1)^n} = \left(\dfrac{n}{n+1}\right)^n = \dfrac{1}{(1 + 1/n)^n}" />
            <Why>
              From §8.1, <InlineMath math="(1 + 1/n)^n \to e" />, so the
              ratio approaches <InlineMath math="1/e \approx 0.368 < 1" />.
              The ratio test gives <InlineMath math="L = 1/e < 1" />:
              series converges absolutely. The intuition matches the
              growth hierarchy — <InlineMath math="n^n" /> grows much
              faster than <InlineMath math="n!" />, so the terms shrink
              and the sum is finite.
            </Why>

            <Why>
              <strong>The "which test" decision tree for §§8.3 +
              8.4.</strong> By now you have collected six tests
              (integral, direct comparison, limit comparison, AST,
              ratio, root) plus the free nth-term divergence detector.
              Choosing the right one is a matter of reading the
              algebraic shape of <InlineMath math="a_n" /> and
              recognizing the trigger:
            </Why>
            <Why>
              First, always do the cheap nth-term sanity check. If{" "}
              <InlineMath math="\lim a_n \ne 0" />, the series diverges
              and you are done; do not move on. If{" "}
              <InlineMath math="\lim a_n = 0" />, you still know nothing
              — continue.
            </Why>
            <Why>
              If <InlineMath math="a_n" /> involves factorials (
              <InlineMath math="n!" />, <InlineMath math="(2n)!" />), or
              exponentials of the form <InlineMath math="a^n" /> with a
              fixed base, or a mix of these, reach for the{" "}
              <strong>ratio test</strong>. Those algebraic structures
              shrink to clean closed-form limits when you take the ratio
              of consecutive terms — the{" "}
              <InlineMath math="(n+1)!/n! = n+1" /> simplification is
              the whole point. The ratio test was made for these
              series.
            </Why>
            <Why>
              If <InlineMath math="a_n" /> is{" "}
              <InlineMath math="(\text{something})^n" /> as its entire
              structure (so the n-th root cancels the exponent), the{" "}
              <strong>root test</strong> is your friend — it simplifies
              cleanly. Otherwise prefer the ratio test, which is more
              widely useful.
            </Why>
            <Why>
              If <InlineMath math="a_n" /> is sign-alternating with a
              tractable magnitude <InlineMath math="b_n" />, apply{" "}
              <strong>AST</strong> first to confirm convergence; then
              separately classify absolute vs. conditional by testing{" "}
              <InlineMath math="\sum b_n" /> using the §8.3 tools.
            </Why>
            <Why>
              If <InlineMath math="a_n" /> is a rational expression in{" "}
              <InlineMath math="n" /> (no factorials, no exponentials),
              use <strong>limit comparison</strong> with the matching
              p-series. The benchmark <InlineMath math="b_n" /> is
              "ratio of leading terms": if numerator has degree{" "}
              <InlineMath math="m" /> and denominator degree{" "}
              <InlineMath math="d" />, compare to{" "}
              <InlineMath math="1/n^{d-m}" />. Then convergence is
              p-series fate, <InlineMath math="d - m > 1" />.
            </Why>
            <Why>
              If <InlineMath math="a_n" /> contains a logarithm in a
              cooperative position — typically{" "}
              <InlineMath math="1/(n (\ln n)^p)" /> or relatives —
              reach for the <strong>integral test</strong> with{" "}
              <InlineMath math="u = \ln x" />. The hallmark is that the
              derivative of one piece (the{" "}
              <InlineMath math="\ln" />) is supplied by another piece
              (the <InlineMath math="1/n" />), making the substitution
              clean.
            </Why>
            <Why>
              If <InlineMath math="a_n" /> can be bounded above (term-by-
              term) by an obviously convergent series, the direct
              comparison test gives the cleanest proof. Same in reverse
              for bounding below by a divergent series. Direct
              comparison is the cheapest test when it applies; use it
              if the bound is staring at you.
            </Why>

            <Why>
              <strong>Pitfalls, expanded (re-read three times).</strong>{" "}
              The AST error bound is the magnitude of the{" "}
              <em>first omitted</em> term, not the last included one —
              say it again, "the next term, not the last term." The
              nth-term test is one-way: it can only ever say "diverges"
              or "no information," never "converges." When the ratio
              test returns <InlineMath math="L = 1" />, it has told you
              nothing; switch tests, do not waste effort trying to
              squeeze more out of it. Absolute convergence and ordinary
              convergence are genuinely different conditions when the
              terms are signed — and conditional convergence is fragile
              in a way that absolute convergence is not (rearrange a
              conditionally convergent series and the sum can change).
              For a complete classification of a signed series, do both
              steps: confirm AST gives convergence, then separately
              decide absolute vs. conditional by testing{" "}
              <InlineMath math="\sum |a_n|" />.
            </Why>

            <Why>
              <strong>How this connects to the rest of the chapter.</strong>{" "}
              The ratio test is exactly the engine that decides the
              radius of convergence of a power series in §8.5 — the only
              new twist is keeping <InlineMath math="x" /> in the picture
              as a variable. The AST error bound resurfaces in §8.8 as
              the cleaner alternative to Taylor's inequality when your
              Taylor series happens to be alternating with decreasing
              term magnitudes (true for <InlineMath math="\sin" />,{" "}
              <InlineMath math="\cos" />, <InlineMath math="\ln(1 + x)" />,
              <InlineMath math="\arctan x" /> at suitable{" "}
              <InlineMath math="x" />). The notion of absolute
              convergence is what justifies differentiating and
              integrating power series term-by-term in §8.6; absolute
              convergence on an open interval is exactly what gives you
              license to treat the infinite sum like an ordinary
              polynomial.
            </Why>
          </ChapterSection>

          <ChapterSection
            id="s8-5"
            number="8.5"
            title="Power Series"
            accentColor={ACCENT}
            blurb="A series Σ c_n (x − a)^n that defines a function on its interval of convergence."
          >
            <Why>
              Every series we have looked at up to now has been a series
              of <em>numbers</em>. You plug in the formula for{" "}
              <InlineMath math="a_n" /> (which is just a number for each{" "}
              <InlineMath math="n" />), you add them up, and you get a
              single number for an answer — or you conclude the sum
              diverges. A <strong>power series</strong> is the natural
              upgrade: instead of constants, the terms involve an
              indeterminate <InlineMath math="x" />, and the series is
              an infinite-degree polynomial in that <InlineMath math="x" />:
            </Why>
            <BlockMath math="\sum_{n=0}^{\infty} c_n (x - a)^n = c_0 + c_1(x-a) + c_2(x-a)^2 + c_3(x-a)^3 + \dots" />

            <Why>
              The numbers <InlineMath math="c_n" /> are the{" "}
              <strong>coefficients</strong> — they describe the shape of
              the series, independent of <InlineMath math="x" />. The
              number <InlineMath math="a" /> is the{" "}
              <strong>center</strong> — it is the value of{" "}
              <InlineMath math="x" /> that makes every{" "}
              <InlineMath math="(x - a)^n" /> with{" "}
              <InlineMath math="n \ge 1" /> equal to zero, so the
              series collapses to just <InlineMath math="c_0" /> at the
              center. Each substitution of a specific value for{" "}
              <InlineMath math="x" /> produces an ordinary numerical
              series, which may or may not converge. So the natural
              question shifts: instead of "does this series converge,
              yes or no," it becomes "<em>for which</em>{" "}
              <InlineMath math="x" /> does it converge?"
            </Why>

            <Why>
              <strong>Quick refresher: what is a polynomial?</strong> A
              polynomial in <InlineMath math="x" /> centered at{" "}
              <InlineMath math="a" /> is a finite sum{" "}
              <InlineMath math="c_0 + c_1(x - a) + c_2(x - a)^2 + \dots + c_N (x - a)^N" />.
              You can evaluate it at any <InlineMath math="x" />, take
              derivatives, take antiderivatives — all of these
              operations stay inside the world of polynomials. A power
              series is exactly the same structure but extended to
              infinitely many terms. The crucial idea is that for many
              functions there exists an infinite polynomial that{" "}
              <em>equals</em> the function, term-for-term, inside some
              interval around the center. That makes the function and
              the power series interchangeable, and you can do polynomial
              calculus on the series in place of analyzing the
              function directly — which is sometimes much easier.
            </Why>

            <Why>
              <strong>The three possible convergence shapes.</strong> A
              foundational theorem says that for any power series in{" "}
              <InlineMath math="x - a" />, the set of{" "}
              <InlineMath math="x" /> for which it converges takes one
              of exactly three forms:
            </Why>
            <Why>
              (1) It converges <strong>only at the center</strong>{" "}
              <InlineMath math="x = a" />. Plug in{" "}
              <InlineMath math="x = a" />, every term with{" "}
              <InlineMath math="n \ge 1" /> dies, the series equals{" "}
              <InlineMath math="c_0" /> (which is trivially convergent),
              but at any other <InlineMath math="x" /> the series
              diverges. (This happens when the coefficients{" "}
              <InlineMath math="c_n" /> grow too fast — like{" "}
              <InlineMath math="\sum n! x^n" />.)
            </Why>
            <Why>
              (2) It converges for <strong>every real</strong>{" "}
              <InlineMath math="x" />. The series defines a function on
              the entire real line. (This is the friendly case — it
              happens for series like the exponential, sine, and cosine
              Maclaurin series.)
            </Why>
            <Why>
              (3) It converges on an interval of <strong>finite radius{" "}
              <InlineMath math="R" /></strong> centered at{" "}
              <InlineMath math="a" />: precisely on{" "}
              <InlineMath math="|x - a| < R" />, and diverges for{" "}
              <InlineMath math="|x - a| > R" />. At the endpoints{" "}
              <InlineMath math="x = a \pm R" />, behavior is
              case-by-case — could converge, could diverge, could go
              either way independently.
            </Why>

            <Why>
              <strong>The mental image.</strong> A power series is{" "}
              "geometric in spirit." For <InlineMath math="x" /> close to
              the center <InlineMath math="a" />, the differences{" "}
              <InlineMath math="(x - a)" /> are small, so the powers{" "}
              <InlineMath math="(x - a)^n" /> shrink rapidly enough that
              the series converges — much like a geometric series with
              ratio less than 1. For <InlineMath math="x" /> too far
              from the center, the differences are larger than 1 in
              magnitude, and the powers explode — like a geometric
              series with ratio greater than 1, divergent. The radius{" "}
              <InlineMath math="R" /> is the precise dividing line where
              the powers transition from "shrinking fast enough" to
              "not shrinking fast enough." How fast the coefficients{" "}
              <InlineMath math="c_n" /> grow or shrink determines how
              big <InlineMath math="R" /> is.
            </Why>

            <Why>
              <strong>How to find R — the ratio test, with x as a
              passenger.</strong> The radius is computed by applying
              the ratio test from §8.4 to the power series, treating{" "}
              <InlineMath math="x" /> as a variable. The ratio of
              consecutive terms is:
            </Why>
            <BlockMath math="\left|\dfrac{c_{n+1}(x - a)^{n+1}}{c_n (x - a)^n}\right| = |x - a| \cdot \left|\dfrac{c_{n+1}}{c_n}\right|" />
            <Why>
              The <InlineMath math="x" /> factors out cleanly — it does
              not depend on <InlineMath math="n" />, so it just rides
              along. Take the limit as <InlineMath math="n \to \infty" />:
            </Why>
            <BlockMath math="L = |x - a| \cdot \lim_{n \to \infty}\left|\dfrac{c_{n+1}}{c_n}\right|" />
            <Why>
              The ratio test says the series converges absolutely when{" "}
              <InlineMath math="L < 1" />. Solve that inequality for{" "}
              <InlineMath math="|x - a|" />:
            </Why>
            <BlockMath math="|x - a| < \dfrac{1}{\lim |c_{n+1}/c_n|} \equiv R" />
            <Why>
              That is where the "radius of convergence" formula comes
              from — it is not a separate piece of magic, just the
              ratio test with <InlineMath math="x" /> kept symbolic.
              Edge cases: if the limit{" "}
              <InlineMath math="\lim |c_{n+1}/c_n| = 0" />, then{" "}
              <InlineMath math="R = 1/0 = \infty" /> (converges
              everywhere — case 2 above). If the limit is{" "}
              <InlineMath math="\infty" />, then{" "}
              <InlineMath math="R = 0" /> (only at <InlineMath math="x = a" />,
              case 1). Otherwise <InlineMath math="R" /> is a positive
              real number, case 3.
            </Why>

            <Why>
              <strong>The endpoints: always, always check them by hand.</strong>{" "}
              The ratio test gives the strict inequality{" "}
              <InlineMath math="|x - a| < R" />. Exactly at the boundary{" "}
              <InlineMath math="|x - a| = R" />, the ratio test computes
              <InlineMath math="L = 1" /> and is silent. So you have to
              plug <InlineMath math="x = a - R" /> and{" "}
              <InlineMath math="x = a + R" /> individually into the
              original power series and analyze each resulting numerical
              series by hand. After substitution you almost always get
              one of the classical series from §§8.3–8.4 — a p-series,
              a harmonic series, an alternating series, a geometric
              series — so the convergence verdict is usually short to
              produce. But the two endpoints can independently converge
              or diverge, and the final answer (the{" "}
              <strong>interval of convergence</strong>) can take any
              of four shapes:{" "}
              <InlineMath math="(a-R, a+R)" />,{" "}
              <InlineMath math="[a-R, a+R)" />,{" "}
              <InlineMath math="(a-R, a+R]" />, or{" "}
              <InlineMath math="[a-R, a+R]" />.
            </Why>

            <Why>
              <strong>Why endpoints are exam favorites.</strong> Skipping
              the endpoint check is the single biggest way students lose
              points on §8.5 problems. Almost every exam question on
              power series asks for the full <em>interval</em> of
              convergence, not just the radius. The ratio test gives
              you the open interval; you still have to identify which
              endpoints (if any) belong, and that requires plugging in
              and re-running a numerical convergence test. There is no
              shortcut. Build the habit now: "I have <InlineMath math="R" />,
              now I check both endpoints," every single time.
            </Why>

            <Why>
              <strong>Mini-example 1 (R = ∞, converges everywhere).</strong>{" "}
              Find the radius and interval of convergence of{" "}
              <InlineMath math="\sum_{n=0}^\infty \dfrac{x^n}{n!}" />.
            </Why>
            <Why>
              Coefficients are <InlineMath math="c_n = 1/n!" />, center{" "}
              <InlineMath math="a = 0" />. Compute the ratio:
            </Why>
            <BlockMath math="L = \lim_{n \to \infty}\left|\dfrac{x^{n+1}/(n+1)!}{x^n/n!}\right| = |x| \cdot \lim_{n \to \infty}\dfrac{n!}{(n+1)!} = |x| \cdot \lim_{n \to \infty}\dfrac{1}{n + 1} = |x| \cdot 0 = 0" />
            <Why>
              <InlineMath math="L = 0 < 1" /> for every real{" "}
              <InlineMath math="x" />, so the series converges for all{" "}
              <InlineMath math="x" />. Therefore{" "}
              <InlineMath math="R = \infty" /> and the interval of
              convergence is <InlineMath math="(-\infty, \infty)" />. No
              endpoints to check (the "endpoints" are at infinity, and
              the ratio test has already certified everything). This
              series is exactly the Maclaurin series for{" "}
              <InlineMath math="e^x" />, which §8.7 will spell out — so
              its infinite radius matches the fact that{" "}
              <InlineMath math="e^x" /> is defined and smooth on the
              entire real line.
            </Why>

            <Why>
              <strong>Mini-example 2 (R = 1, endpoints both fail
              differently).</strong> Find the radius and interval of
              convergence of{" "}
              <InlineMath math="\sum_{n=1}^{\infty} \dfrac{x^n}{n}" />.
            </Why>
            <Why>
              Coefficients <InlineMath math="c_n = 1/n" />, center{" "}
              <InlineMath math="a = 0" />. Ratio test:
            </Why>
            <BlockMath math="L = \lim_{n \to \infty}\left|\dfrac{x^{n+1}/(n+1)}{x^n/n}\right| = |x| \cdot \lim_{n \to \infty}\dfrac{n}{n+1} = |x| \cdot 1 = |x|" />
            <Why>
              Convergent for <InlineMath math="|x| < 1" />, so{" "}
              <InlineMath math="R = 1" /> and the open interval is{" "}
              <InlineMath math="(-1, 1)" />. Now check both endpoints by
              substitution into the original series:
            </Why>
            <Eq>x = +1:  Σ 1^n/n = Σ 1/n   = harmonic series → DIVERGES</Eq>
            <Eq>x = −1:  Σ (−1)^n/n        = alternating harmonic → CONVERGES (AST)</Eq>
            <Why>
              So <InlineMath math="x = -1" /> belongs to the interval,{" "}
              <InlineMath math="x = +1" /> does not. The final answer:
              the interval of convergence is{" "}
              <InlineMath math="[-1, 1)" />. Notice the asymmetry — one
              endpoint included, one excluded. This asymmetry is the
              norm, not the exception, for §8.5 problems; it is the
              specific feature exam questions test.
            </Why>

            <Why>
              <strong>Mini-example 3 (R = 3, shifted center, both
              endpoints checked).</strong> Find the radius and interval
              of convergence of{" "}
              <InlineMath math="\sum_{n=1}^{\infty} \dfrac{(x - 2)^n}{n \cdot 3^n}" />.
            </Why>
            <Why>
              Coefficients <InlineMath math="c_n = 1/(n \cdot 3^n)" />,
              center <InlineMath math="a = 2" />. Apply the ratio test
              keeping <InlineMath math="x" /> symbolic:
            </Why>
            <BlockMath math="L = \lim_{n \to \infty}\left|\dfrac{(x - 2)^{n+1}/((n+1) \cdot 3^{n+1})}{(x - 2)^n/(n \cdot 3^n)}\right| = \dfrac{|x - 2|}{3} \cdot \lim_{n \to \infty}\dfrac{n}{n+1} = \dfrac{|x - 2|}{3}" />
            <Why>
              Convergent when <InlineMath math="|x - 2|/3 < 1" />, i.e.{" "}
              <InlineMath math="|x - 2| < 3" />, so{" "}
              <InlineMath math="R = 3" />. Open interval is centered at{" "}
              <InlineMath math="x = 2" /> with radius 3:{" "}
              <InlineMath math="(2 - 3, 2 + 3) = (-1, 5)" />.
            </Why>
            <Why>
              Now check endpoints. At <InlineMath math="x = -1" />:
              substitute, getting{" "}
              <InlineMath math="\sum (-3)^n/(n \cdot 3^n) = \sum (-1)^n/n" />{" "}
              — the alternating harmonic series, which converges
              conditionally by AST.
            </Why>
            <Why>
              At <InlineMath math="x = 5" />: substitute, getting{" "}
              <InlineMath math="\sum 3^n/(n \cdot 3^n) = \sum 1/n" />{" "}
              — the harmonic series, which diverges.
            </Why>
            <Why>
              So the final interval of convergence is{" "}
              <InlineMath math="[-1, 5)" /> — left endpoint included,
              right endpoint excluded. Notice how the shifted center
              changes nothing about the procedure: ratio test gives the
              radius, you compute the open interval as{" "}
              <InlineMath math="(a - R, a + R)" />, then you check both
              ends individually.
            </Why>

            <Why>
              <strong>What the series defines as a function.</strong>{" "}
              Inside its interval of convergence, the power series{" "}
              <InlineMath math="\sum c_n (x - a)^n" /> defines a function{" "}
              <InlineMath math="f(x)" /> by{" "}
              <InlineMath math="f(x) = \sum c_n (x - a)^n" />. That
              function is continuous everywhere on the open interval{" "}
              <InlineMath math="(a - R, a + R)" />. It is infinitely
              differentiable on the same open interval — you can
              differentiate the series term-by-term as if it were an
              ordinary polynomial, and the resulting series has the same
              radius of convergence. Same for integration. These two
              facts — term-by-term differentiation and integration are
              legal — are what make §8.6 possible. They unlock the
              ability to derive series for one function from series for
              a related function.
            </Why>

            <Why>
              <strong>Pitfalls, expanded.</strong>{" "}
              <em>First and biggest:</em> always check the endpoints. The
              radius alone is not the answer; the interval is the
              answer. The two endpoints can independently converge or
              diverge.{" "}
              <em>Second:</em> the ratio test gives the strict open
              interval — at the endpoints the test computes{" "}
              <InlineMath math="L = 1" /> and is silent, so endpoint
              behavior must be settled by a separate convergence test on
              the resulting numerical series.{" "}
              <em>Third:</em> when you differentiate or integrate a power
              series term-by-term (§8.6), the radius is preserved but
              endpoint behavior <em>can change</em>. Always re-check the
              endpoints of the new series.{" "}
              <em>Fourth:</em> the "center" <InlineMath math="a" /> can
              be any real number — do not blindly assume{" "}
              <InlineMath math="a = 0" />. Read the series carefully and
              identify the <InlineMath math="(x - a)" /> structure.{" "}
              <em>Fifth:</em> the coefficients <InlineMath math="c_n" />{" "}
              do not include the <InlineMath math="(x - a)^n" /> factor.
              When you compute <InlineMath math="\lim |c_{n+1}/c_n|" />,
              you are using only the coefficients, not the variable.
              Mixing the two is a common algebra mistake when the series
              is written in non-standard form.
            </Why>

            <Why>
              <strong>How this connects to the rest of the chapter.</strong>{" "}
              §8.6 takes the geometric series{" "}
              <InlineMath math="\sum x^n = 1/(1-x)" /> (a particular
              power series with <InlineMath math="R = 1" />) and treats
              it as a seed from which to derive power-series
              representations for ln, arctan, and other functions, by
              substitution / differentiation / integration. §8.7 inverts
              the question: starting from a function, how do you
              construct its power-series representation? The answer is
              the Taylor formula, but its <em>justification</em> (when
              does the series actually equal the function on what
              interval?) leans on the §8.5 machinery you just built.
              §8.8 truncates the Taylor series and uses Taylor's
              inequality to bound the error — and the convergence-radius
              ideas you learned here translate directly into "the
              approximation is reliable inside the radius and unreliable
              outside it."
            </Why>
          </ChapterSection>

          <ChapterSection
            id="s8-6"
            number="8.6"
            title="Representations of Functions as Power Series"
            accentColor={ACCENT}
            blurb="Manipulate the geometric series 1/(1−x) to derive new series."
          >
            <Why>
              By the end of §8.5 you knew what a power series is and how
              to find where it converges. This section flips the question
              around: given a familiar function — say{" "}
              <InlineMath math="\arctan x" />,{" "}
              <InlineMath math="\ln(1 + x)" />,{" "}
              <InlineMath math="1/(1 + x^2)" /> — how do you produce its
              power-series representation? The amazing answer in §8.6 is
              that for an enormous class of functions, you do not need
              any new machinery. You just need one seed series — the
              geometric series — plus three legal moves you already know:
              substitute, differentiate, integrate. The §8.7 chapter
              will give you the heavy artillery (the Taylor formula) for
              when those tricks are not enough, but §8.6 is the cheap-
              and-cheerful approach that handles most of the named
              functions you care about.
            </Why>

            <Why>
              <strong>The seed series.</strong> You already know one power
              series cold — the geometric series. Its closed form is the
              first equation in this whole chapter, and you derived it
              in §8.2 by the multiply-by-r-and-subtract trick:
            </Why>
            <BlockMath math="\dfrac{1}{1 - x} = 1 + x + x^2 + x^3 + x^4 + \dots = \sum_{n=0}^{\infty} x^n \quad (|x| < 1)" />
            <Why>
              Read that statement <em>backwards</em>. On the left is a
              familiar function — a simple rational expression that you
              would never think of as "an infinite polynomial" in
              ordinary algebra. On the right is an honest-to-goodness
              power series of infinite length. The equality says they
              are the same function on the open interval{" "}
              <InlineMath math="(-1, 1)" />. You can replace{" "}
              <InlineMath math="1/(1 - x)" /> with{" "}
              <InlineMath math="\sum x^n" /> anywhere inside that
              interval and the math stays consistent. So{" "}
              <InlineMath math="1/(1 - x)" /> <em>is</em> a polynomial
              of infinite degree, inside the right interval. That
              re-reading is the conceptual leap that makes §8.6 work.
            </Why>

            <Why>
              <strong>The three legal moves.</strong> Inside the open
              interval of convergence, a power series behaves exactly
              like a polynomial under the three operations you would
              perform on a polynomial: substitution, differentiation,
              integration. The radius of convergence is preserved by all
              three — though, as we noted in §8.5, endpoint behavior can
              change under differentiation or integration, so you must
              re-check those if you care about the closed interval.
            </Why>

            <Why>
              <strong>Move 1: substitute.</strong> Replace{" "}
              <InlineMath math="x" /> in the seed series by any expression{" "}
              <InlineMath math="u(x)" />. The resulting equality holds
              wherever the substituted version satisfies the original
              convergence condition — that is, wherever{" "}
              <InlineMath math="|u(x)| < 1" />. Want a series for{" "}
              <InlineMath math="1/(1 + x^2)" />? Note that{" "}
              <InlineMath math="1 + x^2 = 1 - (-x^2)" />, so substitute{" "}
              <InlineMath math="u = -x^2" />:
            </Why>
            <BlockMath math="\dfrac{1}{1 + x^2} = \sum_{n=0}^{\infty}(-x^2)^n = \sum_{n=0}^{\infty}(-1)^n x^{2n} = 1 - x^2 + x^4 - x^6 + \dots \quad (|x| < 1)" />
            <Why>
              The new radius is still 1: the condition{" "}
              <InlineMath math="|u| < 1" /> becomes{" "}
              <InlineMath math="|-x^2| < 1" />, which is{" "}
              <InlineMath math="x^2 < 1" />, which is{" "}
              <InlineMath math="|x| < 1" />. Same interval. Notice the
              clean fact: substitution into the geometric series gives
              you a series that has only even powers of{" "}
              <InlineMath math="x" /> and alternating signs — exactly
              the shape that the Maclaurin series for{" "}
              <InlineMath math="1/(1 + x^2)" /> would have if you
              computed it from scratch. The substitution shortcut just
              produces it in one line.
            </Why>

            <Why>
              <strong>Move 2: differentiate term-by-term.</strong> Inside
              the open interval of convergence, a power series can be
              differentiated like an ordinary polynomial: apply{" "}
              <InlineMath math="d/dx(x^n) = n x^{n-1}" /> to each term,
              re-index if convenient. The radius is preserved, but the
              endpoint behavior can degrade (differentiation can turn a
              converging endpoint into a diverging one, because the new
              terms have a factor of <InlineMath math="n" /> in them that
              was not there before). Example — differentiate both sides
              of the geometric series:
            </Why>
            <BlockMath math="\dfrac{d}{dx}\left[\dfrac{1}{1 - x}\right] = \dfrac{1}{(1 - x)^2} = \dfrac{d}{dx}\sum_{n=0}^\infty x^n = \sum_{n=1}^{\infty} n\, x^{n-1} \quad (|x| < 1)" />
            <Why>
              The <InlineMath math="n = 0" /> term in the original series
              was the constant 1, which differentiates to zero, so the
              new sum starts at <InlineMath math="n = 1" />. Re-indexing
              with <InlineMath math="m = n - 1" />, you can also write
              this as <InlineMath math="\sum_{m=0}^\infty (m + 1) x^m" />.
              Either form is fine; just be consistent.
            </Why>

            <Why>
              <strong>Move 3: integrate term-by-term.</strong> Same
              legality — integrate each term separately and add an
              overall constant of integration (determined by matching
              the value at the center). The radius is preserved, and
              endpoint behavior typically <em>improves</em> rather than
              degrades under integration: integration introduces a
              factor of <InlineMath math="1/(n + 1)" /> into each
              coefficient, which damps the terms further and often
              lets a previously-failing endpoint pass. This is the
              source of one of the most beautiful results in the
              chapter — see the arctan derivation below.
            </Why>

            <Why>
              <strong>Mini-example 1: derive the arctan series.</strong>{" "}
              Goal — find a power-series representation of{" "}
              <InlineMath math="\arctan x" />. The key observation is
              that <InlineMath math="\arctan x" /> is the antiderivative
              of <InlineMath math="1/(1 + x^2)" /> with value zero at
              the origin, and we just derived a series for{" "}
              <InlineMath math="1/(1 + x^2)" /> above. So integrating
              gives us the arctan series for free.
            </Why>
            <Why>
              Step 1 — recall the series for{" "}
              <InlineMath math="1/(1 + x^2)" /> from Move 1:
            </Why>
            <BlockMath math="\dfrac{1}{1 + x^2} = 1 - x^2 + x^4 - x^6 + \dots = \sum_{n=0}^{\infty}(-1)^n x^{2n} \quad (|x| < 1)" />
            <Why>
              Step 2 — integrate both sides from <InlineMath math="0" />{" "}
              to <InlineMath math="x" />. The left side becomes{" "}
              <InlineMath math="\int_0^x dt/(1 + t^2) = \arctan x" />{" "}
              (because <InlineMath math="\arctan 0 = 0" />, the lower
              limit contributes nothing). The right side is integrated
              term-by-term, term by term, like any polynomial:
            </Why>
            <BlockMath math="\arctan x = x - \dfrac{x^3}{3} + \dfrac{x^5}{5} - \dfrac{x^7}{7} + \dots = \sum_{n=0}^{\infty}\dfrac{(-1)^n x^{2n+1}}{2n + 1}" />
            <Why>
              Step 3 — sanity check by differentiating term-by-term and
              verifying you recover the starting series. The general
              term <InlineMath math="(-1)^n x^{2n+1}/(2n + 1)" />{" "}
              differentiates to <InlineMath math="(-1)^n x^{2n}" />,
              which is exactly what we started with. ✓
            </Why>

            <Why>
              Step 4 — admire the endpoint promotion. The original
              geometric series and its derived{" "}
              <InlineMath math="1/(1 + x^2)" /> version both diverge at
              <InlineMath math="x = \pm 1" /> (the terms{" "}
              <InlineMath math="(\pm 1)^{2n} = 1" /> do not go to zero).
              But the integrated arctan series has terms of the form{" "}
              <InlineMath math="\pm 1/(2n+1)" /> at the endpoints —
              alternating sign with decreasing magnitudes, going to
              zero. By AST those <em>converge</em>. So the integrated
              series has interval of convergence{" "}
              <InlineMath math="[-1, 1]" />, both endpoints included,
              even though the seed series only had{" "}
              <InlineMath math="(-1, 1)" />. Endpoints CAN change under
              integration — here we gained both of them. As a bonus,
              plugging <InlineMath math="x = 1" /> into the arctan
              series gives the Leibniz formula{" "}
              <InlineMath math="\pi/4 = 1 - 1/3 + 1/5 - 1/7 + \dots" /> —
              a famously slow but mesmerizing way to compute{" "}
              <InlineMath math="\pi" />.
            </Why>

            <Why>
              <strong>Mini-example 2: derive the ln(1 + x) series.</strong>{" "}
              Goal — find a power series for{" "}
              <InlineMath math="\ln(1 + x)" />. Same recipe: identify
              the function as an antiderivative of something we have a
              series for. Indeed{" "}
              <InlineMath math="d/dx[\ln(1 + x)] = 1/(1 + x)" />, so we
              need a series for <InlineMath math="1/(1 + x)" /> first.
            </Why>
            <Why>
              Step 1 — start from the geometric series and substitute{" "}
              <InlineMath math="u = -x" />:
            </Why>
            <BlockMath math="\dfrac{1}{1 + x} = \dfrac{1}{1 - (-x)} = \sum_{n=0}^{\infty}(-x)^n = \sum_{n=0}^{\infty}(-1)^n x^n = 1 - x + x^2 - x^3 + \dots \quad (|x| < 1)" />
            <Why>
              Step 2 — integrate both sides from <InlineMath math="0" />{" "}
              to <InlineMath math="x" />. On the left, you get{" "}
              <InlineMath math="\ln(1 + x) - \ln 1 = \ln(1 + x)" />. On
              the right, integrate term-by-term — the{" "}
              <InlineMath math="x^n" /> term integrates to{" "}
              <InlineMath math="x^{n+1}/(n + 1)" />, so re-index with{" "}
              <InlineMath math="m = n + 1" /> for clarity:
            </Why>
            <BlockMath math="\ln(1 + x) = x - \dfrac{x^2}{2} + \dfrac{x^3}{3} - \dfrac{x^4}{4} + \dots = \sum_{n=1}^{\infty}\dfrac{(-1)^{n+1} x^n}{n} \quad (-1 < x \le 1)" />
            <Why>
              Same endpoint promotion story. The original series at{" "}
              <InlineMath math="x = 1" /> is{" "}
              <InlineMath math="\sum (-1)^n = 1 - 1 + 1 - 1 + \dots" />{" "}
              — divergent (Grandi's series, nth-term test fails). After
              integration the series at <InlineMath math="x = 1" /> is{" "}
              <InlineMath math="\sum (-1)^{n+1}/n" /> — the alternating
              harmonic series, which converges by AST. So{" "}
              <InlineMath math="x = 1" /> is now in. At{" "}
              <InlineMath math="x = -1" />, the series becomes{" "}
              <InlineMath math="\sum -1/n = -\sum 1/n" /> — the
              negative harmonic series, which diverges. So{" "}
              <InlineMath math="x = -1" /> is out. Final interval:{" "}
              <InlineMath math="(-1, 1]" />. Plugging in{" "}
              <InlineMath math="x = 1" /> gives{" "}
              <InlineMath math="\ln 2 = 1 - 1/2 + 1/3 - 1/4 + \dots" /> —
              the classical alternating harmonic identity.
            </Why>

            <Why>
              <strong>Mini-example 3 (a multiplied version).</strong>{" "}
              Find a series for <InlineMath math="x/(1 - x^3)" />.
            </Why>
            <Why>
              Multiplying a series by <InlineMath math="x^k" /> is a
              fourth legal move (it shifts all the powers by{" "}
              <InlineMath math="k" />). Start from{" "}
              <InlineMath math="1/(1 - x^3)" /> by substituting{" "}
              <InlineMath math="u = x^3" /> into the geometric series:
            </Why>
            <BlockMath math="\dfrac{1}{1 - x^3} = \sum_{n=0}^\infty (x^3)^n = \sum_{n=0}^\infty x^{3n} \quad (|x^3| < 1 \Leftrightarrow |x| < 1)" />
            <Why>
              Now multiply both sides by <InlineMath math="x" />:
            </Why>
            <BlockMath math="\dfrac{x}{1 - x^3} = \sum_{n=0}^\infty x^{3n + 1} = x + x^4 + x^7 + x^{10} + \dots \quad (|x| < 1)" />
            <Why>
              Two moves combined and we're done. The radius is still 1,
              because both substitution and multiplication by{" "}
              <InlineMath math="x^k" /> preserve the radius (the latter
              trivially — every term gets shifted, but the convergence
              condition is unchanged).
            </Why>

            <Why>
              <strong>How to spot this play.</strong> If a function is
              an algebraic rearrangement of{" "}
              <InlineMath math="1/(1 - u)" /> for some{" "}
              <InlineMath math="u" /> you can identify — typically a
              rational function with a linear or quadratic denominator
              that you can rewrite in <InlineMath math="1 - (\text{stuff})" />{" "}
              form — reach for Move 1 (substitution). If a function is
              the derivative or antiderivative of something you already
              have a series for (arctan, ln, etc.), reach for Move 2 or
              3. Anything you can write as a product of{" "}
              <InlineMath math="x^k" /> with a known series — multiply
              term-by-term. The §8.6 toolkit handles most named
              functions you meet in calculus class faster than the §8.7
              Taylor recipe does, with less arithmetic, and with the
              convergence radius coming along for free.
            </Why>

            <Why>
              <strong>Pitfalls, expanded.</strong>{" "}
              <em>First:</em> when you substitute{" "}
              <InlineMath math="u(x)" /> into the geometric series, the
              new convergence condition is{" "}
              <InlineMath math="|u(x)| < 1" />, not{" "}
              <InlineMath math="|x| < 1" /> — translate carefully. For{" "}
              <InlineMath math="u = -x^2" /> the condition collapses
              back to <InlineMath math="|x| < 1" />, but for{" "}
              <InlineMath math="u = x/2" /> the condition is{" "}
              <InlineMath math="|x| < 2" />, so the radius doubles.{" "}
              <em>Second:</em> when you integrate term-by-term, do not
              forget the constant of integration. You normally
              determine it by matching values at the center (usually
              <InlineMath math="x = 0" />, where{" "}
              <InlineMath math="\arctan 0 = 0" /> or{" "}
              <InlineMath math="\ln 1 = 0" /> makes the constant zero).
              <em>Third:</em> the radius is preserved under
              differentiation and integration, but the endpoints can
              change in either direction (differentiation can lose
              endpoints, integration can gain them). Always re-check.
              <em>Fourth:</em> these moves require operating <em>inside</em>{" "}
              the open interval of convergence; equalities at the
              boundary need separate justification (an Abel-theorem
              argument that is beyond §8.6).
            </Why>

            <Why>
              <strong>How this connects to the rest of the chapter.</strong>{" "}
              §8.7 will give you a recipe — Taylor's formula — for
              writing the power series of <em>any</em> smooth function,
              not just ones built from the geometric series. But that
              recipe is more arithmetic-heavy than the §8.6 tricks. In
              practice, you reach for §8.6 first (substitution into a
              known series), and you only fall back to the explicit
              Taylor-coefficient formula when no shortcut applies. §8.8
              will use the resulting series to approximate function
              values and integrals — and the convergence-interval
              information you gathered here will tell you exactly where
              those approximations are valid.
            </Why>
          </ChapterSection>

          <ChapterSection
            id="s8-7"
            number="8.7"
            title="Taylor & Maclaurin Series"
            accentColor={ACCENT}
            blurb="Express any smooth f as Σ f^(n)(a)/n! · (x−a)^n. Maclaurin = Taylor with a=0."
          >
            <Why>
              §8.6 showed you that several specific functions —{" "}
              <InlineMath math="1/(1 - x)" />,{" "}
              <InlineMath math="\arctan x" />,{" "}
              <InlineMath math="\ln(1 + x)" /> — can be written as power
              series by clever manipulation of the geometric series. The
              natural follow-up question is: can <em>every</em> smooth
              function be written as a power series, and if so, how do
              you find the coefficients without leaning on the geometric
              series? The answer is the Taylor / Maclaurin recipe, which
              is one of the most useful constructions in all of
              undergraduate mathematics. Once you have it in hand, any
              infinitely differentiable function around any chosen
              center becomes a polynomial of infinite degree — accessible
              to all the techniques of polynomial calculus.
            </Why>

            <Why>
              <strong>Quick refresher: what is a polynomial, and what
              does it mean for two polynomials to agree at a point?</strong>{" "}
              A polynomial of degree <InlineMath math="N" /> centered at{" "}
              <InlineMath math="a" /> looks like{" "}
              <InlineMath math="p(x) = c_0 + c_1(x - a) + c_2(x - a)^2 + \dots + c_N (x - a)^N" />.
              The constants <InlineMath math="c_0, c_1, \dots, c_N" />{" "}
              completely determine it. Now consider two polynomials at the
              center <InlineMath math="x = a" />. They "match through
              order <InlineMath math="k" />" at <InlineMath math="x = a" />{" "}
              if they have the same value, same first derivative, same
              second derivative, …, same <InlineMath math="k" />-th
              derivative at <InlineMath math="a" />. That gives{" "}
              <InlineMath math="k + 1" /> equations on the coefficients —
              the right amount to uniquely determine{" "}
              <InlineMath math="c_0" /> through{" "}
              <InlineMath math="c_k" />. So "matching derivatives at a
              point" and "specifying polynomial coefficients" are two
              languages for the same thing.
            </Why>

            <Why>
              <strong>The mental picture.</strong> Take a smooth function{" "}
              <InlineMath math="f(x)" /> and a chosen "anchor point"{" "}
              <InlineMath math="x = a" />. A <strong>Taylor polynomial</strong>{" "}
              of degree <InlineMath math="n" /> centered at{" "}
              <InlineMath math="a" /> is the unique polynomial of degree
              at most <InlineMath math="n" /> that matches{" "}
              <InlineMath math="f" /> through order <InlineMath math="n" />{" "}
              at <InlineMath math="a" /> — same value, same first
              derivative, same second derivative, …, same{" "}
              <InlineMath math="n" />-th derivative. The{" "}
              <strong>Taylor series</strong> takes the limit: it's the
              polynomial of infinite degree that matches{" "}
              <InlineMath math="f" /> through <em>every</em> derivative
              at <InlineMath math="a" />. Inside its radius of
              convergence, the infinite series equals{" "}
              <InlineMath math="f(x)" /> exactly for every{" "}
              <InlineMath math="x" />.
            </Why>

            <Why>
              The first-order Taylor polynomial is just the
              tangent line at <InlineMath math="a" />: same value, same
              slope. Add the quadratic correction and you get a
              parabola that not only touches but also bends the same way
              as <InlineMath math="f" /> at <InlineMath math="a" /> —
              the "best parabolic approximation." Add the cubic
              correction and you also match the rate of change of
              curvature. Each new term lets the polynomial follow{" "}
              <InlineMath math="f" /> one degree of refinement further.
              Geometrically, you watch the polynomial "curl" to hug the
              function more and more closely as the degree increases.
              Far from <InlineMath math="a" />, even the high-degree
              polynomial eventually drifts away from{" "}
              <InlineMath math="f" /> — but inside the radius of
              convergence, the full infinite series sticks to{" "}
              <InlineMath math="f" /> exactly.
            </Why>

            <Why>
              <strong>Deriving the coefficient formula.</strong> Suppose
              we want a power-series representation{" "}
              <InlineMath math="f(x) = \sum c_n (x - a)^n" />. What must
              the coefficients <InlineMath math="c_n" /> be? The
              "match all derivatives at <InlineMath math="a" />" idea
              gives the formula one coefficient at a time.
            </Why>
            <Why>
              <em>Match the value.</em> Plug <InlineMath math="x = a" />{" "}
              into both sides. On the right, every term with{" "}
              <InlineMath math="(x - a)^n" /> for{" "}
              <InlineMath math="n \ge 1" /> equals zero, leaving only the
              constant term. So <InlineMath math="f(a) = c_0" />.
            </Why>
            <Why>
              <em>Match the first derivative.</em> Differentiate both
              sides with respect to <InlineMath math="x" />. The new
              right-hand side is{" "}
              <InlineMath math="c_1 + 2 c_2 (x - a) + 3 c_3 (x - a)^2 + \dots" />.
              Plug <InlineMath math="x = a" /> again: every term with{" "}
              <InlineMath math="(x - a)^k" /> for{" "}
              <InlineMath math="k \ge 1" /> dies, leaving{" "}
              <InlineMath math="f'(a) = c_1" />.
            </Why>
            <Why>
              <em>Match the second derivative.</em> Differentiate again.
              The right-hand side becomes{" "}
              <InlineMath math="2 c_2 + 3 \cdot 2 c_3 (x - a) + 4 \cdot 3 c_4 (x - a)^2 + \dots" />.
              Plug in <InlineMath math="x = a" />:{" "}
              <InlineMath math="f''(a) = 2 c_2" />, so{" "}
              <InlineMath math="c_2 = f''(a)/2" />.
            </Why>
            <Why>
              <em>General pattern.</em> Differentiating{" "}
              <InlineMath math="n" /> times produces an{" "}
              <InlineMath math="n(n-1)(n-2)\cdots 1 = n!" /> factor on
              the surviving term. So:
            </Why>
            <BlockMath math="c_n = \dfrac{f^{(n)}(a)}{n!} \;\;\Longrightarrow\;\; f(x) = \sum_{n=0}^{\infty}\dfrac{f^{(n)}(a)}{n!}(x - a)^n" />
            <Why>
              That is the <strong>Taylor series</strong> of{" "}
              <InlineMath math="f" /> about <InlineMath math="a" />. The
              key insight is that the entire infinite series is
              determined by the derivatives of <InlineMath math="f" /> at
              the <em>single point</em> <InlineMath math="a" />. Two
              functions that look very different globally can have
              identical Taylor series at a point as long as their
              derivatives match there — and conversely, given the local
              derivative data at one point, the Taylor series tries to
              reconstruct the entire function.
            </Why>

            <Why>
              <strong>Maclaurin series.</strong> The special case{" "}
              <InlineMath math="a = 0" /> is called the Maclaurin series.
              It is just "Taylor at the origin," and the most common
              center for examples and exam problems because it tends to
              give cleaner formulas. When someone says "Maclaurin series
              of <InlineMath math="f" />," they mean the Taylor series
              with <InlineMath math="a = 0" />.
            </Why>

            <Why>
              <strong>Does the Taylor series actually equal the
              function?</strong> A subtle but important question: even
              if <InlineMath math="f" /> is infinitely differentiable, it
              is not automatic that the Taylor series converges to{" "}
              <InlineMath math="f(x)" /> at <InlineMath math="x \ne a" />.
              Two things can go wrong: the series might converge to the
              wrong value, or it might fail to converge at all. For the
              functions you meet in this course —{" "}
              <InlineMath math="e^x" />, <InlineMath math="\sin" />,{" "}
              <InlineMath math="\cos" />, <InlineMath math="\ln" />,
              rational functions, arctan, and combinations thereof — the
              Taylor series always equals the function on its interval
              of convergence. The general justification for "Taylor
              series equals function" requires Taylor's theorem with
              remainder (§8.8), which says: if the remainder term goes
              to zero as the degree grows, the series equals{" "}
              <InlineMath math="f" />.
            </Why>

            <Why>
              <strong>The five Maclaurin series to memorize.</strong>{" "}
              Almost every Maclaurin-series problem in this chapter
              boils down to recognizing how the function in front of
              you is built from these five — by substitution, by
              multiplication by <InlineMath math="x^k" />, by addition,
              by differentiation, or by integration. Engrave them on
              your retinas:
            </Why>
            <BlockMath math="e^x = \sum_{n=0}^{\infty}\dfrac{x^n}{n!} = 1 + x + \dfrac{x^2}{2!} + \dfrac{x^3}{3!} + \dots \quad (\text{all } x)" />
            <BlockMath math="\sin x = \sum_{n=0}^{\infty}\dfrac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \dfrac{x^3}{3!} + \dfrac{x^5}{5!} - \dots \quad (\text{all } x)" />
            <BlockMath math="\cos x = \sum_{n=0}^{\infty}\dfrac{(-1)^n x^{2n}}{(2n)!} = 1 - \dfrac{x^2}{2!} + \dfrac{x^4}{4!} - \dots \quad (\text{all } x)" />
            <BlockMath math="\ln(1 + x) = \sum_{n=1}^{\infty}\dfrac{(-1)^{n+1} x^n}{n} = x - \dfrac{x^2}{2} + \dfrac{x^3}{3} - \dots \quad (-1 < x \le 1)" />
            <BlockMath math="\dfrac{1}{1 - x} = \sum_{n=0}^{\infty} x^n = 1 + x + x^2 + x^3 + \dots \quad (|x| < 1)" />

            <Why>
              <strong>Mini-example 1 (deriving sine from scratch).</strong>{" "}
              Compute the Maclaurin series for <InlineMath math="\sin x" />{" "}
              directly from the Taylor formula to see the machinery in
              action.
            </Why>
            <Why>
              We need <InlineMath math="f^{(n)}(0)" /> for all{" "}
              <InlineMath math="n" />. The derivatives of{" "}
              <InlineMath math="\sin x" /> cycle through{" "}
              <InlineMath math="\sin, \cos, -\sin, -\cos" /> and then
              repeat. Evaluated at zero:{" "}
              <InlineMath math="\sin 0 = 0" />,{" "}
              <InlineMath math="\cos 0 = 1" />,{" "}
              <InlineMath math="-\sin 0 = 0" />,{" "}
              <InlineMath math="-\cos 0 = -1" />, and then it repeats. So
              the even-indexed derivatives at 0 are all 0, and the
              odd-indexed derivatives are{" "}
              <InlineMath math="+1, -1, +1, -1, \dots" />. That means
              every other coefficient vanishes, and the surviving ones
              alternate sign:
            </Why>
            <BlockMath math="\sin x = \dfrac{0}{0!} + \dfrac{1}{1!} x + \dfrac{0}{2!} x^2 + \dfrac{-1}{3!} x^3 + \dfrac{0}{4!} x^4 + \dfrac{1}{5!} x^5 - \dots = x - \dfrac{x^3}{6} + \dfrac{x^5}{120} - \dots" />
            <Why>
              Compact form: only odd powers survive, with alternating
              signs and factorial denominators:
            </Why>
            <BlockMath math="\sin x = \sum_{n=0}^\infty \dfrac{(-1)^n x^{2n+1}}{(2n+1)!}" />
            <Why>
              The ratio test confirms the radius is infinite (each
              factorial growth absolutely dominates any power of{" "}
              <InlineMath math="x" />). So the equality
              <InlineMath math="\sin x = " /> (the series) holds for every
              real <InlineMath math="x" />. That is a strong statement —
              the entire global behavior of the sine function is
              encoded in its derivative data at a single point.
            </Why>

            <Why>
              <strong>Mini-example 2 (sin(x²) by substitution).</strong>{" "}
              Find the Maclaurin series for{" "}
              <InlineMath math="\sin(x^2)" />.
            </Why>
            <Why>
              Computing derivatives of <InlineMath math="\sin(x^2)" />{" "}
              directly is a chain-rule nightmare —{" "}
              <InlineMath math="d/dx \sin(x^2) = 2x \cos(x^2)" />, then
              another product rule, and it gets uglier from there. The
              §8.6 substitution shortcut bypasses all of that. Take the
              memorized sine series and replace every{" "}
              <InlineMath math="x" /> with <InlineMath math="x^2" />:
            </Why>
            <BlockMath math="\sin(x^2) = \sum_{n=0}^\infty \dfrac{(-1)^n (x^2)^{2n+1}}{(2n+1)!} = \sum_{n=0}^\infty \dfrac{(-1)^n x^{4n+2}}{(2n+1)!} = x^2 - \dfrac{x^6}{6} + \dfrac{x^{10}}{120} - \dots" />
            <Why>
              Done in one line. The radius is still infinite, because
              substituting <InlineMath math="x^2" /> for{" "}
              <InlineMath math="x" /> changes the condition from "any{" "}
              <InlineMath math="x" />" to "any <InlineMath math="x^2" />,"
              which is the same as "any <InlineMath math="x" />." Notice
              the powers became <InlineMath math="4n + 2" /> because we
              squared the variable in odd-indexed positions. This is the
              kind of move that turns a §8.7 problem from "twenty minutes
              of chain rule" into "ten seconds of substitution."
            </Why>

            <Why>
              <strong>Mini-example 3 (e^(−2x) two ways).</strong> Find
              the Maclaurin series for <InlineMath math="f(x) = e^{-2x}" />.
            </Why>
            <Why>
              <em>Method A (the long way, by Taylor's formula).</em>{" "}
              Every derivative of <InlineMath math="e^{-2x}" /> brings
              down another factor of <InlineMath math="-2" />, so{" "}
              <InlineMath math="f^{(n)}(x) = (-2)^n e^{-2x}" /> and{" "}
              <InlineMath math="f^{(n)}(0) = (-2)^n" />. Coefficients:
              <InlineMath math="c_n = (-2)^n/n!" />. Series:{" "}
              <InlineMath math="\sum (-2)^n x^n/n!" />.
            </Why>
            <Why>
              <em>Method B (the substitution shortcut).</em> Start from
              the memorized <InlineMath math="e^x" /> series and
              substitute <InlineMath math="u = -2x" />:
            </Why>
            <BlockMath math="e^{-2x} = \sum_{n=0}^{\infty}\dfrac{(-2x)^n}{n!} = \sum_{n=0}^{\infty}\dfrac{(-2)^n x^n}{n!} = 1 - 2x + 2x^2 - \dfrac{4 x^3}{3} + \dfrac{2 x^4}{3} - \dots" />
            <Why>
              Both methods give the same series, as they must. Method B
              is the practical choice: same answer with a fraction of
              the arithmetic, and the convergence radius (infinite,
              because <InlineMath math="e^x" />'s is) comes along for
              free. Sanity check: differentiate term-by-term, see that
              you recover <InlineMath math="-2" /> times the original ✓,
              plug in <InlineMath math="x = 0" /> and confirm 1 ✓.
            </Why>

            <TaylorPolyViz defaultFn="exp" accentColor={ACCENT} />

            <Why>
              <strong>The big shortcut, restated.</strong> Memorize the
              five Maclaurin series above. Then for almost every
              Maclaurin-series problem in this chapter, the strategy is:
              "which memorized series, with what manipulation?" — much
              cheaper than computing <InlineMath math="f^{(n)}(0)" /> by
              hand. The common patterns:
            </Why>
            <Why>
              · <InlineMath math="\cos(x^2)" /> → substitute{" "}
              <InlineMath math="u = x^2" /> into the cosine series.
            </Why>
            <Why>
              · <InlineMath math="x \sin x" /> → multiply the sine series
              by <InlineMath math="x" /> (every power increases by 1).
            </Why>
            <Why>
              · <InlineMath math="1/(1 + x^2)" /> → substitute{" "}
              <InlineMath math="u = -x^2" /> into the geometric series.
            </Why>
            <Why>
              · <InlineMath math="\arctan x" />,{" "}
              <InlineMath math="\ln(1 + x)" /> → integrate the geometric
              series (the §8.6 trick).
            </Why>
            <Why>
              · <InlineMath math="e^x \cos x" /> → multiply the two
              series, keeping terms up to the desired degree (the
              first few terms suffice for most applications).
            </Why>
            <Why>
              · <InlineMath math="\sin x / x" /> → write{" "}
              <InlineMath math="\sin x" /> as its series and divide
              term-by-term by <InlineMath math="x" />, giving{" "}
              <InlineMath math="1 - x^2/6 + x^4/120 - \dots" /> — this
              series is well-defined at <InlineMath math="x = 0" /> even
              though the original quotient is not (the famous "limit of{" "}
              <InlineMath math="\sin x / x" /> at 0 is 1").
            </Why>

            <Why>
              <strong>Taylor (non-zero center) when forced.</strong> Some
              problems specify a center other than 0. Two strategies:
              compute <InlineMath math="f^{(n)}(a)" /> for several{" "}
              <InlineMath math="n" />, spot the pattern, and write the
              general term; or rewrite the function so a memorized
              expansion applies. The second strategy is usually faster.
              Classic example: expand <InlineMath math="\ln x" /> about{" "}
              <InlineMath math="a = 1" />. Direct derivative
              computation gives{" "}
              <InlineMath math="(\ln x)' = 1/x" />,{" "}
              <InlineMath math="(\ln x)'' = -1/x^2" />,{" "}
              <InlineMath math="(\ln x)''' = 2/x^3" />, etc., with{" "}
              <InlineMath math="f^{(n)}(1) = (-1)^{n+1} (n - 1)!" />. So{" "}
              <InlineMath math="\ln x = \sum_{n=1}^\infty (-1)^{n+1} (x - 1)^n / n" />.
              Or, faster, write <InlineMath math="\ln x = \ln(1 + (x - 1))" />{" "}
              and apply the memorized series for{" "}
              <InlineMath math="\ln(1 + u)" /> with{" "}
              <InlineMath math="u = x - 1" /> — same answer in one line,
              and the convergence condition translates to{" "}
              <InlineMath math="|x - 1| < 1" />, i.e.{" "}
              <InlineMath math="0 < x < 2" />, with endpoint{" "}
              <InlineMath math="x = 2" /> included by AST.
            </Why>

            <Why>
              <strong>Pitfalls, expanded.</strong>{" "}
              <em>First:</em> the Taylor formula{" "}
              <InlineMath math="c_n = f^{(n)}(a)/n!" /> has{" "}
              <InlineMath math="f^{(n)}(a)" /> in the numerator — that is
              the <em>value of the n-th derivative at the center</em>,
              not the n-th derivative as a function of{" "}
              <InlineMath math="x" />. Forgetting to evaluate is a
              common error.{" "}
              <em>Second:</em> not every smooth function equals its
              Taylor series outside trivial neighborhoods; the equality
              "<InlineMath math="f(x) = " /> series" requires the
              remainder to go to zero (§8.8). For your standard
              undergraduate functions it does, but be aware that the
              equality is a non-trivial statement.{" "}
              <em>Third:</em> the radius of convergence of the Taylor
              series of <InlineMath math="f" /> at <InlineMath math="a" />{" "}
              is the distance from <InlineMath math="a" /> to the
              nearest "trouble" (singularity, branch point, etc.) of{" "}
              <InlineMath math="f" /> in the complex plane. So{" "}
              <InlineMath math="\ln(1 + x)" /> has trouble at{" "}
              <InlineMath math="x = -1" /> and its Maclaurin series
              accordingly has radius 1; <InlineMath math="1/(1 + x^2)" />{" "}
              has trouble at <InlineMath math="x = \pm i" /> (complex),
              which are distance 1 from the origin, so its Maclaurin
              series has radius 1 too even though it looks smooth on
              the real line.{" "}
              <em>Fourth:</em> when in doubt, sanity-check by plugging
              the series back into the function at a few known values
              (<InlineMath math="x = 0" />, <InlineMath math="x = a" />)
              and confirming agreement; also differentiate term-by-
              term and see if you recover the derivative.
            </Why>

            <Why>
              <strong>How this connects to the rest of the chapter.</strong>{" "}
              §8.8 truncates the Taylor series at degree{" "}
              <InlineMath math="n" /> and gives a formula (Taylor's
              inequality) for the error{" "}
              <InlineMath math="f(x) - T_n(x)" />. That is the
              practical payoff that lets you use Taylor polynomials as
              numerical approximations — for evaluating special
              functions, for estimating integrals that have no
              elementary antiderivative, for solving ODEs locally. The
              chapter ends there because §8.8 is where all the
              machinery of §§8.1–8.7 cashes out into something
              calculably useful.
            </Why>
          </ChapterSection>

          <ChapterSection
            id="s8-8"
            number="8.8"
            title="Applications of Taylor Polynomials"
            accentColor={ACCENT}
            blurb="Truncate the Taylor series; estimate the error using Taylor's inequality."
          >
            <Why>
              §8.7 told you that a smooth function can be represented as
              an infinite-degree polynomial. That is mathematically
              elegant, but practically you cannot sum infinitely many
              terms — at some point you have to stop. §8.8 is about
              what happens when you truncate: how big is the error, how
              can you bound it before you compute, and how many terms
              do you need to achieve a given accuracy. This is the
              section where the abstract machinery of Taylor series
              cashes out into something you can use to evaluate{" "}
              <InlineMath math="\sin(0.5)" /> to six decimal places or
              compute <InlineMath math="\int_0^1 e^{-x^2} dx" /> to any
              precision you want, even though that integral has no
              elementary antiderivative.
            </Why>

            <Why>
              <strong>Practical motivation.</strong> Your calculator has
              a "sin" button. What is happening inside the calculator
              when you push it? Almost certainly some variant of: store
              the first few Taylor-polynomial coefficients of{" "}
              <InlineMath math="\sin" />, evaluate that polynomial at
              the input value, and use a precomputed bound on the
              remainder to know the answer is good to (say) 15 digits.
              The same maneuver under the hood for{" "}
              <InlineMath math="\cos" />, <InlineMath math="\exp" />,{" "}
              <InlineMath math="\ln" />, square root, and every other
              "built-in" special function in scientific software. Without
              the error bound from §8.8 (Taylor's inequality), you
              would not know how many terms to include or how
              trustworthy the answer is. The error bound is what makes
              the approximation a tool rather than a guess.
            </Why>

            <Why>
              <strong>Defining the remainder.</strong> The remainder is
              simply the gap between the true function value and your
              polynomial approximation:
            </Why>
            <BlockMath math="R_n(x) = f(x) - T_n(x)" />
            <Why>
              Equivalently, <InlineMath math="R_n(x)" /> is the part of
              the infinite Taylor series you threw away — all the terms
              from degree <InlineMath math="n + 1" /> onward summed
              together. Your job is to put a ceiling on{" "}
              <InlineMath math="|R_n(x)|" />, ideally one that you can
              compute without knowing the function's exact value (because
              if you knew the exact value, you wouldn't need an
              approximation in the first place).
            </Why>

            <Why>
              <strong>Taylor's inequality (the headline error bound).</strong>{" "}
              If on the interval between <InlineMath math="a" /> and{" "}
              <InlineMath math="x" /> the <InlineMath math="(n+1)" />-th
              derivative of <InlineMath math="f" /> is bounded in
              magnitude by some constant <InlineMath math="M" /> (so{" "}
              <InlineMath math="|f^{(n+1)}(t)| \le M" /> for every{" "}
              <InlineMath math="t" /> between <InlineMath math="a" /> and{" "}
              <InlineMath math="x" />), then:
            </Why>
            <BlockMath math="|R_n(x)| \le \dfrac{M}{(n+1)!}\,|x - a|^{n+1}" />

            <Why>
              <strong>Why this form.</strong> Look at what the next term
              in the Taylor series would have been if you had kept it:{" "}
              <InlineMath math="f^{(n+1)}(a)/(n+1)! \cdot (x - a)^{n+1}" />.
              The remainder is approximately that omitted term, plus
              tinier corrections from later terms (the Lagrange
              remainder formula expresses it as exactly that shape
              evaluated at some unknown point in between, but the
              bookkeeping is messy). Taylor's inequality plays it safe:
              replace the unknown derivative value{" "}
              <InlineMath math="f^{(n+1)}(\xi)" /> by its worst-case
              magnitude <InlineMath math="M" /> on the interval, and the
              resulting upper bound is guaranteed honest. The remainder
              shrinks rapidly with <InlineMath math="n" /> because the{" "}
              <InlineMath math="(n+1)!" /> in the denominator grows
              faster than any polynomial in <InlineMath math="(x - a)" />.
              Factorials eat polynomials for breakfast — that is why
              moderate <InlineMath math="n" /> gives spectacular
              accuracy.
            </Why>

            <Why>
              <strong>How to bound M.</strong> You need any number{" "}
              <InlineMath math="M" /> that dominates{" "}
              <InlineMath math="|f^{(n+1)}(t)|" /> for every{" "}
              <InlineMath math="t" /> in the strip between{" "}
              <InlineMath math="a" /> and <InlineMath math="x" />. You
              want this number to be a real number you can write down,
              not a guess. The shape of <InlineMath math="M" /> depends
              on the function.
            </Why>
            <Why>
              For <InlineMath math="\sin" /> and{" "}
              <InlineMath math="\cos" />, every derivative is some sign
              choice from <InlineMath math="\{\sin, \cos, -\sin, -\cos\}" />,
              and sines and cosines are bounded in magnitude by 1
              everywhere. So <InlineMath math="M = 1" />, always, for
              every <InlineMath math="n" /> — this is why
              <InlineMath math="\sin" /> and <InlineMath math="\cos" />{" "}
              have such pleasant Taylor approximations.
            </Why>
            <Why>
              For <InlineMath math="e^x" />, every derivative is{" "}
              <InlineMath math="e^x" /> itself (which is its own
              derivative). On an interval{" "}
              <InlineMath math="[-|x|, |x|]" /> centered at 0,{" "}
              <InlineMath math="e^t" /> is increasing and hits its max
              at the right endpoint, giving{" "}
              <InlineMath math="M = e^{|x|}" />. So{" "}
              <InlineMath math="|R_n(x)| \le e^{|x|} \cdot |x|^{n+1}/(n+1)!" />.
            </Why>
            <Why>
              For polynomials of degree <InlineMath math="k" />, all
              derivatives past order <InlineMath math="k" /> are
              identically zero. So <InlineMath math="R_n = 0" /> exactly
              for any <InlineMath math="n \ge k" /> — the Taylor series
              of a polynomial <em>is</em> the polynomial, with no
              remainder, trivially.
            </Why>

            <Why>
              <strong>Mini-example 1 (sin x to 5 decimal places).</strong>{" "}
              Use the degree-5 Maclaurin polynomial of{" "}
              <InlineMath math="\sin x" /> to approximate{" "}
              <InlineMath math="\sin(0.5)" />, and give a guaranteed
              bound on the error.
            </Why>
            <Why>
              From §8.7, the Maclaurin polynomial of{" "}
              <InlineMath math="\sin x" /> through degree 5 is{" "}
              <InlineMath math="T_5(x) = x - x^3/6 + x^5/120" />. Plug
              in <InlineMath math="x = 0.5" />:
            </Why>
            <BlockMath math="T_5(0.5) = 0.5 - \dfrac{(0.5)^3}{6} + \dfrac{(0.5)^5}{120} = 0.5 - 0.020833 + 0.000260 \approx 0.479427" />
            <Why>
              Notice the terms shrink dramatically: 0.5, then 0.02, then
              0.0003. The leading term carries almost all of the answer
              and the corrections are small — exactly the "factorials
              crushing polynomials" effect in action.
            </Why>
            <Why>
              Now bound the error with Taylor's inequality at{" "}
              <InlineMath math="n = 5" />,{" "}
              <InlineMath math="x = 0.5" />, <InlineMath math="a = 0" />.
              The (n+1) = 6th derivative of <InlineMath math="\sin x" />{" "}
              is <InlineMath math="-\sin x" />, bounded by 1, so{" "}
              <InlineMath math="M = 1" />:
            </Why>
            <BlockMath math="|R_5(0.5)| \le \dfrac{1}{6!}(0.5)^6 = \dfrac{0.015625}{720} \approx 2.17 \times 10^{-5}" />
            <Why>
              The bound says the answer is accurate to at least 5
              decimal places. The true value{" "}
              <InlineMath math="\sin(0.5) \approx 0.479426" /> confirms{" "}
              <InlineMath math="T_5" /> matches to 5 decimals — well
              inside the predicted bound. ✓ The bound is honest but not
              tight, which is the normal situation. A guaranteed
              overestimate is exactly what you want for safety.
            </Why>

            <TaylorPolyViz defaultFn="sin" defaultN={3} accentColor={ACCENT} />

            <Why>
              <strong>Mini-example 2 (using the series for numerical
              integration of e^(−x²)).</strong> Use the Maclaurin series
              for <InlineMath math="e^x" /> to estimate{" "}
              <InlineMath math="\int_0^1 e^{-x^2}\,dx" /> to within{" "}
              <InlineMath math="0.001" />. This integral has no
              elementary antiderivative — there is no formula in terms
              of elementary functions for{" "}
              <InlineMath math="\int e^{-x^2} dx" />. Taylor series let
              us compute it anyway.
            </Why>
            <Why>
              Step 1 — get the series for the integrand. Take the
              memorized series for <InlineMath math="e^u" /> and
              substitute <InlineMath math="u = -x^2" />:
            </Why>
            <BlockMath math="e^{-x^2} = \sum_{n=0}^\infty \dfrac{(-x^2)^n}{n!} = \sum_{n=0}^\infty \dfrac{(-1)^n x^{2n}}{n!} = 1 - x^2 + \dfrac{x^4}{2} - \dfrac{x^6}{6} + \dfrac{x^8}{24} - \dots" />
            <Why>
              Radius infinite (inherited from <InlineMath math="e^u" />),
              so the series equals the function for every real{" "}
              <InlineMath math="x" />.
            </Why>
            <Why>
              Step 2 — integrate term-by-term from 0 to 1 (legal because
              the series converges absolutely on the closed interval{" "}
              <InlineMath math="[0, 1]" />). Each{" "}
              <InlineMath math="x^{2n}" /> integrates to{" "}
              <InlineMath math="x^{2n+1}/(2n + 1)" />, evaluated from 0
              to 1 just gives <InlineMath math="1/(2n+1)" />:
            </Why>
            <BlockMath math="\int_0^1 e^{-x^2}\,dx = \sum_{n=0}^\infty \dfrac{(-1)^n}{n!\,(2n + 1)} = 1 - \dfrac{1}{3} + \dfrac{1}{10} - \dfrac{1}{42} + \dfrac{1}{216} - \dfrac{1}{1320} + \dfrac{1}{9360} - \dots" />
            <Why>
              Step 3 — this is an alternating series with decreasing
              term magnitudes going to zero, so AST applies (from §8.4).
              The error after <InlineMath math="N" /> terms is bounded
              by the magnitude of the <em>next</em> term — and you stop
              when that next term is smaller than your tolerance{" "}
              <InlineMath math="0.001" />.
            </Why>
            <Why>
              Check the term magnitudes:{" "}
              <InlineMath math="1, 1/3 \approx 0.333, 1/10 = 0.1, 1/42 \approx 0.0238, 1/216 \approx 0.00463, 1/1320 \approx 0.000758" />.
              The first term smaller than 0.001 is the{" "}
              <InlineMath math="N = 5" /> term (counting from{" "}
              <InlineMath math="N = 0" />), which is{" "}
              <InlineMath math="1/1320 \approx 0.000758" />. So summing
              through the <InlineMath math="N = 4" /> term gives error
              at most <InlineMath math="1/1320 \approx 0.000758 < 0.001" />.
              Compute that partial sum:
            </Why>
            <Eq>S_4 ≈ 1 − 0.3333 + 0.1 − 0.02381 + 0.00463 = 0.7475</Eq>
            <Why>
              True value of the integral is{" "}
              <InlineMath math="\approx 0.7468" />, so our estimate
              <InlineMath math="0.7475" /> is off by{" "}
              <InlineMath math="\approx 0.0007" /> — well inside the
              tolerance of <InlineMath math="0.001" />. ✓ Notice how
              the §8.4 AST error bound (which is{" "}
              <InlineMath math="b_{N+1}" />, the magnitude of the next
              term) gave us a much cleaner workflow than Taylor's
              inequality would have here. When the Taylor series is
              alternating with decreasing magnitudes, the AST bound is
              usually tighter and easier to use than the general
              Taylor's inequality.
            </Why>

            <Why>
              <strong>Two flavors of §8.8 problem.</strong> Exam
              questions on §8.8 split into two related types, both
              relying on Taylor's inequality. Type one: you are given a
              specific polynomial degree <InlineMath math="n" /> and an
              evaluation point <InlineMath math="x_0" />, and asked to
              bound the error. Plug into the inequality, find{" "}
              <InlineMath math="M" />, multiply. Type two: you are given
              a desired error tolerance <InlineMath math="\varepsilon" />{" "}
              and asked for the smallest <InlineMath math="n" /> that
              guarantees that tolerance. Set up the inequality{" "}
              <InlineMath math="M \cdot |x_0 - a|^{n+1}/(n+1)! < \varepsilon" />,
              and solve for <InlineMath math="n" /> — usually by trial,
              computing successive values of <InlineMath math="(n+1)!" />{" "}
              until the bound drops below the threshold. Both versions
              are mechanical once you can read Taylor's inequality.
            </Why>

            <Why>
              <strong>The companion estimate for alternating Taylor
              series.</strong> Many of the Taylor series you actually
              meet — <InlineMath math="\sin" />, <InlineMath math="\cos" />,{" "}
              <InlineMath math="\ln(1 + x)" />,{" "}
              <InlineMath math="\arctan x" /> at suitable{" "}
              <InlineMath math="x" /> — are alternating with monotonely
              decreasing term magnitudes. For these, the AST error
              bound from §8.4 is often <em>tighter</em> than Taylor's
              inequality: the AST error is bounded by the magnitude of
              the very next term you would have written, which is
              usually smaller than the worst-case derivative bound{" "}
              <InlineMath math="M \cdot |x - a|^{n+1}/(n+1)!" />. Use
              whichever bound the problem asks for. But remember the
              same warning from §8.4, said one more time for the road:{" "}
              <strong>the AST error bound is the magnitude of the next
              term, not the last term you included.</strong>
            </Why>

            <Why>
              <strong>Pitfalls, expanded (with repeat warnings).</strong>{" "}
              <em>First:</em> finding <InlineMath math="M" /> requires
              you to think about derivatives. Do not skip this step or
              guess. For <InlineMath math="\sin/\cos" /> it is always 1;
              for <InlineMath math="e^x" /> on a compact interval it is
              the value of <InlineMath math="e^x" /> at the far end of
              the interval (always non-negative, choose the larger end);
              for polynomials of degree <InlineMath math="k" />, all
              derivatives past order <InlineMath math="k" /> vanish so{" "}
              <InlineMath math="R_n = 0" /> exactly.{" "}
              <em>Second:</em> Taylor's inequality is an upper bound,
              not the actual error. The actual error is typically a
              few times smaller. Do not over-interpret the bound; do
              not call your approximation "accurate to{" "}
              <InlineMath math="x" /> digits" unless the bound supports
              that claim.{" "}
              <em>Third (the recurring trap):</em> when using the AST
              error bound, the bound is the magnitude of the{" "}
              <em>first omitted</em> term, indexed at{" "}
              <InlineMath math="N + 1" />, not the last included one at{" "}
              <InlineMath math="N" />. Index shifting by one is the
              most common §8.4 / §8.8 mistake under exam pressure.
              Build the habit: write down the next term you would have
              added, take its magnitude, that is your bound.{" "}
              <em>Fourth:</em> these error bounds are valid only inside
              the radius of convergence of the Taylor series. Outside,
              the series does not converge to <InlineMath math="f" />{" "}
              and no error analysis based on the series is meaningful.
              Always sanity-check that the evaluation point{" "}
              <InlineMath math="x_0" /> is within the radius before
              trusting your numbers.
            </Why>

            <Why>
              <strong>Why this matters in practice.</strong> Taylor
              polynomials are how calculators and computers evaluate{" "}
              <InlineMath math="e^x" />, <InlineMath math="\sin" />,{" "}
              <InlineMath math="\cos" />, <InlineMath math="\ln" />,{" "}
              <InlineMath math="\sqrt{x}" />, and other special
              functions under the hood. Pick <InlineMath math="n" />{" "}
              large enough that Taylor's inequality guarantees accuracy
              to (e.g.) machine precision, evaluate the polynomial,
              done. They let you estimate definite integrals with no
              elementary antiderivative — <InlineMath math="\int e^{-x^2} dx" />,
              <InlineMath math="\int \sin(x^2) dx" />,{" "}
              <InlineMath math="\int dx/(1 + x^4)" /> — by expanding
              the integrand and integrating term-by-term. They are the
              starting point for asymptotic methods, perturbation
              theory, and numerical analysis. The convergence
              bookkeeping of §§8.3–8.4 plus the Taylor formula of §8.7
              plus the error bound of §8.8 is the complete tool kit
              for "approximating a function by a polynomial with a
              guaranteed error," which is arguably the single most
              important idea in applied calculus.
            </Why>

            <Why>
              <strong>How this connects back to the rest of the chapter.</strong>{" "}
              §8.8 is the chapter finale — every earlier idea lands
              here. §8.1 gave the limits and growth hierarchy that
              prove the remainder shrinks; §8.2 gave the geometric and
              telescoping prototypes; §8.3 gave the integral and
              comparison ideas that prove convergence of the remainder
              in many cases; §8.4 gave the AST error bound that is
              often the cleanest practical tool; §8.5 gave the
              power-series and radius-of-convergence framework; §8.6
              gave the substitution / integration tricks for deriving
              series quickly; §8.7 gave the general Taylor recipe. §8.8
              uses all of it, all at once, to do something concrete:
              compute function values and integrals to whatever
              precision you want, with a number you can trust.
            </Why>
          </ChapterSection>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Worked Examples
          </h3>

          <WorkedExample
            accentColor={ACCENT}
            title="Sequence limit via L'Hôpital (8.1)"
            problemStatement={
              <>
                Find <InlineMath math="\lim_{n \to \infty} \dfrac{n^2}{e^n}" />.
              </>
            }
            steps={[
              {
                heading: "Treat n as continuous",
                body: (
                  <>
                    <Why>
                      Sequences are defined only at integer n, but their limit
                      is the same as the limit of the corresponding function of
                      a real variable x → ∞. This lets us use calculus tools
                      like L'Hôpital that need a continuous variable.
                    </Why>
                    <Why>
                      Plug in: as <InlineMath math="x \to \infty" />,
                      <InlineMath math="x^2 \to \infty" /> and{" "}
                      <InlineMath math="e^x \to \infty" />. We have an
                      <InlineMath math="\infty/\infty" /> indeterminate form,
                      so L'Hôpital applies.
                    </Why>
                  </>
                ),
              },
              {
                heading: "Apply L'Hôpital twice",
                body: (
                  <>
                    <Why>
                      L'Hôpital says: when the limit is ∞/∞ (or 0/0), replace
                      the ratio with the ratio of derivatives. Repeat if the
                      result is still indeterminate.
                    </Why>
                    <BlockMath math="\lim_{x\to\infty}\dfrac{x^2}{e^x} \stackrel{H}{=} \lim_{x\to\infty}\dfrac{2x}{e^x} \stackrel{H}{=} \lim_{x\to\infty}\dfrac{2}{e^x} = 0" />
                    <Why>
                      Each application of L'Hôpital lowered the polynomial's
                      degree by 1 while the exponential stayed the same — so
                      after two applications the polynomial is just a constant
                      and the denominator wins decisively.
                    </Why>
                  </>
                ),
                result: { label: "Limit", value: "0", color: "purple" },
              },
            ]}
            keyInsight={
              <>
                Big-picture growth hierarchy:{" "}
                <InlineMath math="n! \gg a^n \gg n^p \gg \ln n" />. When a slower
                grower is in the numerator and a faster grower is in the
                denominator, the limit is 0 — no L'Hôpital needed once you've
                seen this pattern. Reverse them and the limit is ∞.
              </>
            }
          />

          <WorkedExample
            accentColor={ACCENT}
            title="Geometric + telescoping (8.2)"
            problemStatement={
              <>
                Compute (a) <InlineMath math="\sum_{n=0}^{\infty} 3 \cdot (1/2)^n" /> and{" "}
                (b) <InlineMath math="\sum_{n=1}^{\infty} \dfrac{1}{n(n+1)}" />.
              </>
            }
            steps={[
              {
                heading: "(a) Geometric",
                body: (
                  <>
                    <Why>
                      Recognize the form a·rⁿ with a = 3, r = 1/2. Since
                      |r| &lt; 1, the geometric series converges to a/(1 − r):
                    </Why>
                    <BlockMath math="\sum = \dfrac{a}{1 - r} = \dfrac{3}{1 - 1/2} = \dfrac{3}{1/2} = 6" />
                  </>
                ),
                result: { label: "Sum (a)", value: "6", color: "purple" },
              },
              {
                heading: "(b) Telescoping via partial fractions",
                body: (
                  <>
                    <Why>
                      The integrand decomposes nicely: each term breaks into
                      two pieces that cancel with adjacent terms when summed.
                      Decompose first:
                    </Why>
                    <Eq>1/(n(n+1)) = 1/n − 1/(n+1)</Eq>
                    <Why>
                      Now write out the partial sum and watch terms cancel:
                    </Why>
                    <BlockMath math="S_N = \Bigl(1 - \tfrac{1}{2}\Bigr) + \Bigl(\tfrac{1}{2} - \tfrac{1}{3}\Bigr) + \dots + \Bigl(\tfrac{1}{N} - \tfrac{1}{N+1}\Bigr) = 1 - \tfrac{1}{N+1}" />
                    <Why>
                      Everything between 1 and 1/(N+1) cancels in the
                      "telescoping" pattern. As N → ∞, 1/(N+1) → 0, leaving 1.
                    </Why>
                  </>
                ),
                result: { label: "Sum (b)", value: "1", color: "purple" },
              },
            ]}
            keyInsight={
              <>
                For telescoping series, decompose by partial fractions{" "}
                <em>before</em> summing — most "internal" terms cancel; only a
                few "boundary" terms survive. Different shifts (1/n − 1/(n+2),
                etc.) leave different boundary terms — write out a few terms
                explicitly to see what survives.
              </>
            }
          />

          <WorkedExample
            accentColor={ACCENT}
            title="Integral test (8.3)"
            problemStatement={
              <>
                Use the integral test to decide whether{" "}
                <InlineMath math="\sum_{n=2}^{\infty} \dfrac{1}{n \ln n}" /> converges.
              </>
            }
            steps={[
              {
                heading: "Verify hypotheses",
                body: (
                  <>
                    <Why>
                      The integral test compares Σ aₙ to the corresponding
                      improper integral. For the comparison to be valid, the
                      function f(x) (with f(n) = aₙ) must be positive,
                      continuous, and decreasing on [N, ∞).
                    </Why>
                    <Eq>f(x) = 1/(x ln x):  positive ✓, continuous ✓, decreasing ✓ on [2, ∞)</Eq>
                    <Why>
                      Both x and ln x grow, so 1/(x ln x) shrinks — decreasing.
                      All conditions met.
                    </Why>
                  </>
                ),
              },
              {
                heading: "Compute the integral",
                body: (
                  <>
                    <Why>
                      Substitute u = ln x. Then du = dx/x, which exactly
                      consumes the x in the denominator:
                    </Why>
                    <BlockMath math="\int_2^{\infty} \dfrac{dx}{x \ln x} = \int_{\ln 2}^{\infty} \dfrac{du}{u} = \ln u\Big|_{\ln 2}^{\infty} = \infty" />
                    <Why>
                      Integral diverges → series diverges. Notice it diverges
                      slowly (like log of log) — this series barely fails to
                      converge.
                    </Why>
                  </>
                ),
                result: { label: "Verdict", value: "Diverges", color: "red" },
              },
              {
                heading: "Compare with 1/(n (ln n)²)",
                body: (
                  <>
                    <Why>
                      Tiny change to the exponent — square the ln — and the
                      behavior flips:
                    </Why>
                    <Eq>∫ dx/(x (ln x)²) = −1/ln x  (finite at ∞)</Eq>
                    <Why>
                      So Σ 1/(n (ln n)²) <em>converges</em>. Illustrates how
                      sensitive the convergence boundary is — the difference
                      between barely-divergent and barely-convergent.
                    </Why>
                  </>
                ),
              },
            ]}
            keyInsight={
              <>
                <InlineMath math="\sum 1/(n \ln n)" /> diverges, but{" "}
                <InlineMath math="\sum 1/(n (\ln n)^p)" /> converges for any{" "}
                <InlineMath math="p > 1" /> — extends the p-series story to
                "log-decorated" series. The convergence threshold is sharp:
                p = 1 is the borderline that fails.
              </>
            }
          />

          <WorkedExample
            accentColor={ACCENT}
            title="Alternating series + error bound (8.4)"
            problemStatement={
              <>
                Estimate <InlineMath math="\sum_{n=1}^{\infty} \dfrac{(-1)^{n+1}}{n^2}" /> by its
                first 4 terms. Bound the error.
              </>
            }
            steps={[
              {
                heading: "Verify AST conditions",
                body: (
                  <>
                    <Why>
                      Alternating Series Test requires three things on the
                      magnitudes bₙ: positive, eventually decreasing, going to
                      zero.
                    </Why>
                    <Eq>bₙ = 1/n²:  &gt; 0 ✓,  decreasing ✓,  → 0 ✓  ⇒  AST applies</Eq>
                  </>
                ),
              },
              {
                heading: "Compute partial sum S₄",
                body: (
                  <>
                    <Why>
                      Sum the first 4 terms with alternating signs:
                    </Why>
                    <BlockMath math="S_4 = 1 - \tfrac{1}{4} + \tfrac{1}{9} - \tfrac{1}{16} = 0.7986\ldots" />
                  </>
                ),
                result: { label: "S₄", value: "≈ 0.7986", color: "purple" },
              },
              {
                heading: "Error bound",
                body: (
                  <>
                    <Why>
                      The AST error bound says: the error after n terms is at
                      most the size of the NEXT (n+1)-th term. Here that's b₅:
                    </Why>
                    <Eq>|S − S₄| ≤ b₅ = 1/25 = 0.04</Eq>
                    <Why>
                      Actual sum is π²/12 ≈ 0.8225, so actual error is{" "}
                      |0.8225 − 0.7986| ≈ 0.0239 — well under our bound of
                      0.04. ✓
                    </Why>
                  </>
                ),
                result: { label: "Error bound", value: "≤ 0.04", color: "purple" },
              },
            ]}
            keyInsight={
              <>
                The AST error bound is the <em>next</em> term (b_{`{n+1}`}),
                not the current one. Easy mistake under exam pressure. The
                alternating-series partial sums oscillate around the true
                value, so they never overshoot by more than one term.
              </>
            }
          />

          <WorkedExample
            accentColor={ACCENT}
            title="Power series radius via ratio test (8.5)"
            problemStatement={
              <>
                Find the radius and interval of convergence of{" "}
                <InlineMath math="\sum_{n=1}^{\infty} \dfrac{(x - 2)^n}{n \cdot 3^n}" />.
              </>
            }
            steps={[
              {
                heading: "Apply the ratio test",
                body: (
                  <>
                    <Why>
                      For a power series, the ratio test gives a condition that
                      depends on x. Compute the limit ratio with x kept as a
                      variable:
                    </Why>
                    <BlockMath math="L = \lim_{n\to\infty} \Bigl|\dfrac{(x-2)^{n+1}/( (n+1) 3^{n+1})}{(x-2)^n/(n \cdot 3^n)}\Bigr| = \dfrac{|x - 2|}{3} \cdot \lim \dfrac{n}{n+1} = \dfrac{|x - 2|}{3}" />
                  </>
                ),
              },
              {
                heading: "Solve L < 1 to find the radius",
                body: (
                  <>
                    <Why>
                      Ratio test says L &lt; 1 means convergence. Solve for x:
                    </Why>
                    <Eq>|x − 2|/3 &lt; 1  ⇒  |x − 2| &lt; 3,  so R = 3</Eq>
                    <Why>
                      The series converges on the open interval centered at
                      x = 2 with width 6: (2 − 3, 2 + 3) = (−1, 5). Endpoints
                      need separate checking.
                    </Why>
                  </>
                ),
                result: { label: "R", value: "3", color: "purple" },
              },
              {
                heading: "Check endpoints",
                body: (
                  <>
                    <Why>
                      Plug x = −1 and x = 5 into the original series and
                      examine each by hand. The (x − 2)/3 factor becomes ±1,
                      simplifying drastically.
                    </Why>
                    <Eq>x = −1:  Σ (−3)ⁿ/(n·3ⁿ) = Σ (−1)ⁿ/n  (alternating harmonic — converges)</Eq>
                    <Eq>x = 5:   Σ 3ⁿ/(n·3ⁿ)   = Σ 1/n        (harmonic — diverges)</Eq>
                    <Why>
                      So x = −1 is in, x = 5 is out. Final interval: [−1, 5).
                    </Why>
                  </>
                ),
                result: { label: "Interval", value: "[−1, 5)", color: "purple" },
              },
            ]}
            keyInsight={
              <>
                The radius comes from the ratio test; the endpoints have to be
                tested separately — they can each independently converge or
                diverge. Common notation: an open dot for diverging endpoints,
                closed dot for converging, on the number-line representation
                of the interval.
              </>
            }
          />

          <WorkedExample
            accentColor={ACCENT}
            title="Taylor coefficients + remainder bound (8.7-8.8)"
            problemStatement={
              <>
                Use the degree-5 Maclaurin polynomial of <InlineMath math="\sin x" /> to
                approximate <InlineMath math="\sin(0.5)" />. Bound the error.
              </>
            }
            steps={[
              {
                heading: "Maclaurin polynomial of sin x",
                body: (
                  <>
                    <Why>
                      Memorize: sin x = x − x³/3! + x⁵/5! − … . Through degree
                      5, that's:
                    </Why>
                    <BlockMath math="T_5(x) = x - \tfrac{x^3}{6} + \tfrac{x^5}{120}" />
                  </>
                ),
              },
              {
                heading: "Plug in x = 0.5",
                body: (
                  <>
                    <Why>
                      Substitute and evaluate. The terms shrink fast: 0.5 →
                      0.02 → 0.0003. Most contribution comes from the first
                      term:
                    </Why>
                    <BlockMath math="T_5(0.5) = 0.5 - \tfrac{0.125}{6} + \tfrac{0.03125}{120} = 0.5 - 0.02083 + 0.000260 \approx 0.47943" />
                  </>
                ),
                result: { label: "T₅(0.5)", value: "≈ 0.47943", color: "purple" },
              },
              {
                heading: "Taylor error bound",
                body: (
                  <>
                    <Why>
                      Taylor's inequality: |R_n(x)| ≤ M·|x − a|^(n+1)/(n+1)!,
                      where M bounds the (n+1)-th derivative on the relevant
                      interval. For sin x, every derivative is ±sin or ±cos —
                      magnitude bounded by 1.
                    </Why>
                    <Eq>M = 1   (for any derivative of sin x)</Eq>
                    <BlockMath math="|R_5(0.5)| \le \dfrac{M}{6!} \cdot 0.5^6 = \dfrac{1}{720} \cdot 0.015625 \approx 2.17 \times 10^{-5}" />
                    <Why>
                      Tiny error bound — degree 5 is more than enough for
                      x = 0.5. Actual sin(0.5) ≈ 0.47943, matches T_5 to 5
                      decimals.
                    </Why>
                  </>
                ),
                result: { label: "Error bound", value: "≤ 2.17 × 10⁻⁵", color: "purple" },
              },
            ]}
            keyInsight={
              <>
                For <InlineMath math="\sin/\cos" />, every derivative is bounded
                by 1 — the Taylor error is the simplest of all classical
                functions: just <InlineMath math="|x|^{n+1}/(n+1)!" />. That's
                why Taylor expansions of trig functions are so accurate even
                with low-degree polynomials.
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
            title="Sequence limits"
            statement={<>Find each limit (or show it diverges).</>}
            parts={[
              {
                label: "(a)",
                question: <InlineMath math="\lim_{n \to \infty} \dfrac{4n^3 - n}{2n^3 + 1}" />,
                solutionSteps: (
                  <>
                    <Why>
                      Rational function in n — divide top and bottom by the
                      highest power (n³) to expose the dominant terms:
                    </Why>
                    <Eq>(4 − 1/n²)/(2 + 1/n³)  →  4/2 = 2</Eq>
                  </>
                ),
                answer: { value: "2" },
              },
              {
                label: "(b)",
                question: <InlineMath math="\lim_{n \to \infty} \Bigl(1 + \dfrac{2}{n}\Bigr)^n" />,
                solutionSteps: (
                  <>
                    <Why>
                      Recognize the form (1 + a/n)ⁿ → e^a (one of the
                      definitions of e). Here a = 2, so the limit is e².
                    </Why>
                  </>
                ),
                answer: { value: "e² ≈ 7.389" },
              },
              {
                label: "(c)",
                question: <InlineMath math="\lim_{n \to \infty} \dfrac{\ln n}{n}" />,
                solutionSteps: (
                  <>
                    <Why>
                      Form ∞/∞. Apply L'Hôpital (treating n as continuous): top
                      derivative is 1/n, bottom is 1, so limit is 1/n → 0.
                      Confirms the growth hierarchy: any polynomial beats ln n.
                    </Why>
                  </>
                ),
                answer: { value: "0" },
              },
            ]}
          />

          <PracticeProblem
            accentColor={ACCENT}
            title="Geometric & telescoping series"
            statement={<>Sum each, or show it diverges.</>}
            parts={[
              {
                label: "(a)",
                question: <InlineMath math="\sum_{n=1}^{\infty} \dfrac{4}{5^n}" />,
                solutionSteps: (
                  <>
                    <Why>
                      Geometric with a (first term, n=1) = 4/5 and r = 1/5:
                    </Why>
                    <BlockMath math="= 4 \cdot \sum_{n=1}^{\infty} (1/5)^n = 4 \cdot \dfrac{1/5}{1 - 1/5} = 4 \cdot \dfrac{1}{4} = 1" />
                  </>
                ),
                answer: { value: "1" },
              },
              {
                label: "(b)",
                question: <InlineMath math="\sum_{n=1}^{\infty} \dfrac{(-3)^{n-1}}{4^n}" />,
                solutionSteps: (
                  <>
                    <Why>
                      Rewrite to expose the geometric form (a · r^(n−1) starting
                      at n = 1, with a = first term):
                    </Why>
                    <Eq>= (1/4) Σ (−3/4)^(n−1) = (1/4) · 1/(1 − (−3/4)) = (1/4) · 4/7 = 1/7</Eq>
                  </>
                ),
                answer: { value: "1/7" },
              },
              {
                label: "(c)",
                question: <InlineMath math="\sum_{n=1}^{\infty} \Bigl(\dfrac{1}{n} - \dfrac{1}{n+2}\Bigr)" />,
                solutionSteps: (
                  <>
                    <Why>
                      Telescoping with shift of 2 — write out a few partial sums
                      to see what cancels:
                    </Why>
                    <Eq>S_N = (1 − 1/3) + (1/2 − 1/4) + (1/3 − 1/5) + …</Eq>
                    <Why>
                      The 1/3, 1/4, 1/5, … all eventually cancel. What survives
                      is the first two positive terms (1 and 1/2) and the last
                      two negative terms (1/(N+1) and 1/(N+2)):
                    </Why>
                    <Eq>S_N = 1 + 1/2 − 1/(N+1) − 1/(N+2)  →  3/2  as N → ∞</Eq>
                  </>
                ),
                answer: { value: "3/2" },
              },
            ]}
          />

          <PracticeProblem
            accentColor={ACCENT}
            title="Convergence tests"
            statement={<>For each series, identify the best test and apply it.</>}
            parts={[
              {
                label: "(a)",
                question: <InlineMath math="\sum_{n=1}^{\infty} \dfrac{n}{n^2 + 1}" />,
                solutionSteps: (
                  <>
                    <Why>
                      For large n, this looks like 1/n (the harmonic series).
                      Use limit comparison to confirm:
                    </Why>
                    <Eq>lim aₙ / (1/n) = lim n² / (n² + 1) = 1  (finite, &gt; 0)</Eq>
                    <Why>
                      Same fate as the harmonic series — diverges.
                    </Why>
                  </>
                ),
                answer: { value: "Diverges (limit comparison with harmonic)" },
              },
              {
                label: "(b)",
                question: <InlineMath math="\sum_{n=0}^{\infty} \dfrac{n^2}{2^n}" />,
                solutionSteps: (
                  <>
                    <Why>
                      Exponential 2ⁿ in the denominator → ratio test should
                      simplify cleanly:
                    </Why>
                    <Eq>lim |a_(n+1)/aₙ| = lim ((n+1)/n)² · (1/2) = 1/2 &lt; 1</Eq>
                    <Why>
                      Converges absolutely. Exponential beats polynomial.
                    </Why>
                  </>
                ),
                answer: { value: "Converges (ratio test, L = 1/2)" },
              },
              {
                label: "(c)",
                question: <InlineMath math="\sum_{n=1}^{\infty} \dfrac{(-1)^n}{2n + 1}" />,
                solutionSteps: (
                  <>
                    <Why>
                      Sign-alternating → AST. Check conditions on |aₙ| =
                      1/(2n+1): positive ✓, decreasing ✓, → 0 ✓. So converges.
                    </Why>
                    <Why>
                      Then check absolute convergence. |aₙ| ~ 1/n behavior —
                      diverges (compare to harmonic). So convergence is
                      conditional, not absolute.
                    </Why>
                  </>
                ),
                answer: { value: "Conditionally convergent" },
              },
              {
                label: "(d)",
                question: <InlineMath math="\sum_{n=1}^{\infty} \dfrac{n!}{(2n)!}" />,
                solutionSteps: (
                  <>
                    <Why>
                      Factorials → ratio test. Cancel terms:
                    </Why>
                    <Eq>(n+1)! · (2n)! / [n! · (2n+2)!] = (n+1) / [(2n+1)(2n+2)] → 0</Eq>
                    <Why>
                      L = 0 &lt; 1, converges absolutely. Factorials in
                      denominator beat factorials in numerator when the
                      denominator grows faster.
                    </Why>
                  </>
                ),
                answer: { value: "Converges (ratio test, L = 0)" },
              },
            ]}
          />

          <PracticeProblem
            accentColor={ACCENT}
            title="Power series: radius and interval"
            statement={<>Find R and the interval of convergence (test endpoints).</>}
            parts={[
              {
                label: "(a)",
                question: <InlineMath math="\sum_{n=0}^{\infty} \dfrac{x^n}{n!}" />,
                solutionSteps: (
                  <>
                    <Why>
                      Ratio test:
                    </Why>
                    <Eq>lim |x^(n+1)/(n+1)! · n!/x^n| = lim |x|/(n+1) = 0  for any x</Eq>
                    <Why>
                      L = 0 &lt; 1 always, so the series converges for every x.
                      R = ∞. (This series IS e^x, so it had to converge
                      everywhere.)
                    </Why>
                  </>
                ),
                answer: { value: "R = ∞, interval = ℝ" },
              },
              {
                label: "(b)",
                question: <InlineMath math="\sum_{n=1}^{\infty} \dfrac{(x + 1)^n}{n^2}" />,
                solutionSteps: (
                  <>
                    <Why>
                      Ratio test:
                    </Why>
                    <Eq>lim |x+1| · n² / (n+1)² = |x+1| · 1 = |x+1|</Eq>
                    <Why>
                      Converges when |x + 1| &lt; 1, so R = 1, centered at
                      x = −1. Open interval (−2, 0). Now check endpoints:
                    </Why>
                    <Eq>x = −2:  Σ (−1)ⁿ/n²  — converges absolutely (p-test)</Eq>
                    <Eq>x = 0:   Σ 1/n²       — converges (p-test, p = 2)</Eq>
                    <Why>
                      Both endpoints in. Closed interval [−2, 0].
                    </Why>
                  </>
                ),
                answer: { value: "R = 1, interval = [−2, 0]" },
              },
            ]}
          />

          <PracticeProblem
            accentColor={ACCENT}
            title="Taylor series & approximations"
            statement={<>Use known Maclaurin series; substitute, differentiate, or integrate term-by-term.</>}
            parts={[
              {
                label: "(a)",
                question: <>Find the Maclaurin series of <InlineMath math="f(x) = \cos(x^2)" />.</>,
                solutionSteps: (
                  <>
                    <Why>
                      Don't compute derivatives of cos(x²) — that gets ugly fast.
                      Instead, take the known Maclaurin series for cos and
                      substitute x² for x:
                    </Why>
                    <Eq>cos x = Σ (−1)ⁿ x^(2n) / (2n)!</Eq>
                    <BlockMath math="\cos(x^2) = \sum_{n=0}^{\infty} \dfrac{(-1)^n x^{4n}}{(2n)!}" />
                    <Why>
                      Powers became 4n because we squared x. Coefficients (the
                      1/(2n)! and signs) stay put.
                    </Why>
                  </>
                ),
                answer: { value: "Σ (−1)ⁿ x^(4n) / (2n)!" },
              },
              {
                label: "(b)",
                question: <>Use the Maclaurin series for <InlineMath math="e^x" /> to estimate <InlineMath math="\int_0^1 e^{-x^2}\,dx" /> to within 0.001.</>,
                solutionSteps: (
                  <>
                    <Why>
                      e^(−x²) has no elementary antiderivative — but its
                      Maclaurin series can be integrated term-by-term:
                    </Why>
                    <Eq>e^(−x²) = Σ (−1)ⁿ x^(2n) / n!</Eq>
                    <BlockMath math="\int_0^1 e^{-x^2}\,dx = \sum_{n=0}^{\infty} \dfrac{(-1)^n}{n!\,(2n+1)} = 1 - \tfrac{1}{3} + \tfrac{1}{10} - \tfrac{1}{42} + \tfrac{1}{216} - \tfrac{1}{1320} + \dots" />
                    <Why>
                      Alternating series with decreasing |terms|. AST error
                      bound: stop when the next term is smaller than the
                      tolerance. 1/1320 ≈ 0.00076 &lt; 0.001 — so the partial
                      sum through 1/216 is accurate enough:
                    </Why>
                    <Eq>≈ 1 − 0.3333 + 0.1 − 0.02381 + 0.00463 = 0.7475   (true: 0.7468)</Eq>
                  </>
                ),
                answer: { value: "≈ 0.7475 (within 0.001 of true 0.7468)" },
              },
            ]}
          />
        </section>

        <section>
          <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-gray-700 dark:text-gray-200">
                You've covered all four chapters. Test yourself:
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/math/drill">
                  <Button variant="outline">Drill Ch 8</Button>
                </Link>
                <Link href="/math/cheat-sheet">
                  <Button variant="outline">Cheat Sheet</Button>
                </Link>
                <Link href="/math/final-boss">
                  <Button style={{ background: ACCENT, color: "white" }}>
                    Final Boss →
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
