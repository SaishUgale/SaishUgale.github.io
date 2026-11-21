"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Philosophy() {
  const principles = [
    {
      index: "01",
      title: "Understand Before Building",
      tagline: "Start with users and problem context",
      description:
        "Start with users, their problems, and the context in which they interact with a product. Prioritize root causes over superficial feature requests before proposing solutions.",
    },
    {
      index: "02",
      title: "Prototype to Learn",
      tagline: "Make ideas tangible and test assumptions",
      description:
        "Make ideas tangible, explore assumptions, and use rapid experimentation to understand what works. A working prototype eliminates ambiguity and reveals friction instantly.",
    },
    {
      index: "03",
      title: "Improve With Intent",
      tagline: "Balance user value, business impact, and feasibility",
      description:
        "Prioritize meaningful improvements by balancing user value, business impact, and technical feasibility. Focused iteration guided by genuine feedback beats premature complexity.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 border-b border-[#E3E6E8] relative bg-[#FFFFFF]">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#E3E6E8] mb-12">
          <div>
            <span className="section-id">PHILOSOPHY / CORE PRINCIPLES</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#17191D] mt-2">
              Good Products Start With Better Questions.
            </h2>
          </div>
          <div className="font-mono text-xs text-[#666C76] sm:text-right">
            <span>THINK → EXPLORE → PROTOTYPE → LEARN → IMPROVE</span>
          </div>
        </div>

        {/* 3 Principles in Asymmetrical Architectural Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E3E6E8] border-y border-[#E3E6E8]">
          {principles.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="py-8 md:py-6 md:px-8 first:md:pl-0 last:md:pr-0 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#064ACB] block mb-3">
                  PRINCIPLE // {item.index}
                </span>
                <h3 className="font-bold text-xl text-[#17191D] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-[#666C76] mb-4">
                  {item.tagline}
                </p>
                <p className="text-sm text-[#666C76] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E3E6E8] flex items-center justify-between text-[10px] font-mono text-[#969BA5]">
                <span>STAGE {item.index} RULE</span>
                <span>VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
