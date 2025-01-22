import { ReactElement } from "react";
import { GoWidget} from "../../components/Widgets";
import Link from "next/link";
import Image from 'next/image'

interface Project {
    title: string
    description: string
    image: string
    url: string
    widgets: ReactElement[]
}


export default function Projects() {
    const projects:Project[] = [
        { 
            title: "Stegano", 
            description: "A fast steganography library for Go, optimized for efficient data embedding and retrieval with performance in mind.", 
            image: "stegano.svg", 
            url: "https://github.com/scott-mescudi/stegano",
            widgets: [<GoWidget />], 
        },
    ];


    return (
        <>
        <div id="projects" className="min-h-screen my-5 w-full  flex items-center flex-col">
            <div className="flex flex-col mt-7 sm:w-1/2 w-4/5 gap-5">
                {projects.map((item:Project, idx:number) => (
                    <Link key={idx} href={item.url} target="_blank">

                        <div className="w-full lg:h-60 h-96 border border-white border-opacity-10  bg-black rounded-xl lg:flex-row overflow-hidden flex flex-col hover:scale-[102%] will-change-transform ease-in-out duration-500">

                            <div id="image" className="lg:w-2/5 lg:h-full w-full h-3/5 bg-neutral-900">
                                <Image width={1000} height={1000} priority className="w-full h-full object-cover" src={item.image} alt="project image" />
                            </div>

                            <div className="flex flex-col lg:w-3/5 w-full ">
                                <div id="text" className="h-1/2 flex flex-col p-4 gill">
                                    <h1 className="text-white text-2xl">{item.title}</h1>
                                    <p className="text-white text-opacity-50 lg:text-lg text-sm ">{item.description.length > 183 ? "too much text" : item.description}</p>
                                </div>

                                <div id="tech" className="overflow-hidden h-1/2 lg:flex hidden items-center p-3 gap-3">
                                        {item.widgets.map((Widget:ReactElement, index:number) => (
                                            <div key={index}>{Widget}</div>
                                        ))}
                                </div>
                            </div>

                        </div>
                        
                    </Link>
                ))}
            </div>
        </div>
        </>
    );
}
