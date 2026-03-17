"use client";

import Link from "next/link";
import { clsx } from "clsx";
import posthog from "posthog-js";
import { ThemeToggle } from "@/components/docs/theme-toggle";

const links = [
  { href: "/questions", label: "Questions" },
  { href: "/lectures", label: "Lectures" },
  { href: "/topics", label: "Topics" },
  { href: "/lists", label: "Lists" },
  { href: "/graph", label: "Graph" }
];

type Props = {
  currentPath: string;
  isMenuOpen?: boolean;
  onMenuToggle?: () => void;
};

function isActive(currentPath: string, href: string): boolean {
  return currentPath === href || currentPath.startsWith(`${href}/`);
}

export function TopNav({ currentPath, isMenuOpen, onMenuToggle }: Props) {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[var(--border-soft)] bg-[var(--bg-page)]">
        <div className="mx-auto flex h-14 w-full max-w-[1600px] items-center justify-between px-3 sm:px-4 md:px-6">
          <Link href="/" className="group flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--bg-surface)] text-xs font-bold text-[var(--brand-2)]">
              D
            </span>
            <span className="text-base font-semibold tracking-tight text-[var(--text-primary)]">DSA+</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => posthog.capture("top_nav_link_clicked", { label: link.label, href: link.href })}
                className={clsx(
                  "text-[15px] font-medium transition",
                  isActive(currentPath, link.href)
                    ? "text-[var(--brand-2)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={onMenuToggle}
              className="rounded-md p-2 text-[var(--text-secondary)] hover:bg-[var(--bg-surface)]"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
          </div>
        </div>
      </header>
      
      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--border-soft)] bg-[var(--bg-page)] md:hidden">
        <div className="flex h-16 items-center justify-around px-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => posthog.capture("bottom_nav_link_clicked", { label: link.label, href: link.href })}
              className={clsx(
                "flex flex-col items-center justify-center gap-1 rounded-md px-3 py-2 text-xs font-medium transition",
                isActive(currentPath, link.href)
                  ? "text-[var(--brand-2)]"
                  : "text-[var(--text-secondary)]"
              )}
            >
              {link.href === "/questions" && (
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-5 w-5">
                  <path d="M7 6h9M7 10h9M7 14h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="4.5" cy="6" r="1" fill="currentColor" />
                  <circle cx="4.5" cy="10" r="1" fill="currentColor" />
                  <circle cx="4.5" cy="14" r="1" fill="currentColor" />
                </svg>
              )}
              {link.href === "/lectures" && (
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-5 w-5">
                  <path d="M4.5 9.25 10 5l5.5 4.25v5.25A1.5 1.5 0 0 1 14 16H6a1.5 1.5 0 0 1-1.5-1.5V9.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M8.5 16v-3.5a1.5 1.5 0 0 1 3 0V16" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              )}
              {link.href === "/topics" && (
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-5 w-5">
                  <path d="M4 4h4v4H4V4Zm6 0h4v4h-4V4Zm6 0h4v4h-4V4ZM4 10h4v4H4v-4Zm6 0h4v4h-4v-4Zm6 0h4v4h-4v-4ZM4 16h4v4H4v-4Zm6 0h4v4h-4v-4Zm6 0h4v4h-4v-4Z" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              )}
              {link.href === "/lists" && (
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-5 w-5">
                  <path d="M7.5 5.5h9M7.5 10h9M7.5 14.5h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="4.5" cy="5.5" r="1.5" fill="currentColor" />
                  <circle cx="4.5" cy="10" r="1.5" fill="currentColor" />
                  <circle cx="4.5" cy="14.5" r="1.5" fill="currentColor" />
                </svg>
              )}
              {link.href === "/graph" && (
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-5 w-5">
                  <circle cx="4" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="16" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="16" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="10" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="10" cy="16" r="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M5.5 9l4-2.5m5 4.5-4-2.5M6 11l4.5-3.5m0 7.5L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
