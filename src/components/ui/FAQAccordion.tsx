"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface FAQAccordionProps {
  items?: FAQItem[];
  faqs?: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, faqs, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const list = items || faqs || [];

  return (
    <div className={cn("space-y-3", className)}>
      {list.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={cn(
              "rounded-2xl border transition-all duration-200 overflow-hidden",
              isOpen
                ? "border-[#176B60]/30 bg-[#EFF6F0] shadow-xs"
                : "border-[#E2E9E1] bg-white hover:border-[#176B60]/30"
            )}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors"
              id={`faq-${index}`}
              aria-expanded={isOpen}
            >
              <span className={cn(
                "font-heading font-semibold text-base pr-4 transition-colors",
                isOpen ? "text-[#176B60]" : "text-[#233B36]"
              )}>
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0"
              >
                <ChevronDown className={cn(
                  "w-5 h-5 transition-colors",
                  isOpen ? "text-[#176B60]" : "text-[#57756E]"
                )} />
              </motion.div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-6 pb-5 pt-0 text-[#38524C] text-sm leading-relaxed border-t border-[#176B60]/10">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
