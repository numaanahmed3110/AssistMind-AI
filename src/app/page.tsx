// src/app/page.tsx
import AiInAction from "@/components/AiInAction";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import SmarterVoicemail from "@/components/SmarterVoicemail";

export default function HomePage() {
  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <Navbar />
      <div className="bg-white">
        <Hero />
        <AiInAction />
        <SmarterVoicemail />
        <HowItWorks />
      </div>
    </div>
  );
}
