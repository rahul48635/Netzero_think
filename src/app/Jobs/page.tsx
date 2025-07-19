"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"

export default function JobsAndServicesPage() {
    const jobListings = [
  {
    title: "Marketing & Social Media Intern",
    description: "Assist in brand visibility through social media, content creation, and growth campaigns.",
    skills: ["Canva", "Instagram Marketing", "Copywriting", "Analytics"],
    qualification: "Any undergraduate student with an interest in marketing"
  },
]

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    qualification: "",
    skills: "",
    file: null as File | null
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as HTMLInputElement
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.open(`mailto:support@netzerothink.com?subject=New Service Request from ${formData.name}&body=Name: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AQualifications: ${formData.qualification}%0ASkills: ${formData.skills}%0AAttach_CV: [Attach Your CV]`)
  }

  return (
    <div className="h-full w-full bg-gray-100 py-16 px-4 sm:px-10 dark:bg-black bg-[url('/bg-cover/corp_2.png')]   bg-fixed bg-cover bg-no-repeat ">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white bg-green-500 rounded-2xl text-center mt-30 sm:mt-60 max-w-6xl mx-auto">Available Jobs</h1>
      <section className="w-full h-full relative my-30  p-5 rounded-2xl ">
        <div className="flex w-full h-full gap-5 flex-wrap items-center justify-center">
            {jobListings.map((item,idx)=>(
                <Card key={idx} className="max-w-130 h-110 sm:h-70  bg-gradient-to-r  from-slate-300 to-gray-400 p-5 ">
                    <CardTitle className="text-blue-500 font-bold border-b-2 border-black p-1">
                        {item.title}
                    </CardTitle>
                    <CardDescription className="text-blue-900 w-full text-wrap h-full">
                        {item.description}
                    </CardDescription>
                    <div className="flex flex-col gap-2 h-full w-full">
                        <h1 className="font-semibold">
                            • Skills Required
                        </h1>
                        <div className="relative left-3 w-full h-full flex flex-wrap gap-2">
                            {item.skills.map((skill, i) => (
                            <span key={i} className="px-2 py-1  text-sm rounded-md shadow text-black text-center justify-self-center self-center bg-gray-200">
                                {skill}
                            </span>
                            ))}
                        </div>
                        <h1 className="font-semibold ">
                            • Qualification Required
                        </h1>
                        <div className="text-wrap relative left-3  w-full  h-full">
                            {item.qualification}
                        </div>
                    </div>
                </Card>
            ))}
        </div>
      </section>
      <section className="w-full h-full text-black">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white bg-green-500 rounded-2xl text-center max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Jobs & Internship Opportunities
          </motion.h1>
          <motion.form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto bg-white shadow-lg p-8 rounded-xl space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                required
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 placeholder-blue-900 placeholder:font-bold"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                required
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 placeholder-blue-900 placeholder:font-bold" 
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 placeholder-blue-900 placeholder:font-bold"
            />
            <input
              type="text"
              name="qualification"
              placeholder="Qualification (e.g., B.Tech, MBA)"
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 placeholder-blue-900 placeholder:font-bold"
            />
            <textarea
              name="skills"
              placeholder="List your skills"
              rows={4}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 placeholder-blue-900 placeholder:font-bold"
            />
            {/* <div>
              <label className="block mb-1 font-medium text-sm text-gray-600">
                Resume / Attachment
              </label>
              <input
                placeholder="Drop your doc"
                type="file"
                name="file"
                accept=".pdf,.doc,.docx,.jpeg,.jpg"
                onChange={handleChange}
                required
                className="w-full cursor-pointer"
              />
            </div> */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-green-500 text-white font-semibold rounded-md cursor-pointer text-2xl"
              onClick={handleSubmit}
            >
              Submit Application
            </motion.button>
          </motion.form>
      </section>
    </div>
  )
}
