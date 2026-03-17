import { notFound } from "next/navigation";
import { DocsShell } from "@/components/docs/docs-shell";
import { MdxContent } from "@/components/docs/mdx-content";
import { QuestionGraphView } from "@/components/graph/question-graph-view";
import { getAllDocSlugs, getDocPageBySlug, getDocsNavigation, getQuestionCatalog, getQuestionTopicMatrix } from "@/lib/docs";

export const dynamic = "force-static";

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

  const isGraphPage = slug.length === 1 && slug[0] === "graph";
  const matrixRows = isGraphPage ? getQuestionTopicMatrix() : [];
  const catalogRows = isGraphPage ? getQuestionCatalog() : [];
  const navSections = getDocsNavigation(`/docs/${slug.join("/")}`);

  return (
    <DocsShell toc={page.toc} currentPath={`/docs/${slug.join("/")}`} navSections={navSections}>
      {!isGraphPage ? <MdxContent source={page.content} linkBasePath={page.sourcePath} /> : null}
      {isGraphPage ? <QuestionGraphView matrixRows={matrixRows} catalogRows={catalogRows} /> : null}
    </DocsShell>
  );
}
