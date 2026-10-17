"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  Search,
  MessageCircle,
  Calendar,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { faqs } from "@/content/faqs";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Clear answers about Functional Medicine, diagnostic testing, nutritional counseling, and starting your health journey."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQs" },
        ]}
      />

      <section className="section-padding bg-[#F8F6F0] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="relative mb-12">
            <input
              type="text"
              placeholder="Search health questions, functional medicine, testing..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-[#E2E9E1] bg-white text-base text-[#233B36] placeholder:text-[#57756E] focus:ring-2 focus:ring-primary/20 focus:border-primary outline-hidden shadow-xs font-medium"
            />
            <Search className="w-5 h-5 text-[#57756E] absolute left-4 top-1/2 -translate-y-1/2" />
          </div>

          {/* FAQ Accordion List */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E9E1] shadow-md">
            {filteredFaqs.length > 0 ? (
              <FAQAccordion items={filteredFaqs} />
            ) : (
              <div className="text-center py-12">
                <HelpCircle className="w-12 h-12 text-[#57756E] mx-auto mb-3" />
                <h3 className="font-heading font-bold text-[#233B36] text-lg mb-1">
                  No matching questions found
                </h3>
                <p className="text-[#57756E] text-sm mb-4 font-medium">
                  Have a specific question not covered here? Reach out directly.
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-primary text-sm font-semibold hover:underline"
                >
                  View all questions
                </button>
              </div>
            )}
          </div>

          {/* Contact Support Prompt Box */}
          <div className="mt-16 bg-gradient-to-br from-[#132622] via-[#176B60] to-[#162E29] text-white rounded-3xl p-8 sm:p-10 border border-[#176B60]/40 text-center shadow-xl">
            <Sparkles className="w-8 h-8 text-[#E8B77B] mx-auto mb-3" />
            <h3 className="text-xl font-heading font-bold text-white mb-2">
              Have More Questions for Dr. Anusha Dasari?
            </h3>
            <p className="text-[#F8F6F0]/85 text-sm max-w-md mx-auto mb-6 font-medium">
              Every individual is unique. We are happy to discuss how our root-cause medical programs can be tailored to your symptoms.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book-consultation"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#176B60] text-sm font-semibold hover:bg-[#F8F6F0] transition-all shadow-md shadow-black/10"
              >
                <Calendar className="w-4 h-4 text-[#176B60]" />
                Schedule Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold border border-white/20 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#E8B77B]" />
                Contact Clinic Coordinator
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
