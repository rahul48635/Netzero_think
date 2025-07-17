"use client"
import {  IoMdBriefcase, IoMdHome, IoMdMoon } from "react-icons/io";
import { CiSquareQuestion } from "react-icons/ci";
import { Navbar } from "./components/navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import type { items } from "./components/Footer";
import { useDarkMode } from "./context/DarkModeContext";
import { IoSunny } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { MobileNavbar } from "./components/mobilenavbar";
import useMediaQuery from "./hooks/useMediaQuery";
import { GrServices } from "react-icons/gr";
import Community_logo from "./components/community_logo";

export default function Template(
  { children }: { children: React.ReactNode }) {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const {dark,setDark}=useDarkMode();

  const items=[{
    title:"Home",
    logo: IoMdHome,
    href:"/"
  },
  {
    title:"Solutions & Services",
    logo: GrServices ,
    href:"/services"
  },
  {
    title:"About Us",
    logo: CiSquareQuestion,
    href:"/about"
  },
  {
    title:"Career",
    logo: IoMdBriefcase ,
    href:"/Jobs"
  },
  {
    title:"Climate Innovation Community",
    logo:Community_logo ,
    href:"mailto:support@netzerothink.com?subject=New Service Request from [Name]&body=Name: [Name]%0APhone: [WhatsApp Number]%0AOrganistion: [Your Org]%0ADesignation: [Your Designation]%0ALinkedIn: [Link]%0ADescription: [Why do you want to Join?]"
  }
]

const Footeritems: items = [
  {
    head: "Legal",
    Links: {
      "Terms and Conditions": "/T&C",
      "Privacy Policy": "/Privacy-Policy",
      "Disclaimer": "/Disclaimer",
      "Web Policies": "/Web-Policies",
      "Code of Conduct":"/pdfs/code_of_conduct.pdf",
      "Ethics & Sustainability Policy":"/pdfs/Ethics.pdf"
    },
  },
  {
    head: "Company",
    Links: {
      "Home": "/",
      "About": "/about",
      "Services":"/services",
    },
  },
];

 
        return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            <>
              <motion.button
                      layout
                      onClick={() => setDark(!dark)}
                      className="sm:top-10 cursor-pointer fixed top-1/2 right-6 z-50 px-3 py-3 rounded-4xl  bg-gray-200 dark:bg-gray-800 text-black dark:text-white shadow-lg transition"
                      transition={{duration:0.3,ease:"easeInOut"}}
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        {dark ? (
                          <motion.span
                            key="moon"
                            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center"
                          >
                            <IoMdMoon size={20} />
                          </motion.span>
                        ) : (
                          <motion.span
                            key="sun"
                            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center"
                          >
                            <IoSunny size={28} />
                          </motion.span>
                        )}
                      </AnimatePresence>
              </motion.button>
            <div >
                <Image src={'/Netzerothink.png'} alt="logo" width={350} height={350} className="mt-30 absolute left-1/2 top-[-5rem] -translate-x-1/2 sm:left-[5rem] sm:translate-0"/>
                {isMobile?<MobileNavbar items={items} className="top-1/2 left-10  fixed"/> :<Navbar items={items} className="z-10 sm:top-10 top-20"/>}
            </div>
            {children}
            <div className="w-full h-full bg-black">
                <Footer items={Footeritems}/>
            </div>
            </>
        </div>)
}