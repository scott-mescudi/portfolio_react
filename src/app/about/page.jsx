'use client'

import { Lines } from '@/components/Lines';
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

 function Model() {
  
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


export default function About() {
    return (
        <>  
            <div id="about" className="w-full text-white overflow-hidden sm:flex hidden my-8 text-2xl flex-col items-center gap-5">
                <h1 className="sm:w-1/2 w-4/5 text-center font-semibold text-white text-opacity-100 sm:text-4xl">BACKGROUND</h1>
                <p className=" text-white text-opacity-50 sm:w-1/2 w-4/5 text-whitel">
                Hey! I’m a 17-year-old born in Suriname with a passion for programming, trading, and gaming. What drives me is the motivation to secure my future. I work hard to ensure I can lead a comfortable life later on with a family of five. My greatest strength? Perseverance. I might be average at many things, but when I truly want something, I give it my all to achieve it.
                </p>

                <p className=" text-white text-opacity-50 sm:w-1/2 w-4/5 text-whitel">
                I chose this program because, during my time in high school, I felt like I wasn’t learning much that truly felt relevant.  
                My motivation stems from my passion for technology and making a computer do what I want.  
                I’m particularly drawn to backend development because I enjoy building systems that are efficient and powerful.  
                After completing this program, I aim to start my own tech company.  
                To achieve that, I’m honing my skills and diving into the latest backend technologies.  
                This program is bringing me closer to my goal.
                </p>

            </div>

            <div id="about" className="w-full fade-in text-white overflow-hidden sm:hidden flex my-8 text-xl flex-col items-center opacity-40 gap-4">
                <h1 className="sm:w-1/2 w-4/5 text-center text-white font-semibold sm:text-3xl">BACKGROUND</h1>
                <p className="sm:w-1/2 w-4/5 text-white">
                   Hello! I’m a passionate programmer from Suriname with a strong interest in backend development, technology, and problem-solving. My journey into programming began with a curiosity about how systems work and has grown into a commitment to mastering cutting-edge backend techniques. I take pride in my perseverance and the drive to achieve my goals, no matter the challenges.
                </p>
            </div>


            <div id="boxes" className="w-full h-full 2xl:h-screen flex gap-5 flex-col items-center">
                <div className="sm:w-1/2 border border-white border-opacity-10 w-4/5 h-80 2xl:h-1/2 mt-5 bg-black flex flex-col py-5 rounded-xl">
                        <h1 className="w-full text-white px-5 font-semibold sm:text-2xl">Cars</h1>
                        <p className="w-full text-white px-5 text-opacity-45">I love tuning and working on cars.</p>
                        <div className="w-full relative h-full py-5 flex justify-center items-center ">
                        <Model />
                           
                        </div> 
                </div>
                
                <div className="sm:w-1/2 w-4/5 h-1/2 gap-5 mb-5 flex 2xl:flex-row flex-col">
                    <div className="w-full overflow-hidden border border-white border-opacity-10 h-80 2xl:h-full p-5 bg-black flex flex-col rounded-xl items-center">
                        <h1 className="w-full text-white font-semibold sm:text-2xl">Photography</h1>
                        <p className="w-full text-white text-opacity-45">One of my recent hobbies.</p>
                        <div className="w-full h-full p-5 flex justify-center items-center ">
                            <img draggable="false" alt="dancing gopher" decoding="async" loading="lazy" src="go.gif" className="rounded-md py-1 hover:scale-110 duration-500" /> {/* 'placeholder' remove this for photos from camera with a filter or sum to make it dark */}
                        </div> 
                    </div>
                    <div className="w-full border border-white border-opacity-10 h-80 2xl:h-full p-5 bg-black flex flex-col rounded-xl items-center">
                        <h1 className="w-full text-white font-semibold sm:text-2xl">Software</h1>
                        <p className="w-full text-white text-opacity-45">In my free time, I enjoy building things to solve problems and automate my life.</p>
                        <Lines />
                    </div>
                </div>
            </div>
        </>
    )
}