import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/footer";
import "./globals.css";


export const metadata: Metadata = {
  title: "jayac",
  description: "Jay's personal website showcasing projects, portfolio, and more.",
  authors: [{name: "https://github.com/scott-mescudi"}],
  keywords: [
    "Jay",
    "Software Developer",
    "Web Developer",
    "Portfolio",
    "Projects",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "TypeScript"
  ],
  icons: {
    icon: [
      {
        url: "/infinity.ico",
        sizes: "any"
      },
      {
        url: "/icon.png", 
        type: "image/ico",
        sizes: "32x32"
      }
    ]
  }
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className="w-full dark:bg-black select-none bg-slate-100 flex flex-col items-center min-h-screen">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
