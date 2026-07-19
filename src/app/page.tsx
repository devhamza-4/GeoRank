"use client";

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AI_QUERIES = [
  "What is the best platform for AI Search Optimization?",
  "How to track brand recommendations in ChatGPT?",
  "Top recommended SaaS tools according to Perplexity...",
  "How to rank #1 in Gemini generative answers?",
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [queryIndex, setQueryIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setQueryIndex((prev) => (prev + 1) % AI_QUERIES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 600);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-blue-500/30 selection:text-blue-300 overflow-x-hidden transform-gpu">
      {/* Optimized Fast Radial Background Gradient (Zero Heavy GPU Blurs) */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.18),rgba(255,255,255,0))]" />

      {/* Header */}
      <header className="relative z-20 w-full border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md sticky top-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/20">
              G
            </div>
            <span className="font-bold text-lg sm:text-xl tracking-tight text-white">
              GEO<span className="text-blue-400">rank</span>
            </span>
          </div>

          <nav className="hidden sm:flex items-center gap-6 md:gap-8 text-xs sm:text-sm text-zinc-400 font-medium">
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#engines" className="hover:text-white transition-colors">
              AI Engines
            </a>
            <a href="#demo" className="hover:text-white transition-colors">
              Live Audit
            </a>
          </nav>

          <a
            href="#waitlist"
            className="text-xs font-semibold px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white shadow-md shadow-blue-600/20 transition-all"
          >
            Join Waitlist
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center w-full">
        {/* Hero Section */}
        <section
          id="waitlist"
          className="w-full max-w-4xl px-4 sm:px-6 pt-12 sm:pt-20 pb-12 sm:pb-16 text-center flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-[11px] sm:text-xs font-semibold tracking-wide uppercase mb-6 sm:mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Generative Engine Optimization (GEO)
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-3xl leading-[1.15]"
          >
            Is your brand visible in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              AI search?
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 sm:mt-6 text-base sm:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed px-2 sm:px-0"
          >
            Track and improve your brand&apos;s visibility in ChatGPT, Perplexity, and Gemini.
          </motion.p>

          {/* Waitlist Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 sm:mt-10 w-full max-w-md px-2 sm:px-0"
          >
            {status === "success" ? (
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium flex items-center justify-center gap-2">
                <span>✨</span> Thank you for joining! You&apos;re on the early access priority list.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 p-1.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 focus-within:border-blue-500/60 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all shadow-xl"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full flex-1 bg-transparent px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-sm font-semibold transition-all shadow-md shadow-blue-600/25 flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50"
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

          {/* Fully Responsive Live AI Search Simulation Box */}
          <motion.div
            id="demo"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 sm:mt-16 w-full max-w-3xl rounded-2xl bg-zinc-900/80 border border-zinc-800 p-4 sm:p-6 text-left shadow-2xl backdrop-blur-md"
          >
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-zinc-800/80 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="ml-1 sm:ml-2 text-[11px] sm:text-xs font-mono text-zinc-400 truncate">
                  GEOrank AI Audit Preview
                </span>
              </div>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 whitespace-nowrap">
                Live Audit
              </span>
            </div>

            {/* Changing Animated Query */}
            <div className="mb-4">
              <p className="text-[10px] sm:text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">
                Simulated AI Search Prompt:
              </p>
              <div className="h-10 sm:h-8 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={queryIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="text-xs sm:text-sm font-mono text-zinc-200 line-clamp-2 sm:line-clamp-1"
                  >
                    &quot;{AI_QUERIES[queryIndex]}&quot;
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Responsive AI Result Breakdown Grid (Stacks on mobile) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-3 border-t border-zinc-800/60">
              <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-1.5">
                  <span className="font-medium text-zinc-300">ChatGPT</span>
                  <span className="text-emerald-400 font-bold text-[11px]">#1 Cited</span>
                </div>
                <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full w-[94%]" />
                </div>
              </div>

              <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-1.5">
                  <span className="font-medium text-zinc-300">Perplexity</span>
                  <span className="text-blue-400 font-bold text-[11px]">Top Source</span>
                </div>
                <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full w-[88%]" />
                </div>
              </div>

              <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-1.5">
                  <span className="font-medium text-zinc-300">Gemini</span>
                  <span className="text-indigo-400 font-bold text-[11px]">Rank 92%</span>
                </div>
                <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-indigo-500 h-full rounded-full w-[92%]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Supported AI Search Engines */}
          <div id="engines" className="mt-16 sm:mt-20 pt-10 border-t border-zinc-900 w-full">
            <p className="text-[11px] sm:text-xs uppercase tracking-widest font-semibold text-zinc-500 mb-6">
              Tracked Across Top AI Search Engines
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              {["ChatGPT", "Perplexity", "Gemini", "Claude", "Copilot"].map(
                (engine) => (
                  <div
                    key={engine}
                    className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-zinc-900/60 border border-zinc-800 text-zinc-300 text-xs font-medium hover:border-zinc-700 transition-colors"
                  >
                    {engine}
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Feature Highlights Section */}
        <section
          id="features"
          className="w-full max-w-5xl px-4 sm:px-6 py-16 sm:py-20 border-t border-zinc-900"
        >
          <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Built for the era of AI Search
            </h2>
            <p className="mt-3 text-xs sm:text-base text-zinc-400">
              Traditional SEO keywords are fading. GEOrank optimizes your presence where users ask questions today.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Feature 1 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xl sm:text-2xl mb-5">
                📊
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                GEO Share of Voice
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Measure how often your brand is recommended when users ask LLMs for solutions in your exact niche.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xl sm:text-2xl mb-5">
                ⚔️
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                Competitor Benchmarking
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Track how competitor brands are mentioned in generative AI search responses vs your company.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col sm:col-span-2 md:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xl sm:text-2xl mb-5">
                💡
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                Optimization Prompts
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Receive actionable recommendations to structure your web content for maximum LLM citations.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full border-t border-zinc-900 py-6 sm:py-8 px-4 sm:px-6 text-center text-xs text-zinc-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} GEOrank Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6 text-zinc-400">
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
