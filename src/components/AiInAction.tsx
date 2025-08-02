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
  const [isMobile, setIsMobile] = useState(false);
  const [activeAgentIndex, setActiveAgentIndex] = useState(0);

  // Check if device is mobile
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle scroll to detect which image is in view
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const itemWidth = 206 + 32; // image width + reduced gap for tighter spacing
    const centerPosition = scrollLeft + container.offsetWidth / 2;
    const newActiveIndex = Math.round(
      (centerPosition - itemWidth / 2) / itemWidth
    );

    if (
      newActiveIndex >= 0 &&
      newActiveIndex < agents.length &&
      newActiveIndex !== activeAgentIndex
    ) {
      setActiveAgentIndex(newActiveIndex);
    }
  };

  return (
    <section className="bg-white pt-2 pb-6 md:pt-6 md:pb-15 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        {/* --- Top Section: Trusted by Companies --- */}
        <div className="text-center">
          <p
            className="text-gray-900 tracking-widest uppercase pt-2 pb-4"
            style={{
              fontFamily: "Manrope",
              fontWeight: 700,
              fontSize: "clamp(18px, 4vw, 32px)",
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
                    width: "150px",
                    height: "57px",
                    opacity: 1,
                    gap: "10px",
                    borderRadius: "16px",
                    borderWidth: "1px",
                    borderColor: "#e5e7eb",
                    borderStyle: "solid",
                    padding: "12px",
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
                      width: "clamp(24px, 4vw, 39px)",
                      height: "clamp(24px, 4vw, 39px)",
                      opacity: 1,
                      position: "relative",
                      top: "2px",
                    }}
                  />
                  <span
                    className="text-gray-700"
                    style={{
                      fontWeight: "bold",
                      fontSize: "clamp(14px, 2.5vw, 20px)",
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
                    width: "150px",
                    height: "57px",
                    opacity: 1,
                    gap: "10px",
                    borderRadius: "16px",
                    borderWidth: "1px",
                    borderColor: "#e5e7eb",
                    borderStyle: "solid",
                    padding: "12px",
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
                      width: "clamp(28px, 4vw, 44px)",
                      height: "clamp(28px, 4vw, 44px)",
                      opacity: 1,
                      position: "relative",
                      top: "2px",
                    }}
                  />
                  <span
                    className="text-gray-700"
                    style={{
                      fontWeight: "bold",
                      fontSize: "clamp(12px, 2vw, 18px)",
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
        <div className="mt-16 md:mt-24 text-center flex justify-center">
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
              paddingTop: "12px",
              paddingRight: "53px",
              paddingBottom: "12px",
              paddingLeft: "53px",
              fontFamily: "Manrope",
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "21px",
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
              fontWeight: 700,
              fontSize: "clamp(24px, 5vw, 40px)",
              lineHeight: "130%",
              letterSpacing: "0%",
              textAlign: "center",
            }}
          >
            Hear Your AI Agent in Action
          </h2>

          {/* Agent Cards Grid with Sliding Animation */}
          <div className="mt-5 relative overflow-visible max-w-7xl mx-auto lg:h-[450px] md:h-[400px] pb-4 md:pb-16">
            <div className="flex items-start justify-center gap-12 lg:gap-8 md:gap-6 sm:gap-4 md:h-full md:overflow-x-visible">
              {isMobile ? (
                // Mobile: Horizontal scrollable carousel with one main image and partial side images
                <div className="w-full py-4 px-2">
                  <div
                    className="overflow-x-auto overflow-y-visible scrollbar-hide"
                    onScroll={handleScroll}
                    style={{
                      scrollBehavior: "smooth",
                      scrollSnapType: "x mandatory",
                    }}
                  >
                    <div
                      className="flex gap-6 px-8 py-2"
                      style={{ width: "max-content" }}
                    >
                      {agents.map((agent, index) => (
                        <div
                          key={agent.id}
                          className="flex flex-col items-center flex-shrink-0"
                          style={{ scrollSnapAlign: "center" }}
                        >
                          {/* Agent Image */}
                          <div
                            className="relative flex-shrink-0 bg-gray-50"
                            style={{
                              width: "180px",
                              height: "240px",
                              opacity: 1,
                              gap: "10px",
                              padding: "12px",
                              borderRadius: "16px",
                            }}
                          >
                            <Image
                              src={agent.image}
                              alt={agent.name}
                              fill
                              className="rounded-xl shadow-xl object-contain"
                              sizes="206px"
                            />
                          </div>

                          {/* Mobile Agent Details Box - Appears below each image, only visible for active */}
                          <AnimatePresence>
                            {index === activeAgentIndex && (
                              // <div className="mt-4 flex items-start gap-3">
                              /* Blue Details Tag */
                              /* <motion.div
                                  initial={{ opacity: 0, x: -20, scale: 0.8 }}
                                  animate={{ opacity: 1, x: 0, scale: 1 }}
                                  exit={{ opacity: 0, x: -20, scale: 0.8 }}
                                  transition={{ 
                                    duration: 0.3, 
                                    ease: "easeOut",
                                    delay: 0.1
                                  }}
                                  className="bg-[#4F46E5] text-white rounded-2xl flex items-center justify-center shadow-lg"
                                  style={{
                                    width: "48px",
                                    height: "48px",
                                    flexShrink: 0,
                                  }}
                                >
                                  <svg 
                                    className="w-6 h-6" 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"/>
                                  </svg>
                                </motion.div> */

                              /* Details Content */
                              <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                transition={{
                                  duration: 0.3,
                                  ease: "easeOut",
                                  opacity: { duration: 0.2 },
                                  y: { duration: 0.3 },
                                  scale: { duration: 0.3 },
                                }}
                                className="mt-3 bg-white rounded-2xl shadow-lg border border-gray-100 p-3"
                                style={{
                                  width: "180px",
                                  opacity: 1,
                                }}
                              >
                                {/* Category Badge */}
                                <motion.span
                                  className="inline-block bg-[#4F46E5] text-white font-bold px-3 py-1.5 rounded-lg text-sm mb-3"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.15, duration: 0.2 }}
                                  style={{
                                    fontFamily: "Manrope",
                                    fontWeight: 600,
                                    fontSize: "12px",
                                  }}
                                >
                                  {agent.category}
                                </motion.span>

                                {/* Service Title */}
                                <motion.h3
                                  className="text-gray-900 mb-3"
                                  style={{
                                    fontFamily: "Manrope",
                                    fontWeight: 700,
                                    fontSize: "16px",
                                    lineHeight: "130%",
                                  }}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.2, duration: 0.2 }}
                                >
                                  {agent.service}
                                </motion.h3>

                                {/* Description Message */}
                                <motion.p
                                  className="text-gray-700 mb-4 leading-relaxed"
                                  style={{
                                    fontFamily: "Manrope",
                                    fontSize: "12px",
                                    lineHeight: "150%",
                                    fontWeight: 400,
                                  }}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.25, duration: 0.2 }}
                                >
                                  {agent.description.substring(0, 80)}...
                                </motion.p>

                                {/* Audio Player Controls */}
                                <motion.div
                                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.3, duration: 0.2 }}
                                >
                                  <motion.button
                                    className="bg-[#4F46E5] text-white rounded-full flex-shrink-0 flex items-center justify-center hover:bg-indigo-700 transition-colors shadow-sm"
                                    style={{
                                      width: "32px",
                                      height: "32px",
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <svg
                                      className="w-4 h-4 ml-0.5"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path d="M6.3 5.17a1.4 1.4 0 00-2.1 1.63L7.6 12l-3.4 5.2a1.4 1.4 0 002.1 1.63L13 12 6.3 5.17z" />
                                    </svg>
                                  </motion.button>

                                  <div className="flex-1">
                                    <div className="bg-gray-300 rounded-full h-1.5 mb-1.5 relative">
                                      <motion.div
                                        className="bg-[#4F46E5] h-1.5 rounded-full relative"
                                        initial={{ width: "0%" }}
                                        animate={{ width: "25%" }}
                                        transition={{
                                          delay: 0.35,
                                          duration: 0.5,
                                        }}
                                      >
                                        {/* Progress indicator dot */}
                                        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white border border-[#4F46E5] rounded-full shadow-sm"></div>
                                      </motion.div>
                                    </div>
                                    <div className="flex justify-end">
                                      <span
                                        className="text-gray-600 font-semibold"
                                        style={{
                                          fontFamily: "Manrope",
                                          fontWeight: 600,
                                          fontSize: "10px",
                                        }}
                                      >
                                        {agent.duration}
                                      </span>
                                    </div>
                                  </div>
                                </motion.div>
                              </motion.div>
                              /* </div> */
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                // Desktop: Original layout with hover effects
                agents.map((agent, index) => {
                  const isHovered = hoveredAgent === agent.id;
                  // const isFirstAgent = index === 0;
                  const isLastAgent = index === agents.length - 1;
                  // const isMiddleAgent = index === 1;

                  // Calculate transforms based on which agent is hovered - disable on mobile
                  let transform = "translateX(0px)";
                  if (hoveredAgent && !isMobile) {
                    if (hoveredAgent === agents[0].id) {
                      // First agent hovered - move it more to the left and others less to the right
                      if (index === 0)
                        transform = "translateX(clamp(-150px, -12vw, -60px))"; // First agent moves left more
                      if (index === 1)
                        transform = "translateX(clamp(40px, 8vw, 80px))"; // Middle agent moves right less
                      if (index === 2)
                        transform = "translateX(clamp(60px, 12vw, 120px))"; // Last agent moves right less
                    } else if (hoveredAgent === agents[1].id) {
                      // Middle agent hovered - move first and last left, show details on right
                      if (index === 0)
                        transform = "translateX(clamp(-200px, -15vw, -100px))"; // First agent moves left
                      if (index === 2)
                        transform = "translateX(clamp(75px, 15vw, 150px))"; // Last agent moves right but less
                    } else if (hoveredAgent === agents[2].id) {
                      // Last agent hovered - move it more to the right and others less to the left
                      if (index === 0)
                        transform = "translateX(clamp(-150px, -12vw, -80px))"; // First agent moves left less
                      if (index === 1)
                        transform = "translateX(clamp(-100px, -8vw, -50px))"; // Middle agent moves left less
                      if (index === 2)
                        transform = "translateX(clamp(50px, 10vw, 100px))"; // Last agent moves right more
                    }
                  }

                  return (
                    <motion.div
                      key={agent.id}
                      className="relative flex items-center flex-shrink-0"
                      onMouseEnter={() =>
                        !isMobile && setHoveredAgent(agent.id)
                      }
                      onMouseLeave={() => !isMobile && setHoveredAgent(null)}
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
                          width: "clamp(200px, 25vw, 284px)",
                          height: "clamp(280px, 35vw, 393px)",
                          borderRadius: "12px",
                          paddingTop: "16px",
                          paddingRight: "clamp(20px, 4vw, 37px)",
                          paddingBottom: "16px",
                          paddingLeft: "clamp(20px, 4vw, 37px)",
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <Image
                          src={agent.image}
                          alt={agent.name}
                          fill
                          className="rounded-xl shadow-xl object-contain"
                          sizes="(max-width: 640px) 200px, (max-width: 1024px) 240px, 284px"
                        />
                      </motion.div>

                      {/* Service Details Card - Appears beside the image */}
                      <AnimatePresence>
                        {isHovered && !isMobile && (
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
                              width: "clamp(280px, 30vw, 350px)",
                              height: "clamp(280px, 35vw, 393px)",
                              padding: "clamp(16px, 3vw, 28px)",
                              left: isLastAgent
                                ? "clamp(-350px, -30vw, -370px)"
                                : "clamp(200px, 25vw, 304px)",
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
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiInAction;
