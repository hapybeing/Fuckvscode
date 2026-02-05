"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function MovingStars() {
  const starsRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Gentle rotation
    starsRef.current.rotation.y = t * 0.03; 
    starsRef.current.rotation.x = t * 0.01;
  });

  return (
    <group ref={starsRef}>
      {/* factor={4} -> Visible size
        count={2000} -> Safe performance limit
        fade -> Soft edges 
      */}
      <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
}

export default function StarField() {
  return (
    // FIX: Removed 'opacity-50' and 'mix-blend-screen' so they pop against the black
    <div className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>
        <MovingStars />
      </Canvas>
    </div>
  );
}
