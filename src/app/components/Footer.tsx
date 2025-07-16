import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaFacebook,
  // FaInstagram,
  FaLinkedin,
  // FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

export type items = {
  head: string;
  Links: Record<string, string>;
}[];

export default function Footer({ items }: { items: items }) {
  type social = {
    [key: string]: React.ReactNode;
  };

  const socials: social = {
    // "https://www.instagram.com/netzerothink_india/": <FaInstagram fill='#ff006e'/>,
    // "https://x.com/NetZeroThink_": <FaTwitter fill='#00b4d8' />,
    "https://www.youtube.com/@netzerothink": <FaYoutube fill='red' />,
    "https://www.facebook.com/p/NET-ZERO-THINK-100078446962916/?paipv=0&eav=AfbufXp8uGtISCG_iy2czsdtQ26X2s_mPiSk8kf5sPQoy09ZH2yUGQvIi02y_AzhYFU&_rdr": <FaFacebook fill='blue'/>,
    "https://www.linkedin.com/company/net-zero-think/": <FaLinkedin fill='#03045e' />,
  };

  return (
    <div className="w-full bg-yellow-200">
      <div className="w-full flex flex-col md:flex-row md:h-[15rem] rounded-t-3xl justify-evenly items-center gap-6 p-6">
        <div className="flex-shrink-0">
          <Image
            src="/Netzerothink.png"
            alt="logo"
            width={200}
            height={200}
            className="w-auto h-auto max-w-[150px] md:max-w-[200px]"
          />
        </div>

        <div className="flex flex-wrap justify-center md:justify-evenly gap-10 w-full">
          {items.map((item, idx) => (
            <div
              key={idx + item.head}
              className="flex flex-col items-center md:items-start"
            >
              <div className="text-blue-800 mb-2 font-semibold text-lg text-left self-start md:text-left">
                {item.head}
              </div>
              <div className="flex flex-col gap-1 text-blue-800 text-sm">
                {Object.entries(item.Links).map(([linkText, linkHref], idx) => (
                  <motion.div
                    key={idx + linkText}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link href={linkHref} className="hover:underline">
                      {linkText}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-6 py-4 border-t border-gray-400 text-sm text-blue-800">
        <h1 className="text-center">
          © 2022 Net – Zero Think. All rights reserved
        </h1>
        <div className="flex gap-4 text-white text-xl">
          {Object.entries(socials).map(([key, value], idx) => (
            <Link href={key} key={idx}  target="_blank">
              {value}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
