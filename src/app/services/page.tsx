"use client"
import {
  Award,
  Users,
  Target,
  Briefcase,
  ClipboardList,
  GraduationCap,
  UserCheck,
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
      description: "We help organizations develop robust systems to measure, report, and verify greenhouse gas (GHG) emissions in line with global standards. This ensures accuracy, transparency, and compliance in sustainability disclosures and target-setting.",
      features: ["Systematic GHG Emissions Measurement (Scope 1, 2 & 3)","Compliance with ISO 14064-3, GHG Protocol & SBTi","Third-Party Carbon Footprint Verification","Sustainability Disclosure Support","Accurate Reporting for Climate Targets","Alignment with Net Zero & ESG Standards"],
    },
    {
      icon: <FaCloud className="h-8 w-8" />,
      title: "Greenhouse Gas (GHG) Accounting & Carbon Footprint Analysis",
      description: "We help organizations accurately measure and analyze their greenhouse gas emissions across sectors through detailed inventories and life cycle assessments (LCA). Our service supports the creation of carbon footprints, identifies reduction opportunities, and enables businesses to transition toward net-zero through strategic roadmaps and carbon credit monetization.",
      features: ["Sector-Specific GHG Inventories (e.g., Steel, Energy, Transport)","Life Cycle Assessment (LCA) & Environmental Product Declarations (EPD)","Corporate Carbon Footprint Assessments","Net-Zero Transition Roadmap Development","GHG Reduction Opportunity Identification","Energy Efficiency Strategy Planning","Carbon Credit Monetization Pathways"],
    },
    {
      icon: <MdOutlinePolicy className="h-8 w-8" />,
      title: "Climate & Environmental Policy Advisory",
      description: "We provide expert advisory on climate and environmental regulations to help organizations navigate compliance, carbon markets, and emerging sustainability frameworks. Our services ensure alignment with national and global climate policies, including CBAM, SEBI-BRSR, and emission trading systems (ETS).",
      features: ["Strategic Climate Policy Compliance Guidance", "Advisory on Carbon Border Adjustment Mechanism (CBAM)", "Compliance with SEBI-BRSR, EU Taxonomy, ISSB, ESG Frameworks", "Guidance on Indian & International Carbon Trading Mechanisms","Carbon Market Feasibility Assessments","Regulatory Framework Navigation & Risk Advisory","Emission Trading Scheme (ETS) Advisory"],
    },
    {
      icon: <BsCoin className="h-8 w-8" />,
      title: "Environmental Credits & Sustainability Finance Advisory",
      description: "We assist organizations in unlocking value from environmental credits and sustainable finance. Our services include feasibility studies, credit verification, registry navigation, and guidance on securing green bonds, sustainability-linked loans, and other climate-related investment instruments.",
      features:[
          "Feasibility studies for environmental credits (Carbon, Plastic, Water, EPR, REC)",
          "Advisory on voluntary and compliance market participation",
          "Support in credit verification and registry selection",
          "Transaction support on global credit platforms",
          "Sustainable finance strategy development",
          "Guidance on green bonds and sustainability-linked loans",
          "Carbon-linked investment structuring"
        ],
    },
    {
      icon: <ClipboardList className="h-8 w-8" />,
      title: "ESG Strategy & Reporting",
      description: "We support businesses in building ESG strategies that meet global and regional standards such as SEBI-BRSR, TCFD, and GRI. Our services ensure compliance, transparency, and integration of circular economy practices for long-term sustainability.",
      features: [
        "Development of ESG strategy frameworks aligned with SEBI-BRSR, TCFD, and GRI",
        "ESG risk assessment and materiality analysis",
        "Climate impact reporting and disclosures",
        "Sustainability disclosure compliance and documentation",
        "Integration of circular economy principles into operations",
        "Stakeholder engagement for ESG alignment",
        "Support for ESG ratings and benchmarks"
      ],
    },
    {
      icon: <GraduationCap  className="h-8 w-8" />,
      title: "Capacity Building & Professional Training",
      description: "We design and deliver capacity-building programs and professional training workshops focused on climate action, ESG compliance, and sustainability. These programs empower organizations and professionals with the skills and certifications needed to lead decarbonization and sustainability transitions across sectors.",
      features: [
        "Corporate training on GHG accounting and carbon markets",
        "Workshops on ESG strategy, compliance, and disclosures",
        "Training on climate risk assessment and adaptation planning",
        "Carbon and environmental credit market orientation",
        "Sector-specific sustainability initiatives (e.g., green steel, energy transition)",
        "Development of professional certification programs",
        "Support for industry-wide climate transition capacity"
      ],
    },
    {
      icon: <UserCheck  className="h-8 w-8" />,
      title: "Green Staffing Solution",
      description: "We provide flexible and specialized green staffing solutions to help organizations meet their sustainability and ESG goals. From deploying experts and recruiting on-demand talent to building in-house teams via BOT models, we support startups, corporates, and CSR projects in scaling their climate and energy transition efforts.",
      features: [
        "Deployment of Sustainability & ESG Experts (Short-term/Long-term)",
        "On-demand green talent recruitment",
        "Build-Operate-Transfer (BOT) model for sustainability departments",
        "Specialized experts for renewable energy and energy efficiency projects",
        "Capacity building and staff augmentation for climate-tech startups and CSR initiatives"
      ],
    },
  ]

  const expertise = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Energy Sector",
      description: "Power ,Oil & Gas,Renewable Energy,Storage",

    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Infrastructure Sector ",
      description: "Buildings",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Banking and Financial Institutions (BFSI)",
      description: "Banks,Insurrance & Reinsurrance Company",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Agriculture Sector",
      description: "Forestery & Agroforestery",
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
    description: "Capacity building and training on decarbonization-focused topics",
    tech: ["Training", "Decarbonization", "GHG Reduction"]
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
    description: "Assessment of Japanese technologies for renewable energy, storage, e-mobility, and efficiency in India",
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
    description: "Life Cycle Assessment (LCA) and Environment Product Declaration (EPDConducted Cradle to Gate LCA of various products including furniture, garments, steel, chemicals , plastics, sustainable aviation fuel, Biofuel, FMCG products, automotive components, electronic devices and pharmaceutical drugs. ",
    tech: ["LCA",  "EPD"]
  },
  {
    title: "Green Building & Net Zero Advisory for Residential and Commercial Projects",
    client: "Residential & Commercial Project Developers",
    description: "Green Building and Net Zero Solutions Provided advisory, designing, training and audit solutions to reduce embedded & operational emissions of buildings. ",
    tech: ["Embedded Emission", "Green Building", "Net Zero Building", "Net Zero Water", "Net Zero Energy", "Net Zero Waste "]
  },
  {
    title: "Energy, Emissions & EHS Audits with IoT-Based Decarbonisation for Industries",
    client: "Manufacturing & IT Organisations",
    description: "Audit & Decarbonisation Solutions Implementation Conducted Energy, Emissions and EHS audit at various facilities and implemented IOT enabled solutions",
    tech: [ "Energy Audit", "EHS Audit", "Emissions Audit"]
  },
  {
    title: "ESG Implementation & Project Development Support",
    client: "Independent Power Producers",
    description: "Owner’s & Lender’s Engineer role for multiple wind and solar projects across Asia Pecific Region. Transition from EHS to ESG.",
    tech: [ "ESG", "EHS", "GRI", "IFRS", "BRSR", "ISO14001", "ISO 45000","Wind Energy", "Solar Power", "Project Management"]
  },
];
const isMobile=useMediaQuery("(max-width: 768px)")



  return (
    <div className="min-h-screen min-w-screen bg-white dark:bg-black text-black mx-10 ">
      {/* Introduction Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 my-20 md:my-15 md:py-0 ">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-blue-800 bg-purple-500  shadow-[0px_0px_40px_10px_#495057] rounded-2xl pb-2 w-full">
                Introduction
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${isMobile?"text-center":"text-left"}`}> 
              <p className="text-lg text-blue-900 mb-6 leading-relaxed font-bold">
                Net Zero Think Pvt Ltd (NZT) is a leading Solution Provider dedicated to driving low carbon economy transition. As a global climate-focused solutions provider, we support organizations in achieving net-zero emissions and long-term sustainability. Headquartered in Bangalore, India, our global solution centre collaborates with a network of associate partners to deliver tailored climate-centric solutions & services.
              </p>
              <p className="text-lg text-blue-900 mb-8 leading-relaxed font-bold">
                 With a mission to assist industries, government bodies, and stakeholders in meeting net-zero targets, we offer expert guidance in emissions accounting & auditing, sustainability strategy, and net zero initiatives. Additionally, we provide Green Staffing solutions, comprehensive training and capacity-building programs to equip professionals and organizations with the knowledge and skills required to navigate the evolving sustainability landscape and implement effective climate solutions.
              </p>
              <div className="flex flex-wrap gap-2  ">
                <div className="text-center bg-blue-900 rounded-2xl p-2 dark:bg-white w-60 h-20 flex-1/3 ">
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
            <div className="bg-purple-500 rounded-2xl p-8 text-white dark:text-black dark:bg-white">
              <h3 className="text-3xl font-bold mb-4">
                <span className="text-blue-800">
                  Why Choose Us?
                </span>
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start text-2xl">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Transparent Pricing</span>
                </li>
                <li className="flex items-start text-2xl">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Deep Domain Knowledege & Experience</span>
                </li>
                <li className="flex items-start text-2xl">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>End to End Solutions</span>
                </li>
                <li className="flex items-start text-2xl">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Certified Experts</span>
                </li>
                <li className="flex items-start text-2xl">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Global Reachout</span>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      {/* Our Services & Solutions Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white text-white dark:bg-black dark:text-black rounded-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-blue-800 bg-purple-500  shadow-[0px_0px_40px_10px_#495057] rounded-2xl pb-2 w-full">
                Our Services & Solutions
              </h1>
          </div>
           
        {/* Modal */}
        <div className="w-full h-30 ">
          <Modal>
            <div className="flex items-center justify-center w-full  ">
              <ModalTrigger  className="sm:w-[30rem]  self-center justify-self-center h-[5rem] ">
                <div className="  text-purple-400 shadow-xl shadow-gray-500 hover:-translate-y-3 transition-all duration-500 bg-blue-800  rounded-xl cursor-pointer  flex justify-center items-center p-3 tracking-widest font-bold text-2xl">
                  Select Service
                </div>
              </ModalTrigger>
            </div>

            <ModalBody>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col gap-4 p-6 text-black dark:bg-gray-400"
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
                className="bg-gradient-to-b from-blue-600 to-pink-600 text-white dark:bg-black border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative h-180" 
                id={`${index}`}
              >
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 bg-green-500 text-white rounded-lg w-fit">{service.icon}</div>
                  <CardTitle className="text-2xl font-bold">
                    <span className="text-green-500">
                      {service.title}
                    </span>
                  </CardTitle>
                  <CardDescription className="text-white text-base ">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 custom-list">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-white dark:text-slate-400 font-semibold">
                        <div className="w-2 h-2 bg-black dark:bg-white rounded-full mr-3 "></div>
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
      <section className="py-20 px-4 md:px-6 lg:px-8 dark:bg-black bg-white ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-blue-800 bg-purple-500  shadow-[0px_0px_40px_10px_#495057] rounded-2xl pb-2 w-full">
                Our Expertise & Key Reference Projects
              </h1>
          </div>

          {/* Expertise Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">
              <span className="text-blue-800">
                Our Core Expertise
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
            <h3 className="text-3xl font-bold mb-8 text-center">
              <span className="text-blue-800">
                Key Reference Projects
              </span>
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {keyProjects.map((project, index) => (
                <Card
                  key={index}
                  className="border-2 border-gray-200 hover:border-black transition-colors duration-300 dark:bg-white dark:text-slate-500 bg-gradient-to-b from-green-500 to-yellow-500"
                >
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <Briefcase className="h-5 w-5 mr-2 fill-white" />
                      <span className="text-sm text-blue-900 font-extrabold">{project.client}</span>
                    </div>
                    <CardTitle className="text-xl font-bold">
                      <span className="text-white">
                        {project.title}
                      </span>
                    </CardTitle>
                    <CardDescription className="dark:text-gray-500 text-gray-800 ">{project.description}</CardDescription>
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
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-purple-500">
              Ready to Start Your Net Zero Journey?
            </span>
          </h2>
          <p className="text-xl text-blue-800 mb-8 max-w-2xl mx-auto font-bold">
            Let&apos;s discuss!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-400 hover:bg-purple-500 text-white  px-8 py-3 text-lg cursor-pointer" onClick={()=>window.open(
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
