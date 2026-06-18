"use client";

import React, { useState, useEffect } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Sun, Moon, Briefcase, Code } from "lucide-react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Achievements", id: "achievements" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

export default function FloatingNav() {
  const { lens, setLens, theme, toggleTheme } = usePortfolio();
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll spy to detect active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 150; // Offset for sticky nav
      
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:py-6 flex justify-center pointer-events-none">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className={`w-full max-w-6xl pointer-events-auto rounded-3xl glass-card px-3 md:px-6 py-2.5 md:py-3 flex items-center justify-between shadow-2xl ${
          isScrolled ? "bg-background/80 backdrop-blur-xl" : "bg-background/40 backdrop-blur-md"
        }`}
      >
        {/* Logo / Title */}
        <div 
          onClick={() => scrollToSection("home")}
          className="cursor-pointer font-display font-bold text-lg md:text-xl text-gradient flex items-center gap-2"
        >
          <span>Saish Ugale</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative px-3 py-1.5 text-sm font-medium transition-colors hover:text-accent-blue pointer-events-auto cursor-pointer"
              style={{ color: activeSection === item.id ? "" : "var(--muted-foreground)" }}
            >
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeNavBackground"
                  className="absolute inset-0 bg-accent-blue/10 dark:bg-accent-blue/20 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Controls: Lens Switcher + Theme + Hamburger */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Lens Switcher */}
          <div className="relative flex items-center bg-black/10 dark:bg-white/5 rounded-full p-1 border border-white/5">
            <button
              onClick={() => setLens("dev")}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-semibold transition-colors relative z-10 cursor-pointer ${
                lens === "dev" ? "text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {lens === "dev" && (
                <motion.div
                  layoutId="lensHighlight"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-blue to-accent-violet -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
              <Code size={13} />
              <span className="hidden sm:inline">Developer</span>
              <span className="sm:hidden">Dev</span>
            </button>
            <button
              onClick={() => setLens("pm")}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-semibold transition-colors relative z-10 cursor-pointer ${
                lens === "pm" ? "text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {lens === "pm" && (
                <motion.div
                  layoutId="lensHighlight"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-blue to-accent-violet -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
              <Briefcase size={13} />
              <span>PM</span>
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl z-40 pointer-events-auto flex flex-col gap-2"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full py-2.5 px-4 rounded-xl text-left text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? "bg-accent-blue/15 text-accent-blue"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
