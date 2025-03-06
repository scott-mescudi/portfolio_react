"use client";

import MagnetLines from "@/components/Magnet";
import { Model } from "@/components/Model";
import Orb from "@/components/Orb";

// const Normal = () => (
//   <div className="sm:w-1/2 w-4/5 mt-3 h-fit select-none flex 1xl:flex-row 2xl:flex-row flex-col gap-5">
//     <div className="w-full  flex flex-col border gap-5 border-white border-opacity-10 p-5 text-white rounded-xl">
//       <h1 className="w-full text-white font-semibold sm:text-2xl">About</h1>
//       <div className="flex flex-col gap-1">
//         <p className="w-full  text-white tracking-wide text-opacity-35">
//           TODAY
//         </p>
//         <p className="w-full text-lg text-white text-opacity-50">
//           I am a freelance full-stack developer specializing in backend
//           development with Go. On the frontend, I work with Next.js and Tailwind
//           to create clean, functional interfaces. Outside of coding, I explore
//           3D modeling and enjoy making music, constantly pushing myself to grow
//           creatively and expand my skill set.
//         </p>
//       </div>

//       <div className="flex flex-col gap-1">
//         <p className="w-full  text-white tracking-wide text-opacity-35">
//           CHILDHOOD
//         </p>
//         <p className="w-full text-lg text-white text-opacity-50">
//           Growing up, I was drawn to trading, gaming, and playing guitar.
//           Trading taught me discipline and how to make thoughtful decisions,
//           starting when I was just 13. At 14, I became interested in programming
//           as I wanted to develop an algorithm to improve my trading system. This
//           sparked my journey into the tech world.
//         </p>
//       </div>

//       <div className="flex flex-col gap-1">
//         <p className="w-full  text-white tracking-wide text-opacity-35">
//           GROWTH
//         </p>
//         <p className="w-full text-lg text-white text-opacity-50">
//           I got into backend development by teaching myself while working on
//           that trading algorithm. The Go programming language really ignited my
//           passion for programming. It introduced me to important concepts like
//           multithreading, memory management, and pointers. What excites me most
//           about backend development is building systems that millions of people
//           use every second. I love optimizing these systems to be as fast as
//           possible, and I have a particular fondness for low-level development.
//         </p>
//       </div>

//       <div className="flex flex-col gap-1">
//         <p className="w-full text-white tracking-wide text-opacity-35">GOAL</p>
//         <p className="w-full text-lg text-white text-opacity-50">
//           My ultimate goal is to build my own startup, where I can apply
//           everything I’ve learned and continue growing. I have a unique approach
//           to development: I start by building a basic implementation and then
//           spend hours profiling and optimizing the code. I dive deep into stack
//           traces and enjoy the learning process, knowing that every challenge
//           helps me grow as a developer.
//         </p>
//       </div>
//     </div>
//   </div>
// );

const School = () => (
  <div className="sm:w-1/2 w-4/5 mt-3 h-fit select-none flex 1xl:flex-row 2xl:flex-row flex-col gap-5">
    <div className="w-full flex flex-col border gap-5 border-white border-opacity-10 p-5 text-white rounded-xl">
      <h1 className="w-full text-white font-semibold sm:text-2xl">
        Mijn Toekomst
      </h1>

      <div className="flex flex-col gap-1">
        <p className="w-full text-white tracking-wide text-opacity-35">DOEL</p>
        <p className="w-full text-lg text-white text-opacity-50">
          Mijn doel met deze opleiding is om de kennis en vaardigheden te
          ontwikkelen die nodig zijn om mijn eigen softwarebedrijf te starten.
          Ik wil me specialiseren in JavaScript en TypeScript, omdat deze talen
          breed inzetbaar zijn en essentieel zijn voor moderne web- en
          softwareontwikkeling.
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <p className="w-full text-white tracking-wide text-opacity-35">
          VAARDIGHEDEN
        </p>
        <p className="w-full text-lg text-white text-opacity-50">
          Tijdens mijn opleiding wil ik niet alleen mijn technische vaardigheden
          verbeteren, maar ook werken aan mijn soft skills, zoals teamwork en
          communicatie. Dit zal mij helpen om efficiënter samen te werken met
          anderen en mijn toekomstige bedrijf succesvol te runnen.
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <p className="w-full text-white tracking-wide text-opacity-35">
          INSPIRATIE
        </p>
        <p className="w-full text-lg text-white text-opacity-50">
          Wat mij inspireerde om software development te kiezen, is de vrijheid
          om te kunnen maken wat ik wil. Programmeren stelt mij in staat om niet
          alleen apps te bouwen die mijn leven en dat van anderen verbeteren,
          maar ook om problemen op te lossen op manieren die ik zelf kan
          bedenken.
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <p className="w-full text-white tracking-wide text-opacity-35">
          INTERESSEGEBIEDEN
        </p>
        <p className="w-full text-lg text-white text-opacity-50">
          Mijn interessegebieden binnen softwareontwikkeling liggen vooral bij
          high-throughput systemen en low-level programming. Dit blijkt uit mijn
          projecten zoals <i>Stegano</i>, een extreem snelle
          steganografie-bibliotheek in Go, en <i>Gauth</i>, een authentication
          library waar ik momenteel aan werk.
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <p className="w-full text-white tracking-wide text-opacity-35">
          MOTIVATIE
        </p>
        <p className="w-full text-lg text-white text-opacity-50">
          Wat mij motiveert om door te gaan, zelfs als het moeilijk wordt, is
          het besef dat er altijd meerdere manieren zijn om een probleem op te
          lossen. In softwareontwikkeling is er nooit slechts één juiste
          oplossing, en dat maakt het voor mij uitdagend en interessant.
        </p>
      </div>
    </div>
  </div>
);



export default function About() {

  return (
    <div className="min-h-screen flex flex-col  items-center w-full">
       <School />
      <div
        id="boxes"
        className="w-full h-full 2xl:h-screen flex gap-3 flex-col items-center"
      >
        <div className="sm:w-1/2 border border-white border-opacity-10 w-4/5 h-80 2xl:h-1/2 mt-5 bg-black flex flex-col py-5 rounded-xl">
          <h1 className="w-full text-white px-5 font-semibold sm:text-2xl">
            Cars
          </h1>
          <p className="w-full text-white px-5 text-opacity-50">
            I love tuning and working on cars.
          </p>
          <div className="w-full relative h-full py-5 flex justify-center items-center ">
            <Model />
          </div>
        </div>

        <div className="sm:w-1/2 w-4/5 h-1/2 gap-3 mb-5 flex 2xl:flex-row flex-col">
          <div className="w-full overflow-hidden border border-white border-opacity-10 h-80 2xl:h-full p-5 bg-black flex flex-col rounded-xl items-center">
            <h1 className="w-full text-white font-semibold sm:text-2xl">
              Music production
            </h1>
            <p className="w-full text-white text-opacity-50">
              One of my recent hobbies.
            </p>
            <div className="w-full h-full p-5 flex relative justify-center overflow-hidden items-center ">
              <Orb />
            </div>
          </div>
          <div className="w-full border  border-white border-opacity-10 h-80 2xl:h-full overflow-hidden p-5 bg-black flex flex-col rounded-xl items-center">
            <h1 className="w-full text-white font-semibold sm:text-2xl">
              Software
            </h1>
            <p className="w-full text-white text-opacity-50">
              In my free time, I enjoy building things to solve problems and
              automate my life.
            </p>

            <MagnetLines
              rows={8}
              columns={9}
              containerSize="100%"
              lineColor="white"
              lineWidth="0.2vmin"
              lineHeight="3vmin"
              baseAngle={0}
              style={{
                marginTop: "1.25rem",
                paddingBottom: "1.25rem",
                opacity: "80%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
