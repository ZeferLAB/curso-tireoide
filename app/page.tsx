import { HeroSection } from "./components/section-hero";
import { PositioningSection } from "./components/section-positioning";

import { MethodSection } from "./components/section-method";
import { TargetAudienceSection } from "./components/section-target";
import { OverviewSection } from "./components/section-overview";
import { ModulesSection } from "./components/section-modules";
import { BonusSection } from "./components/section-bonus";
import { OfferSection } from "./components/section-offer";
import { GuaranteeSection } from "./components/section-guarantee";
import { TestimonialsSection } from "./components/section-testimonials";
import { BioSection } from "./components/section-bio";
import { FinalProofSection } from "./components/section-final-proof";
import { FAQSection } from "./components/section-faq";


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-gold selection:text-navy">
      <HeroSection />
      <PositioningSection />
      <TargetAudienceSection />
      <TestimonialsSection />
      <BioSection />
      <MethodSection />
      <ModulesSection />

      <FinalProofSection />
      <OfferSection />
      <BonusSection />
      <GuaranteeSection />
      <FAQSection />
    </main>
  );
}
