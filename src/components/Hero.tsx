"use client";

import React, { useState, useEffect } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

const cyclingTexts = [
  "Building products people actually use.",
  "Technical Product Manager in the making.",
  "Full-Stack Developer.",
  "Top 10 Google Student Ambassador, India 🇮🇳",
];

export default function Hero() {
  const { lens } = usePortfolio();
  const [textIndex, setTextIndex] = useState(0);
  
  // Mouse position hooks for parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Normalize values between -0.5 and 0.5
      mouseX.set((clientX / innerWidth) - 0.5);
      mouseY.set((clientY / innerHeight) - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Transform values for parallax effect
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
  const driftX = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);
  const driftY = useTransform(mouseY, [-0.5, 0.5], [-20, 20]);

  // Text cycling loop
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % cyclingTexts.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 px-4 md:px-8"
    >
      {/* Background Animated Gradient Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[15%] left-[10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full bg-accent-blue/15 dark:bg-accent-blue/10 blur-[100px] md:blur-[140px]"
        />
        <motion.div
          animate={{
            x: [0, -30, 30, 0],
            y: [0, 40, -40, 0],
            scale: [1, 0.85, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[40%] right-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-accent-violet/15 dark:bg-accent-violet/10 blur-[90px] md:blur-[130px]"
        />
      </div>

      <div className="w-full max-w-6xl z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Text Content (Cols 7 on desktop) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
          {/* Tagline / Intro */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center lg:justify-start gap-2 text-sm font-semibold tracking-wider text-accent-blue uppercase mb-4"
          >
            <span className="h-2 w-2 rounded-full bg-accent-blue animate-pulse" />
            {lens === "dev" ? "Full-Stack Software Engineer" : "Technical Product Manager"}
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-6 text-foreground"
          >
            Hi, I'm <span className="text-gradient">Saish Ugale</span>
          </motion.h1>

          {/* Cycling Text Rotator */}
          <div className="h-[60px] md:h-[50px] mb-8 overflow-hidden flex items-center justify-center lg:justify-start">
            <motion.div
              key={textIndex}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="font-display text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground"
            >
              {cyclingTexts[textIndex]}
            </motion.div>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground/80 max-w-xl mb-10 mx-auto lg:mx-0 leading-relaxed"
          >
            CS undergraduate bridging engineering and product — building scalable software systems and shaping how AI-powered products reach real users. Let's make an impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="group flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-accent-blue to-accent-violet text-white font-semibold shadow-lg hover:shadow-accent-blue/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer w-full sm:w-auto justify-center"
            >
              <span>View Projects</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center justify-center lg:justify-start gap-4 mt-8"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/5 text-muted-foreground hover:text-accent-blue hover:border-accent-blue/30 transition-all"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/saish-ugale-91b761292"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/5 text-muted-foreground hover:text-accent-blue hover:border-accent-blue/30 transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:saishugale2005@gmail.com"
              className="p-2.5 rounded-full bg-white/5 border border-white/5 text-muted-foreground hover:text-accent-blue hover:border-accent-blue/30 transition-all"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        {/* Hero Visual Display (Cols 5 on desktop) */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            style={{ rotateX, rotateY, x: driftX, y: driftY, transformStyle: "preserve-3d" }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 70 }}
            className="relative w-[280px] h-[340px] md:w-[360px] md:h-[440px] rounded-3xl glass-card overflow-hidden border border-white/10 shadow-3xl group cursor-grab active:cursor-grabbing"
          >
            {/* Dark gradient mask at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 pointer-events-none" />
            
            {/* Profile Image */}
            <img 
              src="/profile.jpg" 
              alt="Saish Ugale" 
              className="w-full h-full object-cover object-center scale-[1.02] group-hover:scale-105 transition-transform duration-700 select-none pointer-events-none"
            />
            
            {/* Lens Badge Tag (Developer / PM) */}
            <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-center bg-black/40 backdrop-blur-md border border-white/10 p-3 rounded-2xl">
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">Currently Active</p>
                <p className="text-xs md:text-sm font-bold text-white tracking-wide">
                  {lens === "dev" ? "Software Engineer" : "Technical Product Manager"}
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent-blue to-accent-violet flex items-center justify-center text-[10px] font-bold text-white shadow-md">
                {lens === "dev" ? "</>" : "PM"}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating scroll down chevron */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <span className="text-[10px] tracking-widest text-muted-foreground uppercase">Scroll</span>
        <svg 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-muted-foreground"
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </motion.div>
    </section>
  );
}
