import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

export default function Cards({services}:{services:Array<Record<string,string>>}) {
  return (
    <div className="flex flex-wrap gap-10 w-full items-center justify-center">
         {services.map((item,idx)=>(
             <Card key={idx} className="w-full max-w-md flex flex-col h-100 relative hover:-translate-x-2 hover:-translate-y-2 hover:cursor-pointer transition-all duration-500 shadow-xl shadow-gray-700 bg-gradient-to-b from-blue-600 to-pink-600">
                <CardHeader>
                    <CardTitle className="text-lg font-bold text-green-500">{item.title}</CardTitle>
                        <CardDescription className="h-40 w-full mt-5 text-white border-4 rounded-2xl flex text-center items-center font-semibold">
                            {item.description}
                        </CardDescription>
                        <Link href={`/services/#${idx}`} className="border-2 p-5 rounded-2xl absolute -translate-x-1/2 left-1/2 bottom-0 m-2 bg-green-400 text-blue-600 font-abold hover:bg-green-600 hover:text-blue-800 font-bold">Book Service</Link>
                </CardHeader>
            </Card>
        ))}
    </div>
  )
}
