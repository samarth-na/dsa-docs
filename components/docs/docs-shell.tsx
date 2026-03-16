import type { ReactNode } from "react";
import { getDocsNavigation } from "@/lib/docs";
import type { TocItem } from "@/lib/toc";
import { SidebarNav } from "@/components/docs/sidebar-nav";
import { TocNav } from "@/components/docs/toc-nav";
import { TopNav } from "@/components/docs/top-nav";

type Props = {
  children: ReactNode;
  toc: TocItem[];
  currentPath: string;
};

export function DocsShell({ children, toc, currentPath }: Props) {
  const navSections = getDocsNavigation();

  return (
    <div className="min-h-screen bg-[#0b0d12] text-zinc-200">
      <TopNav currentPath={currentPath} />
      <div className="mx-auto grid h-[calc(100vh-3.5rem)] w-full max-w-[1600px] grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)_260px]">
        <SidebarNav sections={navSections} currentPath={currentPath} />
        <main className="h-[calc(100vh-3.5rem)] overflow-y-auto px-5 py-8 md:px-8 xl:px-12">{children}</main>
        <TocNav items={toc} />
      </div>
    </div>
  );
}
