import Link from "next/link";
import Image from 'next/image'

interface Project {
    title: string
    description: string
    image: string
    url: string
    tags: string[],
 
}


export default function Projects() {
    const projects:Project[] = [
        { 
            title: "Stegano", 
            description: "A fast steganography library for Go, optimized for efficient data embedding and retrieval with performance in mind.", 
            image: "/portfolio/stegano.svg", 
            url: "https://github.com/scott-mescudi/stegano",
            tags: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"]
        },
        { 
            title: "Photography showcase", 
            description: "A website built for a photgrapher to shwo his personla work", 
            image: "/portfolio/timme.png", 
            url: "https://timme-delta.vercel.app/",
            tags: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"]
        },
        
    ];


    return (
        <>
        <div id="projects" className="min-h-screen my-5 w-full  flex items-center flex-col">
            <div className="flex flex-col mt-7 sm:w-1/2 w-4/5 gap-5">
                {projects.map((item:Project, idx:number) => (
                    <Link key={idx} href={item.url} target="_blank">
                        <div className="w-full relative grid grid-cols-1 aspect-video border border-white group border-opacity-10 bg-black rounded-xl overflow-hidden ">
                            <div className="absolute W">
                                <Image className="object-cover" src={item.image} width={1920} height={1080} alt={item.title} />
                            </div>
                            
                            <div className="w-full mt-auto will-change-transform bg-black group group-hover:bg-opacity-80 duration-300 ease-in-out bg-opacity-50 backdrop-blur-md">
                                <div className="w-full h-full px-5 py-3 flex flex-col ">
                                    <div className="flex flex-row gap-5">
                                        <h1 className="text-white text-sm text-opacity-80 duration-300 ease-in-out delay-200 group-hover:text-opacity-100 font-bold sm:text-3xl">{item.title}</h1>
                                        <div className="flex flex-row gap-3 items-start">
                                            {item.tags.map((item:string, idx:number) => (
                                                <Image key={idx} alt={item} width={50} height={50} className="xl:size-10 size-5" src={item} />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-white duration-300 ease-in-out delay-200 group-hover:text-opacity-50 text-opacity-30 xl:text-lg text-xs truncate text-ellipsis">{item.description}</p>
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



// <div className="w-full h-full px-5 py-3 flex flex-col ">
//     <div className="flex flex-row gap-5">
//         <h1 className="text-white text-sm font-bold sm:text-3xl">{item.title}</h1>
//         <div className="flex flex-row gap-3 items-start">
//             {item.tags.map((item:string, idx:number) => (
//                 <Image key={idx} alt={item} width={50} height={50} className="xl:size-10 size-5" src={item} />
//             ))}
//         </div>
//     </div>
//     <p className="text-white text-opacity-50 xl:text-lg text-xs truncate text-ellipsis">{item.description}</p>
// </div>