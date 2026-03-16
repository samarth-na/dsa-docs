import { DataTable } from "@/components/docs/data-table";
import { DocsShell } from "@/components/docs/docs-shell";
import { getQuestionCatalog } from "@/lib/docs";

export default function CatalogPage() {
  const rows = getQuestionCatalog();

  return (
    <DocsShell toc={[]} currentPath="/resources/catalog">
      <h1 className="mb-3 text-[2.8rem] font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
        Question Catalog
      </h1>
      <p className="mb-8 max-w-3xl text-base text-[var(--text-secondary)]">
        Structured list of all practice questions with type tags and inferred difficulty.
      </p>
      <DataTable
        headers={["Question", "Types", "Description", "Difficulty"]}
        rows={rows.map((row) => [row.Question, row.Types, row.Description, row.Difficulty])}
      />
    </DocsShell>
  );
}
