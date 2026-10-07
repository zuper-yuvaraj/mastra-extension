// The Zuper base URLs (`apiUrl`, `workflowBuilderUrl`) arrive in the request body and are then fetched
// server-side with the caller's bearer token. Without a check, a caller could point this server at an
// internal address (SSRF) or send the token to a host they control. Only https hosts under the
// allowed suffixes are accepted.

const DEFAULT_SUFFIXES = ['zuperpro.com', 'zuper.co'];

export function allowedHostSuffixes(): string[] {
  const configured = process.env.ZUPER_ALLOWED_HOST_SUFFIXES;
  const list = configured ? configured.split(',') : DEFAULT_SUFFIXES;
  return list.map((s) => s.trim().toLowerCase()).filter(Boolean);
}

export class HostNotAllowedError extends Error {
  constructor(reason: string) {
    super(`HOST_NOT_ALLOWED: ${reason}`);
    this.name = 'HostNotAllowedError';
  }
}

const IPV4 = /^\d{1,3}(?:\.\d{1,3}){3}$/;

/** Returns the normalized origin (no path, no trailing slash) or throws HostNotAllowedError. */
export function assertAllowedBaseUrl(input: string, suffixes: string[] = allowedHostSuffixes()): string {
  let url: URL;
  try {
    url = new URL(input);
  } catch {
    throw new HostNotAllowedError('not a valid URL');
  }
  if (url.protocol !== 'https:') throw new HostNotAllowedError('only https is allowed');
  if (url.username || url.password) throw new HostNotAllowedError('credentials in the URL are not allowed');
  if (url.port) throw new HostNotAllowedError('custom ports are not allowed');

  const host = url.hostname.toLowerCase().replace(/\.$/, '');
  if (IPV4.test(host) || host.includes(':') || host === 'localhost') {
    throw new HostNotAllowedError('IP addresses and localhost are not allowed');
  }
  const ok = suffixes.some((suffix) => host === suffix || host.endsWith(`.${suffix}`));
  if (!ok) throw new HostNotAllowedError(`host "${host}" is not an allowed Zuper domain`);
  return url.origin;
}
