"use client"
import { Earth } from "./components/earth";
import { Contactbox } from "./components/Contactbox";
import Marquee from "./components/Marquee";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Motion from "./components/Motion";
import {motion} from "framer-motion"


import SVG from "./components/SVG";

export default function Home() {
const testimonials=[
  {
    quote:"Net Zero Think's innovative solutions play a critical role in the imperative task of decarbonizing ecosystems. In the process of revolutionizing our education system, there is a pressing need for comprehensive green skilling across a range of subjects. We are delighted to collaborate with Net Zero Think, supported by the generous contribution of Microsoft, in advancing the realm of Green Skilling.",
    name:"	",
    title:"TNS India Foundation"
  },
  {
    quote:"Net zero think solutions could play a critical role to decarbonise supply chain. By implementing Net Zero Think solutions,  we are in the transition to bring down our process losses, reduce emissions and improve overall efficiency…..",
    name:" ",
    title:"Mining Industry "
  },
  {
    quote:"Net Zero Think is working with us onto multiple areas including Green House Gas accounting guidelines development. We find Net Zero Think team the most professional and competent on the subject. The guidelines they developed are of international standard and are being used for developing national curriculums...",
    name:" ",
    title:"Skill Council For Green Jobs, India"
  },
  {
    quote:"Net Zero Think's expertise in the renewable energy and green hydrogen sector has been instrumental in driving decarbonization efforts across industries.",
    name:"Mr. Eric Solheim ",
    title:"Former Secretary United Nations Environment Program"
  },
]


const text="Accelerating Sustainable Business for a Greener Tomorrow"
  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    > 
      <SVG/>
      <section className="w-full flex flex-col items-center justify-center py-72"> 
          <TextGenerateEffect words={text} className="mt-16 text-6xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-teal-400 
            bg-clip-text text-transparent text-center drop-shadow-lg" duration={2} filter={false}/>
        <p className=" text-2xl text-gray-500 font-semibold text-center max-w-5xl">
            Empowering enterprises to achieve net zero with data-driven insights, innovative technology, and actionable strategies.</p>
      </section>


      <section className="w-full flex flex-col items-center justify-center py-16 dark:bg-black">
        <div className="  w-full h-full  flex justify-end dark:bg-black ">
          <motion.div initial={{x:-400}} whileInView={{x:0}} transition={{duration:1}} className="text-transparent font-bold text-4xl z-10 w-[20rem] h-full mt-20 ml-10  flex flex-col gap-20 basis-1/2">
            <h1 className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-300">120+ Companies Reduced Emissions</h1>
            <h1 className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-300"> 2M+ Tons CO₂ Saved</h1>
            <h1 className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-300">Global Reach: 30+ Countries</h1>
          </motion.div>
          <div className="basis-1/2">
            <Earth width={450} height={450} className="max-w-[90vw] max-h-[60vh] relative bottom-5 bg-clip-content" />    
          </div>
        </div>
      </section>


      <section className="w-full h-full flex flex-col items-center justify-center py-16 ">
        <div className="w-full flex flex-col text-center">
          <h1 className="w-[30rem] self-center text-6xl font-bold m-10 mb-20 bg-gradient-to-r from-emerald-500 to-green-500 text-transparent bg-clip-text shadow-[0px_0px_40px_10px_#495057] rounded-2xl  text-center text-nowrap">OUR SOLUTIONS</h1>
          <Motion/>
        </div>
        <div className="w-full my-20 ">
          <h1 className="w-[30rem] self-center text-6xl font-bold m-10 mb-20 bg-gradient-to-r from-emerald-500 to-green-500 text-transparent bg-clip-text shadow-[0px_0px_40px_10px_#495057] rounded-2xl  text-center text-nowrap justify-self-center">TESTIMONIALS</h1>
          <InfiniteMovingCards items={testimonials} direction="right" speed="normal"/>
        </div>
        <div>
          <h1 className="w-[60rem] p-3 self-center text-6xl font-bold m-10 mb-20 bg-gradient-to-r from-emerald-500 to-green-500 text-transparent bg-clip-text shadow-[0px_0px_40px_10px_#495057] rounded-2xl  text-center text-nowrap justify-self-center">Trusted By Leading Enterprises</h1>
          <Marquee/>
        </div>
        <Contactbox />
      </section>
    </div>
  );
}
