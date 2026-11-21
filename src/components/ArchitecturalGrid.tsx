"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function ArchitecturalGrid() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Smooth mouse coordinates for desktop radial intersection glow
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const springConfig = { damping: 25, stiffness: 200 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 768) {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY + window.scrollY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* 1. Base Architectural Gridlines in light green (#C8E3CD) */}
      <div className="absolute inset-0 architectural-grid-bg opacity-90" />

      {/* 2. Very subtle ambient animated scanline traveling horizontally */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#10B981]/20 to-transparent animate-grid-scan" />

      {/* 3. Subtle desktop mouse proximity illumination */}
      {mounted && !isMobile && (
        <motion.div
          className="absolute -top-[250px] -left-[250px] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            x: smoothMouseX,
            y: smoothMouseY,
            background:
              "radial-gradient(circle, rgba(6, 74, 203, 0.045) 0%, rgba(6, 74, 203, 0.01) 45%, transparent 70%)",
          }}
        />
      )}

      {/* 4. Corner registration marks */}
      <div className="absolute top-6 left-6 text-[#969BA5]/30 font-mono text-[9px] hidden lg:block">
        + 00.00
      </div>
      <div className="absolute top-6 right-6 text-[#969BA5]/30 font-mono text-[9px] hidden lg:block">
        + 100.00
      </div>
    </div>
  );
}
