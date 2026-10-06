// Turns the workflow-builder knowledge into small, self-contained chunks for the vector "finder".
// The chunks are pointers: each carries the exact-lookup call (see lookup.ts) that returns the
// authoritative data, so search locates the right topic and the lookup supplies the exact facts.

import { hashText, type KbChunk } from '../ingest';
import { loadWorkflowBuilderKnowledge } from './loader';

export const WORKFLOW_BUILDER_KIND = 'workflow_builder';
const MAX_CHUNK_CHARS = 1800;

type Topic = 'node' | 'node_gotcha' | 'expression' | 'code' | 'trigger' | 'capability';

function clip(text: string): string {
  return text.length <= MAX_CHUNK_CHARS ? text : `${text.slice(0, MAX_CHUNK_CHARS)}…`;
}

function plain(value: unknown): string {
  if (value === null || value === undefined) return '';
  if (typeof value === 'string') return value;
  return JSON.stringify(value);
}

/** `key: value` lines for an object; strings stay readable instead of being JSON-quoted. */
function describe(value: unknown): string {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return Object.entries(value as Record<string, unknown>)
      .filter(([k]) => !k.startsWith('_'))
      .map(([k, v]) => `${k}: ${plain(v)}`)
      .join('\n');
  }
  return plain(value);
}

export function buildWorkflowBuilderChunks(): KbChunk[] {
  const knowledge = loadWorkflowBuilderKnowledge();
  const chunks: KbChunk[] = [];

  const add = (input: {
    source: string;
    path: string;
    topic: Topic;
    title: string;
    text: string;
    lookup?: string;
  }): void => {
    const text = clip(`${input.title}\n${input.text}`.trim());
    chunks.push({
      id: `wb:${input.source}:${input.path}`,
      text,
      metadata: {
        kind: WORKFLOW_BUILDER_KIND,
        topic: input.topic,
        title: input.title,
        lookup: input.lookup,
        source_file: `${input.source}.json`,
        generated_at: knowledge.versions[input.source] ?? '',
        hash: hashText(text),
      },
    });
  };

  // ── nodes ────────────────────────────────────────────────────────────────────────────────────
  for (const node of knowledge.nodeCatalog.nodes) {
    const isPlaceholder = node.action_key.includes(' ') || node.action_key.includes('(');
    const key = isPlaceholder ? 'zuper_event_trigger' : node.action_key;
    add({
      source: 'node_catalog',
      path: key,
      topic: 'node',
      title: `Node: ${node.action_name} (${key})`,
      text: [
        `Category ${node.category}, type ${node.type}.`,
        node.description,
        `When to use: ${node.when_to_use}`,
        node.handles ? `Handles: ${plain(node.handles)}` : '',
        node.connection_rules ? `Connection rules: ${plain(node.connection_rules)}` : '',
        Array.isArray(node.constraints) && node.constraints.length > 0 ? `Constraints: ${node.constraints.join(' | ')}` : '',
      ]
        .filter(Boolean)
        .join('\n'),
      lookup: `get_node_info("${key}")`,
    });
  }

  // Per-field gotchas are the most failure-relevant lines in the field schemas.
  for (const [nodeKey, schema] of Object.entries(knowledge.nodeFieldSchemas.nodes)) {
    const fields = ((schema as Record<string, any>).fields ?? (schema as Record<string, any>).form_fields) as
      | Record<string, any>
      | undefined;
    for (const [fieldName, field] of Object.entries(fields ?? {})) {
      if (!field?.gotchas) continue;
      add({
        source: 'node_field_schemas',
        path: `${nodeKey}.${fieldName}.gotchas`,
        topic: 'node_gotcha',
        title: `Gotcha: ${nodeKey}.${fieldName}`,
        text: `${field.what ? `${field.what}\n` : ''}Gotcha: ${plain(field.gotchas)}${
          field.fixed_or_expression ? `\nFixed or expression: ${field.fixed_or_expression}` : ''
        }`,
        lookup: `get_node_fields("${nodeKey}", field: "${fieldName}")`,
      });
    }
  }

  // One chunk per mode/option of a node (e.g. wait: FIXED / CALENDAR_DATE), with that mode's notes.
  for (const [nodeKey, schema] of Object.entries(knowledge.nodeFieldSchemas.nodes)) {
    const record = schema as Record<string, any>;
    const options = record.mode_options as Record<string, any> | undefined;
    if (!options) continue;
    for (const [option, detail] of Object.entries(options)) {
      if (option.startsWith('_') || !detail || typeof detail !== 'object') continue;
      const modeSpec = (record.modes as Record<string, any> | undefined)?.[option];
      add({
        source: 'node_field_schemas',
        path: `${nodeKey}.mode_options.${option}`,
        topic: 'node',
        title: `Node mode: ${nodeKey} ${options._field ?? record.mode_key ?? 'mode'} = ${option}`,
        text: [
          detail.what ? `What: ${detail.what}` : '',
          detail.when_to_use ? `When to use: ${detail.when_to_use}` : '',
          modeSpec?.notes ? `Notes: ${modeSpec.notes}` : '',
          modeSpec?.required ? `Required fields: ${plain(modeSpec.required)}` : '',
        ]
          .filter(Boolean)
          .join('\n'),
        lookup: `get_node_fields("${nodeKey}", mode: "${option}")`,
      });
    }
  }

  // ── expressions ──────────────────────────────────────────────────────────────────────────────
  const expressions = knowledge.expressions as Record<string, any>;
  add({
    source: 'expressions_reference',
    path: 'core_model',
    topic: 'expression',
    title: 'Expression core model: every node output is wrapped in {node, data}',
    text: `Engine: ${expressions.engine}\n${describe(expressions.core_model)}`,
    lookup: 'get_expression_rules()',
  });
  expressions.accessors.forEach((accessor: Record<string, unknown>, i: number) =>
    add({
      source: 'expressions_reference',
      path: `accessors.${i}`,
      topic: 'expression',
      title: `Expression accessor: ${plain(accessor.syntax)}`,
      text: describe(accessor),
      lookup: 'get_expression_rules()',
    }),
  );
  for (const [name, shape] of Object.entries<unknown>(expressions.trigger_data_shapes ?? {})) {
    if (name === 'note') continue;
    add({
      source: 'expressions_reference',
      path: `trigger_data_shapes.${name}`,
      topic: 'expression',
      title: `Trigger data shape: ${name}`,
      text: describe(shape),
      lookup: `get_node_output_shape("${name === 'zuper_event' ? 'zuper_event_trigger' : name}")`,
    });
  }
  for (const [name, shape] of Object.entries<unknown>(expressions.node_output_shapes ?? {})) {
    if (name === 'note') continue;
    add({
      source: 'expressions_reference',
      path: `node_output_shapes.${name}`,
      topic: 'expression',
      title: `Node output shape: ${name}`,
      text: describe(shape),
      lookup: `get_node_output_shape("${name}")`,
    });
  }
  expressions.loop.forEach((entry: Record<string, unknown>, i: number) =>
    add({
      source: 'expressions_reference',
      path: `loop.${i}`,
      topic: 'expression',
      title: `Loop expression: ${plain(entry.syntax ?? 'note')}`,
      text: describe(entry),
      lookup: 'get_expression_rules()',
    }),
  );
  for (const section of ['variables', 'rendering', 'fixed_vs_expression', 'notification_body_dual_templating']) {
    if (expressions[section] === undefined) continue;
    add({
      source: 'expressions_reference',
      path: section,
      topic: 'expression',
      title: `Expressions: ${section.replace(/_/g, ' ')}`,
      text: Array.isArray(expressions[section]) ? expressions[section].map(describe).join('\n') : describe(expressions[section]),
      lookup: 'get_expression_rules()',
    });
  }
  expressions.common_mistakes.forEach((mistake: unknown, i: number) =>
    add({
      source: 'expressions_reference',
      path: `common_mistakes.${i}`,
      topic: 'expression',
      title: `Common mistake #${i + 1}`,
      text: describe(mistake),
      lookup: 'get_expression_rules()',
    }),
  );
  expressions.worked_examples.forEach((example: unknown, i: number) =>
    add({
      source: 'expressions_reference',
      path: `worked_examples.${i}`,
      topic: 'expression',
      title: `Worked example #${i + 1}`,
      text: describe(example),
      lookup: 'get_expression_rules()',
    }),
  );

  // ── code node runtime ────────────────────────────────────────────────────────────────────────
  const code = knowledge.codeRuntime as Record<string, any>;
  add({
    source: 'code_node_runtime',
    path: 'sandbox.modules',
    topic: 'code',
    title: 'Code node: which npm modules can be required (lodash, moment, axios, dayjs, ...)',
    text: [
      `A code node can require() only these modules: ${code.allowed_modules.join(', ')}.`,
      `Require rule: ${code.require_rule}`,
      `Forbidden: ${code.forbidden.join(', ')}.`,
    ].join('\n'),
    lookup: 'get_code_runtime()',
  });
  add({
    source: 'code_node_runtime',
    path: 'sandbox.limits',
    topic: 'code',
    title: 'Code node: timeout and isolation',
    text: `The code node runs in an isolated sandbox. Isolation: ${code.isolation}\nDefault timeout: ${code.timeout_seconds_default} seconds, then the node fails.`,
    lookup: 'get_code_runtime()',
  });
  add({
    source: 'code_node_runtime',
    path: 'sandbox.return',
    topic: 'code',
    title: 'Code node: what it must return (returning nothing is an error)',
    text: `What a code node must return: ${code.return}`,
    lookup: 'get_code_runtime()',
  });
  for (const [version, spec] of Object.entries<unknown>(code.versions)) {
    if (version === 'selector') continue;
    add({
      source: 'code_node_runtime',
      path: `versions.${version}`,
      topic: 'code',
      title: `Code node ${version}: globals and memory`,
      text: `${describe(spec)}\nVersion selector: ${plain(code.versions.selector)}`,
      lookup: 'get_code_runtime()',
    });
  }
  for (const [topic, value] of Object.entries<unknown>(code.zuper_api_recipe)) {
    add({
      source: 'code_node_runtime',
      path: `zuper_api_recipe.${topic}`,
      topic: 'code',
      title: `Zuper API recipe: ${topic.replace(/_/g, ' ')}`,
      text: plain(value),
      lookup: `get_code_runtime(topic: "${topic}")`,
    });
  }

  // ── trigger filters ──────────────────────────────────────────────────────────────────────────
  const triggers = knowledge.triggerFilters as Record<string, any>;
  for (const [topic, value] of Object.entries<unknown>(triggers)) {
    if (topic === 'generated_at' || topic === 'purpose' || topic.startsWith('_')) continue;
    add({
      source: 'trigger_filters_catalog',
      path: topic,
      topic: 'trigger',
      title: `Trigger filters: ${topic.replace(/_/g, ' ')}`,
      text: typeof value === 'string' ? value : describe(value),
      lookup: `get_trigger_filter_info(topic: "${topic}")`,
    });
  }

  // ── native vs http-only capabilities ─────────────────────────────────────────────────────────
  const capabilities = knowledge.nodeCapabilities as Record<string, any>;
  add({
    source: 'node_capabilities',
    path: 'code_only_modules',
    topic: 'capability',
    title: 'Modules with no native node (must use an HTTP Request node): quotes / estimates',
    text: `${capabilities.code_only_modules.modules.join(', ')}\n${capabilities.code_only_modules.reason}\n${capabilities.code_only_modules._note}`,
    lookup: 'get_native_capabilities()',
  });
  add({
    source: 'node_capabilities',
    path: 'native_modules',
    topic: 'capability',
    title: 'Modules and operations with a native Zuper node',
    text: Object.entries(capabilities.native_modules)
      .filter(([k]) => !k.startsWith('_'))
      .map(([module, ops]) => `${module}: ${plain(ops)}`)
      .join('\n'),
    lookup: 'get_native_capabilities()',
  });

  return chunks;
}
