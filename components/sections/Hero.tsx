"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import IntelligenceCore from "@/components/effects/IntelligenceCore";

export default function Hero() {
  return (
    <section className="container-custom relative z-10 flex min-h-screen items-center pt-36 lg:pt-28">
      <div className="grid w-full items-center gap-14 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:py-20">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-200"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
            AI-powered creative studio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-5xl font-medium tracking-[-0.055em] sm:text-6xl lg:text-[4.6rem] xl:text-[5.2rem]"
          >
            Ideas engineered
            <br />
            into{" "}
            <span className="bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              experiences.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mx-auto mt-7 max-w-xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg lg:mx-0"
          >
            I create AI-powered websites, animated interfaces and intelligent
            digital products that turn ambitious ideas into unforgettable
            experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <a
              href="#contact"
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-cyan-300 px-7 py-4 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(0,217,255,0.25)] sm:w-auto"
            >
              <span className="absolute inset-0 translate-y-full bg-white/30 transition-transform duration-300 group-hover:translate-y-0" />
              <span className="relative">Build with me</span>
              <ArrowRight
                size={17}
                className="relative transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </a>

            <a
              href="#concepts"
              className="group glass flex w-full items-center justify-center gap-3 rounded-2xl px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.08] sm:w-auto"
            >
              View concepts
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs uppercase tracking-[0.18em] text-white/35 lg:justify-start"
          >
            <span>Prompt engineering</span>
            <span className="hidden h-1 w-1 rounded-full bg-cyan-300/60 sm:block" />
            <span>Vibe coding</span>
            <span className="hidden h-1 w-1 rounded-full bg-cyan-300/60 sm:block" />
            <span>UI design</span>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative flex items-center justify-center lg:-translate-y-4"
        >
          <IntelligenceCore />
        </motion.div>
      </div>
    </section>
  );
}