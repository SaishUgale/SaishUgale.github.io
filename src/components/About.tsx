"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, BookOpen, GraduationCap, MapPin, Users } from "lucide-react";

interface CountUpProps {
  target: string;
  duration?: number;
  suffix?: string;
}

function CountUp({ target, duration = 2, suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    // Remove non-numeric characters for calculation
    const end = parseInt(target.replace(/[^0-9]/g, ""), 10);
    if (isNaN(end)) {
      return;
    }

    const startTime = performance.now();
    const totalDuration = duration * 1000;

    let frameId: number;

    const updateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / totalDuration, 1);
      
      // Easing out quadratic
      const easeProgress = progress * (2 - progress);
      const current = Math.floor(easeProgress * end);

      setCount(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    frameId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-display font-bold text-4xl md:text-5xl text-gradient">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function About() {
  const textRef = useRef(null);
  const textInView = useInView(textRef, { once: true, margin: "-100px" });

  const stats = [
    { target: "10", suffix: "K+", label: "National Applicants Competed" },
    { target: "10", suffix: "th", label: "National Ranking Achieved" },
    { target: "3", suffix: "+", label: "Scholarships & Major Awards" },
    { target: "400", suffix: "+", label: "Developer Community Members Led" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4 tracking-tight">
            About <span className="text-gradient">Saish</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-blue to-accent-violet rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative Biography (Left side, cols 7) */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: -40 }}
            animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <h3 className="font-display text-2xl font-semibold text-foreground flex items-center gap-2">
              <BookOpen className="text-accent-blue" size={24} />
              Bridging Technology and Strategy
            </h3>
            
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              I am a Computer Science undergraduate at <strong>Nutan College of Engineering & Research, Pune</strong> (B.Tech CSE, 2027 batch, current CGPA 8.5/10). I position myself at the intersection of engineering execution and product design, communicating effectively in the language of both developers and stakeholders.
            </p>

            <p className="text-muted-foreground leading-relaxed text-base">
              As a developer, I build scalable systems and architect solutions, focusing on React, Node.js, Python, and cloud services. As a product strategist, I map business value to technical requirements, design workflows, track performance indicators, and champion user-centric feature backlogs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <GraduationCap className="text-accent-violet" size={20} />
                <div>
                  <p className="text-[11px] text-muted-foreground uppercase">Education</p>
                  <p className="text-sm font-semibold">B.Tech CSE, NCER Pune</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <MapPin className="text-accent-blue" size={20} />
                <div>
                  <p className="text-[11px] text-muted-foreground uppercase">Location</p>
                  <p className="text-sm font-semibold">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid (Right side, cols 5) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const statRef = useRef(null);
              const statInView = useInView(statRef, { once: true, margin: "-50px" });

              return (
                <motion.div
                  key={index}
                  ref={statRef}
                  initial={{ opacity: 0, y: 30 }}
                  animate={statInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 rounded-2xl flex flex-col justify-between h-[150px] shadow-lg"
                >
                  <CountUp target={stat.target} suffix={stat.suffix} />
                  <p className="text-xs font-medium text-muted-foreground/80 tracking-wide mt-2">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
