import { Lines } from "../../animations/Lines";
import "./about.css";


export function About() {
    return (
        <>  
            <div id="about" className="w-full fade-in text-white overflow-hidden sm:flex hidden my-8 text-2xl flex-col items-center gap-5">
                <h1 className="w-6/12 text-center font-semibold sm:text-4xl">BACKGROUND</h1>
                <p className=" opacity-40 w-6/12 text-whitel">
                Hey! I’m a 17-year-old born in Suriname with a passion for programming, trading, and gaming. What drives me is the motivation to secure my future. I work hard to ensure I can lead a comfortable life later on with a family of five. My greatest strength? Perseverance. I might be average at many things, but when I truly want something, I give it my all to achieve it.
                </p>

                <p className=" opacity-40 w-6/12 text-whitel">
                I chose this program because, during my time in high school, I felt like I wasn’t learning much that truly felt relevant.  
                My motivation stems from my passion for technology and making a computer do what I want.  
                I’m particularly drawn to backend development because I enjoy building systems that are efficient and powerful.  
                After completing this program, I aim to start my own tech company.  
                To achieve that, I’m honing my skills and diving into the latest backend technologies.  
                This program is bringing me closer to my goal.
                </p>

                {/* <p className="w-6/12  opacity-40 text-white">
                Hello! I’m a passionate programmer from Suriname with a strong interest in backend development, technology, and problem-solving. My journey into programming began with a curiosity about how systems work and has grown into a commitment to mastering cutting-edge backend techniques. I take pride in my perseverance and the drive to achieve my goals, no matter the challenges.
                </p>

                <p className="w-6/12  opacity-40 text-white">
                I thrive on building efficient and powerful systems that make a real impact. My focus lies in constantly improving my skills and staying ahead with the latest developments in the tech industry. My long-term ambition is to establish my own tech company, where I can bring innovative ideas to life. Every step I take now is aimed at turning this vision into reality. Let's create the future together.
                </p> */}

            </div>

            <div id="about" className="w-full fade-in text-white overflow-hidden sm:hidden flex my-8 text-xl flex-col items-center opacity-40 gap-4">
                <h1 className="w-6/12 text-center text-white font-semibold sm:text-3xl">About me</h1>
                <p className="w-6/12 text-white">
                   Hello! I’m a passionate programmer from Suriname with a strong interest in backend development, technology, and problem-solving. My journey into programming began with a curiosity about how systems work and has grown into a commitment to mastering cutting-edge backend techniques. I take pride in my perseverance and the drive to achieve my goals, no matter the challenges.
                </p>
            </div>


            <div id="boxes" className="w-full h-full lg:h-screen flex gap-5 flex-col items-center">
                <div className="w-6/12 h-1/2 mt-5  bg-neutral-950 flex flex-col p-5 rounded-xl">
                        <h1 className="w-full text-white font-semibold sm:text-2xl">Cars</h1>
                        <p className="w-full text-white text-opacity-45">I love tuning and working on cars.</p>
                        <div className="w-full h-full p-5 flex justify-center items-center ">
                            <img decoding="async" loading="lazy" src="gtr.png" className="rounded-md hover:scale-110 duration-500" />
                        </div> 
                </div>
                <div className="w-6/12 h-1/2 gap-5 mb-5 flex lg:flex-row flex-col">
                    <div className="w-full h-full p-5 bg-neutral-950 flex flex-col rounded-xl items-center">
                        <h1 className="w-full text-white font-semibold sm:text-2xl">Photography</h1>
                        <p className="w-full text-white text-opacity-45">One of my recent hobbies.</p>
                        <div className="w-full h-full p-5 flex justify-center items-center ">
                            <img decoding="async" loading="lazy" src="go.gif" className="rounded-md py-1 hover:scale-110 duration-500" /> {/* 'fume' remove this for photos from camera with a filter or sum to make it dark */}
                        </div> 
                    </div>
                    <div className="w-full h-full p-5 bg-neutral-950 flex flex-col rounded-xl items-center">
                        <h1 className="w-full text-white font-semibold sm:text-2xl">Software</h1>
                        <p className="w-full text-white text-opacity-45">In my free time, I really enjoy software development. I love building things.</p>
                        <Lines />
                    </div>
                </div>
            </div>
        </>
    )
}