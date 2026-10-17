import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Microscope,
  Dna,
  Apple,
  HeartPulse,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  Users,
  Calendar,
} from "lucide-react";
import { services } from "@/content/services";
import { PageHero } from "@/components/ui/PageHero";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

const iconMap: Record<string, any> = {
  Microscope,
  Dna,
  Apple,
  HeartPulse,
};

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Nutri Wellness`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon] || Microscope;
  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.shortDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="section-padding bg-[#F8F6F0] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Main Content Column */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E9E1] shadow-lg shadow-black/[0.02]">
              {/* Overview */}
              <div className="mb-12">
                <div className="w-16 h-16 rounded-2xl bg-[#EFF6F0] text-[#176B60] border border-[#B9D8B1]/60 flex items-center justify-center mb-6 shadow-sm">
                  <Icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-[#233B36] mb-6">
                  Comprehensive Overview
                </h2>
                <p className="text-[#38524C] text-base leading-relaxed mb-6 font-medium">
                  {service.description}
                </p>
                <p className="text-[#38524C] text-base leading-relaxed font-medium">
                  Under the clinical guidance of Dr. Anusha Dasari (MD, IFMCP Certified), this program
                  combines high-precision medical analysis with actionable, sustainable lifestyle protocols
                  designed to eliminate the upstream root drivers of chronic symptoms.
                </p>
              </div>

              {/* Clinical Benefits Grid */}
              <div className="mb-12 p-8 rounded-3xl bg-[#EFF6F0] border border-[#E2E9E1]">
                <h3 className="text-xl font-heading font-bold text-[#233B36] mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#176B60]" /> Key Health Benefits & Outcomes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#E2E9E1] shadow-2xs"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#176B60] shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-[#233B36]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who Is It For */}
              <div className="mb-12">
                <h3 className="text-xl font-heading font-bold text-[#233B36] mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#176B60]" /> Who Should Consider This Program?
                </h3>
                <p className="text-[#38524C] text-sm mb-4 font-medium">
                  This specialized program is engineered for patients experiencing:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.whoIsItFor.map((item, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-[#EFF6F0] border border-[#B9D8B1]/60 text-sm font-semibold text-[#233B36]"
                    >
                      • {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinical Process */}
              <div className="mb-12">
                <h3 className="text-xl font-heading font-bold text-[#233B36] mb-6">
                  The Treatment & Consultation Process
                </h3>
                <div className="space-y-4">
                  {service.process.map((step, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-5 rounded-2xl bg-[#EFF6F0] border border-[#E2E9E1]"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#176B60] text-white font-heading font-bold flex items-center justify-center shrink-0 text-sm shadow-xs">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#233B36] mb-1">{step}</h4>
                        <p className="text-xs text-[#38524C] font-medium">
                          Guided closely by Dr. Anusha Dasari with regular checkpoint reviews and personalized diagnostic analysis.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Program FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-heading font-bold text-[#233B36] mb-6 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#176B60]" /> Common Questions About {service.title}
                  </h3>
                  <FAQAccordion items={service.faqs} />
                </div>
              )}
            </div>

            {/* Sidebar Sticky Card */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              <div className="bg-gradient-to-br from-[#132622] via-[#176B60] to-[#162E29] text-white rounded-3xl p-6 sm:p-8 border border-[#176B60]/40 shadow-xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8B77B] text-[#233B36] text-xs font-bold mb-4 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  Personalized Care Plan
                </div>

                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  Ready to Start {service.title}?
                </h3>

                <p className="text-[#F8F6F0]/85 text-xs leading-relaxed mb-6 font-medium">
                  Schedule your comprehensive 60-minute intake consultation with Dr. Anusha Dasari to begin your healing journey.
                </p>

                <div className="space-y-3 mb-6 text-xs text-[#F8F6F0] font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E8B77B]" />
                    <span>In-person at Jubilee Hills clinic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E8B77B]" />
                    <span>Virtual video consultation available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E8B77B]" />
                    <span>In-depth review of health history</span>
                  </div>
                </div>

                <Link
                  href="/book-consultation"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-[#176B60] font-heading font-bold text-sm hover:bg-[#F8F6F0] transition-all shadow-lg group"
                >
                  <Calendar className="w-4 h-4 text-[#176B60]" />
                  Book Consultation
                  <ArrowRight className="w-4 h-4 text-[#E8B77B] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Other Services Navigation */}
              <div className="bg-white rounded-3xl p-6 border border-[#E2E9E1] shadow-md">
                <h4 className="text-sm font-heading font-bold text-[#233B36] uppercase tracking-wider mb-4">
                  Other Clinical Programs
                </h4>
                <div className="space-y-2">
                  {otherServices.map((other) => (
                    <Link
                      key={other.slug}
                      href={`/services/${other.slug}`}
                      className="block p-3 rounded-xl hover:bg-[#EFF6F0] transition-colors text-sm font-medium text-[#38524C] hover:text-[#176B60]"
                    >
                      {other.title} →
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
