"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkillCluster {
  index: string;
  title: string;
  description: string;
  skills: string[];
}

const productSkills: SkillCluster[] = [
  {
    index: "01",
    title: "Product Strategy & Execution",
    description: "Translating ambiguous opportunities into prioritized roadmaps and actionable backlogs.",
    skills: [
      "Product Thinking",
      "Product Roadmapping",
      "Feature Prioritization",
      "Agile Fundamentals",
      "User Stories",
      "Acceptance Criteria",
      "Requirement Documentation",
    ],
  },
  {
    index: "02",
    title: "Product Discovery & Research",
    description: "Investigating user pain points, competitive benchmarks, and interface drop-offs.",
    skills: [
      "Market Research",
      "Competitive Analysis",
      "Product Benchmarking",
      "User Problem Identification",
      "Product Experience Evaluation",
    ],
  },
  {
    index: "03",
    title: "AI Prototyping & Experimentation",
    description: "Building tangible testable prototypes rapidly using generative AI workflows.",
    skills: [
      "Rapid Prototyping",
      "Prompt Engineering",
      "AI-assisted Building",
      "Generative AI Workflows",
      "Product Concept Exploration",
      "Iterative Experimentation",
    ],
  },
  {
    index: "04",
    title: "Product Design & UX",
    description: "Designing clear user journeys, state transitions, and responsive interactions.",
    skills: [
      "User Journey Mapping",
      "Workflow Evaluation",
      "UI/UX Analysis",
      "Interaction Design",
      "Figma",
      "Motion Design",
    ],
  },
  {
    index: "05",
    title: "Growth & Product Analytics",
    description: "Structuring user onboarding funnels, adoption loops, and feedback channels.",
    skills: [
      "Growth Initiatives",
      "User Engagement",
      "Product Adoption",
      "KPI Understanding",
      "Data-driven Decision Making",
      "Experimentation Mindset",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 md:px-8 border-b border-[#E3E6E8] relative bg-[#F2F3F3]/60">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#E3E6E8] mb-12">
          <div>
            <span className="section-id">CORE COMPETENCIES</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#17191D] mt-2">
              Product Management Skills.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#666C76] max-w-md sm:text-right">
            Five functional competency areas spanning product discovery, roadmapping, rapid prototyping, and user adoption.
          </p>
        </div>

        {/* 5-Category Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productSkills.map((cluster, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="editorial-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs mb-3">
                  <span className="text-[#064ACB] font-bold">CLUSTER // {cluster.index}</span>
                  <span className="text-[#969BA5]">{cluster.skills.length} SKILLS</span>
                </div>

                <h3 className="font-bold text-lg text-[#17191D] mb-2 leading-snug">
                  {cluster.title}
                </h3>
                <p className="text-xs text-[#666C76] leading-relaxed mb-6">
                  {cluster.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {cluster.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-[#F2F3F3] border border-[#E3E6E8] text-xs font-mono text-[#17191D]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-[#E3E6E8] text-[10px] font-mono text-[#969BA5]">
                APPLIED PRACTICE
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
