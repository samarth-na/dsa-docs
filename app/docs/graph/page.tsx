import { DocsShell } from "@/components/docs/docs-shell";
import { QuestionGraphView } from "@/components/graph/question-graph-view";
import { getDocsNavigation, getQuestionCatalog, getQuestionTopicMatrix } from "@/lib/docs";

export const dynamic = "force-static";

export default function DocsGraphPage() {
  const matrixRows = getQuestionTopicMatrix();
  const catalogRows = getQuestionCatalog();
  const navSections = getDocsNavigation("/docs/graph");

  return (
    <DocsShell toc={[]} currentPath="/docs/graph" navSections={navSections}>
      <QuestionGraphView matrixRows={matrixRows} catalogRows={catalogRows} />
    </DocsShell>
  );
}
