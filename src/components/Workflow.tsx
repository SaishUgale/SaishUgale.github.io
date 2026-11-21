"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, CornerDownRight } from "lucide-react";

interface Stage {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  activities: string[];
  mindset: string;
  deliverables: string[];
  keyQuestion: string;
}

const stages: Stage[] = [
  {
    id: "discover",
    number: "01",
    title: "Discover",
    shortDesc: "Understand user problems, competitor landscapes, and opportunity gaps.",
    activities: [
      "Understand user problems and context",
      "Conduct product and competitor research",
      "Identify high-leverage product opportunities",
      "Evaluate existing digital experiences for usability gaps",
    ],
    mindset: "Listen first, avoid premature solutions, and map user pain points with clarity.",
    deliverables: [
      "Competitor Teardowns (e.g. Photomath vs Quizlet)",
      "Problem Framing Documents",
      "1-Page Product Opportunity Briefs",
    ],
    keyQuestion: "What problem is genuinely worth solving, and why do current alternatives fall short?",
  },
  {
    id: "think",
    number: "02",
    title: "Think",
    shortDesc: "Define product opportunities, map journeys, and prioritize features.",
    activities: [
      "Define product opportunities and scope",
      "Explore user journeys and map end-to-end workflows",
      "Prioritize features using impact vs feasibility frameworks",
      "Establish measurable product indicators and success criteria",
    ],
    mindset: "Structure ambiguity into actionable user flows, trade-offs, and clear requirements.",
    deliverables: [
      "User Journey Maps",
      "Feature Prioritization Matrix",
      "Lightweight PRDs & User Stories",
    ],
    keyQuestion: "What is the simplest, highest-impact workflow that delivers value to the user?",
  },
  {
    id: "prototype",
    number: "03",
    title: "Prototype",
    shortDesc: "Turn concepts into tangible interactive experiences using AI tools.",
    activities: [
      "Use AI-assisted tools to explore ideas rapidly",
      "Build quick interactive experiences to simulate actual workflows",
      "Experiment with product interfaces, layouts, and states",
      "Create motion and interaction concepts to evaluate micro-moments",
      "Make ideas tangible for immediate stakeholder review",
    ],
    mindset: "Speed to tactile artifact beats abstract debate. Build to think clearly.",
    deliverables: [
      "Interactive Web & Mobile Prototypes",
      "Lottie / MCP Motion State Demos",
      "Clickable Product Flows in Figma & Code",
    ],
    keyQuestion: "How does the idea feel in the user's hands, and where does mental friction appear?",
  },
  {
    id: "iterate",
    number: "04",
    title: "Iterate",
    shortDesc: "Evaluate prototypes, identify friction, and refine with intent.",
    activities: [
      "Evaluate prototypes with real users and team feedback",
      "Identify friction points and drop-off risks",
      "Refine micro-interactions and copy for clarity",
      "Incorporate qualitative feedback into next version",
      "Document key learnings and validated assumptions",
    ],
    mindset: "Embrace feedback openly. Every friction point identified is an opportunity to improve.",
    deliverables: [
      "Friction Point Audit Reports",
      "Iterated UI / Motion Enhancements",
      "Documented Learnings & Next Steps",
    ],
    keyQuestion: "What did the prototype teach us, and what should be refined or cut next?",
  },
];

export default function Workflow() {
  const [activeStageId, setActiveStageId] = useState<string>("discover");
  const activeStage = stages.find((s) => s.id === activeStageId) || stages[0];

  return (
    <section className="py-24 px-4 sm:px-6 md:px-8 border-b border-[#E3E6E8] relative">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#E3E6E8] mb-12">
          <div>
            <span className="section-id">METHODOLOGY / SYSTEM</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#17191D] mt-2">
              From Product Ideas to Working Prototypes.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#666C76] max-w-md sm:text-right">
            An interactive four-stage studio workflow bridging discovery, product framing, rapid AI prototyping, and iteration.
          </p>
        </div>

        {/* 4 Interactive Architectural Stage Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {stages.map((stage) => {
            const isActive = stage.id === activeStageId;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`p-4 rounded-xl text-left transition-all cursor-pointer border ${
                  isActive
                    ? "bg-[#FFFFFF] border-[#064ACB] shadow-sm"
                    : "bg-[#FFFFFF] border-[#E2E5E9] hover:border-[#CBD5E1]"
                }`}
              >
                <div className="flex items-center justify-between font-mono text-[11px] mb-2">
                  <span className={isActive ? "text-[#064ACB] font-bold" : "text-[#969BA5]"}>
                    {stage.number}
                  </span>
                  {isActive && (
                    <span className="text-[10px] text-[#064ACB] uppercase tracking-wider font-semibold">
                      ACTIVE
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-sm text-[#17191D] mb-1">
                  {stage.title}
                </h3>
                <p className="text-[11px] text-[#666C76] line-clamp-2 leading-snug">
                  {stage.shortDesc}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Stage Blueprint Inspector */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="editorial-card rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Execution Activities & Guiding Question */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#064ACB]">
                    <span>STAGE {activeStage.number}</span>
                    <span className="text-[#969BA5]">/</span>
                    <span className="uppercase text-[#17191D] font-bold">{activeStage.title}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#17191D] tracking-tight">
                    {activeStage.shortDesc}
                  </h3>
                </div>

                {/* Key Execution Activities */}
                <div className="space-y-2.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#969BA5]">
                    Execution Activities
                  </span>
                  <div className="space-y-2">
                    {activeStage.activities.map((act, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F2F3F3] border border-[#E3E6E8]"
                      >
                        <Check size={14} className="text-[#064ACB] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#17191D]">{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Guiding Question Callout */}
                <div className="p-4 rounded-xl bg-[#EBF1FC] border border-[#064ACB]/20">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#064ACB] font-bold block mb-1">
                    Guiding Inquiry
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-[#17191D] italic">
                    &ldquo;{activeStage.keyQuestion}&rdquo;
                  </p>
                </div>
              </div>

              {/* Right Column: Mindset & Tangible Outputs */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="p-5 rounded-xl bg-[#F2F3F3] border border-[#E3E6E8]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#969BA5] block mb-2">
                    Strategic Mindset
                  </span>
                  <p className="text-xs sm:text-sm text-[#666C76] leading-relaxed">
                    {activeStage.mindset}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#F2F3F3] border border-[#E3E6E8]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#969BA5] block mb-3">
                    Tangible Studio Outputs
                  </span>
                  <ul className="space-y-2">
                    {activeStage.deliverables.map((del, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-xs font-mono text-[#17191D]"
                      >
                        <CornerDownRight size={13} className="text-[#064ACB]" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
