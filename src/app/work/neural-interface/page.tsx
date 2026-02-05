"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Code2, Cpu, Zap } from "lucide-react";

export default function NeuralInterface() {
  return (
    <main className="min-h-screen bg-cinema-black text-white selection:bg-purple-500/30">
      
      {/* NAV */}
      <nav className="fixed top-0 left-0 z-50 p-6 w-full flex justify-between items-center mix-blend-difference">
        <Link href="/#work" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:text-purple-400">
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Base</span>
        </Link>
        <span className="font-mono text-xs opacity-50">CASE: 01 // 2024</span>
      </nav>

      {/* HERO */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
            className="h-full w-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cinema-black via-cinema-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center p-6">
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
            NEURAL<br/>INTERFACE
          </h1>
          <p className="font-mono text-purple-400 tracking-widest uppercase text-sm">
            Visualizing the Mind of AI
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container mx-auto px-6 py-24 max-w-4xl">
        <div className="flex flex-col gap-16">
          
          <div className="p-8 border-l-2 border-purple-500/50 bg-white/5 backdrop-blur-sm rounded-r-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Zap className="text-purple-400" /> The Objective
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Artificial Intelligence is often perceived as a "black box." The goal of <span className="text-white">Neural Interface</span> was to break that box open. We wanted to create a dashboard that didn't just display data, but <em>visualized the thought process</em> of a Large Language Model in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">The Challenge</h3>
              <p className="text-white/60 leading-relaxed">
                Handling thousands of vector embeddings in the browser without crashing the GPU. We needed a rendering engine that could handle 60FPS visualizations while processing live WebSocket data streams.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">The Solution</h3>
              <p className="text-white/60 leading-relaxed">
                We utilized Three.js instanced meshes to render 10,000+ data points simultaneously. By offloading physics calculations to a Web Worker, we achieved butter-smooth performance even on mobile devices.
              </p>
            </div>
          </div>

          {/* TECH STACK */}
          <div className="py-12 border-t border-white/10">
            <h3 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-8">System Architecture</h3>
            <div className="flex flex-wrap gap-4">
              {["React 18", "Three.js", "WebGL Shaders", "WebSockets", "Tailwind"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-white/5 rounded-full text-xs font-mono text-purple-300 border border-purple-500/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
