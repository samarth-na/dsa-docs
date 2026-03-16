import Link from "next/link";
import { DocsShell } from "@/components/docs/docs-shell";
import { getPdfResources } from "@/lib/docs";

export default function PdfsPage() {
  const allPdfs = getPdfResources();
  const notes = allPdfs.filter((item) => item.section === "notes");
  const placement = allPdfs.filter((item) => item.section === "placement");

  return (
    <DocsShell toc={[]} currentPath="/resources/pdfs">
      <h1 className="mb-3 text-4xl font-semibold tracking-tight text-zinc-50">PDF Resources</h1>
      <p className="mb-8 max-w-3xl text-lg text-zinc-400">
        Lecture and placement PDFs. Links open in a new tab and stream directly from the server.
      </p>

      <section className="mb-8 rounded-xl border border-white/10 bg-zinc-950/60 p-5">
        <h2 className="mb-4 text-2xl font-semibold text-zinc-100">Lecture Notes</h2>
        <ul className="space-y-2">
          {notes.map((pdf) => (
            <li key={pdf.href}>
              <Link
                href={pdf.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 underline decoration-zinc-600 underline-offset-4 hover:text-rose-300"
              >
                {pdf.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl border border-white/10 bg-zinc-950/60 p-5">
        <h2 className="mb-4 text-2xl font-semibold text-zinc-100">Placement Material</h2>
        <ul className="space-y-2">
          {placement.map((pdf) => (
            <li key={pdf.href}>
              <Link
                href={pdf.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 underline decoration-zinc-600 underline-offset-4 hover:text-rose-300"
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
