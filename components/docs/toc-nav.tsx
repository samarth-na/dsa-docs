import Link from "next/link";
import type { TocItem } from "@/lib/toc";

type Props = {
  items: TocItem[];
};

export function TocNav({ items }: Props) {
  return (
    <aside className="hidden h-[calc(100vh-3.5rem)] px-4 py-7 xl:block">
      <h2 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--text-secondary)]">
        On this page
      </h2>
      <div className="space-y-1 border-l border-[var(--border-soft)] pl-3">
        {items.length === 0 ? (
          <p className="text-xs text-[var(--text-secondary)]">No headings</p>
        ) : (
          items.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={`block text-[15px] leading-6 transition hover:text-[var(--brand-2)] ${
                item.level === 3 ? "pl-3 text-[var(--text-secondary)]" : "text-[var(--text-sidebar)]"
              }`}
            >
              {item.title}
            </Link>
          ))
        )}
      </div>
    </aside>
  );
}
