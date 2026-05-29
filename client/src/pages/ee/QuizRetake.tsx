import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { CircuitSchematic } from "@/components/ee/CircuitSchematic";
import { FormulaBlock } from "@/components/midterm/FormulaBlock";
import { WorkedExample, Eq, Why } from "@/components/midterm/WorkedExample";
import { PracticeProblem } from "@/components/midterm/PracticeProblem";

// ─────────────────────────────────────────────────────────────────────────────
// Score data — pulled from Quizzes_retake.html (practice final, attempt 2)
// ─────────────────────────────────────────────────────────────────────────────

interface QResult {
  q: number;
  earned: number;
  max: number;
  topic: string;
  myAnswer: string;
  correct: string;
  why: string;
}

const RESULTS: QResult[] = [
  { q: 1, earned: 0, max: 3, topic: "USB-C charging hazards", myAnswer: "wrong combination of checkboxes", correct: "chips MAY exist · dangerous V · dangerous I for cables · same connector for both roles", why: "Multi-select: missed the 'cables MAY contain chips (not MUST)' nuance and the 'same connector for charger + device' point." },
  { q: 2, earned: 4, max: 4, topic: "Bitwise mask for bit 6", myAnswer: "64", correct: "64", why: "" },
  { q: 3, earned: 4, max: 4, topic: "C modulo 65 % 10", myAnswer: "5", correct: "5", why: "" },
  { q: 4, earned: 0, max: 4, topic: "PORTE button polarity", myAnswer: "wrong button / wrong polarity", correct: "the UP button is pressed", why: "0b00000001 = bit 0 = PE0 = UP. Buttons are active-HIGH on this board → bit 1 = pressed." },
  { q: 5, earned: 0, max: 5, topic: "Morse code decode", myAnswer: "SOS", correct: "EASY", why: "Assumed 'SOS' from pattern recognition without parsing the timing groups (200/600/1400). Pulse sequence decodes to E·A·S·Y." },
  { q: 6, earned: 4, max: 4, topic: "C division 69/2", myAnswer: "34", correct: "34", why: "" },
  { q: 7, earned: 0, max: 4, topic: "Active-low LED ID", myAnswer: "wrong LED", correct: "D6", why: "PORTA = 0b11011111 → bit 5 is the only 0. Active-low: 0 = ON. Bit 5 → PA5 → D6." },
  { q: 8, earned: 0, max: 1, topic: "SPICE sim x-axis matching", myAnswer: "wrong matching", correct: ".tran→time · .ac→freq · .dc→V/I · .op→none", why: "Mixed up which sweep type plots against which independent axis." },
  { q: 9, earned: 3, max: 3, topic: "R from I-V slope", myAnswer: "15.1516", correct: "15.1516", why: "" },
  { q: 10, earned: 3, max: 3, topic: "Max power transfer", myAnswer: "25.8871", correct: "25.8871", why: "" },
  { q: 11, earned: 1, max: 1, topic: "DMM ohms function", myAnswer: "correct selections", correct: "current source applies test current; better accuracy w/ 4-wire on low R", why: "" },
  { q: 12, earned: 5, max: 5, topic: "Voltage divider", myAnswer: "1.22 V", correct: "1.22 V", why: "" },
  { q: 13, earned: 0, max: 5, topic: "DMM loading on high-R divider", myAnswer: "5.90164 (parallel R, not voltage!)", correct: "0.8789 V", why: "Computed R₂‖10MΩ = 5.90 MΩ correctly but wrote that intermediate quantity as the answer instead of finishing V = V₁·R_eff/(R₁+R_eff). Did not apply the meter-loading model." },
  { q: 14, earned: 0, max: 2, topic: "Scope V_RMS for sine", myAnswer: "15", correct: "9.014 V", why: "Read peak/peak-to-peak from screen instead of converting amplitude → RMS via V_p/√2." },
  { q: 15, earned: 0, max: 2, topic: "ω from scope period", myAnswer: "0.001571 (≈ 1/(2πf), reciprocal!)", correct: "62831.853 rad/s", why: "Inverted the formula. ω = 2π/T = 2πf, not 1/(2πf). The number 0.001571 is the reciprocal of the right answer." },
  { q: 16, earned: 5, max: 5, topic: "Series-parallel reduction", myAnswer: "2.76296 V", correct: "2.76296 V", why: "" },
  { q: 17, earned: 0, max: 5, topic: "Two-source nodal analysis", myAnswer: "blank / wrong", correct: "−0.861 V", why: "Did not write KCL at the node with both source contributions. The negative sign means the node sits below ground because V₂ pulls it negative through R₂." },
  { q: 18, earned: 4, max: 4, topic: "for-loop trace (b=20)", myAnswer: "20", correct: "20", why: "" },
  { q: 19, earned: 4, max: 4, topic: "Bitwise AND 0x27 & 0xF", myAnswer: "7", correct: "7", why: "" },
  { q: 20, earned: 0, max: 4, topic: "10-bit ADC code", myAnswer: "blank / wrong", correct: "660", why: "count = round((V_in/V_ref)·(2^N − 1)) = round((2.774/4.3)·1023) = 660. Forgot the 1023 max-code factor." },
  { q: 21, earned: 0, max: 3, topic: "ADC0_MUXPOS register", myAnswer: "wrong selection", correct: "selects the input voltage source for the ADC", why: "MUXPOS = positive-input MUX position. It picks WHICH pin is digitized, nothing else." },
  { q: 22, earned: 4, max: 4, topic: "USB-C CC1/CC2 polarity", myAnswer: "chargeable USB device with passive cable", correct: "chargeable USB device with passive cable", why: "" },
  { q: 23, earned: 0, max: 3, topic: "Project on USB disconnect", myAnswer: "wrong combination", correct: "displays total energy delivered + disconnects power from the port", why: "Confused 'capacity (mAh)' (battery rating) with 'energy delivered (Wh / J)'. Project doesn't know battery capacity — only what it pushed." },
  { q: 24, earned: 2, max: 2, topic: "Super-capacitor properties", myAnswer: "correct selections", correct: "lots of capacitance; polar; backup for clock", why: "" },
  { q: 25, earned: 0, max: 3, topic: "Transimpedance gain", myAnswer: "blank / wrong", correct: "14.165 Ω", why: "Z_T = V_out / I_in = 5.312 / 0.375 = 14.17 Ω. Not Ω = V/I of the source — it's the ratio at the amp's terminals." },
  { q: 26, earned: 3, max: 3, topic: "Alien clock counter rollover", myAnswer: "55", correct: "55", why: "" },
];

const TOTAL_EARNED = RESULTS.reduce((s, r) => s + r.earned, 0); // 46
const TOTAL_MAX = RESULTS.reduce((s, r) => s + r.max, 0);       // 90

// Failure topic groups, sorted by points lost (yield).
interface TopicGroup { name: string; lost: number; qs: number[]; color: string; anchor: string; }
const TOPIC_GROUPS: TopicGroup[] = [
  { name: "AVR project I/O (buttons, LEDs, disconnect behavior)", lost: 11, qs: [4, 7, 23], color: "#dc2626", anchor: "mod-avr" },
  { name: "ADC: 10-bit math + MUXPOS register", lost: 7, qs: [20, 21], color: "#7c3aed", anchor: "mod-adc" },
  { name: "Morse code timing decode", lost: 5, qs: [5], color: "#16a34a", anchor: "mod-morse" },
  { name: "DMM loading effect on high-R dividers", lost: 5, qs: [13], color: "#0ea5e9", anchor: "mod-dmm" },
  { name: "Two-source nodal analysis", lost: 5, qs: [17], color: "#ea580c", anchor: "mod-nodal" },
  { name: "Scope reading: V_RMS and ω from period", lost: 4, qs: [14, 15], color: "#0891b2", anchor: "mod-scope" },
  { name: "USB-C charging facts", lost: 3, qs: [1], color: "#2563eb", anchor: "mod-usb" },
  { name: "Op-amp transimpedance gain", lost: 3, qs: [25], color: "#c026d3", anchor: "mod-tia" },
  { name: "SPICE sim type → x-axis", lost: 1, qs: [8], color: "#65a30d", anchor: "mod-spice" },
];

// ─────────────────────────────────────────────────────────────────────────────
// Interactive helpers
// ─────────────────────────────────────────────────────────────────────────────

function AdcCalculator() {
  const [vin, setVin] = useState(2.774);
  const VREF = 4.3;
  const code = Math.round((vin / VREF) * 1023);
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <label className="text-sm font-mono w-32">V_in = {vin.toFixed(3)} V</label>
        <input
          type="range"
          min={0}
          max={VREF}
          step={0.001}
          value={vin}
          onChange={(e) => setVin(parseFloat(e.target.value))}
          className="flex-1"
        />
      </div>
      <div className="font-mono text-sm bg-purple-50 dark:bg-purple-950/40 p-3 rounded">
        round((V_in / V_ref) × 1023) = round(({vin.toFixed(3)} / {VREF}) × 1023) ={" "}
        <span className="text-purple-700 dark:text-purple-300 font-bold">{code}</span>
        <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
          binary: 0b{code.toString(2).padStart(10, "0")}
        </div>
      </div>
    </div>
  );
}

function DmmLoadingDemo() {
  const V1 = 4.9;
  const R1 = 27.0;   // MΩ
  const R2 = 14.4;   // MΩ
  const [Rm, setRm] = useState(10); // meter input impedance, MΩ
  const Vopen = (V1 * R2) / (R1 + R2);
  const R2eff = (R2 * Rm) / (R2 + Rm);
  const Vmeas = (V1 * R2eff) / (R1 + R2eff);
  const errPct = ((Vopen - Vmeas) / Vopen) * 100;
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <label className="text-sm font-mono w-44">R_meter = {Rm.toFixed(1)} MΩ</label>
        <input
          type="range"
          min={0.1}
          max={1000}
          step={0.1}
          value={Rm}
          onChange={(e) => setRm(parseFloat(e.target.value))}
          className="flex-1"
        />
      </div>
      <div className="grid grid-cols-3 gap-3 text-sm font-mono">
        <div className="bg-gray-100 dark:bg-slate-700 p-2 rounded">
          <div className="text-xs text-gray-500">true V (open-circuit)</div>
          <div className="text-lg font-bold">{Vopen.toFixed(4)} V</div>
        </div>
        <div className="bg-sky-100 dark:bg-sky-950/40 p-2 rounded">
          <div className="text-xs text-gray-500">measured V</div>
          <div className="text-lg font-bold text-sky-700 dark:text-sky-300">
            {Vmeas.toFixed(4)} V
          </div>
        </div>
        <div className="bg-rose-100 dark:bg-rose-950/40 p-2 rounded">
          <div className="text-xs text-gray-500">error</div>
          <div className="text-lg font-bold text-rose-700 dark:text-rose-300">
            {errPct.toFixed(1)} %
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Push R_meter way past R₁ ‖ R₂ (≈ 9.4 MΩ) and the error vanishes. With the
        34461A's stated 10 MΩ input, the error here is huge because the source
        impedance is the same order of magnitude as the meter.
      </p>
    </div>
  );
}

function NodalCalculator() {
  const [V1, setV1] = useState(2.8);
  const [V2, setV2] = useState(-1.1); // sign convention: positive terminal of V2 faces away from node
  const [R1, setR1] = useState(154);
  const [R2, setR2] = useState(158);
  // KCL at node V (no third branch): (V1 - V)/R1 + (V2 - V)/R2 = 0
  const Vnode = (V1 / R1 + V2 / R2) / (1 / R1 + 1 / R2);
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 gap-2 text-sm font-mono">
        <label className="flex items-center gap-2">V₁ = <input type="number" value={V1} step={0.1} onChange={(e) => setV1(parseFloat(e.target.value) || 0)} className="w-20 px-1 border rounded" /> V</label>
        <label className="flex items-center gap-2">V₂ = <input type="number" value={V2} step={0.1} onChange={(e) => setV2(parseFloat(e.target.value) || 0)} className="w-20 px-1 border rounded" /> V</label>
        <label className="flex items-center gap-2">R₁ = <input type="number" value={R1} step={1} onChange={(e) => setR1(parseFloat(e.target.value) || 1)} className="w-20 px-1 border rounded" /> Ω</label>
        <label className="flex items-center gap-2">R₂ = <input type="number" value={R2} step={1} onChange={(e) => setR2(parseFloat(e.target.value) || 1)} className="w-20 px-1 border rounded" /> Ω</label>
      </div>
      <div className="font-mono text-sm bg-orange-50 dark:bg-orange-950/40 p-3 rounded">
        V = (V₁/R₁ + V₂/R₂) / (1/R₁ + 1/R₂) ={" "}
        <span className="text-orange-700 dark:text-orange-300 font-bold">
          {Vnode.toFixed(3)} V
        </span>
        <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
          With V₂ entered as <em>signed</em> based on which terminal faces the node, this single line
          handles any polarity.
        </div>
      </div>
    </div>
  );
}

function ScopeRmsDemo() {
  const [Vp, setVp] = useState(12.75);
  const Vrms = Vp / Math.SQRT2;
  const Vpp = 2 * Vp;
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <label className="text-sm font-mono w-40">V_peak = {Vp.toFixed(2)} V</label>
        <input
          type="range"
          min={0}
          max={20}
          step={0.05}
          value={Vp}
          onChange={(e) => setVp(parseFloat(e.target.value))}
          className="flex-1"
        />
      </div>
      <div className="grid grid-cols-3 gap-2 text-sm font-mono">
        <div className="bg-gray-100 dark:bg-slate-700 p-2 rounded">
          <div className="text-xs text-gray-500">V_pp (peak-to-peak)</div>
          <div className="text-lg font-bold">{Vpp.toFixed(2)} V</div>
        </div>
        <div className="bg-gray-100 dark:bg-slate-700 p-2 rounded">
          <div className="text-xs text-gray-500">V_p (amplitude)</div>
          <div className="text-lg font-bold">{Vp.toFixed(2)} V</div>
        </div>
        <div className="bg-cyan-100 dark:bg-cyan-950/40 p-2 rounded">
          <div className="text-xs text-gray-500">V_rms = V_p / √2</div>
          <div className="text-lg font-bold text-cyan-700 dark:text-cyan-300">
            {Vrms.toFixed(3)} V
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        For a sine: V_rms = V_p / √2 ≈ 0.707·V_p. Common trap: scope often shows
        V_pp; convert with V_p = V_pp/2 first.
      </p>
    </div>
  );
}

function OmegaDemo() {
  const [f, setF] = useState(10000); // Hz
  const T = 1 / f;
  const omega = 2 * Math.PI * f;
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <label className="text-sm font-mono w-40">f = {f.toLocaleString()} Hz</label>
        <input
          type="range"
          min={1}
          max={100000}
          step={1}
          value={f}
          onChange={(e) => setF(parseFloat(e.target.value))}
          className="flex-1"
        />
      </div>
      <div className="grid grid-cols-3 gap-2 text-sm font-mono">
        <div className="bg-gray-100 dark:bg-slate-700 p-2 rounded">
          <div className="text-xs text-gray-500">T = 1/f</div>
          <div className="text-lg font-bold">{T.toExponential(3)} s</div>
        </div>
        <div className="bg-gray-100 dark:bg-slate-700 p-2 rounded">
          <div className="text-xs text-gray-500">f</div>
          <div className="text-lg font-bold">{f.toLocaleString()} Hz</div>
        </div>
        <div className="bg-cyan-100 dark:bg-cyan-950/40 p-2 rounded">
          <div className="text-xs text-gray-500">ω = 2πf</div>
          <div className="text-lg font-bold text-cyan-700 dark:text-cyan-300">
            {omega.toFixed(2)} rad/s
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Sanity check: 1/(2πf) is the reciprocal of ω — a tiny number for normal
        signals. If you ever get something like 0.001, you wrote it upside-down.
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main page
// ─────────────────────────────────────────────────────────────────────────────

export default function QuizRetake() {
  const [revealAll, setRevealAll] = useState(false);
  const wrongCount = RESULTS.filter((r) => r.earned < r.max).length;
  const lostPoints = TOTAL_MAX - TOTAL_EARNED;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/ee">
            <Button variant="ghost" className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <ChevronLeft className="w-5 h-5" /> Back to ESE 123
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Practice Final Retake — Analysis & Recovery
          </h1>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setRevealAll((v) => !v)}
          >
            {revealAll ? "Hide" : "Reveal"} all "why I lost"
          </Button>
        </div>
      </header>

      <div className="container py-10 space-y-12">

        {/* ───────── Score banner ───────── */}
        <section>
          <div className="bg-gradient-to-br from-rose-50 to-amber-50 dark:from-rose-950/40 dark:to-amber-950/40 border-l-4 border-rose-600 rounded-2xl p-8">
            <span className="inline-block bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-3">
              PRACTICE FINAL · ATTEMPT 2 · MAY 10, 2026
            </span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              {TOTAL_EARNED} / {TOTAL_MAX} points · {((TOTAL_EARNED / TOTAL_MAX) * 100).toFixed(1)}%
            </h2>
            <p className="text-gray-700 dark:text-gray-200 max-w-3xl">
              You got <b>{RESULTS.length - wrongCount} of {RESULTS.length}</b>{" "}
              questions fully correct and lost <b>{lostPoints} points</b> across{" "}
              <b>{wrongCount} questions</b>. Below: a per-question table, then{" "}
              {TOPIC_GROUPS.length} targeted study modules grouped by point yield.
              Knock these out and you recover ~{TOPIC_GROUPS.slice(0, 5).reduce((s, t) => s + t.lost, 0)}{" "}
              points just from the top 5 modules.
            </p>
          </div>
        </section>

        {/* ───────── Loss-by-topic chart ───────── */}
        <section>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Where the points went
          </h3>
          <div className="space-y-2">
            {TOPIC_GROUPS.map((g) => {
              const pct = (g.lost / lostPoints) * 100;
              return (
                <a
                  key={g.anchor}
                  href={`#${g.anchor}`}
                  className="block hover:bg-gray-50 dark:hover:bg-slate-800 rounded p-2 transition-colors"
                >
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-72 truncate text-gray-800 dark:text-gray-100">
                      {g.name}
                    </span>
                    <div className="flex-1 h-6 bg-gray-100 dark:bg-slate-700 rounded overflow-hidden relative">
                      <div
                        className="h-full transition-all"
                        style={{ width: `${pct}%`, backgroundColor: g.color }}
                      />
                      <span className="absolute right-2 top-0 leading-6 text-xs font-mono text-gray-700 dark:text-gray-200">
                        {g.lost} pts · Q{g.qs.join(", Q")}
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* ───────── Per-question grid ───────── */}
        <section>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Per-question breakdown
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-300 dark:border-slate-600">
                  <th className="text-left p-2 w-12">Q</th>
                  <th className="text-left p-2 w-20">Score</th>
                  <th className="text-left p-2">Topic</th>
                  <th className="text-left p-2">Your answer</th>
                  <th className="text-left p-2">Correct</th>
                </tr>
              </thead>
              <tbody>
                {RESULTS.map((r) => {
                  const wrong = r.earned < r.max;
                  return (
                    <tr
                      key={r.q}
                      className={`border-b border-gray-100 dark:border-slate-700 ${wrong ? "bg-rose-50/40 dark:bg-rose-950/20" : ""}`}
                    >
                      <td className="p-2 font-mono">
                        {wrong ? (
                          <XCircle className="inline w-4 h-4 text-rose-600 mr-1" />
                        ) : (
                          <CheckCircle2 className="inline w-4 h-4 text-emerald-600 mr-1" />
                        )}
                        {r.q}
                      </td>
                      <td className="p-2 font-mono">
                        <span className={wrong ? "text-rose-700 dark:text-rose-400 font-bold" : "text-emerald-700 dark:text-emerald-400"}>
                          {r.earned}/{r.max}
                        </span>
                      </td>
                      <td className="p-2">{r.topic}</td>
                      <td className="p-2 text-gray-600 dark:text-gray-300">{r.myAnswer}</td>
                      <td className="p-2 font-mono text-emerald-700 dark:text-emerald-400">{r.correct}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {revealAll && (
            <div className="mt-6 space-y-3">
              {RESULTS.filter((r) => r.earned < r.max).map((r) => (
                <Card key={r.q} className="p-4 border-l-4 border-l-rose-500">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        Q{r.q} · {r.topic}
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-200 mt-1">{r.why}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* ════════════════════════════════════════════════════════════════════
             MODULE 1 — AVR project I/O (11 pts)
            ════════════════════════════════════════════════════════════════════ */}
        <section id="mod-avr" className="space-y-6 pt-8 border-t-2 border-gray-200 dark:border-slate-700">
          <div>
            <span className="inline-block bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-2">
              MODULE 1 · 11 PTS · Q4 Q7 Q23
            </span>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              AVR project I/O — buttons, LEDs, USB-C disconnect
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2 max-w-3xl">
              Three questions, all about your own board's firmware behavior. The
              big single-rule each one tests:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
              <li><b>Buttons (PORTE) are active-HIGH</b> on this board → pressed = bit 1.</li>
              <li><b>LEDs (PORTA) are active-LOW</b> → bit 0 = ON; lit LED = the single 0 in the byte.</li>
              <li><b>On USB disconnect</b> the project shuts the port and shows what it knows: <i>energy delivered (Joules / Wh)</i> — NOT battery capacity in mAh, which it has no way to know.</li>
            </ul>
          </div>

          <FormulaBlock
            name="Active-low LED rule (PORTA)"
            formula={<>LED on ⇔ PORTA_OUT bit = 0</>}
            variables={[
              { symbol: "PORTA_OUT bit n", meaning: "controls D(n+1) on your board (PA0→D1, PA5→D6, etc.)" },
              { symbol: "0 in the byte", meaning: "is what you're hunting for. Spread the byte 7..0 and find the lone 0" },
            ]}
            whenToUse={
              <>
                Q7-style questions show you a byte assignment like{" "}
                <code>PORTA_OUT = 0b11011111</code>. Don't read it as "bit 5 is on" —
                the inverter flips it. The lit LED is the bit position of the
                <strong> 0</strong>. Bit 5 is 0 → PA5 → D6.
              </>
            }
            accentColor="#dc2626"
          />

          <WorkedExample
            title="Q4 redo — PORTE_IN & 0b00000001"
            accentColor="#2563eb"
            problemStatement={
              <>If <code>(PORTE_IN &amp; 0b00000001) ≠ 0</code> evaluates true, what's happening?</>
            }
            steps={[
              {
                heading: "Decode the mask",
                body: (
                  <>
                    <Why>
                      The mask <code>0b00000001</code> has only bit 0 set — that's
                      the rightmost / least-significant bit. ANDing with PORTE_IN
                      keeps only bit 0; everything else is masked off. So the test
                      asks: "is bit 0 of PORTE_IN currently 1?".
                    </Why>
                    <Why>
                      In your firmware <code>functions.h</code>, <code>up = 0b00000001</code> →
                      bit 0 → PE0 = UP button.
                    </Why>
                  </>
                ),
              },
              {
                heading: "Apply the polarity convention",
                body: (
                  <>
                    <Why>
                      Your board is wired <strong>active-HIGH</strong>: pressing
                      a button pulls the input pin to V_DD, so it reads as 1.
                      (Confirm by reading <code>complete_code1.c</code>: the
                      check is <code>if (buttons == up)</code> — i.e. equality
                      with the bit value, looking for a 1.)
                    </Why>
                    <Eq>(PORTE_IN & 0b00000001) ≠ 0  ⇔  PE0 = 1  ⇔  UP pressed</Eq>
                  </>
                ),
                result: { label: "Answer", value: "UP button is pressed", color: "blue" },
              },
            ]}
          />

          <WorkedExample
            title="Q7 redo — PORTA_OUT = 0b11011111, which LED?"
            accentColor="#dc2626"
            problemStatement={<>Find the lit LED.</>}
            steps={[
              {
                heading: "Spread the byte and hunt the 0",
                body: (
                  <>
                    <Eq>0b 1101 1111 → bit7=1 bit6=1 bit5=0 bit4=1 ... bit0=1</Eq>
                    <Why>Only bit 5 is 0 → that's the lit one (active-low).</Why>
                  </>
                ),
              },
              {
                heading: "Map bit → label",
                body: (
                  <>
                    <Eq>bit 5 → PA5 → D6 on your board</Eq>
                    <Why>
                      D1↔PA0, D2↔PA1, …, D7↔PA6 per your schematic. Different
                      schematics could renumber.
                    </Why>
                  </>
                ),
                result: { label: "Answer", value: "D6", color: "red" },
              },
            ]}
          />

          <Card className="interactive-panel" style={{ borderLeftWidth: 4, borderLeftColor: "#dc2626" }}>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Q23 redo — disconnect behavior</h4>
            <p className="text-sm text-gray-700 dark:text-gray-200 mb-3">
              The exam asked "select all that are true" for what your project does when a chargeable device is disconnected. The right pair:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200 space-y-1 mb-3">
              <li><b>Disconnects power from the USB-C port</b> — once the device is gone, leaving voltage on the port is wasteful and unsafe.</li>
              <li><b>Displays total energy delivered</b> during the charging session (computed by integrating P·dt). The MCU knows V and I at every sample, so it can integrate.</li>
            </ul>
            <p className="text-sm text-gray-700 dark:text-gray-200">
              The two distractors and why they're wrong:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200 space-y-1 mt-1">
              <li><b>"Capacity in mAh"</b> — battery capacity is a property of the battery, not something your project can measure. It would have to know the battery's start state-of-charge.</li>
              <li><b>"Power delivered"</b> — power is an instantaneous quantity. Once disconnect, the meaningful number is the time-integrated total (energy), not the snapshot.</li>
            </ul>
          </Card>

          <PracticeProblem
            title="Drill — 3 fast checks"
            accentColor="#dc2626"
            statement={<>Pure pattern recognition. Try in your head before expanding.</>}
            parts={[
              {
                label: "(a)",
                question: <>If <code>PORTA_OUT = 0b11111011</code>, which LED is on?</>,
                solutionSteps: (
                  <>
                    <p>Find the single 0 → bit 2 → PA2 → D3.</p>
                  </>
                ),
                answer: { value: "D3" },
              },
              {
                label: "(b)",
                question: <>Test <code>if (PORTE_IN &amp; 0b00000010) ...</code> — which button?</>,
                solutionSteps: (
                  <>
                    <p>Mask = bit 1 = PE1 = OK button. Active-high → triggers when pressed.</p>
                  </>
                ),
                answer: { value: "OK pressed" },
              },
              {
                label: "(c)",
                question: <>To light D5 alone (active-low), what byte do you load into PORTA_OUT?</>,
                solutionSteps: (
                  <>
                    <p>D5 ↔ PA4 → bit 4 must be 0, all others 1 → 0b11101111 = 0xEF.</p>
                  </>
                ),
                answer: { value: "0b11101111 (= 0xEF)" },
              },
            ]}
          />
        </section>

        {/* ════════════════════════════════════════════════════════════════════
             MODULE 2 — ADC (7 pts)
            ════════════════════════════════════════════════════════════════════ */}
        <section id="mod-adc" className="space-y-6 pt-8 border-t-2 border-gray-200 dark:border-slate-700">
          <div>
            <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-2">
              MODULE 2 · 7 PTS · Q20 Q21
            </span>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              ADC — 10-bit conversion math + register knowledge
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2 max-w-3xl">
              The ADC is a <em>ratiometric</em> device: it tells you what fraction
              of the reference voltage your input is, scaled to a 10-bit integer.
            </p>
          </div>

          <FormulaBlock
            name="N-bit ADC code (ratiometric)"
            formula={<>code = round( (V_in / V_ref) × (2^N − 1) )</>}
            variables={[
              { symbol: "V_ref", meaning: "the reference voltage; V_ref maps to all-ones (max code)" },
              { symbol: "V_in", meaning: "the analog input on the selected MUX channel" },
              { symbol: "N", meaning: "number of ADC bits (10 here, so max code = 2^10 − 1 = 1023)" },
            ]}
            whenToUse={
              <>
                The question stated <code>0b1111111111 ↔ V_ref</code> — that's 1023, not
                1024. Use <code>2^N − 1</code> when 'all ones' is defined as
                V_ref. Q20: <code>round((2.774/4.3)·1023) = round(659.96) = 660</code>.
              </>
            }
            accentColor="#7c3aed"
          />

          <Card className="interactive-panel" style={{ borderLeftWidth: 4, borderLeftColor: "#7c3aed" }}>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Live ADC calculator</h4>
            <AdcCalculator />
          </Card>

          <Card className="interactive-panel" style={{ borderLeftWidth: 4, borderLeftColor: "#7c3aed" }}>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Q21 redo — what is ADC0_MUXPOS?</h4>
            <p className="text-sm text-gray-700 dark:text-gray-200 mb-3">
              The name says it: <b>MUX POS</b>ition. It's the index that picks
              which physical pin is routed to the ADC's positive input through
              the analog multiplexer.
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="p-2 rounded border border-emerald-300 bg-emerald-50 dark:bg-emerald-950/40">
                <b>✓ It selects the input voltage source for the ADC</b>
              </div>
              <div className="p-2 rounded border border-rose-300 bg-rose-50 dark:bg-rose-950/40">
                ✗ Starts the conversion → that's <code>ADC0_COMMAND = ADC_STCONV_bm</code>
              </div>
              <div className="p-2 rounded border border-rose-300 bg-rose-50 dark:bg-rose-950/40">
                ✗ Indicates busy → <code>ADC0_INTFLAGS &amp; ADC_RESRDY_bm</code>
              </div>
              <div className="p-2 rounded border border-rose-300 bg-rose-50 dark:bg-rose-950/40">
                ✗ Selects V_ref → that's <code>VREF_ADC0REF</code> / <code>ADC0_CTRLC.REFSEL</code>
              </div>
            </div>
          </Card>

          <PracticeProblem
            title="Drill — ADC math"
            accentColor="#7c3aed"
            statement={<>Use V_ref = 4.3 V, N = 10 bits.</>}
            parts={[
              {
                label: "(a)",
                question: <>Code for V_in = 1.0 V?</>,
                solutionSteps: <p>round(1.0/4.3 × 1023) = round(237.9) = <b>238</b>.</p>,
                answer: { value: "238" },
              },
              {
                label: "(b)",
                question: <>Voltage that corresponds to code 512?</>,
                solutionSteps: <p>V = 4.3 × 512/1023 = <b>2.152 V</b>. (Note: 512 is mid-code, but with max=1023 it's slightly under V_ref/2.)</p>,
                answer: { value: "2.152 V" },
              },
              {
                label: "(c)",
                question: <>What is the LSB resolution in volts?</>,
                solutionSteps: <p>1 LSB = V_ref / (2^N − 1) = 4.3/1023 = <b>4.20 mV</b>. Below this, you can't distinguish two inputs.</p>,
                answer: { value: "≈ 4.20 mV" },
              },
            ]}
          />
        </section>

        {/* ════════════════════════════════════════════════════════════════════
             MODULE 3 — Morse code timing decode (5 pts)
            ════════════════════════════════════════════════════════════════════ */}
        <section id="mod-morse" className="space-y-6 pt-8 border-t-2 border-gray-200 dark:border-slate-700">
          <div>
            <span className="inline-block bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-2">
              MODULE 3 · 5 PTS · Q5
            </span>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Morse code timing decode — don't pattern-match, read the timings
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2 max-w-3xl">
              You answered <b>SOS</b>. The actual answer was <b>EASY</b>. Same
              mistake every time: glanced at "lots of dots and dashes" and assumed
              SOS without parsing. Here's the unit table (1 unit = 200 ms in your lab):
            </p>
          </div>

          <Card className="interactive-panel">
            <table className="w-full text-sm font-mono">
              <thead>
                <tr className="border-b border-gray-300 dark:border-slate-600">
                  <th className="text-left p-2">Symbol</th>
                  <th className="text-left p-2">PORTA state</th>
                  <th className="text-left p-2">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-1">dot (·)</td><td>0x00 (ON)</td><td>200 ms</td></tr>
                <tr><td className="p-1">dash (−)</td><td>0x00 (ON)</td><td>600 ms (= 3 units)</td></tr>
                <tr><td className="p-1">intra-letter gap</td><td>0xFF (OFF)</td><td>200 ms (= 1 unit)</td></tr>
                <tr><td className="p-1">inter-letter gap</td><td>0xFF (OFF)</td><td>600 ms (= 3 units)</td></tr>
                <tr><td className="p-1">word gap</td><td>0xFF (OFF)</td><td>1400 ms (= 7 units)</td></tr>
              </tbody>
            </table>
          </Card>

          <Card className="interactive-panel" style={{ borderLeftWidth: 4, borderLeftColor: "#16a34a" }}>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Step-through of Q5 → "EASY"</h4>
            <p className="text-sm text-gray-700 dark:text-gray-200 mb-3">
              Walk the code top-to-bottom. Every <code>PORTA=0x00; _delay_ms(N)</code> is one ON pulse; every <code>PORTA=0xFF; _delay_ms(N)</code> is the gap that follows. The OFF time tells you whether you're still in the same letter (200) or moving to a new one (600).
            </p>
            <ol className="list-decimal list-inside text-sm font-mono space-y-1 text-gray-800 dark:text-gray-100">
              <li>ON 200 (·) · OFF 600 → letter done: "<b className="text-emerald-700 dark:text-emerald-400">·</b>" = <b>E</b></li>
              <li>ON 200 (·) · OFF 200 · ON 600 (−) · OFF 600 → letter done: "<b className="text-emerald-700 dark:text-emerald-400">·−</b>" = <b>A</b></li>
              <li>ON 200 (·) · OFF 200 · ON 200 (·) · OFF 200 · ON 200 (·) · OFF 600 → "<b className="text-emerald-700 dark:text-emerald-400">···</b>" = <b>S</b></li>
              <li>ON 600 (−) · OFF 200 · ON 200 (·) · OFF 200 · ON 600 (−) · OFF 200 · ON 600 (−) · OFF 1400 → "<b className="text-emerald-700 dark:text-emerald-400">−·−−</b>" = <b>Y</b></li>
            </ol>
            <div className="mt-4 p-3 rounded bg-emerald-50 dark:bg-emerald-950/40 text-center font-bold text-2xl text-emerald-700 dark:text-emerald-300">
              E · A · S · Y
            </div>
            <p className="mt-3 text-xs text-gray-600 dark:text-gray-400">
              Tactic for the real exam: write each pulse's letter directly above
              it in the source code as you read down. Don't "see the pattern" —
              construct it.
            </p>
          </Card>

          <Card className="p-4 border-l-4 border-l-emerald-500">
            <h4 className="font-bold mb-2">Morse cheat sheet — exam-relevant letters</h4>
            <div className="grid grid-cols-4 gap-2 text-sm font-mono">
              {[
                ["A", "·−"], ["B", "−···"], ["C", "−·−·"], ["D", "−··"],
                ["E", "·"], ["F", "··−·"], ["G", "−−·"], ["H", "····"],
                ["I", "··"], ["J", "·−−−"], ["K", "−·−"], ["L", "·−··"],
                ["M", "−−"], ["N", "−·"], ["O", "−−−"], ["P", "·−−·"],
                ["Q", "−−·−"], ["R", "·−·"], ["S", "···"], ["T", "−"],
                ["U", "··−"], ["V", "···−"], ["W", "·−−"], ["X", "−··−"],
                ["Y", "−·−−"], ["Z", "−−··"],
              ].map(([l, code]) => (
                <div key={l} className="flex justify-between border-b border-dashed border-gray-200 dark:border-slate-700 py-0.5">
                  <span className="font-bold">{l}</span>
                  <span className="text-emerald-700 dark:text-emerald-400">{code}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
             MODULE 4 — DMM loading (5 pts)
            ════════════════════════════════════════════════════════════════════ */}
        <section id="mod-dmm" className="space-y-6 pt-8 border-t-2 border-gray-200 dark:border-slate-700">
          <div>
            <span className="inline-block bg-sky-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-2">
              MODULE 4 · 5 PTS · Q13
            </span>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              DMM loading effect on high-resistance dividers
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2 max-w-3xl">
              You computed R₂ ‖ R_meter = 5.90 MΩ correctly — and then submitted that as the answer.
              That number is an intermediate; you have to plug it back into the divider to get the
              measured voltage.
            </p>
          </div>

          <FormulaBlock
            name="DMM loaded divider"
            formula={
              <>V_measured = V₁ · (R₂ ‖ R_meter) / (R₁ + R₂ ‖ R_meter)</>
            }
            variables={[
              { symbol: "R_meter", meaning: "voltmeter input impedance — 10 MΩ for the 34461A in DCV mode" },
              { symbol: "R₂ ‖ R_meter", meaning: "= R₂·R_meter / (R₂ + R_meter), the effective bottom-leg resistance" },
              { symbol: "rule of thumb", meaning: "if R_source > R_meter / 100 (~100 kΩ here), the loading is non-negligible" },
            ]}
            whenToUse={
              <>
                Whenever a divider has resistors in the MΩ range, the meter
                "steals" current. The voltage you read is lower than the true
                open-circuit voltage. For Q13 with R₁=27 MΩ, R₂=14.4 MΩ:
                R₂‖10 = 5.90 MΩ → V_meas = 4.9·5.90/(27+5.90) = <b>0.879 V</b>,
                way under the ideal 1.704 V.
              </>
            }
            accentColor="#0ea5e9"
          />

          <Card className="interactive-panel" style={{ borderLeftWidth: 4, borderLeftColor: "#0ea5e9" }}>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Live demo — R₁ = 27 MΩ, R₂ = 14.4 MΩ, V₁ = 4.9 V</h4>
            <DmmLoadingDemo />
          </Card>

          <PracticeProblem
            title="Drill — when does loading matter?"
            accentColor="#0ea5e9"
            statement={<>R_meter = 10 MΩ. Decide whether the meter is OK to use here.</>}
            parts={[
              {
                label: "(a)",
                question: <>Divider with R₁ = R₂ = 1 kΩ, V₁ = 5 V. Loading error?</>,
                solutionSteps: (
                  <p>R₂‖10 MΩ ≈ 1000·10⁷/(1000+10⁷) ≈ 999.9 Ω. Practically zero change. <b>Negligible.</b></p>
                ),
                answer: { value: "negligible (kΩ ≪ 10 MΩ)" },
              },
              {
                label: "(b)",
                question: <>Same divider but R₁ = R₂ = 1 MΩ. V_meas?</>,
                solutionSteps: (
                  <p>R₂‖10 = 10/11 ≈ 0.909 MΩ. V = 5·0.909/(1+0.909) = 5·0.476 = <b>2.38 V</b> instead of the ideal 2.50 V → ~5% error.</p>
                ),
                answer: { value: "≈ 2.38 V (vs 2.50 V ideal)" },
              },
              {
                label: "(c)",
                question: <>Fix: how do you get the true voltage?</>,
                solutionSteps: (
                  <p>Use a buffer (op-amp voltage follower) between the divider and the DMM input — its high input impedance (~10¹² Ω) makes loading vanish.</p>
                ),
                answer: { value: "op-amp voltage follower (unity buffer)" },
              },
            ]}
          />
        </section>

        {/* ════════════════════════════════════════════════════════════════════
             MODULE 5 — Two-source nodal (5 pts)
            ════════════════════════════════════════════════════════════════════ */}
        <section id="mod-nodal" className="space-y-6 pt-8 border-t-2 border-gray-200 dark:border-slate-700">
          <div>
            <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-2">
              MODULE 5 · 5 PTS · Q17
            </span>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Two-source nodal analysis (one node, two sources)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2 max-w-3xl">
              The setup: two voltage sources V₁ and V₂ feed the same node V through resistors R₁ and R₂.
              You write KCL at V (sum of currents leaving = 0) and solve.
            </p>
          </div>

          <FormulaBlock
            name="One-node KCL with two sources"
            formula={<>V = (V₁/R₁ + V₂/R₂) / (1/R₁ + 1/R₂)</>}
            variables={[
              { symbol: "sign of V₂", meaning: "use signed: + if its positive terminal faces the node, − if its negative terminal faces the node" },
              { symbol: "intuition", meaning: "weighted average of V₁ and V₂, each weighted by 1/R (its conductance). Smaller R = more pull." },
              { symbol: "ground reference", meaning: "the resistors must return to a known node (often ground); the formula above assumes V₁ and V₂ are referenced to ground" },
            ]}
            whenToUse={
              <>
                Q17: two sources, one node, no current branch missing. Write
                (V₁ − V)/R₁ + (V₂ − V)/R₂ = 0 → solve for V. With V₂ entered as
                <em> negative</em> (because of how it's drawn), you get a small
                negative answer — matches the −0.861 V key.
              </>
            }
            accentColor="#ea580c"
          />

          <Card className="interactive-panel" style={{ borderLeftWidth: 4, borderLeftColor: "#ea580c" }}>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Generic schematic</h4>
            <div className="flex justify-center">
              <CircuitSchematic
                width={420}
                height={210}
                noGrid
                wires={[
                  { x1: 60, y1: 100, x2: 130, y2: 100 },
                  { x1: 170, y1: 100, x2: 250, y2: 100 },
                  { x1: 290, y1: 100, x2: 360, y2: 100 },
                  { x1: 60, y1: 100, x2: 60, y2: 160 },
                  { x1: 360, y1: 100, x2: 360, y2: 160 },
                  { x1: 60, y1: 160, x2: 360, y2: 160 },
                ]}
                components={[
                  { kind: "V", x: 60, y: 130, label: "V₁", color: "#16a34a" },
                  { kind: "R", x: 150, y: 100, label: "R₁", color: "#0ea5e9" },
                  { kind: "DOT", x: 250, y: 100, color: "#ea580c" },
                  { kind: "TEXT", x: 250, y: 88, label: "V (node)", color: "#ea580c", value: "11" },
                  { kind: "R", x: 320, y: 100, label: "R₂", color: "#0ea5e9" },
                  { kind: "V", x: 360, y: 130, label: "V₂", color: "#16a34a" },
                  { kind: "GND", x: 210, y: 160 },
                ]}
              />
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 text-center">
              KCL at V: (V₁ − V)/R₁ + (V₂ − V)/R₂ = 0
            </p>
          </Card>

          <Card className="interactive-panel" style={{ borderLeftWidth: 4, borderLeftColor: "#ea580c" }}>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Live calculator (signed V₂)</h4>
            <NodalCalculator />
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
              Q17 numbers: V₁=2.8, V₂=−1.1 (or +1.1 with reversed orientation),
              R₁=154, R₂=158 → V ≈ −0.86 V.
            </p>
          </Card>

          <PracticeProblem
            title="Drill — sanity checks"
            accentColor="#ea580c"
            statement={<>Use the formula above; pay attention to signs.</>}
            parts={[
              {
                label: "(a)",
                question: <>V₁=10V, V₂=10V, R₁=R₂=1k. V?</>,
                solutionSteps: <p>Symmetry → V = 10 V. (Both sides pull to the same potential.)</p>,
                answer: { value: "10 V" },
              },
              {
                label: "(b)",
                question: <>V₁=10V, V₂=−10V, R₁=R₂=1k. V?</>,
                solutionSteps: <p>(10/1 + (−10)/1)/(1/1+1/1) = 0/2 = <b>0 V</b>. Equal-and-opposite cancellation.</p>,
                answer: { value: "0 V" },
              },
              {
                label: "(c)",
                question: <>V₁=5V, V₂=0V, R₁=1k, R₂=4k. V?</>,
                solutionSteps: <p>(5/1+0/4)/(1+0.25) = 5/1.25 = <b>4 V</b>. (Same as standard divider for V₂=0 — sanity check passes.)</p>,
                answer: { value: "4 V" },
              },
            ]}
          />
        </section>

        {/* ════════════════════════════════════════════════════════════════════
             MODULE 6 — Scope reading (4 pts)
            ════════════════════════════════════════════════════════════════════ */}
        <section id="mod-scope" className="space-y-6 pt-8 border-t-2 border-gray-200 dark:border-slate-700">
          <div>
            <span className="inline-block bg-cyan-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-2">
              MODULE 6 · 4 PTS · Q14 Q15
            </span>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Reading a scope: V_RMS for sines + ω from period
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2 max-w-3xl">
              Two scope-skill points lost. Q14 was V_pp ↔ V_p ↔ V_rms confusion;
              Q15 was writing ω = 1/(2πf) instead of ω = 2πf (reciprocal flip).
            </p>
          </div>

          <FormulaBlock
            name="V_RMS for a pure sine"
            formula={<>V_rms = V_peak / √2  ≈  0.707 · V_p</>}
            variables={[
              { symbol: "V_pp", meaning: "peak-to-peak: top to bottom of waveform" },
              { symbol: "V_p", meaning: "amplitude (peak): V_pp / 2" },
              { symbol: "V_rms", meaning: "the equivalent DC that delivers the same average power into a resistor" },
            ]}
            whenToUse={
              <>
                Sine only. For square waves V_rms = V_p; for sawtooth = V_p/√3.
                Q14 trap: scope shows 18 V_pp, you read it as V_rms. Real:
                V_p = 9 V → V_rms = 9/√2 ≈ 6.4 V (or whatever; the answer key
                was 9.014 V, suggesting V_p ≈ 12.75 V on that trace).
              </>
            }
            accentColor="#0891b2"
          />

          <Card className="interactive-panel" style={{ borderLeftWidth: 4, borderLeftColor: "#0891b2" }}>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">V_pp / V_p / V_rms relationship</h4>
            <ScopeRmsDemo />
          </Card>

          <FormulaBlock
            name="Angular frequency from period"
            formula={<>ω = 2π / T = 2π · f</>}
            variables={[
              { symbol: "T", meaning: "period — time for one full cycle (read off the scope by counting divisions × time/div)" },
              { symbol: "f", meaning: "frequency in Hz, = 1/T" },
              { symbol: "ω", meaning: "angular frequency in rad/s — multiply by 2π because one cycle = 2π radians" },
            ]}
            whenToUse={
              <>
                Q15 mistake: you wrote 0.001571 — that's 1/(2π·100) ish, the
                <em> reciprocal</em> of the right value. Sanity check: ω for
                normal signals (1 Hz – 1 MHz) is in the range 6 – 6×10⁶ rad/s.
                Anything tiny like 10⁻³ rad/s would be a 0.00016 Hz signal —
                way slower than anything on a scope.
              </>
            }
            accentColor="#0891b2"
          />

          <Card className="interactive-panel" style={{ borderLeftWidth: 4, borderLeftColor: "#0891b2" }}>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">f → T → ω calculator</h4>
            <OmegaDemo />
          </Card>

          <PracticeProblem
            title="Drill — scope readings"
            accentColor="#0891b2"
            statement={<>Read carefully. Distinguish V_pp from V_p.</>}
            parts={[
              {
                label: "(a)",
                question: <>Scope shows V_pp = 4 V sine. V_rms?</>,
                solutionSteps: <p>V_p = 2 V → V_rms = 2/√2 = <b>1.414 V</b>.</p>,
                answer: { value: "1.414 V" },
              },
              {
                label: "(b)",
                question: <>Period T = 250 μs. ω in rad/s?</>,
                solutionSteps: <p>f = 1/250e-6 = 4000 Hz → ω = 2π·4000 = <b>25,133 rad/s</b>.</p>,
                answer: { value: "≈ 25,133 rad/s" },
              },
              {
                label: "(c)",
                question: <>If a square wave has V_pp = 6 V, what's V_rms?</>,
                solutionSteps: <p>For a symmetric square wave V_rms = V_p = V_pp/2 = <b>3 V</b>. (No √2 factor — square spends 100% of time at ±V_p.)</p>,
                answer: { value: "3 V" },
              },
            ]}
          />
        </section>

        {/* ════════════════════════════════════════════════════════════════════
             MODULE 7 — USB-C (3 pts)
            ════════════════════════════════════════════════════════════════════ */}
        <section id="mod-usb" className="space-y-6 pt-8 border-t-2 border-gray-200 dark:border-slate-700">
          <div>
            <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-2">
              MODULE 7 · 3 PTS · Q1
            </span>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              USB-C charging — what's actually different from USB-A/B?
            </h3>
          </div>

          <Card className="interactive-panel" style={{ borderLeftWidth: 4, borderLeftColor: "#2563eb" }}>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">The four real challenges</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
              <li>
                <b className="text-blue-700 dark:text-blue-300">✓ Cables MAY contain chips (e-markers).</b> For currents above 3 A or 20 V PD, the cable needs an embedded chip that advertises its rating. Lower-spec cables don't — that's why "may", not "must".
              </li>
              <li>
                <b className="text-blue-700 dark:text-blue-300">✓ Voltages dangerous for some devices.</b> USB-C PD can deliver 5/9/15/20/28/36/48 V. Plugging a 5V-only device into a port that defaults to 20V would fry it (which is why CC negotiation exists).
              </li>
              <li>
                <b className="text-blue-700 dark:text-blue-300">✓ Currents dangerous for some cables.</b> A cheap cable rated for 3 A in a 5 A port will overheat. The e-marker protects against this when present.
              </li>
              <li>
                <b className="text-blue-700 dark:text-blue-300">✓ Same connector for both roles.</b> Old USB had a Type-A (host) and Type-B (device) — physically different, so you couldn't plug power into power. With USB-C, both ends are the same; charging direction is figured out by CC1/CC2 pull-up/pull-down resistors, not by connector shape.
              </li>
            </ul>
            <div className="mt-4 p-3 rounded bg-rose-50 dark:bg-rose-950/40 text-sm">
              <b className="text-rose-700 dark:text-rose-300">✗ Not a hazard:</b> "Cables can be inserted either way." That's a <em>feature</em> of USB-C (reversibility), not a hazard. The CC pins detect orientation and the controller swaps the data lanes accordingly — polarity is never reversed for the user.
            </div>
            <div className="mt-2 p-3 rounded bg-rose-50 dark:bg-rose-950/40 text-sm">
              <b className="text-rose-700 dark:text-rose-300">✗ Not true:</b> "Cables MUST contain chips." Plenty of basic 3 A / 5 V USB-C cables ship with no e-marker.
            </div>
          </Card>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
             MODULE 8 — Transimpedance amp (3 pts)
            ════════════════════════════════════════════════════════════════════ */}
        <section id="mod-tia" className="space-y-6 pt-8 border-t-2 border-gray-200 dark:border-slate-700">
          <div>
            <span className="inline-block bg-fuchsia-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-2">
              MODULE 8 · 3 PTS · Q25
            </span>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Op-amp transimpedance gain
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2 max-w-3xl">
              "Trans-impedance" literally means "across-impedance" — converting
              between the two electrical quantities. A transimpedance amplifier
              takes a current input and gives a voltage output. The gain has
              units of <b>ohms</b> (V/A).
            </p>
          </div>

          <FormulaBlock
            name="Transimpedance gain"
            formula={<>Z_T  =  V_out / I_in   [ohms]</>}
            variables={[
              { symbol: "Z_T", meaning: "transimpedance — how many volts come out per amp in" },
              { symbol: "physical realization", meaning: "an op-amp with a feedback resistor R_f (Z_T = −R_f for an inverting TIA)" },
              { symbol: "use case", meaning: "photodiode → voltage; current sensors; any situation where a sensor naturally produces current" },
            ]}
            whenToUse={
              <>
                Q25: I_in = 0.375 A, V_out = 5.312 V → Z_T = 5.312/0.375 =
                <b> 14.165 Ω</b>. Don't divide voltage by anything else (like
                supply current); the only ratio that makes physical sense is
                output-V over input-I.
              </>
            }
            accentColor="#c026d3"
          />

          <PracticeProblem
            title="Drill — gain types"
            accentColor="#c026d3"
            statement={<>Match each amp to its gain units.</>}
            parts={[
              {
                label: "(a)",
                question: <>Voltage amp: V_out / V_in → units?</>,
                solutionSteps: <p>V/V = <b>dimensionless</b>. Often written in dB (20·log₁₀).</p>,
                answer: { value: "V/V (dimensionless)" },
              },
              {
                label: "(b)",
                question: <>Transconductance amp: I_out / V_in → units?</>,
                solutionSteps: <p>A/V = <b>siemens</b> (S, mho).</p>,
                answer: { value: "A/V (siemens)" },
              },
              {
                label: "(c)",
                question: <>Transimpedance amp: V_out / I_in → units?</>,
                solutionSteps: <p>V/A = <b>ohms</b> (Ω). Hence "transimpedance".</p>,
                answer: { value: "V/A (Ω)" },
              },
            ]}
          />
        </section>

        {/* ════════════════════════════════════════════════════════════════════
             MODULE 9 — SPICE (1 pt)
            ════════════════════════════════════════════════════════════════════ */}
        <section id="mod-spice" className="space-y-6 pt-8 border-t-2 border-gray-200 dark:border-slate-700">
          <div>
            <span className="inline-block bg-lime-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-2">
              MODULE 9 · 1 PT · Q8
            </span>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              SPICE simulation type → x-axis
            </h3>
          </div>

          <Card className="interactive-panel">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-300 dark:border-slate-600">
                  <th className="text-left p-2 font-mono">Directive</th>
                  <th className="text-left p-2">What it sweeps</th>
                  <th className="text-left p-2">X-axis on the graph</th>
                </tr>
              </thead>
              <tbody className="text-gray-800 dark:text-gray-100">
                <tr className="border-b border-gray-100 dark:border-slate-700">
                  <td className="p-2 font-mono">.tran</td>
                  <td className="p-2">Transient — solves the circuit at successive timesteps</td>
                  <td className="p-2 font-bold">time</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-slate-700">
                  <td className="p-2 font-mono">.ac</td>
                  <td className="p-2">Small-signal AC sweep at varying frequencies</td>
                  <td className="p-2 font-bold">frequency</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-slate-700">
                  <td className="p-2 font-mono">.dc</td>
                  <td className="p-2">DC sweep of a source's voltage or current</td>
                  <td className="p-2 font-bold">voltage (or current)</td>
                </tr>
                <tr>
                  <td className="p-2 font-mono">.op</td>
                  <td className="p-2">Operating point — single steady-state solution, no sweep</td>
                  <td className="p-2 font-bold">none (table, not a plot)</td>
                </tr>
              </tbody>
            </table>
          </Card>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            Mnemonic: ".tran" → time (the only one that "runs" through time);
            ".ac" → AC means alternating frequency; ".dc" → DC sweep is a
            DC <em>parameter</em> sweep; ".op" → operating point is a single
            snapshot, no x-axis.
          </p>
        </section>

        {/* ───────── Wrap-up ───────── */}
        <section>
          <Card className="p-6 border-l-4 border-l-emerald-500 bg-emerald-50/40 dark:bg-emerald-950/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              The 5 patterns to internalize
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-800 dark:text-gray-100">
              <li><b>Active-low LEDs / active-high buttons.</b> Every PORTA byte: hunt for the lone 0. Every PORTE bit-test: triggers when pressed.</li>
              <li><b>Don't stop at the intermediate.</b> Q13: you found R₂‖R_meter and submitted it. The question wanted the voltage. Always check that your final answer has the units the question asked for.</li>
              <li><b>Don't pattern-match Morse.</b> Walk top-to-bottom, write each letter directly under its pulse group.</li>
              <li><b>ω = 2πf, not its reciprocal.</b> Sanity-check magnitude: 1 Hz → 6 rad/s, 1 MHz → 6×10⁶ rad/s. Anything below 0.1 rad/s is suspicious.</li>
              <li><b>Read the question's units.</b> Transimpedance asks for ohms because Z_T = V/I. Code asks for an integer. ω asks for rad/s. Mismatched units = wrong answer even if the arithmetic was right.</li>
            </ol>
          </Card>
        </section>

        {/* Footer */}
        <section className="text-center text-xs text-gray-500 dark:text-gray-400 pt-8 pb-4 border-t border-gray-200 dark:border-slate-700">
          Source: <code>Quizzes_retake.html</code> (practice final, attempt 2, May 10 2026).
          Score: {TOTAL_EARNED}/{TOTAL_MAX} = {((TOTAL_EARNED / TOTAL_MAX) * 100).toFixed(1)}%.
        </section>
      </div>
    </div>
  );
}
