"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Clock,
  Calendar,
  BookOpen,
  ArrowRight,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { blogPosts, blogCategories } from "@/content/blog";

export default function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <>
      <PageHero
        title="Health Guides & Clinical Insights"
        subtitle="Educational articles, research updates, and practical lifestyle advice from Dr. Anusha Dasari."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Health Guides" },
        ]}
      />

      <section className="section-padding bg-[#F8F6F0] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post Hero Card (shown when not searching) */}
          {!searchQuery && selectedCategory === "All" && (
            <div className="mb-16">
              <span className="text-xs font-bold text-[#176B60] uppercase tracking-wider mb-4 block">
                Featured Guide
              </span>
              <div className="bg-white rounded-3xl overflow-hidden border border-[#E2E9E1] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 h-64 lg:h-full min-h-[280px] bg-gradient-to-br from-[#132622] via-[#176B60] to-[#162E29] relative p-8 flex flex-col justify-between">
                  <span className="inline-block px-3.5 py-1 rounded-full bg-white text-[#176B60] text-xs font-bold shadow-2xs w-fit border border-[#E2E9E1]">
                    {featuredPost.category}
                  </span>
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md text-[#E8B77B] border border-white/20 flex items-center justify-center">
                    <BookOpen className="w-8 h-8" />
                  </div>
                </div>

                <div className="lg:col-span-7 p-8 sm:p-10 lg:pl-0">
                  <div className="flex items-center gap-3 text-xs text-[#57756E] mb-3 font-semibold">
                    <span className="flex items-center gap-1.5 text-[#38524C]">
                      <Calendar className="w-3.5 h-3.5 text-[#E8B77B]" />
                      {featuredPost.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5 text-[#38524C]">
                      <Clock className="w-3.5 h-3.5 text-[#E8B77B]" />
                      {featuredPost.readTime}
                    </span>
                    <span>•</span>
                    <span className="text-[#38524C]">By {featuredPost.author}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#233B36] mb-4 hover:text-[#176B60] transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-[#38524C] text-base leading-relaxed mb-6 font-medium">
                    {featuredPost.excerpt}
                  </p>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-all shadow-md shadow-primary/20 group"
                  >
                    Read Complete Guide
                    <ArrowRight className="w-4 h-4 text-[#E8B77B] transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Search & Category Filter Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-8 border-b border-[#E2E9E1]">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "bg-white text-[#38524C] hover:bg-[#EFF6F0] border border-[#E2E9E1]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-[#E2E9E1] bg-white text-sm text-[#233B36] placeholder:text-[#57756E] focus:ring-2 focus:ring-primary/20 focus:border-primary outline-hidden font-medium"
              />
              <Search className="w-4 h-4 text-[#57756E] absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Articles Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#E2E9E1] p-8">
              <BookOpen className="w-12 h-12 text-[#57756E] mx-auto mb-4" />
              <h3 className="text-lg font-heading font-bold text-[#233B36] mb-2">
                No matching articles found
              </h3>
              <p className="text-[#57756E] text-sm mb-4 font-medium">
                Try searching for different keywords or select &quot;All&quot; categories.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="text-primary text-sm font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredPosts.map((post) => (
                  <motion.article
                    key={post.slug}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-3xl overflow-hidden border border-[#E2E9E1] hover:border-primary/40 transition-all duration-300 hover:shadow-xl flex flex-col group"
                  >
                    <div className="h-44 bg-gradient-to-br from-[#132622] via-[#176B60] to-[#162E29] relative p-6 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/95 text-primary shadow-2xs border border-[#E2E9E1]">
                          {post.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-white bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                          <Clock className="w-3 h-3 text-[#E8B77B]" />
                          {post.readTime}
                        </span>
                      </div>

                      <div className="w-10 h-10 rounded-2xl bg-white/10 text-[#E8B77B] border border-white/20 flex items-center justify-center">
                        <BookOpen className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-[#57756E] mb-3 font-semibold">
                          <Calendar className="w-3.5 h-3.5 text-[#E8B77B]" />
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>By {post.author}</span>
                        </div>

                        <h3 className="text-lg font-heading font-bold text-[#233B36] mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>

                        <p className="text-[#38524C] text-xs leading-relaxed line-clamp-3 mb-6 font-medium">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#E2E9E1] flex items-center justify-between">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-primary-dark transition-colors"
                        >
                          Read Article
                          <ArrowRight className="w-3.5 h-3.5 text-[#176B60] transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Newsletter Section */}
          <div className="mt-20 bg-gradient-to-br from-[#132622] via-[#176B60] to-[#162E29] text-white rounded-3xl p-8 sm:p-12 border border-[#176B60]/40 max-w-3xl mx-auto text-center shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#176B60] mx-auto flex items-center justify-center mb-4 shadow-md">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-white mb-2">
              Subscribe to Functional Medicine Insights
            </h3>
            <p className="text-[#F8F6F0]/85 text-sm max-w-md mx-auto mb-6 font-medium">
              Receive curated articles on gut health, hormone balance, and longevity science directly from Dr. Anusha Dasari.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-2xl bg-white border border-[#E2E9E1] inline-flex items-center gap-2 text-primary font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Thank you! You are subscribed to Dr. Anusha&apos;s wellness updates.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-full border border-white/20 bg-white/10 text-sm text-white placeholder:text-white/60 focus:ring-2 focus:ring-[#E8B77B] outline-hidden font-medium"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[#E8B77B] text-[#233B36] font-bold text-sm hover:bg-[#F4D4AA] transition-all shrink-0 shadow-md"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
