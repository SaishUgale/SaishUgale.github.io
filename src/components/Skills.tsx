"use client";

import React, { useState, useEffect } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import { motion } from "framer-motion";
import { Briefcase, Code, Database, Star, Terminal, Zap } from "lucide-react";

interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

const pmSkills: SkillCategory[] = [
  {
    title: "Product Execution",
    skills: ["Backlog Prioritisation", "User Story Writing", "Acceptance Criteria", "Agile/Scrum", "SDLC"],
    icon: <Zap size={16} className="text-accent-blue" />
  },
  {
    title: "Strategy & Discovery",
    skills: ["Requirements Gathering", "Stakeholder Communication", "Functional Documentation"],
    icon: <Briefcase size={16} className="text-accent-blue" />
  },
  {
    title: "Metrics & Testing",
    skills: ["KPI Monitoring", "Data Analysis", "A/B Testing Mindset"],
    icon: <Star size={16} className="text-accent-blue" />
  },
  {
    title: "Tools of the Trade",
    skills: ["JIRA", "Confluence", "Figma", "MS Excel", "PowerPoint"],
    icon: <Terminal size={16} className="text-accent-blue" />
  }
];

const devSkills: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript (ES6+)", "C++", "C", "SQL", "PHP"],
    icon: <Code size={16} className="text-accent-violet" />
  },
  {
    title: "Web Technologies",
    skills: ["React.js", "Node.js", "Express.js", "HTML5 / CSS3", "REST APIs"],
    icon: <Zap size={16} className="text-accent-violet" />
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Oracle SQL"],
    icon: <Database size={16} className="text-accent-violet" />
  },
  {
    title: "AI & Engineering Tools",
    skills: ["Google Gemini (GenAI)", "Git / GitHub", "VS Code", "System Design", "DSA / OOP"],
    icon: <Terminal size={16} className="text-accent-violet" />
  }
];

// Radar Chart Configuration
const radarAxes = [
  { name: "Product Strategy", pm: 0.95, dev: 0.5 },
  { name: "System Design", pm: 0.65, dev: 0.9 },
  { name: "Execution & Coding", pm: 0.55, dev: 0.95 },
  { name: "GenAI Advocacy", pm: 0.9, dev: 0.75 },
  { name: "Communication", pm: 0.95, dev: 0.7 },
];

export default function Skills() {
  const { lens } = usePortfolio();
  
  // Calculate radar chart coordinates
  const getRadarPoints = (type: "pm" | "dev") => {
    const center = 120;
    const r = 85;
    return radarAxes.map((axis, i) => {
      const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
      const value = type === "pm" ? axis.pm : axis.dev;
      const x = center + r * value * Math.cos(angle);
      const y = center + r * value * Math.sin(angle);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(" ");
  };

  const [pmPoints, setPmPoints] = useState("");
  const [devPoints, setDevPoints] = useState("");

  useEffect(() => {
    setPmPoints(getRadarPoints("pm"));
    setDevPoints(getRadarPoints("dev"));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent to-black/5">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4 tracking-tight">
            Skills <span className="text-gradient">Matrix</span>
          </h2>
          <p className="text-muted-foreground text-sm uppercase tracking-wider">
            Comparing Product Management & Technical Execution
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-blue to-accent-violet rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Radar Chart Display (Left, cols 5) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-[280px] h-[280px] flex items-center justify-center glass-card p-4 rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.01] to-transparent shadow-xl">
              <svg width="240" height="240" viewBox="0 0 240 240" className="overflow-visible">
                {/* Concentric Pentagons */}
                {[0.2, 0.4, 0.6, 0.8, 1.0].map((scale, idx) => {
                  const points = Array.from({ length: 5 }).map((_, i) => {
                    const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
                    const x = 120 + 85 * scale * Math.cos(angle);
                    const y = 120 + 85 * scale * Math.sin(angle);
                    return `${x},${y}`;
                  }).join(" ");
                  return (
                    <polygon
                      key={idx}
                      points={points}
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.04)"
                      strokeWidth="1"
                    />
                  );
                })}

                {/* Axis Lines */}
                {Array.from({ length: 5 }).map((_, i) => {
                  const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
                  const x = 120 + 85 * Math.cos(angle);
                  const y = 120 + 85 * Math.sin(angle);
                  return (
                    <line
                      key={i}
                      x1="120"
                      y1="120"
                      x2={x}
                      y2={y}
                      stroke="rgba(255, 255, 255, 0.08)"
                      strokeWidth="1"
                    />
                  );
                })}

                {/* Interactive Polygons */}
                <motion.polygon
                  points={pmPoints}
                  fill="rgba(79, 124, 255, 0.2)"
                  stroke="#4F7CFF"
                  strokeWidth={lens === "pm" ? "2.5" : "1.5"}
                  initial={{ fillOpacity: 0.2 }}
                  animate={{
                    fillOpacity: lens === "pm" ? 0.35 : 0.15,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.polygon
                  points={devPoints}
                  fill="rgba(168, 85, 247, 0.2)"
                  stroke="#A855F7"
                  strokeWidth={lens === "dev" ? "2.5" : "1.5"}
                  initial={{ fillOpacity: 0.2 }}
                  animate={{
                    fillOpacity: lens === "dev" ? 0.35 : 0.15,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Anchor Points */}
                {radarAxes.map((axis, i) => {
                  const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
                  const pmVal = typePoints(axis.pm, angle);
                  const devVal = typePoints(axis.dev, angle);

                  function typePoints(val: number, ang: number) {
                    return {
                      x: 120 + 85 * val * Math.cos(ang),
                      y: 120 + 85 * val * Math.sin(ang)
                    };
                  }

                  return (
                    <g key={i}>
                      <circle cx={pmVal.x} cy={pmVal.y} r="3" fill="#4F7CFF" />
                      <circle cx={devVal.x} cy={devVal.y} r="3" fill="#A855F7" />
                    </g>
                  );
                })}

                {/* Labels */}
                {radarAxes.map((axis, i) => {
                  const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
                  const x = 120 + 105 * Math.cos(angle);
                  const y = 120 + 105 * Math.sin(angle);
                  let textAnchor: "start" | "end" | "middle" = "middle";
                  if (Math.cos(angle) > 0.1) textAnchor = "start";
                  if (Math.cos(angle) < -0.1) textAnchor = "end";
                  
                  return (
                    <text
                      key={i}
                      x={x}
                      y={y + 4}
                      fill="var(--foreground)"
                      fontSize="9"
                      fontWeight="600"
                      textAnchor={textAnchor}
                      className="opacity-75 tracking-wider uppercase font-display"
                    >
                      {axis.name}
                    </text>
                  );
                })}
              </svg>
            </div>
            
            {/* Chart Legend */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-6 text-xs font-semibold justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-accent-blue border border-accent-blue/30" />
                <span className={lens === "pm" ? "text-accent-blue" : "text-muted-foreground"}>Product Management Profile</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-accent-violet border border-accent-violet/30" />
                <span className={lens === "dev" ? "text-accent-violet" : "text-muted-foreground"}>Developer Profile</span>
              </div>
            </div>
          </div>

          {/* Skill Lists Display (Right, cols 7) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* PM Skills Subsection */}
            <motion.div
              layout="position"
              className={`p-5 md:p-6 rounded-3xl transition-all duration-500 border ${
                lens === "pm" 
                  ? "bg-accent-blue/5 border-accent-blue/25 shadow-xl shadow-accent-blue/5" 
                  : "bg-white/[0.01] border-white/5 opacity-70"
              }`}
            >
              <h3 className="font-display font-bold text-lg mb-6 flex items-center gap-2 text-foreground">
                <Briefcase size={18} className="text-accent-blue" />
                Product Management & Strategy
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {pmSkills.map((cat, i) => (
                  <motion.div key={i} variants={itemVariants} className="flex flex-col gap-2">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-accent-blue uppercase tracking-wide">
                      {cat.icon}
                      {cat.title}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 hover:border-accent-blue/20 text-xs font-medium text-muted-foreground hover:text-foreground transition-all">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Developer Skills Subsection */}
            <motion.div
              layout="position"
              className={`p-5 md:p-6 rounded-3xl transition-all duration-500 border ${
                lens === "dev" 
                  ? "bg-accent-violet/5 border-accent-violet/25 shadow-xl shadow-accent-violet/5" 
                  : "bg-white/[0.01] border-white/5 opacity-70"
              }`}
            >
              <h3 className="font-display font-bold text-lg mb-6 flex items-center gap-2 text-foreground">
                <Code size={18} className="text-accent-violet" />
                Software Development & Core CS
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {devSkills.map((cat, i) => (
                  <motion.div key={i} variants={itemVariants} className="flex flex-col gap-2">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-accent-violet uppercase tracking-wide">
                      {cat.icon}
                      {cat.title}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 hover:border-accent-violet/20 text-xs font-medium text-muted-foreground hover:text-foreground transition-all">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
