// src/components/SmarterVoicemail.tsx
import React from "react";
import Image from "next/image";

const features = [
  "Human-like conversations with smart pauses",
  "24/7 call handling with custom flows",
  "Appointment booking & lead qualification",
  "CRM & calendar integrations",
  "Transcripts and summaries sent instantly",
];

// A reusable checkmark icon component to match the reference design
const CheckIcon = () => (
  <svg
    className="w-7 h-7 flex-shrink-0 mt-0.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="12" fill="#5B21B6" />
    <path
      d="M8.40039 12.0001L10.8004 14.4001L15.6004 9.6001"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SmarterVoicemail = () => {
  return (
    <section className="bg-white py-10 md:py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 items-center">
          {/* --- Left Column: Text Content --- */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start">
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
                Talk To Work Smarter
              </span>
            </div>

            <h2
              className="mt-8 text-gray-900 tracking-tight leading-tight text-center md:text-left"
              style={{
                fontFamily: "Manrope",
                fontWeight: 700,
                letterSpacing: "0%",
              }}
            >
              <span className="text-2xl leading-[130%] md:text-4xl md:leading-tight">
                SMARTER THAN A VOICEMAIL.
                <br />
                CHEAPER THAN A
                <br />
                RECEPTIONIST.
              </span>
            </h2>

            <ul className="mt-10 space-y-6">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start justify-start md:justify-start"
                >
                  <CheckIcon />
                  <span
                    className="ml-2 md:ml-4 text-gray-700 text-left text-base md:text-lg"
                    style={{
                      fontFamily: "Manrope",
                      fontWeight: 600,
                      lineHeight: "24px",
                      letterSpacing: "0%",
                    }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Right Column: Image Composition --- */}
          <div className="relative h-[230px] md:h-[500px]">
            {/* Base Dashboard Image - Perfect rectangular container */}
            <div className="absolute bg-white rounded-xl shadow-2xl overflow-hidden w-[337px] h-[236px] left-[10px] top-[-20px] md:w-[662px] md:h-[464px] md:left-[15px] md:top-0">
              <Image
                src="/images/call-log-dashboard.png"
                alt="AssistMind AI Call Log Dashboard"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                className=""
              />
            </div>
            {/* Call Detail Popup Overlay - Positioned as in reference */}
            <div className="absolute w-[203px] h-[126px] top-[120px] left-0 rounded-[8px] shadow-2xl md:w-[65%] md:max-w-[380px] md:h-[170px] md:bottom-4 md:top-auto md:left-[-36px] md:rounded-xl">
              <Image
                src="/images/call-detail-popup.png"
                alt="Call detail popup with audio transcript"
                layout="fill"
                objectFit="contain"
                className="rounded-[8px] md:rounded-xl "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmarterVoicemail;
