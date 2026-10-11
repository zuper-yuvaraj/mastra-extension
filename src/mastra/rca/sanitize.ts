// Redacts what must not be committed or shared from a captured execution: credentials by key name,
// bearer / JWT strings anywhere, and email addresses (replaced consistently, so two nodes that held the
// same address still hold the same placeholder). Keys and structure are untouched — RCA depends on them.
//
// This is a best-effort filter, not a guarantee: names, addresses and free text are NOT redacted.
// Always read a fixture before sharing it.

const SENSITIVE_KEY = /(token|password|passwd|secret|api[_-]?key|authorization|auth|credential|private[_-]?key|signature)/i;
/** Contact numbers, by key name (digits alone are indistinguishable from ids and dates). */
const PHONE_KEY = /(phone|mobile|fax)/i;
const BEARER = /Bearer\s+[A-Za-z0-9._~+/=-]{10,}/g;
const JWT = /\beyJ[A-Za-z0-9_-]{5,}\.[A-Za-z0-9_-]{5,}\.[A-Za-z0-9_-]{5,}\b/g;
const EMAIL = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;

/** True for a key whose value is a credential (token, password, api key ...). */
export const isSensitiveKey = (key: string): boolean => SENSITIVE_KEY.test(key);

export interface SanitizeOptions {
  /** false: leave emails and phone numbers alone and redact credentials only (default true). RCA needs a
   * customer's email as evidence; a token is never evidence. */
  pii?: boolean;
  /** Keys whose values are configuration, not secrets, even though the name looks like one
   * (`authentication: "HEADER_AUTH"`). A bearer token or JWT inside such a value is still redacted. */
  keepKeys?: RegExp;
}

export function sanitize<T>(value: T, options: SanitizeOptions = {}): T {
  const pii = options.pii !== false;
  const keepKeys = options.keepKeys;
  const emails = new Map<string, string>();
  const placeholder = (email: string): string => {
    const key = email.toLowerCase();
    if (!emails.has(key)) emails.set(key, `redacted-${emails.size + 1}@example.test`);
    return emails.get(key)!;
  };

  // Header / parameter lists are {header_key: 'x-api-key', header_value: '<secret>'}: the secret's own key
  // name is innocuous, so the label next to it decides.
  const PAIR_VALUE_KEYS = new Set(['header_value', 'param_value', 'value']);
  const pairLabel = (record: Record<string, unknown>): string | undefined => {
    const label = record.header_key ?? record.param_key ?? record.key ?? record.name;
    if (typeof label === 'string') return label;
    if (label && typeof label === 'object' && typeof (label as { value?: unknown }).value === 'string') return (label as { value: string }).value;
    return undefined;
  };
  const redactHolder = (holder: unknown): unknown =>
    holder && typeof holder === 'object' && !Array.isArray(holder) && 'value' in holder
      ? { ...(holder as Record<string, unknown>), value: '[REDACTED]' }
      : '[REDACTED]';

  const clean = (node: unknown, key?: string): unknown => {
    // An empty value has nothing to hide, and "the password was empty" can itself be the cause of a failure.
    if (key && SENSITIVE_KEY.test(key) && !keepKeys?.test(key) && (typeof node === 'string' || typeof node === 'number') && node !== '') return '[REDACTED]';
    if (pii && key && PHONE_KEY.test(key) && (typeof node === 'string' || typeof node === 'number') && String(node) !== '') return '[REDACTED_PHONE]';
    if (typeof node === 'string') {
      return node.replace(BEARER, 'Bearer [REDACTED]').replace(JWT, '[REDACTED_JWT]').replace(EMAIL, (email) => (pii ? placeholder(email) : email));
    }
    if (Array.isArray(node)) return node.map((item) => clean(item));
    if (node && typeof node === 'object') {
      const record = node as Record<string, unknown>;
      // A form field is a {type, value} envelope: the name (`password`) is on the parent, the secret on `value`.
      if (key && SENSITIVE_KEY.test(key) && !keepKeys?.test(key) && 'value' in record && (typeof record.value === 'string' || typeof record.value === 'number') && record.value !== '') {
        return { ...Object.fromEntries(Object.entries(record).filter(([k]) => k !== 'value').map(([k, v]) => [k, clean(v, k)])), value: '[REDACTED]' };
      }
      const label = pairLabel(record);
      const sensitivePair = label !== undefined && SENSITIVE_KEY.test(label);
      return Object.fromEntries(
        Object.entries(record).map(([k, v]) => [k, sensitivePair && PAIR_VALUE_KEYS.has(k) ? redactHolder(v) : clean(v, k)]),
      );
    }
    return node;
  };

  return clean(value) as T;
}

/** Field names that look like credentials but hold configuration (which auth scheme, not the secret). */
export const CONFIG_KEYS = /^(authentication|auth_type|authentication_type|auth_method)$/i;

/** What may be shown to the model: credentials are replaced, emails and phone numbers are kept (they are
 * evidence), and configuration like `authentication: "HEADER_AUTH"` is kept. Returns a copy. Call it on
 * the VALUE, before it is turned into a preview string: a secret inside a string has no key beside it. */
export const redactSecrets = <T>(value: T): T => sanitize(value, { pii: false, keepKeys: CONFIG_KEYS });

const NODE_CALL = /\$\.(?:getLatestNodeData|getNodeData)\(\s*(['"]).*?\1\s*\)/;

/** True when an expression reads a secret key (`...['data']['api_key']`). The value it gives is a bare string
 * with no key beside it, so the path decides. The node name inside `getLatestNodeData('...')` is ignored. */
export function pathEndsAtSecret(expression: string): boolean {
  const path = expression.replace(NODE_CALL, '');
  const keys = [...path.matchAll(/\[\s*(['"])(.*?)\1\s*\]|\.([A-Za-z_]\w*)/g)].map((m) => m[2] ?? m[3] ?? '');
  const last = keys[keys.length - 1];
  return last !== undefined && SENSITIVE_KEY.test(last) && !CONFIG_KEYS.test(last);
}
