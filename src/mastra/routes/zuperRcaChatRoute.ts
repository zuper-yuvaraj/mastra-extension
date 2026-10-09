import type { Context } from 'hono';
import { getExecutionContext } from '../lib/zuperExecutionApi';
import { getWorkflowDetail } from '../lib/zuperWorkflowApi';
import { converse, type ConverseInput, type ConverseResult } from '../rca/chatEngine';
import { parseChatRequest, type ChatRequest } from '../rca/chatRequest';
import { accountKey, ConversationStore, conversationKey } from '../rca/conversation';
import { definitionOnlyContext } from '../rca/definitionContext';
import { AccountLimiter, RateLimitError } from '../rca/limits';
import { extractBearerToken, httpFailure } from '../rca/request';
import { runPipelineViaWorkflow } from '../workflows/rcaPipelineWorkflow';

const store = new ConversationStore();
const limiter = new AccountLimiter();

/** POST /zuper/chat served by the RCA investigator: one agent for every question about a workflow or an
 * execution, with the conversation sent by the extension on every call (see rca/chatEngine.ts).
 *
 * Authorization: Bearer <the signed-in user's Zuper token>. Body:
 *   { apiUrl, workflowBuilderUrl, workflowUid, executionUid?, turns: [{role, content}], stream? }
 * Without `stream`, the answer is one JSON document, { ok, data: { reply, suggestions } }, the same
 * contract as the legacy chat. With `stream: true`, the response is newline-delimited JSON:
 *   {"type":"progress","text":...}  zero or more, as the investigator works
 *   {"type":"result","data":{reply,suggestions}}  or  {"type":"error","error":CODE}
 * Closing the connection aborts the investigation. */
export async function handleRcaChat(c: Context): Promise<Response> {
  const token = extractBearerToken(c.req.header('authorization'));
  if (!token) return c.json({ ok: false, error: 'NOT_AUTHENTICATED' }, 401);

  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ ok: false, error: 'INVALID_JSON' }, 400);
  }
  const parsed = parseChatRequest(body);
  if (!parsed.ok) return c.json({ ok: false, error: parsed.error, detail: parsed.detail }, parsed.status as 400);
  const request = parsed.value;

  let release: () => void;
  try {
    release = limiter.acquire(accountKey(token));
  } catch (error) {
    if (error instanceof RateLimitError) {
      c.header('Retry-After', String(error.retryAfterSeconds));
      return c.json({ ok: false, error: error.code }, 429);
    }
    throw error;
  }

  // The server only aborts a request when the client's connection closes before the answer was sent. Say so
  // in the log, with how long it had been running, so a cancelled request is not mistaken for a model failure.
  const startedAt = Date.now();
  c.req.raw.signal.addEventListener(
    'abort',
    () => console.warn(`[chat] client connection closed after ${((Date.now() - startedAt) / 1000).toFixed(1)}s, before the answer was sent: ${String(c.req.raw.signal.reason ?? 'no reason given')}`),
    { once: true },
  );

  const mastra = c.get('mastra');
  // RCA_ENGINE=pipeline (the default): the first question of a chat runs the evidence-complete workflow
  // (rcaPipelineWorkflow). Set it to anything else to skip the pipeline and go straight to the investigator.
  const pipeline: ConverseInput['pipeline'] =
    process.env.RCA_ENGINE && process.env.RCA_ENGINE !== 'pipeline'
      ? undefined
      : (i) => runPipelineViaWorkflow(mastra, { ...i, analyst: mastra.getAgent('rcaAnalystAgent') });
  const run = (onProgress: ((text: string) => void) | undefined, signal: AbortSignal) =>
    answer(mastra.getAgent('rcaInvestigatorAgent'), pipeline, request, token, onProgress, signal);

  if (!request.stream) {
    try {
      return c.json({ ok: true, data: publicData(await run(undefined, c.req.raw.signal)) });
    } catch (error) {
      const { status, error: code } = httpFailure(error);
      return c.json({ ok: false, error: code }, status as 401 | 403 | 404 | 500 | 502);
    } finally {
      release();
    }
  }

  const abort = new AbortController();
  const encoder = new TextEncoder();
  c.req.raw.signal.addEventListener('abort', () => abort.abort());
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const send = (event: unknown) => {
        try {
          controller.enqueue(encoder.encode(`${JSON.stringify(event)}\n`));
        } catch {
          // the client already went away
        }
      };
      try {
        send({ type: 'progress', text: 'Starting' });
        const result = await run((text) => send({ type: 'progress', text }), abort.signal);
        send({ type: 'result', data: publicData(result) });
      } catch (error) {
        if (!abort.signal.aborted) send({ type: 'error', error: httpFailure(error).error });
      } finally {
        release();
        try {
          controller.close();
        } catch {
          // already closed by a cancel
        }
      }
    },
    cancel() {
      abort.abort();
    },
  });
  return new Response(stream, { headers: { 'content-type': 'application/x-ndjson; charset=utf-8', 'cache-control': 'no-store' } });
}

function publicData(result: ConverseResult) {
  return { reply: result.reply, suggestions: result.suggestions };
}

async function answer(
  agent: Parameters<typeof converse>[0]['agent'],
  pipeline: ConverseInput['pipeline'],
  request: ChatRequest,
  token: string,
  onProgress: ((text: string) => void) | undefined,
  signal: AbortSignal,
): Promise<ConverseResult> {
  // A run takes priority whenever the chat has one: it is pinned to the workflow version that actually
  // ran. Otherwise the live definition is used, and the investigator answers from structure alone.
  const executionContext = request.executionUid
    ? await getExecutionContext(request.workflowUid, request.executionUid, token, request.workflowBuilderUrl)
    : definitionOnlyContext(await getWorkflowDetail(request.workflowUid, token, request.workflowBuilderUrl));

  return converse({
    agent,
    pipeline,
    store,
    key: conversationKey(token, request.workflowUid, request.executionUid),
    turns: request.turns,
    executionContext,
    token,
    apiUrl: request.apiUrl,
    onProgress: onProgress ? (event) => onProgress(event.text) : undefined,
    signal,
  });
}
