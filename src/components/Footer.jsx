export function Footer() {
    return (
        <>
            <div className="w-full relative flex justify-center bottom-0">
                <footer id="footer" className="h-full overflow-hidden sm:w-1/2 w-4/5 rounded-t-2xl justify-center dark:bg-neutral-950 flex bg-slate-300 gap-2 flex-row sm:px-8 py-5">
                    <ul className="font-mono md:flex sm:flex-col hidden dark:text-white opacity-50 ">
                        <li>Jay</li>
                        <li>Suriname</li>
                        <li>2007</li>
                    </ul>

                    <div className="h-1/12 md:flex w-0.5 sm:ml-7 hidden opacity-40 rounded-md dark:bg-white"></div>

                    <ul className="font-mono w-[80px] ml-3 dark:text-white ">
                        <li className="opacity-90 ">Links:</li>
                        <li className="opacity-50 hover:opacity-90 duration-200 ease-in-out "><a target="_blank" href="https://github.com/scott-mescudi">Github.1</a></li>
                        <li className="opacity-50 hover:opacity-90 duration-200 ease-in-out "><a target="_blank" href="https://github.com/gopher93185789">Github.2</a></li>
                    </ul>

                    <div className="h-1/12 sm:flex w-0.5 sm:ml-7 hidden opacity-40 rounded-md dark:bg-white"></div>

                    <ul className="font-mono ml-3 dark:text-white ">
                        <li className="opacity-90">Pages:</li>
                        <li className="opacity-50 hover:opacity-90 duration-200 ease-in-out"><a href="/home">Home</a></li>
                        <li className="opacity-50 hover:opacity-90 duration-200 ease-in-out"><a href="/about">About</a></li>
                        <li className="opacity-50 hover:opacity-90 duration-200 ease-in-out"><a href="/projects">Projects</a></li>
                    </ul>
                </footer>
            </div>
        
        </>
    )
}