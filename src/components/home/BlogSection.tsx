"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar, Sparkles } from "lucide-react";
import { blogPosts } from "@/content/blog";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BlogSection() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-[#EFF6F0] relative overflow-hidden" id="health-guides">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            badge="Health Guides & Insights"
            title="Evidence-Based Wellness Knowledge"
            subtitle="Articles and clinical perspectives on gut health, metabolic vitality, nutrition, and disease prevention."
            align="left"
            className="mb-0"
          />

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-heading font-bold text-primary hover:text-primary-dark group shrink-0"
          >
            Explore All Guides
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#E8B77B]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => {
            return (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl overflow-hidden border border-[#E2E9E1] hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col group"
              >
                {/* Visual Header */}
                <div className="h-56 relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover group-hover:scale-106 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#132622]/80 via-[#132622]/25 to-transparent" />

                  {/* Badges Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/95 text-primary backdrop-blur-md shadow-xs border border-[#E2E9E1]">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-[#132622]/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      <Clock className="w-3 h-3 text-[#E8B77B]" />
                      {post.readTime}
                    </span>
                  </div>

                  {post.featured && (
                    <div className="absolute bottom-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#E8B77B] bg-[#132622]/70 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-[#E8B77B]/30">
                        <Sparkles className="w-3 h-3 text-[#E8B77B]" /> Featured Article
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-7 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-[#57756E] mb-3 font-semibold">
                      <span className="flex items-center gap-1.5 text-[#38524C]">
                        <Calendar className="w-3.5 h-3.5 text-[#E8B77B]" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="text-[#38524C]">By {post.author}</span>
                    </div>

                    <h3 className="text-lg font-heading font-bold text-[#233B36] mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-[#38524C] text-xs sm:text-sm line-clamp-2 leading-relaxed mb-6 font-medium">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E2E9E1] flex items-center justify-between">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark transition-colors group/link"
                    >
                      Read Full Article
                      <ArrowRight className="w-3.5 h-3.5 text-[#176B60] transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    <span className="text-xs text-[#57756E] font-semibold">Evidence-Based</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
