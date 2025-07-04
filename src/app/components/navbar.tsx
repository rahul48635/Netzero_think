"use client"
import React, {  useRef, useState } from "react"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import Link from "next/link"
import type { IconType } from "react-icons"

type Item = {
  title: string,
  logo: IconType,
  href: string,
}

type NavbarProps = {
  className?:string
  items: Item[]
}

export const Navbar: React.FC<NavbarProps> = ({ items,className }) => {
  const ref=useRef<HTMLDivElement>(null)
  const {scrollY}=useScroll({
    target:ref,
    offset:["start end","end start"]
  })
  const [open,setOpen]=useState<boolean>(true)
  useMotionValueEvent(scrollY,"change",(latest)=>{
    if(latest <= 500) setOpen(true)
    else setOpen(false)
  })
  
  const [active, setActive] = useState<number | null>(null)

  return (
    <motion.nav
      className={`fixed top-5 left-1/2 -translate-x-1/2 flex min-h-22 max-w-4xl items-center justify-around gap-10 rounded-3xl border-4 border-white/90 bg-slate-500/50 dark:bg-white/10 dark:text-white px-10 shadow-lg shadow-gray-600/70 backdrop-blur-xl ${className}`}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: open ? 0 : -300 }}
      transition={{ duration: 0.7, type: "tween" }}
      layout
      ref={ref}
    >
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          className="relative flex cursor-pointer flex-col items-center"
          onMouseEnter={() => setActive(idx)}
        >
          <div>
            <Link
            href={item.href}
            className="flex flex-col items-center font-semibold"
            >
              <item.logo
                size={30}
                className="fill-black dark:fill-white stroke-black dark:stroke-white stroke-1"
              />
            <span className="mt-1">{item.title}</span>
            </Link>
          </div>
          {active === idx && (
            <motion.div
              layoutId="underline"
              className="absolute bottom-0 h-[3px] w-20 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600  "
              transition={{ duration:0.3,type:"keyframes" }}
            />
          )}
        </motion.div>
      ))}
    </motion.nav>
  )
}
