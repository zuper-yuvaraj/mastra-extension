// Validation for POST /zuper/chat when the RCA engine serves it, kept free of Hono/Mastra so it is testable.

import type { ChatTurn } from './conversation';
import { assertAllowedBaseUrl, HostNotAllowedError } from './hosts';

export interface ChatRequest {
  apiUrl: string;
  workflowBuilderUrl: string;
  workflowUid: string;
  /** Null when the chat has the workflow open but no run. */
  executionUid: string | null;
  turns: ChatTurn[];
  stream: boolean;
}

export type ParsedChatRequest =
  | { ok: true; value: ChatRequest }
  | { ok: false; status: number; error: string; detail?: string };

const UID = /^[A-Za-z0-9_-]{8,64}$/;
export const MAX_TURNS = 40;
export const MAX_TURN_CHARS = 8000;
/** Older turns are trimmed in the model prompt anyway; the question itself should be short. */
export const MAX_QUESTION_CHARS = 1000;

const bad = (detail: string): ParsedChatRequest => ({ ok: false, status: 400, error: 'INVALID_REQUEST', detail });

export function parseChatRequest(body: unknown): ParsedChatRequest {
  if (!body || typeof body !== 'object') return bad('JSON object expected');
  const b = body as Record<string, unknown>;
  const text = (value: unknown): string | undefined => (typeof value === 'string' && value.trim() ? value.trim() : undefined);

  const apiUrl = text(b.apiUrl);
  const workflowBuilderUrl = text(b.workflowBuilderUrl);
  const workflowUid = text(b.workflowUid);
  if (!apiUrl || !workflowBuilderUrl || !workflowUid) return bad('apiUrl, workflowBuilderUrl and workflowUid are required');
  if (!UID.test(workflowUid)) return bad('workflowUid has an invalid format');

  let executionUid: string | null = null;
  if (b.executionUid !== undefined && b.executionUid !== null && b.executionUid !== '') {
    executionUid = text(b.executionUid) ?? null;
    if (!executionUid || !UID.test(executionUid)) return bad('executionUid has an invalid format');
  }

  if (!Array.isArray(b.turns) || b.turns.length === 0) return bad('turns must be a non-empty array');
  if (b.turns.length > MAX_TURNS) return bad(`turns is limited to ${MAX_TURNS}`);
  const turns: ChatTurn[] = [];
  for (const raw of b.turns) {
    const turn = raw as Record<string, unknown> | null;
    if (!turn || (turn.role !== 'user' && turn.role !== 'assistant') || typeof turn.content !== 'string') return bad('each turn needs a role and content');
    if (turn.content.length > MAX_TURN_CHARS) return bad(`a turn is limited to ${MAX_TURN_CHARS} characters`);
    turns.push({ role: turn.role, content: turn.content });
  }
  const last = turns[turns.length - 1]!;
  if (last.role !== 'user' || !last.content.trim()) return bad('the last turn must be a non-empty user message');
  if (last.content.length > MAX_QUESTION_CHARS) return bad(`a question is limited to ${MAX_QUESTION_CHARS} characters`);

  try {
    return {
      ok: true,
      value: {
        apiUrl: assertAllowedBaseUrl(apiUrl),
        workflowBuilderUrl: assertAllowedBaseUrl(workflowBuilderUrl),
        workflowUid,
        executionUid,
        turns,
        stream: b.stream === true,
      },
    };
  } catch (error) {
    if (error instanceof HostNotAllowedError) return { ok: false, status: 400, error: 'HOST_NOT_ALLOWED', detail: error.message };
    throw error;
  }
}
