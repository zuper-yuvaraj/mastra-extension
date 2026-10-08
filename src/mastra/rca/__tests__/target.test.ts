import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createExecutionContext, type ExecutedWorkflowNode, type NodeExecutionStatus } from '../../lib/zuperExecutionApi';
import { locateTarget } from '../target';
import { fakeExecution } from './fakeExecution';

// Trigger -> Check category (If/Else) -TRUE-> Create Job -> Update fields ; FALSE has nothing connected.
// A second branch: Check category -TRUE-> Notify team (a different path).
const node = (uid: string, name: string, key: string): ExecutedWorkflowNode => ({ node_uid: uid, id: uid, action_name: name, node_name: key, action_key: key, form_fields: {} });
const nodes = [
  node('t', 'On Job Created', 'job.new'),
  node('c', 'Check category', 'if_else'),
  node('j', 'Create Job', 'zuper_create'),
  node('f', 'Update fields', 'zuper_update'),
  node('lp', 'Loop items', 'loop'),
  node('in', 'Inside loop', 'zuper_update'),
];
const connections = [
  { source: 't', target: 'c' },
  { source: 'c', target: 'j', output_value: true },
  { source: 'j', target: 'f' },
  { source: 't', target: 'lp' },
  { source: 'lp', target: 'in' },
];

function run(opts: { branch: boolean; loopItems?: number }) {
  const status = (uid: string, over: Partial<NodeExecutionStatus> = {}): NodeExecutionStatus => ({
    node_uid: uid, status: 'COMPLETED', current_iteration: null, total_iterations: null, output_value: null, is_loop: false, ...over,
  });
  const execution: NodeExecutionStatus[] = [
    status('t'),
    status('c', { output_value: opts.branch }),
    ...(opts.branch ? [status('j'), status('f')] : []),
    status('lp', { is_loop: true, total_iterations: opts.loopItems ?? 3, current_iteration: 0 }),
  ];
  return createExecutionContext(
    { workflow_execution: { execution_uid: `e-${opts.branch}-${opts.loopItems}`, workflow_uid: 'w', status: 'COMPLETED', workflow_data: { nodes, connections } }, node_execution: execution },
    async () => ({}),
  );
}

test('a failed run starts at the failed node', async () => {
  const target = await locateTarget(fakeExecution(true), 'why did it fail?');
  assert.deepEqual(target, { kind: 'failed', uid: 'u-mail', iteration: null });
});

test('a node that ran and is named in the question is the target', async () => {
  const target = await locateTarget(run({ branch: true }), 'what did Create Job do?');
  assert.equal(target.kind, 'node');
  assert.equal(target.kind === 'node' && target.uid, 'j');
});

test('a node that never ran is explained by the decision that blocked it, found in code', async () => {
  const target = await locateTarget(run({ branch: false }), 'why was Create Job not run?');
  assert.equal(target.kind, 'gated');
  if (target.kind !== 'gated') return;
  assert.equal(target.uid, 'c', 'the backtrace starts at the If/Else, whose condition inputs decided it');
  assert.equal(target.wanted.name, 'Create Job');
  assert.match(target.blockers[0]!.detail, /Check category evaluated FALSE.*no node connected/);
});

test('a node inside a loop that had nothing to iterate is blocked by the loop', async () => {
  const target = await locateTarget(run({ branch: true, loopItems: 0 }), 'why did Inside loop not run');
  assert.equal(target.kind, 'gated');
  if (target.kind === 'gated') assert.equal(target.blockers[0]!.kind, 'loop_empty');
});

test('with no node named, the outcome is mapped by the hook, and invented names are dropped', async () => {
  const ctx = run({ branch: false });
  const mapped = await locateTarget(ctx, 'why was the job never created?', { mapOutcome: async () => ['Create Job'] });
  assert.equal(mapped.kind, 'gated');
  const invented = await locateTarget(ctx, 'why was the job never created?', { mapOutcome: async () => ['Made Up Node'] });
  assert.equal(invented.kind, 'node', 'falls back to where the flow ended early');
  assert.equal(invented.kind === 'node' && invented.uid, 'c');
});

test('with nothing to go on, it says so instead of guessing', async () => {
  const target = await locateTarget(run({ branch: true }), 'is everything fine here?');
  assert.equal(target.kind, 'none');
});

test('definition-only chats have no run to trace', async () => {
  const target = await locateTarget({ ...fakeExecution(false), definitionOnly: true }, 'what does it do?');
  assert.equal(target.kind, 'none');
});
