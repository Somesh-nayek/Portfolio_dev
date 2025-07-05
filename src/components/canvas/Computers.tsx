// components/ComputersCanvas.tsx
import { useGLTF, Preload, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import CanvasLoader from "../Loader";
import { ErrorBoundary } from "react-error-boundary";

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

const FallbackMessage = () => (
  <div className="text-center text-gray-500 mt-10">3D Model failed to load.</div>
);

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    setShowCanvas(true); // Delays rendering until after hydration

    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div className="w-full h-screen">
      {showCanvas && (
        <Canvas
          frameloop="demand"
          shadows
          camera={{
            position: [20, 3, 5],
            fov: 30,
          }}
          gl={{ preserveDrawingBuffer: false }} // better for mobile
          className="w-full h-full"
        >
          <Suspense fallback={<CanvasLoader />}>
            <ErrorBoundary fallback={<FallbackMessage />}>
              <OrbitControls
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
              <Computers isMobile={isMobile} />
            </ErrorBoundary>
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default ComputersCanvas;
