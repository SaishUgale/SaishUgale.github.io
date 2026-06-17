"use client";

import React, { useState } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp, Terminal, Award, Users, Heart } from "lucide-react";
import { Github } from "@/components/Icons";

interface ProjectDetails {
  title: string;
  role: { pm: string; dev: string };
  metrics: string[];
  tech: string[];
  description: { pm: string; dev: string };
  highlights: { pm: string[]; dev: string[] };
  github?: string;
  demo?: string;
}

const projectsData: ProjectDetails[] = [
  {
    title: "AI Auto Inspection",
    role: {
      pm: "Product & Systems Architect",
      dev: "Computer Vision & AI Engineer"
    },
    metrics: ["0.0073 mm sub-pixel precision", "20-22s inspection speed", "Zero-hallucination (Temp 0.0)"],
    tech: ["Python", "OpenCV", "Groq API", "Llama 3.3", "Computer Vision", "Streamlit"],
    description: {
      pm: "A production-ready Computer Vision + LLM quality control system engineered to automate dimensional inspection of precision parts. Replaced manual inspection with automated metrology that ensures 100% compliance and audit trails.",
      dev: "A modular Python & OpenCV pipeline integrating Llama 3.3 (70B) via Groq API (locked at 0.0 temperature) to parse engineering blueprints and auto-generate deterministic measurement code. Features a 7-phase image processing pipeline."
    },
    highlights: {
      pm: [
        "Engineered a production-ready quality control system, automating dimensional inspection of precision parts.",
        "Defined product strategy to transition manual inspection to a digital system, reducing cycle time and error rates.",
        "Locked LLM temperature to 0.0 to guarantee zero-hallucination outputs suitable for ISO compliance.",
        "Designed interactive Streamlit analytics dashboard to provide plant operators with real-time PASS/FAIL metrics."
      ],
      dev: [
        "Built a custom 7-phase OpenCV vision pipeline (adaptive bilateral filtering, Canny edge detection, BFS contour tracing) to resolve reflections.",
        "Developed 'Sniper Scan' sub-pixel calibration algorithm achieving 0.0073 mm/pixel measurement precision.",
        "Designed 'Drawing-to-Code' pipeline using Llama-3.3 70B via Groq API to extract nominal dimensions and auto-generate deterministic calibration logic.",
        "Architected Streamlit dashboard displaying preprocessed part images (binary mask, edge trace) and real-time PASS/FAIL comparison tables."
      ]
    },
    github: "https://github.com/SaishUgale/vision-inspect-ai"
  },
  {
    title: "Gram Vaidya",
    role: {
      pm: "Lead Product Architect & Developer",
      dev: "Full-Stack Software Engineer"
    },
    metrics: ["173+ Villages connected", "40%+ healthcare accessibility increase", "100% offline functionality"],
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "REST APIs", "Service Workers"],
    description: {
      pm: "A rural telemedicine and healthcare platform connecting village clinics with doctors and pharmacies. Designed around user constraints in low-connectivity areas using extensive user research and offline-first product strategy.",
      dev: "A full-stack telehealth application engineered with an offline-first architecture utilizing service workers and IndexedDB for local data persistence. Features secure sync pipelines to reconcile data with a MongoDB cluster once reconnected."
    },
    highlights: {
      pm: [
        "Conducted field research in 5 rural communities to map healthcare workflows and build user persona maps.",
        "Created wireframes and user flow charts to coordinate doctor, patient, and pharmacy interfaces.",
        "Prioritized features (MVP definition) to launch core consultation modules within 3 months.",
        "Established feedback loops that drove a 35% weekly increase in platform adoption."
      ],
      dev: [
        "Architected a custom synchronization algorithm resolving sync conflicts between client and server databases.",
        "Optimized payload sizes for RESTful API calls, reducing latency by 45% on 2G/3G connections.",
        "Implemented secure JWT-based authentication and role-based access control (RBAC) for data security.",
        "Wrote automated test suites for validation of health record schemas in MongoDB."
      ]
    },
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "EduAI",
    role: {
      pm: "Product Lead & Algorithm Architect",
      dev: "Backend & Engine Developer"
    },
    metrics: ["94% evaluation accuracy", "50% grading time saved", "Gamified dashboards"],
    tech: ["Python", "Java", "React.js", "MySQL", "Google Gemini API", "Spring Boot"],
    description: {
      pm: "An AI-powered student assessment and learning analytics engine designed to help educators pinpoint student learning gaps. Leverages a gamified student interface and predictive insights dashboard.",
      dev: "An AI evaluation engine running modular Java OOP backends and performance-gap analytics scripts in Python. Leverages REST API connections to execute prompt-engineering tasks on LLM endpoints."
    },
    highlights: {
      pm: [
        "Defined product metrics to measure teacher engagement and grading time optimization.",
        "Iterated UI design of the analytics dashboard based on testing sessions with high school teachers.",
        "Defined prompt formatting parameters to ensure unbiased, deterministic grading outputs.",
        "Constructed standard Agile backlogs and user stories to manage scope during hackathon builds."
      ],
      dev: [
        "Implemented performance-gap analytics algorithms comparing student scores to standard curriculum matrices.",
        "Designed modular Java OOP backends using Spring Boot, prioritizing high reusability and scalability.",
        "Integrated the Google Gemini API to parse text responses and generate structured JSON grading reports.",
        "Configured relational database schemas in MySQL, optimizing queries for student history reports."
      ]
    },
    github: "https://github.com"
  }
];

const hackathons = [
  {
    title: "Smart India Hackathon 2024",
    place: "1st Place (Institute Level)",
    description: "Developed and pitched a digital system addressing local administrative challenges under high-pressure guidelines.",
    icon: <Award className="text-[#EA4335]" size={20} />
  },
  {
    title: "Tech Pragyan 2025",
    place: "Top 20 Finalist",
    description: "Built an innovative software solution matching national hackathon problem statements under strict 24-hour limits.",
    icon: <Terminal className="text-[#4285F4]" size={20} />
  }
];

export default function Projects() {
  const { lens } = usePortfolio();
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4 tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-sm uppercase tracking-wider">
            {lens === "pm" ? "Product cases & social impact" : "Engineering systems & architectures"}
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-blue to-accent-violet rounded-full mt-4" />
        </div>

        {/* Projects Cards Layout */}
        <div className="grid grid-cols-1 gap-12 mb-16">
          {projectsData.map((project, index) => {
            const isExpanded = expandedProject === index;
            
            return (
              <motion.div
                layout="position"
                key={index}
                className="glass-card rounded-3xl p-8 border border-white/5 relative overflow-hidden bg-gradient-to-br from-white/[0.02] to-transparent shadow-xl"
              >
                {/* Background decorative glows */}
                <div className="absolute right-0 bottom-0 w-[200px] h-[200px] rounded-full bg-accent-blue/5 blur-[50px] pointer-events-none" />

                <div className="flex flex-col lg:flex-row justify-between gap-6 lg:items-start">
                  
                  {/* Project Left Core Details */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground">
                        {project.title}
                      </h3>
                      <span className="px-3 py-1 rounded-full bg-accent-blue/15 text-accent-blue text-xs font-semibold">
                        {lens === "pm" ? project.role.pm : project.role.dev}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-accent-violet mb-4 uppercase tracking-wider">
                      {lens === "pm" ? "Impact Highlight" : "Core Stack"}
                    </p>

                    {/* Dynamic Header Badge Lists */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {lens === "pm"
                        ? project.metrics.map((metric, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-foreground/90">
                              {metric}
                            </span>
                          ))
                        : project.tech.map((t, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-xs font-mono text-accent-blue">
                              {t}
                            </span>
                          ))
                      }
                    </div>

                    {/* Project Description */}
                    <motion.p 
                      layout="position"
                      className="text-muted-foreground leading-relaxed text-base mb-6"
                    >
                      {lens === "pm" ? project.description.pm : project.description.dev}
                    </motion.p>
                  </div>

                  {/* Actions & Links */}
                  <div className="flex flex-row lg:flex-col gap-3 items-center justify-end">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-blue/30 text-muted-foreground hover:text-foreground transition-all"
                        title="GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-blue/30 text-muted-foreground hover:text-foreground transition-all"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    <button
                      onClick={() => toggleExpand(index)}
                      className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-accent-blue/15 text-accent-blue text-xs font-semibold hover:bg-accent-blue/25 transition-all cursor-pointer"
                    >
                      <span>{isExpanded ? "Collapse" : "View Details"}</span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </div>

                </div>

                {/* Expandable Case Study / Highlights */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-white/5 mt-6 pt-6"
                    >
                      <h4 className="font-display font-semibold text-sm text-foreground/90 uppercase tracking-widest mb-4">
                        {lens === "pm" ? "Product & Design Execution" : "Technical Implementation & Architecture"}
                      </h4>
                      <ul className="space-y-3 pl-5 list-disc text-muted-foreground text-sm leading-relaxed">
                        {(lens === "pm" ? project.highlights.pm : project.highlights.dev).map((highlight, idx) => (
                          <li key={idx} className="marker:text-accent-blue">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

        {/* Hackathon Side Gallery */}
        <div className="mt-16">
          <h3 className="font-display font-semibold text-xl text-foreground mb-8 text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
            <Users className="text-accent-blue" size={20} />
            Hackathons & Competitions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hackathons.map((h, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-2xl border border-white/5 flex gap-4 items-start bg-gradient-to-br from-white/[0.01] to-transparent"
              >
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 shadow-inner">
                  {h.icon}
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-display font-bold text-base text-foreground">
                      {h.title}
                    </h4>
                  </div>
                  <p className="text-xs font-semibold text-accent-blue uppercase mb-3">
                    {h.place}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {h.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
