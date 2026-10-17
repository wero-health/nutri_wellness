"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Activity,
  Sparkles,
  HeartHandshake,
  ArrowRight,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    step: "01",
    icon: FileText,
    title: "Comprehensive Health History",
    subtitle: "Understanding Your Unique Story",
    description:
      "We dive deep into your medical timeline, environmental exposures, sleep patterns, emotional stress factors, and diet to uncover where imbalances originally began.",
  },
  {
    step: "02",
    icon: Activity,
    title: "Advanced Functional Diagnostics",
    subtitle: "Precision Biomarkers & Genomics",
    description:
      "State-of-the-art testing including comprehensive gut microbiome sequencing (GI-MAP), DUTCH hormone metabolites, genetic markers, and nutrient absorption assessments.",
  },
  {
    step: "03",
    icon: Sparkles,
    title: "Targeted Root-Cause Protocol",
    subtitle: "Tailored Specifically to You",
    description:
      "Dr. Anusha creates an individualized medical strategy: personalized therapeutic nutrition, medical-grade nutraceuticals, and circadian lifestyle alignment.",
  },
  {
    step: "04",
    icon: HeartHandshake,
    title: "Ongoing Guidance & Vitality",
    subtitle: "Sustainable, Lasting Healing",
    description:
      "Regular check-ins, biomarker re-evaluations, and iterative adjustments to ensure sustainable recovery, vibrant energy, and disease prevention for life.",
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden" id="our-process">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#B9D8B1]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="How We Work"
          title="The Functional Medicine Journey"
          subtitle="A systematic, science-backed approach designed to get to the root of your symptoms and build lifelong cellular vitality."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Animated connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-1 bg-[#EFF6F0] -translate-y-12 z-0 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-[#176B60] via-[#B9D8B1] to-[#176B60]"
            />
          </div>

          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="relative z-10 flex flex-col h-full bg-[#F8F6F0] rounded-3xl p-6 sm:p-7 border border-[#E2E9E1] hover:border-[#176B60]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#176B60]/5 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#EFF6F0] text-[#176B60] flex items-center justify-center group-hover:bg-[#176B60] group-hover:text-white transition-all duration-300 shadow-sm group-hover:scale-105 border border-[#B9D8B1]/30">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-3xl font-heading font-extrabold text-[#57756E]/30 group-hover:text-[#176B60]/30 transition-colors">
                    {item.step}
                  </span>
                </div>

                <span className="text-xs font-semibold text-[#176B60] uppercase tracking-wider mb-1">
                  {item.subtitle}
                </span>

                <h3 className="text-lg font-heading font-bold text-[#233B36] mb-3 group-hover:text-[#176B60] transition-colors">
                  {item.title}
                </h3>

                <p className="text-[#38524C] text-sm leading-relaxed mt-auto font-normal">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 text-center"
        >
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#176B60] text-white text-base font-heading font-bold rounded-full hover:bg-[#0F4C43] transition-all duration-200 shadow-lg shadow-[#176B60]/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Calendar className="w-5 h-5 text-[#E8B77B]" />
            <span>Begin Step 01: Schedule Your Intake</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
