"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, CheckCircle2, ArrowRight } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";

const filterCategories = [
  "All",
  "Functional Medicine",
  "Gut Health",
  "Precision Medicine",
  "Nutrition & Wellness",
];

export function TestimonialsSection() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredTestimonials =
    selectedFilter === "All"
      ? testimonials
      : testimonials.filter((t) => t.service === selectedFilter);

  return (
    <section className="section-padding bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden" id="patient-stories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Patient Success Stories"
          title="Transforming Lives Through Root-Cause Care"
          subtitle="Real experiences from patients who took charge of their health and found lasting vitality with Dr. Anusha Dasari."
          align="center"
        />

        {/* Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                selectedFilter === cat
                  ? "bg-primary text-white shadow-md shadow-primary/20 scale-105"
                  : "bg-white text-body hover:bg-secondary/60 hover:text-primary border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredTestimonials.slice(0, 6).map((item, index) => (
              <motion.div
                key={item.name + item.service}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-3xl p-7 border border-border/80 shadow-lg shadow-black/[0.02] flex flex-col justify-between hover:shadow-xl hover:border-primary/20 transition-all duration-300 relative group"
              >
                <div className="absolute top-6 right-6 text-secondary group-hover:text-primary/10 transition-colors">
                  <Quote className="w-10 h-10" />
                </div>

                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-body text-sm leading-relaxed mb-6 italic relative z-10">
                    "{item.text}"
                  </p>
                </div>

                {/* Patient Details & Service Tag */}
                <div className="pt-4 border-t border-border flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/15 to-accent/30 text-primary font-heading font-bold flex items-center justify-center text-sm">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-heading flex items-center gap-1.5">
                        {item.name}
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                      </h4>
                      <p className="text-xs text-muted">{item.location}</p>
                    </div>
                  </div>

                  {item.service && (
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-secondary text-primary shrink-0">
                      {item.service}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View all stories link */}
        <div className="mt-12 text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-200"
          >
            Read More Patient Reviews
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
