"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Microscope,
  Dna,
  Apple,
  HeartPulse,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { services } from "@/content/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap: Record<string, any> = {
  Microscope,
  Dna,
  Apple,
  HeartPulse,
};

export function ServicesSection() {
  const [activeSlug, setActiveSlug] = useState(services[0].slug);
  const activeService = services.find((s) => s.slug === activeSlug) || services[0];
  const ActiveIcon = iconMap[activeService.icon] || Microscope;

  return (
    <section className="section-padding bg-gradient-to-b from-background via-secondary/15 to-background relative overflow-hidden" id="services-overview">
      {/* Decorative ambient blobs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="Specialized Medical Care"
          title="Personalized Healthcare Solutions"
          subtitle="We integrate root-cause diagnostics, genomics, and evidence-based nutrition to provide care tailored specifically to your biology."
          align="center"
        />

        {/* Desktop Tabs & Active Card */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Services Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Microscope;
              const isSelected = service.slug === activeSlug;

              return (
                <button
                  key={service.slug}
                  onClick={() => setActiveSlug(service.slug)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative group flex items-start gap-4 ${
                    isSelected
                      ? "bg-white border-primary/40 shadow-xl shadow-primary/5 ring-1 ring-primary/20"
                      : "bg-white/60 hover:bg-white border-border/80 hover:border-primary/20 hover:shadow-md"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 ${
                      isSelected
                        ? "bg-primary text-white"
                        : "bg-secondary text-primary group-hover:bg-primary/10"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3
                        className={`font-heading font-bold text-base transition-colors ${
                          isSelected ? "text-primary" : "text-heading group-hover:text-primary"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-secondary/80 text-primary">
                        0{index + 1}
                      </span>
                    </div>
                    <p className="text-body text-xs line-clamp-2 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Active Service Showcase Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.slug}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-border shadow-xl shadow-primary/[0.03] relative overflow-hidden"
              >
                {/* Background watermarked accent */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary/60 rounded-full blur-2xl pointer-events-none" />

                {/* Service Visual Banner */}
                <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden mb-6 border border-border shadow-xs group">
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 640px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#132622]/85 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/95 text-[#176B60] shadow-xs">
                      {activeService.title}
                    </span>
                    <span className="text-xs font-semibold text-[#E8B77B] bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                      Personalized Protocol
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary">
                      <ActiveIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                        Clinical Pillar
                      </span>
                      <h4 className="text-xl sm:text-2xl font-heading font-bold text-heading">
                        {activeService.title}
                      </h4>
                    </div>
                  </div>

                  <Link
                    href={`/services/${activeService.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark group"
                  >
                    Full Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                <p className="text-body text-sm leading-relaxed mb-6 font-medium">
                  {activeService.description}
                </p>

                {/* Key Benefits Grid */}
                <div className="mb-8">
                  <h5 className="text-xs font-bold text-heading uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" /> Key Health Benefits
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeService.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-secondary/40 border border-secondary"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-heading">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Who is it for summary */}
                <div className="p-4 rounded-2xl bg-background border border-border/70 mb-8">
                  <h5 className="text-xs font-bold text-muted uppercase tracking-wider mb-2">
                    Recommended For
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {activeService.whoIsItFor.map((item, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-white border border-border text-heading shadow-2xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
                  <Link
                    href="/book-consultation"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-all duration-200 shadow-md shadow-primary/20"
                  >
                    Schedule Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={`/services/${activeService.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-primary text-sm font-semibold hover:bg-secondary/80 transition-colors"
                  >
                    Explore Protocol
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* View all services banner */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark underline-offset-4 hover:underline"
          >
            Looking for something else? Browse our complete medical and wellness services catalog
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
