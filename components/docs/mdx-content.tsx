import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import path from "node:path";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import type { AnchorHTMLAttributes, HTMLAttributes } from "react";
import { toPublicPath } from "@/lib/public-paths";

type Props = {
  source: string;
  linkBasePath: string;
};

function resolveDocsRelative(target: string, linkBasePath: string): string {
  const base = linkBasePath.replace(/^\/docs\/?/, "");
  const normalizedBase = base.startsWith("/") ? base : `/${base}`;
  const baseDir = path.posix.extname(normalizedBase)
    ? path.posix.dirname(normalizedBase)
    : normalizedBase;
  const resolved = path.posix.normalize(path.posix.join(baseDir, target));
  return resolved.replace(/^\//, "");
}

function normalizeDocHref(href: string, linkBasePath: string): string {
  if (href.endsWith(".csv")) {
    const resolved = resolveDocsRelative(href, linkBasePath);
    const file = resolved.split("/").at(-1) ?? resolved;
    const docSlug = file.replace(/\.csv$/i, "");
    return toPublicPath(`/docs/${docSlug}`);
  }

  if (href.endsWith(".pdf")) {
    return href;
  }

  if (href.endsWith(".md") || href.endsWith(".mdx")) {
    const resolved = resolveDocsRelative(href, linkBasePath);
    const stripped = resolved.replace(/\.(md|mdx)$/i, "");
    if (stripped.endsWith("/index")) {
      const withoutIndex = stripped.replace(/\/index$/i, "");
        return toPublicPath(withoutIndex.startsWith("/") ? withoutIndex : `/docs/${withoutIndex.replace(/^\.\//, "")}`);
    }
    return toPublicPath(stripped.startsWith("/") ? stripped : `/docs/${stripped.replace(/^\.\//, "")}`);
  }

  if (href.startsWith("./") || href.startsWith("../")) {
    return href;
  }

  return href;
}

const mdxComponents = {
  h1: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="mb-6 text-[2rem] font-semibold tracking-[-0.02em] text-[var(--text-primary)] sm:text-[2.35rem] md:text-[2.8rem]"
      {...props}
    />
  ),
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-10 mb-4 border-t border-[var(--border-soft)] pt-7 text-[1.45rem] font-semibold tracking-[-0.02em] text-[var(--text-primary)] sm:text-[1.65rem] md:mt-12 md:pt-8 md:text-[1.85rem]"
      {...props}
    />
  ),
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mt-7 mb-3 text-[1.22rem] font-semibold tracking-tight text-[var(--text-primary)] sm:text-[1.3rem] md:mt-8 md:text-[1.38rem]"
      {...props}
    />
  ),
  p: (props: HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-5 text-[0.97rem] leading-7 text-[var(--text-primary)]/95 sm:text-[1rem] sm:leading-8" {...props} />
  ),
  ul: (props: HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-5 list-disc space-y-2 pl-6 text-[var(--text-primary)]/95" {...props} />
  ),
  ol: (props: HTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-5 list-decimal space-y-2 pl-6 text-[var(--text-primary)]/95" {...props} />
  ),
  li: (props: HTMLAttributes<HTMLLIElement>) => (
    <li className="text-[0.96rem] leading-7 sm:text-[1.02rem]" {...props} />
  ),
  code: ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
    const isBlockCode = Boolean(className && className.includes("language-"));

    if (isBlockCode) {
      return <code className={`${className ?? ""} hljs block font-mono`} {...props} />;
    }

    return (
      <code
        className="rounded-md border border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--bg-surface)_95%,black)] px-1.5 py-0.5 text-[0.9em] text-[var(--code-inline)]"
        {...props}
      />
    );
  },
  pre: (props: HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="mb-6 overflow-x-auto rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface)] p-4 text-sm text-[var(--text-primary)] sm:p-5"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-[var(--border-soft)]" />,
  table: (props: HTMLAttributes<HTMLTableElement>) => (
    <div className="mb-6 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm text-[var(--text-primary)]" {...props} />
    </div>
  ),
  th: (props: HTMLAttributes<HTMLTableCellElement>) => (
    <th className="border-b border-[var(--border-soft)] px-3 py-2 text-[var(--text-primary)]" {...props} />
  ),
  td: (props: HTMLAttributes<HTMLTableCellElement>) => (
    <td className="border-b border-[var(--border-soft)] px-3 py-2 text-[var(--text-secondary)]" {...props} />
  ),
};

export function MdxContent({ source, linkBasePath }: Props) {
  const components = {
    ...mdxComponents,
    a: ({ href = "", children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
      const mappedHref = normalizeDocHref(href, linkBasePath);
      const isExternal = href.startsWith("http://") || href.startsWith("https://");
      const className =
        "text-[var(--brand-1)] underline decoration-[color-mix(in_srgb,var(--brand-1)_40%,transparent)] underline-offset-4 hover:text-[var(--brand-2)]";

      if (isExternal) {
        return (
          <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...props}>
            {children}
          </a>
        );
      }

      if (mappedHref.endsWith(".pdf")) {
        return (
          <a href={mappedHref} className={className} target="_blank" rel="noopener noreferrer" {...props}>
            {children}
          </a>
        );
      }

      return (
        <Link href={mappedHref} className={className} {...props}>
          {children}
        </Link>
      );
    }
  };

  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeSlug, rehypeHighlight]
        }
      }}
    />
  );
}
