// src/components/Faq.tsx
"use client"; // This is an interactive component

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Reusable Icon Components ---
const PlusIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 1V11"
      stroke="#4F46E5"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 6H11"
      stroke="#4F46E5"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MinusIcon = () => (
  <svg
    width="12"
    height="2"
    viewBox="0 0 12 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1H11"
      stroke="#4F46E5"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// --- FAQ Data ---
const faqData = [
  {
    question: "How human-like is the AI voice?",
    answer:
      "Our AI agents use ultra-realistic voices with natural tone, pacing, and pauses. Most callers can't tell it's not a real person.",
  },
  {
    question: "Can I customize what my agent says?",
    answer: "Yes, you have full control over the scripts and responses.",
  },
  {
    question: "What if a caller asks something unexpected?",
    answer:
      "Our AI is trained to handle unexpected queries gracefully and can escalate to a human if needed.",
  },
  {
    question: "How fast can I get started?",
    answer: "You can go live in as little as 15 minutes after signing up.",
  },
  {
    question: "Does it work with my current phone number?",
    answer: "Yes, you can easily port your existing number or get a new one.",
  },
  {
    question: "Can it handle multiple calls at once?",
    answer:
      "Absolutely. Our AI can handle up to 20 concurrent calls without any drop in quality.",
  },
  {
    question: "What happens after hours or on weekends?",
    answer:
      "The AI works 24/7, ensuring you never miss a call, regardless of the time or day.",
  },
  {
    question: "Does it integrate with my calendar or CRM?",
    answer:
      "Yes, it integrates seamlessly with leading calendars and CRMs to book appointments and log data.",
  },
  {
    question: "How much does it cost?",
    answer:
      "We have flexible plans starting from just $99/month. Please see our pricing section for more details.",
  },
  {
    question: "What if I want to change the voice or role later?",
    answer:
      "You can change the voice, script, and tasks of your AI agent at any time through your dashboard.",
  },
];

// --- Accordion Item Sub-component ---
const AccordionItem = ({
  item,
  isOpen,
  onClick,
  isMobile,
}: {
  item: (typeof faqData)[0];
  isOpen: boolean;
  onClick: () => void;
  isMobile: boolean;
}) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-6"
      >
        <span
          className="font-semibold text-gray-800 text-base md:text-lg md:font-medium"
          style={{
            fontFamily: "Manrope",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "0%",
          }}
        >
          {item.question}
        </span>
        <div
          className="flex-shrink-0 rounded-full border border-gray-200 flex items-center justify-center w-[54px] h-[54px] md:w-8 md:h-8"
          style={{
            borderRadius: "50px",
            padding: isMobile ? "24px 15px" : undefined,
            borderWidth: "1px",
            gap: "10px",
            opacity: 1,
          }}
        >
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", y: 0 },
              collapsed: { opacity: 0, height: 0, y: -10 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p
              className="pb-6 pr-10 text-gray-600"
              style={{
                fontFamily: "Manrope",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0%",
              }}
            >
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      className="pt-2 md:py-8 pb-2 md:pb-20"
      style={{
        background: "linear-gradient(180deg, #F9FAFF 0%, #FFFFFF 100%)",
      }}
    >
      <div
        className="mx-auto px-4 sm:px-6 lg:px-8 max-w-sm md:max-w-4xl"
        style={{
          opacity: 1,
          gap: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
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
            FAQ
          </span>
          <h2
            className="mt-5 font-bold text-gray-900 tracking-tight text-[24px] leading-[130%] md:text-5xl md:leading-normal"
            style={{
              fontFamily: "Manrope",
              fontWeight: 700,
              letterSpacing: "0%",
              textAlign: "center",
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-8 pb-8">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
