import { useGLTF, Preload, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import CanvasLoader from "../Loader";

type Props={
  isMobile:boolean;
}
const Computers = ({isMobile}:Props) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor='white' />
      <directionalLight position={[0, 0, 5]} color="violet" />
      <ambientLight intensity={0.5} />
      <pointLight intensity={0.5} />
      <spotLight position={[-20,50,10]} angle={1}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}/>
      <primitive object={computer.scene} 
      scale={isMobile?0.7:0.75} 
      position={isMobile?[0,-3,-2.2]:[0,-3.25,-1.5]}
      rotation={[-0.01, -0.2,-0.1]}/>
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile,setIsMobile] =useState(false);
  useEffect(()=>{
    const mediaquery=window.matchMedia('(max-width:500px)');
    setIsMobile(mediaquery.matches);
    const handleMediaQueryChange =(event:MediaQueryListEvent)=>{
      setIsMobile(event.matches); 
    }
    mediaquery.addEventListener('change',handleMediaQueryChange);
    return ()=>{
      mediaquery.removeEventListener('change',
        handleMediaQueryChange);
    }
  },[]);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="h-fit w-fit"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
