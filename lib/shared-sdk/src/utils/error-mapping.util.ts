import { ErrorCode } from "../constants/error-codes.js";
import { AppError } from "../errors/app-error.js";

/**
 * Map an HTTP status code to a platform error code.
 */
export function httpStatusToErrorCode(status: number): ErrorCode {
  switch (status) {
    case 400:
      return ErrorCode.INVALID_INPUT;
    case 401:
      return ErrorCode.UNAUTHORIZED;
    case 403:
      return ErrorCode.FORBIDDEN;
    case 404:
      return ErrorCode.NOT_FOUND;
    case 409:
      return ErrorCode.VALIDATION_ERROR;
    case 429:
      return ErrorCode.RATE_LIMIT_EXCEEDED;
    case 503:
      return ErrorCode.SERVICE_UNAVAILABLE;
    default:
      return ErrorCode.INTERNAL_ERROR;
  }
}

/**
 * Map a platform error code to an HTTP status code.
 */
export function errorCodeToHttpStatus(code: ErrorCode): number {
  const map: Partial<Record<ErrorCode, number>> = {
    [ErrorCode.UNAUTHORIZED]: 401,
    [ErrorCode.FORBIDDEN]: 403,
    [ErrorCode.INVALID_CREDENTIALS]: 401,
    [ErrorCode.TOKEN_EXPIRED]: 401,
    [ErrorCode.TOKEN_INVALID]: 401,
    [ErrorCode.OTP_INVALID]: 400,
    [ErrorCode.OTP_EXPIRED]: 400,
    [ErrorCode.NOT_FOUND]: 404,
    [ErrorCode.USER_NOT_FOUND]: 404,
    [ErrorCode.BOOKING_NOT_FOUND]: 404,
    [ErrorCode.PAYMENT_NOT_FOUND]: 404,
    [ErrorCode.PROFESSIONAL_NOT_FOUND]: 404,
    [ErrorCode.REVIEW_NOT_FOUND]: 404,
    [ErrorCode.DISPUTE_NOT_FOUND]: 404,
    [ErrorCode.ESCROW_NOT_FOUND]: 404,
    [ErrorCode.NOTIFICATION_NOT_FOUND]: 404,
    [ErrorCode.VALIDATION_ERROR]: 422,
    [ErrorCode.INVALID_INPUT]: 400,
    [ErrorCode.EMAIL_ALREADY_EXISTS]: 409,
    [ErrorCode.BOOKING_CONFLICT]: 409,
    [ErrorCode.PAYMENT_ALREADY_PROCESSED]: 409,
    [ErrorCode.REVIEW_ALREADY_SUBMITTED]: 409,
    [ErrorCode.DISPUTE_ALREADY_OPEN]: 409,
    [ErrorCode.RATE_LIMIT_EXCEEDED]: 429,
    [ErrorCode.SERVICE_UNAVAILABLE]: 503,
    [ErrorCode.INTERNAL_ERROR]: 500,
  };

  return map[code] ?? 500;
}

/**
 * Extract an AppError from an unknown thrown value.
 */
export function toAppError(err: unknown): AppError {
  if (err instanceof AppError) return err;

  if (err instanceof Error) {
    return new AppError(ErrorCode.INTERNAL_ERROR, err.message, 500);
  }

  return new AppError(ErrorCode.INTERNAL_ERROR, "An unexpected error occurred", 500);
}
