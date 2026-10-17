"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/content/site";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="relative bg-[#162925] text-[#F8F6F0] overflow-hidden">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[#E8B77B] font-bold text-xs uppercase tracking-wider mb-2">
                Newsletter Subscribe
              </p>
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-white">
                Get More About Our
                <br />
                Wellness Guides
              </h3>
            </div>

            {subscribed ? (
              <div className="flex items-center gap-2 text-[#B9D8B1] text-sm font-semibold bg-white/10 px-6 py-3 rounded-xl border border-white/15">
                <CheckCircle2 className="w-5 h-5 text-[#B9D8B1]" />
                Thank you for subscribing to Dr. Anusha&apos;s wellness updates!
              </div>
            ) : (
              <form className="flex w-full max-w-md" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-3 rounded-l-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-hidden focus:border-[#E8B77B] transition-colors text-sm"
                  id="newsletter-email"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#176B60] hover:bg-[#1E8477] text-white rounded-r-xl font-semibold text-sm transition-colors whitespace-nowrap shadow-md"
                  id="newsletter-submit"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center px-4 py-2.5 bg-white rounded-2xl shadow-sm mb-5 hover:bg-slate-50 transition-all group" id="footer-logo">
              <Image
                src="/images/nutri-wellness-logo.png"
                alt="Nutri Wellness - Where Nature Meets Science"
                width={175}
                height={40}
                className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-102"
              />
            </Link>
            <p className="text-[#F8F6F0]/80 text-sm leading-relaxed mb-6 font-medium">
              {siteConfig.tagline}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: FacebookIcon, href: siteConfig.social.facebook, label: "Facebook" },
                { icon: TwitterIcon, href: siteConfig.social.twitter, label: "Twitter" },
                { icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
                { icon: YoutubeIcon, href: siteConfig.social.youtube, label: "Youtube" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#176B60] transition-all duration-200"
                  aria-label={s.label}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {siteConfig.footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#F8F6F0]/80 hover:text-[#B9D8B1] transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-[#E8B77B] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-3">
              {siteConfig.footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#F8F6F0]/80 hover:text-[#B9D8B1] transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-[#E8B77B] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-[#F8F6F0]/85 hover:text-[#B9D8B1] transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-[#E8B77B] shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-start gap-3 text-[#F8F6F0]/85 hover:text-[#B9D8B1] transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-[#E8B77B] shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[#F8F6F0]/85 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 text-[#E8B77B] shrink-0" />
                  <span>
                    {siteConfig.address.street},<br />
                    {siteConfig.address.area},<br />
                    {siteConfig.address.city} - {siteConfig.address.pincode}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#F8F6F0]/75 font-medium">
            <p>
              Copyright © 2026 Nutri Wellness. All Rights Reserved.
            </p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-[#E8B77B] fill-[#E8B77B]" /> for holistic health & healing
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    </footer>
  );
}
