import Link from "next/link";
import { clsx } from "clsx";
import type { NavSection } from "@/lib/docs";

type Props = {
  sections: NavSection[];
  currentPath: string;
};

function isActive(path: string, href: string): boolean {
  return path === href || path.startsWith(`${href}/`);
}

export function SidebarNav({ sections, currentPath }: Props) {
  return (
    <aside className="hidden h-[calc(100vh-3.5rem)] border-r border-white/5 px-4 py-7 lg:block">
      <div className="space-y-7">
        {sections.map((section) => (
          <section key={section.label}>
            <h2 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-zinc-500">
              {section.label}
            </h2>
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const active = isActive(currentPath, item.link);
                return (
                  <Link
                    key={item.link}
                    href={item.link}
                    className={clsx(
                      "block rounded-md px-3 py-1.5 text-[15px] leading-6 transition",
                      active
                        ? "bg-[#1a1d26] text-[#ff6b8a]"
                        : "text-zinc-400 hover:bg-[#151923] hover:text-zinc-200"
                    )}
                  >
                    {item.label}
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
