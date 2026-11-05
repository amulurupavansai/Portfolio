import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  description: string;
  tags: string[];
  readingMinutes: number;
};

function read(file: string) {
  const slug = file.replace(/\.md$/, "");
  const { data, content } = matter(fs.readFileSync(path.join(DIR, file), "utf8"));
  const words = content.split(/\s+/).filter(Boolean).length;
  const meta: PostMeta = {
    slug,
    title: String(data.title),
    date: new Date(data.date).toISOString().slice(0, 10),
    description: String(data.description ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    readingMinutes: Math.max(1, Math.round(words / 200)),
  };
  return { meta, content };
}

export function getPosts(): PostMeta[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => read(f).meta)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string) {
  const file = `${slug}.md`;
  if (!fs.existsSync(path.join(DIR, file))) return null;
  const { meta, content } = read(file);
  return { meta, html: marked.parse(content, { async: false }) as string };
}

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
  });
}
