"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/content/site";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Consultation Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Have questions about our functional medicine programs or wish to schedule an appointment? We are here to support your journey."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      <section className="section-padding bg-[#F8F6F0] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details & Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold text-[#176B60] uppercase tracking-wider block mb-2">
                  Direct Communication
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#233B36]">
                  Visit or Connect with Dr. Anusha Dasari
                </h2>
                <p className="text-[#38524C] text-sm mt-3 leading-relaxed font-medium">
                  Whether you are based in Hyderabad or seeking virtual care from across India, our clinic coordinators are available to answer your clinical inquiries.
                </p>
              </div>

              {/* Cards */}
              <div className="space-y-4">
                {/* Phone Card */}
                <div className="bg-white rounded-3xl p-6 border border-[#E2E9E1] shadow-xs flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#EFF6F0] text-[#176B60] border border-[#B9D8B1]/60 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-[#233B36] mb-1">
                      Phone & WhatsApp
                    </h3>
                    <p className="text-[#38524C] text-sm font-semibold">
                      <a href={`tel:${siteConfig.phone}`} className="hover:text-primary transition-colors">
                        {siteConfig.phone}
                      </a>
                    </p>
                    <a
                      href={`https://wa.me/919876543210?text=Hello%20Nutri%20Wellness,%20I%20would%20like%20to%20inquire%20about%20a%20consultation.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#176B60] font-bold mt-2 hover:underline"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#E8B77B]" />
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-white rounded-3xl p-6 border border-[#E2E9E1] shadow-xs flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#EFF6F0] text-[#176B60] border border-[#B9D8B1]/60 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-[#233B36] mb-1">
                      Email Inquiries
                    </h3>
                    <p className="text-[#38524C] text-sm font-semibold break-all">
                      <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">
                        {siteConfig.email}
                      </a>
                    </p>
                    <p className="text-xs text-[#57756E] font-medium mt-1">
                      Inquiries answered within 24 business hours
                    </p>
                  </div>
                </div>

                {/* Address Card */}
                <div className="bg-white rounded-3xl p-6 border border-[#E2E9E1] shadow-xs flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#EFF6F0] text-[#176B60] border border-[#B9D8B1]/60 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-[#233B36] mb-1">
                      Clinic Location
                    </h3>
                    <p className="text-[#38524C] text-sm font-medium">
                      {siteConfig.address.street}, {siteConfig.address.area}
                      <br />
                      {siteConfig.address.city}, {siteConfig.address.state} — {siteConfig.address.pincode}
                    </p>
                    <a
                      href="https://maps.google.com/?q=Journalist+Colony+Jubilee+Hills+Hyderabad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary font-bold mt-2 hover:underline"
                    >
                      Open in Google Maps
                      <ExternalLink className="w-3.5 h-3.5 text-[#E8B77B]" />
                    </a>
                  </div>
                </div>

                {/* Working Hours Card */}
                <div className="bg-white rounded-3xl p-6 border border-[#E2E9E1] shadow-xs flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#EFF6F0] text-[#176B60] border border-[#B9D8B1]/60 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-[#233B36] mb-1">
                      Consultation Hours
                    </h3>
                    <p className="text-[#38524C] text-sm font-semibold">
                      Monday – Saturday: 10:00 AM – 7:00 PM
                    </p>
                    <p className="text-xs text-[#57756E] mt-1 font-medium">
                      Consultations strictly by prior appointment
                    </p>
                  </div>
                </div>

                {/* Clinic Sanctuary Photo Card */}
                <div className="relative h-56 rounded-3xl overflow-hidden border border-[#E2E9E1] shadow-md group">
                  <Image
                    src="/images/clinic-sanctuary-clean.jpg"
                    alt="Nutri Wellness Clinic Consultation Sanctuary, Jubilee Hills"
                    fill
                    sizes="(max-width: 1024px) 100vw, 460px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#132622]/85 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/95 text-[#176B60] shadow-xs border border-[#B9D8B1]/50">
                      Consultation Sanctuary
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs flex items-center justify-between font-medium">
                    <span>Nutri Wellness Clinic</span>
                    <span className="text-[#E8B77B] font-semibold">Jubilee Hills, Hyderabad</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E9E1] shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-[#EFF6F0] text-[#176B60] border border-[#B9D8B1]/60 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-[#233B36]">
                      Send a Direct Message
                    </h3>
                    <p className="text-xs text-[#57756E] font-medium">
                      Fill out this brief form and our team will get back to you promptly.
                    </p>
                  </div>
                </div>

                {submitted ? (
                  <div className="text-center py-12 px-4">
                    <div className="w-16 h-16 rounded-full bg-[#EFF6F0] text-[#176B60] border border-[#B9D8B1]/60 mx-auto flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-[#176B60]" />
                    </div>
                    <h4 className="text-2xl font-heading font-bold text-[#233B36] mb-2">
                      Message Received!
                    </h4>
                    <p className="text-[#38524C] text-sm max-w-md mx-auto mb-6 font-medium">
                      Thank you for contacting Nutri Wellness. Dr. Anusha Dasari&apos;s team has received your message and will respond shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          subject: "Consultation Inquiry",
                          message: "",
                        });
                      }}
                      className="px-6 py-2.5 rounded-full border border-primary text-primary text-xs font-semibold hover:bg-[#EFF6F0]"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#233B36] uppercase tracking-wider mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, name: e.target.value }))
                          }
                          placeholder="Full Name"
                          className="w-full px-4 py-3 rounded-2xl border border-[#E2E9E1] bg-[#F8F6F0] text-sm text-[#233B36] focus:ring-2 focus:ring-[#176B60]/20 focus:border-[#176B60] outline-hidden font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#233B36] uppercase tracking-wider mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, phone: e.target.value }))
                          }
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-2xl border border-[#E2E9E1] bg-[#F8F6F0] text-sm text-[#233B36] focus:ring-2 focus:ring-[#176B60]/20 focus:border-[#176B60] outline-hidden font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#233B36] uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, email: e.target.value }))
                          }
                          placeholder="name@example.com"
                          className="w-full px-4 py-3 rounded-2xl border border-[#E2E9E1] bg-[#F8F6F0] text-sm text-[#233B36] focus:ring-2 focus:ring-[#176B60]/20 focus:border-[#176B60] outline-hidden font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#233B36] uppercase tracking-wider mb-2">
                          Topic / Reason
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, subject: e.target.value }))
                          }
                          className="w-full px-4 py-3 rounded-2xl border border-[#E2E9E1] bg-[#F8F6F0] text-sm text-[#233B36] focus:ring-2 focus:ring-[#176B60]/20 focus:border-[#176B60] outline-hidden font-medium"
                        >
                          <option value="Consultation Inquiry">Consultation Inquiry</option>
                          <option value="Functional Medicine Question">Functional Medicine Question</option>
                          <option value="Gut Health & Testing">Gut Health & Testing</option>
                          <option value="Precision Medicine & Genomics">Precision Medicine & Genomics</option>
                          <option value="Other Inquiries">Other Inquiries</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#233B36] uppercase tracking-wider mb-2">
                        How can we help you? *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, message: e.target.value }))
                        }
                        placeholder="Please describe your health goals, questions, or concerns..."
                        className="w-full px-4 py-3 rounded-2xl border border-[#E2E9E1] bg-[#F8F6F0] text-sm text-[#233B36] focus:ring-2 focus:ring-[#176B60]/20 focus:border-[#176B60] outline-hidden font-medium"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-[11px] text-[#57756E] font-medium">
                        🔒 Medical privacy protected under strict confidentiality standards.
                      </p>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-primary text-white font-heading font-bold text-sm hover:bg-primary-dark transition-all shadow-md shadow-primary/20 hover:scale-105 active:scale-95 disabled:opacity-50 group"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send className="w-4 h-4 text-[#E8B77B] transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
