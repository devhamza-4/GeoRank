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
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-blue-500/30 selection:text-blue-300 overflow-x-hidden">
      {/* Background Animated Gradient & Floating Glow Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[30%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-b from-blue-600 via-indigo-600 to-transparent blur-[140px] rounded-full"
        />
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-purple-600/10 blur-[130px] rounded-full"
        />
      </div>

      {/* Header */}
      <header className="relative z-20 w-full border-b border-zinc-800/60 bg-zinc-950/70 backdrop-blur-xl sticky top-0">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/30 ring-1 ring-white/20">
              G
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              GEO<span className="text-blue-400">rank</span>
            </span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-medium">
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#engines" className="hover:text-white transition-colors">
              AI Engines
            </a>
            <a href="#demo" className="hover:text-white transition-colors">
              Live Preview
            </a>
          </nav>

          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#waitlist"
            className="text-xs font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-500/20 transition-all"
          >
            Join Waitlist
          </motion.a>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center">
        {/* Hero Section */}
        <section
          id="waitlist"
          className="w-full max-w-5xl px-6 pt-20 pb-16 text-center flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-8 shadow-inner"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            Generative Engine Optimization (GEO)
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-4xl sm:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1]"
          >
            Is your brand visible in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 animate-pulse">
              AI search?
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 text-lg sm:text-2xl text-zinc-300 max-w-2xl font-light leading-relaxed"
          >
            Track and improve your brand&apos;s visibility in ChatGPT, Perplexity, and Gemini.
          </motion.p>

          {/* Email Capture Form */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 w-full max-w-md"
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-5 rounded-2xl bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/40 text-blue-200 text-sm font-medium flex items-center justify-center gap-3 shadow-xl backdrop-blur-md"
              >
                <span className="text-xl">🎉</span> Thank you for joining! You&apos;re #142 on the early access waitlist.
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl bg-zinc-900/90 border border-zinc-800 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/20 transition-all shadow-2xl backdrop-blur-md"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status === "loading"}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50"
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
                </motion.button>
              </form>
            )}
            <p className="mt-3 text-xs text-zinc-500">
              Free early access. No credit card required.
            </p>
          </motion.div>

          {/* Interactive AI Search Simulation Box */}
          <motion.div
            id="demo"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-16 w-full max-w-3xl rounded-2xl bg-zinc-900/70 border border-zinc-800 p-6 text-left shadow-2xl backdrop-blur-xl relative overflow-hidden group"
          >
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono text-zinc-400">GEOrank Live AI Visibility Audit</span>
              </div>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                Live Simulation
              </span>
            </div>

            {/* Changing Animated Query */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">
                Simulated AI Prompt Query:
              </p>
              <div className="h-8 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={queryIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm sm:text-base font-mono text-zinc-200"
                  >
                    &quot;{AI_QUERIES[queryIndex]}&quot;
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Simulated AI Result Breakdown */}
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-zinc-800/60">
              <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800">
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                  <span>ChatGPT</span>
                  <span className="text-emerald-400 font-bold">#1 Cited</span>
                </div>
                <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "94%" }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="bg-emerald-500 h-full rounded-full"
                  />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800">
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                  <span>Perplexity</span>
                  <span className="text-blue-400 font-bold">Top Source</span>
                </div>
                <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "88%" }}
                    transition={{ duration: 1, delay: 1 }}
                    className="bg-blue-500 h-full rounded-full"
                  />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800">
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                  <span>Gemini</span>
                  <span className="text-indigo-400 font-bold">Rank 92%</span>
                </div>
                <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "92%" }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="bg-indigo-500 h-full rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Supported AI Search Engines */}
          <div id="engines" className="mt-20 pt-12 border-t border-zinc-900 w-full">
            <p className="text-xs uppercase tracking-widest font-semibold text-zinc-500 mb-6">
              Tracked Across Major LLM Engines
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
              {["ChatGPT (OpenAI)", "Perplexity AI", "Google Gemini", "Claude 3.5", "Microsoft Copilot"].map(
                (engine, index) => (
                  <motion.div
                    key={engine}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.08 }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
                    className="px-4 py-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-zinc-300 text-xs sm:text-sm font-medium transition-all shadow-sm"
                  >
                    {engine}
                  </motion.div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Feature Highlights Section */}
        <section
          id="features"
          className="w-full max-w-5xl px-6 py-20 border-t border-zinc-900"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Built for the era of AI Search
            </h2>
            <p className="mt-4 text-base text-zinc-400 font-light">
              Traditional SEO keywords are fading. GEOrank optimizes your presence where users ask questions today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-gradient-to-b from-zinc-900/80 to-zinc-900/40 border border-zinc-800 hover:border-blue-500/40 transition-all flex flex-col shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-2xl mb-6 shadow-inner">
                📊
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                GEO Share of Voice
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">
                Measure how often your brand is recommended when users ask LLMs for solutions in your exact niche.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-gradient-to-b from-zinc-900/80 to-zinc-900/40 border border-zinc-800 hover:border-indigo-500/40 transition-all flex flex-col shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-2xl mb-6 shadow-inner">
                ⚔️
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Competitor Benchmarking
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">
                Track how competitor brands are mentioned in generative AI search responses vs your company.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-gradient-to-b from-zinc-900/80 to-zinc-900/40 border border-zinc-800 hover:border-purple-500/40 transition-all flex flex-col shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-2xl mb-6 shadow-inner">
                💡
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Optimization Prompts
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">
                Receive actionable recommendations to structure your web content for maximum LLM citations.
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
