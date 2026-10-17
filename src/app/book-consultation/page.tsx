import type { Metadata } from "next";
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { BookingForm } from "@/components/booking/BookingForm";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Book a Consultation | Dr. Anusha Dasari | Nutri Wellness",
  description:
    "Schedule your in-person or virtual functional medicine consultation with Dr. Anusha Dasari. Personalized root-cause health evaluation in Jubilee Hills, Hyderabad.",
};

export default function BookConsultationPage() {
  return (
    <>
      <PageHero
        title="Schedule Your Consultation"
        subtitle="Take the definitive first step toward identifying root causes and reclaiming long-term health."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Book Consultation" },
        ]}
      />

      <section className="section-padding bg-[#F8F6F0] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trust Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-3xl p-6 border border-[#E2E9E1] shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EFF6F0] text-[#176B60] border border-[#B9D8B1]/60 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-[#233B36]">
                  60-Minute Comprehensive Intake
                </h3>
                <p className="text-[#57756E] text-xs font-medium">
                  Thorough review of genetics, timeline & lifestyle
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#E2E9E1] shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EFF6F0] text-[#176B60] border border-[#B9D8B1]/60 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-[#233B36]">
                  IFM Certified Care
                </h3>
                <p className="text-[#57756E] text-xs font-medium">
                  Institute for Functional Medicine clinical rigor
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#E2E9E1] shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EFF6F0] text-[#176B60] border border-[#B9D8B1]/60 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-[#233B36]">
                  Hybrid Care Options
                </h3>
                <p className="text-[#57756E] text-xs font-medium">
                  In-clinic at Jubilee Hills or encrypted video worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Booking Intake */}
          <BookingForm />

          {/* What to Expect Section */}
          <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E9E1] max-w-4xl mx-auto shadow-md">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-[#176B60] uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#EFF6F0] border border-[#B9D8B1]/60 shadow-2xs">
                Preparation Guide
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#233B36] mt-3">
                What to Expect During Your Initial Consultation
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center sm:text-left">
                <div className="w-10 h-10 rounded-2xl bg-[#EFF6F0] text-[#176B60] border border-[#B9D8B1]/60 font-bold flex items-center justify-center mb-4 text-sm shadow-2xs">
                  1
                </div>
                <h3 className="font-heading font-bold text-base text-[#233B36] mb-2">
                  Health Timeline Discovery
                </h3>
                <p className="text-[#38524C] text-xs leading-relaxed font-medium">
                  We look at your life history from early childhood onwards to pinpoint when and why systemic imbalances originated.
                </p>
              </div>

              <div className="text-center sm:text-left">
                <div className="w-10 h-10 rounded-2xl bg-[#EFF6F0] text-[#176B60] border border-[#B9D8B1]/60 font-bold flex items-center justify-center mb-4 text-sm shadow-2xs">
                  2
                </div>
                <h3 className="font-heading font-bold text-base text-[#233B36] mb-2">
                  Diagnostics Recommendation
                </h3>
                <p className="text-[#38524C] text-xs leading-relaxed font-medium">
                  Targeted biomarker testing, genomic profiles, and microbiome analyses are suggested based on your specific symptoms.
                </p>
              </div>

              <div className="text-center sm:text-left">
                <div className="w-10 h-10 rounded-2xl bg-[#EFF6F0] text-[#176B60] border border-[#B9D8B1]/60 font-bold flex items-center justify-center mb-4 text-sm shadow-2xs">
                  3
                </div>
                <h3 className="font-heading font-bold text-base text-[#233B36] mb-2">
                  Actionable Wellness Plan
                </h3>
                <p className="text-[#38524C] text-xs leading-relaxed font-medium">
                  You leave with immediate nutritional adjustments, therapeutic recommendations, and a clear step-by-step healing roadmap.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-[#E2E9E1] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#57756E]">
              <span className="font-medium">Need immediate assistance?</span>
              <div className="flex items-center gap-6">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  <Phone className="w-4 h-4 text-[#E8B77B]" />
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  <Mail className="w-4 h-4 text-[#E8B77B]" />
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
