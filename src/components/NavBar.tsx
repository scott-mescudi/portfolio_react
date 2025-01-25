'use client'
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import Link from "next/link";

interface NavItem {
    name: string
    Path: string
}

export function NavBar() {
    const NavItems: NavItem[] = [
        {name: "Home", Path: "/"},
        {name: "Projects", Path: "/projects"},
    ]

    const [time, SetTime] = useState("");
    const [date, SetDate] = useState("");
    const [logoPath, SetLogoPath] = useState("logos/logo1.svg");
    const pathname = usePathname();
    const [currPath, SetCurrPath] = useState(pathname === "/" ? "Home" : pathname.slice(1));
    const [enter, setEnter] = useState(false)
    
    const getDateAndTime = () => {
        const currentDateTime = new Date();
        const formattedDate = currentDateTime.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'short',
            day: 'numeric',
        });

        const formattedTime = currentDateTime.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: false,
            timeZone: 'Europe/Amsterdam',
        });

        SetTime(formattedTime);
        SetDate(formattedDate);
    };

    const evalpath = (p1: string, p2: string) => {
        if (p1.toLowerCase() === p2.toLowerCase()) {
            return "text-opacity-90";
        } else {
            return "text-opacity-50 ";
        }
    }


    const getRandomNumber = (x: number, y: number) => {
        return Math.floor(Math.random() * (y - x + 1)) + x;
    };

    const GetLogo = () => {
        const i = getRandomNumber(1, 15);
        const newLogoPath = `/logos/logo${i}.svg`; 

        if (logoPath !== newLogoPath) {
            SetLogoPath(newLogoPath);
        }
    };

    const HandlePage = (path:string) => {
        SetCurrPath(path)
    }

    useEffect(() => {
        const timer = setInterval(getDateAndTime, 1000);
        const logoTimer = setInterval(GetLogo, 3000);
        
        getDateAndTime();

        return () => {
            clearInterval(timer);
            clearInterval(logoTimer);
        };
    }, []);


    useEffect(() => {
        SetCurrPath(pathname === "/" ? "Home" : pathname.slice(1));
    }, [pathname]);


    return (
        <> 
        <style>
            {`
                .gill {
                    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
                }
            `}
        </style>
        {/* maybe add border 'border-t-0 border-b-white border-x-white border-opacity-15' to make it more visible */}
        <div id="navbar" className="sm:w-[51%] sm:px-5 pr-3 rounded-b-xl w-[85%] h-16 sticky top-0 z-50 backdrop-blur-lg  flex-row  items-center justify-center lg:justify-normal dark:text-white flex gill">
            <div className="h-7 w-7 sm:flex hidden">
                <img className="h-full w-full" src={logoPath} alt="logo" />
            </div>

            <ul className="flex items-center flex-row sm:ml-5 m-0 overflow-none" onMouseEnter={() => {setEnter(true)}} onMouseLeave={() => {setEnter(false)}}>
                {NavItems.map((item:NavItem , idx:number) => (
                    <li  key={idx}>
                        <Link className={`${enter ? "text-opacity-50 " : evalpath(currPath, item.name)} hover:text-opacity-100 duration-200 ease-out bg-neutral-950 px-3 py-2 border border-white text-white border-opacity-0 bg-opacity-0 hover:border-opacity-10 hover:bg-opacity-100 rounded-md`} onClick={ () => HandlePage(item.name)} href={item.Path}>{item.name}</Link>
                    </li>
                ))}
            </ul>

            <div className="ml-auto flex flex-row gap-5 group text-nowrap">
            <p className="md:flex hidden text-opacity-50 text-white cursor-default">{date}</p>
            <p className="text-opacity-50 text-white hover:text-opacity-90 duration-300 ease-in-out cursor-default">{time}</p>
            </div>

        </div>
        </>
    );
}
