"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, GraduationCap, Plane, Sparkles } from "lucide-react";

interface Achievement {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
}

const achievements: Achievement[] = [
  {
    title: "Cummins India Scholarship 2026",
    subtitle: "Nurturing Brilliance Recipient",
    description: "Awarded a prestigious scholarship recognizing academic excellence and leadership potential in engineering.",
    icon: <GraduationCap size={24} className="text-accent-blue" />,
    colorClass: "text-accent-blue"
  },
  {
    title: "Top 10 Google Student Ambassador",
    subtitle: "National Recognition (India)",
    description: "Honored in the top 10 ambassadors nationally from a pool of 10,000+ applicants for outstanding program results.",
    icon: <Trophy size={24} className="text-accent-violet" />,
    colorClass: "text-accent-violet"
  },
  {
    title: "Dubai AI Film Festival Delegate",
    subtitle: "Fully-Sponsored International Visit",
    description: "Invited to represent the community in Dubai, recognizing exceptional performance in AI advocacy.",
    icon: <Plane size={24} className="text-accent-blue" />,
    colorClass: "text-accent-blue"
  },
  {
    title: "Smart India Hackathon 2024",
    subtitle: "1st Place (Institute Level)",
    description: "Won first prize at the college level for designing a robust, scale-ready administrative portal.",
    icon: <Award size={24} className="text-accent-violet" />,
    colorClass: "text-accent-violet"
  },
  {
    title: "Tech Pragyan Hackathon 2025",
    subtitle: "Top 20 Finalist",
    description: "Competed in the final round of the national hackathon, building prototype applications within 24 hours.",
    icon: <Sparkles size={24} className="text-accent-blue" />,
    colorClass: "text-accent-blue"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4 tracking-tight">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-sm uppercase tracking-wider">
            Honors, Scholarships & Competitions
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-blue to-accent-violet rounded-full mt-4" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card p-5 md:p-6 rounded-3xl bg-gradient-to-br from-white/[0.01] to-transparent shadow-lg flex flex-col justify-between h-full min-h-[220px]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-inner">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${item.colorClass}`}>
                  {item.subtitle}
                </p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
