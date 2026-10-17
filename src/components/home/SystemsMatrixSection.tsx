"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  HeartPulse,
  Sparkles,
  Dna,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  GitBranch,
  Calendar,
} from "lucide-react";

const systems = [
  {
    id: "gut",
    label: "Gut Microbiome & Barrier",
    icon: HeartPulse,
    tagline: "The Core of Immunity & Neurotransmitters",
    symptoms: ["Chronic bloating & post-meal gas", "Multiple food intolerances", "Brain fog, fatigue & low mood", "IBS & irregular motility"],
    biomarkers: ["Comprehensive Stool DNA (GI-MAP)", "Zonulin & Leaky Gut Marker", "Calprotectin (Mucosal Inflammation)"],
    solution: "Microbiome DNA sequencing, mucosal barrier repair peptides, and therapeutic anti-inflammatory medical nutrition.",
  },
  {
    id: "hormones",
    label: "Endocrine & Hormones",
    icon: Activity,
    tagline: "Dynamic Chemical Messengers of Vitality",
    symptoms: ["Unexplained weight changes & fatigue", "Thyroid lethargy, hair thinning & cold intolerance", "PCOS, cycle irregularity & cystic acne", "Sleep architecture disruption & grogginess"],
    biomarkers: ["Full Thyroid Panel (FT3, FT4, RT3, TPO/TgAb)", "4-Point Diurnal Cortisol Curve", "DUTCH Complete Sex Hormone Metabolites"],
    solution: "Balancing adrenal stress axis, cellular thyroid conversion optimization, and circadian rhythm harmonization.",
  },
  {
    id: "metabolism",
    label: "Metabolism & Mitochondria",
    icon: Dna,
    tagline: "Cellular Energy & Nutrient Utilization",
    symptoms: ["Afternoon energy crashes & brain fog", "Sugar cravings & stubborn abdominal fat", "Slow exercise recovery & muscle fatigue", "Elevated fasting insulin & metabolic resistance"],
    biomarkers: ["HOMA-IR (Cellular Insulin Resistance)", "ApoB & Advanced Lipid Sub-fractions", "Organic Acids & Krebs Cycle Metabolites"],
    solution: "Metabolic flexibility protocols, targeted mitochondrial nutrient cofactors (NAD+/CoQ10), and bio-individual meal timing.",
  },
  {
    id: "immunity",
    label: "Immunity & Inflammation",
    icon: ShieldAlert,
    tagline: "The Body's Defense & Tissue Calming",
    symptoms: ["Morning joint stiffness & musculoskeletal aches", "Skin flare-ups (eczema, psoriasis, histamine)", "Autoimmune antibody elevations", "Environmental allergen hypersensitivity"],
    biomarkers: ["High-Sensitivity CRP (Hs-CRP)", "Autoimmune Antibody Cascade (ANA/RF)", "Total Immunoglobulin (IgG/IgE) & Food Antigens"],
    solution: "Systemic cytokine calming, heavy metal & environmental clearance, and gut-immune barrier re-education.",
  },
];

export function SystemsMatrixSection() {
  const [activeId, setActiveId] = useState("gut");
  const activeSystem = systems.find((s) => s.id === activeId) || systems[0];
  const ActiveIcon = activeSystem.icon;

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-[#132622] via-[#162E29] to-[#12221E] text-white relative overflow-hidden" id="systems-biology">
      {/* Animated background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[600px] bg-[#176B60]/20 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1D3A34]/80 backdrop-blur-md text-[#E8B77B] text-xs font-bold uppercase tracking-wider mb-4 border border-[#B9D8B1]/30 shadow-sm"
          >
            <GitBranch className="w-3.5 h-3.5 text-[#E8B77B]" />
            Interconnected Systems Biology
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight"
          >
            How Functional Medicine <br />
            <span className="bg-gradient-to-r from-white via-[#B9D8B1] to-[#E8B77B] bg-clip-text text-transparent">
              Connects the Biological Dots
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#F8F6F0]/90 text-base sm:text-lg mt-4 leading-relaxed font-medium"
          >
            Conventional medicine divides your symptoms between separate specialists. We treat your body as an interconnected biological ecosystem where an imbalance in one system triggers downstream symptoms across others.
          </motion.p>
        </div>

        {/* System Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {systems.map((item) => {
            const Icon = item.icon;
            const isSelected = item.id === activeId;
            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`relative inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-heading font-bold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-[#176B60] to-[#13584F] text-white shadow-xl shadow-[#176B60]/40 scale-105 border border-[#B9D8B1]/50"
                    : "bg-white/[0.08] text-white hover:bg-white/[0.15] hover:text-[#B9D8B1] border border-white/15"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-[#E8B77B]" : "text-[#B9D8B1]"}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Dark Luxury Glass Console */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSystem.id}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#11211E]/80 backdrop-blur-2xl text-white rounded-[32px] p-8 sm:p-12 shadow-2xl border border-white/15 max-w-5xl mx-auto"
          >
            <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-8 border-b border-white/15 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#176B60]/35 text-[#E8B77B] border border-[#B9D8B1]/40 flex items-center justify-center shrink-0 shadow-sm">
                  <ActiveIcon className="w-7 h-7 text-[#E8B77B]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#B9D8B1] uppercase tracking-wider">
                    Biological System
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-0.5">
                    {activeSystem.label}
                  </h3>
                  <p className="text-xs text-[#F8F6F0]/85 font-medium mt-1">
                    {activeSystem.tagline}
                  </p>
                </div>
              </div>

              <Link
                href="/book-consultation"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#176B60] text-white text-xs font-heading font-bold hover:bg-[#0F4C43] transition-all shrink-0 shadow-lg shadow-[#176B60]/30 border border-[#B9D8B1]/40 hover:scale-105 active:scale-95"
              >
                <Calendar className="w-4 h-4 text-[#E8B77B]" />
                <span>Evaluate This System</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Symptoms */}
              <div className="bg-white/[0.06] rounded-2xl p-6 border border-white/15">
                <h4 className="text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2 text-amber-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                  Downstream Symptoms
                </h4>
                <ul className="space-y-2.5">
                  {activeSystem.symptoms.map((s, i) => (
                    <li key={i} className="text-xs font-medium text-white/95 flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Biomarkers Tested */}
              <div className="bg-white/[0.06] rounded-2xl p-6 border border-white/15">
                <h4 className="text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2 text-[#B9D8B1]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B9D8B1]" />
                  Advanced Functional Tests
                </h4>
                <ul className="space-y-2.5">
                  {activeSystem.biomarkers.map((b, i) => (
                    <li key={i} className="text-xs font-medium text-white/95 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B9D8B1] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Root Cause Solution */}
              <div className="bg-[#173832]/90 rounded-2xl p-6 border border-[#B9D8B1]/40 flex flex-col justify-between shadow-lg">
                <div>
                  <h4 className="text-xs font-bold text-[#E8B77B] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#E8B77B]" />
                    Root-Cause Protocol
                  </h4>
                  <p className="text-[#F8F6F0] text-xs sm:text-sm font-medium leading-relaxed">
                    {activeSystem.solution}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#176B60]/40 flex items-center justify-between text-xs text-[#F8F6F0]/80 font-semibold">
                  <span>Led by Dr. Dasari Anusha</span>
                  <span className="text-[#E8B77B] font-bold">Jubilee Hills &amp; Online</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
