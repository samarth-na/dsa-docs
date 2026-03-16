import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import type { AnchorHTMLAttributes, HTMLAttributes } from "react";

type Props = {
  source: string;
};

function normalizeDocHref(href: string): string {
  if (href.endsWith(".csv")) {
    const file = href.split("/").at(-1) ?? href;
    const docSlug = file.replace(/\.csv$/i, "");
    return `/docs/${docSlug}`;
  }

  if (href.endsWith(".pdf")) {
    const decoded = decodeURIComponent(href);
    if (decoded.includes("/notes/") || decoded.startsWith("./notes/")) {
      const file = decoded.split("/").at(-1) ?? decoded;
      return `/api/pdf/notes/${encodeURIComponent(file)}`;
    }
    if (decoded.includes("/Placement/") || decoded.startsWith("./Placement/")) {
      const file = decoded.split("/").at(-1) ?? decoded;
      return `/api/pdf/Placement/${encodeURIComponent(file)}`;
    }
    return href;
  }

  if (href.endsWith(".md") || href.endsWith(".mdx")) {
    const stripped = href.replace(/\.(md|mdx)$/i, "");
    if (stripped.endsWith("/index")) {
      const withoutIndex = stripped.replace(/\/index$/i, "");
      return withoutIndex.startsWith("/") ? withoutIndex : `/docs/${withoutIndex.replace(/^\.\//, "")}`;
    }
    return stripped.startsWith("/") ? stripped : `/docs/${stripped.replace(/^\.\//, "")}`;
  }

  if (href.startsWith("./") || href.startsWith("../")) {
    return href;
  }

  return href;
}

const mdxComponents = {
  h1: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="mb-6 text-5xl font-semibold tracking-tight text-zinc-50" {...props} />
  ),
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-12 mb-4 border-t border-white/10 pt-8 text-4xl font-semibold tracking-tight text-zinc-100" {...props} />
  ),
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-8 mb-3 text-3xl font-semibold text-zinc-200" {...props} />
  ),
  p: (props: HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-5 text-[1.06rem] leading-8 text-zinc-300" {...props} />
  ),
  ul: (props: HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-5 list-disc space-y-2 pl-6 text-zinc-300" {...props} />
  ),
  ol: (props: HTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-5 list-decimal space-y-2 pl-6 text-zinc-300" {...props} />
  ),
  li: (props: HTMLAttributes<HTMLLIElement>) => <li className="leading-7 text-[1.02rem]" {...props} />,
  code: (props: HTMLAttributes<HTMLElement>) => (
    <code className="rounded-md border border-white/10 bg-[#161a22] px-1.5 py-0.5 text-[0.9em] text-[#8fa4ff]" {...props} />
  ),
  pre: (props: HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="mb-6 overflow-x-auto rounded-xl border border-[#202639] bg-[#0f1320] p-5 text-sm text-zinc-200"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-white/10" />,
  table: (props: HTMLAttributes<HTMLTableElement>) => (
    <div className="mb-6 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm text-zinc-300" {...props} />
    </div>
  ),
  th: (props: HTMLAttributes<HTMLTableCellElement>) => (
    <th className="border-b border-white/15 px-3 py-2 text-zinc-100" {...props} />
  ),
  td: (props: HTMLAttributes<HTMLTableCellElement>) => (
    <td className="border-b border-white/5 px-3 py-2" {...props} />
  ),
  a: ({ href = "", children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = href.startsWith("http://") || href.startsWith("https://");
    const mappedHref = normalizeDocHref(href);
    const className = "text-[#7f95ff] underline decoration-[#4657a8]/50 underline-offset-4 hover:text-[#a2b1ff]";

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

export function MdxContent({ source }: Props) {
  return (
    <MDXRemote
      source={source}
      components={mdxComponents}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeSlug]
        }
      }}
    />
  );
}
