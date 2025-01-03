import { GoWidget, ReactWidget, TailwindWidget } from "../../components/Widgets";


const DefaultProjects = [
    { 
        title: "Stegano", 
        description: "A fast steganography library for Go, optimized for secure and efficient data embedding and retrieval with performance and scalability in mind.", 
        image: "stegano.svg", 
        url: "https://github.com/scott-mescudi/stegano",
        widgets: [<GoWidget />] 
    },

];





export function Projects({projects = DefaultProjects}) {
    return (
        <>
        <div className="min-h-screen my-5 w-full  flex items-center flex-col">
            <h1 className="w-6/12 text-white text-center font-semibold sm:text-4xl">NOTABLE PROJECTS</h1>
            <div className="flex flex-col mt-7 w-6/12 gap-5">
                {projects.map((item, idx) => (
                    <a key={idx} href={item.url} target="_blank">

                        <div className="w-full lg:h-60 h-96  bg-neutral-950 rounded-xl lg:flex-row overflow-hidden flex flex-col hover:scale-105 ease-in-out duration-200">

                            <div id="image" className="lg:w-2/5 lg:h-full w-full h-3/5 bg-neutral-900">
                                <img className="w-full h-full object-cover" src={item.image} alt="project image" />
                            </div>

                            <div className="flex flex-col lg:w-3/5 w-full ">
                                <div id="text" className="h-1/2 flex flex-col p-4 gill">
                                    <h1 className="text-white text-2xl">{item.title}</h1>
                                    <p className="text-white text-opacity-50 lg:text-lg text-sm ">{item.description.length > 183 ? "too much text" : item.description}</p>
                                </div>

                                <div id="tech" className="overflow-hidden h-1/2 lg:flex hidden items-center p-3 gap-3">
                                        {item.widgets.map((Widget, index) => (
                                            <div key={index}>{Widget}</div>
                                        ))}
                                </div>
                            </div>

                        </div>
                        
                    </a>
                ))}
            </div>
        </div>
        </>
    );
}
