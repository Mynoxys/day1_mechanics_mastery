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

// ──────────────────────────── building blocks ────────────────────────────

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
          <span className="text-[8px] font-medium opacity-90 ml-auto">
            {tag}
          </span>
        )}
      </div>
      <div className="space-y-[2px] text-[8.5px] leading-[1.25] text-slate-900">
        {children}
      </div>
    </section>
  );
}

// label + formula line
function F({ k, v }: { k: string; v: ReactNode }) {
  return (
    <div className="flex gap-1.5">
      <span className="font-semibold text-slate-700 shrink-0">{k}</span>
      <span className="font-mono text-slate-900">{v}</span>
    </div>
  );
}

// trigger / when-to-use
function W({ children }: { children: ReactNode }) {
  return (
    <div className="text-[8px] text-emerald-800 bg-emerald-50 border-l-2 border-emerald-500 pl-1.5 py-[1px]">
      <span className="font-bold">▸ </span>
      {children}
    </div>
  );
}

// gotcha / red flag
function G({ children }: { children: ReactNode }) {
  return (
    <div className="text-[8px] text-rose-800 bg-rose-50 border-l-2 border-rose-500 pl-1.5 py-[1px]">
      <span className="font-bold">⚠ </span>
      {children}
    </div>
  );
}

// shortcut / tip
function T({ children }: { children: ReactNode }) {
  return (
    <div className="text-[8px] text-amber-900 bg-amber-50 border-l-2 border-amber-500 pl-1.5 py-[1px]">
      <span className="font-bold">→ </span>
      {children}
    </div>
  );
}

const COLORS = {
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

// ─────────────────────────────── PHYSICS ───────────────────────────────

function PhysicsSheet() {
  return (
    <div className="grid grid-cols-3 gap-x-3 gap-y-1">
      <Sec title="Kinematics & Newton" color={COLORS.blue} tag="constant a">
        <F k="1D" v="v=v₀+at · x=x₀+v₀t+½at²" />
        <F k="·" v="v² = v₀² + 2aΔx · x=½(v₀+v)t" />
        <F k="2D" v="treat x, y independently · same t" />
        <F k="Σ" v="ΣF = ma  per axis" />
        <F k="Wt" v="W = mg  (always down)" />
        <F k="N" v="balances ⊥ forces (whatever it takes)" />
        <F k="f_s" v="≤ μ_s N  (static, hasn't slipped)" />
        <F k="f_k" v="= μ_k N  (kinetic, slipping)" />
        <F k="incline θ" v="F∥=mg sinθ · F⊥=mg cosθ=N" />
        <T>sin slides, cos sticks. Tilt axes ALONG the slope.</T>
        <F k="rope" v="massless ⇒ |T| same end-to-end" />
        <F k="link" v="connected bodies share |a|" />
        <W>
          Forces or accel asked? Newton. No friction & only positions/speeds?
          Energy is faster.
        </W>
      </Sec>

      <Sec title="Energy & Momentum" color={COLORS.amber}>
        <F k="KE" v="½mv²" />
        <F k="PE_g" v="mgh  (h above your zero)" />
        <F k="PE_s" v="½kx²  (x from natural length)" />
        <F k="W" v="F·d cosθ  · W_net = ΔKE" />
        <F k="cons" v="KE_i+PE_i = KE_f+PE_f  (no friction)" />
        <F k="w/μ" v="add  +|W_friction| = +f_k·d  on right" />
        <F k="p" v="mv  (vector!)" />
        <F k="J" v="FΔt = Δp" />
        <F k="coll" v="p ALWAYS conserved (no ext F·Δt)" />
        <F k="elastic" v="KE conserved too" />
        <F k="stick" v="m₁v₁+m₂v₂ = (m₁+m₂)v_f" />
        <W>Collision/explosion → momentum first.</W>
        <G>Inelastic: KE ≠ conserved. Don't ½mv² to find v_after-stick.</G>
      </Sec>

      <Sec title="Circular & Gravity" color={COLORS.purple}>
        <F k="a_c" v="v²/r = ω²r  (toward center)" />
        <F k="F_c" v="mv²/r  IS the net radial F" />
        <F k="v" v="2πr/T  (uniform)" />
        <F k="F_g" v="GMm/r²  · g(r) = GM/r²" />
        <F k="orbit" v="v_orb = √(GM/r)" />
        <F k="esc" v="v_esc = √2·v_orb = √(2GM/r)" />
        <F k="Kep" v="T² = (4π²/GM) r³" />
        <G>Never draw F_c on a FBD. Sum (T,N,mg,f) toward center = mv²/r.</G>
        <F k="loop⊤" v="min v: mg = mv²/r ⇒ v=√(gr)" />
        <F k="loop⊥" v="N − mg = mv²/r" />
      </Sec>

      <Sec title="Rotational" color={COLORS.red} tag="m→I, v→ω, p→L, F→τ">
        <F k="kin" v="ω=ω₀+αt · θ=θ₀+ω₀t+½αt²" />
        <F k="·" v="ω² = ω₀² + 2αΔθ" />
        <F k="link" v="v=rω · a_t=rα · a_c=rω²" />
        <F k="τ" v="rF sinθ = Iα" />
        <F k="‖axis" v="I = I_cm + Md²" />
        <F k="I" v="hoop MR² · disk ½MR² · sphere (2/5)MR²" />
        <F k="·" v="rod-cm (1/12)ML² · rod-end (1/3)ML²" />
        <F k="KE" v="½Iω²  · roll: ½mv² + ½Iω²" />
        <F k="L" v="Iω. Conserved when τ_ext=0." />
        <T>Skater pulls in ⇒ I↓ ⇒ ω↑ (Iω fixed).</T>
        <F k="roll" v="no-slip: v_cm=Rω, a_cm=Rα" />
        <W>Pivot? Torques. Free body? L conservation.</W>
      </Sec>

      <Sec title="SHM" color={COLORS.cyan}>
        <F k="x(t)" v="A cos(ωt+φ)" />
        <F k="v_max" v="Aω · a_max = Aω² · a = −ω²x" />
        <F k="spring" v="ω=√(k/m), T=2π√(m/k)" />
        <F k="pend" v="ω=√(g/L), T=2π√(L/g)  [small θ]" />
        <F k="E" v="½kA²  (constant, always)" />
        <T>No friction ⇒ SHM forever. Amplitude doesn't change ω/T.</T>
      </Sec>

      <Sec title="Waves & Sound" color={COLORS.cyan}>
        <F k="wave" v="v = fλ" />
        <F k="string" v="v = √(T/μ)  (μ = mass/length)" />
        <F k="air" v="v_sound ≈ 343 m/s" />
        <F k="string/open pipe" v="f_n = nv/2L  (n=1,2,3…)" />
        <F k="closed pipe" v="f_n = nv/4L  (n odd only)" />
        <F k="beats" v="f_b = |f₁ − f₂|" />
        <F k="Dop" v="f' = f(v±v_obs)/(v∓v_src)" />
        <T>Top sign = approach (raises pitch). Use frame of medium.</T>
        <F k="I" v="P/(4πr²) · β = 10·log₁₀(I/I₀), I₀=10⁻¹²" />
      </Sec>

      <Sec title="Fluids" color={COLORS.teal}>
        <F k="basics" v="ρ=m/V · P=F/A · 1 atm≈1.013×10⁵ Pa" />
        <F k="static" v="P = P₀ + ρgh  (depth h)" />
        <F k="buoy" v="F_B = ρ_fluid · V_disp · g" />
        <F k="float" v="V_sub/V = ρ_obj / ρ_fluid" />
        <F k="cont" v="A₁v₁ = A₂v₂" />
        <F k="Bern" v="P + ½ρv² + ρgh = const  (streamline)" />
        <W>Static? ρgh. Pipe narrows? Continuity + Bernoulli together.</W>
      </Sec>

      <Sec title="Decision flow" color={COLORS.slate}>
        <div className="text-[8.5px] leading-[1.3] space-y-[2px]">
          <div>
            <b>Asks for force/N/T/μ →</b> FBD + ΣF=ma.
          </div>
          <div>
            <b>Asks for v/h/x w/ no friction →</b> energy.
          </div>
          <div>
            <b>Two bodies hit/stick/burst →</b> p first, then maybe energy.
          </div>
          <div>
            <b>Anything circling →</b> ΣF_radial = mv²/r.
          </div>
          <div>
            <b>Spinning rigid body →</b> τ=Iα or ½Iω².
          </div>
          <div>
            <b>Oscillation/period →</b> ω=√(k/m or g/L), T=2π/ω.
          </div>
          <div>
            <b>Pipe/depth/floats →</b> ρgh, A₁v₁=A₂v₂, Bernoulli.
          </div>
        </div>
      </Sec>

      <Sec title="Constants & checks" color={COLORS.slate}>
        <F k="g" v="9.80 m/s² (Earth surface)" />
        <F k="G" v="6.67×10⁻¹¹ N·m²/kg²" />
        <F k="M_E" v="5.97×10²⁴ kg · R_E≈6.37×10⁶ m" />
        <F k="ρ_water" v="1000 kg/m³ · 1 g/cm³" />
        <F k="P_atm" v="1.013×10⁵ Pa" />
        <T>SI before plugging. One unknown per equation. Sanity check magnitude.</T>
        <T>2π is for radians. Degree → rad: ×π/180.</T>
        <T>If you get v &gt; c or m &lt; 0, you flipped a sign.</T>
      </Sec>
    </div>
  );
}

// ─────────────────────────────────── EE ───────────────────────────────────

function EeSheet() {
  return (
    <div className="grid grid-cols-3 gap-x-3 gap-y-1">
      <Sec title="Numbers & Bits" color={COLORS.blue}>
        <F k="bit n" v="(1<<n) = 2ⁿ · byte = 0x00–0xFF" />
        <F k="hex" v="each digit = 4 bits · 0xAB = 10·16+11 = 171" />
        <F k="SET" v="x |=  (1<<n)" />
        <F k="CLR" v="x &= ~(1<<n)" />
        <F k="TGL" v="x ^=  (1<<n)" />
        <F k="TST" v="x &   (1<<n)  → nonzero if set" />
        <G>C int math truncates: 35/2=17, 35%2=1. Cast to float for fractions.</G>
        <W>7-seg pattern? OR the segment bits. Active-LOW ⇒ output ~pattern.</W>
      </Sec>

      <Sec title="AVR I/O" color={COLORS.magenta}>
        <F k="DIR" v="1 = output, 0 = input" />
        <F k="OUT" v="drive value (when DIR=1)" />
        <F k="IN" v="read pin state" />
        <T>Set DIR before driving OUT.</T>
        <F k="btns" v="UP=PE0, OK=PE1, DOWN=PE2 (pressed=1)" />
        <F k="7seg" v="PORTA, active-LOW (0 lights segment)" />
        <F k="delay" v="_delay_ms(n) — n must be compile-time const" />
        <F k="Morse" v="dot=200 · dash=600 · gap=1400 ms" />
      </Sec>

      <Sec title="ADC (10-bit)" color={COLORS.red} tag="V_ref = 4.3 V">
        <F k="V→code" v="code = round(V·1023/V_ref)" />
        <F k="code→V" v="V = code · V_ref/1023" />
        <F k="LSB" v="≈ V_ref/1023 ≈ 4.2 mV" />
        <F k="MUXPOS" v="ADC0_MUXPOS = channel# (no start!)" />
        <F k="start" v="separate write to start a conversion" />
        <F k="ch" v="12=USB I (TIA) · 13=AVDD · 14=CC1 · 15=CC2" />
        <T>64-sample accumulate ⇒ multiply expected single code ×64.</T>
      </Sec>

      <Sec title="DC Circuits" color={COLORS.green}>
        <F k="Ohm" v="V = IR" />
        <F k="P" v="VI = I²R = V²/R" />
        <F k="series" v="R_eq = ΣR" />
        <F k="par" v="1/R_p = Σ1/R · 2-R: R₁R₂/(R₁+R₂)" />
        <F k="V-div" v="V_out = V_in · R₂/(R₁+R₂)  [R₂ to GND]" />
        <F k="2-src" v="V = (V₁R₂ + V₂R₁)/(R₁+R₂)  [opp.]" />
        <F k="DMM" v="voltage mode = 10 MΩ in ∥" />
        <T>Only matters when divider Rs are MΩ-scale.</T>
        <F k="P_max" v="R_load = R_source for max P delivered" />
        <W>Reduce to 1 equiv R from source's view, then back-substitute.</W>
      </Sec>

      <Sec title="Op-Amps" color={COLORS.violet} tag="ideal, − feedback">
        <F k="rule 1" v="V₊ = V₋  (virtual short)" />
        <F k="rule 2" v="I_in = 0  (no input current)" />
        <F k="invert" v="V_out = −V_in · R_f/R_in" />
        <F k="non-inv" v="V_out = V_in · (1 + R_f/R_g)" />
        <F k="TIA" v="V_out = −I_in · R_f  (I→V)" />
        <F k="sat" v="output clamps at supply rails ±V_s" />
        <W>Apply rules at the − node, then write KCL there.</W>
        <G>Inverting? Watch the sign. Non-inv gain ≥ 1 always.</G>
      </Sec>

      <Sec title="Lab / Measurement" color={COLORS.cyan}>
        <F k="I-V" v="slope of I vs V = 1/R · slope of V vs I = R" />
        <F k="sine" v="V_p = V_pp/2 · V_rms = V_p/√2" />
        <F k="freq" v="ω = 2πf · f = 1/T" />
        <F k="4-wire" v="for R &lt; 10 Ω (cancels lead R)" />
        <F k="scope" v="AC coupling blocks DC offset" />
        <T>Use AC coupling to see ripple on a DC rail.</T>
      </Sec>

      <Sec title="USB-C / PD" color={COLORS.orange}>
        <F k="CC" v="~5V open · 0.7–2V device · ~0.2V active cable" />
        <F k="P" v="P = VI" />
        <F k="PD3" v="≤ 240 W (48 V × 5 A)" />
        <F k="cap" v="E = ½CV²  (super-cap → F-class)" />
        <T>Identify partner from CC voltage before drawing power math.</T>
      </Sec>

      <Sec title="SPICE directives" color={COLORS.sky}>
        <F k=".tran" v="tstep tstop  — time waveforms" />
        <F k=".ac" v="dec npts fstart fstop — Bode/cutoff" />
        <F k=".dc" v="src start stop step — I-V, transfer" />
        <F k=".op" v="single DC bias point" />
        <W>
          Filter cutoff/phase? .ac. Switching transient? .tran. Q-point only?
          .op.
        </W>
      </Sec>

      <Sec title="Decision flow" color={COLORS.slate}>
        <div className="text-[8.5px] leading-[1.3] space-y-[2px]">
          <div>
            <b>"Set/clear/toggle bit n" →</b> 1{"<<"}n + bitwise op.
          </div>
          <div>
            <b>"Pin reads X / drives Y" →</b> DIR first, then OUT/IN.
          </div>
          <div>
            <b>"Convert ADC code ↔ volts" →</b> V = code·V_ref/1023.
          </div>
          <div>
            <b>"What's V at node?" →</b> divider, KVL, or virtual short.
          </div>
          <div>
            <b>"Current → voltage" →</b> TIA: V = −I·R_f.
          </div>
          <div>
            <b>"What sim do I run?" →</b> .ac/.tran/.dc/.op (see above).
          </div>
        </div>
      </Sec>

      <Sec title="Universal moves" color={COLORS.slate}>
        <div className="text-[8.5px] leading-[1.3] space-y-[2px]">
          <div>• Units: Rs in kΩ unless told; caps μF/nF/pF.</div>
          <div>• Always check signs: active-LOW, inverting amp, current dir.</div>
          <div>• Simulate (.op or .tran) before soldering.</div>
          <div>• Measure with DMM in V-mode = 10 MΩ load — fine for kΩ, breaks MΩ.</div>
          <div>• 4-wire only matters for R &lt; 10 Ω.</div>
          <div>
            • If a register name has <i>SET</i>/<i>CLR</i>, you can write 1 to that
            single bit without read-modify-write.
          </div>
        </div>
      </Sec>
    </div>
  );
}

// ─────────────────────────────────── shell ───────────────────────────────────

export default function SuperCheatSheet() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
      <style dangerouslySetInnerHTML={{ __html: printStyles }} />

      <header className="no-print sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
            >
              <ChevronLeft className="w-5 h-5" /> Back
            </Button>
          </Link>
          <div className="text-center">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Super Cheat Sheet
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Print double-sided · Physics front · EE back
            </p>
          </div>
          <Button
            onClick={() => window.print()}
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
          >
            <Printer className="w-4 h-4" /> Print
          </Button>
        </div>
      </header>

      <div className="print-area py-8">
        <div className="mx-auto flex flex-col items-center gap-8 px-4">
          {/* FRONT — PHYSICS */}
          <div
            className="sheet bg-white text-slate-900 shadow-lg"
            style={{
              width: "8.5in",
              minHeight: "11in",
              padding: "0.35in",
              boxSizing: "border-box",
            }}
          >
            <div className="flex items-baseline justify-between border-b-2 border-slate-900 pb-1 mb-2">
              <div>
                <div className="text-[14px] font-extrabold tracking-tight">
                  PHY 131 — Super Cheat Sheet
                </div>
                <div className="text-[8px] text-slate-600 -mt-0.5">
                  Dynamics · Energy · Circular · Rotation · SHM · Waves · Fluids
                </div>
              </div>
              <div className="text-[8px] text-slate-500 font-mono">
                ▸ trigger &nbsp; → tip &nbsp; ⚠ gotcha
              </div>
            </div>
            <PhysicsSheet />
            <div className="text-[7px] text-slate-400 text-center mt-2 border-t border-slate-200 pt-1">
              Front · flip for ESE 123
            </div>
          </div>

          {/* BACK — EE */}
          <div
            className="sheet bg-white text-slate-900 shadow-lg"
            style={{
              width: "8.5in",
              minHeight: "11in",
              padding: "0.35in",
              boxSizing: "border-box",
            }}
          >
            <div className="flex items-baseline justify-between border-b-2 border-slate-900 pb-1 mb-2">
              <div>
                <div className="text-[14px] font-extrabold tracking-tight">
                  ESE 123 — Super Cheat Sheet
                </div>
                <div className="text-[8px] text-slate-600 -mt-0.5">
                  Bits · AVR · ADC · DC · Op-amps · Lab · USB-C · SPICE
                </div>
              </div>
              <div className="text-[8px] text-slate-500 font-mono">
                ▸ trigger &nbsp; → tip &nbsp; ⚠ gotcha
              </div>
            </div>
            <EeSheet />
            <div className="text-[7px] text-slate-400 text-center mt-2 border-t border-slate-200 pt-1">
              Back · flip for PHY 131
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
