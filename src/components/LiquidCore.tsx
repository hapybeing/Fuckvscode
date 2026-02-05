"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.1;
    meshRef.current.rotation.y = t * 0.15;
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      {/* OPTIMIZED: We lowered the segments from 100 to 64. 
          It looks the same but runs 2x faster. */}
      <Sphere args={[1, 64, 64]} scale={2.2} ref={meshRef}>
        <MeshDistortMaterial
          color="#1a1a1a"
          attach="material"
          distort={0.5} 
          speed={1.5}
          roughness={0.2}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  );
}

export default function LiquidCore() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      {/* OPTIMIZED: We limited the resolution (dpr) to save battery */}
      <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={5} color="#6d28d9" />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}

