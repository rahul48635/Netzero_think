import React from 'react'
import {default as Mark} from "react-fast-marquee";
import Image from 'next/image';
export default function Marquee() {
  const arr=[
    "/marquee/01.png",
    "/marquee/02.png",
    "/marquee/03.png",
    "/marquee/04.png",
    "/marquee/05.png",
    "/marquee/06.png",
    "/marquee/07.png",
     ]
  return (
    <div >
      <Mark  autoFill>
        {arr.map((item,idx)=>(
          <div key={idx}><Image src={item} alt={item} width={200} height={200} className='p-5'/></div>
        ))}
      </Mark>
    </div>
  )
}
