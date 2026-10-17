import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Nutri Wellness",
  description: "Privacy policy and patient health data protection policies at Nutri Wellness.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we protect, manage, and safeguard your medical and personal data."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg text-body">
          <p className="text-sm text-muted">Last Updated: October 2024</p>

          <h2 className="text-2xl font-heading font-bold text-heading mt-8 mb-4">
            1. Commitment to Patient Privacy
          </h2>
          <p>
            At Nutri Wellness, we hold patient confidentiality and personal medical data to the highest ethical and regulatory standards. This Privacy Policy details how we collect, store, and utilize health information provided through our website ({siteConfig.url}) and in-clinic consultations.
          </p>

          <h2 className="text-2xl font-heading font-bold text-heading mt-8 mb-4">
            2. Information We Collect
          </h2>
          <p>
            When you schedule an appointment or submit an inquiry, we may collect:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact details: Full name, phone number, email address, city/state.</li>
            <li>Consultation preferences: Preferred consultation mode (in-person or video), service of interest, preferred date and time.</li>
            <li>Self-reported health information: Primary health goals, ongoing symptoms, dietary notes, or lifestyle considerations.</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-heading mt-8 mb-4">
            3. Medical Confidentiality & Use of Data
          </h2>
          <p>
            All health records, biomarker test results, genomic data, and clinical intake documentation are maintained in strictly confidential electronic medical records. Your health data is used solely by Dr. Anusha Dasari and her direct clinical care team to formulate your diagnosis, personalized nutrition roadmap, and treatment protocols.
          </p>
          <p>
            We do NOT sell, license, or disclose your personal or medical data to third-party advertisers, insurance providers, or pharmaceutical marketers.
          </p>

          <h2 className="text-2xl font-heading font-bold text-heading mt-8 mb-4">
            4. Virtual Video Consultations Security
          </h2>
          <p>
            Online video appointments are conducted over secure, encrypted telehealth connections to maintain clinical privacy.
          </p>

          <h2 className="text-2xl font-heading font-bold text-heading mt-8 mb-4">
            5. Contact Regarding Privacy Inquiries
          </h2>
          <p>
            If you have questions about your personal health data or wish to request records, please contact our clinic directly at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-primary font-semibold hover:underline">
              {siteConfig.email}
            </a>{" "}
            or phone {siteConfig.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
