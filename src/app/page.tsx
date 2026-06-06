import { BenefitsSection } from "@/components/Home/BenefitsSection";
import { HeroSection } from "@/components/Home/HeroSection";
import { CTASection } from "@/components/Home/CTASection";
import { AboutSection } from "@/components/Home/AboutSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <AboutSection />
      <CTASection />
    </main>
  );
}