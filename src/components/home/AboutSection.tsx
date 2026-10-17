"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
  MapPin,
  Check,
  X,
  Stethoscope,
  Award,
  HeartHandshake,
} from "lucide-react";
import { siteConfig } from "@/content/site";

const comparisonData = [
  {
    parameter: "Initial Consultation Time",
    conventional: "10 – 15 minute rushed visit",
    functional: "60-minute deep-dive clinical intake",
  },
  {
    parameter: "Diagnostic Approach",
    conventional: "Basic routine blood panels",
    functional: "Advanced multi-omics (GI-MAP, DUTCH, Genomics)",
  },
  {
    parameter: "Treatment Model",
    conventional: "Symptom suppression with pills",
    functional: "Root-cause cellular resolution & reversal",
  },
  {
    parameter: "Nutrition Strategy",
    conventional: "Generic food pyramid or calorie counting",
    functional: "Bio-individual therapeutic medical nutrition",
  },
];

export function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8F6F0] relative overflow-hidden" id="about-expert">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Clinic Sanctuary Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#176B60]/15 via-[#B9D8B1]/25 to-transparent rounded-[36px] blur-xl opacity-75" />

              {/* Main Clinic Frame */}
              <div className="relative bg-white rounded-[32px] p-3 shadow-2xl shadow-[#176B60]/10 border border-[#E2E9E1]">
                <div className="relative rounded-[26px] overflow-hidden aspect-[4/5] bg-[#EFF6F0]">
                  <Image
                    src="/images/clinic-sanctuary-clean.jpg"
                    alt="Nutri Wellness Clinic Sanctuary"
                    fill
                    sizes="(max-width: 1024px) 100vw, 460px"
                    priority
                    className="object-cover hover:scale-103 transition-transform duration-700"
                  />

                  {/* Gradient overlay at bottom for contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-[#176B60] text-xs font-bold uppercase tracking-wider shadow-sm border border-[#B9D8B1]/40">
                      <Sparkles className="w-3.5 h-3.5 text-[#E8B77B]" />
                      Consultation Sanctuary
                    </span>
                  </div>

                  {/* Quote Overlay at Bottom */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 bg-[#F8F6F0]/95 backdrop-blur-md rounded-2xl p-4 border border-[#E2E9E1] shadow-lg">
                    <p className="text-xs sm:text-sm text-[#233B36] font-semibold italic mb-2 leading-relaxed">
                      &ldquo;We don&apos;t treat diseases by their symptoms. We treat people by understanding their cellular biology, environmental triggers, and innate healing capacity.&rdquo;
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-[#E2E9E1]">
                      <div>
                        <span className="text-xs font-heading font-bold text-[#233B36] block">
                          Dr. Dasari Anusha
                        </span>
                        <span className="text-xs text-[#176B60] font-bold">
                          MD, Internal Medicine • IFMCP
                        </span>
                      </div>
                      <span className="text-xs text-[#57756E] font-semibold flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#176B60]" /> Jubilee Hills, Hyderabad
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accreditations Bar Below Card */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="bg-white rounded-2xl p-3 border border-[#E2E9E1] shadow-2xs flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#EFF6F0] text-[#176B60] flex items-center justify-center shrink-0">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#233B36]">MD Medicine</p>
                    <p className="text-xs text-[#57756E] font-medium">12+ Years Clinical Practice</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-3 border border-[#E2E9E1] shadow-2xs flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#EFF6F0] text-[#176B60] flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#233B36]">IFMCP USA</p>
                    <p className="text-xs text-[#57756E] font-medium">Certified Functional Medicine</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Clinical Difference */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6F0] text-[#176B60] text-xs font-bold uppercase tracking-wider mb-5 border border-[#B9D8B1]/40">
              <Sparkles className="w-3.5 h-3.5 text-[#E8B77B]" />
              The Nutri Wellness Paradigm
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-extrabold text-[#233B36] leading-[1.18] mb-5">
              A Medical Approach Designed <br />
              <span className="bg-gradient-to-r from-[#176B60] via-[#1E8477] to-[#47703E] bg-clip-text text-transparent">
                To Truly Hear Your Story
              </span>
            </h2>

            <p className="text-[#38524C] text-base leading-relaxed mb-4 font-normal">
              {siteConfig.founder.bio}
            </p>

            <p className="text-[#38524C] text-sm leading-relaxed mb-6 font-normal">
              Rather than rushing appointments and prescribing pharmaceuticals to mask downstream complaints, Dr. Anusha spends 60 minutes mapping your complete medical timeline, environmental exposures, microbiome diversity, and advanced biomarkers.
            </p>

            {/* Conventional Care vs Nutri Wellness Matrix */}
            <div className="bg-white rounded-2xl p-5 border border-[#E2E9E1] shadow-sm mb-7">
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E9E1] mb-3">
                <span className="text-xs font-heading font-bold text-[#233B36] uppercase tracking-wider">
                  The Clinical Paradigm Shift
                </span>
                <span className="text-xs font-semibold text-[#176B60]">
                  Why Functional Care Works
                </span>
              </div>

              <div className="space-y-2.5">
                {comparisonData.map((item, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-1 sm:grid-cols-12 gap-2 text-xs p-2.5 rounded-xl bg-[#F8F6F0] border border-[#E2E9E1]"
                  >
                    <div className="sm:col-span-4 font-bold text-[#233B36] flex items-center">
                      {item.parameter}
                    </div>
                    <div className="sm:col-span-4 text-[#57756E] flex items-center gap-1.5 font-medium">
                      <X className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>{item.conventional}</span>
                    </div>
                    <div className="sm:col-span-4 text-[#233B36] font-semibold flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-full bg-[#EFF6F0] flex items-center justify-center shrink-0 border border-[#B9D8B1]/50">
                        <Check className="w-3 h-3 text-[#176B60] stroke-[3]" />
                      </div>
                      <span>{item.functional}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Counter Bar */}
            <div className="flex items-center gap-8 mb-8 pb-6 border-b border-[#E2E9E1]">
              <div>
                <span className="text-2xl sm:text-3xl font-heading font-extrabold text-[#176B60]">3,000+</span>
                <p className="text-xs text-[#57756E] font-medium mt-0.5">Consultations Completed</p>
              </div>
              <div className="border-l border-[#E2E9E1] pl-8">
                <span className="text-2xl sm:text-3xl font-heading font-extrabold text-[#176B60]">12+</span>
                <p className="text-xs text-[#57756E] font-medium mt-0.5">Years Clinical Practice</p>
              </div>
              <div className="border-l border-[#E2E9E1] pl-8">
                <span className="text-2xl sm:text-3xl font-heading font-extrabold text-[#176B60]">100%</span>
                <p className="text-xs text-[#57756E] font-medium mt-0.5">Tailored Bio-Protocols</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/book-consultation"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#176B60] text-white font-heading font-bold text-sm hover:bg-[#0F4C43] transition-all duration-200 shadow-md shadow-[#176B60]/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 text-[#E8B77B]" />
                Schedule In-Depth Consultation
              </Link>

              <Link
                href="/about"
                id="about-learn-more"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#233B36] font-heading font-semibold text-sm border border-[#E2E9E1] hover:bg-[#EFF6F0] hover:text-[#176B60] hover:border-[#B9D8B1] transition-all duration-200"
              >
                Read Dr. Dasari&apos;s Full Story
                <ArrowRight className="w-4 h-4 ml-0.5 text-[#E8B77B]" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
