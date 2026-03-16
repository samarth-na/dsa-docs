import { parse } from "csv-parse/sync";
import fs from "node:fs";
import path from "node:path";
import { extractTitle, extractToc, type TocItem } from "@/lib/toc";

const ROOT = process.cwd();
const CANDIDATE_ROOTS = [path.join(ROOT, "data", "docs"), path.join(ROOT, "data"), path.join(ROOT, "docs")];

const ROOT_MARKERS = ["roadmap.md", "question_catalog.csv", "leetcode_questions.csv"];

function hasMarkers(dir: string): boolean {
  return ROOT_MARKERS.every((marker) => fs.existsSync(path.join(dir, marker)));
}

function resolveDocsRoot(): string {
  for (const candidate of CANDIDATE_ROOTS) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isDirectory() && hasMarkers(candidate)) {
      return candidate;
    }
  }

  for (const candidate of CANDIDATE_ROOTS) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isDirectory()) {
      return candidate;
    }
  }

  return path.join(ROOT, "docs");
}

const DOCS_ROOT = resolveDocsRoot();

export type DocPage = {
  slug: string[];
  title: string;
  content: string;
  toc: TocItem[];
  description?: string;
};

export type NavItem = {
  label: string;
  link: string;
};

export type NavSection = {
  label: string;
  items: NavItem[];
};

export type CatalogRow = {
  Question: string;
  Types: string;
  Description: string;
  Difficulty: string;
};

export type LeetCodeRow = {
  "Question Number": string;
  Name: string;
};

function exists(p: string): boolean {
  return fs.existsSync(p);
}

function fileToSlug(filePath: string): string[] {
  const rel = path.relative(DOCS_ROOT, filePath);
  const noExt = rel.replace(/\.(md|mdx)$/i, "");
  const segments = noExt.split(path.sep);
  if (segments.length === 1 && segments[0] === "index") {
    return [];
  }
  if (segments.at(-1) === "README") {
    return segments.slice(0, -1);
  }
  return segments;
}

function slugToPath(slug: string[]): string | null {
  if (slug.length === 0) {
    const rootChecks = [path.join(DOCS_ROOT, "index.mdx"), path.join(DOCS_ROOT, "index.md")];
    for (const rootPath of rootChecks) {
      if (exists(rootPath)) return rootPath;
    }
  }

  const base = path.join(DOCS_ROOT, ...slug);
  const checks = [
    `${base}.mdx`,
    `${base}.md`,
    path.join(base, "index.mdx"),
    path.join(base, "index.md"),
    path.join(base, "README.mdx"),
    path.join(base, "README.md")
  ];
  for (const p of checks) {
    if (exists(p)) return p;
  }
  return null;
}

function walkMarkdown(dir: string, acc: string[] = []): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkMarkdown(full, acc);
      continue;
    }
    if (entry.isFile() && /\.(md|mdx)$/i.test(entry.name)) {
      acc.push(full);
    }
  }
  return acc;
}

export function getAllDocSlugs(): string[][] {
  return walkMarkdown(DOCS_ROOT).map(fileToSlug);
}

type Frontmatter = {
  title?: string;
  description?: string;
};

function parseFrontmatter(raw: string): { frontmatter: Frontmatter; content: string } {
  if (!raw.startsWith("---\n")) {
    return { frontmatter: {}, content: raw };
  }

  const end = raw.indexOf("\n---\n", 4);
  if (end === -1) {
    return { frontmatter: {}, content: raw };
  }

  const yaml = raw.slice(4, end);
  const content = raw.slice(end + 5);
  const frontmatter: Frontmatter = {};

  for (const line of yaml.split("\n")) {
    const titleMatch = line.match(/^title:\s*(.+)$/);
    if (titleMatch) {
      frontmatter.title = titleMatch[1].trim().replace(/^['"]|['"]$/g, "");
    }
    const descriptionMatch = line.match(/^description:\s*(.+)$/);
    if (descriptionMatch) {
      frontmatter.description = descriptionMatch[1].trim().replace(/^['"]|['"]$/g, "");
    }
  }

  return { frontmatter, content };
}

export function getDocPageBySlug(slug: string[]): DocPage | null {
  const filePath = slugToPath(slug);
  if (!filePath) return null;

  const rawContent = fs.readFileSync(filePath, "utf8");
  const { frontmatter, content } = parseFrontmatter(rawContent);
  const title = frontmatter.title || extractTitle(content, slug.at(-1) ?? "Document");
  const toc = extractToc(content);

  return {
    slug,
    title,
    content,
    toc,
    description: frontmatter.description
  };
}

function fallbackNavigation(): NavSection[] {
  return [
    {
      label: "Docs",
      items: [
        { label: "Home", link: "/docs" },
        { label: "Roadmap", link: "/docs/roadmap" },
        { label: "Questions by Type", link: "/docs/questions_by_type" },
        { label: "LeetCode Plan", link: "/docs/leetcode_study_plan" }
      ]
    },
    {
      label: "Data",
      items: [
        { label: "Question Catalog", link: "/docs/question_catalog" },
        { label: "LeetCode Questions", link: "/docs/leetcode_questions" },
        { label: "Placement", link: "/docs/Placement" }
      ]
    }
  ];
}

type SidebarConfig = {
  sidebar?: Array<{
    label: string;
    items?: Array<{ label: string; link: string }>;
  }>;
};

export function getDocsNavigation(): NavSection[] {
  const sidebarPath = path.join(DOCS_ROOT, "sidebar.json");
  if (!exists(sidebarPath)) {
    return fallbackNavigation();
  }

  try {
    const raw = fs.readFileSync(sidebarPath, "utf8");
    const parsed = JSON.parse(raw) as SidebarConfig;
    const sections = parsed.sidebar ?? [];

    return sections.map((section) => ({
      label: section.label,
      items: (section.items ?? []).map((item) => ({
        label: item.label,
        link: item.link.endsWith("/") && item.link.length > 1 ? item.link.slice(0, -1) : item.link
      }))
    }));
  } catch {
    return fallbackNavigation();
  }
}

export function getQuestionCatalog(): CatalogRow[] {
  const csvPath = path.join(DOCS_ROOT, "question_catalog.csv");
  const text = fs.readFileSync(csvPath, "utf8");
  return parse(text, {
    columns: true,
    skip_empty_lines: true,
    trim: true
  }) as CatalogRow[];
}

export function getLeetCodeQuestions(): LeetCodeRow[] {
  const csvPath = path.join(DOCS_ROOT, "leetcode_questions.csv");
  const text = fs.readFileSync(csvPath, "utf8");
  return parse(text, {
    columns: true,
    skip_empty_lines: true,
    trim: true
  }) as LeetCodeRow[];
}

export type PdfItem = {
  name: string;
  href: string;
  section: "notes" | "placement";
};

function collectPdfs(section: "notes" | "Placement"): PdfItem[] {
  const dir = path.join(DOCS_ROOT, section);
  if (!exists(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.toLowerCase().endsWith(".pdf"))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((name) => ({
      name,
      href: `/api/pdf/${encodeURIComponent(section)}/${encodeURIComponent(name)}`,
      section: section === "Placement" ? "placement" : "notes"
    }));
}

export function getPdfResources(): PdfItem[] {
  return [...collectPdfs("notes"), ...collectPdfs("Placement")];
}
