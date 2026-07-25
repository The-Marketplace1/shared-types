/**
 * ISO 4217 currency codes supported by the platform.
 */
export const CurrencyCode = {
  USD: "USD",
  EUR: "EUR",
  GBP: "GBP",
  CAD: "CAD",
  AUD: "AUD",
  NZD: "NZD",
  SGD: "SGD",
  AED: "AED",
  SAR: "SAR",
  NGN: "NGN",
  GHS: "GHS",
  KES: "KES",
  ZAR: "ZAR",
  INR: "INR",
  PKR: "PKR",
  BDT: "BDT",
  PHP: "PHP",
  MYR: "MYR",
  IDR: "IDR",
  THB: "THB",
} as const;

export type CurrencyCode = (typeof CurrencyCode)[keyof typeof CurrencyCode];

export const DEFAULT_CURRENCY: CurrencyCode = CurrencyCode.USD;

export const SUPPORTED_CURRENCIES = Object.values(CurrencyCode);
