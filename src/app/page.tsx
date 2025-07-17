"use client";
import { Earth } from "./components/earth";
import { Contactbox } from "./components/Contactbox";
import Marquee from "./components/Marquee";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { motion } from "framer-motion";
import SVG from "./components/SVG";
import useMediaQuery from "./hooks/useMediaQuery";
import Cards from "./components/Cards";
import DecarbonisationPillars from "./components/Pillars_sec";

export default function Home() {
  const isMobile=useMediaQuery("(max-width: 768px)")
  const testimonials = [
    {
      quote:
        "Net Zero Think's innovative solutions play a critical role in the imperative task of decarbonizing ecosystems. In the process of revolutionizing our education system, there is a pressing need for comprehensive green skilling across a range of subjects. We are delighted to collaborate with Net Zero Think, supported by the generous contribution of Microsoft, in advancing the realm of Green Skilling.",
      name: "",
      title: "TNS India Foundation",
      src:"/testimonials/03.png"
    },
    {
      quote:
        "Net zero think solutions could play a critical role to decarbonise supply chain. By implementing Net Zero Think solutions,  we are in the transition to bring down our process losses, reduce emissions and improve overall efficiency…..",
      name: " ",
      title: "Mining Industry ",
      src:"/testimonials/04.png"
    },
    {
      quote:
        "Net Zero Think is working with us onto multiple areas including Green House Gas accounting guidelines development. We find Net Zero Think team the most professional and competent on the subject. The guidelines they developed are of international standard and are being used for developing national curriculums...",
      name: " ",
      title: "Skill Council For Green Jobs, India",
      src:"/testimonials/02.png"
    },
    {
      quote:
        "Net Zero Think's expertise in the renewable energy and green hydrogen sector has been instrumental in driving decarbonization efforts across industries.",
      name: "Mr. Eric Solheim ",
      title: "Former Secretary United Nations Environment Program",
      src:"/testimonials/01.jpg"
    },
  ];

  const services=[
    { title:"Emissions Measurement, Reporting & Verification (MRV)",
      description:"We help organizations develop robust systems to measure, report, and verify greenhouse gas (GHG) emissions in line with global standards. This ensures accuracy, transparency, and compliance in sustainability disclosures and target-setting."
    },
    { title:"Greenhouse Gas (GHG) Accounting & Carbon Footprint Analysis",
      description:"We help organizations accurately measure and analyze their greenhouse gas emissions across sectors through detailed inventories and life cycle assessments (LCA). Our service supports the creation of carbon footprints, identifies reduction opportunities, and enables businesses to transition toward net-zero through strategic roadmaps and carbon credit monetization."
    },
    { title:"Climate & Environmental Policy Advisory",
      description:"We provide expert advisory on climate and environmental regulations to help organizations navigate compliance, carbon markets, and emerging sustainability frameworks. Our services ensure alignment with national and global climate policies, including CBAM, SEBI-BRSR, and emission trading systems (ETS)."
    },
    { title:"Environmental Credits & Sustainability Finance Advisory",
      description:"We assist organizations in unlocking value from environmental credits and sustainable finance. Our services include feasibility studies, credit verification, registry navigation, and guidance on securing green bonds, sustainability-linked loans, and other climate-related investment instruments."
    }, 
    { title:"ESG Strategy & Reporting",
      description:"We support businesses in building ESG strategies that meet global and regional standards such as SEBI-BRSR, TCFD, and GRI. Our services ensure compliance, transparency, and integration of circular economy practices for long-term sustainability."
    },
    { title:"Capacity Building & Professional Training",
      description:"We design and deliver capacity-building programs and professional training workshops focused on climate action, ESG compliance, and sustainability. These programs empower organizations and professionals with the skills and certifications needed to lead decarbonization and sustainability transitions across sectors."
    },
    { title:"Green Staffing Solution",
      description:"We provide flexible and specialized green staffing solutions to help organizations meet their sustainability and ESG goals. From deploying experts and recruiting on-demand talent to building in-house teams via BOT models, we support startups, corporates, and CSR projects in scaling their climate and energy transition efforts."
    },
  ]

  const text = "Accelerating Sustainable Business for a Greener Tomorrow";

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden ">
      <SVG />

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center px-4 sm:py-40 md:py-60 sm:my-40 text-center relative bottom-40 sm:static sm:bottom-0 ">
        <TextGenerateEffect
          words={text}
          className="mt-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-purple-500 drop-shadow-lg"
          duration={2}
          filter={false}
        />
        <p className="md:mt-30 mt-10 text-base sm:text-3xl text-green-700 font-semibold max-w-4xl ">
          Empowering enterprises to achieve net zero with data-driven insights,
          innovative technology, and actionable strategies.
        </p>
      </section>

      {/* Earth + Stats Section */}
        <div className="w-full text-center relative md:bottom-90 m-10 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-blue-800 bg-purple-500  shadow-[0px_0px_40px_10px_#495057] rounded-2xl pb-2">
            Decarbonization Stratergies
          </h1>
        </div>
      <section className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0 py-16 px-6 dark:bg-black ">
        <motion.div
          initial={{ x: isMobile?-150:-300 }}
          whileInView={{ x: 1 }}
          transition={{ duration: 1 }}
          className="text-transparent font-bold text-2xl sm:text-3xl md:text-4xl z-20 flex flex-col gap-10 lg:basis-1/2 text-center lg:text-left -mt-50"  
        >
        <DecarbonisationPillars/>
          
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-blue-800 bg-purple-500  shadow-[0px_0px_40px_10px_#495057] rounded-2xl">
            OUR SOLUTIONS
          </h1>
          <Cards services={services}/>
        </div>

        {/* Testimonials */}
        <div className="w-full mt-20 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-blue-800 bg-purple-500  shadow-[0px_0px_40px_10px_#495057] rounded-2xl">
            TESTIMONIALS
          </h1>
          <InfiniteMovingCards items={testimonials} direction="left" speed={isMobile?"slow":"normal"} />
        </div>

        {/* Trusted By */}
        <div className="mt-20 w-full text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-blue-800 bg-purple-500  shadow-[0px_0px_40px_10px_#495057] rounded-2xl pb-2">
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
