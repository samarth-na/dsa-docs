"use client";

import type { ReactNode } from "react";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import type { TocItem } from "@/lib/toc";
import type { NavSection } from "@/lib/docs";
import { SidebarNav } from "@/components/docs/sidebar-nav";
import { TocNav } from "@/components/docs/toc-nav";
import { TopNav } from "@/components/docs/top-nav";
import { Footer } from "@/components/docs/footer";
import { toPublicPath } from "@/lib/public-paths";

type Props = {
    children: ReactNode;
    toc: TocItem[];
    currentPath: string;
    navSections: NavSection[];
};

export function DocsShell({ children, toc, currentPath, navSections }: Props) {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const prevPathname = useRef(pathname);

    useEffect(() => {
        if (pathname !== prevPathname.current) {
            prevPathname.current = pathname;
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsMenuOpen(false);
        }
    }, [pathname]);

    const uiPath = toPublicPath(currentPath);
    const isResourcesSection = false;
    const isGraphSection =
        currentPath.startsWith("/graph") ||
        currentPath.startsWith("/docs/graph");
    const isListsSection =
        currentPath.startsWith("/lists") ||
        currentPath.startsWith("/docs/lists");
    const showLeftSidebar = !(isResourcesSection || isGraphSection);
    const showRightSidebar = !(
        isResourcesSection ||
        isGraphSection ||
        isListsSection
    );

    const gridCols = showLeftSidebar
        ? showRightSidebar
            ? "lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)_260px]"
            : "lg:grid-cols-[280px_minmax(0,1fr)]"
        : "lg:grid-cols-[minmax(0,1fr)]";

    return (
        <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]">
            <TopNav
                currentPath={uiPath}
                isMenuOpen={isMenuOpen}
                onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
            />

            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            <div
                className={`mx-auto grid h-[calc(100vh-3.5rem)] w-full max-w-[1600px] grid-cols-1 border-[var(--border-soft)] ${gridCols}`}
            >
                {showLeftSidebar ? (
                    <SidebarNav
                        sections={navSections}
                        currentPath={uiPath}
                        isOpen={isMenuOpen}
                        onClose={() => setIsMenuOpen(false)}
                    />
                ) : null}
                <main className="h-[calc(100vh-3.5rem)] overflow-y-auto bg-[var(--bg-page)] px-4 py-7 pb-24 sm:px-6 md:px-10 md:pb-7 xl:px-14">
                    {children}
                </main>
                {showRightSidebar ? <TocNav items={toc} /> : null}
            </div>

            <div className="mx-auto max-w-[1600px] border-[var(--border-soft)]">
                <Footer />
            </div>
        </div>
    );
}
