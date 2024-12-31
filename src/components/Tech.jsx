const Defaulttech = [
    {name: "Go", path: "logos/go.svg", description: "Efficient, concurrent typed language."},
    {name: "React", path: "logos/react.svg", description: "Javscript Library."},
    {name: "Tailwind CSS", path: "logos/tailwind.svg", description: "Utility-first CSS framework."},
    {name: "PostgreSQL", path: "logos/logo12.svg", description: "Powerful relational database system."},
    {name: "Html", path: "logos/html.svg", description: "Building blocks of the web."},
    {name: "TypeScript", path: "logos/typescript.svg", description: "Statically typed superset of JavaScript."},  
    {name: "C", path: "logos/c.svg", description: "Low-level programming language."},
    {name: "Docker", path: "logos/docker.svg", description: "Platform for containerizing applications."},
]

export function TechGrid({tech = Defaulttech, name = "Technologies i use" }) {
    return (
        <>
        <style>
            {`
                .gill {
                    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
                }
            `}
        </style>

        <div className="w-1/2 flex flex-col my-5 items-center rounded-xl bg-neutral-950 p-4 gap-4 overflow-y-auto">
            <h1 className="text-white w-full text-center gill font-semibold sm:text-3xl">{name}</h1>
            <div className="relative h-full w-full items-center overflow-hidden pb-3 flex flex-col xl:grid xl:grid-cols-2 px-3 gap-6">
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