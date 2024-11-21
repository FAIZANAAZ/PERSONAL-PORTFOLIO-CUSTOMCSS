
import React from 'react'
import Image from 'next/image'
import ParticlesComponent from '../../components/Design_back/filedesing'


const Resume = () => {
  return (<>
  <ParticlesComponent/>
  <section className="relative z-10 flex justify-center items-center min-h-screen w-full  p-2 sm:p-4 md:p-6 lg:p-8">
      <div className="bg-slate-400 shadow-2xl rounded-lg overflow-hidden w-full max-w-4xl">
        {/* Personal Information Section */}
        <header className="bg-red-600 p-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-center lg:text-left mb-4 lg:mb-0">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white underline">FAIZA NAAZ</h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black underline mt-2">SOFTWARE ENGINEER</h2>
            </div>
            <Image
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-cover rounded-full border-4 border-white shadow-lg"
              src="/Images/profilep.png"
              width={200}
              height={200}
              alt="Profile Picture"
            />
          </div>
          <div className="mt-4 flex flex-col sm:flex-row justify-between items-center bg-slate-500 p-2 sm:p-4 border-t-2 border-b-2 border-black text-xs sm:text-sm lg:text-base">
            <p className="font-semibold text-gray-900 mb-2 sm:mb-0"><i className="fa-solid fa-mobile-screen mr-2"></i>Phone: 03168909876</p>
            <p className="font-semibold text-gray-900 mb-2 sm:mb-0"><i className="fa-solid fa-envelope mr-2"></i>Email: faizanaaz@gmail.com</p>
            <p className="font-semibold text-gray-900"><i className="fa-brands fa-linkedin mr-2"></i>LinkedIn: www.linkedin.com/faizanaaz17396</p>
          </div>
        </header>

        <div className="p-4 flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/5 pr-0 lg:pr-4">
            {/* Education Section */}
            <section className="mb-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-red-600 p-2 border-2 border-black mb-4">Education</h2>
              <p className="text-base sm:text-lg lg:text-xl mb-2 font-semibold text-gray-900"><i className="fa-regular fa-circle mr-2"></i>1. Bachelor in Computer Science</p>
              <p className="text-sm sm:text-base lg:text-lg mb-2 font-semibold text-gray-900"><i className="fa-regular fa-circle mr-2"></i>from Karachi University</p>
              <p className="text-sm sm:text-base lg:text-lg mb-2 font-semibold text-gray-900"><i className="fa-regular fa-circle mr-2"></i>(2024)</p>
            </section>

            {/* Skills Section */}
            <section className="mb-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-red-600 p-2 border-2 border-black mb-4">Skills</h2>
              <ul className="list-none pl-2">
                {['Javascript', 'Typescript', 'Python', 'HTML & CSS', 'React', 'Next.js'].map((skill, index) => (
                  <li key={index} className="text-base sm:text-lg lg:text-xl mb-2 font-semibold text-gray-900">
                    {index + 1}. {skill}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="w-full lg:w-2/5 mt-6 lg:mt-0">
            {/* Work Experience Section */}
            <section className="bg-slate-400 border-2 border-black p-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-red-600 p-2 border-2 border-black mb-4">Work Experience</h2>
              <p className="text-sm sm:text-base lg:text-lg mb-4 font-semibold text-gray-900">
                <i className="fa-regular fa-circle mr-2"></i>
                Software Developer with hands-on experience in developing robust applications using the latest technologies. 
                Worked at TechWave Solutions, focusing on delivering high-quality software solutions to meet client needs.
              </p>

              {/* Languages Section */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-red-600 p-2 border-2 border-black mb-4">Languages</h2>
              <div className="flex">
                <p className="text-base sm:text-lg lg:text-xl mr-4 font-semibold text-gray-900">English</p>
                <p className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">Urdu</p>
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
