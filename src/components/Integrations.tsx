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
      <div className="max-w-7xl mx-auto">
        {/* Main blue container with the specified radial gradient */}
        <div
          className="rounded-3xl text-white py-16 md:py-20 px-6 lg:px-16 relative"
          style={{
            background: `radial-gradient(ellipse at center, #2525ba 0%, #060482 100%)`,
            width: "1240px",
            height: "544px",
            borderRadius: "24px",
            opacity: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-2 items-center"
            style={{
              width: "1041.3895263671875px",
              height: "444px",
              opacity: 1,
              gap: "80px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              alignItems: "center",
            }}
          >
            {/* --- Left Column: Text Content --- */}
            <div className="text-left">
              <span
                className="bg-white text-indigo-700"
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
                className="mt-6 text-4xl md:text-5xl font-bold tracking-tight leading-tight"
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 700,
                  fontSize: "40px",
                  lineHeight: "130%",
                  letterSpacing: "0%",
                  textTransform: "uppercase",
                }}
              >
                INTEGRATE YOUR VOICE AGENT WITH LEADING TOOLS
              </h2>

              <p
                className="mt-4 text-lg text-indigo-200 max-w-lg"
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "140%",
                  letterSpacing: "0%",
                }}
              >
                Instantly sync your AI assistant with essential business
                platforms like Google Calendar, GoHighLevel, Calendly, and
                Webhooks.
              </p>

              <ul className="mt-6 space-y-3">
                {integrationFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckIcon />
                    <span className="ml-4 text-md text-indigo-100">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* --- Right Column: Image --- */}
            {/* Shadow div */}
            <div
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
              className="relative"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
