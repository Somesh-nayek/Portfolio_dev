import { useRef,Suspense} from "react";
import { Canvas,useFrame } from "@react-three/fiber";
import { Points,PointMaterial,Preload } from "@react-three/drei";
import * as random from 'maath/random/dist/maath-random.esm';
import { BufferGeometry, Material, Points as ThreePoints } from "three";
import { useInView } from "react-intersection-observer";
const Stars = () => {
  const ref= useRef<ThreePoints<BufferGeometry, Material | Material[]> | null>(null);

    const sphere = random.inSphere(new Float32Array(5000), { radius:1}); 
  useFrame((_,delta)=>{
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
  }  
  })
  return (
    <group rotation={[0,0,Math.PI/4]}>
      <Points ref={ref} positions={sphere}
      stride={3}
      frustumCulled
      >
        <PointMaterial
        transparent
        color="#f272c8"
        size={0.002}
        sizeAttenuation={true}
        depthWrite={false}
        />
      </Points>
    </group>
  )
}
const StarCanvas=()=>{
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: false });
  return<div ref={ref} className="w-full h-auto absolute inset-0 z-[-1]">
    {inView?<Canvas
    camera={{position:[0,0,1]}}>
      <Suspense fallback={null}>
        <Stars/>
        <Preload all/>
      </Suspense>
    </Canvas>:null}
  </div>
}

export default StarCanvas;