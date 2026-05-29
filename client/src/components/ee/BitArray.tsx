import { useId } from "react";

interface BitArrayProps {
  value: number;
  bits?: number;
  onChange?: (next: number) => void;
  highlight?: number[];
  label?: string;
  accentColor?: string;
}

export function BitArray({
  value,
  bits = 8,
  onChange,
  highlight = [],
  label,
  accentColor = "#2563eb",
}: BitArrayProps) {
  const id = useId();
  const positions = Array.from({ length: bits }, (_, i) => bits - 1 - i);
  const interactive = !!onChange;

  return (
    <div className="space-y-2">
      {label && (
        <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          {label}
        </div>
      )}
      <div className="flex">
        {positions.map((p) => {
          const bit = (value >> p) & 1;
          const isHighlight = highlight.includes(p);
          const cellStyle: React.CSSProperties = isHighlight
            ? { borderColor: accentColor, borderWidth: 2 }
            : {};
          const fillStyle: React.CSSProperties = bit
            ? { backgroundColor: accentColor, color: "white" }
            : { backgroundColor: "#f1f5f9", color: "#475569" };
          const Element = interactive ? "button" : "div";
          return (
            <Element
              key={`${id}-${p}`}
              type={interactive ? "button" : undefined}
              onClick={
                interactive ? () => onChange!(value ^ (1 << p)) : undefined
              }
              className="w-10 h-10 border border-gray-300 dark:border-slate-600 flex flex-col items-center justify-center font-mono text-sm transition-colors"
              style={{ ...cellStyle, ...fillStyle }}
              aria-label={`bit ${p}: ${bit}`}
            >
              <span className="leading-none font-bold">{bit}</span>
              <span className="text-[9px] opacity-70 leading-none mt-0.5">
                {p}
              </span>
            </Element>
          );
        })}
      </div>
      <div className="flex gap-4 text-xs font-mono text-gray-600 dark:text-gray-300">
        <span>
          dec <span className="font-bold">{value}</span>
        </span>
        <span>
          hex{" "}
          <span className="font-bold">
            0x{value.toString(16).toUpperCase().padStart(Math.ceil(bits / 4), "0")}
          </span>
        </span>
        <span>
          bin{" "}
          <span className="font-bold">
            0b{value.toString(2).padStart(bits, "0")}
          </span>
        </span>
      </div>
    </div>
  );
}
