/**
 * ISO 3166-1 alpha-2 country codes supported by the platform.
 */
export const CountryCode = {
  US: "US",
  GB: "GB",
  CA: "CA",
  AU: "AU",
  NZ: "NZ",
  SG: "SG",
  AE: "AE",
  SA: "SA",
  NG: "NG",
  GH: "GH",
  KE: "KE",
  ZA: "ZA",
  IN: "IN",
  PK: "PK",
  BD: "BD",
  PH: "PH",
  MY: "MY",
  ID: "ID",
  TH: "TH",
} as const;

export type CountryCode = (typeof CountryCode)[keyof typeof CountryCode];

export const SUPPORTED_COUNTRIES = Object.values(CountryCode);
