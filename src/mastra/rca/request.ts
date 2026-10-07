// Validation and error mapping for POST /zuper/rca, kept free of Hono/Mastra so it is unit-testable.

import { assertAllowedBaseUrl, HostNotAllowedError } from './hosts';

export interface RcaRequest {
  /** Normalized origins (validated against the Zuper host allow-list). */
  apiUrl: string;
  workflowBuilderUrl: string;
  workflowUid: string;
  executionUid: string;
  question?: string;
  forceRefresh: boolean;
}

export type ParsedRequest =
  | { ok: true; value: RcaRequest }
  | { ok: false; status: number; error: string; detail?: string };

/** uids are interpolated into request URLs, so only the characters a uid can contain are allowed. */
const UID = /^[A-Za-z0-9_-]{8,64}$/;
const MAX_QUESTION_CHARS = 500;

export function parseRcaRequest(body: unknown): ParsedRequest {
  if (!body || typeof body !== 'object') return { ok: false, status: 400, error: 'INVALID_REQUEST', detail: 'JSON object expected' };
  const b = body as Record<string, unknown>;

  const text = (value: unknown): string | undefined => (typeof value === 'string' && value.trim() ? value.trim() : undefined);
  const apiUrl = text(b.apiUrl);
  const workflowBuilderUrl = text(b.workflowBuilderUrl);
  const workflowUid = text(b.workflowUid);
  const executionUid = text(b.executionUid);

  if (!apiUrl || !workflowBuilderUrl || !workflowUid || !executionUid) {
    return { ok: false, status: 400, error: 'INVALID_REQUEST', detail: 'apiUrl, workflowBuilderUrl, workflowUid and executionUid are required' };
  }
  if (!UID.test(workflowUid) || !UID.test(executionUid)) {
    return { ok: false, status: 400, error: 'INVALID_REQUEST', detail: 'workflowUid / executionUid have an invalid format' };
  }

  const question = text(b.question);
  if (question && question.length > MAX_QUESTION_CHARS) {
    return { ok: false, status: 400, error: 'INVALID_REQUEST', detail: `question is limited to ${MAX_QUESTION_CHARS} characters` };
  }

  try {
    return {
      ok: true,
      value: {
        apiUrl: assertAllowedBaseUrl(apiUrl),
        workflowBuilderUrl: assertAllowedBaseUrl(workflowBuilderUrl),
        workflowUid,
        executionUid,
        question,
        forceRefresh: b.forceRefresh === true,
      },
    };
  } catch (error) {
    if (error instanceof HostNotAllowedError) return { ok: false, status: 400, error: 'HOST_NOT_ALLOWED', detail: error.message };
    throw error;
  }
}

export function extractBearerToken(authorizationHeader: string | undefined): string | null {
  const match = /^Bearer\s+(.+)$/i.exec((authorizationHeader ?? '').trim());
  return match?.[1]?.trim() || null;
}

/** Zuper API failures surface as `API_<status>`; pass the meaningful ones on instead of a blanket 500. */
export function httpFailure(error: unknown): { status: number; error: string } {
  const message = error instanceof Error ? error.message : 'UNKNOWN_ERROR';
  const upstream = /^API_(\d{3})$/.exec(message);
  if (upstream) {
    const code = Number(upstream[1]);
    if (code === 401 || code === 403 || code === 404) return { status: code, error: message };
    return { status: 502, error: message };
  }
  return { status: 500, error: message };
}
