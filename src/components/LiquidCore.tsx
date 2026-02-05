"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    // This makes the sphere rotate slowly based on time
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.1;
    meshRef.current.rotation.y = t * 0.15;
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2.2} ref={meshRef}>
        <MeshDistortMaterial
          color="#1a1a1a"       // Dark charcoal base
          attach="material"
          distort={0.6}         // High distortion for liquid effect
          speed={1.5}           // Fast movement
          roughness={0.2}       // Shiny like metal
          metalness={0.9}       // Metallic finish
        />
      </Sphere>
    </Float>
  );
}

export default function LiquidCore() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        {/* Cinematic Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={5} color="#6d28d9" /> {/* Purple rim light */}
        
        {/* The Starfield Background */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* The Liquid Object */}
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}
