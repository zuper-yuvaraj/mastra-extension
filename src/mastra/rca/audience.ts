// Who an answer is written for. The router (rca/intent.ts) decides the audience of a message; this holds the
// wording rules every prompt shares, and a deterministic check that a business answer did not slip into technical
// language. The check is a floor, not a guarantee: it catches the clear leaks (ids, expressions, JSON, status
// codes, "node") and sends the answer back once to be rewritten.

/** The vocabulary rules for each audience. Shared by the analysis and the chat instructions, so they cannot drift. */
export const AUDIENCE_RULES = [
  '- business: you write for a Zuper admin who is not technical, in everyday words about jobs, customers, appointments, quotes and what the automation was trying to achieve. Name a step by the name shown on the canvas and say what it does ("the step that updates the appointment"). Do NOT use: expressions or double curly braces, JSON, code, API, HTTP, endpoint, payload, status codes (404, 500 and so on), ids or uids, field paths, variable names, or the word "node" (say "step"). Describe an error by what it meant for the business ("Zuper said it could not find that appointment"), not by its code.',
  '- technical: you write for a person who builds workflows. Use node names, field and expression paths, the values, the HTTP status and the error text, and quote what proves it.',
].join('\n');

const LEAKS: Array<[string, RegExp]> = [
  ['an id', /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i],
  ['an expression ({{ }})', /\{\{|\}\}/],
  ['a field path ($.)', /\$\./],
  ['code in backticks', /`/],
  ['JSON', /\bjson\b/i],
  ['API', /\bapis?\b/i],
  ['HTTP', /\bhttps?\b/i],
  ['endpoint', /\bendpoints?\b/i],
  ['payload', /\bpayloads?\b/i],
  ['expression', /\bexpressions?\b/i],
  ['a status code', /\b(?:400|401|403|404|405|409|422|429|500|502|503|504)\b/],
  ['"node"', /\bnodes?\b/i],
  ['uid', /\b(?:node_)?uids?\b/i],
  ['null or undefined', /\b(?:null|undefined)\b/i],
  ['JavaScript', /\bjavascript\b/i],
];

export interface Leak {
  /** Which part of the answer. */
  field: string;
  /** What technical thing it contains. */
  term: string;
}

/** The technical terms in the fields of a business answer. Empty when it reads in everyday words. */
export function businessLeaks(fields: Record<string, string | undefined>): Leak[] {
  const found: Leak[] = [];
  for (const [field, text] of Object.entries(fields)) {
    if (!text) continue;
    for (const [term, pattern] of LEAKS) if (pattern.test(text)) found.push({ field, term });
  }
  return found;
}

/** What a business answer is told when it leaked: which fields, and what to say instead. */
export function leakMessage(leaks: Leak[]): string {
  const byField = new Map<string, string[]>();
  for (const { field, term } of leaks) byField.set(field, [...(byField.get(field) ?? []), term]);
  const lines = [...byField].map(([field, terms]) => `- ${field}: ${[...new Set(terms)].join(', ')}`);
  return [
    'This answer is for a non-technical reader, but these parts use technical language:',
    ...lines,
    'Rewrite them in everyday business words: say "step" instead of "node", describe an error by what it meant for the job, customer or appointment (not by its code), and leave out ids, expressions, JSON and field paths. Keep every fact; change only the wording.',
  ].join('\n');
}
