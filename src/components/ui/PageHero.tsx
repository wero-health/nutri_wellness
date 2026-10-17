"use client";

import { motion } from "framer-motion";
import { Breadcrumbs } from "./Breadcrumbs";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-dark to-heading overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-accent/10 blur-2xl" />
        <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-accent/5 blur-xl" />
        <svg className="absolute bottom-0 left-0 right-0 w-full" viewBox="0 0 1440 100" fill="none">
          <path d="M0,60 C360,100 1080,20 1440,60 L1440,100 L0,100 Z" fill="var(--color-background)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-20 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-base sm:text-lg text-white/95 max-w-2xl mx-auto font-medium leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
