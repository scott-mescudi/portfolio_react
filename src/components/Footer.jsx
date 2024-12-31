export function Footer() {
    return (
        <>
            <footer id="footer" className="h-1/12 w-6/12 rounded-t-2xl overflow-hidden justify-center dark:bg-neutral-950  bg-slate-300 md:flex hidden gap-2  bottom-0 flex-row sm:px-8 py-5">
            <ul className="font-mono sm:flex sm:flex-col hidden dark:text-white opacity-50 ">
                <li>Anish Chhitu</li>
                <li>Suriname</li>
                <li>2007</li>
            </ul>

             <div className="h-1/12 sm:flex w-0.5 sm:ml-7 hidden opacity-40 rounded-md dark:bg-white"></div>

            <ul className="font-mono w-[80px] ml-3 dark:text-white ">
                <li className="opacity-90 ">Links:</li>
                <li className="opacity-50 hover:opacity-90 duration-200 ease-in-out "><a href="https://github.com/scott-mescudi">Github.1</a></li>
                <li className="opacity-50 hover:opacity-90 duration-200 ease-in-out "><a href="https://github.com/gopher93185789">Github.2</a></li>
            </ul>

             <div className="h-1/12 sm:flex w-0.5 sm:ml-7 hidden opacity-40 rounded-md dark:bg-white"></div>

            <ul className="font-mono ml-3 dark:text-white ">
                <li className="opacity-90">Pages:</li>
                <li className="opacity-50 hover:opacity-90 duration-200 ease-in-out"><a href="/home">Home</a></li>
                <li className="opacity-50 hover:opacity-90 duration-200 ease-in-out"><a href="#">About</a></li>
                <li className="opacity-50 hover:opacity-90 duration-200 ease-in-out"><a href="#">Projects</a></li>
            </ul>

            </footer>
        </>
    )
}