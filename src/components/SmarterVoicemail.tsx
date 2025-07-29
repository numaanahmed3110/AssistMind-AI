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
          <div className="text-left">
            <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-medium px-6 py-2 rounded-full">
              Talk To Work Smarter
            </span>

            <h2 className="mt-8 text-2xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
              SMARTER THAN A VOICEMAIL.
              <br />
              CHEAPER THAN A
              <br />
              RECEPTIONIST.
            </h2>

            <ul className="mt-10 space-y-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon />
                  <span className="ml-4 text-lg text-gray-700 leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Right Column: Image Composition --- */}
          <div className="relative h-[500px] md:h-[500px]">
            {/* Base Dashboard Image - Perfect rectangular container */}
            <div className="absolute top-0 right-0 w-[85%] h-[80%] bg-white rounded-xl shadow-2xl overflow-hidden">
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
            <div className="absolute bottom-8 left-0 w-[65%] max-w-[380px]">
              <Image
                src="/images/call-detail-popup.png"
                alt="Call detail popup with audio transcript"
                width={380}
                height={170}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmarterVoicemail;
