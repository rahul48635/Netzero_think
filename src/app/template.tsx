"use client"
import { IoIosContact, IoMdHome } from "react-icons/io";
import { FaBlog } from "react-icons/fa";
import { CiSquareQuestion } from "react-icons/ci";
import { Navbar } from "./components/navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import { DarkModeProvider } from "./context/DarkModeContext";
import type { items } from "./components/Footer";

export default function Template(
  { children }: { children: React.ReactNode }) {
         const items=[{
    title:"Home",
    logo: IoMdHome,
    href:"/"
  },
  {
    title:"About Us",
    logo: CiSquareQuestion,
    href:"/about"
  },
  {
    title:"Blogs",
    logo: FaBlog,
    href:"/blogs"
  },
  {
    title:"Contect Us",
    logo: IoIosContact,
    href:"/contact"
  },
]

const Footeritems: items = [
  {
    head: "Legal",
    Links: {
      "Terms and Conditions": "/T&C",
      "Privacy Policy": "/Privacy-Policy",
      "Disclaimer": "/Disclaimer",
      "Web Policies": "/Web-Policies",
    },
  },
  {
    head: "Company",
    Links: {
      "Home": "/",
      "About": "/about",
      "Blogs": "/blogs",
      "Contact Us": "/contact",
    },
  },
];

 
        return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            <DarkModeProvider>
            <div className="">
                <Image src={'/Netzerothink.png'} alt="logo" width={300} height={300} className="mt-30 absolute left-[5rem] top-[-5rem]"/>
                <Navbar items={items} className="z-10"/>
            </div>
            {children}
            <div className="w-full h-full bg-black">
                <Footer items={Footeritems}/>
            </div>
            </DarkModeProvider>
        </div>)
}