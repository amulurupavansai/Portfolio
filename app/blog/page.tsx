import type { Metadata } from "next";
import Link from "next/link";
import SubHeader from "@/components/SubHeader";
import SubFooter from "@/components/SubFooter";
import { getPosts, formatDate } from "@/lib/blog";
import { blog, site, skipLink } from "@/data/content";

export const metadata: Metadata = {
  title: blog.title,
  description: blog.description,
  alternates: { canonical: "/blog" },
  openGraph: { images: ["/og.png"], url: `${site.url}/blog`, title: blog.title, description: blog.description },
};

export default function BlogIndex() {
  const posts = getPosts();
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-3 focus:py-2 focus:text-bg">{skipLink}</a>
      <SubHeader />
      <main id="main" className="pad py-16 md:py-24">
        <h1 className="display text-6xl sm:text-8xl">{blog.title}</h1>
        <p className="mt-6 max-w-xl text-lg text-muted">{blog.teaser}</p>
        {posts.length === 0 ? <p className="mt-12">{blog.empty}</p> : (
          <ul className="mt-16 border-t border-ink">
            {posts.map((p) => (
              <li key={p.slug} className="border-b border-line">
                <Link href={`/blog/${p.slug}`} className="grid gap-3 py-8 md:grid-cols-12">
                  <time dateTime={p.date} className="label text-muted md:col-span-3">{formatDate(p.date)}</time>
                  <span className="md:col-span-9">
                    <span className="display block text-3xl sm:text-4xl">{p.title}</span>
                    <span className="mt-3 block max-w-2xl text-muted">{p.description}</span>
                    <span className="label mt-4 block">{blog.readPost}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
      <SubFooter />
    </>
  );
}
