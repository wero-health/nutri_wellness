import type { Metadata } from "next";
import Link from "next/link";
import {
  Star,
  Quote,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { testimonials } from "@/content/testimonials";

export const metadata: Metadata = {
  title: "Patient Stories & Testimonials | Nutri Wellness",
  description:
    "Read real reviews and inspiring health recovery stories from patients treated by Dr. Anusha Dasari at Nutri Wellness Hyderabad.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Patient Success Stories"
        subtitle="Real stories of recovery, vitality, and root-cause healing from patients who transformed their health."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Testimonials" },
        ]}
      />

      {/* Aggregate Score Bar - Light Mint */}
      <section className="bg-[#EFF6F0] border-b border-[#E2E9E1] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="text-4xl font-heading font-extrabold text-[#233B36]">5.0</div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#E8B77B] text-[#E8B77B]" />
                  ))}
                </div>
                <p className="text-xs text-[#57756E] font-medium">
                  Consistently rated 5 stars by patients across Telangana & Pan-India
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 text-center sm:text-left">
              <div>
                <p className="text-2xl font-heading font-bold text-primary">3,000+</p>
                <p className="text-xs text-[#57756E] font-medium">Consultations Delivered</p>
              </div>
              <div className="border-l border-[#E2E9E1] pl-8">
                <p className="text-2xl font-heading font-bold text-primary">12+</p>
                <p className="text-xs text-[#57756E] font-medium">Years Clinical Experience</p>
              </div>
              <div className="border-l border-[#E2E9E1] pl-8">
                <p className="text-2xl font-heading font-bold text-primary">96%</p>
                <p className="text-xs text-[#57756E] font-medium">Report Marked Improvement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid - Warm Ivory */}
      <section className="section-padding bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-[#E2E9E1] shadow-md flex flex-col justify-between hover:shadow-xl hover:border-primary/40 transition-all duration-300 relative group"
              >
                <div className="absolute top-6 right-6 text-[#B9D8B1]/40 group-hover:text-primary/20 transition-colors">
                  <Quote className="w-10 h-10" />
                </div>

                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E8B77B] text-[#E8B77B]" />
                    ))}
                  </div>

                  <p className="text-[#38524C] text-sm leading-relaxed mb-6 italic relative z-10 font-medium">
                    &ldquo;{item.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E9E1] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#EFF6F0] text-[#176B60] border border-[#B9D8B1]/60 font-heading font-bold flex items-center justify-center text-sm shadow-2xs">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-sm text-[#233B36] flex items-center gap-1.5">
                        {item.name}
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                      </h3>
                      <p className="text-xs text-[#57756E] font-medium">{item.location}</p>
                    </div>
                  </div>

                  {item.service && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#EFF6F0] text-primary border border-[#B9D8B1]/60 shadow-2xs">
                      {item.service}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-gradient-to-br from-[#132622] via-[#176B60] to-[#162E29] rounded-3xl p-8 sm:p-12 text-white text-center max-w-3xl mx-auto shadow-xl border border-[#176B60]/40">
            <Sparkles className="w-10 h-10 text-[#E8B77B] mx-auto mb-4" />
            <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-3 text-white">
              Write Your Own Health Recovery Story
            </h3>
            <p className="text-[#F8F6F0]/85 text-sm max-w-lg mx-auto mb-8 font-medium">
              Experience the difference of a compassionate, root-cause medical doctor dedicated to your sustained well-being.
            </p>
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#176B60] font-heading font-bold text-sm hover:bg-[#F8F6F0] transition-all shadow-md hover:scale-105 active:scale-95 group"
            >
              Book Your Initial Consultation
              <ArrowRight className="w-4 h-4 text-[#E8B77B] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
