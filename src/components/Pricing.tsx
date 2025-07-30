// src/components/Pricing.tsx
import React from "react";

// --- Reusable Checkmark Icon ---
// Styled to match the design's checkmarks within the feature lists.
const CheckIcon = ({ isProPlan }: { isProPlan?: boolean }) => (
  <svg
    className="w-6 h-6 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
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
      "Access to basic features",
      "Basic reporting and analytics",
      "Up to 10 individual users",
      "20 GB individual data",
      "Basic chat and email support",
    ],
    isPopular: true,
    isPro: false,
  },
  {
    name: "Pro popular",
    price: "$50",
    description: "Growing teams up to 20 users.",
    features: [
      "200+ integrations",
      "Advanced reporting and analytics",
      "Up to 20 individual users",
      "200 GB individual data",
      "Priority chat and email support",
    ],
    isPopular: false,
    isPro: true,
  },
  {
    name: "Enterprise plan",
    price: "$99",
    description: "Advanced features + unlimited users.",
    features: [
      "Advanced custom fields",
      "Audit log and data history",
      "Unlimited individual users",
      "Unlimited individual data",
      "Personalized + priority service",
    ],
    isPopular: false,
    isPro: false,
  },
];

const Pricing = () => {
  return (
    <section
      className="py-20 md:py-24"
      style={{
        background: "linear-gradient(180deg, #F9FAFF 0%, #FFFFFF 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight uppercase">
            BUILT TO AMPLIFY THE WAY YOU WORK
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 h-full flex flex-col relative cursor-pointer transform transition-transform duration-300 ease-out hover:scale-105 active:scale-98 ${
                plan.isPro
                  ? "text-white shadow-2xl"
                  : "bg-white shadow-lg border border-gray-200"
              }`}
              style={
                plan.isPro
                  ? {
                      background: `radial-gradient(ellipse at center, #2525ba 0%, #060482 100%)`,
                    }
                  : {}
              }
            >
              <div className="mb-6">
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className={`text-xl font-semibold ${
                      plan.isPro ? "text-white" : "text-gray-900"
                    }`}
                    style={{
                      fontFamily: "Manrope",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    {plan.name}
                  </h3>
                  {plan.isPopular && (
                    <div className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                </div>

                <div className="flex items-baseline mb-3">
                  <span
                    className={`font-bold ${
                      plan.isPro ? "text-white" : "text-gray-900"
                    }`}
                    style={{
                      fontFamily: "Manrope",
                      fontSize: "48px",
                      fontWeight: "700",
                      lineHeight: "1",
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
                      fontSize: "16px",
                      fontWeight: "400",
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
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "1.5",
                  }}
                >
                  {plan.description}
                </p>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-transform transform hover:scale-105 mb-8 ${
                  plan.isPro
                    ? "bg-white text-indigo-700"
                    : "text-white bg-gradient-to-r from-indigo-500 to-blue-500"
                }`}
                style={{
                  fontFamily: "Manrope",
                  fontSize: "16px",
                  fontWeight: "600",
                  padding: "12px 24px",
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
                    fontSize: "12px",
                    fontWeight: "600",
                    letterSpacing: "0.1em",
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
                      <CheckIcon isProPlan={plan.isPro} />
                      <span
                        className={`ml-3 leading-relaxed ${
                          plan.isPro ? "text-gray-300" : "text-gray-700"
                        }`}
                        style={{
                          fontFamily: "Manrope",
                          fontSize: "16px",
                          fontWeight: "400",
                          lineHeight: "1.6",
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
