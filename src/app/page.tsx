// src/app/page.tsx
import AiInAction from "@/components/AiInAction";
import EnterpriseCta from "@/components/EnterpriseCta";
import Faq from "@/components/Faq";
import FeatureComparison from "@/components/FeatureComparison";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Integrations from "@/components/Integrations";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import SmarterVoicemail from "@/components/SmarterVoicemail";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <Navbar />
      <div className="bg-white">
        <section id="hero">
          <Hero />
        </section>
        <section id="ai-in-action">
          <AiInAction />
        </section>
        <section id="features">
          <SmarterVoicemail />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="comparison">
          <FeatureComparison />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="integrations">
          <Integrations />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="enterprise">
          <EnterpriseCta />
        </section>
        <section id="faq">
          <Faq />
        </section>
        <section id="final-cta">
          <FinalCta />
        </section>
      </div>
      <Footer />
    </div>
  );
}
