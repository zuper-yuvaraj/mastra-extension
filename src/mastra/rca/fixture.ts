// A captured execution on disk (scripts/rca-capture.ts) and the way back to an ExecutionContext, so the
// investigator and its tools can run on a real failure offline: no token, no network, repeatable.

import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { projectPath } from '../knowledge/paths';
import { createExecutionContext, type ExecutionContext, type ExecutionSummaryResponse } from '../lib/zuperExecutionApi';

export interface RcaFixture {
  name: string;
  description?: string;
  captured_at: string;
  workflow_uid: string;
  summary: ExecutionSummaryResponse;
  /** node_uid -> raw node-execution payload exactly as the API returned it (after sanitizing). */
  node_data: Record<string, unknown>;
  /** What a human established for this execution; the eval scores the agent against it. */
  expected?: {
    status?: 'failed' | 'unexpected_branch' | 'no_issue' | 'insufficient_evidence';
    /** Name of the node where the problem starts. */
    root_cause_node?: string;
    category?: string;
    notes?: string;
  };
}

export const FIXTURE_DIR = projectPath('fixtures', 'rca');

export function executionContextFromFixture(fixture: RcaFixture): ExecutionContext {
  return createExecutionContext(fixture.summary, async (nodeUid) => {
    if (nodeUid in fixture.node_data) return fixture.node_data[nodeUid];
    throw new Error('FETCH_FAILED');
  });
}

export function loadFixture(file: string): RcaFixture {
  return JSON.parse(readFileSync(file, 'utf8')) as RcaFixture;
}

export function loadAllFixtures(dir: string = FIXTURE_DIR): RcaFixture[] {
  try {
    return readdirSync(dir)
      .filter((f) => f.endsWith('.json'))
      .sort()
      .map((f) => loadFixture(path.join(dir, f)));
  } catch {
    return [];
  }
}
