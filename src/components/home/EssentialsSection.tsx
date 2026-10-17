"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Microscope,
  Dna,
  HeartPulse,
  Apple,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function EssentialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#EFF6F0] relative overflow-hidden" id="essentials">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#B9D8B1]/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Scientific Framework"
          title="Navigating Through Essentials"
          subtitle="Four core clinical pillars engineered to uncover root causes, optimize biomarkers, and build lifelong cellular vitality."
          align="center"
        />

        {/* Visual Editorial Bento Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">

          {/* Bento Card 1: Diagnostic Analytics (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="md:col-span-7 bg-white rounded-3xl p-8 border border-[#E2E9E1] hover:border-[#176B60]/40 hover:shadow-2xl hover:shadow-[#176B60]/5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-13 h-13 rounded-2xl bg-[#EFF6F0] text-[#176B60] flex items-center justify-center group-hover:bg-[#176B60] group-hover:text-white transition-colors duration-300 shadow-xs">
                  <Microscope className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#F8F6F0] border border-[#E2E9E1] text-[#176B60] shadow-2xs">
                  Pillar 01
                </span>
              </div>

              <span className="text-xs font-bold text-[#176B60] uppercase tracking-wider block mb-2">
                Deep Biomarker Screening
              </span>

              <h3 className="text-2xl font-heading font-bold text-[#233B36] mb-3 group-hover:text-[#176B60] transition-colors">
                Comprehensive Diagnostic Analytics
              </h3>

              <p className="text-[#38524C] text-sm leading-relaxed mb-6 max-w-lg">
                We go far beyond standard routine blood panels. By evaluating intracellular micronutrients,
                hormone metabolites, inflammatory markers, and organic acids, we identify physiological
                imbalances long before they develop into chronic illness.
              </p>

              {/* Animated Biomarker Progress Gauges - Teal & Gold Precision Pairing */}
              <div className="bg-[#F8F6F0] rounded-2xl p-4 sm:p-5 border border-[#E2E9E1] space-y-4 mb-6 shadow-2xs">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-[#233B36] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#176B60]" />
                      Intracellular Micronutrient Status
                    </span>
                    <span className="font-mono text-[#176B60] font-bold">Optimal Range (92%)</span>
                  </div>
                  <div className="w-full bg-[#EFF6F0] h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "92%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="bg-gradient-to-r from-[#176B60] to-[#B9D8B1] h-full rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-[#233B36] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C99452]" />
                      Systemic Inflammation Control (Hs-CRP)
                    </span>
                    <span className="font-mono text-[#C99452] font-bold">Low &amp; Quiet (96%)</span>
                  </div>
                  <div className="w-full bg-[#FDF6EC] h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "96%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 }}
                      className="bg-gradient-to-r from-[#C99452] to-[#E8B77B] h-full rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2E9E1] flex items-center justify-between">
              <Link
                href="/services/functional-medicine"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#233B36] group-hover:text-[#176B60] transition-colors"
              >
                Learn About Functional Diagnostics
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <span className="text-[11px] text-[#57756E] font-medium">Advanced Lab Profiles</span>
            </div>
          </motion.div>

          {/* Bento Card 2: Precision Genomics (5 Cols - Rich Image Card - Soft Gold Accent) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="md:col-span-5 rounded-3xl overflow-hidden relative border border-[#E2E9E1] hover:border-[#E8B77B]/60 hover:shadow-2xl hover:shadow-[#E8B77B]/10 transition-all duration-300 flex flex-col justify-between group min-h-[380px]"
          >
            {/* Background Image */}
            <Image
              src="/images/genomics-precision.jpg"
              alt="Precision Genomics and Cellular Longevity"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#132622]/95 via-[#132622]/65 to-[#132622]/35" />

            <div className="relative z-10 p-7 sm:p-8 flex items-center justify-between">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#132622]/75 backdrop-blur-md text-white border border-white/20 shadow-sm">
                Pillar 02
              </span>
              <span className="text-xs font-semibold text-[#E8B77B] bg-[#132622]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#E8B77B]/40 shadow-sm">
                Stanford Online Curriculum
              </span>
            </div>

            <div className="relative z-10 p-7 sm:p-8 text-white">
              <span className="text-xs font-bold text-[#E8B77B] uppercase tracking-wider block mb-1 drop-shadow-sm">
                Epigenetic Blueprint
              </span>
              <h3 className="text-2xl font-heading font-bold text-white mb-2 drop-shadow-md">
                Precision Genomics
              </h3>
              <p className="text-white/95 text-xs sm:text-sm leading-relaxed mb-4 font-medium drop-shadow-sm">
                Analyze single nucleotide polymorphisms (SNPs) to personalize liver detox pathways, drug metabolism, and lifelong disease prevention.
              </p>
              <Link
                href="/services/precision-medicine"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#E8B77B] transition-colors"
              >
                Explore Genomic Protocols
                <ArrowUpRight className="w-4 h-4 text-[#E8B77B]" />
              </Link>
            </div>
          </motion.div>

          {/* Bento Card 3: Gut Microbiome (5 Cols - Rich Image Card - Sage Green Accent) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="md:col-span-5 rounded-3xl overflow-hidden relative border border-[#E2E9E1] hover:border-[#B9D8B1]/60 hover:shadow-2xl hover:shadow-[#B9D8B1]/10 transition-all duration-300 flex flex-col justify-between group min-h-[380px]"
          >
            {/* Background Image */}
            <Image
              src="/images/microbiome-science.jpg"
              alt="Gut Microbiome Restoration Science"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#132622]/95 via-[#132622]/65 to-[#132622]/35" />

            <div className="relative z-10 p-7 sm:p-8 flex items-center justify-between">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#132622]/75 backdrop-blur-md text-white border border-white/20 shadow-sm">
                Pillar 03
              </span>
              <span className="text-xs font-semibold text-[#B9D8B1] bg-[#132622]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#B9D8B1]/40 shadow-sm">
                GI-MAP Stool DNA
              </span>
            </div>

            <div className="relative z-10 p-7 sm:p-8 text-white">
              <span className="text-xs font-bold text-[#B9D8B1] uppercase tracking-wider block mb-1 drop-shadow-sm">
                Digestive Ecosystem
              </span>
              <h3 className="text-2xl font-heading font-bold text-white mb-2 drop-shadow-md">
                Microbiome Restoration
              </h3>
              <p className="text-white/95 text-xs sm:text-sm leading-relaxed mb-4 font-medium drop-shadow-sm">
                Over 70% of immunity and 90% of serotonin reside in your gut. We target leaky gut, dysbiosis, and SIBO with the proven 4R Protocol.
              </p>
              <Link
                href="/services/gut-health"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#B9D8B1] transition-colors"
              >
                Explore Gut Health Protocols
                <ArrowUpRight className="w-4 h-4 text-[#B9D8B1]" />
              </Link>
            </div>
          </motion.div>

          {/* Bento Card 4: Therapeutic Nutrition (7 Cols - Split Visual Card) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="md:col-span-7 bg-white rounded-3xl overflow-hidden border border-[#E2E9E1] hover:border-[#176B60]/40 hover:shadow-2xl hover:shadow-[#176B60]/5 transition-all duration-300 grid grid-cols-1 sm:grid-cols-12 group"
          >
            <div className="sm:col-span-7 p-7 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#EFF6F0] text-[#176B60] flex items-center justify-center group-hover:bg-[#176B60] group-hover:text-white transition-colors duration-300 shadow-xs">
                    <Apple className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#F8F6F0] border border-[#E2E9E1] text-[#176B60] shadow-2xs">
                    Pillar 04
                  </span>
                </div>

                <span className="text-xs font-bold text-[#176B60] uppercase tracking-wider block mb-1">
                  Biochemical Fuel
                </span>

                <h3 className="text-2xl font-heading font-bold text-[#233B36] mb-3 group-hover:text-[#176B60] transition-colors">
                  Therapeutic Clinical Nutrition
                </h3>

                <p className="text-[#38524C] text-xs sm:text-sm leading-relaxed mb-4">
                  Food is biological information that speaks directly to your genes. We formulate bio-individual anti-inflammatory meal
                  protocols and medical-grade nutraceuticals to reverse fatigue and balance hormones.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {["Anti-Inflammatory", "Insulin Sensitivity", "Nutraceuticals"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#F8F6F0] border border-[#E2E9E1] text-[#233B36] shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2E9E1]">
                <Link
                  href="/services/nutrition-counseling"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#233B36] group-hover:text-[#176B60] transition-colors"
                >
                  Learn About Clinical Nutrition
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Right Column Image in Bento Card 4 */}
            <div className="sm:col-span-5 relative min-h-[200px] sm:min-h-full">
              <Image
                src="/images/cellular-nutrition.jpg"
                alt="Therapeutic Nutrition and Botanical Extracts"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
