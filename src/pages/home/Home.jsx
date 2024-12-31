import { TechGrid } from "../../components/Tech";


export function Home() {
    return (  
        <>
            <div className="w-1/2 bg-black text-white gill flex flex-col py-4 my-5">
                <h1 className="text-5xl font-bold">Hey, im Jay</h1>
                <p className="opacity-50 text-2xl">Rotterdam, Netherlands</p>
                <p className="mt-3"><span className="opacity-50">I’m a 17-year-old </span><span className="opacity-90">full-stack developer</span> <span className="opacity-50"> with a passion for backend development.</span></p>
            </div>
            <TechGrid />
        </>
    );
}