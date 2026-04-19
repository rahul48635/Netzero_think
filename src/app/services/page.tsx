"use client";
import { Briefcase, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import useMediaQuery from "../hooks/useMediaQuery";
import { Modal, ModalBody, ModalTrigger } from "@/components/ui/animated-modal";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const pillars = [
    {
      title: "End-to-end “Measure → Reduce → Finance → Monetize” approach",
      color: "from-green-500 to-green-700",
    },
    {
      title: "Strong expertise across policy, technology & markets",
      color: "from-green-500 to-green-700",
    },
    {
      title: "Focus on high-emitting sectors with maximum impact",
      color: "from-green-500 to-green-700",
    },
    {
      title: "Blend of advisory + implementation + digital solutions",
      color: "from-green-500 to-green-700",
    },
    {
      title: "Trusted by industry, academia, and global institutions",
      color: "from-green-500 to-green-700",
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    org: "",
    email: "",
    service: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    window.open(
      `mailto:support@netzerothink.com,mksingh@netzerothink.com?subject=New Service Request from ${formData.name}&body=Name: ${formData.name}%0APhone: ${formData.phone}%0AOrg: ${formData.org}%0AEmail: ${formData.email}%0AService: ${formData.service}`,
    );
  };

  const services = [
    {
      title: "🌱 GHG Emissions, Scope 1–3 & SBTi Advisory",
      subtitle: "Transform your emissions into actionable insights",
      outcome:
        "Outcome: Regulatory compliance + data-driven decarbonization strategy ",
      features: [
        "Comprehensive GHG Inventory (Scope 1, 2 & 3)",
        "Science-Based Targets (SBTi) strategy & validation support",
        "Product-level carbon footprinting",
        "Net-zero roadmap development",
        "Digital carbon accounting tools & dashboards",
      ],
    },
    {
      title: "🌍 Sustainability, ESG, CBAM & LCA Solutions",
      subtitle: "Stay compliant. Stay competitive globally.",
      outcome: "Outcome: Global market access + investor-ready ESG positioning",
      features: [
        "ESG reporting & disclosures (BRSR, GRI, TCFD, SDGs)",
        "CBAM readiness & reporting (EU export compliance)",
        "Life Cycle Assessment (LCA) & embodied carbon analysis",
        "Environmental Impact Assessment (EIA)",
        "	Supply chain sustainability transformation",
      ],
    },
    {
      title: "⚡ Energy Transition & Decarbonization Solutions",
      subtitle: "Shift from fossil dependency to clean energy leadership.",
      outcome:
        "Outcome: Reduced energy cost + lower emissions + future readiness",
      features: [
        "Renewable energy feasibility, design & implementation",
        "Energy audits & efficiency optimization",
        "Green hydrogen & CCUS advisory",
        "Hybrid energy systems (solar + storage + wind)",
        "Industrial decarbonization pathways",
      ],
    },
    {
      title: "💰 Carbon Markets & Environmental Credits",
      subtitle: "Turn sustainability into revenue.",
      outcome: "Outcome: New revenue streams + improved ESG valuation",
      features: [
        "Carbon credit project development & registration",
        "Verification, validation & trading support",
        "I-RECs, Renewable Energy Certificates (RECs)",
        "Voluntary & compliance market advisory",
        "Carbon portfolio strategy",
        "	EPR (Extended Producer Responsibility) advisory",
      ],
    },
    {
      title: "🧑‍💼 Green Staffing & Digital Solutions",
      subtitle: "Build internal capability at scale.",
      outcome:
        "Outcome: Faster execution + reduced dependency on external consultants",
      features: [
        "Deployment of ESG & sustainability experts",
        "Interim Chief Sustainability Officer (CSO) support",
        "Carbon accounting software platforms",
        "ESG dashboards & automation tools",
        "Sustainability data management systems",
      ],
    },
    {
      title: "📊 Research, Training & Capacity Building",
      subtitle: "Empower your organization for long-term transformation.",
      outcome:
        "Outcome: Skilled workforce + organization-wide sustainability adoption",
      features: [
        "Customized corporate sustainability training",
        "Sector-specific decarbonization workshops",
        "Policy & market research",
        "Leadership advisory for CXOs & Boards",
        "Academic & institutional collaborations",
      ],
    },
  ];

  const expertise = [
    {
      title: "⚡ Power & Energy Sector",
      subtitle: "Renewables | Green Hydrogen | Grid Modernization",
      description: [
        "Renewable energy integration (solar, wind, storage)",
        "Green hydrogen project advisory (production to application)",
        "CCUS (Carbon Capture, Utilization & Storage)",
        "Smart grids & energy storage systems",
      ],
      value: "Value: Future-ready energy systems + decarbonized portfolios",
    },
    {
      title: "🔩 Mining & Metals (Iron & Steel)",
      subtitle: "Low-Carbon Steel | Compliance | Circular Economy",
      description: [
        "Green steel transition strategy",
        "Real-time emissions monitoring (Scope 1–3)",
        "CBAM & green taxonomy compliance",
        "Waste heat recovery & circular processes",
      ],
      value:
        "Value: Export readiness + cost optimization + regulatory compliance",
    },
    {
      title: "🏢 Buildings & Infrastructure",
      subtitle: "Net-Zero Buildings | Smart Cities | Low-Carbon Design",
      description: [
        "Net-zero building certification (LEED, IGBC, GRIHA)",
        "Embodied carbon & lifecycle assessments",
        "Energy-efficient retrofits",
        "Sustainable urban infrastructure planning",
      ],
      value: "Value: Reduced operational cost + higher asset valuation",
    },
    {
      title: "💼 Climate Finance & Green Investments",
      subtitle: "Unlock Capital for Sustainable Growth",
      description: [
        "Green bonds & sustainability-linked financing",
        "Climate risk & scenario analysis",
        "Carbon asset development",
        "ESG-aligned investment strategy",
      ],
      value: "Value: Access to global climate capital + investor confidence",
    },
    {
      title: "🔗 Cross-Sector Enablers",
      subtitle: "Supporting every industry with scalable solutions:",
      description: [
        "Digital carbon management platforms",
        "ESG compliance automation",
        "Training & workforce transformation",
        "Sustainability program management",
      ],
      value: "",
    },
  ];

  const keyProjects = [
    {
      title: "Green Hydrogen Ecosystem Development",
      client: "Government of UK",
      description:
        "Research study on green hydrogen ecosystem development focused on green ammonia adoption in agriculture sector",
      tech: ["Green Hydrogen", "Policy Research", "Decarbonization"],
    },
    {
      title: "Carbon Credit Market Prefeasibility",
      client: "Leading Power Trading Company",
      description: "Prefeasibility study on carbon credit market in India",
      tech: ["Carbon Credits", "Market Analysis", "Climate Finance"],
    },
    {
      title: "GHG Emissions Verification",
      client: "Leading Renewable Energy Developer",
      description:
        "Verification of GHG emissions in line with ISO 14064-3 guidelines",
      tech: ["ISO 14064-3", "GHG Accounting", "Carbon Verification"],
    },
    {
      title: "Decarbonization Training Program",
      client: "Mining, Steel & Building Sector",
      description: "Capacity building and training on decarbonization",
      tech: [
        "Training",
        "Decarbonization",
        "GHG Reduction",
        "Iron & Steel",
        "Mining",
        "Building",
      ],
    },
    {
      title: "ESG Reporting for Mining Company",
      client: "Large Mining Company, Karnataka",
      description: "ESG report development based on GRI principles",
      tech: ["GRI", "ESG Reporting", "Sustainability"],
    },
    {
      title: "Green Hydrogen Tech Prefeasibility",
      client: "City Gas Distribution Company",
      description:
        "Prefeasibility study to identify green hydrogen technologies",
      tech: ["Green Hydrogen", "Feasibility Study", "Gas Infrastructure"],
    },
    {
      title: "Japanese Tech Market Assessment",
      client: "Confidential Client",
      description:
        "Assessment of Japanese technologies for renewable energy, storage, e-mobility, and energy efficiency in India",
      tech: [
        "Tech Assessment",
        "Renewables",
        "Energy Efficiency",
        "e-Mobility",
      ],
    },
    {
      title: "Climate Training Content Development",
      client: "NCVET-aligned Training Initiative",
      description:
        "Content development and training on climate change, GHG accounting, and SEBI-BRSR",
      tech: [
        "NCVET",
        "SEBI-BRSR",
        "Climate Change",
        "Sustainability Education",
      ],
    },
    {
      title: "Hydro Project",
      client: "Hydro Developer, Himachal Pradesh",
      description: "Lender’s Engineer role for Hydro project",
      tech: ["Hydropower", "Project Engineering", "Lender’s Engineer"],
    },
    {
      title: "Life Cycle Assessment & EPD for Diverse Manufactured Products",
      client: "Product manufacturing organisations",
      description:
        "Conducted Cradle to Gate LCA of various products including furniture, garments, steel, chemicals , plastics, sustainable aviation fuel, Biofuel, FMCG products, automotive components, electronic devices and pharmaceutical drugs. ",
      tech: ["LCA", "EPD"],
    },
    {
      title:
        "Green Building & Net Zero Advisory for Residential and Commercial Projects",
      client: "Residential & Commercial Project Developers",
      description:
        "Provided advisory, designing, training and audit solutions to reduce embedded & operational emissions. ",
      tech: [
        "Embedded Emission",
        "Green Building",
        "Net Zero Building",
        "Net Zero Water",
        "Net Zero Energy",
        "Net Zero Waste ",
      ],
    },
    {
      title: "Energy, Emissions & EHS Audits for Industries",
      client: "Manufacturing & IT Organisations",
      description:
        "Conducted Energy, Emissions and EHS audit at various facilities and implemented IOT enabled solutions",
      tech: ["Energy Audit", "EHS Audit", "Emissions Audit"],
    },
    {
      title: "ESG Implementation & Project Development Support",
      client: "Independent Power Producers",
      description:
        "Owner’s & Lender’s Engineer role for multiple wind and solar projects across Asia Pecific Region. ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  Supporting Transition from EHS to ESG.",
      tech: [
        "ESG",
        "EHS",
        "GRI",
        "IFRS",
        "BRSR",
        "ISO14001",
        "ISO 45000",
        "Wind Energy",
        "Solar Power",
        "Project Management",
      ],
    },
  ];
  const isMobile = useMediaQuery("(max-width: 768px)");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen min-w-screen bg-white dark:bg-black text-black mx-10 ">
      {/* Introduction Section */}
      <section className="bg-[url('/bg-cover/services.webp')]   bg-cover bg-no-repeat bg-fixed   w-full h-full mask-b-from-99% mb-10 p-10 relative ">
        <div className="absolute inset-0 bg-black/40 -z-10"></div>
        <div className="max-w-6xl mx-auto mt-60">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white bg-green-500 rounded-2xl">
              Introduction
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full h-full">
            <div className={`${isMobile ? "text-center" : "text-left"}`}>
              <p className="text-3xl text-blue-300 mb-6 leading-relaxed font-extrabold ">
                Accelerating Your Net-Zero Journey with Measurable Impact
              </p>
              <p className="text-lg text-white mb-8 leading-relaxed font-bold">
                At Net Zero Think, we go beyond advisory — we deliver end-to-end
                decarbonization solutions, enabling organizations to measure,
                reduce, finance, and monetize their transition to net zero.
              </p>
              <p className="text-lg text-white mb-8 leading-relaxed font-bold">
                From GHG Emissions to carbon markets, green technologies to
                climate finance, we partner with you to turn sustainability into
                a competitive advantage.
              </p>
              <div className="flex flex-wrap gap-2  ">
                <div className="text-center bg-blue-900 rounded-2xl p-2 dark:bg-white flex-1/3 ">
                  <div className="text-3xl font-bold text-white dark:text-gray-400 ">
                    25+
                  </div>
                  <div className="text-lg text-gray-300 dark:text-gray-600">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center bg-blue-900 rounded-2xl p-1 dark:bg-white flex-1/3">
                  <div className="text-3xl font-bold text-white dark:text-gray-400">
                    100+
                  </div>
                  <div className="text-lg text-gray-300 dark:text-gray-600">
                    Team&apos;s years of experience
                  </div>
                </div>
                <div className="text-center bg-blue-900 rounded-2xl p-1 dark:bg-white flex-1/3">
                  <div className="text-3xl font-bold text-white dark:text-gray-400">
                    99%
                  </div>
                  <div className="text-lg text-gray-300 dark:text-gray-600">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full">
              <div className="justify-self-center self-center w-full sm:w-full h-full px-6  bg-blue-100  text-white flex flex-col items-center rounded-4xl p-5">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-12 text-blue-800 bg-transparent   rounded-2xl pb-2">
                  Why NET ZERO THINK ?
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
      <section className="py-20 px-4 md:px-6 lg:px-8  text-white dark:bg-black dark:text-black rounded-2xl bg-[url('/bg-cover/power_plant.webp')] bg-center bg-cover bg-no-repeat bg-fixed  mask-b-from-99% mask-t-from-99% mb-10">
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
                <ModalTrigger className="sm:w-[30rem]  self-center justify-self-center h-[5rem] ">
                  <div className="  text-white shadow-xl shadow-gray-500 hover:-translate-y-3 transition-all duration-500 bg-yellow-400 rounded-xl cursor-pointer  flex justify-center items-center p-3 tracking-widest font-bold text-2xl">
                    Enquire
                  </div>
                </ModalTrigger>
              </div>

              <ModalBody>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col gap-4 p-6 text-black dark:bg-gray-400 "
                >
                  <h1 className="text-xl font-bold text-center">
                    Book Your Service
                  </h1>

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
                  <CardTitle className="text-2xl font-bold">
                    <span className="text-blue-800">{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h2 className="text-xl text-gray-500 font-stretch-200% font-bold  text-left">
                    {service.subtitle}
                  </h2>
                  <br />

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex text-md text-slate-500 dark:text-slate-400 font-semibold h-full"
                      >
                        <span className=" text-black text-3xl self-baseline relative bottom-2 h-full">
                          •
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <br />
                  <h2 className=" text-green-500 text-xl  font-bold contain-content">
                    {service.outcome}
                  </h2>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise & Key Reference Projects Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 dark:bg-black bg-[url('/bg-cover/data_center.webp')] bg-center bg-cover bg-no-repeat bg-fixed  mask-b-from-99% mask-t-from-99%  mb-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white bg-green-500 rounded-2xl pb-2">
              Expertise & Key Reference Projects
            </h1>
          </div>

          {/* Expertise Section */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold mb-8 text-center">
              <span className="text-white">Sector Specific Solutions</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-t from-blue-600 to-pink-600 text-white  dark:text-black rounded-xl"
                >
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <br />
                  <h1 className="text-lg font-semibold">{item.subtitle}</h1>
                  <br />
                  <div className="flex flex-col">
                    {item.description.map((el, idx) => (
                      <span key={idx} className="text-left">
                        •{el}
                      </span>
                    ))}
                  </div>
                  <br />
                  <h1 className="font-bold">{item.value}</h1>
                </div>
              ))}
            </div>
          </div>

          {/* Key Reference Projects */}
          <div>
            <h3 className="text-4xl font-bold mb-8 text-center">
              <span className="text-white">Key Reference Projects</span>
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
                      <span className="text-md text-yellow-200 font-bold">
                        {project.client}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold">
                      <span className="text-white">{project.title}</span>
                    </CardTitle>
                    <CardDescription className="dark:text-gray-500 text-white ">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white text-black dark:bg-black  dark:text-white text-xs rounded-full"
                        >
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
            <Button
              size="lg"
              className="bg-green-400 hover:bg-green-500 text-white  px-8 py-3 text-lg cursor-pointer"
              onClick={() =>
                window.open(
                  `https://wa.me/+918240615694?text=I am interested in [Enter Service Name]`,
                  "_blank",
                )
              }
            >
              Schedule Consultation Today!
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
