import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SubHeader from "@/components/SubHeader";
import SubFooter from "@/components/SubFooter";
import { getPost, getPosts, formatDate } from "@/lib/blog";
import { blog, site, skipLink } from "@/data/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  const { title, description, date, tags, slug } = post.meta;
  return {
    title,
    description,
    keywords: tags,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { images: ["/og.png"], type: "article", url: `${site.url}/blog/${slug}`, title, description, publishedTime: date, authors: [site.name] },
    twitter: { title, description, images: ["/og.png"] },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();
  const { meta, html } = post;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    author: { "@type": "Person", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/blog/${meta.slug}`,
    keywords: meta.tags.join(", "),
  };
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-3 focus:py-2 focus:text-bg">{skipLink}</a>
      <SubHeader />
      <main id="main" className="pad py-16 md:py-24">
        <Link href="/blog" className="label inline-flex min-h-[44px] items-center text-muted underline-offset-4 hover:underline">{blog.allPosts}</Link>
        <article className="mt-6 max-w-3xl">
          <p className="label text-muted">
            <time dateTime={meta.date}>{formatDate(meta.date)}</time> · {meta.readingMinutes} {blog.minRead}
          </p>
          <h1 className="display mt-4 text-4xl sm:text-6xl">{meta.title}</h1>
          <div className="prose-post mt-12" dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </main>
      <SubFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
