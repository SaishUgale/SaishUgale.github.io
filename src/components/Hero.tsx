"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles, MapPin } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[88vh] w-full flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 md:px-8 border-b border-[#E3E6E8]"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Main Hero Grid: Left Typography, Right Architectural Profile Asset */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Core Headline & Narrative */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Clean Availability Status Indicator */}
            <div className="inline-flex items-center gap-2 mb-4 text-xs font-mono">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E2E5E9] text-[#17191D] text-[11px] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Available for PM Opportunities</span>
              </span>
              <span className="text-[#969BA5] hidden sm:inline">•</span>
              <div className="hidden sm:inline-flex items-center gap-1 text-[11px] text-[#666C76]">
                <MapPin size={12} className="text-[#969BA5]" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#17191D] leading-[1.06] mb-6"
            >
              I Think in <span className="text-[#064ACB]">Products</span>.
              <br />
              I Prototype with <span className="text-[#064ACB]">AI</span>.
              <br />
              I Build to <span className="text-[#17191D] underline decoration-[#064ACB]/40 decoration-2 underline-offset-8">Learn</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg text-[#666C76] max-w-2xl leading-relaxed mb-8"
            >
              I&apos;m Saish Ugale, an aspiring Product Manager who enjoys exploring problems, experimenting with AI tools, and turning ideas into tangible product experiences.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <button
                onClick={() => scrollToSection("case-studies")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#064ACB] hover:bg-[#053ba3] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer group"
              >
                <span>Explore My Work</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                onClick={() => scrollToSection("prototypes")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FFFFFF] border border-[#E2E5E9] hover:border-[#366ED8] text-[#17191D] text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <Sparkles size={14} className="text-[#366ED8]" />
                <span>View Prototypes</span>
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-medium text-[#666C76] hover:text-[#064ACB] transition-colors cursor-pointer"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight size={14} />
              </button>
            </motion.div>

            {/* Subtle Animated Product-Thinking Sequence */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E2E5E9] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
            >
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#969BA5]">
                Process Framework:
              </div>
              <div className="flex items-center gap-2 flex-wrap font-mono text-xs font-semibold text-[#17191D]">
                <span className="hover:text-[#064ACB] transition-colors">DISCOVER</span>
                <span className="text-[#969BA5]">→</span>
                <span className="hover:text-[#064ACB] transition-colors">THINK</span>
                <span className="text-[#969BA5]">→</span>
                <span className="hover:text-[#064ACB] transition-colors">PROTOTYPE</span>
                <span className="text-[#969BA5]">→</span>
                <span className="hover:text-[#064ACB] transition-colors">ITERATE</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Architectural Profile Card (Completely Static Profile Photo) */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
            <div className="editorial-card p-3 rounded-2xl w-full max-w-[320px] mx-auto lg:mx-0 shadow-sm">
              <div className="relative aspect-4/5 w-full rounded-xl overflow-hidden bg-[#F2F3F3] border border-[#E2E5E9]">
                <Image
                  src="/profile.jpg"
                  alt="Saish Ugale"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-[#17191D]/80 text-white font-mono text-[9px] uppercase tracking-wider">
                  P.01 / PROFILE_ASSET
                </div>
              </div>

              <div className="p-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#17191D]">
                    Saish Ugale
                  </span>
                  <span className="text-[10px] font-mono text-[#064ACB] font-semibold bg-[#EBF1FC] px-2 py-0.5 rounded">
                    PM / AI
                  </span>
                </div>
                <p className="text-[11px] text-[#666C76] mt-0.5 leading-snug">
                  Computer Science Foundation, NCER Pune
                </p>
              </div>
            </div>

            {/* Quick Stats Pill */}
            <div className="editorial-card p-4 rounded-2xl w-full max-w-[320px] mx-auto lg:mx-0 flex flex-col gap-2 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-[#E3E6E8]">
                <span className="text-[#969BA5] font-mono text-[10px] uppercase">Focus</span>
                <span className="font-semibold text-[#17191D] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F3A953]" />
                  AI-Native Product Thinking
                </span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-[#E3E6E8]">
                <span className="text-[#969BA5] font-mono text-[10px] uppercase">Internship</span>
                <span className="font-semibold text-[#17191D]">Edzy.ai (6-Week PM)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#969BA5] font-mono text-[10px] uppercase">Advocacy</span>
                <span className="font-semibold text-[#17191D]">Google Student Ambassador</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
