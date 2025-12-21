import { HeroSection } from "./components/section-hero";
import { ContextSection } from "./components/section-context";
import { MethodSection } from "./components/section-method";
import { TargetAudienceSection } from "./components/section-target";
import { OverviewSection } from "./components/section-overview";
import { ModulesSection } from "./components/section-modules";
import { BonusSection } from "./components/section-bonus";
import { OfferSection } from "./components/section-offer";
import { GuaranteeSection } from "./components/section-guarantee";
import { TestimonialsSection } from "./components/section-testimonials";
import { BioSection } from "./components/section-bio";
import { ObjectionsSection } from "./components/section-objections";
import { FAQSection } from "./components/section-faq";
import { SupportSection } from "./components/section-support";
import { ArgumentsSection } from "./components/section-arguments";
import { FooterSection } from "./components/section-footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-gold selection:text-navy">
      <HeroSection />
      <ContextSection />
      <MethodSection />
      <TargetAudienceSection />
      <OverviewSection />
      <ModulesSection />
      <BonusSection />
      <OfferSection />
      <GuaranteeSection />
      <TestimonialsSection />
      <BioSection />
      <ObjectionsSection />
      <FAQSection />
      <SupportSection />
      <ArgumentsSection />
      <FooterSection />
    </main>
  );
}
