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
          <span className="inline-block bg-white text-indigo-700 text-lg font-medium px-6 py-2 rounded-full">
            Step By Step
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
            HOW IT WORKS
          </h2>

          {/* Grid container with exact spacing as in reference */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-x-8 items-start">
            {steps.map((step, index) => (
              <div key={index} className="relative text-left px-2">
                <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg h-full flex flex-col min-h-[240px]">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                    <span className="text-xl font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
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
