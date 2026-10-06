// Loads and validates the workflow-builder knowledge files (knowledge-base/workflow-builder/*.json).
// These are exact facts extracted from the worker/frontend code, so they are validated on load (a
// changed export fails loudly here, not silently inside an answer) and served by exact lookup.

import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { z } from 'zod';

export const WORKFLOW_BUILDER_DIR =
  process.env.KB_WORKFLOW_BUILDER_DIR ?? path.resolve(process.cwd(), 'knowledge-base/workflow-builder');

const anyRecord = z.record(z.string(), z.any());

const catalogNode = z.looseObject({
  action_key: z.string(),
  action_name: z.string(),
  category: z.string(),
  type: z.string(),
  description: z.string(),
  when_to_use: z.string(),
});

const nodeCatalogSchema = z.looseObject({
  generated_at: z.string(),
  nodes: z.array(catalogNode).min(1),
});

const nodeFieldSchemasSchema = z.looseObject({
  generated_at: z.string(),
  nodes: z.record(z.string(), z.looseObject({ what: z.string().optional() })),
});

const expressionsSchema = z.looseObject({
  generated_at: z.string(),
  engine: z.string(),
  core_model: anyRecord,
  accessors: z.array(z.any()),
  node_output_shapes: anyRecord,
  loop: z.array(z.any()),
  common_mistakes: z.array(z.any()),
  worked_examples: z.array(z.any()),
});

const codeRuntimeSchema = z.looseObject({
  generated_at: z.string(),
  allowed_modules: z.array(z.string()).min(1),
  require_rule: z.string(),
  forbidden: z.array(z.string()),
  versions: anyRecord,
  zuper_api_recipe: anyRecord,
});

const triggerFiltersSchema = z.looseObject({
  generated_at: z.string(),
  operator_catalogue: z.array(z.string()),
  trigger_modules: z.array(z.string()),
  runtime_semantics: anyRecord,
  important_distinction_vs_if_else: z.string(),
});

const nodeCapabilitiesSchema = z.looseObject({
  generated_at: z.string(),
  code_only_modules: anyRecord,
  native_modules: anyRecord,
});

const interactiveCreateSchema = z.looseObject({ generated_at: z.string() });

// Only the files the RCA path needs are required; interactive_create_capabilities is for the
// future workflow builder, so it is validated if present but never blocks loading.
const REQUIRED_FILES = {
  node_catalog: nodeCatalogSchema,
  node_field_schemas: nodeFieldSchemasSchema,
  expressions_reference: expressionsSchema,
  code_node_runtime: codeRuntimeSchema,
  trigger_filters_catalog: triggerFiltersSchema,
  node_capabilities: nodeCapabilitiesSchema,
} as const;

export type CatalogNode = z.infer<typeof catalogNode>;

export interface WorkflowBuilderKnowledge {
  nodeCatalog: z.infer<typeof nodeCatalogSchema>;
  nodeFieldSchemas: z.infer<typeof nodeFieldSchemasSchema>;
  expressions: z.infer<typeof expressionsSchema>;
  codeRuntime: z.infer<typeof codeRuntimeSchema>;
  triggerFilters: z.infer<typeof triggerFiltersSchema>;
  nodeCapabilities: z.infer<typeof nodeCapabilitiesSchema>;
  interactiveCreate: z.infer<typeof interactiveCreateSchema> | null;
  /** generated_at per source file — surfaced in tool results so answers can state how fresh this is. */
  versions: Record<string, string>;
}

/** `code_node_runtime (1).json` -> `code_node_runtime` (browser-download suffixes are not meaningful). */
function logicalName(fileName: string): string {
  return fileName.replace(/\.json$/i, '').replace(/\s*\(\d+\)\s*$/, '').trim();
}

function readJson(dir: string, fileName: string): unknown {
  return JSON.parse(readFileSync(path.join(dir, fileName), 'utf8'));
}

function parseOrThrow<T extends z.ZodType>(schema: T, data: unknown, name: string): z.infer<T> {
  const result = schema.safeParse(data);
  if (result.success) return result.data;
  const issues = result.error.issues.map((i) => `${i.path.join('.') || '(root)'}: ${i.message}`).join('; ');
  throw new Error(`workflow-builder knowledge file "${name}" failed validation — ${issues}`);
}

let cached: WorkflowBuilderKnowledge | null = null;

export function loadWorkflowBuilderKnowledge(dir: string = WORKFLOW_BUILDER_DIR): WorkflowBuilderKnowledge {
  if (cached && dir === WORKFLOW_BUILDER_DIR) return cached;

  const files = new Map<string, string>();
  for (const fileName of readdirSync(dir)) {
    if (fileName.toLowerCase().endsWith('.json')) files.set(logicalName(fileName), fileName);
  }

  const parsed: Record<string, any> = {};
  const versions: Record<string, string> = {};
  for (const [name, schema] of Object.entries(REQUIRED_FILES)) {
    const fileName = files.get(name);
    if (!fileName) throw new Error(`workflow-builder knowledge file "${name}.json" not found in ${dir}`);
    parsed[name] = parseOrThrow(schema, readJson(dir, fileName), name);
    versions[name] = parsed[name].generated_at;
  }

  const interactiveFile = files.get('interactive_create_capabilities');
  const interactiveCreate = interactiveFile
    ? parseOrThrow(interactiveCreateSchema, readJson(dir, interactiveFile), 'interactive_create_capabilities')
    : null;
  if (interactiveCreate) versions.interactive_create_capabilities = interactiveCreate.generated_at;

  const knowledge: WorkflowBuilderKnowledge = {
    nodeCatalog: parsed.node_catalog,
    nodeFieldSchemas: parsed.node_field_schemas,
    expressions: parsed.expressions_reference,
    codeRuntime: parsed.code_node_runtime,
    triggerFilters: parsed.trigger_filters_catalog,
    nodeCapabilities: parsed.node_capabilities,
    interactiveCreate,
    versions,
  };
  if (dir === WORKFLOW_BUILDER_DIR) cached = knowledge;
  return knowledge;
}
