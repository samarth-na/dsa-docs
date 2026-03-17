# Mobile Responsiveness Implementation Plan

## Overview
Make the DSA docs site fully responsive for mobile usage with hamburger menu and TOC handling.

## Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1023px  
- **Desktop**: ≥ 1024px
- **Wide**: ≥ 1280px

## Current Issues

| Component | Issue |
|-----------|-------|
| Left Sidebar | Hidden on mobile (`lg:block`), no mobile menu |
| Right Sidebar (TOC) | Hidden on mobile (`xl:block`) |
| TopNav | "Menu" button was a dead link |
| Main Content | Single column but needed proper padding |

---

## Implementation Completed

### 1. TopNav (`components/docs/top-nav.tsx`)

**Changes:**
- Replaced "Menu" text with hamburger icon (SVG)
- Added `isMenuOpen` and `onMenuToggle` props
- Hamburger visible at `< md` breakpoint
- Added `aria-label` and `aria-expanded` for accessibility

### 2. SidebarNav (`components/docs/sidebar-nav.tsx`)

**Changes:**
- Added `isOpen` and `onClose` props
- Desktop: `lg:block` (kept as-is)
- Mobile: renders as fixed drawer with backdrop overlay

**Mobile Drawer:**
- Position: fixed, left-0, top-0
- Width: 280px (or 80vw max)
- Height: 100vh
- Z-index: 50
- Background: `var(--bg-sidebar)`
- Animation: slide-in from left using CSS transform

**Backdrop Overlay:**
- Position: fixed, inset-0
- Background: black/50%
- Z-index: 40
- Click to close

### 3. DocsShell (`components/docs/docs-shell.tsx`)

**Changes:**
- Added `useState` for menu open/close
- Added `useEffect` to close menu on route change
- Passes `isMenuOpen` and `setIsMenuOpen` to TopNav and SidebarNav
- Added backdrop overlay

### 4. TocNav (`components/docs/toc-nav.tsx`)

**Changes:**
- Desktop: `xl:block` (kept as-is)
- Mobile: renders as inline collapsible at top of content

**Mobile Implementation:**
- Shows "On this page" as clickable header
- Collapse/expand on click
- Default: collapsed on mobile

---

## Component Flow

```
DocsShell
├── TopNav (props: isMenuOpen, onMenuToggle)
├── Backdrop overlay (when menu open)
├── SidebarNav (props: isOpen, onClose)
│   └── Mobile: Fixed drawer with backdrop
├── Main Content
│   └── TocNav (mobile: inline collapsible)
└── TocNav (desktop only: xl:block)
```

---

## Files Modified

- `components/docs/top-nav.tsx`
- `components/docs/sidebar-nav.tsx`
- `components/docs/toc-nav.tsx`
- `components/docs/docs-shell.tsx`

**No new files needed** - reused existing components with props

---

## Features Implemented

1. **Hamburger menu** - Toggles sidebar drawer on mobile
2. **Slide-out drawer** - Smooth animation from left
3. **Backdrop overlay** - Click to close
4. **Route change handling** - Menu closes on navigation
5. **TOC collapsible** - Expandable on mobile
6. **Accessibility** - aria-label, aria-expanded on hamburger
