import { notFound } from "next/navigation";
import { DocsShell } from "@/components/docs/docs-shell";
import { MdxContent } from "@/components/docs/mdx-content";
import { getAllDocSlugs, getDocPageBySlug } from "@/lib/docs";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  return getAllDocSlugs().map((slug) => ({ slug }));
}

export default async function DocSlugPage({ params }: Props) {
  const { slug } = await params;
  const page = getDocPageBySlug(slug);
  if (!page) {
    notFound();
  }

  return (
    <DocsShell toc={page.toc} currentPath={`/docs/${slug.join("/")}`}>
      <MdxContent source={page.content} />
    </DocsShell>
  );
}
