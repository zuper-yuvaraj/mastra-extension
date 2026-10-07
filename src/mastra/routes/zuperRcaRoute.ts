import type { Context } from 'hono';
import { isTerminalStatus } from '../lib/zuperExecutionApi';
import { RCA_RESULT_TTL_MS } from '../rca/config';
import { extractBearerToken, httpFailure, parseRcaRequest } from '../rca/request';
import { ResultCache, resultKey } from '../rca/resultCache';
import { dropRunSecrets, putRunSecrets } from '../rca/runSecrets';
import type { RcaWorkflowResult } from '../workflows/rcaWorkflow';

const cache = new ResultCache<RcaWorkflowResult>(RCA_RESULT_TTL_MS);

/** POST /zuper/rca (custom apiRoutes are served from the server root, not /api).
 *
 * Authorization: Bearer <the signed-in user's Zuper token>. Body:
 *   { apiUrl, workflowBuilderUrl, workflowUid, executionUid, question?, forceRefresh? }
 * The token is used only to read this user's own data. Mastra persists a run's input, outputs and request
 * context, so the token is held in process memory under a one-time key (rca/runSecrets.ts) and only that
 * key enters the workflow. Base URLs must be https Zuper hosts (see rca/hosts.ts).
 *
 * Results for finished executions are cached per (account, execution, question); a still-running
 * execution is never cached; forceRefresh bypasses the cache. */
export async function handleZuperRca(c: Context): Promise<Response> {
  const token = extractBearerToken(c.req.header('authorization'));
  if (!token) return c.json({ ok: false, error: 'NOT_AUTHENTICATED' }, 401);

  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ ok: false, error: 'INVALID_JSON' }, 400);
  }

  const parsed = parseRcaRequest(body);
  if (!parsed.ok) return c.json({ ok: false, error: parsed.error, detail: parsed.detail }, parsed.status as 400);
  const request = parsed.value;

  try {
    const { value, cached } = await cache.getOrCompute(
      resultKey(token, request.executionUid, request.question),
      async () => {
        const runKey = putRunSecrets({ zuperToken: token, apiUrl: request.apiUrl, workflowBuilderUrl: request.workflowBuilderUrl });
        let result;
        try {
          const workflow = c.get('mastra').getWorkflow('rcaWorkflow');
          result = await (await workflow.createRun()).start({
            inputData: {
              runKey,
              workflowUid: request.workflowUid,
              executionUid: request.executionUid,
              question: request.question,
              forceRefresh: request.forceRefresh,
            },
          });
        } finally {
          dropRunSecrets(runKey);
        }

        if (result.status !== 'success') {
          const failed = Object.values(result.steps ?? {}).find((step: any) => step?.status === 'failed') as { error?: unknown } | undefined;
          const reason = failed?.error ?? (result as { error?: unknown }).error;
          throw reason instanceof Error ? reason : new Error(typeof reason === 'string' ? reason : 'RCA_FAILED');
        }
        const output = result.result as RcaWorkflowResult;
        // A run still in flight changes under us, so only a finished execution's analysis is reusable.
        return { value: output, cacheable: isTerminalStatus(output.meta.execution_status ?? undefined) };
      },
      { bypass: request.forceRefresh },
    );

    return c.json({ ok: true, data: { ...value.verdict, html: value.html, meta: { ...value.meta, cached } } });
  } catch (error) {
    const { status, error: code } = httpFailure(error);
    return c.json({ ok: false, error: code }, status as 401 | 403 | 404 | 500 | 502);
  }
}
