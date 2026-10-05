"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";

function Orb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (!meshRef.current || !groupRef.current) return;
    meshRef.current.rotation.y += 0.0015;
    meshRef.current.rotation.x += 0.0006;

    const targetX = (state.pointer.x * viewport.width) / 24;
    const targetY = (state.pointer.y * viewport.height) / 24;
    groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.03;
    groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.03;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.6, 12]} />
          <MeshDistortMaterial
            color="#181818"
            emissive="#A8C900"
            emissiveIntensity={0.25}
            roughness={0.15}
            metalness={0.6}
            distort={0.35}
            speed={1.6}
          />
        </mesh>
      </Float>
    </group>
  );
}

function Particles({ count = 400 }: { count?: number }) {
  const points = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 4 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, [count]);

  const ref = useRef<THREE.Points>(null);
  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.0003;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[points, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#D7FF00" size={0.02} sizeAttenuation transparent opacity={0.5} />
    </points>
  );
}

interface DigitalOrbProps {
  reducedMotion?: boolean;
  isMobile?: boolean;
}

export default function DigitalOrb({ reducedMotion, isMobile }: DigitalOrbProps) {
  return (
    <Canvas
      dpr={isMobile ? [1, 1.3] : [1, 2]}
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      frameloop={reducedMotion ? "demand" : "always"}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 4]} intensity={1.2} color="#D7FF00" />
      <pointLight position={[-4, -2, -3]} intensity={0.8} color="#FFFFFF" />
      <Orb />
      {!isMobile && <Particles />}
      <Environment preset="city" environmentIntensity={0.3} />
    </Canvas>
  );
}
