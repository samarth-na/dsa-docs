"use client";

import { useState } from "react";
import Link from "next/link";
import posthog from "posthog-js";
import type { TocItem } from "@/lib/toc";

type Props = {
  items: TocItem[];
};

export function TocNav({ items }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const tocContent = (
    <>
      {items.length === 0 ? (
        <p className="text-xs text-[var(--text-secondary)]">No headings</p>
      ) : (
        items.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            onClick={() => posthog.capture("toc_link_clicked", { id: item.id, title: item.title, level: item.level })}
            className={`block text-[15px] leading-6 transition hover:text-[var(--brand-2)] ${
              item.level === 3 ? "pl-3 text-[var(--text-secondary)]" : "text-[var(--text-sidebar)]"
            }`}
          >
            {item.title}
          </Link>
        ))
      )}
    </>
  );

  return (
    <>
      <div className="mb-6 md:hidden">
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex w-full items-center justify-between py-2"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--text-secondary)]">
            On this page
          </span>
          <svg
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            className={`h-4 w-4 text-[var(--text-secondary)] transition-transform ${isExpanded ? "rotate-180" : ""}`}
          >
            <path d="M5 10l5-5m0 0l5 5m-5-5v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className={isExpanded ? "block" : "hidden"}>
          <div className="space-y-1 border-l border-[var(--border-soft)] pl-3">
            {tocContent}
          </div>
        </div>
      </div>

      <aside className="hidden h-[calc(100vh-3.5rem)] px-4 py-7 xl:block">
        <h2 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--text-secondary)]">
          On this page
        </h2>
        <div className="space-y-1 border-l border-[var(--border-soft)] pl-3">
          {tocContent}
        </div>
      </aside>
    </>
  );
}
