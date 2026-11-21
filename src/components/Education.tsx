"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  const educationList = [
    {
      institution: "Nutan College of Engineering & Research, Pune",
      degree: "B.Tech in Computer Science & Engineering",
      duration: "2023 - 2027",
      grade: "CGPA: 8.52 / 10",
      description:
        "Building strong technical fundamentals in software architecture, algorithms, and computing systems, channeled directly into product feasibility evaluation and rapid AI prototyping.",
      isCurrent: true,
    },
    {
      institution: "St. Ursula's Junior College, Pune",
      degree: "Higher Secondary Certificate (HSC)",
      duration: "2021 - 2023",
      grade: "Score: 81%",
      description:
        "Higher secondary education with a rigorous focus on Mathematics, Physics, and analytical problem-solving.",
      isCurrent: false,
    },
    {
      institution: "St. George English School, Pune",
      degree: "Secondary School Certificate (SSC)",
      duration: "2020 - 2021",
      grade: "Score: 90.80%",
      description:
        "Secondary schooling establishing foundational academic excellence and extracurricular engagement.",
      isCurrent: false,
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 md:px-8 border-b border-[#E3E6E8] relative bg-[#F2F3F3]/50">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#E3E6E8] mb-10">
          <div>
            <span className="section-id">07 / ACADEMICS</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#17191D] mt-2">
              Academic Foundation.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#666C76] max-w-md sm:text-right">
            Engineering education providing the technical rigor needed to collaborate seamlessly with engineering teams.
          </p>
        </div>

        {/* Clean Architectural Ledger */}
        <div className="editorial-card rounded-2xl overflow-hidden divide-y divide-[#E3E6E8] shadow-xs">
          {educationList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#F2F3F3] transition-colors"
            >
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-bold text-base sm:text-lg text-[#17191D]">
                    {item.institution}
                  </h3>
                  {item.isCurrent && (
                    <span className="px-2 py-0.5 rounded bg-[#EBF1FC] text-[#064ACB] font-mono text-[10px] font-bold">
                      CURRENT
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[#064ACB] mt-0.5">
                  {item.degree}
                </p>
                <p className="text-xs text-[#666C76] mt-1 max-w-2xl leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="sm:text-right shrink-0 font-mono text-xs border-t sm:border-t-0 pt-2 sm:pt-0 border-[#E3E6E8]">
                <span className="font-bold text-sm text-[#17191D] block">
                  {item.grade}
                </span>
                <span className="text-[#969BA5] text-[11px]">
                  {item.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
