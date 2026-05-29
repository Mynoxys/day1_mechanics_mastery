// Date helpers — kept tiny and timezone-safe.
//
// Every date the engine touches is a local YYYY-MM-DD string. We never use
// `new Date(isoString)` for date-only values because it interprets `2026-05-28`
// as UTC midnight and silently shifts a day in some zones. Instead we parse
// the parts explicitly.

/** Today, in the user's local timezone, as YYYY-MM-DD. */
export function todayISO(): string {
  return toISODate(new Date());
}

/** YYYY-MM-DD for a Date in local time. */
export function toISODate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** Parse YYYY-MM-DD into a local-midnight Date (no UTC shift). */
export function fromISODate(s: string): Date {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
}

/** YYYY-MM-DD plus n calendar days, still YYYY-MM-DD. */
export function addDays(iso: string, n: number): string {
  const d = fromISODate(iso);
  d.setDate(d.getDate() + n);
  return toISODate(d);
}

/** Calendar-day difference: laterISO - earlierISO. */
export function daysBetween(earlier: string, later: string): number {
  const a = fromISODate(earlier).getTime();
  const b = fromISODate(later).getTime();
  // Use noon to dodge DST cliffs.
  return Math.round((b - a) / 86_400_000);
}

/** 1-indexed day number relative to startDate. May 28 → Day 1 when startDate is May 28. */
export function dayNumber(startDate: string, iso: string): number {
  return daysBetween(startDate, iso) + 1;
}

/** 0=Sun..6=Sat for an ISO date. */
export function weekdayOf(iso: string): number {
  return fromISODate(iso).getDay();
}

/** Inclusive day-by-day list of ISO strings from start to end. */
export function isoRange(start: string, end: string): string[] {
  const out: string[] = [];
  let cur = start;
  while (cur <= end) {
    out.push(cur);
    cur = addDays(cur, 1);
  }
  return out;
}

/** "Wed, Jun 17" style — local. */
export function prettyShort(iso: string): string {
  return fromISODate(iso).toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

/** "Wednesday, June 17, 2026" — for big headers. */
export function prettyFull(iso: string): string {
  return fromISODate(iso).toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
