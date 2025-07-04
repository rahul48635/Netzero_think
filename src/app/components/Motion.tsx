"use client"
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import {motion,   useScroll, useTransform, useMotionTemplate, useSpring, useMotionValueEvent}  from "framer-motion";
import { BsBank2 } from 'react-icons/bs';
import { TbBuildingSkyscraper } from 'react-icons/tb';
import { FaBuildingNgo } from 'react-icons/fa6';
import { RiGovernmentLine } from 'react-icons/ri';
import { FaStoreAlt } from 'react-icons/fa';
export default function Motion():React.ReactNode {
    const ProgeressRef=useRef<HTMLDivElement>(null)
    const {scrollYProgress}=useScroll({
        target:ProgeressRef,
        offset:["start end","end start"]
    })
    const backgrounds=["#f8fafc","#d2d4c8","#ffe5d9"]
    const [background,setBackground]=useState("")
    useMotionValueEvent(scrollYProgress,"change",(latest)=>{
        const value=Math.floor(latest*backgrounds.length)
        setBackground(backgrounds[value])
    })
  return (
    <motion.div animate={{background}} transition={{duration:0.3,type:"tween",ease:"easeInOut"}}  ref={ProgeressRef}  className='w-[calc(100%_-_15rem)] h-full flex justify-center rounded-4xl self-center justify-self-center shadow-[0px_0px_40px_10px_#00b4d8,0px_0px_10px_5px_#0096c7] '>
        <div className='mx-auto flex w-full flex-col gap-40 py-40'>
            {feature.map((feature,idx)=>(
                <Card key={idx} feature={feature}/>
            ))}
        </div>
    </motion.div>
  )
}



const Card = ({feature}:{feature:feature})=>{
    const ref=useRef<HTMLDivElement>(null)
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start end","end start"]
    });
    const offset=useSpring(useTransform(scrollYProgress,[0,1],[-300,100]))
    const opacity=useTransform(scrollYProgress,[0,0.8,1],[0.5,1,0])
    const blur=useTransform(scrollYProgress,[0,0.1,0.6,1],[10,0,0,10])
    const scale=useTransform(scrollYProgress,[0,1],[1,0.5])
    return (
        <motion.div ref={ref} key={feature.title} className='grid grid-cols-2 items-center gap-20 py-40'
        initial={{opacity:0}}
        animate={{opacity:1}}
        style={{
                opacity,
                filter: useMotionTemplate`blur(${blur}px)`
            }}
        >
            <motion.div style={{scale}}  className='flex flex-col gap-5 text-5xl'>
                {feature.icon}
                <h2 className='text-4xl font-bold text-gray-500 dark:text-white '>{feature.title}</h2>
                <p className='text-lg text-neutral-500'>{feature.discription}</p>
            </motion.div>
            <motion.div  style={{y: offset}}
            >{feature.content}</motion.div>
        </motion.div>
    )
}
type feature={
        icon:React.ReactNode,
        title:string,
        discription:string,
        content:React.ReactNode
    }



const feature:feature[]=[
    {
        icon:<BsBank2/>,
        title:"BFSI",
        discription:"Banking Financial Services & Insurance organizations are impacted significantly by climate change events. Globally Economic Losses in 2021 due to climatic event were USD 280 billion (Natural catastrophes- USD 270billion; Man- made catastrophes-USD 10 billion) which is 0.29% of global GDP. In last 10-year average economic losses have increased to USD 204 billion per year.",
        content:(
            <div>
                <Image
                src="/solutions/img1.jpg"
                alt="car"
                width={500}
                height={500}
                className='rounded-lg '
                />
            </div>
        )
    },
    {
        icon:<TbBuildingSkyscraper/>,
        title:"Corporates",
        discription:"Top 100 global company contributes more than 70% of GHG. Large corporates from Energy, Oil & Gas, Cement, Steel, Manufacturing, IT, Construction & Mining sectors are responsible for maximum emissions.Net Zero Think helps corporates to understand carbon footprinting, set reduction targets and offsetting in cost effective manner.",
        content:(
            <div>
                <Image
                src="/solutions/img2.jpg"
                alt="car"
                width={500}
                height={500}
                className='rounded-lg'
                />
            </div>
        )
    },
    {
        icon:<FaBuildingNgo />,
        title:"NGO",
        discription:"NET ZERO THINK works with NGO & Think Tanks on specific researches and provide expertise to formulate policy & guideline to promote NET ZERO practices in global supply chain.",
        content:(
            <div>
                <Image
                src="/solutions/img3.jpg"
                alt="car"
                width={500}
                height={500}
                className='rounded-lg'
                />
            </div>
        )
    },
     {
        icon:<RiGovernmentLine/>,
        title:"Government Organization",
        discription:"Government organizations worldwide have identified the need to start tracking and managing their greenhouse gas emissions, both to demonstrate environmental leadership and to prepare for future reporting policies and regulations. The operations of public sector organizations represent a substantial source of GHG emissions worldwide and action needs to be taken.Net Zero Think works with Government bodies to develop low emissions policies & guidelines; and implementing the solutions at ground.",
        content:(
            <div>
                <Image
                src="/solutions/img4.png"
                alt="car"
                width={500}
                height={500}
                className='rounded-lg'
                />
            </div>
        )
    },
     {
        icon:<FaStoreAlt/>,
        title:"MSME",
        discription:"According to the WTO's research, MSMEs represent 95 per cent of companies across the globe and account for 60 per cent of the world's total employment. They contribute to around 35 per cent of GDP in developing countries and around 50 per cent in developed countries.Around 63 millions of Indian MSME contributes about 29% towards the GDP through its national and international trade of services & goods. Carbon footprinting & ESG practicing would help MSMEs to be market relevant in international competition.",
        content:(
            <div>
                <Image
                src="/solutions/img5.jpg"
                alt="car"
                width={500}
                height={500}
                className='rounded-lg'
                />
            </div>
        )
    }
]
