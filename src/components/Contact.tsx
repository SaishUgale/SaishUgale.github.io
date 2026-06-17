"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent to-black/10">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4 tracking-tight">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-blue to-accent-violet rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Contact Details (Left side, cols 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                Let's build <br />
                <span className="text-gradient">something together.</span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-md">
                Whether you have an interesting software project to build, a product role to discuss, or just want to say hi, feel free to reach out. I am always open to discussing new opportunities.
              </p>

              {/* Contact Info Items */}
              <div className="flex flex-col gap-5">
                <a
                  href="mailto:saishugale2005@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-accent-blue/25 hover:bg-white/[0.08] transition-all group"
                >
                  <div className="p-3 rounded-xl bg-accent-blue/10 text-accent-blue group-hover:scale-110 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Email Me</p>
                    <p className="text-sm font-semibold text-foreground break-all">saishugale2005@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+919172948720"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-accent-blue/25 hover:bg-white/[0.08] transition-all group"
                >
                  <div className="p-3 rounded-xl bg-accent-violet/10 text-accent-violet group-hover:scale-110 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Call Me</p>
                    <p className="text-sm font-semibold text-foreground">+91 91729 48720</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="p-3 rounded-xl bg-accent-blue/10 text-accent-blue">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Location</p>
                    <p className="text-sm font-semibold text-foreground">Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons Footer */}
            <div className="flex items-center gap-4 mt-8 lg:mt-0">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/5 text-muted-foreground hover:text-accent-blue hover:border-accent-blue/30 transition-all shadow-md hover:-translate-y-1 cursor-pointer"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/saish-ugale-91b761292"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/5 text-muted-foreground hover:text-accent-blue hover:border-accent-blue/30 transition-all shadow-md hover:-translate-y-1 cursor-pointer"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Message Form (Right side, cols 7) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent shadow-xl h-full flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {formStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <CheckCircle className="text-accent-blue w-16 h-16 mb-4 animate-bounce" />
                    <h4 className="font-display font-bold text-2xl mb-2 text-foreground">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-sm text-muted-foreground max-w-sm">
                      Thank you for reaching out, Saish will get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setFormStatus("idle")}
                      className="mt-6 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-semibold transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 focus:border-accent-blue/50 focus:outline-none text-foreground text-sm transition-all focus:ring-1 focus:ring-accent-blue/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 focus:border-accent-blue/50 focus:outline-none text-foreground text-sm transition-all focus:ring-1 focus:ring-accent-blue/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        placeholder="Hi Saish, I'd love to chat about..."
                        className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 focus:border-accent-blue/50 focus:outline-none text-foreground text-sm transition-all focus:ring-1 focus:ring-accent-blue/50 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-accent-blue to-accent-violet text-white font-semibold shadow-lg hover:shadow-accent-blue/20 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:scale-100 disabled:pointer-events-none transition-all cursor-pointer"
                    >
                      {formStatus === "submitting" ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={15} />
                        </>
                      )}
                    </button>

                    {formStatus === "error" && (
                      <p className="text-xs text-red-500 font-semibold text-center mt-2">
                        ⚠️ Failed to send message. Please check your network or try again.
                      </p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* Footer Brand Credit */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Saish Ugale. All rights reserved.</p>
          <p>
            Built with{" "}
            <span className="text-foreground font-semibold">Next.js</span>,{" "}
            <span className="text-foreground font-semibold">Tailwind CSS</span> &{" "}
            <span className="text-foreground font-semibold">Framer Motion</span>.
          </p>
        </div>

      </div>
    </section>
  );
}
