"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isHomepage = pathname === "/";

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-gradient-to-r from-[#176B60] via-[#1A7367] to-[#233B36] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 hover:text-[#E8B77B] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#E8B77B]" />
              <span className="text-white/90">{siteConfig.email}</span>
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 hover:text-[#E8B77B] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E8B77B]" />
              <span className="text-white/90">{siteConfig.phone}</span>
            </a>
          </div>
          <p className="text-white/80 text-xs font-medium">
            {siteConfig.address.area}, {siteConfig.address.city} — {siteConfig.address.pincode}
          </p>
        </div>
      </div>

      {/* Main navigation */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[#F8F6F0]/95 backdrop-blur-md shadow-sm border-b border-[#E2E9E1]"
            : isHomepage
              ? "bg-[#F8F6F0]/90 backdrop-blur-md shadow-xs border-b border-[#E2E9E1]/80"
              : "bg-[#F8F6F0] border-b border-[#E2E9E1]"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group py-1" id="site-logo">
              <Image
                src="/images/nutri-wellness-logo.png"
                alt="Nutri Wellness - Where Nature Meets Science"
                width={195}
                height={46}
                priority
                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {siteConfig.navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    id={`nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                    className={cn(
                      "relative px-4 py-2 text-sm rounded-lg transition-all duration-200",
                      isActive
                        ? "text-[#176B60] font-bold"
                        : "text-[#233B36] font-medium hover:text-[#176B60] hover:bg-[#EFF6F0]"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#176B60] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/book-consultation"
                id="nav-book-consultation"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#176B60] text-white text-sm font-semibold rounded-full hover:bg-[#0F4C43] transition-all duration-200 shadow-md shadow-[#176B60]/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4 text-[#E8B77B]" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              id="mobile-menu-toggle"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-heading" />
              ) : (
                <Menu className="w-6 h-6 text-heading" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-[#F8F6F0] border-t border-[#E2E9E1] overflow-hidden"
              id="mobile-menu"
            >
              <div className="px-4 py-6 space-y-1">
                {siteConfig.navigation.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-4 py-3 rounded-xl text-base font-semibold transition-all",
                          isActive
                            ? "bg-[#EFF6F0] text-[#176B60] border-l-4 border-[#176B60]"
                            : "text-[#233B36] hover:bg-[#EFF6F0] hover:text-[#176B60]"
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4"
                >
                  <Link
                    href="/book-consultation"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#176B60] text-white text-base font-semibold rounded-xl hover:bg-[#0F4C43] transition-all shadow-md shadow-[#176B60]/20"
                  >
                    Book Consultation
                    <ArrowRight className="w-4 h-4 text-[#E8B77B]" />
                  </Link>
                </motion.div>
                <div className="pt-4 border-t border-[#E2E9E1] mt-4 space-y-2 text-sm text-[#57756E]">
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-[#176B60]">
                    <Mail className="w-4 h-4 text-[#E8B77B]" /> {siteConfig.email}
                  </a>
                  <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-[#176B60]">
                    <Phone className="w-4 h-4 text-[#E8B77B]" /> {siteConfig.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
