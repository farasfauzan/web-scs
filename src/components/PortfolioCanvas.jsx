import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Glass bubble containing a simple model
const ProjectBubble = ({ position, color }) => {
  const groupRef = useRef();
  
  useFrame((state) => {
    groupRef.current.rotation.y += 0.005;
  });

  return (
    <group ref={groupRef} position={position}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* The glass sphere */}
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[2, 64, 64]} />
          <MeshTransmissionMaterial 
            backside
            samples={4}
            thickness={2}
            chromaticAberration={0.05}
            anisotropy={0.1}
            distortion={0}
            distortionScale={0}
            temporalDistortion={0}
            iridescence={1}
            iridescenceIOR={1}
            iridescenceThicknessRange={[0, 1400]}
          />
        </mesh>
        {/* The miniature building inside */}
        <mesh position={[0, -0.5, 0]}>
          <boxGeometry args={[1, 2, 1]} />
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>
    </group>
  );
};

const PortfolioCanvas = () => {
  return (
    <div className="w-full h-[600px] cursor-grab active:cursor-grabbing">
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Environment preset="city" />
        
        <ProjectBubble position={[-4, 0, 0]} color="#ff4444" />
        <ProjectBubble position={[0, 0, 0]} color="#44ff44" />
        <ProjectBubble position={[4, 0, 0]} color="#4444ff" />

        {/* Allow user to rotate the whole scene manually */}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default PortfolioCanvas;
