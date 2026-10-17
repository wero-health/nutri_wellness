"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Calendar,
  Check,
  Leaf,
  ShieldCheck,
  Dna,
} from "lucide-react";

const principles = [
  {
    title: "Identifies root causes of illness",
    desc: "Looks deep beneath downstream symptoms to uncover cellular, metabolic, and environmental triggers.",
  },
  {
    title: "Tailors treatments to individuals",
    desc: "Bio-individual protocols engineered for your unique DNA, microbiome diversity, and life history.",
  },
  {
    title: "Employs cutting-edge diagnostics",
    desc: "State-of-the-art multi-omics: GI-MAP DNA sequencing, DUTCH hormone panels, and Stanford genomics.",
  },
];

const credentialsTicker = [
  "Institute for Functional Medicine (IFMCP) Certified",
  "Stanford Online Personal Genomics Alum",
  "GI-MAP DNA Microbiome Sequencing",
  "DUTCH Complete Hormone Profiling",
  "MBBS, MD (Internal Medicine) • Senior Consultant, AIG Hospitals",
  "Personalized Therapeutic Clinical Nutrition",
  "Journalist Colony A, Jubilee Hills, Hyderabad",
  "Virtual Video Telehealth Consultations Across India",
];

export function TreeOfLifeSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8F6F0] relative overflow-hidden" id="the-tree-of-life">
      {/* Luxury Ambient Lighting Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-[-5%] w-[650px] h-[650px] bg-gradient-to-br from-[#176B60]/10 via-[#B9D8B1]/25 to-[#E8B77B]/15 rounded-full blur-[140px] animate-pulse-glow -z-10" />
        <div className="absolute bottom-10 left-[-10%] w-[600px] h-[600px] bg-[#EFF6F0] rounded-full blur-[140px] -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(#176B60_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Section Heading Banner */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFF6F0] text-[#176B60] text-xs font-bold uppercase tracking-wider mb-4 border border-[#B9D8B1]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#E8B77B]" />
            Principles of Functional Medicine
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#233B36] leading-[1.12] mb-4">
            The Tree of Life
          </h2>

          <p className="text-base sm:text-lg text-[#38524C] leading-relaxed font-normal">
            Functional Medicine innovatively addresses illness by pinpointing and tackling disease origins through advanced diagnostics. It prioritizes individual patient care over conventional disease-focused approaches, ensuring treatments are customized to each person&apos;s unique biochemistry and life experiences.
          </p>
        </div>

        {/* Tree of Life Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white rounded-[36px] p-6 sm:p-10 lg:p-12 border border-[#E2E9E1] shadow-2xl shadow-[#176B60]/5">

          {/* Left Column: Official Functional Tree Illustration with Ambient Halo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-center justify-center relative"
          >
            {/* Ambient Backlight for Tree */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#176B60]/15 via-[#B9D8B1]/25 to-transparent rounded-full blur-3xl opacity-80 pointer-events-none animate-pulse-glow" />

            {/* Tree Container with Gentle Floating Animation */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[500px] aspect-[1300/1500]"
            >
              <Image
                src="/images/Functional-Tree.webp"
                alt="The Functional Medicine Tree of Life - Official Framework by Nutri Wellness"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-contain drop-shadow-2xl hover:scale-102 transition-transform duration-700"
              />
            </motion.div>

            {/* Caption Indicator */}
            <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EFF6F0] border border-[#B9D8B1]/50 text-xs font-bold text-[#233B36] shadow-2xs">
              <Leaf className="w-4 h-4 text-[#176B60]" />
              <span>Roots: Genetics &amp; Nutrition • Trunk: Systems Biology • Foliage: Lifelong Health</span>
            </div>
          </motion.div>

          {/* Right Column: Principles Breakdown & Physician Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#176B60]" />
                <span className="w-2 h-2 rounded-full bg-[#E8B77B]" />
                <span className="text-xs font-bold text-[#176B60] uppercase tracking-wider">
                  Core Clinical Philosophy
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#233B36] leading-snug mb-5">
                Restoring Biological Balance from the Ground Up
              </h3>

              {/* 3 Core Checkmark Cards - Pure White & Sage Green Badges */}
              <div className="space-y-3.5 mb-8">
                {principles.map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-2xl bg-[#F8F6F0] border border-[#E2E9E1] flex items-start gap-3.5 hover:border-[#176B60]/40 hover:bg-white transition-all duration-200"
                  >
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-[#EFF6F0] text-[#176B60] border border-[#B9D8B1]/50 shadow-2xs">
                      <Check className="w-3.5 h-3.5 font-bold" />
                    </div>
                    <div>
                      <h4 className="text-sm font-heading font-bold text-[#233B36]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#38524C] font-medium mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
                <Link
                  href="/book-consultation"
                  id="tree-book-consultation-btn"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#176B60] text-white text-sm font-heading font-bold rounded-full hover:bg-[#0F4C43] transition-all duration-200 shadow-md shadow-[#176B60]/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Calendar className="w-4 h-4 text-[#E8B77B]" />
                  <span>Book Consultation with Dr. Anusha</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </Link>

                <Link
                  href="#essentials"
                  id="tree-explore-pillars-btn"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#233B36] text-sm font-heading font-bold rounded-full border border-[#E2E9E1] hover:bg-[#EFF6F0] hover:border-[#B9D8B1] hover:text-[#176B60] transition-all duration-200 shadow-2xs"
                >
                  <span>Explore 4 Pillars</span>
                </Link>
              </div>
            </div>

            {/* Physician Signature Card with Official IFM Logo */}
            <div className="pt-6 border-t border-[#E2E9E1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#F8F6F0] rounded-2xl p-4 sm:p-5 border border-[#E2E9E1] shadow-2xs">
              <div className="flex items-center gap-3.5">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#176B60]/30 shrink-0 shadow-sm bg-white">
                  <Image
                    src="/images/dr-dasari-anusha.png"
                    alt="Dr. Anusha Dasari - MD, Internal Medicine, IFMCP Certified"
                    fill
                    sizes="56px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="text-base font-heading font-bold text-[#233B36]">
                    Dr Anusha Dasari
                  </h4>
                  <p className="text-xs font-bold text-[#176B60]">
                    MBBS, MD (Internal Medicine)
                  </p>
                  <p className="text-xs font-semibold text-[#57756E]">
                    Senior Consultant, AIG Hospitals
                  </p>
                </div>
              </div>

              {/* IFM Certified Practitioner Badge */}
              <div className="self-end sm:self-center shrink-0">
                <div className="bg-white rounded-2xl p-1.5 border border-[#E2E9E1] shadow-2xs flex items-center justify-center">
                  <Image
                    src="/images/ifm-certified-badge.png"
                    alt="The Institute for Functional Medicine Certified Practitioner"
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Infinite Seamless Ticker Strip */}
      <div className="mt-14 sm:mt-18 border-y border-[#E2E9E1] bg-white py-4 overflow-hidden relative">
        <div className="flex w-max animate-marquee">
          {[...credentialsTicker, ...credentialsTicker].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3.5 mx-6 text-xs sm:text-sm font-heading font-semibold text-[#233B36]/90 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-[#176B60]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
