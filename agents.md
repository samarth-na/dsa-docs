# Development Guidelines for AI Agents

## Environment Setup

- **Check if a dev server is already running** - if it is, do NOT run `bun dev` or `bun run dev` again
- If no server is running, start it with `bun dev`
- To check the application, fetch from the running dev server
- Use production builds (`bun run build`) only to test major changes or verify final output

## Tooling

- **Linting & Formatting**: Use Biome for all linting and formatting (do not use ESLint or Prettier)
- **Package Management**: Always use Bun, never npm
  - Adding dependency: `bun add <package>`
  - Removing dependency: `bun remove <package>`
- **Style Reference**: Check existing components in `/components` for patterns

## Workflow

1. **Development**: Fetch from the existing dev server for quick checks
2. **Verification**: Run builds only when verifying larger changes or preparing for deployment
3. **Before Committing**:
   - Run `bun run lint` to catch code issues
   - Run `bun run format` to auto-fix formatting
   - Run `bun tsc --noEmit` to check TypeScript errors
   - Run `bun run build` to verify production build works

## ⚡ Core Philosophy: Reusable & Configurable Code

**Principles:**

- **NO hardcoded values** - All strings, numbers, and configuration come from constants/config files
- **NO monolithic components** - Break everything into small, reusable pieces
- **THINK in components** - Every UI element is a potential building block
- **CONFIG over code** - If it can be configured, it must be configured

## 🚫 What NOT to Do (Anti-Patterns)

```tsx
// ❌ BAD: Hardcoded everything in one file
export default function Dashboard() {
  return (
    <div>
      <h1>User Dashboard</h1>
      <div style={{ color: '#333' }}>Welcome back, John</div>
      <button style={{ backgroundColor: 'blue' }}>Save</button>
    </div>
  )
}

// ❌ BAD: Magic numbers and strings
if (items.length > 5) { ... } // What is 5? Why 5?
const apiUrl = 'https://api.example.com/v1' // Hardcoded in code

// ❌ BAD: Inline styles
<div style={{ margin: '20px', padding: '10px' }}>Content</div>

// ❌ BAD: Repeated code patterns
<button className="bg-blue-500 hover:bg-blue-600 px-4 py-2">Save</button>
<button className="bg-blue-500 hover:bg-blue-600 px-4 py-2">Submit</button>
<button className="bg-blue-500 hover:bg-blue-600 px-4 py-2">Update</button>
```

## ✅ What TO Do (Best Practices)

```tsx
// ✅ GOOD: Config-driven with reusable components
// config/dashboard.ts
export const DASHBOARD_CONFIG = {
  title: "User Dashboard",
  welcomeMessage: "Welcome back",
  maxItemsPerPage: 5,
} as const;

// components/ui/Button.tsx
export function Button({ variant = "primary", children, ...props }) {
  return (
    <button className={buttonVariants({ variant })} {...props}>
      {children}
    </button>
  );
}

// app/dashboard/page.tsx
import { DASHBOARD_CONFIG } from "@/config/dashboard";
import { Button } from "@/components/ui/Button";

export default function Dashboard({ user }) {
  return (
    <div>
      <h1>{DASHBOARD_CONFIG.title}</h1>
      <WelcomeMessage message={DASHBOARD_CONFIG.welcomeMessage} user={user} />
      <Button variant="primary">Save</Button>
    </div>
  );
}

// ✅ GOOD: Small, composable components
// components/layout/Container.tsx
export function Container({ children, size = "default" }) {
  return <div className={containerVariants({ size })}>{children}</div>;
}

// ✅ GOOD: Configuration over hardcoding
// data/config.ts
export const LAYOUT_CONFIG = {
  maxWidth: {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
  },
  spacing: {
    section: "space-y-8",
    container: "px-4 sm:px-6 py-8 sm:py-12",
  },
} as const;

// ✅ GOOD: Type-safe constants
export const API_ENDPOINTS = {
  users: "/api/users",
  posts: "/api/posts",
  comments: "/api/comments",
} as const;

// ✅ GOOD: Reusable utility functions
// lib/utils.ts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## 📁 Project Structure

```
/app                  - Next.js app directory (pages & routes)
  /api               - API routes
  /blog              - Blog listing
  /[category]        - Dynamic category pages
  /thoughts          - Thoughts listing
  /weeklogs          - Weekly logs

/components          - React components
  /blog             - Blog-specific components
  /layout           - Layout components (Header, Footer, Container)
  /list             - List & card components
  /mdx              - MDX rendering components
  /theme            - Theme switching
  /ui               - Reusable UI primitives

/config             - Configuration files
  fonts.ts          - Font configuration

/content            - MDX content files
  /blogs            - Blog post MDX files

/data               - Site data & configuration
  config.ts         - Main site configuration

/lib                - Utility functions & helpers
  blog.ts           - Blog utilities
  content.ts        - Content fetching & parsing
  contentConfig.ts  - Content configuration
  frontmatter.ts    - Frontmatter parsing
  fonts.ts          - Font utilities

/public             - Static assets (images, fonts, etc.)
```

## 🎨 Styling Conventions

- **Framework**: Tailwind CSS v4
- **Class merging**: Use `cn()` utility for conditional and merged classes
- **Colors**: Define color schemes in config files, reference via Tailwind classes
- **Theming**: Use CSS variables for theme-dependent values
- **Approach**: Prefer Tailwind utility classes over custom CSS

## 🔧 Configuration Pattern

Every feature should have its configuration externalized:

```tsx
// data/config.ts - Main site configuration
export const LAYOUT_CONFIG = {
  /* layout settings */
};
export const NAVIGATION_CONFIG = {
  /* navigation items */
};
export const FOOTER_CONFIG = {
  /* footer content */
};

// config/fonts.ts - Font configuration
export const FONT_CONFIG = {
  /* font definitions */
};

// lib/contentConfig.ts - Content configuration
export const CONTENT_CONFIG = {
  /* content types & settings */
};
```

**Pattern**: Configuration lives in dedicated files, components consume from imports.

## 📝 Component Guidelines

1. **Keep components small** - Single responsibility principle
2. **Make them reusable** - Accept props for customization
3. **Use TypeScript** - Define proper types for all props
4. **Export types** - Make component interfaces available to consumers
5. **Document complex logic** - Add comments where behavior is non-obvious

## 🐛 Debugging & Verification

- **Type checking**: `bun tsc --noEmit` - Catch type errors without emitting files
- **Code quality**: `bun run lint` - Catch code issues and style violations
- **Production readiness**: `bun run build` - Verify build succeeds before deployment
- **Development**: Use the dev server for quick iteration and testing

## 📦 Dependencies

**Before adding a new dependency:**

1. Verify the functionality doesn't already exist in the project
2. Prefer smaller, focused packages over large frameworks
3. Check that the package is actively maintained
4. Consider the bundle size impact
5. Install with `bun add <package>`

## 🚀 Performance

**Optimization Guidelines:**

- Use `next/image` component for all images
- Implement lazy loading for below-the-fold content
- Monitor and minimize bundle size
- Prefer static generation (SSG) over server rendering (SSR) where possible
- Cache appropriately (leverage Next.js automatic caching)

## 🔑 Key Principles

1. **DRY (Don't Repeat Yourself)** - Extract and reuse common patterns
2. **KISS (Keep It Simple, Stupid)** - Simplicity over cleverness
3. **YAGNI (You Aren't Gonna Need It)** - Build what's needed now, not what might be needed
4. **Composition over Inheritance** - Build complex UIs from small, focused components
5. **Configuration over Code** - Make behavior configurable rather than hardcoded

---
