"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative z-20 w-full bg-cinema-black py-40">
      <div className="container mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white-10 bg-gradient-to-b from-white-5 to-transparent p-12 md:p-24"
        >
          {/* Background Glow */}
          <div className="absolute -top-[50%] left-[50%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-900/20 blur-[100px]" />

          <h2 className="relative z-10 mb-8 text-5xl font-bold tracking-tighter text-white md:text-8xl">
            READY TO<br />
            INITIATE?
          </h2>

          <p className="relative z-10 mx-auto mb-12 max-w-lg text-lg text-white/60">
            Currently accepting new directives for 2026. 
            If you have a vision that defies the ordinary, execute the protocol below.
          </p>

          <a 
            href="mailto: gaurangk.inbox@gmail.com" 
            className="group relative z-10 inline-flex items-center gap-4 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black"
          >
            <Mail className="h-4 w-4" />
            <span>Initialize Protocol</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

        </motion.div>

        {/* Footer Copyright */}
        <div className="mt-32 flex flex-col items-center justify-between gap-8 border-t border-white-5 pt-8 text-xs font-mono text-white/30 md:flex-row">
          <p>GAURANG / VISUALS © 2026</p>
          <div className="flex gap-8">
            <a href="https://www.instagram.com/yaytwenty26?igsh=NDNwMDVka2lsdDdl" className="hover:text-white transition-colors">INSTAGRAM</a>
            <a href="#" className="hover:text-white transition-colors">TWITTER</a>
            <a href="#" className="hover:text-white transition-colors">GITHUB</a>
          </div>
        </div>

      </div>
    </section>
  );
}
