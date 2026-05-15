"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00d4ff"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function FloatingOrb({ position, color, size, speed }: {
  position: [number, number, number];
  color: string;
  size: number;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[size, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
          metalness={0.8}
          transparent
          opacity={0.15}
          wireframe={false}
        />
      </Sphere>
    </Float>
  );
}

function NeuralNodes() {
  const groupRef = useRef<THREE.Group>(null!);
  const lineRefs = useRef<THREE.Line[]>([]);

  const nodes = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4
      ),
      size: Math.random() * 0.05 + 0.02,
      color: Math.random() > 0.5 ? "#00d4ff" : "#a855f7",
    }));
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
    }
  });

  const connections = useMemo(() => {
    const conns: Array<[number, number]> = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].position.distanceTo(nodes[j].position) < 5) {
          conns.push([i, j]);
        }
      }
    }
    return conns;
  }, [nodes]);

  return (
    <group ref={groupRef}>
      {/* Nodes */}
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position}>
          <sphereGeometry args={[node.size, 8, 8]} />
          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={2}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}

      {/* Connections */}
      {connections.map(([a, b], i) => {
        const points = [nodes[a].position, nodes[b].position];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <line key={i} geometry={geometry}>
            <lineBasicMaterial color="#00d4ff" transparent opacity={0.08} />
          </line>
        );
      })}
    </group>
  );
}

function CameraRig() {
  const { camera, mouse } = useThree();

  useFrame(() => {
    camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.02;
    camera.position.y += (mouse.y * 0.3 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ background: "transparent" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} color="#00d4ff" intensity={1} />
      <pointLight position={[-5, -5, -5]} color="#a855f7" intensity={0.8} />
      <pointLight position={[0, 0, 3]} color="#00ffea" intensity={0.5} />

      <ParticleField />
      <NeuralNodes />

      <FloatingOrb position={[-4, 2, -2]} color="#00d4ff" size={1.2} speed={0.8} />
      <FloatingOrb position={[4, -1.5, -3]} color="#a855f7" size={1.5} speed={0.6} />
      <FloatingOrb position={[0, 3, -4]} color="#00ffea" size={0.8} speed={1.2} />

      <CameraRig />
    </Canvas>
  );
}
