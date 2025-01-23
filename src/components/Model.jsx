import React, {useMemo, useRef} from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';



function RotatingModel() {
  const modelRef = useRef();
  const { scene, materials } = useGLTF('/gtr/gtr.gltf');


  useMemo(() => {
    Object.keys(materials).forEach((key) => {
      const material = materials[key];
      if (material.map) {
        material.map.needsUpdate = true;
      }

      if (material.envMap) {
        material.envMap = scene.background;
      }
    });
  }, [materials, scene]);



  return (
    <mesh ref={modelRef} scale={100} position={[0, -0.5, 0]}>
      <primitive object={scene}  />
    </mesh>
  );
}

export function Model() {
  
  return (
    <>
      <Canvas className='hover:cursor-all-scroll' camera={{ position: [50, 10, 18], zoom: 30 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} intensity={2.5} />
        <directionalLight color={"#FF4500"}  position={[-10, -10, -10]} intensity={1} />
        <directionalLight position={[0, 10, 0]} intensity={1} />
        <directionalLight  color={"#FF4500"} position={[-50, 13, -5]} intensity={2} />
        <directionalLight color={"#F1FAF4"} position={[50, 13, -5]} intensity={0.5} />
        <directionalLight color={"#FF4500"} position={[0, 100, -30]} intensity={0.5} />
        <directionalLight color={"#FF4500"} position={[30, 0, -5]} intensity={0.5} />
        <directionalLight color={"#FF4500"} position={[0, -20, 0]} intensity={4} />
        <RotatingModel />
        <OrbitControls enablePan={false} maxPolarAngle={1.35} enableZoom={false} minPolarAngle={1.1} rotateSpeed={0.1} maxDistance={130} />
      </Canvas>
    </>
  );
}
