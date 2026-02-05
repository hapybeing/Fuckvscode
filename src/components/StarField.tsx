"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function MovingStars() {
  const starsRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Reduced rotation speed for stability
    starsRef.current.rotation.y = t * 0.02; 
    starsRef.current.rotation.x = t * 0.01;
  });

  return (
    <group ref={starsRef}>
      {/* PERFORMANCE FIX:
         - Reduced count from 8000 to 1500 (Massive memory saving)
         - Factor 4 ensures they are still visible
      */}
      <Stars radius={50} depth={50} count={1500} factor={4} saturation={0} fade speed={1} />
    </group>
  );
}

export default function StarField() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none opacity-50 mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}> {/* Limit pixel ratio for performance */}
        <MovingStars />
      </Canvas>
    </div>
  );
}
