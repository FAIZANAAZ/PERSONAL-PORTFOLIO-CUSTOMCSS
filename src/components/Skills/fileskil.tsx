'use client'

import React, { useState, useEffect } from 'react'
import { skills } from '../../../constant/skil'
import Image from 'next/image'
import './skill.css'

export default function MySkills() {
  const [data, setdata] = useState<{ id: number; title: string; progress: string; width: string; }[]>([])

  useEffect(() => {
    setdata(skills)
  }, [])

  return (
    <>  
    <section className="skills-section">
      <div className='skills-header'>
        <span className='skills-subheading'>Technical & Professional</span>
        <h1 className='skills-heading'><span className='white-text'>M</span>y <span className='white-text'>S</span>kills</h1>
      </div>
      
      <div className='skills-content'>
        <div className='skills-list'>
          {data.map((item) => (
            <div key={item.id} className='skill-item'> 
              <div className='skill-info'>
                <p className='skill-title'>{item.title}</p>
                <p className='skill-progress'>{item.progress}</p>
              </div>
              <div className='skill-bar'>
                <span
                  className='skill-bar-fill'
                  style={{
                    width: item.width,
                  }}
                ></span>
              </div>
            </div>
          ))}
        </div>

        <div className='skills-icons'>
          <div className='icons-container'>
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
                className="skill-icon" 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

