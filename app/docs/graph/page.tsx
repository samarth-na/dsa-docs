import { DocsShell } from "@/components/docs/docs-shell";
import { QuestionGraphView } from "@/components/graph/question-graph-view";
import { getQuestionCatalog, getQuestionTopicMatrix } from "@/lib/docs";

export const dynamic = "force-static";

export default function DocsGraphPage() {
  const matrixRows = getQuestionTopicMatrix();
  const catalogRows = getQuestionCatalog();

  return (
    <DocsShell toc={[]} currentPath="/docs/graph">
      <QuestionGraphView matrixRows={matrixRows} catalogRows={catalogRows} />
    </DocsShell>
  );
}
