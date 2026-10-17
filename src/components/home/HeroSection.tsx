"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  Star,
  ShieldCheck,
  Dna,
  HeartPulse,
  Leaf,
  Activity,
  ArrowDown,
  Check,
} from "lucide-react";
import { siteConfig } from "@/content/site";

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

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F2F7F4] via-[#FAFBF8] to-white pt-8 sm:pt-14 pb-16 lg:pb-24">
      {/* Luxury Ambient Lighting Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft breathing aurora orb top right */}
        <div className="absolute -top-32 right-[-5%] w-[700px] h-[700px] bg-gradient-to-br from-primary/15 via-emerald-400/20 to-accent/25 rounded-full blur-[140px] animate-pulse-glow -z-10" />
        {/* Soft mint orb bottom left */}
        <div className="absolute top-1/3 left-[-15%] w-[640px] h-[640px] bg-secondary/80 rounded-full blur-[140px] -z-10" />
        {/* Micro-dot grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#176B57_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.035]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Hero Headline Banner */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          {/* Live Status Capsule */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 border border-primary/20 shadow-xs mb-6 backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-heading font-extrabold text-heading uppercase tracking-wider">
              Where Nature Meets Science
            </span>
            <span className="text-border font-normal text-xs">•</span>
            <span className="text-xs font-semibold text-primary">
              Jubilee Hills Clinic & Virtual PAN-India
            </span>
          </motion.div>

          {/* Exact Requested Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-heading font-extrabold text-heading leading-[1.08] tracking-tight mb-6"
          >
            Where Nature Meets <br />
            <span className="bg-gradient-to-r from-primary via-[#1A826B] to-emerald-600 bg-clip-text text-transparent">
              Science for Your Wellness
            </span>
          </motion.h1>

          {/* Exact Requested Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-body max-w-3xl mx-auto leading-relaxed font-normal mb-8"
          >
            Experience the synergy of nature and science, fostering holistic well-being through innovative wellness solutions.
          </motion.p>

          {/* Hero Quick Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/book-consultation"
              id="hero-header-book-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white text-base font-heading font-bold rounded-full hover:bg-primary-dark transition-all duration-200 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-5 h-5" />
              <span>Book In-Depth Consultation</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </Link>

            <a
              href="#the-tree-of-life"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-heading text-base font-heading font-semibold rounded-full border border-border hover:bg-secondary/60 hover:border-primary/30 transition-all duration-200 shadow-xs"
            >
              <span>Explore The Tree of Life</span>
              <ArrowDown className="w-4 h-4 text-primary" />
            </a>
          </motion.div>
        </div>

        {/* The Tree of Life Flagship Stage Card */}
        <div
          id="the-tree-of-life"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white/95 backdrop-blur-xl rounded-[36px] p-6 sm:p-10 lg:p-12 border border-primary/15 shadow-2xl shadow-primary/5"
        >
          {/* Left Column: Official Functional-Tree.webp with Soft Ambient Halo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-center justify-center relative"
          >
            {/* Ambient Backlight for Tree */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/25 via-primary/20 to-accent/30 rounded-full blur-3xl opacity-80 pointer-events-none animate-pulse-glow" />

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

            {/* Tree Caption Indicator */}
            <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAFBF8] border border-border/80 text-xs font-semibold text-heading/85 shadow-2xs">
              <Leaf className="w-4 h-4 text-primary" />
              <span>Roots: Genetics &amp; Nutrition • Trunk: Systems Biology • Foliage: Lifelong Health</span>
            </div>
          </motion.div>

          {/* Right Column: Principles of Functional Medicine & Physician Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary text-primary text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Principles of Functional Medicine
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-extrabold text-heading leading-[1.12] mb-5">
                The Tree of Life
              </h2>

              {/* Exact Description */}
              <p className="text-body text-sm sm:text-base leading-relaxed mb-6 font-normal">
                Functional Medicine innovatively addresses illness by pinpointing and tackling disease origins through advanced diagnostics. It prioritizes individual patient care over conventional disease-focused approaches, ensuring treatments are customized to each person&apos;s unique biochemistry and life experiences.
              </p>

              {/* 3 Core Checkmarks */}
              <div className="space-y-3.5 mb-8">
                {principles.map((item) => (
                  <div key={item.title} className="p-3.5 rounded-2xl bg-[#FAFBF8] border border-border/70 flex items-start gap-3 hover:border-primary/40 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-700 font-bold" />
                    </div>
                    <div>
                      <h3 className="text-sm font-heading font-bold text-heading">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted font-normal mt-0.5">
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
                  id="hero-book-consultation-btn"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white text-sm font-heading font-bold rounded-full hover:bg-primary-dark transition-all duration-200 shadow-md shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation with Dr. Anusha</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </Link>

                <Link
                  href="#essentials"
                  id="hero-explore-approach-btn"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-heading text-sm font-heading font-semibold rounded-full border border-border hover:bg-secondary/50 hover:border-primary/30 transition-all duration-200 shadow-2xs"
                >
                  <span>Explore 4 Pillars</span>
                </Link>
              </div>
            </div>

            {/* Physician Signature Card with Official IFM Logo */}
            <div className="pt-6 border-t border-border/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#FAFBF8] rounded-2xl p-4 sm:p-5 border border-border/70 shadow-2xs">
              <div className="flex items-center gap-3.5">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30 shrink-0 shadow-sm bg-secondary">
                  <Image
                    src="/images/dr-dasari-anusha.png"
                    alt="Dr. Anusha Dasari"
                    fill
                    sizes="56px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-base font-heading font-bold text-heading">
                    Dr Anusha Dasari
                  </h3>
                  <p className="text-xs font-semibold text-primary">
                    MBBS, MD (Internal Medicine)
                  </p>
                  <p className="text-[11px] text-muted">
                    Senior Consultant, AIG Hospitals
                  </p>
                </div>
              </div>

              {/* Official IFM Certified Practitioner Seal */}
              <div className="self-start sm:self-center shrink-0">
                <div className="flex items-center gap-3 bg-white py-2 px-3.5 rounded-2xl border border-border/80 shadow-2xs">
                  <div className="relative w-12 h-12 shrink-0">
                    <Image
                      src="/images/ifm-certified-practitioner-seal.png"
                      alt="The Institute for Functional Medicine Certified Practitioner Seal"
                      width={48}
                      height={48}
                      unoptimized
                      priority
                      className="object-contain"
                    />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider block">
                      Accredited By
                    </span>
                    <span className="text-xs font-heading font-bold text-heading block">
                      IFM Certified (IFMCP)
                    </span>
                    <span className="text-[10px] text-muted block">
                      Functional Medicine, USA
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Infinite Seamless Ticker Strip */}
      <div className="mt-14 sm:mt-18 border-y border-border/80 bg-white/90 backdrop-blur-xs py-4 overflow-hidden relative">
        <div className="flex w-max animate-marquee">
          {[...credentialsTicker, ...credentialsTicker].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3.5 mx-6 text-xs sm:text-sm font-heading font-semibold text-heading/85 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
