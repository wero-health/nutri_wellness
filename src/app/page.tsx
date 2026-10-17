import { HeroCarousel } from "@/components/home/HeroCarousel";
import { TreeOfLifeSection } from "@/components/home/TreeOfLifeSection";
import { EssentialsSection } from "@/components/home/EssentialsSection";
import { SystemsMatrixSection } from "@/components/home/SystemsMatrixSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { BlogSection } from "@/components/home/BlogSection";
import { CtaSection } from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      {/* 01. Cinematic Multi-Image Scrolling Hero Section */}
      <HeroCarousel />

      {/* 02. Flagship Principles: The Functional Medicine Tree of Life */}
      <TreeOfLifeSection />

      {/* 03. Scientific Framework: The 4 Core Clinical Pillars Bento Grid */}
      <EssentialsSection />

      {/* 04. Interconnected Systems Biology Console (Dark-Luxury) */}
      <SystemsMatrixSection />

      {/* 05. The Clinical Paradigm Shift: Sanctuary & Comparative Trust */}
      <AboutSection />

      {/* 06. The Functional Medicine Journey: 4-Step Patient Roadmap */}
      <ProcessSection />

      {/* 07. Evidence-Based Health Guides & Research */}
      <BlogSection />

      {/* 08. Consultation Intake Invitation */}
      <CtaSection />
    </>
  );
}
