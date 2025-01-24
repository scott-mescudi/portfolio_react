import Link from "next/link";

export function Footer() {
    return (
        <>
            <div className="w-full relative flex justify-center bottom-0">
                <footer id="footer" className="h-full border border-white border-b-0 border-opacity-10 overflow-hidden sm:w-1/2 w-4/5 rounded-t-2xl justify-center bg-black flex gap-2 flex-row sm:px-8 py-5">
                    <ul className="font-mono md:flex sm:flex-col hidden text-white opacity-50 ">
                        <li>Jay</li>
                        <li>sxm</li>
                    </ul>

                    <div className="h-1/12 md:flex w-0.5 sm:ml-7 hidden opacity-40 rounded-md bg-white"></div>

                    <ul className="font-mono w-[80px] ml-3 text-white ">
                        <li className="opacity-90 ">Links:</li>
                        <li className="opacity-50 hover:opacity-90 duration-200 ease-in-out "><Link target="_blank" href="https://github.com/scott-mescudi">Github.1</Link></li>
                        <li className="opacity-50 hover:opacity-90 duration-200 ease-in-out "><Link target="_blank" href="https://github.com/gopher93185789">Github.2</Link></li>
                    </ul>

                    <div className="h-1/12 sm:flex w-0.5 sm:ml-7 hidden opacity-40 rounded-md bg-white"></div>

                    <ul className="font-mono ml-3 text-white ">
                        <li className="opacity-90">Pages:</li>
                        <li className="opacity-50 hover:opacity-90 duration-200 ease-in-out"><Link href="/">Home</Link></li>
                        <li className="opacity-50 hover:opacity-90 duration-200 ease-in-out"><Link href="/about">About</Link></li>
                        <li className="opacity-50 hover:opacity-90 duration-200 ease-in-out"><Link href="/projects">Projects</Link></li>
                    </ul>
                </footer>
            </div>
        
        </>
    )
}