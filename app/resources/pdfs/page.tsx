import Link from "next/link";
import { DocsShell } from "@/components/docs/docs-shell";
import { getPdfResources } from "@/lib/docs";

export default function PdfsPage() {
  const allPdfs = getPdfResources();
  const notes = allPdfs.filter((item) => item.section === "notes");
  const placement = allPdfs.filter((item) => item.section === "placement");

  return (
    <DocsShell toc={[]} currentPath="/resources/pdfs">
      <h1 className="mb-3 text-[2.8rem] font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
        PDF Resources
      </h1>
      <p className="mb-8 max-w-3xl text-base text-[var(--text-secondary)]">
        Lecture and placement PDFs. Links open in a new tab and stream directly from the server.
      </p>

      <section className="mb-8 rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface)] p-5">
        <h2 className="mb-4 text-2xl font-semibold text-[var(--text-primary)]">Lecture Notes</h2>
        <ul className="space-y-2">
          {notes.map((pdf) => (
            <li key={pdf.href}>
              <Link
                href={pdf.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] underline decoration-[var(--border-soft)] underline-offset-4 hover:text-[var(--brand-2)]"
              >
                {pdf.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface)] p-5">
        <h2 className="mb-4 text-2xl font-semibold text-[var(--text-primary)]">Placement Material</h2>
        <ul className="space-y-2">
          {placement.map((pdf) => (
            <li key={pdf.href}>
              <Link
                href={pdf.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] underline decoration-[var(--border-soft)] underline-offset-4 hover:text-[var(--brand-2)]"
              >
                {pdf.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </DocsShell>
  );
}
