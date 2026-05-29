interface LiveValueProps {
  label: string;
  value: string | number;
  unit?: string;
  accentColor?: string;
  size?: "sm" | "md" | "lg";
}

export function LiveValue({
  label,
  value,
  unit,
  accentColor = "#2563eb",
  size = "md",
}: LiveValueProps) {
  const sizeClass =
    size === "sm" ? "text-base" : size === "lg" ? "text-2xl" : "text-lg";
  return (
    <div className="rounded-lg bg-gray-50 dark:bg-slate-700 px-3 py-2 border border-gray-200 dark:border-slate-600">
      <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wide">
        {label}
      </div>
      <div
        className={`font-mono font-bold ${sizeClass}`}
        style={{ color: accentColor }}
      >
        {value}
        {unit && (
          <span className="text-sm text-gray-500 dark:text-gray-400 font-normal ml-1">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
}
