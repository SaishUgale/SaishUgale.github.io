"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Copy,
  ExternalLink,
  Download,
} from "lucide-react";
import { Linkedin } from "@/components/Icons";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("saishugale2005@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill out all required fields.");
      setFormStatus("error");
      return;
    }

    setFormStatus("submitting");
    setErrorMessage("");

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE";
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Product Opportunity / Message from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const mailtoUrl = `mailto:saishugale2005@gmail.com?subject=${encodeURIComponent(
          `Product Collaboration from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;
        setFormStatus("success");
      }
    } catch {
      const mailtoUrl = `mailto:saishugale2005@gmail.com?subject=${encodeURIComponent(
        `Product Collaboration from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setFormStatus("success");
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 md:px-8 relative bg-[#F2F3F3]">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#E3E6E8] mb-12">
          <div>
            <span className="section-id">08 / CONTACT</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#17191D] mt-2">
              Let&apos;s Build Something Meaningful.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#666C76] max-w-md sm:text-right">
            I&apos;m always interested in discussing product ideas, AI-powered experiences, EdTech innovation, rapid prototyping, and opportunities to contribute to ambitious product teams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#969BA5] mb-1">
              Direct Contact Channels
            </div>

            {/* Email Box with One-Click Copy */}
            <div className="editorial-card p-4 rounded-xl flex items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 rounded-lg bg-[#EBF1FC] text-[#064ACB] shrink-0">
                  <Mail size={16} />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase text-[#969BA5] block">
                    EMAIL
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#17191D] truncate block font-mono">
                    saishugale2005@gmail.com
                  </span>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-[#E2E5E9] hover:border-[#17191D] text-[#17191D] text-xs font-mono transition-colors cursor-pointer shrink-0"
              >
                {copiedEmail ? <CheckCircle size={13} className="text-emerald-500" /> : <Copy size={13} />}
                <span>{copiedEmail ? "COPIED" : "COPY"}</span>
              </button>
            </div>

            {/* Phone */}
            <a
              href="tel:+919172948720"
              className="editorial-card p-4 rounded-xl flex items-center gap-3 shadow-xs hover:border-[#064ACB] transition-colors"
            >
              <div className="p-2 rounded-lg bg-[#F2F3F3] border border-[#E3E6E8] text-[#17191D] shrink-0">
                <Phone size={16} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-[#969BA5] block">
                  PHONE
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#17191D] font-mono">
                  +91 91729 48720
                </span>
              </div>
            </a>

            {/* Location */}
            <div className="editorial-card p-4 rounded-xl flex items-center gap-3 shadow-xs">
              <div className="p-2 rounded-lg bg-[#F2F3F3] border border-[#E3E6E8] text-[#666C76] shrink-0">
                <MapPin size={16} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-[#969BA5] block">
                  LOCATION
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#17191D]">
                  Pune, Maharashtra, India
                </span>
              </div>
            </div>

            {/* Social & Resume Links */}
            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <a
                href="https://linkedin.com/in/saishugale"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#17191D] hover:bg-[#064ACB] text-white text-xs font-mono font-medium transition-colors"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
                <ExternalLink size={11} />
              </a>

              <a
                href="/resume.pdf"
                download="Saish_Ugale_Resume.pdf"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#E2E5E9] hover:border-[#17191D] text-[#17191D] text-xs font-mono font-medium transition-colors"
              >
                <Download size={14} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="editorial-card rounded-2xl p-6 sm:p-8 shadow-xs">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#969BA5] block mb-1">
                Direct Dispatch
              </span>
              <h3 className="text-xl font-bold text-[#17191D] mb-4">
                Send a Message
              </h3>

              {formStatus === "success" ? (
                <div className="p-6 rounded-xl bg-[#EBF1FC] border border-[#064ACB]/20 text-center space-y-2">
                  <CheckCircle size={28} className="text-[#064ACB] mx-auto" />
                  <h4 className="font-bold text-sm text-[#17191D]">
                    Message Dispatched Successfully
                  </h4>
                  <p className="text-xs text-[#666C76]">
                    Thank you for reaching out. I will review your note and respond promptly.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="mt-2 px-3 py-1.5 rounded-lg bg-[#064ACB] text-white text-xs font-mono font-semibold cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-600 font-mono">
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#666C76] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Chen"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F2F3F3] border border-[#E2E5E9] text-[#17191D] text-xs placeholder:text-[#969BA5] focus:outline-none focus:border-[#064ACB] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#666C76] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F2F3F3] border border-[#E2E5E9] text-[#17191D] text-xs placeholder:text-[#969BA5] focus:outline-none focus:border-[#064ACB] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#666C76] mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Discuss a product role, an AI prototype concept, or collaboration..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F2F3F3] border border-[#E2E5E9] text-[#17191D] text-xs placeholder:text-[#969BA5] focus:outline-none focus:border-[#064ACB] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#064ACB] hover:bg-[#053ba3] text-white text-xs font-mono font-semibold transition-colors cursor-pointer"
                  >
                    <span>{formStatus === "submitting" ? "DISPATCHING..." : "DISPATCH MESSAGE"}</span>
                    <Send size={13} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Studio Architectural Footer */}
        <div className="mt-20 pt-8 border-t border-[#E3E6E8] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#969BA5]">
          <div>
            <span className="font-bold text-[#17191D]">SAISH UGALE®</span>
            <span className="mx-2">•</span>
            <span>PRODUCT MANAGEMENT / AI PROTOTYPING</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://saishugale.me/" className="hover:text-[#17191D] transition-colors">
              saishugale.me
            </a>
            <span>•</span>
            <a
              href="https://linkedin.com/in/saishugale"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#17191D] transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a href="mailto:saishugale2005@gmail.com" className="hover:text-[#17191D] transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
