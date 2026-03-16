import { DataTable } from "@/components/docs/data-table";
import { DocsShell } from "@/components/docs/docs-shell";
import { getLeetCodeQuestions } from "@/lib/docs";

export default function LeetCodePage() {
  const rows = getLeetCodeQuestions();

  return (
    <DocsShell toc={[]} currentPath="/resources/leetcode">
      <h1 className="mb-3 text-[2.8rem] font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
        LeetCode Questions
      </h1>
      <p className="mb-8 max-w-3xl text-base text-[var(--text-secondary)]">
        Master list of LeetCode problems referenced in your lectures and study plan.
      </p>
      <DataTable
        headers={["Question Number", "Name"]}
        rows={rows.map((row) => [row["Question Number"], row.Name])}
      />
    </DocsShell>
  );
}
