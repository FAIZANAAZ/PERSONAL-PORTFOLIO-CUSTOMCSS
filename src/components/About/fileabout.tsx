'use client'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { MdWork, MdSchool } from "react-icons/md"
import Image from 'next/image'
import { timelineData, TimelineItem } from '../../../constant/about'
import './about.css'

export default function TimelineAbout() {
  const renderTimelineElement = (item: TimelineItem) => (
    <VerticalTimelineElement
      key={item.id}
      className={`vertical-timeline-element--${item.icon}`}
      contentStyle={{ background: '#ff0000', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #ff0000' }}
      date={item.date}
      dateClassName="timeline-date"
      iconStyle={{ background: '#ff0000', color: '#fff', boxShadow: '0px 1px 0.9375rem #ff0000' }}
      icon={item.icon === 'work' ? <MdWork className="icon" /> : <MdSchool className="icon" />}
    >
      <h3 className="timeline-title">{item.title}</h3>
      {item.subtitle && <h4 className="timeline-subtitle">{item.subtitle}</h4>}
      {item.description && <p className="timeline-description">{item.description}</p>}
    </VerticalTimelineElement>
  )

  return (
    <>
      <section className="timeline-section">
        <div className="timeline-header">
          <span className="timeline-span">Professional Journey</span>
          <h1 className="timeline-h1">
            <span className="timeline-span-white">M</span>y <span className="timeline-span-white">J</span>ourney
          </h1>
        </div>
        
        <div className="timeline-container">
          <div className="timeline-left">
            <VerticalTimeline>
              {timelineData.map(renderTimelineElement)}
            </VerticalTimeline>
          </div>

          <div className="timeline-right">
            <div className="about-card">
              <h2 className="about-title">About Me</h2>
              <div className="about-content">
                <p className="about-text">
                  Over the past year, I have worked tirelessly to build my skills in full-stack development, mastering HTML, CSS, Tailwind CSS, JavaScript, TypeScript, and React. 💻 I design Figma templates from scratch and turn them into functional websites using Next.js, and I also create websites from pictures as references. 🎨 While I dont consider myself an expert yet, I am confident in my ability to deliver quality work. 💪 With two quarters of my learning journey complete, I am proud of the progress I have made, but I know theres much more to achieve. 🚀 I am currently focused on continuous learning and improving my expertise, and InshaAllah, I plan to dive into AI and Python in the upcoming quarters. 🤖 My dedication to learning and passion for web development keeps me motivated to reach new heights. 📈
                </p>
              </div>
              <div className="about-image-container">
                <Image
                  src="/Images/front-girl.png"
                  alt="front-girl"
                  width={400}
                  height={400}
                  className="about-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

