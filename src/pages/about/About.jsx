import { Lines } from "../../animations/Lines";
import "./about.css";


export function About() {
    return (
        <>  
            <div id="about" className="w-full fade-in text-white overflow-hidden sm:flex hidden my-8 text-2xl flex-col items-center opacity-40 gap-5">
                <h1 className="w-6/12 text-center  font-semibold sm:text-4xl">BACKGROUND</h1>
                <p className="w-6/12 text-whitel">
                Hey! Ik ben een 17-jarige uit Suriname met een passie voor programmeren, 
                trading en gaming. Wat mij drijft, 
                is de motivatie om mijn toekomst veilig te stellen. Ik werk hard om ervoor te zorgen dat ik 
                later een comfortabel leven kan leiden met een gezin van vijf. Mijn grootste kracht? Doorzettingsvermogen. 
                Misschien ben ik gemiddeld in veel dingen, maar als ik iets écht wil, doe ik er alles aan om het te bereiken.
                </p>

                <p className="w-6/12 text-whitel">
                Ik koos deze opleiding omdat ik op de havo weinig leerde wat echt relevant voelde. 
                Mijn motivatie komt voort uit mijn passie voor technologie en het laten doen van een computer wat ik wil. 
                Vooral backend-ontwikkeling spreekt me aan, omdat ik geniet van het bouwen van systemen die efficiënt en krachtig werken. 
                Na deze opleiding wil ik mijn eigen techbedrijf starten. 
                Om dat te bereiken, werk ik aan mijn vaardigheden en verdiep ik me in de nieuwste backend-technieken. 
                Deze opleiding brengt me dichter bij mijn doel.
                </p>

                {/* <p className="w-6/12 text-white">
                Hello! I’m a passionate programmer from Suriname with a strong interest in backend development, technology, and problem-solving. My journey into programming began with a curiosity about how systems work and has grown into a commitment to mastering cutting-edge backend techniques. I take pride in my perseverance and the drive to achieve my goals, no matter the challenges.
                </p>

                <p className="w-6/12 text-white">
                I thrive on building efficient and powerful systems that make a real impact. My focus lies in constantly improving my skills and staying ahead with the latest developments in the tech industry. My long-term ambition is to establish my own tech company, where I can bring innovative ideas to life. Every step I take now is aimed at turning this vision into reality. Let's create the future together.
                </p> */}

            </div>

            <div id="about" className="w-full fade-in text-white overflow-hidden sm:hidden flex my-8 text-xl flex-col items-center opacity-40 gap-4">
                <h1 className="w-6/12 text-center text-white font-semibold sm:text-3xl">About me</h1>
                <p className="w-6/12 text-white">
                   Hoi! Ik ben 17 jaar en kom uit Suriname. Ik ben geïnteresseerd in programmeren, handelen en gamen. Mijn motivatie is een goed leven voor mijn familie te kunnen bieden. Als ik iets wil, ga ik er volledig voor.
                </p>
            </div>


            <div id="boxes" className="w-full h-full lg:h-screen flex gap-5 flex-col items-center">
                <div className="w-6/12 h-1/2 mt-5  bg-neutral-950 flex flex-col p-5 rounded-xl">
                        <h1 className="w-full text-white font-semibold sm:text-2xl">Cars</h1>
                        <p className="w-full text-white text-opacity-45">Ik hou van tunen en werken aan auto's.</p>
                        <div className="w-full h-full p-5 flex justify-center items-center ">
                            <img decoding="async" loading="lazy" src="gtr.png" className="rounded-md hover:scale-110 duration-500" />
                        </div> 
                </div>
                <div className="w-6/12 h-1/2 gap-5 mb-5 flex lg:flex-row flex-col">
                    <div className="w-full h-full p-5 bg-neutral-950 flex flex-col rounded-xl items-center">
                        <h1 className="w-full text-white font-semibold sm:text-2xl">Photography</h1>
                        <p className="w-full text-white text-opacity-45">Een van me recente hobbies.</p>
                        <div className="w-full h-full p-5 flex justify-center items-center ">
                            <img decoding="async" loading="lazy" src="go.gif" className="rounded-md py-1 hover:scale-110 duration-500" /> {/* 'fume' remove this for photos from camera with a filter or sum to make it dark */}
                        </div> 
                    </div>
                    <div className="w-full h-full p-5 bg-neutral-950 flex flex-col rounded-xl items-center">
                        <h1 className="w-full text-white font-semibold sm:text-2xl">Software Developer</h1>
                        <p className="w-full text-white text-opacity-45">In mijn vrije tijd geniet ik echt van softwareontwikkeling. Het is leuk om dingen te bouwen.</p>
                        <Lines />
                    </div>
                </div>
            </div>
        </>
    )
}