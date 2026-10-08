const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function parse(ym: string): Date {
  const [y, m] = ym.split('-').map(Number);
  return new Date(y, m - 1, 1);
}

function monthsBetween(start: string, end: string | null): number {
  const a = parse(start);
  const b = end ? parse(end) : new Date();
  return (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth());
}

/** Whole years since a YYYY-MM date, so "3+ years" stays accurate over time. */
export function yearsSince(start: string): number {
  return Math.max(1, Math.floor(monthsBetween(start, null) / 12));
}

export function formatMonth(ym: string | null): string {
  if (!ym) return 'Present';
  const d = parse(ym);
  return `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

export function duration(start: string, end: string | null): string {
  const total = Math.max(1, monthsBetween(start, end));
  const y = Math.floor(total / 12);
  const m = total % 12;
  const parts = [];
  if (y) parts.push(`${y} yr${y > 1 ? 's' : ''}`);
  if (m) parts.push(`${m} mo${m > 1 ? 's' : ''}`);
  return parts.join(' ');
}
