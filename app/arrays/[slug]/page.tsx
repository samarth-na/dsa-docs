import { notFound } from "next/navigation";
import { DocsShell } from "@/components/docs/docs-shell";
import { MdxContent } from "@/components/docs/mdx-content";
import {
    getArraysDocSlugs,
    getArraysDocBySlug,
    type NavSection,
    type NavItem,
} from "@/lib/docs";

export const dynamic = "force-static";

function toTitleCaseLocal(text: string): string {
    return text
        .replace(/[_-]+/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .replace(/\b\w/g, (m) => m.toUpperCase());
}

type Props = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return getArraysDocSlugs().map((slug) => ({ slug }));
}

export default async function ArraysSlugPage({ params }: Props) {
    const { slug } = await params;
    const page = getArraysDocBySlug(slug);
    if (!page) {
        notFound();
    }

    const allSlugs = getArraysDocSlugs();
    const navItems: NavItem[] = allSlugs.map((s) => ({
        label: toTitleCaseLocal(s),
        link: `/arrays/${s}`,
    }));

    const navSections: NavSection[] = [
        { label: "Arrays", items: navItems },
    ];

    return (
        <DocsShell
            toc={page.toc}
            currentPath={`/arrays/${slug}`}
            navSections={navSections}
        >
            <MdxContent
                source={page.content}
                linkBasePath={`/docs/arrays/${slug}.md`}
            />
        </DocsShell>
    );
}
