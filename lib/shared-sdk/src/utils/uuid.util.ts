/**
 * Generate a UUID v4 using the built-in Web Crypto API.
 * Works in Node.js 15+ and modern browsers.
 */
export function generateUUID(): string {
  return crypto.randomUUID();
}

/**
 * Validate that a string is a well-formed UUID v4.
 */
export function isValidUUID(value: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}
