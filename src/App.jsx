import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Footer } from "./components/Footer"
import { About } from "./pages/about/About"
import { Home } from "./pages/home/Home"
import { Projects } from "./pages/projects/Projects"


export default function App() {
  return (
    <>
      <div className="w-full dark:bg-black bg-slate-100 flex flex-col items-center overflow-y-auto min-h-screen">
            <NavBar />

            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />}  />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />}  />
              </Routes>
            </BrowserRouter>
            <Footer />
      </div>
    </>
  )
}
