'use client'

import React, { useState, useEffect } from 'react'
import { skills } from '../../../constant/skil'
import Image from 'next/image'


export default function MySkills() {
  const [data, setdata] = useState<{ id: number; title: string; progress: string; width: string; }[]>([])

  useEffect(() => {
    setdata(skills)
  }, [])

  return (
    <>  
    <section  className="min-h-screen relative z-10 flex flex-col w-full py-5 overflow-x-hidden">
      <div className='w-full text-center'>
        <span className='text-white text-center text-sm sm:text-base md:text-lg lg:text-xl '>Technical & Professional</span>
        <h1 className='text-[#ff0000] font-bold text-2xl mt-3 sm:text-3xl md:text-4xl lg:text-5xl text-center '><span className='text-white'>M</span>y <span className='text-white'>S</span>kills</h1>
      </div>
      
      <div className='flex flex-col md:flex-row w-full mt-8'>
        <div className='p-4 md:p-7 w-full md:w-[45%]'>
          {data.map((item) => (
            <div key={item.id} className='mb-5'> 
              <div className='text-sm flex justify-between px-2 py-0'>
                <p className='text-white font-bold'>{item.title}</p>
                <p className='text-white'>{item.progress}</p>
              </div>
              <div className='rounded-3xl relative h-3.5 mt-2.5 w-full bg-white'>
                <span
                  className='h-full absolute left-0 bg-[#ff0000] rounded-3xl'
                  style={{
                    boxShadow: '0px 1px 0.9375rem #ff0000',
                    width: item.width,
                  }}
                ></span>
              </div>
            </div>
          ))}
        </div>

        <div className='w-full md:w-[55%] flex items-center justify-center mt-8 md:mt-0'>
          <div className='flex gap-4 flex-wrap justify-center items-center max-w-[31.25rem]'>
            {[
              "html", "css3", "tailwind", "figma", "nextjs", 
              "typescript", "javascript", "react"
            ].map((icon) => (
              <Image 
                key={icon}
                src={`/icons/${icon}.png`} 
                alt={`${icon} icon`} 
                width={100} 
                height={100} 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-full bg-white shadow-2xl p-2 hover:scale-105 transition-transform duration-300" 
                style={{ boxShadow: '0px 1px 0.9375rem #ff0000' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}