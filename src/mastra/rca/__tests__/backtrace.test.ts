import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { test } from 'node:test';
import { projectPath } from '../../knowledge/paths';
import { buildBacktrace } from '../backtrace';
import { executionContextFromFixture, loadFixture } from '../fixture';
import { fakeExecution } from './fakeExecution';

test('the trace follows every reference back to the node that produced the bad value', async () => {
  const trace = await buildBacktrace(fakeExecution(true), { uid: 'u-mail' });
  assert.deepEqual(trace.nodes.map((n) => n.name), ['Send Email', 'Get Job', 'On Webhook']);
  assert.deepEqual(trace.nodes.map((n) => n.depth), [0, 1, 2]);

  const mail = trace.nodes[0]!;
  const to = mail.inputs.find((i) => i.field === 'to.value')!;
  assert.equal(to.status, 'null');
  assert.equal(to.produced_by, trace.nodes[1]!.id);
  assert.equal(mail.failed, true);
  assert.equal(mail.own_inputs_good, false, 'its input was bad, so the failure starts upstream');

  const job = trace.nodes[1]!;
  assert.equal(job.output_bad, true);
  assert.equal(job.own_inputs_good, true);
  assert.deepEqual(job.feeds_failed, ['Send Email.to.value']);
  assert.match(job.bad_because.join(' '), /Send Email reads .*customer_email/);
  assert.deepEqual(trace.origin_candidates, [job.id], 'the origin is Get Job, not the node that errored');
  assert.equal(trace.capped, false);
  assert.deepEqual(trace.data_gaps, []);
});

test('a node whose inputs are fine but which failed is its own origin', async () => {
  const execution = fakeExecution(true);
  const trace = await buildBacktrace(execution, { uid: 'u-job' });
  assert.deepEqual(trace.nodes.map((n) => n.name), ['Get Job', 'On Webhook']);
  assert.deepEqual(trace.origin_candidates, [], 'Get Job ran fine and nothing read a bad value from it here');
});

test('the trace is capped, and says so, instead of growing without bound', async () => {
  const trace = await buildBacktrace(fakeExecution(true), { uid: 'u-mail' }, { maxNodeRuns: 2 });
  assert.deepEqual(trace.nodes.map((n) => n.name), ['Send Email', 'Get Job']);
  assert.equal(trace.capped, true);
  const full = await buildBacktrace(fakeExecution(true), { uid: 'u-mail' });
  assert.equal(full.capped, false);
});

const file = projectPath('fixtures', 'rca', 'update-appointment-404.json');
const options = { skip: existsSync(file) ? false : 'fixture not present' };

test('real 404 run: the trace reaches past the failed node to the node that built its request', options, async () => {
  const context = executionContextFromFixture(loadFixture(file));
  const failed = context.failure!.node_uid!;
  const trace = await buildBacktrace(context, { uid: failed });
  assert.ok(trace.nodes.length >= 2, `only ${trace.nodes.length} node(s) traced`);
  assert.equal(trace.nodes[0]!.uid, failed);
  assert.ok(trace.nodes.some((n) => n.name === 'Construct'), trace.nodes.map((n) => n.name).join(', '));
  assert.ok(trace.nodes.every((n) => n.id.includes('#')));
  const construct = trace.nodes.find((n) => n.name === 'Construct')!;
  assert.ok(construct.feeds_failed.length > 0, 'Construct fed the failed request, so it is a suspect even though its own output looks well formed');
  assert.ok(construct.feeds_failed.every((f) => f.startsWith('update Appointment.')), construct.feeds_failed.join(', '));
});

test('real 404 run: the request is compared with the documented endpoint when one matches', options, async () => {
  const context = executionContextFromFixture(loadFixture(file));
  const trace = await buildBacktrace(context, { uid: context.failure!.node_uid! });
  const http = trace.nodes[0]!;
  // PUT /api/appointments is not a documented endpoint, so no comparison can be made (and none is invented)
  assert.equal(http.doc_check, undefined);
});
