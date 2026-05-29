import { useMemo } from "react";
import katex from "katex";

interface KatexProps {
  math: string;
  display?: boolean;
  className?: string;
}

export function Katex({ math, display = false, className }: KatexProps) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: display,
        throwOnError: false,
        strict: "ignore",
        output: "html",
      });
    } catch (err) {
      return `<span style="color:#dc2626">KaTeX error: ${String(err)}</span>`;
    }
  }, [math, display]);

  if (display) {
    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export function InlineMath({ math, className }: { math: string; className?: string }) {
  return <Katex math={math} display={false} className={className} />;
}

export function BlockMath({ math, className }: { math: string; className?: string }) {
  return <Katex math={math} display={true} className={className} />;
}
