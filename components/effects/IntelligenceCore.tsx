"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { MouseEvent } from "react";

export default function IntelligenceCore() {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 80,
    damping: 18,
  });

  const smoothRotateY = useSpring(rotateY, {
    stiffness: 80,
    damping: 18,
  });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    rotateY.set((x / rect.width - 0.5) * 18);
    rotateX.set((y / rect.height - 0.5) * -18);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, scale: 0.82 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex aspect-square w-full max-w-[430px] items-center justify-center"
    >
      <div className="absolute h-[88%] w-[88%] rounded-full bg-cyan-400/10 blur-[70px]" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[82%] w-[82%] rounded-full border border-cyan-300/20"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[67%] w-[67%] rounded-full border border-dashed border-cyan-300/25"
      />

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[52%] w-[52%] rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-2xl"
      />

      <div className="absolute h-[40%] w-[40%] rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.95),rgba(0,217,255,0.7)_15%,rgba(0,84,120,0.45)_42%,rgba(0,0,0,0.2)_75%)] shadow-[0_0_90px_rgba(0,217,255,0.45)]" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[57%] w-[18%] rounded-[50%] border border-cyan-200/30"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[18%] w-[57%] rounded-[50%] border border-blue-300/25"
      />

      <div className="absolute h-3 w-3 rounded-full bg-white shadow-[0_0_24px_rgba(255,255,255,0.9)]" />

      <div className="absolute bottom-[8%] left-1/2 h-8 w-[70%] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-2xl" />
    </motion.div>
  );
}