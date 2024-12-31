import { useEffect, useState } from "react";

const DefaultItems = [
    {name: "Home", Path: "/"},
    {name: "About", Path: "/about"},
    {name: "Github", Path: "https://github.com/scott-mescudi"},
]



export function NavBar({NavItems}) {
    if (!NavItems) {
        NavItems = DefaultItems;
    }

    if (NavItems.length >= 10) {
        console.error("Error: Too many NavItems, using default");
        NavItems = DefaultItems;  
    }

    const [time, SetTime] = useState("4:20");
    const [date, SetDate] = useState("Wednesday 28");
    const [logoPath, SetLogoPath] = useState("logos/logo1.svg");
    const [currPath, SetCurrPath] = useState("/");
    const [enter, setEnter] = useState(false)
    
    const getDateAndTime = () => {
        let currentDateTime = new Date();
        let formattedDate = currentDateTime.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'short',
            day: 'numeric',
        });

        let formattedTime = currentDateTime.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: false,
            timeZone: 'Europe/Amsterdam',
        });

        SetTime(formattedTime);
        SetDate(formattedDate);
    };

    const evalpath = (p1, p2) => {
        if (p1 === p2.toLowerCase()) {
            return "opacity-90";
        } else {
            return "opacity-50";
        }
    }


    const getRandomNumber = (x, y) => {
        return Math.floor(Math.random() * (y - x + 1)) + x;
    };

    const GetLogo = () => {
        let i = getRandomNumber(1, 13);
        let newLogoPath = `logos/logo${i}.svg`;

        if (logoPath !== newLogoPath) {
            SetLogoPath(newLogoPath);
        }
    };

    useEffect(() => {
        const timer = setInterval(getDateAndTime, 1000);
        const logoTimer = setInterval(GetLogo, 1000);
        let path =  window.location.pathname.replace("/", "")

        if (path != currPath) {
            SetCurrPath(path)
        }   
        
        getDateAndTime();

        return () => {
            clearInterval(timer);
            clearInterval(logoTimer);
        };
    }, []);

    return (
        <> 
        <style>
            {`
                .gill {
                    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
                }
            `}
        </style>

        <div id="navbar" className="w-6/12 h-16 dark:bg-black flex-row mt-4 items-center justify-center lg:justify-normal dark:text-white flex gill">
            <div className="h-7 w-7">
                <img className="h-full w-full" src={logoPath} alt="logo" />
            </div>

            <ul className="flex items-center  flex-row gap-3 ml-5 overflow-auto" onMouseEnter={() => {setEnter(true)}} onMouseLeave={() => {setEnter(false)}}>
                {NavItems.map((item, idx) => (
                    <li className={`${enter ? "opacity-50" : evalpath(currPath, item.name)} hover:opacity-90 duration-200 ease-in-out hover:bg-neutral-800 hover:px-1 hover:rounded-xl`} key={idx}>
                        <a href={item.Path}>{item.name}</a>
                    </li>
                ))}
            </ul>

            <div className="ml-auto opacity-50 lg:flex flex-row gap-5 group text-nowrap">
            <p>{date}</p>
            <p>{time}</p>
            </div>

        </div>
        </>
    );
}
