// src/components/Testimonials.tsx
"use client"; // This component uses client-side hooks for animation

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// --- Testimonial Data ---
const testimonials = [
  {
    quote:
      "We booked 27 appointments in the first month - without answering a single call manually. This thing just works.",
    author: "John M.",
    title: "Plumbing Contractor",
    image: "/images/testi.png", // Placeholder path
  },
  {
    quote:
      "It feels like hiring a receptionist, but one that never sleeps and never forgets a lead.",
    author: "Greg S.",
    title: "HVAC Services",
    image: "/images/testi.png", // Placeholder path
  },
  {
    quote:
      "Clients love how fast we respond now. And I love the peace of mind knowing no call gets missed.",
    author: "Natalie R.",
    title: "Real Estate Office",
    image: "/images/testi.png", // Placeholder path
  },
];

// --- Testimonial Card Component ---
// Creating a separate component for the card keeps the main component clean.
const TestimonialCard = ({
  quote,
  author,
  title,
  image,
}: (typeof testimonials)[0]) => (
  <div
    className="flex-shrink-0 w-[326px] md:w-[380px] bg-white rounded-[16px] md:rounded-2xl shadow-lg border border-gray-100 pt-7 pb-1 px-4 md:p-8 mx-0 md:mx-4 h-[212px] md:h-auto"
    style={{
      background: "#FFFFFF",
      gap: "10px",
    }}
  >
    <p
      className="text-gray-700 h-auto md:h-32 text-sm md:text-lg"
      style={{
        fontFamily: "Manrope",
        fontWeight: 500,
        lineHeight: "140%",
        letterSpacing: "0%",
      }}
    >
      &ldquo;{quote}&rdquo;
    </p>
    <div className="mt-6 flex items-center">
      <Image
        src={image}
        alt={author}
        width={60}
        height={60}
        className="rounded-full"
        style={{
          width: "60px",
          height: "60px",
          opacity: 1,
          transform: "rotate(0deg)",
        }}
      />
      <div className="ml-4">
        <p className="font-bold text-gray-900">{author}</p>
        <p className="text-gray-500 text-sm">{title}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  // We duplicate the testimonials to create a seamless looping effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      className="pt-10 pb-5 md:py-24 overflow-hidden"
      // REFINEMENT: Applying the exact light gradient background
      style={{
        background: "linear-gradient(180deg, #E6E8FF 0%, #FFFFFF 87.57%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
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
            Testimonials
          </span>
          <h2
            className="mt-4 text-2xl md:text-5xl font-bold text-gray-900 tracking-tight"
            style={{
              fontFamily: "Manrope",
              fontWeight: 700,
              letterSpacing: "0%",
              textAlign: "center",
            }}
          >
            <span className="text-2xl leading-[130%] md:text-5xl md:leading-normal">
              WHAT OUR CUSTOMERS ARE SAYING
            </span>
          </h2>
        </div>

        {/* Desktop: Carousel */}
        <div className="hidden md:block mt-16 relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </motion.div>
          {/* Fades on the edges to enhance the seamless effect */}
          <div
            className="absolute top-0 bottom-0 left-0 w-32 h-full bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none z-10"
            style={{ height: "100%", minHeight: "280px" }}
          ></div>
          <div
            className="absolute top-0 bottom-0 right-0 w-32 h-full bg-gradient-to-l from-white via-white/90 to-transparent pointer-events-none z-10"
            style={{ height: "100%", minHeight: "280px" }}
          ></div>
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="md:hidden mt-8 space-y-6 flex flex-col items-center">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Pagination Dots - Desktop Only */}
        <div className="hidden md:flex mt-8 justify-center items-center space-x-2">
          <motion.div
            className="w-2 h-2 rounded-full"
            animate={{
              scale: [1.25, 1, 1, 1.25],
              backgroundColor: ["#4F46E5", "#D1D5DB", "#D1D5DB", "#4F46E5"],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
              times: [0, 0.33, 0.67, 1],
            }}
          ></motion.div>
          <motion.div
            className="w-2.5 h-2.5 rounded-full"
            animate={{
              scale: [1, 1.25, 1, 1],
              backgroundColor: ["#D1D5DB", "#4F46E5", "#D1D5DB", "#D1D5DB"],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
              times: [0, 0.33, 0.67, 1],
            }}
          ></motion.div>
          <motion.div
            className="w-2 h-2 rounded-full"
            animate={{
              scale: [1, 1, 1.25, 1],
              backgroundColor: ["#D1D5DB", "#D1D5DB", "#4F46E5", "#D1D5DB"],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
              times: [0, 0.33, 0.67, 1],
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
