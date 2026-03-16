import Link from "next/link";
import type { TocItem } from "@/lib/toc";

type Props = {
  items: TocItem[];
};

export function TocNav({ items }: Props) {
  return (
    <aside className="hidden h-[calc(100vh-3.5rem)] px-4 py-7 xl:block">
      <h2 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-zinc-500">On this page</h2>
      <div className="space-y-1 border-l border-white/10 pl-3">
        {items.length === 0 ? (
          <p className="text-xs text-zinc-600">No headings</p>
        ) : (
          items.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={`block text-sm transition hover:text-rose-300 ${
                item.level === 3 ? "pl-3 text-zinc-500" : "text-zinc-300"
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
