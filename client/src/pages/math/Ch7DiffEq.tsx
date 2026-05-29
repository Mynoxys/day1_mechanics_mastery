import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { ChapterSection } from "@/components/math/ChapterSection";
import { MathFormula } from "@/components/math/MathFormula";
import { DirectionFieldViz } from "@/components/math/DirectionFieldViz";
import { BlockMath, InlineMath } from "@/components/math/Katex";
import { WorkedExample, Eq, Why } from "@/components/midterm/WorkedExample";
import { PracticeProblem } from "@/components/midterm/PracticeProblem";

const ACCENT = "#f59e0b";
const SEE_BELOW = (
  <p className="text-xs italic text-gray-500 dark:text-gray-400">
    See full worked examples + practice at the bottom of this chapter ↓
  </p>
);

export default function Ch7DiffEq() {
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
            Ch 7 · Differential Equations
          </h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container py-10 space-y-10">
        <section className="rounded-2xl bg-amber-50 dark:bg-slate-800 p-8">
          <span
            className="inline-block text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-3"
            style={{ background: ACCENT }}
          >
            Sections 7.1 – 7.3
          </span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Solve equations whose unknown is a function
          </h2>
          <div className="text-gray-700 dark:text-gray-200 max-w-3xl space-y-4">
            <p>
              Up to now, every equation you've solved had a <em>number</em> for an
              answer. Solve <InlineMath math="x^2 - 5x + 6 = 0" /> and you get
              <InlineMath math="x = 2" /> or <InlineMath math="x = 3" /> — discrete
              values, two of them, end of story. A <strong>differential equation</strong>
              is the same idea cranked up a level: the unknown is not a number, it's a
              whole <em>function</em>. The equation hands you a description of how fast
              that function is changing, and your job is to recover the function itself.
              Instead of "what number satisfies this constraint?" you're asking "what
              <em> rule</em>, what entire curve <InlineMath math="y(x)" />, satisfies
              this constraint at every point along its length?" The answer isn't a dot
              on the number line; it's a path across the plane.
            </p>
            <p>
              This sounds abstract until you notice that almost every physical process
              you've ever heard described <em>is</em> a description of a rate. A lump
              of uranium emits particles at a rate proportional to how much uranium is
              left — that's a differential equation. A culture of <em>E. coli</em> in a
              Petri dish doubles every twenty minutes because every existing bacterium
              splits at a steady per-bacterium rate — that's a differential equation.
              A skydiver falls under gravity but is also slowed by air drag that grows
              with speed, so her acceleration depends on her current velocity — that's
              a differential equation. A coffee cup loses heat at a rate that depends on
              how much hotter it is than the room — that's a differential equation. A
              charged capacitor in an RC circuit (the ESE 123 sense: an
              <InlineMath math="R" /> and a <InlineMath math="C" /> in series with a
              switch) discharges with the current it pushes out being proportional to
              the voltage left on it, which is itself proportional to the remaining
              charge — that's a differential equation, and it's literally the same
              equation as the uranium and the bacteria, just with different letters
              taped on. Once you start looking, everything is a rate of something
              depending on a current state.
            </p>
            <p>
              The chapter has a clean three-act structure. <strong>Section 7.1</strong>
              is the translation step: someone hands you a verbal description — "the
              rate at which the salt in a brine tank changes is the salt flowing in
              minus the salt flowing out" — and you learn to render that sentence as
              symbols on a page. You'll learn three canonical templates that cover
              almost every Calc II story problem: pure exponential growth or decay
              (<InlineMath math="dy/dt = ky" />), logistic growth that hits a ceiling
              (<InlineMath math="dP/dt = kP(1-P/M)" />), and Newton's law of cooling
              where the rate depends on a temperature gap
              (<InlineMath math="dT/dt = -k(T-T_{\text{env}})" />). Recognizing
              <em> which template the story is in</em> is half the battle, and the
              section spends most of its time on exactly that recognition.
            </p>
            <p>
              <strong>Section 7.2</strong> takes a hard turn into geometry. It asks:
              what if I can't solve the DE in closed form — or, more honestly, what
              does the DE even <em>look</em> like as a picture? The answer is the
              <strong> slope field</strong>: at every point <InlineMath math="(x, y)" />
              in the plane, the DE tells you what slope a solution curve would have
              if it happened to pass through that point. Plot a tiny dash with that
              slope at a forest of lattice points and you've drawn the DE. A
              <em> solution</em> is then any curve threading through the dashes,
              tangent to each one it crosses — like a leaf carried along a river
              whose direction is drawn on the surface. From this picture
              <strong> Euler's method</strong> falls out almost trivially: start
              somewhere, read the local slope, take a short straight step in that
              direction, read the new slope, step again. You're walking along the
              river. That's it. That's the whole numerical method.
            </p>
            <p>
              <strong>Section 7.3</strong> is the one analytic technique you learn for
              first-order DEs: <strong>separation of variables</strong>. If the
              right-hand side of <InlineMath math="dy/dx = f(x, y)" /> happens to
              factor as <InlineMath math="g(x) \cdot h(y)" /> — all the
              <InlineMath math="x" /> stuff on one side of a product, all the
              <InlineMath math="y" /> stuff on the other — you can algebraically
              separate the differentials, integrate each side independently, and
              read off a formula for <InlineMath math="y" />. It is breathtakingly
              simple when it works, and most of the named DE templates from 7.1
              (exponential, logistic, Newton cooling) are separable, which is why
              they have closed-form solutions at all.
            </p>
            <p>
              Underneath all three sections is one unifying mental move worth burning
              into your brain right now: <em>a differential equation says "the slope
              at every point depends on where you are."</em> A solution is a curve that
              has exactly that slope at every point along its length. Pick a starting
              point and the slope rule traces out one particular curve. Pick a different
              starting point and you get a different curve — the same DE, the same
              slope rule, but a different trajectory through the plane. The set of all
              those curves, one for each starting point, is called the <em>family of
              solutions</em>, and the constant <InlineMath math="C" /> that pops out of
              every integration is what indexes that family. When you "apply an initial
              condition" you're just picking out which curve from the family is the one
              you want.
            </p>
            <p>
              <strong>What you should already know coming in.</strong> Derivatives as
              instantaneous rates of change, not just as algebraic procedures — when you
              see <InlineMath math="dy/dt" /> you should feel "how fast <InlineMath math="y" />
              is changing per unit of <InlineMath math="t" />" before you feel "apply the
              power rule." The antiderivative table from Ch 5 (powers, exponentials,
              <InlineMath math="1/x" />, sines and cosines) — you will be integrating both
              sides of equations constantly, and slow integration ruins this chapter.
              Algebra of exponentials and logarithms: <InlineMath math="e^{a+b} = e^a e^b" />,
              <InlineMath math="\ln(ab) = \ln a + \ln b" />,
              <InlineMath math="e^{\ln x} = x" />, and the move from
              <InlineMath math="\ln|y| = \text{stuff}" /> to
              <InlineMath math="y = \pm e^{\text{stuff}}" />. The chain rule, because
              every separable solution implicitly uses it in reverse when we treat
              <InlineMath math="dy" /> and <InlineMath math="dx" /> as objects you can
              push around. And the geometric intuition for slope from the very start of
              Calc I — a derivative <em>is</em> a slope, and a slope field <em>is</em>
              a derivative drawn at every point.
            </p>
            <p>
              <strong>A preview of the most common pitfalls</strong>, so you can watch
              for them as they show up. <em>The +C trap:</em> when you integrate both
              sides of a separated equation, write <InlineMath math="+C" /> on
              <em> one</em> side only, not once on each side. The two would-be
              constants merge into a single arbitrary constant — writing two
              <InlineMath math="+C" />'s is harmless but writing two
              <em> different</em> constants confuses you and them.
              <em> The equilibrium-solution killer:</em> when you divide both sides by
              <InlineMath math="h(y)" /> to separate, you secretly assumed
              <InlineMath math="h(y) \neq 0" />. Every solution
              <InlineMath math="y(x) = c" /> with <InlineMath math="h(c) = 0" />
              just got deleted from your answer. The logistic <InlineMath math="P=0" />
              and <InlineMath math="P=M" /> are the famous examples. Always check for
              these separately and list them alongside the family.
              <em> The Newton-cooling sign mistake:</em> when <InlineMath math="T" /> is
              greater than <InlineMath math="T_{\text{env}}" /> the coffee is cooling,
              so <InlineMath math="dT/dt" /> must be negative — the minus sign in
              <InlineMath math="dT/dt = -k(T-T_{\text{env}})" /> is there for exactly
              that reason. Don't memorize "minus sign because cooling"; instead
              sanity-check: when the object is hotter than the room, the rate has to be
              negative, period. Whichever sign convention achieves that is the right
              one. <em>The Euler-too-coarse trap:</em> with a step
              <InlineMath math="h" /> that's too large compared to how fast the
              solution is curving, the errors compound exponentially and your numerical
              answer is garbage. Always rerun with half the step size and see whether
              the answer moves; if it does, keep shrinking.
            </p>
            <p>
              <strong>How to read this chapter.</strong> The headline-formula cards
              just below are not a cheat sheet to memorize — they are an
              <em> index</em>. Each one points to a section where you'll meet the
              equation in plain English first, see it derived from a story, watch it
              solved on a concrete example, and then sit with a slope-field
              visualization where you can drag a slider and see the picture change.
              Every section starts with a "why" paragraph that tries to translate the
              math into English before any symbols appear, then walks through one or
              two worked mini-examples inside the section itself, and ends with a
              "common pitfalls" note. After all three sections come full
              <em> Worked Examples</em> (Stewart-style, multi-step, with sanity checks
              and unit checks) and then <em>Practice Problems</em> you should try
              before peeking at the solution. The interactive slope-field visualizer
              appears in several places — every appearance lets you type in your own
              <InlineMath math="f(x, y)" /> and watch the flow pattern change in real
              time. Use it. Spend ten unhurried minutes with each one. The whole point
              of this chapter is the geometry, and the geometry only sinks in when you
              play.
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
              name="Exponential growth / decay"
              latex="\frac{dy}{dt} = ky \;\Rightarrow\; y(t) = y_0 e^{kt}"
              variables={[
                {
                  symbol: "k",
                  meaning:
                    "rate constant — positive means y is growing (each unit added to y adds even more next), negative means y is decaying (more y now leads to faster shrinkage)",
                },
                {
                  symbol: "y_0",
                  meaning: "initial amount at t = 0",
                },
              ]}
              whenToUse="When the rate of change of y is proportional to y itself. The intuition: 'the more I have, the faster I get more (or lose more)'. Bacterial growth, radioactive decay, compound interest, population in unlimited resources, RC discharge in circuits — all fit this template. Half-life: t₁/₂ = ln 2 / |k|. Doubling time: same formula."
            />
            <MathFormula
              accentColor={ACCENT}
              name="Logistic equation"
              latex="\frac{dP}{dt} = kP\Bigl(1 - \frac{P}{M}\Bigr)"
              variables={[
                {
                  symbol: "M",
                  meaning:
                    "carrying capacity — the maximum population the environment can sustain. P approaches M as t → ∞",
                },
                {
                  symbol: "k",
                  meaning:
                    "intrinsic growth rate — the rate the population would grow at if resources were unlimited (i.e. when P is small)",
                },
              ]}
              whenToUse="Realistic population growth with limited resources. Behaves like exponential when P ≪ M (the (1 − P/M) factor is ≈ 1), but as P approaches M the brakes kick in and growth slows to zero. Closed-form solution: P(t) = M / (1 + A·e^(−kt)) where A = (M − P₀)/P₀. The S-curve."
            />
            <MathFormula
              accentColor={ACCENT}
              name="Newton's law of cooling"
              latex="\frac{dT}{dt} = -k(T - T_{\text{env}})"
              variables={[
                {
                  symbol: "T_{env}",
                  meaning: "ambient (room) temperature — the value T eventually approaches",
                },
                {
                  symbol: "k > 0",
                  meaning:
                    "cooling rate constant — bigger k means heat exchanges faster with the environment (insulated objects have small k)",
                },
              ]}
              whenToUse="An object exchanging heat with surrounding air/water reaches the ambient temperature exponentially. The 'minus' sign matters: when T > T_env (hot object), the rate is negative (cooling). When T < T_env (cold object), rate is positive (warming). Trick: substitute u = T − T_env, the equation becomes du/dt = −ku — pure exponential decay with no offset. Solution: T(t) = T_env + (T₀ − T_env)·e^(−kt)."
            />
            <MathFormula
              accentColor={ACCENT}
              name="Euler's method"
              latex="y_{n+1} = y_n + h\cdot f(x_n, y_n)"
              variables={[
                {
                  symbol: "h",
                  meaning:
                    "step size — distance in x between consecutive samples. Smaller h = more accurate, more compute",
                },
                {
                  symbol: "f(x, y)",
                  meaning: "the slope dy/dx evaluated at the current (x, y)",
                },
              ]}
              whenToUse="Numerical solution to dy/dx = f(x, y) when no closed form exists or you just want a computed answer. Idea: at each point, use the local slope to take a tiny step forward — the slope tells you which direction the solution curve goes, and you follow it. Error compounds linearly with each step: halve h → roughly half the global error (1st-order method)."
            />
            <MathFormula
              accentColor={ACCENT}
              name="Separable equation recipe"
              latex="\frac{dy}{dx} = g(x)\,h(y) \;\Rightarrow\; \int \frac{dy}{h(y)} = \int g(x)\,dx"
              variables={[]}
              whenToUse="The only analytic technique you need for this chapter. If you can write dy/dx as a product of (something only in x) times (something only in y), the equation 'separates': move all y's (with dy) to one side, all x's (with dx) to the other, integrate both sides, add ONE +C, solve for y. Watch for equilibrium solutions where h(y) = 0 — dividing by h(y) kills them, list them separately."
            />
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Sections
          </h3>

          <ChapterSection
            id="s7-1"
            number="7.1"
            title="Modeling with Differential Equations"
            accentColor={ACCENT}
            blurb="Translate a written description of a rate into an equation; identify variables."
          >
            <Why>
              Every problem in this chapter starts as a <em>sentence about a rate</em>,
              not as an equation. Someone tells you a story — bacteria are splitting
              every twenty minutes, hot coffee is sitting on a desk in a cool room,
              a pond can only sustain so many fish, a radioactive sample is losing
              mass, a savings account is compounding continuously — and asks you what
              the population, the temperature, the remaining mass, or the account
              balance looks like as a function of time. The unknown isn't a number.
              It's a whole function. That's the new thing in Ch 7: instead of solving
              for <InlineMath math="x" />, you're solving for an entire curve
              <InlineMath math="y(t)" /> whose <em>slope at each instant</em> is
              dictated by the story.
            </Why>
            <Why>
              Take a moment to digest what that really means. In Calc I you computed
              derivatives — given a function you produced its slope rule. In this
              chapter you do the inverse: you're <em>given</em> a slope rule and asked
              to find the function it came from. The slope rule isn't a bare formula
              in <InlineMath math="x" />, though; it's a rule that depends on the
              <em> current value</em> of the function itself. "The faster you have
              been growing, the faster you will grow." That feedback — output of the
              function feeds back into the rule for how the function changes — is what
              makes differential equations both more powerful and more interesting
              than plain antidifferentiation. Plain antidifferentiation handles
              <InlineMath math="dy/dx = 2x" /> by integrating: <InlineMath math="y = x^2 + C" />.
              But the moment the right side mentions <InlineMath math="y" /> at all
              — <InlineMath math="dy/dx = 2xy" />, say — you've left antidifferentiation
              territory and entered DE territory, and you need a different toolkit.
            </Why>
            <Why>
              Before any symbols, let's recover the concept of <em>rate</em> from
              first principles, because everything in this section hangs off it. A
              rate is a ratio of two changes: how much one quantity moves per unit of
              another. Velocity is a rate (meters per second). Population growth is a
              rate (cells per hour). Cooling is a rate (degrees per minute). When we
              say "the rate at which <InlineMath math="y" /> is changing" we mean
              <InlineMath math="dy/dt" /> — the instantaneous slope of the function
              <InlineMath math="y(t)" />, which has units of "<InlineMath math="y" />
              units per <InlineMath math="t" /> unit." When a problem says "the rate
              is proportional to <InlineMath math="y" />," the proportionality
              constant <InlineMath math="k" /> has units of "per <InlineMath math="t" />
              unit" so that the units work out:
              <InlineMath math="[dy/dt] = [k] \cdot [y]" /> means
              <InlineMath math="\text{y-units}/\text{time} = (1/\text{time}) \cdot \text{y-units}" />.
              That unit check is your first sanity-tool for catching modeling errors.
            </Why>
            <Why>
              The translation step is almost mechanical once you see it. Whenever
              the problem says "rate of change of X", write <InlineMath math="dX/dt" />.
              Whenever it says "proportional to Y", write
              "<InlineMath math="= k \cdot Y" />". Whenever it says "proportional to
              the difference between X and something", write
              "<InlineMath math="= k(X - \text{something})" />". When it says
              "inversely proportional," divide instead of multiply. When it says
              "the difference between the rate at which it comes in and the rate at
              which it leaves," subtract those two rates. The whole game in 7.1 is
              learning to spot which of three canonical templates the story fits, and
              then writing the equation by inspection.
            </Why>
            <Why>
              <strong>One more piece of prerequisite glue before the templates: why
              the exponential function exists at all.</strong> The function
              <InlineMath math="e^x" /> is the unique function (up to a constant
              multiple) that equals its own derivative. That is a strange and
              powerful claim, so let it land. Most functions get steeper when you
              differentiate them (<InlineMath math="x^3" /> has slope
              <InlineMath math="3x^2" />, which is a different function); some get
              completely different (<InlineMath math="\sin x" /> has slope
              <InlineMath math="\cos x" />). But <InlineMath math="e^x" /> has slope
              <InlineMath math="e^x" />. The height of the curve at any point
              <em> is</em> the slope of the curve at that point. That's a self-
              referential property — and it's <em>exactly</em> the property a
              quantity has when its rate of change is proportional to itself. So the
              moment you see "rate proportional to amount" you should already be
              hearing "exponential function" before you even write a symbol. The
              <InlineMath math="e^{kt}" /> we'll keep writing is just
              <InlineMath math="e^x" /> with its <InlineMath math="x" /> stretched by
              <InlineMath math="k" /> so the rate of growth (or decay, if
              <InlineMath math="k" /> is negative) matches the rate the problem
              specifies. Internalize this and the exponential solutions of 7.1 stop
              feeling like memorization.
            </Why>

            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-4">
              Template 1: exponential — the rate is proportional to the amount
            </h4>
            <Why>
              Picture a single bacterium in a Petri dish with infinite food. It splits
              in two. Now there are two, and each of them splits — four, eight, sixteen.
              The more bacteria you have, the more splittings per minute happen, because
              every existing bacterium contributes its own splitting rate. "The rate of
              new bacteria depends on how many bacteria you already have" — that's the
              English version of <InlineMath math="dN/dt \propto N" />.
            </Why>
            <Why>
              Why does this <em>have</em> to be exponential? Imagine you doubled the
              population overnight — twice as many bacteria, each still splitting at
              the same per-bacterium rate. The total splitting rate also doubles. So
              the rate scales linearly with the amount, and "rate proportional to
              amount" is exactly the property <InlineMath math="e^{kt}" /> was designed
              to have. Plug in <InlineMath math="N(t) = N_0 e^{kt}" /> and differentiate:
              <InlineMath math="dN/dt = k N_0 e^{kt} = k N(t)" />. The check goes
              through in one line. Any other shape — a polynomial, a sine, a
              logarithm — fails the proportionality test. Exponential is the
              <em> only</em> shape that solves this DE.
            </Why>
            <BlockMath math="\frac{dN}{dt} = kN \quad\Rightarrow\quad N(t) = N_0\, e^{kt}" />
            <Why>
              The same shape covers radioactive decay (every atom has a fixed chance
              per second of breaking, so more atoms = more breakings per second, but
              now <InlineMath math="k" /> is negative), an RC capacitor discharging
              (more charge left means more voltage means more current draining it,
              and you see this exact equation in ESE 123 with
              <InlineMath math="dQ/dt = -Q/(RC)" />), and continuously compounded
              interest (more money in the account means more interest accruing,
              with <InlineMath math="k" /> equal to the annual interest rate).
              One template, four physics scenarios. Whenever you hear "doubling time"
              or "half-life", you are guaranteed to be in this template — those
              phrases only make sense for pure exponentials, because only exponentials
              have the property that the time to multiply by any fixed factor is the
              same no matter where you start. (Starting at 100 atoms and waiting for
              50 takes the same time as starting at 1000 atoms and waiting for 500.
              That's the half-life. It's a feature of the shape, not the starting
              point.)
            </Why>
            <Why>
              <strong>Mini-example: radioactive carbon-14 dating.</strong> Carbon-14
              has a half-life of about 5730 years. A wood sample from an archaeological
              dig contains 30% of the carbon-14 that a living tree would have. How old
              is the sample? Translate first. "Half-life 5730 years" means
              <InlineMath math="N(5730) = N_0/2" />. With
              <InlineMath math="N(t) = N_0 e^{-kt}" /> (decay, so the constant is
              negative; we'll write it as <InlineMath math="-k" /> with
              <InlineMath math="k > 0" />), we get
              <InlineMath math="1/2 = e^{-5730 k}" />, so
              <InlineMath math="k = \ln 2 / 5730 \approx 1.21 \times 10^{-4}" /> per
              year. Now we want the time when <InlineMath math="N/N_0 = 0.30" />:
            </Why>
            <Eq>
              0.30 = e^(−kt){"\n"}
              t = −ln(0.30)/k = ln(1/0.30) / (ln 2 / 5730){"\n"}
              t = 5730 · ln(10/3) / ln 2 ≈ 5730 · 1.204 / 0.693{"\n"}
              t ≈ 9950 years
            </Eq>
            <Why>
              About 10 000 years old, give or take. Sanity-check: 30% is more than 25%
              (which would be exactly two half-lives = 11 460 years) and less than 50%
              (which would be one half-life = 5730 years), so the answer should fall
              between those two, and 9950 sits comfortably in that range. Notice we
              never actually evaluated <InlineMath math="k" /> numerically — we
              cancelled it by writing the answer as a ratio of logs. That's a useful
              trick whenever you have one "calibration" measurement and one "query"
              measurement: combine them so the rate constant divides out.
            </Why>
            <Why>
              <strong>Mini-example: continuously compounded interest.</strong> You
              deposit $5000 in an account earning 4% annual interest, compounded
              continuously. What's the balance after 7 years? "Compounded
              continuously" is just the financial industry's name for "the rate of
              growth of the balance is proportional to the balance, with proportionality
              constant equal to the annual rate." So
              <InlineMath math="dB/dt = 0.04 B" />, giving
              <InlineMath math="B(t) = 5000 \cdot e^{0.04 t}" />. At
              <InlineMath math="t = 7" />:
            </Why>
            <Eq>B(7) = 5000 · e^(0.28) ≈ 5000 · 1.3231 ≈ $6615.77</Eq>
            <Why>
              Notice this is meaningfully bigger than simple interest would give
              (<InlineMath math="5000 \cdot 1.28 = \$6400" />). The compounding
              effect adds about $216 over seven years on a $5000 deposit. The
              doubling time of money at 4% is
              <InlineMath math="\ln 2 / 0.04 \approx 17.3" /> years — useful
              shorthand. (The Rule of 72 you may have heard finance people quote is
              exactly this: 72/r% gives the doubling time, because
              <InlineMath math="\ln 2 \approx 0.693" /> and
              <InlineMath math="0.693 \cdot 100 / r \approx 70/r" />, rounded to
              72 for the round numbers it produces.)
            </Why>

            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-4">
              Template 2: logistic — exponential growth that hits a wall
            </h4>
            <Why>
              Real populations don't grow forever. Bacteria run out of nutrients,
              rabbits run out of grass, a startup runs out of new customers, an
              epidemic runs out of susceptible people, a viral video runs out of
              people who haven't seen it yet. Pure exponential growth would predict
              that a single bacterium turns into more than the mass of the Earth in a
              couple of days, which obviously doesn't happen — something has to bend
              the curve back down. The fix is to keep the "rate proportional to
              <InlineMath math="P" />" part (because more individuals still means
              more reproductions, more spreaders, more chatter) but multiply it by a
              <em>brake</em> that closes as <InlineMath math="P" /> approaches a
              ceiling <InlineMath math="M" /> — the carrying capacity. The cleanest
              brake that vanishes at <InlineMath math="P = M" /> and equals 1 when
              <InlineMath math="P" /> is tiny is the factor
              <InlineMath math="(1 - P/M)" />. It's a brilliantly economical way to
              encode "behave exponentially when you're small, stall when you're at
              the ceiling, smoothly interpolate in between."
            </Why>
            <BlockMath math="\frac{dP}{dt} = k P \left(1 - \frac{P}{M}\right)" />
            <Why>
              Look at the two factors of the right-hand side as separate forces.
              <InlineMath math="kP" /> is the unfettered reproductive drive — every
              individual is trying to make more. <InlineMath math="(1 - P/M)" /> is
              the resource limit — a fraction between 0 and 1 that measures how much
              room is left, falling smoothly from 1 (empty environment) to 0 (full
              house). The actual growth rate is the product, so small population
              <em>or</em> full environment both stall growth, but for very different
              reasons (nothing reproducing vs. nothing left to eat). The deep
              insight: the maximum growth rate happens when the product
              <InlineMath math="P(1 - P/M)" /> is maximized, which by basic calculus
              is at exactly <InlineMath math="P = M/2" />. That's the
              <em> inflection point</em>: midway up the S-curve, the population is
              growing as fast as it ever will. Both before and after that point, one
              of the two factors is holding things back — either there aren't enough
              individuals yet, or there isn't enough room left.
            </Why>
            <Why>
              When <InlineMath math="P \ll M" /> the bracket is essentially 1 and the
              equation looks just like template 1 — exponential takeoff. When
              <InlineMath math="P \to M" /> the bracket collapses to 0 and growth
              stalls. That's the S-curve: takeoff, inflection, plateau. The slider
              below sets <InlineMath math="M = 3" /> so you can watch trajectories
              shooting up from below and easing into the carrying capacity from
              above. Notice the two equilibrium lines, at
              <InlineMath math="y = 0" /> and <InlineMath math="y = 3" />: the
              upper one is <em>stable</em> (small deviations get pulled back to it)
              and the lower one is <em>unstable</em> (small deviations get
              amplified away from it). Any starting positive population, no matter
              how small, gets dragged inexorably up toward
              <InlineMath math="M = 3" />.
            </Why>
            <DirectionFieldViz defaultSlope="0.4 * y * (1 - y/3)" yRange={[-0.5, 4]} accentColor={ACCENT} />
            <Why>
              <strong>Mini-example: a logistic population, solved step by step.</strong>
              Suppose a fish pond has carrying capacity
              <InlineMath math="M = 400" />, intrinsic rate <InlineMath math="k = 0.2" />
              per year, and you stock it with <InlineMath math="P_0 = 50" /> fish. The
              closed-form solution to the logistic DE (which you'll re-derive in 7.3
              by separation of variables) is
              <InlineMath math="P(t) = M / (1 + A e^{-kt})" /> with
              <InlineMath math="A = (M - P_0)/P_0" />. Here
              <InlineMath math="A = (400 - 50)/50 = 7" />, so
              <InlineMath math="P(t) = 400 / (1 + 7 e^{-0.2 t})" />. At
              <InlineMath math="t = 0" />, <InlineMath math="P = 400/8 = 50" />.
              Check. As <InlineMath math="t \to \infty" />, the exponential dies,
              the denominator goes to 1, <InlineMath math="P \to 400" />. Check. At
              <InlineMath math="t = 5" />: <InlineMath math="e^{-1} \approx 0.368" />,
              so <InlineMath math="P \approx 400/(1 + 2.576) \approx 112" />. At
              <InlineMath math="t = 10" />: <InlineMath math="e^{-2} \approx 0.135" />,
              so <InlineMath math="P \approx 400/(1 + 0.947) \approx 205" /> — right
              around the inflection point <InlineMath math="M/2 = 200" />. At
              <InlineMath math="t = 20" />: <InlineMath math="e^{-4} \approx 0.0183" />,
              <InlineMath math="P \approx 400/(1.128) \approx 354" /> — closing in
              on capacity. That's the shape: slow start, fastest growth around year
              10, asymptotic approach to 400 thereafter.
            </Why>

            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-4">
              Template 3: Newton cooling — the rate depends on a gap
            </h4>
            <Why>
              Coffee sitting on your desk in a 20&deg;C room. When the coffee is at
              90&deg;C, the 70-degree gap is huge and heat pours out fast. When the
              coffee has cooled to 25&deg;C, the gap is only 5 degrees and almost no
              heat moves. When the coffee finally hits room temperature, the gap is
              zero and nothing changes at all. So the rate of cooling isn't proportional
              to <InlineMath math="T" /> — it's proportional to <em>how far above the
              room</em> the coffee is. The "minus" sign in front says "cooling pulls
              <InlineMath math="T" /> back toward <InlineMath math="T_{\text{env}}" />".
            </Why>
            <Why>
              The minus sign isn't a quirk; it's bookkeeping for direction. When the
              coffee is hotter than the room, <InlineMath math="T - T_{\text{env}}" />
              is positive, and you need <InlineMath math="dT/dt" /> to be
              <em> negative</em> (it's cooling, after all). Multiplying a positive
              number by <InlineMath math="-k" /> gives a negative number. Good.
              Now flip it: if you put an ice cube into a room, <InlineMath math="T < T_{\text{env}}" />,
              so the gap is negative, and <InlineMath math="dT/dt = -k \cdot (\text{negative})" />
              is positive — the ice cube warms toward the room. The same equation
              handles both cases without needing to flip signs by hand. Don't memorize
              "minus sign because cooling"; instead, every single time, ask "if the
              object is hotter than the room, the rate has to be negative — does this
              equation give that?" If yes, the signs are right.
            </Why>
            <BlockMath math="\frac{dT}{dt} = -k(T - T_{\text{env}})" />
            <Why>
              <strong>The substitution that unlocks this template.</strong> The
              equation looks scary because of the constant offset
              <InlineMath math="T_{\text{env}}" /> — the right-hand side is not just
              proportional to <InlineMath math="T" />, it's proportional to a
              <em> shifted</em> version of <InlineMath math="T" />. The trick is to
              shift your coordinate system to match. Define
              <InlineMath math="u = T - T_{\text{env}}" />: the temperature
              <em> above the room</em>, measured from the room as your new zero. In
              this new variable, the equilibrium (the temperature where nothing
              changes) is at <InlineMath math="u = 0" />, not at some weird offset.
              Since <InlineMath math="T_{\text{env}}" /> is a constant, taking
              <InlineMath math="d/dt" /> of both sides of
              <InlineMath math="u = T - T_{\text{env}}" /> gives
              <InlineMath math="du/dt = dT/dt - 0 = dT/dt" />. So the original DE
              becomes <InlineMath math="du/dt = -k \cdot u" /> — pure exponential
              decay, no offset, exactly template 1.
            </Why>
            <Why>
              Why does this substitution work? Because Newton cooling is
              <em> translation-invariant in temperature</em>: the physics doesn't
              care what zero you use for temperature, only that the cooling depends
              on the gap. By shifting coordinates so the equilibrium is at zero, we
              made the DE look like one we already know how to solve. This is a
              recurring move in mathematics: <em>change variables to absorb a
              constant</em>. You'll see it in Calc III when you translate
              coordinates to put a fixed point at the origin, in linear algebra
              when you "complete the square" to absorb a linear term, and in
              physics when you switch reference frames to make a moving object
              stationary. Every one of those tricks is the same trick: shift away
              what's unimportant so the structure you care about is naked on the
              page.
            </Why>
            <Why>
              A third framing of the same idea: think of <InlineMath math="T_{\text{env}}" />
              as a "DC bias" you're subtracting off, in the electrical-engineering
              sense. The cooling dynamics is the "AC" piece — the time-varying
              departure from equilibrium — and it decays exponentially. Subtract the
              DC, solve the AC, add the DC back. In your ESE 123 RC circuit, this is
              <em> exactly</em> what happens when you charge a capacitor toward a
              steady-state voltage <InlineMath math="V_s" /> through a resistor: the
              voltage approaches <InlineMath math="V_s" /> exponentially, and the
              same <InlineMath math="u = V - V_s" /> substitution turns the equation
              into <InlineMath math="du/dt = -u/(RC)" />, pure decay of the "voltage
              gap to equilibrium." This isn't an analogy. It's the same equation.
            </Why>
            <Why>
              Solving the decoupled equation: <InlineMath math="u(t) = u_0 e^{-kt}" />
              by template 1. Translating back to <InlineMath math="T" />:
              <InlineMath math="T - T_{\text{env}} = (T_0 - T_{\text{env}}) e^{-kt}" />,
              i.e. <InlineMath math="T(t) = T_{\text{env}} + (T_0 - T_{\text{env}}) e^{-kt}" />.
              Read this aloud: "the temperature equals the room temperature plus the
              initial gap, exponentially shrinking to zero." As
              <InlineMath math="t \to \infty" />, the exponential dies and
              <InlineMath math="T \to T_{\text{env}}" />. Perfect. At
              <InlineMath math="t = 0" />, the exponential equals 1 and
              <InlineMath math="T = T_0" />. Perfect. The formula encodes the whole
              physical story.
            </Why>
            <Why>
              <strong>Mini-example, fully worked: a forensic estimate of time of
              death.</strong> A body is discovered in a room at
              <InlineMath math="20\,^\circ\text{C}" />. The body's temperature when
              the coroner arrives is <InlineMath math="32\,^\circ\text{C}" />. Two
              hours later it's <InlineMath math="29\,^\circ\text{C}" />. Assuming a
              normal living body temperature of <InlineMath math="37\,^\circ\text{C}" />
              at the moment of death, how long before discovery did the death occur?
              First, write the cooling model with the substitution explicit:
              <InlineMath math="u(t) = T(t) - 20 = u_0 e^{-kt}" />. Pick
              <InlineMath math="t = 0" /> as the moment of discovery, so
              <InlineMath math="u(0) = 32 - 20 = 12" /> and
              <InlineMath math="u(2) = 29 - 20 = 9" />. Find <InlineMath math="k" />
              from those two:
            </Why>
            <Eq>
              u(2)/u(0) = 9/12 = 0.75 = e^(−2k){"\n"}
              −2k = ln 0.75{"\n"}
              k = −ln(0.75)/2 ≈ 0.1438 per hour
            </Eq>
            <Why>
              Now find the time <InlineMath math="t = -\tau" /> in the past at which
              <InlineMath math="u = 37 - 20 = 17" />:
            </Why>
            <Eq>
              17 = 12 · e^(−k·(−τ)) = 12 · e^(kτ){"\n"}
              e^(kτ) = 17/12 ≈ 1.4167{"\n"}
              τ = ln(17/12)/k ≈ 0.348/0.1438 ≈ 2.42 hours
            </Eq>
            <Why>
              So the person died about two hours and twenty-five minutes before the
              coroner arrived. Sanity-check: in the two hours after discovery the
              body's <em>above-room</em> temperature went from 12 down to 9, so it
              lost a quarter of the gap. Working backward, going from a gap of 17 to
              a gap of 12 is also losing a chunk that's a bit less than a third, and
              the time to do that should be a bit less than half the post-discovery
              interval — which "two hours and twenty-five minutes" almost matches.
              Close enough that the calculation rings true. This is the actual method
              forensic pathologists use as a rough first estimate, with refinements
              for body mass, clothing, drafts, and so on.
            </Why>
            <Why>
              This substitution trick — shift away the equilibrium so the equation
              becomes pure decay — shows up over and over: drug clearance with
              constant IV input, charge approaching a steady-state voltage, mixing
              tanks where pure solvent is being added at a fixed rate, even the
              temperature of buildings under HVAC control. Any time the equilibrium
              isn't zero, shift it. Always. It's a reflex you want.
            </Why>

            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-4">
              Walk it through: ten bacteria in a 1000-cell dish
            </h4>
            <Why>
              A culture grows logistically with <InlineMath math="k = 0.5" /> per hour
              and carrying capacity <InlineMath math="M = 1000" />, starting from
              <InlineMath math="P_0 = 10" />. Just by inspecting the equation we can
              predict the qualitative shape without solving anything. At
              <InlineMath math="P = 10" />, the brake factor is
              <InlineMath math="1 - 10/1000 = 0.99" /> — almost wide open — so the
              colony behaves nearly like pure exponential with growth rate
              <InlineMath math="k = 0.5" />. Doubling time should be about
              <InlineMath math="\ln 2 / 0.5 \approx 1.4" /> hours.
            </Why>
            <Eq>At P = 10:   dP/dt = 0.5 · 10 · 0.99 = 4.95 cells/hr</Eq>
            <Why>
              Now jump ahead to when the colony has reached <InlineMath math="P = 500" />,
              halfway to capacity. The brake factor is <InlineMath math="1 - 500/1000 = 0.5" />,
              and the growth rate is:
            </Why>
            <Eq>At P = 500:   dP/dt = 0.5 · 500 · 0.5 = 125 cells/hr</Eq>
            <Why>
              Twenty-five times faster in absolute terms than at the start, even though
              each individual bacterium is only working at half-throttle. That's the
              inflection point — the moment of maximum growth — and it always happens
              at exactly <InlineMath math="P = M/2" /> for the logistic. Push further
              to <InlineMath math="P = 990" /> and the brake factor is 0.01: growth
              has nearly stopped, even though there are tons of bacteria. The S-curve
              is asymmetric in feel: long quiet start, brief explosive middle, long
              slow approach to the ceiling.
            </Why>

            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-4">
              How to tell which template you're in
            </h4>
            <Why>
              The single most useful question is "is the rate proportional to the
              <em>amount</em>, or to a <em>gap</em>?" Amount &rArr; exponential.
              Gap &rArr; Newton cooling. If it's an amount but there's a ceiling
              you can't pass &rArr; logistic. The most common student trap is reaching
              for <InlineMath math="dT/dt = -kT" /> in a Newton-cooling problem,
              which silently asserts the room is at absolute zero. If the equilibrium
              of the story isn't zero — coffee doesn't cool to 0&deg;C, it cools to
              room temperature — your equation must contain that equilibrium
              explicitly inside a difference. A useful diagnostic: ask "if I let
              time go to infinity, what does <InlineMath math="y" /> approach?" If
              the answer is zero, you might have plain exponential decay. If the
              answer is some nonzero number, you have a Newton-cooling-style
              equation and that number is the equilibrium you need to subtract off.
              If the answer is a finite positive number that the variable is
              <em> growing toward</em> from below, you have logistic and that
              number is <InlineMath math="M" />.
            </Why>

            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-4">
              How 7.1 connects to the rest of your courses
            </h4>
            <Why>
              The exponential template is everywhere in physics and engineering. In
              ESE 123 you meet it as the RC discharge curve every time you flip a
              switch: <InlineMath math="V(t) = V_0 e^{-t/(RC)}" />, where
              <InlineMath math="RC" /> is the time constant <InlineMath math="\tau" />
              and the voltage drops to <InlineMath math="1/e \approx 37\%" /> in one
              <InlineMath math="\tau" />. In PHY 131 you saw it as the velocity of a
              falling object with linear drag approaching terminal velocity:
              <InlineMath math="v(t) = v_t + (v_0 - v_t) e^{-t/\tau}" />, structurally
              identical to Newton cooling with terminal velocity playing the role of
              the room temperature. In biology, drug clearance from the bloodstream
              follows exponential decay if the kidneys remove a fixed fraction per
              unit time. In carbon dating, geology, and archaeology, radioactive
              isotopes' half-lives let you time-stamp samples back tens of thousands
              of years. The logistic equation models infectious disease spread in the
              early stages of an epidemic — when COVID-19 cases were doubling every
              few days that was logistic-takeoff, and the curves "flattening" was the
              logistic brake engaging as the susceptible pool shrank. Newton's law
              of cooling is genuinely how forensic pathologists make initial
              estimates of time of death. None of these are toy examples; they're
              the actual reasons people developed these equations.
            </Why>

            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-4">
              Common exam question types for 7.1
            </h4>
            <Why>
              You will be asked, in some order, to do these five things over and
              over for the rest of the chapter and on the final. <em>(1) Given a
              story, write the DE.</em> "Salt water flows into a tank at 3 L/min
              with a salt concentration of 0.2 kg/L, and the well-mixed solution
              flows out at the same rate. Write a DE for the amount of salt." You're
              looking for "rate in minus rate out" and then translating each piece
              into symbols. <em>(2) Given a DE and an IC, find the closed form.</em>
              This is the bread-and-butter "solve" problem; for the three templates
              the answers are memorizable, and for everything else you separate
              (Section 7.3). <em>(3) Given two data points, find the rate constant.</em>
              This is the carbon-dating, doubling-time, or "two coffee measurements"
              calculation: use one data point and the IC to set up, then plug the
              other into the closed form and solve for <InlineMath math="k" />.
              <em> (4) Use the closed form to predict a value at some other time.</em>
              Just plug in. <em>(5) Identify equilibria and stability.</em> Find
              values of the dependent variable where the rate is zero; check whether
              perturbations grow or decay by looking at the sign of the rate on
              either side of the equilibrium. Sketch the picture.
            </Why>

            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-4">
              Pitfalls, expanded
            </h4>
            <Why>
              <strong>1. Confusing amount and gap.</strong> The single most common
              modeling error is writing <InlineMath math="dT/dt = -kT" /> for a
              coffee-cooling problem. This silently encodes "the coffee is heading
              toward zero degrees Celsius," which is wrong — it's heading toward
              room temperature. Always check the long-time limit of your model: if
              <InlineMath math="t \to \infty" /> gives the wrong steady state, your
              model is wrong, no matter how cleanly the algebra works out.
            </Why>
            <Why>
              <strong>2. Forgetting that <InlineMath math="k" /> is always positive
              in convention.</strong> When you write the cooling equation as
              <InlineMath math="dT/dt = -k(T - T_{\text{env}})" />, the
              <InlineMath math="k" /> is positive and the minus sign is what makes
              it decay. When you write the decay equation as
              <InlineMath math="dN/dt = -kN" />, again <InlineMath math="k" /> is
              positive and the minus sign is what makes it decay. If you ever solve
              for <InlineMath math="k" /> and get a negative answer, you've made a
              sign error or you've misidentified the template.
            </Why>
            <Why>
              <strong>3. Mixing up half-life and rate constant.</strong> Half-life
              is <InlineMath math="t_{1/2} = \ln 2 / k" />, not
              <InlineMath math="1/k" /> and not <InlineMath math="\ln 2 \cdot k" />.
              The time constant <InlineMath math="\tau = 1/k" /> is a separate
              concept (time for an exponential to fall to
              <InlineMath math="1/e" /> of its initial value, about 37%). They're
              related: <InlineMath math="t_{1/2} = \tau \ln 2 \approx 0.693 \tau" />.
              Know which one a problem is asking for.
            </Why>
            <Why>
              <strong>4. Conflating logistic and exponential when
              <InlineMath math="P" /> is small.</strong> Yes, logistic
              <em> behaves like</em> exponential when <InlineMath math="P \ll M" />,
              but the answers will diverge by 10-20% once <InlineMath math="P" />
              gets above <InlineMath math="M/10" /> or so. If a problem mentions a
              carrying capacity at all, use logistic; if it doesn't, use
              exponential. Don't approximate one with the other without checking
              the regime.
            </Why>
            <Why>
              <strong>5. Forgetting the constant of integration in setup.</strong>
              When you derive the closed form yourself (rather than quoting one),
              you'll end up with a <InlineMath math="+C" /> that you have to nail
              down with the initial condition. Skipping that step gives you the
              "general solution" — a whole family of curves — instead of
              <em> the</em> solution. Always plug in the IC.
            </Why>
          </ChapterSection>

          <ChapterSection
            id="s7-2"
            number="7.2"
            title="Slope Fields & Euler's Method"
            accentColor={ACCENT}
            blurb="Draw the equation as a vector grid; solve numerically by stepping along it."
          >
            <Why>
              Most differential equations you'll ever meet do <em>not</em> have a
              nice closed-form solution. There is no formula you can write down for
              <InlineMath math="y(x)" /> the way there is for sine or for
              <InlineMath math="\sqrt{x}" />. The right side
              <InlineMath math="f(x, y)" /> can be too tangled, the integrals on
              both sides can be unfriendly, the equation can refuse to separate.
              That's not a bug — it's actually the typical case. Real-world DEs
              from biology, fluid mechanics, weather, finance, and engineering are
              almost all unsolvable in closed form. So most of the time, what you
              <em> want</em> is not a formula but a picture: roughly, what do the
              solution curves look like? Do they grow without bound? Do they
              oscillate? Do they all approach some equilibrium? Where do they
              cross zero? You can answer all of those questions without ever
              writing down an explicit <InlineMath math="y(x)" />.
            </Why>
            <Why>
              The equation <InlineMath math="dy/dx = f(x, y)" /> still tells you
              something enormously useful: <em>at every point in the plane, what
              slope the solution curve must have if it passes through there</em>.
              That's the picture behind a slope field. The DE hands you a rule that
              paints a tiny tangent arrow at every <InlineMath math="(x, y)" />. A
              solution is any curve that, at each of its points, lines up with the
              local arrow — like an arrow shot through a giant flag pattern,
              gliding along the directions painted on the fabric. Pick any starting
              point and follow the arrows; you trace out one of the infinitely many
              solution curves of the DE.
            </Why>
            <Why>
              <strong>Prerequisite refresher: scalar fields vs. vector fields.</strong>
              In Calc I and the first part of Calc II you mostly worked with
              <em> scalar functions</em>: a rule that takes a point and gives you
              back a number. The height of a hill at each
              <InlineMath math="(x, y)" /> coordinate is a scalar field. A
              <em> vector field</em>, by contrast, takes a point and gives you
              back a direction (and sometimes a magnitude) — think of wind patterns
              drawn on a weather map, with little arrows at every station showing
              which way the wind is blowing. A slope field is a special kind of
              vector field where every arrow has the same horizontal component
              (move 1 to the right) and a vertical component equal to the local
              slope (rise by <InlineMath math="f(x, y)" />). It's a vector field
              that points "forward in <InlineMath math="x" />, at the slope the DE
              demands." You don't need any vector calculus to read one — just the
              ability to look at a forest of tilted dashes and trace smooth curves
              through them with your eye.
            </Why>
            <Why>
              The geometric framing is so powerful because it sidesteps the
              algebra entirely. Even if you can't write down
              <InlineMath math="y(x)" /> in closed form, you can stare at the
              slope field and immediately see: "ah, all solutions tend to a
              horizontal asymptote at <InlineMath math="y = 2" />, and they
              approach from below if they start below and from above if they
              start above." That qualitative reading is often more useful in
              practice than a messy explicit formula. Engineers and scientists
              who use DEs every day actually <em>look</em> at slope fields
              (or their generalizations) to understand the behavior of systems
              before solving anything. Don't dismiss this as a doodling
              exercise; it's how the pros think.
            </Why>

            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-4">
              How to draw a slope field by hand
            </h4>
            <Why>
              Pick a grid of <InlineMath math="(x, y)" /> points, say at every integer
              between <InlineMath math="-3" /> and <InlineMath math="3" />. At each
              one, plug those coordinates into <InlineMath math="f(x, y)" /> to get
              a number — that's the slope there. Sketch a short segment with that
              slope centered on the point. Don't bother making segments long enough
              to overlap; you want the field, not the curves yet. Once the whole
              grid is dotted with tilted segments, the solution curves jump out
              visually — they're the smooth paths your eye traces along the dashes.
            </Why>
            <Why>
              <strong>Walkthrough: drawing the slope field for
              <InlineMath math="dy/dx = x - y" /> at nine lattice points.</strong>
              Let's actually compute slopes at the 3×3 grid with
              <InlineMath math="x \in \{-1, 0, 1\}" /> and
              <InlineMath math="y \in \{-1, 0, 1\}" />. At each point, the slope is
              just <InlineMath math="x - y" />:
            </Why>
            <Eq>
              (-1, -1): slope = -1 - (-1) = 0   → horizontal dash{"\n"}
              (-1,  0): slope = -1 -   0  = -1  → tilts down-right at 45°{"\n"}
              (-1,  1): slope = -1 -   1  = -2  → steep down-right{"\n"}
              ( 0, -1): slope =  0 - (-1) = 1   → tilts up-right at 45°{"\n"}
              ( 0,  0): slope =  0 -   0  = 0   → horizontal dash{"\n"}
              ( 0,  1): slope =  0 -   1  = -1  → tilts down-right at 45°{"\n"}
              ( 1, -1): slope =  1 - (-1) = 2   → steep up-right{"\n"}
              ( 1,  0): slope =  1 -   0  = 1   → tilts up-right at 45°{"\n"}
              ( 1,  1): slope =  1 -   1  = 0   → horizontal dash
            </Eq>
            <Why>
              Stare at that table. The horizontals lie along the line
              <InlineMath math="y = x" /> — three of our nine points sit on that
              line, and all three got slope zero. (This is no accident: the DE
              says <InlineMath math="dy/dx = x - y" />, and that's zero exactly when
              <InlineMath math="y = x" />.) Above the line
              <InlineMath math="y = x" /> the slope is negative — solutions are
              curving down. Below the line the slope is positive — solutions are
              curving up. So <em>everywhere</em>, solutions are being pulled
              toward the line <InlineMath math="y = x" />. That line is itself
              <em> almost</em> a solution — to be precise,
              <InlineMath math="y = x - 1" /> is the actual solution (you'd find
              this by separating, or by guessing), and all other solutions
              asymptote to it as <InlineMath math="x \to \infty" />. You learned
              all of this without solving anything; you just made a table and
              looked.
            </Why>
            <Why>
              Three shortcuts make slope-field drawing much faster. First,
              <em> isoclines</em>: find curves in the plane where the slope is
              constant — for <InlineMath math="dy/dx = x + y" />, the isocline of
              slope 0 is the line <InlineMath math="y = -x" />, the isocline of
              slope 1 is <InlineMath math="y = 1 - x" />, and so on. All segments
              along one isocline tilt the same way. Second, look for places where
              <InlineMath math="f(x, y) = 0" />: those are horizontal segments, and
              any solution crossing one is having a momentary "flat" instant.
              Third, look for <em>equilibrium solutions</em>: constants
              <InlineMath math="y = c" /> where <InlineMath math="f(x, c) = 0" />
              for all <InlineMath math="x" />. Those show up as perfectly horizontal
              lines that solution curves are attracted to or repelled from. The
              logistic DE has two such horizontal lines (at <InlineMath math="y = 0" />
              and <InlineMath math="y = M" />); Newton cooling has one (at
              <InlineMath math="y = T_{\text{env}}" />); pure exponential decay has
              one (at <InlineMath math="y = 0" />). Equilibria are often the most
              important features of a slope field because long-term behavior is
              dictated by which one you're being pulled toward.
            </Why>
            <Why>
              <strong>Isocline walkthrough: <InlineMath math="dy/dx = x^2 + y^2" />.</strong>
              Where is the slope equal to 1? On the circle
              <InlineMath math="x^2 + y^2 = 1" /> — every point on the unit circle
              has a tangent segment tilted at 45°. Slope 4? The circle of radius 2.
              Slope 9? The circle of radius 3. So the isoclines are concentric
              circles, and the slope steepens as you move outward. There's also no
              way to have slope zero (since <InlineMath math="x^2 + y^2 \geq 0" /> and
              equals zero only at the origin), and the solutions explode upward as
              they wander far from the origin. The isocline picture tells you
              everything qualitative about the DE without ever finding
              <InlineMath math="y(x)" /> — which is good, because this DE has no
              elementary closed-form solution (it's a Riccati equation, beyond
              Calc II).
            </Why>
            <DirectionFieldViz defaultSlope="x + y" accentColor={ACCENT} />
            <DirectionFieldViz defaultSlope="x - y" accentColor={ACCENT} />
            <Why>
              Play with both fields above. On <InlineMath math="x + y" />, watch how
              all solution curves blow up as you go right — that DE has an
              exponential character. On <InlineMath math="x - y" />, watch how
              solutions get sucked into the diagonal <InlineMath math="y = x - 1" />;
              that DE has a stable attractor and the long-time behavior is dominated
              by that line. Two DEs that look almost identical algebraically have
              wildly different qualitative behavior, and the slope field reveals
              that at a glance.
            </Why>

            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-4">
              From slope field to Euler's method
            </h4>
            <Why>
              Euler's method just says "let's actually walk along the slope field,
              one tiny step at a time, and write down where we end up." You start
              at the initial point <InlineMath math="(x_0, y_0)" />. You read off
              the slope there: <InlineMath math="m_0 = f(x_0, y_0)" />. You step
              forward in <InlineMath math="x" /> by some chosen amount
              <InlineMath math="h" />, and rise in <InlineMath math="y" /> by
              <InlineMath math="h \cdot m_0" /> — because over a short horizontal
              distance, the curve looks like its tangent line. That lands you at a
              new point. Read the slope there. Step again. Repeat. Each step is just
              "go where the local tangent points".
            </Why>
            <Why>
              The geometric picture is genuinely all there is. Imagine you're a tiny
              boat dropped into a river whose current direction is given at every
              point by the slope field. You can't see the whole river — only your
              immediate surroundings. You pick a heading based on the local current,
              row a short distance in that direction, look around to see the new
              local current, pick a new heading, row again. After many short rows
              you've traced a path through the river. That's a numerical solution.
              The shorter each row, the more faithfully your path matches what a
              "perfect navigator" with infinite local information would do.
            </Why>
            <BlockMath math="x_{n+1} = x_n + h, \qquad y_{n+1} = y_n + h \cdot f(x_n, y_n)" />
            <Why>
              <strong>Why these two equations?</strong> The first is trivial — we're
              just keeping track of where we are in <InlineMath math="x" />, and
              each step moves us forward by the chosen step size
              <InlineMath math="h" />. The second is the heart of the method: it
              comes from approximating the function locally by its tangent line.
              Calc I tells you that for a differentiable function near the point
              <InlineMath math="(x_n, y_n)" />, the values nearby are approximately
              <InlineMath math="y(x_n + h) \approx y(x_n) + h \cdot y'(x_n)" />.
              That's just "rise equals slope times run." Substitute
              <InlineMath math="y'(x_n) = f(x_n, y_n)" /> from the DE, replace
              <InlineMath math="y(x_n + h)" /> with our running estimate
              <InlineMath math="y_{n+1}" />, and you have the update rule. It's
              literally the tangent-line approximation, applied repeatedly.
            </Why>
            <Why>
              The cost of the simplicity: you're using the slope at the
              <em>start</em> of each interval, ignoring how the slope changes during
              the interval. If the true curve is bending upward, your straight-line
              step undershoots. If it's bending downward, you overshoot. The errors
              accumulate. Smaller <InlineMath math="h" /> = better approximation
              but more arithmetic. Euler is "first order", meaning halving
              <InlineMath math="h" /> roughly halves the global error — a fairly
              expensive trade. More sophisticated methods (Runge-Kutta, the workhorse
              of real-world numerical solvers, is fourth-order) get away with much
              larger steps for the same accuracy because they sample the slope at
              several places within each step and combine them cleverly. Euler is
              the "Model T" of numerical DE solvers — it works, it's transparent,
              you can do it by hand, but no professional simulation code actually
              uses plain Euler for anything important.
            </Why>
            <Why>
              <strong>The four steps of an Euler computation, in checklist form.</strong>
              Every Euler problem reduces to mechanically doing these four things,
              over and over. <em>(1) Write down the recurrence</em> by substituting
              the specific <InlineMath math="f(x, y)" /> from your DE into the
              generic update rule. <em>(2) Start a table</em> with columns for
              <InlineMath math="n" />, <InlineMath math="x_n" />,
              <InlineMath math="y_n" />, and <InlineMath math="\text{slope} = f(x_n, y_n)" />.
              Fill in the initial row from the initial condition. <em>(3) Iterate</em>:
              for each new row, set <InlineMath math="x_{n+1} = x_n + h" /> and
              <InlineMath math="y_{n+1} = y_n + h \cdot \text{slope}_n" />, then
              compute the new slope. <em>(4) Stop</em> when
              <InlineMath math="x_n" /> reaches the target value the problem asks
              about, and report <InlineMath math="y_n" />. The table is your
              friend — write it out, don't try to do it in your head.
            </Why>

            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-4">
              Walk one example by hand: <InlineMath math="dy/dx = y - x" />, <InlineMath math="y(0) = 1" />, <InlineMath math="h = 0.5" />
            </h4>
            <Why>
              We want <InlineMath math="y(1.5)" />. That's three steps of
              <InlineMath math="h = 0.5" />. We start at
              <InlineMath math="(x_0, y_0) = (0, 1)" /> and apply
              <InlineMath math="y_{n+1} = y_n + 0.5 \cdot (y_n - x_n)" />.
              Read the slope, step, repeat:
            </Why>
            <Eq>
              Step 0: x=0.0, y=1.00,  slope = 1.00 − 0.0 = 1.00{"\n"}
              Step 1: x=0.5, y=1.00 + 0.5·1.00 = 1.50,  slope = 1.50 − 0.5 = 1.00{"\n"}
              Step 2: x=1.0, y=1.50 + 0.5·1.00 = 2.00,  slope = 2.00 − 1.0 = 1.00{"\n"}
              Step 3: x=1.5, y=2.00 + 0.5·1.00 = 2.50
            </Eq>
            <Why>
              Interesting — the slope stayed pinned at 1 the whole time. Is that
              right? The exact solution of this DE happens to be
              <InlineMath math="y = x + 1" />, a straight line of slope 1, which
              passes through <InlineMath math="(0, 1)" />. Euler nailed it exactly
              in this case <em>because the true solution is itself a straight
              line</em> — and Euler is making straight-line steps, so there's no
              curvature error to accumulate. Lucky case. Now let's redo it with the
              slope field set to <InlineMath math="x + y" /> (above) where the
              solution <em>does</em> curve, and you'll see Euler drift below the
              true curve as it climbs.
            </Why>

            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-4">
              A four-step run on a curvy solution: <InlineMath math="dy/dx = y" />, <InlineMath math="y(0) = 1" />, <InlineMath math="h = 0.25" />
            </h4>
            <Why>
              This DE you know cold — its exact solution is
              <InlineMath math="y = e^x" />, the function that equals its own
              derivative. So Euler should approximate <InlineMath math="e^x" /> for
              us. With <InlineMath math="h = 0.25" /> and the recurrence
              <InlineMath math="y_{n+1} = y_n + 0.25 \cdot y_n = 1.25 \cdot y_n" />,
              four steps will take us from <InlineMath math="x = 0" /> to
              <InlineMath math="x = 1" />.
            </Why>
            <Eq>
              n=0: x=0.00, y=1.0000, exact=e^0.00=1.0000,  error =  0.00%{"\n"}
              n=1: x=0.25, y=1.2500, exact=e^0.25=1.2840,  error = -2.65%{"\n"}
              n=2: x=0.50, y=1.5625, exact=e^0.50=1.6487,  error = -5.23%{"\n"}
              n=3: x=0.75, y=1.9531, exact=e^0.75=2.1170,  error = -7.74%{"\n"}
              n=4: x=1.00, y=2.4414, exact=e^1.00=2.7183,  error =-10.18%
            </Eq>
            <Why>
              Pay close attention to the error column. It's growing — not just in
              absolute size but in percentage terms. By the time we've taken four
              steps, our estimate is 10% low and growing worse. Why is the error
              always negative (always low)? Because <InlineMath math="e^x" /> is
              concave up — it curves upward — so the true curve is rising
              <em> faster</em> than its current tangent for any
              <InlineMath math="x > 0" />. Each Euler step uses the slope at the
              start of the interval, which is smaller than the average slope across
              the interval (because the slope grows during the interval). So each
              step systematically undershoots, and the undershoots accumulate.
            </Why>
            <Why>
              If we halve the step size to <InlineMath math="h = 0.125" /> and take
              eight steps to reach <InlineMath math="x = 1" />, the error at the
              end shrinks to roughly 5%. Halve it again to
              <InlineMath math="h = 0.0625" /> and you get about 2.6%. That's the
              "first-order" property in action: halving <InlineMath math="h" />
              roughly halves the error. Compare to Runge-Kutta of fourth order,
              where halving <InlineMath math="h" /> divides the error by 16. The
              extra effort per step pays for itself many times over.
            </Why>

            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-4">
              How Euler relates to the slope field, visually
            </h4>
            <Why>
              Open the <InlineMath math="x + y" /> slope field above and trace a
              path with your finger from <InlineMath math="(0, 1)" /> outward,
              always staying tangent to the local dashes. Now imagine doing the
              same with a ruler: place the ruler at <InlineMath math="(0, 1)" />
              aligned with the local dash, draw a short straight segment of length
              <InlineMath math="h" /> in <InlineMath math="x" />, lift the ruler,
              place it at the segment's endpoint aligned with the dash there, draw
              another segment, and so on. The polyline you draw with the ruler
              <em> is</em> the Euler approximation. The smooth curve you traced
              with your finger is the true solution. When the slope field changes
              gently, the two agree well; when the slope field changes rapidly,
              the polyline cuts corners and the two diverge.
            </Why>

            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-4">
              When Euler hurts you
            </h4>
            <Why>
              Two classic failure modes. First, <em>step size too big on a curvy
              solution</em>: each segment overshoots or undershoots, errors compound,
              and after many steps your computed curve has wandered far from the
              real one. The fix is to shrink <InlineMath math="h" />, ideally by a
              factor of 10 and watch whether the answer changes much. If the answer
              changes a lot, your step size is still too large; if the answer
              changes only a little, you've converged and your previous answer was
              probably trustworthy. This "halve <InlineMath math="h" /> and check"
              ritual is essentially the only reliable way to assess accuracy when
              you don't have a closed-form solution to compare to.
            </Why>
            <Why>
              Second, <em>stiff equations</em> like
              <InlineMath math="dy/dx = -100(y - \cos x)" />, where the slope field
              has very steep gradients pulling solutions toward equilibrium fast:
              Euler with any <InlineMath math="h" /> bigger than a tiny critical
              value will oscillate wildly and blow up to infinity, even though the
              true solution is perfectly tame. This is genuinely surprising the
              first time you see it — the numerical method blows up even though the
              real-world system is rock-solid stable. Geometrically, what's
              happening is that Euler's step overshoots the equilibrium by so much
              that the next step has to overshoot back even harder, and the
              numerical solution amplifies its own error at each step. For those
              you need implicit methods (Backward Euler, the trapezoidal rule,
              implicit Runge-Kutta) which is beyond Calc II but which every serious
              numerical-DE package uses by default. The takeaway: Euler is the
              simplest method that works <em>often</em>, but never trust an Euler
              answer without shrinking <InlineMath math="h" /> and rerunning. If
              halving <InlineMath math="h" /> dramatically changes the answer (or
              dramatically changes its qualitative shape), you're in stiff
              territory and Euler is the wrong tool.
            </Why>

            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-4">
              How 7.2 connects to the rest of your courses
            </h4>
            <Why>
              Euler's method is the entry point to a vast field called
              <em> numerical analysis</em>, which you'll meet in upper-division
              engineering and CS courses as "scientific computing." The whole
              Runge-Kutta family (RK2, RK4, adaptive RK45) is built on the same
              idea Euler uses — sample the slope and step — but with cleverer
              sampling schemes that achieve much higher accuracy per step. Every
              physics simulation you've ever seen on a computer (orbital
              mechanics, fluid flow, weather forecasting) is built on numerical
              DE solvers; SPICE simulations of circuits in your ESE 123 labs use
              implicit methods to handle the stiff equations that arise when
              capacitors and inductors connect to ideal switches. The slope-field
              concept generalizes to <em>vector fields</em> in higher dimensions
              and lets you visualize systems of coupled DEs (predator-prey,
              electrical networks, mechanical oscillators) as flow patterns in
              "phase space" — the central tool of dynamical systems theory.
              Knowing Euler well means knowing the foundation that all that
              machinery rests on.
            </Why>

            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-4">
              Common exam question types for 7.2
            </h4>
            <Why>
              On Calc II exams, slope-field questions tend to be of four flavors.
              <em> (1) Match the slope field to the DE.</em> You're shown a slope-
              field picture and three or four candidate DEs, and you have to pick
              which DE produced the picture. The trick: look at equilibria
              (horizontal dashes), look at where the slope is positive/negative,
              look at symmetry. <em>(2) Sketch the solution through a given
              initial point.</em> Drop a finger at the IC and trace along the
              tangents. <em>(3) Carry out an Euler computation by hand.</em>
              Three or four steps of <InlineMath math="h" /> from a given IC,
              compute the running approximation. This is rote arithmetic; the
              points come from not making a mistake. <em>(4) Compare Euler to an
              exact solution.</em> Compute Euler's estimate and the closed-form
              answer side by side, comment on the size and direction of the
              error. Concave-up curves get undershot, concave-down curves get
              overshot.
            </Why>

            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-4">
              Pitfalls, expanded
            </h4>
            <Why>
              <strong>1. Counting steps wrong.</strong> To go from
              <InlineMath math="x = 0" /> to <InlineMath math="x = 2" /> with
              <InlineMath math="h = 0.5" />, you need <em>four</em> steps, not
              five — you visit <InlineMath math="x = 0, 0.5, 1.0, 1.5, 2.0" />,
              which is five values but four transitions. A common error is to
              compute one extra step and report an answer at
              <InlineMath math="x = 2.5" /> instead of <InlineMath math="x = 2" />.
            </Why>
            <Why>
              <strong>2. Using the new <InlineMath math="x" /> with the old
              <InlineMath math="y" /> for the slope.</strong> The slope at step
              <InlineMath math="n" /> is <InlineMath math="f(x_n, y_n)" /> — both
              coordinates at the <em>start</em> of the interval. Once in a while
              students update <InlineMath math="x" /> first, then plug into
              <InlineMath math="f" /> with the new <InlineMath math="x_{n+1}" />
              and the old <InlineMath math="y_n" />, which is neither Euler nor
              any other valid method. Always read the slope at the point you're
              <em> at</em>, not the point you're about to be at.
            </Why>
            <Why>
              <strong>3. Confusing the slope and the new
              <InlineMath math="y" />.</strong> The slope tells you the
              <em> rate</em> of change of <InlineMath math="y" />, not the
              <em> new</em> <InlineMath math="y" />. New
              <InlineMath math="y = \text{old } y + h \cdot \text{slope}" />.
              A surprising number of arithmetic errors come from writing
              <InlineMath math="y_{n+1} = \text{slope}_n" /> by mistake.
            </Why>
            <Why>
              <strong>4. Trusting Euler without convergence checking.</strong>
              An Euler answer with <InlineMath math="h = 0.5" /> might be 40%
              off the true value. If the question doesn't specify a step size,
              halve it once and check whether the answer moves; if it does, the
              first answer wasn't accurate. If it doesn't, you've converged.
              On exams the step size is given so you can't iterate, but on
              real problems you must.
            </Why>
            <Why>
              <strong>5. Reading a slope field as if the dashes were the
              solution curves.</strong> The dashes are only <em>tangent
              indicators</em>. The actual solution curves are smooth paths
              that weave through the dashes — they don't follow any single
              dash all the way through. Newcomers sometimes try to follow a
              single dash from one end of the field to the other, which is
              wrong; you have to follow the local-tangent direction at each
              point, which changes as <InlineMath math="(x, y)" /> changes.
            </Why>
          </ChapterSection>

          <ChapterSection
            id="s7-3"
            number="7.3"
            title="Separable Equations"
            accentColor={ACCENT}
            blurb="The one analytic technique in this chapter: separate variables, integrate both sides."
          >
            <Why>
              Slope fields tell you the picture and Euler hands you numbers, but
              sometimes you really do want a clean formula for
              <InlineMath math="y(x)" />. A formula lets you do things pictures and
              numbers can't: differentiate it to verify, take a limit as
              <InlineMath math="x \to \infty" />, find exactly where the function
              equals some target value, plug it into another equation. So we want
              an <em>analytic</em> technique — a closed-form recipe that produces
              an explicit (or at least implicit) algebraic description of
              <InlineMath math="y(x)" />. The only analytic technique Calc II
              teaches you for first-order DEs is <em>separation of variables</em>.
              It works whenever the right-hand side factors into "something only in
              <InlineMath math="x" />" times "something only in
              <InlineMath math="y" />". The two variables are tangled together on
              the same side; you separate them so each lives alone with its own
              differential, integrate, and read off the answer.
            </Why>
            <Why>
              <strong>Prerequisite refresher: the antiderivative table.</strong>
              You are about to integrate constantly, on both sides of every
              equation, often with terms you haven't touched in months. Refresh
              these in your head before going further: power rule
              <InlineMath math="\int x^n \, dx = x^{n+1}/(n+1) + C" /> (for
              <InlineMath math="n \neq -1" />); reciprocal
              <InlineMath math="\int (1/x) \, dx = \ln|x| + C" />; natural
              exponential <InlineMath math="\int e^x \, dx = e^x + C" />; trig
              basics <InlineMath math="\int \sin x \, dx = -\cos x + C" /> and
              <InlineMath math="\int \cos x \, dx = \sin x + C" />; arctangent
              <InlineMath math="\int \frac{1}{1+x^2} \, dx = \arctan x + C" />;
              and the <InlineMath math="u" />-substitution reflex for inner
              functions. You'll also use partial fractions for the logistic case
              (Section 5.4 — you may want to peek back). Slow integration ruins
              the chapter, fast integration makes it feel easy.
            </Why>
            <Why>
              <strong>Why "separable" is a special case at all.</strong> A
              general first-order DE looks like <InlineMath math="dy/dx = F(x, y)" />
              where the right side is just <em>some</em> function of two variables.
              Most such functions don't factor. <InlineMath math="x + y" /> doesn't
              factor — you can't write it as (something in <InlineMath math="x" />)
              times (something in <InlineMath math="y" />). But
              <InlineMath math="xy" /> does, trivially. And
              <InlineMath math="e^{x+y} = e^x e^y" /> does, by exponent rules. The
              first non-separable example needs a different technique — integrating
              factors, which is a Calc III topic — but the second one is separable
              and is one of the standard textbook problems. So your first move on
              any new DE should be: "Can I factor the right side as a product of
              one-variable pieces?" If yes, you're separable and the rest is
              integration practice. If no, you can either try a clever substitution
              (like the one in Newton cooling) that <em>makes</em> it separable,
              or you punt to numerical methods.
            </Why>

            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-4">
              How separation actually works
            </h4>
            <Why>
              Start with <InlineMath math="dy/dx = g(x) \cdot h(y)" />. Treat
              <InlineMath math="dy" /> and <InlineMath math="dx" /> like algebraic
              objects — Leibniz set up his notation precisely so this would work —
              and multiply both sides by <InlineMath math="dx" /> and divide by
              <InlineMath math="h(y)" />. Now <em>all</em> the <InlineMath math="y" />
              stuff is on the left with a <InlineMath math="dy" />, and all the
              <InlineMath math="x" /> stuff is on the right with a
              <InlineMath math="dx" />. Each side is a one-variable integral. Stick
              an integral sign in front of each, work them out, and remember that
              the two unknown constants from integrating each side merge into a
              single <InlineMath math="+C" /> at the end.
            </Why>
            <BlockMath math="\frac{dy}{h(y)} = g(x)\,dx \quad\Longrightarrow\quad \int \frac{dy}{h(y)} = \int g(x)\,dx + C" />
            <Why>
              <strong>Is this really legal?</strong> Treating
              <InlineMath math="dy" /> and <InlineMath math="dx" /> as separate
              objects to be moved around like numbers feels a bit unprincipled if
              you remember that <InlineMath math="dy/dx" /> is a limit, not a
              fraction. Here's why it works: what you're really doing is applying
              the chain rule in reverse. The DE
              <InlineMath math="(1/h(y)) \cdot dy/dx = g(x)" /> integrates to
              <InlineMath math="\int (1/h(y)) \, dy = \int g(x) \, dx + C" /> by
              the substitution rule for integrals. The Leibniz notation just lets
              you skip the formal substitution and arrive at the same answer in
              one line. So separation isn't a hack — it's a shortcut for the
              substitution rule, and the answer it gives is the same as the
              rigorous one. Trust the notation.
            </Why>
            <Why>
              That last step — using the initial condition to nail down
              <InlineMath math="C" /> — is what turns the "general solution"
              (a whole family of curves) into "the particular solution" (the one
              curve through your starting point). If no IC is given, leave
              <InlineMath math="C" /> in. The general solution captures all the
              curves the slope field paints; the particular solution is just one
              of those curves, chosen by the requirement that it pass through
              <InlineMath math="(x_0, y_0)" />.
            </Why>
            <Why>
              <strong>Where to absorb the <InlineMath math="+C" />.</strong>
              Putting <InlineMath math="+C" /> on the right side after integration
              and then carrying it through is one good style. Another, often
              cleaner, is to apply the IC immediately to the implicit form (with
              <InlineMath math="C" />), solve for <InlineMath math="C" />, and
              substitute the value back in. A third style — used a lot in the
              exponential cases — is to absorb <InlineMath math="e^C" /> into a
              fresh constant <InlineMath math="A" /> once you exponentiate both
              sides, then nail down <InlineMath math="A" /> with the IC instead
              of nailing down <InlineMath math="C" />. All three styles produce
              the same final answer, and you should pick whichever feels least
              error-prone to you. The classic rookie move is to forget the
              <InlineMath math="+C" /> entirely; the second-classic rookie move
              is to write it on both sides as different constants and then have
              to subtract them later. One <InlineMath math="+C" />, on the right
              side, at the end of integration. That's the safe rule.
            </Why>

            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-4">
              Example 1 (warm-up): <InlineMath math="dy/dx = ky" />
            </h4>
            <Why>
              The simplest separable equation, and a chance to re-derive the
              exponential answer we keep quoting. Multiply by
              <InlineMath math="dx" />, divide by <InlineMath math="y" />:
            </Why>
            <BlockMath math="\frac{dy}{y} = k \, dx" />
            <Why>
              Integrate both sides. The left is a textbook log, the right is just
              <InlineMath math="kx" />:
            </Why>
            <BlockMath math="\ln|y| = kx + C" />
            <Why>
              Exponentiate both sides. <InlineMath math="|y| = e^{kx + C} = e^C \cdot e^{kx}" />.
              Absorb <InlineMath math="\pm e^C" /> into a single constant
              <InlineMath math="A" /> (any nonzero real number):
            </Why>
            <BlockMath math="y(x) = A \, e^{kx}" />
            <Why>
              If we'd been given an IC like <InlineMath math="y(0) = y_0" />, we'd
              plug in <InlineMath math="x = 0" />: <InlineMath math="y_0 = A \cdot 1 = A" />,
              so <InlineMath math="y(x) = y_0 e^{kx} " />. There's the familiar
              exponential solution to template 1, derived from scratch in three
              lines. The same machinery handles every other separable DE; the
              integrals just get harder.
            </Why>

            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-4">
              Example 2: <InlineMath math="dy/dx = x/y" />
            </h4>
            <Why>
              Now the right side has both <InlineMath math="x" /> and
              <InlineMath math="y" /> in it, but they separate cleanly because the
              <InlineMath math="x" /> is in the numerator and the
              <InlineMath math="y" /> is in the denominator. Multiply by
              <InlineMath math="y \, dx" />:
            </Why>
            <BlockMath math="y \, dy = x \, dx" />
            <Why>
              Both sides are power-rule integrals:
            </Why>
            <BlockMath math="\frac{y^2}{2} = \frac{x^2}{2} + C" />
            <Why>
              Solve for <InlineMath math="y" />: multiply through by 2 and rename
              <InlineMath math="2C" /> as a fresh <InlineMath math="C" /> (still
              arbitrary):
            </Why>
            <BlockMath math="y^2 = x^2 + C \quad\Rightarrow\quad y = \pm \sqrt{x^2 + C}" />
            <Why>
              That implicit form <InlineMath math="y^2 - x^2 = C" /> is a family
              of hyperbolas (or, for <InlineMath math="C = 0" />, the two lines
                <InlineMath math="y = \pm x" />). The choice of sign branch is
              determined by the initial condition: if you start at
              <InlineMath math="(0, 2)" /> then <InlineMath math="C = 4" /> and
              you live on the upper branch <InlineMath math="y = +\sqrt{x^2 + 4}" />
              forever — there's no way to cross to the lower branch without
              passing through <InlineMath math="y = 0" />, which the DE itself
              forbids (the right side <InlineMath math="x/y" /> blows up there).
              <em> Geometry of the solution constrains which branch you live on;
              the IC just tells you which one to pick.</em>
            </Why>

            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-4">
              Example 3 (logistic, derived by separation): <InlineMath math="dy/dx = y(1 - y)" />
            </h4>
            <Why>
              This is the logistic equation with <InlineMath math="k = 1" /> and
              <InlineMath math="M = 1" />. It's separable, but the integration on
              the <InlineMath math="y" />-side requires partial fractions — your
              chance to dust off that technique from Ch 5. Separate:
            </Why>
            <BlockMath math="\frac{dy}{y(1 - y)} = dx" />
            <Why>
              Partial fractions on the left: write
              <InlineMath math="\frac{1}{y(1-y)} = \frac{A}{y} + \frac{B}{1-y}" />.
              Clear denominators: <InlineMath math="1 = A(1 - y) + By" />. At
              <InlineMath math="y = 0" />: <InlineMath math="A = 1" />. At
              <InlineMath math="y = 1" />: <InlineMath math="B = 1" />. So:
            </Why>
            <BlockMath math="\left(\frac{1}{y} + \frac{1}{1-y}\right) dy = dx" />
            <Why>
              Integrate term by term. The second term needs a tiny
              <InlineMath math="u" />-substitution but it's clean:
              <InlineMath math="\int dy/(1-y) = -\ln|1-y|" />. So:
            </Why>
            <BlockMath math="\ln|y| - \ln|1 - y| = x + C" />
            <Why>
              Combine the logs and exponentiate. The combined log is
              <InlineMath math="\ln\bigl|y/(1-y)\bigr|" />:
            </Why>
            <BlockMath math="\left|\frac{y}{1-y}\right| = e^{x + C} = A \, e^x"  />
            <Why>
              Drop the absolute values by absorbing the sign into
              <InlineMath math="A" />, and solve for <InlineMath math="y" />:
              <InlineMath math="y/(1-y) = A e^x" />, so
              <InlineMath math="y = A e^x (1 - y)" />,
              <InlineMath math="y + A e^x y = A e^x" />,
              <InlineMath math="y(1 + A e^x) = A e^x" />:
            </Why>
            <BlockMath math="y(x) = \frac{A e^x}{1 + A e^x} = \frac{1}{1 + (1/A) e^{-x}}" />
            <Why>
              Rename <InlineMath math="1/A" /> as a new constant
              <InlineMath math="B" />: <InlineMath math="y(x) = 1/(1 + B e^{-x})" />.
              That's the famous logistic S-curve, derived by hand. If we'd had an
              IC like <InlineMath math="y(0) = 0.1" />, then
              <InlineMath math="0.1 = 1/(1 + B)" /> gives <InlineMath math="B = 9" />,
              and <InlineMath math="y(x) = 1/(1 + 9 e^{-x})" />. Check: at
              <InlineMath math="x = 0" />, <InlineMath math="y = 1/10 = 0.1" /> ✓;
              at <InlineMath math="x \to \infty" />, <InlineMath math="y \to 1" />
              ✓; the curve is monotone increasing because the rate
              <InlineMath math="y(1-y)" /> is positive throughout
              <InlineMath math="0 < y < 1" />. The whole carrying-capacity story
              of 7.1 emerges from this one separation.
            </Why>

            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-4">
              Example 4 (the exponent trick): <InlineMath math="dy/dx = e^{x - y}" />
            </h4>
            <Why>
              At first this looks not-separable — the exponent has both variables
              mixed in. But the exponential rule
              <InlineMath math="e^{x - y} = e^x / e^y = e^x \cdot e^{-y}" /> is a
              product of one-variable pieces, so it <em>is</em> separable in
              disguise. Multiply by <InlineMath math="e^y \, dx" />:
            </Why>
            <BlockMath math="e^y \, dy = e^x \, dx" />
            <Why>
              Each side integrates trivially:
            </Why>
            <BlockMath math="e^y = e^x + C \quad\Rightarrow\quad y = \ln(e^x + C)" />
            <Why>
              Notice we couldn't drop the absolute value because
              <InlineMath math="e^y > 0" /> always, so the log is well-defined
              as long as <InlineMath math="e^x + C > 0" />. If the IC forces
              <InlineMath math="C" /> negative, the solution exists only for
              <InlineMath math="x > \ln|C|" /> — the curve has a vertical asymptote
              at that point and the DE fails to extend further left. This is a
              common feature of nonlinear DEs: the domain of the solution depends
              on the initial condition, not just on the equation. Different
              starting points can give solutions that live on completely different
              intervals.
            </Why>

            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-4">
              How to spot a separable DE
            </h4>
            <Why>
              The right-hand side has to <em>factor</em> as a product (or quotient)
              of one-variable pieces. <InlineMath math="dy/dx = xy" /> separates
              because the right side is <InlineMath math="x \cdot y" />.
              <InlineMath math="dy/dx = e^{x+y}" /> separates because
              <InlineMath math="e^{x+y} = e^x \cdot e^y" /> — the exponent rule does
              the splitting for you. <InlineMath math="dy/dx = x + y" /> does
              <em>not</em> separate — a sum isn't a product, and you can't move all
              the <InlineMath math="x" />'s and all the <InlineMath math="y" />'s
              apart. (That one needs the "integrating factor" technique, which is
              Calc III/ODE class.) The mental check: try to write the right side
              with all <InlineMath math="x" />'s on one side of a multiplication
              symbol and all <InlineMath math="y" />'s on the other. If you can,
              you're golden.
            </Why>

            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-4">
              Walk one example: <InlineMath math="dy/dx = xy" />, <InlineMath math="y(0) = 5" />
            </h4>
            <Why>
              First, separate. Multiply by <InlineMath math="dx" /> and divide by
              <InlineMath math="y" />:
            </Why>
            <BlockMath math="\frac{dy}{y} = x\,dx" />
            <Why>
              Integrate both sides. Left is a textbook log, right is a textbook
              power rule.
            </Why>
            <BlockMath math="\ln|y| = \tfrac{x^2}{2} + C" />
            <Why>
              Solve for <InlineMath math="y" />. Exponentiating both sides gives
              <InlineMath math="|y| = e^{x^2/2 + C} = e^C \cdot e^{x^2/2}" />.
              Here's the trick that every textbook uses but rarely names: the
              constant <InlineMath math="e^C" /> can be <em>any</em> positive
              number, and once you absorb the <InlineMath math="\pm" /> from
              <InlineMath math="|y|" /> into it, <em>any nonzero real number</em>.
              Rename it as a single new constant <InlineMath math="A" />:
            </Why>
            <BlockMath math="y(x) = A\, e^{x^2/2}" />
            <Why>
              Now apply the initial condition. At <InlineMath math="x = 0" />,
              <InlineMath math="e^0 = 1" />, so <InlineMath math="y(0) = A = 5" />.
            </Why>
            <BlockMath math="y(x) = 5\, e^{x^2/2}" />
            <Why>
              Sanity-check by differentiating: <InlineMath math="y' = 5 \cdot x \cdot e^{x^2/2} = x \cdot y" />.
              That matches the original DE. And <InlineMath math="y(0) = 5" /> as
              required. The solution shoots up faster than ordinary exponential
              because the exponent itself is quadratic.
            </Why>

            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-4">
              The <InlineMath math="e^C \to A" /> trick, explained
            </h4>
            <Why>
              Why does the <InlineMath math="\pm" /> from <InlineMath math="|y|" />
              and the <InlineMath math="e^C" /> all get to fold into one symbol
              <InlineMath math="A" />? Because <InlineMath math="C" /> is an
              <em>unknown</em> real number, <InlineMath math="e^C" /> is an
              unknown positive number, and tacking on a <InlineMath math="\pm" />
              gives you any unknown nonzero real number. Calling that
              <InlineMath math="A" /> doesn't lose any solutions and saves a lot of
              ink. The only solution you might have lost is <InlineMath math="A = 0" />
              (which corresponds to <InlineMath math="y \equiv 0" />) — but that
              came from dividing by <InlineMath math="y" /> in the very first step,
              and we'll talk about that pitfall next.
            </Why>

            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-4">
              The classic gotcha: equilibrium solutions you killed by dividing
            </h4>
            <Why>
              When you wrote <InlineMath math="dy/y = x\,dx" />, you quietly assumed
              <InlineMath math="y \neq 0" />. But look back at the original DE
              <InlineMath math="dy/dx = xy" />: the constant function
              <InlineMath math="y(x) = 0" /> obviously satisfies it (both sides are
              zero everywhere). That's a perfectly real solution — an equilibrium
              — that doesn't appear in our "<InlineMath math="y = A e^{x^2/2}" />"
              family unless we let <InlineMath math="A = 0" />. The rule: whenever
              you divide by <InlineMath math="h(y)" />, first <em>solve
              <InlineMath math="h(y) = 0" /></em> separately. Those constant
              <InlineMath math="y" /> values are extra solutions that the
              separation step throws away. List them alongside your general family.
              The logistic equation is the most-cited example: dividing by
              <InlineMath math="P(1 - P/M)" /> deletes both <InlineMath math="P = 0" />
              and <InlineMath math="P = M" />, and both are genuine equilibrium
              solutions (one unstable, one stable). They're not just curiosities —
              <InlineMath math="P = M" /> is the long-term fate of every
              non-zero starting population.
            </Why>

            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-4">
              How 7.3 connects to the rest of your courses
            </h4>
            <Why>
              Separation of variables is the gateway to a whole hierarchy of
              analytic techniques for DEs. The next step up — for equations that
              aren't separable — is the <em>integrating factor</em> method, which
              handles linear first-order DEs of the form
              <InlineMath math="dy/dx + p(x) y = q(x)" />. You'll see it in a
              future course (often a sophomore ODE class, sometimes Calc III).
              Beyond that come <em>exact equations</em>, equations with
              <em> substitutions</em>, and a whole zoo of named tricks. But every
              one of them is built on the same idea Calc II teaches you here:
              <em> rearrange the equation so each variable lives in its own
              integral, then antidifferentiate</em>. Even modern symbolic
              computer-algebra systems (Mathematica, SymPy) start by checking
              "is this separable?" before trying anything fancier. You're learning
              the foundation.
            </Why>
            <Why>
              The integration tricks of Ch 5 (substitution, parts, partial
              fractions, trig substitution) come back with a vengeance in 7.3.
              Every separable DE produces two integrals that have to be handled,
              one in <InlineMath math="y" /> and one in <InlineMath math="x" />,
              and either of them can be hard. Logistic needs partial fractions;
              <InlineMath math="dy/dx = (x+1)e^{-x}/y" /> needs parts on the
              <InlineMath math="x" />-side; <InlineMath math="dy/dx = \sec y / x" />
              needs the integral of secant, which itself needed a clever trick.
              So 7.3 is also a workout in Ch 5 — if your integration is rusty,
              this is the moment to repair it.
            </Why>

            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-4">
              Common exam question types for 7.3
            </h4>
            <Why>
              <em>(1) Solve <InlineMath math="dy/dx = f(x, y)" /> with an IC.</em>
              Recognize separability, separate, integrate, apply the IC, write
              the explicit solution if possible. The most common kind of question.
              <em> (2) Find the general solution (no IC).</em> Same procedure but
              leave <InlineMath math="C" /> in the answer. <em>(3) Identify all
              equilibrium solutions.</em> Find values of <InlineMath math="y" />
              where the right side is zero for all <InlineMath math="x" />.
              <em> (4) Write a story as a separable DE and solve.</em> A mixing-tank
              problem, a heat-loss problem, a population problem — translate the
              story, separate, integrate, interpret. <em>(5) Show that a given
              function is a solution.</em> Differentiate the candidate, plug into
              the DE, check that both sides agree. This is a useful self-test
              technique even when not explicitly asked.
            </Why>

            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-4">
              Pitfalls, expanded
            </h4>
            <Why>
              <strong>1. Forgetting the equilibrium solutions.</strong> Dividing
              by <InlineMath math="h(y)" /> in the separation step throws away any
              constant solutions where <InlineMath math="h(y) = 0" />. Always
              list them. For the logistic, both <InlineMath math="y = 0" /> and
              <InlineMath math="y = M" /> are equilibria; for pure exponential
              decay, <InlineMath math="y = 0" /> is the only one; for Newton
              cooling, <InlineMath math="T = T_{\text{env}}" /> is the equilibrium
              and shows up as a constant solution that the substitution trick
              quietly hides.
            </Why>
            <Why>
              <strong>2. Writing two <InlineMath math="+C" />'s instead of one.</strong>
              When you integrate both sides, each side technically gives an
              arbitrary constant. But the two constants can be merged:
              <InlineMath math="C_1 = C_2 + C_{\text{net}}" />, and only the
              difference matters. Writing two constants doesn't break anything
              but it's confusing and clutters the algebra. One constant, on the
              right, at the end. The standard.
            </Why>
            <Why>
              <strong>3. Forgetting the absolute value when integrating
              <InlineMath math="1/y" />.</strong> The antiderivative of
              <InlineMath math="1/y" /> is <InlineMath math="\ln|y|" />, not
              <InlineMath math="\ln y" />, because the logarithm of a negative
              number is undefined in the real numbers. When you exponentiate to
              solve for <InlineMath math="y" />, the absolute value lets you
              recover <em>both</em> positive and negative <InlineMath math="y" />
              solutions by absorbing the <InlineMath math="\pm" /> into the
              renamed constant <InlineMath math="A = \pm e^C" />. Drop the
              absolute value too early and you lose half your solution family.
            </Why>
            <Why>
              <strong>4. Assuming the implicit form is the final answer.</strong>
              An equation like <InlineMath math="y^2 - x^2 = C" /> is an
              <em> implicit</em> solution — a relationship between
              <InlineMath math="x" /> and <InlineMath math="y" /> that the
              solution curve satisfies, but not an explicit formula for
              <InlineMath math="y(x)" />. If the problem asks for
              <InlineMath math="y" /> as a function of <InlineMath math="x" />,
              you have to solve for <InlineMath math="y" /> (here:
              <InlineMath math="y = \pm\sqrt{x^2 + C}" />) and pick the right
              branch using the IC.
            </Why>
            <Why>
              <strong>5. Trying to separate a non-separable equation.</strong>
              <InlineMath math="dy/dx = x + y" /> is the classic example — it
              looks innocuous but the right side is a sum, not a product, so it
              doesn't separate. Students sometimes try to write
              <InlineMath math="dy = (x + y) \, dx" /> and integrate, treating
              <InlineMath math="y" /> on the right as a constant, which is wrong
              because <InlineMath math="y" /> depends on <InlineMath math="x" />.
              The correct technique for that equation is the integrating-factor
              method, which is one section into a sophomore ODE class. If you
              try to force separation on a non-separable equation, you'll get an
              answer that doesn't satisfy the DE when you check by
              differentiation — always sanity-check by plugging back in.
            </Why>
            <Why>
              <strong>6. Sign errors when dropping absolute values.</strong>
              When you go from <InlineMath math="|y| = A e^{kx}" /> to
              <InlineMath math="y = A e^{kx}" /> by absorbing the sign into
              <InlineMath math="A" />, you must commit to one branch — either
              <InlineMath math="y > 0" /> everywhere or <InlineMath math="y < 0" />
              everywhere — because the solution can't cross
              <InlineMath math="y = 0" /> without violating uniqueness. The IC
              picks the branch. After that, the sign of <InlineMath math="A" />
              is fixed; don't change it later.
            </Why>
          </ChapterSection>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Worked Examples
          </h3>

          <WorkedExample
            accentColor={ACCENT}
            title="Newton cooling model (7.1)"
            problemStatement={
              <>
                A cup of coffee at <InlineMath math="90\,^\circ\text{C}" /> is placed in a room
                at <InlineMath math="20\,^\circ\text{C}" />. After 5 minutes it has cooled to{" "}
                <InlineMath math="70\,^\circ\text{C}" />. Find the temperature 15 minutes after it was
                placed in the room.
              </>
            }
            steps={[
              {
                heading: "Set up the DE",
                body: (
                  <>
                    <Why>
                      Newton's law of cooling says the temperature changes at a
                      rate proportional to the gap between the object and its
                      surroundings. Big gap → cools fast; small gap → cools
                      slow; same temperature → not changing. Mathematically:
                    </Why>
                    <Eq>dT/dt = −k(T − 20)</Eq>
                    <Why>
                      The DE has a constant offset (the 20°C ambient), which
                      makes the right-hand side not just proportional to T.
                      Trick: substitute u = T − 20 (the temperature "above
                      room") to clear the offset. Then du/dt = dT/dt = −ku, a
                      pure exponential decay.
                    </Why>
                    <Eq>u(t) = u₀ e^(−kt)   ⇒   T(t) = 20 + (T₀ − 20)·e^(−kt)</Eq>
                  </>
                ),
              },
              {
                heading: "Plug in the initial temperature",
                body: (
                  <>
                    <Why>
                      We know <InlineMath math="T_0 = 90\,^\circ\text{C}" />, so
                      <InlineMath math="T_0 - 20 = 70" />:
                    </Why>
                    <Eq>T(t) = 20 + 70·e^(−kt)</Eq>
                    <Why>
                      We still need k. Two unknowns means we need another data
                      point — the t = 5 measurement.
                    </Why>
                  </>
                ),
              },
              {
                heading: "Find k from the 5-minute data",
                body: (
                  <>
                    <Why>
                      Set <InlineMath math="T(5) = 70" /> and solve for k:
                    </Why>
                    <Eq>70 = 20 + 70·e^(−5k)</Eq>
                    <Eq>50/70 = e^(−5k)   ⇒   −5k = ln(5/7)</Eq>
                    <Eq>k = −(1/5)·ln(5/7) ≈ 0.0673 / min</Eq>
                    <Why>
                      Sanity check: positive k, as it should be (temperature is
                      decaying). 1/k ≈ 15 min is the time constant — roughly
                      how long for the temperature gap to drop by a factor of
                      e ≈ 2.7. Matches our intuition that coffee cools mostly
                      over the first quarter hour.
                    </Why>
                  </>
                ),
              },
              {
                heading: "Evaluate at t = 15",
                body: (
                  <>
                    <Why>
                      Plug t = 15 into our T(t). A nice trick: 15 = 3·5, so
                      e^(−15k) = (e^(−5k))³ = (5/7)³ — no need to recompute
                      with the messy decimal value of k.
                    </Why>
                    <Eq>T(15) = 20 + 70 · (5/7)³ = 20 + 70 · 125/343 ≈ 45.5 °C</Eq>
                    <Why>
                      So 15 minutes in, the coffee is just under halfway from
                      its initial 90 °C down to room temp — about lukewarm.
                      Reasonable for a real coffee cup left in a normal room.
                    </Why>
                  </>
                ),
                result: { label: "T(15)", value: "≈ 45.5 °C", color: "amber" },
              },
            ]}
            keyInsight={
              <>
                The substitution <InlineMath math="u = T - T_{\text{env}}" /> always
                reduces Newton cooling to plain exponential decay — you never
                have to memorize the cooling formula. The general solution
                T(t) = T_env + (T₀ − T_env)·e^(−kt) drops out automatically.
              </>
            }
          />

          <WorkedExample
            accentColor={ACCENT}
            title="Euler's method step (7.2)"
            problemStatement={
              <>
                Use Euler's method with step size <InlineMath math="h = 0.5" /> to estimate{" "}
                <InlineMath math="y(2)" /> for <InlineMath math="dy/dx = x + y" /> with{" "}
                <InlineMath math="y(0) = 1" />.
              </>
            }
            steps={[
              {
                heading: "Recurrence",
                body: (
                  <>
                    <Why>
                      Euler's method is just "follow the slope": at the current
                      (x_n, y_n), the slope from the DE tells you which
                      direction to go; step h units in x and gain h × slope in
                      y. Plug in our specific f(x, y) = x + y:
                    </Why>
                    <Eq>y_(n+1) = y_n + h·(x_n + y_n) = y_n + 0.5(x_n + y_n)</Eq>
                  </>
                ),
              },
              {
                heading: "Step through",
                body: (
                  <>
                    <Why>
                      Start at (0, 1). Compute slope, take a step, update
                      (x, y), repeat. Need 4 steps of h = 0.5 to reach x = 2:
                    </Why>
                    <Eq>
                      x₀ = 0, y₀ = 1{"\n"}
                      x₁ = 0.5, y₁ = 1 + 0.5(0 + 1) = 1.5{"\n"}
                      x₂ = 1.0, y₂ = 1.5 + 0.5(0.5 + 1.5) = 2.5{"\n"}
                      x₃ = 1.5, y₃ = 2.5 + 0.5(1.0 + 2.5) = 4.25{"\n"}
                      x₄ = 2.0, y₄ = 4.25 + 0.5(1.5 + 4.25) = 7.125
                    </Eq>
                  </>
                ),
                result: { label: "y(2) ≈", value: "7.125", color: "amber" },
              },
              {
                heading: "Check against the exact solution",
                body: (
                  <>
                    <Why>
                      This DE happens to have a closed-form solution
                      (y = −x − 1 + 2 e^x). Let's see how good our estimate is:
                    </Why>
                    <Eq>y_exact(2) = −3 + 2e² ≈ 11.78</Eq>
                    <Why>
                      Our Euler estimate (7.125) is way under — about 40% low.
                      h = 0.5 is too coarse for this fast-growing solution.
                      Euler is a 1st-order method, so halving h roughly halves
                      the error: with h = 0.25 we'd expect ~9.5, with h = 0.05
                      ~11.5, and so on.
                    </Why>
                  </>
                ),
              },
            ]}
            keyInsight={
              <>
                Each Euler step uses the slope at the <em>current</em> point,
                not the average across the step — that's why the method drifts
                off concave-up curves (the slope keeps increasing during the
                step). Higher-order methods (Runge-Kutta, etc.) sample the
                slope at multiple points within each step to fix this.
              </>
            }
          />

          <WorkedExample
            accentColor={ACCENT}
            title="Separable DE with IC (7.3)"
            problemStatement={
              <>
                Solve <InlineMath math="dy/dx = x/y" /> with <InlineMath math="y(0) = 2" />.
              </>
            }
            steps={[
              {
                heading: "Separate",
                body: (
                  <>
                    <Why>
                      Move all y's (with dy) to one side, all x's (with dx) to
                      the other. Multiply both sides by y dx:
                    </Why>
                    <BlockMath math="y\,dy = x\,dx" />
                  </>
                ),
              },
              {
                heading: "Integrate both sides",
                body: (
                  <>
                    <Why>
                      Each side is now a clean integral:
                    </Why>
                    <BlockMath math="\tfrac{y^2}{2} = \tfrac{x^2}{2} + C \;\Rightarrow\; y^2 = x^2 + 2C" />
                    <Why>
                      Note we only need ONE constant of integration (the
                      difference of the two C's from each side). Rename 2C as
                      a single C in the next step.
                    </Why>
                  </>
                ),
              },
              {
                heading: "Apply the initial condition",
                body: (
                  <>
                    <Why>
                      Plug in y(0) = 2 to find the constant:
                    </Why>
                    <Eq>y(0) = 2  ⇒  4 = 0 + C  ⇒  C = 4</Eq>
                    <Eq>y² = x² + 4</Eq>
                    <Why>
                      Solving for y: y = ±√(x² + 4). Since y(0) = +2 (positive),
                      we pick the positive branch.
                    </Why>
                    <Eq>y(x) = √(x² + 4)</Eq>
                  </>
                ),
                result: { label: "Solution", value: "y(x) = √(x² + 4)", color: "amber" },
              },
            ]}
            keyInsight={
              <>
                After separating and integrating, pick the branch (sign){" "}
                <em>before</em> applying the IC — otherwise the{" "}
                <InlineMath math="\pm" /> ambiguity bites you. The IC tells
                you which branch you live on; sticking to it makes the answer
                unique.
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
            title="Modeling DEs"
            statement={<>Translate each scenario into a DE and solve.</>}
            parts={[
              {
                label: "(a)",
                question: (
                  <>
                    A radioactive substance decays so that 25% remains after 8 years.
                    Find its half-life.
                  </>
                ),
                solutionSteps: (
                  <>
                    <Why>
                      Radioactive decay is "rate proportional to amount" →
                      exponential decay with N(t) = N₀ e^(−kt). Use the data
                      point (8 years, 25%) to find k, then solve for the time
                      to reach 50%.
                    </Why>
                    <Eq>0.25 = e^(−8k)  ⇒  k = ln(4) / 8</Eq>
                    <Why>
                      Half-life: solve N/N₀ = 1/2:
                    </Why>
                    <Eq>t₁/₂ = ln(2)/k = ln(2)·8/ln(4) = ln(2)·8/(2 ln(2)) = 4 years</Eq>
                    <Why>
                      Sanity: 25% = (1/2)² remaining → must be 2 half-lives in 8
                      years → 1 half-life = 4 years. ✓
                    </Why>
                  </>
                ),
                answer: { value: "4 years" },
              },
              {
                label: "(b)",
                question: (
                  <>
                    A bacteria culture doubles every 3 hours. How long to grow 10×?
                  </>
                ),
                solutionSteps: (
                  <>
                    <Why>
                      "Doubles every 3 hours" gives k from the doubling-time
                      formula. Then solve for t when N/N₀ = 10:
                    </Why>
                    <Eq>2 = e^(3k)  ⇒  k = ln(2)/3</Eq>
                    <Eq>10 = e^(kt)  ⇒  t = ln(10)/k = 3·ln(10)/ln(2) ≈ 9.97 hours</Eq>
                  </>
                ),
                answer: { value: "≈ 9.97 hours" },
              },
            ]}
          />

          <PracticeProblem
            accentColor={ACCENT}
            title="Slope fields & Euler"
            statement={<>For each DE, take 4 Euler steps from the IC.</>}
            parts={[
              {
                label: "(a)",
                question: (
                  <>
                    <InlineMath math="dy/dx = y - x" />, <InlineMath math="y(0) = 2" />,{" "}
                    <InlineMath math="h = 0.25" />. Estimate <InlineMath math="y(1)" />.
                  </>
                ),
                solutionSteps: (
                  <>
                    <Why>
                      Apply y_(n+1) = y_n + h·(y_n − x_n) starting at (0, 2).
                      4 steps of h = 0.25 reach x = 1:
                    </Why>
                    <Eq>
                      x = 0.00, y = 2.00, slope = 2 → y₁ = 2 + 0.25·2 = 2.50{"\n"}
                      x = 0.25, y = 2.50, slope = 2.25 → y₂ = 3.0625{"\n"}
                      x = 0.50, y = 3.0625, slope = 2.5625 → y₃ = 3.7031{"\n"}
                      x = 0.75, y = 3.7031, slope = 2.9531 → y₄ = 4.4414
                    </Eq>
                    <Why>
                      Compare to exact y = x + 1 + e^x: y(1) = 2 + e ≈ 4.72. Our
                      Euler estimate (4.44) is about 6% low — much better than
                      the previous example because h is smaller relative to the
                      growth scale.
                    </Why>
                  </>
                ),
                answer: { value: "y(1) ≈ 4.44 (exact ≈ 4.72)" },
              },
            ]}
          />

          <PracticeProblem
            accentColor={ACCENT}
            title="Separable equations"
            statement={<>Solve each separable DE; with IC, write y explicitly.</>}
            parts={[
              {
                label: "(a)",
                question: <><InlineMath math="dy/dx = e^{x - y}" /></>,
                solutionSteps: (
                  <>
                    <Why>
                      Use exponent properties to split: e^(x − y) = e^x · e^(−y).
                      Now it's a product of (something in x)(something in y) →
                      separable.
                    </Why>
                    <BlockMath math="e^y\,dy = e^x\,dx \Rightarrow e^y = e^x + C \Rightarrow y = \ln(e^x + C)" />
                    <Why>
                      Note we can't simplify further without an IC — the constant
                      C remains.
                    </Why>
                  </>
                ),
                answer: { value: "y = ln(eˣ + C)" },
              },
              {
                label: "(b)",
                question: (
                  <>
                    <InlineMath math="dy/dx = -2xy" />, <InlineMath math="y(0) = 3" />.
                  </>
                ),
                solutionSteps: (
                  <>
                    <Why>
                      Separable as dy/y = −2x dx. Both sides integrable; the
                      logarithm on the left exponentiates to a clean form:
                    </Why>
                    <BlockMath math="\tfrac{dy}{y} = -2x\,dx \;\Rightarrow\; \ln|y| = -x^2 + C \;\Rightarrow\; y = A e^{-x^2}" />
                    <Why>
                      Apply IC: y(0) = A = 3.
                    </Why>
                    <Eq>y(x) = 3 e^(−x²)</Eq>
                    <Why>
                      This is a Gaussian centered at x = 0 — peaks at 3 and
                      falls to zero on both sides.
                    </Why>
                  </>
                ),
                answer: { value: "y = 3 e^(−x²)" },
              },
              {
                label: "(c)",
                question: (
                  <>
                    Logistic: <InlineMath math="dP/dt = 0.4 P(1 - P/100)" />, <InlineMath math="P(0) = 10" />.
                    Find <InlineMath math="P(t)" />.
                  </>
                ),
                solutionSteps: (
                  <>
                    <Why>
                      Read off the parameters: this is logistic with k = 0.4 and
                      M = 100. Then use the standard logistic formula and the
                      A formula from the IC:
                    </Why>
                    <Eq>M = 100,  k = 0.4,  A = (M − P₀)/P₀ = 90/10 = 9</Eq>
                    <BlockMath math="P(t) = \dfrac{100}{1 + 9 e^{-0.4 t}}" />
                    <Why>
                      Sanity: at t = 0, P = 100/10 = 10 ✓. As t → ∞, e^(−0.4t)
                      → 0 so P → 100 (the carrying capacity). S-shaped growth:
                      starts near 10, slows as it approaches 100.
                    </Why>
                  </>
                ),
                answer: { value: "P(t) = 100 / (1 + 9 e^(−0.4 t))" },
              },
            ]}
          />
        </section>

        <section>
          <Card className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-gray-700 dark:text-gray-200">
                Done with Ch 7? Keep going or test yourself:
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/math/drill">
                  <Button variant="outline">Drill Ch 7</Button>
                </Link>
                <Link href="/math/cheat-sheet">
                  <Button variant="outline">Cheat Sheet</Button>
                </Link>
                <Link href="/math/series">
                  <Button style={{ background: "#7c3aed", color: "white" }}>
                    Next: Ch 8 Series →
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
