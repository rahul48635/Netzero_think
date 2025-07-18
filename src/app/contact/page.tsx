import React from 'react'

export default function page() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center px-4  text-center relative bottom-40 sm:static sm:bottom-0 bg-[url('/bg-cover/cover.jpg')] bg-fixed bg-cover bg-no-repeat mask-b-from-99% mb-5">
        <div>
            <h1 className='text-white bg-gray-500 rounded-2xl text-5xl'>Contact Us</h1>
        </div>
      </section>
    </div>
  )
}
