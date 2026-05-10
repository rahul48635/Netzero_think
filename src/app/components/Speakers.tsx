import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import Image from "next/image";
export default function Speakers() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const Speaker_Details: Map<string, { url: string; org: string }> = new Map([
    [
      "Dr. VK Saraswat",
      {
        url: "/speakers_partners/Dr_VK_Saraswat(Niti_Aayog).jpeg",
        org: "Niti Aayog",
      },
    ],
    [
      "Mr. Krushna Chandra Panigrahy",
      {
        url: "/speakers_partners/Mr_krushna_Chandra_Panigrahy.jpeg",
        org: "Bureau of Energy Efficiency",
      },
    ],
    [
      "Mr. Manu Srivastava",
      {
        url: "/speakers_partners/Mr_Manu_Srivastav.jpeg",
        org: "Govt. Of Madhaya Pradesh",
      },
    ],
    [
      "Mr. Bhupender Singh Bodh",
      {
        url: "/speakers_partners/Mr_Bhupender_Singh_Bodh.jpeg",
        org: "REMC Ltd.",
      },
    ],
    [
      "Dr. Sunil Duggal",
      {
        url: "/speakers_partners/Dr_Sunnil_Duggal.jpeg",
        org: "Bhumi Ventures",
      },
    ],
    [
      "Mr. Abhishek Nath",
      {
        url: "/speakers_partners/Mr_Abhishek_Nath.jpeg",
        org: "CSTEP",
      },
    ],
    [
      "Mr. Bharat Saxena",
      {
        url: "/speakers_partners/Mr_Bharat_Saxena.jpeg",
        org: "Inox Clean Energy",
      },
    ],
    [
      "Mr. Upendra Tripathy",
      {
        url: "/speakers_partners/Mr_Upendra_Tripathy.jpeg",
        org: "International Solar Alliance",
      },
    ],
    [
      "Mr. Erik Solheim",
      {
        url: "/speakers_partners/Erik_Solheim.jpeg",
        org: "UNEP",
      },
    ],
    [
      "Mr. Arne Lorenzen",
      {
        url: "/speakers_partners/Mr_Arne_Lorenzen.jpeg",
        org: "PowerCurve ApS",
      },
    ],
    [
      "Dr. Umakant Panda",
      {
        url: "/speakers_partners/Dr_Umakant_Panda.jpeg",
        org: "M.P. Electricity Regulatory Comission",
      },
    ],
    [
      "Mr. D Radhakrishna",
      {
        url: "/speakers_partners/Mr_D.Radhakhrishnan.jpeg",
        org: "Tripura Electricity Regulatory Comission",
      },
    ],
    [
      "Dr. Vibha Dhavan",
      {
        url: "/speakers_partners/Dr_Vibha_Dhavan.jpeg",
        org: "TERI",
      },
    ],
    [
      "Dr. Kurian Joseph",
      {
        url: "/speakers_partners/Dr.Kurian_Joseph.jpeg",
        org: "Anna University",
      },
    ],
    [
      "Dr. Saurabh Kundu",
      {
        url: "/speakers_partners/Dr_Saurabh_Kundu.jpeg",
        org: "TATA Steel",
      },
    ],
    [
      "Mr. Sanjeev Paul",
      {
        url: "/speakers_partners/Mr_Sanjeev_Paul.jpeg",
        org: "TATA Steel",
      },
    ],
    [
      "Mr. Naveen Khandelwal",
      {
        url: "/speakers_partners/Mr_Naveen_khandelwal.jpeg",
        org: "Yanara",
      },
    ],
    [
      "Mr. Ratnesh Jha",
      {
        url: "/speakers_partners/Mr_Ratnesh_Jha.jpeg",
        org: "UN Gobal Compact",
      },
    ],
    [
      "Mr. Karunakar Mardi Reddy",
      {
        url: "/speakers_partners/Mr_Karunakar_Mardi_Reddy.jpeg",
        org: "Igniting Minds",
      },
    ],
    [
      "Dr. PKC BOSE",
      {
        url: "/speakers_partners/Dr_PKC_BOSE.jpeg",
        org: "CAMBI Group Norway",
      },
    ],
    [
      "Mr. Naveen Ahlawat",
      {
        url: "/speakers_partners/Mr_Naveen_Ahlawat.jpeg",
        org: "Jindal Steel",
      },
    ],
    [
      "Dr. Vikram Vishal",
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
    [
      "Dr. Waiel S. H. Awwad",
      {
        url: "/speakers_partners/Dr_Waiel_S_H_Awwad.jpeg",
        org: "India-Arab Chamber of Commerce, Industry, and Agriculture (IACCIA)",
      },
    ],
    [
      "Mr. Aditya Pyasi",
      {
        url: "/speakers_partners/Mr_Aditya_Pyasi.jpeg",
        org: "Indian Wind Turbine Manufacturing Association (IWTMA)",
      },
    ],
    [
      "Ms. Umang Pathak",
      {
        url: "/speakers_partners/Ms_Umang_Pathak.jpeg",
        org: "Trilegal",
      },
    ],
    [
      "Mr. Siddhartha Pakrashi",
      {
        url: "/speakers_partners/Mr_Siddhartha_Pakrashi.jpeg",
        org: "Varhad Capital",
      },
    ],
    [
      "Mr. Prasad Dhapute",
      {
        url: "/speakers_partners/Mr_Prasad_Dhapute.jpeg",
        org: "Varhad Capital",
      },
    ],
    [
      "Ms. Suchi Malhotra",
      {
        url: "/speakers_partners/Ms_Suchi_Malhotra.jpeg",
        org: "Environmental Defense Fund (EDF)",
      },
    ],
    [
      "Mr. Binu Parthan",
      {
        url: "/speakers_partners/Mr_Binu_Parthan.jpeg",
        org: "IRENA",
      },
    ],
    [
      "Mr. Soumya Prasad Garnaik",
      {
        url: "/speakers_partners/Mr_Soumya_Prasad_Garnaik.jpeg",
        org: "Global Green Growth Institute",
      },
    ],
    [
      "Mr. Venugopal ",
      {
        url: "/speakers_partners/Mr_Venugopal.jpeg",
        org: "Niti Aayog",
      },
    ],
    [
      "Mr.K.R. Raghunath ",
      {
        url: "/speakers_partners/Mr_K_R_Raghunath.jpeg",
        org: "KIS Group",
      },
    ],
    [
      "Dr. Anita Gupta",
      {
        url: "/speakers_partners/Dr_Anita_Gupta.jpeg",
        org: "Department of Science, Govt. Of India",
      },
    ],
    [
      "Mr. Krishnamurthy",
      {
        url: "/speakers_partners/Mr_Krishnamurthy.jpeg",
        org: "Supply Chain Consultant",
      },
    ],
    [
      "Mr. Sindhu Sharma",
      {
        url: "/speakers_partners/Mr_Sindhu_Sharma.jpeg",
        org: "NXTRA",
      },
    ],
    [
      "Mr. Saurabh Palsania",
      {
        url: "/speakers_partners/Mr_Saurabh_Palsania.jpeg",
        org: "Shree Cement",
      },
    ],
    [
      "Mr. Ajeya Bandyopadhyay",
      {
        url: "/speakers_partners/Mr_Ajeya_Bandyopadhyay.jpeg",
        org: "International Finance Corporation (IFC)",
      },
    ],
    [
      "Ms. Rishu Garg",
      {
        url: "/speakers_partners/Ms_Rishu_Garg.jpeg",
        org: "CSTEP",
      },
    ],
    [
      "Dr. Ajay Kumar Singh ",
      {
        url: "/speakers_partners/Dr_Ajay_Kumar_Singh.jpeg",
        org: "CSIR-Central Institute of Mining and Fuel Research, Dhanbad",
      },
    ],
    [
      "Dr. G. Sateesh Reddy",
      {
        url: "/speakers_partners/Dr_G_Sateesh_Reddy.jpeg",
        org: "DRDO",
      },
    ],
    [
      "Mr. Yashodhan Ramteke",
      {
        url: "/speakers_partners/Mr_Yashodhan_Ramteke.jpeg",
        org: "Ecoguard",
      },
    ],
    [
      "Ms. Shreeya Shukla",
      {
        url: "/speakers_partners/Ms_Shreeya_Shukla.jpeg",
        org: "Pi-Green Innovation",
      },
    ],
    [
      "Mr. Prasad Borge ",
      {
        url: "/speakers_partners/Mr_Prasad_Borge.jpeg",
        org: "Pi-Green Innovation",
      },
    ],
    [
      "Mr. S.V. Patil",
      {
        url: "/speakers_partners/Mr_S_V_Patil.jpeg",
        org: "India Cement Limited",
      },
    ],
    [
      "Mr. Pravin Dongre",
      {
        url: "/speakers_partners/Mr_Pravin_Dongre.jpeg",
        org: "IOCL",
      },
    ],
    [
      "Mr. Vijay Kumar",
      {
        url: "/speakers_partners/Mr_Vijay_Kumar.jpeg",
        org: "Brigade Enterprises Limited",
      },
    ],
    [
      "Mr. Debi Prasad Dash",
      {
        url: "/speakers_partners/Mr_Debi_Prasad_Dash.jpeg",
        org: "NETRA",
      },
    ],
    [
      "Mr. Yash Agarwal",
      {
        url: "/speakers_partners/Mr_Yash_Agarwal.jpeg",
        org: "Carbonetics Carbon Capture",
      },
    ],
    [
      "Dr. Satish Mishra",
      {
        url: "/speakers_partners/Dr_Satish_Mishra.jpeg",
        org: "Trident Group",
      },
    ],
    [
      "Mr. Pavan Shah",
      {
        url: "/speakers_partners/Mr_Pavan_Shah.jpeg",
        org: "International Financial Services Authority",
      },
    ],
    [
      "Mr. Kishore Nair",
      {
        url: "/speakers_partners/Mr_Kishore_Nair.jpeg",
        org: "Avaada Energy",
      },
    ],
  ]);
  return (
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
  );
}
