"use client";

import { PortfolioProvider } from "@/context/PortfolioContext";
import ArchitecturalGrid from "@/components/ArchitecturalGrid";
import FloatingNav from "@/components/FloatingNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import Workflow from "@/components/Workflow";
import Experience from "@/components/Experience";
import CaseStudies from "@/components/CaseStudies";
import PrototypingLab from "@/components/PrototypingLab";
import Toolkit from "@/components/Toolkit";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

function PortfolioContent() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#F2F3F3] text-[#17191D]">
      {/* Signature Animated Architectural Background Gridlines */}
      <ArchitecturalGrid />

      {/* Sticky Floating Studio Navigation */}
      <FloatingNav />

      {/* Website Information Architecture */}
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* 01 / About Me */}
        <About />

        {/* Core Principles Philosophy */}
        <Philosophy />

        {/* Methodology / Workflow */}
        <Workflow />

        {/* 02 / Professional Experience */}
        <Experience />

        {/* 03 / Featured Product Case Studies */}
        <CaseStudies />

        {/* 04 / AI Prototyping Lab */}
        <PrototypingLab />

        {/* 05 / Product Management Toolkit */}
        <Toolkit />

        {/* Core Competencies Skills */}
        <Skills />

        {/* 06 / Achievements & Recognition */}
        <Achievements />

        {/* 07 / Academic Foundation */}
        <Education />

        {/* 08 / Contact & Studio Ledger */}
        <Contact />
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <PortfolioProvider>
      <PortfolioContent />
    </PortfolioProvider>
  );
}
