import { notFound } from "next/navigation";
import { DocsShell } from "@/components/docs/docs-shell";
import { MdxContent } from "@/components/docs/mdx-content";
import { getDocPageBySlug } from "@/lib/docs";

export default function DocsPage() {
  const page = getDocPageBySlug([]);
  if (!page) {
    notFound();
  }

  return (
    <DocsShell toc={page.toc} currentPath="/docs">
      <MdxContent source={page.content} />
    </DocsShell>
  );
}
