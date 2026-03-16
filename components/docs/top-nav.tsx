import Link from "next/link";
import { clsx } from "clsx";

const links = [
  { href: "/docs", label: "Guide" },
  { href: "/docs/roadmap", label: "Config" },
  { href: "/docs/question_catalog", label: "CSV" },
  { href: "/docs/Placement", label: "Resources" }
];

type Props = {
  currentPath: string;
};

function isActive(currentPath: string, href: string): boolean {
  return currentPath === href || currentPath.startsWith(`${href}/`);
}

export function TopNav({ currentPath }: Props) {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-soft)] bg-[var(--bg-page)]">
      <div className="mx-auto flex h-14 w-full max-w-[1600px] items-center justify-between px-3 sm:px-4 md:px-6">
        <Link href="/docs" className="group flex items-center gap-2">
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

        <Link
          href="/docs"
          className="rounded-md border border-[var(--border-soft)] px-3 py-1 text-xs font-medium text-[var(--text-secondary)] md:hidden"
        >
          Menu
        </Link>
      </div>
    </header>
  );
}
