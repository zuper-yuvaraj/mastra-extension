// Wraps a Mastra tool so everything it returns is (1) size-capped and (2) written to the run's
// evidence ledger. The verifier later requires every quote in the verdict to appear in that ledger.

import { createTool } from '@mastra/core/tools';
import { capResult } from './toolLogic';
import { redactSecrets } from './sanitize';
import { RCA_LEDGER_KEY, type EvidenceLedger } from './ledger';

interface ToolLike {
  id: string;
  description?: string;
  inputSchema?: unknown;
  execute?: (input: any, context: any) => Promise<unknown>;
}

/** `knowledge` marks a documentation tool: its results are shown to the agent but never count as evidence. */
export function withEvidence<T extends ToolLike>(tool: T, kind: 'evidence' | 'knowledge' = 'evidence') {
  if (!tool.execute) throw new Error(`tool ${tool.id} has no execute function`);
  const run = tool.execute;
  return createTool({
    id: tool.id,
    description: tool.description ?? tool.id,
    inputSchema: tool.inputSchema as never,
    execute: async (input: any, context: any) => {
      // Evidence is redacted before it is shown to the model, and before the ledger records it, so the ledger
      // holds exactly what the model saw. Documentation is shown as written.
      const output = await run(input, context);
      const result = capResult(kind === 'evidence' ? redactSecrets(output) : output);
      const ledger = context?.requestContext?.getRaw?.(RCA_LEDGER_KEY) as EvidenceLedger | undefined;
      if (kind === 'knowledge') ledger?.recordKnowledge(tool.id, JSON.stringify(input), result);
      else ledger?.record(tool.id, JSON.stringify(input), result);
      return result;
    },
  });
}
