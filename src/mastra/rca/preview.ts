import { RCA_VALUE_PREVIEW_CHARS } from './config';

/** A bounded JSON rendering of any value, for showing a value without dumping it. */
export function preview(value: unknown, limit = RCA_VALUE_PREVIEW_CHARS): string {
  let text: string;
  try {
    text = JSON.stringify(value) ?? String(value);
  } catch {
    text = String(value);
  }
  return text.length <= limit ? text : `${text.slice(0, limit)}…(${text.length} chars)`;
}
