import React from 'react'
import Image from 'next/image'
import ParticlesComponent from '../../components/Design_back/filedesing'
import './resume.css'

const Resume = () => {
  return (<>
  <ParticlesComponent/>
  <section className="resume-section">
      <div className="resume-container">
        {/* Personal Information Section */}
        <header className="resume-header">
          <div className="header-content">
            <div className="personal-info">
              <h1 className="name">FAIZA NAAZ</h1>
              <h2 className="title">SOFTWARE ENGINEER</h2>
            </div>
            <Image
              className="profile-picture"
              src="/Images/profilep.png"
              width={200}
              height={200}
              alt="Profile Picture"
            />
          </div>
          <div className="contact-info">
            <p className="contact-item"><i className="fa-solid fa-mobile-screen"></i>Phone: 03168909876</p>
            <p className="contact-item"><i className="fa-solid fa-envelope"></i>Email: faizanaaz@gmail.com</p>
            <p className="contact-item"><i className="fa-brands fa-linkedin"></i>LinkedIn: www.linkedin.com/faizanaaz17396</p>
          </div>
        </header>

        <div className="resume-body">
          <div className="main-content">
            {/* Education Section */}
            <section className="education-section">
              <h2 className="section-title">Education</h2>
              <p className="education-item"><i className="fa-regular fa-circle"></i>1. Bachelor in Computer Science</p>
              <p className="education-item"><i className="fa-regular fa-circle"></i>from Karachi University</p>
              <p className="education-item"><i className="fa-regular fa-circle"></i>(2024)</p>
            </section>

            {/* Skills Section */}
            <section className="skills-section">
              <h2 className="section-title">Skills</h2>
              <ul className="skills-list">
                {['Javascript', 'Typescript', 'Python', 'HTML & CSS', 'React', 'Next.js'].map((skill, index) => (
                  <li key={index} className="skill-item">
                    {index + 1}. {skill}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="sidebar">
            {/* Work Experience Section */}
            <section className="work-experience-section">
              <h2 className="section-title">Work Experience</h2>
              <p className="work-experience-content">
                <i className="fa-regular fa-circle"></i>
                Software Developer with hands-on experience in developing robust applications using the latest technologies. 
                Worked at TechWave Solutions, focusing on delivering high-quality software solutions to meet client needs.
              </p>

              {/* Languages Section */}
              <h2 className="section-title">Languages</h2>
              <div className="languages-content">
                <p className="language-item">English</p>
                <p className="language-item">Urdu</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
</>
  )
}

export default Resume

