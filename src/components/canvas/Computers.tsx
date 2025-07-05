// components/ComputersCanvas.tsx
import { useGLTF, Preload, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import CanvasLoader from "../Loader";

// --- Component for the computer model ---
const Computers = ({ isMobile }: { isMobile: boolean }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="white" />
      <directionalLight position={[0, 0, 5]} color="violet" />
      <ambientLight intensity={0.5} />
      <pointLight intensity={0.5} />
      <spotLight
        position={[-20, 50, 10]}
        angle={1}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <group
        scale={isMobile ? 0.5 : 0.9}
        position={isMobile ? [0, -1.8, -1.8] : [0, -4, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      >
        <primitive object={computer.scene} />
      </group>
    </mesh>
  );
};

// --- Main canvas component ---
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div className="w-full h-screen">
      <Canvas
        frameloop="demand"
        shadows
        camera={{
          position: [20, 3, 5],
          fov: 30,
        }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full h-full"
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
