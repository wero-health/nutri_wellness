"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Microscope,
  Leaf,
  Activity,
} from "lucide-react";

export interface HeroSlide {
  id: number;
  badge: string;
  badgeIcon: any;
  title: string;
  accentText: string;
  accentColor: "sage" | "gold";
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  image: string;
  alt: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    badge: "Where Nature Meets Science",
    badgeIcon: Leaf,
    title: "Where Nature Meets Science for",
    accentText: "Your Lifelong Wellness",
    accentColor: "sage",
    description:
      "Experience the synergy of nature and science, fostering holistic well-being through innovative root-cause healthcare and bio-individual medicine.",
    primaryCtaText: "Book In-Depth Consultation",
    primaryCtaLink: "/book-consultation",
    secondaryCtaText: "Explore The Tree of Life",
    secondaryCtaLink: "#the-tree-of-life",
    image: "/images/clinic-sanctuary-clean.jpg",
    alt: "Nutri Wellness Luxury Clinic Sanctuary",
  },
  {
    id: 2,
    badge: "Advanced Multi-Omics Diagnostics",
    badgeIcon: Microscope,
    title: "Revolutionizing Healthcare Through",
    accentText: "Root-Cause Diagnostics",
    accentColor: "gold",
    description:
      "At Nutri Wellness, we decode chronic illness through state-of-the-art GI-MAP DNA stool sequencing, DUTCH hormone metabolomics, and Stanford Online genomics.",
    primaryCtaText: "Explore Clinical Programs",
    primaryCtaLink: "/services",
    secondaryCtaText: "Learn About Diagnostics",
    secondaryCtaLink: "/services/functional-medicine",
    image: "/images/clinical-sequencing.jpg",
    alt: "Advanced DNA sequencing and clinical diagnostic laboratory",
  },
  {
    id: 3,
    badge: "Personalized Precision Medicine",
    badgeIcon: Sparkles,
    title: "Root-Cause Medicine Engineered for",
    accentText: "Your Unique Biology",
    accentColor: "sage",
    description:
      "Stop masking recurring symptoms. Led by Dr. Dasari Anusha (MD, IFMCP Certified), we identify and resolve the cellular origins of fatigue, gut issues, and metabolic dysfunction.",
    primaryCtaText: "Schedule In-Depth Intake",
    primaryCtaLink: "/book-consultation",
    secondaryCtaText: "Meet Dr. Anusha Dasari",
    secondaryCtaLink: "/about",
    image: "/images/genomics-precision.jpg",
    alt: "3D precision genomics and cellular longevity DNA visualization",
  },
  {
    id: 4,
    badge: "Biochemical Cellular Nutrition",
    badgeIcon: Activity,
    title: "Therapeutic Clinical Nutrition That",
    accentText: "Heals at the Root",
    accentColor: "gold",
    description:
      "Targeted pharmaceutical-grade nutraceuticals, mucosal barrier restoration, and anti-inflammatory meal roadmaps tailored to your unique biochemistry.",
    primaryCtaText: "Explore Nutrition Care",
    primaryCtaLink: "/services/nutrition-counseling",
    secondaryCtaText: "View Patient Roadmap",
    secondaryCtaLink: "#our-process",
    image: "/images/cellular-nutrition.jpg",
    alt: "Therapeutic botanical medicine and cellular clinical nutrition extracts",
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  const activeSlide = slides[current];
  const BadgeIcon = activeSlide.badgeIcon;

  return (
    <section
      className="relative w-full h-[640px] sm:h-[720px] lg:h-[800px] overflow-hidden bg-slate-950 flex items-center justify-center text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images with Animated Cross-Fade & Ken Burns Zoom */}
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={activeSlide.image}
            alt={activeSlide.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Balanced cinematic overlay: Teal-to-Sage gradient preserving photography clarity */}
          <div className="absolute inset-0 bg-[#132622]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#132622]/95 via-[#176B60]/45 to-[#132622]/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(23,107,96,0.35)_0%,rgba(19,38,34,0.6)_80%)]" />
        </motion.div>
      </AnimatePresence>

      {/* Foreground Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 sm:pt-0">
        
        {/* Animated Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center max-w-4xl mx-auto px-4 sm:px-8 py-4 sm:py-6"
          >
            {/* Top Eyebrow Badge - Deep Teal & Soft Gold Accent */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#132622]/75 backdrop-blur-md border border-[#B9D8B1]/40 text-xs font-bold uppercase tracking-wider mb-6 shadow-xl">
              <BadgeIcon className="w-4 h-4 text-[#E8B77B]" />
              <span className="text-[#F8F6F0] drop-shadow-sm">{activeSlide.badge}</span>
            </div>

            {/* Main Headline - Bold, Dignified, High Contrast */}
            <h1
              style={{
                color: "#ffffff",
                textShadow: "0 2px 4px rgba(0,0,0,0.85), 0 8px 24px rgba(0,0,0,0.92)"
              }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.08] tracking-tight mb-6 max-w-4xl text-white"
            >
              <span>{activeSlide.title} </span>
              <span
                style={{
                  color: activeSlide.accentColor === "gold" ? "#E8B77B" : "#B9D8B1",
                  textShadow:
                    activeSlide.accentColor === "gold"
                      ? "0 2px 4px rgba(0,0,0,0.9), 0 0 35px rgba(232,183,123,0.5)"
                      : "0 2px 4px rgba(0,0,0,0.9), 0 0 35px rgba(185,216,177,0.5)"
                }}
                className="font-extrabold inline-block"
              >
                {activeSlide.accentText}
              </span>
            </h1>

            {/* Subtitle Paragraph with Warm Ivory & Crisp Contrast */}
            <p
              style={{
                color: "#F8F6F0",
                textShadow: "0 1px 3px rgba(0,0,0,0.9), 0 3px 12px rgba(0,0,0,0.95)"
              }}
              className="text-base sm:text-lg md:text-xl text-[#F8F6F0]/90 max-w-2xl sm:max-w-3xl leading-relaxed font-medium mb-10"
            >
              {activeSlide.description}
            </p>

            {/* Call to Actions - Deep Teal Primary + Frosted Glass Secondary */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                href={activeSlide.primaryCtaLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#176B60] hover:bg-[#0F4C43] text-white text-base font-heading font-bold transition-all duration-200 shadow-2xl shadow-[#176B60]/50 border border-[#B9D8B1]/40 hover:scale-105 active:scale-95"
              >
                <Calendar className="w-5 h-5 text-[#E8B77B]" />
                <span>{activeSlide.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </Link>

              <Link
                href={activeSlide.secondaryCtaLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-[#F8F6F0] border border-white/30 hover:border-[#B9D8B1] backdrop-blur-md text-base font-heading font-semibold transition-all duration-200 shadow-xl hover:scale-105 active:scale-95 group"
              >
                <span>{activeSlide.secondaryCtaText}</span>
                <ArrowRight className="w-4 h-4 text-[#B9D8B1] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Manual Slide Navigation Arrows (Left / Right) */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#132622]/60 hover:bg-[#176B60] text-white backdrop-blur-md border border-white/20 hover:border-[#B9D8B1] items-center justify-center transition-all duration-200 hover:scale-110 active:scale-90 cursor-pointer shadow-xl"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#132622]/60 hover:bg-[#176B60] text-white backdrop-blur-md border border-white/20 hover:border-[#B9D8B1] items-center justify-center transition-all duration-200 hover:scale-110 active:scale-90 cursor-pointer shadow-xl"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Interactive Bottom Slide Progress Bars / Indicators - Teal to Sage Gradient */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {slides.map((slide, idx) => {
          const isSelected = idx === current;
          return (
            <button
              key={slide.id}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                isSelected
                  ? "w-12 bg-gradient-to-r from-[#176B60] via-[#B9D8B1] to-[#E8B77B] shadow-lg shadow-[#176B60]/50"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
