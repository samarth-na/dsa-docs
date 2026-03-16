import Link from "next/link";
import { clsx } from "clsx";

const links = [
  { href: "/docs", label: "Guide" },
  { href: "/docs/roadmap", label: "Roadmap" },
  { href: "/docs/question_catalog", label: "CSV" },
  { href: "/docs/Placement", label: "Placement" }
];

type Props = {
  currentPath: string;
};

function isActive(currentPath: string, href: string): boolean {
  return currentPath === href || currentPath.startsWith(`${href}/`);
}

export function TopNav({ currentPath }: Props) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0d12]">
      <div className="mx-auto flex h-14 w-full max-w-[1600px] items-center justify-between px-4 md:px-6">
        <Link href="/docs" className="group flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#252a36] text-xs font-bold text-[#ff6b8a]">
            D
          </span>
          <span className="text-base font-semibold tracking-tight text-zinc-100">DSA+</span>
        </Link>

        <nav className="flex items-center gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-sm transition",
                isActive(currentPath, link.href) ? "text-[#ff6b8a]" : "text-zinc-400 hover:text-zinc-100"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
