"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import Link from "next/link";
import dynamic from "next/dynamic";
const Speakers = dynamic(() => import("../components/Speakers"), {
  loading: () => <p>Loading ...</p>,
  ssr: false,
});
import { useInView } from "react-intersection-observer";
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
  const { ref, inView } = useInView();
  const speakers: Map<string, string[]> = new Map([
    ["Session Partners", ["/speakers_partners/Session_Partner.jpeg"]],
    ["Cause Partner", ["/speakers_partners/Cause_Partner_1.jpg"]],
    [
      "Associate Partners",
      [
        "/speakers_partners/Associate_Partner.jpeg",
        "/speakers_partners/Associate_partner_1.png",
        "/speakers_partners/Associate_Partner_2.png",
        "/speakers_partners/Associate_Partner_3.jpg",
        "/speakers_partners/Associate_Partner_4.jpg",
      ],
    ],
    [
      "Supporting Partners",
      [
        "/speakers_partners/Supporting_partner_1.png",
        "/speakers_partners/supporting_partner_2.jpg",
        "/speakers_partners/supporting_partner_3.jpg",
        "/speakers_partners/NETRA.jpeg",
        "/speakers_partners/SDG_partner.jpeg",
        "/speakers_partners/supporting_partner_4.jpeg",
      ],
    ],
    ["Media Partner", ["/speakers_partners/media_partner.jpg"]],
    ["Knowledge Partner", ["/speakers_partners/Knowledge_partner.jpeg"]],
    ["Gold Partner", ["/speakers_partners/GOLD_Partner.jpeg"]],
  ]);
  const banner: Record<string, string> = {
    Organiser: "/speakers_partners/Csis_logo.jpeg",
  };

  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[url('/bg-cover/CLS_copy.webp')] bg-fixed bg-cover bg-no-repeat">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 "></div>

      <div className="relative max-w-6xl mx-auto px-6 sm:my-50 my-10" ref={ref}>
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
            The Climate Innovation Summit 2026 is a premier two-day event
            designed to accelerate India’s pathway toward Net Zero for Viksit
            Bharat. This summit serves as a critical catalyst for clean
            technology adoption, industrial decarbonization, and green economic
            growth.
          </p>
          <br />

          <p className="text-green-300 ">
            <li>Dates: 28–29 May 2026</li>
            <li>
              Venue: Indian Institute of Management Bangalore (IIM Bangalore)
            </li>
            <li>Hosts: Net Zero Think & IIM Bangalore </li>
          </p>
        </Section>

        {/* Summit Agenda */}
        <Section title="Summit Agenda & Focus Areas">
          <div className="mt-6 space-y-10 whitespace-pre-line ">
            {/* INTRO */}
            <div>
              <p>
                The Summit is a high-impact platform bringing together
                policymakers, industry leaders, investors, researchers,
                climate-tech innovators, multilateral agencies, and startups to
                accelerate India’s transition toward Net Zero and the vision of
                Viksit Bharat. The summit will focus on sectoral decarbonisation
                pathways, climate technologies, nature-based solutions, digital
                innovation, and climate finance, creating actionable
                partnerships and scalable solutions for India’s green
                transition.
              </p>
            </div>

            {/* DAY 1 SLIDER */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-green-500">
                DAY 1 Theme (Sectoral Decarbonisation & Technology Leadership)
              </h2>
              <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar">
                {/* CARD */}
                <div className="min-w-[350px] bg-white/10 p-6 rounded-2xl snap-start">
                  <p>
                    <span className="text-2xl text-green-500">
                      Opening Ceremony
                    </span>
                    <br />
                    <li>Welcome Address by Host Organisations</li>
                    <li>Special Address by Distinguished Guests</li>
                    <li>Keynote Address by National & International Leaders</li>
                  </p>
                </div>

                <div className="min-w-[350px] bg-white/10 p-6 rounded-2xl snap-start">
                  <p>
                    <span className="text-2xl font-bold mb-4 text-green-500">
                      Session 1: Power Sector Transformation – Renewables,
                      Storage & Grid Flexibility
                    </span>
                    <br />
                    India’s power sector lies at the centre of the Net Zero
                    transition, with the country targeting 500+ GW of non-fossil
                    capacity while ensuring reliability and affordability. This
                    session will explore strategies to modernise India’s
                    electricity ecosystem through renewable integration,
                    grid-scale storage, and digital grid technologies.
                  </p>
                </div>

                <div className="min-w-[350px] bg-white/10 p-6 rounded-2xl snap-start">
                  <p>
                    <span className="text-2xl font-bold mb-4 text-green-500">
                      Session 2: Decarbonising India’s Buildings &
                      Infrastructure
                    </span>
                    <br />
                    With rapid urbanisation and infrastructure expansion,
                    decarbonising the built environment is critical to
                    sustainable growth. This session will examine how green
                    building standards, sustainable materials, and digital
                    technologies can transform India’s infrastructure ecosystem.
                  </p>
                </div>

                <div className="min-w-[350px] bg-white/10 p-6 rounded-2xl snap-start">
                  <p>
                    <span className="text-2xl font-bold mb-4 text-green-500">
                      Session 3: Metal & Mining Transition – Pathways to
                      Low-Carbon Steel, Aluminium & Critical Minerals
                    </span>
                    <br />
                    Heavy industries such as steel and aluminium are essential
                    to India’s development but also among the most
                    carbon-intensive sectors. This session will explore emerging
                    technologies and policy pathways to enable low-carbon
                    industrial transformation.
                  </p>
                </div>
              </div>
            </div>

            {/* DAY 2 SLIDER */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-green-500">
                DAY 2 Theme (AI, Nature-Based Solutions, Climate Finance &
                Innovation Ecosystem)
              </h2>
              <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar">
                <div className="min-w-[350px] bg-white/10 p-6 rounded-2xl snap-start">
                  <p>
                    <li>DAY 1 Recap</li>
                    <li>Opening Remarks & Keynote Speeches</li>
                  </p>
                </div>

                <div className="min-w-[350px] bg-white/10 p-6 rounded-2xl snap-start">
                  <p>
                    <span className="text-2xl font-bold mb-4 text-green-500">
                      Session 4: Innovation in Wind, Solar, Hydrogen, CCUS,
                      Battery & Bioenergy
                    </span>
                    <br />
                    Rapid innovation across clean energy technologies will shape
                    India’s long-term decarbonisation pathway. This session will
                    explore emerging breakthroughs and scalable solutions across
                    renewable energy, storage, and low-carbon fuels.
                  </p>
                </div>

                <div className="min-w-[350px] bg-white/10 p-6 rounded-2xl snap-start">
                  <p>
                    <span className="text-2xl font-bold mb-4 text-green-500">
                      Session 5: Sustainable Transportation for a Net Zero World
                    </span>
                    <br />
                    Transforming India’s mobility systems is essential to reduce
                    emissions while supporting economic growth. This session
                    will examine solutions across electrification, alternative
                    fuels, and smart mobility infrastructure.
                  </p>
                </div>

                <div className="min-w-[350px] bg-white/10 p-6 rounded-2xl snap-start">
                  <p>
                    <span className="text-2xl font-bold mb-4 text-green-500">
                      Session 6: Scaling Forestry, Agroforestry & Nature-Based
                      Carbon Removal
                    </span>
                    <br />
                    Nature-based solutions play a critical role in enhancing
                    carbon sinks and supporting climate resilience. This session
                    will examine scalable models for forestry, agroforestry, and
                    landscape restoration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Exclusive Roundtables */}
        <Section title="Special Sessions, Roundtables & Networking">
          <p className="section-text text-left">
            Engage in high-impact Policy Dialogues and curated Business
            Matchmaking designed for strategic public-private partnerships.
            These sessions bring together a premium network of CXOs,
            Professionals, Researchers, and Regulators to shape the discourse
            for India&apos;s Net-Zero transformation. <br /> <br />
            <span>
              <br />
              <span className="text-2xl font-bold mb-4 text-green-500">
                Special Address by Niti Aayog
              </span>
              <br />
              <br />
              <span className="text-2xl font-bold mb-4 text-green-500">
                Special Address on Save the Soil
              </span>
              <br />
              <br />
              <span className="text-2xl font-bold mb-4 text-green-500">
                <span className="text-2xl font-bold mb-4 text-green-500">
                  Special Address on Measurement and mitigation of methane
                  emissions from coal mining in India
                </span>
                <br />
              </span>
              <br />
              <span className="text-2xl font-bold mb-4 text-green-500">
                High-Level Roundtable: Role of Storage for C&I Consumers
              </span>
              <br />
              Energy storage is becoming a critical enabler for industries
              adopting renewable power. This roundtable will explore business
              models, policy frameworks, and financing mechanisms needed to
              scale storage adoption across the commercial and industrial
              sector.
            </span>
            <br />
            <br />
            <span>
              <span className="text-2xl font-bold mb-4 text-green-500">
                High-Level Roundtable: Climate Finance & Carbon Markets for
                India’s Net-Zero Vision
              </span>
              <br />
              Achieving India’s Net Zero target will require unprecedented
              levels of climate finance and robust carbon market mechanisms.
              This roundtable will bring together policymakers, investors, and
              industry leaders to explore innovative financing frameworks.
            </span>
            <br />
            <br />
            <span>
              <span className="text-2xl font-bold mb-4 text-green-500">
                High-Level Roundtable: ESG implementation Journey of Enterprises
              </span>
              <br />
              From Intent to Impact: The roundtable explores how organizations
              translate ESG commitments into measurable outcomes. The roundtable
              will cover strategy alignment, operational integration, ESG data
              and reporting systems, financing mechanisms, and the role of
              technology. It will address key challenges such as cost,
              compliance, and capability gaps, while highlighting best practices
              and innovations that enable enterprises to drive sustainability,
              resilience, and long-term business value through effective ESG
              implementation.
            </span>
          </p>
        </Section>

        {/* Speakers */}
        <Section title="Confirmed Speakers & Thought Leaders">
          <p className="section-text text-left text-xl text-green-500">
            Join 30+ global speakers and industry pioneers.
          </p>

          {/* IMAGE GRID (for adding leaders/speakers) */}
          {inView && <Speakers />}
        </Section>

        {/* Strategic Milestones */}
        <Section title="Strategic Milestones & Recognitions">
          <p className="section-text text-left text-xl text-green-500">
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
          <p className="section-text text-left text-xl ">
            Position your organization at the forefront of the climate movement.
          </p>
          <br />

          <ul className="section-list">
            <li>
              <b className="text-green-500 text-lg">
                Partnership Opportunities:
              </b>{" "}
              Lead Partner (Silver, Gold, Platinum), Associate Partner , Session
              Theme Partner (Power, Buildings ,Metal, Mining, Storage,
              Technology, Nature-based, Climate Finance), Media & Outreach
              Partners.
            </li>
            <br />
            <div className="flex justify-center items-center">
              <Link
                className="text-2xl text-green-500 border-4 rounded-2xl px-5 "
                href={
                  "https://drive.google.com/file/d/12vXJllvXZ2rwYsCQq8C35FzFuldWctfv/view?usp=drive_link"
                }
              >
                Click me
              </Link>
            </div>
            <br />
            <br />
            <li>
              <b className="text-green-500 text-lg"> Who Attends:</b> Ministries
              ,Regulators , Think Tanks , Global Climate Institutions ,
              Corporates , MSMEs , Climate-Tech Startups , Investors , NGOs ,
              Researchers , Youth Leaders , Media
            </li>
          </ul>

          <div className="flex flex-col gap-8 mt-12">
            {Array.from(speakers.entries()).map(([key, item]) => (
              <div key={key}>
                {/* Title */}
                <span className="block text-white text-lg sm:text-xl font-semibold mb-3">
                  {key}
                </span>

                {/* Images */}
                <div
                  className={`
          flex flex-wrap gap-3
          ${isMobile ? "justify-center" : "justify-start"}
        `}
                >
                  {item.map((url: string) => (
                    <div
                      key={url}
                      className="relative group overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2"
                    >
                      <Image
                        src={url}
                        alt={key}
                        width={120}
                        height={120}
                        className={`
                object-contain transition duration-300
                ${isMobile ? "w-20 h-20" : "w-24 h-24 group-hover:scale-110"}
              `}
                      />

                      {/* Desktop hover effect */}
                      {!isMobile && (
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-xs font-semibold">
                          {key}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Registration */}
        <Section title="Registration">
          <p className="section-text text-left text-xl text-green-500">
            Registration (Exclusive GST)
          </p>
          <br />
          <ul className="section-list">
            <li>INR 5000 plus tax (NGO/Academia/Startup)</li>
            <li>INR 9500 plus tax (Industry body members/MSME)</li>
            <li>INR 15000 plus tax (Corporate)</li>
            <br />
            <li className="text-yellow-500">
              Note: Corporate Delegate registration includes a comprehensive
              package designed to enhance your summit experience. This covers a
              delegate kit, refreshments for both days, access to the networking
              dinner, participation in roundtable discussions, and a certificate
              of participation.
            </li>
          </ul>
          <br />
          <div className="flex flex-col md:flex md:flex-row justify-center items-center">
            <p className="basis-1/2">
              <span className="text-lg text-green-500">
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

          <p className="section-text mt-6 text-lg text-green-500">
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
          <p className="section-text text-xl text-green-500">
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
