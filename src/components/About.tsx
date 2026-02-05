"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Zap } from "lucide-react";

const stats = [
  { label: "Experience", value: "3+ YRS" },
  { label: "Projects", value: "20+" },
  { label: "Commitment", value: "100%" },
  { label: "Location", value: "KOTA, RJ" },
];

export default function About() {
  return (
    <section id="about" className="relative z-20 w-full bg-cinema-black py-32">
      <div className="container mx-auto px-6">
        
        <div className="mb-24 border-l-2 border-white-10 pl-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold tracking-tighter text-white md:text-8xl"
          >
            OPERATOR<br />
            PROFILE
          </motion.h2>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2">
          
          {/* CARD 1: BIO (Span 2 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 row-span-1 flex flex-col justify-between rounded-xl border border-white-5 bg-white-5 p-8 backdrop-blur-sm transition-colors hover:border-purple-500/30 md:col-span-2"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Zap className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">The Mission</h3>
            </div>
            <p className="text-lg leading-relaxed text-white/70">
              I don't just write code; I engineer <span className="text-white font-bold">digital emotions</span>. 
              My work bridges the gap between high-performance engineering and cinematic storytelling. 
              Currently obsessed with the intersection of WebGL, AI, and user psychology.
            </p>
          </motion.div>

          {/* CARD 2: TECH STACK */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 row-span-1 rounded-xl border border-white-5 bg-zinc-900/50 p-8 hover:border-purple-500/30"
          >
            <div className="flex items-center gap-4 mb-8">
              <Cpu className="h-6 w-6 text-purple-400" />
              <h3 className="text-xl font-bold text-white">Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "TypeScript", "Tailwind", "Three.js", "Framer Motion", "WebGL", "Node.js", "Supabase"].map((tech) => (
                <span key={tech} className="rounded-md bg-white/5 px-3 py-1 text-xs font-mono text-white/50">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CARD 3: STATS GRID */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="col-span-1 md:col-span-2 row-span-1 grid grid-cols-2 gap-4 rounded-xl border border-white-5 bg-white-5 p-8 md:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col justify-center border-l border-white/10 pl-4">
                <span className="text-xs font-mono uppercase text-white/30">{stat.label}</span>
                <span className="mt-1 text-2xl font-bold text-white">{stat.value}</span>
              </div>
            ))}
          </motion.div>

           {/* CARD 4: LOCATION / AVAILABILITY */}
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-1 row-span-1 flex flex-col justify-center items-center rounded-xl border border-white-5 bg-gradient-to-br from-purple-900/20 to-black p-8 text-center"
          >
             <Globe className="mb-4 h-8 w-8 text-purple-400 animate-pulse" />
             <h3 className="text-lg font-bold text-white">Online</h3>
             <p className="text-sm text-white/40">Open for collaboration</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
