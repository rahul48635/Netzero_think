"use client";
import { motion } from "framer-motion";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export default function JobsAndServicesPage() {
  const jobListings = [
    {
      title: "⚡ 1. Energy / Emissions Auditor",
      roleOverview:
        "We are looking for a skilled professional to conduct energy audits and GHG emissions assessments across industrial, commercial, and infrastructure projects.",
      keyResponsibilities: [
        "Conduct energy audits and identify efficiency opportunities",
        "Perform GHG inventory (Scope 1, 2 & 3) assessments",
        "Analyze energy consumption patterns and recommend optimization measures",
        "Support ESG, CBAM, and compliance reporting",
        "Prepare technical reports and client presentations",
      ],
      qualifications: [
        "Bachelor's/Master's in Energy, Mechanical, Electrical, or Environmental Engineering",
        "2–6 years of relevant experience",
        "Knowledge of ISO 50001, GHG Protocol, energy audit frameworks",
      ],
      preferredSkills: [
        "Strong analytical and reporting skills",
        "Experience in industrial audits is a plus",
      ],
      experience: "2–6 years",
      applyLink: "https://forms.gle/DEnmn9SjgzCZBv3d7",
    },
    {
      title: "📈 2. Business Development Manager (Climate & Sustainability)",
      roleOverview:
        "Drive growth by building strategic partnerships and expanding Net Zero Think's presence across industries.",
      keyResponsibilities: [
        "Identify and develop new business opportunities",
        "Engage with CXOs, sustainability leaders, and government stakeholders",
        "Prepare proposals, pitch decks, and commercial strategies",
        "Support partnerships in ESG, carbon markets, and energy transition",
        "Represent the company at events, conferences, and client meetings",
      ],
      qualifications: [
        "MBA / Engineering with 3–8 years experience",
        "Background in consulting, sustainability, or energy sector preferred",
      ],
      preferredSkills: [
        "Strong communication & negotiation skills",
        "Understanding of ESG, carbon markets, or climate policies",
      ],
      experience: "3–8 years",
      applyLink: "https://forms.gle/DEnmn9SjgzCZBv3d7",
    },
    {
      title: "🌍 3. GHG Emissions Analyst",
      roleOverview:
        "Support organizations in measuring, reporting, and reducing carbon emissions.",
      keyResponsibilities: [
        "Develop GHG inventories (Scope 1, 2, 3)",
        "Perform carbon footprint assessments (organization & product level)",
        "Support SBTi, net-zero strategies, and ESG reporting",
        "Work on carbon accounting tools and dashboards",
        "Assist in carbon credit projects and documentation",
      ],
      qualifications: [
        "Bachelor's/Master's in Environmental Science, Climate Studies, Engineering, or related fields",
        "1–5 years of experience",
      ],
      preferredSkills: [
        "Knowledge of GHG Protocol, LCA, CBAM, ESG frameworks",
        "Data analysis (Excel, Power BI, Python is a plus)",
      ],
      experience: "1–5 years",
      applyLink: "https://forms.gle/DEnmn9SjgzCZBv3d7",
    },
    {
      title: "📊 4. Energy & Climate Modeling Expert",
      roleOverview:
        "Work on advanced energy system modeling and decarbonization scenarios to support policy and industry transitions.",
      keyResponsibilities: [
        "Develop energy transition models & decarbonization pathways",
        "Conduct scenario analysis (Net Zero, BAU, policy-driven)",
        "Support projects in renewables, hydrogen, CCUS, and grid systems",
        "Work with tools like LEAP, TIMES, Python, MATLAB, or similar",
        "Prepare insights for reports, clients, and policy advisory",
      ],
      qualifications: [
        "Master's/PhD in Energy Systems, Climate Science, Economics, or related field",
        "3–10 years of relevant experience",
      ],
      preferredSkills: [
        "Strong modeling, data analytics, and research capabilities",
        "Experience in policy or consulting projects",
      ],
      experience: "3–10 years",
      applyLink: "https://forms.gle/DEnmn9SjgzCZBv3d7",
    },
    {
      title: "⚡ 5. Renewable Energy Expert (Land & Open Access Power Sale)",
      roleOverview:
        "Net Zero Think is hiring a Renewable Energy Expert with experience in land acquisition and open access power sale to support solar, wind, and hybrid energy projects.",
      keyResponsibilities: [
        "Identify and secure land for renewable energy projects",
        "Conduct feasibility studies and support project development",
        "Structure open access models (captive, group captive, third-party)",
        "Develop and negotiate Power Purchase Agreements (PPAs)",
        "Advise on state-wise OA regulations, approvals, and compliance",
        "Engage with clients, developers, DISCOMs, and regulators",
      ],
      qualifications: [
        "5–12 years of experience in renewable energy",
        "Strong expertise in land acquisition and C&I power sale",
        "Knowledge of Indian open access regulations and policies",
        "Engineering degree (MBA preferred)",
      ],
      preferredSkills: [
        "Experience in renewable energy project development",
        "Strong negotiation and stakeholder management skills",
      ],
      experience: "5–12 years",
      applyLink: "https://forms.gle/DEnmn9SjgzCZBv3d7",
    },
    {
      title: "🎓 6. Internship Program (6–12 Months)",
      roleOverview:
        "A structured internship program for students and young professionals to gain hands-on experience in climate, energy, and sustainability consulting.",
      keyResponsibilities: [
        "Support in Business Development Activities",
        "Support projects in GHG accounting, ESG reporting, and research",
        "Assist in data collection, analysis, and report preparation",
        "Participate in training sessions and client discussions",
        "Contribute to content, research papers, and knowledge products",
      ],
      qualifications: [
        "Students or recent graduates in Business, Engineering, Environmental Science, Economics, MBA, or related fields",
        "Strong interest in climate change and sustainability",
      ],
      preferredSkills: [
        "Real project exposure",
        "Mentorship from industry experts",
        "Certificate & potential full-time opportunity",
      ],
      experience: "6–12 Months",
      applyLink: "https://forms.gle/DEnmn9SjgzCZBv3d7",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(` https://forms.gle/DEnmn9SjgzCZBv3d7`);
  };

  return (
    <div className="h-full w-full bg-gray-100 py-16 px-4 sm:px-10 dark:bg-black bg-[url('/bg-cover/corp_2.webp')]   bg-fixed bg-cover bg-no-repeat ">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white bg-green-500 rounded-2xl text-center mt-30 sm:mt-60 max-w-6xl mx-auto">
        Available Jobs
      </h1>
      <section className="w-full h-full relative my-30  p-5 rounded-2xl ">
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 p-8">
              <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">
                  Career Opportunities
                </h1>
                <div className="grid grid-cols-1 gap-6">
                  {jobListings.map((job, idx) => (
                    <Card
                      key={idx}
                      className="overflow-hidden border-2 border-slate-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl"
                    >
                      {/* Header Section */}
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6">
                        <CardTitle className="text-2xl font-bold text-white mb-2">
                          {job.title}
                        </CardTitle>
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium text-blue-100">
                            {job.experience}
                          </span>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 space-y-6">
                        {/* Role Overview */}
                        <div>
                          <h3 className="text-lg font-semibold text-blue-800 mb-2 flex items-center gap-2">
                            <span className="w-1 h-5 bg-blue-600 rounded"></span>
                            Role Overview
                          </h3>
                          <CardDescription className="text-blue-800 leading-relaxed pl-3">
                            {job.roleOverview}
                          </CardDescription>
                        </div>

                        {/* Key Responsibilities */}
                        <div>
                          <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center gap-2">
                            <span className="w-1 h-5 bg-blue-600 rounded"></span>
                            Key Responsibilities
                          </h3>
                          <ul className="space-y-2 pl-3">
                            {job.keyResponsibilities.map(
                              (responsibility, i) => (
                                <li
                                  key={i}
                                  className="text-blue-800 flex items-start gap-2"
                                >
                                  <span className="text-blue-600 mt-1 font-bold">
                                    •
                                  </span>
                                  <span className="text-sm leading-relaxed">
                                    {responsibility}
                                  </span>
                                </li>
                              ),
                            )}
                          </ul>
                        </div>

                        {/* Qualifications */}
                        <div>
                          <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center gap-2">
                            <span className="w-1 h-5 bg-blue-600 rounded"></span>
                            Qualifications
                          </h3>
                          <ul className="space-y-2 pl-3">
                            {job.qualifications.map((qualification, i) => (
                              <li
                                key={i}
                                className="text-blue-800 flex items-start gap-2"
                              >
                                <span className="text-blue-600 mt-1">✓</span>
                                <span className="text-sm leading-relaxed">
                                  {qualification}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Preferred Skills */}
                        <div>
                          <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center gap-2">
                            <span className="w-1 h-5 bg-blue-600 rounded"></span>
                            Preferred Skills
                          </h3>
                          <div className="flex flex-wrap gap-2 pl-3">
                            {job.preferredSkills.map((skill, i) => (
                              <span
                                key={i}
                                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all cursor-default"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Apply Button */}
                        <div className="pt-4 border-t border-slate-200">
                          <a
                            href={job.applyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                          >
                            Apply Now
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section title="" className="w-full h-full text-black">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white bg-green-500 rounded-2xl text-center max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Jobs & Internship Opportunities
        </motion.h1>

        <div className="bg-black/30 border-2 w-full rounded-2xl p-5">
          <p className="text-3xl   text-slate-300">
            <span className="font-bold text-4xl">
              Join Us in Building a Net-Zero Future
            </span>
            <br />
            At Net Zero Think, you won’t just work on projects — you will shape
            industries, influence policy, and drive real climate impact. If you
            are interested to join
          </p>
        </div>
        <br />
        <div className="w-full flex justify-center items-center">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className=" py-3 px-5  bg-green-500 text-white font-semibold rounded-md cursor-pointer text-2xl"
            onClick={handleSubmit}
          >
            Submit Application
          </motion.button>
        </div>
      </section>
    </div>
  );
}
