import { notFound } from "next/navigation";
import { DocsShell } from "@/components/docs/docs-shell";
import { MdxContent } from "@/components/docs/mdx-content";
import { getDocPageBySlug, getDocsNavigation } from "@/lib/docs";

export const dynamic = "force-static";

export default function DocsPage() {
  const page = getDocPageBySlug([]);
  if (!page) {
    notFound();
  }

  const navSections = getDocsNavigation("/docs");

  return (
    <DocsShell toc={page.toc} currentPath="/docs" navSections={navSections}>
      <MdxContent source={page.content} linkBasePath={page.sourcePath} />
    </DocsShell>
  );
}
