import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { ChapterSection } from "@/components/math/ChapterSection";
import { MathFormula } from "@/components/math/MathFormula";
import { SolidOfRevolutionViz } from "@/components/math/SolidOfRevolutionViz";
import { BlockMath, InlineMath } from "@/components/math/Katex";
import { WorkedExample, Eq, Why } from "@/components/midterm/WorkedExample";
import { PracticeProblem } from "@/components/midterm/PracticeProblem";

const ACCENT = "#10b981";
const SEE_BELOW = (
  <p className="text-xs italic text-gray-500 dark:text-gray-400">
    See full worked examples + practice at the bottom of this chapter ↓
  </p>
);

export default function Ch6Applications() {
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
            Ch 6 · Applications of Integration
          </h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container py-10 space-y-10">
        <section className="rounded-2xl bg-emerald-50 dark:bg-slate-800 p-8">
          <span
            className="inline-block text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-3"
            style={{ background: ACCENT }}
          >
            Sections 6.1 – 6.5
          </span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Pick the right slice
          </h2>

          <div className="text-gray-700 dark:text-gray-200 max-w-3xl space-y-4">
            <p>
              <strong>Chapter 5 gave you the integral; this chapter spends it.</strong>{" "}
              Five sections, five completely different-looking problems — areas
              of weird lens-shaped regions, volumes of bullet-nosed paraboloids,
              the surface arc-length of a wavy curve, the long-run average
              temperature of a room. They look unrelated. They are all the same
              recipe. Every single application in Chapter 6 follows three steps,
              in this order: <em>picture a thin representative slice of the
              thing you want to measure</em>; <em>write down the size of that
              slice as an infinitesimal expression</em>; <em>integrate over the
              range to add up all the slices</em>. That's it. Once you internalize
              this rhythm — slice, size, integrate — the whole chapter collapses
              into a single idea wearing five different costumes.
            </p>

            <p>
              The first concrete image to lock into your head: a tall ceramic
              vase sitting on a turntable. You want its volume. You could pour
              water in and measure, but instead you imagine slicing it
              horizontally with a deli slicer into a stack of paper-thin
              coin-shaped disks. Each disk has a radius that depends on how high
              up the vase you are, and a tiny thickness equal to the slice gap.
              Add up all the disk volumes — that's literally what
              <InlineMath math="V = \pi \int_a^b [R(x)]^2\,dx" /> is saying. The
              integral sign is a stretched-out "S" because Leibniz really did
              mean it as a <em>sum</em>: a sum of infinitely many slices, each
              one infinitesimally thin. Hold on to the deli-slicer image. We're
              going to apply it to areas (slice the flat region into vertical
              ribbons), volumes (slice the 3-D solid into disks or shells), arc
              length (slice the curve into microscopic line segments), and even
              average value (slice the function's domain into equal-width bins
              and average). Same move, different things to slice.
            </p>

            <p>
              <strong>The roadmap, and why this order.</strong> Section 6.1
              starts with the easiest version: a flat 2-D region between two
              curves, sliced into thin vertical strips of width
              <InlineMath math="dx" />. The size of each strip is just
              <em> top curve minus bottom curve</em>, times <InlineMath math="dx" />,
              and the integral adds them up. You meet the most important question
              in the whole chapter here — <em>which curve is on top?</em> — and
              the most important fix when the answer changes mid-interval: split
              the integral. Once you're comfortable with the strip-and-integrate
              rhythm in 2-D, Section 6.2 lifts the same idea into 3-D by
              spinning a region around an axis. The strip becomes a disk (or a
              washer if there's a hole), and the area-of-a-disk formula
              <InlineMath math="\pi R^2" /> takes over from "top minus bottom."
              Section 6.3 attacks the very same 3-D solid but slices it the
              <em>other way</em>: parallel to the axis instead of perpendicular.
              Now each slice is a hollow cylindrical shell, and when you unroll
              it (like peeling the paper label off a soup can) it becomes a thin
              rectangle of width <InlineMath math="2\pi x" /> and height
              <InlineMath math="f(x)" />. Sections 6.2 and 6.3 are deliberately
              two views of the same solid; learning to choose between them is
              half the battle in any exam volume problem.
            </p>

            <p>
              Section 6.4 takes the slice idea down a dimension — instead of
              cutting a 2-D region into 1-D strips or a 3-D solid into 2-D
              disks, we cut a 1-D curve into infinitesimal line segments. Each
              segment is the hypotenuse of a microscopic right triangle with
              horizontal leg <InlineMath math="dx" /> and vertical leg
              <InlineMath math="dy" />, so the Pythagorean theorem hands you
              <InlineMath math="ds = \sqrt{1 + (dy/dx)^2}\,dx" /> almost for
              free. Then Section 6.5 finishes the chapter with the most
              conceptually clean application: the continuous version of "average
              = sum over count." Slice the interval into <InlineMath math="n" />
              equal bins, sample f at each bin, take the ordinary arithmetic
              mean, let <InlineMath math="n \to \infty" />, and a Riemann sum
              pops out the other side — yielding
              <InlineMath math="\bar f = \frac{1}{b-a}\int_a^b f(x)\,dx" />. The
              <InlineMath math="(b-a)" /> in the denominator is the continuous
              count; the integral is the continuous sum. Every formula in this
              chapter has this same flavor of "ordinary arithmetic, with sums
              replaced by integrals and counts replaced by lengths."
            </p>

            <p>
              <strong>The one unifying mental move.</strong> If you remember
              nothing else, remember this: <em>every problem in Chapter 6 starts
              with "what does a thin slice look like, and what's its size?"</em>
              Don't write a single symbol until you've drawn that slice on paper
              and labeled its dimensions. Is the slice a vertical ribbon? Then
              its size is height × <InlineMath math="dx" />, where height is the
              top curve minus the bottom curve. Is the slice a disk? Then its
              size is <InlineMath math="\pi R^2\,dx" />, where R is the distance
              from the axis to the curve. A cylindrical shell? Circumference
              times height times thickness — <InlineMath math="2\pi x \cdot f(x)
              \cdot dx" />. A piece of curve? <InlineMath math="\sqrt{1 + (f')^2}\,dx" />
              by Pythagoras. Once that infinitesimal "size" is written down, the
              definite integral with the right limits is mechanical. Students
              who skip the drawing-the-slice step go straight to formula
              roulette ("which one was it again — disk? shell? washer?") and
              they almost always pick the wrong one. <strong>Draw the slice
              first. Always.</strong>
            </p>

            <p>
              <strong>What you should already have in your back pocket
              before reading these sections.</strong> The Fundamental Theorem
              of Calculus from Chapter 5 — specifically, that{" "}
              <InlineMath math="\int_a^b f(x)\,dx = F(b) - F(a)" /> where
              <InlineMath math="F" /> is any antiderivative of
              <InlineMath math="f" />. You'll be evaluating definite integrals
              constantly, so the power rule, the basic antiderivative table
              (polynomials, sines and cosines, exponentials, the natural log of
              x), and the substitution rule (u-substitution) all need to be
              second nature. From geometry, you need three things cold: the
              area of a circle is <InlineMath math="\pi r^2" />, the
              circumference of a circle is <InlineMath math="2\pi r" />, and the
              Pythagorean theorem says
              <InlineMath math="(\text{hypotenuse})^2 = (\text{leg}_1)^2 + (\text{leg}_2)^2" />.
              From your high-school geometry kit, the volume of a cylinder
              <InlineMath math="V = \pi r^2 h" /> is a sanity-check tool — every
              volume answer you compute should be in the right ballpark compared
              to the smallest cylinder that contains the solid. Use that
              cylinder as a "did I make an order-of-magnitude error?" check at
              the end of every problem.
            </p>

            <p>
              <strong>Common pitfalls preview — the five things this chapter's
              exams are designed to catch.</strong> <em>One:</em> in 6.1, getting
              "top minus bottom" backwards because you didn't sketch and ended
              up with a negative area. The fix is always to sketch first and
              identify which curve is on top, plus split the integral wherever
              they cross. <em>Two:</em> in 6.2, writing
              <InlineMath math="\pi (R - r)^2" /> when you meant
              <InlineMath math="\pi (R^2 - r^2)" /> — these are completely
              different numbers, because the washer is the area of the outer
              disk minus the inner disk's missing area, not the area of a
              ring-shaped disk whose radius is the difference. <em>Three:</em>
              in 6.2/6.3, choosing disks when shells would have been one line
              shorter (or vice versa) — there's a clean heuristic for this
              (covered in 6.3) and getting it wrong wastes ten minutes of exam
              time on inverting a function you didn't have to invert.
              <em>Four:</em> in 6.4, picking an arc-length problem off the page
              that isn't engineered to simplify — the radical
              <InlineMath math="\sqrt{1 + [f'(x)]^2}" /> almost never has a clean
              antiderivative, so textbook problems are specially constructed
              with <InlineMath math="1 + (f')^2" /> turning into a perfect
              square. If yours isn't simplifying, you've probably misread the
              problem or it's intended for Simpson's rule numerically.
              <em>Five:</em> in 6.5, forgetting to divide by
              <InlineMath math="b - a" /> at the end. The integral by itself is
              the total area; the average is area divided by width. Half-credit
              answers in this section almost always trace back to that missing
              division.
            </p>

            <p>
              <strong>How to read this chapter.</strong> Each section below
              opens with the mental picture in plain English, then derives the
              key formula from scratch using the slice-and-integrate template,
              works one or two concrete examples step-by-step, calls out the
              specific pitfalls that show up on exams, and points to interactive
              visualizers where you can drag a slider to actually watch the
              slices fill up the solid. Don't skim. The whole point of the
              "explain, don't tell" approach is that the formulas are forgettable
              but the pictures stick. If you spend a full minute reading each
              "why"-block here, you'll spend less time later on test day trying
              to remember whether disks have a <InlineMath math="2\pi" /> in
              front or just a <InlineMath math="\pi" />. (It's
              <InlineMath math="\pi" /> — because disks are flat circles, and
              circles have area <InlineMath math="\pi r^2" />. The
              <InlineMath math="2\pi" /> belongs to shells, where it's literally
              the circumference of the unrolled rectangle.) The pictures answer
              the formula questions for you, every time.
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
              name="Area between curves"
              latex="A = \int_a^b \bigl[\,f(x) - g(x)\,\bigr]\,dx"
              variables={[
                {
                  symbol: "f \\ge g",
                  meaning:
                    "f is the upper curve, g is the lower curve over [a, b] — at every x, the integrand (top − bottom) is the height of a thin vertical strip",
                },
                {
                  symbol: "[a, b]",
                  meaning:
                    "the x-range over which we're computing area; usually the curves' intersection points",
                },
              ]}
              whenToUse="Imagine slicing the region into thin vertical strips of width dx. Each strip is a tiny rectangle of height (top − bottom). Sum them up = integrate. Sketch first to identify which curve is on top — if they cross, you have to split the integral into pieces and flip top/bottom on each piece."
            />
            <MathFormula
              accentColor={ACCENT}
              name="Volume — disk method"
              latex="V = \pi \int_a^b [\,R(x)\,]^2\,dx"
              variables={[
                {
                  symbol: "R(x)",
                  meaning:
                    "radius of the disk at position x — usually equal to the curve's height f(x) when rotating about the x-axis",
                },
              ]}
              whenToUse="Spin a region around an axis to make a solid. Slice the solid with planes PERPENDICULAR to the axis — each slice is a circular disk of area π·R². Multiply by thickness dx and integrate. Use this when there's no hole inside (the region touches the axis on one side)."
            />
            <MathFormula
              accentColor={ACCENT}
              name="Volume — washer method"
              latex="V = \pi \int_a^b \bigl([R(x)]^2 - [r(x)]^2\bigr)\,dx"
              variables={[
                {
                  symbol: "R",
                  meaning:
                    "outer radius — distance from the axis to the FAR curve of the rotated region",
                },
                {
                  symbol: "r",
                  meaning:
                    "inner radius — distance from the axis to the NEAR curve (the gap that becomes a hole)",
                },
              ]}
              whenToUse="Same idea as disks, but the region is gapped from the axis — so each slice is a washer (donut) instead of a disk. Subtract the hole's area: outer disk minus inner disk = π(R² − r²). Watch the order: it's R² − r², not (R − r)²."
            />
            <MathFormula
              accentColor={ACCENT}
              name="Volume — cylindrical shells"
              latex="V = 2\pi \int_a^b x\,f(x)\,dx"
              variables={[
                {
                  symbol: "x",
                  meaning:
                    "shell radius — horizontal distance from the rotation axis to this thin strip",
                },
                {
                  symbol: "f(x)",
                  meaning: "shell height — height of the strip (the curve's value at x)",
                },
              ]}
              whenToUse="Same solid as disks/washers, just sliced PARALLEL to the axis instead of perpendicular. Each slice unrolls into a thin rectangle of width 2π·x (the shell's circumference), height f(x), thickness dx. Often easier than washers when rotating about the y-axis with y = f(x), because you avoid having to invert x = f⁻¹(y)."
            />
            <MathFormula
              accentColor={ACCENT}
              name="Arc length"
              latex="L = \int_a^b \sqrt{1 + [f'(x)]^2}\,dx"
              variables={[
                {
                  symbol: "f'(x)",
                  meaning: "slope of the curve at x — the derivative dy/dx",
                },
              ]}
              whenToUse="Approximate the curve with tiny straight segments — each one is a hypotenuse √((dx)² + (dy)²). Factor out dx: ds = √(1 + (dy/dx)²) dx. Sum (integrate). Most arc-length integrals are ugly; pick problems where 1 + (f')² turns into a perfect square, or expect to use Simpson's rule numerically."
            />
            <MathFormula
              accentColor={ACCENT}
              name="Average value"
              latex="\bar f = \frac{1}{b-a}\int_a^b f(x)\,dx"
              variables={[
                {
                  symbol: "[a, b]",
                  meaning: "the interval over which we're averaging",
                },
              ]}
              whenToUse="Continuous version of 'average = sum ÷ count'. The integral plays the role of the sum; the interval length b − a plays the role of count. The MVT for integrals guarantees there's at least one c in [a, b] where f(c) actually equals the average — geometrically, a rectangle of width (b − a) and height f̄ has the same area as the region under f."
            />
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Sections
          </h3>

          <ChapterSection
            id="s6-1"
            number="6.1"
            title="Areas Between Curves"
            accentColor={ACCENT}
            blurb="Vertical strips dx — top curve minus bottom curve, integrated over their intersection range."
          >
            <Why>
              <strong>The mental picture, before any symbols.</strong> Two
              curves cross somewhere on the page, then cross again later, and
              the gap between them encloses a kind of curved-sided "lens" or
              "eye" or "leaf" — a finite region trapped between the two
              graphs. Maybe it's the gap between a gently rising
              <InlineMath math="y = \sqrt{x}" /> and a steeply rising
              <InlineMath math="y = x^2" /> on
              <InlineMath math="[0, 1]" />. Maybe it's the football-shaped
              region between a sagging parabola and a straight line that cuts
              across its mouth. Whatever the specific shape, the question
              we're going to answer is exactly the kind of question grade-school
              geometry never let you answer: how much <em>area</em> is inside
              that curvy region?
            </Why>

            <Why>
              Why is this hard? Because the region doesn't have flat sides.
              There's no length-times-width formula waiting. The boundary
              curves bend and swoop, and the only tool we have so far for "area
              under a single curve" — namely the definite integral — was built
              for regions whose bottom edge is the x-axis. So we need to
              generalize. The generalization turns out to be embarrassingly
              easy, but the embarrassingly-easy version only feels easy once
              you've seen the picture in your head, so we're going to belabor
              the picture before writing a single integral sign.
            </Why>

            <Why>
              <strong>Connect this back to the chapter arc.</strong> Remember
              the unifying recipe from the intro: slice, write down the size
              of one slice, integrate. Section 6.1 is the cleanest possible
              warm-up for that recipe. There's no spinning, no Pythagoras, no
              dividing — just "what's the shape of one slice, and what's its
              area?" If you can do this section, you can do the whole chapter,
              because every subsequent section is the same slice-and-integrate
              maneuver in a slightly different costume.
            </Why>

            <Why>
              <strong>Build the slice — slowly.</strong> Pick a typical
              x-value somewhere strictly between the two crossing points of the
              curves. (We'll figure out where those crossings are in a moment;
              for now just stand somewhere inside the region.) Now imagine a
              thin vertical ribbon of width <InlineMath math="dx" /> rising
              straight up from that x. How tall is the ribbon? It starts on the
              lower of the two curves and ends on the upper one — its top edge
              sits on whatever curve happens to be higher at that x, and its
              bottom edge sits on whichever is lower. So the ribbon's height is
              <em>(top curve's y-value at x) minus (bottom curve's y-value at
              x)</em>. Call the upper curve <InlineMath math="f(x)" /> and the
              lower curve <InlineMath math="g(x)" />.
            </Why>
            <Eq>height = f(x) - g(x),   width = dx,   area dA = [f(x) - g(x)] dx</Eq>
            <Why>
              The ribbon is, to leading order, a rectangle — yes, its top edge
              is curved and so is its bottom edge, but as
              <InlineMath math="dx \to 0" /> those tiny curvatures vanish and
              the ribbon becomes indistinguishable from a true rectangle.
              That's the whole point of an infinitesimal: it lets you treat
              curvy things as locally straight. The ribbon's area is
              height-times-width, which is
              <InlineMath math="[f(x) - g(x)]\,dx" />.
            </Why>

            <Why>
              Summing the ribbon areas across the entire region — the
              calculus word for "summing infinitely many infinitesimal things"
              — turns the sum into an integral over the x-range where the
              curves bracket each other:
            </Why>
            <BlockMath math="A = \int_a^b \bigl[\,f(x) - g(x)\,\bigr]\,dx" />
            <Why>
              That's it. The whole section is that one formula. The remaining
              ninety percent of the work in any 6.1 problem is figuring out (a)
              what <InlineMath math="a" /> and <InlineMath math="b" /> are
              (the intersection points), and (b) which of the two curves is
              <InlineMath math="f" /> (the top one) and which is
              <InlineMath math="g" /> (the bottom one). Most exam errors in
              this section are mistakes in (a) or (b), not mistakes in
              integrating.
            </Why>

            <Why>
              <strong>Concrete walk-through #1 — clean, no surprises.</strong>
              Find the area trapped between <InlineMath math="y = \sqrt{x}" />
              (curving up gently) and <InlineMath math="y = x^2" /> (curving
              up sharply). Step 1 — find where they meet, since outside the
              crossings there's no "trapped" region:
            </Why>
            <Eq>sqrt(x) = x^2  ⇒  x = x^4  ⇒  x(x^3 − 1) = 0  ⇒  x = 0 or x = 1</Eq>
            <Why>
              So the lens lives on <InlineMath math="[0, 1]" />. Step 2 — pick
              which curve is on top there. Try a midpoint, say
              <InlineMath math="x = 1/4" />:
            </Why>
            <Eq>sqrt(1/4) = 0.5,    (1/4)^2 = 0.0625    →  sqrt(x) is on top</Eq>
            <Why>
              Step 3 — integrate (top − bottom). The square-root term
              integrates by the power rule as <InlineMath math="x^{1/2}" />:
            </Why>
            <BlockMath math="A = \int_0^1 \bigl(\sqrt{x} - x^2\bigr)\,dx = \Bigl[\tfrac{2}{3} x^{3/2} - \tfrac{x^3}{3}\Bigr]_0^1 = \tfrac{2}{3} - \tfrac{1}{3} = \tfrac{1}{3}" />
            <Why>
              Sanity check: the lens sits inside the unit square (area 1), and
              by eye it covers maybe a third of that square.
              <InlineMath math="1/3" /> passes the eyeball test. Notice the
              flavor of the sanity check: you build a simple bounding region
              (here, the unit square), compute its area in your head (here,
              1), and verify your answer is less than that bound and
              roughly the right fraction by eye. Do this on every single
              problem.
            </Why>

            <Why>
              <strong>Concrete walk-through #2 — curves that cross in the
              interior, requiring a split.</strong> Now consider
              <InlineMath math="f(x) = x" /> and <InlineMath math="g(x) = x^3" />
              on the interval <InlineMath math="[-1, 1]" />. These two cross
              not just at the endpoints but at <InlineMath math="x = -1, 0, 1" />
              — three intersection points, which means the region splits into
              two lobes (one on the left of the origin, one on the right) and
              the top curve switches between them. You absolutely cannot
              integrate <InlineMath math="(x - x^3)" /> from <InlineMath math="-1" />
              to <InlineMath math="1" /> and call it a day, because the sign of
              <InlineMath math="x - x^3" /> flips at <InlineMath math="x = 0" />
              — the positive area on the right would cancel some of the
              positive-but-counted-as-negative area on the left.
            </Why>
            <Why>
              First test which curve is on top in each lobe. On the right lobe
              <InlineMath math="(0, 1)" />, pick <InlineMath math="x = 1/2" />:
              <InlineMath math="x = 0.5" /> and
              <InlineMath math="x^3 = 0.125" />, so the line is on top. On the
              left lobe <InlineMath math="(-1, 0)" />, pick
              <InlineMath math="x = -1/2" />: <InlineMath math="x = -0.5" /> and
              <InlineMath math="x^3 = -0.125" />, so this time the cubic is
              actually higher (less negative). The top and bottom swap as you
              cross the origin. Split the integral at the crossing:
            </Why>
            <BlockMath math="A = \int_{-1}^{0} (x^3 - x)\,dx + \int_{0}^{1} (x - x^3)\,dx" />
            <Why>
              By the symmetry of <InlineMath math="x" /> and
              <InlineMath math="x^3" /> about the origin, both pieces evaluate
              to the same thing. Let's do the right one:
            </Why>
            <BlockMath math="\int_0^1 (x - x^3)\,dx = \tfrac{x^2}{2} - \tfrac{x^4}{4}\Big|_0^1 = \tfrac{1}{2} - \tfrac{1}{4} = \tfrac{1}{4}" />
            <Why>
              So the total enclosed area is
              <InlineMath math="2 \cdot \tfrac{1}{4} = \tfrac{1}{2}" />.
              Notice what would have gone wrong if we'd skipped the split:
              <InlineMath math="\int_{-1}^{1}(x - x^3)\,dx = 0" /> because the
              integrand is odd and the interval is symmetric. The integral is
              telling the truth — the signed areas cancel — but it's telling
              the wrong truth for our question. Geometric areas don't cancel;
              negative-signed integrals are an artifact of the orientation, not
              of the shape. The fix is always to identify each lobe and put a
              positive integrand over each.
            </Why>

            <Why>
              <strong>When horizontal strips are easier.</strong> If both
              curves are written more naturally as
              <InlineMath math="x = g(y)" /> (a sideways parabola, for example,
              or a region bounded on the left and right by curves whose
              y-values you can read off cleanly), use horizontal strips of
              width <InlineMath math="dy" /> instead. Same recipe with the
              roles of x and y swapped: each strip is a horizontal ribbon
              running from a "left curve" to a "right curve", and its area is
              <InlineMath math="(x_{\text{right}} - x_{\text{left}})\,dy" />.
              Integrate over the y-range where the strips exist:
            </Why>
            <BlockMath math="A = \int_c^d \bigl[\,x_{\text{right}}(y) - x_{\text{left}}(y)\,\bigr]\,dy" />
            <Why>
              The choice between vertical strips
              (<InlineMath math="dx" />) and horizontal strips
              (<InlineMath math="dy" />) is purely about which one keeps the
              algebra clean. A region bounded by
              <InlineMath math="y = x^2" /> on the left and
              <InlineMath math="y = \sqrt{x}" /> on the right is easy in
              <InlineMath math="dy" /> (because both curves invert cleanly to
              <InlineMath math="x = \pm\sqrt{y}" /> and
              <InlineMath math="x = y^2" />). A region whose top and bottom
              boundaries each come in two separate pieces — like a parabola
              for the top half and a line for the bottom half — is much easier
              in <InlineMath math="dx" />. Try one orientation; if you find
              yourself splitting into many pieces, try the other.
            </Why>

            <Why>
              <strong>How this section connects forward.</strong> Section 6.2
              uses everything you just learned about identifying "top minus
              bottom" — except now, instead of asking for the area of the
              ribbon, we'll ask for the area of the disk you get when you
              spin that ribbon around an axis. The ribbon becomes the
              <em>generating segment</em> for a 3-D solid. So 6.1 isn't just a
              standalone topic; it's the muscle-memory drill for picking out
              the right pair of curves and identifying which one is on top.
              Get that muscle memory in place here and 6.2 will feel like a
              short hop. Skip the practice here and you'll be re-learning "top
              minus bottom" while also trying to learn "disk versus washer,"
              which is twice the cognitive load.
            </Why>

            <Why>
              <strong>Common scenarios you'll see on exams.</strong>{" "}
              <em>Type 1 — two curves and a stated interval:</em> "Find the
              area between <InlineMath math="y = e^x" /> and
              <InlineMath math="y = e^{-x}" /> on
              <InlineMath math="[0, 1]" />." Straightforward integrate-top-minus-bottom.
              <em>Type 2 — two curves and no interval:</em> "Find the area of
              the region enclosed by <InlineMath math="y = x^2" /> and
              <InlineMath math="y = 2x" />." You have to compute the
              intersections yourself by setting the two curves equal. They
              become your limits of integration.
              <em>Type 3 — three or more curves bounding the region:</em>
              "Find the area enclosed by
              <InlineMath math="y = x" />,
              <InlineMath math="y = 2x" />, and
              <InlineMath math="x = 4" />." Now there are usually two separate
              pieces of the boundary on top or bottom, so you have to split.
              <em>Type 4 — curves cross in the interior, integrand changes
              sign:</em> the worked example #2 above. Always sketch first to
              spot this.
            </Why>

            <Why>
              <strong>Pitfalls, in order of how often they bite.</strong>
            </Why>
            <Why>
              <strong>Pitfall 1: Top-minus-bottom flip.</strong> The single most
              common error in this section is reversing the order and getting
              a negative answer, or worse, getting a numerically positive
              answer for the wrong reason because you happened to be on an
              interval where the sign worked out by accident. The fix is the
              same every time: sketch the two curves before integrating, find
              all intersection points, then in each subinterval test a single
              point to see which curve is higher. Label that curve
              "<InlineMath math="f" />". Integrate
              <InlineMath math="f - g" />.
            </Why>
            <Why>
              <strong>Pitfall 2: Forgetting to split at interior crossings.</strong>
              If the two curves cross strictly inside the interval, the
              integrand <InlineMath math="f - g" /> changes sign there. The
              raw integral <InlineMath math="\int (f-g)\,dx" /> will subtract
              the lobe on one side from the lobe on the other, giving you the
              <em>signed</em> area instead of the <em>geometric</em> area. The
              fix: split the integral at each crossing and flip "top minus
              bottom" appropriately in each piece. Equivalently, integrate
              <InlineMath math="|f - g|" /> piecewise.
            </Why>
            <Why>
              <strong>Pitfall 3: Missing an intersection because you
              didn't sketch.</strong> Two curves can cross at non-obvious
              points (think of where
              <InlineMath math="\sin x" /> and a straight line meet — solving
              that analytically is hard). If you don't sketch and notice the
              extra crossing, you'll set wrong limits and get a wrong area.
              Always at least roughly sketch.
            </Why>
            <Why>
              <strong>Pitfall 4: Picking the wrong orientation.</strong> Some
              regions are nearly impossible to integrate in
              <InlineMath math="dx" /> but trivial in
              <InlineMath math="dy" /> (or vice versa). If you find yourself
              wanting to split into four or five pieces, stop and try the
              other orientation — usually the answer collapses to a single
              integral.
            </Why>
          </ChapterSection>

          <ChapterSection
            id="s6-2"
            number="6.2"
            title="Volumes (Disks & Washers)"
            accentColor={ACCENT}
            blurb="Spin a region about an axis; slice perpendicular to that axis to get disks (or washers if there's a hole)."
          >
            <Why>
              <strong>Start with the physical image.</strong> Picture a potter
              at a wheel. They've cut a flat 2-D profile out of clay — say,
              the area under the curve <InlineMath math="y = \sqrt{x}" /> on
              <InlineMath math="[0, 4]" /> — and they press that profile
              against the spinning wheel. As the wheel turns, the flat profile
              sweeps through 360 degrees and traces out a 3-D solid. That's
              what we mean by a "solid of revolution": you took a 2-D region,
              spun it around an axis, and got a 3-D thing. The bullet-nosed
              paraboloid you'd see at the potter's wheel is exactly the
              volume we're going to compute first.
            </Why>

            <Why>
              <strong>Why we care, conceptually.</strong> A huge number of
              real-world shapes are solids of revolution: wine glasses, vases,
              torpedoes, donuts, bowling pins, hose-fittings, anything made on
              a lathe or formed on a wheel. Anything spun. And it turns out
              you can compute any such volume by reducing it to a stack of
              simple geometric shapes — coins, washers, or cylindrical shells
              — and integrating. This is one of the cleanest demonstrations
              in all of calculus that integration is just very-careful adding,
              applied to infinitesimally small pieces of a tractable shape.
            </Why>

            <Why>
              <strong>Prerequisite refresher: the area of a circle.</strong>
              Before we slice anything, lock this fact firmly in place: the
              area enclosed by a circle of radius <InlineMath math="r" /> is
              <InlineMath math="A = \pi r^2" />. Not <InlineMath math="2\pi r" />
              (that's the <em>circumference</em>, the perimeter — a 1-D length
              — and it'll matter in 6.3 but not here). Not
              <InlineMath math="\pi r" />, which has the wrong units for an
              area. The area of a circular disk is
              <InlineMath math="\pi r^2" /> — square the radius, multiply by
              pi. Carve that into your forearm if you have to, because every
              single formula in 6.2 starts with that fact.
            </Why>

            <Why>
              <strong>Prerequisite refresher: how a solid of revolution
              forms.</strong> Take a thin vertical strip from the 2-D region —
              the same kind of vertical ribbon you used in 6.1. Now rotate
              that strip 360 degrees about the x-axis. The bottom of the
              strip sits on the x-axis and stays put (the axis is the spin
              line, so points on it don't move). The top of the strip is at
              height <InlineMath math="f(x)" /> above the axis. As you spin,
              the top point traces out a full circle of radius
              <InlineMath math="f(x)" />, and the strip itself sweeps out a
              flat disk of that radius. So <em>one thin vertical strip,
              rotated about the x-axis, becomes one flat coin-shaped disk
              perpendicular to the x-axis</em>. Now imagine doing that to every
              vertical strip in the entire region. You get a whole stack of
              coins, one at each x, each with its own radius equal to
              <InlineMath math="f(x)" />. The solid is the stack.
            </Why>

            <Why>
              <strong>Build the slice — disk method.</strong> Now slice that
              solid like a loaf of bread, with each cut <em>perpendicular to
              the axis of rotation</em>. Each slice is one of the coins we
              just described: a circular disk of radius
              <InlineMath math="R(x) = f(x)" /> and tiny thickness
              <InlineMath math="dx" />. Why a circle? Because we made the
              solid by spinning — every cross-section perpendicular to the
              spin axis is rotationally symmetric, and a region that's
              rotationally symmetric around a point is a disk. The coin's face
              area is <InlineMath math="\pi R^2" /> (there's that prerequisite
              again), and its volume is face area times thickness:
            </Why>
            <Eq>dV = (area of disk) * (thickness) = pi * R(x)^2 * dx</Eq>
            <Why>
              Stack the coins by integrating — the integral is doing the
              "add up all the coin volumes" step:
            </Why>
            <BlockMath math="V_{\text{disk}} = \pi \int_a^b [R(x)]^2\,dx" />
            <Why>
              That's the disk method in one breath. The whole derivation: spin
              the region, slice perpendicular to the spin axis, each slice is
              a disk of area <InlineMath math="\pi R^2" />, integrate. Once
              you've seen it once, you should be able to re-derive it on
              demand without looking it up.
            </Why>

            <Why>
              <strong>Now add the wrinkle: what if there's a hole?</strong>
              Suppose the 2-D region you're spinning doesn't actually touch
              the axis — there's a gap between the region and the spin line.
              For instance, the region between
              <InlineMath math="y = 1 + x^2" /> and the x-axis on
              <InlineMath math="[0, 2]" /> sits entirely above the x-axis, but
              if you instead consider the region between
              <InlineMath math="y = 1 + x^2" /> (top) and
              <InlineMath math="y = 1" /> (bottom, a horizontal line) on the
              same x-interval, you've got a region whose bottom edge is at
              <InlineMath math="y = 1" />, not at <InlineMath math="y = 0" />.
              Spin that around the x-axis and the inside of the resulting
              solid has a cylindrical tunnel of radius 1 cut out of it. The
              slice at each x is no longer a solid coin — it's a coin with a
              circular hole punched out of the middle. The mathematical name
              for that shape is a <em>washer</em> (or annulus).
            </Why>

            <Why>
              The washer's face area is the outer disk minus the inner disk:
              <InlineMath math="\pi R^2 - \pi r^2 = \pi(R^2 - r^2)" />, where
              <InlineMath math="R" /> reaches to the far edge of the region
              (the curve farther from the axis) and <InlineMath math="r" />
              reaches to the near edge (the curve closer to the axis). So:
            </Why>
            <BlockMath math="V_{\text{washer}} = \pi \int_a^b \bigl([R(x)]^2 - [r(x)]^2\bigr)\,dx" />

            <Why>
              <strong>The cardinal sin: it is R² − r², not (R − r)².</strong>
              These are completely different numbers. Try
              <InlineMath math="R = 3, r = 1" /> for yourself:
              <InlineMath math="R^2 - r^2 = 9 - 1 = 8" /> but
              <InlineMath math="(R - r)^2 = 4" />. Half the answer, and
              wrong. The reason the washer formula has
              <InlineMath math="R^2 - r^2" /> is that you're subtracting the
              <em>area</em> of the inner disk (a quantity built out of
              <InlineMath math="r^2" />) from the <em>area</em> of the outer
              disk (a quantity built out of <InlineMath math="R^2" />). The
              difference of radii has no geometric meaning here. Always
              square first, subtract second.
            </Why>

            <SolidOfRevolutionViz defaultMethod="disk" accentColor={ACCENT} />

            <Why>
              <strong>Concrete walk-through #1 (pure disk, no hole):</strong>
              rotate the region under <InlineMath math="y = \sqrt{x}" /> on
              <InlineMath math="[0, 4]" /> about the x-axis. Step 1 — at a
              typical x, the curve sits at height
              <InlineMath math="\sqrt{x}" />. That height becomes the radius
              of the disk we get when we spin the strip around the x-axis.
              The region touches the axis at the bottom (the bottom of the
              region is the x-axis itself), so there's no hole — pure disk.
            </Why>
            <Eq>R(x) = sqrt(x),    thickness = dx</Eq>
            <Why>
              Step 2 — square the radius and slap on a π. (This is the spot
              students most often blow: you need <InlineMath math="\pi R^2" />,
              not <InlineMath math="\pi R" />, because a disk's area is
              <InlineMath math="\pi r^2" />, not its circumference. The
              <InlineMath math="2\pi r" /> circumference shows up in shells,
              not disks.)
            </Why>
            <BlockMath math="V = \pi \int_0^4 (\sqrt{x})^2\,dx = \pi \int_0^4 x\,dx = \pi \cdot \tfrac{x^2}{2}\Big|_0^4 = 8\pi" />
            <Why>
              Sanity check: the smallest cylinder that contains the solid has
              height 4 (the x-range) and radius <InlineMath math="\sqrt{4} = 2" />
              (the maximum value of the curve), so its volume is
              <InlineMath math="\pi r^2 h = \pi \cdot 4 \cdot 4 = 16\pi" />.
              Our paraboloid should be less than that — and indeed
              <InlineMath math="8\pi" /> is exactly half. Geometry instinct:
              yes, a bullet-shape that tapers to a point at the origin and
              widens out to a flat disk at <InlineMath math="x = 4" /> should
              fill roughly half its bounding cylinder. The exact fraction
              (one half) is a coincidence of the square-root profile; the
              order of magnitude is the part that matters for sanity-checking.
            </Why>

            <Why>
              <strong>Concrete walk-through #2 (washer, with a hole):</strong>
              rotate the region bounded above by
              <InlineMath math="y = x + 2" /> and below by
              <InlineMath math="y = x^2" /> about the x-axis. First find the
              intersections by setting them equal:
              <InlineMath math="x + 2 = x^2 \Rightarrow x^2 - x - 2 = 0 \Rightarrow (x-2)(x+1) = 0" />,
              so they meet at <InlineMath math="x = -1" /> and
              <InlineMath math="x = 2" />. The line is above the parabola on
              <InlineMath math="[-1, 2]" /> (test <InlineMath math="x = 0" />:
              line gives 2, parabola gives 0). Both curves sit strictly above
              the x-axis in this interval, except at the single point
              <InlineMath math="x = 0" /> where the parabola touches. The
              region between them, when rotated about the x-axis, gives a
              solid where:
            </Why>
            <Eq>outer radius R(x) = x + 2     (line — farther from axis)</Eq>
            <Eq>inner radius r(x) = x^2       (parabola — closer to axis)</Eq>
            <Why>
              Each slice is a washer of area
              <InlineMath math="\pi[(x+2)^2 - (x^2)^2] = \pi[(x+2)^2 - x^4]" />.
              Integrate over the interval where the slices exist:
            </Why>
            <BlockMath math="V = \pi \int_{-1}^{2} \bigl[(x+2)^2 - x^4\bigr]\,dx = \pi \int_{-1}^{2}(x^2 + 4x + 4 - x^4)\,dx" />
            <BlockMath math="= \pi \Bigl[\tfrac{x^3}{3} + 2x^2 + 4x - \tfrac{x^5}{5}\Bigr]_{-1}^{2}" />
            <Why>
              Plug in <InlineMath math="x = 2" />:
              <InlineMath math="\tfrac{8}{3} + 8 + 8 - \tfrac{32}{5}" />.
              Plug in <InlineMath math="x = -1" />:
              <InlineMath math="-\tfrac{1}{3} + 2 - 4 + \tfrac{1}{5}" />.
              Subtracting and simplifying carefully gives
              <InlineMath math="V = \tfrac{72\pi}{5}" />. Sanity check: that's
              about <InlineMath math="14.4\pi \approx 45.2" />. The bounding
              cylinder of the line over <InlineMath math="[-1, 2]" /> has
              radius around 4 (the line's max value is 4) and length 3, giving
              <InlineMath math="48\pi" />. Our answer is reasonably under
              that, accounting for the parabola's hole — passes the eyeball
              test.
            </Why>

            <Why>
              <strong>What rotating about a non-x-axis line looks like.</strong>
              The most-tested exam variant of 6.2 is rotating not about the
              x-axis but about a line like <InlineMath math="y = 4" /> or
              <InlineMath math="x = -1" />. The disk/washer recipe still
              works, but the radius is no longer just the curve's value — it
              is the <em>distance from the curve to the rotation axis</em>.
              For rotation about <InlineMath math="y = 4" /> of a region whose
              top is at <InlineMath math="y = x^2" />, the radius is
              <InlineMath math="4 - x^2" /> (axis-y minus curve-y, taking
              the positive distance). For rotation about
              <InlineMath math="y = -2" />, the radius is
              <InlineMath math="f(x) - (-2) = f(x) + 2" />. The general rule:
              radius = |axis position − curve position|. Slowly recompute the
              radius every time, don't fly through it.
            </Why>

            <Why>
              <strong>How this section connects.</strong> 6.2 is the "slice
              perpendicular to the axis" view of solids of revolution. 6.3 will
              attack the very same kind of solid by slicing parallel to the
              axis instead — and you'll see that for some problems the
              perpendicular slices are clean and for others the parallel slices
              are clean. Knowing both methods means you can always pick the
              shorter route. Beyond 6.3, the slicing idea also generalizes to
              solids that aren't solids of revolution at all (cross-sections of
              arbitrary shape, like in Stewart's "Cross-Sections" subsection),
              and even to multi-variable integrals in Calculus III, where
              you'll slice 3-D regions into infinitesimally thin sheets and
              compute their volumes via double integrals.
            </Why>

            <Why>
              <strong>Common scenarios you'll see on exams.</strong>
              <em> Type A — region touches the axis, rotated about that axis,
              disk method.</em> "Region under
              <InlineMath math="y = f(x)" /> on
              <InlineMath math="[a, b]" /> rotated about the x-axis." Pure
              disk, no hole. <em>Type B — region between two curves rotated
              about the x-axis, washer method.</em> "Region between
              <InlineMath math="y = f(x)" /> (top) and
              <InlineMath math="y = g(x)" /> (bottom) on
              <InlineMath math="[a, b]" /> rotated about the x-axis." Washer
              with outer radius <InlineMath math="f(x)" /> and inner radius
              <InlineMath math="g(x)" />. <em>Type C — rotated about a line
              other than the x-axis.</em> "Same region, rotated about
              <InlineMath math="y = 4" />." Recompute the radius as the
              distance to the new axis. <em>Type D — rotated about a
              vertical line.</em> "Region rotated about
              <InlineMath math="x = 3" />." Now you're slicing perpendicular
              to a vertical axis, so the slices are horizontal disks of
              thickness <InlineMath math="dy" />, and you'd want to express
              the radius as a function of y (or, alternatively, switch to
              shells from 6.3).
            </Why>

            <Why>
              <strong>Pitfalls — the ones that show up on every exam.</strong>
            </Why>
            <Why>
              <strong>Pitfall 1: Forgetting to square the radius.</strong>
              The disk's area is <InlineMath math="\pi R^2" />, not
              <InlineMath math="\pi R" /> or <InlineMath math="2\pi R" />.
              Half the lost points in this section trace back to writing
              <InlineMath math="\pi R" /> instead of
              <InlineMath math="\pi R^2" /> in the integrand. The
              <InlineMath math="R^2" /> comes from the area-of-a-circle
              formula and there is no way around it.
            </Why>
            <Why>
              <strong>Pitfall 2: Writing (R − r)² instead of R² − r².</strong>
              As discussed above. Test yourself on
              <InlineMath math="R = 3, r = 1" /> if you ever feel tempted —
              <InlineMath math="(R-r)^2 = 4" />,
              <InlineMath math="R^2 - r^2 = 8" />. Different by a factor of
              two for this case, and the gap can be much larger.
            </Why>
            <Why>
              <strong>Pitfall 3: Wrong radius when rotating about a non-axis
              line.</strong> If the rotation axis is
              <InlineMath math="y = 4" />, the radius isn't
              <InlineMath math="f(x)" /> — it's
              <InlineMath math="4 - f(x)" /> (or
              <InlineMath math="f(x) - 4" />, whichever is positive). Likewise
              for vertical axes. Always compute radius as the distance from
              axis to curve, never just the curve's value.
            </Why>
            <Why>
              <strong>Pitfall 4: Mixing up R and r in the washer.</strong>
              R is always the <em>farther</em> distance (outer); r is always
              the <em>nearer</em> distance (inner). If you swap them you get
              a negative number under the integral and probably a negative
              volume. Identify which curve is farther from the axis before
              writing anything.
            </Why>
            <Why>
              <strong>Pitfall 5: Disk-vs-shell decision (cross-references 6.3).</strong>
              For a region given as <InlineMath math="y = f(x)" />, disks are
              natural when rotating about a horizontal axis (the x-axis or
              <InlineMath math="y = c" />), because vertical strips become
              perpendicular slices. They're awkward when rotating about a
              vertical axis (the y-axis or <InlineMath math="x = c" />),
              because you'd have to invert the function. Shells flip that
              preference. We'll formalize the heuristic in 6.3 — for now, if
              you find yourself wanting to write <InlineMath math="x = f^{-1}(y)" />
              for a function that doesn't invert in closed form, stop and
              read 6.3 first.
            </Why>
          </ChapterSection>

          <ChapterSection
            id="s6-3"
            number="6.3"
            title="Volumes by Cylindrical Shells"
            accentColor={ACCENT}
            blurb="Slice parallel to the axis instead — each slice unrolls into a thin rectangular shell."
          >
            <Why>
              <strong>Two ways to slice the same solid.</strong> Section 6.2
              and Section 6.3 compute volumes of exactly the same kind of
              object — a solid of revolution — but they slice it in
              perpendicular directions. In 6.2 you sliced with cuts
              <em>perpendicular</em> to the rotation axis, like cutting a loaf
              of bread, and got circular disks. In 6.3 you'll slice with cuts
              <em>parallel</em> to the rotation axis, like peeling layers off
              an onion, and get hollow cylindrical shells. Same solid, same
              total volume — but a totally different infinitesimal slice
              shape, and therefore a totally different integrand. For some
              problems disks are cleaner; for others shells are. Knowing both
              means you always get to pick the easier path.
            </Why>

            <Why>
              <strong>Mental pictures for the slice shape.</strong> A
              cylindrical shell is the shape you get when you take a hollow
              cylindrical tube — like a thin section of pipe, or the
              cardboard tube inside a roll of paper towels — and let its wall
              thickness be small. Stack a bunch of these nested tubes
              concentrically and you reconstruct a solid cylinder, the way
              tree rings nest to make a tree trunk, or the way onion layers
              nest to make a whole onion. The image to lock in: <em>onion
              shells</em>. Or <em>nested soup cans</em>, where the innermost
              can is a tight little tube and each successive can is a bit
              bigger and surrounds it. That nesting is exactly what the shell
              integral is doing — adding up the volumes of infinitely many
              concentric shells from the inside out (or outside in) to fill
              the solid.
            </Why>

            <Why>
              <strong>Prerequisite refresher: how a vertical strip sweeps into
              a shell.</strong> In 6.2 we said "take a thin vertical strip
              from the 2-D region and rotate it around the x-axis; the strip
              sweeps out a flat disk." Now let's do the same thing but rotate
              the strip around the <em>y-axis</em> instead. The strip is at
              horizontal position <InlineMath math="x" />, has height
              <InlineMath math="f(x)" />, and width <InlineMath math="dx" />.
              The y-axis is vertical, parallel to the strip. As the strip
              rotates 360° around the y-axis, the top of the strip (at
              position <InlineMath math="(x, f(x))" />) traces out a horizontal
              circle of radius <InlineMath math="x" />, and the bottom of the
              strip (at <InlineMath math="(x, 0)" />) traces out a smaller
              horizontal circle on the x-axis, also of radius
              <InlineMath math="x" />. The whole strip sweeps out a thin
              cylindrical tube — vertical, radius <InlineMath math="x" />,
              height <InlineMath math="f(x)" />, wall thickness
              <InlineMath math="dx" />. That tube is the shell.
            </Why>

            <Why>
              The key cognitive shift from 6.2: in 6.2, the strip and the
              axis are <em>perpendicular</em> (vertical strip, horizontal
              axis), so the strip rotates into a disk perpendicular to the
              axis. In 6.3, the strip and the axis are <em>parallel</em>
              (vertical strip, vertical axis), so the strip rotates into a
              tube wrapping around the axis. Same vertical strip, different
              axis orientation, totally different swept shape. Always
              identify "is the strip perpendicular or parallel to the axis?"
              before choosing a method.
            </Why>

            <Why>
              <strong>Build the slice — the shell formula.</strong> The shell
              we just described has:
            </Why>
            <Eq>radius = x                  (distance from axis to strip)</Eq>
            <Eq>height = f(x)               (the strip is f(x) tall)</Eq>
            <Eq>thickness = dx              (the strip is dx wide)</Eq>
            <Why>
              Now for the slick move: <em>unroll</em> the thin tube into a
              flat rectangle, exactly the way you'd unroll the paper label off
              a soup can or unroll a paper-towel cardboard tube along its
              seam. The unrolled rectangle has:
            </Why>
            <Eq>length = 2*pi*x       (the circumference of the original tube)</Eq>
            <Eq>height = f(x)         (still the strip's height)</Eq>
            <Eq>thickness = dx        (still the wall thickness)</Eq>
            <Why>
              Volume of that little rectangular slab is length × height ×
              thickness:
            </Why>
            <Eq>dV = (circumference) * (height) * (thickness) = 2*pi*x * f(x) * dx</Eq>
            <BlockMath math="V_{\text{shell}} = 2\pi \int_a^b x\,f(x)\,dx" />
            <Why>
              The <InlineMath math="2\pi" /> isn't decoration — it's literally
              the circumference of the unrolled rectangle. Think of it that
              way and you'll never forget where it comes from. (Compare with
              disks: there the <InlineMath math="\pi" /> comes from the area
              <InlineMath math="\pi R^2" /> of a flat circular face. Shells
              get a <InlineMath math="2\pi" /> because they get circumference,
              not face area. Whenever you see <InlineMath math="2\pi" /> in a
              volume problem you know you're in shell territory.)
            </Why>

            <SolidOfRevolutionViz defaultMethod="shell" accentColor={ACCENT} />

            <Why>
              <strong>Concrete walk-through #1 — rotation about the
              y-axis.</strong> Rotate the region under
              <InlineMath math="y = x^2" /> on
              <InlineMath math="[1, 3]" /> about the y-axis. Step 1 — sketch
              a typical vertical strip somewhere inside the region. Its
              distance from the y-axis is just <InlineMath math="x" />, its
              height is <InlineMath math="x^2" />:
            </Why>
            <Eq>radius = x,    height = x^2,    thickness = dx</Eq>
            <Why>
              Step 2 — the unrolled rectangle has area
              <InlineMath math="2\pi x \cdot x^2 = 2\pi x^3" />. Multiply by
              <InlineMath math="dx" /> and integrate from 1 to 3:
            </Why>
            <BlockMath math="V = 2\pi \int_1^3 x \cdot x^2\,dx = 2\pi \int_1^3 x^3\,dx = 2\pi \cdot \tfrac{x^4}{4}\Big|_1^3 = 2\pi \cdot \tfrac{81 - 1}{4} = 40\pi" />
            <Why>
              Sanity check: the bounding annular cylinder (the smallest
              "donut-cross-section" cylinder containing the solid) has outer
              radius 3, inner radius 1, height <InlineMath math="3^2 = 9" />,
              so its volume is
              <InlineMath math="\pi(R^2 - r^2)h = \pi(9 - 1)(9) = 72\pi" />.
              Our actual solid tapers (the height drops from 9 at the outside
              to 1 at the inside), so it should be less than the bounding
              cylinder. <InlineMath math="40\pi" /> is comfortably less than
              <InlineMath math="72\pi" /> — passes the eyeball test.
            </Why>

            <Why>
              <strong>Why didn't we use disks here?</strong> Because the curve
              is given as <InlineMath math="y = x^2" /> and we're rotating
              about the y-axis. To use disks/washers, we'd need to slice
              perpendicular to the y-axis (so horizontal slices), which means
              the slice thickness is <InlineMath math="dy" /> and the disk
              radius is a function of y, not x. We'd have to invert
              <InlineMath math="y = x^2" /> to get
              <InlineMath math="x = \sqrt{y}" />, then express the inner and
              outer radii in terms of y, and integrate from
              <InlineMath math="y = 1" /> to <InlineMath math="y = 9" />.
              That's doable here but more bookkeeping. With shells, we never
              had to leave the x variable. That's the practical reason for
              shells: <em>they let you keep working in the variable the
              function was given in, even when the rotation axis is
              "perpendicular" to that variable.</em>
            </Why>

            <Why>
              <strong>Concrete walk-through #2 — rotation about a non-axis
              vertical line.</strong> The same region under
              <InlineMath math="y = x^2" /> on
              <InlineMath math="[1, 3]" />, but now rotated about the line
              <InlineMath math="x = 5" /> instead of the y-axis. The shell
              method still works, but the radius is no longer just
              <InlineMath math="x" /> — it's the <em>distance from the strip
              to the rotation axis</em>, which is <InlineMath math="5 - x" />
              (since <InlineMath math="x" /> ranges over
              <InlineMath math="[1, 3]" />, all less than 5, so
              <InlineMath math="5 - x" /> is positive). The height of the
              strip is still <InlineMath math="x^2" />, the thickness is
              still <InlineMath math="dx" />, so:
            </Why>
            <BlockMath math="V = 2\pi \int_1^3 (5 - x)\,x^2\,dx = 2\pi \int_1^3 (5x^2 - x^3)\,dx" />
            <BlockMath math="= 2\pi \Bigl[\tfrac{5x^3}{3} - \tfrac{x^4}{4}\Bigr]_1^3 = 2\pi\Bigl[\bigl(45 - \tfrac{81}{4}\bigr) - \bigl(\tfrac{5}{3} - \tfrac{1}{4}\bigr)\Bigr]" />
            <Why>
              Working out the arithmetic carefully:
              <InlineMath math="45 - 81/4 = 180/4 - 81/4 = 99/4" /> and
              <InlineMath math="5/3 - 1/4 = 20/12 - 3/12 = 17/12" />.
              Difference: <InlineMath math="99/4 - 17/12 = 297/12 - 17/12 = 280/12 = 70/3" />.
              So <InlineMath math="V = 2\pi \cdot 70/3 = 140\pi/3 \approx 146.6" />.
              The key lesson: when the axis isn't <InlineMath math="x = 0" />,
              the shell radius isn't just <InlineMath math="x" /> — it's
              <InlineMath math="|x_{\text{axis}} - x|" />, the actual
              distance. If you forget that and use <InlineMath math="x" />
              as the radius, you'll get the wrong answer for any rotation
              about a non-y-axis vertical line.
            </Why>

            <Why>
              <strong>How this section connects, looking back and
              forward.</strong> Together with 6.2, this section gives you two
              independent attacks on every solid of revolution: slice
              perpendicular to the axis (disks/washers) or slice parallel
              (shells). Pick the one that matches the function's natural
              variable. Looking forward, the same "slice and integrate" idea
              generalizes wildly in higher-dimensional calculus — when you do
              triple integrals in Calc III, you'll slice 3-D regions into
              infinitesimal sheets exactly the way we sliced 2-D regions into
              strips here, and the bookkeeping is identical. The
              <InlineMath math="2\pi x" /> in shells also foreshadows the
              <InlineMath math="2\pi" /> appearing all over polar coordinates
              and cylindrical coordinates in Calc III — that
              <InlineMath math="2\pi" /> always traces back to "this object
              is built out of a rotation, and rotations bring a
              <InlineMath math="2\pi" /> with them."
            </Why>

            <Why>
              <strong>The disk-vs-shell decision, practically.</strong> Same
              solid, two methods, same answer. The question is always which
              one makes the algebra cleaner. Two rules of thumb that almost
              always work:
            </Why>
            <Why>
              <em>Rule 1 — Match the slice direction to the function form.</em>
              If the curve is given as <InlineMath math="y = f(x)" />, vertical
              strips (slices at fixed x) are the natural unit of integration.
              Rotating about a <em>horizontal</em> axis like the x-axis?
              Those vertical strips get cut into perpendicular slices, which
              are disks/washers — use the disk method, integrate in
              <InlineMath math="dx" />. Rotating about a <em>vertical</em>
              axis like the y-axis? Those same vertical strips stay vertical
              and sweep into tubes parallel to the axis, which are shells —
              use the shell method, integrate in <InlineMath math="dx" />.
              The slogan: <em>vertical strip + horizontal axis = disk;
              vertical strip + vertical axis = shell.</em>
            </Why>
            <Why>
              <em>Rule 2 — Avoid inverting the function whenever you can.</em>
              If using disks/washers would force you to rewrite
              <InlineMath math="y = f(x)" /> as
              <InlineMath math="x = f^{-1}(y)" />, shells are almost certainly
              cleaner. Inverting <InlineMath math="y = x^2 + x" /> by hand is
              painful (quadratic formula in y); rotating that around the
              y-axis with shells keeps you working in <InlineMath math="x" />,
              where the integrand is just
              <InlineMath math="2\pi x(x^2 + x)" />.
            </Why>
            <Why>
              <em>One-line summary:</em> perpendicular to the axis =
              disk/washer, parallel to the axis = shell. Pick the orientation
              that keeps your slice aligned with however the function is
              written.
            </Why>

            <Why>
              <strong>Common scenarios — exam taxonomy.</strong>
              <em> Type A — y = f(x) rotated about the y-axis.</em> Classic
              shell setup. Strip is vertical, axis is vertical, shell radius
              is <InlineMath math="x" /> (distance from y-axis to strip),
              shell height is <InlineMath math="f(x)" />. Use
              <InlineMath math="V = 2\pi \int_a^b x f(x)\,dx" />.
              <em>Type B — region between two curves
              <InlineMath math="y = f(x)" /> and <InlineMath math="y = g(x)" />
              rotated about the y-axis.</em> Shell height is now
              <InlineMath math="f(x) - g(x)" /> (top minus bottom),
              radius is still <InlineMath math="x" />, integrand is
              <InlineMath math="2\pi x[f(x) - g(x)]" />.
              <em>Type C — same region rotated about a vertical line
              <InlineMath math="x = c" /> that isn't the y-axis.</em> Shell
              radius is <InlineMath math="|c - x|" /> (the distance from the
              strip to the rotation line). Otherwise identical.
              <em>Type D — y = f(x) rotated about the x-axis (a horizontal
              axis), but using shells anyway because washers would be ugly.</em>
              Now your strip needs to be horizontal (perpendicular to
              <InlineMath math="x" />, parallel to the axis), which means you
              re-express things in y. Shell radius is
              <InlineMath math="y" />, shell height is
              <InlineMath math="f^{-1}(y)" /> or whatever the right horizontal
              extent is, and the slice thickness is <InlineMath math="dy" />.
            </Why>

            <Why>
              <strong>Pitfalls, in priority order.</strong>
            </Why>
            <Why>
              <strong>Pitfall 1: Confusing "radius" with "x-coordinate."</strong>
              The radius in the shell formula is the <em>distance from the
              shell to the rotation axis</em>, not the x-coordinate.
              For rotation about the y-axis, those happen to be equal
              (the axis is at <InlineMath math="x = 0" />), which is why the
              formula <InlineMath math="V = 2\pi \int x f(x)\,dx" /> looks
              clean. For any other vertical axis, you must use the actual
              distance. Forgetting this is the #1 error on shell problems
              involving non-y-axis rotation lines.
            </Why>
            <Why>
              <strong>Pitfall 2: Picking the wrong method.</strong> The two
              biggest time-sinks are (a) using disks/washers when the function
              doesn't invert cleanly, and (b) using shells with a horizontal
              axis when you'd have to express everything in y. Stop and think
              for ten seconds before launching into an integral. Sketch the
              strip; identify whether it's perpendicular or parallel to the
              axis; let that decide the method.
            </Why>
            <Why>
              <strong>Pitfall 3: Confusing shell height with shell radius.</strong>
              The shell's height is how tall the original strip was —
              <InlineMath math="f(x)" />, or
              <InlineMath math="f(x) - g(x)" /> if you have a region between
              two curves. The shell's radius is how far the strip sits from
              the axis. These are independent quantities. Don't write
              <InlineMath math="2\pi x \cdot x" /> when you mean
              <InlineMath math="2\pi x \cdot f(x)" /> just because the
              variable is the same.
            </Why>
            <Why>
              <strong>Pitfall 4: Forgetting the 2π.</strong> Disks have
              <InlineMath math="\pi" /> (area of a flat circle); shells have
              <InlineMath math="2\pi" /> (circumference of an unrolled tube).
              If you mix these up, you'll be off by a factor of 2 or more.
              Use the mnemonic: <em>flat face → π; rolled-up label → 2π</em>.
            </Why>
          </ChapterSection>

          <ChapterSection
            id="s6-4"
            number="6.4"
            title="Arc Length"
            accentColor={ACCENT}
            blurb="Length of a smooth curve = integral of the line-element ds."
          >
            <Why>
              <strong>The question, in plain English.</strong> You're given a
              curve — say, the graph of <InlineMath math="y = f(x)" /> from
              <InlineMath math="x = a" /> to <InlineMath math="x = b" /> — and
              you want to know its length. Not the area under it (that's a
              different question we already know how to answer); not the
              area enclosed by it (different again); just the length of the
              curve itself, the way an ant would experience it crawling from
              one endpoint to the other. If the curve were a straight line,
              this would be a one-step Pythagorean theorem problem: length =
              <InlineMath math="\sqrt{(\Delta x)^2 + (\Delta y)^2}" /> and
              you're done. But the curve isn't straight — it bends — so a
              single triangle won't work. The whole insight of this section is
              that you can patch around this by approximating the curve with
              many tiny straight pieces, each one short enough that the
              curvature over that piece is negligible.
            </Why>

            <Why>
              <strong>This is the calculus move you've been making all
              chapter.</strong> Notice the same family resemblance to
              everything else: "chop the thing into many tiny pieces, treat
              each piece as a simple straight/flat object you know how to
              measure, add up the measurements, take the limit as the pieces
              shrink." For areas between curves we treated each strip as a
              rectangle. For volumes we treated each slice as a disk or shell.
              For arc length we'll treat each piece of the curve as a tiny
              line segment whose length we get from the Pythagorean theorem.
              The integration step is identical; only the shape of the
              infinitesimal element changes.
            </Why>

            <Why>
              <strong>Prerequisite refresher: the Pythagorean theorem.</strong>
              In a right triangle, the square of the hypotenuse equals the
              sum of the squares of the two legs:
              <InlineMath math="c^2 = a^2 + b^2" />. Geometrically, if you
              walk <InlineMath math="a" /> units east and then
              <InlineMath math="b" /> units north, your straight-line distance
              from the start is <InlineMath math="\sqrt{a^2 + b^2}" />, not
              <InlineMath math="a + b" /> (which would be your walking
              distance). The "diagonal" is always shorter than the sum of the
              two legs. We're about to use this fact <em>billions of times</em>
              in a single integral — once for each microscopic right triangle
              along the curve.
            </Why>

            <Why>
              <strong>Why ds² = dx² + dy² is more than just notation.</strong>
              Take a smooth curve and zoom in really, really far on one tiny
              section of it. As you zoom in, the curve looks less and less
              curved and more and more like a straight line — that's the
              <em>local linearity</em> property of differentiable curves,
              which is exactly what the derivative measures. Now pick two
              points on this zoomed-in section, infinitesimally close together,
              and call their horizontal separation <InlineMath math="dx" /> and
              their vertical separation <InlineMath math="dy" />. Because
              we're in the zoomed-in regime where the curve is essentially
              straight, those two points and the corner directly below the
              upper one form a true right triangle. The hypotenuse of that
              triangle is the curve segment itself, of length
              <InlineMath math="ds" />. So the Pythagorean theorem on the
              tiny triangle reads:
            </Why>
            <Eq>ds^2 = dx^2 + dy^2     (Pythagorean theorem on the tiny triangle)</Eq>
            <Why>
              This is exact in the limit, not just an approximation. It says
              that the line-element <InlineMath math="ds" /> — the length of
              an infinitesimal piece of curve — is always the hypotenuse of an
              infinitesimal right triangle whose legs are the horizontal and
              vertical changes in position.
            </Why>

            <Why>
              <strong>Build the slice — turn ds into a calculable integrand.</strong>
              We can't integrate <InlineMath math="ds" /> directly until we
              re-express it in terms of one variable. Factor out
              <InlineMath math="dx^2" /> from under the square root:
            </Why>
            <Eq>ds = sqrt(dx^2 + dy^2) = sqrt(dx^2 * (1 + (dy/dx)^2)) = sqrt(1 + (dy/dx)^2) * dx</Eq>
            <Why>
              The quantity <InlineMath math="dy/dx" /> is just the slope of
              the curve at that point — that is, <InlineMath math="f'(x)" />.
              So one tiny segment of curve has length
              <InlineMath math="\sqrt{1 + [f'(x)]^2}\,dx" />. The expression
              under the square root is "1 plus the slope squared." When the
              slope is zero (the curve is momentarily flat),
              <InlineMath math="1 + 0 = 1" /> and the segment length is just
              <InlineMath math="dx" /> — exactly what you'd expect, since a
              flat piece has horizontal length equal to its
              <InlineMath math="dx" />. When the slope is huge (the curve is
              nearly vertical), <InlineMath math="1 + (\text{huge})^2 \approx (\text{huge})^2" />
              and the segment length is roughly
              <InlineMath math="|f'(x)| \cdot dx \approx |dy|" /> — again
              what you'd expect for a near-vertical move. The formula behaves
              sensibly at both extremes.
            </Why>
            <Why>
              Summing (integrating) all the pieces from
              <InlineMath math="x = a" /> to <InlineMath math="x = b" />:
            </Why>
            <BlockMath math="L = \int_a^b \sqrt{1 + [f'(x)]^2}\,dx" />
            <Why>
              That's the entire arc-length formula. It's just Pythagoras
              applied infinitely many times and then added up — there is
              nothing else hiding inside it.
            </Why>
            <Why>
              And if the curve is more naturally written as
              <InlineMath math="x = g(y)" /> (like a sideways-opening
              parabola, or any curve that's a function of y rather than x),
              do the same trick with the roles of x and y swapped:
            </Why>
            <BlockMath math="L = \int_c^d \sqrt{1 + [g'(y)]^2}\,dy" />
            <Why>
              Pick whichever orientation makes the algebra friendlier. For a
              parabola opening to the right, like
              <InlineMath math="x = y^2" />, the y-version is much cleaner
              than trying to write <InlineMath math="y = \pm\sqrt{x}" /> and
              dealing with two branches.
            </Why>

            <Why>
              <strong>Concrete walk-through #1 — a problem engineered to
              work.</strong> Arc length of
              <InlineMath math="y = \tfrac{2}{3} x^{3/2}" /> on
              <InlineMath math="[0, 3]" />. Step 1 — compute the slope, then
              square it and add 1, hoping the result is something nice:
            </Why>
            <Eq>y' = (2/3) * (3/2) * x^(1/2) = sqrt(x)</Eq>
            <Eq>1 + (y')^2 = 1 + x</Eq>
            <Why>
              That's lucky — <InlineMath math="1 + x" /> is a simple linear
              function of x, so the square root will integrate cleanly using
              the substitution <InlineMath math="u = 1 + x" />. (Most
              real-world arc-length problems don't simplify this nicely;
              textbook problems are engineered to. When you see the function
              <InlineMath math="\tfrac{2}{3} x^{3/2}" /> appear on a homework,
              you should immediately recognize that its derivative is
              <InlineMath math="\sqrt{x}" />, which means
              <InlineMath math="1 + (y')^2 = 1 + x" /> — clean. The whole
              point of choosing this function is to set up that clean
              square-root.)
            </Why>
            <Why>
              Step 2 — plug into the formula and integrate:
            </Why>
            <BlockMath math="L = \int_0^3 \sqrt{1 + x}\,dx = \tfrac{2}{3}(1 + x)^{3/2}\Big|_0^3 = \tfrac{2}{3}(8 - 1) = \tfrac{14}{3}" />
            <Why>
              Sanity check: the straight-line distance from
              <InlineMath math="(0, 0)" /> to
              <InlineMath math="(3, 2\sqrt{3}) \approx (3, 3.46)" /> is
              <InlineMath math="\sqrt{9 + 12} \approx 4.58" /> by the
              Pythagorean theorem. The curve bows away from that straight
              line, so its length should be a bit more than the chord.
              <InlineMath math="14/3 \approx 4.67" /> is slightly longer than
              the chord — passes the eye test. Always do this check: compute
              the straight-line chord between the curve's endpoints, and
              verify your arc length is at least as large as the chord (and
              not absurdly larger).
            </Why>

            <Why>
              <strong>Concrete walk-through #2 — a more carefully engineered
              perfect-square trick.</strong> Find the arc length of
              <InlineMath math="y = \tfrac{x^4}{8} + \tfrac{1}{4x^2}" /> on
              <InlineMath math="[1, 2]" />. This function looks completely
              arbitrary until you see what happens when you differentiate
              and square:
            </Why>
            <Eq>y' = x^3 / 2 - 1 / (2x^3)</Eq>
            <Eq>(y')^2 = x^6 / 4 - 1/2 + 1 / (4x^6)</Eq>
            <Why>
              Notice the middle term is <InlineMath math="-\tfrac{1}{2}" />
              — exactly the negative of what we need. Adding 1 gives
              <InlineMath math="+\tfrac{1}{2}" /> in the middle:
            </Why>
            <Eq>1 + (y')^2 = x^6 / 4 + 1/2 + 1/(4x^6) = (x^3/2 + 1/(2x^3))^2</Eq>
            <Why>
              The +1 was exactly the magic ingredient to complete the square.
              Taking the positive square root (since arc length is positive):
            </Why>
            <BlockMath math="L = \int_1^2 \Bigl(\tfrac{x^3}{2} + \tfrac{1}{2x^3}\Bigr)\,dx = \Bigl[\tfrac{x^4}{8} - \tfrac{1}{4x^2}\Bigr]_1^2" />
            <BlockMath math="= \Bigl(\tfrac{16}{8} - \tfrac{1}{16}\Bigr) - \Bigl(\tfrac{1}{8} - \tfrac{1}{4}\Bigr) = \Bigl(2 - \tfrac{1}{16}\Bigr) - \Bigl(-\tfrac{1}{8}\Bigr) = \tfrac{31}{16} + \tfrac{2}{16} = \tfrac{33}{16}" />
            <Why>
              So <InlineMath math="L = 33/16 \approx 2.06" />. The whole
              method here — and in problem (a) of the practice section — is
              the same trick: textbook arc-length problems are designed so
              that <InlineMath math="1 + (y')^2" /> becomes a perfect square
              of a sum-of-two-reciprocal-power terms. When you see the
              function <InlineMath math="\tfrac{x^n}{\text{const}} + \tfrac{1}{\text{const} \cdot x^m}" />,
              suspect this trick. If your problem isn't engineered like this,
              the integral is almost certainly intractable in closed form and
              you'd reach for Simpson's rule (numerical integration).
            </Why>

            <Why>
              <strong>Mentioning the intractable case.</strong> The arc length
              of the parabola <InlineMath math="y = x^2" /> from
              <InlineMath math="x = 0" /> to <InlineMath math="x = 1" /> is
              <InlineMath math="\int_0^1 \sqrt{1 + 4x^2}\,dx" />. This integral
              <em>can</em> be done in closed form, but it requires either a
              trig substitution (<InlineMath math="2x = \tan\theta" />) or
              a hyperbolic substitution (<InlineMath math="2x = \sinh u" />),
              and the answer involves a logarithm:
              <InlineMath math="\tfrac{1}{4}[2\sqrt{5} + \ln(2 + \sqrt{5})]" />.
              That's already ugly. The arc length of
              <InlineMath math="y = e^x" /> on
              <InlineMath math="[0, 1]" /> doesn't have a closed-form answer
              at all — you'd just compute
              <InlineMath math="\int_0^1 \sqrt{1 + e^{2x}}\,dx" /> with
              Simpson's rule numerically. So the lesson is: textbook
              arc-length problems are carefully engineered; real-world arc
              lengths usually need numerical methods. Don't worry if your
              gut tells you "this isn't going to come out clean" — you're
              probably right, and the right move is to check your problem
              statement (or, for a real-world problem, just go numerical).
            </Why>

            <Why>
              <strong>How this section connects.</strong> Arc length is a
              warm-up for <em>surfaces of revolution</em>: if you spin an
              arc-length element <InlineMath math="ds" /> around an axis at
              distance <InlineMath math="R" /> from the curve, it sweeps out
              a thin band of surface area
              <InlineMath math="2\pi R \cdot ds" />. Stewart covers this in
              the next subsection (sometimes labeled 6.4 or 8.2 depending on
              edition); the unifying idea is "use ds the same way we used
              dx, but with a different geometric factor." More broadly, the
              <InlineMath math="ds" /> idea returns in Calc III as the
              line-element for path integrals — when you compute the work
              done by a force field along a curved path, you integrate the
              force dotted with the unit tangent times <InlineMath math="ds" />.
              The Pythagorean derivation here is your foundation for that
              entire family of integrals.
            </Why>

            <Why>
              <strong>Common scenarios — what to expect on exams.</strong>
              <em> Type 1 — engineered y = f(x) that perfect-squares.</em>
              You'll be given something like
              <InlineMath math="y = \tfrac{2}{3}x^{3/2}" /> or
              <InlineMath math="y = \tfrac{x^4}{8} + \tfrac{1}{4x^2}" />.
              Compute <InlineMath math="y'" />, square, add 1, simplify, take
              the square root, integrate. Always works.
              <em> Type 2 — given as x = g(y).</em> Same procedure with x
              and y swapped. Use this when the function is naturally
              expressed in terms of y, like a sideways parabola.
              <em> Type 3 — the prompt says "set up but do not evaluate" or
              "express as an integral."</em> These give you off-the-rack
              functions like <InlineMath math="y = \sin x" /> where the
              integrand is real but ugly; you write
              <InlineMath math="L = \int_a^b \sqrt{1 + \cos^2 x}\,dx" /> and
              call it done.
            </Why>

            <Why>
              <strong>Pitfalls.</strong>
            </Why>
            <Why>
              <strong>Pitfall 1: Most arc-length integrals are intractable.</strong>
              The square root
              <InlineMath math="\sqrt{1 + [f'(x)]^2}" /> very rarely
              simplifies. Even the humble parabola
              <InlineMath math="y = x^2" /> gives an integral that requires
              the hyperbolic-arcsin substitution or a numerical method. So
              textbook arc-length problems are <em>engineered</em>: the
              function <InlineMath math="f" /> is chosen so that
              <InlineMath math="1 + (f')^2" /> collapses into a perfect square
              (often through a clever sum of two reciprocal terms like
              <InlineMath math="x^2/2 + 1/(2x^2)" />). If you can't see how
              to factor or perfect-square the integrand, suspect either a
              setup error (recheck your <InlineMath math="f'" />) or a
              problem intended for Simpson's rule.
            </Why>
            <Why>
              <strong>Pitfall 2: Forgetting the 1.</strong> The integrand is
              <InlineMath math="\sqrt{1 + (f')^2}" />, not
              <InlineMath math="\sqrt{(f')^2}" /> (which would just be
              <InlineMath math="|f'(x)|" />). The +1 is the
              <InlineMath math="dx^2" /> part of <InlineMath math="ds^2 = dx^2 + dy^2" />
              after factoring — without it you'd only count the vertical
              contribution to length and miss the horizontal one entirely.
            </Why>
            <Why>
              <strong>Pitfall 3: Wrong choice of variable.</strong> If the
              curve is given as <InlineMath math="x = g(y)" /> and you try to
              solve for <InlineMath math="y = g^{-1}(x)" /> first, you'll
              often introduce square roots and branch issues that complicate
              things needlessly. Use the y-form directly:
              <InlineMath math="L = \int \sqrt{1 + [g'(y)]^2}\,dy" />.
            </Why>
            <Why>
              <strong>Pitfall 4: Squaring sign error.</strong>
              <InlineMath math="\sqrt{a^2} = |a|" />, not just
              <InlineMath math="a" />. For arc length you always take the
              positive root because length is positive. If your simplified
              integrand could be negative on part of the interval, you need
              the absolute value to keep things positive.
            </Why>
          </ChapterSection>

          <ChapterSection
            id="s6-5"
            number="6.5"
            title="Average Value of a Function"
            accentColor={ACCENT}
            blurb="Discrete average → continuous: divide the integral by the length of the interval."
          >
            <Why>
              <strong>Start from a question you already know how to
              answer.</strong> You know the average of a list of numbers:
              add them up, divide by the count. If your test scores are
              <InlineMath math="\{72, 85, 91, 68, 79\}" />, you compute
              <InlineMath math="(72+85+91+68+79)/5 = 395/5 = 79" /> and that's
              your average. The recipe is the same one you've been using since
              grade school: sum, then divide by count. The numerator (the
              sum) tells you the total amount of "stuff"; the denominator
              (the count) normalizes by how many items contributed. Without
              dividing, an average of five 80s and an average of fifty 80s
              would look like they were 10× different.
            </Why>

            <Why>
              <strong>Now ask the question for a continuous quantity.</strong>
              What's the "average" temperature in a room over a 24-hour day?
              The temperature is changing continuously — it isn't just five
              numbers; it's a different number at every single instant. You
              can't write a finite sum and divide. The same problem appears
              everywhere: average speed of a car whose velocity is varying,
              average height of a wave as it ripples by, average depth of a
              river along its length, average concentration of a chemical
              that's diffusing through a tank. Every one of these is a
              function <InlineMath math="f(t)" /> or <InlineMath math="f(x)" />
              taking infinitely many values over some interval, and we want a
              single representative number that captures its "typical" value.
              Naively, you'd want to add up infinitely many values and divide
              by infinity, which is mathematical nonsense — but you've
              already seen calculus rescue exactly this kind of construction
              in other places (Riemann sums replacing infinite sums of
              infinitesimals; integrals being limits of sums). Here it's the
              same trick.
            </Why>

            <Why>
              <strong>Prerequisite refresher: the arithmetic mean as a sum
              divided by a count.</strong> Write out the discrete formula
              explicitly: the average of n numbers
              <InlineMath math="\{a_1, a_2, \ldots, a_n\}" /> is
              <InlineMath math="\bar a = \tfrac{1}{n}\sum_{i=1}^n a_i" />. The
              <InlineMath math="\sum a_i" /> is the total; the
              <InlineMath math="1/n" /> is the normalization. Geometrically,
              if you stacked the n numbers as bars of equal width 1 on the
              x-axis, the total "area" of all the bars would be
              <InlineMath math="\sum a_i" />, and the "width" of the
              collection would be n. So the average is total-area divided by
              total-width — which is also the height of an equivalent
              rectangle that has the same total area as the bar collection
              but is perfectly flat. Hold that picture in mind: the average
              is the height of the flat rectangle with the same area.
            </Why>

            <Why>
              <strong>Build the formula by taking a limit.</strong> Imagine
              sampling <InlineMath math="f" /> at n equally spaced points
              across <InlineMath math="[a, b]" /> — at
              <InlineMath math="x_1, x_2, \ldots, x_n" /> spaced
              <InlineMath math="dx = (b-a)/n" /> apart — and taking the
              ordinary arithmetic average of those samples:
            </Why>
            <Eq>average ≈ (1/n) * sum of f(x_i),    spacing dx = (b-a)/n</Eq>
            <Why>
              Now do a clever algebra trick: multiply and divide by
              <InlineMath math="dx" />. Since
              <InlineMath math="dx = (b-a)/n" />, the
              <InlineMath math="1/n" /> in front becomes
              <InlineMath math="\tfrac{1}{n} = \tfrac{dx}{b-a}" />, and you
              can pull <InlineMath math="\tfrac{1}{b-a}" /> outside the sum:
            </Why>
            <Eq>average ≈ (1/(b-a)) * sum of f(x_i) * dx</Eq>
            <Why>
              The expression <InlineMath math="\sum f(x_i)\,dx" /> is now
              exactly a Riemann sum — the kind that heads toward a definite
              integral in the limit <InlineMath math="n \to \infty" />. In
              the limit, the discrete sample average becomes:
            </Why>
            <BlockMath math="\bar f = \frac{1}{b - a}\int_a^b f(x)\,dx" />
            <Why>
              Read that formula out loud: "the average value is one over the
              length of the interval, times the integral." The integral plays
              the role of the discrete sum (total amount of f); the
              <InlineMath math="(b-a)" /> plays the role of the discrete
              count (total amount of "domain"). Same shape as the arithmetic
              mean, with sums replaced by integrals and counts replaced by
              lengths — exactly the recipe the intro promised.
            </Why>

            <Why>
              <strong>The geometric interpretation — the equivalent
              rectangle.</strong> The integral <InlineMath math="\int_a^b f(x)\,dx" />
              is the signed area under <InlineMath math="f" /> over
              <InlineMath math="[a, b]" />. Dividing by
              <InlineMath math="b - a" /> turns that area into the
              <em>height of an equivalent rectangle</em> — the flat-topped
              rectangle that has the same width (<InlineMath math="b - a" />)
              and the same area as the region under the curve. That height
              is, by definition, the average value of
              <InlineMath math="f" /> on the interval. Picture it: take the
              curve, find its area under, then replace the curve with a
              perfectly flat line at some height
              <InlineMath math="\bar f" /> such that the rectangle from
              <InlineMath math="x = a" /> to <InlineMath math="x = b" /> at
              that height encloses the same area. That height is the
              average. It's the same as the arithmetic-mean picture, just
              continuous: replace the bumpy graph with a perfectly flat bar
              of equal total area.
            </Why>

            <Why>
              <strong>The Mean Value Theorem for integrals.</strong> For any
              continuous <InlineMath math="f" /> on
              <InlineMath math="[a, b]" />, there's at least one point
              <InlineMath math="c" /> in the interval where
              <InlineMath math="f(c) = \bar f" /> exactly — the curve really
              does pass through its own average value somewhere. The intuition
              is identical to the regular MVT for derivatives: the curve
              cannot stay entirely above its own average (because then it
              wouldn't be the average), and it cannot stay entirely below
              its own average (same reason). Since <InlineMath math="f" /> is
              continuous, it must cross the horizontal line
              <InlineMath math="y = \bar f" /> at least once, by the
              Intermediate Value Theorem. That crossing is the MVT point
              <InlineMath math="c" />. Geometrically: the equivalent
              rectangle and the curve meet at that <InlineMath math="c" /> —
              that's where the curve's height equals the flat rectangle's
              height.
            </Why>

            <Why>
              <strong>Concrete walk-through #1 — basic average value.</strong>
              Average value of <InlineMath math="f(x) = x^2" /> on
              <InlineMath math="[0, 2]" />. Step 1 — plug into the formula:
            </Why>
            <BlockMath math="\bar f = \frac{1}{2 - 0}\int_0^2 x^2\,dx = \tfrac{1}{2} \cdot \tfrac{x^3}{3}\Big|_0^2 = \tfrac{1}{2} \cdot \tfrac{8}{3} = \tfrac{4}{3}" />
            <Why>
              Sanity check: <InlineMath math="x^2" /> grows from 0 (at
              <InlineMath math="x = 0" />) to 4 (at <InlineMath math="x = 2" />).
              An ordinary midpoint guess would be 2, but
              <InlineMath math="x^2" /> spends more time small than big —
              the curve hugs the x-axis on the left half and only climbs
              steeply on the right. So a true average below 2 makes sense.
              <InlineMath math="4/3 \approx 1.33" /> is right in the range
              we'd expect. (A linear function — say,
              <InlineMath math="f(x) = x" /> on
              <InlineMath math="[0, 2]" /> — averages to exactly the
              midpoint of its endpoint values, here 1. The parabola's
              average is somewhat above 1 because it grows accelerating, so
              the upper half of the interval contributes more.)
            </Why>
            <Why>
              Step 2 — find the MVT point c where
              <InlineMath math="f(c) = \bar f" />:
            </Why>
            <Eq>c^2 = 4/3   ⇒   c = 2/sqrt(3) ≈ 1.155      (in [0, 2], so valid)</Eq>
            <Why>
              That c is the x-value where the parabola actually crosses its
              own average height. Geometrically: draw the rectangle of width
              2 and height 4/3 — that rectangle has the same area as the
              region under the parabola, and the parabola pokes through the
              top of the rectangle exactly at
              <InlineMath math="x \approx 1.155" />. Below that c, the
              parabola is under the rectangle (the rectangle "owes" area to
              match the curve); above that c, the parabola is above the
              rectangle (the parabola "pays back" the area). The trade
              balances exactly at the average.
            </Why>

            <Why>
              <strong>Concrete walk-through #2 — solving for c when the
              inverse isn't algebraic.</strong> Find the average value of
              <InlineMath math="f(x) = \sin x" /> on
              <InlineMath math="[0, \pi]" />, then find the MVT point c. The
              integral <InlineMath math="\int_0^\pi \sin x\,dx" /> is one of
              the classic results: <InlineMath math="-\cos x \Big|_0^\pi = -\cos\pi + \cos 0 = 1 + 1 = 2" />.
              So:
            </Why>
            <BlockMath math="\bar f = \tfrac{1}{\pi}\int_0^\pi \sin x\,dx = \tfrac{2}{\pi} \approx 0.6366" />
            <Why>
              That's the average height of a half-period sine arch. Sanity
              check: the sine ranges from 0 (at the endpoints) up to 1 (at
              the peak); a flat-line average should be somewhere in (0, 1),
              and indeed 0.6366 is. Notice that the average is well below the
              peak of 1 — that's because the sine spends most of its time
              not at the peak, just rising toward it or falling away from it.
            </Why>
            <Why>
              Now find the MVT point c. We need
              <InlineMath math="\sin c = 2/\pi" />, and we want
              <InlineMath math="c \in [0, \pi]" />. There are actually
              <em>two</em> solutions in that interval — one in the rising
              half (<InlineMath math="0 < c < \pi/2" />) and one in the
              falling half (<InlineMath math="\pi/2 < c < \pi" />). Both
              satisfy the MVT, so both are valid:
            </Why>
            <Eq>c1 = arcsin(2/pi) ≈ 0.6901</Eq>
            <Eq>c2 = pi - arcsin(2/pi) ≈ 2.4515</Eq>
            <Why>
              The MVT guarantees <em>at least one</em> c — and sine, being
              symmetric around its peak, generously gives us two for the
              price of one. The geometric meaning: the flat horizontal line
              at height <InlineMath math="\bar f = 2/\pi" /> crosses the
              sine arch at exactly those two x-values.
            </Why>

            <Why>
              <strong>How this section connects.</strong> Average value of a
              function is the bridge to probability and statistics. In a
              probability course you'll learn that if
              <InlineMath math="X" /> is a random variable with probability
              density function <InlineMath math="p(x)" /> on
              <InlineMath math="[a, b]" />, the <em>expected value</em> of
              <InlineMath math="X" /> is
              <InlineMath math="E[X] = \int_a^b x \cdot p(x)\,dx" />. That's
              the same average idea, weighted by the probability density —
              x's that are more likely contribute more to the average. If
              the density is uniform (<InlineMath math="p(x) = 1/(b-a)" />),
              the expected value reduces exactly to our average-value
              formula. So average value isn't just an abstract calculus
              construct; it's the bedrock of every "expected value"
              calculation in probability, statistics, physics (where it
              becomes "expectation value" in quantum mechanics), economics
              (expected return), and machine learning (expected loss).
            </Why>

            <Why>
              <strong>Common scenarios on exams.</strong>
              <em> Type 1 — pure average:</em> "Find the average value of
              <InlineMath math="f(x) = e^x" /> on
              <InlineMath math="[0, 2]" />." Two-step: integrate, then divide.
              <em>Type 2 — average plus MVT point:</em> "Find
              <InlineMath math="\bar f" /> and the
              <InlineMath math="c \in [a, b]" /> where
              <InlineMath math="f(c) = \bar f" />." After step 1, solve
              <InlineMath math="f(c) = \bar f" /> algebraically (or numerically
              if the inverse isn't elementary). <em>Type 3 — applied
              average:</em> "The temperature in a room is
              <InlineMath math="T(t) = 65 + 5\sin(\pi t/12)" /> over a
              24-hour period; find the average temperature." Same formula,
              with t as the variable and the interval being one day.
              <em>Type 4 — average rate of change vs average value
              distinction.</em> These are different. <em>Average value</em>
              of <InlineMath math="f" /> over <InlineMath math="[a, b]" />
              is <InlineMath math="\frac{1}{b-a}\int_a^b f" />. <em>Average
              rate of change</em> of <InlineMath math="f" /> over the same
              interval is <InlineMath math="\frac{f(b) - f(a)}{b - a}" />.
              The MVT for derivatives says <em>that</em> equals
              <InlineMath math="f'(c)" /> for some c; the MVT for integrals
              says the average value equals <InlineMath math="f(c)" /> for
              some (other) c. Don't mix them up.
            </Why>

            <Why>
              <strong>Pitfalls.</strong>
            </Why>
            <Why>
              <strong>Pitfall 1: Don't forget to divide by (b − a).</strong>
              The formula has <em>two</em> ingredients: integrate, then
              divide by <InlineMath math="b - a" />. Students who get
              nine-tenths of the way there and just hand in the integral
              lose the point. The integral alone is total area; the average
              is area divided by width. This is the single most common error
              in 6.5 — the formula has four pieces and people remember
              three.
            </Why>
            <Why>
              <strong>Pitfall 2: Confusing average value with average rate
              of change.</strong> Average value involves an integral and
              represents the "flat-line equivalent height" of a function.
              Average rate of change involves a difference quotient and
              represents the average slope of a function. Both have an
              MVT-style theorem attached, but they're answering different
              questions. Read the prompt carefully: "average value of f" is
              average-value; "average rate of change of f" or "average
              velocity" is the difference-quotient version.
            </Why>
            <Why>
              <strong>Pitfall 3: Wrong sign on (b − a).</strong> The
              denominator is positive — it's a length, and lengths are
              positive. If you accidentally write
              <InlineMath math="a - b" /> instead of
              <InlineMath math="b - a" />, you'll flip the sign of your
              answer.
            </Why>
            <Why>
              <strong>Pitfall 4: Missing the MVT point because there are
              multiple solutions.</strong> If your function isn't
              monotonic on the interval (e.g., <InlineMath math="\sin" /> on
              <InlineMath math="[0, \pi]" />), the equation
              <InlineMath math="f(c) = \bar f" /> can have more than one
              solution in the interval. Find all of them — partial credit
              for finding only one. The MVT guarantees "at least one"; it
              doesn't promise exactly one.
            </Why>
            <Why>
              <strong>Pitfall 5: MVT point not in the interval.</strong>
              When you solve <InlineMath math="f(c) = \bar f" />, double-check
              that your c actually lies in <InlineMath math="[a, b]" />. The
              MVT guarantees a c does exist there, so if your algebra gives
              you a c outside the interval, you've made an algebra mistake.
              Treat it as a check on your work.
            </Why>
          </ChapterSection>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Worked Examples
          </h3>

          <WorkedExample
            accentColor={ACCENT}
            title="Area between curves (6.1)"
            problemStatement={
              <>
                Find the area of the region bounded by <InlineMath math="y = x^2" /> and{" "}
                <InlineMath math="y = 2x" />.
              </>
            }
            steps={[
              {
                heading: "Find intersections",
                body: (
                  <>
                    <Why>
                      The "bounded region" between two curves only exists where
                      they cross. Find where they meet by setting them equal:
                    </Why>
                    <Eq>x² = 2x  ⇒  x(x − 2) = 0  ⇒  x = 0, 2</Eq>
                    <Why>
                      So the region runs from x = 0 to x = 2 along the x-axis.
                      That gives us our integration limits.
                    </Why>
                  </>
                ),
              },
              {
                heading: "Identify the top curve",
                body: (
                  <>
                    <Why>
                      We need to know which curve is above the other on the
                      interior — that determines the sign of (top − bottom).
                      Sketching is fastest, but we can also test a midpoint.
                      Plug in x = 1:
                    </Why>
                    <Eq>parabola: y = 1²  = 1     line: y = 2·1 = 2</Eq>
                    <Why>
                      The line is on top throughout (0, 2). If it weren't, we'd
                      have to split the integral wherever they cross — but here
                      they only cross at the endpoints.
                    </Why>
                  </>
                ),
              },
              {
                heading: "Integrate (top − bottom)",
                body: (
                  <>
                    <Why>
                      Each thin vertical strip has height (top − bottom) =
                      2x − x² and width dx. Sum the strip areas by integrating:
                    </Why>
                    <BlockMath math="A = \int_0^2 (2x - x^2)\,dx = \Bigl[x^2 - \tfrac{x^3}{3}\Bigr]_0^2 = 4 - \tfrac{8}{3} = \tfrac{4}{3}" />
                    <Why>
                      4/3 ≈ 1.33 m² (or whatever your units are). Sanity check:
                      the bounding rectangle is 2 wide and ~2 tall (max height
                      is at x ≈ 1, where the line is at y = 2), so area ≤ 4.
                      Our answer is 1/3 of that — feels reasonable for a
                      lens-shaped region.
                    </Why>
                  </>
                ),
                result: { label: "Area", value: "4/3 ≈ 1.333", color: "green" },
              },
            ]}
            keyInsight={
              <>
                Always sketch first to identify which curve is on top — a
                missed sign flip is the most common error in this whole chapter.
                If the curves cross in the interior, you split the integral and
                flip top/bottom across the crossing.
              </>
            }
          />

          <WorkedExample
            accentColor={ACCENT}
            title="Volume — disk method (6.2)"
            problemStatement={
              <>
                Rotate the region under <InlineMath math="y = \sqrt{x}" /> from{" "}
                <InlineMath math="x = 0" /> to <InlineMath math="x = 4" /> about the x-axis. Find the volume.
              </>
            }
            steps={[
              {
                heading: "Pick the slice",
                body: (
                  <>
                    <Why>
                      Spinning the region around the x-axis sweeps out a solid.
                      Slice it with planes PERPENDICULAR to the axis — each slice
                      is a thin disk whose radius is the curve's height at that x.
                    </Why>
                    <Eq>R(x) = f(x) = √x,    thickness = dx</Eq>
                  </>
                ),
              },
              {
                heading: "Set up V",
                body: (
                  <>
                    <Why>
                      Each disk has volume π·R²·dx. Sum (integrate) over the
                      x-range:
                    </Why>
                    <BlockMath math="V = \pi\int_0^4 [R(x)]^2\,dx = \pi\int_0^4 x\,dx = \pi\cdot\tfrac{x^2}{2}\Big|_0^4 = 8\pi" />
                    <Why>
                      8π ≈ 25.1 m³. Sanity check: the bounding cylinder
                      (height 4, radius √4 = 2) has volume π·2²·4 = 16π. Our
                      solid is the half-bottom of that cylinder by way of how
                      the curve bows in, so volume should be less than 16π.
                      8π is exactly half — passes the eyeball test.
                    </Why>
                  </>
                ),
                result: { label: "Volume", value: "8π ≈ 25.13", color: "green" },
              },
            ]}
            keyInsight={
              <>
                The squaring inside the integral comes from{" "}
                <InlineMath math="A_{\text{disk}} = \pi r^2" /> — easy to skip
                when rushing. Forgetting to square the radius is the single
                most common mistake in disk-volume problems.
              </>
            }
          />

          <WorkedExample
            accentColor={ACCENT}
            title="Volume — cylindrical shells (6.3)"
            problemStatement={
              <>
                Rotate the region under <InlineMath math="y = x^2" /> from{" "}
                <InlineMath math="x = 1" /> to <InlineMath math="x = 3" /> about the y-axis. Find the volume by shells.
              </>
            }
            steps={[
              {
                heading: "Pick the slice",
                body: (
                  <>
                    <Why>
                      Spinning around the y-axis, vertical strips of the region
                      stay vertical as they rotate — they don't get sliced into
                      disks, they get swept into thin cylindrical shells. Each
                      shell has circumference 2πx (x = distance from y-axis),
                      height f(x), thickness dx.
                    </Why>
                    <Eq>shell area (unrolled) = 2π · x · f(x),    thickness = dx</Eq>
                  </>
                ),
              },
              {
                heading: "Integrate",
                body: (
                  <>
                    <Why>
                      Volume of one thin shell = circumference × height × thickness.
                      Sum (integrate) over the x-range from 1 to 3:
                    </Why>
                    <BlockMath math="V = 2\pi\int_1^3 x \cdot x^2\,dx = 2\pi\int_1^3 x^3\,dx = 2\pi \cdot \tfrac{x^4}{4}\Big|_1^3 = 2\pi\cdot\tfrac{81 - 1}{4} = 40\pi" />
                  </>
                ),
                result: { label: "Volume", value: "40π ≈ 125.66", color: "green" },
              },
            ]}
            keyInsight={
              <>
                Disk vs shell? Disk = slice <em>perpendicular</em> to the axis
                of rotation. Shell = slice <em>parallel</em> to it. About the
                y-axis with <InlineMath math="y = f(x)" />, shells avoid having
                to invert <InlineMath math="x = f^{-1}(y)" /> — that's why
                shells are usually faster for that orientation.
              </>
            }
          />

          <WorkedExample
            accentColor={ACCENT}
            title="Arc length (6.4)"
            problemStatement={
              <>
                Find the arc length of <InlineMath math="y = \tfrac{2}{3} x^{3/2}" /> on{" "}
                <InlineMath math="[0, 3]" />.
              </>
            }
            steps={[
              {
                heading: "Compute y' and 1 + (y')²",
                body: (
                  <>
                    <Why>
                      Arc length integrand is √(1 + (y')²). Compute y' and the
                      thing under the radical first, hoping for a clean form.
                    </Why>
                    <Eq>y' = √x,    so 1 + (y')² = 1 + x</Eq>
                    <Why>
                      Lucky — 1 + x is a simple linear function of x. The
                      square root will integrate to a clean (1 + x)^(3/2)
                      shape. Most arc-length integrands don't simplify this
                      nicely; this problem is constructed to.
                    </Why>
                  </>
                ),
              },
              {
                heading: "Integrate ds",
                body: (
                  <>
                    <Why>
                      Direct power-rule integration with u = 1 + x:
                    </Why>
                    <BlockMath math="L = \int_0^3 \sqrt{1 + x}\,dx = \tfrac{2}{3}(1 + x)^{3/2}\Big|_0^3 = \tfrac{2}{3}(8 - 1) = \tfrac{14}{3}" />
                  </>
                ),
                result: { label: "Arc length", value: "14/3 ≈ 4.667", color: "green" },
              },
            ]}
            keyInsight={
              <>
                Arc length integrals usually have ugly antiderivatives — pick
                problems where <InlineMath math="1 + (y')^2" /> is a perfect
                square or at least integrable in closed form. For everything
                else, Simpson's rule numerically.
              </>
            }
          />

          <WorkedExample
            accentColor={ACCENT}
            title="Average value (6.5)"
            problemStatement={
              <>
                Find the average value of <InlineMath math="f(x) = e^x" /> on <InlineMath math="[0, 2]" />,
                and the <InlineMath math="c \in [0, 2]" /> where <InlineMath math="f(c) = \bar f" />.
              </>
            }
            steps={[
              {
                heading: "Apply the formula",
                body: (
                  <>
                    <Why>
                      Average value = total area under curve, divided by
                      interval length:
                    </Why>
                    <BlockMath math="\bar f = \tfrac{1}{2 - 0}\int_0^2 e^x\,dx = \tfrac{1}{2}(e^2 - 1) \approx 3.195" />
                    <Why>
                      Quick sanity check: e^x grows from 1 (at x = 0) to e² ≈
                      7.39 (at x = 2). The average should be somewhere in that
                      range — 3.195 is between, leaning lower because most of
                      the interval has small e^x. ✓
                    </Why>
                  </>
                ),
                result: { label: "Average value", value: "(e² − 1)/2 ≈ 3.195", color: "green" },
              },
              {
                heading: "Solve f(c) = avg",
                body: (
                  <>
                    <Why>
                      The MVT for integrals says some c ∈ [0, 2] actually
                      achieves the average value f̄. Set e^c = f̄ and solve:
                    </Why>
                    <Eq>e^c = (e² − 1)/2  ⇒  c = ln((e² − 1)/2) ≈ ln(3.195) ≈ 1.162</Eq>
                  </>
                ),
                result: { label: "MVT point c", value: "≈ 1.162", color: "green" },
              },
            ]}
            keyInsight={
              <>
                Geometrically: the rectangle of width 2 and height{" "}
                <InlineMath math="\bar f" /> has the same area as the region
                under <InlineMath math="f" />. The MVT for integrals
                guarantees some <InlineMath math="c" /> achieves the average
                — at least one for any continuous{" "}
                <InlineMath math="f" />, just like the regular MVT for
                derivatives.
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
            title="Areas between curves"
            statement={<>Sketch each region first; then integrate.</>}
            parts={[
              {
                label: "(a)",
                question: <>Region between <InlineMath math="y = x" /> and <InlineMath math="y = x^3" /> on <InlineMath math="[0, 1]" />.</>,
                solutionSteps: (
                  <>
                    <Why>
                      On (0, 1), x is bigger than x³ (x³ shrinks fast for x &lt; 1).
                      So y = x is on top. Integrate (top − bottom):
                    </Why>
                    <BlockMath math="A = \int_0^1 (x - x^3)\,dx = \tfrac{x^2}{2} - \tfrac{x^4}{4}\Big|_0^1 = \tfrac{1}{2} - \tfrac{1}{4} = \tfrac{1}{4}" />
                  </>
                ),
                answer: { value: "1/4" },
              },
              {
                label: "(b)",
                question: <>Region enclosed by <InlineMath math="y = \sqrt{x}" /> and <InlineMath math="y = x^2" />.</>,
                solutionSteps: (
                  <>
                    <Why>
                      Find intersections, then the top curve. Both pass through
                      (0, 0) and (1, 1). On (0, 1), √x &gt; x² (test x = 1/4:
                      √x = 0.5, x² = 0.0625).
                    </Why>
                    <BlockMath math="A = \int_0^1 (\sqrt{x} - x^2)\,dx = \tfrac{2}{3}x^{3/2} - \tfrac{x^3}{3}\Big|_0^1 = \tfrac{2}{3} - \tfrac{1}{3} = \tfrac{1}{3}" />
                  </>
                ),
                answer: { value: "1/3" },
              },
            ]}
          />

          <PracticeProblem
            accentColor={ACCENT}
            title="Volumes — disks vs shells"
            statement={<>For each region, pick the cleaner method and integrate.</>}
            parts={[
              {
                label: "(a)",
                question: (
                  <>
                    Region under <InlineMath math="y = 1/x" /> on <InlineMath math="[1, 2]" />, rotated about the x-axis. (Disks.)
                  </>
                ),
                solutionSteps: (
                  <>
                    <Why>
                      Slice perpendicular to x-axis → disks of radius 1/x.
                      Volume = π ∫ (radius)² dx:
                    </Why>
                    <BlockMath math="V = \pi\int_1^2 (1/x)^2\,dx = \pi\Bigl[-\tfrac{1}{x}\Bigr]_1^2 = \pi(-\tfrac{1}{2} + 1) = \tfrac{\pi}{2}" />
                  </>
                ),
                answer: { value: "π/2 ≈ 1.571" },
              },
              {
                label: "(b)",
                question: (
                  <>
                    Region between <InlineMath math="y = x" /> and <InlineMath math="y = x^2" /> on <InlineMath math="[0, 1]" />,
                    rotated about the y-axis. (Shells.)
                  </>
                ),
                solutionSteps: (
                  <>
                    <Why>
                      Rotating around y-axis with y = f(x) — shells avoid having
                      to flip into y. Shell at distance x has circumference 2πx,
                      height (x − x²) (top minus bottom of the region):
                    </Why>
                    <BlockMath math="V = 2\pi\int_0^1 x(x - x^2)\,dx = 2\pi\int_0^1 (x^2 - x^3)\,dx = 2\pi\bigl(\tfrac{1}{3} - \tfrac{1}{4}\bigr) = \tfrac{\pi}{6}" />
                  </>
                ),
                answer: { value: "π/6 ≈ 0.524" },
              },
              {
                label: "(c)",
                question: (
                  <>
                    Region between <InlineMath math="y = x^2" /> and <InlineMath math="y = 4" />, rotated about the line{" "}
                    <InlineMath math="y = 4" />. (Disks/washers.)
                  </>
                ),
                solutionSteps: (
                  <>
                    <Why>
                      The axis isn't y = 0 — it's y = 4. The disk's radius is the
                      DISTANCE from the curve to the axis, not the curve's
                      height. Region runs from x = −2 to x = 2 (where y = x²
                      meets y = 4):
                    </Why>
                    <Eq>R(x) = 4 − x²</Eq>
                    <BlockMath math="V = \pi\int_{-2}^{2} (4 - x^2)^2\,dx = \pi\int_{-2}^{2}(16 - 8x^2 + x^4)\,dx" />
                    <Why>
                      Integrand is even, so use symmetry:
                    </Why>
                    <Eq>= 2π · ∫₀² (16 − 8x² + x⁴) dx = 2π(32 − 64/3 + 32/5) = 512π/15</Eq>
                  </>
                ),
                answer: { value: "512π / 15 ≈ 107.23" },
              },
            ]}
          />

          <PracticeProblem
            accentColor={ACCENT}
            title="Arc length"
            statement={<>Choose the form (y = f(x) or x = g(y)) that makes 1 + (·)² nicer.</>}
            parts={[
              {
                label: "(a)",
                question: (
                  <>
                    Arc length of <InlineMath math="y = \tfrac{x^3}{6} + \tfrac{1}{2x}" /> from{" "}
                    <InlineMath math="x = 1" /> to <InlineMath math="x = 2" />.
                  </>
                ),
                solutionSteps: (
                  <>
                    <Why>
                      Compute y' and 1 + (y')². The form of y is engineered so
                      that 1 + (y')² is a perfect square — that's the trick
                      that makes this integrable in closed form:
                    </Why>
                    <Eq>y' = x²/2 − 1/(2x²)</Eq>
                    <Eq>(y')² = x⁴/4 − 1/2 + 1/(4x⁴)</Eq>
                    <Eq>1 + (y')² = x⁴/4 + 1/2 + 1/(4x⁴) = (x²/2 + 1/(2x²))²</Eq>
                    <Why>
                      The +1/2 in the middle row is exactly what's needed to
                      complete the square. Take the (positive) square root:
                    </Why>
                    <BlockMath math="L = \int_1^2 \Bigl(\tfrac{x^2}{2} + \tfrac{1}{2x^2}\Bigr) dx = \tfrac{x^3}{6} - \tfrac{1}{2x}\Big|_1^2 = \bigl(\tfrac{8}{6} - \tfrac{1}{4}\bigr) - \bigl(\tfrac{1}{6} - \tfrac{1}{2}\bigr) = \tfrac{17}{12}" />
                  </>
                ),
                answer: { value: "17/12 ≈ 1.417" },
              },
            ]}
          />

          <PracticeProblem
            accentColor={ACCENT}
            title="Average value"
            statement={<>Find the average value and the MVT point c.</>}
            parts={[
              {
                label: "(a)",
                question: <>Average of <InlineMath math="f(x) = x^2" /> on <InlineMath math="[0, 3]" />.</>,
                solutionSteps: (
                  <>
                    <Why>
                      Apply the formula directly:
                    </Why>
                    <Eq>f̄ = (1/3) ∫₀³ x² dx = (1/3) · 9 = 3</Eq>
                    <Why>
                      MVT for integrals: solve f(c) = 3:
                    </Why>
                    <Eq>c² = 3  ⇒  c = √3 ≈ 1.732 (in the interval [0, 3], so valid)</Eq>
                  </>
                ),
                answer: { value: "Average = 3, c = √3 ≈ 1.732" },
              },
              {
                label: "(b)",
                question: <>Average of <InlineMath math="f(x) = \sin x" /> on <InlineMath math="[0, \pi]" />.</>,
                solutionSteps: (
                  <>
                    <Why>
                      ∫₀^π sin x dx = 2 (a classic). Divide by interval length:
                    </Why>
                    <BlockMath math="\bar f = \tfrac{1}{\pi}\int_0^{\pi}\!\sin x\,dx = \tfrac{1}{\pi}[-\cos x]_0^{\pi} = \tfrac{2}{\pi} \approx 0.6366" />
                    <Why>
                      ~0.64 — the sine curve's average over a half-period.
                      Notice it's lower than the peak value of 1 because most
                      of the curve is below 1.
                    </Why>
                  </>
                ),
                answer: { value: "2/π ≈ 0.6366" },
              },
            ]}
          />
        </section>

        <section>
          <Card className="p-6 bg-gradient-to-br from-emerald-50 to-cyan-50 dark:from-slate-800 dark:to-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-gray-700 dark:text-gray-200">
                Done with Ch 6? Keep going or test yourself:
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/math/drill">
                  <Button variant="outline">Drill Ch 6</Button>
                </Link>
                <Link href="/math/cheat-sheet">
                  <Button variant="outline">Cheat Sheet</Button>
                </Link>
                <Link href="/math/diff-eq">
                  <Button style={{ background: "#f59e0b", color: "white" }}>
                    Next: Ch 7 Differential Equations →
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
