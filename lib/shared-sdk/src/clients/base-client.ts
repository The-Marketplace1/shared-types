import { AppError } from "../errors/app-error.js";
import { ErrorCode } from "../constants/error-codes.js";
import { retry, type RetryOptions } from "../utils/retry.util.js";

export type RequestOptions = {
  headers?: Record<string, string>;
  signal?: AbortSignal;
  retryOptions?: RetryOptions;
};

export type ClientConfig = {
  /** Base URL of the service, e.g. "https://api.example.com" */
  baseUrl: string;
  /** Function that returns the current Bearer token, or undefined if unauthenticated */
  getAccessToken?: () => string | undefined;
  /** Default request timeout in milliseconds. Default: 10_000 */
  timeoutMs?: number;
  /** Default retry options */
  retryOptions?: RetryOptions;
};

export type ApiResponse<T> = {
  data: T;
  status: number;
};

/**
 * Minimal fetch-based API client shared by all service clients.
 * Uses the Web Fetch API — works in Node.js 18+ and browsers.
 */
export class BaseClient {
  protected readonly config: Required<ClientConfig>;

  constructor(config: ClientConfig) {
    this.config = {
      baseUrl: config.baseUrl.replace(/\/$/, ""),
      getAccessToken: config.getAccessToken ?? (() => undefined),
      timeoutMs: config.timeoutMs ?? 10_000,
      retryOptions: config.retryOptions ?? { maxAttempts: 2 },
    };
  }

  protected async request<T>(
    method: string,
    path: string,
    body?: unknown,
    options: RequestOptions = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.config.baseUrl}${path}`;
    const token = this.config.getAccessToken();

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.config.timeoutMs);

    const fetchOptions: RequestInit = {
      method,
      headers,
      signal: options.signal ?? controller.signal,
      ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
    };

    const retryOpts = options.retryOptions ?? this.config.retryOptions;

    try {
      const response = await retry(
        () => fetch(url, fetchOptions),
        {
          ...retryOpts,
          shouldRetry: (_, attempt) => attempt < (retryOpts.maxAttempts ?? 2),
        }
      );

      clearTimeout(timeoutId);

      if (!response.ok) {
        let errorBody: unknown;
        try {
          errorBody = await response.json();
        } catch {
          errorBody = null;
        }

        const message =
          typeof errorBody === "object" &&
          errorBody !== null &&
          "error" in errorBody &&
          typeof (errorBody as Record<string, unknown>).error === "object"
            ? ((errorBody as Record<string, { message?: string }>).error?.message ?? response.statusText)
            : response.statusText;

        throw new AppError(
          this.statusToErrorCode(response.status),
          message,
          response.status,
          errorBody
        );
      }

      const data: T = await response.json() as T;
      return { data, status: response.status };
    } catch (err) {
      clearTimeout(timeoutId);
      if (err instanceof AppError) throw err;
      if (err instanceof DOMException && err.name === "AbortError") {
        throw new AppError(ErrorCode.TIMEOUT, "Request timed out", 408);
      }
      throw new AppError(ErrorCode.SERVICE_UNAVAILABLE, "Network error", 503);
    }
  }

  protected get<T>(path: string, opts?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>("GET", path, undefined, opts);
  }

  protected post<T>(path: string, body?: unknown, opts?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>("POST", path, body, opts);
  }

  protected put<T>(path: string, body?: unknown, opts?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>("PUT", path, body, opts);
  }

  protected patch<T>(path: string, body?: unknown, opts?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>("PATCH", path, body, opts);
  }

  protected delete<T>(path: string, opts?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>("DELETE", path, undefined, opts);
  }

  private statusToErrorCode(status: number): ErrorCode {
    switch (status) {
      case 401: return ErrorCode.UNAUTHORIZED;
      case 403: return ErrorCode.FORBIDDEN;
      case 404: return ErrorCode.NOT_FOUND;
      case 409: return ErrorCode.VALIDATION_ERROR;
      case 422: return ErrorCode.VALIDATION_ERROR;
      case 429: return ErrorCode.RATE_LIMIT_EXCEEDED;
      case 503: return ErrorCode.SERVICE_UNAVAILABLE;
      default:  return ErrorCode.INTERNAL_ERROR;
    }
  }
}
