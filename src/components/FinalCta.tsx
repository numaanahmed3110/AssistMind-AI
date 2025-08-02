// src/components/FinalCta.tsx
import React from "react";

const FinalCta = () => {
  return (
    // The outer section uses the light gradient background for consistency.
    <section
      className="pb-10 md:pb-29"
      style={{
        background: "linear-gradient(180deg, #F9FAFF 0%, #FFFFFF 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        {/* Main blue container with the specified layered background */}
        <div
          className="rounded-3xl text-white text-center py-12 md:py-20 px-6 relative w-[358px] md:w-[1240px] min-h-fit md:h-[450px]"
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
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            opacity: 1,
          }}
        >
          <h2
            className="font-bold  uppercase text-[20px] md:text-[40px] leading-[130%]"
            style={{
              fontFamily: "Manrope",
              fontWeight: "700",
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
            className="text-indigo-200 text-base md:text-[28px] leading-[140%]"
            style={{
              fontFamily: "Manrope",
              fontWeight: "600",
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
              className="bg-white text-indigo-700 font-bold hover:bg-gray-100 transition-colors text-lg md:text-base md:font-black leading-[130%] w-[160px] h-[48px] md:w-[193px] md:h-[56px]"
              style={{
                borderRadius: "12px",
                padding: "14px 16px",
                fontFamily: "Manrope",
                fontWeight: "700",
                border: "2px solid #C8C8CA",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                gap: "4px",
                opacity: 1,
                background: "#FFFFFF",
                boxShadow:
                  "0px 1px 2px 0px #0A0D120D, 0px -2px 0px 0px #0A0D120D inset, 0px 0px 0px 1px #0A0D122E inset",
                letterSpacing: "0%",
                lineHeight: "110%",
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
