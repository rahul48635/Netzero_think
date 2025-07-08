"use client";
import { Earth } from "./components/earth";
import { Contactbox } from "./components/Contactbox";
import Marquee from "./components/Marquee";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Motion from "./components/Motion";
import { motion } from "framer-motion";
import SVG from "./components/SVG";
import useMediaQuery from "./hooks/useMediaQuery";

export default function Home() {
  const isMobile=useMediaQuery("(max-width: 768px)")
  const testimonials = [
    {
      quote:
        "Net Zero Think's innovative solutions play a critical role in the imperative task of decarbonizing ecosystems...",
      name: "",
      title: "TNS India Foundation",
    },
    {
      quote:
        "Net zero think solutions could play a critical role to decarbonise supply chain...",
      name: " ",
      title: "Mining Industry ",
    },
    {
      quote:
        "Net Zero Think is working with us onto multiple areas including Green House Gas accounting...",
      name: " ",
      title: "Skill Council For Green Jobs, India",
    },
    {
      quote:
        "Net Zero Think's expertise in the renewable energy and green hydrogen sector...",
      name: "Mr. Eric Solheim ",
      title: "Former Secretary United Nations Environment Program",
    },
  ];

  const text = "Accelerating Sustainable Business for a Greener Tomorrow";

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <SVG />

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center px-4 sm:py-40 md:py-60 text-center relative bottom-40 sm:static sm:bottom-0">
        <TextGenerateEffect
          words={text}
          className="mt-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg"
          duration={2}
          filter={false}
        />
        <p className="mt-6 text-base sm:text-xl text-gray-500 font-semibold max-w-4xl">
          Empowering enterprises to achieve net zero with data-driven insights,
          innovative technology, and actionable strategies.
        </p>
      </section>

      {/* Earth + Stats Section */}
      <section className="w-full  flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0 py-16 px-6 dark:bg-black ">
        <motion.div
          initial={{ x: isMobile?-150:-300 }}
          whileInView={{ x: 1 }}
          transition={{ duration: 1 }}
          className="text-transparent font-bold text-2xl sm:text-3xl md:text-4xl z-20 flex flex-col gap-10 lg:basis-1/2 text-center lg:text-left "
        >
          <h1 className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-300 ">
            120+ Companies Reduced Emissions
          </h1>
          <h1 className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-300">
            2M+ Tons CO₂ Saved
          </h1>
          <h1 className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-300">
            Global Reach: 30+ Countries
          </h1>
        </motion.div>

        <div className="lg:basis-1/2 flex justify-center  ">
          <Earth
            width={350}
            height={350}
            className="max-w-[90vw] max-h-[60vh] relative bottom-5 bg-clip-content"
          />
        </div>
      </section>

      {/* Solutions + Testimonials + Marquee */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4">
        {/* Our Solutions */}
        <div className="w-full text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-emerald-500 to-green-500 text-transparent bg-clip-text shadow-[0px_0px_40px_10px_#495057] rounded-2xl">
            OUR SOLUTIONS
          </h1>
          <Motion />
        </div>

        {/* Testimonials */}
        <div className="w-full mt-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-emerald-500 to-green-500 text-transparent bg-clip-text shadow-[0px_0px_40px_10px_#495057] rounded-2xl text-center">
            TESTIMONIALS
          </h1>
          <InfiniteMovingCards items={testimonials} direction="right" speed={isMobile?"slow":"normal"} />
        </div>

        {/* Trusted By */}
        <div className="mt-20 w-full text-center">
          <h1 className="pb-3 text-3xl sm:text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-emerald-500 to-green-500 text-transparent bg-clip-text shadow-[0px_0px_40px_10px_#495057] rounded-2xl">
            Trusted By Leading Enterprises
          </h1>
          <Marquee />
        </div>

        {/* Contact Box */}
        <Contactbox />
      </section>
    </div>
  );
}
