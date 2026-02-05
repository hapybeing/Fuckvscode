"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This simulates the loading counter
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev === 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Speed: Lower number = Faster load

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 2.2 }} // Wait for counter, then slide up
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
    >
      {/* The Counter */}
      <div className="flex flex-col items-center">
        <div className="text-7xl md:text-9xl font-bold font-mono tracking-tighter">
          {count}%
        </div>
        <div className="mt-4 text-xs font-mono text-white/50 animate-pulse tracking-widest">
          INITIALIZING SYSTEM...
        </div>
      </div>
    </motion.div>
  );
}
