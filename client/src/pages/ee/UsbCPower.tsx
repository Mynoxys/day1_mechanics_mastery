import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { LiveValue } from "@/components/ee/LiveValue";
import { CircuitSchematic } from "@/components/ee/CircuitSchematic";
import { FormulaBlock } from "@/components/midterm/FormulaBlock";
import { WorkedExample, Eq, Why } from "@/components/midterm/WorkedExample";
import { PracticeProblem } from "@/components/midterm/PracticeProblem";

const ACCENT = "#f59e0b";

function CcDetectionFig({
  cc1,
  cc2,
}: {
  cc1: number;
  cc2: number;
}) {
  const ccColor = (v: number) => {
    if (v >= 0.7 && v <= 2.0) return "#f59e0b"; // device
    if (v < 0.5) return "#10b981"; // active cable
    if (v > 4.5) return "#94a3b8"; // open
    return "#ef4444";
  };
  return (
    <CircuitSchematic
      width={460}
      height={210}
      noGrid
      wires={[
        // host side rail
        { x1: 30, y1: 30, x2: 130, y2: 30 },
        { x1: 30, y1: 30, x2: 30, y2: 60 },
        { x1: 30, y1: 90, x2: 30, y2: 130 },
        // CC1 sense line out of host
        { x1: 30, y1: 110, x2: 220, y2: 110 },
        // CC2 sense line
        { x1: 60, y1: 30, x2: 60, y2: 60 },
        { x1: 60, y1: 90, x2: 60, y2: 145 },
        { x1: 60, y1: 145, x2: 220, y2: 145 },
        // device side
        { x1: 240, y1: 110, x2: 350, y2: 110 },
        { x1: 240, y1: 145, x2: 350, y2: 145 },
        { x1: 350, y1: 110, x2: 350, y2: 130 },
        { x1: 350, y1: 160, x2: 350, y2: 180 },
        { x1: 350, y1: 145, x2: 410, y2: 145 },
        { x1: 410, y1: 145, x2: 410, y2: 180 },
        { x1: 350, y1: 180, x2: 410, y2: 180 },
      ]}
      components={[
        { kind: "TEXT", x: 75, y: 16, label: "VCC (5V)", color: "#dc2626", value: "11" },
        // Host Rp pull-ups
        { kind: "R", x: 30, y: 75, label: "Rp", color: "#10b981", labelPos: "left" },
        { kind: "R", x: 60, y: 75, label: "Rp", color: "#10b981", labelPos: "right" },
        // Cable break
        { kind: "TEXT", x: 230, y: 100, label: "cable", color: "#475569", value: "9" },
        { kind: "TEXT", x: 230, y: 156, label: "cable", color: "#475569", value: "9" },
        // CC voltages annotated
        { kind: "TEXT", x: 175, y: 100, label: `CC1 = ${cc1.toFixed(2)}V`, color: ccColor(cc1), value: "10" },
        { kind: "TEXT", x: 175, y: 135, label: `CC2 = ${cc2.toFixed(2)}V`, color: ccColor(cc2), value: "10" },
        // Device Rd
        { kind: "R", x: 350, y: 145, label: "Rd 5.1kΩ", color: "#10b981", labelPos: "right" },
        { kind: "GND", x: 380, y: 180 },
        { kind: "TEXT", x: 75, y: 175, label: "HOST", color: "#475569", value: "11" },
        { kind: "TEXT", x: 380, y: 105, label: "DEVICE", color: "#475569", value: "11" },
      ]}
    />
  );
}

function UsbCPinoutFig() {
  return (
    <svg width={360} height={180} viewBox="0 0 360 180" className="bg-white dark:bg-slate-900/60 rounded border border-gray-200 dark:border-slate-700">
      <rect x={30} y={50} width={300} height={70} rx={6} fill="white" stroke="#475569" strokeWidth={2} />
      <rect x={45} y={68} width={270} height={34} rx={4} fill="#e2e8f0" />
      {/* Pins (top row) */}
      {Array.from({ length: 12 }).map((_, i) => {
        const labels = ["GND", "TX1+", "TX1−", "VBUS", "CC1", "D+", "D−", "SBU1", "VBUS", "RX2−", "RX2+", "GND"];
        const x = 50 + i * 23;
        const colors = ["#475569", "#06b6d4", "#06b6d4", "#dc2626", "#f59e0b", "#06b6d4", "#06b6d4", "#94a3b8", "#dc2626", "#06b6d4", "#06b6d4", "#475569"];
        return (
          <g key={i}>
            <rect x={x} y={70} width={16} height={4} fill={colors[i]} />
            <text x={x + 8} y={132} fontSize={8} fill={colors[i]} textAnchor="middle" fontFamily="monospace">
              {labels[i]}
            </text>
          </g>
        );
      })}
      {/* Pins (bottom row) — flipped */}
      {Array.from({ length: 12 }).map((_, i) => {
        const labels = ["GND", "RX1+", "RX1−", "VBUS", "SBU2", "D−", "D+", "CC2", "VBUS", "TX2−", "TX2+", "GND"];
        const x = 50 + i * 23;
        const colors = ["#475569", "#06b6d4", "#06b6d4", "#dc2626", "#94a3b8", "#06b6d4", "#06b6d4", "#f59e0b", "#dc2626", "#06b6d4", "#06b6d4", "#475569"];
        return (
          <g key={i}>
            <rect x={x} y={96} width={16} height={4} fill={colors[i]} />
            <text x={x + 8} y={150} fontSize={8} fill={colors[i]} textAnchor="middle" fontFamily="monospace">
              {labels[i]}
            </text>
          </g>
        );
      })}
      <text x={180} y={28} fontSize={12} fill="#475569" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
        USB-C receptacle (24 pins)
      </text>
      <text x={180} y={170} fontSize={9} fill="#475569" textAnchor="middle" fontFamily="monospace">
        symmetric: cable can plug in either orientation — CC line tells host which
      </text>
    </svg>
  );
}

interface CcResult {
  label: string;
  detail: string;
  color: string;
}

function classifyCc(cc1: number, cc2: number): CcResult {
  const inDeviceRange = (v: number) => v >= 0.7 && v <= 2.0;
  const isOpen = (v: number) => v > 4.5; // pulled up, no device
  const isActive = (v: number) => v < 0.5; // very low → active (chipped) cable

  if (isOpen(cc1) && isOpen(cc2)) {
    return {
      label: "Nothing connected",
      detail: "Both CC lines pulled up — no device, no cable.",
      color: "#94a3b8",
    };
  }
  if (isActive(cc1) || isActive(cc2)) {
    return {
      label: "Chargeable device · ACTIVE cable",
      detail: "Low CC voltage (~0.2 V) ⇒ cable has Rd chips identifying capability.",
      color: "#10b981",
    };
  }
  if (inDeviceRange(cc1) || inDeviceRange(cc2)) {
    return {
      label: "Chargeable device · PASSIVE cable",
      detail: "0.7-2.0 V on one CC ⇒ device's Rd terminator is connected via a default cable.",
      color: ACCENT,
    };
  }
  if (!isOpen(cc1) && !isOpen(cc2)) {
    return {
      label: "Another USB power supply",
      detail: "Both CC lines pulled down by another source (Rp on both sides).",
      color: "#ef4444",
    };
  }
  return {
    label: "Ambiguous",
    detail: "CC voltages outside expected ranges. Check connections.",
    color: "#475569",
  };
}

export default function UsbCPower() {
  const [cc1, setCc1] = useState(1.032);
  const [cc2, setCc2] = useState(4.96);
  const [v, setV] = useState(5);
  const [i, setI] = useState(3);
  const result = classifyCc(cc1, cc2);
  const power = v * i;
  const dangerous = v > 20 || i > 3;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/ee">
            <Button variant="ghost" className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <ChevronLeft className="w-5 h-5" /> Back to ESE 123
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">USB-C Power Delivery</h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container py-12 space-y-12">
        <section>
          <span className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-3">
            CLUSTER 5 · Q1 Q22 Q23 Q24
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            CC Detection, Active vs Passive Cables, Super Capacitors
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            From Prelab 12: "a potential between 0.7 V and 2.0 V on either CC line means a device
            is connected." About 0.2 V indicates an active (chipped) cable's voltage divider; ~5 V
            is the open pull-up. USB-PD 3 allows up to 48 V and 5 A — dangerous for cheap cables.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="interactive-panel space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">CC1 / CC2 detector</h3>
            <div className="flex justify-center">
              <CcDetectionFig cc1={cc1} cc2={cc2} />
            </div>
            <div>
              <Label className="text-xs">CC1: {cc1.toFixed(3)} V</Label>
              <Slider min={0} max={5.2} step={0.01} value={[cc1]} onValueChange={(v) => setCc1(v[0])} />
            </div>
            <div>
              <Label className="text-xs">CC2: {cc2.toFixed(3)} V</Label>
              <Slider min={0} max={5.2} step={0.01} value={[cc2]} onValueChange={(v) => setCc2(v[0])} />
            </div>
            <div
              className="rounded-lg p-4 border-l-4"
              style={{ borderLeftColor: result.color, backgroundColor: result.color + "15" }}
            >
              <div className="text-lg font-bold" style={{ color: result.color }}>
                {result.label}
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-200 mt-1">
                {result.detail}
              </div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 border-t pt-2">
              Q22 preset: CC1 = 1.032 V, CC2 = 4.96 V → device with passive cable.
            </div>
          </Card>

          <Card className="interactive-panel space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Power & danger meter</h3>
            <div className="flex justify-center">
              <UsbCPinoutFig />
            </div>
            <div>
              <Label className="text-xs">V (V): {v.toFixed(1)}</Label>
              <Slider min={5} max={48} step={1} value={[v]} onValueChange={(x) => setV(x[0])} />
            </div>
            <div>
              <Label className="text-xs">I (A): {i.toFixed(2)}</Label>
              <Slider min={0.5} max={5} step={0.1} value={[i]} onValueChange={(x) => setI(x[0])} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <LiveValue label="Power" value={power.toFixed(1)} unit="W" accentColor="#c026d3" />
              <LiveValue
                label="Status"
                value={dangerous ? "DANGEROUS for cheap cable" : "OK"}
                accentColor={dangerous ? "#ef4444" : "#10b981"}
              />
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 border-t pt-2">
              USB-PD 3 supports up to 48 V × 5 A = 240 W. Cables without proper chips can't safely carry the higher currents.
            </div>
          </Card>
        </section>

        <section className="grid md:grid-cols-3 gap-4">
          <FormulaBlock
            name="CC voltage ranges"
            formula={
              <>
                ~5 V open · 0.7-2.0 V device · ~0.2 V active cable
              </>
            }
            variables={[
              {
                symbol: "Rp",
                meaning:
                  "the host's pull-up resistor on the CC line (typically 22 kΩ for default, smaller for higher current)",
              },
              {
                symbol: "Rd",
                meaning:
                  "the device's pull-down resistor on its CC line (typically 5.1 kΩ — the universal device signature)",
              },
            ]}
            whenToUse={
              <>
                The CC pin is the host's way of asking 'what's plugged into me?'
                — and the answer is encoded as a voltage. With nothing
                connected, the host's Rp pulls CC up to ~5 V. With a device
                plugged in, Rd makes a divider with Rp, dropping CC to 0.7–2.0
                V. With an active cable, an e-marker chip pulls CC even lower
                (~0.2 V). Read the CC pin that DROPPED — that's the side
                that's plugged in (the other CC pin tells you which way the
                cable is oriented).
              </>
            }
            accentColor={ACCENT}
          />
          <FormulaBlock
            name="Cable identity"
            formula={<>chip ↔ rated current (3 A vs 5 A)</>}
            variables={[
              {
                symbol: "passive",
                meaning:
                  "ordinary cable with no chip — host assumes default 3 A max for safety",
              },
              {
                symbol: "active",
                meaning:
                  "cable with an e-marker chip on the CC line — can advertise capabilities up to 5 A and 50 V",
              },
            ]}
            whenToUse={
              <>
                The reason USB-C cables "may contain chips": some cables can
                handle higher current/voltage than others, and there's no way
                to look at a cable from outside and know which is which. The
                e-marker chip tells the host the cable's capability so it
                doesn't push 5 A through a 3 A cable and start a fire. If the
                host can't read an e-marker, it falls back to 3 A — safe but
                slow.
              </>
            }
            accentColor="#10b981"
          />
          <FormulaBlock
            name="Power = V × I"
            formula={<>P = V·I &nbsp;·&nbsp; 240 W max in PD3</>}
            variables={[
              {
                symbol: "P",
                meaning: "power transmitted through the cable",
                units: "W",
              },
              {
                symbol: "PD3 limit",
                meaning:
                  "240 W max = 48 V × 5 A. Older PD 2.0 capped at 100 W (20 V × 5 A)",
              },
            ]}
            whenToUse={
              <>
                Power = voltage × current. To deliver more wattage to a laptop
                or charging device, USB-C PD increases voltage (up to 48 V),
                NOT just current — running 240 W as 5 V × 48 A would melt the
                connector pins. Doubling V at constant P also halves I, which
                cuts I²R cable loss to a quarter. That's why fast-charging
                voltages keep climbing: efficiency, not capability.
              </>
            }
            accentColor="#c026d3"
          />
        </section>

        <WorkedExample
          title="Q1 — USB-C charging challenges (multi-select)"
          accentColor={ACCENT}
          problemStatement={<>Select all true challenges of USB-C charging vs older USB.</>}
          steps={[
            {
              heading: "(FALSE) Cables MUST contain chips",
              body: (
                <>
                  <Why>
                    The wording matters. The USB-C spec says cables <em>may</em>
                    include an e-marker chip; only the higher-current (&gt; 3 A) and
                    higher-data-rate cables are required to. A bog-standard
                    USB-C-to-USB-C charging cable rated for 3 A has no chip at all
                    and works fine for the vast majority of phone-charging scenarios.
                    So the strong claim "MUST contain chips" is wrong.
                  </Why>
                </>
              ),
            },
            {
              heading: "(TRUE) Currents dangerous for some cables",
              body: (
                <>
                  <Why>
                    USB-PD 3 supports up to 5 A. A cable rated for 3 A only has
                    smaller-gauge conductors, and forcing 5 A through it produces
                    I²R heating that can melt insulation, causing fires. Without a
                    cable e-marker chip identifying the cable as 5 A-capable, a
                    cautious host should refuse to negotiate above 3 A.
                  </Why>
                </>
              ),
            },
            {
              heading: "(TRUE) Cables MAY contain chips",
              body: (
                <>
                  <Why>
                    The e-marker chip is an optional but common cable feature. It
                    identifies the cable's max current rating, data-rate
                    capability, and other parameters to the connected host/device,
                    enabling safe negotiation of high-power profiles.
                  </Why>
                </>
              ),
            },
            {
              heading: "(TRUE) Reversible insertion → polarity reversal",
              body: (
                <>
                  <Why>
                    USB-C is intentionally symmetric — the plug works in either
                    orientation. To make this work, the connector duplicates many
                    pins (TX/RX pairs, both VBUS and GND, etc.) on each side. The
                    CC1 and CC2 pins let the host figure out which orientation the
                    user inserted, so it can route signals correctly. From the
                    designer's standpoint this introduces real complexity (and
                    bugs).
                  </Why>
                </>
              ),
            },
            {
              heading: "(TRUE) Voltages dangerous for some devices",
              body: (
                <>
                  <Why>
                    Older USB hardcoded 5 V. USB-PD 3 supports 5 V, 9 V, 15 V, 20
                    V, and extended profiles up to 48 V. Plug a USB-C cable into a
                    receptacle expecting 5 V but actually negotiating 20 V, and
                    you'll fry the device. The protocol prevents this when both
                    ends speak PD correctly, but the danger exists.
                  </Why>
                </>
              ),
            },
            {
              heading: "(TRUE) Charging roles not signaled by connector",
              body: (
                <>
                  <Why>
                    Both ends of a USB-C-to-USB-C cable look identical. There's no
                    fixed host/device asymmetry baked into the connector. Instead,
                    each end pulls its CC line either up (Rp = source role) or
                    down (Rd = sink role). The hosts negotiate roles dynamically
                    via these resistor configurations and PD messaging.
                  </Why>
                </>
              ),
              result: { label: "Selections", value: "2, 3, 4, 5, 6", color: "amber" },
            },
          ]}
          keyInsight={<>Reading the wording matters. "must contain chips" is FALSE; "may contain chips" is TRUE.</>}
        />

        <WorkedExample
          title="Q22 — CC1 = 1.032 V, CC2 = 4.96 V"
          accentColor={ACCENT}
          problemStatement={
            <>Identify the connection from the CC voltages.</>
          }
          steps={[
            {
              heading: "Categorize each CC line based on its voltage range",
              body: (
                <>
                  <Why>
                    USB-C uses voltage ranges on the CC pins to encode connection
                    state. The host (source) ties each CC line through a pull-up
                    resistor Rp to ~5 V. When nothing's connected, both CC lines
                    sit near 5 V (open pull-up). When a device is plugged in, its
                    pull-down resistor Rd creates a divider with Rp, dropping the
                    CC voltage to a known value depending on the cable type.
                  </Why>
                  <Why>
                    Standard ranges:
                    <br />• &gt; 4.5 V — open / nothing connected
                    <br />• 0.7-2.0 V — device with passive cable (no e-marker chip)
                    <br />• ~0.2 V — device with active (e-marker-chipped) cable
                  </Why>
                  <Why>
                    Apply to our values:
                  </Why>
                  <Eq>CC1 = 1.032 V → in 0.7-2.0 V range → device's Rd loading this line</Eq>
                  <Eq>CC2 = 4.96 V → above 4.5 V → open pull-up, no Rd on this side</Eq>
                  <Why>
                    Only ONE of the two CC lines sees the device's Rd at any
                    time. Which one depends on the plug's orientation in the
                    receptacle. CC1 is loaded here, so the plug went in the
                    "CC1-side-aligned" way.
                  </Why>
                </>
              ),
            },
            {
              heading: "Determine cable type from CC1's voltage",
              body: (
                <>
                  <Why>
                    1.032 V is well above the ~0.2 V threshold for an active
                    e-marker cable. An active cable's chip clamps the CC line
                    much lower because it adds its own Rd in addition to the
                    device's. So the cable here must be passive — a plain
                    no-chip cable that lets the divider produce the standard
                    1 V-ish reading.
                  </Why>
                </>
              ),
            },
            {
              heading: "Combine into the diagnosis",
              body: (
                <>
                  <Why>
                    One CC at 1 V plus the other CC fully open is the textbook
                    fingerprint of: a chargeable device connected through a
                    passive (3 A-capable) cable.
                  </Why>
                </>
              ),
              result: { label: "Answer", value: "Chargeable USB device with a passive cable", color: "amber" },
            },
          ]}
          keyInsight={<>Two CC lines exist for orientation detection. Only ONE will see the device's Rd, depending on which way the plug went in.</>}
        />

        <WorkedExample
          title="Q23 — disconnect behavior (multi-select)"
          accentColor="#ef4444"
          problemStatement={<>What does your project do when the chargeable device is unplugged?</>}
          steps={[
            {
              heading: "(FALSE) Battery capacity in mAh",
              body: (
                <>
                  <Why>
                    Capacity in mAh is a property of the battery, not something
                    the host can measure directly without battery-side
                    intelligence. Your project doesn't query the device's BMS for
                    capacity — it can only measure how much energy <em>flowed
                    through</em> during the session.
                  </Why>
                </>
              ),
            },
            {
              heading: "(TRUE) Total energy consumed",
              body: (
                <>
                  <Why>
                    The firmware integrates instantaneous power (V·I) over the
                    charging session and at disconnect displays the cumulative
                    energy delivered (in Joules or kilojoules). This is
                    explicitly in the disconnect handler in
                    <code> complete_code1.c</code>: "End" message, then total
                    energy.
                  </Why>
                </>
              ),
            },
            {
              heading: "(FALSE) Power delivered",
              body: (
                <>
                  <Why>
                    Power is instantaneous (W). It's something you'd log during
                    the session, not at the moment of disconnect. The disconnect
                    summary screen shows accumulated <em>energy</em>, not the
                    last instantaneous power reading.
                  </Why>
                </>
              ),
            },
            {
              heading: "(TRUE) Disconnects power from USB-C",
              body: (
                <>
                  <Why>
                    Prelab 12 explicitly states: when the device is unplugged,
                    the project must disconnect the bus voltage from the USB-C
                    receptacle (typically by switching off a load switch). This
                    prevents the contacts from being live when nothing is
                    connected — both a safety measure and a battery-saving one.
                  </Why>
                </>
              ),
              result: { label: "Selections", value: "2 and 4", color: "red" },
            },
          ]}
          keyInsight={<>Re-read your firmware's USB disconnect handler — it shows "End", logs energy, then cuts the bus.</>}
        />

        <WorkedExample
          title="Q24 — super capacitor properties (multi-select)"
          accentColor="#c026d3"
          problemStatement={<>What's true about the super-capacitor in your clock project?</>}
          steps={[
            {
              heading: "(TRUE) Polar",
              body: (
                <>
                  <Why>
                    Super-capacitors are typically built on electrochemical
                    "double-layer" technology — internally similar to
                    electrolytic capacitors. They have strict +/− polarity. Wire
                    them backwards and they leak, lose capacitance, and may
                    catastrophically fail (vent, swell, or rupture). Look for the
                    polarity stripe before soldering.
                  </Why>
                </>
              ),
            },
            {
              heading: "(TRUE) Keeps clock alive during outage",
              body: (
                <>
                  <Why>
                    The RTC and a small backup load draw a few microamps. A 1 F
                    super-cap charged to 5 V holds enough energy (≈ 12.5 J) to
                    run the RTC for many hours after main power is removed. This
                    is the entire point of the super-cap in your Lab 10 design:
                    a tiny battery substitute that survives short power outages.
                  </Why>
                </>
              ),
            },
            {
              heading: "(FALSE) Prevents back-filling",
              body: (
                <>
                  <Why>
                    "Back-filling" — preventing current from flowing the wrong
                    direction — is what a diode does, not a capacitor. A
                    super-cap is a passive energy store; current can flow into
                    or out of it equally well (and indeed the application
                    requires both directions: charging from main power and
                    discharging into the RTC).
                  </Why>
                </>
              ),
            },
            {
              heading: "(TRUE) Lots of capacitance",
              body: (
                <>
                  <Why>
                    Super-caps are named for their unusually large capacitance
                    values — typically 0.1 F to several thousand F, vs. μF for
                    ordinary electrolytics and pF–nF for ceramics. The
                    trade-off is a low voltage rating (often 2.5 V to 5.5 V per
                    cell) and somewhat higher leakage. For backup-power use, the
                    capacitance dominates the energy capability; the lower
                    voltage is acceptable.
                  </Why>
                </>
              ),
              result: { label: "Selections", value: "1, 2, 4", color: "purple" },
            },
          ]}
          keyInsight={<>Super-caps trade voltage rating for capacitance. Typical 5.5 V × 1 F. Reverse them and they leak/explode.</>}
        />

        <section>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Drill — variant problems</h3>
          <div className="space-y-4">
            <PracticeProblem
              title="Variant: CC voltages"
              accentColor={ACCENT}
              statement={<>CC1 = 0.18 V, CC2 = 4.95 V.</>}
              parts={[
                {
                  label: "(a)",
                  question: "What's connected?",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Categorize each CC line. CC1 = 0.18 V is below 0.5 V,
                        which is the signature of an active (e-marker-chipped)
                        cable: the chip's own internal Rd pulls the line much
                        lower than a passive cable would. CC2 = 4.95 V is above
                        4.5 V — open pull-up, no Rd present on that side.
                      </p>
                      <Eq>{"CC1 = 0.18 V < 0.5 V → active cable's Rd loaded line"}</Eq>
                      <Eq>{"CC2 = 4.95 V > 4.5 V → no device/cable on this CC"}</Eq>
                      <p>
                        So we have a chargeable device connected through an
                        active (e-marker) USB-C cable, with the plug oriented so
                        that CC1 is the active-side pin.
                      </p>
                    </div>
                  ),
                  answer: { value: "Chargeable device with active (chipped) cable" },
                },
              ]}
            />
            <PracticeProblem
              title="Variant: PD power math"
              accentColor="#c026d3"
              statement={<>Negotiated profile: 20 V, 4 A.</>}
              parts={[
                {
                  label: "(a)",
                  question: "Power in W?",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        Power for DC (or RMS values of AC) is just the product
                        of voltage and current:
                      </p>
                      <Eq>P = V · I = 20 V · 4 A = 80 W</Eq>
                      <p>
                        80 W is in the upper-middle of the USB-PD 3 envelope.
                        For comparison, USB-PD 2 maxed out at 100 W (20 V × 5
                        A); USB-PD 3 extended that to 240 W (48 V × 5 A) by
                        adding higher-voltage profiles.
                      </p>
                    </div>
                  ),
                  answer: { value: "80 W" },
                },
              ]}
            />
            <PracticeProblem
              title="Variant: super-cap energy"
              accentColor="#10b981"
              statement={<>1 F super-cap charged to 5 V.</>}
              parts={[
                {
                  label: "(a)",
                  question: "Stored energy?",
                  solutionSteps: (
                    <div className="space-y-2">
                      <p>
                        The energy stored on a capacitor of capacitance C
                        charged to voltage V is given by:
                      </p>
                      <Eq>E = ½ · C · V²</Eq>
                      <p>
                        This comes from integrating the charging current's
                        instantaneous power: as the cap fills, V rises from 0
                        to the final value, and the average power × time gives
                        ½CV². With C = 1 F and V = 5 V:
                      </p>
                      <Eq>E = ½ · 1 F · (5 V)² = 0.5 · 25 = 12.5 J</Eq>
                      <p>
                        12.5 J is enough to power a 10-µW RTC for about 14
                        days, ignoring leakage. That's why super-caps make
                        excellent backup-power for low-current loads.
                      </p>
                    </div>
                  ),
                  answer: { value: "12.5 J" },
                },
              ]}
            />
          </div>
        </section>

        <section>
          <Card className="p-6 border-l-4 border-l-amber-500">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Common traps</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200 space-y-1">
              <li>"USB-C cables MUST have chips" is FALSE; "MAY have chips" is TRUE.</li>
              <li>CC voltage 0.2 V ≠ 1 V ≠ 5 V — these are three distinct cases.</li>
              <li>Disconnect handler in your firmware: shows total ENERGY (not power, not mAh).</li>
              <li>Super-caps are POLAR. Reverse them and they fail catastrophically.</li>
              <li>USB-PD 3 max: 48 V × 5 A = 240 W. PD 2 was 20 V × 5 A = 100 W.</li>
            </ul>
          </Card>
        </section>
      </div>
    </div>
  );
}
