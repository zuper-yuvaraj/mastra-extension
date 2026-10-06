#!/usr/bin/env node
/**
 * Downloads every .md page listed in https://docs.zuper.co/llms.txt
 * into a local folder (mirroring the docs folder structure) so it can be
 * ingested as a knowledge base (e.g. in Mastra).
 *
 * Requirements: Node 18+ (uses built-in fetch). No dependencies.
 *
 * Usage:
 *   node download-zuper-docs.cjs
 *
 * Optional env vars:
 *   LLMS_URL     default https://docs.zuper.co/llms.txt
 *   OUT_DIR      default ./knowledge-base/zuper-docs
 *   CONCURRENCY  default 5
 */
const { mkdir, writeFile } = require("node:fs/promises");
const path = require("node:path");

const LLMS_URL = process.env.LLMS_URL ?? "https://docs.zuper.co/llms.txt";
const OUT_DIR = process.env.OUT_DIR ?? "./zuper-docs";
const CONCURRENCY = Number(process.env.CONCURRENCY ?? 5);
const MAX_RETRIES = 3;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchText(url, { retries = MAX_RETRIES } = {}) {
  let lastErr;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { Accept: "text/markdown, text/plain;q=0.9, */*;q=0.5" },
      });
      if (res.status === 429 || res.status >= 500) {
        throw new Error(`HTTP ${res.status}`);
      }
      if (!res.ok) {
        // 4xx (other than 429) won't get better with retries
        const err = new Error(`HTTP ${res.status}`);
        err.noRetry = true;
        throw err;
      }
      const text = await res.text();
      const contentType = res.headers.get("content-type") ?? "";
      if (
        contentType.includes("text/html") &&
        /^\s*<!doctype html|^\s*<html/i.test(text)
      ) {
        const err = new Error("Got HTML instead of markdown");
        err.noRetry = true;
        throw err;
      }
      return text;
    } catch (err) {
      lastErr = err;
      if (err.noRetry || attempt === retries) break;
      await sleep(500 * 2 ** (attempt - 1));
    }
  }
  throw lastErr;
}

/** Parse markdown links from llms.txt and keep only .md pages. */
function parseLinks(llmsText, baseUrl) {
  const linkRe = /\[([^\]]*)\]\(([^)]+)\)/g; // href may contain spaces
  const seen = new Map();
  let match;
  while ((match = linkRe.exec(llmsText)) !== null) {
    const title = match[1].trim();
    const rawHref = match[2].trim();
    let url;
    try {
      url = new URL(rawHref, baseUrl); // encodes spaces -> %20, resolves relative
    } catch {
      continue;
    }
    if (!url.pathname.toLowerCase().endsWith(".md")) continue; // skips openapi.json, external links
    url.hash = "";
    const key = url.toString();
    if (!seen.has(key)) seen.set(key, { url: key, title });
  }
  return [...seen.values()];
}

/** Map a URL to a safe relative file path. */
function toFilePath(urlStr) {
  const { pathname } = new URL(urlStr);
  const decoded = decodeURIComponent(pathname).replace(/^\/+/, "");
  const parts = decoded
    .split("/")
    .filter((p) => p && p !== "." && p !== "..")
    .map((p) =>
      p
        .replace(/\s+/g, "-")
        .replace(/[<>:"\\|?*\u0000-\u001f]/g, "")
    );
  return parts.join(path.sep);
}

function buildFileContent({ title, url }, body) {
  const h1 = body.match(/^#\s+(.+)$/m)?.[1]?.trim();
  const finalTitle = (h1 ?? title).replace(/"/g, '\\"');
  const frontmatter = [
    "---",
    `title: "${finalTitle}"`,
    `source: ${url}`,
    `fetched_at: ${new Date().toISOString()}`,
    "---",
    "",
  ].join("\n");
  // Don't double up if the page already has frontmatter
  return body.trimStart().startsWith("---") ? body : frontmatter + body;
}

async function runPool(items, worker, concurrency) {
  let index = 0;
  const runners = Array.from({ length: concurrency }, async () => {
    while (true) {
      const i = index++;
      if (i >= items.length) return;
      await worker(items[i], i);
    }
  });
  await Promise.all(runners);
}

async function main() {
  console.log(`Fetching index: ${LLMS_URL}`);
  const llmsText = await fetchText(LLMS_URL);
  const links = parseLinks(llmsText, LLMS_URL);
  console.log(`Found ${links.length} unique .md pages\n`);

  await mkdir(OUT_DIR, { recursive: true });
  // Keep a copy of the index itself
  await writeFile(path.join(OUT_DIR, "_llms.txt"), llmsText, "utf8");

  const manifest = [];
  const failures = [];
  const usedPaths = new Set();
  let done = 0;

  await runPool(
    links,
    async (link) => {
      let rel = toFilePath(link.url);
      // Guard against collisions (e.g. two URLs differing only by case/spaces)
      if (usedPaths.has(rel.toLowerCase())) {
        rel = rel.replace(/\.md$/i, `-${usedPaths.size}.md`);
      }
      usedPaths.add(rel.toLowerCase());

      try {
        const body = await fetchText(link.url);
        const outPath = path.join(OUT_DIR, rel);
        await mkdir(path.dirname(outPath), { recursive: true });
        await writeFile(outPath, buildFileContent(link, body), "utf8");
        manifest.push({ title: link.title, url: link.url, file: rel });
        console.log(`[${++done}/${links.length}] ✓ ${rel}`);
      } catch (err) {
        failures.push({ title: link.title, url: link.url, error: err.message });
        console.warn(`[${++done}/${links.length}] ✗ ${link.url} (${err.message})`);
      }
    },
    CONCURRENCY
  );

  manifest.sort((a, b) => a.file.localeCompare(b.file));
  await writeFile(
    path.join(OUT_DIR, "_manifest.json"),
    JSON.stringify(
      { source: LLMS_URL, generatedAt: new Date().toISOString(), pages: manifest, failures },
      null,
      2
    ),
    "utf8"
  );

  console.log(`\nDone. ${manifest.length} saved, ${failures.length} failed.`);
  console.log(`Output: ${path.resolve(OUT_DIR)}`);
  if (failures.length) {
    console.log("\nFailed URLs:");
    for (const f of failures) console.log(` - ${f.url} (${f.error})`);
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
