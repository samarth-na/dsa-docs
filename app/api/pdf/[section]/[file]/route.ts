import fs from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

type Props = {
  params: Promise<{ section: string; file: string }>;
};

const ALLOWED = new Set(["notes", "Placement"]);
const ROOT_MARKERS = ["roadmap.md", "question_catalog.csv", "leetcode_questions.csv"];

function hasMarkers(dir: string): boolean {
  return ROOT_MARKERS.every((marker) => fs.existsSync(path.join(dir, marker)));
}

function resolveDocsRoot(): string {
  const candidates = [
    path.join(process.cwd(), "data", "docs"),
    path.join(process.cwd(), "data"),
    path.join(process.cwd(), "docs")
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isDirectory() && hasMarkers(candidate)) {
      return candidate;
    }
  }

  for (const candidate of candidates) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isDirectory()) {
      return candidate;
    }
  }

  return path.join(process.cwd(), "docs");
}

function decode(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export async function GET(_req: Request, { params }: Props) {
  const { section, file } = await params;
  const decodedSection = decode(section);
  const decodedFile = decode(file);

  if (!ALLOWED.has(decodedSection) || decodedFile.includes("..")) {
    return NextResponse.json({ error: "Invalid file request" }, { status: 400 });
  }

  const baseDocs = resolveDocsRoot();
  const absolutePath = path.join(baseDocs, decodedSection, decodedFile);

  if (!fs.existsSync(absolutePath)) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  const data = fs.readFileSync(absolutePath);
  const headers = new Headers();
  headers.set("Content-Type", "application/pdf");
  headers.set("Content-Disposition", `inline; filename="${decodedFile}"`);
  headers.set("Cache-Control", "public, max-age=3600");

  return new NextResponse(data, { status: 200, headers });
}
