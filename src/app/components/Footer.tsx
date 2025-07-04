import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

type items={
    head:string,
    Links: Record<string, string>
}

export default function Footer({items}:{items:items[]}) {
  type social={
    [key:string]:React.ReactNode
  }
  const socials:social={
    "https://www.instagram.com/netzerothink_india/":<FaInstagram />,
    "https://x.com/NetZeroThink_":<FaTwitter />,
    "https://www.youtube.com/@netzerothink":<FaYoutube />,
    "https://www.facebook.com/p/NET-ZERO-THINK-100078446962916/?paipv=0&eav=AfbufXp8uGtISCG_iy2czsdtQ26X2s_mPiSk8kf5sPQoy09ZH2yUGQvIi02y_AzhYFU&_rdr":<FaFacebook />,
    "https://www.linkedin.com/company/net-zero-think/":<FaLinkedin />

  }
  return (
    <div className='max-w-full max-h-full bg-slate-500 '>
      <div className='min-w-full flex h-[15rem] rounded-tl-3xl rounded-tr-3xl justify-evenly items-center'>
        <div>
          <Image src="/Netzerothink.png" alt='logo' width={300} height={300}/>
        </div>
          <div className='flex justify-around p-10 items-center w-full basis-1/2 h-full'>
            {items.map((item,idx)=>(
                <div key={idx} className='flex flex-col items-center h-full  '>
                    <div className='text-slate-200 m-5 justify-self-start w-full '>
                        {item.head}
                    </div>
                    <div className='justify-self-start flex flex-col gap-1 text-gray-300 w-full'>
                        {Object.entries(item.Links).map(([linkText, linkHref], idx) => (
                            <motion.div key={idx} whileHover={{scale:1.2}} transition={{duration:0.3}}>
                                <Link href={linkHref} className="hover:underline">{linkText}</Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))}
          </div>
      </div>
      <div className='flex w-full justify-around m-5 items-center'>
            <h1>© 2022 Net – Zero Think. All rights reserved</h1>
            <div className='flex justify-between w-[10rem]'>
              {Object.entries(socials).map(([key,value],idx)=>(
                <Link href={key} key={idx} >{value}</Link>
              ))}
            </div>
      </div>
    </div>
  )
}
