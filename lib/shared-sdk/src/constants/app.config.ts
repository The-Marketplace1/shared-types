export const PLATFORM = {
  NAME: "Marketplace",
  VERSION: "1.0.0",
  ENVIRONMENTS: ["dev", "staging", "prod"] as const,
} as const;

export const APP_CONFIG = {
  COMMISSION_RATE: 0.1, // 10% platform commission
  MAX_BOOKING_DISTANCE_KM: 25,
  OTP_EXPIRY_MINUTES: 5,
  ACCESS_TOKEN_EXPIRY_SECONDS: 900, // 15 min
  REFRESH_TOKEN_EXPIRY_DAYS: 30,
  MAX_REVIEW_RATING: 5,
  MIN_REVIEW_RATING: 1,
  MAX_DISPUTE_RESOLUTION_DAYS: 7,
  ESCROW_AUTO_RELEASE_DAYS: 3, // days after booking completion
  DEFAULT_PAGINATION_LIMIT: 20,
  MAX_PAGINATION_LIMIT: 100,
  MIN_PASSWORD_LENGTH: 8,
  OTP_LENGTH: 6,
} as const;

export type Environment = (typeof PLATFORM.ENVIRONMENTS)[number];
