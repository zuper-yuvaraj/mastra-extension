// Business docs (knowledge-base/zuper-docs/**/*.md): Mintlify/MDX help-center pages -> small,
// self-contained chunks for semantic search. Pages are prose, so search (not exact lookup) is the right
// tool; each chunk keeps its heading path and page URL so an answer can cite where it came from.

import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { hashText, type KbChunk } from '../ingest';

export const BUSINESS_KIND = 'business';
export const BUSINESS_DOCS_DIR =
  process.env.KB_BUSINESS_DOCS_DIR ?? path.resolve(process.cwd(), 'knowledge-base/zuper-docs');

/** ~550 tokens. Large enough to hold a full procedure, small enough to keep one topic per chunk. */
const MAX_CHUNK_CHARS = 2200;
/** Sections shorter than this are merged into their neighbour instead of becoming near-empty chunks. */
const MIN_CHUNK_CHARS = 350;

export interface PageParts {
  title: string;
  sourceUrl: string;
  fetchedAt: string;
  body: string;
}

/** `--- key: "value" ---` front-matter (flat keys only, which is all these pages use). */
export function parseFrontMatter(raw: string): { meta: Record<string, string>; body: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw);
  if (!match) return { meta: {}, body: raw };
  const meta: Record<string, string> = {};
  for (const line of match[1]!.split(/\r?\n/)) {
    const kv = /^([A-Za-z_]+):\s*(.*)$/.exec(line);
    if (kv) meta[kv[1]!] = kv[2]!.trim().replace(/^"(.*)"$/, '$1');
  }
  return { meta, body: raw.slice(match[0].length) };
}

const KNOWN_TAGS = [
  'Frame', 'Accordion', 'AccordionGroup', 'Note', 'Tip', 'Warning', 'Info', 'Check', 'Icon', 'Step', 'Steps',
  'Tab', 'Tabs', 'Card', 'CardGroup', 'Update', 'Anchor', 'img', 'iframe', 'br', 'table', 'thead', 'tbody', 'tr', 'td',
  'th', 'p', 'div', 'span', 'a', 'b', 'i', 'strong', 'em', 'ul', 'ol', 'li', 'details', 'summary',
].join('|');

/** Strips the MDX/HTML layer (images, frames, accordions, callouts) and keeps the readable text. */
export function cleanMarkdown(input: string): string {
  let text = input.replace(/\r\n/g, '\n');

  // The "Documentation Index" banner every page starts with.
  text = text.replace(/^(?:>[^\n]*\n)+\n?/, (block) => (block.includes('Documentation Index') ? '' : block));

  // Images and embeds carry long CDN URLs and no searchable text.
  text = text.replace(/<Frame[\s\S]*?<\/Frame>/g, '');
  text = text.replace(/<iframe[\s\S]*?(?:<\/iframe>|\/>)/g, '');
  text = text.replace(/<img\b[^>]*>/g, '');
  text = text.replace(/!\[[^\]]*\]\([^)]*\)/g, '');
  text = text.replace(/<Icon\b[^>]*\/>/g, '');

  // Structural components -> plain text that keeps their meaning.
  text = text.replace(/<(Accordion|Tab|Card|Step|Update)\b[^>]*?\btitle="([^"]*)"[^>]*>/g, '\n**$2**\n');
  text = text.replace(/<(Note|Tip|Warning|Info|Check)\b[^>]*>/g, (_m, tag: string) => `\n${tag}: `);
  text = text.replace(/<br\s*\/?>/gi, '\n');

  // Any remaining known MDX/HTML tag: drop the tag, keep the text inside it. An allowlist, not a
  // generic pattern, so placeholders in prose like `<variable_name>` are never eaten.
  text = text.replace(new RegExp(`</?(?:${KNOWN_TAGS})\\b[^>]*>`, 'g'), '');

  // Numeric/named space entities left behind by the editor export.
  text = text.replace(/&#x20;|&nbsp;/g, ' ');

  // Footer Mintlify appends to every page.
  text = text.replace(/^This documentation is built and hosted on \[Mintlify\][^\n]*$/gm, '');

  // Markdown line-continuation backslashes and runaway blank lines / trailing spaces.
  text = text.replace(/\\\n/g, '\n').replace(/\\$/gm, '');
  text = text.replace(/[ \t]+$/gm, '').replace(/\n{3,}/g, '\n\n');
  return text.trim();
}

interface Section {
  headings: string[];
  lines: string[];
}

/** Splits at h1-h4 headings, tracking the heading path. Fenced code blocks are never split. */
function splitSections(markdown: string): Section[] {
  const sections: Section[] = [{ headings: [], lines: [] }];
  const stack: Array<{ level: number; text: string }> = [];
  let inFence = false;

  for (const line of markdown.split('\n')) {
    if (/^\s*```/.test(line)) inFence = !inFence;
    const heading = !inFence ? /^(#{1,4})\s+(.+?)\s*#*$/.exec(line) : null;
    if (heading) {
      const level = heading[1]!.length;
      while (stack.length > 0 && stack[stack.length - 1]!.level >= level) stack.pop();
      stack.push({ level, text: heading[2]!.replace(/\*\*/g, '').trim() });
      sections.push({ headings: stack.map((h) => h.text), lines: [] });
    } else {
      sections[sections.length - 1]!.lines.push(line);
    }
  }
  return sections.filter((s) => s.lines.join('\n').trim().length > 0);
}

/** Splits an over-long body on block boundaries (blank lines); an over-long table splits by rows
 * and repeats its header so every piece is still a readable table. */
function splitBody(body: string): string[] {
  if (body.length <= MAX_CHUNK_CHARS) return [body];
  const pieces: string[] = [];
  let current = '';
  const flush = () => {
    if (current.trim()) pieces.push(current.trim());
    current = '';
  };

  for (const block of body.split(/\n{2,}/)) {
    const parts = block.length > MAX_CHUNK_CHARS ? splitLongBlock(block) : [block];
    for (const part of parts) {
      if (current && current.length + part.length + 2 > MAX_CHUNK_CHARS) flush();
      current += (current ? '\n\n' : '') + part;
    }
  }
  flush();

  // A tiny trailing piece (one orphaned sentence) rejoins the previous piece rather than standing alone.
  const last = pieces[pieces.length - 1];
  if (pieces.length > 1 && last !== undefined && last.length < MIN_CHUNK_CHARS) {
    const merged = `${pieces[pieces.length - 2]}

${last}`;
    if (merged.length <= MAX_CHUNK_CHARS * 1.3) pieces.splice(pieces.length - 2, 2, merged);
  }
  return pieces;
}

function splitLongBlock(block: string): string[] {
  const lines = block.split('\n');
  const isTable = lines.length > 2 && /^\s*\|/.test(lines[0]!) && /^\s*\|[\s:|-]+\|\s*$/.test(lines[1]!);
  const header = isTable ? lines.slice(0, 2).join('\n') : '';
  const rest = isTable ? lines.slice(2) : lines;

  const out: string[] = [];
  let current = header;
  for (const line of rest) {
    if (current.length + line.length + 1 > MAX_CHUNK_CHARS && current.trim() && current !== header) {
      out.push(current);
      current = header;
    }
    // A single line longer than the limit is hard-cut rather than dropped.
    if (line.length > MAX_CHUNK_CHARS) {
      for (let i = 0; i < line.length; i += MAX_CHUNK_CHARS) out.push(line.slice(i, i + MAX_CHUNK_CHARS));
      continue;
    }
    current += (current ? '\n' : '') + line;
  }
  if (current.trim() && current !== header) out.push(current);
  return out;
}

/** Characters of real prose left after removing links, list markers and table punctuation. */
export function proseLength(text: string): number {
  return text.replace(/\[([^\]]*)\]\([^)]*\)/g, '').replace(/[-*>#|\s]/g, '').length;
}

export interface BusinessChunkDraft {
  headingPath: string[];
  text: string;
}

/** Page markdown -> chunk drafts: one per heading section, tiny sections merged forward, big ones split. */
export function chunkPage(markdown: string): BusinessChunkDraft[] {
  const drafts: BusinessChunkDraft[] = [];
  let pending: { headings: string[]; text: string } | null = null;

  const emit = (headings: string[], body: string) => {
    for (const piece of splitBody(body)) drafts.push({ headingPath: headings, text: piece });
  };

  for (const section of splitSections(markdown)) {
    const body = section.lines.join('\n').trim();
    if (!pending) {
      pending = { headings: section.headings, text: body };
      continue;
    }
    // Merge a too-small pending section into this one while it still fits.
    if (pending.text.length < MIN_CHUNK_CHARS && pending.text.length + body.length + 2 <= MAX_CHUNK_CHARS) {
      const label = section.headings[section.headings.length - 1];
      pending = {
        headings: pending.headings.length >= section.headings.length ? pending.headings : section.headings,
        text: `${pending.text}\n\n${label ? `${label}\n` : ''}${body}`,
      };
    } else {
      emit(pending.headings, pending.text);
      pending = { headings: section.headings, text: body };
    }
  }
  if (pending) emit(pending.headings, pending.text);
  return drafts;
}

function slug(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60);
}

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.toLowerCase().endsWith('.md')) out.push(full);
  }
  return out.sort();
}

export function buildBusinessChunks(dir: string = BUSINESS_DOCS_DIR): KbChunk[] {
  const chunks: KbChunk[] = [];

  for (const file of walk(dir)) {
    const relative = path.relative(dir, file).split(path.sep).join('/');
    const { meta, body } = parseFrontMatter(readFileSync(file, 'utf8'));
    const cleaned = cleanMarkdown(body);
    if (!cleaned) continue;

    const parts = relative.split('/');
    const area = parts.length > 1 ? parts[0]! : 'General';
    const title = meta.title || path.basename(file, '.md');
    const pageId = relative.replace(/\.md$/i, '');

    const seen = new Map<string, number>();
    for (const draft of chunkPage(cleaned)) {
      // "Related topics" link lists and one-line stubs carry nothing worth retrieving.
      if (proseLength(draft.text) < 60) continue;
      // Drop the page title from the path when it is just the page's own H1.
      const trail = draft.headingPath.filter((h, i) => !(i === 0 && h.trim().toLowerCase() === title.trim().toLowerCase()));
      const context = [title, ...trail].join(' > ');
      const text = `${context}\n${draft.text}`;

      // Stable across unrelated edits: keyed by the heading path, with a counter only for repeats.
      const base = slug(trail.join('-')) || 'intro';
      const n = seen.get(base) ?? 0;
      seen.set(base, n + 1);

      chunks.push({
        id: `biz:${pageId}#${base}${n > 0 ? `~${n}` : ''}`,
        text,
        metadata: {
          kind: BUSINESS_KIND,
          topic: 'doc',
          title: context,
          area,
          source_url: meta.source,
          source_file: relative,
          generated_at: meta.fetched_at ?? '',
          hash: hashText(text),
        },
      });
    }
  }
  return chunks;
}
