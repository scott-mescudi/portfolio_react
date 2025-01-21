import React from "react";
import { TechGrid } from "../../components/Tech";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export function Home() {
    return (  
        <div className="min-h-screen w-full flex flex-col items-center ">
            <div id="info" className="sm:w-1/2 w-4/5 border border-white border-opacity-10 overflow-hidden rounded-xl bg-black px-6 text-white gill flex flex-row py-4 my-5">
                <div id="text" className="w-full h-full">
                    <h1 className="sm:text-5xl text-4xl font-bold">Hey, I'm Jay</h1>
                    <p className="text-white text-opacity-50 text-2xl mt-2">Rotterdam, Netherlands</p>
                    <p className="mt-3 text-lg">
                        <span className="text-white text-opacity-50">I’m a 17-year-old </span>
                        <span className="text-white text-opacity-90">full-stack developer</span>
                        <span className="text-white text-opacity-50"> with a passion for backend development.</span>
                    </p>
                    <div id="socials" className="flex gap-4 pt-4 mt-2 justify-center sm:justify-start">
                      
                        <a 
                            aria-label="Link to Github" 
                            className="hover:bg-neutral-800 justify-center h-8 w-8 duration-300 ease-in-out p-2 rounded-md flex items-center space-x-2" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            href="https://github.com/scott-mescudi">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>

                  
                        <a 
                            aria-label="Link to Instagram" 
                            className="justify-center hover:bg-neutral-800 h-8 w-8 duration-300 ease-in-out p-2 rounded-md flex items-center space-x-2" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            href="https://www.instagram.com/">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>

                  
                        <a 
                            aria-label="Link to Linkedin" 
                            className="justify-center hover:bg-neutral-800 h-8 w-8 duration-300 ease-in-out p-2 rounded-md flex items-center space-x-2" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            href="https://www.linkedin.com/feed/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>
            </div>
            
            <TechGrid />
        </div>
    );
}
