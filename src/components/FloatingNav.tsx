"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Case Studies", id: "case-studies" },
  { label: "Prototypes", id: "prototypes" },
  { label: "Toolkit", id: "toolkit" },
  { label: "Recognition", id: "achievements" },
  { label: "Contact", id: "contact" },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 180;
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
      if (window.scrollY < 300) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-3 sm:py-4 flex justify-center pointer-events-none">
      <div
        className={`w-full max-w-6xl pointer-events-auto rounded-full studio-nav px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between transition-all duration-200 ${
          isScrolled ? "shadow-[0_4px_20px_-4px_rgba(23,25,29,0.06)]" : ""
        }`}
      >
        {/* Brand Label */}
        <div
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActiveSection("");
          }}
          className="cursor-pointer flex items-center group"
        >
          <span className="font-mono text-xs font-bold tracking-tight text-[#17191D] group-hover:text-[#064ACB] transition-colors">
            SAISH UGALE
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors cursor-pointer ${
                  isActive
                    ? "text-[#064ACB] font-semibold bg-[#EBF1FC]"
                    : "text-[#666C76] hover:text-[#366ED8]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#17191D] hover:bg-[#064ACB] text-white text-xs font-medium transition-colors cursor-pointer group"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight
              size={13}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation"
            className="lg:hidden p-1.5 rounded-full text-[#17191D] hover:bg-black/5 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden fixed top-16 left-4 right-4 max-w-sm mx-auto bg-[#FFFFFF] rounded-2xl p-4 shadow-xl pointer-events-auto border border-[#E2E5E9] z-50 flex flex-col gap-1"
          >
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#969BA5] px-3 pb-2 border-b border-[#E3E6E8] mb-1">
              Index Navigation
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                  activeSection === item.id
                    ? "bg-[#EBF1FC] text-[#064ACB] font-semibold"
                    : "text-[#17191D] hover:bg-[#F2F3F3]"
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
