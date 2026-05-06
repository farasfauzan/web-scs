import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Abstract building (placeholder for actual skyscraper model)
const Skyscraper = () => {
  const ref = useRef();
  
  useFrame((state) => {
    // Interactive scroll effect
    const scrollY = window.scrollY || 0;
    
    // Slight vertical parallax
    ref.current.position.y = (scrollY * 0.01) - 8;
  });

  return (
    <group ref={ref} position={[0, -8, 0]}>
      {/* Core Tower */}
      <mesh position={[0, 10, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, 20, 4]} />
        <meshPhysicalMaterial 
          color="#ffffff" 
          metalness={0.8} 
          roughness={0.2} 
          envMapIntensity={1}
          clearcoat={1}
        />
      </mesh>
      {/* Rings/Floors */}
      {[...Array(10)].map((_, i) => (
        <mesh key={i} position={[0, 2 + i * 2, 0]} castShadow>
          <boxGeometry args={[4.5, 0.2, 4.5]} />
          <meshStandardMaterial color="#1D1D1F" metalness={0.9} roughness={0.1} />
        </mesh>
      ))}
    </group>
  );
};

// Floating construction debris (concrete, steel, glass)
const Debris = ({ count = 20 }) => {
  const debrisRef = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const type = Math.random() > 0.6 ? 'concrete' : Math.random() > 0.5 ? 'steel' : 'glass';
      const x = (Math.random() - 0.5) * 30;
      const y = (Math.random() - 0.5) * 30;
      const z = (Math.random() - 0.5) * 20 - 5;
      temp.push({ x, y, z, type, speed: Math.random() * 0.02, rotSpeed: Math.random() * 0.01 });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    if (debrisRef.current) {
      debrisRef.current.rotation.y += 0.001;
      debrisRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <group ref={debrisRef}>
      {particles.map((p, i) => (
        <Float key={i} speed={1 + Math.random()} rotationIntensity={1.5} floatIntensity={2}>
          <mesh position={[p.x, p.y, p.z]} castShadow receiveShadow>
            {p.type === 'concrete' && <boxGeometry args={[1, 1, 1]} />}
            {p.type === 'steel' && <cylinderGeometry args={[0.1, 0.1, 4]} />}
            {p.type === 'glass' && <boxGeometry args={[2, 2, 0.1]} />}
            
            <meshPhysicalMaterial 
              color={p.type === 'glass' ? '#88ccff' : p.type === 'steel' ? '#555555' : '#aaaaaa'}
              metalness={p.type === 'steel' ? 1 : 0.1}
              roughness={p.type === 'concrete' ? 0.9 : 0.1}
              transmission={p.type === 'glass' ? 0.9 : 0}
              thickness={p.type === 'glass' ? 0.5 : 0}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

const Canvas3D = () => {
  return (
    <div className="absolute inset-0 z-10 overflow-hidden cursor-grab active:cursor-grabbing pointer-events-auto">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 25]} fov={50} />
        
        {/* Environment & Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 20, 10]} intensity={1.5} castShadow />
        <spotLight position={[-10, -10, -10]} intensity={1} color="#ffffff" />
        <Environment preset="city" />
        
        <OrbitControls 
          enableZoom={true} 
          enablePan={true} 
          autoRotate={true}
          autoRotateSpeed={1.0}
        />
        
        <Skyscraper />
        <Debris count={5} />
      </Canvas>
    </div>
  );
};

export default Canvas3D;
