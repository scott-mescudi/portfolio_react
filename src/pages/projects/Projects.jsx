const DefaultProjects = [
    {title: "Stegano", description: "A blazing-fast steganography library for Go, designed for seamless data concealment with high performance and reliability.", image: "stegano.png", url: "/projects/stegano"},
    {title: "Stegano", description: "A blazing-fast steganography library for Go, designed for seamless data concealment with high performance and reliability.", image: "stegano.png", url: "/projects/stegano"},
    {title: "Stegano", description: "A blazing-fast steganography library for Go, designed for seamless data concealment with high performance and reliability.", image: "stegano.png", url: "/projects/stegano"},
    {title: "Stegano", description: "A blazing-fast steganography library for Go, designed for seamless data concealment with high performance and reliability.", image: "stegano.png", url: "/projects/stegano"},
    {title: "Stegano", description: "A blazing-fast steganography library for Go, designed for seamless data concealment with high performance and reliability.", image: "stegano.png", url: "/projects/stegano"},

]


export function Projects({projects = DefaultProjects}) {
    return (
        <div className="min-h-screen my-5 w-full flex items-center flex-col ">
            <h1 className="w-6/12 text-white text-center font-semibold sm:text-4xl">NOTABLE PROJECTS</h1>
            <div className="flex flex-col mt-7 w-6/12 gap-5 ">
            {projects.map((item, idx) => (
                <a>
                    <div key={idx} className="w-full bg-neutral-950 rounded-xl overflow-hidden flex flex-row hover:scale-105 ease-in-out duration-200">
                        <div id="image" className="w-2/5 bg-slate-800">
                                <img className="w-full h-full object-cover" src="stegano.png"></img>
                        </div>

                        <div className="flex flex-col w-full">
                            <div id="text" className="h-4/6 flex flex-col p-4 gill">
                                <h1 className="text-white text-2xl">{item.title}</h1>
                                <p className="text-white text-opacity-50 ">{item.description}</p>
                            </div>

                            <div id="tech" className="h-2/6 flex flex-col p-4 gill bg-white">

                            </div>
                        </div>
                    </div>
                </a>
            ))}

            </div>
        </div>
    )
}
