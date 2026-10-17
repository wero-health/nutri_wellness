import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms and Conditions | Nutri Wellness",
  description: "Terms and conditions of service for Nutri Wellness healthcare platform.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms and Conditions"
        subtitle="Important terms governing your use of Nutri Wellness clinical consultations and online services."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms and Conditions" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg text-body">
          <p className="text-sm text-muted">Last Updated: October 2024</p>

          <h2 className="text-2xl font-heading font-bold text-heading mt-8 mb-4">
            1. Nature of Medical Care & Services
          </h2>
          <p>
            Nutri Wellness operates as an integrative, precision, and functional medicine practice led by Dr. Anusha Dasari (MD, Internal Medicine; IFMCP Certified). All clinical consultations, genomic analyses, and nutritional guidance are delivered in accordance with accepted professional medical standards in India.
          </p>

          <h2 className="text-2xl font-heading font-bold text-heading mt-8 mb-4">
            2. Medical Disclaimer & Emergency Services
          </h2>
          <p>
            The educational articles and general materials provided on this website are for informational and health education purposes only. They do not constitute emergency medical advice. If you are experiencing an acute medical emergency (such as severe chest pain, shortness of breath, acute trauma, or allergic reactions), please visit the nearest hospital emergency room immediately.
          </p>

          <h2 className="text-2xl font-heading font-bold text-heading mt-8 mb-4">
            3. Appointment Scheduling & Rescheduling
          </h2>
          <p>
            Initial consultations require dedicated preparation and in-depth physician time. If you need to reschedule an in-person or video consultation, please notify our clinic at least 24 hours in advance so another patient may utilize the reserved slot.
          </p>

          <h2 className="text-2xl font-heading font-bold text-heading mt-8 mb-4">
            4. Diagnostic Testing & Protocols
          </h2>
          <p>
            Recommendations for specialized functional lab diagnostics (such as comprehensive gut microbiome sequencing, organic acids, or genetic testing) are tailored to individual clinical requirements. Patients will always receive clear explanations regarding the rationale and clinical utility of any proposed testing before proceeding.
          </p>

          <h2 className="text-2xl font-heading font-bold text-heading mt-8 mb-4">
            5. Intellectual Property
          </h2>
          <p>
            All website design, logos, articles, and clinical educational guides are the intellectual property of Nutri Wellness. Reproduction or re-publication without prior written consent is strictly prohibited.
          </p>
        </div>
      </section>
    </>
  );
}
