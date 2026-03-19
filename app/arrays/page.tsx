import Link from "next/link";
import { getArraysCsvData, getArraysDocSlugs } from "@/lib/docs";
import { TopNav } from "@/components/docs/top-nav";
import { Footer } from "@/components/docs/footer";


export const dynamic = "force-static";

function toTitleCaseLocal(text: string): string {
    return text
        .replace(/[_-]+/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .replace(/\b\w/g, (m) => m.toUpperCase());
}

export default function ArraysIndexPage() {
    const rows = getArraysCsvData();
    const slugs = getArraysDocSlugs();

    return (
        <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]">
            <TopNav currentPath="/arrays" />

            <main className="mx-auto max-w-[1200px] px-4 py-7 pb-24 sm:px-6 md:px-10 md:pb-7">
                <h1 className="mb-6 text-[2rem] font-semibold tracking-[-0.02em] text-[var(--text-primary)] sm:text-[2.35rem] md:text-[2.8rem]">
                    Arrays
                </h1>

                {slugs.length > 0 && (
                    <div className="mb-10">
                        <h2 className="mt-6 mb-4 text-[1.45rem] font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                            Resources
                        </h2>
                        <ul className="list-disc space-y-2 pl-6 text-[var(--text-primary)]/95">
                            {slugs.map((slug) => (
                                <li key={slug}>
                                    <Link
                                        href={`/arrays/${slug}`}
                                        className="text-[var(--brand-1)] underline decoration-[color-mix(in_srgb,var(--brand-1)_40%,transparent)] underline-offset-4 hover:text-[var(--brand-2)]"
                                    >
                                        {toTitleCaseLocal(slug)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <h2 className="mt-10 mb-4 border-t border-[var(--border-soft)] pt-7 text-[1.45rem] font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                    Questions
                </h2>
                <div className="mb-6 overflow-x-auto">
                    <table className="w-full border-collapse text-left text-sm text-[var(--text-primary)]">
                        <thead>
                            <tr>
                                <th className="border-b border-[var(--border-soft)] px-3 py-2 text-[var(--text-primary)]">
                                    #
                                </th>
                                <th className="border-b border-[var(--border-soft)] px-3 py-2 text-[var(--text-primary)]">
                                    Question Name
                                </th>
                                <th className="border-b border-[var(--border-soft)] px-3 py-2 text-[var(--text-primary)]">
                                    LeetCode #
                                </th>
                                <th className="border-b border-[var(--border-soft)] px-3 py-2 text-[var(--text-primary)]">
                                    Concepts Involved
                                </th>
                                <th className="border-b border-[var(--border-soft)] px-3 py-2 text-[var(--text-primary)]">
                                    Difficulty
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, i) => (
                                <tr key={i}>
                                    <td className="border-b border-[var(--border-soft)] px-3 py-2 text-[var(--text-secondary)]">
                                        {i + 1}
                                    </td>
                                    <td className="border-b border-[var(--border-soft)] px-3 py-2 text-[var(--text-secondary)]">
                                        <a
                                            href={row["LeetCode Link"]}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[var(--brand-1)] underline decoration-[color-mix(in_srgb,var(--brand-1)_40%,transparent)] underline-offset-4 hover:text-[var(--brand-2)]"
                                        >
                                            {row["Question Name"]}
                                        </a>
                                    </td>
                                    <td className="border-b border-[var(--border-soft)] px-3 py-2 text-[var(--text-secondary)]">
                                        {row["LeetCode Number"]}
                                    </td>
                                    <td className="border-b border-[var(--border-soft)] px-3 py-2 text-[var(--text-secondary)]">
                                        {row["Concepts Involved"]}
                                    </td>
                                    <td className="border-b border-[var(--border-soft)] px-3 py-2 text-[var(--text-secondary)]">
                                        {row.Difficulty}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>

            <div className="mx-auto max-w-[1200px] border-[var(--border-soft)]">
                <Footer />
            </div>
        </div>
    );
}
