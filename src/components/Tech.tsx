const DefaultTech = [
    {name: "Go", path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg", description: "My favorite and most used programming language."},
    {name: "Next.js", path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", description: "Makes react better with SSR and SSG."},
    {name: "React", path: "logos/logo14.svg", description: "Dynamic UIs made easy."},
    {name: "Tailwind CSS", path: "logos/logo15.svg", description: "Because writing CSS from scratch causes nightmares."},
    {name: "Three.js", path: "logos/Threejs.svg", description: "Bringing 3D models to the web."},
    {name: "PostgreSQL", path: "logos/logo12.svg", description: "The most reliable database i use."},
    {name: "Html", path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", description: "The backbone of the web."},
    {name: "TypeScript", path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", description: "Javascript but safer"},  
    {name: "C", path: "logos/c.svg", description: "When i need performance-critical applications."},
    {name: "Docker", path: "https://devicon-website.vercel.app/api/docker/original.svg", description: "Makes deployment so easy"},
]

export function TechGrid({tech = DefaultTech, name = "Technologies i use" }) {
    return (
        <>
        <style>
            {`
                .gill {
                    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
                }
            `}
        </style>

        <div id="stack" className="sm:w-1/2 border border-white border-opacity-10 py-5 w-4/5 flex flex-col items-center rounded-xl bg-black gap-4 overflow-y-auto">
            <h1 className="text-white w-full text-center gill font-semibold sm:text-3xl">{name}</h1>
            
            <div className="relative h-full w-full items-center overflow-hidden pb-3 py-2 lg:grid grid-cols-2 flex flex-col  px-9 gap-6">
                {tech.map((item, idx) => (
                    <div key={idx} className="bg-neutral-950 rounded-xl h-20  w-full p-2 flex flex-row items-center hover:scale-[102%] will-change-transform px-4 duration-300 ease-in-out">
                        <div className="sm:w-16 w-full items-center h-16 flex justify-center rounded-md ">
                            <img draggable="false" src={item.path} alt={item.name} className="h-full" />
                        </div>

                        <div className="flex flex-col overflow-hidden ml-4">
                            <p className="text-white w-full sm:flex hidden gill">{item.name}</p>
                            <p className="text-white w-full md:flex hidden gill text-sm opacity-50 truncate text-ellipsis">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}