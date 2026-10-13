import { RCA_VALUE_PREVIEW_CHARS } from './config';
import { redactSecrets } from './sanitize';

/** A bounded rendering of any value, for showing a value without dumping it. Credentials inside the value are
 * redacted first: once it is a string, a secret has no key beside it to be recognised by.
 *
 * A STRING is returned as it is, with no quotation marks added. These previews are placed inside objects that
 * are serialised again before the model reads them, so a JSON-quoted string arrived as `"\"abc\""` and a model
 * took the quotes for part of the value (it once blamed a 404 on a project uid "wrapped in quotation marks").
 * Everything else (objects, arrays, numbers, booleans, null) is rendered as JSON text. */
export function preview(value: unknown, limit = RCA_VALUE_PREVIEW_CHARS): string {
  let text: string;
  try {
    const safe = redactSecrets(value);
    text = typeof safe === 'string' ? safe : (JSON.stringify(safe) ?? String(value));
  } catch {
    text = String(value);
  }
  return text.length <= limit ? text : `${text.slice(0, limit)}…(${text.length} chars)`;
}
