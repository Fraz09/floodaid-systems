export function people(n: number): string {
  const v = Math.abs(n);
  if (v >= 1_000_000) {
    const m = n / 1_000_000;
    return `${m >= 10 ? m.toFixed(1) : m.toFixed(2)} million`;
  }
  if (v >= 10_000) return `${Math.round(n / 1000).toLocaleString("en-US")} thousand`;
  return Math.round(n).toLocaleString("en-US");
}

export function tonnes(n: number): string {
  const v = Math.abs(n);
  if (v >= 100) return `${Math.round(n).toLocaleString("en-US")} t`;
  if (v >= 10) return `${n.toFixed(1)} t`;
  return `${n.toFixed(1)} t`;
}

export function pct(n: number): string {
  return `${Math.round(n * 100)}%`;
}

export function pct1(n: number): string {
  return `${(n * 100).toFixed(1)}%`;
}

export function kg(n: number): string {
  if (!Number.isFinite(n) || n <= 0) return "—";
  return `${n.toFixed(1)} kg`;
}
