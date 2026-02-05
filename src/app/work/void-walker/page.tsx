"use client";

import Link from "next/link";
import { ArrowLeft, Camera, Aperture, Film } from "lucide-react";

export default function VoidWalker() {
  return (
    <main className="min-h-screen bg-cinema-black text-white">
      
      <nav className="fixed top-0 left-0 z-50 p-6 w-full flex justify-between items-center">
        <Link href="/#work" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:text-blue-400">
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Base</span>
        </Link>
        <span className="font-mono text-xs opacity-50">CASE: 02 // 2025</span>
      </nav>

      <section className="relative h-[80vh] w-full">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=2553&auto=format&fit=crop" 
            className="h-full w-full object-cover brightness-75"
          />
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cinema-black" />
        </div>
        <div className="absolute bottom-24 left-6 md:left-24">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white drop-shadow-2xl">
            VOID_WALKER
          </h1>
          <p className="text-xl text-blue-200 font-light mt-4 max-w-xl">
            An exploration of silence in the loudest cities on Earth.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24 max-w-3xl">
        <p className="text-2xl font-serif italic text-white/80 leading-relaxed mb-16 text-center">
          "The city never sleeps, but sometimes... it blinks."
        </p>

        <div className="space-y-12 font-light text-lg text-white/70">
          <p>
            <strong className="text-white block mb-2 font-bold">CONCEPT</strong>
            Void Walker is a photographic study of light pollution and urban isolation. Over the course of 3 months, we documented the empty spaces of Tokyo, New York, and Mumbai between the hours of 3:00 AM and 5:00 AM.
          </p>
          
          <p>
            <strong className="text-white block mb-2 font-bold">EXECUTION</strong>
            Using high-sensitivity sensors and custom color grading pipelines in DaVinci Resolve, we stripped away the "noise" of the city to reveal the geometry underneath. The result is a haunting collection of images that feel simultaneously familiar and alien.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-24 border-t border-white/10 pt-12">
          <div className="text-center">
            <Camera className="w-8 h-8 mx-auto mb-4 text-blue-400" />
            <span className="text-xs font-mono">Sony A7S III</span>
          </div>
          <div className="text-center">
            <Aperture className="w-8 h-8 mx-auto mb-4 text-blue-400" />
            <span className="text-xs font-mono">f/1.2 G-Master</span>
          </div>
          <div className="text-center">
            <Film className="w-8 h-8 mx-auto mb-4 text-blue-400" />
            <span className="text-xs font-mono">DaVinci Resolve</span>
          </div>
        </div>
      </section>

    </main>
  );
}
