"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Toolkit() {
  const capabilityGroups = [
    {
      groupNumber: "01",
      category: "AI-assisted Building & Prototyping",
      purpose: "Accelerating concept formulation into working code and interactive mockups.",
      tools: [
        "Google Antigravity",
        "Cursor",
        "Claude",
        "Gemini",
        "ChatGPT",
        "AI-assisted coding workflows",
      ],
    },
    {
      groupNumber: "02",
      category: "Product Design & Experience",
      purpose: "Visualizing user interfaces, state transitions, and interaction ergonomics.",
      tools: [
        "Figma",
        "LottieFiles",
        "Motion design workflows",
        "UI/UX exploration",
        "Interactive prototyping",
      ],
    },
    {
      groupNumber: "03",
      category: "Product Research & Thinking",
      purpose: "Deconstructing problem spaces, evaluating markets, and structuring knowledge.",
      tools: [
        "ChatGPT",
        "Gemini",
        "Google Sheets",
        "Notion",
        "AI-powered research workflows",
      ],
    },
    {
      groupNumber: "04",
      category: "Product Management",
      purpose: "Guiding product scope from problem definition to launch readiness.",
      tools: [
        "Product Discovery",
        "Competitive Analysis",
        "Product Thinking",
        "Feature Prioritization",
        "User Journey Mapping",
        "Product Evaluation",
        "Documentation",
        "Growth Initiatives",
      ],
    },
  ];

  return (
    <section id="toolkit" className="py-24 px-4 sm:px-6 md:px-8 border-b border-[#E3E6E8] relative">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#E3E6E8] mb-12">
          <div>
            <span className="section-id">05 / TOOLKIT</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#17191D] mt-2">
              My AI-Native Product Toolkit.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#666C76] max-w-md sm:text-right">
            Compact structured typography detailing tools and applied workflows that accelerate thinking, experimentation, and execution.
          </p>
        </div>

        {/* Structured Editorial Table Layout */}
        <div className="editorial-card rounded-2xl overflow-hidden divide-y divide-[#E3E6E8] shadow-xs">
          {capabilityGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start hover:bg-[#F2F3F3] transition-colors"
            >
              <div className="lg:col-span-4">
                <span className="font-mono text-xs font-bold text-[#064ACB] block mb-1">
                  GROUP // {group.groupNumber}
                </span>
                <h3 className="font-bold text-lg text-[#17191D] mb-1">
                  {group.category}
                </h3>
                <p className="text-xs text-[#666C76] leading-relaxed">
                  {group.purpose}
                </p>
              </div>

              <div className="lg:col-span-8 flex flex-wrap gap-2">
                {group.tools.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#E2E5E9] text-xs font-mono font-medium text-[#17191D] hover:border-[#064ACB] transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
