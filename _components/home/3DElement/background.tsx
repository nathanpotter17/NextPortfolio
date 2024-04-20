"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useInView } from "react-intersection-observer";

const Scene = React.memo(
  React.forwardRef(() => {
    const sphere = useRef<THREE.Mesh>(null);
    const sphere2 = useRef<THREE.Mesh>(null);

    useFrame(() => {
      sphere.current?.rotateZ(0.003);
      sphere2.current?.rotateZ(0.003);
    });

    return (
      <>
        <mesh ref={sphere} position={[0, 0, 3]} rotation={[Math.PI / 2, 0, 0]}>
          <sphereGeometry args={[1, 1, 1]} />
          <meshNormalMaterial />
        </mesh>
        <mesh
          ref={sphere2}
          position={[0, 0, 3]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.1}
        >
          <sphereGeometry args={[1, 1, 1]} />
          <meshNormalMaterial wireframe />
        </mesh>
      </>
    );
  })
);

export default function Background() {
  let [ref, inView] = useInView({
    triggerOnce: false, // observe after the first intersection
    initialInView: true, // Sets initial visibility to true
    threshold: 0.1,
  });

  useEffect(() => {
    inView = true;
  }, []);

  return (
    <div
      ref={ref}
      className={`w-full h-screen flex absolute z-[-1] transition-opacity duration-500 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <Suspense>
        <Canvas>
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}
