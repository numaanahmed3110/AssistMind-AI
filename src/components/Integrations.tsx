// src/components/Integrations.tsx
import React from "react";
import Image from "next/image";

// --- Reusable Checkmark Icon ---
// This is the same style of checkmark used in a previous component for consistency.
const CheckIcon = () => (
  <svg
    className="w-6 h-6 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="12" fill="rgba(255, 255, 255, 0.1)" />
    <path
      d="M8.40039 12.0001L10.8004 14.4001L15.6004 9.6001"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// --- Feature List Data ---
const integrationFeatures = [
  "Real-time call-to-calendar sync",
  "Auto-push lead data into CRMs",
  "Secure webhook & API integrations",
];

const Integrations = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6">
      <div className="w-full mx-auto flex justify-center">
        {/* Main blue container with the specified radial gradient */}
        <div
          className="text-white py-12 pb-16 md:pt-16 md:pb-20 px-6 lg:px-16 relative w-[358px] min-h-fit md:w-[1200px] md:h-[600px] md:m-20 rounded-[20px] md:rounded-[24px]"
          style={{
            background: `radial-gradient(ellipse at center, #2525ba 0%, #060482 100%)`,
            opacity: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="flex flex-col md:grid md:grid-cols-2 items-center text-center md:text-left h-full md:h-auto w-full md:w-auto"
            style={{
              width: "100%",
              height: "100%",
              opacity: 1,
              gap: "0px",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            {/* --- Left Column: Text Content --- */}
            <div className="text-center md:text-left px-4 md:px-0 pt-8 pb-0 md:py-0 flex flex-col items-center md:items-start">
              <span
                className="bg-white text-indigo-700 mb-6"
                style={{
                  width: "auto",
                  height: "42px",
                  opacity: 1,
                  borderRadius: "76px",
                  borderWidth: "2px",
                  borderColor: "#6366f1",
                  borderStyle: "solid",
                  paddingTop: "16px",
                  paddingRight: "53px",
                  paddingBottom: "16px",
                  paddingLeft: "53px",
                  fontFamily: "Manrope",
                  fontWeight: 700,
                  fontSize: "19px",
                  lineHeight: "130%",
                  letterSpacing: "0%",
                  textAlign: "center",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Integrate
              </span>

              <h2
                className="text-2xl md:text-5xl font-bold tracking-tight leading-tight text-center md:text-left"
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                <span
                  className="md:hidden"
                  style={{
                    fontSize: "24px",
                    lineHeight: "130%",
                    letterSpacing: "0%",
                    textAlign: "center",
                  }}
                >
                  INTEGRATE YOUR VOICE AGENT WITH LEADING TOOLS
                </span>
                <span
                  className="hidden md:inline"
                  style={{
                    fontSize: "40px",
                    lineHeight: "130%",
                    letterSpacing: "0%",
                    fontFamily: "Manrope",
                    fontWeight: 700,
                  }}
                >
                  INTEGRATE YOUR VOICE AGENT WITH LEADING TOOLS
                </span>
              </h2>

              <p
                className="mt-6 md:mt-4 text-sm md:text-lg text-indigo-200 max-w-lg mx-auto md:mx-0 text-center md:text-left"
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 600,
                }}
              >
                <span
                  className="md:hidden"
                  style={{
                    fontSize: "14px",
                    lineHeight: "140%",
                    letterSpacing: "0%",
                    textAlign: "center",
                  }}
                >
                  Instantly sync your AI assistant with essential business
                  platforms like Google Calendar, GoHighLevel, Calendly, and
                  Webhooks.
                </span>
                <span
                  className="hidden md:inline"
                  style={{
                    fontSize: "18px",
                    lineHeight: "140%",
                    letterSpacing: "0%",
                    fontFamily: "Manrope",
                    fontWeight: 600,
                  }}
                >
                  Instantly sync your AI assistant with essential business
                  platforms like Google Calendar, GoHighLevel, Calendly, and
                  Webhooks.
                </span>
              </p>

              <ul className="mt-6 md:mt-6 space-y-4 md:space-y-3 text-left md:text-left w-full max-w-sm md:max-w-none mx-auto md:mx-0">
                {integrationFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center justify-start">
                    <CheckIcon />
                    <span className="ml-4 text-md text-indigo-100 text-left">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* --- Right Column: Image - Desktop Only --- */}
            {/* Shadow div */}
            <div
              className="hidden md:block"
              style={{
                width: "397.1428527832031px",
                height: "293.3707580566406px",
                opacity: 1,
                position: "absolute",
                top: "180px",
                left: "700px",
                borderRadius: "12.48px",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                zIndex: 1,
              }}
            ></div>

            <div
              className="relative hidden md:block"
              style={{
                width: "398.3995056152344px",
                height: "305.8546142578125px",
                opacity: 1,
                position: "absolute",
                top: "140px",
                left: "740px",
                boxShadow:
                  "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                zIndex: 2,
              }}
            >
              <Image
                src="/images/integrate.png"
                alt="Integration dashboard showing connections to various apps"
                layout="fill"
                objectFit="contain"
                className="rounded-xl"
              />
            </div>

            {/* --- Mobile Image at Bottom --- */}
            <div className="md:hidden mt-8 w-full flex justify-center relative">
              {/* Mobile Shadow div */}
              <div
                className="absolute"
                style={{
                  width: "280px",
                  height: "200px",
                  opacity: 1,
                  top: "23px",
                  left: "5px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 1,
                }}
              ></div>

              <div
                className="relative z-10 ml-[10px]"
                style={{
                  width: "280px",
                  height: "200px",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/images/integrate.png"
                  alt="Integration dashboard showing connections to various apps"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
