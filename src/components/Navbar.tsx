"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "WORK", href: "#work" },
  { name: "ABOUT", href: "#about" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1 }}
      className="fixed top-6 inset-x-0 mx-auto z-50 w-max"
    >
      <div className="flex items-center gap-2 rounded-full border border-white-5 bg-cinema-black/50 p-2 backdrop-blur-md px-4 shadow-2xl shadow-purple-900/20">
        {navLinks.map((link, index) => (
          <Link
            key={link.name}
            href={link.href}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className="relative px-4 py-2 text-xs font-mono tracking-widest text-white/70 transition-colors hover:text-white"
          >
            {/* The "Glow" Effect that follows your mouse */}
            {hovered === index && (
              <motion.span
                layoutId="nav-hover"
                className="absolute inset-0 -z-10 rounded-full bg-white/10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {link.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
