import GithubSlugger from "github-slugger";

export type TocItem = {
    id: string;
    title: string;
    level: 2 | 3;
};

const HEADING_RE = /^(#{2,3})\s+(.+)$/;

function clean(text: string): string {
    return text
        .replace(/`/g, "")
        .replace(/\*\*/g, "")
        .replace(/\*/g, "")
        .replace(/\[(.*?)\]\(.*?\)/g, "$1")
        .trim();
}

export function extractToc(markdown: string): TocItem[] {
    const slugger = new GithubSlugger();
    const items: TocItem[] = [];

    for (const line of markdown.split("\n")) {
        const match = line.match(HEADING_RE);
        if (!match) continue;

        const level = match[1].length as 2 | 3;
        const title = clean(match[2]);
        if (!title) continue;

        items.push({ id: slugger.slug(title), title, level });
    }

    return items;
}

export function extractTitle(markdown: string, fallback: string): string {
    const first = markdown.match(/^#\s+(.+)$/m)?.[1]?.trim();
    return first || fallback;
}
