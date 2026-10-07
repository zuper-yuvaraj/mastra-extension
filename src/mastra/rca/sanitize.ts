// Redacts what must not be committed or shared from a captured execution: credentials by key name,
// bearer / JWT strings anywhere, and email addresses (replaced consistently, so two nodes that held the
// same address still hold the same placeholder). Keys and structure are untouched — RCA depends on them.
//
// This is a best-effort filter, not a guarantee: names, addresses and free text are NOT redacted.
// Always read a fixture before sharing it.

const SENSITIVE_KEY = /(token|password|passwd|secret|api[_-]?key|authorization|auth|credential|private[_-]?key|signature)/i;
const BEARER = /Bearer\s+[A-Za-z0-9._~+/=-]{10,}/g;
const JWT = /\beyJ[A-Za-z0-9_-]{5,}\.[A-Za-z0-9_-]{5,}\.[A-Za-z0-9_-]{5,}\b/g;
const EMAIL = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;

export function sanitize<T>(value: T): T {
  const emails = new Map<string, string>();
  const placeholder = (email: string): string => {
    const key = email.toLowerCase();
    if (!emails.has(key)) emails.set(key, `redacted-${emails.size + 1}@example.test`);
    return emails.get(key)!;
  };

  const clean = (node: unknown, key?: string): unknown => {
    if (key && SENSITIVE_KEY.test(key) && (typeof node === 'string' || typeof node === 'number')) return '[REDACTED]';
    if (typeof node === 'string') {
      return node.replace(BEARER, 'Bearer [REDACTED]').replace(JWT, '[REDACTED_JWT]').replace(EMAIL, placeholder);
    }
    if (Array.isArray(node)) return node.map((item) => clean(item));
    if (node && typeof node === 'object') {
      return Object.fromEntries(Object.entries(node as Record<string, unknown>).map(([k, v]) => [k, clean(v, k)]));
    }
    return node;
  };

  return clean(value) as T;
}
