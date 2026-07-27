"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Menu } from "lucide-react";

const navItems = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Concepts", href: "#concepts" },
  { label: "AI Twin", href: "#ai-twin" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-5 z-50"
    >
      <nav className="container-custom flex h-16 items-center justify-between rounded-2xl border border-white/[0.08] bg-[#08090c]/75 px-5 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
        <a
          href="#"
          className="font-[var(--font-space)] text-sm font-medium tracking-[0.28em]"
        >
          NOVAUX°
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-[var(--text-secondary)] transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-300 px-4 py-2 text-sm font-medium text-black transition-transform hover:-translate-y-0.5 md:flex"
        >
          Build with me
          <ArrowUpRight size={15} />
        </a>

        <button
          type="button"
          aria-label="Open navigation"
          className="rounded-lg border border-white/10 p-2 text-white md:hidden"
        >
          <Menu size={20} />
        </button>
      </nav>
    </motion.header>
  );
}