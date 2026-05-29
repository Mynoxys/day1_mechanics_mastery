import { useState, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Eye, EyeOff, Target, AlertTriangle, Zap } from "lucide-react";
import { Link } from "wouter";
import {
  BenchSupplyResistor,
  DividerThenParallel,
  DividerDesign,
  ThreeSourceNodal,
  TwoSourceLoopUnmarked,
  TwoRSeriesDmm,
  ScopeFig,
} from "./MidtermFigures";
import { CircuitSchematic } from "@/components/ee/CircuitSchematic";

// ─────────────────────────── primitives ───────────────────────────

function Reveal({ children, label = "Show answer" }: { children: ReactNode; label?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="text-xs font-semibold text-blue-600 dark:text-blue-300 hover:underline flex items-center gap-1"
      >
        {open ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
        {open ? "Hide" : label}
      </button>
      {open && (
        <div className="mt-2 p-2 bg-emerald-50 dark:bg-emerald-900/40 rounded text-xs text-emerald-900 dark:text-emerald-100 border-l-2 border-emerald-500">
          {children}
        </div>
      )}
    </div>
  );
}

function Mod({
  num,
  title,
  pointsLost,
  color,
  rule,
  trigger,
  trap,
  example,
  exampleFigure,
  drills,
}: {
  num: number;
  title: string;
  pointsLost: number;
  color: string;
  rule: ReactNode;
  trigger: ReactNode;
  trap?: ReactNode;
  example: { q: ReactNode; steps: ReactNode; ans: string };
  exampleFigure?: ReactNode;
  drills: { q: ReactNode; ans: ReactNode }[];
}) {
  return (
    <Card
      className="p-4 border-l-4 break-inside-avoid"
      style={{ borderLeftColor: color }}
    >
      <div className="flex items-baseline justify-between gap-2 mb-2">
        <div className="flex items-baseline gap-2">
          <span
            className="text-xs font-mono font-bold px-1.5 py-0.5 rounded text-white"
            style={{ background: color }}
          >
            #{num}
          </span>
          <h3 className="text-base font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>
        <Badge
          variant="outline"
          className="text-[10px] font-mono"
          style={{ borderColor: color, color }}
        >
          −{pointsLost} pts on real exam
        </Badge>
      </div>

      <div className="space-y-2 text-sm">
        <div className="text-gray-800 dark:text-gray-200">
          <span className="font-bold text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Rule
          </span>
          <div className="mt-0.5">{rule}</div>
        </div>

        <div className="text-emerald-900 dark:text-emerald-200 bg-emerald-50 dark:bg-emerald-900/30 p-2 rounded border-l-2 border-emerald-500 text-xs">
          <span className="font-bold">▸ Trigger: </span>
          {trigger}
        </div>

        {trap && (
          <div className="text-rose-900 dark:text-rose-200 bg-rose-50 dark:bg-rose-900/30 p-2 rounded border-l-2 border-rose-500 text-xs">
            <span className="font-bold">⚠ Trap: </span>
            {trap}
          </div>
        )}

        <div className="bg-slate-50 dark:bg-slate-800/60 p-2 rounded text-xs">
          <div className="font-bold text-[11px] uppercase tracking-wide text-slate-500 mb-1">
            Worked example
          </div>
          {exampleFigure && (
            <div className="mb-2 flex justify-center bg-white dark:bg-slate-900/60 rounded py-1 overflow-x-auto">
              {exampleFigure}
            </div>
          )}
          <div className="mb-1.5 text-gray-800 dark:text-gray-200">{example.q}</div>
          <div className="text-gray-600 dark:text-gray-300 leading-relaxed mb-1.5 font-mono text-[11px]">
            {example.steps}
          </div>
          <div className="font-mono font-bold" style={{ color }}>
            → {example.ans}
          </div>
        </div>

        <div>
          <div className="font-bold text-[11px] uppercase tracking-wide text-slate-500 mb-1.5">
            Drill ({drills.length} fast Qs)
          </div>
          <div className="space-y-2">
            {drills.map((d, i) => (
              <div key={i} className="text-xs border border-slate-200 dark:border-slate-700 rounded p-2">
                <div className="text-gray-800 dark:text-gray-200 mb-1.5">
                  <b>{i + 1}.</b> {d.q}
                </div>
                <Reveal>{d.ans}</Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

// ─────────────────────────── content ───────────────────────────

const MODULES = [
  // ───── 1. CV vs CC supply mode ─────
  {
    num: 1,
    title: "Bench Supply: CV vs CC Mode",
    pointsLost: 6,
    color: "#dc2626",
    rule: (
      <span>
        A bench supply has <b>both</b> a voltage set point AND a current set
        point. It enforces whichever limit it hits first.{" "}
        <span className="font-mono">I_load = V_set / R</span>; if that &gt; I_set
        → it's in <b>CC</b> mode and only outputs I_set; otherwise <b>CV</b> at
        V_set.
      </span>
    ),
    trigger: (
      <>
        Anytime a problem gives you <b>BOTH</b> V_set and I_set on a power
        supply. Don't just do P = VI of the set points.
      </>
    ),
    trap: (
      <>
        Computing P = V·I with the printed set points gives you the supply's
        max-rated power, not what's actually delivered. Always compute
        I_load = V_set/R first and compare to I_set.
      </>
    ),
    example: {
      q: (
        <>
          R = 11 Ω, supply set to 18.76 V and 0.956 A. Find P dissipated.
        </>
      ),
      steps: (
        <>
          1) I needed = 18.76/11 = 1.706 A &gt; 0.956 A → <b>CC mode</b>
          <br />
          2) Real I = 0.956 A; real V = IR = 0.956·11 = 10.52 V<br />
          3) P = I²R = 0.956² · 11
        </>
      ),
      ans: "P ≈ 10.05 W",
    },
    exampleFigure: <BenchSupplyResistor vSet={18.76} iSet={0.956} r={11} />,
    drills: [
      {
        q: (
          <>
            R = 47 Ω, supply set 5.0 V & 2.0 A. P = ?
          </>
        ),
        ans: (
          <>
            I_need = 5/47 = 0.106 A &lt; 2 A → <b>CV</b>. P = V²/R = 25/47 ={" "}
            <b>0.532 W</b>.
          </>
        ),
      },
      {
        q: (
          <>
            R = 8 Ω, supply set 12 V & 1.0 A. P = ?
          </>
        ),
        ans: (
          <>
            I_need = 12/8 = 1.5 A &gt; 1 A → <b>CC</b>. P = I²R = 1·8 ={" "}
            <b>8 W</b> (real V = 8 V, not 12).
          </>
        ),
      },
      {
        q: (
          <>
            R = 167 Ω, set 16.96 V & 0.621 A. CV or CC? P = ?
          </>
        ),
        ans: (
          <>
            I_need = 16.96/167 = 0.102 A &lt; 0.621 → <b>CV</b>. P = V²/R ={" "}
            <b>1.722 W</b>.
          </>
        ),
      },
    ],
  },

  // ───── 2. Multi-R network reduction ─────
  {
    num: 2,
    title: "Multi-R Network Reduction",
    pointsLost: 10,
    color: "#ea580c",
    rule: (
      <span>
        Collapse the network from the <b>far end back to the source</b>: spot
        series and parallel groups, replace with single equivalents, repeat.
        Once you have I_total, push voltages back out.
      </span>
    ),
    trigger: (
      <>
        Source + 4-6 resistors + a "find Vout / find I" question. Don't try
        nodal yet — series/parallel reduction wins 90% of the time.
      </>
    ),
    trap: (
      <>
        Two resistors aren't in series unless <b>nothing else taps the node</b>{" "}
        between them. Two aren't in parallel unless they share <b>both</b>{" "}
        nodes.
      </>
    ),
    example: {
      q: (
        <>
          V=12 V → R₁=100 Ω in series with [R₂=200 Ω ∥ R₃=200 Ω]; Vout across
          the parallel pair.
        </>
      ),
      steps: (
        <>
          1) R₂ ∥ R₃ = 200·200/400 = 100 Ω<br />
          2) R_total = 100 + 100 = 200 Ω; I = 12/200 = 60 mA<br />
          3) V_out = I·100 = 6.0 V (or just divider: 12·100/200)
        </>
      ),
      ans: "Vout = 6.0 V",
    },
    exampleFigure: <DividerThenParallel v={12} r1={100} r2={200} r3={200} />,
    drills: [
      {
        q: (
          <>
            V=10 V; R₁=1 kΩ in series with R₂=2 kΩ ∥ R₃=2 kΩ. V across the ∥
            pair?
          </>
        ),
        ans: (
          <>
            R₂∥R₃ = 1 kΩ. Total = 2 kΩ. V_out = 10·(1/2) = <b>5 V</b>.
          </>
        ),
      },
      {
        q: (
          <>
            V=9 V; R₁=300 Ω, R₂=600 Ω, R₃=600 Ω. R₂ and R₃ both go from the
            R₁/source node to ground. I from source?
          </>
        ),
        ans: (
          <>
            R₂∥R₃ = 300 Ω. R_total = 300 + 300 = 600 Ω. I = 9/600 ={" "}
            <b>15 mA</b>.
          </>
        ),
      },
      {
        q: (
          <>
            V=8.2 V; (R₁=725, R₂=1201) in divider, then R₅=1690 ∥ R₆=1869 across
            R₂. Approximate Vout across R₂.
          </>
        ),
        ans: (
          <>
            R₅∥R₆ = 1690·1869/3559 ≈ 887 Ω; load on R₂: 1201∥887 ≈ 510 Ω. Vout =
            8.2·510/(725+510) ≈ <b>3.39 V</b> (q on real exam was ≈2.21 V — exact
            topology matters; pattern is the same).
          </>
        ),
      },
    ],
  },

  // ───── 3. Voltage divider — solve for R ─────
  {
    num: 3,
    title: "Voltage Divider — Solve for R₂",
    pointsLost: 5,
    color: "#d97706",
    rule: (
      <span className="font-mono text-xs">
        V_out = V_in · R₂/(R₁+R₂) ⇒ R₂ = R₁ · V_out / (V_in − V_out)
      </span>
    ),
    trigger: (
      <>
        "Choose R₂ to make V_out = X". Just rearrange and plug — but watch the
        denominator: V_in &minus; V_out, never V_out alone.
      </>
    ),
    trap: (
      <>
        Easy to flip the formula and get R₁·V_out/V_in (forgetting to subtract).
        Sanity check: if V_out is small, R₂ should be small relative to R₁.
      </>
    ),
    example: {
      q: <>V=4.064 V, R₁=833 Ω. Pick R₂ so V_out = 1.117 V.</>,
      steps: (
        <>
          R₂ = 833 · 1.117 / (4.064 − 1.117) = 930.46 / 2.947
        </>
      ),
      ans: "R₂ ≈ 315.7 Ω",
    },
    exampleFigure: <DividerDesign v={4.064} r1={833} vOut={1.117} r2Label="R₂ = ?" />,
    drills: [
      {
        q: <>V=10 V, R₁=1 kΩ, want V_out=2 V. R₂?</>,
        ans: (
          <>
            R₂ = 1000·2/(10−2) = 2000/8 = <b>250 Ω</b>.
          </>
        ),
      },
      {
        q: <>V=5 V, R₁=2.2 kΩ, want V_out=3.3 V. R₂?</>,
        ans: (
          <>
            R₂ = 2200·3.3/(5−3.3) = 7260/1.7 ≈ <b>4271 Ω</b>.
          </>
        ),
      },
      {
        q: <>V=12 V, R₁=10 kΩ, want V_out=12 V. R₂?</>,
        ans: (
          <>
            Denominator = 0 → R₂ = ∞ (open circuit). Sanity check the impossible
            case.
          </>
        ),
      },
    ],
  },

  // ───── 4. Multi-source nodal ─────
  {
    num: 4,
    title: "Multi-Source Nodal (KCL)",
    pointsLost: 5,
    color: "#7c3aed",
    rule: (
      <span className="font-mono text-xs">
        At node V: Σ (V − V_src,i) / R_i = 0. Solve for V. Each branch = one
        term; sign of V_src is set by its <b>polarity in the schematic</b>.
      </span>
    ),
    trigger: (
      <>
        ≥3 sources or sources spread across separate branches. Series/parallel
        reduction won't work — go straight to KCL at the unknown node.
      </>
    ),
    trap: (
      <>
        Sign errors. Each V_src enters with the sign that matches its terminal
        facing the node. If +V_i is connected via R_i to the node:{" "}
        <span className="font-mono">(V − V_i)/R_i</span>. Negate if reversed.
      </>
    ),
    example: {
      q: (
        <>
          Three branches into node V: V₁=5 V via 1 kΩ, V₂=−3 V via 2 kΩ (i.e.
          terminal flipped), V₃=8 V via 4 kΩ. Find V.
        </>
      ),
      steps: (
        <>
          (V−5)/1k + (V−(−3))/2k + (V−8)/4k = 0<br />
          ×4k: 4(V−5) + 2(V+3) + (V−8) = 0 → 7V − 22 = 0
        </>
      ),
      ans: "V ≈ 3.14 V",
    },
    exampleFigure: <ThreeSourceNodal v1={5} v2={-3} v3={8} r1={1000} r2={2000} r3={4000} />,
    drills: [
      {
        q: (
          <>
            Two sources into a node V: V₁=10 V via 1 kΩ, V₂=4 V via 1 kΩ. Find
            V.
          </>
        ),
        ans: (
          <>
            (V−10)/1k + (V−4)/1k = 0 → 2V = 14 → V = <b>7 V</b> (= average of
            two equal-R branches).
          </>
        ),
      },
      {
        q: (
          <>
            Three branches into node: 5.9 V via 2001 Ω, 3.3 V via 3922 Ω, −8 V
            via 3447 Ω (V₃ reversed). Find V.
          </>
        ),
        ans: (
          <>
            ΣV_i/R_i = 5.9/2001 + 3.3/3922 + (−8)/3447 = 0.00295 + 0.000841 −
            0.00232 = 0.00147. Σ1/R_i = 1/2001+1/3922+1/3447 ≈ 0.000500 +
            0.000255 + 0.000290 = 0.001045. V = 0.00147/0.001045 ≈ <b>1.41 V</b>.
            (Real exam answer was −0.256 V — sign on V₃ depends on its
            schematic orientation; pattern is what matters.)
          </>
        ),
      },
      {
        q: (
          <>
            Shortcut: "node voltage = weighted average of source voltages,
            weights = 1/R_i". True or false?
          </>
        ),
        ans: (
          <>
            <b>True.</b> V = Σ(V_i/R_i) / Σ(1/R_i). Memorize this; it makes 3+
            source problems mechanical.
          </>
        ),
      },
    ],
  },

  // ───── 5. Source polarity ─────
  {
    num: 5,
    title: "Source Polarity & 'Not Enough Info'",
    pointsLost: 2,
    color: "#0891b2",
    rule: (
      <span>
        Two voltage sources combine = V₁ ± V₂ depending on their polarity. If
        the schematic doesn't show + / − markings clearly, you literally cannot
        pick a number — the answer is "not enough information."
      </span>
    ),
    trigger: (
      <>
        Question gives you V₁ and V₂ but the schematic has no polarity dots, OR
        a multiple-choice option literally says "not enough information". Pause
        and check.
      </>
    ),
    trap: (
      <>
        Default-assuming sources add (or subtract) based on how they "look"
        without verifying polarity. Always look for the + / − markings or
        battery long-line.
      </>
    ),
    example: {
      q: <>V₁=3.44 Vrms, V₂=5.76 Vrms, polarity not shown. Equivalent V?</>,
      steps: (
        <>
          Could be 9.20 (aiding), 2.32 (opposing), or with sign flips ±9.20,
          ±2.32. Without polarity dots, no unique answer.
        </>
      ),
      ans: "Answer: 'not enough information'",
    },
    exampleFigure: <TwoSourceLoopUnmarked v1={3.44} v2={5.76} />,
    drills: [
      {
        q: (
          <>
            Two batteries in a loop: 9 V + 6 V, opposing. V_eq?
          </>
        ),
        ans: (
          <>
            <b>3 V</b> (in the direction of the larger source).
          </>
        ),
      },
      {
        q: (
          <>
            Two batteries in a loop: 9 V + 6 V, aiding. V_eq?
          </>
        ),
        ans: (
          <>
            <b>15 V</b>.
          </>
        ),
      },
      {
        q: (
          <>
            Schematic has two AC sources with no phase info. V_eq?
          </>
        ),
        ans: (
          <>
            Phase unknown ⇒ <b>not enough information</b> — can range from V₁ −
            V₂ to V₁ + V₂.
          </>
        ),
      },
    ],
  },

  // ───── 6. Scope reading ─────
  {
    num: 6,
    title: "Scope: Hz vs ω, Sine vs Square RMS",
    pointsLost: 6,
    color: "#0e7490",
    rule: (
      <span>
        <b>Period T</b> from horizontal grid: T = (divs across one cycle) ×
        (sec/div).
        <br />
        f = 1/T (Hz). ω = 2πf (rad/s).
        <br />
        <b>RMS depends on shape</b>: sine V_rms = V_p/√2; square V_rms = V_p
        (not V_p/√2!); DC V_rms = V_DC.
      </span>
    ),
    trigger: (
      <>
        Any "read X off the trace" question. First identify <b>shape</b> (sine
        / square / DC), then plug the right RMS formula.
      </>
    ),
    trap: (
      <>
        Defaulting to V_p/√2 for everything → wrong on square waves. Forgetting
        to read the timebase scale → off by 1000× on frequency.
      </>
    ),
    example: {
      q: (
        <>
          Bottom trace: square wave, 3 V_pp, period spans 4 divs at 0.5 ms/div.
          Find V_rms and ω.
        </>
      ),
      steps: (
        <>
          T = 4 · 0.5 ms = 2 ms → f = 500 Hz → ω = 2π·500
          <br />
          V_p = 3/2 = 1.5 V; square ⇒ V_rms = V_p = 1.5 V
        </>
      ),
      ans: "V_rms = 1.5 V, ω = 3142 rad/s",
    },
    exampleFigure: (
      <ScopeFig
        width={320}
        height={170}
        vDiv={0.5}
        tDiv={0.5e-3}
        signal={(t) => {
          const period = 2e-3;
          const phase = ((t % period) + period) % period;
          return phase < period / 2 ? 1.5 : -1.5;
        }}
      />
    ),
    drills: [
      {
        q: (
          <>
            Sine, 4 V_pp, period 2 divs at 1 ms/div. f, ω, V_rms?
          </>
        ),
        ans: (
          <>
            T=2 ms, f=<b>500 Hz</b>, ω=2π·500=<b>3142 rad/s</b>, V_p=2 V, V_rms =
            2/√2 = <b>1.414 V</b>.
          </>
        ),
      },
      {
        q: (
          <>
            Square wave, 1.5 V amplitude (so 3 V_pp). V_rms?
          </>
        ),
        ans: (
          <>
            Square: V_rms = V_p = <b>1.5 V</b>. Don't divide by √2.
          </>
        ),
      },
      {
        q: (
          <>
            Trace period spans 1.5 divs at 1/3 ms/div. Find f and ω.
          </>
        ),
        ans: (
          <>
            T = 0.5 ms → f = <b>2000 Hz</b> → ω = 2π·2000 ≈ <b>12,566 rad/s</b>.
          </>
        ),
      },
    ],
  },

  // ───── 7. DMM theory ─────
  {
    num: 7,
    title: "DMM Theory & Lab Errors",
    pointsLost: 2,
    color: "#16a34a",
    rule: (
      <span>
        DMM in <b>V mode</b>: input R should be <b>∞</b> (so it doesn't draw
        current and disturb the node). 34461A spec = 10 MΩ.
        <br />
        DMM in <b>A mode</b>: input R should be <b>0</b> (so it doesn't drop V).
        <br />
        <b>2-wire ohms includes lead R</b> ⇒ measured R &gt; actual R for small
        resistors. Use 4-wire for R &lt; 10 Ω.
      </span>
    ),
    trigger: (
      <>
        "Why was measured R higher?" / "What should DMM input R be?" — these are
        pure recall, free points. Don't overthink.
      </>
    ),
    example: {
      q: <>Measured R = 2.4 Ω; marked = 2.0 Ω. Why?</>,
      steps: (
        <>
          2-wire mode includes the test-lead resistance in series with the DUT.
          Lead R ≈ 0.4 Ω is normal.
        </>
      ),
      ans: "Lead resistance adds in series. Use 4-wire.",
    },
    exampleFigure: <TwoRSeriesDmm rTop={0.2} rBot={2.0} unit="Ω" />,
    drills: [
      {
        q: <>DMM in V mode, ideal input R?</>,
        ans: <><b>∞</b> (so it doesn't load the circuit).</>,
      },
      {
        q: <>DMM in A mode, ideal input R?</>,
        ans: <><b>0</b> (so it doesn't drop voltage in series).</>,
      },
      {
        q: (
          <>
            Why might V_out across an MΩ-scale divider read low on a DMM?
          </>
        ),
        ans: (
          <>
            DMM 10 MΩ input loads R₂ in parallel: R₂_eff = R₂ ∥ 10 MΩ. Negligible
            for kΩ; significant for MΩ.
          </>
        ),
      },
    ],
  },

  // ───── 8. SPICE matching ─────
  {
    num: 8,
    title: "SPICE Directive ↔ X-axis",
    pointsLost: 1,
    color: "#0369a1",
    rule: (
      <span className="font-mono text-xs">
        .tran ↔ time · .ac ↔ frequency · .dc ↔ swept V/I · .op ↔ none (single
        point)
      </span>
    ),
    trigger: <>"Match the simulation type to the horizontal axis." Free point.</>,
    example: {
      q: <>You want a Bode plot showing filter cutoff. Which directive?</>,
      steps: <>Frequency response → .ac dec npts fstart fstop</>,
      ans: ".ac",
    },
    exampleFigure: (
      <div className="flex flex-row items-center gap-3">
        <CircuitSchematic
          width={180}
          height={130}
          noGrid
          wires={[
            { x1: 30, y1: 70, x2: 30, y2: 40 },
            { x1: 30, y1: 40, x2: 80, y2: 40 },
            { x1: 110, y1: 40, x2: 145, y2: 40 },
            { x1: 145, y1: 40, x2: 145, y2: 60 },
            { x1: 145, y1: 80, x2: 145, y2: 105 },
            { x1: 30, y1: 95, x2: 30, y2: 105 },
            { x1: 30, y1: 105, x2: 145, y2: 105 },
          ]}
          components={[
            { kind: "V", x: 30, y: 82, label: "V1", color: "#f59e0b", labelPos: "left" },
            { kind: "R", x: 95, y: 40, label: "R1 1k", color: "#10b981" },
            { kind: "C", x: 145, y: 70, label: "C1 1µ", color: "#06b6d4", labelPos: "right" },
            { kind: "GND", x: 87, y: 105 },
          ]}
        />
        <pre className="text-[10px] bg-slate-900 text-emerald-200 p-2 rounded leading-tight">
{`V1 in 0 AC 1
R1 in out 1k
C1 out 0 1u
.ac dec 20 1 100k`}
        </pre>
      </div>
    ),
    drills: [
      {
        q: <>Switching transient, e.g. step response. Directive?</>,
        ans: <><b>.tran</b> tstep tstop. X-axis = time.</>,
      },
      {
        q: <>I-V curve of a diode. Directive?</>,
        ans: <><b>.dc</b> Vsrc start stop step. X-axis = swept voltage.</>,
      },
      {
        q: <>Just want the DC bias point. Directive?</>,
        ans: <><b>.op</b>. No x-axis — outputs single-point values.</>,
      },
    ],
  },
];

// ─────────────────────────── page ───────────────────────────

export default function MidtermDrill() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/ee">
            <Button variant="ghost" className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <ChevronLeft className="w-5 h-5" /> Back to ESE 123
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Midterm Drill — based on your last exam
          </h1>
          <Link href="/ee/midterm-mock">
            <Button className="bg-rose-600 hover:bg-rose-700 text-white flex items-center gap-2">
              <Target className="w-4 h-4" /> Take Mock
            </Button>
          </Link>
        </div>
      </header>

      <div className="container py-8 max-w-6xl">
        <section className="mb-8">
          <div className="flex flex-wrap gap-3 mb-4">
            <Badge className="bg-rose-600 text-white">Score on real exam: 13 / 49 (27%)</Badge>
            <Badge variant="outline" className="border-emerald-600 text-emerald-700 dark:text-emerald-300">
              Got right: Q1, Q3, Q8, Q9, Q13, Q15
            </Badge>
            <Badge variant="outline" className="border-rose-600 text-rose-700 dark:text-rose-300">
              Lost 36 pts on 13 questions
            </Badge>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
            <Zap className="w-7 h-7 text-amber-500" /> 8 modules, 1 hour, 36 points back
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Each module = one rule + when-to-use trigger + one worked example +
            three drill questions with reveal. Modules are ordered by{" "}
            <b>points lost on your real exam</b>. Hit #1 first, it's the single
            biggest leverage point.
          </p>
        </section>

        <section className="mb-8 bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 rounded">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-amber-900 dark:text-amber-100">
              <b>Pattern from your real exam:</b> you nailed every "read a number
              off the screen" question (Q1, Q3, Q8, Q9, Q13, Q15). You lost
              points on <b>multi-step circuit analysis</b> and on <b>traps</b>{" "}
              (CV/CC mode, sine-vs-square RMS, source polarity, lead R). The 8
              modules below target exactly those patterns — no extra
              filler.
            </div>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-4">
          {MODULES.map((m) => (
            <Mod key={m.num} {...m} />
          ))}
        </div>

        <section className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
            Ready? Hit the mock.
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            19 questions, 49 points, same templates as the real exam, fresh
            numbers. Score breakdown by topic at the end.
          </p>
          <Link href="/ee/midterm-mock">
            <Button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-5 text-lg flex items-center gap-2 mx-auto">
              <Target className="w-5 h-5" /> Take the Mock Exam
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
