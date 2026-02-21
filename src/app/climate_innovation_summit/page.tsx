"use client";
import { motion } from "framer-motion";
import Image from "next/image";

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
  const speakers: Record<string, string> = {
    Media_Partner: "/speakers_partners/media_partner.jpeg",
  };
  const banner: Record<string, string> = {
    NetZeroThink: "/speakers_partners/organising_partner.jpeg",
    IIM_Bangalore: "/speakers_partners/Event-Logos.png",
  };
  const partner: Record<string, string> = {
    Mr_Upendra_Tripathy: "/speakers_partners/Mr_Upendra_Tripathy.jpeg",
    Mr_Erik_Solheim: "/speakers_partners/Erik_Solheim.jpeg",
    Mr_Arne_Lorenzen: "/speakers_partners/Mr_Arne_Lorenzen.jpeg",
    Mr_Parobodha_Archya: "/speakers_partners/Mr_Parobodha_Archya.jpeg",
    Dr_Umakant_Panda: "/speakers_partners/Dr_Umakant_Panda.jpeg",
    Mr_D_Radhakrishna: "/speakers_partners/Mr_D.Radhakhrishnan.jpeg",
    Dr_Vibha_Dhavan: "/speakers_partners/Dr_Vibha_Dhavan.jpeg",
    Dr_Kurian_Joseph: "/speakers_partners/Dr.Kurian_Joseph.jpeg",
    Dr_Saurabh_Kundu: "/speakers_partners/Dr_Saurabh_Kundu.jpeg",
    Mr_Sanjeev_Paul: "/speakers_partners/Mr_Sanjeev_Paul.jpeg",
    Mr_Manu_Srivastava: "/speakers_partners/Mr_Manu_Srivastav.jpeg",
  };
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[url('/bg-cover/CLS_copy.png')] bg-fixed bg-cover bg-no-repeat">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 "></div>

      <div className="relative max-w-6xl mx-auto px-6 sm:my-50 my-10">
        {/* About the Summit */}
        <Section title="Climate Innovation Summit 2026">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-6 mt-12">
            {Object.entries(banner).map(([key, item], idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-2xl border border-white/20"
              >
                <Image
                  src={item}
                  alt={`Speaker ${item}`}
                  width={300}
                  height={300}
                  className="w-full h-60 object-contain transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-bold">
                  {key}
                </div>
              </div>
            ))}
          </div>
          <p className="section-text w-full">
            The Climate Innovation Summit 2026 at IIM Bangalore is a premier
            two-day event designed to accelerate India’s journey toward Viksit
            Bharat 2047 and Net Zero 2070. This summit serves as a critical
            catalyst for clean technology adoption, industrial decarbonization,
            and green economic growth.
          </p>
        </Section>

        {/* Summit Agenda */}
        <Section title="Summit Agenda & Focus Areas">
          <p className="section-text">
            Building on the successful sessions from our previous year, the 2026
            agenda focuses on high-impact sectors:
          </p>

          <ul className="section-list">
            <li>
              &bull; Power Sector Transformation – Renewables, Storage & Grid
              Flexibility
            </li>
            <li>&bull; Decarbonising India’s Buildings & Infrastructure</li>
            <li>
              &bull; Metal & Mining Transition – Pathways to Low-Carbon Steel,
              Aluminium & Critical Minerals
            </li>
            <li>&bull; Innovation in Wind, Solar, Hydrogen & Bioenergy</li>
            <li>&bull; Digital Technology, AI & Robotics in Decarbonisation</li>
            <li>
              &bull; Scaling Forestry, Agroforestry & Nature-Based Carbon
              Removal
            </li>
            <li>
              &bull; Climate Finance & Carbon Markets for India’s Net-Zero
              Vision
            </li>
            <li>
              &bull; Climate Innovation, Startups & Green Jobs for Viksit Bharat
              2047
            </li>
          </ul>
        </Section>

        {/* Exclusive Roundtables */}
        <Section title="Exclusive Roundtables & Networking">
          <p className="section-text text-left">
            Engage in high-impact Policy Dialogues and curated Business
            Matchmaking designed for strategic public-private partnerships.
            These sessions bring together a premium network of CXOs,
            Professionals, Researchers, and Regulators to shape the discourse
            for India&apos;s Net-Zero transformation.
          </p>
        </Section>

        {/* Speakers */}
        <Section title="Invited  Speakers & Thought Leaders ">
          <p className="section-text text-left">
            Join 30+ global speakers and industry pioneers.
          </p>

          {/* IMAGE GRID (for adding leaders/speakers) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12">
            {Object.entries(partner).map(([key, val], idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-2xl border border-white/20"
              >
                <Image
                  src={val}
                  alt={key}
                  width={300}
                  height={300}
                  className="w-full h-60 object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-bold">
                  {key}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Strategic Milestones */}
        <Section title="Strategic Milestones & Recognitions">
          <p className="section-text text-left">
            The Climate Innovation Summit 2026 provides a high-profile stage for
            organizations to move from commitment to action. This dedicated
            segment celebrates progress and catalyzes future breakthroughs.
          </p>

          <ul className="section-list">
            <li>&bull; Knowledge & Research Launches</li>
            <li>&bull; Corporate Announcements & Partnerships</li>
            <li>&bull; Innovation & Product Showcases</li>
            <li>&bull; Leadership Recognitions & Awards</li>
            <li>&bull; Participation Certificates</li>
          </ul>

          <p className="section-text text-left mt-6">
            <span className="text-green-300">One Participant, One Tree</span>:
            In honor of every guest and attendee, we commit to planting one tree
            per person, fostering a tangible green legacy long after the summit
            concludes.
          </p>
        </Section>

        {/* Partner with Us */}
        <Section title="Partner with Us">
          <p className="section-text text-left">
            Position your organization at the forefront of the climate movement.
          </p>
          <br />

          <ul className="section-list">
            <li>
              Opportunities: Title & Co-Title Partner , Knowledge Partner ,
              Sector Theme Partner (Power, Buildings, Mining, Nature-based,
              Climate Finance) ,Technology & Innovation Partner ,ESG/Climate
              Leadership Partner ,University & Research Collaborators ,Media &
              Outreach Partners.
            </li>
            <br />
            <li>
              Who Attends: Ministries ,Regulators , Think Tanks , Global Climate
              Institutions ,Fortune 500 & Large Indian Corporates , MSMEs ,
              Climate-Tech Startups , Investors , NGOs , Researchers , Youth
              Leaders , Media
            </li>
          </ul>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12">
            {Object.entries(speakers).map(([key, item], idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-2xl border border-white/20"
              >
                <Image
                  src={item}
                  alt={`Speaker ${item}`}
                  width={300}
                  height={300}
                  className="w-full h-60 object-contain transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-bold">
                  {key}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Registration */}
        <Section title="Registration">
          <p className="section-text text-left">
            Early-Bird Registration (Exclusive GST) : Available until 15th April
            2026.
          </p>

          <ul className="section-list">
            <li>1 Delegate: ₹25,000/-</li>
            <li>2 Delegates: ₹40,000/-</li>
            <li>3+ Delegates: Special group rates available.</li>
          </ul>

          <p className="section-text mt-6">Fill the registration form.</p>

          <div className="text-center mt-4">
            <a
              href="https://forms.gle/S5gkiNLs67SAvVkX6"
              className="bg-yellow-300 rounded-2xl px-6 py-3 text-blue-700 font-bold inline-block hover:scale-105 transition"
            >
              Here
            </a>
          </div>

          <p className="section-text mt-6">
            Payment transfer details shall be shared over the email.
          </p>
        </Section>

        {/* Contact */}
        <Section title="Contact Information">
          <p className="section-text">
            For Partnership and Speaking Opportunities:
          </p>

          <ul className="section-list">
            <li>
              &bull; Dr. Aditya Gupta: Aditya.gupta@iimb.ac.in , +919289123456
            </li>
            <li>
              &bull; Ms. Pavithra I: Pavithra.i@iimb.ac.in , +919972934467
            </li>
            <li>
              &bull; Dr. M.K. Singh: mksingh@netzerothink.com , +918240615694
            </li>
            <li>
              &bull; Mr. Sushant Kashyap: climateinnovation@netzerothink.com ,
              +918936055219
            </li>
          </ul>
        </Section>
      </div>
    </div>
  );
}
