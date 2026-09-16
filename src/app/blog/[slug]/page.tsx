import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, images: [post.image] },
  };
}

export default async function BlogDetailPage({ params }: Params) {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="bg-background">
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
          className="prose prose-invert mx-auto max-w-3xl prose-headings:font-display prose-a:text-sand"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>
    </article>
  );
}
