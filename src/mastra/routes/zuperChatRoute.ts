import type { Context } from 'hono';
import { RequestContext } from '@mastra/core/request-context';
import { zuperChatAgent } from '../agents/zuperChatAgent';
import {
  assembleContext,
  classifyIntent,
  getFollowUpSuggestions,
  parseVerdict,
  planEvidence,
  retrieveEvidence,
  validateVerdict,
} from '../lib/orchestrator';
import { getExecutionContext } from '../lib/zuperExecutionApi';
import { getWorkflowDetail } from '../lib/zuperWorkflowApi';
import { buildEvidenceContext, buildReasoningInstructions } from '../lib/workflowPrompt';
import { ZUPER_CHAT_CONTEXT_KEY, type ZuperChatRequestContext } from '../tools/zuperChatTools';

interface ChatTurn {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatRequestBody {
  apiUrl?: string;
  workflowBuilderUrl?: string;
  workflowUid?: string;
  executionUid?: string | null;
  turns?: ChatTurn[];
}

// The bounded tool-calling fallback's round cap — same as the original single-loop chat's default
// (see the extension's now-retired aiProviders.ts), kept low since Stages 0-3 already fetch most of
// what a turn needs before this agent is ever called.
const MAX_TOOL_ROUNDS = 5;

function extractBearerToken(c: Context): string | null {
  const header = c.req.header('authorization') ?? '';
  const match = /^Bearer\s+(.+)$/i.exec(header.trim());
  return match?.[1]?.trim() || null;
}

/** POST /zuper/chat (server root — custom apiRoutes are not under /api) — the extension relays the
 * signed-in user's Zuper bearer token plus the account's API/workflow-builder base URLs; this
 * process holds no Zuper credentials of its own. */
export async function handleZuperChat(c: Context): Promise<Response> {
  const token = extractBearerToken(c);
  if (!token) return c.json({ ok: false, error: 'NOT_AUTHENTICATED' }, 401);

  let body: ChatRequestBody;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ ok: false, error: 'INVALID_JSON' }, 400);
  }

  const { apiUrl, workflowBuilderUrl, workflowUid, executionUid, turns } = body;
  if (!apiUrl || !workflowBuilderUrl || !workflowUid || !Array.isArray(turns) || turns.length === 0) {
    return c.json({ ok: false, error: 'INVALID_REQUEST' }, 400);
  }

  try {
    // Execution takes priority whenever one is active — it's pinned to whichever workflow version
    // actually ran, which may differ from the live definition. Only fall back to the live workflow
    // (used as-is; edits since any past run are exactly the point) when there's no execution at all.
    const executionContext = executionUid
      ? await getExecutionContext(workflowUid, executionUid, token, workflowBuilderUrl)
      : null;
    const liveWorkflow = executionContext
      ? null
      : await getWorkflowDetail(workflowUid, token, workflowBuilderUrl).catch(() => null);

    // Stage 0 — deterministic grounding facts (node index, branch types, failure, lineage graph).
    const context = assembleContext(executionContext, liveWorkflow);

    const question = turns[turns.length - 1]?.content ?? '';
    // Stage 1 only needs a little conversational continuity, not the full history.
    const recentTurns = turns.slice(0, -1).slice(-2);

    // Stage 1 — classify intent before spending anything on retrieval.
    const classification = await classifyIntent(question, recentTurns, context);

    // Stage 2 — deterministic routing table, no model call.
    const plan = planEvidence(classification, context);

    // Stage 3 — parallel, deterministic retrieval; produces a compact evidence bundle, not raw API
    // payloads.
    const evidence = await retrieveEvidence(plan, context, executionContext, token, apiUrl);

    const instructions = [buildReasoningInstructions(), buildEvidenceContext(evidence, Boolean(executionContext))].join(
      '\n\n',
    );

    const toolContext: ZuperChatRequestContext = {
      zuperToken: token,
      zuperApiUrl: apiUrl,
      executionContext,
      liveWorkflow,
      chatContext: context,
    };
    const requestContext = new RequestContext();
    requestContext.setRaw(ZUPER_CHAT_CONTEXT_KEY, toolContext);

    // Stage 4 — the one call that produces the answer. The bounded tool-calling fallback (see
    // tools/zuperChatTools.ts) covers whatever the deterministic plan under-fetched.
    const result = await zuperChatAgent.generate([{ role: 'user', content: question }], {
      instructions,
      requestContext,
      maxSteps: MAX_TOOL_ROUNDS,
    });

    // Stage 5 — deterministic validation before the user sees it.
    const verdict = validateVerdict(parseVerdict(result.text), context);
    const suggestions = getFollowUpSuggestions(classification.intent);

    return c.json({ ok: true, data: { reply: verdict.html_answer, suggestions } });
  } catch (err) {
    return c.json({ ok: false, error: err instanceof Error ? err.message : 'UNKNOWN_ERROR' }, 500);
  }
}
