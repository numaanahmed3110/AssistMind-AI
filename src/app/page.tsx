// src/app/page.tsx
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <Navbar />
      <div className="bg-white">
        <Hero />
      </div>
    </div>
  );
}
