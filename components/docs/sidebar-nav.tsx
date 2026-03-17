"use client";

import Link from "next/link";
import { clsx } from "clsx";
import { useMemo, useCallback, type ReactElement } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import posthog from "posthog-js";
import type { NavSection } from "@/lib/docs";
import { toPublicPath } from "@/lib/public-paths";

type Props = {
  sections: NavSection[];
  currentPath: string;
};

const ALL_QUESTIONS_FILTER = "__all__";

type IconProps = { className?: string };

function SidebarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M3.75 6.75a1.5 1.5 0 0 1 1.5-1.5h3.2a1.5 1.5 0 0 1 1.06.44l.6.62c.28.28.66.44 1.06.44h3.58a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-7Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function iconForItem(label: string, link: string): (props: IconProps) => ReactElement {
  const key = `${label} ${link}`.toLowerCase();

  if (key.includes("roadmap") || key.includes("plan")) {
    return function RoadmapIcon({ className }: IconProps) {
      return (
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
          <path d="M4 15.25V4.75M4 4.75h5M4 4.75l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 10h8M12 10l-2-2m2 2-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    };
  }

  if (key.includes("catalog") || key.includes("question") || key.includes("leetcode")) {
    return function ListIcon({ className }: IconProps) {
      return (
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
          <path d="M7 6h9M7 10h9M7 14h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="4.5" cy="6" r="1" fill="currentColor" />
          <circle cx="4.5" cy="10" r="1" fill="currentColor" />
          <circle cx="4.5" cy="14" r="1" fill="currentColor" />
        </svg>
      );
    };
  }

  if (key.includes("placement")) {
    return function BriefcaseIcon({ className }: IconProps) {
      return (
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
          <path d="M7 6V5.5A1.5 1.5 0 0 1 8.5 4h3A1.5 1.5 0 0 1 13 5.5V6" stroke="currentColor" strokeWidth="1.5" />
          <rect x="3.75" y="6" width="12.5" height="9.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 10h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    };
  }

  if (key.endsWith("/docs") || key.includes("home")) {
    return function HomeIcon({ className }: IconProps) {
      return (
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
          <path d="M4.5 9.25 10 5l5.5 4.25v5.25A1.5 1.5 0 0 1 14 16H6a1.5 1.5 0 0 1-1.5-1.5V9.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M8.5 16v-3.5a1.5 1.5 0 0 1 3 0V16" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    };
  }

  return SidebarIcon;
}

function isActive(path: string, href: string): boolean {
  return path === href || path.startsWith(`${href}/`);
}

function filterFromPath(path: string): string {
  const match = path.match(/\/questions\/([^/?#]+)/);
  if (!match) return ALL_QUESTIONS_FILTER;
  return match[1] || ALL_QUESTIONS_FILTER;
}

function filterFromQuestionTypeLink(link: string): string | null {
  const uiLink = toPublicPath(link);
  if (uiLink === "/questions") return ALL_QUESTIONS_FILTER;

  const match = uiLink.match(/^\/questions\/([^/?#]+)$/);
  if (!match) return null;
  return match[1] || ALL_QUESTIONS_FILTER;
}

function questionMatchesFilter(href: string, filter: string): boolean {
  if (filter === ALL_QUESTIONS_FILTER) return true;
  return href.includes(`/questions/${filter}/`);
}

export function SidebarNav({ sections, currentPath }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const questionFilter = searchParams.get("filter") || filterFromPath(pathname || currentPath);

  const handleFilterClick = useCallback((filter: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("filter", filter);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
    posthog.capture("question_filter_applied", { filter });
  }, [pathname, searchParams, router]);

  const renderedSections = useMemo(() => {
    const hasQuestionSections = sections.some((section) => section.label === "Question Types") && sections.some((section) => section.label === "Questions");
    if (!hasQuestionSections) return sections;

    return sections.map((section) => {
      if (section.label !== "Questions") return section;
      return {
        ...section,
        items: section.items.filter((item) => questionMatchesFilter(toPublicPath(item.link), questionFilter))
      };
    });
  }, [sections, questionFilter]);

  return (
    <aside className="hidden h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-[var(--border-soft)] bg-[var(--bg-sidebar)] px-4 py-7 lg:block">
      <div className="space-y-7 pb-8">
        {renderedSections.map((section) => (
          <section key={section.label}>
            <h2 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--text-secondary)]">
              {section.label}
            </h2>
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const uiLink = toPublicPath(item.link);
                const active = isActive(pathname || toPublicPath(currentPath), uiLink);
                const Icon = iconForItem(item.label, item.link);
                const questionTypeFilter = section.label === "Question Types" ? filterFromQuestionTypeLink(item.link) : null;

                if (questionTypeFilter) {
                  const typeActive = questionFilter === questionTypeFilter;
                  return (
                    <button
                      key={uiLink}
                      type="button"
                      onClick={() => handleFilterClick(questionTypeFilter)}
                      className={clsx(
                        "flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-left text-[15px] leading-6 transition",
                        typeActive
                          ? "bg-[color-mix(in_srgb,var(--brand-1)_16%,transparent)] text-[var(--brand-2)]"
                          : "text-[var(--text-sidebar)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)]"
                      )}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      <span>{item.label}</span>
                    </button>
                  );
                }

                return (
                  <Link
                    key={uiLink}
                    href={uiLink}
                    onClick={() => posthog.capture("sidebar_link_clicked", { label: item.label, href: uiLink, section: section.label })}
                    className={clsx(
                      "flex items-center gap-2 rounded-md px-3 py-1.5 text-[15px] leading-6 transition",
                      active
                        ? "bg-[color-mix(in_srgb,var(--brand-1)_16%,transparent)] text-[var(--brand-2)]"
                        : "text-[var(--text-sidebar)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)]"
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </aside>
  );
}
