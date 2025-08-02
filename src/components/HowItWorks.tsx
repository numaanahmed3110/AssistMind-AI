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

// Reusable Connector Component with proper arrow design for both mobile and desktop
const DottedConnector = ({ isMobile = false }) => {
  if (isMobile) {
    return (
      <div className="lg:hidden flex justify-center my-4">
        <div className="flex flex-col items-center">
          <div className="border-l-2 border-dashed border-blue-300 h-6"></div>
          <div className="text-blue-300 text-sm">▼</div>
        </div>
      </div>
    );
  }

  return (
    <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-7 w-8 z-10">
      <div className="border-t-2 border-dashed border-blue-300 w-full relative">
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-blue-300 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section className="bg-white pt-10 pb-6 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Updated container with exact spacing and proportions */}
        <div
          className="rounded-[20px] md:rounded-[2rem] text-white text-center py-10 md:py-16 px-8 lg:px-12 w-[358px] md:w-auto min-h-fit mx-auto"
          style={{
            background: `radial-gradient(ellipse at center, #2525ba 0%, #060482 100%)`,
          }}
        >
          <span
            className="bg-white text-indigo-700"
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
            Step By Step
          </span>
          <h2
            className="mt-6 text-2xl md:text-5xl font-bold tracking-tight"
            style={{
              fontFamily: "Manrope",
              fontWeight: 700,
              letterSpacing: "0%",
              textAlign: "center",
            }}
          >
            <span className="text-2xl leading-[130%] md:text-5xl md:leading-normal">
              HOW IT WORKS
            </span>
          </h2>

          {/* Grid container with exact spacing as in reference */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-y-0 lg:gap-y-8 lg:gap-x-8 items-start justify-center">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="relative text-center px-2 flex justify-center mb-8 lg:mb-0">
                  <div
                    className="bg-white text-gray-900 shadow-lg flex flex-col items-center w-[320px] min-h-fit py-6 md:h-[237px]"
                    style={{
                      opacity: 1,
                      gap: "12px",
                      borderRadius: "12px",
                      paddingTop: "20px",
                      paddingRight: "15px",
                      paddingBottom: "30px",
                      paddingLeft: "15px",
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
                        marginBottom: "5px",
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
                        marginBottom: "0px",
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
                        lineHeight: "120%",
                        letterSpacing: "0%",
                        textAlign: "center",
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                  {/* Desktop connector */}
                  {index < steps.length - 1 && <DottedConnector />}
                </div>
                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <DottedConnector isMobile={true} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
