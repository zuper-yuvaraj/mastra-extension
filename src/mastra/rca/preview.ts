import { RCA_VALUE_PREVIEW_CHARS } from './config';
import { redactSecrets } from './sanitize';

/** A bounded JSON rendering of any value, for showing a value without dumping it. Credentials inside the value
 * are redacted first: once it is a string, a secret has no key beside it to be recognised by. */
export function preview(value: unknown, limit = RCA_VALUE_PREVIEW_CHARS): string {
  let text: string;
  try {
    text = JSON.stringify(redactSecrets(value)) ?? String(value);
  } catch {
    text = String(value);
  }
  return text.length <= limit ? text : `${text.slice(0, limit)}…(${text.length} chars)`;
}
