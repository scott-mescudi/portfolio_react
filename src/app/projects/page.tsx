import Link from "next/link";
import Image, { StaticImageData } from 'next/image'
import Timme  from '../../../public/portfolio/timme.png'
import Stegano from '../../../public/portfolio/stegano.svg'

import "./project.css"

interface Project {
    title: string
    description: string
    image: StaticImageData
    url: string
    tags: string[],
 
}

function ProjectCard({ item }: { item: Project }) {
    return(
        <>
            <div className="w-[full] h-[50vh] group relative shadow-inset overflow-hidden rounded-xl">
                <div className="absolute w-full h-full -z-10">
                    <Image className="h-full group-hover:opacity-50 duration-300 ease-in-out w-full object-cover" src={item.image} alt="stegano" />
                </div>
                <div className="w-full flex h-full ">
                    <div className="w-full mt-auto bg-gradient-to-t from-[#050505] sm:p-10 p-5">
                        <p className="text-white h-1/4 font-bold text-3xl">{item.title}</p>
                        <p className="text-white h-3/4 text-opacity-50 text-clamp-2">{item.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function Projects() {
    const projects:Project[] = [
        { 
            title: "Stegano", 
            description: "The fastest and most efficient steganography library available for Go.", 
            image: Stegano, 
            url: "https://github.com/scott-mescudi/stegano",
            tags: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"]
        },
        { 
            title: "Photography showcase", 
            description: "A website created for a photographer to showcase his personal work.", 
            image: Timme, 
            url: "https://timme-delta.vercel.app/",
            tags: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"]
        },
    ];


    return (
        <>
        <div id="projects" className="min-h-screen my-5 w-full  flex items-center flex-col">
            <div className="lg:grid grid-cols-2 mt-7 flex flex-col h-full sm:w-1/2 w-4/5 gap-5">
                {projects.map((item:Project, idx:number) => (
                    <Link key={idx} href={item.url} target="_blank">
                        <ProjectCard item={item} />                   
                    </Link>
                ))}
            </div>
        </div>
        </>
    );
}
