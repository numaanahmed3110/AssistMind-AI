// src/components/Hero.tsx
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="px-2 md:px-6 lg:px-12 pt-0 md:pt-7 pb-8 md:pb-20">
      {/* Mobile View */}
      <div className="md:hidden flex justify-center items-start pt-4 pb-8">
        <div
          className="text-center text-white relative overflow-hidden w-[358px] min-h-fit py-8 px-4"
          style={{
            borderRadius: "16px",
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

          {/* Mobile Heading */}
          <h1
            className="tracking-tight relative z-10 text-white mb-6"
            style={{
              fontFamily: "Manrope",
              fontWeight: 800,
              fontSize: "24px",
              lineHeight: "140%",
              letterSpacing: "0%",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            TURN EVERY CALL INTO A LEAD WITH 24/7 AI AGENTS FOR YOUR BUSINESS.
          </h1>

          {/* Mobile Action Buttons */}
          <div className="flex flex-col gap-3 relative z-10 mb-8">
            <button
              className="bg-[#4F46E5] text-white hover:bg-indigo-700 transition-colors shadow-lg w-full"
              style={{
                height: "48px",
                borderRadius: "12px",
                fontFamily: "Manrope",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              Try it Free
            </button>
            <button
              className="bg-white/90 backdrop-blur-sm text-gray-800 hover:bg-white transition-colors shadow-lg flex items-center justify-center space-x-2 w-full"
              style={{
                height: "48px",
                borderRadius: "12px",
                fontFamily: "Manrope",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
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
              <span>Listen AI in action</span>
            </button>
          </div>

          {/* Mobile Dashboard Image */}
          <div className="relative w-full max-w-[350px] mx-auto">
            <Image
              src="/mobile/dashboard1.png"
              alt="AssistMind AI Analytics Dashboard"
              width={370}
              height={390}
              className="shadow-2xl w-full h-auto object-contain rounded-lg"
              priority
            />
          </div>
        </div>
      </div>

      {/* Desktop View - Unchanged */}
      <div
        className="hidden md:block rounded-xl text-center text-white pt-16 md:pt-15 pb-0 md:pb-0 px-6 relative overflow-hidden"
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
        <h1
          className="tracking-tight max-w-4xl mx-auto relative z-10 mb-8 text-white"
          style={{
            fontFamily: "Manrope",
            fontWeight: 800,
            fontSize: "56px",
            lineHeight: "140%",
            letterSpacing: "0%",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          TURN EVERY CALL INTO A LEAD WITH 24/7 AI AGENTS FOR YOUR BUSINESS.
        </h1>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center items-center flex-col sm:flex-row gap-4 relative z-10">
          <button
            className="bg-[#4F46E5] text-white hover:bg-indigo-700 transition-colors shadow-lg"
            style={{
              width: "249px",
              height: "56px",
              opacity: 1,
              gap: "16px",
              borderRadius: "12px",
              padding: "12px",
              fontFamily: "Manrope",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "100%",
              letterSpacing: "0%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Try it Free
          </button>
          <button
            className="bg-white/90 backdrop-blur-sm text-gray-800 hover:bg-white transition-colors shadow-lg flex items-center justify-center space-x-2"
            style={{
              width: "auto",
              height: "56px",
              opacity: 1,
              gap: "2px",
              borderRadius: "12px",
              padding: "12px",
              fontFamily: "Manrope",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "100%",
              letterSpacing: "0%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-gray-600"
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
              className=" shadow-2xl w-full h-auto relative z-10"
              priority
            />

            {/* Google Calendar Popup - Left Side */}
            <div
              className="hidden lg:block absolute w-[280px] xl:w-[320px] z-20"
              style={{ top: "calc(35% - 60px)", left: "-100px" }}
            >
              <Image
                src="/images/google-calendar-popup.png"
                alt="Google Calendar integration popup"
                width={320}
                height={220}
                className="rounded-lg shadow-2xl w-full h-auto xl:ml-[-40px]"
              />
            </div>

            {/* Voice Agent Popup - Top Right */}
            <div
              className="hidden lg:block absolute w-[240px] xl:w-[280px] z-20"
              style={{ top: "calc(20% - 15px)", right: "calc(-60px + 0px)" }}
            >
              <Image
                src="/images/voice-agent-popup.png"
                alt="Voice agent configuration popup"
                width={280}
                height={160}
                className="rounded-lg shadow-2xl w-full h-auto xl:mr-[46px]"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
