"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  description?: string;
}

const educationData: EducationItem[] = [
  {
    institution: "Nutan College of Engineering & Research (NCER), Pune",
    degree: "B.Tech in Computer Science & Engineering",
    duration: "2023 - 2027",
    grade: "CGPA: 8.5 / 10",
    description: "Focusing on Software Engineering, Database Systems, System Design, Data Structures & Algorithms, Object-Oriented Programming, and Project Management methodologies."
  },
  {
    institution: "St. Ursula's Junior College, Pune",
    degree: "Higher Secondary Certificate (HSC) - Science",
    duration: "2021 - 2023",
    grade: "Score: 81.00%",
    description: "Specialized in Physics, Chemistry, Mathematics, and Computer Science."
  },
  {
    institution: "St. George English School, Pune",
    degree: "Secondary School Certificate (SSC)",
    duration: "2020 - 2021",
    grade: "Score: 90.80%",
    description: "Completed general secondary education with distinction."
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent to-black/5">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4 tracking-tight">
            Education <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-muted-foreground text-sm uppercase tracking-wider">
            Academic Background & Credentials
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-blue to-accent-violet rounded-full mt-4" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10 ml-4 max-w-4xl mx-auto">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative mb-12 last:mb-0 group"
            >
              {/* Timeline dot/node */}
              <div className="absolute left-[-38px] md:left-[-54px] top-1.5 w-6 h-6 md:w-8 md:h-8 rounded-full bg-background border-2 border-white/10 group-hover:border-accent-blue flex items-center justify-center transition-colors shadow-lg z-10">
                <GraduationCap size={14} className="text-muted-foreground group-hover:text-accent-blue transition-colors" />
              </div>

              {/* Education details card */}
              <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/5 group-hover:border-accent-blue/15 transition-all bg-gradient-to-br from-white/[0.01] to-transparent shadow-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-display font-bold text-lg md:text-xl text-foreground mb-1 leading-snug">
                      {item.institution}
                    </h3>
                    <p className="text-sm font-semibold text-accent-blue">
                      {item.degree}
                    </p>
                  </div>
                  <div className="flex flex-row md:flex-col items-center md:items-end gap-3 md:gap-1 mt-1">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      <Calendar size={12} />
                      {item.duration}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-accent-violet bg-accent-violet/10 px-2.5 py-1 rounded-full border border-accent-violet/20">
                      <Award size={12} />
                      {item.grade}
                    </span>
                  </div>
                </div>
                {item.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed border-t border-white/5 pt-4">
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
