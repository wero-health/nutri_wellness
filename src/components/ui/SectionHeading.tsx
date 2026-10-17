"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" && "text-center max-w-2xl mx-auto",
        className
      )}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 bg-[#EFF6F0] text-[#176B60] border border-[#B9D8B1]/70 text-xs font-bold uppercase tracking-wider rounded-full mb-4 shadow-2xs">
          {badge}
        </span>
      )}
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-heading leading-tight"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p className="mt-4 text-body text-base lg:text-lg leading-relaxed max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
