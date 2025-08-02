"use client";
// src/components/Pricing.tsx
import React, { useState, useEffect } from "react";

// --- Reusable Checkmark Icon ---
// Styled to match the design's checkmarks within the feature lists.
const CheckIcon = ({
  isProPlan,
  isMobile,
}: {
  isProPlan?: boolean;
  isMobile?: boolean;
}) => (
  <svg
    className="flex-shrink-0"
    width={isMobile ? "24" : "24"}
    height={isMobile ? "24" : "24"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      opacity: 1,
    }}
  >
    <circle
      cx="12"
      cy="12"
      r="12"
      fill={isProPlan ? "rgba(255, 255, 255, 0.1)" : "#EEF2FF"}
    />
    <path
      d="M8.40039 12.0001L10.8004 14.4001L15.6004 9.6001"
      stroke={isProPlan ? "#FFFFFF" : "#4F46E5"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// --- Pricing Plan Data ---
const pricingPlans = [
  {
    name: "Basic plan",
    price: "$10",
    description: "Our most popular plan.",
    features: [
      "Minutes included 250",
      "Price per extra Minute 0.4",
      "AI Agent trained on your business",
      "Email & SMS call alerts",
      "Simultaneous call handling",
      "Choose voice & tone",
      "Free onboarding & setup",
      "Appointment Booking",
      "Call Transfer to Human",
      "Upload Training Docs",
    ],
    isPopular: true,
    isPro: false,
  },
  {
    name: "Pro popular",
    price: "$50",
    description: "Growing teams up to 20 users.",
    features: [
      "Minutes included 1250",
      "Price per extra Minute 0.3",
      "AI Agent trained on your business",
      "Email & SMS call alerts",
      "Simultaneous call handling",
      "Choose voice & tone",
      "Free onboarding & setup",
      "Appointment Booking",
      "Call Transfer to Human",
      "Upload Training Docs",
    ],
    isPopular: false,
    isPro: true,
  },
  {
    name: "Enterprise plan",
    price: "$99",
    description: "Advanced features + unlimited users.",
    features: [
      "Minutes included 1250",
      "Price per extra Minute 0.3",
      "AI Agent trained on your business",
      "Email & SMS call alerts",
      "Simultaneous call handling",
      "Choose voice & tone",
      "Free onboarding & setup",
      "Appointment Booking",
      "Call Transfer to Human",
      "Upload Training Docs",
    ],
    isPopular: false,
    isPro: false,
  },
];

const Pricing = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section
      className="pt-1 pb-20 md:py-24"
      style={{
        background: "linear-gradient(180deg, #F9FAFF 0%, #FFFFFF 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
        <div className="text-center">
          <span
            className="bg-indigo-100 text-indigo-700"
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
            Pricing
          </span>
          <h2 className="mt-5 text-gray-900 tracking-tight uppercase">
            <span
              className="block text-2xl font-bold md:hidden"
              style={{
                fontFamily: "Manrope",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "130%",
                letterSpacing: "0%",
                textAlign: "center",
              }}
            >
              BUILT TO AMPLIFY THE WAY YOU WORK
            </span>
            <span className="hidden md:block text-4xl md:text-5xl font-bold">
              BUILT TO AMPLIFY THE WAY YOU WORK
            </span>
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start justify-items-center">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl md:rounded-2xl p-8 h-full flex flex-col relative cursor-pointer transform transition-transform duration-300 ease-out hover:scale-105 active:scale-98 ${
                plan.isPro
                  ? "text-white shadow-2xl"
                  : "bg-white shadow-lg border border-gray-200"
              }`}
              style={{
                // Mobile-specific styles
                width: isMobile ? "358px" : "auto",
                height: isMobile ? "auto" : "auto",
                borderRadius: isMobile ? "12px" : undefined,
                border: isMobile ? "1px solid #00000014" : undefined,
                boxShadow: isMobile
                  ? "0px 2px 2px -1px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.1), 0px 12px 16px -4px rgba(0, 0, 0, 0.1)"
                  : undefined,
                marginLeft: isMobile ? "auto" : undefined,
                marginRight: isMobile ? "auto" : undefined,
                gap: isMobile ? "32px" : undefined,
                ...(plan.isPro
                  ? {
                      background: `radial-gradient(ellipse at center, #2525ba 0%, #060482 100%)`,
                    }
                  : {}),
              }}
            >
              <div className="mb-6">
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className={`text-xl font-semibold ${
                      plan.isPro ? "text-white" : "text-gray-900"
                    }`}
                    style={{
                      fontFamily: "Manrope",
                      fontSize: isMobile ? "24px" : "18px",
                      fontWeight: isMobile ? 700 : "600",
                      lineHeight: isMobile ? "130%" : undefined,
                      letterSpacing: isMobile ? "0%" : undefined,
                    }}
                  >
                    {plan.name}
                  </h3>
                  {plan.isPopular && (
                    <div className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-0 rounded-full">
                      Popular
                    </div>
                  )}
                </div>

                <div className="flex items-baseline mb-1">
                  <span
                    className={`font-bold ${
                      plan.isPro ? "text-white" : "text-gray-900"
                    }`}
                    style={{
                      fontFamily: "Manrope",
                      fontSize: isMobile ? "60px" : "48px",
                      fontWeight: isMobile ? 800 : "700",
                      lineHeight: isMobile ? "100%" : "1",
                      letterSpacing: isMobile ? "0%" : undefined,
                    }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`ml-2 ${
                      plan.isPro ? "text-gray-300" : "text-gray-500"
                    }`}
                    style={{
                      fontFamily: "Manrope",
                      fontSize: isMobile ? "18px" : "16px",
                      fontWeight: isMobile ? 700 : "400",
                      lineHeight: isMobile ? "130%" : undefined,
                      letterSpacing: isMobile ? "0%" : undefined,
                    }}
                  >
                    per month
                  </span>
                </div>

                <p
                  className={`${
                    plan.isPro ? "text-gray-300" : "text-gray-600"
                  }`}
                  style={{
                    fontFamily: "Manrope",
                    fontSize: isMobile ? "18px" : "14px",
                    fontWeight: isMobile ? 600 : "400",
                    lineHeight: isMobile ? "24px" : "1.5",
                    letterSpacing: isMobile ? "0%" : undefined,
                  }}
                >
                  {plan.description}
                </p>
              </div>

              <button
                className={`w-full rounded-lg font-semibold transition-transform transform hover:scale-105 ${
                  isMobile ? "mb-1 py-0" : "mb-8 py-3"
                } ${
                  plan.isPro
                    ? "bg-white text-indigo-700"
                    : "text-white bg-gradient-to-r from-indigo-500 to-blue-500"
                }`}
                style={{
                  fontFamily: "Manrope",
                  fontSize: isMobile ? "18px" : "16px",
                  fontWeight: isMobile ? 700 : "600",
                  lineHeight: isMobile ? "130%" : undefined,
                  letterSpacing: isMobile ? "0%" : undefined,
                  padding: "12px 24px",
                  width: isMobile ? "294px" : undefined,
                  height: isMobile ? "56px" : undefined,
                  gap: isMobile ? "12px" : undefined,
                }}
              >
                Get started
              </button>

              <div
                className="pt-8 border-t flex-grow"
                style={{
                  borderColor: plan.isPro
                    ? "rgba(255, 255, 255, 0.2)"
                    : "rgb(229 231 235)",
                }}
              >
                <h4
                  className={`font-semibold uppercase tracking-wider mb-1 ${
                    plan.isPro ? "text-white" : "text-gray-900"
                  }`}
                  style={{
                    fontFamily: "Manrope",
                    fontSize: isMobile ? "24px" : "12px",
                    fontWeight: isMobile ? 700 : "600",
                    lineHeight: isMobile ? "130%" : undefined,
                    letterSpacing: isMobile ? "0%" : "0.1em",
                  }}
                >
                  Features
                </h4>
                <p
                  className={`mb-6 ${
                    plan.isPro ? "text-gray-400" : "text-gray-500"
                  }`}
                  style={{
                    fontFamily: "Manrope",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "1.5",
                  }}
                >
                  {plan.name === "Basic plan"
                    ? "Everything in our free plan plus...."
                    : plan.name === "Enterprise plan"
                    ? "Everything in Business plus...."
                    : "Everything in Basic plus...."}
                </p>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckIcon isProPlan={plan.isPro} isMobile={isMobile} />
                      <span
                        className={`ml-3 leading-relaxed ${
                          plan.isPro ? "text-gray-300" : "text-gray-700"
                        }`}
                        style={{
                          fontFamily: "Manrope",
                          fontSize: isMobile ? "14px" : "16px",
                          fontWeight: isMobile ? 500 : "400",
                          lineHeight: isMobile ? "21px" : "1.6",
                          letterSpacing: isMobile ? "0%" : undefined,
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
