import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal,Float,OrbitControls,Preload
  ,useTexture } from "@react-three/drei";
import Loader from '../Loader'
type BallProps = {
  imgUrl:string
}
const Ball = ({imgUrl}:BallProps) => {
  const [decal]=useTexture([imgUrl])
  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={1}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0,0.05]}/>
      <mesh scale={2.75} castShadow receiveShadow>
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial
        color="#fff8eb"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading/>
        <Decal
        position={[0,0,1]}
        rotation={[2*Math.PI,0,6.25]}
        scale={1}
        
        map={decal}
        
        />
      </mesh>
    </Float>
  )
}
type CanvasProps = {
  icon:string;
}
const BallCanvas=({icon}:CanvasProps)=>{
  return <Canvas
  frameloop="always"
  dpr={[1,2]}
  gl={{ preserveDrawingBuffer: true }}
>
  <Suspense fallback={<Loader />}>
    <OrbitControls enableZoom={false}/>
    <Ball imgUrl={icon}/>
  </Suspense>
  <Preload all />
</Canvas>
}

export default BallCanvas