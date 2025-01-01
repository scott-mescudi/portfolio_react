import { TechGrid } from "../../components/Tech";

export function Home() {
    return (  
        <div className="min-h-screen w-full flex flex-col items-center ">
            <div id="info" className="w-1/2 rounded-xl bg-neutral-950   px-6 text-white gill flex flex-col py-4 my-5">
                <h1 className="text-5xl font-bold">Hey, I'm Jay</h1>
                <p className="opacity-50 text-2xl mt-2">Rotterdam, Netherlands</p>
                <p className="mt-3 text-lg">
                    <span className="opacity-50">I’m a 17-year-old </span>
                    <span className="opacity-90">full-stack developer</span>
                    <span className="opacity-50"> with a passion for backend development.</span>
                </p>
                <div id="socials" className="flex gap-4 pt-4 mt-2 justify-center sm:justify-start">
                    <a className="hover:bg-neutral-800 justify-center h-8 w-8 duration-300 ease-in-out p-2 rounded-md flex items-center space-x-2" target="_blank" href="https://github.com/scott-mescudi">
                        <i className="fab fa-github"></i>
                    </a>

                    <a target="_blank" href="https://www.instagram.com/" className="justify-center hover:bg-neutral-800 h-8 w-8 duration-300 ease-in-out p-2 rounded-md flex items-center space-x-2">
                        <i className="fab fa-instagram"></i>
                    </a>

                    <a target="_blank" href="https://www.linkedin.com/feed/" className="justify-center hover:bg-neutral-800 h-8 w-8 duration-300 ease-in-out p-2 rounded-md flex items-center space-x-2">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
            
            <TechGrid />
        </div>
    );
}
