"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const pillars = [
  {
    title: "Measure",
    description:
      "Understand and quantify your carbon footprint with accurate tools and reporting.",
    color: "from-blue-500 to-blue-700",
  },
  {
    title: "Reduce/Remove",
    description:
      "Implement strategies to reduce emissions and remove unavoidable carbon output.",
    color: "from-green-500 to-green-700",
  },
  {
    title: "Offset",
    description:
      "Balance remaining emissions through credible carbon offset projects.",
    color: "from-yellow-500 to-yellow-700",
  },
];

export default function DecarbonisationPillars() {
  return (
    <section className="justify-self-center self-center w-[70%] sm:w-[90%] px-6 py-16 bg-blue-100  text-white flex flex-col items-center rounded-4xl m-30">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-12 text-blue-800 bg-transparent   rounded-2xl pb-2">
          Decarbonization Stratergies
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-purple-500">
        Net Zero Think&apos;s solutions are based on 3 Key Pillars of Decarbonisation
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`bg-gradient-to-br ${pillar.color} rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform duration-300 w-50 self-center justify-self-center`}
          >
            <div className="flex items-center gap-3  w-50 self-center justify-self-center ">      
              <h3 className="text-xl font-bold text-center self-center justify-self-center w-full flex gap-2 items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
                {pillar.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
