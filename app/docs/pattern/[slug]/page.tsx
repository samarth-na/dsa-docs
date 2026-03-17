import { redirect } from "next/navigation";
import fs from "node:fs";
import path from "node:path";

const PATTERNS_DIR = path.join(process.cwd(), "docs", "questions", "patterns");

export function generateStaticParams() {
  try {
    const files = fs.readdirSync(PATTERNS_DIR);
    return files
      .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
      .map((file) => ({ slug: file.replace(/\.mdx?$/, "") }));
  } catch {
    return [];
  }
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function LegacyPatternPage({ params }: Props) {
  const { slug } = await params;
  redirect(`/docs/questions/patterns/${slug}`);
}
