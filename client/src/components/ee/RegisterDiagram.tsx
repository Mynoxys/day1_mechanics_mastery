import { BitArray } from "./BitArray";

interface RegisterDiagramProps {
  name: string;
  value: number;
  bits?: number;
  bitLabels?: (string | undefined)[];
  onChange?: (next: number) => void;
  accentColor?: string;
}

export function RegisterDiagram({
  name,
  value,
  bits = 8,
  bitLabels,
  onChange,
  accentColor = "#2563eb",
}: RegisterDiagramProps) {
  const positions = Array.from({ length: bits }, (_, i) => bits - 1 - i);

  return (
    <div className="rounded-lg border border-gray-200 dark:border-slate-600 p-3 bg-white dark:bg-slate-800 space-y-2">
      <div className="flex items-center gap-2">
        <span className="font-mono font-bold text-gray-900 dark:text-white">
          {name}
        </span>
      </div>
      <BitArray
        value={value}
        bits={bits}
        onChange={onChange}
        accentColor={accentColor}
      />
      {bitLabels && (
        <div className="flex">
          {positions.map((p, i) => (
            <div
              key={p}
              className="w-10 text-[10px] text-center text-gray-500 dark:text-gray-400 font-mono"
            >
              {bitLabels[i] ?? ""}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
