"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EdzyLogo } from "@/components/EdzyLogo";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Search,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  FileText,
  Trophy,
  Plane,
  Users,
} from "lucide-react";

export default function Experience() {
  const [expandedEdzyCategory, setExpandedEdzyCategory] = useState<string>("research");

  const edzyCategories = [
    {
      id: "research",
      title: "A. Product Research & Competitive Intelligence",
      icon: <Search size={15} className="text-[#064ACB]" />,
      items: [
        "Researched competing educational platforms across K-12 and STEM domains.",
        "Conducted in-depth product teardowns of Photomath and Quizlet to analyze question-solving flows and gamified practice mechanisms.",
        "Prepared structured competitor research documents and concise 1-page product analyses for leadership.",
        "Evaluated competitor product features, step-by-step learning workflows, and user experience trade-offs.",
        "Identified market differentiation opportunities and documented structured product observations.",
      ],
    },
    {
      id: "evaluation",
      title: "B. Product Experience Evaluation",
      icon: <CheckCircle2 size={15} className="text-[#064ACB]" />,
      items: [
        "Reviewed product interfaces and educational workflows across student doubt-solving sessions.",
        "Evaluated UI consistency, educational content quality, and step validation issues.",
        "Identified potential friction points and cognitive load in AI-powered learning experiences.",
        "Documented observations with annotated screenshots and communicated concrete improvement opportunities.",
        "Explored how AI-generated educational experiences could improve student engagement and comprehension.",
      ],
    },
    {
      id: "growth",
      title: "C. Growth & Outreach",
      icon: <TrendingUp size={15} className="text-[#064ACB]" />,
      items: [
        "Supported early-stage organic growth and distribution initiatives.",
        "Conducted systematic backlink research and identified relevant educational domains.",
        "Prepared and sent 11 personalized backlink outreach emails to high-authority educational blogs.",
        "Created and maintained a structured backlink information tracking sheet.",
        "Supported blog content preparation and student communication within the WhatsApp community.",
      ],
    },
    {
      id: "prototyping",
      title: "D. AI Prototyping & Motion Design",
      icon: <Sparkles size={15} className="text-[#366ED8]" />,
      items: [
        "Explored modern AI tools and prompt workflows for product research, ideation, and rapid creative execution.",
        "Worked with Lottie and MCP-based animation workflows to explore interactive vector assets.",
        "Conceptualized and tested animated AI assistant concepts to give the tutor a friendly persona.",
        "Experimented with four distinct assistant states: idle, thinking, reacting, and cheering.",
        "Evaluated how interactive motion could improve emotional connection and reduce perceived AI response latency.",
        "Explored AI-assisted workflows for creating product-related visual assets and explainers.",
      ],
    },
    {
      id: "documentation",
      title: "E. Documentation & Collaboration",
      icon: <FileText size={15} className="text-[#064ACB]" />,
      items: [
        "Authored structured competitor research reports and executive summaries.",
        "Documented detailed product UX observations and prioritized action items.",
        "Organized outreach tracking databases and user research notes.",
        "Collaborated closely in weekly agile reviews with the founder and product manager.",
        "Supported cross-functional activities spanning product discovery, research, content, and growth.",
      ],
    },
  ];

  const edzyTags = [
    "Product Research",
    "Competitive Analysis",
    "Product Evaluation",
    "AI Prototyping",
    "Growth",
    "Motion Design",
    "Documentation",
    "EdTech",
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 md:px-8 border-b border-[#E3E6E8] relative">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#E3E6E8] mb-12">
          <div>
            <span className="section-id">02 / EXPERIENCE</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#17191D] mt-2">
              Where I&apos;ve Applied Product Thinking.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#666C76] max-w-md sm:text-right">
            Applied product research, competitive intelligence, AI-assisted prototyping, and community-led adoption.
          </p>
        </div>

        <div className="space-y-10">
          {/* EXPERIENCE 1: EDZY.AI */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="editorial-card rounded-2xl p-6 sm:p-8 shadow-sm"
          >
            {/* Top Row: Brand & Role */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E3E6E8]">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E2E5E9] shrink-0">
                  <EdzyLogo className="h-6 w-auto text-[#17191D]" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-bold text-xl text-[#17191D]">
                      Edzy.ai
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#EBF1FC] text-[#064ACB] font-semibold">
                      AI EdTech / SaaS
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#F3A953]/15 text-[#975102] border border-[#F3A953]/30 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F3A953]" />
                      Featured PM Experience
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-[#17191D] mt-0.5">
                    Product Management Intern
                  </p>
                  <p className="text-[11px] font-mono text-[#969BA5]">
                    Duration: 6-Week Intensive Internship
                  </p>
                </div>
              </div>

              <a
                href="https://www.edzy.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E2E5E9] hover:border-[#064ACB] text-xs font-mono text-[#17191D] transition-colors self-start md:self-auto"
              >
                <span>Visit edzy.ai</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Role Overview */}
            <div className="py-5 border-b border-[#E3E6E8]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#969BA5] block mb-2">
                Executive Summary
              </span>
              <p className="text-sm sm:text-base text-[#17191D] leading-relaxed max-w-4xl">
                Worked closely with the founding team at Edzy.ai, contributing to product research, competitor intelligence, product experience evaluation, growth initiatives, AI-powered experimentation, and operational execution for an educational technology platform.
              </p>
            </div>

            {/* Categorized Responsibilities */}
            <div className="py-5 border-b border-[#E3E6E8]">
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#969BA5]">
                  Structured Responsibility Breakdown
                </span>
                <span className="text-[10px] font-mono text-[#969BA5]">Click to expand</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {edzyCategories.map((cat) => {
                  const isSelected = expandedEdzyCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() =>
                        setExpandedEdzyCategory(isSelected ? "" : cat.id)
                      }
                      className={`p-3 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between text-xs ${
                        isSelected
                          ? "bg-[#EBF1FC] border-[#064ACB] text-[#17191D]"
                          : "bg-[#F2F3F3] border-[#E3E6E8] text-[#666C76] hover:text-[#17191D]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {cat.icon}
                        <span className="font-semibold truncate max-w-[190px]">
                          {cat.title}
                        </span>
                      </div>
                      {isSelected ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  );
                })}
              </div>

              {/* Accordion Content */}
              <AnimatePresence mode="wait">
                {expandedEdzyCategory && (
                  <motion.div
                    key={expandedEdzyCategory}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden mt-3"
                  >
                    {(() => {
                      const current = edzyCategories.find(
                        (c) => c.id === expandedEdzyCategory
                      );
                      if (!current) return null;
                      return (
                        <div className="p-4 rounded-xl bg-[#F2F3F3] border border-[#E3E6E8]">
                          <span className="text-xs font-bold text-[#17191D] block mb-2 font-mono">
                            {current.title}
                          </span>
                          <ul className="space-y-1.5">
                            {current.items.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-xs text-[#666C76] leading-relaxed"
                              >
                                <span className="w-1 h-1 rounded-full bg-[#064ACB] mt-2 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })()}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Tags & Scope Note */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap gap-1.5">
                {edzyTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-[#F2F3F3] border border-[#E3E6E8] text-[11px] font-mono text-[#17191D]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-[10px] font-mono text-[#969BA5] italic">
                Contributions reflect 6-week internship scope. Official logo used for employer identification.
              </p>
            </div>
          </motion.div>

          {/* EXPERIENCE 2: GOOGLE STUDENT AMBASSADOR */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="editorial-card rounded-2xl p-6 sm:p-8 shadow-sm"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E3E6E8]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F2F3F3] border border-[#E2E5E9] shrink-0 flex items-center justify-center">
                  <div className="flex gap-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#EA4335]" />
                    <span className="w-2 h-2 rounded-full bg-[#4285F4]" />
                    <span className="w-2 h-2 rounded-full bg-[#FBBC05]" />
                    <span className="w-2 h-2 rounded-full bg-[#34A853]" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-xl text-[#17191D]">
                      Google Student Ambassador
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#EBF1FC] text-[#064ACB] font-semibold">
                      Adoption &amp; Growth
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-[#17191D] mt-0.5">
                    Google India | Campus Product Advocacy
                  </p>
                  <p className="text-[11px] font-mono text-[#969BA5]">
                    Focus: Gemini Adoption, User Engagement &amp; Community Growth
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F2F3F3] border border-[#E2E5E9] text-xs font-mono font-bold text-[#17191D] self-start md:self-auto">
                <Trophy size={13} className="text-[#064ACB]" />
                <span>Top 10 Nationally (10,000+ Candidates)</span>
              </div>
            </div>

            <div className="py-5 border-b border-[#E3E6E8]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#969BA5] block mb-2">
                Adoption &amp; Growth Narrative
              </span>
              <p className="text-sm sm:text-base text-[#17191D] leading-relaxed max-w-4xl">
                Led campus initiatives promoting Google AI products, with a primary focus on driving awareness, hands-on onboarding, and active adoption of Google Gemini among students and student developers. Applied product management principles to user segmentation, engagement tracking, and feedback collection.
              </p>
            </div>

            <div className="py-5 border-b border-[#E3E6E8] grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#F2F3F3] border border-[#E3E6E8]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#17191D] uppercase tracking-wider font-mono mb-2">
                  <Users size={14} className="text-[#064ACB]" />
                  <span>Community-Led Growth</span>
                </div>
                <ul className="space-y-1 text-xs text-[#666C76]">
                  <li>- Organized interactive student sessions demonstrating practical Gemini workflows.</li>
                  <li>- Designed awareness campaigns tailored to students, creators, and engineers.</li>
                  <li>- Established student feedback channels to understand onboarding friction with AI tools.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#F2F3F3] border border-[#E3E6E8]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#17191D] uppercase tracking-wider font-mono mb-2">
                  <Plane size={14} className="text-[#064ACB]" />
                  <span>International Recognition (Dubai)</span>
                </div>
                <ul className="space-y-1 text-xs text-[#666C76]">
                  <li>- Selected among top Indian students for fully sponsored Dubai international recognition.</li>
                  <li>- Represented student innovation associated with 1 Billion Followers Summit &amp; AI Film Festival.</li>
                  <li>- Recognized by Google India for community outreach and AI tool adoption.</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Product Advocacy",
                  "User Adoption",
                  "Community Growth",
                  "Gemini AI",
                  "Workshops",
                ].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-[#F2F3F3] border border-[#E3E6E8] text-[11px] font-mono text-[#17191D]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-[10px] font-mono text-[#969BA5] italic">
                Google branding used accurately to reflect ambassador role, not corporate endorsement.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
