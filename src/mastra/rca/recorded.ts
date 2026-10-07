// Wraps a Mastra tool so everything it returns is (1) size-capped and (2) written to the run's
// evidence ledger. The verifier later requires every quote in the verdict to appear in that ledger.

import { createTool } from '@mastra/core/tools';
import { capResult } from './toolLogic';
import { RCA_LEDGER_KEY, type EvidenceLedger } from './ledger';

interface ToolLike {
  id: string;
  description?: string;
  inputSchema?: unknown;
  execute?: (input: any, context: any) => Promise<unknown>;
}

export function withEvidence<T extends ToolLike>(tool: T) {
  if (!tool.execute) throw new Error(`tool ${tool.id} has no execute function`);
  const run = tool.execute;
  return createTool({
    id: tool.id,
    description: tool.description ?? tool.id,
    inputSchema: tool.inputSchema as never,
    execute: async (input: any, context: any) => {
      const result = capResult(await run(input, context));
      const ledger = context?.requestContext?.getRaw?.(RCA_LEDGER_KEY) as EvidenceLedger | undefined;
      ledger?.record(tool.id, JSON.stringify(input), result);
      return result;
    },
  });
}
