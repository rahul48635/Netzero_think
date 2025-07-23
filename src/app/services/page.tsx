"use client"
import {
  Award,
  Users,
  Target,
  Briefcase,
  ClipboardList,
  GraduationCap,
  UserCheck,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GiArcheryTarget } from "react-icons/gi"
import { FaCloud } from "react-icons/fa"
import { BsCoin } from "react-icons/bs"
import useMediaQuery from "../hooks/useMediaQuery"
import { Modal, ModalBody, ModalTrigger } from "@/components/ui/animated-modal"
import { useState } from "react"
import { motion } from 'framer-motion'
import { MdOutlinePolicy } from "react-icons/md"


export default function ServicesPage() {
  const pillars=[
        {
          title: "Transparent Pricing",
          color: "from-green-500 to-green-700",
        },
        {
          title: "Deep Domain Knowledge & Experience",
          color: "from-green-500 to-green-700",
        },
        {
          title: "End to End Solutions",
          color: "from-green-500 to-green-700",
        },
        {
          title: "Certified Experts",
          color: "from-green-500 to-green-700",
        },
        {
          title: "Global Reachout",
          color: "from-green-500 to-green-700",
        },
    ];
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    org: "",
    email: "",
    service: ""
  })
   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    console.log("Form submitted:", formData)
    window.open(`mailto:support@netzerothink.com,mksingh@netzerothink.com?subject=New Service Request from ${formData.name}&body=Name: ${formData.name}%0APhone: ${formData.phone}%0AOrg: ${formData.org}%0AEmail: ${formData.email}%0AService: ${formData.service}`)
  }

  const services = [
    {
      icon: <GiArcheryTarget className="h-8 w-8" />,
      title: "Emissions Measurement, Reporting & Verification (MRV)",      
      features: [
        "Developing systematic methodologies for accurate GHG emissions (scope 1, 2 & 3) measurement and compliance reporting.",
        "Assisting organizations in aligning with ISO 14064-3, GHG Protocol, and Science-Based Targets Initiative (SBTi) standards.",
        "Conducting third-party verification of carbon footprint assessments for corporate sustainability disclosures."
      ],
    },
    {
      icon: <FaCloud className="h-8 w-8" />,
      title: "Greenhouse Gas (GHG) Accounting & Carbon Footprint Analysis",
      features: [
        "Conducting sector-specific GHG inventories including LCA & EPD for industries (Steel, Building etc), energy sector, transportation, and heavy manufacturing.",
        "Developing corporate carbon footprint assessments and sustainability roadmaps for net-zero transition.",
        "Identifying GHG reduction opportunities, energy efficiency strategies, and carbon credit monetization pathways."
      ],
    },
    {
      icon: <MdOutlinePolicy className="h-8 w-8" />,
      title: "Climate & Environmental Policy Advisory",
      features: [
        "Providing strategic guidance on climate policy compliance, including: ",
        "Carbon Border Adjustment Mechanism (CBAM)",
        "SEBI-BRSR, EU Taxonomy, ISSB, and ESG disclosure frameworks",
        "Indian and international carbon trading mechanisms",
        "Advising clients on carbon market feasibility, regulatory frameworks, and emission trading schemes (ETS)."
      ],
    },
    {
      icon: <BsCoin className="h-8 w-8" />,
      title: "Environmental Credits & Sustainability Finance Advisory",
      features:[
          "Conducting feasibility studies for voluntary and compliance Environmental Credits (Carbon, Plastic, Water, EPR, REC, Green Credits).",
          "Supporting clients in  credit verification, registry selection, and credit transactions under leading platforms.",
          "Guiding companies on securing sustainable finance instruments, including green bonds, sustainability-linked loans, and carbon-linked investments.",
        ],
    },
    {
      icon: <ClipboardList className="h-8 w-8" />,
      title: "ESG Strategy & Reporting",
      features: [
        "Developing ESG strategy frameworks for businesses to align with SEBI-BRSR, TCFD, and GRI reporting requirements.",
        "Assisting organizations in ESG risk assessment, climate impact reporting, and sustainability disclosure compliance.",
        "Supporting integration of circular economy principles into business operations.",
      ],
    },
    {
      icon: <GraduationCap  className="h-8 w-8" />,
      title: "Capacity Building & Professional Training",
      features: [
        "Conducting corporate training programs and workshops on: GHG Accounting & Carbon Markets, ESG Strategy & Compliance, Climate Risk Assessment & Adaptation Planning, Carbon & Environment Credit(s)",
        "Sector-Specific Sustainability Initiatives (e.g., Green Steel, Industrial Decarbonization, Energy Transition)",
        "Developing professional certification programs to support industry-wide sustainability and climate transition goals"
      ],
    },
    {
      icon: <UserCheck  className="h-8 w-8" />,
      title: "Green Staffing Solution",
      features: [
        "Deployment of Sustainability & ESG Experts (Short-term/Long-term)",
        "On-demand green talent recruitment",
        "Build-Operate-Transfer (BOT) model for sustainability departments",
        "Specialized experts for renewable energy and energy efficiency projects",
        "Capacity building and staff augmentation for climate-tech startups and CSR initiatives"
      ],
    },
    {
      icon: <UserCheck  className="h-8 w-8" />,
      title: "Life Cycle Assesment (LCA)",
      features: [
        "Life Cycle Assessment & Product Carbon Footprinting: End-to-end analysis of environmental impacts and GHG emissions across a product’s life cycle.",
        "Environmental Product Declarations (EPDs) & Comparative LCA: Verified documentation and impact comparison to support sustainable product and process choices.",
        "Training & Capacity Building: Customized programs to build internal expertise in LCA tools, methodologies, and applications."
      ],
    },
  ]

  const expertise = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Energy Sector",
      description: "Power,Oil & Gas,Renewable Energy,Storage",

    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Infrastructure Sector ",
      description: "Buildings",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Banking and Financial Institutions (BFSI)",
      description: "Banks,Insurance & Reinsurance Company",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Agriculture Sector",
      description: "Forestry & Agroforestry",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "IT & Services Sector",
      description: "Data Centers & Offices",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Manufacturing",
      description: "Mining,Iron & Steel,Cement,Textile,Chemical",
    },
  ]

 const keyProjects = [
  {
    title: "Green Hydrogen Ecosystem Development",
    client: "Government of UK",
    description: "Research study on green hydrogen ecosystem development focused on green ammonia adoption in agriculture sector",
    tech: ["Green Hydrogen", "Policy Research", "Decarbonization"]
  },
  {
    title: "Carbon Credit Market Prefeasibility",
    client: "Leading Power Trading Company",
    description: "Prefeasibility study on carbon credit market in India",
    tech: ["Carbon Credits", "Market Analysis", "Climate Finance"]
  },
  {
    title: "GHG Emissions Verification",
    client: "Leading Renewable Energy Developer",
    description: "Verification of GHG emissions in line with ISO 14064-3 guidelines",
    tech: ["ISO 14064-3", "GHG Accounting", "Carbon Verification"]
  },
  {
    title: "Decarbonization Training Program",
    client: "Mining, Steel & Building Sector",
    description: "Capacity building and training on decarbonization",
    tech: ["Training", "Decarbonization", "GHG Reduction","Iron & Steel","Mining","Building"]
  },
  {
    title: "ESG Reporting for Mining Company",
    client: "Large Mining Company, Karnataka",
    description: "ESG report development based on GRI principles",
    tech: ["GRI", "ESG Reporting", "Sustainability"]
  },
  {
    title: "Green Hydrogen Tech Prefeasibility",
    client: "City Gas Distribution Company",
    description: "Prefeasibility study to identify green hydrogen technologies",
    tech: ["Green Hydrogen", "Feasibility Study", "Gas Infrastructure"]
  },
  {
    title: "Japanese Tech Market Assessment",
    client: "Confidential Client",
    description: "Assessment of Japanese technologies for renewable energy, storage, e-mobility, and energy efficiency in India",
    tech: ["Tech Assessment", "Renewables", "Energy Efficiency", "e-Mobility"]
  },
  {
    title: "Climate Training Content Development",
    client: "NCVET-aligned Training Initiative",
    description: "Content development and training on climate change, GHG accounting, and SEBI-BRSR",
    tech: ["NCVET", "SEBI-BRSR", "Climate Change", "Sustainability Education"]
  },
  {
    title: "Hydro Project",
    client: "Hydro Developer, Himachal Pradesh",
    description: "Lender’s Engineer role for Hydro project",
    tech: ["Hydropower", "Project Engineering", "Lender’s Engineer"]
  },
  {
    title: "Life Cycle Assessment & EPD for Diverse Manufactured Products",
    client: "Product manufacturing organisations",
    description: "Conducted Cradle to Gate LCA of various products including furniture, garments, steel, chemicals , plastics, sustainable aviation fuel, Biofuel, FMCG products, automotive components, electronic devices and pharmaceutical drugs. ",
    tech: ["LCA",  "EPD"]
  },
  {
    title: "Green Building & Net Zero Advisory for Residential and Commercial Projects",
    client: "Residential & Commercial Project Developers",
    description: "Provided advisory, designing, training and audit solutions to reduce embedded & operational emissions. ",
    tech: ["Embedded Emission", "Green Building", "Net Zero Building", "Net Zero Water", "Net Zero Energy", "Net Zero Waste "]
  },
  {
    title: "Energy, Emissions & EHS Audits for Industries",
    client: "Manufacturing & IT Organisations",
    description: "Conducted Energy, Emissions and EHS audit at various facilities and implemented IOT enabled solutions",
    tech: [ "Energy Audit", "EHS Audit", "Emissions Audit"]
  },
  {
    title: "ESG Implementation & Project Development Support",
    client: "Independent Power Producers",
    description: "Owner’s & Lender’s Engineer role for multiple wind and solar projects across Asia Pecific Region. ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  Supporting Transition from EHS to ESG.",
    tech: [ "ESG", "EHS", "GRI", "IFRS", "BRSR", "ISO14001", "ISO 45000","Wind Energy", "Solar Power", "Project Management"]
  },
];
const isMobile=useMediaQuery("(max-width: 768px)")

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  }


  return (
    <div className="min-h-screen min-w-screen bg-white dark:bg-black text-black mx-10 ">
      {/* Introduction Section */}
      <section className="bg-[url('/bg-cover/plant.png')]  bg-cover bg-no-repeat bg-fixed   w-full h-full mask-b-from-99% mb-10 p-10 relative ">
      <div className="absolute inset-0 bg-black/40 -z-10"></div>
        <div className="max-w-6xl mx-auto mt-60">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white bg-green-500 rounded-2xl">
                Introduction
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full h-full">
            <div className={`${isMobile?"text-center":"text-left"}`}> 
              <p className="text-lg text-white mb-6 leading-relaxed font-bold">
                Net Zero Think Pvt Ltd (NZT) is a leading Solution Provider dedicated to driving low carbon economy transition. As a global climate-focused solutions provider, we support organizations in achieving net-zero emissions and long-term sustainability. Headquartered in Bangalore, India, our global solution centre collaborates with a network of associate partners to deliver tailored climate-centric solutions & services.
              </p>
              <p className="text-lg text-white mb-8 leading-relaxed font-bold">
                 With a mission to assist industries, government bodies, and stakeholders in meeting net-zero targets, we offer expert guidance in emissions accounting & auditing, sustainability strategy, and net zero initiatives. Additionally, we provide Green Staffing solutions, comprehensive training and capacity-building programs to equip professionals and organizations with the knowledge and skills required to navigate the evolving sustainability landscape and implement effective climate solutions.
              </p>
              <div className="flex flex-wrap gap-2  ">
                <div className="text-center bg-blue-900 rounded-2xl p-2 dark:bg-white flex-1/3 ">
                  <div className="text-3xl font-bold text-white dark:text-gray-400 ">25+</div>
                  <div className="text-lg text-gray-300 dark:text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center bg-blue-900 rounded-2xl p-1 dark:bg-white flex-1/3">
                  <div className="text-3xl font-bold text-white dark:text-gray-400">100+</div>
                  <div className="text-lg text-gray-300 dark:text-gray-600">Team&apos;s years of experience</div>
                </div>
                <div className="text-center bg-blue-900 rounded-2xl p-1 dark:bg-white flex-1/3">
                  <div className="text-3xl font-bold text-white dark:text-gray-400">99%</div>
                  <div className="text-lg text-gray-300 dark:text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="w-full h-full">
              <div className="justify-self-center self-center w-full sm:w-full h-full px-6  bg-blue-100  text-white flex flex-col items-center rounded-4xl p-5">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-12 text-blue-800 bg-transparent   rounded-2xl pb-2">
                        Why Choose Us?
                    </h1>
                    <div className="flex flex-col gap-5 w-full max-w-6xl">
                      <motion.div
                            className="flex flex-col gap-5 w-full max-w-6xl"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            viewport={{ once: true, amount: 0.2 }}
                          >
                            {pillars.map((pillar) => (
                              <motion.div
                                key={pillar.title}
                                variants={itemVariants}
                                className={`bg-gradient-to-br ${pillar.color} rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform duration-300 w-full`}
                              >
                                <div className="flex items-center gap-3 w-full">
                                  <h3 className="text-lg font-bold text-center w-full flex gap-2 items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-white" />
                                    {pillar.title}
                                  </h3>
                                </div>
                              </motion.div>
                            ))}
                      </motion.div>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services & Solutions Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8  text-white dark:bg-black dark:text-black rounded-2xl bg-[url('/bg-cover/power_plant.jpg')] bg-center bg-cover bg-no-repeat bg-fixed  mask-b-from-99% mask-t-from-99% mb-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white bg-green-500 rounded-2xl">
                Services & Solutions
              </h1>
          </div>
           
        {/* Modal */}
        <div className="w-full h-30 relative">
          <Modal>
            <div className="flex items-center justify-center w-full  ">
              <ModalTrigger  className="sm:w-[30rem]  self-center justify-self-center h-[5rem] ">
                <div className="  text-white shadow-xl shadow-gray-500 hover:-translate-y-3 transition-all duration-500 bg-yellow-400 rounded-xl cursor-pointer  flex justify-center items-center p-3 tracking-widest font-bold text-2xl">
                  Enquire
                </div>
              </ModalTrigger>
            </div>

            <ModalBody >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col gap-4 p-6 text-black dark:bg-gray-400 "
              >
                <h1 className="text-xl font-bold text-center">Book Your Service</h1>

                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
                <input
                  type="text"
                  name="org"
                  placeholder="Organization"
                  value={formData.org}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
                <textarea
                  name="service"
                  placeholder="Service Required"
                  value={formData.service}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={handleSubmit}
                  className="bg-black text-white py-2 rounded-2xl mt-4 w-full"
                >
                  Book
                </motion.button>
              </motion.div>
            </ModalBody>
          </Modal>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-blue-100 text-white dark:bg-black border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative h-180" 
                id={`${index}`}
              >
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 bg-blue-800 text-white rounded-lg w-fit">{service.icon}</div>
                  <CardTitle className="text-2xl font-bold">
                    <span className="text-blue-800">
                      {service.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex text-md text-slate-500 dark:text-slate-400 font-semibold h-full">
                        <span className=" text-black text-3xl self-baseline relative bottom-2 h-full">•</span> 
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise & Key Reference Projects Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 dark:bg-black bg-[url('/bg-cover/data_center.png')] bg-center bg-cover bg-no-repeat bg-fixed  mask-b-from-99% mask-t-from-99%  mb-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white bg-green-500 rounded-2xl pb-2">
                Expertise & Key Reference Projects
              </h1>
          </div>

          {/* Expertise Section */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold mb-8 text-center">
              <span className="text-white">
                 Core Expertise
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {expertise.map((item, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-t from-blue-600 to-pink-600 text-white  dark:text-black rounded-xl" >
                  <div className="mb-4 flex justify-center">{item.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <span>{item.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Reference Projects */}
          <div>
            <h3 className="text-4xl font-bold mb-8 text-center">
              <span className="text-white">
                Key Reference Projects
              </span>
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {keyProjects.map((project, index) => (
                <Card
                  key={index}
                  className="border-2 border-gray-200 hover:border-black transition-colors duration-300 dark:bg-white dark:text-slate-500 bg-blue-800"
                >
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <Briefcase className="h-5 w-5 mr-2 fill-white" />
                      <span className="text-md text-yellow-200 font-bold">{project.client}</span>
                    </div>
                    <CardTitle className="text-xl font-bold">
                      <span className="text-white">
                        {project.title}
                      </span>
                    </CardTitle>
                    <CardDescription className="dark:text-gray-500 text-white ">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-white text-black dark:bg-black  dark:text-white text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white dark:bg-black ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-green-500">
              Ready to Start Your Net Zero Journey?
            </span>
          </h2>
          <p className="text-xl text-blue-800 mb-8 max-w-2xl mx-auto font-bold">
            Let&apos;s discuss!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-400 hover:bg-green-500 text-white  px-8 py-3 text-lg cursor-pointer" onClick={()=>window.open(
      "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Consultation+Call&details=Let%27s+discuss+your+project&location=Google+Meet&add=mksingh@netzerothink.com&add=support@netzerothink.com",
      "_blank"
    )}>
              Schedule Consultation Today!
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
