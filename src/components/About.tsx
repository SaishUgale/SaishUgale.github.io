"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  const ledgerItems = [
    {
      index: "01",
      label: "Technical Grounding",
      value: "B.Tech Computer Science & Engineering",
      sub: "Nutan College of Engineering & Research, Pune",
      metric: "CGPA 8.52 / 10 (2023 - 2027)",
    },
    {
      index: "02",
      label: "Product Execution",
      value: "Product Management Intern",
      sub: "Edzy.ai (AI Educational Platform)",
      metric: "6-Week Intensive Discovery & Growth",
    },
    {
      index: "03",
      label: "Adoption & Growth",
      value: "Google Student Ambassador",
      sub: "Gemini AI Advocacy & Campus Outreach",
      metric: "Top 10 Nationally (10,000+ Candidates)",
    },
    {
      index: "04",
      label: "Core Methodology",
      value: "Rapid Prototyping & AI Workflows",
      sub: "Figma, Cursor, Lottie & LLM Orchestration",
      metric: "Hypothesis-Driven Experiments",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 md:px-8 border-b border-[#E3E6E8] relative">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header with Editorial Identifier */}
        <div className="flex items-center gap-3 mb-10 pb-4 border-b border-[#E3E6E8]">
          <span className="section-id">01 / ABOUT</span>
          <span className="text-[#969BA5] text-xs font-mono">•</span>
          <span className="font-mono text-xs uppercase tracking-wider text-[#666C76]">
            Background &amp; Curiosity
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Two-Column Narrative Layout with Pull Quote */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#17191D] leading-[1.12]">
              A Product Mindset With a Builder&apos;s Curiosity.
            </h2>

            <div className="p-5 rounded-2xl bg-[#FFFFFF] border-l-2 border-[#064ACB] border-y border-r border-[#E2E5E9]">
              <p className="text-base sm:text-lg font-medium text-[#17191D] leading-relaxed italic">
                &ldquo;I began with a technical foundation in Computer Science, but gradually became more curious about the decisions behind successful products. What problems are worth solving? Why do users choose one experience over another? How should teams prioritize? And how can we test an idea before investing heavily in it?&rdquo;
              </p>
            </div>

            <p className="text-base text-[#666C76] leading-relaxed">
              That curiosity brought me towards Product Management.
            </p>

            <p className="text-base text-[#666C76] leading-relaxed">
              I now enjoy exploring products from multiple perspectives: researching competitors, understanding workflows, evaluating user experiences, thinking through product opportunities, and experimenting with AI tools to turn concepts into prototypes.
            </p>

            <p className="text-base text-[#666C76] leading-relaxed">
              I particularly enjoy the space where product thinking meets hands-on creation. For me, a prototype is not just a design exercise. It is a way to make an idea tangible, explore assumptions, and learn faster.
            </p>
          </motion.div>

          {/* Right Column: Architectural Career Ledger */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#969BA5] mb-3">
              Career Trajectory &amp; Foundations
            </div>

            <div className="divide-y divide-[#E3E6E8] border-y border-[#E3E6E8] bg-[#FFFFFF] rounded-2xl border border-[#E2E5E9] overflow-hidden">
              {ledgerItems.map((item, idx) => (
                <div key={idx} className="p-4 hover:bg-[#F2F3F3] transition-colors">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#969BA5] mb-1">
                    <span>{item.index}</span>
                    <span className="uppercase text-[#064ACB] font-semibold">{item.label}</span>
                  </div>
                  <h3 className="font-bold text-sm text-[#17191D]">
                    {item.value}
                  </h3>
                  <p className="text-xs text-[#666C76] mt-0.5">
                    {item.sub}
                  </p>
                  <p className="text-[11px] font-mono text-[#17191D] font-medium mt-1.5">
                    {item.metric}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
