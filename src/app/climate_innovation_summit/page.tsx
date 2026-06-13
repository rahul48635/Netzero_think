"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* Reusable Section */
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-24">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white bg-green-500 rounded-2xl text-center py-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h1>

      <div className="bg-white/10 backdrop-blur-xl rounded-2xl text-white font-bold p-8">
        {children}
      </div>
    </section>
  );
}

export default function Climate_Innovation_Summmit() {
  const banner: Record<string, string> = {
    Organiser: "/speakers_partners/Csis_logo.jpeg",
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[url('/bg-cover/CLS_copy.webp')] bg-fixed bg-cover bg-no-repeat">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 "></div>

      <div className="relative max-w-6xl mx-auto px-6 sm:my-50 my-10">
        {/* About the Summit */}
        <Section title="Climate Innovation Summit 2026">
          <div className="grid grid-cols-1 sm:grid-cols-1 sm:w-full md:flex md:justify-center  gap-6 mt-12 ">
            {Object.entries(banner).map(([key, item], idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-2xl border border-white/20 "
              >
                <Image
                  src={item}
                  alt={`Speaker ${item}`}
                  width={500}
                  height={300}
                  className="w-[70rem] h-70 object-fill transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-bold">
                  {key}
                </div>
              </div>
            ))}
          </div>
          <br />
          <p className="section-text w-full">
            Greetings from the Climate Innovation Summit 2026 Organizing Team!
            On behalf of the organizing committee, we extend our heartfelt
            gratitude for all the partners, speakers and participants in the
            Climate Innovation Summit 2026, held on 28–29 May 2026 at IIM
            Bangalore. Your presence, insights, and active engagement made the
            summit a remarkable success. The meaningful discussions, exchange of
            ideas, and collaborative spirit demonstrated during the summit have
            strengthened our collective commitment toward accelerating climate
            action and achieving a sustainable, net-zero future for Viksit
            Bharat and beyond. We sincerely thank you for taking the time to
            join us and contribute to this important global dialogue on climate
            innovation, sustainability, clean technologies, ESG, energy
            transition, green finance, circular economy, and net-zero pathways.
            <br />
            <br />
            Key takeaways and insights are available via below link.
          </p>
          <br />
          <p className="text-green-500">
            <Link href="https://drive.google.com/file/d/1RwSLpmHbEgfjRX4RunZsySH0_w5RXbFt/view?usp=sharing">
              Souvenir
            </Link>
            <br />
            <Link href=" https://drive.google.com/drive/folders/1scEaLKZOM-WyEoocBWlFmB0Mj3-LxHME?usp=sharing">
              Presentations
            </Link>
            <br />
            <Link href="https://drive.google.com/file/d/10g8fMPQowVcGwcViKL4Xge3jRJJY0lmv/view?usp=sharing">
              ESG Study Report
            </Link>
            <br />
          </p>
          <br />
          <p>
            We hope the summit provided valuable knowledge, networking
            opportunities, and inspiration for future collaboration. We look
            forward to staying connected to explore potential collaboration
            opportunity and welcoming you again to our future climate
            initiatives and events. <br />
            <br /> For any enquiry contact to climateinnovation@netzerothink.com{" "}
            <br />
            <br />
            Once again, thank you for being part of the Climate Innovation
            Summit 2026.
          </p>
        </Section>
      </div>
    </div>
  );
}
