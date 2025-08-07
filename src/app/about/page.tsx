"use client"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Award, Users, Target, Eye, Heart, Lightbulb, Shield} from "lucide-react"
import GlobalShowcase from "../components/Showcase"
import {motion} from 'framer-motion'
import useMediaQuery from "../hooks/useMediaQuery"
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa"


export default function AboutPage() {

  const isMobile=useMediaQuery("(max-width:768px)")
  
  const SDG=["/SDG/01.png","/SDG/02.png","/SDG/03.png","/SDG/04.png","/SDG/05.png","/SDG/06.png","/SDG/07.png"]

  const values = [
    { icon: <Lightbulb className="h-8 w-8" fill="yellow" stroke="blue" />, title: "Innovation", description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions." },
    { icon: <Heart className="h-8 w-8" fill="#ff0054" stroke="#ff0054" />, title: "Integrity", description: "We maintain the highest ethical standards in all our business practices and relationships." },
    { icon: <Users className="h-8 w-8" fill="blue" stroke="green" />, title: "Collaboration", description: "We believe in the power of teamwork and foster an inclusive environment for all." },
    { icon: <Shield className="h-8 w-8" fill="grey" stroke="yellow" />, title: "Excellence", description: "We strive for perfection in everything we do and never settle for mediocrity." },
  ]

  const teamMembers = [
    { name: "Dr. M.K. Singh", role: "CEO & Founder", image: "/core_team/03.jpg", link:"https://www.linkedin.com/in/dr-manoj-kumar-singh-b7480a19/", bio: "Dr. M.K. is a founder of Net Zero Think Private Limited. He is a visionary leader with a passion for sustainability and innovation. He has extensive experience in the field of renewable energy, energy-efficient solutions and sustainable engineering. " },
    { name:"Ms. Pratyaksha Singh", role:"Director", image:"/core_team/04.jpg", link:"https://www.linkedin.com/in/pratyaksha-singh-96aa56375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", bio:"With a Master’s in Science. Her strong analytical background supports our mission to scale decarbonization with structure, clarity, and impact."},
    { name: "Dr. Pranamika Bhuyan", role: "Lead Consultant", link:"https://www.linkedin.com/in/pranamika-bhuyan-ph-d-61505b104/", image: "/core_team/05.jpg", bio: "Environmental consultant and educator with a Ph.D., specializing in GHG accounting, air quality, carbon markets, and low-carbon building transitions—11 years in academia and 2+ years in climate action, now leading capacity-building initiatives as Master Trainer and scientific writer." },
    { name:"Ms. Sapna​ Bisht", role:"Consultant", image:"/core_team/06.jpg",link:"https://www.linkedin.com/in/sapna-bisht-813964104/", bio:"With a B.Tech in Civil Engineering and M.Tech in Environmental Engineering, Sapna brings over a decade of expertise spanning both industry and academia. At NetZero Think Scape, she bridges technical depth with practical insights to drive sustainable infrastructure and climate-forward solutions."},
  ]

  const advisors = [
    { name: "Dr. Dimitrios Dimitriou ", role: "Advisor", image: "/advisors/03.jpeg",link:"https://www.linkedin.com/in/drdimitriosdimitriou/" ,bio: "With a PhD and B.Tech, Dimitrious brings over 20 years of deep domain expertise in sustainability, particularly within the steel and cement industries. At NetZero Think Scape, he leads with strategic insight and sectoral knowledge to shape high-impact decarbonization pathways for hard-to-abate sectors." },
    { name: "Dr. Kumar Iyer ", role: "Advisor", image: "/advisors/04.jpeg",link:"https://www.linkedin.com/in/kumar-value-creation-exponent/", bio: "With a PhD and B.Tech, Dr. Iyer brings over 30 years of expertise in Quality Control and Life Cycle Assessment across the steel and manufacturing industries. At NetZero Think Scape, he anchors our work with deep technical rigor, ensuring data-driven and standards-aligned sustainability outcomes." },
  ]

  const awards = [
    { title: "Startup India Recognisition", organization: "Government of India/Ministry of Commerce and Industry", image: "/solutions/img4.png" },
    { title: "Promising Startup Net Zero Sustainability Solutions", organization: "A and A Media Group and Industrial Outlook", image: "/solutions/img5.jpg" },
  ]


  return (
    <div className="min-h-screen min-w-screen">
      {/* Hero */}
      <section className=" px-15  text-center flex flex-col items-center justify-center w-full  self-center justify-self-center bg-[url('/bg-cover/earth.jpg')] bg-center bg-fixed bg-cover bg-no-repeat mask-b-from-99% mb-20 relative">
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white bg-green-500 rounded-2xl w-full mt-50  md:mt-75 max-w-6xl mx-auto">
                About Net Zero Think
        </h1>
        <p className="font-sans  sm:text-lg md:text-xl  max-w-3xl mx-auto leading-relaxed text-white font-bold">
          Net Zero Think is a climate solutions company enabling businesses, governments, and institutions to achieve their net-zero and sustainability goals. Since 2022, we’ve delivered cutting-edge solutions in the areas of research, GHG accounting and auditing, ESG strategy, decarbonization, and carbon markets. Through our global Climate Innovation Community, certified training programs, and sector-specific research, we drive impactful climate action and build long-term capabilities. With a presence across India and other nations, we turn climate ambition into measurable progress.
        </p>
        <p className="font-sans  sm:text-lg md:text-xl  max-w-3xl mx-auto leading-relaxed text-white font-bold">
          Net Zero Think is committed to addressing gender inequalities and promoting broader equality, diversity, and inclusion. We have more than 50% women in the workforce who are driving net-zero and sustainability solutions. 
        </p>

          <GlobalShowcase/>
      </section>

      <section className=" px-10  mt-20 text-center sm:w-full flex flex-col items-center justify-center  self-center justify-self-center w-full" >
        {/* photo showcase  */}
        {/* demonstration pillar */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white bg-green-500 rounded-2xl text-center md:w-full max-w-6xl mx-auto">
                 Value Proposition Aimed (2030)
          </h1>
        <div className="flex flex-col md:flex-row justify-between items-baseline mx-5 bg-blue-900 rounded-2xl">
          <motion.div
              initial={{ x: isMobile?-10:-300 }}
              whileInView={{ x: 1 }}
              transition={{ duration: 0.7 }}
              className="text-transparent font-bold text-2xl sm:text-3xl md:text-4xl z-20 flex flex-col gap-10 lg:basis-1/2 text-center lg:text-left m-5 rounded-2xl justify-center"
            >
                    <h1 className="text-white text-2xl">
                      •GHG Emission reduction <span>{'>'}</span> 1Gtonn
                    </h1>
                    <h1 className="text-white text-2xl">
                      •Infrastructure/asset damage savings <span>{'>'}</span> 100Bn$
                    </h1>
                    <h1 className="text-white text-2xl">
                      •Employment Creation <span>{'>'}</span> 40,000nos
                    </h1>
          </motion.div>
          <motion.div
          initial={{ x: isMobile?10:300 }}
              whileInView={{ x: 1 }}
              transition={{ duration: 0.7 }}
              className="text-transparent font-bold text-2xl sm:text-3xl md:text-4xl z-20 flex flex-col gap-10 lg:basis-1/2 text-center lg:text-left m-5 "
          >
            <div className="flex flex-wrap gap-10 items-center justify-center">
            <h1 className="text-white text-2xl w-full self-center justify-self-center text-center">
                •Addressing the need of UN SDGs
            </h1>
              {SDG.map((item,idx)=>(
                <Image key={idx} alt={`${item}`} src={item} height={100} width={100}/>
              ))}
            </div>
          </motion.div>
        </div>
        {/* Vision */}
      </section>
      <section className=" px-4 sm:px-6 lg:px-8 bg-gray-200 dark:bg-gray-800 sm:w-full flex flex-col items-center justify-center  m-15 self-center justify-self-center rounded-2xl sm:rounded-none">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-8 w-8 text-purple-500" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-500">Vision</h2>
            </div>
            <p className="text-base sm:text-lg  leading-relaxed mb-6 text-blue-800 font-bold">To become leader in climate change solutions and contribute towards achieving net zero & SDGs targets</p>
          </div>
          <Image src="/vision/earth.jpg" alt="Vision" width={600} height={400} className="rounded-lg shadow-lg w-full max-w-md mx-auto" />
        </div>
      </section>

      {/* Mission */}
      <section className=" px-4 sm:px-6 lg:px-8 sm:w-full flex flex-col items-center justify-center m-15 self-center justify-self-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Image src="/vision/people.jpg" alt="Mission" width={600} height={400} className="rounded-lg shadow-lg w-full max-w-md mx-auto order-2 lg:order-1" />
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-8 w-8 text-purple-500" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-500">Mission</h2>
            </div>
            <p className="text-base sm:text-lg text-blue-800 leading-relaxed mb-6 font-bold">To transform the various industries and help our clients & partners, achieve net zero and sustainability goals.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className=" px-4 sm:px-6 lg:px-8 bg-gray-200 dark:bg-gray-800 sm:w-full flex flex-col items-center justify-center  m-15 self-center justify-self-center rounded-2xl sm:rounded-none">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-500 mb-4">Core Values</h2>
            <p className="text-lg max-w-2xl mx-auto font-bold text-blue-800">The principles that guide our decisions and shape our culture</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <Card key={i} className="text-center p-6 hover:shadow-lg transition-shadow bg-gradient-to-t from-purple-500 to-blue-500">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4 text-primary ">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className=" text-sm text-black">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className=" px-4 sm:px-6 lg:px-8 bg-muted/50 sm:w-full flex flex-col items-center justify-center  m-15 self-center justify-self-center">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-500 mb-4">Team</h2>
          <p className="text-lg  max-w-2xl mx-auto font-bold text-blue-800">Meet the passionate individuals driving our mission forward</p>
        </div>
        <div className="grid md:flex md:items-center md:justify-evenly w-full  gap-6">
          {teamMembers.map((member, i) => (
            <Card key={i} className={`relative text-center overflow-hidden hover:shadow-2xl transition-shadow sm:w-1/5 h-110 bg-blue-100`}>
              <Image src={member.image} alt={member.name} width={300} height={300} className="w-full h-64  object-contain p-5" />
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">{member.name}</h3>
                <Badge variant="secondary" className="mb-3 bg-gray-600 text-white dark:text-black">{member.role}</Badge>
              </CardContent>
              <CardFooter className="absolute bottom-0 left-1/2 -translate-x-1/2  rounded-2xl  items-center justify-center p-1">
                <Link className="self-center justify-self-center" href={member.link}><FaLinkedin size={30} fill="blue" stroke="white"/></Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Advisors */}
      <section className=" px-4 sm:px-6 lg:px-8 bg-muted/50 sm:w-full flex flex-col items-center justify-center  m-15 self-center justify-self-center">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-500 mb-4">Advisors</h2>
          <p className="text-lg  max-w-2xl mx-auto font-bold text-blue-800">Industry experts guiding our strategic direction</p>
        </div>
        <div className="grid md:flex md:items-center md:justify-evenly w-full  gap-6">
          {advisors.map((advisor, i) => (
            <Card key={i} className={`relative text-center overflow-hidden hover:shadow-2xl transition-shadow sm:w-1/5 h-110 bg-blue-100`}>
              <Image src={advisor.image} alt={advisor.name} width={300} height={300} className="w-full h-64  object-contain p-5" />
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">{advisor.name}</h3>
                <Badge variant="secondary" className="mb-3 bg-gray-600 text-white dark:text-black">{advisor.role}</Badge>
              </CardContent>
              <CardFooter className="absolute bottom-0 left-1/2 -translate-x-1/2  rounded-2xl  items-center justify-center p-1">
                <Link className="self-center justify-self-center" href={advisor.link}><FaLinkedin size={30} fill="blue" stroke="white"/></Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="px-4 sm:px-6 lg:px-8  sm:w-full flex flex-col items-center justify-center  m-15 self-center justify-self-center ">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <div className="flex justify-center gap-3 mb-4 items-center">
            <Award className="h-8 w-8 text-yellow-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 p-1">Awards & Recognition</h2>
          </div>
          <p className="text-lg  max-w-2xl mx-auto font-bold text-blue-800">Our achievements and recognition from industry leaders</p>
        </div>
        <div className="grid md:flex md:items-center md:justify-center  gap-6">
          {awards.map((award, i) => (
            <Card key={i} className={`text-center overflow-hidden hover:shadow-lg transition-shadow sm:w-1/2 sm:h-[20rem] bg-gradient-to-r from-blue-900 to-gray-700`}>
              <Image src={award.image} alt={award.title} width={300} height={200} className="w-full h-40 object-contain rounded-2xl" />
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-200">{award.title}</h3>
                <p className="text-sm text-blue-100">{award.organization}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
