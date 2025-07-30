// src/components/EnterpriseCta.tsx
import React from "react";

const EnterpriseCta = () => {
  return (
    <section
      className="py-15 md:py-16"
      style={{
        background: "linear-gradient(180deg, #F9FAFF 0%, #FFFFFF 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        {/* Main blue container with the radial gradient */}
        <div
          className="rounded-3xl text-white text-center py-16 md:py-20 px-6"
          style={{
            background: `radial-gradient(ellipse at center, #2525ba 0%, #060482 100%)`,
            width: "1240px",
            height: "450px",
            borderRadius: "24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2
            className="font-bold tracking-tight"
            style={{
              fontFamily: "Manrope",
              fontWeight: "700",
              fontSize: "40px",
              lineHeight: "130%",
              letterSpacing: "0%",
              textAlign: "center",
              marginBottom: "16px",
            }}
          >
            NEED A CUSTOM AI SOLUTION FOR <br /> YOUR ENTERPRISE TEAM?
          </h2>
          <p
            className="text-indigo-200"
            style={{
              fontFamily: "Manrope",
              fontWeight: "600",
              fontSize: "28px",
              lineHeight: "140%",
              letterSpacing: "0%",
              textAlign: "center",
              marginBottom: "32px",
              maxWidth: "800px",
            }}
          >
            Let&apos;s tailor AssistMind AI to your workflow.
          </p>
          <div className="flex justify-center items-center flex-col sm:flex-row gap-4">
            <button
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg"
              style={{
                width: "249px",
                height: "56px",
                borderRadius: "12px",
                padding: "18px",
                fontFamily: "Manrope",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Request a Quote
            </button>
            <button
              className="bg-white text-indigo-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              style={{
                width: "249px",
                height: "56px",
                borderRadius: "12px",
                padding: "18px",
                fontFamily: "Manrope",
                fontSize: "16px",
                fontWeight: "600",
                border: "2px solid transparent",
              }}
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseCta;
