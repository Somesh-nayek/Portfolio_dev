import { useGLTF,  OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import CanvasLoader from "../Loader";
import { ErrorBoundary } from "react-error-boundary";
import * as THREE from "three";

const Computers = ({ isMobile }: { isMobile: boolean }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  useEffect(() => {
    computer.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const pos = child.geometry?.attributes?.position?.array;
        if (!pos || pos.includes(NaN)) {
          console.warn(`⚠️ Skipping mesh "${child.name}" with invalid position data.`);
        }
      }
    });
  }, [computer]);

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
        dispose={null}
      >
        {computer.scene.children.map((child, i) => {
          if (
            child instanceof THREE.Mesh &&
            child.geometry?.attributes?.position?.array?.includes(NaN)
          ) {
            console.warn("⛔ Mesh skipped due to NaN values:", child.name);
            return null;
          }

          return <primitive object={child} key={i} />;
        })}
      </group>
    </mesh>
  );
};

const FallbackMessage = () => (
  <div className="text-center text-gray-500 mt-10">3D Model failed to load.</div>
);

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // setShowCanvas(true); // Delay rendering until hydration
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div  className="w-full h-screen">
    <Canvas
      frameloop="demand"
      shadows
      camera={{
        position: [20, 3, 5],
        fov: 30,
      }}
      gl={{ preserveDrawingBuffer: false }}
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
      {/* <Preload all /> */}
    </Canvas>
    </div>
  );
};

export default ComputersCanvas;
