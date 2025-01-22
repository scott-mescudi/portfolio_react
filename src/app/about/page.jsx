'use client'

import { Lines } from '@/components/Lines';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';



function RotatingModel() {
  const modelRef = useRef();
  const { scene, materials } = useGLTF('gtr.glb');



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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 100); 

    return () => clearTimeout(timeout); 
  }, []);

  
  return (
    <>
      {loading && (
        <div className="absolute z-10 m-5">
          <div role="status" className="w-full h-full flex items-center justify-center">
            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>

      )}
      <Canvas className='hover:cursor-all-scroll' camera={{ position: [50, 10, 22], zoom: 30 }}>
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} intensity={2.5} />
        <directionalLight castShadow={true} color={0xaaaaaa} position={[-10, -10, -10]} intensity={3} />
        <directionalLight position={[0, 10, 0]} intensity={1} />
        <directionalLight position={[-50, 13, -5]} intensity={2} />
        <directionalLight position={[50, 13, -5]} intensity={0.5} />
        <directionalLight position={[30, 0, -5]} intensity={0.5} />
        <directionalLight position={[0, -20, 0]} intensity={4} />
        <hemisphereLight skyColor={0xaaaaaa} groundColor={0x444444} intensity={1} />
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