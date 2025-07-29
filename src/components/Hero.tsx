// src/components/Hero.tsx
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="px-2 md:px-6 lg:px-12 pt-8 md:pt-12 pb-16 md:pb-20">
      <div
        className="rounded-xl text-center text-white pt-16 md:pt-20 pb-20 md:pb-24 px-6 relative overflow-hidden"
        style={{
          background: `radial-gradient(ellipse at center, #2525ba 0%, #060482 100%)`,
        }}
      >
        {/* Enhanced Grid Background Pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto relative z-10 mb-8">
          TURN EVERY CALL INTO A LEAD WITH 24/7 AI AGENTS FOR YOUR BUSINESS.
        </h1>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center items-center flex-col sm:flex-row gap-4 relative z-10">
          <button className="bg-[#4F46E5] text-white font-semibold px-8 py-3.5 rounded-lg text-base hover:bg-indigo-700 transition-colors shadow-lg w-full sm:w-auto">
            Try it Free
          </button>
          <button className="bg-white/90 backdrop-blur-sm text-gray-800 font-semibold px-6 py-3.5 rounded-lg text-base hover:bg-white transition-colors shadow-lg flex items-center justify-center space-x-2 w-full sm:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-gray-600"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.048A1.125 1.125 0 019 15.048V8.952a1.125 1.125 0 011.671-.983l5.603 3.048z"
                clipRule="evenodd"
              />
            </svg>
            <span>Listen to AI in action</span>
          </button>
        </div>

        {/* Dashboard Image Section */}
        <div className="mt-16 md:mt-20 mx-auto w-full max-w-8xl relative px-2 sm:px-0">
          <div className="relative mx-auto" style={{ maxWidth: "1100px" }}>
            <Image
              src="/images/dashboard.png"
              alt="AssistMind AI Analytics Dashboard"
              width={1150}
              height={690}
              className="rounded-lg shadow-2xl w-full h-auto relative z-10"
              priority
            />

            {/* Google Calendar Popup - Left Side */}
            <div className="hidden lg:block absolute w-[280px] xl:w-[320px] top-[35%] -left-[100px] xl:-left-[140px] z-20">
              <Image
                src="/images/google-calendar-popup.png"
                alt="Google Calendar integration popup"
                width={320}
                height={220}
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>

            {/* Voice Agent Popup - Top Left */}
            <div className="hidden lg:block absolute w-[240px] xl:w-[280px] top-[20%] -right-[80px] xl:-right-[120px] z-20">
              <Image
                src="/images/voice-agent-popup.png"
                alt="Voice agent configuration popup"
                width={280}
                height={160}
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
