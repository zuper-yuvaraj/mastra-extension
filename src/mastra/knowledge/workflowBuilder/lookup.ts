// Exact-lookup layer over the validated workflow-builder knowledge. Deterministic and free: no
// embeddings, no LLM. Facts like field names, enum values and handles must never come from a
// similarity search, which can return a near-miss.

import { loadWorkflowBuilderKnowledge, type CatalogNode } from './loader';

/** Catalog action_keys that don't match the key used in node_field_schemas / expressions_reference. */
const FIELD_SCHEMA_KEY: Record<string, string> = {
  http_request_v2: 'http_request',
  internal_notification: 'notification',
  zuper_customer_notifications: 'notification',
  external_webhook: 'trigger',
  schedule: 'schedule',
};
const OUTPUT_SHAPE_KEY: Record<string, string> = {
  zuper_create: 'zuper_create_update',
  zuper_update: 'zuper_create_update',
};
/** The catalog's first entry is a placeholder whose action_key is a sentence about Zuper-event keys. */
const ZUPER_EVENT_KEY = 'zuper_event_trigger';

const MAX_RESULT_CHARS = 14000;

export function cap<T>(value: T): T | { truncated: true; preview: string } {
  const text = JSON.stringify(value);
  if (text.length <= MAX_RESULT_CHARS) return value;
  return { truncated: true, preview: `${text.slice(0, MAX_RESULT_CHARS)}…[${text.length} chars total]` };
}

function catalogKey(node: CatalogNode): string {
  return node.action_key.includes(' ') || node.action_key.includes('(') ? ZUPER_EVENT_KEY : node.action_key;
}

function findCatalogNode(actionKey: string): CatalogNode | undefined {
  const wanted = actionKey.trim().toLowerCase();
  return loadWorkflowBuilderKnowledge().nodeCatalog.nodes.find((n) => catalogKey(n).toLowerCase() === wanted);
}

function freshness() {
  const { versions } = loadWorkflowBuilderKnowledge();
  return { knowledge_versions: versions };
}

export function listNodes() {
  const { nodeCatalog } = loadWorkflowBuilderKnowledge();
  return {
    nodes: nodeCatalog.nodes.map((n) => ({
      action_key: catalogKey(n),
      name: n.action_name,
      category: n.category,
      type: n.type,
      when_to_use: n.when_to_use,
    })),
    ...freshness(),
  };
}

export function getNodeInfo(actionKey: string) {
  const knowledge = loadWorkflowBuilderKnowledge();
  const node = findCatalogNode(actionKey);
  if (!node) {
    return { found: false, message: `No node with action_key "${actionKey}". Call list_nodes for valid keys.` };
  }
  const key = catalogKey(node);
  const schemaKey = FIELD_SCHEMA_KEY[key] ?? key;
  const schema = knowledge.nodeFieldSchemas.nodes[schemaKey] as Record<string, any> | undefined;
  const shapes = knowledge.expressions.node_output_shapes as Record<string, unknown>;
  return {
    found: true,
    action_key: key,
    name: node.action_name,
    category: node.category,
    type: node.type,
    description: node.description,
    when_to_use: node.when_to_use,
    handles: node.handles,
    connection_rules: node.connection_rules,
    constraints: node.constraints,
    what: schema?.what,
    mode_key: schema?.mode_key,
    output_shape: shapes[OUTPUT_SHAPE_KEY[key] ?? key] ?? null,
    note: node.note,
    ...freshness(),
  };
}

export function getNodeFields(actionKey: string, options: { mode?: string; field?: string } = {}) {
  const { mode, field } = options;
  const knowledge = loadWorkflowBuilderKnowledge();
  const node = findCatalogNode(actionKey);
  const key = node ? catalogKey(node) : actionKey.trim();
  const schemaKey = FIELD_SCHEMA_KEY[key] ?? key;
  const schema = knowledge.nodeFieldSchemas.nodes[schemaKey] as Record<string, any> | undefined;
  if (!schema) return { found: false, message: `No field schema for "${actionKey}". Call list_nodes for valid keys.` };

  // Bags keyed by mode/module name. zuper_update/zuper_create key `modules` by Zuper module (JOB, ...),
  // other nodes key `modes` by their mode value (FIXED, ...); `mode_options` explains each option.
  const bags: Record<string, Record<string, any> | undefined> = {
    modules: schema.modules,
    modes: schema.modes,
    mode_options: schema.mode_options,
  };
  const availableModes = [
    ...new Set(
      Object.values(bags).flatMap((bag) => Object.keys(bag ?? {}).filter((k) => !k.startsWith('_'))),
    ),
  ];
  const fields = (schema.fields ?? schema.form_fields) as Record<string, any> | undefined;

  if (field) {
    const wanted = field.trim().toLowerCase();
    const name = Object.keys(fields ?? {}).find((k) => k.toLowerCase() === wanted);
    return name
      ? { found: true, action_key: key, field: name, schema: fields![name], ...freshness() }
      : { found: false, message: `No field "${field}" on ${key}. Fields: ${Object.keys(fields ?? {}).join(', ')}.` };
  }

  const base = {
    found: true,
    action_key: key,
    what: schema.what,
    mode_key: schema.mode_key,
    available_modes: availableModes,
    field_names: Object.keys(fields ?? {}),
    notes: schema.notes,
  };

  if (mode) {
    const wanted = mode.trim().toLowerCase();
    const matches: Record<string, unknown> = {};
    for (const [bagName, bag] of Object.entries(bags)) {
      const name = Object.keys(bag ?? {}).find((k) => k.toLowerCase() === wanted);
      if (name) matches[bagName] = bag![name];
    }
    if (Object.keys(matches).length === 0) {
      return { ...base, message: `mode "${mode}" not found; choose from available_modes.` };
    }
    return cap({ ...base, mode, matches, ...freshness() });
  }

  // No mode: the whole schema can be tens of KB (zuper_update), so return the map plus any small parts.
  const whole = { ...base, mode_options: bags.mode_options, fields, ...freshness() };
  if (JSON.stringify(whole).length <= MAX_RESULT_CHARS) return whole;
  return {
    ...base,
    mode_options: bags.mode_options,
    note: 'Full schema is large. Call again with `mode` (one of available_modes) or `field` (one of field_names).',
    ...freshness(),
  };
}

export function getNodeOutputShape(actionKey: string) {
  const knowledge = loadWorkflowBuilderKnowledge();
  const node = findCatalogNode(actionKey);
  const key = node ? catalogKey(node) : actionKey.trim();
  const shapes = knowledge.expressions.node_output_shapes as Record<string, unknown>;
  const trigger = (knowledge.expressions as Record<string, any>).trigger_data_shapes as Record<string, unknown> | undefined;
  const shape = shapes[OUTPUT_SHAPE_KEY[key] ?? key] ?? trigger?.[key === ZUPER_EVENT_KEY ? 'zuper_event' : key];
  return shape
    ? {
        found: true,
        action_key: key,
        shape,
        wrapper_rule: knowledge.expressions.core_model.wrapper,
        golden_rule: knowledge.expressions.core_model.golden_rule,
        ...freshness(),
      }
    : {
        found: false,
        message: `No documented output shape for "${actionKey}". Documented: ${Object.keys(shapes).join(', ')}.`,
      };
}

export function getExpressionRules() {
  const { expressions } = loadWorkflowBuilderKnowledge();
  return cap({ ...expressions, ...freshness() });
}

export function getCodeRuntime(topic?: string) {
  const { codeRuntime } = loadWorkflowBuilderKnowledge();
  const recipe = codeRuntime.zuper_api_recipe as Record<string, unknown>;
  if (topic) {
    const name = Object.keys(recipe).find((k) => k.toLowerCase() === topic.trim().toLowerCase());
    return name
      ? { topic: name, value: recipe[name], ...freshness() }
      : { found: false, message: `Unknown recipe topic "${topic}". Topics: ${Object.keys(recipe).join(', ')}.` };
  }
  const { zuper_api_recipe: _recipe, ...core } = codeRuntime as Record<string, unknown>;
  return cap({
    ...core,
    recipe_topics: Object.fromEntries(
      Object.entries(recipe).map(([k, v]) => [k, (typeof v === 'string' ? v : JSON.stringify(v)).slice(0, 140)]),
    ),
    note: 'Call again with `topic` (a recipe_topics key) for the full recipe text.',
    ...freshness(),
  });
}

export function getTriggerFilterInfo(topic?: string) {
  const { triggerFilters } = loadWorkflowBuilderKnowledge();
  const record = triggerFilters as Record<string, unknown>;
  if (topic) {
    const key = Object.keys(record).find((k) => k.toLowerCase() === topic.trim().toLowerCase());
    return key
      ? { topic: key, value: record[key], ...freshness() }
      : { found: false, message: `Unknown topic "${topic}". Topics: ${Object.keys(record).join(', ')}.` };
  }
  return cap({ ...triggerFilters, ...freshness() });
}

export function getNativeCapabilities(module?: string) {
  const { nodeCapabilities } = loadWorkflowBuilderKnowledge();
  const native = nodeCapabilities.native_modules as Record<string, unknown>;
  const codeOnly = nodeCapabilities.code_only_modules as Record<string, any>;
  if (!module) return { native_modules: native, http_only_modules: codeOnly, ...freshness() };

  const wanted = module.trim().toUpperCase();
  const nativeKey = Object.keys(native).find((k) => k.toUpperCase() === wanted && !k.startsWith('_'));
  const httpOnly = (codeOnly.modules as string[] | undefined)?.some((m) => m.toUpperCase() === wanted) ?? false;
  return {
    module: wanted,
    has_native_node: nativeKey ? true : false,
    native_operations: nativeKey ? native[nativeKey] : null,
    http_only: httpOnly,
    explanation: httpOnly ? codeOnly.reason : undefined,
    ...freshness(),
  };
}
