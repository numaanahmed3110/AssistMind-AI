// src/components/AiInAction.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Data for the company logos
const companies = [
  { name: "Layers", logo: "/companies/layers.svg" },
  { name: "Sisyphus", logo: "/companies/sisyphus.svg" },
  { name: "Circooles", logo: "/companies/circooles.svg" },
  { name: "Catalog", logo: "/companies/catalog.svg" },
  { name: "Sisyphus", logo: "/companies/sisyphus.svg" },
  { name: "Circooles", logo: "/companies/circooles.svg" },
];

// Agent data
const agents = [
  {
    id: "clara",
    name: "Clara",
    image: "/agents/clara.png",
    category: "Plumbing",
    service: "Plumbing Service",
    description:
      "Hi there! Thanks for calling FlowFix Plumbing. We have a technician available today at 2 PM or tomorrow morning – which works best for you?",
    duration: "1m12s",
  },
  {
    id: "jenny",
    name: "Jenny",
    image: "/agents/jenny.png",
    category: "Healthcare",
    service: "Medical Consultation",
    description:
      "Hello! Thank you for calling MediCare Plus. I can schedule your appointment with Dr. Smith for next Tuesday at 3 PM or Wednesday at 10 AM. Which time works better?",
    duration: "2m05s",
  },
  {
    id: "sam",
    name: "Sam",
    image: "/agents/sam.png",
    category: "Real Estate",
    service: "Property Consultation",
    description:
      "Welcome to DreamHome Realty! I'd love to help you find your perfect home. Are you looking to buy or sell, and what's your preferred neighborhood?",
    duration: "1m48s",
  },
];

const AiInAction = () => {
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);

  return (
    <section className="bg-white py-20 md:pt-6 md:pb-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Top Section: Trusted by Companies --- */}
        <div className="text-center">
          <p
            className="text-gray-900 tracking-widest uppercase"
            style={{
              fontFamily: "Manrope",
              fontWeight: 700,
              fontSize: "32px",
              lineHeight: "130%",
              letterSpacing: "0%",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            BUILT FOR COMPANIES THAT VALUE TRUST AND COLLABORATION.
          </p>
          <div className="mt-8 relative w-full overflow-hidden">
            {/* Fade effect on left and right sides */}
            <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

            {/* Marquee Animation Container */}
            <div className="flex animate-marquee space-x-6">
              {/* First set of companies */}
              {companies.map((company, index) => (
                <div
                  key={`first-${index}`}
                  className="flex items-center bg-white shadow-sm flex-shrink-0"
                  style={{
                    width: "230px",
                    height: "88px",
                    opacity: 1,
                    gap: "10px",
                    borderRadius: "16px",
                    borderWidth: "1px",
                    borderColor: "#e5e7eb",
                    borderStyle: "solid",
                    paddingTop: "20px",
                    paddingRight: "27px",
                    paddingBottom: "20px",
                    paddingLeft: "27px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={44}
                    height={44}
                    style={{
                      width: "39px",
                      height: "39px",
                      opacity: 1,
                      position: "relative",
                      top: "2px",
                    }}
                  />
                  <span
                    className="text-gray-700"
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    {company.name}
                  </span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {companies.map((company, index) => (
                <div
                  key={`second-${index}`}
                  className="flex items-center bg-white shadow-sm flex-shrink-0"
                  style={{
                    width: "230px",
                    height: "88px",
                    opacity: 1,
                    gap: "10px",
                    borderRadius: "16px",
                    borderWidth: "1px",
                    borderColor: "#e5e7eb",
                    borderStyle: "solid",
                    paddingTop: "20px",
                    paddingRight: "27px",
                    paddingBottom: "20px",
                    paddingLeft: "27px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={44}
                    height={44}
                    style={{
                      width: "44px",
                      height: "44px",
                      opacity: 1,
                      position: "relative",
                      top: "2px",
                    }}
                  />
                  <span
                    className="text-gray-700"
                    style={{
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- Main Content: Hear AI in Action --- */}
        <div className="mt-24 text-center flex justify-center">
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            What It Does
          </span>
        </div>
        <div className="text-center">
          <h2
            className="mt-4 text-gray-900"
            style={{
              fontFamily: "Manrope",
              fontWeight: 900,
              fontSize: "40px",
              lineHeight: "130%",
              letterSpacing: "0%",
              textAlign: "center",
            }}
          >
            Hear Your AI Agent in Action
          </h2>

          {/* Agent Cards Grid with Sliding Animation */}
          <div
            className="mt-5 relative overflow-hidden max-w-7xl mx-auto"
            style={{ height: "500px" }}
          >
            <div className="flex items-center justify-center gap-12 h-full">
              {agents.map((agent, index) => {
                const isHovered = hoveredAgent === agent.id;
                // const isFirstAgent = index === 0;
                const isLastAgent = index === agents.length - 1;
                // const isMiddleAgent = index === 1;

                // Calculate transforms based on which agent is hovered
                let transform = "translateX(0px)";
                if (hoveredAgent) {
                  if (hoveredAgent === agents[0].id) {
                    // First agent hovered - move others to the right but keep them visible
                    if (index === 1) transform = "translateX(200px)"; // Middle agent
                    if (index === 2) transform = "translateX(250px)"; // Last agent
                  } else if (hoveredAgent === agents[1].id) {
                    // Middle agent hovered - move first and last left, show details on right
                    if (index === 0) transform = "translateX(-150px)"; // First agent moves left
                    if (index === 2) transform = "translateX(150px)"; // Last agent moves right but less
                  } else if (hoveredAgent === agents[2].id) {
                    // Last agent hovered - move it more to the right and others less to the left
                    if (index === 0) transform = "translateX(-120px)"; // First agent moves left less
                    if (index === 1) transform = "translateX(-80px)"; // Middle agent moves left less
                    if (index === 2) transform = "translateX(100px)"; // Last agent moves right more
                  }
                }

                return (
                  <motion.div
                    key={agent.id}
                    className="relative flex items-center"
                    onMouseEnter={() => setHoveredAgent(agent.id)}
                    onMouseLeave={() => setHoveredAgent(null)}
                    animate={{
                      transform,
                      zIndex: isHovered ? 20 : 10,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{
                      position: "relative",
                    }}
                  >
                    {/* Agent Image */}
                    <motion.div
                      className="relative flex-shrink-0 bg-gray-50 cursor-pointer"
                      style={{
                        width: "284px",
                        height: "393px",
                        borderRadius: "12px",
                        paddingTop: "16px",
                        paddingRight: "37px",
                        paddingBottom: "16px",
                        paddingLeft: "37px",
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <Image
                        src={agent.image}
                        alt={agent.name}
                        fill
                        className="rounded-xl shadow-xl object-contain"
                        sizes="284px"
                      />
                    </motion.div>

                    {/* Service Details Card - Appears beside the image */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            x: isLastAgent ? -50 : 50,
                            scale: 0.9,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            x: isLastAgent ? -50 : 50,
                            scale: 0.9,
                          }}
                          transition={{
                            duration: 0.4,
                            ease: "easeOut",
                            delay: 0.1,
                          }}
                          className="absolute bg-white rounded-2xl shadow-2xl border border-gray-100"
                          style={{
                            width: "350px",
                            height: "393px",
                            padding: "28px",
                            left: isLastAgent ? "-370px" : "304px",
                            top: "0px",
                            zIndex: 30,
                          }}
                        >
                          {/* Category Badge */}
                          <motion.span
                            className="inline-block bg-[#4F46E5] text-white font-bold px-4 py-2 rounded-lg mb-4"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            style={{
                              fontSize: "14px",
                              fontFamily: "Manrope",
                            }}
                          >
                            {agent.category}
                          </motion.span>

                          {/* Service Title */}
                          <motion.h3
                            className="text-gray-900 mb-3"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            style={{
                              fontFamily: "Manrope",
                              fontWeight: 800,
                              fontSize: "22px",
                              lineHeight: "130%",
                            }}
                          >
                            {agent.service}
                          </motion.h3>

                          {/* Description */}
                          <motion.p
                            className="text-gray-600 mb-6 leading-relaxed"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            style={{
                              fontFamily: "Manrope",
                              fontSize: "15px",
                              lineHeight: "150%",
                            }}
                          >
                            &ldquo;{agent.description}&rdquo;
                          </motion.p>

                          {/* Audio Player Controls */}
                          <motion.div
                            className="flex items-center gap-4"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                          >
                            <motion.button
                              className="bg-[#4F46E5] text-white rounded-full flex-shrink-0 flex items-center justify-center hover:bg-indigo-700 transition-colors shadow-lg"
                              style={{
                                width: "48px",
                                height: "48px",
                              }}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <svg
                                className="w-5 h-5 ml-1"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M6.3 5.17a1.4 1.4 0 00-2.1 1.63L7.6 12l-3.4 5.2a1.4 1.4 0 002.1 1.63L13 12 6.3 5.17z" />
                              </svg>
                            </motion.button>

                            <div className="flex-1">
                              <div className="bg-gray-200 rounded-full h-2 mb-2">
                                <motion.div
                                  className="bg-[#4F46E5] h-2 rounded-full"
                                  initial={{ width: "0%" }}
                                  animate={{ width: "25%" }}
                                  transition={{ duration: 0.8, delay: 0.6 }}
                                />
                              </div>
                              <div className="flex justify-between text-sm text-gray-500">
                                <span
                                  style={{
                                    fontFamily: "Manrope",
                                    fontWeight: 500,
                                  }}
                                >
                                  0:00
                                </span>
                                <span
                                  style={{
                                    fontFamily: "Manrope",
                                    fontWeight: 500,
                                  }}
                                >
                                  {agent.duration}
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiInAction;
