"use client";

import { PortfolioProvider, usePortfolio } from "@/context/PortfolioContext";
import FloatingNav from "@/components/FloatingNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import GoogleAmbassador from "@/components/GoogleAmbassador";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";

function PortfolioContent() {
  const { lens } = usePortfolio();

  // Map of sections to render
  const sections: { [key: string]: React.ReactNode } = {
    home: <Hero key="home-section" />,
    about: <About key="about-section" />,
    experience: <GoogleAmbassador key="exp-section" />,
    skills: <Skills key="skills-section" />,
    projects: <Projects key="projects-section" />,
    achievements: <Achievements key="ach-section" />,
    education: <Education key="edu-section" />,
    contact: <Contact key="contact-section" />,
  };

  // Reorder sections based on selected lens
  const sectionOrder = lens === "pm"
    ? ["home", "about", "experience", "skills", "projects", "achievements", "education", "contact"]
    : ["home", "about", "projects", "skills", "experience", "achievements", "education", "contact"];

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background tactile grain texture overlay */}
      <div className="absolute inset-0 noise-bg z-40 pointer-events-none" />

      {/* Floating Sticky Navigation */}
      <FloatingNav />

      {/* Main content area */}
      <main className="flex-1">
        {sectionOrder.map((sectionId) => (
          <motion.div
            key={sectionId}
            layout="position"
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 22,
            }}
          >
            {sections[sectionId]}
          </motion.div>
        ))}
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
