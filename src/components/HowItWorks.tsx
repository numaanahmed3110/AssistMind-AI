// src/components/HowItWorks.tsx
import React from "react";

// Data for the steps (no changes)
const steps = [
  {
    number: "01",
    title: "We learn your business",
    description: "Pulling data from your website, services, and FAQs.",
  },
  {
    number: "02",
    title: "You customize the voice, tone & tasks",
    description: "Choose what the agent should say and do.",
  },
  {
    number: "03",
    title: "Go live in minutes",
    description:
      "Your agent answers calls 24/7 and delivers leads directly to you.",
  },
];

// Reusable Connector Component with simple straight dotted line
const DottedConnector = () => (
  <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-7 w-8 z-10">
    <div className="border-t-2 border-dashed border-blue-300 w-full"></div>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="bg-white py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Updated container with exact spacing and proportions */}
        <div
          className="rounded-[2rem] text-white text-center py-12 md:py-16 px-8 lg:px-12"
          style={{
            background: `radial-gradient(ellipse at center, #2525ba 0%, #060482 100%)`,
          }}
        >
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
            Step By Step
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
            HOW IT WORKS
          </h2>

          {/* Grid container with exact spacing as in reference */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-x-8 items-start">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center px-2">
                <div
                  className="bg-white text-gray-900 shadow-lg h-full flex flex-col items-center"
                  style={{
                    width: "320px",
                    height: "237px",
                    opacity: 1,
                    gap: "8px",
                    borderRadius: "12px",
                    paddingTop: "20px",
                    paddingRight: "15px",
                    paddingBottom: "20px",
                    paddingLeft: "15px",
                    top: "170px",
                    left: "-0.06px",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "#e5e7eb",
                    transform: "rotate(0deg)",
                    textAlign: "center",
                  }}
                >
                  <div
                    className="bg-blue-600 text-white rounded-full flex items-center justify-center"
                    style={{
                      width: "60px",
                      height: "60px",
                      opacity: 1,
                      gap: "10px",
                      borderRadius: "80px",
                      padding: "16px",
                      transform: "rotate(0deg)",
                      margin: "0 auto",
                      marginBottom: "10px",
                    }}
                  >
                    <span
                      className="text-white font-bold"
                      style={{
                        fontFamily: "Manrope",
                        fontWeight: 700,
                        fontSize: "18px",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <h3
                    className="text-gray-900"
                    style={{
                      fontFamily: "Manrope",
                      fontWeight: 700,
                      fontSize: "22px",
                      lineHeight: "125%",
                      letterSpacing: "0px",
                      textAlign: "center",
                      marginBottom: "6px",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-gray-600 flex-grow"
                    style={{
                      fontFamily: "Manrope",
                      fontWeight: 600,
                      fontSize: "18px",
                      lineHeight: "140%",
                      letterSpacing: "0%",
                      textAlign: "center",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && <DottedConnector />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
