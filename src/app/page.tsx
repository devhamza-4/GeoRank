"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-blue-500/30 selection:text-blue-300">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[40%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-600/15 via-indigo-500/10 to-transparent blur-[120px] rounded-full" />
      </div>

      {/* Header */}
      <header className="relative z-10 w-full border-b border-zinc-800/80 bg-zinc-950/60 backdrop-blur-md sticky top-0">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">
              G
            </div>
            <span className="font-bold text-lg tracking-tight text-white">
              GEO<span className="text-blue-400">rank</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-medium">
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#engines" className="hover:text-white transition-colors">
              AI Engines
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              Why GEO?
            </a>
          </nav>

          <a
            href="#waitlist"
            className="text-xs font-semibold px-4 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700/60 transition-all"
          >
            Early Access
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center">
        {/* Hero Section */}
        <section
          id="waitlist"
          className="w-full max-w-4xl px-6 pt-24 pb-20 text-center flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Generative Engine Optimization (GEO)
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-3xl leading-[1.15]"
          >
            Is your brand visible in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              AI search?
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed"
          >
            Track and improve your brand&apos;s visibility in ChatGPT, Perplexity, and Gemini.
          </motion.p>

          {/* Waitlist Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 w-full max-w-md"
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium flex items-center justify-center gap-2"
              >
                <span>✨</span> Thank you for joining! You&apos;re on the early access priority list.
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 p-1.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 focus-within:border-blue-500/60 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all shadow-xl"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-sm font-semibold transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50"
                >
                  {status === "loading" ? "Joining..." : "Join Waitlist"}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </form>
            )}
            <p className="mt-3 text-xs text-zinc-500">
              Free early access. No credit card required.
            </p>
          </motion.div>

          {/* Supported AI Search Engines */}
          <motion.div
            id="engines"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
            className="mt-20 pt-12 border-t border-zinc-900 w-full"
          >
            <p className="text-xs uppercase tracking-widest font-semibold text-zinc-500 mb-6">
              Supported AI Search Platforms
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
              {["ChatGPT", "Perplexity", "Gemini", "Claude", "Microsoft Copilot"].map(
                (engine, index) => (
                  <motion.div
                    key={engine}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.7 + index * 0.08,
                      ease: "easeOut",
                    }}
                    className="px-4 py-2 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-zinc-300 text-xs sm:text-sm font-medium hover:border-zinc-700 transition-colors"
                  >
                    {engine}
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </section>

        {/* Feature Highlights Section */}
        <section
          id="features"
          className="w-full max-w-5xl px-6 py-16 border-t border-zinc-900"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-xl mx-auto mb-14"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Built for the era of AI Search
            </h2>
            <p className="mt-3 text-sm text-zinc-400">
              Traditional SEO is no longer enough. GEOrank gives you full visibility into AI recommendations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-all flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-lg mb-5">
                📊
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                GEO Share of Voice
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Measure how often your brand is cited when users ask LLMs for products or solutions in your industry.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-all flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg mb-5">
                ⚔️
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Competitor Benchmarking
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Compare your AI search presence against competitors across ChatGPT, Perplexity, and Gemini.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-all flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-lg mb-5">
                💡
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Optimization Insights
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Receive actionable recommendations to format your content so LLM crawlers index and recommend your brand.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full border-t border-zinc-900 py-8 px-6 text-center text-xs text-zinc-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} GEOrank Inc. All rights reserved.</p>
          <div className="flex items-center gap-6 text-zinc-400">
            <a href="#waitlist" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#waitlist" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#waitlist" className="hover:text-white transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
