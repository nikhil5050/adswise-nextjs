import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import RevealText from "@/components/animations/RevealText";
import { blogs } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on SEO, social media, branding and performance marketing from AdsWise Marketing.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <div className="bg-background">
      <section className="px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-52">
        <div className="mx-auto max-w-5xl">
          <RevealText
            as="h1"
            lines={["INSIGHTS"]}
            className="font-display text-5xl leading-tight text-ink md:text-8xl"
          />
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-expo-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <span className="text-xs uppercase tracking-widest text-muted">
                {post.category} · {post.date}
              </span>
              <h2 className="font-display text-xl text-ink transition-colors group-hover:text-sand">
                {post.title}
              </h2>
              <p className="text-sm text-muted">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
