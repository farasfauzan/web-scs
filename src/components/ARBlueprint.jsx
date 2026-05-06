import React, { useState } from 'react';
import { Fingerprint, X } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const ARBlueprint = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Since actual WebXR requires HTTPS and specific device support,
  // we'll simulate the "Portal" experience with a fullscreen modal containing a 3D wireframe.

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="magnetic-item group relative flex items-center justify-center w-24 h-24 rounded-full bg-white text-space-grey overflow-hidden"
      >
        <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-20"></div>
        <Fingerprint size={40} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
      </button>

      {/* AR Modal Simulation */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 text-white hover:text-blue-400 transition-colors z-10"
          >
            <X size={40} />
          </button>
          
          <div className="text-center text-white absolute top-12 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none">
            <h2 className="text-2xl font-bold font-mono tracking-widest text-blue-400 mb-2">AR BLUEPRINT PORTAL</h2>
            <p className="text-sm opacity-50">Proyeksikan ke permukaan datar...</p>
          </div>

          <div className="w-full h-full cursor-move">
             <Canvas camera={{ position: [0, 5, 10] }}>
                <ambientLight intensity={1} />
                {/* Blueprint wireframe representation */}
                <mesh>
                   <boxGeometry args={[4, 6, 4]} />
                   <meshBasicMaterial color="#3b82f6" wireframe={true} />
                </mesh>
                <mesh position={[0, -3, 0]}>
                   <planeGeometry args={[10, 10]} />
                   <meshBasicMaterial color="#3b82f6" wireframe={true} />
                </mesh>
                <OrbitControls autoRotate autoRotateSpeed={2} />
             </Canvas>
          </div>
        </div>
      )}
    </>
  );
};

export default ARBlueprint;
