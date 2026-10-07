// Reads what a person gets by copying requests out of the browser's network tab while viewing an
// execution in the workflow builder, pasted one after another into a text file:
//
//   Request URL
//   https://<dc>-workflow.zuperpro.com/api/workflows/<wf>/executions/<ex>/summary
//   Request method
//   GET
//
//   Response            <- sometimes missing
//   { ...json... }
//   https://<dc>-workflow.zuperpro.com/api/workflows/<wf>/executions/<ex>/nodes/<uid>?iteration=1   <- bare URL
//   { ...json... }
//
// Copies are inconsistent (CRLF endings, the "Request URL" / "Request method" / "Response" labels sometimes
// missing, several responses under one label, a node pasted twice), so the only thing relied on is the URL
// itself: every line that is an execution endpoint starts a response, which runs to the next such line.
// Nodes inside a loop are fetched per iteration (`.../nodes/<uid>?iteration=N`) and are kept per iteration.

import type { ExecutionSummaryResponse } from '../lib/zuperExecutionApi';

export interface ImportedCapture {
  summary: ExecutionSummaryResponse;
  /** node_uid -> the response body exactly as the API returned it (`{ node_execution: {...} }`), for a node
   * that was fetched without an iteration. */
  nodeData: Record<string, unknown>;
  /** node_uid -> iteration -> response, for a node inside a loop (fetched as `.../nodes/<uid>?iteration=N`). */
  iterationData: Record<string, Record<number, unknown>>;
  /** Responses that appeared more than once in the dump (the first copy is kept). */
  duplicates: string[];
  /** Responses that could not be read (invalid JSON), with the reason. */
  skipped: string[];
}

/** A line that is, on its own, an execution endpoint URL. */
const ENDPOINT_LINE =
  /^[ \t]*(https?:\/\/\S+?\/executions\/[^/\s]+\/(?:summary|nodes\/[0-9a-f-]{36}))(?:\?iteration=(\d+))?[ \t]*$/gim;

export function parseNetworkDump(text: string): ImportedCapture {
  const source = text.replace(/\r\n/g, '\n');
  const found = [...source.matchAll(ENDPOINT_LINE)];

  let summary: ExecutionSummaryResponse | null = null;
  const nodeData: Record<string, unknown> = {};
  const iterationData: Record<string, Record<number, unknown>> = {};
  const duplicates: string[] = [];
  const skipped: string[] = [];

  found.forEach((match, i) => {
    const url = match[1]!;
    const iteration = match[2] !== undefined ? Number(match[2]) : undefined;
    const from = match.index! + match[0].length;
    const to = i + 1 < found.length ? found[i + 1]!.index! : source.length;
    const segment = source.slice(from, to);

    // The JSON starts at the first line that opens an object/array (skipping "Request method", "GET", "Response").
    const start = segment.search(/^\s*[{[]/m);
    let json: unknown;
    try {
      if (start === -1) throw new Error('no JSON body');
      json = JSON.parse(segment.slice(start).trim().replace(/(?:Request URL\s*)+$/, '').trim());
    } catch (error) {
      skipped.push(`${url}${iteration !== undefined ? `?iteration=${iteration}` : ''}: not valid JSON (${error instanceof Error ? error.message.slice(0, 60) : 'parse error'})`);
      return;
    }

    if (url.endsWith('/summary')) {
      summary = json as ExecutionSummaryResponse;
      return;
    }
    const uid = /\/nodes\/([0-9a-f-]{36})$/i.exec(url)![1]!;
    if (iteration !== undefined) {
      const runs = (iterationData[uid] ??= {});
      if (iteration in runs) duplicates.push(`${uid}?iteration=${iteration}`);
      else runs[iteration] = json;
    } else if (uid in nodeData) {
      duplicates.push(uid);
    } else {
      nodeData[uid] = json;
    }
  });

  if (!summary || !(summary as ExecutionSummaryResponse).workflow_execution) {
    throw new Error('No execution summary found. Copy the .../executions/<uid>/summary request as well.');
  }
  return { summary, nodeData, iterationData, duplicates, skipped };
}
