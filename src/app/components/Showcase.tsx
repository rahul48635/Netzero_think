"use client";
import { motion } from "framer-motion";

const images = [
  {
    src: "/showcase/01.jpg",
    caption: "Net Zero Think at COP28 – Dubai",
  },
  {
    src: "/showcase/02.jpg",
    caption: "Acquaintance at COP28",
  },
  {
    src: "/showcase/04.jpg",
    caption: "Participation at Newsweek Panel Discussion during COP29-Baku",
  },
  {
    src: "/showcase/05.jpg",
    caption: "Participation at India Mobility Show (Bangaluru)",
  },
  {
    src: "/showcase/06.jpg",
    caption: "Delivering key note speech at Climate Innovation Summit (Dehradun)",
  },
  {
    src: "/showcase/07.jpg",
    caption: "Chairing session on Net Zero pathways during India Energy Week (New Delhi)",
  },
  {
    src: "/showcase/08.jpg",
    caption: "Recognised as a most promising sustainbility startup (Bangaluru)",
  },
  {
    src: "/showcase/09.jpg",
    caption: "Delivering Speech on Net Zero pathways (Bangaluru)",
  },
  {
    src: "/showcase/10.jpg",
    caption: "Recognised  at Vigyaan Bhawan (New Delhi)",
  },
  {
    src: "/showcase/11.jpg",
    caption: "Participation at Alliance for Industry Decarbonisation Panel Discussion (Abu Dhabi) ",
  },
  {
    src: "/showcase/12.jpg",
    caption: "Participation at IRENA 14th General Assembly (Abu Dhabi)",
  },
  {
    src: "/showcase/13.jpg",
    caption: "Participation at India Energy Forum (New Delhi)",
  },
];

export default function GlobalShowcase() {
  return (
    <section className="w-[95%] sm:w-[90%]  self-center justify-self-center px-6 py-20 bg-black/80 dark:bg-gray-950 text-gray-900 dark:text-white border-2 rounded-4xl m-5 border-blue-600 shadow-xl shadow-gray-500 sm:flex sm:flex-col sm:flex-wrap sm:items-center sm:justify-center">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold  text-white"
        >
          Global Representation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-white dark:text-gray-300"
        >
          Highlights from our presence at COP, Global & Regional summits.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl group bg-white dark:bg-gray-900"
          >
            <div className="overflow-hidden">
              <motion.img
                src={img.src}
                alt={img.caption}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
            <div className="p-4 text-center text-sm font-medium text-blue-500 dark:text-gray-100">
              {img.caption}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
