"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function ClimateInnovationCommunity() {
  const Router = useRouter();
  const [loaded, setLoaded] = useState(false);

  const academia_card = [
    {
      title: "The Net Zero Journey",
      pic: "/academia/Book.jpeg",
    },
  ];

  const Event_card = [
    {
      title: "Climate Innovation Summit 2026",
      description:
        "Theme : Accelerating India's pathways to Net Zero for Viksit Bharat",
      link: "https://drive.google.com/file/d/1TPnsEkXPUT34i-FUZALNHTgGBqrDPUPy/view",
    },
    {
      title: "Climate Innovation Summit 2025",
      description:
        "A global gathering of climate leaders, innovators, and changemakers.",
      link: "https://drive.google.com/file/d/1M_dw9S2_XFmf_gMhlv6uVGCQycR_CzhU/view",
    },
    {
      title: "India Energy Forum (20th Renewable Summit)",
      description:
        "Theme : Energy transition to Net Zero & Aatma Nirbhar Bharat.",
      link: "https://drive.google.com/file/d/1ou4-7F6vUFN6leMWV_fIOTjhRe8okoXY/view",
    },
  ];

  const Posts = [
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7342056302522572802?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7345749609735929858?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7292953380983881728?collapsed=1",
  ];

  const Resources = [
    {
      title: "Achieving a Circular Carbon Economy through CCUS",
      link: "https://drive.google.com/file/d/1XKpW6-z4srrmjthL8qCZDVlXGRcWcaOU/view",
    },
    {
      title: "Article on Carbon Market Linkage with Power Sector",
      link: "https://drive.google.com/file/d/1m0-8cSsoao00povUcJSbdDmS1HoYg8us/view",
    },
    {
      title: "Bharat Zero Emission Trucking (ZET) Policy Advisory",
      link: "https://drive.google.com/file/d/1XBnRUlKsa60iIJ39XdM8WKl5aHxCKkhs/view",
    },
    {
      title: "Article on Power Sector Decarbonisation",
      link: "https://drive.google.com/file/d/1hnNmckcxwzn1cRpNJaVGbbeestOtMQAw/view",
    },
    {
      title:
        "Waste-to-energy transition: importance in circular bioeconomy and a tool to reduce greenhouse gas emission",
      link: "https://drive.google.com/file/d/1mCYCSZr--k0HCIXBxvMAziblZPE326WB/view",
    },
    {
      title:
        "Adopting-Green-Ammonia-in-Tamil-Nadus-Fertiliser-Sector-Policy-Routes-Via-Green-Hydrogen",
      link: "https://drive.google.com/file/d/1XBWEJPDyKxRcOWafzuUaYeOnNwTnRigi/view",
    },
  ];
  return (
    <div className="relative min-h-screen w-full  overflow-hidden bg-[url('/bg-cover/climate.webp')] bg-fixed bg-cover bg-no-repeat">
      <div className="absolute inset-0 bg-black/40 "></div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center  text-blue-800 overflow-hidden mt-30 sm:mt-50">
        <div className="relative max-w-6xl mx-auto">
          <div className="w-full bg-white/10 backdrop-blur-xl rounded-2xl text-white font-bold p-3">
            <section className="max-w-6xl mx-auto px-4 py-12">
              <div className="bg-black/30 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl">
                {/* Header */}
                <div className="bg-green-500 p-6 text-center">
                  <h1 className="text-3xl md:text-5xl font-bold text-white">
                    Climate Innovation Community
                  </h1>
                  <p className="text-white/90 text-lg mt-2">
                    An Initiative by Net Zero Think
                  </p>
                </div>

                <div className="p-6 md:p-10 space-y-12">
                  {/* Introduction */}
                  <section>
                    <h2 className="text-3xl font-bold text-yellow-400 mb-6">
                      Connecting Global Minds for Local and Global Climate
                      Impact
                    </h2>

                    <div className="space-y-5 text-lg text-white-800 leading-relaxed">
                      <p>
                        The Climate Innovation Community is a social initiative
                        of Net Zero Think connecting over 500 professionals from
                        30+ countries, united by a shared purpose—to drive real,
                        sustainable change in business, the environment,
                        society, and people&apos;s lives.
                      </p>

                      <p>
                        The community brings together like-minded experts,
                        innovators, entrepreneurs, policy professionals,
                        financiers, insurers, and development practitioners who
                        are passionate about advancing climate and
                        sustainability solutions.
                      </p>
                    </div>
                  </section>

                  {/* Objective */}
                  <section>
                    <div className="bg-green-500 rounded-2xl p-4 mb-6">
                      <h2 className="text-2xl md:text-3xl font-bold text-white">
                        🌱 Objective
                      </h2>
                    </div>

                    <div className="space-y-4 text-lg text-white">
                      <p>
                        Bring together sustainability champions, green
                        innovators, and conscious organizations working towards
                        a low-carbon future.
                      </p>
                    </div>
                  </section>

                  {/* Vision */}
                  <section>
                    <div className="bg-green-500 rounded-2xl p-4 mb-6">
                      <h2 className="text-2xl md:text-3xl font-bold text-white">
                        🌐 Our Vision
                      </h2>
                    </div>

                    <p className="text-lg text-white leading-relaxed">
                      To foster collaboration, amplify impact, and accelerate
                      climate-positive innovations through shared learning,
                      visibility, and action.
                    </p>
                  </section>

                  {/* Benefits */}
                  <section>
                    <div className="bg-green-500 rounded-2xl p-4 mb-8">
                      <h2 className="text-2xl md:text-3xl font-bold text-white">
                        Member Benefits
                      </h2>
                    </div>

                    <p className="text-lg text-white mb-8">
                      Becoming a part of the Climate Innovation Community
                      unlocks a range of benefits:
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                      {/* Learning */}
                      <div className="bg-white/70 rounded-2xl p-6 shadow-lg">
                        <h3 className="text-2xl font-bold text-blue-800 mb-4">
                          🎓 Learning & Growth
                        </h3>

                        <ul className="space-y-3 text-gray-700">
                          <li>
                            ✓ Discounted access to all NZT-certified courses
                          </li>
                          <li>
                            ✓ Participation discounts and VIP passes at events,
                            workshops, and climate conferences
                          </li>
                        </ul>
                      </div>

                      {/* Networking */}
                      <div className="bg-white/70 rounded-2xl p-6 shadow-lg">
                        <h3 className="text-2xl font-bold text-blue-800 mb-4">
                          🌍 Recognition & Networking
                        </h3>

                        <ul className="space-y-3 text-gray-700">
                          <li>✓ Certificate of Membership</li>
                          <li>✓ Speaker and panellist opportunities</li>
                          <li>✓ Tree planted in your name</li>
                          <li>✓ Showcase climate-friendly products/services</li>
                          <li>✓ Featured in community spotlights</li>
                        </ul>
                      </div>

                      {/* Research */}
                      <div className="bg-white/70 rounded-2xl p-6 shadow-lg">
                        <h3 className="text-2xl font-bold text-blue-800 mb-4">
                          📊 Research & Collaboration
                        </h3>

                        <ul className="space-y-3 text-gray-700">
                          <li>✓ Participate in research studies</li>
                          <li>✓ Join pilot projects</li>
                          <li>✓ Collaborate with professionals globally</li>
                          <li>✓ Access exclusive community forums</li>
                          <li>✓ Discounts on tools and certifications</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Membership Plans */}
                  <section>
                    <div className="bg-green-500 rounded-2xl p-4 mb-8">
                      <h2 className="text-2xl md:text-3xl font-bold text-white">
                        Membership Plans
                      </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="bg-white/70 rounded-2xl p-6 text-center shadow-lg">
                        <h3 className="text-xl font-bold text-blue-800 mb-4">
                          Startups / MSME / NGO / Academia
                        </h3>

                        <div className="text-4xl font-bold text-green-600 mb-3">
                          ₹25,000
                        </div>

                        <p className="text-gray-600">Annual Membership Fee</p>
                      </div>

                      <div className="bg-white/70 rounded-2xl p-6 text-center shadow-lg">
                        <h3 className="text-xl font-bold text-blue-800 mb-4">
                          Turnover ₹100–500 Cr
                        </h3>

                        <div className="text-4xl font-bold text-green-600 mb-3">
                          ₹51,000
                        </div>

                        <p className="text-gray-600">Annual Membership Fee</p>
                      </div>

                      <div className="bg-white/70 rounded-2xl p-6 text-center shadow-lg">
                        <h3 className="text-xl font-bold text-blue-800 mb-4">
                          Turnover ₹500 Cr+
                        </h3>

                        <div className="text-4xl font-bold text-green-600 mb-3">
                          ₹105,000
                        </div>

                        <p className="text-gray-600">Annual Membership Fee</p>
                      </div>
                    </div>
                  </section>

                  {/* CTA */}
                  <section className="text-center">
                    <div className="bg-green-500 rounded-3xl p-8">
                      <h2 className="text-3xl font-bold text-white mb-4">
                        Become a Part of the Movement
                      </h2>

                      <p className="text-white/90 text-lg mb-6">
                        Join the Climate Innovation Community and contribute
                        towards a greener tomorrow.
                      </p>

                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeeJAQKtIlqZkYgelcDO1eXRBnLi5_D8MaX1nqc3yOkRd8ZFg/viewform?usp=publish-editor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-black font-bold transition-all"
                      >
                        Submit Expression of Interest
                      </a>
                    </div>
                  </section>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* What We Do Section */}

          {/* Academia Section */}
          <section className="mb-20">
            <div className="text-center w-full bg-white/50 backdrop-blur-xl rounded-2xl">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 w-full text-white bg-green-500 rounded-2xl text-center "
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Academia
              </motion.h1>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {academia_card.map((item, idx) => (
                <Card
                  key={idx}
                  className="hover:shadow-[0px_0px_10px_5px] shadow-black/50 transition-shadow  bg-white/50 backdrop-blur-2xl"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-800 font-bold capitalize underline">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="">
                    <Image
                      src={item.pic}
                      alt={item.pic}
                      width={200}
                      height={200}
                      className="rounded self-center justify-self-center w-full"
                    />
                    <Button
                      onClick={() =>
                        window.open(
                          "https://docs.google.com/forms/d/e/1FAIpQLScN2wsThLL2fZxybyqKw6YffzdjHuVcb4s98giAtEIH8FlTCg/viewform",
                        )
                      }
                      variant={"default"}
                      className="self-center justify-self-center w-full mt-5 bg-blue-500 cursor-pointer"
                    >
                      Take Assessment
                    </Button>
                    <Button
                      onClick={() =>
                        window.open(
                          "https://www.amazon.com/dp/B0HCLGVTT3/ref=sr_1_1?crid=2ZKULZ0GPS1Q1&dib=eyJ2IjoiMSJ9.CI4bw2nh6U8a1YWKDqi7jrOwetThJhgWFx_WqzwVW3ypYNC7wHdh53Lw7AvyNkjJsNsoEIquQYBwhz13pfxUg0UrzSVnhlR4dIeQ5SRgBiELQKmohP8-zdsGEF1KZG0T-LIXChQrX1oadDSpU2ItmWjvBsEjC8yz5ZqGHkif0a84aOHAKXlplbDkau2IGAhRDJPk96yzbcHUcN2htBRQomacPTvvW9MC4JoBWDiFTsc.zHNUgBv9W0ERqjraKodAuIrxBkHBJf5QrzQD-YkCxv8&dib_tag=se&keywords=the+net+zero+journey&qid=1785774605&sprefix=net+zero+journey%2Caps%2C811&sr=8-1",
                        )
                      }
                      variant={"default"}
                      className="self-center justify-self-center w-full mt-5 bg-green-500 cursor-pointer"
                    >
                      Amazon.com
                    </Button>
                    <Button
                      onClick={() =>
                        window.open("https://www.amazon.in/dp/9375004686")
                      }
                      variant={"default"}
                      className="self-center justify-self-center w-full mt-5 bg-green-500 cursor-pointer"
                    >
                      Amazon.in
                    </Button>
                    <Button
                      onClick={() =>
                        window.open(
                          "https://www.flipkart.com/net-zero-journey-practical-guide-individuals-businesses-nations-build-sustainable-future/p/itm068750ed7c75d?pid=9789375004684&lid=LSTBOK9789375004684C6PS7U&marketplace=FLIPKART&q=the+net+zero+journey+book&store=bks&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=3cf59d33-a0ba-4eab-8945-3112541de699.9789375004684.SEARCH&ppt=sp&ppn=sp&ssid=lhu6hx3h8g0000001785312327882&qH=48a9eae8cfc6c0a6&ov_redirect=true&ov_redirect=true",
                        )
                      }
                      variant={"default"}
                      className="self-center justify-self-center w-full mt-5 bg-green-500 cursor-pointer"
                    >
                      FlipKart
                    </Button>
                    <Button
                      onClick={() =>
                        window.open(
                          "https://play.google.com/store/books/details?id=r5L6EQAAQBAJ&rdid=book-r5L6EQAAQBAJ&rdot=1&source=gbs_vpt_read&pcampaignid=books_booksearch_viewport",
                        )
                      }
                      variant={"default"}
                      className="self-center justify-self-center w-full mt-5 bg-green-500 cursor-pointer"
                    >
                      Google Ebook
                    </Button>
                    <Button
                      onClick={() =>
                        window.open(
                          "https://ziffybees.com/products/the-net-zero-journey-a-practical-guide-for-individuals-businesse-5262107786",
                        )
                      }
                      variant={"default"}
                      className="self-center justify-self-center w-full mt-5 bg-green-500 cursor-pointer"
                    >
                      ZiffyBees
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Events Section */}
          <section className="mb-20">
            <div className="text-center mb-12 bg-white/50 backdrop-blur-xl rounded-2xl">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 pb-2 text-white bg-green-500 rounded-2xl text-center "
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Past Events
              </motion.h1>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {Event_card.map((item, idx) => (
                <Card
                  key={idx}
                  className="hover:shadow-lg transition-shadow bg-black/30 backdrop-blur-2xl"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-green-400 font-bold">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white leading-relaxed mb-4">
                      {item.description}
                    </CardDescription>
                    <Button
                      className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold cursor-pointer"
                      onClick={() => Router.push(`${item.link}`)}
                    >
                      Souvenir
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="mb-24">
            <div className="text-center mb-12 bg-white/50 backdrop-blur-xl rounded-2xl overflow-hidden">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white bg-green-500 py-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Newsletter & Insights
              </motion.h2>

              <div className="p-6">
                <p className="text-lg md:text-xl text-green-900 font-semibold max-w-3xl mx-auto">
                  Stay updated with the latest climate innovation insights,
                  sustainability trends, industry reports, and community updates
                  from Net Zero Think.
                </p>
              </div>
            </div>

            <div className="relative">
              {!loaded && (
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <div className="bg-black/70 backdrop-blur-xl rounded-2xl px-8 py-4 text-white font-semibold">
                    Loading Latest Posts...
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {Posts.map((post, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.15,
                    }}
                    className="bg-white/30 backdrop-blur-xl rounded-2xl p-3 shadow-lg"
                  >
                    <iframe
                      src={post}
                      title={`LinkedIn Post ${idx + 1}`}
                      className="w-full rounded-xl"
                      height="620"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      onLoad={() => setLoaded(true)}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/newsletters/net-zero-think-private-limited-6964091907949948928/",
                    "_blank",
                  )
                }
              >
                Subscribe to Newsletter
              </Button>
            </div>
          </section>
          {/* Resources Section */}

          <section className="mb-20">
            <div className="text-center mb-12 bg-white/50 backdrop-blur-xl rounded-2xl">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white bg-green-500 rounded-2xl text-center  "
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Research Studies & Resources
              </motion.h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Resources.map((resource, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white/40 backdrop-blur-xl border-white/20 hover:shadow-[0px_0px_20px_rgba(34,197,94,0.4)] hover:-translate-y-2 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="bg-green-500 text-white text-xl font-bold rounded-xl p-3 text-center">
                        {resource.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex justify-center">
                      <Link
                        href={resource.link}
                        target="_blank"
                        className="rounded-xl bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 transition-colors"
                      >
                        View Resource
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
