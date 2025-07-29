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
    <section className="bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Top Section: Trusted by Companies --- */}
        <div className="text-center">
          <p className="text-3xl font-semibold text-gray-900 tracking-widest uppercase">
            BUILT FOR COMPANIES THAT VALUE TRUST AND COLLABORATION.
          </p>
          <div className="mt-8 flex justify-center items-center gap-x-6 gap-y-4 flex-wrap">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center space-x-2.5 border border-gray-200 rounded-full px-4 py-2 bg-white shadow-sm"
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={20}
                  height={20}
                />
                <span className="font-medium text-gray-700 text-base">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- Main Content: Hear AI in Action --- */}
        <div className="mt-24 text-center">
          <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full">
            What It Does
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
            Hear Your AI Agent in Action
          </h2>

          {/* Agent Cards Grid */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {agents.map((agent, index) => (
              <motion.div
                key={agent.id}
                className="relative group"
                onMouseEnter={() => setHoveredAgent(agent.id)}
                onMouseLeave={() => setHoveredAgent(null)}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  {/* Agent Image */}
                  <div className="relative w-full lg:w-64 aspect-square flex-shrink-0">
                    <Image
                      src={agent.image}
                      alt={agent.name}
                      fill
                      className="rounded-2xl shadow-xl object-contain bg-gray-50"
                      sizes="(max-width: 1024px) 100vw, 256px"
                    />

                    {/* Agent Name Label */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-70 text-white text-sm font-semibold px-4 py-2 rounded-full backdrop-blur-sm">
                      {agent.name}
                    </div>
                  </div>

                  {/* Service Details - Appears beside the image on hover */}
                  <AnimatePresence>
                    {hoveredAgent === agent.id && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="bg-white rounded-2xl shadow-2xl p-6 text-left flex-1 min-w-0"
                      >
                        <span className="inline-block bg-[#4F46E5] text-white text-xs font-bold px-3 py-1 rounded-md mb-3">
                          {agent.category}
                        </span>

                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {agent.service}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {agent.description}
                        </p>

                        {/* Audio Player Controls */}
                        <div className="flex items-center space-x-3">
                          <motion.button
                            className="bg-[#4F46E5] text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center hover:bg-indigo-700 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <svg
                              className="w-3 h-3 ml-0.5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M6.3 5.17a1.4 1.4 0 00-2.1 1.63L7.6 12l-3.4 5.2a1.4 1.4 0 002.1 1.63L13 12 6.3 5.17z" />
                            </svg>
                          </motion.button>

                          <div className="flex-1 bg-gray-200 rounded-full h-1">
                            <motion.div
                              className="bg-[#4F46E5] h-1 rounded-full"
                              initial={{ width: "0%" }}
                              animate={{ width: "15%" }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                            />
                          </div>

                          <span className="text-xs text-gray-500 font-mono">
                            {agent.duration}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiInAction;
