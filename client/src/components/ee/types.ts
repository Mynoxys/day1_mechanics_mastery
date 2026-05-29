export interface TraceStep {
  line: number;
  vars: Record<string, number | string>;
  output?: string;
  note?: string;
}

export type ComponentKind =
  | "R"
  | "V"
  | "I"
  | "GND"
  | "C"
  | "L"
  | "OPAMP"
  | "WIRE"
  | "NODE"
  | "LED"
  | "DIODE"
  | "SWITCH"
  | "BUTTON"
  | "AMMETER"
  | "VOLTMETER"
  | "DOT"
  | "ARROW_R"
  | "ARROW_L"
  | "ARROW_U"
  | "ARROW_D"
  | "PLUS"
  | "MINUS"
  | "MCU"
  | "TEXT";

export interface ComponentSpec {
  kind: ComponentKind;
  x: number;
  y: number;
  label?: string;
  value?: string;
  rotation?: 0 | 90 | 180 | 270;
  /** Override for the glyph stroke/fill (e.g. an EE token color). */
  color?: string;
  /** Where to anchor the label relative to the glyph. Defaults to "top". */
  labelPos?: "top" | "bottom" | "left" | "right";
}

export interface WireSegment {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}
