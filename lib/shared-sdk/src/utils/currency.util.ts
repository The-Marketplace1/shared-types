/**
 * Format an amount as a currency string.
 * e.g. formatCurrency(1999, "USD") → "$19.99"
 *
 * Note: amounts are stored in the smallest currency unit (cents).
 */
export function formatCurrency(
  amountInCents: number,
  currencyCode: string,
  locale = "en-US"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amountInCents / 100);
}

/**
 * Format a decimal amount (not cents) as currency.
 * e.g. formatCurrencyDecimal(19.99, "USD") → "$19.99"
 */
export function formatCurrencyDecimal(
  amount: number,
  currencyCode: string,
  locale = "en-US"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Convert an amount from decimal to cents (smallest unit).
 * e.g. 19.99 → 1999
 */
export function toCents(amount: number): number {
  return Math.round(amount * 100);
}

/**
 * Convert cents to a decimal amount.
 * e.g. 1999 → 19.99
 */
export function fromCents(amountInCents: number): number {
  return amountInCents / 100;
}

/**
 * Apply a commission rate and return the commission amount in cents.
 * e.g. applyCommission(10000, 0.1) → 1000
 */
export function applyCommission(amountInCents: number, rate: number): number {
  return Math.round(amountInCents * rate);
}
