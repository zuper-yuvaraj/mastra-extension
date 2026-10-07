// Documentation worth reading for THIS failure, chosen deterministically from the facts already in the
// seed, so the right lookup does not depend on the model remembering to make it. The seed lists them as
// suggestions; the verifier later checks whether a strongly applicable one was ignored.

import type { ApiEndpointRecord } from '../knowledge/api/distill';
import { loadRecords } from '../knowledge/api/records';
import { allowedHostSuffixes } from './hosts';
import type { NodeRuntime } from './nodeData';

export interface KbHint {
  tool: string;
  args: Record<string, string>;
  why: string;
  /** Applies so specifically that skipping it is a gap in the analysis (a documented endpoint that failed). */
  strong: boolean;
}

function templateToRegex(template: string): RegExp {
  const escaped = template
    .split('/')
    .map((part) => (/^\{.+\}$/.test(part) ? '[^/]+' : part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
    .join('/');
  return new RegExp(`^${escaped}/?$`, 'i');
}

/** The one documented endpoint a request URL (and method, when known) corresponds to, if exactly one does. */
export function matchApiEndpoint(url: string, method: string | undefined, records: ApiEndpointRecord[]): ApiEndpointRecord | null {
  let pathname: string;
  try {
    pathname = new URL(url).pathname;
  } catch {
    return null;
  }
  const candidates = [pathname, pathname.replace(/^\/api(?=\/)/, '')];
  const wanted = method?.trim().toUpperCase();
  const matches = records.filter(
    (r) => (!wanted || r.method === wanted) && candidates.some((candidate) => templateToRegex(r.path).test(candidate)),
  );
  return matches.length === 1 ? matches[0]! : null;
}

/** resolved_fields values are previews of JSON values, so a string arrives wrapped in quotes. */
function unquote(value: string | undefined): string | undefined {
  if (value === undefined) return undefined;
  try {
    const parsed: unknown = JSON.parse(value);
    return typeof parsed === 'string' ? parsed : value;
  } catch {
    return value;
  }
}

function isZuperUrl(url: string): boolean {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return allowedHostSuffixes().some((suffix) => host === suffix || host.endsWith(`.${suffix}`));
  } catch {
    return false;
  }
}

export function kbHints(input: {
  /** The failed node's action_key (e.g. "http_request_v2", "code"). */
  nodeKey: string | null;
  runtime: NodeRuntime | { unavailable: string } | null;
  records?: ApiEndpointRecord[];
}): KbHint[] {
  const hints: KbHint[] = [];
  const { nodeKey, runtime } = input;

  if (nodeKey) {
    hints.push({ tool: 'get_node_info', args: { node: nodeKey }, why: `what the failed node type (${nodeKey}) is meant to do and how its output looks`, strong: false });
    if (nodeKey === 'code' || nodeKey.startsWith('code')) {
      hints.push({ tool: 'get_code_runtime', args: {}, why: 'Code node limits, globals and the return rule', strong: false });
    }
  }

  if (runtime && !('unavailable' in runtime) && runtime.http_status !== null && runtime.http_status >= 400) {
    const fields = runtime.resolved_fields ?? {};
    const url = unquote(fields.url ?? fields.endpoint ?? fields.request_url);
    const method = unquote(fields.method ?? fields.http_method);
    const endpoint = url ? matchApiEndpoint(url, method, input.records ?? loadRecords()) : null;
    if (url && !endpoint && isZuperUrl(url)) {
      // A Zuper call that matches no documented endpoint is itself a lead: the path may not exist.
      hints.push({
        tool: 'search_knowledge',
        args: { query: `${method ?? ''} ${new URL(url).pathname}`.trim(), kind: 'api' },
        why: `the request got HTTP ${runtime.http_status} and its URL matches no documented Zuper endpoint; find the documented endpoint for this resource and compare the path and method`,
        strong: true,
      });
    }
    if (endpoint) {
      hints.push({
        tool: 'get_api_endpoint',
        args: { id: endpoint.id },
        why: `the request got HTTP ${runtime.http_status}; compare what it sent with the documented ${endpoint.method} ${endpoint.path}`,
        strong: true,
      });
    }
  }
  return hints;
}
