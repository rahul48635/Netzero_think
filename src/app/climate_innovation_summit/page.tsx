"use client";
import { motion } from "framer-motion";
export default function Climate_Innovation_Summmit() {
  return (
    <div className="relative min-h-screen w-full  overflow-hidden bg-[url('/bg-cover/innovation_summit.png')] bg-fixed bg-cover bg-no-repeat">
      <div className="absolute inset-0 bg-black/40 "></div>

      {/* {About the Summit section} */}
      <section className="relative py-20 px-4 text-center  text-blue-800 overflow-hidden mt-30 sm:mt-50">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white bg-green-500 rounded-2xl text-center max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About the Summit
        </motion.h1>
        <div className="w-full bg-white/10 backdrop-blur-xl rounded-2xl text-white font-bold p-3">
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed pt-5 ">
            The Climate Innovation Summit 2026 at IIM Bangalore is a premier
            two-day event designed to accelerate India’s journey toward Viksit
            Bharat 2047 and Net Zero 2070. This summit serves as a critical
            catalyst for clean technology adoption, industrial decarbonization,
            and green economic growth.
          </p>
        </div>
      </section>
      {/* Summit Agenda & Focus Areas section */}
      <section className="relative py-20 px-4 text-center  text-blue-800 overflow-hidden mt-30 sm:mt-10">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white bg-green-500 rounded-2xl text-center max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Summit Agenda & Focus Areas
        </motion.h1>
        <div className="w-full bg-white/10 backdrop-blur-xl rounded-2xl text-white font-bold p-3">
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed pt-5 ">
            Building on the successful sessions from our previous year, the 2026
            agenda focuses on high-impact sectors:
          </p>
          <h6>
            &bull; Power Sector Transformation – Renewables, Storage & Grid
            Flexibility
          </h6>
          <h6>&bull; Decarbonising India’s Buildings & Infrastructure</h6>
          <h6>
            &bull; Metal & Mining Transition – Pathways to Low-Carbon Steel,
            Aluminium & Critical Minerals
          </h6>
          <h6>&bull; Innovation in Wind, Solar, Battery & Bioenergy</h6>
          <h6>&bull; Digital Technology, AI & Robotics in Decarbonisation</h6>
          <h6>
            &bull; Scaling Forestry, Agroforestry & Nature-Based Carbon Removal
          </h6>
          <h6>
            &bull; Climate Finance & Carbon Markets for India’s Net-Zero Vision
          </h6>
          <h6>
            &bull; Climate Innovation, Startups & Green Jobs for Viksit Bharat
            2047
          </h6>
        </div>
      </section>
      {/* Exclusive Roundtables & Networking section */}

      <section className="relative py-20 px-4 text-center  text-blue-800 overflow-hidden mt-30 sm:mt-10">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white bg-green-500 rounded-2xl text-center max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Exclusive Roundtables & Networking
        </motion.h1>
        <div className="w-full bg-white/10 backdrop-blur-xl rounded-2xl text-white font-bold p-3">
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed pt-5 text-left ">
            Engage in high-impact Policy Dialogues and curated Business
            Matchmaking designed for strategic public-private partnerships.
            These sessions bring together a premium network of CXOs,
            Professionals, Researchers, and Regulators to shape the discourse
            for India&apos;s Net-Zero transformation.
          </p>
        </div>
      </section>
      {/* Speakers & Thought Leaders section */}

      <section className="relative py-20 px-4 text-center  text-blue-800 overflow-hidden mt-30 sm:mt-10">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white bg-green-500 rounded-2xl text-center max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Speakers & Thought Leaders
        </motion.h1>
        <div className="w-full bg-white/10 backdrop-blur-xl rounded-2xl text-white font-bold p-3">
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed pt-5 text-left ">
            Join 50+ global speakers and industry pioneers as they share
            actionable insights into India&apos;s climate future.
          </p>
        </div>
      </section>
      {/*Strategic Milestones & Recognitions section  */}

      <section className="relative py-20 px-4 text-center  text-blue-800 overflow-hidden mt-30 sm:mt-10">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white bg-green-500 rounded-2xl text-center max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Strategic Milestones & Recognitions
        </motion.h1>
        <div className="w-full bg-white/10 backdrop-blur-xl rounded-2xl text-white font-bold p-3">
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed pt-5 text-left ">
            The Climate Innovation Summit 2026 provides a high-profile stage for
            organizations to move from commitment to action. This dedicated
            segment celebrates progress and catalyzes future breakthroughs.
          </p>
          <h6>&bull; Knowledge & Research Launches</h6>
          <h6>&bull; Corporate Announcements & Partnerships</h6>
          <h6>&bull; Innovation & Product Showcases</h6>
          <h6>&bull; Leadership Recognitions & Awards</h6>
          <h6>&bull; Participation Certificates</h6>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed pt-5 text-left ">
            One Participant, One Tree: In honor of every guest and attendee, we
            commit to planting one tree per person, fostering a tangible green
            legacy long after the summit concludes.
          </p>
        </div>
      </section>

      {/* Partner with Us section */}

      <section className="relative py-20 px-4 text-center  text-blue-800 overflow-hidden mt-30 sm:mt-10">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white bg-green-500 rounded-2xl text-center max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Partner with Us
        </motion.h1>
        <div className="w-full mx-auto bg-white/10 backdrop-blur-xl rounded-2xl text-white font-bold p-3">
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed pt-5 text-left ">
            Position your organization at the forefront of the climate movement.
          </p>
          <h6 className="text-left">
            &bull; Opportunities: Title & Co-Title Partner , Knowledge Partner
            ,Sector Theme Partner (Power, Buildings, Mining, Nature-based,
            Climate Finance) ,Technology & Innovation Partner ,ESG/Climate
            Leadership Partner ,University & Research Collaborators ,Media &
            Outreach Partners
          </h6>
          <h6 className="text-left">
            &bull; Who Attends: Ministries ,Regulators , Think Tanks , Global
            Climate Institutions ,Fortune 500 & Large Indian Corporates , MSMEs
            ,Climate-Tech Startups , Investors , NGOs , Researchers , Youth
            Leaders , Media
          </h6>
        </div>
      </section>

      {/* Registration section */}
      <section className="relative py-20 px-4 text-center  text-blue-800 overflow-hidden mt-30 sm:mt-10">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white bg-green-500 rounded-2xl text-center max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Registration
        </motion.h1>
        <div className="w-full mx-auto bg-white/10 backdrop-blur-xl rounded-2xl text-white font-bold p-3">
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed pt-5 text-left ">
            Early-Bird Registration (Exclusive GST) : Available until 15th April
            2026.
          </p>
          <h6>&bull; 1 Delegate: ₹25,000/-</h6>
          <h6>&bull; 2 Delegates: ₹40,000/-</h6>
          <h6>&bull; 3+ Delegates: Special group rates available.</h6>
          <br />
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed pt-5  ">
            Fill the registration form. <br />
            <a
              href="https://forms.gle/S5gkiNLs67SAvVkX6"
              className="cursor-pointer bg-yellow-300 rounded-2xl px-5 text-blue-700"
            >
              Here
            </a>
            <br />
            Payment transfer details shall be shared over the email.
          </p>
        </div>
      </section>

      {/* Contact Information section */}

      <section className="relative py-20 px-4 text-center  text-blue-800 overflow-hidden mt-30 sm:mt-10">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white bg-green-500 rounded-2xl text-center max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Information
        </motion.h1>
        <div className="w-full mx-auto bg-white/10 backdrop-blur-xl rounded-2xl text-white font-bold p-3">
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed pt-5 text-left ">
            For Partnership and Speaking Opportunities:
            <h6>
              &bull; Email: climateinnovation@netzerothink.com ;
              cis2026@iimb.ac.in
            </h6>
            <h6>&bull; Phone: +91 82406 15694</h6>
            <h6>
              &bull; Website: https://www.netzerothink.com/community ;
              https://www.iimb.ac.in/iimb_conferences
            </h6>
          </p>
        </div>
      </section>
    </div>
  );
}
