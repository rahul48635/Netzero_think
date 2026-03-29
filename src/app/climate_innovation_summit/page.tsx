"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";

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
    "Associate Partner": "/speakers_partners/Associate_Partner.jpeg",
    "Media Partner": "/speakers_partners/media_partner.jpeg",
    "Knowledge Partner": "/speakers_partners/Knowledge_partner.jpeg",
    "SDG Partner": "/speakers_partners/SDG_partner.jpeg",
    "Cause Partner": "/speakers_partners/Cause_Partner.jpg",
    "Supporting Partner 1": "/speakers_partners/Supporting_partner_.jpeg",
    "Supporting Partner 2": "/speakers_partners/supporting_partner_2.jpeg",
  };
  const banner: Record<string, string> = {
    NetZeroThink: "/speakers_partners/organising_partner.jpeg",
    IIM_Bangalore: "/speakers_partners/Event-Logos.png",
  };

  const Speaker_Details: Map<string, { url: string; org: string }> = new Map([
    [
      "Dr VK Saraswat",
      {
        url: "/speakers_partners/Dr_VK_Saraswat(Niti_Aayog).jpeg",
        org: "Niti Aayog",
      },
    ],
    [
      "Mr Krushna Chandra Panigraphy",
      {
        url: "/speakers_partners/Mr_krushna_Chandra_Panigrahy.jpeg",
        org: "Bureau of Energy Efficiency",
      },
    ],
    [
      "Mr Manu Srivastava",
      {
        url: "/speakers_partners/Mr_Manu_Srivastav.jpeg",
        org: "Govt. Of Madhaya Pradesh",
      },
    ],
    [
      "Mr Bhupender Singh Bodh",
      {
        url: "/speakers_partners/Mr_Bhupender_Singh_Bodh.jpeg",
        org: "REMC Ltd.",
      },
    ],
    [
      "Dr Sunil Duggal",
      {
        url: "/speakers_partners/Dr_Sunnil_Duggal.jpeg",
        org: "Bhumi Ventures",
      },
    ],
    [
      "Mr Bharat Saxena",
      {
        url: "/speakers_partners/Mr_Bharat_Saxena.jpeg",
        org: "Inox Clean Energy",
      },
    ],
    [
      "Mr Upendra Tripathy",
      {
        url: "/speakers_partners/Mr_Upendra_Tripathy.jpeg",
        org: "International Solar Alliance",
      },
    ],
    [
      "Mr Erik Solheim",
      {
        url: "/speakers_partners/Erik_Solheim.jpeg",
        org: "UNEP",
      },
    ],
    [
      "Mr Arne Lorenzen",
      {
        url: "/speakers_partners/Mr_Arne_Lorenzen.jpeg",
        org: "PowerCurve ApS",
      },
    ],
    [
      "Mr. Prabodha Acharya",
      {
        url: "/speakers_partners/Mr_Parobodha_Archya.jpeg",
        org: "JSW Steel",
      },
    ],
    [
      "Dr Umakant Panda",
      {
        url: "/speakers_partners/Dr_Umakant_Panda.jpeg",
        org: "M.P. Electricity Regulatory Comission",
      },
    ],
    [
      "Mr D Radhakrishna",
      {
        url: "/speakers_partners/Mr_D.Radhakhrishnan.jpeg",
        org: "Tripura Electricity Regulatory Comission",
      },
    ],
    [
      "Dr Vibha Dhavan",
      {
        url: "/speakers_partners/Dr_Vibha_Dhavan.jpeg",
        org: "TERI",
      },
    ],
    [
      "Dr Kurian Joseph",
      {
        url: "/speakers_partners/Dr.Kurian_Joseph.jpeg",
        org: "IIT Madras",
      },
    ],
    [
      "Dr Saurabh Kundu",
      {
        url: "/speakers_partners/Dr_Saurabh_Kundu.jpeg",
        org: "TATA Steel",
      },
    ],
    [
      "Mr Sanjeev Paul",
      {
        url: "/speakers_partners/Mr_Sanjeev_Paul.jpeg",
        org: "TATA Steel",
      },
    ],
    [
      "Mr Naveen Khandelwal",
      {
        url: "/speakers_partners/Mr_Naveen_khandelwal.jpeg",
        org: "Yanara",
      },
    ],
    [
      "Mr Ratnesh Jha",
      {
        url: "/speakers_partners/Mr_Ratnesh_Jha.jpeg",
        org: "UN Gobal Compact",
      },
    ],
    [
      "Mr Karunakar Mardi Reddy",
      {
        url: "/speakers_partners/Mr_Karunakar_Mardi_Reddy.jpeg",
        org: "Igniting Mind",
      },
    ],
    [
      "Dr PKC BOSE",
      {
        url: "/speakers_partners/Dr_PKC_BOSE.jpeg",
        org: "Enrego",
      },
    ],
    [
      "Mr Naveen Ahlawat",
      {
        url: "/speakers_partners/Mr_Naveen_Ahlawat.jpeg",
        org: "Jindal Steel",
      },
    ],
    [
      "Dr Vikram Vishal",
      {
        url: "/speakers_partners/Dr_Vikram_Vishal.jpeg",
        org: "IIT Bombay",
      },
    ],
    [
      "Mr.Yuvaraj Dinesh Babu Nityanandam",
      {
        url: "/speakers_partners/Mr_Yuvaraj_Dinesh_Babu_Nityanandam.jpeg",
        org: "UNMAI Carbon Solutions",
      },
    ],
  ]);
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[url('/bg-cover/CLS_copy.png')] bg-fixed bg-cover bg-no-repeat">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 "></div>

      <div className="relative max-w-6xl mx-auto px-6 sm:my-50 my-10">
        {/* About the Summit */}
        <Section title="Climate Innovation Summit (28ᵗʰ-29ᵗʰ May 2026)">
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
          <br />
          <p className="section-text w-full">
            The Climate Innovation Summit 2026 on 28ᵗʰ-29ᵗʰ of May at IIM
            Bangalore is a premier two-day event designed to accelerate India’s
            journey toward Viksit Bharat 2047 and Net Zero 2070. This summit
            serves as a critical catalyst for clean technology adoption,
            industrial decarbonization, and green economic growth.
          </p>
        </Section>

        {/* Summit Agenda */}
        <Section title="Summit Agenda & Focus Areas">
          <p className="section-text text-blue-500 font-extrabold text-xl">
            Building on the successful sessions from our previous year, the 2026
            agenda focuses on high-impact sectors:
          </p>
          <br />
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
            <li>
              &bull; Innovation in Wind, Solar, Hydrogen, CCUS, Battery &
              Bioenergy
            </li>
            <li>&bull; Digital Technology, AI & Robotics in Decarbonisation</li>
            <li>
              &bull; Scaling Forestry, Agroforestry & Nature-Based Carbon
              Removal
            </li>
            <li>&bull; Sustainable Transportation for Net Zero World</li>
          </ul>
        </Section>

        {/* Exclusive Roundtables */}
        <Section title="Exclusive Roundtables & Networking">
          <p className="section-text text-left">
            Engage in high-impact Policy Dialogues and curated Business
            Matchmaking designed for strategic public-private partnerships.
            These sessions bring together a premium network of CXOs,
            Professionals, Researchers, and Regulators to shape the discourse
            for India&apos;s Net-Zero transformation. <br /> <br />
            Highlevel Roundtable 1: Role of Storage for C&I Consumers.
            <br />
            Highlevel Roundtable 2: Climate Finance & Carbon Markets for India’s
            Net-Zero Vision.
          </p>
        </Section>

        {/* Speakers */}
        <Section title="Invited  Speakers & Thought Leaders ">
          <p className="section-text text-left text-xl text-blue-500">
            Join 30+ global speakers and industry pioneers.
          </p>

          {/* IMAGE GRID (for adding leaders/speakers) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12">
            {[...Speaker_Details].map(([key, val], idx) =>
              isMobile ? (
                <div
                  key={idx}
                  className="relative group overflow-hidden rounded-2xl border border-white/20 flex-col flex"
                >
                  <Image
                    src={val.url}
                    alt={key}
                    width={300}
                    height={300}
                    className="w-full h-60 object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="text-xl text-white text-center">
                    {key} <br />
                    <span className="text-center text-wrap">{`(${val.org})`}</span>
                  </div>
                </div>
              ) : (
                <div key={idx}>
                  <div className="relative group overflow-hidden rounded-2xl border border-white/20">
                    <Image
                      src={val.url}
                      alt={key}
                      width={300}
                      height={300}
                      className="w-full h-60 object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-bold">
                      {key}
                    </div>
                  </div>
                  <span className="text-center w-full block text-white text-xl">
                    {val.org}
                  </span>
                </div>
              ),
            )}
          </div>
        </Section>

        {/* Strategic Milestones */}
        <Section title="Strategic Milestones & Recognitions">
          <p className="section-text text-left text-xl text-blue-500">
            The Climate Innovation Summit 2026 provides a high-profile stage for
            organizations to move from commitment to action. This dedicated
            segment celebrates progress and catalyzes future breakthroughs.
          </p>
          <br />
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
          <p className="section-text text-left text-xl text-blue-500">
            Position your organization at the forefront of the climate movement.
          </p>
          <br />

          <ul className="section-list">
            <li>
              <b className="text-blue-500 text-lg"> Opportunities:</b> Lead
              Partner , Knowledge Partner , Sector Theme Partner (Power,
              Buildings, Mining, Nature-based, Climate Finance) ,Technology &
              Innovation Partner ,ESG/Climate Leadership Partner ,University &
              Research Collaborators ,Media & Outreach Partners.
            </li>
            <br />
            <li>
              <b className="text-blue-500 text-lg"> Who Attends:</b> Ministries
              ,Regulators , Think Tanks , Global Climate Institutions ,
              Corporates , MSMEs , Climate-Tech Startups , Investors , NGOs ,
              Researchers , Youth Leaders , Media
            </li>
          </ul>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12">
            {Object.entries(speakers).map(([key, item], idx) =>
              isMobile ? (
                <div
                  key={idx}
                  className="relative group overflow-hidden rounded-2xl border border-white/20 flex-col flex wrap-anywhere"
                >
                  <Image
                    src={item}
                    alt={key}
                    width={200}
                    height={200}
                    className="w-full h-60 object-contain"
                  />
                  <div className="text-md text-white text-center basis-1/2 ">
                    {key}
                  </div>
                </div>
              ) : (
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
              ),
            )}
          </div>
        </Section>

        {/* Registration */}
        <Section title="Registration">
          <p className="section-text text-left text-xl text-blue-500">
            Early-Bird Registration (Exclusive GST) : Available until 30th March
            2026.
          </p>
          <br />
          <ul className="section-list">
            <li>Industry Delegate: ₹12,500/-</li>
            <li>NGO , Researchers & Acadmia Delegates: ₹5,000/-</li>
            <li>2+ Delegates: Special group rates available.</li>
          </ul>
          <br />
          <div className="flex flex-col md:flex md:flex-row justify-center items-center">
            <p className="basis-1/2">
              <span className="text-lg text-blue-500">
                For Account Payment Transfer
              </span>{" "}
              <br /> Account Name: Net Zero Think Private Limited <br /> Bank
              Name: RBL Bank Limited <br /> Branch: Peenya Branch, Bengaluru{" "}
              <br /> Account Number: 409001681438 <br /> IFSC Code: RATN0000352{" "}
              <br /> SWIFT Code: RATNINBB <br />
              Account Type: Current Account
            </p>
            <br />
            <Image
              src={"/payments/QR.png"}
              width={200}
              height={200}
              alt="Qr Image"
            />
          </div>

          <p className="section-text mt-6 text-lg text-blue-500">
            Fill the registration form.
          </p>

          <div className="text-center mt-4">
            <a
              href="https://forms.gle/S5gkiNLs67SAvVkX6"
              className="bg-yellow-300 rounded-2xl px-6 py-3 text-blue-700 font-bold inline-block hover:scale-105 transition"
            >
              Here
            </a>
          </div>

          <p className="section-text mt-6">
            After completing the payment transfer, kindly share the payment
            confirmation/UTR details with the name, designation, email ID, and
            WhatsApp number of delegates at: climateinnovation@netzerothink.com
          </p>
        </Section>

        {/* Contact */}
        <Section title="Contact Information">
          <p className="section-text text-xl text-blue-500">
            For Partnership and Speaking Opportunities:
          </p>
          <br />
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
