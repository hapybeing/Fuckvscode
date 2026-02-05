"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function MovingStars() {
  const starsRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    // Rotate the entire starfield slowly to create a "universe" feel
    const t = state.clock.getElapsedTime();
    starsRef.current.rotation.y = t * 0.05; 
    starsRef.current.rotation.x = t * 0.02;
  });

  return (
    <group ref={starsRef}>
      <Stars radius={50} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
}

export default function StarField() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <MovingStars />
      </Canvas>
    </div>
  );
}
