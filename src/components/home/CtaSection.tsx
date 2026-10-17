"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  Phone,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Clock,
  MapPin,
} from "lucide-react";
import { siteConfig } from "@/content/site";

export function CtaSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-[#132622] via-[#176B60] to-[#162E29] text-white relative overflow-hidden">
      {/* Decorative organic shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#E8B77B] blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#B9D8B1] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#132622]/60 backdrop-blur-md text-[#E8B77B] text-xs font-semibold mb-6 border border-[#E8B77B]/30 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E8B77B]" />
            Begin Your Wellness Transformation Today
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-6"
          >
            Take the First Step Towards
            <br />
            <span className="text-white font-extrabold underline decoration-[#E8B77B] decoration-2 underline-offset-4">Root-Cause Healing</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#F8F6F0]/90 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-normal"
          >
            Stop managing chronic symptoms in isolation. Partner with Dr. Anusha Dasari
            for a science-driven, empathetic approach to your health. Available in-person in
            Jubilee Hills or via virtual consultation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link
              href="/book-consultation"
              id="cta-book-appointment-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#176B60] font-heading font-bold text-base hover:bg-[#F8F6F0] transition-all duration-200 shadow-xl shadow-black/20 hover:scale-105 active:scale-95 group"
            >
              <Calendar className="w-5 h-5 text-[#176B60]" />
              Book Your Consultation
              <ArrowRight className="w-5 h-5 text-[#E8B77B] transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href={`tel:${siteConfig.phone}`}
              id="cta-call-doctor-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-heading font-semibold text-base backdrop-blur-sm border border-white/20 transition-all duration-200"
            >
              <Phone className="w-5 h-5 text-[#E8B77B]" />
              Call {siteConfig.phone}
            </a>
          </motion.div>

          {/* Trust badges */}
          <div className="pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#E8B77B] shrink-0" />
              <div className="text-xs">
                <p className="font-bold text-white text-sm">IFM Certified Care</p>
                <p className="text-[#F8F6F0]/80 font-medium mt-0.5">Institute for Functional Medicine</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-[#E8B77B] shrink-0" />
              <div className="text-xs">
                <p className="font-bold text-white text-sm">60-Min In-Depth Intake</p>
                <p className="text-[#F8F6F0]/80 font-medium mt-0.5">Comprehensive review of all factors</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-[#E8B77B] shrink-0" />
              <div className="text-xs">
                <p className="font-bold text-white text-sm">Jubilee Hills Clinic</p>
                <p className="text-[#F8F6F0]/80 font-medium mt-0.5">Plus secure online video sessions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
