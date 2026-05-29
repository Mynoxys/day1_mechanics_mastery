import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, Skull, Zap, Target, Award, Calculator } from "lucide-react";
import { Link } from "wouter";
import { PracticeProblem } from "@/components/midterm/PracticeProblem";
import { Eq } from "@/components/midterm/WorkedExample";
import { InlineMath, BlockMath } from "@/components/math/Katex";

// Tier colors — difficulty progression
const TIER1 = "#10b981"; // green — easy
const TIER2 = "#0ea5e9"; // sky — medium-easy
const TIER3 = "#f59e0b"; // amber — multi-step
const TIER4 = "#dc2626"; // red — final boss

// Topic colors used for individual problem accents
const C = {
  forces: "#2563eb",
  energy: "#ef4444",
  momentum: "#f97316",
  circular: "#7c3aed",
  rotational: "#c026d3",
  shm: "#f59e0b",
  waves: "#10b981",
  fluids: "#0ea5e9",
  bitwise: "#2563eb",
  dc: "#10b981",
  adc: "#ef4444",
  opamp: "#7c3aed",
  mcu: "#c026d3",
  usbc: "#f59e0b",
  spice: "#06b6d4",
  cross: "#dc2626",
  mathInt: "#1d4ed8",
  mathApp: "#15803d",
  mathDE: "#b45309",
  mathSer: "#6d28d9",
};

function TierBadge({ tier, color, label }: { tier: number; color: string; label: string }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-2">
      <span
        className="px-4 py-1 rounded-full text-white text-xs font-bold tracking-wider"
        style={{ backgroundColor: color }}
      >
        TIER {tier}
      </span>
      <span className="text-sm text-gray-500 dark:text-gray-400 italic">{label}</span>
    </div>
  );
}

function TopicTag({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <span
      className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded mr-2"
      style={{ backgroundColor: color + "22", color }}
    >
      {children}
    </span>
  );
}

function CheatBlock({
  title,
  color,
  children,
}: {
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="p-4 border-l-4" style={{ borderLeftColor: color }}>
      <h4
        className="font-bold text-xs mb-2 uppercase tracking-wider"
        style={{ color }}
      >
        {title}
      </h4>
      <ul className="text-[13px] space-y-1 font-mono text-gray-800 dark:text-gray-200 leading-snug list-none">
        {children}
      </ul>
    </Card>
  );
}

function F({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
}

export default function SuperMockExam() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <ChevronLeft className="w-5 h-5" /> Back to Home
            </Button>
          </Link>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
            Super Mock Exam · Physics + EE
          </h1>
          <div className="w-32" />
        </div>
      </header>

      {/* Hero / Intro */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-br from-red-50 via-amber-50 to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 via-amber-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Skull className="w-9 h-9 text-white" />
              </div>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              The Gauntlet
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
              Every PHY 131 topic. Every ESE 123 topic. Every AMS 161 chapter. Mid-term
              content + finals content, all in one ramping difficulty curve.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-200 font-semibold mb-8">
              30 problems. 4 tiers. Solve them all and you've mastered the program.
            </p>

            {/* Tier overview */}
            <div className="grid md:grid-cols-4 gap-3 mb-10 max-w-4xl mx-auto">
              <Card className="p-4 border-l-4" style={{ borderLeftColor: TIER1 }}>
                <div className="flex items-center gap-2 mb-1">
                  <Target className="w-5 h-5" style={{ color: TIER1 }} />
                  <span className="font-bold text-gray-900 dark:text-white">Tier 1</span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  Concept Sanity Check
                </div>
                <div className="text-2xl font-bold" style={{ color: TIER1 }}>
                  8 problems
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                  Definitions, sign rules, plug-and-go
                </div>
              </Card>
              <Card className="p-4 border-l-4" style={{ borderLeftColor: TIER2 }}>
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-5 h-5" style={{ color: TIER2 }} />
                  <span className="font-bold text-gray-900 dark:text-white">Tier 2</span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  Single-Step Calculation
                </div>
                <div className="text-2xl font-bold" style={{ color: TIER2 }}>
                  10 problems
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                  One concept, full computation, units
                </div>
              </Card>
              <Card className="p-4 border-l-4" style={{ borderLeftColor: TIER3 }}>
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-5 h-5" style={{ color: TIER3 }} />
                  <span className="font-bold text-gray-900 dark:text-white">Tier 3</span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  Multi-Step Application
                </div>
                <div className="text-2xl font-bold" style={{ color: TIER3 }}>
                  8 problems
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                  Chains 2-3 ideas; multiple parts
                </div>
              </Card>
              <Card className="p-4 border-l-4" style={{ borderLeftColor: TIER4 }}>
                <div className="flex items-center gap-2 mb-1">
                  <Skull className="w-5 h-5" style={{ color: TIER4 }} />
                  <span className="font-bold text-gray-900 dark:text-white">Tier 4</span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  Final Boss
                </div>
                <div className="text-2xl font-bold" style={{ color: TIER4 }}>
                  4 problems
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                  Cross-topic monsters, 4-5 parts each
                </div>
              </Card>
            </div>

            {/* Coverage map */}
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur rounded-xl p-6 text-left max-w-3xl mx-auto border border-gray-200 dark:border-slate-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-center">
                Topic Coverage (the whole program from A → Z)
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-700 dark:text-gray-200 mb-1">
                    PHY 131 — Physics
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Forces &amp; friction, energy conservation, momentum &amp; impulse, circular
                    motion, rotational kinematics, torque, rotational energy, angular momentum,
                    SHM, waves &amp; Doppler, fluids &amp; Bernoulli.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 dark:text-gray-200 mb-1">
                    ESE 123 — EE / ECE
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Number systems &amp; bitwise, MCU GPIO, DC circuits &amp; nodal analysis,
                    voltage dividers, lab equipment (DMM/scope), op-amps (inverting,
                    non-inverting, difference, transimpedance), ADC theory, USB-C power, SPICE.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 dark:text-gray-200 mb-1">
                    AMS 161 — Calculus II
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Ch 5 Integration (FTC, u-sub, IBP, improper integrals), Ch 6
                    Applications (volumes by disk/shell, average value), Ch 7 Differential
                    Equations (separable, exponential, logistic, Newton cooling), Ch 8
                    Sequences &amp; Series (p-series, Taylor/Maclaurin, error bounds).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== CHEAT SHEET ============================== */}
      <section
        id="cheat-sheet"
        className="py-12 bg-amber-50/70 dark:bg-amber-950/20 border-y-4"
        style={{ borderColor: "#f59e0b" }}
      >
        <div className="container max-w-7xl">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Calculator className="w-7 h-7 text-amber-600 dark:text-amber-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center">
              Formula Cheat Sheet
            </h2>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-2">
            Everything you need to pass the gauntlet — no derivations, just the equations.
          </p>
          <p className="text-center text-xs text-gray-500 dark:text-gray-400 italic mb-8">
            Constants: g = 9.8 m/s² · v_sound = 343 m/s · ρ_water = 1000 kg/m³ · P_atm =
            1.013 × 10⁵ Pa
          </p>

          {/* PHYSICS row */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            <span className="px-2 py-0.5 rounded text-white text-xs mr-2 align-middle" style={{ backgroundColor: "#2563eb" }}>
              PHY 131
            </span>
            Physics
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            <CheatBlock title="Forces & Friction" color={C.forces}>
              <F>F_net = m a</F>
              <F>W = m g</F>
              <F>Incline ⊥: N = m g cos θ</F>
              <F>Incline ∥: F = m g sin θ</F>
              <F>Static: f_s ≤ μ_s · N</F>
              <F>Kinetic: f_k = μ_k · N</F>
              <F>3rd law: action = −reaction (different bodies)</F>
            </CheatBlock>

            <CheatBlock title="Energy & Work" color={C.energy}>
              <F>KE = ½ m v²</F>
              <F>PE_grav = m g h</F>
              <F>PE_spring = ½ k x²</F>
              <F>W = F · d · cos θ</F>
              <F>W_net = ΔKE</F>
              <F>E_i = E_f + W_friction</F>
              <F>P = W/t = F · v</F>
            </CheatBlock>

            <CheatBlock title="Momentum & Impulse" color={C.momentum}>
              <F>p = m v</F>
              <F>J = F · Δt = Δp</F>
              <F>Σ p_before = Σ p_after</F>
              <F>Elastic: KE conserved too</F>
              <F>Perfect inelastic: stick → use p only</F>
              <F>2-body 1D elastic:</F>
              <F>v₁' = ((m₁−m₂)v₁ + 2m₂v₂)/(m₁+m₂)</F>
            </CheatBlock>

            <CheatBlock title="Circular Motion" color={C.circular}>
              <F>a_c = v²/r = ω² r (toward center)</F>
              <F>F_c = m v²/r = m ω² r</F>
              <F>Banked curve: tan θ = v²/(r g)</F>
              <F>Vertical loop top: N + m g = m v²/r</F>
              <F>Min v at loop top: v² = g r</F>
            </CheatBlock>

            <CheatBlock title="Linear Kinematics" color={C.forces}>
              <F>v = v₀ + a t</F>
              <F>x = x₀ + v₀ t + ½ a t²</F>
              <F>v² = v₀² + 2 a Δx</F>
              <F>x = ½ (v₀ + v) t  (avg-velocity form)</F>
              <F>For free-fall: a = −g (taking up positive)</F>
            </CheatBlock>

            <CheatBlock title="Rotational Kinematics" color={C.rotational}>
              <F>v = ω r,  a_t = α r</F>
              <F>ω = ω₀ + α t</F>
              <F>θ = ω₀ t + ½ α t²</F>
              <F>ω² = ω₀² + 2 α θ</F>
              <F>Rolling w/o slip: v_cm = ω r</F>
            </CheatBlock>

            <CheatBlock title="Torque & Moment of Inertia" color={C.rotational}>
              <F>τ = r F sin θ</F>
              <F>τ_net = I α</F>
              <F>I_point = m r²</F>
              <F>I_solid_sphere = (2/5) m r²</F>
              <F>I_disk = ½ m r²</F>
              <F>I_hoop = m r²</F>
              <F>I_rod_center = (1/12) m L²</F>
              <F>I_rod_end = (1/3) m L²</F>
              <F>Parallel axis: I = I_cm + m d²</F>
            </CheatBlock>

            <CheatBlock title="Rotational Energy" color={C.energy}>
              <F>KE_rot = ½ I ω²</F>
              <F>Rolling KE = ½ m v² (1 + I/m r²)</F>
              <F>Solid sphere rolling: KE = (7/10) m v²</F>
              <F>Sphere on incline: a = (5/7) g sin θ</F>
              <F>Hoop on incline: a = ½ g sin θ</F>
              <F>μ_min (rolling sphere) = (2/7) tan θ</F>
            </CheatBlock>

            <CheatBlock title="Angular Momentum" color={C.rotational}>
              <F>L = I ω</F>
              <F>L_point = m v r_⊥ = m v d</F>
              <F>τ_ext = 0 → L conserved</F>
              <F>Collisions on a pivot: use L (not p)</F>
              <F>Skater pulls in: I↓ → ω↑ → KE↑</F>
            </CheatBlock>

            <CheatBlock title="SHM (Springs & Pendulums)" color={C.shm}>
              <F>Spring: ω = √(k/m)</F>
              <F>Simple pendulum: ω = √(g/L)</F>
              <F>Physical pend: ω = √(m g d / I)</F>
              <F>T = 2π/ω,  f = 1/T</F>
              <F>x(t) = A cos(ω t + φ)</F>
              <F>v_max = ω A,  a_max = ω² A</F>
              <F>E_total = ½ k A²</F>
              <F>Damped: A(t) = A₀ exp(−t/2τ),  τ = Q/ω₀</F>
            </CheatBlock>

            <CheatBlock title="Waves & Sound" color={C.waves}>
              <F>v = f λ = ω / k</F>
              <F>v_string = √(T/μ)</F>
              <F>v_sound ≈ 343 m/s (air, 20°C)</F>
              <F>Both ends fixed/open: f_n = n v / (2L)</F>
              <F>Closed–open pipe: f_n = n v / (4L), n odd only</F>
              <F>Doppler: f' = f₀ (v + v_o) / (v − v_s)</F>
              <F>Sign rule: pick so approach raises pitch</F>
              <F>Beats: f_beat = |f₁ − f₂|</F>
            </CheatBlock>

            <CheatBlock title="Fluids · Static + Flow" color={C.fluids}>
              <F>P = P₀ + ρ g h (hydrostatic)</F>
              <F>F_buoy = ρ_fluid · V_disp · g</F>
              <F>Float fraction: V_sub/V = ρ_obj/ρ_fluid</F>
              <F>Continuity: A₁ v₁ = A₂ v₂ = Q</F>
              <F>Q = A · v</F>
              <F>Bernoulli: P + ½ρv² + ρgh = const</F>
              <F>Torricelli: v_exit = √(2 g h)</F>
              <F>Free-fall time: t = √(2H / g)</F>
              <F>Range: d = v · t</F>
            </CheatBlock>

            <CheatBlock title="Universal Constants" color={C.forces}>
              <F>g = 9.8 m/s²</F>
              <F>v_sound = 343 m/s (air, 20°C)</F>
              <F>ρ_water = 1000 kg/m³</F>
              <F>P_atm = 1.013 × 10⁵ Pa ≈ 100 kPa</F>
              <F>1 atm depth ≈ 10 m of water</F>
              <F>1 rev = 2π rad = 360°</F>
              <F>RPM → rad/s: ω = RPM · 2π/60</F>
            </CheatBlock>
          </div>

          {/* EE row */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            <span className="px-2 py-0.5 rounded text-white text-xs mr-2 align-middle" style={{ backgroundColor: "#10b981" }}>
              ESE 123
            </span>
            Electrical &amp; Computer Engineering
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-2">
            <CheatBlock title="Numbers & Bitwise" color={C.bitwise}>
              <F>1 hex digit = 4 bits</F>
              <F>0xA = 1010, 0xF = 1111</F>
              <F>Unsigned: Σ b_i · 2^i</F>
              <F>2's-comp negate: invert + 1</F>
              <F>Range (N bits signed): −2^(N−1) … 2^(N−1) − 1</F>
              <F>{"Set bit n:    x |= (1 << n)"}</F>
              <F>{"Clear bit n:  x &= ~(1 << n)"}</F>
              <F>{"Toggle bit n: x ^= (1 << n)"}</F>
              <F>{"Test bit n:   x & (1 << n)"}</F>
            </CheatBlock>

            <CheatBlock title="DC Circuits" color={C.dc}>
              <F>V = I R (Ohm)</F>
              <F>P = V I = I² R = V² / R</F>
              <F>Series: R_eq = ΣR</F>
              <F>Parallel: 1/R_eq = Σ(1/R)</F>
              <F>Two in ‖: R = R₁R₂/(R₁+R₂)</F>
              <F>V-divider: V_out = V_in · R₂/(R₁+R₂)</F>
              <F>I-divider: I_R₁ = I · R₂/(R₁+R₂)</F>
              <F>KVL: Σ V_loop = 0</F>
              <F>KCL: Σ I_in = Σ I_out</F>
            </CheatBlock>

            <CheatBlock title="Lab Equipment" color={C.dc}>
              <F>Voltmeter: parallel, R ≈ 10 MΩ</F>
              <F>Ammeter: series, R ≈ 0 Ω</F>
              <F>Ω-meter: only on de-energized R</F>
              <F>V_RMS = V_peak / √2 (sine)</F>
              <F>V_pp = 2 V_peak</F>
              <F>Scope: V_div × divs = ΔV</F>
              <F>Func gen: V_pp + DC offset</F>
              <F>Source mode: CV (V-set) vs CC (I-limit)</F>
            </CheatBlock>

            <CheatBlock title="ADC" color={C.adc}>
              <F>LSB = V_ref / 2^N</F>
              <F>code = round(V_in / V_ref · 2^N)</F>
              <F>V = (code / 2^N) · V_ref</F>
              <F>Resolution = range / 2^N</F>
              <F>Nyquist: f_s ≥ 2 · f_max</F>
              <F>Practical: oversample 4–10×</F>
              <F>10-bit @ 3.3V → LSB ≈ 3.22 mV</F>
              <F>12-bit @ 3.3V → LSB ≈ 0.81 mV</F>
            </CheatBlock>

            <CheatBlock title="Op-Amps · Topologies" color={C.opamp}>
              <F>Golden rules: V₊ = V₋,  I_in = 0</F>
              <F>(only valid in negative feedback)</F>
              <F>Inverting: A = −R_f / R_in</F>
              <F>Non-inverting: A = 1 + R_f / R_in</F>
              <F>Difference: V_o = (R_f/R_in)(V₂ − V₁)</F>
              <F>Transimpedance: V_o = −I_in · R_f</F>
              <F>Summing: V_o = −Σ (R_f/R_k) V_k</F>
              <F>Sat: V_out clips ~1 V from rail</F>
              <F>CMRR(dB) = 20 log₁₀(A_diff / A_cm)</F>
            </CheatBlock>

            <CheatBlock title="MCU GPIO (AVR-style)" color={C.mcu}>
              <F>DDRx: 1 = output, 0 = input</F>
              <F>PORTx (out): drives pin level</F>
              <F>PORTx (in): 1 = pullup enabled</F>
              <F>PINx: read pin state</F>
              <F>{"Set: PORTB |= (1 << n)"}</F>
              <F>{"Clear: PORTB &= ~(1 << n)"}</F>
              <F>{"Toggle: PORTB ^= (1 << n)"}</F>
              <F>{"Test: if (PINB & (1 << n)) {...}"}</F>
              <F>Edge detect: compare prev vs current</F>
            </CheatBlock>

            <CheatBlock title="USB-C Power" color={C.usbc}>
              <F>Sink: R_d = 5.1 kΩ pulldown on CC</F>
              <F>Source R_p sets advertised current:</F>
              <F>· 56 kΩ → default USB (500/900 mA)</F>
              <F>· 22 kΩ → 1.5 A @ 5 V</F>
              <F>· 10 kΩ → 3.0 A @ 5 V</F>
              <F>E-marked cable required for &gt; 3 A</F>
              <F>VBUS default = 5 V; PD negotiates higher</F>
            </CheatBlock>

            <CheatBlock title="Network Analysis" color={C.dc}>
              <F>Nodal: pick ground, sum currents at each node = 0</F>
              <F>Mesh: define loop currents, KVL each loop</F>
              <F>(V_a − V_b)/R = I from a to b</F>
              <F>Source can absorb power if V_node &gt; V_source</F>
              <F>Power balance: ΣP_supplied = ΣP_dissipated</F>
            </CheatBlock>
          </div>

          <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4 italic">
            Tip: open this page in a second tab while you work the problems below. Each
            equation here is used somewhere in the 30 questions (math problems use their
            own typeset equations inline — no separate math sheet by request).
          </p>
        </div>
      </section>

      {/* ============================== TIER 1 ============================== */}
      <section className="py-12 bg-white dark:bg-slate-900">
        <div className="container max-w-5xl">
          <TierBadge tier={1} color={TIER1} label="Concept Sanity Check · 1 part each" />
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
            Do you actually know what these mean?
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10">
            Quick conceptual checks. If any of these stall you, that topic needs review before
            moving on.
          </p>

          <div className="space-y-6">
            {/* Q1 — Newton's 3rd Law */}
            <PracticeProblem
              accentColor={C.forces}
              title="Q1 — Newton's Third Law in Action"
              statement={
                <p>
                  <TopicTag color={C.forces}>PHY · Forces</TopicTag>
                  You stand on the floor and push horizontally on a stationary brick wall with a
                  force of 20 N. Identify the action–reaction pair, and explain why the wall
                  doesn't move even though there is a force on it.
                </p>
              }
              parts={[
                {
                  label: "Solution",
                  question: <span>Tap to reveal answer + reasoning</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>Action:</strong> your hand exerts +20 N horizontally on the
                        wall.
                      </p>
                      <p>
                        <strong>Reaction:</strong> the wall exerts −20 N horizontally on your
                        hand. The two forces are equal in magnitude, opposite in direction, and
                        act on <em>different objects</em>.
                      </p>
                      <p>
                        <strong>Why the wall doesn't accelerate:</strong> the +20 N is not the
                        only force on the wall. The wall is bolted/connected to the building
                        frame and the Earth. Static friction at the foundation, plus tension in
                        the wall material, supplies an equal-and-opposite −20 N on the wall, so
                        net force on the wall = 0. The reaction force (−20 N on your hand) is on
                        you, not on the wall — that's why it never cancels the action.
                      </p>
                      <p>
                        <strong>Common trap:</strong> students try to cancel action and reaction
                        against each other. They never can — they live on different free-body
                        diagrams.
                      </p>
                    </div>
                  ),
                  answer: {
                    value: "Pair acts on different objects; the wall's lack of motion is from forces from the Earth, not from the reaction force",
                  },
                },
              ]}
            />

            {/* Q2 — Hex/Bin */}
            <PracticeProblem
              accentColor={C.bitwise}
              title="Q2 — Number-System Conversion"
              statement={
                <p>
                  <TopicTag color={C.bitwise}>EE · Bitwise / Numbers</TopicTag>
                  Convert <strong>0xB7</strong> to: (i) 8-bit binary and (ii) unsigned decimal.
                  Then write its 2's-complement signed-8-bit interpretation.
                </p>
              }
              parts={[
                {
                  label: "Solution",
                  question: <span>Tap to reveal</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>Hex → binary by nibble:</strong> 0xB = 1011, 0x7 = 0111. So
                        0xB7 = <code>1011_0111</code>.
                      </p>
                      <p>
                        <strong>Unsigned decimal:</strong> 1·128 + 0·64 + 1·32 + 1·16 + 0·8 +
                        1·4 + 1·2 + 1·1 = 128 + 32 + 16 + 4 + 2 + 1 = <strong>183</strong>.
                      </p>
                      <p>
                        <strong>Signed 8-bit (2's comp):</strong> top bit = 1 → negative. Invert
                        all bits: 0100_1000 = 72; add 1 → 73. So as signed it's{" "}
                        <strong>−73</strong>.
                      </p>
                      <p>
                        <strong>Sanity check:</strong> 183 + (−73) = 110… wait, the relationship
                        is: unsigned = signed + 256 when signed is negative. 256 − 73 = 183.
                        ✓
                      </p>
                    </div>
                  ),
                  answer: { value: "0b1011_0111 · 183 unsigned · −73 two's-complement" },
                },
              ]}
            />

            {/* Q3 — Centripetal */}
            <PracticeProblem
              accentColor={C.circular}
              title="Q3 — Centripetal Force on a Whirling Ball"
              statement={
                <p>
                  <TopicTag color={C.circular}>PHY · Circular Motion</TopicTag>A 0.50-kg ball on
                  a 0.40-m string is whirled in a horizontal circle at 3.0 m/s. Find (i) the
                  centripetal acceleration, (ii) the magnitude of the net (centripetal) force,
                  and (iii) the direction of that force at any instant.
                </p>
              }
              parts={[
                {
                  label: "Solution",
                  question: <span>Tap to reveal</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>a_c = v²/r = (3.0)² / 0.40 = 9.0/0.40 = 22.5 m/s²</Eq>
                      <Eq>F_c = m · a_c = 0.50 · 22.5 = 11.25 N</Eq>
                      <p>
                        <strong>Direction:</strong> radially inward — toward the center of the
                        circle. The string supplies this force as tension; if you cut the
                        string, the ball flies off tangentially (Newton's 1st law, no more
                        inward force).
                      </p>
                      <p>
                        <strong>Mental anchor:</strong> centripetal isn't a "new" force, it's a
                        label for whatever real force is keeping the object turning (tension,
                        normal, gravity, friction). Always points to the center.
                      </p>
                    </div>
                  ),
                  answer: { value: "a_c = 22.5 m/s² · F = 11.25 N · directed radially inward" },
                },
              ]}
            />

            {/* Q4 — DMM Wiring */}
            <PracticeProblem
              accentColor={C.dc}
              title="Q4 — Multimeter Probe Placement"
              statement={
                <p>
                  <TopicTag color={C.dc}>EE · Lab Equipment</TopicTag>
                  You have a series circuit: 9 V battery → R1 → R2 → R3 → back to battery. You
                  need to (a) measure the voltage across R2, and (b) measure the current
                  flowing through R3. Where do the DMM probes go in each case, and why?
                </p>
              }
              parts={[
                {
                  label: "Solution",
                  question: <span>Tap to reveal</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>(a) Voltage across R2:</strong> set DMM to V; place the two
                        probes across R2 (one on each terminal of R2). The DMM is{" "}
                        <em>in parallel</em> with R2. A voltmeter has very high input
                        impedance (~10 MΩ) so it draws negligible current and doesn't disturb
                        the circuit.
                      </p>
                      <p>
                        <strong>(b) Current through R3:</strong> set DMM to A; <em>break</em>{" "}
                        the circuit at one end of R3 and insert the DMM in series so all the
                        current that was going through R3 now flows through the meter. An
                        ammeter has very low resistance (~Ω or less), so it doesn't drop
                        meaningful voltage.
                      </p>
                      <p>
                        <strong>The killer mistake:</strong> connecting the DMM in current mode
                        across a voltage source. The fuse blows (or the meter blows) because
                        you've created a near-short. This is why current measurements always
                        start with "open the loop."
                      </p>
                    </div>
                  ),
                  answer: {
                    value: "Voltmeter in parallel (high R, doesn't load); ammeter in series (low R, can't be put across a source)",
                  },
                },
              ]}
            />

            {/* Q5 — ADC */}
            <PracticeProblem
              accentColor={C.adc}
              title="Q5 — ADC Resolution and Code"
              statement={
                <p>
                  <TopicTag color={C.adc}>EE · ADC</TopicTag>A 10-bit ADC has Vref = 3.3 V, runs
                  in unipolar mode (0 V → Vref). (i) What is the LSB (one-step voltage)? (ii)
                  What ADC code does an input of exactly 1.65 V produce? (iii) What
                  voltage does code 768 represent?
                </p>
              }
              parts={[
                {
                  label: "Solution",
                  question: <span>Tap to reveal</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>LSB = V_ref / 2^N = 3.3 / 1024 ≈ 3.223 mV</Eq>
                      <Eq>code(1.65 V) = round(1.65 / 3.3 · 1024) = 512</Eq>
                      <p>(1.65 V is mid-scale, so the code is half of full scale.)</p>
                      <Eq>V(code = 768) = 768 / 1024 · 3.3 = 0.75 · 3.3 = 2.475 V</Eq>
                      <p>
                        <strong>Why 1024 not 1023:</strong> the standard convention is{" "}
                        <code>code/2^N · V_ref</code> for the lower edge of each step. The
                        max-code voltage is then <code>(2^N − 1) / 2^N · V_ref</code>, never
                        quite reaching V_ref. Some datasheets define the LSB as{" "}
                        <code>V_ref/(2^N − 1)</code> — read your specific part's datasheet.
                      </p>
                    </div>
                  ),
                  answer: { value: "LSB ≈ 3.22 mV · code = 512 · V(768) = 2.475 V" },
                },
              ]}
            />

            {/* Q6 — SHM */}
            <PracticeProblem
              accentColor={C.shm}
              title="Q6 — Mass on a Spring"
              statement={
                <p>
                  <TopicTag color={C.shm}>PHY · SHM</TopicTag>A 0.40-kg block on a horizontal
                  frictionless surface is attached to a spring with stiffness k = 64 N/m.
                  Find (i) angular frequency ω, (ii) period T, (iii) frequency f, and (iv)
                  the new period if the mass is doubled.
                </p>
              }
              parts={[
                {
                  label: "Solution",
                  question: <span>Tap to reveal</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>ω = √(k/m) = √(64 / 0.40) = √160 ≈ 12.65 rad/s</Eq>
                      <Eq>T = 2π/ω ≈ 6.283 / 12.65 ≈ 0.497 s</Eq>
                      <Eq>f = 1/T ≈ 2.01 Hz</Eq>
                      <p>
                        <strong>Doubling m:</strong> ω' = √(k / 2m) = ω / √2, so T' = T · √2 ≈
                        0.497 · 1.414 ≈ 0.703 s.
                      </p>
                      <p>
                        <strong>Mental anchor:</strong> heavier mass is "lazier" and takes
                        longer to swing back. Stiffer spring is "snappier" and shortens the
                        period. T grows with √m and shrinks with √k.
                      </p>
                    </div>
                  ),
                  answer: {
                    value: "ω ≈ 12.65 rad/s · T ≈ 0.497 s · f ≈ 2.01 Hz · double m → T ≈ 0.703 s",
                  },
                },
              ]}
            />

            {/* Q7 — Math: FTC quick check */}
            <PracticeProblem
              accentColor={C.mathInt}
              title="Q7 — Quick Integration via the FTC"
              statement={
                <div>
                  <p>
                    <TopicTag color={C.mathInt}>MATH · Ch 5 Integration</TopicTag>
                    Two short FTC questions:
                  </p>
                  <p className="mt-2">
                    (i) Evaluate{" "}
                    <InlineMath math="\int_0^2 (3x^2 + 2x)\,dx" />.
                  </p>
                  <p className="mt-1">
                    (ii) Use FTC Part 1 (with the chain rule) to find{" "}
                    <InlineMath math="\dfrac{d}{dx}\!\left[\int_1^{x^2} \dfrac{\sin t}{t}\,dt\right]" />
                    .
                  </p>
                </div>
              }
              parts={[
                {
                  label: "Solution",
                  question: <span>Tap to reveal</span>,
                  solutionSteps: (
                    <div className="space-y-3">
                      <p>
                        <strong>(i) Direct antiderivative + FTC Part 2.</strong> An
                        antiderivative of <InlineMath math="3x^2 + 2x" /> is{" "}
                        <InlineMath math="F(x) = x^3 + x^2" />.
                      </p>
                      <BlockMath math="\int_0^2 (3x^2 + 2x)\,dx = F(2) - F(0) = (8 + 4) - 0 = 12" />
                      <p>
                        <strong>(ii) FTC Part 1 + chain rule.</strong> If{" "}
                        <InlineMath math="g(x) = \int_a^{u(x)} f(t)\,dt" />, then{" "}
                        <InlineMath math="g'(x) = f(u(x))\cdot u'(x)" />. Here{" "}
                        <InlineMath math="f(t) = \sin t / t" />,{" "}
                        <InlineMath math="u(x) = x^2" />,{" "}
                        <InlineMath math="u'(x) = 2x" />.
                      </p>
                      <BlockMath math="\dfrac{d}{dx}\int_1^{x^2}\dfrac{\sin t}{t}\,dt = \dfrac{\sin(x^2)}{x^2}\cdot 2x = \dfrac{2\sin(x^2)}{x}" />
                      <p>
                        <strong>Why it's just the chain rule:</strong> the integral
                        accumulates "area under f" up to whatever its upper limit is.
                        Speed-of-accumulation = f at that point. If the upper limit itself
                        is moving (it's <InlineMath math="x^2" /> not <InlineMath math="x" />
                        ), multiply by the rate at which the upper limit changes —{" "}
                        <InlineMath math="2x" />.
                      </p>
                    </div>
                  ),
                  answer: { value: "(i) 12   ·   (ii) 2 sin(x²)/x" },
                },
              ]}
            />

            {/* Q8 — Math: p-series convergence */}
            <PracticeProblem
              accentColor={C.mathSer}
              title="Q8 — p-Series Convergence Check"
              statement={
                <div>
                  <p>
                    <TopicTag color={C.mathSer}>MATH · Ch 8 Series</TopicTag>
                    For each value of <InlineMath math="p" />, decide whether the series{" "}
                    <InlineMath math="\sum_{n=1}^{\infty} \dfrac{1}{n^p}" /> converges or
                    diverges.
                  </p>
                  <p className="mt-2">
                    (a) <InlineMath math="p = 1/2" /> &nbsp;·&nbsp; (b){" "}
                    <InlineMath math="p = 1" /> &nbsp;·&nbsp; (c){" "}
                    <InlineMath math="p = 3/2" /> &nbsp;·&nbsp; (d){" "}
                    <InlineMath math="p = 2" />.
                  </p>
                </div>
              }
              parts={[
                {
                  label: "Solution",
                  question: <span>Tap to reveal</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        <strong>The p-series rule:</strong>{" "}
                        <InlineMath math="\sum 1/n^p" /> converges iff{" "}
                        <InlineMath math="p > 1" />.
                      </p>
                      <p>
                        (a) <InlineMath math="p = 1/2 \le 1" /> →{" "}
                        <strong>diverges</strong>.
                      </p>
                      <p>
                        (b) <InlineMath math="p = 1" /> →{" "}
                        <strong>diverges</strong> (the harmonic series; classic example
                        showing terms going to zero is necessary but not sufficient).
                      </p>
                      <p>
                        (c) <InlineMath math="p = 3/2 > 1" /> →{" "}
                        <strong>converges</strong>.
                      </p>
                      <p>
                        (d) <InlineMath math="p = 2 > 1" /> →{" "}
                        <strong>converges</strong> (Basel: equals{" "}
                        <InlineMath math="\pi^2/6" />).
                      </p>
                      <p>
                        <strong>Mental anchor:</strong> use the integral test —{" "}
                        <InlineMath math="\int_1^\infty x^{-p}\,dx" /> is finite exactly
                        when <InlineMath math="p > 1" />. The series and the integral live
                        and die together.
                      </p>
                    </div>
                  ),
                  answer: { value: "(a) DIV · (b) DIV · (c) CONV · (d) CONV" },
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ============================== TIER 2 ============================== */}
      <section className="py-12 bg-gray-50 dark:bg-slate-800">
        <div className="container max-w-5xl">
          <TierBadge tier={2} color={TIER2} label="Single-Step Calculations · 2-3 parts" />
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
            One concept, full numerical answer
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10">
            Plug-and-chug, but with the full setup, units, and a sanity check.
          </p>

          <div className="space-y-6">
            {/* Q9 — Block on incline */}
            <PracticeProblem
              accentColor={C.forces}
              title="Q9 — Block Sliding on a Rough Incline"
              statement={
                <p>
                  <TopicTag color={C.forces}>PHY · Forces + Friction</TopicTag>A 5.0-kg block
                  is released from rest on a 30° incline. Coefficient of kinetic friction is
                  μ_k = 0.20. Take g = 9.8 m/s².
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: <span>Find the acceleration of the block down the incline.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Resolve gravity along/perpendicular to the slope:
                      </p>
                      <Eq>F_∥ = m g sin θ = 5.0 · 9.8 · 0.500 = 24.5 N (down the slope)</Eq>
                      <Eq>N = m g cos θ = 5.0 · 9.8 · 0.866 = 42.44 N</Eq>
                      <Eq>f_k = μ_k · N = 0.20 · 42.44 = 8.49 N (up the slope, opposes motion)</Eq>
                      <Eq>F_net = F_∥ − f_k = 24.5 − 8.49 = 16.01 N</Eq>
                      <Eq>a = F_net / m = 16.01 / 5.0 = 3.20 m/s²</Eq>
                    </div>
                  ),
                  answer: { value: "a ≈ 3.20", unit: "m/s² down the slope" },
                },
                {
                  label: "(b)",
                  question: <span>Speed after sliding 2.0 m down the slope.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Constant acceleration kinematics, starting from rest:
                      </p>
                      <Eq>v² = u² + 2 a s = 0 + 2 · 3.20 · 2.0 = 12.8 m²/s²</Eq>
                      <Eq>v ≈ √12.8 ≈ 3.58 m/s</Eq>
                      <p>
                        <strong>Sanity:</strong> if the slope were frictionless, a would be
                        g sin θ = 4.9 m/s², giving v ≈ 4.43 m/s. Friction shaved off about
                        20% — feels right for μ_k = 0.20 on a 30° slope.
                      </p>
                    </div>
                  ),
                  answer: { value: "v ≈ 3.58", unit: "m/s" },
                },
              ]}
            />

            {/* Q10 — Voltage divider */}
            <PracticeProblem
              accentColor={C.dc}
              title="Q10 — Loaded Voltage Divider"
              statement={
                <p>
                  <TopicTag color={C.dc}>EE · DC Circuits</TopicTag>A 12 V source feeds a
                  series chain: R1 = 1.0 kΩ then R2 = 2.0 kΩ to ground. The output voltage is
                  taken across R2.
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: <span>Output voltage Vout (no load attached).</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>V_out = V_in · R2 / (R1 + R2) = 12 · 2.0k / 3.0k = 8.0 V</Eq>
                    </div>
                  ),
                  answer: { value: "Vout = 8.0", unit: "V" },
                },
                {
                  label: "(b)",
                  question: <span>Current drawn from the supply.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>I = V_in / (R1 + R2) = 12 / 3000 = 4.0 mA</Eq>
                    </div>
                  ),
                  answer: { value: "I = 4.0", unit: "mA" },
                },
                {
                  label: "(c)",
                  question: <span>Power dissipated in R2 (and total power delivered).</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>P_R2 = V_out² / R2 = 64 / 2000 = 32 mW</Eq>
                      <Eq>P_total = V_in · I = 12 · 4 mA = 48 mW</Eq>
                      <Eq>P_R1 = 48 − 32 = 16 mW (check: V_R1 = 4 V, P = 16/1000 = 16 mW ✓)</Eq>
                      <p>
                        <strong>Trap:</strong> if you connect a 2 kΩ load in parallel with R2,
                        the lower leg becomes 1 kΩ and Vout drops to 6 V. Always check
                        whether the load is "stiff enough" (R_load ≫ R2) before treating an
                        unloaded divider equation as accurate.
                      </p>
                    </div>
                  ),
                  answer: { value: "P_R2 = 32 mW · P_total = 48 mW" },
                },
              ]}
            />

            {/* Q11 — Drop ball onto spring */}
            <PracticeProblem
              accentColor={C.energy}
              title="Q11 — Ball Dropped onto a Vertical Spring"
              statement={
                <p>
                  <TopicTag color={C.energy}>PHY · Energy Conservation</TopicTag>A 2.0-kg ball
                  is dropped from rest at h = 5.0 m above the top of a vertical spring with
                  k = 2000 N/m. Take g = 9.8 m/s².
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: <span>Speed of the ball just as it touches the spring.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>½ m v² = m g h → v = √(2 g h)</Eq>
                      <Eq>v = √(2 · 9.8 · 5.0) = √98 ≈ 9.90 m/s</Eq>
                    </div>
                  ),
                  answer: { value: "v ≈ 9.90", unit: "m/s" },
                },
                {
                  label: "(b)",
                  question: <span>Maximum spring compression x.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Use total mechanical energy conservation from the drop point to the
                        moment of max compression. The ball falls a distance (h + x) and all
                        that PE converts to elastic PE in the spring (KE = 0 at max
                        compression):
                      </p>
                      <Eq>m g (h + x) = ½ k x²</Eq>
                      <Eq>2 · 9.8 · (5 + x) = ½ · 2000 · x²</Eq>
                      <Eq>1000 x² − 19.6 x − 98 = 0</Eq>
                      <p>Quadratic: x = [19.6 ± √(384 + 392000)] / 2000.</p>
                      <Eq>x = (19.6 + √392384) / 2000 = (19.6 + 626.4) / 2000 ≈ 0.323 m</Eq>
                      <p>
                        <strong>Sanity:</strong> if you'd set ½kx² ≈ mgh (ignoring the small
                        x in mg(h+x)), you'd get x = √(2mgh/k) = √(196/2000) = √0.098 ≈ 0.313
                        m — close, off by ~3%. The full quadratic captures that the ball also
                        loses PE while compressing.
                      </p>
                    </div>
                  ),
                  answer: { value: "x ≈ 0.323", unit: "m" },
                },
              ]}
            />

            {/* Q12 — Series-parallel */}
            <PracticeProblem
              accentColor={C.dc}
              title="Q12 — Series–Parallel Reduction"
              statement={
                <p>
                  <TopicTag color={C.dc}>EE · DC Circuits</TopicTag>From terminals A–B, a 6 Ω
                  resistor sits in series with a parallel combination of 12 Ω and 4 Ω. A
                  9.0 V source is connected across A–B.
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: <span>Equivalent resistance R_eq seen by the source.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>R_∥ = (R_a · R_b) / (R_a + R_b) = (12 · 4) / (12 + 4) = 48/16 = 3 Ω</Eq>
                      <Eq>R_eq = 6 + 3 = 9 Ω</Eq>
                    </div>
                  ),
                  answer: { value: "R_eq = 9", unit: "Ω" },
                },
                {
                  label: "(b)",
                  question: <span>Total current from the source and current through the 4 Ω resistor.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>I_total = V / R_eq = 9 / 9 = 1.0 A</Eq>
                      <p>
                        Voltage across the parallel pair: V_∥ = I · R_∥ = 1.0 · 3 = 3.0 V.
                      </p>
                      <Eq>I_4Ω = V_∥ / 4 = 3 / 4 = 0.75 A</Eq>
                      <Eq>I_12Ω = 3 / 12 = 0.25 A   (check: 0.75 + 0.25 = 1.0 A ✓)</Eq>
                      <p>
                        <strong>Current divider intuition:</strong> the lower resistance gets
                        the bigger share of the current, in proportion to the inverse of R.
                      </p>
                    </div>
                  ),
                  answer: { value: "I_tot = 1.0 A · I_4Ω = 0.75 A · I_12Ω = 0.25 A" },
                },
              ]}
            />

            {/* Q13 — Standing wave */}
            <PracticeProblem
              accentColor={C.waves}
              title="Q13 — Standing Wave on a Guitar String"
              statement={
                <p>
                  <TopicTag color={C.waves}>PHY · Waves</TopicTag>A guitar string of length L =
                  1.20 m, linear density μ = 5.0 × 10⁻³ kg/m, is tensioned to T = 80 N. Both
                  ends are fixed.
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: <span>Wave speed on the string.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>v = √(T / μ) = √(80 / 0.005) = √16000 ≈ 126.5 m/s</Eq>
                    </div>
                  ),
                  answer: { value: "v ≈ 126.5", unit: "m/s" },
                },
                {
                  label: "(b)",
                  question: <span>Fundamental frequency f₁.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Both-ends-fixed means λ_n = 2L/n. Fundamental: λ_1 = 2L = 2.40 m.
                      </p>
                      <Eq>f_1 = v / λ_1 = 126.5 / 2.40 ≈ 52.7 Hz</Eq>
                    </div>
                  ),
                  answer: { value: "f_1 ≈ 52.7", unit: "Hz" },
                },
                {
                  label: "(c)",
                  question: <span>Frequency of the 3rd harmonic.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Harmonics on a fixed-fixed string: f_n = n · f_1.
                      </p>
                      <Eq>f_3 = 3 · 52.7 ≈ 158.1 Hz</Eq>
                      <p>
                        <strong>Mental anchor:</strong> the n=3 mode has 2 nodes between the
                        ends — three half-wavelengths fit in the string. Bigger n = more
                        wiggles = higher frequency.
                      </p>
                    </div>
                  ),
                  answer: { value: "f_3 ≈ 158.1", unit: "Hz" },
                },
              ]}
            />

            {/* Q14 — Op-amp */}
            <PracticeProblem
              accentColor={C.opamp}
              title="Q14 — Non-Inverting Amplifier"
              statement={
                <p>
                  <TopicTag color={C.opamp}>EE · Op-Amps</TopicTag>A non-inverting op-amp has
                  Rf = 10 kΩ (feedback) and R_in = 2.0 kΩ (from the inverting node to ground).
                  Supply rails are ±12 V.
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: <span>Closed-loop voltage gain.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>A_v = 1 + R_f / R_in = 1 + 10/2 = 6</Eq>
                    </div>
                  ),
                  answer: { value: "A_v = 6", unit: "V/V" },
                },
                {
                  label: "(b)",
                  question: <span>Output voltage when V_in = 0.30 V.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>V_out = A_v · V_in = 6 · 0.30 = 1.80 V</Eq>
                    </div>
                  ),
                  answer: { value: "V_out = 1.80", unit: "V" },
                },
                {
                  label: "(c)",
                  question: <span>What happens when V_in = 2.5 V?</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        The math says V_out = 6 · 2.5 = 15 V, but the rails are only ±12 V, so
                        the op-amp <strong>saturates</strong>. For a typical bipolar op-amp the
                        output clips around 1–2 V below the rail (≈ +10.5 to +11 V); a
                        rail-to-rail part will get within tens of mV of the rail. Either way,
                        you've left linear operation. The textbook gain equation no longer
                        applies — the input/output relation is now flat at the rail.
                      </p>
                      <p>
                        <strong>Why this matters:</strong> in real designs you sanity-check by
                        computing V_out and comparing to the rail before trusting the gain
                        formula.
                      </p>
                    </div>
                  ),
                  answer: { value: "Saturates near +V_sat (~ +10.5 to +12 V) — gain formula no longer holds" },
                },
              ]}
            />

            {/* Q15 — Buoyancy */}
            <PracticeProblem
              accentColor={C.fluids}
              title="Q15 — Floating Wood Block"
              statement={
                <p>
                  <TopicTag color={C.fluids}>PHY · Fluids · Buoyancy</TopicTag>A solid wooden
                  block has dimensions 0.20 × 0.20 × 0.30 m and density ρ_wood = 600 kg/m³. It
                  floats in water (ρ_water = 1000 kg/m³) with the 0.30-m side vertical.
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: <span>Mass of the block.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>V = 0.20 · 0.20 · 0.30 = 0.012 m³</Eq>
                      <Eq>m = ρ_wood · V = 600 · 0.012 = 7.20 kg</Eq>
                    </div>
                  ),
                  answer: { value: "m = 7.20", unit: "kg" },
                },
                {
                  label: "(b)",
                  question: <span>Submerged depth d at equilibrium.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Equilibrium: weight = buoyant force. Submerged volume is A · d, where
                        A = 0.04 m² (the 0.20 × 0.20 footprint).
                      </p>
                      <Eq>ρ_water · A · d · g = m · g → d = m / (ρ_water · A)</Eq>
                      <Eq>d = 7.20 / (1000 · 0.04) = 0.180 m</Eq>
                      <p>
                        <strong>Sanity check:</strong> ratio d/H = 0.18/0.30 = 0.60, exactly
                        the density ratio ρ_wood/ρ_water = 600/1000. That's how fraction
                        submerged works for any uniform floating object.
                      </p>
                    </div>
                  ),
                  answer: { value: "d = 0.180", unit: "m" },
                },
                {
                  label: "(c)",
                  question: <span>Mass to add on top to fully submerge the block.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Fully-submerged buoyancy = ρ_water · V · g = 1000 · 0.012 · g = 12 g
                        N. Total weight needed = 12 g N. Already-have weight = 7.2 g N. So
                        add (12 − 7.2) = 4.8 kg.
                      </p>
                      <Eq>m_add = (ρ_water − ρ_wood) · V = 400 · 0.012 = 4.80 kg</Eq>
                    </div>
                  ),
                  answer: { value: "m_add = 4.80", unit: "kg" },
                },
              ]}
            />

            {/* Q16 — GPIO bit ops */}
            <PracticeProblem
              accentColor={C.mcu}
              title="Q16 — GPIO Bit Manipulation in C"
              statement={
                <p>
                  <TopicTag color={C.mcu}>EE · MCU I/O</TopicTag>
                  PORTB is an 8-bit register that controls 8 LEDs (LED7…LED0). Write the
                  one-line C expression for each operation, without disturbing the other bits.
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: <span>Set bit 3 (turn on LED3).</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>{"PORTB |= (1 << 3);"}</Eq>
                      <p>
                        OR with a mask whose only 1 is at bit 3. Bits already set stay set,
                        bits that were 0 stay 0 — only bit 3 is forced to 1.
                      </p>
                    </div>
                  ),
                  answer: { value: "PORTB |= (1 << 3);" },
                },
                {
                  label: "(b)",
                  question: <span>Clear bit 5 (turn off LED5).</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>{"PORTB &= ~(1 << 5);"}</Eq>
                      <p>
                        AND with a mask that's all 1s except a 0 at bit 5. Other bits are
                        ANDed with 1 (unchanged); bit 5 is ANDed with 0 (forced to 0).
                      </p>
                    </div>
                  ),
                  answer: { value: "PORTB &= ~(1 << 5);" },
                },
                {
                  label: "(c)",
                  question: <span>Toggle bit 0 (flip LED0).</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>{"PORTB ^= (1 << 0);"}</Eq>
                      <p>
                        XOR with 1 flips a bit; XOR with 0 leaves it. So a mask with a single
                        1 toggles only that bit.
                      </p>
                    </div>
                  ),
                  answer: { value: "PORTB ^= (1 << 0);" },
                },
                {
                  label: "(d)",
                  question: <span>Test if bit 7 is set (returns 0 or non-zero).</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>{"(PORTB & (1 << 7))"}</Eq>
                      <p>
                        Or as a clean 0-or-1: <code>(PORTB &gt;&gt; 7) &amp; 1</code>. The
                        first form returns 0x80 if set, 0 if not — both are fine in an{" "}
                        <code>if(...)</code> condition because non-zero = true.
                      </p>
                    </div>
                  ),
                  answer: { value: "if (PORTB & (1 << 7)) { ... }" },
                },
              ]}
            />

            {/* Q17 — Math: u-substitution */}
            <PracticeProblem
              accentColor={C.mathInt}
              title="Q17 — u-Substitution on a Definite Integral"
              statement={
                <div>
                  <p>
                    <TopicTag color={C.mathInt}>MATH · Ch 5 Integration</TopicTag>
                    Evaluate{" "}
                    <InlineMath math="\int_0^{1} 3x^2\, e^{x^3}\,dx" />.
                  </p>
                </div>
              }
              parts={[
                {
                  label: "(a)",
                  question: <span>Carry out the substitution and find the exact value.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Let <InlineMath math="u = x^3" />. Then{" "}
                        <InlineMath math="du = 3x^2\,dx" /> — exactly the leftover factor
                        sitting in front of the exponential.
                      </p>
                      <p>Transform the bounds with the substitution:</p>
                      <BlockMath math="x = 0 \Rightarrow u = 0;\quad x = 1 \Rightarrow u = 1" />
                      <BlockMath math="\int_0^1 3x^2\, e^{x^3}\,dx \;=\; \int_0^1 e^{u}\,du \;=\; e^{u}\Big|_0^1 \;=\; e - 1" />
                      <p>
                        Numerically <InlineMath math="e - 1 \approx 1.71828" />.
                      </p>
                    </div>
                  ),
                  answer: { value: "e − 1 ≈ 1.71828" },
                },
                {
                  label: "(b)",
                  question: <span>Why was u-substitution the right tool here?</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        u-sub is the chain rule, run backward. The integrand has the
                        form <InlineMath math="g'(x)\, f(g(x))" /> with{" "}
                        <InlineMath math="g(x) = x^3" /> and{" "}
                        <InlineMath math="f(u) = e^u" />. The derivative{" "}
                        <InlineMath math="g'(x) = 3x^2" /> is sitting <em>right there</em>{" "}
                        as a factor — a "free du." Whenever you see a function and its
                        derivative both present (up to a constant), u-sub will collapse it.
                      </p>
                      <p>
                        <strong>Trap to avoid:</strong> changing variable but forgetting
                        to also change the limits. If you keep <InlineMath math="x" />{" "}
                        bounds while integrating in <InlineMath math="u" />, you'll get a
                        wrong number every time.
                      </p>
                    </div>
                  ),
                  answer: { value: "Integrand is g'(x)·f(g(x)); recognize chain rule and reverse it" },
                },
              ]}
            />

            {/* Q18 — Math: disk method volume */}
            <PracticeProblem
              accentColor={C.mathApp}
              title="Q18 — Solid of Revolution by the Disk Method"
              statement={
                <div>
                  <p>
                    <TopicTag color={C.mathApp}>MATH · Ch 6 Applications</TopicTag>
                    The region bounded by <InlineMath math="y = x^2" />,{" "}
                    <InlineMath math="y = 0" />, <InlineMath math="x = 0" />, and{" "}
                    <InlineMath math="x = 2" /> is rotated around the x-axis. Find the
                    volume of the resulting solid.
                  </p>
                </div>
              }
              parts={[
                {
                  label: "(a)",
                  question: <span>Set up the disk-method integral and evaluate it.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Slice perpendicular to the axis of rotation (vertical strips, axis
                        = x-axis). Each thin disk at position{" "}
                        <InlineMath math="x" /> has radius{" "}
                        <InlineMath math="r(x) = y = x^2" /> and thickness{" "}
                        <InlineMath math="dx" />, contributing area{" "}
                        <InlineMath math="\pi r^2" />:
                      </p>
                      <BlockMath math="V = \int_0^2 \pi\,[r(x)]^2\,dx = \pi\int_0^2 (x^2)^2\,dx = \pi\int_0^2 x^4\,dx" />
                      <BlockMath math="V = \pi\,\Bigl[\tfrac{x^5}{5}\Bigr]_0^{2} = \pi\cdot\tfrac{32}{5} = \tfrac{32\pi}{5} \approx 20.11" />
                    </div>
                  ),
                  answer: { value: "V = 32π/5 ≈ 20.11", unit: "(units³)" },
                },
                {
                  label: "(b)",
                  question: (
                    <span>
                      Now imagine the same region is rotated about the <em>y-axis</em>{" "}
                      instead. Which method is cleaner — disk or shell?
                    </span>
                  ),
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        About the y-axis, vertical strips become tall <em>shells</em>{" "}
                        (cylindrical sleeves) at radius <InlineMath math="x" />, height{" "}
                        <InlineMath math="y = x^2" />, thickness{" "}
                        <InlineMath math="dx" />. Each shell contributes{" "}
                        <InlineMath math="2\pi x\cdot x^2\,dx = 2\pi x^3\,dx" />:
                      </p>
                      <BlockMath math="V = \int_0^2 2\pi x \cdot x^2\,dx = 2\pi\int_0^2 x^3\,dx = 2\pi\cdot\tfrac{16}{4} = 8\pi \approx 25.13" />
                      <p>
                        <strong>Why shells beat disks here:</strong> if you used disks
                        about the y-axis, you'd need to express things in terms of{" "}
                        <InlineMath math="y" /> (with{" "}
                        <InlineMath math="x = \sqrt{y}" />), <em>and</em> handle the gap
                        from <InlineMath math="x = 2" /> to{" "}
                        <InlineMath math="x = \sqrt{y}" /> as a washer. Shells are
                        natural when strips run parallel to the axis of rotation.
                      </p>
                    </div>
                  ),
                  answer: { value: "Shells are cleaner: V = 8π ≈ 25.13" },
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ============================== TIER 3 ============================== */}
      <section className="py-12 bg-white dark:bg-slate-900">
        <div className="container max-w-5xl">
          <TierBadge tier={3} color={TIER3} label="Multi-Step Application · 3 parts each" />
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
            Chain ideas together
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10">
            Each problem strings two or three concepts. The answers depend on each other.
          </p>

          <div className="space-y-6">
            {/* Q19 — Roller-coaster loop */}
            <PracticeProblem
              accentColor={C.energy}
              title="Q19 — Roller-Coaster Loop with Friction"
              statement={
                <p>
                  <TopicTag color={C.energy}>PHY · Energy + Circular</TopicTag>A 60-kg cart
                  starts from rest at a height h above the bottom of a vertical loop of radius
                  r = 5.0 m. Friction along the entire path (length ≈ h + π r) does negative
                  work equal to 0.10 × m g × (path length). Take g = 9.8 m/s².
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: (
                    <span>
                      Minimum h so the cart maintains contact at the very top of the loop.
                    </span>
                  ),
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        At the top, the minimum-contact condition is normal force N = 0, so
                        gravity alone supplies the centripetal force:
                      </p>
                      <Eq>m g = m v_top² / r → v_top² = g r</Eq>
                      <p>
                        Energy conservation from start to top (drop = h, top of loop is at
                        height 2r):
                      </p>
                      <Eq>m g h = ½ m v_top² + m g (2r) + W_friction</Eq>
                      <Eq>W_friction = 0.10 m g (h + π r)</Eq>
                      <p>
                        Substitute and simplify (mass cancels):
                      </p>
                      <Eq>h = ½ r + 2r + 0.10 (h + π r)</Eq>
                      <Eq>h (1 − 0.10) = 2.5 r + 0.10 π r = 2.5 · 5 + 0.10 · π · 5 ≈ 12.5 + 1.57</Eq>
                      <Eq>h_min = 14.07 / 0.90 ≈ 15.6 m</Eq>
                    </div>
                  ),
                  answer: { value: "h_min ≈ 15.6", unit: "m" },
                },
                {
                  label: "(b)",
                  question: <span>Speed at the top of the loop when h = 20 m.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>m g h − 0.10 m g (h + π r) = ½ m v² + m g (2r)</Eq>
                      <Eq>0.90 m g h − 0.10 m g π r = ½ m v² + 2 m g r</Eq>
                      <p>Plug in h = 20 m, r = 5 m, divide by m:</p>
                      <Eq>0.90 · 9.8 · 20 − 0.10 · 9.8 · π · 5 = 0.5 v² + 2 · 9.8 · 5</Eq>
                      <Eq>176.4 − 15.39 = 0.5 v² + 98 → 161.0 = 0.5 v² + 98</Eq>
                      <Eq>0.5 v² = 63.0 → v² = 126.0 → v ≈ 11.22 m/s</Eq>
                    </div>
                  ),
                  answer: { value: "v_top ≈ 11.2", unit: "m/s" },
                },
                {
                  label: "(c)",
                  question: <span>Normal force on the rider at the top of the loop.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        At the top of the loop, both gravity and the track's normal force
                        point downward (toward the center), so they sum to provide
                        centripetal force:
                      </p>
                      <Eq>N + m g = m v² / r → N = m v² / r − m g</Eq>
                      <Eq>N = 60 · 126 / 5 − 60 · 9.8 = 1512 − 588 = 924 N</Eq>
                      <p>
                        That's about 1.57 g extra — rider feels about 1.57× their normal
                        weight pushed against the seat at the top, in addition to feeling
                        upside-down.
                      </p>
                    </div>
                  ),
                  answer: { value: "N ≈ 924", unit: "N (≈ 1.57 g extra)" },
                },
              ]}
            />

            {/* Q20 — Two-source nodal */}
            <PracticeProblem
              accentColor={C.dc}
              title="Q20 — Two-Source Nodal Analysis"
              statement={
                <p>
                  <TopicTag color={C.dc}>EE · DC Networks</TopicTag>Two voltage sources share
                  a common ground. V₁ = 12 V (left) connects through R₁ = 2.0 Ω to a single
                  node A. V₂ = 6.0 V (right) connects through R₃ = 2.0 Ω to the same node A.
                  Node A also has R₂ = 4.0 Ω to ground.
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: <span>Voltage at node A using KCL.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Sum currents entering node A (taking each "in" if the source is
                        higher than V_A):
                      </p>
                      <Eq>(V₁ − V_A)/R₁ + (V₂ − V_A)/R₃ − V_A/R₂ = 0</Eq>
                      <Eq>(12 − V_A)/2 + (6 − V_A)/2 − V_A/4 = 0</Eq>
                      <Eq>6 − 0.5 V_A + 3 − 0.5 V_A − 0.25 V_A = 0</Eq>
                      <Eq>9 − 1.25 V_A = 0 → V_A = 7.20 V</Eq>
                    </div>
                  ),
                  answer: { value: "V_A = 7.20", unit: "V" },
                },
                {
                  label: "(b)",
                  question: <span>Currents in all three resistors and direction in R₃.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>I_R₁ = (12 − 7.2) / 2 = 2.40 A   (V₁ → A)</Eq>
                      <Eq>I_R₃ = (6 − 7.2) / 2 = −0.60 A   (so really 0.60 A from A → V₂)</Eq>
                      <Eq>I_R₂ = 7.2 / 4 = 1.80 A   (A → ground)</Eq>
                      <Eq>Check KCL: 2.40 + (−0.60) − 1.80 = 0 ✓</Eq>
                      <p>
                        <strong>Notice:</strong> R₃ current is reversed because V_A &gt; V₂.
                        The smaller source actually <em>absorbs</em> current — V₁ is supplying
                        both R₂ and "back-charging" V₂ through R₃.
                      </p>
                    </div>
                  ),
                  answer: { value: "R₁: 2.40 A in · R₂: 1.80 A out · R₃: 0.60 A out (toward V₂)" },
                },
                {
                  label: "(c)",
                  question: <span>Power dissipated in R₂ and check power balance.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>P_R₂ = V_A² / R₂ = 7.20² / 4 = 51.84 / 4 = 12.96 W</Eq>
                      <Eq>P_R₁ = I² R = 2.40² · 2 = 11.52 W</Eq>
                      <Eq>P_R₃ = 0.60² · 2 = 0.72 W</Eq>
                      <Eq>P_V₁_supplied = 12 · 2.40 = 28.80 W</Eq>
                      <Eq>P_V₂_absorbed = 6 · 0.60 = 3.60 W (charging)</Eq>
                      <Eq>Balance: 28.80 = 12.96 + 11.52 + 0.72 + 3.60 = 28.80 ✓</Eq>
                    </div>
                  ),
                  answer: { value: "P_R₂ = 12.96 W (rest of network balances exactly)" },
                },
              ]}
            />

            {/* Q21 — Rolling sphere */}
            <PracticeProblem
              accentColor={C.rotational}
              title="Q21 — Solid Sphere Rolling Down an Incline"
              statement={
                <p>
                  <TopicTag color={C.rotational}>PHY · Rotational Energy</TopicTag>A solid
                  sphere (m = 0.50 kg, r = 0.05 m) rolls without slipping down a 30° incline,
                  starting from rest. It descends a vertical drop of h = 2.0 m by the time it
                  reaches the bottom. I_solid_sphere = (2/5) m r².
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: <span>Translational speed at the bottom (use energy conservation).</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Total KE = translational + rotational. With rolling without slip, ω =
                        v/r:
                      </p>
                      <Eq>m g h = ½ m v² + ½ I ω² = ½ m v² + ½ · (2/5)mr² · (v/r)²</Eq>
                      <Eq>m g h = ½ m v² (1 + 2/5) = (7/10) m v²</Eq>
                      <Eq>v² = (10/7) g h = (10/7) · 9.8 · 2.0 = 28.0 → v ≈ 5.29 m/s</Eq>
                    </div>
                  ),
                  answer: { value: "v ≈ 5.29", unit: "m/s" },
                },
                {
                  label: "(b)",
                  question: <span>Linear acceleration along the slope.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        For a rolling solid sphere on an incline, force-and-torque analysis
                        (or equivalently using the constant-acceleration kinematics) gives:
                      </p>
                      <Eq>a = (5/7) g sin θ = (5/7) · 9.8 · 0.5 = 3.50 m/s²</Eq>
                      <p>
                        Compared to a frictionless slide (a = g sin θ = 4.9 m/s²), rolling
                        reduces the linear acceleration by 5/7 because some of the available
                        energy goes into spin-up.
                      </p>
                    </div>
                  ),
                  answer: { value: "a ≈ 3.50", unit: "m/s²" },
                },
                {
                  label: "(c)",
                  question: <span>Minimum coefficient of static friction needed to roll without slipping.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Static friction at the contact provides the torque that spins the ball
                        up. From the force/torque equations:
                      </p>
                      <Eq>f = (2/7) m g sin θ</Eq>
                      <Eq>N = m g cos θ</Eq>
                      <Eq>μ_min = f / N = (2/7) tan θ = (2/7) · tan 30° ≈ (2/7) · 0.577 ≈ 0.165</Eq>
                      <p>
                        <strong>Sanity:</strong> a steeper slope demands more friction (tan θ
                        grows). Below μ_min, the ball slides faster than it rolls — slipping.
                      </p>
                    </div>
                  ),
                  answer: { value: "μ_min ≈ 0.165" },
                },
              ]}
            />

            {/* Q22 — Difference amp */}
            <PracticeProblem
              accentColor={C.opamp}
              title="Q22 — Difference Amplifier with Resistor Mismatch"
              statement={
                <p>
                  <TopicTag color={C.opamp}>EE · Op-Amps</TopicTag>A standard subtractor:
                  V₁ → R₁ = 10 kΩ to V⁻; R_f = 100 kΩ from V⁻ to V_out; V₂ → R₂ = 10 kΩ to V⁺;
                  R₃ from V⁺ to ground. Designed so R₁/R_f = R₂/R₃ → V_out =
                  (R_f/R₁)(V₂ − V₁).
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: (
                    <span>
                      With matched R₃ = 100 kΩ, find V_out for V₁ = 2.50 V, V₂ = 2.40 V.
                    </span>
                  ),
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>A_diff = R_f / R₁ = 100/10 = 10</Eq>
                      <Eq>V_out = 10 · (V₂ − V₁) = 10 · (2.40 − 2.50) = 10 · (−0.10) = −1.00 V</Eq>
                    </div>
                  ),
                  answer: { value: "V_out = −1.00", unit: "V" },
                },
                {
                  label: "(b)",
                  question: (
                    <span>
                      Now R₃ is mistuned to 99 kΩ (1% low). Recompute V_out for the same
                      inputs.
                    </span>
                  ),
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        V⁺ side is a divider from V₂ to ground:
                      </p>
                      <Eq>V⁺ = V₂ · R₃/(R₂ + R₃) = 2.40 · 99/109 ≈ 2.1798 V</Eq>
                      <p>
                        Op-amp keeps V⁻ = V⁺ = 2.1798 V (negative feedback). KCL at V⁻ node:
                      </p>
                      <Eq>(V₁ − V⁻)/R₁ = (V⁻ − V_out)/R_f</Eq>
                      <Eq>(2.50 − 2.1798)/10k = (2.1798 − V_out)/100k</Eq>
                      <Eq>0.3202 · 10 = 2.1798 − V_out → V_out = 2.1798 − 3.202 = −1.022 V</Eq>
                      <p>
                        So a 1% R-mismatch produced a 2.2% error on a 100-mV differential
                        signal that's riding on a 2.45-V common-mode level.
                      </p>
                    </div>
                  ),
                  answer: { value: "V_out ≈ −1.022 V (≈ 2.2% error from 1% mismatch)" },
                },
                {
                  label: "(c)",
                  question: (
                    <span>
                      What CMRR (in dB) is required to keep common-mode error below 1 mV
                      when V_cm = 5.0 V at the inputs?
                    </span>
                  ),
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>A_cm,max = 1 mV / 5 V = 2 × 10⁻⁴</Eq>
                      <Eq>CMRR = A_diff / A_cm = 10 / (2 × 10⁻⁴) = 5 × 10⁴</Eq>
                      <Eq>CMRR(dB) = 20 log₁₀(5 × 10⁴) ≈ 94 dB</Eq>
                      <p>
                        <strong>Implication:</strong> for sub-mV precision with ±5 V common
                        mode, you need either tightly-matched (0.01%) resistors or an
                        instrumentation amplifier IC with built-in CMRR &gt; 100 dB.
                      </p>
                    </div>
                  ),
                  answer: { value: "CMRR ≈ 94 dB (≈ 50,000 V/V)" },
                },
              ]}
            />

            {/* Q23 — Doppler */}
            <PracticeProblem
              accentColor={C.waves}
              title="Q23 — Doppler Effect, Three Cases"
              statement={
                <p>
                  <TopicTag color={C.waves}>PHY · Doppler</TopicTag>A train horn emits f₀ =
                  440 Hz. Speed of sound v = 343 m/s.
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: (
                    <span>
                      Frequency heard by a stationary observer while the train approaches at
                      v_s = 20 m/s.
                    </span>
                  ),
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Source approaching → wavelengths in front are compressed → observer
                        hears higher pitch:
                      </p>
                      <Eq>f' = f₀ · v / (v − v_s) = 440 · 343 / (343 − 20) = 440 · 343/323</Eq>
                      <Eq>f' ≈ 467.2 Hz</Eq>
                    </div>
                  ),
                  answer: { value: "f' ≈ 467.2", unit: "Hz" },
                },
                {
                  label: "(b)",
                  question: (
                    <span>
                      Frequency heard after the train passes and recedes at v_s = 20 m/s.
                    </span>
                  ),
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>f' = f₀ · v / (v + v_s) = 440 · 343/363 ≈ 415.8 Hz</Eq>
                      <p>
                        The "shift down" is a bit smaller than the shift up (467.2 − 440 = 27.2
                        vs 440 − 415.8 = 24.2) because the formula is asymmetric in v_s.
                      </p>
                    </div>
                  ),
                  answer: { value: "f' ≈ 415.8", unit: "Hz" },
                },
                {
                  label: "(c)",
                  question: (
                    <span>
                      Frequency heard when both the train approaches at 20 m/s and the observer
                      walks toward the train at 5 m/s.
                    </span>
                  ),
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Both approaching → both effects raise pitch. Observer moves toward
                        source: +v_o in numerator. Source moves toward observer: −v_s in
                        denominator.
                      </p>
                      <Eq>f' = f₀ · (v + v_o) / (v − v_s) = 440 · (343 + 5)/(343 − 20)</Eq>
                      <Eq>f' = 440 · 348/323 ≈ 474.0 Hz</Eq>
                      <p>
                        <strong>Sign rule (no memorization):</strong> pick the signs so the
                        pitch goes up when they approach. Observer toward source ⇒ numerator
                        gets bigger; source toward observer ⇒ denominator gets smaller. Both
                        raise f'. Done.
                      </p>
                    </div>
                  ),
                  answer: { value: "f' ≈ 474.0", unit: "Hz" },
                },
              ]}
            />

            {/* Q24 — Sensor → ADC chain */}
            <PracticeProblem
              accentColor={C.adc}
              title="Q24 — Thermocouple → Op-Amp → ADC"
              statement={
                <p>
                  <TopicTag color={C.adc}>EE · Cross-Topic (Op-Amp + ADC)</TopicTag>A K-type
                  thermocouple produces 41 µV/°C. You need to read 0–200 °C with a 10-bit ADC
                  (V_ref = 3.3 V, 0 V → V_ref). Assume zero offset (cold junction at 0 °C).
                </p>
              }
              parts={[
                {
                  label: "(a)",
                  question: <span>Sensor output range over 0–200 °C, and required op-amp gain to span 0 → 3.3 V.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>V_sensor,max = 41 µV/°C · 200 °C = 8.20 mV</Eq>
                      <Eq>Gain = V_ref / V_sensor,max = 3.3 / 0.00820 ≈ 402</Eq>
                      <p>
                        Use a non-inverting amp with A = 1 + R_f/R_in = 402, e.g.
                        R_in = 1.0 kΩ, R_f = 401 kΩ (use 402 kΩ from the standard E96
                        series).
                      </p>
                    </div>
                  ),
                  answer: { value: "V_in: 0 to 8.2 mV · gain ≈ 402" },
                },
                {
                  label: "(b)",
                  question: <span>ADC code at T = 100 °C.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>V_sensor(100) = 4.10 mV</Eq>
                      <Eq>V_amp = 4.10 mV · 402 = 1.65 V</Eq>
                      <Eq>code = round(1.65 / 3.3 · 1024) = 512</Eq>
                      <p>(Mid-temperature → mid-scale, as expected.)</p>
                    </div>
                  ),
                  answer: { value: "code = 512" },
                },
                {
                  label: "(c)",
                  question: <span>Temperature resolution (°C per LSB).</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>LSB_voltage = 3.3 / 1024 ≈ 3.223 mV at the ADC input</Eq>
                      <Eq>LSB_at_sensor = 3.223 mV / 402 ≈ 8.02 µV</Eq>
                      <Eq>resolution = 8.02 µV / (41 µV/°C) ≈ 0.196 °C / LSB</Eq>
                      <p>
                        <strong>Sanity:</strong> 200 °C / 1024 codes ≈ 0.195 °C/code — same
                        answer from the other direction. The pipeline mapped your range onto
                        the full ADC span, so resolution is just (range)/(2^N).
                      </p>
                    </div>
                  ),
                  answer: { value: "≈ 0.20 °C / LSB" },
                },
              ]}
            />

            {/* Q25 — Math: Logistic ODE */}
            <PracticeProblem
              accentColor={C.mathDE}
              title="Q25 — Logistic Population Model"
              statement={
                <div>
                  <p>
                    <TopicTag color={C.mathDE}>MATH · Ch 7 Differential Eqs</TopicTag>
                    A bacterial population grows logistically with carrying capacity{" "}
                    <InlineMath math="M = 1000" />:
                  </p>
                  <BlockMath math="\dfrac{dP}{dt} = 0.3\, P\!\left(1 - \dfrac{P}{1000}\right),\quad P(0) = 100." />
                </div>
              }
              parts={[
                {
                  label: "(a)",
                  question: <span>Identify equilibrium populations and their stability.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Equilibria: <InlineMath math="dP/dt = 0" /> when{" "}
                        <InlineMath math="P = 0" /> or <InlineMath math="P = 1000" />.
                      </p>
                      <p>
                        <strong>Stability:</strong> sketch the phase line. For{" "}
                        <InlineMath math="0 < P < 1000" />, both factors are positive, so{" "}
                        <InlineMath math="dP/dt > 0" /> (growth). For{" "}
                        <InlineMath math="P > 1000" />, the second factor is negative, so{" "}
                        <InlineMath math="dP/dt < 0" /> (decay).
                      </p>
                      <p>
                        Therefore <InlineMath math="P = 0" /> is <strong>unstable</strong>{" "}
                        (small populations grow away) and{" "}
                        <InlineMath math="P = M = 1000" /> is <strong>stable</strong>{" "}
                        (perturbations on either side return to it).
                      </p>
                    </div>
                  ),
                  answer: { value: "P = 0 (unstable); P = 1000 (stable)" },
                },
                {
                  label: "(b)",
                  question: <span>Solve for P(t) explicitly.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        The logistic ODE has the standard solution form:
                      </p>
                      <BlockMath math="P(t) = \dfrac{M}{1 + A\, e^{-kt}}" />
                      <p>
                        With <InlineMath math="M = 1000" />,{" "}
                        <InlineMath math="k = 0.3" />, fit{" "}
                        <InlineMath math="A" /> from the initial condition{" "}
                        <InlineMath math="P(0) = 100" />:
                      </p>
                      <BlockMath math="100 = \dfrac{1000}{1 + A} \Rightarrow A = 9" />
                      <BlockMath math="\boxed{P(t) = \dfrac{1000}{1 + 9\, e^{-0.3\, t}}}" />
                      <p>
                        <strong>Sanity:</strong> as <InlineMath math="t \to \infty" />,{" "}
                        <InlineMath math="e^{-0.3 t} \to 0" />, so{" "}
                        <InlineMath math="P \to 1000" /> — matches the carrying capacity.
                        At <InlineMath math="t = 0" />, denominator is{" "}
                        <InlineMath math="1 + 9 = 10" />, so{" "}
                        <InlineMath math="P = 100" />. ✓
                      </p>
                    </div>
                  ),
                  answer: { value: "P(t) = 1000 / (1 + 9 e^(−0.3 t))" },
                },
                {
                  label: "(c)",
                  question: <span>When does the population reach 500 (half capacity)?</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <BlockMath math="\dfrac{1000}{1 + 9\, e^{-0.3 t}} = 500 \;\Rightarrow\; 1 + 9\, e^{-0.3 t} = 2" />
                      <BlockMath math="9\, e^{-0.3 t} = 1 \Rightarrow e^{-0.3 t} = \tfrac{1}{9}" />
                      <BlockMath math="t = \dfrac{\ln 9}{0.3} \approx \dfrac{2.197}{0.3} \approx 7.32" />
                      <p>
                        <strong>Why this matters:</strong>{" "}
                        <InlineMath math="P = M/2" /> is the inflection point — growth
                        speed is maximum there, then it slows as the population
                        approaches the ceiling.
                      </p>
                    </div>
                  ),
                  answer: { value: "t ≈ 7.32 time units" },
                },
              ]}
            />

            {/* Q26 — Math: IBP + improper integral */}
            <PracticeProblem
              accentColor={C.mathInt}
              title="Q26 — Integration by Parts on an Improper Integral"
              statement={
                <div>
                  <p>
                    <TopicTag color={C.mathInt}>MATH · Ch 5 Integration</TopicTag>
                    Evaluate{" "}
                    <InlineMath math="\displaystyle\int_0^{\infty} x\, e^{-2x}\,dx" />{" "}
                    using integration by parts. Justify why the boundary term at infinity
                    vanishes.
                  </p>
                </div>
              }
              parts={[
                {
                  label: "(a)",
                  question: <span>Set up IBP and find the antiderivative.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        LIATE picks <InlineMath math="u = x" /> (Algebraic) and{" "}
                        <InlineMath math="dv = e^{-2x}\,dx" /> (Exponential):
                      </p>
                      <BlockMath math="u = x,\quad du = dx,\quad dv = e^{-2x}\,dx,\quad v = -\tfrac{1}{2} e^{-2x}" />
                      <BlockMath math="\int x\, e^{-2x}\,dx = uv - \int v\,du = -\tfrac{x}{2} e^{-2x} + \tfrac{1}{2}\int e^{-2x}\,dx" />
                      <BlockMath math="= -\tfrac{x}{2} e^{-2x} - \tfrac{1}{4} e^{-2x} + C" />
                    </div>
                  ),
                  answer: { value: "F(x) = −x e^(−2x)/2 − e^(−2x)/4 + C" },
                },
                {
                  label: "(b)",
                  question: <span>Evaluate the improper integral as a limit.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <BlockMath math="\int_0^\infty x\, e^{-2x}\,dx = \lim_{b\to\infty}\!\Bigl[-\tfrac{x}{2}e^{-2x} - \tfrac{1}{4}e^{-2x}\Bigr]_0^{b}" />
                      <BlockMath math="= \lim_{b\to\infty}\!\left(-\tfrac{b}{2}e^{-2b} - \tfrac{1}{4}e^{-2b}\right) - \left(0 - \tfrac{1}{4}\right)" />
                      <BlockMath math="= 0 - 0 + \tfrac{1}{4} = \boxed{\tfrac{1}{4}}" />
                    </div>
                  ),
                  answer: { value: "1/4" },
                },
                {
                  label: "(c)",
                  question: <span>Why does b · e^(−2b) → 0 as b → ∞?</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Exponential decay always beats polynomial growth at infinity.
                        Formally, by L'Hôpital:
                      </p>
                      <BlockMath math="\lim_{b\to\infty}\dfrac{b}{e^{2b}} \;\stackrel{H}{=}\; \lim_{b\to\infty}\dfrac{1}{2 e^{2b}} = 0" />
                      <p>
                        <strong>Mental anchor:</strong> as long as you have any positive
                        exponential decay, every polynomial multiplier eventually loses.
                        That's why integrals like this converge and probabilistic
                        distributions like the Gamma distribution have well-defined moments.
                      </p>
                      <p>
                        <strong>Cross-check:</strong> the gamma-function identity{" "}
                        <InlineMath math="\int_0^\infty x^n e^{-ax}\,dx = \tfrac{n!}{a^{n+1}}" />
                        {" "}gives, for <InlineMath math="n = 1, a = 2" />,{" "}
                        <InlineMath math="\tfrac{1!}{2^2} = \tfrac{1}{4}" />. ✓
                      </p>
                    </div>
                  ),
                  answer: { value: "Exponential decay dominates polynomial growth (L'Hôpital)" },
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ============================== TIER 4 ============================== */}
      <section className="py-12 bg-gradient-to-br from-red-50 via-amber-50 to-rose-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
        <div className="container max-w-5xl">
          <TierBadge tier={4} color={TIER4} label="Final Boss · 4-5 parts each, multi-topic" />
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
            The bosses
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10">
            Each problem chains 3+ topics. Solve all four and you've earned the badge.
          </p>

          <div className="space-y-8">
            {/* Q27 — Ballistic pendulum + rotation */}
            <PracticeProblem
              accentColor={TIER4}
              title="Q27 — Ballistic Pendulum on a Pivoted Rod"
              statement={
                <div className="space-y-2">
                  <p>
                    <TopicTag color={TIER4}>PHY · BOSS</TopicTag>
                    <TopicTag color={C.momentum}>Momentum</TopicTag>
                    <TopicTag color={C.rotational}>Rotational</TopicTag>
                    <TopicTag color={C.energy}>Energy</TopicTag>
                  </p>
                  <p>
                    A uniform rod (M = 2.0 kg, L = 1.20 m) hangs vertically, pivoted at its
                    top end about a frictionless horizontal axle. A bullet (m = 0.025 kg,
                    v₀ = 100 m/s) flies horizontally and embeds in the rod at distance d =
                    1.0 m from the pivot. Take g = 9.8 m/s².
                  </p>
                </div>
              }
              parts={[
                {
                  label: "(a)",
                  question: <span>Angular momentum about the pivot just before impact.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        For a particle moving with velocity v perpendicular to a position
                        vector of length d from the pivot:
                      </p>
                      <Eq>L_init = m v₀ d = 0.025 · 100 · 1.0 = 2.50 kg·m²/s</Eq>
                      <p>
                        <strong>Why angular momentum, not linear:</strong> the pivot supplies
                        an impulsive force during the collision, so linear momentum is{" "}
                        <em>not</em> conserved. But the pivot exerts no torque about itself,
                        so angular momentum about the pivot <em>is</em> conserved through
                        the collision.
                      </p>
                    </div>
                  ),
                  answer: { value: "L = 2.50", unit: "kg·m²/s" },
                },
                {
                  label: "(b)",
                  question: <span>Moment of inertia of the rod-plus-bullet system about the pivot, just after embedding.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>I_rod = (1/3) M L² = (1/3) · 2.0 · 1.44 = 0.960 kg·m²</Eq>
                      <Eq>I_bullet = m d² = 0.025 · 1.0² = 0.025 kg·m²</Eq>
                      <Eq>I_total = 0.985 kg·m²</Eq>
                      <p>
                        Bullet embeds at d = 1.0 m (not at the end), so we use point-mass I =
                        m d², not (1/3) m d².
                      </p>
                    </div>
                  ),
                  answer: { value: "I = 0.985", unit: "kg·m²" },
                },
                {
                  label: "(c)",
                  question: <span>Angular velocity ω just after embedding.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Angular momentum conservation about the pivot:
                      </p>
                      <Eq>L_init = I_total · ω → ω = 2.50 / 0.985 ≈ 2.54 rad/s</Eq>
                    </div>
                  ),
                  answer: { value: "ω ≈ 2.54", unit: "rad/s" },
                },
                {
                  label: "(d)",
                  question: <span>Maximum angle θ swung from vertical (energy conservation post-collision).</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        After the collision, the system swings as a rigid pendulum. Use
                        energy conservation: rotational KE → gravitational PE of the rod CM
                        and bullet:
                      </p>
                      <Eq>½ I_total ω² = M g (L/2)(1 − cos θ) + m g d (1 − cos θ)</Eq>
                      <Eq>½ · 0.985 · (2.54)² = (2 · 9.8 · 0.6 + 0.025 · 9.8 · 1.0)(1 − cos θ)</Eq>
                      <Eq>3.18 = (11.76 + 0.245)(1 − cos θ) = 12.0 (1 − cos θ)</Eq>
                      <Eq>1 − cos θ = 0.265 → cos θ = 0.735 → θ ≈ 42.7°</Eq>
                    </div>
                  ),
                  answer: { value: "θ ≈ 42.7° from vertical" },
                },
                {
                  label: "(e)",
                  question: (
                    <span>
                      Fraction of bullet's original KE retained as macroscopic KE just after
                      embedding (rest is heat/deformation).
                    </span>
                  ),
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>KE_init = ½ m v₀² = ½ · 0.025 · 100² = 125 J</Eq>
                      <Eq>KE_after = ½ I_total ω² = ½ · 0.985 · 6.45 ≈ 3.18 J</Eq>
                      <Eq>fraction = 3.18 / 125 ≈ 2.5 %</Eq>
                      <p>
                        <strong>The lesson:</strong> ballistic-pendulum-style collisions are
                        spectacularly inelastic. ~97% of the bullet's KE becomes heat,
                        deformation, and sound. Angular momentum is preserved; kinetic energy
                        absolutely isn't.
                      </p>
                    </div>
                  ),
                  answer: { value: "≈ 2.5% of original KE retained" },
                },
              ]}
            />

            {/* Q28 — Heart-rate monitor */}
            <PracticeProblem
              accentColor={TIER4}
              title="Q28 — Photoplethysmograph (Heart-Rate Monitor) Signal Chain"
              statement={
                <div className="space-y-2">
                  <p>
                    <TopicTag color={TIER4}>EE · BOSS</TopicTag>
                    <TopicTag color={C.opamp}>Op-Amp</TopicTag>
                    <TopicTag color={C.adc}>ADC</TopicTag>
                    <TopicTag color={C.mcu}>MCU</TopicTag>
                    <TopicTag color={C.usbc}>USB-C</TopicTag>
                  </p>
                  <p>
                    A photodiode produces I_pd = 5.0 µA peak-to-peak at the heartbeat
                    frequency (~1.5 Hz). Required pipeline: transimpedance amp →
                    AC-coupled gain stage centered at 1.65 V → 10-bit ADC (V_ref = 3.3 V) →
                    MCU detects threshold and toggles LED on PB4. Device is powered from
                    USB-C VBUS at 80 mA.
                  </p>
                </div>
              }
              parts={[
                {
                  label: "(a)",
                  question: <span>Stage 1: choose R_f for the transimpedance amp to give 1.0 V peak-to-peak output.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        A transimpedance amplifier's output is V = −I · R_f. For 1.0 V
                        peak-to-peak from a 5.0 µA peak-to-peak photocurrent:
                      </p>
                      <Eq>R_f = V_pp / I_pp = 1.0 V / 5.0 µA = 200 kΩ</Eq>
                      <p>
                        Add a small feedback capacitor (C_f ≈ 1–10 pF) in parallel with R_f to
                        damp gain peaking from the photodiode capacitance.
                      </p>
                    </div>
                  ),
                  answer: { value: "R_f = 200 kΩ" },
                },
                {
                  label: "(b)",
                  question: (
                    <span>
                      Stage 2: AC-coupled non-inverting amplifier with gain 1.5, output centered
                      at 1.65 V (mid-rail). Specify resistors and biasing.
                    </span>
                  ),
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Gain = 1 + R_f/R_in = 1.5 → R_f = 0.5 R_in. Pick R_in = 20 kΩ, R_f =
                        10 kΩ.
                      </p>
                      <p>
                        AC-couple the input with a series capacitor C_in (1 µF, gives high-pass
                        f_c = 1/(2π · 20 kΩ · 1 µF) ≈ 8 Hz — too high for 1.5-Hz signal!).
                        Use C_in = 10 µF for f_c ≈ 0.8 Hz, comfortably below the heartbeat.
                      </p>
                      <p>
                        Bias V⁺ to mid-rail (1.65 V) with a 1:1 divider from 3.3 V (two 10-kΩ
                        resistors); decouple with 100 nF. The op-amp's V⁺ "sees" 1.65 V DC,
                        and AC swings around it. Output then sits at 1.65 V with the heart
                        signal riding on top.
                      </p>
                    </div>
                  ),
                  answer: { value: "R_in = 20 k, R_f = 10 k, C_in = 10 µF, V⁺ biased to 1.65 V via 10k/10k divider" },
                },
                {
                  label: "(c)",
                  question: (
                    <span>
                      ADC sample rate to capture HR up to 200 BPM. Apply Nyquist + at least 4×
                      oversampling for clean peak detection.
                    </span>
                  ),
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>f_HR_max = 200 BPM = 200/60 = 3.33 Hz</Eq>
                      <Eq>f_Nyquist = 2 · 3.33 ≈ 6.7 Hz (absolute minimum, won't preserve shape)</Eq>
                      <Eq>f_sample ≥ 4 · f_Nyquist ≈ 27 Hz → choose 50 Hz or 100 Hz</Eq>
                      <p>
                        <strong>Why oversample:</strong> Nyquist is the absolute minimum to
                        avoid aliasing of a sinusoid. Real heartbeat peaks have higher-frequency
                        content (sharp R-wave). Sampling at 50–100 Hz gives 25–50 samples per
                        beat at 100 BPM — plenty for a clean threshold-cross detector.
                      </p>
                    </div>
                  ),
                  answer: { value: "50–100 Hz comfortable; absolute floor ≈ 7 Hz" },
                },
                {
                  label: "(d)",
                  question: (
                    <span>
                      MCU code: when ADC reading rises through threshold = 700, toggle the LED
                      on PB4. Write the ISR core (assume <code>adc</code> is the latest
                      sample, <code>prev</code> is the previous).
                    </span>
                  ),
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>{`if (prev <= 700 && adc > 700) {
    PORTB ^= (1 << 4);   // toggle LED on rising-edge crossing
}
prev = adc;`}</Eq>
                      <p>
                        <strong>Why edge-detect, not just compare:</strong> if you only check{" "}
                        <code>if (adc &gt; 700)</code>, the LED toggles on every sample while
                        above threshold (50–100 toggles per beat instead of one). Storing{" "}
                        <code>prev</code> and looking for the rising-edge crossing gives
                        exactly one toggle per heartbeat.
                      </p>
                    </div>
                  ),
                  answer: { value: "Rising-edge detector with PORTB ^= (1<<4)" },
                },
                {
                  label: "(e)",
                  question: (
                    <span>
                      USB-C: device is a sink drawing 80 mA. Specify the CC pull-down (R_d) and
                      the minimum source advertisement that satisfies the load.
                    </span>
                  ),
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        A USB-C sink advertises itself by pulling each CC pin to ground via
                        R_d = 5.1 kΩ. The source-side pull-up R_p sets the advertised current
                        capability:
                      </p>
                      <ul className="list-disc list-inside ml-2">
                        <li>R_p = 56 kΩ → "default USB" (500 mA / 900 mA)</li>
                        <li>R_p = 22 kΩ → 1.5 A @ 5 V</li>
                        <li>R_p = 10 kΩ → 3.0 A @ 5 V</li>
                      </ul>
                      <p>
                        For 80 mA, the default-USB advertisement (500 mA) is sufficient. The
                        sink reads the voltage on its CC pin and confirms the source can
                        supply at least the needed current before drawing it.
                      </p>
                    </div>
                  ),
                  answer: { value: "R_d = 5.1 kΩ on CC; default-USB advertisement (≥500 mA) easily covers 80 mA" },
                },
              ]}
            />

            {/* Q29 — Cross-disciplinary boss */}
            <PracticeProblem
              accentColor={TIER4}
              title="Q29 — Pendulum-Driven Optical Encoder"
              statement={
                <div className="space-y-2">
                  <p>
                    <TopicTag color={TIER4}>CROSS · BOSS</TopicTag>
                    <TopicTag color={C.shm}>Pendulum</TopicTag>
                    <TopicTag color={C.rotational}>Rotational</TopicTag>
                    <TopicTag color={C.adc}>Sampling</TopicTag>
                    <TopicTag color={C.mcu}>MCU Counter</TopicTag>
                  </p>
                  <p>
                    A uniform rod (m = 0.50 kg, L = 1.0 m) is pivoted at one end and swings as
                    a physical pendulum in a vertical plane. A 1024-PPR optical encoder is
                    mounted on the pivot. An MCU samples encoder pulses every Δt = 1.0 ms.
                    Take g = 9.8 m/s².
                  </p>
                </div>
              }
              parts={[
                {
                  label: "(a)",
                  question: <span>Period of small-angle oscillation. (Use I_rod_about_end = ⅓ m L² and the physical-pendulum formula.)</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>T = 2π √(I / (m g d))   where d = L/2 is the distance pivot → CM</Eq>
                      <Eq>T = 2π √( (⅓ m L²) / (m g L/2) ) = 2π √(2L / (3g))</Eq>
                      <Eq>T = 2π √(2 · 1 / (3 · 9.8)) = 2π √0.0680 ≈ 2π · 0.2611 ≈ 1.64 s</Eq>
                      <p>
                        Compare to a simple pendulum of length L: T_simple = 2π √(L/g) =
                        2.01 s. The rod's mass distribution gives an effective length 2L/3 ≈
                        0.67 m, so it swings a bit faster.
                      </p>
                    </div>
                  ),
                  answer: { value: "T ≈ 1.64", unit: "s" },
                },
                {
                  label: "(b)",
                  question: <span>Released from horizontal, find the maximum angular velocity (passing through vertical).</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        At horizontal release, the CM is level with the pivot (height = 0
                        relative to the pivot). At vertical, CM has dropped by L/2:
                      </p>
                      <Eq>ΔPE = m g (L/2) = 0.50 · 9.8 · 0.50 = 2.45 J</Eq>
                      <Eq>ΔPE → KE_rot: 2.45 = ½ I ω²,   I = (1/3)(0.5)(1)² = 0.1667 kg·m²</Eq>
                      <Eq>ω² = 2 · 2.45 / 0.1667 = 29.4 → ω ≈ 5.42 rad/s</Eq>
                      <p>
                        <strong>Note:</strong> "small-angle" SHM no longer applies for a
                        90°-amplitude release — the period from (a) is just for the linear
                        regime. But energy conservation works for any amplitude.
                      </p>
                    </div>
                  ),
                  answer: { value: "ω_max ≈ 5.42", unit: "rad/s" },
                },
                {
                  label: "(c)",
                  question: <span>Encoder pulse rate at the moment of peak angular velocity.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>rev/s = ω / (2π) = 5.42 / 6.283 ≈ 0.863 rev/s</Eq>
                      <Eq>pulses/s = 0.863 · 1024 = 884 pulses/s</Eq>
                      <Eq>pulses per Δt = 884 · 0.001 ≈ 0.88 pulse/sample (~1 every other tick)</Eq>
                      <p>
                        That's coarse — at peak ω we get less than one pulse per sample
                        period. To get smoother angular-velocity readings, either decrease
                        sample rate (count over longer window) or use a higher-PPR encoder.
                      </p>
                    </div>
                  ),
                  answer: { value: "≈ 884 pulses/s · ≈ 0.88 pulses per 1-ms sample at peak" },
                },
                {
                  label: "(d)",
                  question: <span>Max ω the system could measure before overflowing an 8-bit pulse counter (256 max) within one 1-ms sample window.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <Eq>pulse_max_per_sample = 256 → pulse_max_per_sec = 256,000</Eq>
                      <Eq>rev_max/s = 256000 / 1024 = 250 rev/s</Eq>
                      <Eq>ω_max = 250 · 2π ≈ 1571 rad/s</Eq>
                      <p>
                        Far above this pendulum's max ω of 5.42 rad/s — no overflow risk in
                        the actual application, but it's how you'd size the counter for a
                        higher-speed shaft.
                      </p>
                    </div>
                  ),
                  answer: { value: "ω_overflow ≈ 1571 rad/s (system runs ≈ 290× below this)" },
                },
                {
                  label: "(e)",
                  question: <span>If the pendulum has quality factor Q = 20, time for the swing amplitude to decay by 50%.</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Damped SHM: A(t) = A₀ exp(−t/(2τ)), where τ = Q/ω₀ and ω₀ is the
                        natural angular frequency from (a):
                      </p>
                      <Eq>ω₀ = 2π / T = 2π / 1.64 ≈ 3.83 rad/s</Eq>
                      <Eq>τ = Q / ω₀ = 20 / 3.83 ≈ 5.22 s</Eq>
                      <Eq>For A(t)/A₀ = 0.5: t_½ = 2τ · ln 2 = 2 · 5.22 · 0.693 ≈ 7.24 s</Eq>
                      <p>
                        <strong>Sanity:</strong> Q = 20 is a reasonably high-Q oscillator —
                        the amplitude takes about 4–5 cycles (period 1.64 s × ~4.4 cycles ≈
                        7.2 s) to halve. That checks out.
                      </p>
                    </div>
                  ),
                  answer: { value: "t_½ ≈ 7.24 s (≈ 4.4 cycles)" },
                },
              ]}
            />

            {/* Q30 — Math final boss: coffee cooling spans Ch5-Ch8 */}
            <PracticeProblem
              accentColor={TIER4}
              title="Q30 — The Cooling Cup of Coffee (Math BOSS)"
              statement={
                <div className="space-y-2">
                  <p>
                    <TopicTag color={TIER4}>MATH · BOSS</TopicTag>
                    <TopicTag color={C.mathDE}>Ch 7 ODE</TopicTag>
                    <TopicTag color={C.mathInt}>Ch 5 Int.</TopicTag>
                    <TopicTag color={C.mathApp}>Ch 6 App.</TopicTag>
                    <TopicTag color={C.mathSer}>Ch 8 Series</TopicTag>
                  </p>
                  <p>
                    A coffee cup at <InlineMath math="T(0) = 90^{\circ}\mathrm{C}" /> sits
                    in a room at <InlineMath math="T_\infty = 20^{\circ}\mathrm{C}" />.
                    Newton's law of cooling applies with rate constant{" "}
                    <InlineMath math="k = 0.05/\mathrm{min}" />:
                  </p>
                  <BlockMath math="\dfrac{dT}{dt} = -k\,(T - T_\infty),\quad T(0) = 90." />
                </div>
              }
              parts={[
                {
                  label: "(a)",
                  question: <span>Solve the ODE for T(t). [Ch 7 — separable / Newton's cooling]</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Substitute <InlineMath math="u = T - 20" />, so{" "}
                        <InlineMath math="du/dt = -k\, u" />. Separable:
                      </p>
                      <BlockMath math="\int \dfrac{du}{u} = -k \int dt \Rightarrow \ln|u| = -kt + C" />
                      <BlockMath math="u(t) = u_0\, e^{-kt} = 70\, e^{-0.05\, t}" />
                      <BlockMath math="\boxed{T(t) = 20 + 70\, e^{-0.05\, t}}" />
                      <p>
                        <strong>Sanity:</strong>{" "}
                        <InlineMath math="T(0) = 20 + 70 = 90" /> ✓ and{" "}
                        <InlineMath math="T(\infty) = 20" /> ✓.
                      </p>
                    </div>
                  ),
                  answer: { value: "T(t) = 20 + 70 e^(−0.05 t)" },
                },
                {
                  label: "(b)",
                  question: <span>At what time does T = 60 °C? [Ch 5 — solve for variable]</span>,
                  solutionSteps: (
                    <div className="space-y-2">
                      <BlockMath math="60 = 20 + 70\, e^{-0.05\, t} \Rightarrow e^{-0.05\, t} = \tfrac{40}{70} = \tfrac{4}{7}" />
                      <BlockMath math="t = \dfrac{\ln(7/4)}{0.05} = \dfrac{0.5596}{0.05} \approx 11.19\,\text{min}" />
                    </div>
                  ),
                  answer: { value: "t ≈ 11.19 min" },
                },
                {
                  label: "(c)",
                  question: (
                    <span>
                      Average temperature over the first 30 minutes. [Ch 6 — average value
                      of a function]
                    </span>
                  ),
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Average value:{" "}
                        <InlineMath math="\bar{T} = \tfrac{1}{30}\int_0^{30} T(t)\, dt" />.
                      </p>
                      <BlockMath math="\int_0^{30}\!\bigl(20 + 70 e^{-0.05 t}\bigr)dt = \bigl[20 t - \tfrac{70}{0.05} e^{-0.05 t}\bigr]_0^{30}" />
                      <BlockMath math="= \bigl[20 t - 1400\, e^{-0.05 t}\bigr]_0^{30} = (600 - 1400 e^{-1.5}) - (0 - 1400)" />
                      <BlockMath math="= 600 + 1400(1 - e^{-1.5}) \approx 600 + 1400 \cdot 0.7769 \approx 1687.7" />
                      <BlockMath math="\bar{T} = \tfrac{1687.7}{30} \approx 56.26\,^{\circ}\mathrm{C}" />
                      <p>
                        <strong>Sanity:</strong> the cup spent more time near the lower
                        end of its temperature range (because cooling slows as it nears
                        room temp), so the time-average{" "}
                        <InlineMath math="\bar T \approx 56" /> sits below the arithmetic
                        midpoint of 90 and 20 (= 55) — but slightly above it because the
                        first few minutes the temp is still high. Both checks pass.
                      </p>
                    </div>
                  ),
                  answer: { value: "T̄ ≈ 56.26 °C" },
                },
                {
                  label: "(d)",
                  question: (
                    <span>
                      Compute{" "}
                      <InlineMath math="\int_0^\infty (T(t) - 20)\,dt" /> — the total
                      "thermal excess" delivered to the room. [Ch 5 — improper integral]
                    </span>
                  ),
                  solutionSteps: (
                    <div className="space-y-2">
                      <BlockMath math="\int_0^\infty 70\, e^{-0.05 t}\, dt = \lim_{b\to\infty}\!\bigl[-1400\, e^{-0.05 t}\bigr]_0^{b}" />
                      <BlockMath math="= 0 - (-1400) = 1400\;{}^{\circ}\mathrm{C}\!\cdot\!\mathrm{min}" />
                      <p>
                        <strong>Why this number is meaningful:</strong> it equals{" "}
                        <InlineMath math="\dfrac{u_0}{k} = \dfrac{70}{0.05}" />. The
                        time constant <InlineMath math="\tau = 1/k = 20" /> min is how
                        long the excess takes to fall by a factor of{" "}
                        <InlineMath math="e" />. The "area under the curve" is just the
                        initial excess times the time constant:{" "}
                        <InlineMath math="u_0\,\tau" />.
                      </p>
                    </div>
                  ),
                  answer: { value: "1400 °C·min  (= u₀ / k)" },
                },
                {
                  label: "(e)",
                  question: (
                    <span>
                      Define the cooling fraction{" "}
                      <InlineMath math="f(t) = \dfrac{T(0) - T(t)}{T(0) - T_\infty}" />.
                      Approximate <InlineMath math="f(1)" /> with a Taylor polynomial
                      through <InlineMath math="x^3" /> and bound the error.
                      [Ch 8 — Maclaurin series + remainder]
                    </span>
                  ),
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Simplify: <InlineMath math="f(t) = 1 - e^{-k t}" />. At{" "}
                        <InlineMath math="t = 1" /> min,{" "}
                        <InlineMath math="x = k t = 0.05" />.
                      </p>
                      <p>
                        Use the Maclaurin series for{" "}
                        <InlineMath math="e^{-x}" /> and subtract from 1:
                      </p>
                      <BlockMath math="1 - e^{-x} = x - \tfrac{x^2}{2!} + \tfrac{x^3}{3!} - \tfrac{x^4}{4!} + \cdots" />
                      <p>Through the cubic term:</p>
                      <BlockMath math="P_3(x) = x - \tfrac{x^2}{2} + \tfrac{x^3}{6}" />
                      <BlockMath math="P_3(0.05) = 0.05 - 0.00125 + 0.00002083 \approx 0.04877" />
                      <p>
                        <strong>Error bound</strong> (Lagrange remainder for an
                        alternating series with decreasing terms — bounded by the first
                        omitted term):
                      </p>
                      <BlockMath math="|R_3| \le \tfrac{x^4}{4!} = \tfrac{(0.05)^4}{24} \approx 2.6\times 10^{-7}" />
                      <p>
                        So <InlineMath math="f(1) \approx 0.0488" /> with error well below
                        a millionth — the cup has shed only ~4.9 % of its initial excess
                        in 1 minute, exactly what 1 minute / 20-minute time constant
                        predicts (≈ 1 − e<sup>−0.05</sup>).
                      </p>
                      <p>
                        <strong>Why a 3-term polynomial is enough:</strong>{" "}
                        <InlineMath math="x = 0.05" /> is small, so each successive term
                        shrinks by another factor of ~50. Higher-order corrections would
                        change the 7th decimal place at most. Truncate where the next
                        term is below your tolerance.
                      </p>
                    </div>
                  ),
                  answer: { value: "f(1) ≈ 0.0488,  |R₃| ≤ 2.6 × 10⁻⁷" },
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container max-w-3xl text-center">
          <Card className="p-10 bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 border-2 border-emerald-300 dark:border-emerald-700">
            <Award className="w-14 h-14 mx-auto text-emerald-600 dark:text-emerald-400 mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Solved them all?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              You've worked Newton's laws to angular momentum, voltage dividers to
              transimpedance amps, Bernoulli to USB-C — across both midterm and finals
              content for both classes. You're ready.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-6">
              If a tier wasn't comfortable, link straight to that topic page from the home
              hub. Each problem above is solvable from one of the topic pages alone.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/midterm-prep">
                <Button variant="outline">PHY 131 Hub</Button>
              </Link>
              <Link href="/ee">
                <Button variant="outline">ESE 123 Hub</Button>
              </Link>
              <Link href="/cheat-sheet">
                <Button variant="outline">2-Page Cheat Sheet</Button>
              </Link>
              <Link href="/">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  Back to Home
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
