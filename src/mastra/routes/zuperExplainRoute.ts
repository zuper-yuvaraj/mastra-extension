import type { Context } from 'hono';
import { zuperClassifierAgent } from '../agents/zuperClassifierAgent';
import { getWorkflowDetail } from '../lib/zuperWorkflowApi';
import { buildWorkflowPrompt } from '../lib/workflowPrompt';

interface ExplainRequestBody {
  workflowBuilderUrl?: string;
  workflowUid?: string;
  forceRefresh?: boolean;
}

interface ExplainCacheEntry {
  version: string;
  explanation: string;
  workflowName: string;
  fetchedAt: number;
}

// workflow_uid is a globally-unique UUID, so a single in-memory cache keyed by it is safe even
// though this process serves many different Zuper accounts. Lost on server restart, unlike the
// original chrome.storage.local-backed cache — acceptable for a dev-server-hosted backend.
const explainCache = new Map<string, ExplainCacheEntry>();

function extractBearerToken(c: Context): string | null {
  const header = c.req.header('authorization') ?? '';
  const match = /^Bearer\s+(.+)$/i.exec(header.trim());
  return match?.[1]?.trim() || null;
}

/** POST /zuper/explain (server root — custom apiRoutes are not under /api) — one-shot workflow
 * summary, relaying the same bearer-token pattern as /zuper/chat. */
export async function handleZuperExplain(c: Context): Promise<Response> {
  const token = extractBearerToken(c);
  if (!token) return c.json({ ok: false, error: 'NOT_AUTHENTICATED' }, 401);

  let body: ExplainRequestBody;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ ok: false, error: 'INVALID_JSON' }, 400);
  }

  const { workflowBuilderUrl, workflowUid, forceRefresh } = body;
  if (!workflowBuilderUrl || !workflowUid) {
    return c.json({ ok: false, error: 'INVALID_REQUEST' }, 400);
  }

  try {
    const workflow = await getWorkflowDetail(workflowUid, token, workflowBuilderUrl, forceRefresh);
    const version = workflow.draft_version?.version ?? workflow.workflow_uid;

    if (!forceRefresh) {
      const cached = explainCache.get(workflowUid);
      if (cached && cached.version === version) {
        return c.json({ ok: true, data: { explanation: cached.explanation, workflowName: cached.workflowName } });
      }
    }

    const prompt = buildWorkflowPrompt(workflow);
    const result = await zuperClassifierAgent.generate(prompt);
    const explanation = result.text;

    explainCache.set(workflowUid, { version, explanation, workflowName: workflow.workflow_name, fetchedAt: Date.now() });

    return c.json({ ok: true, data: { explanation, workflowName: workflow.workflow_name } });
  } catch (err) {
    return c.json({ ok: false, error: err instanceof Error ? err.message : 'UNKNOWN_ERROR' }, 500);
  }
}
