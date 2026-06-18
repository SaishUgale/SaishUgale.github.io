"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Globe, MessageSquare, Terminal, Users } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function GoogleAmbassador() {
  const timelineSteps = [
    {
      icon: <Award className="text-accent-blue" size={20} />,
      title: "1. Elite Selection",
      description: "Selected as one of the few Google Student Ambassadors for India, competing against 10,000+ applicants nationwide. Ranked in the Top 10 nationally (top 0.01% selection rate).",
    },
    {
      icon: <Users className="text-accent-violet" size={20} />,
      title: "2. Community Leadership",
      description: "Built and led an active student developer community of 400+ members. Designed curricula and organized workshops on core Google technologies.",
    },
    {
      icon: <Terminal className="text-accent-blue" size={20} />,
      title: "3. GenAI & Gemini Advocacy",
      description: "Delivered hands-on workshops on Google Gemini APIs, LLMs, and developer tooling. Wrote technical integration guides that facilitated AI tool adoption.",
    },
    {
      icon: <MessageSquare className="text-accent-violet" size={20} />,
      title: "4. Product Thinking & Growth KPI",
      description: "Implemented product processes: tracked tool adoption metrics, analyzed engagement feedback (Voice of the Customer), and iterated campaigns — resulting in 60%+ adoption growth.",
    },
    {
      icon: <Globe className="text-accent-blue" size={20} />,
      title: "5. International Representation",
      description: "Awarded a fully-sponsored trip as a national delegate to the Dubai AI Film Festival, representing India for outstanding performance in community impact and AI education.",
    },
  ];

  return (
    <section 
      id="experience" 
      className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent to-black/10"
    >
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Container Scroll Showcase */}
        <div className="mt-[-8rem] md:mt-[-12rem] mb-12">
          <ContainerScroll
            titleComponent={
              <div className="flex flex-col items-center text-center">
                <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
                  Google Student Ambassador Journey
                </p>
                <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight text-foreground leading-none">
                  Centerpiece <span className="text-gradient">Story</span>
                </h2>
              </div>
            }
          >
            <div className="w-full h-full flex flex-col justify-between p-5 md:p-12 relative overflow-hidden bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-black border border-zinc-200/50 dark:border-transparent text-left">
              {/* Background design elements */}
              <div className="absolute right-[-10%] top-[-10%] w-[300px] h-[300px] rounded-full bg-accent-blue/10 blur-[80px]" />
              <div className="absolute left-[-5%] bottom-[-10%] w-[250px] h-[250px] rounded-full bg-accent-violet/10 blur-[80px]" />
              
              {/* Google Logo representation */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    <span className="w-4 h-4 rounded-full bg-[#EA4335]" />
                    <span className="w-4 h-4 rounded-full bg-[#4285F4]" />
                    <span className="w-4 h-4 rounded-full bg-[#FBBC05]" />
                    <span className="w-4 h-4 rounded-full bg-[#34A853]" />
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                    Google Ambassador Program
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-accent-blue/15 text-accent-blue text-xs font-semibold">
                  Featured Role
                </span>
              </div>

              {/* Core Card Text */}
              <div className="my-auto">
                <h3 className="font-display font-bold text-2xl md:text-4xl tracking-tight mb-4 text-foreground leading-tight">
                  Empowering Communities Through <span className="text-gradient">Generative AI</span>
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground max-w-2xl leading-relaxed">
                  As a Google Student Ambassador, I bridged the gap between cutting-edge AI technology and community engagement. By applying product management principles and software skills, I drove widespread tool adoption and represented India on an international stage.
                </p>
              </div>

              {/* Card Footer Metrics */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 border-t border-zinc-200 dark:border-white/5 pt-4 md:pt-6">
                <div>
                  <p className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-wider">Ranking</p>
                  <p className="text-xs sm:text-sm md:text-base font-bold text-foreground">Top 10 India</p>
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-wider">Reach</p>
                  <p className="text-xs sm:text-sm md:text-base font-bold text-foreground">400+ Members</p>
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-wider">Representation</p>
                  <p className="text-xs sm:text-sm md:text-base font-bold text-foreground">Dubai Delegate</p>
                </div>
              </div>
            </div>
          </ContainerScroll>
        </div>

        {/* Timeline Journey and Quote Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Vertical Stepper Timeline (Left, cols 7) */}
          <div className="lg:col-span-7 flex flex-col relative pl-8 border-l border-black/10 dark:border-white/10 gap-10">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline node */}
                <div className="absolute left-[-45px] top-1.5 w-8 h-8 rounded-full bg-background border-2 border-black/10 dark:border-white/10 group-hover:border-accent-blue flex items-center justify-center transition-colors shadow-lg z-10">
                  {step.icon}
                </div>

                <div className="glass-card p-5 md:p-6 rounded-2xl group-hover:border-accent-blue/20 transition-all">
                  <h4 className="font-display font-semibold text-lg text-foreground mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured Pull Quote & Key Takeaway (Right, cols 5) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden bg-gradient-to-br from-accent-blue/5 via-transparent to-accent-violet/5 shadow-2xl"
            >
              {/* Quote Mark Decoration */}
              <div className="absolute top-4 left-6 text-7xl font-serif text-accent-blue/15 select-none pointer-events-none">
                “
              </div>
              
              <blockquote className="relative z-10 mt-6 mb-8 text-base md:text-lg italic text-muted-foreground leading-relaxed">
                The Google Student Ambassador program taught me that the best technology means nothing without the people who can explain it, advocate for it, and help others adopt it.
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-accent-blue to-accent-violet flex items-center justify-center font-display font-bold text-sm text-white">
                  SU
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Saish Ugale</p>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider">Google Student Ambassador</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
