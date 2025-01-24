'use client'

import { Lines } from '@/components/Lines';
import { Model } from '@/components/Model'

export default function About() {
    return (
        <div className='min-h-screen flex flex-col  items-center w-full'>  
            <div className='sm:w-1/2 w-4/5  h-fit flex 1xl:flex-row 2xl:flex-row flex-col gap-5'> 
                <div className='w-full select-text flex flex-col border gap-5 border-white border-opacity-15 p-5 text-white rounded-xl'>
                    <h1 className='w-full text-white font-semibold sm:text-2xl'>About</h1>
                    <div className='flex flex-col gap-1'>
                        <p className='w-full  text-white tracking-wide text-opacity-35'>TODAY</p>
                        <p className='w-full text-lg text-white text-opacity-50'>I am a freelance full-stack developer specializing in backend development with Go. On the frontend, I work with Next.js and Tailwind to create clean, functional interfaces. Outside of coding, I explore 3D modeling and enjoy making music, constantly pushing myself to grow creatively and expand my skill set.</p>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p className='w-full  text-white tracking-wide text-opacity-35'>CHILDHOOD</p>
                        <p className='w-full text-lg text-white text-opacity-50'>Growing up, I was drawn to trading, gaming, and playing guitar. Trading taught me discipline and how to make thoughtful decisions, starting when I was just 13. At 14, I became interested in programming as I wanted to develop an algorithm to improve my trading system. This sparked my journey into the tech world.</p>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p className='w-full  text-white tracking-wide text-opacity-35'>GROWTH</p>
                        <p className='w-full text-lg text-white text-opacity-50'>I got into backend development by teaching myself while working on that trading algorithm. The Go programming language really ignited my passion for programming. It introduced me to important concepts like multithreading, memory management, and pointers. What excites me most about backend development is building systems that millions of people use every second. I love optimizing these systems to be as fast as possible, and I have a particular fondness for low-level development.</p>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p className='w-full text-white tracking-wide text-opacity-35'>GOAL</p>
                        <p className='w-full text-lg text-white text-opacity-50'>My ultimate goal is to build my own startup, where I can apply everything I’ve learned and continue growing. I have a unique approach to development: I start by building a basic implementation and then spend hours profiling and optimizing the code. I dive deep into stack traces and enjoy the learning process, knowing that every challenge helps me grow as a developer.</p>
                    </div>
                </div>
            </div>




    

            <div id="boxes" className="w-full h-full 2xl:h-screen flex gap-3 flex-col items-center">
                <div className="sm:w-1/2 border border-white border-opacity-10 w-4/5 h-80 2xl:h-1/2 mt-5 bg-black flex flex-col py-5 rounded-xl">
                        <h1 className="w-full text-white px-5 font-semibold sm:text-2xl">Cars</h1>
                        <p className="w-full text-white px-5 text-opacity-50">I love tuning and working on cars.</p>
                        <div className="w-full relative h-full py-5 flex justify-center items-center ">
                        <Model />
                        </div> 
                </div>
                
                <div className="sm:w-1/2 w-4/5 h-1/2 gap-3 mb-5 flex 2xl:flex-row flex-col">
                    <div className="w-full overflow-hidden border border-white border-opacity-10 h-80 2xl:h-full p-5 bg-black flex flex-col rounded-xl items-center">
                        <h1 className="w-full text-white font-semibold sm:text-2xl">Photography</h1>
                        <p className="w-full text-white text-opacity-50">One of my recent hobbies.</p>
                        <div className="w-full p-5 flex justify-center items-center ">
                            <img draggable="false" alt="dancing gopher" decoding="async" loading="lazy" src="/go.gif" className="rounded-md py-1 hover:scale-110 duration-500" /> {/* 'placeholder' remove this for photos from camera with a filter or sum to make it dark */}
                        </div> 
                    </div>
                    <div className="w-full border border-white border-opacity-10 h-80 2xl:h-full p-5 bg-black flex flex-col rounded-xl items-center">
                        <h1 className="w-full text-white font-semibold sm:text-2xl">Software</h1>
                        <p className="w-full text-white text-opacity-50">In my free time, I enjoy building things to solve problems and automate my life.</p>
                        <Lines />
                    </div>
                </div>
            </div>
        </div>
    )
}


