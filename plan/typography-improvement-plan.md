# Typography Improvement Plan

## Goal
Improve reading comfort and hierarchy across docs pages while keeping the layout compact and scan-friendly for DSA prep.

## Current Baseline
- Uses `Inter` as primary sans and `JetBrains Mono` for code.
- Heading and body sizes are manually tuned in `components/docs/mdx-content.tsx`.
- Light theme now has improved contrast tokens, but typography is still mostly component-local.

## Phase 1: Define a Type System (Foundation)
1. Create typography tokens in `app/globals.css`:
   - Font families (`--font-body`, `--font-display`, `--font-code`)
   - Font sizes (`--text-xs` to `--text-5xl`)
   - Line heights (`--leading-tight`, `--leading-normal`, `--leading-relaxed`)
   - Tracking tokens for titles and labels
2. Map docs primitives (`h1`, `h2`, `h3`, `p`, `li`, `code`) to these tokens.
3. Keep tokens responsive using one `clamp(...)` scale for major headings.

## Phase 2: Improve Readability (Docs Content)
1. Set an ideal reading measure (`max-width` around 68-75ch) for prose blocks.
2. Increase paragraph rhythm with consistent vertical spacing and slightly higher body line-height.
3. Differentiate list text from paragraph text with slightly tighter line-height and spacing.
4. Refine code typography:
   - Slightly smaller inline code with stronger weight
   - Better pre/code contrast and line-height for long snippets

## Phase 3: Strengthen Hierarchy (Navigation + Utility UI)
1. Standardize nav label scale (`TopNav`, `Sidebar`, `TOC`) so utility text reads as one system.
2. Use one display style for page titles and one section style for all H2 blocks.
3. Ensure active, hover, and muted states differ by both color and weight (not color alone).

## Phase 4: Accessibility + QA
1. Verify contrast for all text roles in light theme (primary, secondary, muted, links, code).
2. Validate typography on mobile breakpoints (320px, 375px, 768px).
3. Check markdown edge cases: dense lists, wide tables, nested headings, long inline code.

## Suggested Implementation Order
1. Tokenize typography in `app/globals.css`.
2. Refactor `components/docs/mdx-content.tsx` to consume tokens.
3. Align `components/docs/top-nav.tsx`, `components/docs/sidebar-nav.tsx`, `components/docs/toc-nav.tsx` text styles.
4. Run visual pass on 3-5 representative docs pages.

## Success Criteria
- Headings are visually distinct without feeling oversized.
- Body text is comfortable for long reading sessions.
- Navigation text is legible and consistent.
- Typography remains coherent across desktop and mobile.
