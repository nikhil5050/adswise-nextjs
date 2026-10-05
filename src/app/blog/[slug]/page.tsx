import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import RelatedLinks from "@/components/templates/RelatedLinks";
import { blogs, type Blog } from "@/data/blogs";
import { pageMetadata } from "@/lib/seo/metadata";
import { blogLinks, serviceLinks } from "@/lib/seo/links";
import { articleLd, breadcrumbLd, isoDate } from "@/lib/seo/schema";

/** Services a post's category most naturally leads readers to. */
function servicesFor(post: Blog) {
  const c = post.category.toLowerCase();
  if (c.includes("seo")) return ["search-engine-optimization", "website-development"];
  if (c.includes("social")) return ["social-media-marketing", "video-production"];
  if (c.includes("brand")) return ["brand-development", "graphics-designing"];
  if (c.includes("advertis")) return ["performance-marketing", "media-buying-planning"];
  return ["strategy-consulting", "performance-marketing", "search-engine-optimization"];
}

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug === slug);
  if (!post) return {};

  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
    publishedTime: isoDate(post.date),
    keywords: post.tags,
  });
}

export default async function BlogDetailPage({ params }: Params) {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug === slug);
  if (!post) notFound();
  const path = `/blog/${post.slug}`;
  const more = blogs.filter((b) => b.slug !== post.slug && b.category === post.category).slice(0, 3);

  return (
    <article className="bg-background">
      <JsonLd
        data={[
          articleLd({
            type: "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            path,
            image: post.image,
            datePublished: isoDate(post.date),
            section: post.category,
            keywords: post.tags,
          }),
          breadcrumbLd([
            { name: "Blog", path: "/blog" },
            { name: post.title, path },
          ]),
        ]}
      />
      <section className="px-6 pb-12 pt-40 md:px-10 md:pb-16 md:pt-52">
        <div className="mx-auto max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-muted">
            {post.category} · {post.date} · {post.readTime}
          </span>
          <h1 className="mt-4 font-display text-4xl leading-tight text-ink md:text-6xl">{post.title}</h1>
        </div>
      </section>

      <div className="relative mx-auto aspect-[16/9] max-w-5xl overflow-hidden rounded-2xl px-6 md:px-10">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
      </div>

      <section className="px-6 py-16 md:px-10">
        <div
          className="prose prose-invert mx-auto max-w-3xl prose-headings:font-display prose-a:text-growth"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>

      <RelatedLinks title="Services That Can Help" links={serviceLinks(servicesFor(post))} />
      <RelatedLinks title="Keep Reading" links={blogLinks(more.map((b) => b.slug))} />
    </article>
  );
}
