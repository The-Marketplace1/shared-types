export type RetryOptions = {
  /** Maximum number of attempts (including the first). Default: 3 */
  maxAttempts?: number;
  /** Base delay in milliseconds. Default: 200 */
  baseDelayMs?: number;
  /** Maximum delay in milliseconds. Default: 5000 */
  maxDelayMs?: number;
  /** Whether to use exponential backoff. Default: true */
  exponential?: boolean;
  /** Optional predicate — return true to retry, false to stop. Default: always retry. */
  shouldRetry?: (error: unknown, attempt: number) => boolean;
};

/**
 * Retry an async function with exponential backoff.
 *
 * @example
 * const result = await retry(() => fetchUser(id), { maxAttempts: 3 });
 */
export async function retry<T>(fn: () => Promise<T>, options: RetryOptions = {}): Promise<T> {
  const {
    maxAttempts = 3,
    baseDelayMs = 200,
    maxDelayMs = 5000,
    exponential = true,
    shouldRetry = () => true,
  } = options;

  let lastError: unknown;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;

      if (attempt === maxAttempts || !shouldRetry(err, attempt)) {
        break;
      }

      const delay = exponential
        ? Math.min(baseDelayMs * 2 ** (attempt - 1), maxDelayMs)
        : baseDelayMs;

      await sleep(delay);
    }
  }

  throw lastError;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
