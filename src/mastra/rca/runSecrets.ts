// The caller's bearer token must never be written to storage. Mastra persists a workflow run's
// input, step outputs AND its request context with the run (verified: a token set on the request
// context shows up in workflow.getWorkflowRunById()), so the token cannot travel through any of them.
//
// Instead the route keeps the token here, in process memory, under a random one-time key, and only
// that key goes into the workflow input. The key is meaningless once the entry is dropped, which the
// route does in a `finally`; entries also expire on their own in case a request dies uncleanly.

import { randomUUID } from 'node:crypto';

export interface RcaRunSecrets {
  zuperToken: string;
  apiUrl: string;
  workflowBuilderUrl: string;
}

const MAX_LIFETIME_MS = 10 * 60 * 1000;
const entries = new Map<string, { secrets: RcaRunSecrets; expiresAt: number }>();

function sweep(now: number): void {
  for (const [key, entry] of entries) if (entry.expiresAt <= now) entries.delete(key);
}

export function putRunSecrets(secrets: RcaRunSecrets): string {
  const now = Date.now();
  sweep(now);
  const key = randomUUID();
  entries.set(key, { secrets, expiresAt: now + MAX_LIFETIME_MS });
  return key;
}

export function getRunSecrets(key: string): RcaRunSecrets {
  const entry = entries.get(key);
  if (!entry || entry.expiresAt <= Date.now()) throw new Error('NOT_AUTHENTICATED');
  return entry.secrets;
}

export function dropRunSecrets(key: string): void {
  entries.delete(key);
}

/** For tests. */
export function runSecretCount(): number {
  return entries.size;
}
