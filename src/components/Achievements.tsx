"use client";

import React from "react";
import { motion } from "framer-motion";

interface Milestone {
  index: string;
  title: string;
  badge: string;
  organization: string;
  year: string;
  description: string;
}

const milestonesData: Milestone[] = [
  {
    index: "01",
    title: "Top 10 Google Student Ambassador",
    badge: "National Top 10",
    organization: "Google India",
    year: "2024 - 2025",
    description:
      "Ranked in the top 10 ambassadors nationwide from an applicant pool of 10,000+ candidates for outstanding community engagement, Gemini advocacy, and adoption workshops.",
  },
  {
    index: "02",
    title: "3rd Globally at TE AI Cup 2026",
    badge: "Global AI Podium",
    organization: "TE Connectivity & AI Community",
    year: "2026",
    description:
      "Secured 3rd place globally in an international AI innovation competition, recognized for practical AI system architecture, deterministic execution, and end-user problem framing.",
  },
  {
    index: "03",
    title: "Cummins India Scholarship 2026",
    badge: "Nurturing Brilliance Recipient",
    organization: "Cummins India Foundation",
    year: "2026",
    description:
      "Awarded prestigious merit-based scholarship recognizing academic excellence, technical problem-solving capabilities, and leadership potential in technology.",
  },
  {
    index: "04",
    title: "Dubai International Recognition",
    badge: "Sponsored Global Delegate",
    organization: "1 Billion Followers Summit & AI Film Festival",
    year: "2025",
    description:
      "Selected among top Indian students for a fully sponsored international visit to Dubai, representing student product advocacy and creative AI storytelling on a global stage.",
  },
  {
    index: "05",
    title: "Smart India Hackathon 2024",
    badge: "1st Place (Institute Level)",
    organization: "Ministry of Education & SIH",
    year: "2024",
    description:
      "Won 1st prize at institute level for formulating a user-centric digital portal addressing public service delivery challenges under strict hackathon evaluation.",
  },
  {
    index: "06",
    title: "Tech Pragyan 2025",
    badge: "Top 20 Finalist",
    organization: "National Technical Innovation Forum",
    year: "2025",
    description:
      "Selected as top 20 finalist across national applicants for designing and prototyping functional technology solutions addressing industry-level problem statements.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 md:px-8 border-b border-[#E3E6E8] relative">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#E3E6E8] mb-12">
          <div>
            <span className="section-id">06 / RECOGNITION</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#17191D] mt-2">
              Milestones That Matter.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#666C76] max-w-md sm:text-right">
            Verified competitive podium finishes, corporate scholarships, and national product leadership recognitions.
          </p>
        </div>

        {/* Numbered Swiss-Style Recognition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestonesData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="editorial-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:border-[#064ACB] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs mb-3">
                  <span className="text-2xl font-bold text-[#17191D]">
                    {item.index}
                  </span>
                  <span className="text-[#969BA5]">{item.year}</span>
                </div>

                {item.index === "01" ? (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-[#975102] bg-[#F3A953]/15 px-2 py-0.5 rounded border border-[#F3A953]/30 font-bold mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F3A953]" />
                    {item.badge}
                  </span>
                ) : (
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#064ACB] font-bold block mb-1">
                    {item.badge}
                  </span>
                )}

                <h3 className="font-bold text-base sm:text-lg text-[#17191D] mb-1 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs font-mono text-[#666C76] mb-3">
                  {item.organization}
                </p>

                <p className="text-xs text-[#666C76] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#E3E6E8] text-[10px] font-mono text-[#969BA5]">
                VERIFIED HONORS
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
