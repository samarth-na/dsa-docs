import { parse } from "csv-parse/sync";
import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import { extractTitle, extractToc, type TocItem } from "@/lib/toc";

const ROOT = process.cwd();
const CANDIDATE_ROOTS = [
    path.join(ROOT, "docs"),
    path.join(ROOT, "docs_1"),
    path.join(ROOT, "data", "docs"),
    path.join(ROOT, "data"),
];

const ROOT_MARKERS = ["index.md", "roadmap.md", "sidebar.json"];

function hasMarkers(dir: string): boolean {
    const hasRootMarkers = ROOT_MARKERS.every((marker) =>
        fs.existsSync(path.join(dir, marker)),
    );
    const hasCsvData =
        fs.existsSync(path.join(dir, "csvs")) ||
        fs.existsSync(path.join(dir, "question_catalog.csv"));
    return hasRootMarkers && hasCsvData;
}

function resolveDocsRoot(): string {
    for (const candidate of CANDIDATE_ROOTS) {
        if (
            fs.existsSync(candidate) &&
            fs.statSync(candidate).isDirectory() &&
            hasMarkers(candidate)
        ) {
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
    sourcePath: string;
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

export type TopicMatrixRow = Record<string, string>;

function normalizeTitleKey(value: string): string {
    return value
        .toLowerCase()
        .replace(/['"`]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

function toTitleCase(text: string): string {
    return text
        .replace(/[_-]+/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .replace(/\b\w/g, (m) => m.toUpperCase());
}

function extractFrontmatterTitle(raw: string): string | null {
    if (!raw.startsWith("---\n")) return null;
    const end = raw.indexOf("\n---\n", 4);
    if (end === -1) return null;
    const yaml = raw.slice(4, end);
    const titleLine = yaml
        .split("\n")
        .find((line) => line.trimStart().toLowerCase().startsWith("title:"));
    if (!titleLine) return null;
    const value = titleLine.split(":").slice(1).join(":").trim();
    return value.replace(/^['"]|['"]$/g, "") || null;
}

const getQuestionTypeNavItems = cache((): NavItem[] => {
    const questionsDir = path.join(DOCS_ROOT, "questions");
    if (!exists(questionsDir) || !fs.statSync(questionsDir).isDirectory()) {
        return [{ label: "All Questions", link: "/docs/questions" }];
    }

    const types = fs
        .readdirSync(questionsDir, { withFileTypes: true })
        .filter((entry) => entry.isDirectory())
        .map((entry) => ({
            label: toTitleCase(entry.name),
            link: `/docs/questions/${entry.name}`,
        }))
        .sort((a, b) => a.label.localeCompare(b.label, undefined, { numeric: true }));

    return [{ label: "All Questions", link: "/docs/questions" }, ...types];
});

const getQuestionNavItems = cache((): NavItem[] => {
    const questionsDir = path.join(DOCS_ROOT, "questions");
    if (!exists(questionsDir) || !fs.statSync(questionsDir).isDirectory()) {
        return [];
    }

    const questionFiles = walkMarkdown(questionsDir);
    const questionItems = questionFiles
        .map((filePath) => {
            const slug = fileToSlug(filePath);
            if (slug.length < 2 || slug.at(-1) === "index") return null;

            const raw = fs.readFileSync(filePath, "utf8");
            const frontmatterTitle = extractFrontmatterTitle(raw);
            const fallbackTitle = toTitleCase(slug.at(-1) ?? "Question");

            return {
                label: frontmatterTitle ?? fallbackTitle,
                link: `/docs/${slug.join("/")}`,
            };
        })
        .filter((item): item is NavItem => item !== null)
        .sort((a, b) =>
            a.label.localeCompare(b.label, undefined, { numeric: true }),
        );

    return questionItems;
});

const getQuestionTitleLinkMap = cache((): Map<string, string> => {
    const map = new Map<string, string>();
    const questionsDir = path.join(DOCS_ROOT, "questions");
    if (!exists(questionsDir) || !fs.statSync(questionsDir).isDirectory()) {
        return map;
    }

    const questionFiles = walkMarkdown(questionsDir);
    for (const filePath of questionFiles) {
        const slug = fileToSlug(filePath);
        if (slug.length < 2 || slug.at(-1) === "index") continue;

        const raw = fs.readFileSync(filePath, "utf8");
        const title =
            extractFrontmatterTitle(raw) ??
            extractTitle(raw, slug.at(-1) ?? "Question");
        map.set(normalizeTitleKey(title), `/docs/${slug.join("/")}`);
    }

    return map;
});

function linkQuestionNamesInQuestionsByType(content: string): string {
    const titleToLink = getQuestionTitleLinkMap();
    if (titleToLink.size === 0) return content;

    return content.replace(/-\s+`([^`]+)`\s+-/g, (full, title) => {
        const link = titleToLink.get(normalizeTitleKey(title));
        if (!link) return full;
        return `- [\`${title}\`](${link}) -`;
    });
}

function resolveQuestionLinkByName(
    name: string,
    titleToLink: Map<string, string>,
): string | null {
    const normalized = normalizeTitleKey(name);
    const exact = titleToLink.get(normalized);
    if (exact) return exact;

    let bestKey: string | null = null;
    for (const key of titleToLink.keys()) {
        if (key.includes(normalized) || normalized.includes(key)) {
            if (!bestKey || key.length < bestKey.length) {
                bestKey = key;
            }
        }
    }

    return bestKey ? titleToLink.get(bestKey) ?? null : null;
}

function escapeMdCell(value: string): string {
    return value.replace(/\|/g, "\\|").replace(/\n/g, "<br />");
}

const LIST_ROUTE_ALIASES: Record<string, string[]> = {
    "study-plan": ["leetcode_study_plan"],
    cheatsheets: ["topics"],
    "questions-by-type": ["questions_by_type"],
    "master-index": ["master_index"],
    "question-catalog": ["question_catalog"],
    "pattern-questions-csv": ["patterns_questions"],
    "leetcode-questions": ["leetcode_questions"],
};

function resolveListAliasSlug(slug: string[]): string[] {
    if (slug[0] !== "lists" || slug.length !== 2) {
        return slug;
    }

    const alias = LIST_ROUTE_ALIASES[slug[1]];
    return alias ?? slug;
}

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
        const rootChecks = [
            path.join(DOCS_ROOT, "index.mdx"),
            path.join(DOCS_ROOT, "index.md"),
        ];
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
        path.join(base, "README.md"),
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

export const getAllDocSlugs = cache((): string[][] => {
    const fileSlugs = walkMarkdown(DOCS_ROOT).map(fileToSlug);
    const listAliasSlugs = Object.keys(LIST_ROUTE_ALIASES).map((alias) => [
        "lists",
        alias,
    ]);

    return [...fileSlugs, ...listAliasSlugs];
});

type Frontmatter = {
    title?: string;
    description?: string;
};

function parseFrontmatter(raw: string): {
    frontmatter: Frontmatter;
    content: string;
} {
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
            frontmatter.title = titleMatch[1]
                .trim()
                .replace(/^['"]|['"]$/g, "");
        }
        const descriptionMatch = line.match(/^description:\s*(.+)$/);
        if (descriptionMatch) {
            frontmatter.description = descriptionMatch[1]
                .trim()
                .replace(/^['"]|['"]$/g, "");
        }
    }

    return { frontmatter, content };
}

export function getDocPageBySlug(slug: string[]): DocPage | null {
    const resolvedSlug = resolveListAliasSlug(slug);

    if (resolvedSlug.join("/") === "questions") {
        const titleToLink = getQuestionTitleLinkMap();
        const rows = getQuestionCatalog();
        const lines: string[] = [
            "# Questions",
            "",
            "All questions from the catalog CSV.",
            "",
            "| Question | Types | Difficulty | Description |",
            "|---|---|---|---|",
            ...rows.map((row) => {
                const link = resolveQuestionLinkByName(row.Question ?? "", titleToLink);
                const questionCell = link
                    ? `[${escapeMdCell(row.Question ?? "")}](${link})`
                    : escapeMdCell(row.Question ?? "");

                return `| ${questionCell} | ${escapeMdCell(row.Types ?? "")} | ${escapeMdCell(row.Difficulty ?? "")} | ${escapeMdCell(row.Description ?? "")} |`;
            }),
        ];
        const content = lines.join("\n");

        return {
            slug,
            title: "Questions",
            content,
            toc: extractToc(content),
            description: "All questions from question_catalog.csv",
            sourcePath: `/docs/${resolvedSlug.join("/")}.md`,
        };
    }

    if (resolvedSlug.join("/") === "patterns_questions") {
        const titleToLink = getQuestionTitleLinkMap();
        const rows = getPatternsQuestions();
        const lines: string[] = [
            "# Pattern Questions CSV",
            "",
            "| file | title | question | description | topic | difficulty | sample_input | expected_output | source_code |",
            "|---|---|---|---|---|---|---|---|---|",
            ...rows.map((row) => {
                const q = row.question ?? row.title ?? "";
                const link = resolveQuestionLinkByName(q, titleToLink);
                const questionCell = link
                    ? `[${escapeMdCell(q)}](${link})`
                    : escapeMdCell(q);

                return `| ${escapeMdCell(row.file ?? "")} | ${escapeMdCell(row.title ?? "")} | ${questionCell} | ${escapeMdCell(row.description ?? "")} | ${escapeMdCell(row.topic ?? "")} | ${escapeMdCell(row.difficulty ?? "")} | ${escapeMdCell(row.sample_input ?? "")} | ${escapeMdCell(row.expected_output ?? "")} | ${escapeMdCell(row.source_code ?? "")} |`;
            }),
        ];
        const content = lines.join("\n");

        return {
            slug,
            title: "Pattern Questions CSV",
            content,
            toc: extractToc(content),
            description: "Pattern questions sourced from CSV",
            sourcePath: `/docs/${resolvedSlug.join("/")}.md`,
        };
    }

    const filePath = slugToPath(resolvedSlug);
    if (!filePath) return null;

    const rawContent = fs.readFileSync(filePath, "utf8");
    const { frontmatter, content } = parseFrontmatter(rawContent);
    const shouldLinkQuestionNames =
        slug.join("/") === "questions_by_type" ||
        filePath.endsWith(path.join("docs", "questions_by_type.md")) ||
        filePath.endsWith(path.join("questions_by_type.md"));
    const linkedContent = shouldLinkQuestionNames
        ? linkQuestionNamesInQuestionsByType(content)
        : content;
    const title =
        frontmatter.title ||
        extractTitle(linkedContent, slug.at(-1) ?? "Document");
    const toc = extractToc(linkedContent);

    return {
        slug,
        title,
        content: linkedContent,
        toc,
        description: frontmatter.description,
        sourcePath: `/docs/${path
            .relative(DOCS_ROOT, filePath)
            .replace(/\\/g, "/")}`,
    };
}

const getLectureNavItems = cache((): NavItem[] => {
    const lectureItems = getAllDocSlugs()
        .filter(
            (slug) =>
                slug.length === 2 &&
                slug[0] === "lectures" &&
                /^lecture_\d+$/i.test(slug[1]),
        )
        .sort(
            (a, b) =>
                Number(a[1].replace("lecture_", "")) -
                Number(b[1].replace("lecture_", "")),
        )
        .map((slug) => {
            const lectureNo = slug[1].replace("lecture_", "");
            return {
                label: `Lecture ${lectureNo}`,
                link: `/docs/${slug.join("/")}`,
            };
        });

    return lectureItems;
});

function dedupeItems(items: NavItem[]): NavItem[] {
    const seen = new Set<string>();
    return items.filter((item) => {
        const key = item.link.toLowerCase();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
}

function dedupeSections(sections: NavSection[]): NavSection[] {
    return sections.map((section) => ({
        ...section,
        items: dedupeItems(section.items),
    }));
}

function fallbackNavigation(currentPath: string): NavSection[] {
    const isQuestionsSection =
        currentPath.startsWith("/docs/questions") ||
        currentPath.startsWith("/docs/questions_by_type") ||
        currentPath.startsWith("/docs/question_catalog") ||
        currentPath.startsWith("/docs/leetcode_questions");

    if (isQuestionsSection) {
        const questionTypeItems = getQuestionTypeNavItems();
        const questionItems = getQuestionNavItems();
        return dedupeSections([
            {
                label: "Question Types",
                items: questionTypeItems,
            },
            {
                label: "Questions",
                items: questionItems,
            },
        ]);
    }

    if (currentPath.startsWith("/docs/lectures")) {
        return dedupeSections([
            { label: "Lectures", items: getLectureNavItems() },
        ]);
    }

    if (currentPath.startsWith("/docs/topics")) {
        return dedupeSections([
            {
                label: "Topics",
                items: [
                    {
                        label: "Questions by Topic",
                        link: "/docs/topics#questions-by-topic",
                    },
                    { label: "Arrays", link: "/docs/topics/arrays" },
                    { label: "Strings", link: "/docs/topics/strings" },
                    { label: "Patterns", link: "/docs/topics/patterns" },
                    {
                        label: "Number Theory",
                        link: "/docs/topics/number_theory",
                    },
                    { label: "Matrix", link: "/docs/topics/matrix" },
                    {
                        label: "Two Pointers",
                        link: "/docs/topics/two_pointers",
                    },
                    {
                        label: "Binary Search",
                        link: "/docs/topics/binary_search",
                    },
                ],
            },
        ]);
    }

    if (
        currentPath.startsWith("/docs/lists") ||
        currentPath.startsWith("/lists")
    ) {
        return dedupeSections([
            {
                label: "Lists",
                items: [
                    { label: "Study Plan", link: "/docs/lists/study-plan" },
                    { label: "Cheatsheets", link: "/docs/lists/cheatsheets" },
                    {
                        label: "Questions by Type",
                        link: "/docs/lists/questions-by-type",
                    },
                    { label: "Master Index", link: "/docs/lists/master-index" },
                    {
                        label: "Question Catalog",
                        link: "/docs/lists/question-catalog",
                    },
                    {
                        label: "Pattern Questions CSV",
                        link: "/docs/lists/pattern-questions-csv",
                    },
                    {
                        label: "LeetCode Questions",
                        link: "/docs/lists/leetcode-questions",
                    },
                ],
            },
        ]);
    }

    if (
        currentPath.startsWith("/docs/graph") ||
        currentPath.startsWith("/graph")
    ) {
        return dedupeSections([
            {
                label: "Graph",
                items: [
                    { label: "Question Catalog", link: "/question_catalog" },
                    {
                        label: "LeetCode Questions",
                        link: "/leetcode_questions",
                    },
                ],
            },
        ]);
    }

    if (currentPath.startsWith("/docs/planning")) {
        return dedupeSections([
            {
                label: "Planning",
                items: [
                    { label: "Planning Docs", link: "/docs/planning" },
                    {
                        label: "Implementation Plan",
                        link: "/docs/planning/implementation_plan",
                    },
                ],
            },
        ]);
    }

    return dedupeSections([
        {
            label: "Questions",
            items: getQuestionNavItems().slice(0, 6),
        },
    ]);
}

export function getDocsNavigation(currentPath: string): NavSection[] {
    return fallbackNavigation(currentPath);
}

function resolveCsvPath(fileName: string): string {
    const checks = [
        path.join(DOCS_ROOT, "csvs", fileName),
        path.join(DOCS_ROOT, fileName),
    ];

    for (const p of checks) {
        if (exists(p)) return p;
    }

    return checks[0];
}

export const getQuestionCatalog = cache((): CatalogRow[] => {
    const csvPath = resolveCsvPath("question_catalog.csv");
    const text = fs.readFileSync(csvPath, "utf8");
    const rows = parse(text, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
    }) as Array<Record<string, string>>;

    return rows.map((row) => ({
        Question: row.Question ?? row.Title ?? row.Name ?? "",
        Types: row.Types ?? row.Topics ?? "",
        Description: row.Description ?? "",
        Difficulty: row.Difficulty ?? "",
    }));
});

export const getPatternsQuestions = cache((): Array<Record<string, string>> => {
    const csvPath = resolveCsvPath("patterns_questions.csv");
    const text = fs.readFileSync(csvPath, "utf8");
    return parse(text, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
    }) as Array<Record<string, string>>;
});

export const getLeetCodeQuestions = cache((): LeetCodeRow[] => {
    const csvPath = resolveCsvPath("leetcode_questions.csv");
    const text = fs.readFileSync(csvPath, "utf8");
    const rows = parse(text, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
    }) as Array<Record<string, string>>;

    return rows.map((row) => ({
        "Question Number": row["Question Number"] ?? row.Number ?? "",
        Name: row.Name ?? row.Title ?? "",
    }));
});

export const getQuestionTopicMatrix = cache((): TopicMatrixRow[] => {
    const csvPath = resolveCsvPath("question_topic_matrix.csv");
    const text = fs.readFileSync(csvPath, "utf8");
    return parse(text, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
    }) as TopicMatrixRow[];
});
