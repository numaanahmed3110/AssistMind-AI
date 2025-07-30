// src/components/FinalCta.tsx
import React from "react";

const FinalCta = () => {
  return (
    // The outer section uses the light gradient background for consistency.
    <section
      className="pb-20 md:pb-29"
      style={{
        background: "linear-gradient(180deg, #F9FAFF 0%, #FFFFFF 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        {/* Main blue container with the specified layered background */}
        <div
          className="rounded-3xl text-white text-center py-16 md:py-20 px-6 relative"
          style={{
            // CSS layers multiple background images. The first ones are on top.
            backgroundImage: `
              /* Layer 1: Vertical grid lines (subtle white) */
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              /* Layer 2: Horizontal grid lines (subtle white) */
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              /* Layer 3: Base blue radial gradient */
              radial-gradient(ellipse at center, #2525ba 0%, #060482 100%)
            `,
            // We define a size for the grid pattern layers
            backgroundSize: `60px 60px, 60px 60px, auto`,
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
            className="font-bold tracking-tight uppercase"
            style={{
              fontFamily: "Manrope",
              fontWeight: "700",
              fontSize: "40px",
              lineHeight: "130%",
              letterSpacing: "0%",
              textAlign: "center",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            READY TO WORK SMARTER WITH <br /> VOICE?
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
            Start automating tasks, scheduling meetings, and syncing data – all
            by speaking naturally.
          </p>
          <div className="flex justify-center">
            <button
              className="bg-white text-indigo-700 font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              style={{
                width: "193px",
                height: "56px",
                borderRadius: "12px",
                padding: "18px",
                fontFamily: "Manrope",
                fontSize: "16px",
                fontWeight: "900",
                border: "2px solid transparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              Try it for free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
