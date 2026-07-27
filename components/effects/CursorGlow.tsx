"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);

  const smoothX = useSpring(x, {
    stiffness: 120,
    damping: 24,
    mass: 0.6,
  });

  const smoothY = useSpring(y, {
    stiffness: 120,
    damping: 24,
    mass: 0.6,
  });

  useEffect(() => {
    function handlePointerMove(event: PointerEvent) {
      x.set(event.clientX - 180);
      y.set(event.clientY - 180);
    }

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className="pointer-events-none fixed left-0 top-0 z-20 hidden h-[360px] w-[360px] rounded-full bg-cyan-300/[0.06] blur-[100px] lg:block"
    />
  );
}