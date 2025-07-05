"use client"
import { IoIosContact, IoMdHome, IoMdMoon } from "react-icons/io";
import { FaBlog } from "react-icons/fa";
import { CiSquareQuestion } from "react-icons/ci";
import { Navbar } from "./components/navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import type { items } from "./components/Footer";
import { useDarkMode } from "./context/DarkModeContext";
import { IoSunny } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

export default function Template(
  { children }: { children: React.ReactNode }) {
 const {dark,setDark}=useDarkMode();

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
            <>
              <motion.button
                      layout
                      onClick={() => setDark(!dark)}
                      className="cursor-pointer fixed top-6 right-6 z-50 px-4 py-4 rounded-4xl  bg-gray-200 dark:bg-gray-800 text-black dark:text-white shadow-lg transition"
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
                            <IoMdMoon size={28} />
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
            <div className="">
                <Image src={'/Netzerothink.png'} alt="logo" width={300} height={300} className="mt-30 absolute left-[5rem] top-[-5rem]"/>
                <Navbar items={items} className="z-10"/>
            </div>
            {children}
            <div className="w-full h-full bg-black">
                <Footer items={Footeritems}/>
            </div>
            </>
        </div>)
}