"use client";

import { useEffect, useState } from "react";
import posthog from "posthog-js";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const rootTheme = document.documentElement.getAttribute("data-theme");
    if (rootTheme === "dark" || rootTheme === "light") {
      return rootTheme;
    }

    const storedTheme = window.localStorage.getItem(STORAGE_KEY);
    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }

    return getSystemTheme();
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const handleToggle = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
    posthog.capture("theme_toggled", { theme: nextTheme });
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="rounded-md border border-[var(--border-soft)] bg-[var(--bg-surface)] px-3 py-1 text-xs font-medium text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
      aria-label="Toggle theme"
    >
      <span suppressHydrationWarning>{`Theme: ${theme === "dark" ? "Dark" : "Light"}`}</span>
    </button>
  );
}
