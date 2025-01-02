import { GoWidget, ReactWidget, TailwindWidget } from "../../components/Widgets";

const DefaultProjects = [
    { 
        title: "Stegano", 
        description: "A blazing-fast steganography library for Go, designed for seamless data concealment with high performance and reliability.", 
        image: "stegano.svg", 
        url: "",
        widgets: [<GoWidget />] 
    },
    { 
        title: "Portfolio Website", 
        description: "This site, a personal portfolio website to showcase my skills and projects.", 
        image: "website.png", 
        url: "", 
        widgets: [
            <ReactWidget key="react" />,
            <TailwindWidget key="tailwind" />
        ] 
    },

];

// there is something wrong with sizing, its not consistent. need to fix URGENT!!!!

export function Projects({projects = DefaultProjects}) {
    return (
        <>
        <div className="min-h-screen my-5 w-full flex items-center flex-col">
            <h1 className="w-6/12 text-white text-center font-semibold sm:text-4xl">NOTABLE PROJECTS</h1>
            <div className="flex flex-col mt-7 w-6/12 gap-5">
                {projects.map((item, idx) => (
                    <a key={idx} href={item.url}>
                        <div className="w-full sm:min-h-44 bg-neutral-950 rounded-xl overflow-hidden flex flex-row hover:scale-105 ease-in-out duration-200">
                            <div id="image" className="w-2/5 bg-neutral-900">
                                <img className="w-full h-full object-cover" src={item.image} alt="project image" />
                            </div>

                            <div className="flex flex-col w-full">
                                <div id="text" className="flex-1 flex flex-col p-4 gill">
                                    <h1 className="text-white text-2xl">{item.title}</h1>
                                    <p className="text-white text-opacity-50 ">{item.description}</p>
                                </div>

                                <div id="tech" className="flex-1 flex items-center p-3 gap-3">
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
