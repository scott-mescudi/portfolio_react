const DefaultTech = [
    {name: "Go", path: "logos/go.svg", description: "My go-to programming language."},
    {name: "React", path: "logos/logo14.svg", description: "My most used javascript Library."},
    {name: "Tailwind CSS", path: "logos/logo15.svg", description: "Utility-first CSS framework."},
    {name: "PostgreSQL", path: "logos/logo12.svg", description: "The most reliable database i use."},
    {name: "Html", path: "logos/html.svg", description: "Building blocks of the web."},
    {name: "TypeScript", path: "logos/typescript.svg", description: "Statically typed superset of JavaScript."},  
    {name: "C", path: "logos/c.svg", description: "For my high-performance needs."},
    {name: "Docker", path: "logos/docker.svg", description: "For containerizing my applications."},
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

        <div id="stack" className="sm:w-1/2 w-4/5 flex flex-col my-5 items-center rounded-xl bg-neutral-950 p-4 gap-4 overflow-y-auto">
            <h1 className="text-white w-full text-center gill font-semibold sm:text-3xl">{name}</h1>
            
            <div className="relative h-full w-full items-center overflow-hidden pb-3 py-2 flex flex-col 2xl:grid 2xl:grid-cols-2  px-6 gap-6">
                {tech.map((item, idx) => (
                    <div key={idx} class="bg-neutral-900 rounded-xl h-20 w-full p-2 flex flex-row items-center hover:scale-105 px-4 duration-300 ease-in-out">
                        <div class="sm:w-16 w-full items-center h-16 flex justify-center rounded-md ">
                            <img src={item.path} class="h-full" />
                        </div>

                        <div className="flex flex-col text-nowrap text-ellipsis ml-4">
                            <p class="text-white sm:flex hidden gill">{item.name}</p>
                            <p class="text-white md:flex hidden gill text-sm opacity-50">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}