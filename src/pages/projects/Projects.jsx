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
            <div className="flex flex-col mt-7 w-6/12 gap-10 p-4">
            {projects.map((item, idx) => (
                    <div key={idx} className="w-full rounded-xl bg-neutral-950">
                        <a href={item.url}><img src={item.image} alt="stegano" className="w-full h-1/2 rounded-t-xl"  /></a>
                        <div className="py-4 px-8">
                            <h1 className="text-white text-2xl font-semibold">{item.title}</h1>
                            <p className="text-white text-sm mt-2 opacity-50">{item.description}</p>
                        </div>
                    
                        <div className="w-full px-8 my-5 flex flex-row gap-4">
                            <div class="h-16 sm:flex hidden w-20 bg-neutral-950 rounded-lg p-3 justify-center items-center">
                                <img src="/logos/go.svg"class="h-full" />
                            </div>
                        </div>
                    </div>
            ))}

            </div>
        </div>
    )
}
