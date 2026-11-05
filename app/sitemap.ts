import type { MetadataRoute } from "next";
import { site, work } from "@/data/content";
import { getPosts } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (p: string) => `${site.url}${p}`;
  return [
    { url: u("/"), changeFrequency: "monthly", priority: 1 },
    { url: u("/snapshot"), changeFrequency: "monthly", priority: 0.7 },
    { url: u("/blog"), changeFrequency: "monthly", priority: 0.7 },
    ...getPosts().map((p) => ({ url: u(`/blog/${p.slug}`), lastModified: p.date, priority: 0.6 })),
    ...work.caseStudies.map((c) => ({ url: u(`/work/${c.slug}`), changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
