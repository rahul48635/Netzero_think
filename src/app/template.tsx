"use client";
import { IoMdBriefcase, IoMdContact, IoMdHome, IoMdMoon } from "react-icons/io";
import { GiSummits } from "react-icons/gi";
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
import { RiUserCommunityFill } from "react-icons/ri";
import { Contactbox } from "./components/Contactbox";

export default function Template({ children }: { children: React.ReactNode }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { dark, setDark } = useDarkMode();

  const items = [
    {
      title: "Home",
      logo: IoMdHome,
      href: "/",
    },
    {
      title: "Services",
      logo: GrServices,
      href: "/services",
    },
    {
      title: "About Us",
      logo: CiSquareQuestion,
      href: "/about",
    },
    {
      title: "Career",
      logo: IoMdBriefcase,
      href: "/Jobs",
    },
    {
      title: "Contact Us",
      logo: IoMdContact,
      href: "/contact",
    },
    {
      title: "Climate Innovation",
      logo: RiUserCommunityFill,
      href: "/community",
    },
    {
      title: "CIS 2026",
      logo: GiSummits,
      href: "/climate_innovation_summit",
    },
  ];

  const Footeritems: items = [
    {
      head: "Legal",
      Links: {
        "Terms and Conditions": "/T&C",
        "Privacy Policy": "/Privacy-Policy",
        Disclaimer: "/Disclaimer",
        "Web Policies": "/Web-Policies",
        "Code of Conduct": "/pdfs/code_of_conduct.pdf",
        "Ethics & Sustainability Policy": "/pdfs/Ethics.pdf",
      },
    },
    {
      head: "Company",
      Links: {
        Home: "/",
        About: "/about",
        Services: "/services",
        Career: "/Jobs",
        "Contact Us": "/contact",
        "Climate Innovation": "/community",
      },
    },
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <motion.button
        layout
        onClick={() => setDark(!dark)}
        className="sm:top-10 cursor-pointer fixed top-[calc(50%_+_10rem)] right-6 z-50 px-3 py-3 rounded-4xl  bg-gray-200 dark:bg-gray-800 text-black dark:text-white shadow-lg transition"
        transition={{ duration: 0.3, ease: "easeInOut" }}
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
      <div className="sm:lg:flex sm:lg:flex-col ">
        <div className="mt-30 absolute left-1/2 top-[-5rem] -translate-x-1/2 sm:left-[5rem] sm:translate-0 sm:md:justify-self-center z-10 bg-white/70 rounded-2xl p-2">
          <Image
            src={"/Netzerothink.webp"}
            alt="logo"
            width={350}
            height={350}
          />
        </div>
        {isMobile ? (
          <MobileNavbar
            items={items}
            className="top-[calc(50%_+_10rem)] left-10  fixed"
          />
        ) : (
          <Navbar
            items={items}
            className="z-10 lg:top-35 top-20 sm:md:top-40"
          />
        )}
      </div>
      {children}

      <div className="w-full h-full bg-black">
        <Footer items={Footeritems} />
      </div>
      <div className="sm:top-[40rem] h-screen cursor-pointer fixed top-[80%] right-6 z-50 px-3 py-3">
        <Contactbox />
      </div>
    </div>
  );
}
