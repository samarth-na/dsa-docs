"use client";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-soft)] bg-[var(--bg-sidebar)] px-4 py-5 text-center text-[12px] text-[var(--text-secondary)]">
      <p className="mb-1">
        Data Source:{" "}
        <a
          href="https://github.com/namanarora2707/SAGE_6thSem_Section_B"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--brand-2)] underline underline-offset-2 transition hover:opacity-80"
        >
          github.com/namanarora2707/SAGE_6thSem_Section_B
        </a>
      </p>
      <p>
        All material is ported from namanarora&apos;s publicly sourced repository and is published under GPL license.
      </p>
    </footer>
  );
}
