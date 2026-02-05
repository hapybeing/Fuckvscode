"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "01",
    path: "neural-interface", // <--- NEW: Tells it which folder to open
    title: "NEURAL_INTERFACE",
    category: "Web Development",
    description: "A reactive dashboard visualizing AI memory patterns in real-time.",
    tags: ["React", "Three.js", "WebGL"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  },
  {
    id: "02",
    path: "void-walker",
    title: "VOID_WALKER",
    category: "Cinematography",
    description: "Abstract visual study of light pollution in urban environments.",
    tags: ["Photography", "Color Grading", "Direction"],
    image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=2553&auto=format&fit=crop"
  },
  {
    id: "03",
    path: "cyber-garden",
    title: "CYBER_GARDEN",
    category: "Interactive Art",
    description: "Generative organic structures grown through algorithmic noise.",
    tags: ["p5.js", "Creative Coding", "Installation"],
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2670&auto=format&fit=crop"
  }
];

export default function Work() {
  return (
    <section id="work" className="relative z-20 w-full bg-transparent py-32">
      <div className="container mx-auto px-6">
        
        <div className="mb-24 flex flex-col gap-4 border-l-2 border-white-10 pl-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold tracking-tighter text-white md:text-8xl"
          >
            SELECTED<br />
            ARTIFACTS
          </motion.h2>
          <p className="max-w-md font-mono text-sm text-white/40">
            // INDEX: 2024-2026 <br/>
            // STATUS: DECLASSIFIED
          </p>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative grid grid-cols-1 gap-12 md:grid-cols-2 items-center"
            >
              <div className={`relative h-[50vh] w-full overflow-hidden rounded-sm bg-cinema-gray ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
                <div className="absolute left-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur-md">
                  <span className="font-mono text-xs text-white">{project.id}</span>
                </div>
              </div>

              <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1 md:text-right md:items-end' : ''}`}>
                <div className="mb-6 flex items-center gap-4 text-purple-400">
                  <span className="h-[1px] w-12 bg-purple-400/50"></span>
                  <span className="font-mono text-xs tracking-widest uppercase">{project.category}</span>
                </div>
                
                <h3 className="mb-6 text-4xl font-bold text-white transition-colors group-hover:text-purple-200 md:text-6xl">
                  {project.title}
                </h3>
                
                <p className="mb-8 max-w-md text-white/60 leading-relaxed">
                  {project.description}
                </p>

                <div className={`flex flex-wrap gap-3 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white-5 bg-white-5 px-4 py-1.5 text-xs text-white/40 transition-colors group-hover:border-purple-500/30 group-hover:text-purple-200">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* UPDATED LINK LOGIC */}
                <Link href={`/work/${project.path}`} className="mt-12 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white transition-all group-hover:gap-4 group-hover:text-purple-400">
                  View Case Study <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
