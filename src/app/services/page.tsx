import type { Metadata } from "next";
import Link from "next/link";
import {
  Microscope,
  Dna,
  Apple,
  HeartPulse,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { services } from "@/content/services";
import { faqs } from "@/content/faqs";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Specialized Medical Services | Functional & Precision Medicine",
  description:
    "Explore Nutri Wellness specialized programs: Functional Medicine, Precision Genomics, Evidence-Based Nutrition, and Microbiome Gut Health in Jubilee Hills, Hyderabad.",
};

const iconMap: Record<string, any> = {
  Microscope,
  Dna,
  Apple,
  HeartPulse,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Medical & Wellness Services"
        subtitle="Comprehensive, root-cause programs integrating cutting-edge precision medicine, genomics, and clinical nutrition."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      {/* Services Grid Section - Warm Ivory */}
      <section className="section-padding bg-[#F8F6F0] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Microscope;

              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E9E1] shadow-lg shadow-black/[0.02] hover:border-primary/40 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Header info */}
                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-[#EFF6F0] text-[#176B60] border border-[#B9D8B1]/60 flex items-center justify-center shrink-0 shadow-2xs">
                          <Icon className="w-7 h-7" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-[#176B60] uppercase tracking-wider">
                            Pillar 0{index + 1}
                          </span>
                          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#233B36]">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-[#38524C] text-base leading-relaxed mb-6 font-medium">
                        {service.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-xs font-bold text-[#233B36] uppercase tracking-wider mb-3">
                          Recommended For
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.whoIsItFor.map((item, i) => (
                            <span
                              key={i}
                              className="text-xs font-semibold px-3.5 py-1 rounded-full bg-[#EFF6F0] text-[#176B60] border border-[#B9D8B1]/60 shadow-2xs"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#E2E9E1]">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-all shadow-sm group"
                        >
                          View Full Program
                          <ArrowRight className="w-4 h-4 text-[#E8B77B] transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                          href="/book-consultation"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-primary text-sm font-semibold hover:bg-[#EFF6F0] border border-[#E2E9E1] transition-all"
                        >
                          Book Initial Intake
                        </Link>
                      </div>
                    </div>

                    {/* Benefits & Clinical Process */}
                    <div className="lg:col-span-7 bg-[#EFF6F0] rounded-2xl p-6 sm:p-8 border border-[#E2E9E1] flex flex-col justify-between">
                      <div className="mb-6">
                        <h3 className="text-sm font-heading font-bold text-[#233B36] uppercase tracking-wider mb-4 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-[#176B60]" /> Key Health Outcomes & Benefits
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-[#176B60] shrink-0 mt-0.5" />
                              <span className="text-sm text-[#38524C] font-semibold">
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-[#E2E9E1]">
                        <h3 className="text-sm font-heading font-bold text-[#233B36] uppercase tracking-wider mb-3">
                          Clinical Methodology
                        </h3>
                        <ol className="space-y-2.5">
                          {service.process.map((step, i) => (
                            <li key={i} className="text-xs text-[#38524C] font-medium flex items-start gap-2.5">
                              <span className="w-5 h-5 rounded-full bg-white text-[#176B60] font-bold flex items-center justify-center shrink-0 text-[11px] border border-[#B9D8B1]/70 shadow-2xs">
                                {i + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs Section - Pure White */}
      <section className="section-padding bg-white border-t border-[#E2E9E1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#EFF6F0] text-primary border border-[#B9D8B1]/60 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              Common Questions
            </span>
            <h2 className="text-3xl font-heading font-bold text-[#233B36]">
              Frequently Asked Questions About Our Care
            </h2>
            <p className="text-[#38524C] text-sm mt-3">
              Answers to what you can expect when starting with Nutri Wellness.
            </p>
          </div>

          <FAQAccordion items={faqs} />

          <div className="mt-12 text-center p-8 rounded-3xl bg-[#EFF6F0] border border-[#B9D8B1]/60">
            <p className="text-sm font-semibold text-[#233B36] mb-3">
              Have specific questions about your personal health situation?
            </p>
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-all shadow-md group"
            >
              Consult with Dr. Anusha Dasari
              <ArrowRight className="w-4 h-4 text-[#E8B77B] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
