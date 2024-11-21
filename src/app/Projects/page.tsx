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
import './project.css'

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
      <section className="section">
        <h1 className="title">
          <span>M</span>y {" "}
          <span>L</span>atest {" "}
          <span>P</span>rojects
        </h1>

        {proj.map((item) => (
          <div key={item.id} className="project-container">
            <div data-aos="fade-right" className="project-image">
              <Image
                src={item.image}
                alt={`${item.name} project`}
                height={1000}
                width={1000}
              />
            </div>
            <div data-aos="fade-left" className="project-details">
              <h2 className="project-name">{item.name}</h2>
              <div className="project-link">
                <h3>
                  <IoLogoVercel style={{ backgroundColor: 'white', borderRadius: '50%', padding: '2px', color: 'black' }} />
                  Demo:
                </h3>
                <Link href={item.deploymentLink}>
                  {item.deploymentLink}
                </Link>
              </div>
              <div className="project-link">
                <h3>
                  <FaGithub style={{ backgroundColor: 'white', borderRadius: '50%', color: 'black' }} />
                  Source Code:
                </h3>
                <Link href={item.sourceLink}>
                  {item.sourceLink}
                </Link>
              </div>
              <div className="project-icons">
                <FaHtml5 color="#f16a30" />
                {item.icon1 && <item.icon1 color="#2d53e5" />}
                {item.icon2 && <item.icon2 color="#377cc8" />}
                {item.icon3 && <item.icon3 style={{ color: 'black', backgroundColor: 'white' }} />}
                {item.icon4 && <item.icon4 color="#66dbfb" />}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

