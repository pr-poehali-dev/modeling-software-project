import { useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

interface Viewport3DProps {
  activeTool: string;
  brushSize: number;
  brushStrength: number;
}

function SculptModel() {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} castShadow receiveShadow>
      <sphereGeometry args={[2, 128, 128]} />
      <meshStandardMaterial
        color="#a0a0a0"
        metalness={0.1}
        roughness={0.8}
        envMapIntensity={0.5}
      />
    </mesh>
  );
}

const Viewport3D = ({ activeTool, brushSize, brushStrength }: Viewport3DProps) => {
  return (
    <div className="w-full h-full bg-[#3d3d3d] relative">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={50} />
        
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} />
        <pointLight position={[0, 10, 0]} intensity={0.5} color="#ffffff" />

        <Suspense fallback={null}>
          <SculptModel />
          <Environment preset="studio" />
          <ContactShadows
            position={[0, -2, 0]}
            opacity={0.4}
            scale={10}
            blur={2}
            far={4}
          />
        </Suspense>

        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          minDistance={3}
          maxDistance={15}
          target={[0, 0, 0]}
        />
        
        <gridHelper args={[20, 20, '#555555', '#444444']} position={[0, -2, 0]} />
      </Canvas>

      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded px-3 py-2 text-xs text-white">
        <div>Инструмент: {activeTool}</div>
        <div>Размер кисти: {brushSize}</div>
        <div>Сила: {brushStrength}</div>
      </div>

      <div className="absolute top-4 right-4 flex gap-2">
        <button className="w-8 h-8 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded flex items-center justify-center text-white text-xs">
          ◄
        </button>
        <button className="w-8 h-8 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded flex items-center justify-center text-white text-xs">
          ►
        </button>
        <button className="w-8 h-8 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded flex items-center justify-center text-white text-xs">
          ⟳
        </button>
      </div>
    </div>
  );
};

export default Viewport3D;
