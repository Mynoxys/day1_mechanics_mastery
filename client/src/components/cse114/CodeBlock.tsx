// Monospace Java snippet. No syntax highlighting on purpose — the exam (and
// LockDown Browser) shows plain text, and training on plain text is the point.

interface CodeBlockProps {
  code: string;
  lockdown?: boolean;
  className?: string;
}

export function CodeBlock({ code, lockdown = false, className = "" }: CodeBlockProps) {
  const theme = lockdown
    ? "bg-neutral-900 border border-neutral-700 text-neutral-100"
    : "bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-100";
  return (
    <pre
      className={`overflow-x-auto rounded-md p-3 font-mono text-[13px] leading-relaxed whitespace-pre ${theme} ${className}`}
    >
      {/* bg-transparent/p-0 neutralize the global `code{bg-muted;padding}` base rule,
          which otherwise paints a light box behind this (light-text) code. */}
      <code className="bg-transparent p-0 text-inherit rounded-none">{code}</code>
    </pre>
  );
}
