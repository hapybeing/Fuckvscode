"use client";

import Link from "next/link";
import { ArrowLeft, Box, Grid } from "lucide-react";

export default function CyberGarden() {
  return (
    <main className="min-h-screen bg-cinema-black text-white">
      
      <nav className="fixed top-0 left-0 z-50 p-6 w-full flex justify-between items-center bg-black/50 backdrop-blur-md">
        <Link href="/#work" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:text-green-400">
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Base</span>
        </Link>
        <span className="font-mono text-xs opacity-50">CASE: 03 // 2025</span>
      </nav>

      <section className="pt-40 pb-20 px-6 container mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-white">
          CYBER<span className="text-green-500">_</span>GARDEN
        </h1>
        <p className="font-mono text-green-400/80 uppercase tracking-widest text-sm mb-24">
          Algorithmic Growth & Digital Nature
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Simulation Box */}
          <div className="aspect-square bg-zinc-900 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2670&auto=format&fit=crop')] bg-cover opacity-60 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="relative z-10 bg-black/80 px-6 py-3 rounded-full border border-green-500/30 text-green-400 font-mono text-xs">
              Simulating Growth...
            </div>
          </div>

          <div className="text-left flex flex-col justify-center p-8">
            <h2 className="text-3xl font-bold mb-6 text-white">Code that breathes.</h2>
            <p className="text-white/60 mb-6 leading-relaxed">
              Cyber Garden is an interactive installation built with <strong>p5.js</strong>. It uses "Perlin Noise" algorithms to generate unique plant-like structures that never repeat.
            </p>
            <p className="text-white/60 mb-8 leading-relaxed">
              The garden reacts to user input—moving your mouse creates wind, clicking plants seeds. It is a study in <em>emergent behavior</em>, where simple rules of code create complex, organic beauty.
            </p>

            <div className="flex gap-2">
              <span className="px-3 py-1 bg-green-900/20 text-green-400 text-xs font-mono rounded-md">p5.js</span>
              <span className="px-3 py-1 bg-green-900/20 text-green-400 text-xs font-mono rounded-md">WebGL</span>
              <span className="px-3 py-1 bg-green-900/20 text-green-400 text-xs font-mono rounded-md">Algorithms</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
