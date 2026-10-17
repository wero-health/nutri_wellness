import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  MapPin,
  Calendar,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "About Dr. Anusha Dasari & Nutri Wellness",
  description:
    "Learn about Dr. Anusha Dasari, MD in Internal Medicine, Certified Functional Medicine Practitioner (IFM), and Stanford Genomics certified expert.",
};

export default function AboutPage() {
  const { founder } = siteConfig;

  return (
    <>
      <PageHero
        title="About Nutri Wellness"
        subtitle="Bridging modern medical science and natural restorative healing through personalized patient health navigation."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* Main Founder Section - Warm Ivory */}
      <section className="section-padding bg-[#F8F6F0] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Doctor Visual Card */}
                <div className="relative rounded-[32px] overflow-hidden bg-white aspect-[4/5] border border-[#E2E9E1] shadow-2xl">
                  <Image
                    src="/images/dr-dasari-anusha.png"
                    alt={founder.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    priority
                    className="object-cover object-top hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#132622]/80 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full bg-white/95 text-primary text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-xs border border-[#E2E9E1]">
                      Founder & Lead Physician
                    </span>
                  </div>

                  {/* Highlights Bar */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-[#E2E9E1] grid grid-cols-3 gap-2 text-center shadow-lg">
                    <div>
                      <p className="text-base font-heading font-extrabold text-primary">12+</p>
                      <p className="text-xs text-[#38524C] font-bold uppercase">Years Exp.</p>
                    </div>
                    <div className="border-x border-[#E2E9E1]">
                      <p className="text-base font-heading font-extrabold text-[#176B60]">IFMCP</p>
                      <p className="text-xs text-[#38524C] font-bold uppercase">Certified</p>
                    </div>
                    <div>
                      <p className="text-base font-heading font-extrabold text-[#E8B77B]">Stanford</p>
                      <p className="text-xs text-[#38524C] font-bold uppercase">Genomics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#EFF6F0] text-[#176B60] text-xs font-bold uppercase tracking-wider mb-4 border border-[#B9D8B1]/60 shadow-2xs">
                Clinical Expertise & Vision
              </span>

              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#233B36] leading-tight mb-6">
                Redefining Healthcare by Finding the{" "}
                <span className="text-gradient-teal-sage font-extrabold">Root Cause</span>
              </h2>

              <p className="text-[#38524C] text-base leading-relaxed mb-6 font-medium">
                {founder.bio}
              </p>

              <p className="text-[#38524C] text-base leading-relaxed mb-8">
                At Nutri Wellness, we believe that symptoms are the body&apos;s distress signals,
                not isolated defects. Rather than suppressing chronic symptoms with lifelong
                prescriptions, Dr. Anusha Dasari investigates underlying metabolic, genetic,
                microbiome, and lifestyle triggers to bring the body back into harmony.
              </p>

              {/* Qualifications Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {founder.qualifications.map((qual) => (
                  <div
                    key={qual}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#E2E9E1] shadow-2xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#176B60] shrink-0" />
                    <span className="text-sm font-bold text-[#233B36]">{qual}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/book-consultation"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#176B60] text-white font-semibold text-sm hover:bg-[#0F4C43] transition-all shadow-md shadow-primary/20 group"
                >
                  <Calendar className="w-4 h-4 text-[#E8B77B]" />
                  Schedule an Appointment
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#176B60] font-semibold text-sm hover:bg-[#EFF6F0] border border-[#E2E9E1] transition-all"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Clinical Distinctions Section - Light Mint */}
      <section className="section-padding bg-[#EFF6F0] border-y border-[#E2E9E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white text-[#176B60] text-xs font-bold uppercase tracking-wider mb-3 border border-[#B9D8B1]/70 shadow-2xs">
              Professional Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#233B36]">
              World-Class Training in Root-Cause & Genomic Medicine
            </h2>
            <p className="text-[#38524C] text-base mt-4">
              Advanced specialized credentials that set Nutri Wellness apart in personalized preventive healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founder.certifications.map((cert) => (
              <div
                key={cert.title}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E9E1] shadow-lg shadow-black/[0.02] flex flex-col justify-between hover:border-primary/40 transition-all hover:shadow-xl"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#EFF6F0] text-[#176B60] flex items-center justify-center mb-6 border border-[#B9D8B1]/60">
                    <Award className="w-7 h-7 text-[#176B60]" />
                  </div>
                  <span className="text-xs font-bold text-[#176B60] uppercase tracking-wider">
                    {cert.organization}
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-[#233B36] mt-1 mb-4">
                    {cert.title}
                  </h3>
                  <p className="text-[#38524C] text-sm leading-relaxed mb-6 font-medium">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E9E1] flex items-center gap-2 text-xs font-semibold text-[#176B60]">
                  <ShieldCheck className="w-4 h-4 text-[#E8B77B]" />
                  Verified Credential & Clinical Competency
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy: Conventional vs Functional Medicine - Warm Ivory */}
      <section className="section-padding bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#EFF6F0] text-[#176B60] text-xs font-bold uppercase tracking-wider mb-3 border border-[#B9D8B1]/60 shadow-2xs">
              Our Clinical Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#233B36]">
              How Functional Medicine Differs
            </h2>
            <p className="text-[#38524C] text-base mt-4">
              A comparison showing why addressing underlying systems leads to lasting vitality rather than temporary symptom suppression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Conventional Care - Pure White */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E9E1] shadow-md">
              <h3 className="text-xl font-heading font-bold text-[#233B36] mb-4 pb-4 border-b border-[#E2E9E1]">
                Conventional Medicine Approach
              </h3>
              <ul className="space-y-4 text-sm text-[#38524C]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#57756E]/40 mt-2 shrink-0" />
                  <span>Focuses primarily on acute disease and symptom suppression.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#57756E]/40 mt-2 shrink-0" />
                  <span>One-size-fits-all prescription protocols for generic diagnoses.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#57756E]/40 mt-2 shrink-0" />
                  <span>Brief 5-10 minute patient consultations with limited health timeline review.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#57756E]/40 mt-2 shrink-0" />
                  <span>Treats organs and bodily systems in separate medical silos.</span>
                </li>
              </ul>
            </div>

            {/* Nutri Wellness Functional Approach - Deep Botanical Charcoal/Teal */}
            <div className="bg-gradient-to-br from-[#132622] via-[#176B60] to-[#162E29] text-white rounded-3xl p-8 sm:p-10 border border-[#176B60]/40 relative shadow-xl">
              <div className="absolute -top-3 right-6 px-3.5 py-1 rounded-full bg-[#E8B77B] text-[#233B36] text-xs font-bold shadow-md">
                Nutri Wellness Standard
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-4 pb-4 border-b border-white/20">
                Nutri Wellness Functional Care
              </h3>
              <ul className="space-y-4 text-sm text-[#F8F6F0]/95 font-medium">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E8B77B] shrink-0 mt-0.5" />
                  <span>Investigates the deep root cause of chronic illness before prescribing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E8B77B] shrink-0 mt-0.5" />
                  <span>Hyper-personalized protocols based on genetic makeup, microbiome, and biochemistry.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E8B77B] shrink-0 mt-0.5" />
                  <span>In-depth 60-90 minute comprehensive consultations to understand your entire life journey.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E8B77B] shrink-0 mt-0.5" />
                  <span>Views the human body as an interconnected biological ecosystem.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Location & Experience Info - Pure White */}
      <section className="py-16 bg-white border-t border-[#E2E9E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8F6F0] rounded-3xl p-8 sm:p-12 border border-[#E2E9E1] shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 relative h-64 rounded-2xl overflow-hidden shadow-sm border border-[#E2E9E1]">
              <Image
                src="/images/dr-dasari-anusha.png"
                alt="Dr. Dasari Anusha - Nutri Wellness Clinic, Jubilee Hills, Hyderabad"
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#132622]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">
                Dr. Dasari Anusha • Jubilee Hills
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h4 className="font-heading font-bold text-lg text-[#233B36] mb-1 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Visit Dr. Anusha Dasari at Nutri Wellness
                </h4>
                <p className="text-[#38524C] text-sm mt-1">
                  {siteConfig.address.street}, {siteConfig.address.area}, {siteConfig.address.city}, {siteConfig.address.state} — {siteConfig.address.pincode}
                </p>
                <p className="text-[#57756E] text-xs mt-1 font-medium">
                  Monday – Saturday: 10:00 AM – 7:00 PM (By Appointment)
                </p>
              </div>

              <Link
                href="/book-consultation"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-all shrink-0 shadow-md shadow-primary/20 group"
              >
                Book an Appointment
                <ArrowRight className="w-4 h-4 text-[#E8B77B] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
