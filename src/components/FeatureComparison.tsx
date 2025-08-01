// src/components/FeatureComparison.tsx
import React from "react";

// --- Reusable Icon Components ---
// Using components for icons keeps the main structure clean and easy to read.

const CheckIcon = () => (
  <svg
    width="29.166664123535156"
    height="29.166664123535156"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      opacity: 1,
      position: "relative",
      top: "2.92px",
      left: "2.92px",
    }}
  >
    <circle cx="12" cy="12" r="12" fill="#4F46E5" />
    <path
      d="M7.5 12.5L10.5 15.5L16.5 9.5"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CrossIcon = () => (
  <svg
    width="29.166664123535156"
    height="29.166664123535156"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      opacity: 1,
      position: "relative",
      top: "2.92px",
      left: "2.92px",
    }}
  >
    <circle cx="12" cy="12" r="11.5" fill="white" stroke="#E0E7FF" />
    <path
      d="M15 9L9 15"
      stroke="#4F46E5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 9L15 15"
      stroke="#4F46E5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// --- Data for the Comparison Table ---
// This array holds all the content from your screenshots, making the table dynamic.
const comparisonData = [
  {
    feature: "Available 24/7",
    ai: { icon: <CheckIcon />, text: "Always on – nights, weekends, holidays" },
    voicemail: { icon: <CrossIcon />, text: null },
    receptionist: { icon: <CrossIcon />, text: "(Office hours only)" },
  },
  {
    feature: "Answers Every Call",
    ai: { icon: <CheckIcon />, text: "Never misses a call" },
    voicemail: { icon: <CrossIcon />, text: null },
    receptionist: { icon: <CheckIcon />, text: "(during hours)" },
  },
  {
    feature: "Books Appointments Automatically",
    ai: { icon: <CheckIcon />, text: "Syncs with your calendar in real time" },
    voicemail: { icon: <CrossIcon />, text: null },
    receptionist: { icon: <CheckIcon />, text: "(manually)" },
  },
  {
    feature: "Monthly Cost",
    ai: { icon: null, text: "From $99" },
    voicemail: { icon: null, text: "$0" },
    receptionist: { icon: null, text: "$2,500+" },
  },
  {
    feature: "Handles Multiple Calls at Once",
    ai: { icon: null, text: "Up to 20 concurrent calls" },
    voicemail: { icon: <CrossIcon />, text: null },
    receptionist: { icon: <CrossIcon />, text: null },
  },
  {
    feature: "Call Summaries & Transcripts",
    ai: { icon: <CheckIcon />, text: "Instant email or CRM delivery" },
    voicemail: { icon: <CrossIcon />, text: null },
    receptionist: { icon: <CrossIcon />, text: null },
  },
  {
    feature: "Customizable Scripts & Tone",
    ai: { icon: <CheckIcon />, text: "Fully editable responses" },
    voicemail: { icon: <CrossIcon />, text: null },
    receptionist: { icon: <CrossIcon />, text: null },
  },
  {
    feature: "Setup Time",
    ai: { icon: <CheckIcon />, text: "Live in 15 minutes" },
    voicemail: { icon: null, text: "None" },
    receptionist: { icon: null, text: "Weeks to hire/train" },
  },
];

const FeatureComparison = () => {
  return (
    <section className="bg-gray-50 pt-8  md:py-8">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span
            className="bg-indigo-100 text-indigo-700"
            style={{
              width: "auto",
              height: "45px",
              opacity: 1,
              gap: "10px",
              borderRadius: "76px",
              borderWidth: "2px",
              borderColor: "#6366f1",
              borderStyle: "solid",
              paddingTop: "10px",
              paddingRight: "25px",
              paddingBottom: "10px",
              paddingLeft: "25px",
              fontFamily: "Manrope",
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "21px",
              letterSpacing: "0%",
              textAlign: "center",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Features
          </span>
          <h2
            className="mt-6 text-gray-900 text-2xl md:text-4xl"
            style={{
              fontFamily: "Manrope",
              fontWeight: 700,
              letterSpacing: "0%",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            <span className="text-2xl leading-[130%] md:text-[40px] md:leading-[130%] block md:hidden">
              BUILT TO AMPLIFY THE WAY YOU WORK
            </span>
            <span className="text-2xl leading-[130%] md:text-[40px] md:leading-[130%] hidden md:block">
              WONDERING IF AN AI AGENT IS
              <br className="hidden sm:block" /> WORTH IT? CHECK THIS OUT.
            </span>
          </h2>
        </div>

        {/* Table Container - Made scrollable horizontally */}
        <div className="mt-8 md:mt-16 overflow-x-auto">
          <div
            className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden min-w-[1259px] h-[828px]"
            style={{
              borderRadius: "12px",
              borderWidth: "1px",
            }}
          >
            {/* Table Header */}
            <div className="grid grid-cols-4 text-white font-semibold text-lg">
              {/* Mobile: light gray bg, Desktop: blue bg */}
              <div className="bg-gray-100 md:bg-[#4F46E5]">
                <div
                  className="border-b text-left flex items-center border-gray-300"
                  style={{
                    width: "314.75px",
                    height: "92px",
                  }}
                >
                  <span
                    className="text-gray-600 md:text-white"
                    style={{
                      gap: "10px",
                      paddingTop: "10px",
                      paddingRight: "16px",
                      paddingBottom: "12px",
                      paddingLeft: "16px",
                      fontFamily: "Manrope",
                      fontWeight: 700,
                      fontSize: "18px",
                      lineHeight: "130%",
                      letterSpacing: "0%",
                    }}
                  >
                    Features
                  </span>
                </div>
              </div>

              <div className="bg-gray-100 md:bg-[#4F46E5]">
                <div
                  className="border-b text-center flex items-center justify-center border-gray-300"
                  style={{
                    width: "314.75px",
                    height: "92px",
                  }}
                >
                  <span
                    className="text-gray-600 md:text-white"
                    style={{
                      gap: "10px",
                      paddingTop: "10px",
                      paddingRight: "16px",
                      paddingBottom: "12px",
                      paddingLeft: "16px",
                      fontFamily: "Manrope",
                      fontWeight: 700,
                      fontSize: "18px",
                      lineHeight: "130%",
                      letterSpacing: "0%",
                    }}
                  >
                    AI Agent (AssistMind)
                  </span>
                </div>
              </div>

              <div className="bg-gray-100 md:bg-[#4F46E5]">
                <div
                  className="border-b text-center flex items-center justify-center border-gray-300"
                  style={{
                    width: "314.75px",
                    height: "92px",
                  }}
                >
                  <span
                    className="text-gray-600 md:text-white"
                    style={{
                      gap: "10px",
                      paddingTop: "10px",
                      paddingRight: "16px",
                      paddingBottom: "12px",
                      paddingLeft: "16px",
                      fontFamily: "Manrope",
                      fontWeight: 700,
                      fontSize: "18px",
                      lineHeight: "130%",
                      letterSpacing: "0%",
                    }}
                  >
                    Voicemail
                  </span>
                </div>
              </div>

              <div className="bg-gray-100 md:bg-[#4F46E5]">
                <div
                  className="border-b text-center flex items-center justify-center border-gray-300"
                  style={{
                    width: "314.75px",
                    height: "92px",
                  }}
                >
                  <span
                    className="text-gray-600 md:text-white"
                    style={{
                      gap: "10px",
                      paddingTop: "10px",
                      paddingRight: "16px",
                      paddingBottom: "12px",
                      paddingLeft: "16px",
                      fontFamily: "Manrope",
                      fontWeight: 700,
                      fontSize: "18px",
                      lineHeight: "130%",
                      letterSpacing: "0%",
                    }}
                  >
                    Human Receptionist
                  </span>
                </div>
              </div>
            </div>

            {/* Table Body */}
            <div>
              {comparisonData.map((row, index) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-4 items-center ${
                    index < comparisonData.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                >
                  {/* Feature Column */}
                  <div
                    className="border-b border-gray-200 text-gray-700 font-medium text-left flex items-center"
                    style={{
                      width: "314.75px",
                      height: "92px",
                    }}
                  >
                    <span
                      className="text-gray-700"
                      style={{
                        gap: "10px",
                        paddingTop: "10px",
                        paddingRight: "16px",
                        paddingBottom: "12px",
                        paddingLeft: "16px",
                        fontFamily: "Manrope",
                        fontWeight: 700,
                        fontSize: "18px",
                        lineHeight: "130%",
                        letterSpacing: "0%",
                      }}
                    >
                      {row.feature}
                    </span>
                  </div>

                  {/* AI Agent Column */}
                  <div
                    className="border-b border-gray-200 flex items-center"
                    style={{
                      width: "314.75px",
                      height: "92px",
                    }}
                  >
                    <div
                      className="flex items-center text-left gap-x-2"
                      style={{
                        gap: "10px",
                        paddingTop: "10px",
                        paddingRight: "16px",
                        paddingBottom: "12px",
                        paddingLeft: "16px",
                        fontFamily: "Manrope",
                        fontWeight: 700,
                        fontSize: "18px",
                        lineHeight: "130%",
                        letterSpacing: "0%",
                      }}
                    >
                      {row.ai.icon}
                      {row.ai.text && (
                        <span className="text-gray-600">{row.ai.text}</span>
                      )}
                    </div>
                  </div>

                  {/* Voicemail Column */}
                  <div
                    className="border-b border-gray-200 flex items-center"
                    style={{
                      width: "314.75px",
                      height: "92px",
                    }}
                  >
                    <div
                      className="flex items-center text-left gap-x-2"
                      style={{
                        gap: "10px",
                        paddingTop: "10px",
                        paddingRight: "16px",
                        paddingBottom: "12px",
                        paddingLeft: "16px",
                        fontFamily: "Manrope",
                        fontWeight: 700,
                        fontSize: "18px",
                        lineHeight: "130%",
                        letterSpacing: "0%",
                      }}
                    >
                      {row.voicemail.icon}
                      {row.voicemail.text && (
                        <span className="text-gray-800 font-medium">
                          {row.voicemail.text}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Receptionist Column */}
                  <div
                    className="border-b border-gray-200 flex items-center"
                    style={{
                      width: "314.75px",
                      height: "92px",
                    }}
                  >
                    <div
                      className="flex items-center text-left gap-x-2"
                      style={{
                        gap: "10px",
                        paddingTop: "10px",
                        paddingRight: "16px",
                        paddingBottom: "12px",
                        paddingLeft: "16px",
                        fontFamily: "Manrope",
                        fontWeight: 700,
                        fontSize: "18px",
                        lineHeight: "130%",
                        letterSpacing: "0%",
                      }}
                    >
                      {row.receptionist.icon}
                      {row.receptionist.text && (
                        <span className="text-gray-600">
                          {row.receptionist.text}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureComparison;
