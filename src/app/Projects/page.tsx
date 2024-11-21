'use client'

import ParticlesComponent from '../../components/Design_back/filedesing'
import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { IoLogoVercel } from "react-icons/io5"
import { FaGithub, FaHtml5 } from "react-icons/fa"
import { IconType } from 'react-icons'
import { dataProjects } from "../../../constant/project"
import AOS from 'aos'
import 'aos/dist/aos.css'

interface Project {
  id: number
  name: string
  deploymentLink: string
  sourceLink: string
  icon1?: IconType
  icon2?: IconType
  icon3?: IconType
  icon4?: IconType
  image: string
}

export default function Component() {
  const [proj, setProj] = useState<Project[]>([])

  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        offset: -200,
        duration: 2000,
        easing: 'ease-in-out',
        once: true,
      })
    }
  }, [])

  useEffect(() => {
    setProj(dataProjects)
  }, [])

  return (
    <>
      <ParticlesComponent />
      <section className="relative z-10 w-full flex flex-col px-2 py-8 sm:px-4 md:px-6 lg:px-8 overflow-x-hidden">
        <h1 className="text-[#ff0000] font-bold text-2xl sm:text-3xl md:text-5xl text-center mb-8">
          <span className="text-white">M</span>y {" "}
          <span className="text-white">L</span>atest {" "}
          <span className="text-white">P</span>rojects
        </h1>

        {proj.map((item) => (
          <div key={item.id} className="w-full flex flex-col md:flex-row justify-between items-center mb-12 gap-2 sm:gap-4 md:gap-6 lg:gap-8 px-2 sm:px-0">
            <div data-aos="fade-right" className="w-full md:w-1/2 h-48 sm:h-64 md:h-72 lg:h-80 p-0 sm:p-1 md:p-2 lg:p-4">
              <Image
                src={item.image}
                alt={`${item.name} project`}
                height={1000}
                width={1000}
                className="h-full w-full object-cover border-solid border-2 border-[#ff0000] rounded-md shadow-[0_0.0625rem_0.9375rem_#ff0000]"
              />
            </div>
            <div data-aos="fade-left" className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-4">
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">{item.name}</h2>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <h3 className="flex items-center gap-2 text-red-500 font-semibold text-base sm:text-lg">
                  <IoLogoVercel className="text-black bg-white rounded-full h-6 w-6 p-0.5" />
                  Demo:
                </h3>
                <Link href={item.deploymentLink} className="text-blue-400 text-sm sm:text-sm md:text-base break-all">
                  {item.deploymentLink}
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <h3 className="flex items-center gap-2 text-red-500 font-semibold text-base sm:text-lg">
                  <FaGithub className="bg-white rounded-full h-6 w-6 text-black" />
                  Source Code:
                </h3>
                <Link href={item.sourceLink} className="text-blue-400 text-[.6875rem] xs:text-[10px] sm:text-xs md:text-sm lg:text-base break-all">
                  {item.sourceLink}
                </Link>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 mt-2">
                <FaHtml5 size={24} className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" color="#f16a30" />
                {item.icon1 && <item.icon1 size={24} className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" color="#2d53e5" />}
                {item.icon2 && <item.icon2 size={24} className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" color="#377cc8" />}
                {item.icon3 && <item.icon3 size={24} className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-black bg-white" />}
                {item.icon4 && <item.icon4 size={24} className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" color="#66dbfb" />}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}