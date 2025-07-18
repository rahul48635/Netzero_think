import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Cards({services}:{services:Array<Record<string,string>>}) {
  return (
    <div className="flex flex-wrap gap-10 w-full items-center justify-center">
         {services.map((item,idx)=>(
             <Card key={idx} className="w-full max-w-md flex flex-col h-130 relative hover:-translate-x-2 hover:-translate-y-2 hover:cursor-pointer transition-all duration-500 shadow-xl shadow-gray-700 bg-blue-100">
                <Image src={item.url} alt={item.title} width={500} height={500}/>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-blue-800">{item.title}</CardTitle>
                        <Link href={`/services/#${idx}`} className="border-2 p-5 rounded-2xl absolute -translate-x-1/2 left-1/2 bottom-0 m-2 bg-blue-800 text-white font-abold hover:bg-blue-900 hover:text-gray-100 transition-colors duration-300 font-bold">Know More</Link>
                </CardHeader>
            </Card>
        ))}
    </div>
  )
}
