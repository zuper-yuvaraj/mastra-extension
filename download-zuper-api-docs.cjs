#!/usr/bin/env node
/**
 * Downloads every .md page listed in https://developers.zuper.co/llms.txt and
 * groups them into folders by section and module:
 *
 *   <OUT_DIR>/<section>/<module>/<page-slug>.md
 *   e.g. api-reference/work-order-management/jobs/create-job.md
 *
 * Level 1/2 (section) comes from the "## ..." headings in llms.txt.
 * Level 3 (module) is inferred by the MODULE_RULES table below
 * (llms.txt itself is flat inside each section). Edit the table to taste.
 *
 * Requirements: Node 18+ (built-in fetch). No dependencies.
 *
 * Usage:
 *   node download-zuper-api-docs.cjs                 # download everything
 *   node download-zuper-api-docs.cjs --dry-run       # only print the grouping, download nothing
 *   node download-zuper-api-docs.cjs --merge         # also write one combined .md per module
 *   node download-zuper-api-docs.cjs --from-file llms.txt --dry-run   # use a local copy of llms.txt
 *
 * Optional env vars: LLMS_URL, OUT_DIR, CONCURRENCY
 */
const { mkdir, writeFile, readFile } = require("node:fs/promises");
const path = require("node:path");

const LLMS_URL = process.env.LLMS_URL ?? "https://developers.zuper.co/llms.txt";
const OUT_DIR = process.env.OUT_DIR ?? "./knowledge-base/zuper-api-docs";
const CONCURRENCY = Number(process.env.CONCURRENCY ?? 5);
const MAX_RETRIES = 3;

const args = process.argv.slice(2);
const DRY_RUN = args.includes("--dry-run");
const MERGE = args.includes("--merge");
const FROM_FILE = args.includes("--from-file")
  ? args[args.indexOf("--from-file") + 1]
  : null;

/**
 * Module classification. First match wins. Order matters (specific before general).
 * Each page is matched on its normalised TITLE first, then on its URL SLUG
 * (titles like "Update Attachment" are ambiguous, slugs often aren't).
 * If neither matches, the page inherits the previous page's module
 * (llms.txt keeps related endpoints next to each other), else "general".
 * Normalised = lowercase, non-alphanumerics collapsed to single spaces.
 */
const MODULE_RULES = [
  // routes first, so "Assign User Team To Route" doesn't land in teams
  ["routes", /\broutes?\b/],
  ["stream-channels", /stream channel/],
  // accounting / payments
  ["payment-requests", /payment requests?/],
  ["payments", /\bpayments?\b/],
  ["credit-notes", /credit/],
  // time & people
  ["timeoff-types", /timeoff request type/],
  ["timeoff-availability", /timeoff availability/],
  ["timeoff-requests", /timeoff/],
  ["timesheet-locations", /\blocation\b/],
  ["timesheets", /timesheet/],
  ["user-skills", /user skills?/],
  ["user-timelogs", /users? timelog/],
  ["teams", /\bteams?\b/],
  ["trade-types", /business units|trade types?/],
  ["webhooks", /webhook/],
  // forms
  ["job-status", /job status|rollback|update status checklist/],
  ["inspection-forms", /inspection form/],
  ["checklists", /checklist/],
  // work order management
  ["recurring-jobs", /recurring|reccurring/],
  ["job-timelogs", /job timelog/],
  ["job-notes", /job notes?/],
  ["job-categories", /job categor/],
  ["job-attachments", /job attachment/],
  ["attachment-folders", /attachments folders|\bfolders?\b/],
  ["comments", /\bcomments?\b/],
  ["gallery", /gallery|bulk (delete|recover) attachments/],
  ["appointments", /appointment/],
  ["service-tasks", /service tasks?/],
  ["expenses", /expense/],
  ["projects", /project|milestone|phase|dependency/],
  ["measurements", /measurement/],
  // "Send To Customer" / "Create Document" are contract endpoints with ambiguous titles
  ["contracts", /contract|^send to customer$|^create document$/],
  ["customers", /customer/],
  ["organizations", /organization/],
  ["properties", /propert/],
  ["assets", /asset/],
  ["workflows", /workflow/],
  ["service-territories", /territor/],
  ["commissions", /commission/],
  // inventory
  ["product-groups", /\bgroups?\b/],
  ["product-categories", /product categor/],
  ["transfer-orders", /transfer order/],
  ["product-transactions", /products? transaction|inward|outward|^create transfer$/],
  ["pricelists", /pricelist/],
  ["vendor-catalogs", /vendor catalog/],
  ["vendors", /vendor/],
  ["subcontractors", /subcontractor/],
  ["purchase-orders", /purchase order/],
  ["work-orders", /work order/],
  ["products", /product/],
  // accounting
  ["quotes-proposals", /quote|proposal|estimate/],
  ["packages", /package/],
  ["proposal-templates", /template/],
  ["invoices", /invoice/],
  // connect
  ["calls", /\bcalls?\b/],
  ["conversations", /conversation|^send a message$/],
  // misc
  ["users", /\busers?\b/],
  ["custom-fields", /custom fields?/],
  ["notes", /^notes$/],
  ["requests", /request/],
  ["jobs", /\bjobs?\b|job card|reschedule|assisted scheduling/],
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

function classify(title, slug, prevModule) {
  for (const text of [norm(title), norm(slug)]) {
    for (const [name, re] of MODULE_RULES) {
      if (re.test(text)) return name;
    }
  }
  return prevModule ?? "general";
}

/** "API Reference: WORK ORDER MANAGEMENT" -> { kind: "api-reference", folder: "api-reference/work-order-management" } */
function parseSection(heading) {
  const [a, ...rest] = heading.split(":");
  const kindSlug = slugify(a);
  const restSlug = slugify(rest.join(":"));
  return {
    name: heading.trim(),
    isApi: kindSlug === "api-reference",
    folder: restSlug ? `${kindSlug}/${restSlug}` : kindSlug,
  };
}

function parseIndex(llmsText, baseUrl) {
  const pages = [];
  const seen = new Set();
  let section = { name: "root", isApi: false, folder: "root" };
  let prevModule = null;

  for (const line of llmsText.split(/\r?\n/)) {
    const heading = line.match(/^##\s+(.+)$/);
    if (heading) {
      section = parseSection(heading[1]);
      prevModule = null; // inheritance never crosses sections
      continue;
    }
    const m = line.match(/^\s*[-*]\s+\[([^\]]*)\]\(([^)]+)\)/);
    if (!m) continue;

    let url;
    try {
      url = new URL(m[2].trim(), baseUrl);
    } catch {
      continue;
    }
    if (!url.pathname.toLowerCase().endsWith(".md")) continue;
    url.hash = "";
    const key = url.toString();
    if (seen.has(key)) continue;
    seen.add(key);

    const title = m[1].trim();
    const slug = decodeURIComponent(url.pathname).split("/").pop().replace(/\.md$/i, "");
    let module = null;
    if (section.isApi) {
      module = classify(title, slug, prevModule);
      prevModule = module;
    }
    const dir = module ? `${section.folder}/${module}` : section.folder;
    pages.push({
      title,
      url: key,
      slug,
      section: section.name,
      module,
      dir,
      file: `${dir}/${slug}.md`,
    });
  }
  return pages;
}

async function fetchText(url, retries = MAX_RETRIES) {
  let lastErr;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { Accept: "text/markdown, text/plain;q=0.9, */*;q=0.5" },
      });
      if (res.status === 429 || res.status >= 500) throw new Error(`HTTP ${res.status}`);
      if (!res.ok) {
        const err = new Error(`HTTP ${res.status}`);
        err.noRetry = true;
        throw err;
      }
      const text = await res.text();
      const ct = res.headers.get("content-type") ?? "";
      if (ct.includes("text/html") && /^\s*<!doctype html|^\s*<html/i.test(text)) {
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

function withFrontmatter(page, body) {
  const h1 = body.match(/^#\s+(.+)$/m)?.[1]?.trim();
  const title = (h1 ?? page.title).replace(/"/g, '\\"');
  const fm = [
    "---",
    `title: "${title}"`,
    `source: ${page.url}`,
    `section: "${page.section}"`,
    ...(page.module ? [`module: ${page.module}`] : []),
    `fetched_at: ${new Date().toISOString()}`,
    "---",
    "",
  ].join("\n");
  return body.trimStart().startsWith("---") ? body : fm + body;
}

async function runPool(items, worker, concurrency) {
  let i = 0;
  await Promise.all(
    Array.from({ length: concurrency }, async () => {
      while (true) {
        const idx = i++;
        if (idx >= items.length) return;
        await worker(items[idx], idx);
      }
    })
  );
}

function groupBy(pages) {
  const groups = new Map(); // dir -> pages[]
  for (const p of pages) {
    if (!groups.has(p.dir)) groups.set(p.dir, []);
    groups.get(p.dir).push(p);
  }
  return groups;
}

function printGrouping(pages) {
  const groups = groupBy(pages);
  for (const [dir, items] of groups) {
    console.log(`\n${dir}/  (${items.length})`);
    for (const p of items) console.log(`   - ${p.title}`);
  }
  console.log(`\n${pages.length} pages in ${groups.size} folders.`);
}

async function main() {
  let llmsText;
  if (FROM_FILE) {
    console.log(`Reading index from file: ${FROM_FILE}`);
    llmsText = await readFile(FROM_FILE, "utf8");
  } else {
    console.log(`Fetching index: ${LLMS_URL}`);
    llmsText = await fetchText(LLMS_URL);
  }

  const pages = parseIndex(llmsText, LLMS_URL);
  console.log(`Found ${pages.length} unique .md pages`);

  if (DRY_RUN) {
    printGrouping(pages);
    return;
  }

  await mkdir(OUT_DIR, { recursive: true });
  await writeFile(path.join(OUT_DIR, "_llms.txt"), llmsText, "utf8");

  const failures = [];
  const bodies = new Map(); // url -> body (only kept for --merge)
  let done = 0;

  await runPool(
    pages,
    async (page) => {
      try {
        const body = await fetchText(page.url);
        const out = path.join(OUT_DIR, page.file);
        await mkdir(path.dirname(out), { recursive: true });
        await writeFile(out, withFrontmatter(page, body), "utf8");
        if (MERGE) bodies.set(page.url, body);
        page.ok = true;
        console.log(`[${++done}/${pages.length}] ✓ ${page.file}`);
      } catch (err) {
        page.ok = false;
        failures.push({ title: page.title, url: page.url, error: err.message });
        console.warn(`[${++done}/${pages.length}] ✗ ${page.url} (${err.message})`);
      }
    },
    CONCURRENCY
  );

  const groups = groupBy(pages);

  if (MERGE) {
    const mergedDir = path.join(OUT_DIR, "_combined");
    await mkdir(mergedDir, { recursive: true });
    for (const [dir, items] of groups) {
      const ok = items.filter((p) => p.ok);
      if (!ok.length) continue;
      const parts = [
        `# ${dir.split("/").slice(-1)[0]} — ${items[0].section}`,
        "",
        ...ok.flatMap((p) => [
          "---",
          `<!-- source: ${p.url} -->`,
          bodies.get(p.url).trim(),
          "",
        ]),
      ];
      await writeFile(
        path.join(mergedDir, `${dir.replace(/\//g, "__")}.md`),
        parts.join("\n"),
        "utf8"
      );
    }
  }

  const manifest = {
    source: FROM_FILE ?? LLMS_URL,
    generatedAt: new Date().toISOString(),
    folders: Object.fromEntries(
      [...groups].map(([dir, items]) => [
        dir,
        items.filter((p) => p.ok).map((p) => ({ title: p.title, url: p.url, file: p.file })),
      ])
    ),
    failures,
  };
  await writeFile(path.join(OUT_DIR, "_manifest.json"), JSON.stringify(manifest, null, 2), "utf8");

  const okCount = pages.filter((p) => p.ok).length;
  console.log(`\nDone. ${okCount} saved, ${failures.length} failed.`);
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
