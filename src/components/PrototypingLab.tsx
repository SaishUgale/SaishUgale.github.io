"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Pencil,
  Square,
  Circle,
  StickyNote,
  Type,
  Users,
  Layers,
  Sparkles,
  MousePointer2,
  Check,
} from "lucide-react";
import { Github } from "@/components/Icons";

type PrototypeCategory = "all" | "collaborative" | "experiences" | "rapid" | "creative";

export default function PrototypingLab() {
  const [selectedCategory, setSelectedCategory] = useState<PrototypeCategory>("all");
  const [activeCanvasTool, setActiveCanvasTool] = useState<"pencil" | "rectangle" | "note" | "text">("note");
  const [activeColor, setActiveColor] = useState<string>("#064ACB");

  const prototypes = [
    {
      id: "flowstate",
      category: "collaborative",
      typeBadge: "Functional Product Prototype",
      title: "FlowState: Collaborative Realtime Board",
      tagline: "Real-time canvas productivity & multi-user visual collaboration",
      problemOrIdea:
        "Remote teams and product creators need a fluid, frictionless infinite canvas to brainstorm, sketch workflows, and organize ideas collaboratively in real time without lag.",
      whatToCreate:
        "A feature-rich, real-time collaborative whiteboard enabling users to sketch freely, structure shapes, manage layer hierarchy, and collaborate simultaneously with live cursors.",
      toolsUsed: [
        "Next.js 14",
        "Convex",
        "Clerk",
        "Liveblocks",
        "Tailwind CSS",
        "shadcn/ui",
        "Zustand",
        "Radix UI",
      ],
      features: [
        "Whiteboard from Scratch: Draw freely using a pencil tool or create elements using pre-built shapes.",
        "Interactive Toolbar: Add text, rectangles, ellipses, sticky notes, and freehand drawings.",
        "Layer Management: Organize, rearrange, and manage element stacking on the canvas.",
        "Coloring System: Customize fill and stroke colors for shapes, sticky notes, and drawings.",
        "Undo & Redo & Keyboard Shortcuts: Fluid productivity with quick keyboard-based canvas interactions.",
        "Real-Time Collaboration: Multiple users work on the same board simultaneously with synchronized presence.",
        "Real-Time Database: Automatically save and synchronize state via Convex.",
        "Authentication & Organizations: User authentication, organization collaboration, and invitations through Clerk.",
        "Favorites & Theme Support: Quick access board favorites and dark/light mode toggle.",
        "Responsive Interface: Clean layout built with Next.js, Tailwind CSS, and shadcn/ui.",
      ],
      productFocus: [
        "Collaborative Productivity",
        "Real-Time Interaction",
        "Canvas-Based User Experience",
        "Multi-User Workflows",
        "Layer & Element Management",
        "Organization-Based Access",
      ],
      liveUrl: "https://flowstate11.netlify.app/",
      githubUrl: "https://github.com/SaishUgale/FlowState11",
      isFlowState: true,
    },
    {
      id: "concept-explainer",
      category: "experiences",
      typeBadge: "Working Experiment",
      title: "Conversational Concept Decomposition Widget",
      tagline: "Scaffolded learning steps over monolithic AI answers",
      problemOrIdea:
        "Standard AI chat dumps long walls of text that overwhelm students trying to solve multi-step problems.",
      whatToCreate:
        "A chunked conversational interface where complex explanations are broken into collapsible, checkable cards with micro-quizzes.",
      toolsUsed: ["Cursor", "Google Gemini API", "React", "Tailwind CSS"],
      learned:
        "Cognitive load decreases significantly when students must click to reveal each progressive clue instead of receiving the full solution upfront.",
      demoVisual: {
        type: "cards",
        steps: [
          { num: "Step 1", title: "Identify Variables", status: "Completed" },
          { num: "Step 2", title: "Apply Formula", status: "Active" },
          { num: "Step 3", title: "Verify Units", status: "Pending" },
        ],
      },
    },
    {
      id: "tolerance-hud",
      category: "rapid",
      typeBadge: "Functional Prototype",
      title: "Industrial Tolerance Metrology HUD",
      tagline: "Deterministic computer vision measurement interface",
      problemOrIdea:
        "Factory-floor inspectors needed unambiguous visual verification that computer-vision measurements conformed to blueprint bounds.",
      whatToCreate:
        "A high-contrast operator interface rendering edge contours, nominal tolerances, and real-time PASS/FAIL status in milliseconds.",
      toolsUsed: ["Python", "Streamlit", "OpenCV", "Groq API"],
      learned:
        "In industrial tools, operator trust requires total visual transparency: highlighting exact measured contours builds instant confidence.",
      demoVisual: {
        type: "metrology",
        nominal: "24.50 mm",
        measured: "24.51 mm",
        status: "PASS (Within ±0.05 mm)",
      },
    },
    {
      id: "storyboard-generator",
      category: "creative",
      typeBadge: "Concept Exploration",
      title: "AI-Assisted Educational Storyboard Workflow",
      tagline: "Visual narrative structuring from raw text",
      problemOrIdea:
        "Creating explanatory video shorts for complex scientific topics required days of illustration and scripting.",
      whatToCreate:
        "A streamlined workflow turning raw curriculum textbook paragraphs into four-panel illustrated explanatory storyboards.",
      toolsUsed: ["Midjourney", "Claude", "Figma", "Google Docs"],
      learned:
        "Visual metaphors (e.g. comparing network packets to post office mail sorters) increase recall far better than technical diagrams alone.",
      demoVisual: {
        type: "storyboard",
        panels: ["1. The Dilemma", "2. The Mechanism", "3. Real-world Effect", "4. Summary Takeaway"],
      },
    },
  ];

  const filteredPrototypes = prototypes.filter((p) => {
    if (selectedCategory === "all") return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="prototypes" className="py-24 px-4 sm:px-6 md:px-8 border-b border-[#E3E6E8] relative">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#E3E6E8] mb-10">
          <div>
            <span className="section-id">04 / PROTOTYPING LAB</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#17191D] mt-2">
              From Prompts to Prototypes.
            </h2>
            <p className="text-sm font-mono text-[#064ACB] font-semibold mt-1">
              A playground for product ideas, AI experiments, and things I build to learn.
            </p>
          </div>
          <p className="text-xs sm:text-sm text-[#666C76] max-w-md sm:text-right">
            I use rapid experimentation with modern tools to make product ideas tangible, test interactions, and learn faster.
          </p>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 font-mono text-xs">
          {[
            { id: "all", label: "ALL EXPERIMENTS" },
            { id: "collaborative", label: "COLLABORATIVE & REALTIME" },
            { id: "experiences", label: "AI PRODUCT EXPERIENCES" },
            { id: "rapid", label: "RAPID PROTOTYPING" },
            { id: "creative", label: "CREATIVE WORKFLOWS" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as PrototypeCategory)}
              className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#17191D] border-[#17191D] text-white font-bold"
                  : "bg-[#FFFFFF] border-[#E2E5E9] text-[#666C76] hover:text-[#17191D] hover:border-[#CBD5E1]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Experiments Grid */}
        <div className="space-y-8">
          {filteredPrototypes.map((proto) => {
            if (proto.isFlowState) {
              /* FLOWSTATE FEATURED PRODUCT PROTOTYPE CARD */
              return (
                <motion.div
                  key={proto.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="editorial-card rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-8 border-b border-[#E3E6E8]">
                    <div className="max-w-2xl">
                      <div className="flex flex-wrap items-center gap-3 font-mono text-xs mb-3">
                        <span className="px-2.5 py-0.5 rounded bg-[#EBF1FC] text-[#064ACB] font-bold">
                          {proto.typeBadge}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#F3A953]/15 text-[#975102] border border-[#F3A953]/30 font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F3A953]" />
                          Realtime Canvas
                        </span>
                        <span className="text-[#969BA5] uppercase hidden sm:inline">
                          CAT // COLLABORATIVE CANVAS
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-[#17191D] mb-1">
                        {proto.title}
                      </h3>
                      <p className="text-xs font-mono uppercase tracking-wider text-[#064ACB] font-semibold mb-4">
                        {proto.tagline}
                      </p>

                      <p className="text-sm sm:text-base text-[#666C76] leading-relaxed mb-6">
                        {proto.problemOrIdea}
                      </p>

                      {/* Product Focus Pillars */}
                      <div className="space-y-2 mb-6">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#969BA5] block">
                          Product Experience Dimensions
                        </span>
                        <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                          {proto.productFocus?.map((pillar, pIdx) => (
                            <span
                              key={pIdx}
                              className="px-2.5 py-1 rounded-md bg-[#F2F3F3] border border-[#E3E6E8] text-[#17191D] font-medium"
                            >
                              {pillar}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Interactive Realtime Board Visualizer */}
                    <div className="lg:w-96 shrink-0 p-4 rounded-xl bg-[#F2F3F3] border border-[#E3E6E8] flex flex-col gap-3">
                      <div className="flex items-center justify-between font-mono text-xs">
                        <span className="font-bold text-[#17191D] flex items-center gap-1.5">
                          <Users size={13} className="text-[#064ACB]" />
                          <span>Live Multi-User Canvas</span>
                        </span>
                        <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                          ● 2 Active
                        </span>
                      </div>

                      {/* Simulated Board View */}
                      <div className="relative h-48 rounded-lg bg-[#FFFFFF] border border-[#E2E5E9] p-3 overflow-hidden select-none">
                        {/* Interactive Board Toolbar */}
                        <div className="absolute top-2 left-2 flex items-center gap-1 p-1 rounded-md bg-[#F2F3F3] border border-[#E2E5E9] shadow-2xs z-20">
                          <button
                            onClick={() => setActiveCanvasTool("pencil")}
                            className={`p-1 rounded ${activeCanvasTool === "pencil" ? "bg-[#EBF1FC] text-[#064ACB]" : "text-[#666C76]"}`}
                            title="Pencil"
                          >
                            <Pencil size={12} />
                          </button>
                          <button
                            onClick={() => setActiveCanvasTool("rectangle")}
                            className={`p-1 rounded ${activeCanvasTool === "rectangle" ? "bg-[#EBF1FC] text-[#064ACB]" : "text-[#666C76]"}`}
                            title="Rectangle"
                          >
                            <Square size={12} />
                          </button>
                          <button
                            onClick={() => setActiveCanvasTool("note")}
                            className={`p-1 rounded ${activeCanvasTool === "note" ? "bg-[#EBF1FC] text-[#064ACB]" : "text-[#666C76]"}`}
                            title="Sticky Note"
                          >
                            <StickyNote size={12} />
                          </button>
                          <button
                            onClick={() => setActiveCanvasTool("text")}
                            className={`p-1 rounded ${activeCanvasTool === "text" ? "bg-[#EBF1FC] text-[#064ACB]" : "text-[#666C76]"}`}
                            title="Text"
                          >
                            <Type size={12} />
                          </button>
                        </div>

                        {/* Interactive Color Swatches */}
                        <div className="absolute top-2 right-2 flex items-center gap-1 z-20">
                          {["#064ACB", "#366ED8", "#F3A953", "#10B981"].map((c) => (
                            <button
                              key={c}
                              onClick={() => setActiveColor(c)}
                              className="w-3 h-3 rounded-full border border-white shadow-2xs transition-transform"
                              style={{
                                backgroundColor: c,
                                transform: activeColor === c ? "scale(1.3)" : "scale(1)",
                              }}
                            />
                          ))}
                        </div>

                        {/* Sticky Note Element on Canvas */}
                        <div
                          className="absolute top-12 left-6 p-2 rounded-md shadow-xs text-[10px] font-sans font-medium w-36 transition-colors"
                          style={{
                            backgroundColor:
                              activeColor === "#064ACB"
                                ? "#EBF1FC"
                                : activeColor === "#F3A953"
                                ? "#F3A95325"
                                : activeColor + "20",
                            borderLeft: `3px solid ${activeColor}`,
                          }}
                        >
                          <span className="font-bold block text-[#17191D]">User Journey Sprint</span>
                          <span className="text-[#666C76] text-[9px] block">Define onboarding steps &amp; invite link flow</span>
                        </div>

                        {/* Shape Element */}
                        <div className="absolute bottom-6 left-16 w-20 h-10 rounded border border-dashed border-[#064ACB] bg-[#EBF1FC]/40 flex items-center justify-center text-[9px] font-mono text-[#064ACB]">
                          Card Component
                        </div>

                        {/* Simulated Live Cursor 1: Saish */}
                        <div className="absolute top-20 right-14 flex items-center gap-1 z-10 pointer-events-none">
                          <MousePointer2 size={13} className="text-[#064ACB] fill-[#064ACB]" />
                          <span className="px-1.5 py-0.5 rounded bg-[#064ACB] text-white text-[8px] font-mono font-bold">
                            Saish
                          </span>
                        </div>

                        {/* Simulated Live Cursor 2: Product Lead */}
                        <div className="absolute bottom-10 right-6 flex items-center gap-1 z-10 pointer-events-none">
                          <MousePointer2 size={13} className="text-[#10B981] fill-[#10B981]" />
                          <span className="px-1.5 py-0.5 rounded bg-[#10B981] text-white text-[8px] font-mono font-bold">
                            Reviewer
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[10px] font-mono text-[#969BA5]">
                        <span>Realtime sync via Liveblocks &amp; Convex</span>
                        <span>Layer hierarchy active</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Features Grid */}
                  <div className="py-6 border-b border-[#E3E6E8]">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#969BA5] block mb-3">
                      Core Functional Capabilities
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {proto.features?.map((f, fIdx) => (
                        <div
                          key={fIdx}
                          className="p-3 rounded-xl bg-[#F2F3F3] border border-[#E3E6E8] flex items-start gap-2.5 text-xs text-[#17191D]"
                        >
                          <Check size={14} className="text-[#064ACB] shrink-0 mt-0.5" />
                          <span className="leading-snug">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Tech Stack Footer */}
                  <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {/* Primary CTA: Live Demo */}
                      <a
                        href={proto.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#064ACB] hover:bg-[#053ba3] text-white text-xs font-mono font-semibold transition-colors cursor-pointer group"
                      >
                        <span>Open Live Demo</span>
                        <ExternalLink size={13} />
                      </a>

                      {/* Secondary Link: GitHub */}
                      <a
                        href={proto.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#E2E5E9] hover:border-[#17191D] text-[#17191D] text-xs font-mono font-semibold transition-colors"
                      >
                        <Github size={13} />
                        <span>GitHub Repository</span>
                      </a>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
                      <span className="text-[#969BA5] text-[10px] mr-1 uppercase">STACK:</span>
                      {proto.toolsUsed.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-[#F2F3F3] border border-[#E3E6E8] text-[11px] text-[#17191D]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            }

            /* STANDARD EXPERIMENT CARDS */
            return (
              <motion.div
                key={proto.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="editorial-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3 font-mono text-xs">
                    <span className="px-2 py-0.5 rounded bg-[#F2F3F3] border border-[#E3E6E8] text-[#064ACB] font-semibold">
                      {proto.typeBadge}
                    </span>
                    <span className="text-[#969BA5] uppercase">
                      CAT // {proto.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#17191D] mb-1">
                    {proto.title}
                  </h3>
                  <p className="text-xs font-mono uppercase text-[#064ACB] font-semibold mb-3">
                    {proto.tagline}
                  </p>

                  <div className="space-y-2 mb-6 text-xs sm:text-sm text-[#666C76]">
                    <div>
                      <span className="font-bold text-[#17191D] font-mono text-xs">IDEA: </span>
                      <span>{proto.problemOrIdea}</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#17191D] font-mono text-xs">OUTPUT: </span>
                      <span>{proto.whatToCreate}</span>
                    </div>
                  </div>

                  {/* DEMO: CONCEPT EXPLAINER */}
                  {proto.demoVisual?.type === "cards" && (
                    <div className="p-4 rounded-xl bg-[#F2F3F3] border border-[#E3E6E8] mb-6 space-y-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#969BA5] block mb-2">
                        Structured Progressive Disclosure
                      </span>
                      {proto.demoVisual.steps?.map((s, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-2 rounded-lg bg-[#FFFFFF] border border-[#E2E5E9] text-xs font-mono"
                        >
                          <span className="font-bold text-[#17191D]">{s.num}: {s.title}</span>
                          <span className="text-[10px] text-[#064ACB] font-bold">{s.status}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* DEMO: METROLOGY HUD */}
                  {proto.demoVisual?.type === "metrology" && (
                    <div className="p-4 rounded-xl bg-[#F2F3F3] border border-[#E3E6E8] mb-6 font-mono text-xs">
                      <span className="text-[10px] uppercase tracking-widest text-[#969BA5] block mb-2">
                        Deterministic Metrology Reading
                      </span>
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <div className="p-2 rounded-lg bg-[#FFFFFF] border border-[#E2E5E9]">
                          <span className="text-[9px] text-[#969BA5] block">NOMINAL</span>
                          <span className="font-bold text-[#17191D]">{proto.demoVisual.nominal}</span>
                        </div>
                        <div className="p-2 rounded-lg bg-[#FFFFFF] border border-[#E2E5E9]">
                          <span className="text-[9px] text-[#969BA5] block">MEASURED</span>
                          <span className="font-bold text-[#17191D]">{proto.demoVisual.measured}</span>
                        </div>
                      </div>
                      <div className="p-1.5 rounded-lg bg-[#EBF1FC] text-[#064ACB] font-bold text-center text-xs">
                        {proto.demoVisual.status}
                      </div>
                    </div>
                  )}

                  {/* DEMO: STORYBOARD */}
                  {proto.demoVisual?.type === "storyboard" && (
                    <div className="p-4 rounded-xl bg-[#F2F3F3] border border-[#E3E6E8] mb-6 font-mono text-xs">
                      <span className="text-[10px] uppercase tracking-widest text-[#969BA5] block mb-2">
                        Visual Metaphor Panels
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-center">
                        {proto.demoVisual.panels?.map((p, i) => (
                          <div
                            key={i}
                            className="p-2 rounded-lg bg-[#FFFFFF] border border-[#E2E5E9] text-[10px] text-[#17191D]"
                          >
                            {p}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Learning */}
                  <div className="p-3.5 rounded-xl bg-[#F2F3F3] border border-[#E3E6E8] text-xs text-[#666C76] mb-4">
                    <span className="font-mono font-bold text-[#17191D] text-[10px] uppercase block mb-0.5">
                      KEY INSIGHT
                    </span>
                    <p>{proto.learned}</p>
                  </div>
                </div>

                {/* Tools Footer */}
                <div className="pt-3 border-t border-[#E3E6E8] flex flex-wrap items-center gap-1 font-mono text-[11px]">
                  <span className="text-[#969BA5] mr-1">TOOLS:</span>
                  {proto.toolsUsed.map((tool, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-[#F2F3F3] border border-[#E3E6E8] text-[#17191D]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
