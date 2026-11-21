"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EdzyLogo } from "@/components/EdzyLogo";
import {
  ArrowRight,
  X,
  ExternalLink,
  Users,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface CaseStudy {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  summary: string;
  isEdzy?: boolean;
  externalLink?: string;
  metrics: { label: string; value: string }[];
  overview: string;
  problemStatement: string;
  targetUsers: string;
  painPoints: string[];
  productOpportunity: string;
  productApproach: string;
  featuresAndUX: string[];
  myRoleAndContributions: string[];
  challengesAndTradeoffs: string[];
  outcomesAndLearnings: string[];
}

const caseStudiesData: CaseStudy[] = [
  {
    id: "edzy",
    number: "01",
    title: "Edzy.ai",
    category: "AI | EdTech | Educational SaaS",
    tagline: "Evaluating Learning Workflows & AI Assistant Interaction",
    summary:
      "A 6-week product management internship evaluating student doubt-solving workflows, benchmarking key competitors (Photomath & Quizlet), and evaluating AI learning experiences.",
    isEdzy: true,
    externalLink: "https://www.edzy.ai/",
    metrics: [
      { label: "Competitor Teardowns", value: "Photomath & Quizlet" },
      { label: "Growth Outreach", value: "11 Targeted Backlinks" },
      { label: "UX Evaluation", value: "Educational Workflows" },
    ],
    overview:
      "Edzy.ai is an AI-powered educational platform designed to help students learn through guided explanations, doubt solving, practice, revision, and personalized learning support. During a six-week internship, I supported the founding team with product research, competitor benchmarking, experience evaluation, and AI-assisted prototyping.",
    problemStatement:
      "Self-study students often face significant friction when stuck on difficult academic concepts. Traditional answer engines frequently jump straight to the final solution without building intuitive understanding, leading to passive copying rather than genuine mastery.",
    targetUsers:
      "Middle and high school students seeking self-directed homework assistance, concept clarification, and structured practice outside regular classroom hours.",
    painPoints: [
      "Abrupt, non-interactive solution steps that fail to explain underlying principles.",
      "High cognitive anxiety when navigating complex mathematical formulas or dense text.",
      "Lack of encouraging feedback loops during moments of academic frustration.",
      "Perceived latency and robotic feel during AI response generation.",
    ],
    productOpportunity:
      "Create a supportive, conversational learning experience that combines rigorous step-by-step pedagogical breakdown with an expressive, approachable AI assistant persona.",
    productApproach:
      "Conducted competitive teardowns of leading learning apps (Photomath, Quizlet) to evaluate question-input methods, step validation, and gamification mechanics. Evaluated internal product workflows for UI consistency and conceptual clarity, identifying cognitive drop-offs in AI-assisted doubt resolution.",
    featuresAndUX: [
      "Guided multi-step concept decomposition rather than instant answers.",
      "Interactive doubt-solving chat interface with educational guardrails.",
      "Step validation mechanisms ensuring accurate conceptual progression.",
      "Clear visual distinction between hint prompts and final answer steps.",
    ],
    myRoleAndContributions: [
      "Prepared structured competitor research documents comparing Photomath and Quizlet workflows.",
      "Audited student question flows and documented concrete UI/UX friction observations.",
      "Evaluated learning workflows and formulated step-by-step guidance recommendations.",
      "Executed organic growth initiatives, researching domains and sending 11 backlink outreach emails.",
      "Distinguished personal intern deliverables from full company capabilities throughout all documentation.",
    ],
    challengesAndTradeoffs: [
      "Balancing AI response speed against educational pedagogy: instant answers feel faster, but step-by-step hints yield superior retention.",
      "Ensuring step validation logic handles multi-format mathematical notation accurately.",
    ],
    outcomesAndLearnings: [
      "Learned how to conduct structured, objective competitor teardowns that inform executive decisions.",
      "Recognized that progressive step indicators fundamentally improve user confidence during complex problem resolution.",
      "Gained firsthand experience operating in a fast-paced early-stage AI SaaS environment.",
    ],
  },
  {
    id: "eduai",
    number: "02",
    title: "EduAI",
    category: "AI | EdTech | Student Experience",
    tagline: "Adaptive Skill Assessment & Personalized Learning Paths",
    summary:
      "An adaptive assessment and learning recommendation product concept applying Item Response Theory, habit-forming feedback loops, and automated skill-gap discovery.",
    metrics: [
      { label: "Assessment Method", value: "Item Response Theory" },
      { label: "Loop Design", value: "XP, Streaks & Goals" },
      { label: "Product Focus", value: "Adaptive Discovery" },
    ],
    overview:
      "EduAI is an educational product concept designed to give students clear visibility into their individual learning gaps and automatically chart a personalized weekly progression path.",
    problemStatement:
      "Students often lack structured visibility into where their foundational misconceptions lie. They waste hours repeating familiar topics while avoiding subtle skill gaps that hinder long-term performance.",
    targetUsers:
      "Secondary school and university students preparing for standardized assessments who require diagnostic clarity and efficient study planning.",
    painPoints: [
      "One-size-fits-all diagnostic tests that either bore advanced students or overwhelm struggling learners.",
      "Vague feedback such as a simple percentage score with zero actionable guidance on what to review next.",
      "Low sustained motivation and lack of clear short-term milestones.",
    ],
    productOpportunity:
      "Leverage an adaptive quiz engine that adjusts item difficulty in real time to locate precise knowledge boundaries within fewer questions, paired with habit-forming motivation loops.",
    productApproach:
      "Designed a product architecture centering on diagnostic efficiency. Mapped the end-to-end student journey from initial calibration quiz to daily micro-practice sessions, incorporating behavioral engagement mechanics (weekly goal milestones, mastery rings, streak tracking).",
    featuresAndUX: [
      "Adaptive quiz engine calibrated using Item Response Theory principles.",
      "Visual Skill-Gap Heatmap identifying weak prerequisite concepts.",
      "AI-generated weekly micro-goals tailored to individual velocity.",
      "Retention loops featuring daily streaks, streak freezes, and XP milestones.",
      "Educator insight summary for quick classroom intervention.",
    ],
    myRoleAndContributions: [
      "Defined product strategy, target user personas, and end-to-end user journey flows.",
      "Designed wireframes and interactive prototype interfaces for student dashboards.",
      "Formulated the feedback loop structure combining adaptive questioning with milestone rewards.",
      "Documented functional requirements and feature prioritization matrices.",
    ],
    challengesAndTradeoffs: [
      "Preventing streak anxiety: designing forgiveness mechanisms (streak freezes) so missed days do not cause total abandonment.",
      "Calibrating quiz brevity against diagnostic precision.",
    ],
    outcomesAndLearnings: [
      "Deepened understanding of how psychological progress indicators drive daily active engagement.",
      "Validated that transparent, actionable feedback motivates far better than raw numerical grades.",
    ],
  },
  {
    id: "gram-vaidya",
    number: "03",
    title: "Gram Vaidya",
    category: "Digital Products | Healthcare | Social Impact",
    tagline: "Offline-First Healthcare Access for Rural Communities",
    summary:
      "A digital healthcare service delivery platform connecting village health posts with remote doctors, built with an offline-first architecture across a verified pilot scope.",
    metrics: [
      { label: "Verified Scope", value: "173 Villages" },
      { label: "Doctor Network", value: "11 Doctors" },
      { label: "Health Posts", value: "23 Posts" },
    ],
    overview:
      "Gram Vaidya is a digital healthcare accessibility platform designed to connect primary health workers in low-connectivity rural villages with consulting physicians and regional supply posts.",
    problemStatement:
      "Rural patients in remote communities face severe geographical and communication barriers to access basic medical consultations. Inconsistent cellular data renders standard telemedicine apps unusable.",
    targetUsers:
      "Rural health clinic workers, primary care volunteers, and village residents needing timely doctor consultations without traveling hours to distant urban hospitals.",
    painPoints: [
      "Unreliable 2G/3G connectivity that drops video and web consultation calls.",
      "Fragmented physical patient record books prone to loss or damage.",
      "Inability of urban physicians to track patient treatment history across visits.",
    ],
    productOpportunity:
      "Build a resilient, asynchronous digital healthcare workflow that functions completely offline and synchronizes patient records automatically whenever intermittent connectivity is detected.",
    productApproach:
      "Researched field constraints across rural community health setups. Designed an offline-first consultation interface emphasizing high-contrast readability, local language support, and asynchronous medical triage. Established structured handoff workflows between health workers, doctors, and pharmacy posts.",
    featuresAndUX: [
      "Local offline data persistence with automatic background queue synchronization.",
      "Structured triage intake forms optimized for rapid single-finger entry on basic tablets.",
      "Asynchronous physician review queue with audio note support for low literacy.",
      "Centralized patient health history card linking 23 rural posts.",
    ],
    myRoleAndContributions: [
      "Mapped user journeys across three distinct user roles: rural health workers, doctors, and village coordinators.",
      "Defined product requirements for offline state management and conflict resolution policies.",
      "Designed accessible, icon-heavy UI layouts suitable for field conditions.",
      "Preserved strict adherence to verified pilot scope: 173 villages, 11 doctors, and 23 posts.",
    ],
    challengesAndTradeoffs: [
      "Balancing clinical record completeness with field data-entry fatigue in high-volume clinics.",
      "Designing conflict-resolution UX when multiple workers update records offline.",
    ],
    outcomesAndLearnings: [
      "Learned to design under extreme environmental constraints (low bandwidth, low battery, varying digital literacy).",
      "Observed how asynchronous workflows often outperform live streaming tools in underserved geographies.",
    ],
  },
  {
    id: "ai-autoinspection",
    number: "04",
    title: "AI AutoInspection",
    category: "AI | Enterprise Products | Industrial Automation",
    tagline: "Deterministic AI Metrology & Operator Efficiency",
    summary:
      "An enterprise computer-vision quality control system engineered to automate dimensional inspection of manufactured parts, achieving a verified 78% inspection-time reduction.",
    metrics: [
      { label: "Inspection Speed", value: "78% Time Saved" },
      { label: "Calibration Model", value: "Deterministic 0.0 Temp" },
      { label: "Operator UX", value: "Real-time PASS/FAIL" },
    ],
    overview:
      "AI AutoInspection is an industrial quality assurance solution combining deterministic computer vision and language model reasoning to automate precision dimensional measurement of manufactured parts.",
    problemStatement:
      "Manual vernier and micrometer inspection in high-mix manufacturing is time-intensive, subject to operator fatigue, and vulnerable to manual transcription errors that trigger costly batch rejections.",
    targetUsers:
      "Plant quality engineers, shop-floor operators, and plant managers requiring reliable ISO-compliant quality audit trails without bottlenecking production lines.",
    painPoints: [
      "Slow, manual measuring routines that cause factory-floor assembly delays.",
      "Human variability in micrometer readings across shift transitions.",
      "Lack of instant digitized audit records for compliance verification.",
    ],
    productOpportunity:
      "Replace tedious manual measurement with an automated vision inspection station that delivers sub-pixel precision and instant PASS/FAIL feedback within seconds.",
    productApproach:
      "Focused on operator ergonomics and enterprise trust. Locked model parameters to deterministic settings (temperature 0.0) to eliminate generative hallucination risks. Designed a clean shop-floor dashboard displaying annotated part boundaries, nominal vs measured tolerances, and clear color-coded compliance status.",
    featuresAndUX: [
      "One-click inspection workflow with instant graphical tolerance overlay.",
      "Deterministic code generation for precise dimensional parsing from technical blueprints.",
      "Instant PASS/FAIL indicators designed for high-glare factory displays.",
      "Automated inspection report generation for quality audits.",
    ],
    myRoleAndContributions: [
      "Defined product requirements and operator persona journeys for the shop floor.",
      "Formulated the deterministic reliability constraint (temperature 0.0) essential for industrial adoption.",
      "Designed the user interface for real-time measurement analytics and comparison tables.",
      "Validated the 78% inspection cycle-time reduction against benchmarked manual methods.",
    ],
    challengesAndTradeoffs: [
      "Addressing factory floor lighting reflections and surface scratches without generating false rejections.",
      "Designing a UI simple enough for operators with minimal computer literacy while providing deep metrology data for quality heads.",
    ],
    outcomesAndLearnings: [
      "Learned that in enterprise AI, reliability and predictability far outweigh creative flexibility.",
      "Realized that operator trust depends entirely on transparent visual proof: showing the highlighted edge contour builds confidence.",
    ],
  },
];

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const edzyStudy = caseStudiesData[0];
  const eduaiStudy = caseStudiesData[1];
  const gramVaidyaStudy = caseStudiesData[2];
  const autoInspectStudy = caseStudiesData[3];

  return (
    <section id="case-studies" className="py-24 px-4 sm:px-6 md:px-8 border-b border-[#E3E6E8] relative">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#E3E6E8] mb-12">
          <div>
            <span className="section-id">03 / CASE STUDIES</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#17191D] mt-2">
              Products, Problems &amp; Ideas.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#666C76] max-w-md sm:text-right">
            Asymmetrical editorial analyses detailing product discovery, user journeys, trade-offs, and verified outcomes.
          </p>
        </div>

        {/* ASYMMETRICAL EDITORIAL PROJECT SYSTEM */}
        <div className="space-y-8">
          {/* PROJECT 1: FEATURED CENTERPIECE: EDZY.AI (Full Width Editorial Hero Card) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="editorial-card rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-8 border-b border-[#E3E6E8]">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 font-mono text-xs text-[#064ACB] mb-3">
                  <span>PROJECT // {edzyStudy.number}</span>
                  <span className="text-[#969BA5]">/</span>
                  <span className="text-[#17191D] font-bold uppercase">{edzyStudy.category}</span>
                </div>

                <div className="flex items-center gap-4 mb-3">
                  <EdzyLogo className="h-7 w-auto text-[#17191D]" />
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F3A953]/15 text-[#975102] border border-[#F3A953]/30 font-mono text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F3A953]" />
                    PRIMARY PM EXPERIENCE
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#17191D] mb-3">
                  {edzyStudy.tagline}
                </h3>

                <p className="text-sm sm:text-base text-[#666C76] leading-relaxed">
                  {edzyStudy.summary}
                </p>
              </div>

              {/* Verified Metrics Ledger */}
              <div className="lg:w-72 shrink-0 p-4 rounded-xl bg-[#F2F3F3] border border-[#E3E6E8] flex flex-col gap-3 font-mono text-xs">
                <span className="text-[10px] text-[#969BA5] uppercase tracking-wider">
                  Verified Project Benchmarks
                </span>
                {edzyStudy.metrics.map((m, i) => (
                  <div key={i} className="pb-2 border-b border-[#E3E6E8] last:border-b-0 last:pb-0">
                    <span className="text-[10px] text-[#666C76] block">{m.label}</span>
                    <span className="font-bold text-[#17191D] text-xs">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <button
                onClick={() => setSelectedStudy(edzyStudy)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#17191D] hover:bg-[#064ACB] text-white text-xs font-mono font-semibold transition-colors cursor-pointer"
              >
                <span>Read Full Case Study</span>
                <ArrowRight size={13} />
              </button>

              <a
                href="https://www.edzy.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#666C76] hover:text-[#17191D] transition-colors"
              >
                <span>Official Website</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>

          {/* PROJECTS 2 & 3: ASYMMETRICAL 2-COLUMN EDITORIAL ROW (EduAI: 7 Cols, Gram Vaidya: 5 Cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* EduAI (7 Cols) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7 editorial-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 font-mono text-xs mb-3">
                  <span className="text-[#064ACB]">PROJECT // {eduaiStudy.number}</span>
                  <span className="text-[#969BA5] uppercase">{eduaiStudy.category}</span>
                </div>

                <h3 className="text-2xl font-bold text-[#17191D] mb-2">
                  {eduaiStudy.title}
                </h3>
                <p className="text-xs font-mono uppercase text-[#064ACB] font-semibold mb-3">
                  {eduaiStudy.tagline}
                </p>
                <p className="text-sm text-[#666C76] leading-relaxed mb-6">
                  {eduaiStudy.summary}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#F2F3F3] border border-[#E3E6E8] mb-6 font-mono text-xs">
                  {eduaiStudy.metrics.map((m, i) => (
                    <div key={i}>
                      <span className="text-[9px] text-[#969BA5] block">{m.label}</span>
                      <span className="font-bold text-[#17191D] text-xs">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedStudy(eduaiStudy)}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#17191D] hover:text-[#064ACB] transition-colors self-start cursor-pointer"
              >
                <span>Read Full Case Study</span>
                <ArrowRight size={13} />
              </button>
            </motion.div>

            {/* Gram Vaidya (5 Cols) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-5 editorial-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 font-mono text-xs mb-3">
                  <span className="text-[#064ACB]">PROJECT // {gramVaidyaStudy.number}</span>
                  <span className="text-[#969BA5] uppercase">Healthcare</span>
                </div>

                <h3 className="text-2xl font-bold text-[#17191D] mb-2">
                  {gramVaidyaStudy.title}
                </h3>
                <p className="text-xs font-mono uppercase text-[#064ACB] font-semibold mb-3">
                  {gramVaidyaStudy.tagline}
                </p>
                <p className="text-sm text-[#666C76] leading-relaxed mb-6">
                  {gramVaidyaStudy.summary}
                </p>

                {/* Verified Scope Grid */}
                <div className="p-3 rounded-xl bg-[#F2F3F3] border border-[#E3E6E8] mb-6 font-mono text-xs space-y-1.5">
                  <span className="text-[10px] text-[#969BA5] uppercase block">
                    Verified Deployment Scope
                  </span>
                  <div className="flex items-center justify-between font-bold text-[#17191D]">
                    <span>173 Villages</span>
                    <span>•</span>
                    <span>11 Doctors</span>
                    <span>•</span>
                    <span>23 Posts</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedStudy(gramVaidyaStudy)}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#17191D] hover:text-[#064ACB] transition-colors self-start cursor-pointer"
              >
                <span>Read Full Case Study</span>
                <ArrowRight size={13} />
              </button>
            </motion.div>
          </div>

          {/* PROJECT 4: AI AUTOINSPECTION (Full Width Precision Metrology Card) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="editorial-card rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 font-mono text-xs text-[#064ACB] mb-2">
                <span>PROJECT // {autoInspectStudy.number}</span>
                <span className="text-[#969BA5]">/</span>
                <span className="text-[#17191D] font-bold uppercase">{autoInspectStudy.category}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#17191D] mb-1">
                {autoInspectStudy.title}: {autoInspectStudy.tagline}
              </h3>
              <p className="text-xs sm:text-sm text-[#666C76] leading-relaxed">
                {autoInspectStudy.summary}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0 font-mono text-xs">
              <div className="px-4 py-2 rounded-xl bg-[#F2F3F3] border border-[#E3E6E8] text-left">
                <span className="text-[10px] text-[#969BA5] block">VERIFIED REDUCTION</span>
                <span className="text-sm font-bold text-[#064ACB]">78% Time Saved</span>
              </div>

              <button
                onClick={() => setSelectedStudy(autoInspectStudy)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#17191D] hover:bg-[#064ACB] text-white text-xs font-mono font-semibold transition-colors cursor-pointer"
              >
                <span>Read Full Case Study</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Case Study Deep-Dive Modal Drawer */}
      <AnimatePresence>
        {selectedStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#17191D]/60 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FFFFFF] border border-[#E2E5E9] rounded-2xl p-6 sm:p-10 shadow-2xl my-auto text-left"
            >
              <button
                onClick={() => setSelectedStudy(null)}
                aria-label="Close modal"
                className="absolute top-5 right-5 p-2 rounded-full bg-[#F2F3F3] text-[#666C76] hover:text-[#17191D] border border-[#E2E5E9] transition-colors cursor-pointer z-10"
              >
                <X size={16} />
              </button>

              {/* Header */}
              <div className="pb-6 border-b border-[#E3E6E8] pr-10">
                <span className="font-mono text-xs text-[#064ACB] font-bold block mb-1">
                  PROJECT {selectedStudy.number} // {selectedStudy.category}
                </span>
                <div className="flex items-center gap-3 mt-1">
                  {selectedStudy.isEdzy ? (
                    <EdzyLogo className="h-7 w-auto text-[#17191D]" />
                  ) : (
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#17191D]">
                      {selectedStudy.title}
                    </h2>
                  )}
                </div>
                <p className="text-sm font-mono text-[#666C76] mt-1">
                  {selectedStudy.tagline}
                </p>
              </div>

              {/* 10-Point Product Breakdown */}
              <div className="py-6 space-y-7 text-sm leading-relaxed text-[#666C76]">
                {/* 1. Overview */}
                <div>
                  <h4 className="font-bold text-sm text-[#17191D] uppercase font-mono mb-1.5 flex items-center gap-2">
                    <span className="text-[#064ACB]">01</span> Product Overview
                  </h4>
                  <p>{selectedStudy.overview}</p>
                </div>

                {/* 2. Problem Statement */}
                <div>
                  <h4 className="font-bold text-sm text-[#17191D] uppercase font-mono mb-1.5 flex items-center gap-2">
                    <span className="text-[#064ACB]">02</span> Problem Statement
                  </h4>
                  <p>{selectedStudy.problemStatement}</p>
                </div>

                {/* 3 & 4. Users & Pain Points */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-xl bg-[#F2F3F3] border border-[#E3E6E8]">
                  <div>
                    <h4 className="font-bold text-xs text-[#17191D] uppercase font-mono mb-1.5">
                      Target Users
                    </h4>
                    <p className="text-xs leading-relaxed">{selectedStudy.targetUsers}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-xs text-[#17191D] uppercase font-mono mb-1.5">
                      Key User Pain Points
                    </h4>
                    <ul className="space-y-1 text-xs">
                      {selectedStudy.painPoints.map((p, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#064ACB] font-mono">•</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 5. Opportunity */}
                <div>
                  <h4 className="font-bold text-sm text-[#17191D] uppercase font-mono mb-1.5 flex items-center gap-2">
                    <span className="text-[#064ACB]">05</span> Product Opportunity
                  </h4>
                  <p>{selectedStudy.productOpportunity}</p>
                </div>

                {/* 6. Approach */}
                <div>
                  <h4 className="font-bold text-sm text-[#17191D] uppercase font-mono mb-1.5 flex items-center gap-2">
                    <span className="text-[#064ACB]">06</span> Product Approach
                  </h4>
                  <p>{selectedStudy.productApproach}</p>
                </div>

                {/* 7. Features and UX */}
                <div>
                  <h4 className="font-bold text-sm text-[#17191D] uppercase font-mono mb-2 flex items-center gap-2">
                    <span className="text-[#064ACB]">07</span> Features &amp; User Experience
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedStudy.featuresAndUX.map((feat, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg bg-[#F2F3F3] border border-[#E3E6E8] text-xs text-[#17191D] flex items-start gap-2"
                      >
                        <span className="text-[#064ACB] font-bold">✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 8. My Role */}
                <div className="p-4 rounded-xl bg-[#EBF1FC] border border-[#064ACB]/20">
                  <h4 className="font-bold text-xs text-[#064ACB] uppercase font-mono mb-2">
                    My Role &amp; Contributions
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#17191D]">
                    {selectedStudy.myRoleAndContributions.map((role, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#064ACB]">•</span>
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 9. Challenges */}
                <div>
                  <h4 className="font-bold text-sm text-[#17191D] uppercase font-mono mb-1.5 flex items-center gap-2">
                    <span className="text-[#064ACB]">09</span> Challenges &amp; Trade-offs
                  </h4>
                  <ul className="space-y-1 text-xs">
                    {selectedStudy.challengesAndTradeoffs.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#969BA5]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 10. Learnings */}
                <div>
                  <h4 className="font-bold text-sm text-[#17191D] uppercase font-mono mb-1.5 flex items-center gap-2">
                    <span className="text-[#064ACB]">10</span> Outcomes &amp; Learnings
                  </h4>
                  <ul className="space-y-1 text-xs">
                    {selectedStudy.outcomesAndLearnings.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#17191D]">
                        <span className="text-[#064ACB] font-bold">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-[#E3E6E8] flex items-center justify-between font-mono text-xs text-[#969BA5]">
                <span>VERIFIED CASE STUDY</span>
                <button
                  onClick={() => setSelectedStudy(null)}
                  className="px-3 py-1.5 rounded-lg border border-[#E2E5E9] hover:border-[#17191D] text-[#17191D] text-xs font-mono transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
