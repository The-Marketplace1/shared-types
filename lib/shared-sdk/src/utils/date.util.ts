/**
 * Format an ISO date string to a human-readable date.
 * e.g. "2024-07-21T12:00:00Z" → "July 21, 2024"
 */
export function formatDate(isoString: string, locale = "en-US"): string {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(isoString));
}

/**
 * Format an ISO date string to a short date.
 * e.g. "2024-07-21T12:00:00Z" → "Jul 21, 2024"
 */
export function formatDateShort(isoString: string, locale = "en-US"): string {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(isoString));
}

/**
 * Format an ISO date string to include time.
 * e.g. "2024-07-21T12:00:00Z" → "July 21, 2024 at 12:00 PM"
 */
export function formatDateTime(isoString: string, locale = "en-US"): string {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(isoString));
}

/**
 * Return a relative time string.
 * e.g. "5 minutes ago", "in 2 hours"
 */
export function formatRelativeTime(isoString: string, locale = "en-US"): string {
  const diffMs = new Date(isoString).getTime() - Date.now();
  const diffSec = Math.round(diffMs / 1000);

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

  const thresholds: [number, Intl.RelativeTimeFormatUnit][] = [
    [60, "second"],
    [3600, "minute"],
    [86400, "hour"],
    [2592000, "day"],
    [31536000, "month"],
    [Infinity, "year"],
  ];

  let prev = 1;
  for (const [threshold, unit] of thresholds) {
    if (Math.abs(diffSec) < threshold) {
      return rtf.format(Math.round(diffSec / prev), unit);
    }
    prev = threshold;
  }

  return formatDate(isoString, locale);
}

/**
 * Add minutes to an ISO date string and return a new ISO string.
 */
export function addMinutes(isoString: string, minutes: number): string {
  const d = new Date(isoString);
  d.setMinutes(d.getMinutes() + minutes);
  return d.toISOString();
}

/**
 * Check if an ISO date string is in the past.
 */
export function isPast(isoString: string): boolean {
  return new Date(isoString).getTime() < Date.now();
}

/**
 * Check if an ISO date string is in the future.
 */
export function isFuture(isoString: string): boolean {
  return new Date(isoString).getTime() > Date.now();
}
