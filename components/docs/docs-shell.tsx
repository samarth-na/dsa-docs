import type { ReactNode } from "react";
import { getDocsNavigation } from "@/lib/docs";
import type { TocItem } from "@/lib/toc";
import { SidebarNav } from "@/components/docs/sidebar-nav";
import { TocNav } from "@/components/docs/toc-nav";
import { TopNav } from "@/components/docs/top-nav";
import { toPublicPath } from "@/lib/public-paths";

type Props = {
  children: ReactNode;
  toc: TocItem[];
  currentPath: string;
};

export function DocsShell({ children, toc, currentPath }: Props) {
  const navSections = getDocsNavigation(currentPath);
  const uiPath = toPublicPath(currentPath);
  const isResourcesSection = false;
  const isGraphSection = currentPath.startsWith("/graph") || currentPath.startsWith("/docs/graph");
  const isListsSection = currentPath.startsWith("/lists") || currentPath.startsWith("/docs/lists");
  const showLeftSidebar = !(isResourcesSection || isGraphSection);
  const showRightSidebar = !(isResourcesSection || isGraphSection || isListsSection);

  const gridCols = showLeftSidebar
    ? showRightSidebar
      ? "lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)_260px]"
      : "lg:grid-cols-[280px_minmax(0,1fr)]"
    : "lg:grid-cols-[minmax(0,1fr)]";

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]">
      <TopNav currentPath={uiPath} />
      <div className={`mx-auto grid h-[calc(100vh-3.5rem)] w-full max-w-[1600px] grid-cols-1 border-x border-[var(--border-soft)] ${gridCols}`}>
        {showLeftSidebar ? <SidebarNav sections={navSections} currentPath={uiPath} /> : null}
        <main className="h-[calc(100vh-3.5rem)] overflow-y-auto border-x border-[var(--border-soft)] bg-[var(--bg-page)] px-4 py-7 sm:px-6 md:px-10 xl:px-14">
          {children}
        </main>
        {showRightSidebar ? <TocNav items={toc} /> : null}
      </div>
    </div>
  );
}
