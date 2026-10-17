import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Clock,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { blogPosts } from "@/content/blog";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/content/site";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | Health Guides | Nutri Wellness`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <PageHero
        title={post.title}
        subtitle={`${post.category} • ${post.readTime} • Published on ${post.date}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Health Guides", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="section-padding bg-[#F8F6F0] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E9E1] shadow-xl">
            {/* Article Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-[#E2E9E1]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#EFF6F0] text-[#176B60] border border-[#B9D8B1]/60 font-heading font-bold flex items-center justify-center text-sm shadow-2xs">
                  AD
                </div>
                <div>
                  <p className="font-heading font-bold text-sm text-[#233B36]">
                    {post.author}
                  </p>
                  <p className="text-xs text-[#57756E] font-medium">
                    Founder & Chief Wellness Expert, Nutri Wellness
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#EFF6F0] text-[#176B60] border border-[#B9D8B1]/60 shadow-2xs">
                  {post.category}
                </span>
                <span className="text-xs text-[#57756E] flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#E8B77B]" />
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none text-[#38524C] leading-relaxed space-y-6">
              {post.content.split("\n\n").map((block, idx) => {
                if (block.startsWith("## ")) {
                  return (
                    <h2
                      key={idx}
                      className="text-2xl sm:text-3xl font-heading font-bold text-[#233B36] mt-10 mb-4 pt-4 border-t border-[#E2E9E1]"
                    >
                      {block.replace("## ", "")}
                    </h2>
                  );
                }
                if (block.startsWith("### ")) {
                  return (
                    <h3
                      key={idx}
                      className="text-xl font-heading font-bold text-[#176B60] mt-6 mb-3"
                    >
                      {block.replace("### ", "")}
                    </h3>
                  );
                }
                if (block.startsWith("- ") || block.startsWith("1. ")) {
                  const items = block.split("\n");
                  return (
                    <ul key={idx} className="space-y-2.5 my-4 pl-2">
                      {items.map((it, i) => {
                        const cleanItem = it.replace(/^[-*]|\d+\.\s*/, "").trim();
                        return (
                          <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base">
                            <CheckCircle2 className="w-4 h-4 text-[#176B60] shrink-0 mt-1" />
                            <span className="font-medium text-[#38524C]">{cleanItem}</span>
                          </li>
                        );
                      })}
                    </ul>
                  );
                }
                return (
                  <p key={idx} className="text-base sm:text-lg leading-relaxed text-[#38524C] font-normal">
                    {block}
                  </p>
                );
              })}
            </div>

            {/* Author Card Box */}
            <div className="mt-14 p-8 rounded-3xl bg-[#EFF6F0] border border-[#B9D8B1]/60 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-[#176B60] text-white font-heading font-bold text-2xl flex items-center justify-center shrink-0 shadow-md">
                AD
              </div>
              <div className="text-center sm:text-left flex-1">
                <span className="text-xs font-bold text-[#176B60] uppercase tracking-wider">
                  Written by
                </span>
                <h4 className="text-xl font-heading font-bold text-[#233B36] mt-0.5 mb-1">
                  {siteConfig.founder.name}
                </h4>
                <p className="text-xs text-[#57756E] mb-3 font-semibold">
                  {siteConfig.founder.title} • {siteConfig.founder.role}
                </p>
                <p className="text-[#38524C] text-xs leading-relaxed font-medium">
                  {siteConfig.founder.bio}
                </p>
              </div>
            </div>

            {/* Bottom Navigation & Share */}
            <div className="mt-10 pt-8 border-t border-[#E2E9E1] flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#176B60] hover:text-[#0F4C43]"
              >
                <ArrowLeft className="w-4 h-4 text-[#E8B77B]" />
                Back to All Health Guides
              </Link>

              <Link
                href="/book-consultation"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-white text-xs font-semibold hover:bg-primary-dark transition-all shadow-md group"
              >
                Discuss with Dr. Anusha
                <ArrowRight className="w-3.5 h-3.5 text-[#E8B77B] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-[#E2E9E1]">
              <h3 className="text-xl font-heading font-bold text-[#233B36] mb-6">
                Recommended Related Reading
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="p-6 rounded-3xl bg-white border border-[#E2E9E1] hover:border-primary/40 transition-all hover:shadow-md group block"
                  >
                    <span className="text-xs font-bold text-[#176B60] mb-2 block uppercase tracking-wider">
                      {related.category}
                    </span>
                    <h4 className="font-heading font-bold text-base text-[#233B36] group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {related.title}
                    </h4>
                    <p className="text-[#38524C] text-xs line-clamp-2 font-medium">
                      {related.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
