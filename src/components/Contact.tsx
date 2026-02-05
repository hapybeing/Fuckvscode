
"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Instagram, Twitter, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative z-20 w-full bg-transparent py-40">
      <div className="container mx-auto px-6">
        
        {/* Main Call to Action */}
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-5xl font-bold tracking-tighter text-white md:text-8xl"
          >
            READY TO<br />
            INITIATE?
          </motion.h2>

          <a 
            href="mailto:your-email@example.com" 
            className="group relative z-10 inline-flex items-center gap-4 rounded-full border border-white/20 bg-white/5 px-10 py-5 text-lg font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black hover:scale-105"
          >
            <Mail className="h-5 w-5" />
            <span>Initialize Protocol</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* SOCIAL COMMAND DECK */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto border-t border-white-5 pt-12">
          
          <a href="https://www.instagram.com/yaytwenty26?igsh=NDNwMDVka2lsdDdl" target="_blank" className="group flex items-center justify-between p-6 rounded-xl border border-white-5 bg-white-5 hover:bg-white/10 hover:border-purple-500/50 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-purple-500/20 text-white group-hover:text-purple-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </div>
              <span className="font-mono text-sm tracking-widest text-white/60 group-hover:text-white">INSTAGRAM</span>
            </div>
            <ArrowRight className="h-4 w-4 text-white/20 group-hover:text-white -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" />
          </a>

          <a href="https://x.com/hapybeing" target="_blank" className="group flex items-center justify-between p-6 rounded-xl border border-white-5 bg-white-5 hover:bg-white/10 hover:border-blue-500/50 transition-all">
             <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-blue-500/20 text-white group-hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </div>
              <span className="font-mono text-sm tracking-widest text-white/60 group-hover:text-white">TWITTER</span>
            </div>
            <ArrowRight className="h-4 w-4 text-white/20 group-hover:text-white -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" />
          </a>

          <a href="https://github.com/hapybeing" target="_blank" className="group flex items-center justify-between p-6 rounded-xl border border-white-5 bg-white-5 hover:bg-white/10 hover:border-green-500/50 transition-all">
             <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-green-500/20 text-white group-hover:text-green-400 transition-colors">
                <Github className="h-6 w-6" />
              </div>
              <span className="font-mono text-sm tracking-widest text-white/60 group-hover:text-white">GITHUB</span>
            </div>
            <ArrowRight className="h-4 w-4 text-white/20 group-hover:text-white -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" />
          </a>

        </div>

        <div className="mt-12 text-center text-xs font-mono text-white/20">
          GAURANG / VISUALS © 2026
        </div>

      </div>
    </section>
  );
}
