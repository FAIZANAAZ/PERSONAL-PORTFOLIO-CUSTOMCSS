"use client"
import React, { useState } from 'react'
import { sendEmail } from '../../utils/emailServices'


const MyContact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const templateParams = {
      to_name: "Faiza Naaz",
      from_name: name,
      email: email,
      message: message
    }
    try {
      await sendEmail(templateParams)
      alert("Email sent successfully")
      setName("")
      setEmail("")
      setMessage("")
    } catch (error) {
      console.log("EmailJs Error", error);
      alert("Failed to sent email")



    }
  }






return (
  <>
   

    <section className='min-h-screen relative z-10 flex flex-col w-full py-5 px-4 sm:px-6 lg:px-8 overflow-x-hidden'>
      <div className='items-center justify-center w-full h-full'>
        <h3 className='text-white text-center text-sm sm:text-base md:text-lg lg:text-xl mb-2'>Ask Me Questions</h3>
        <h1 className="text-[#ff0000] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8">
          <span className="text-white">C</span>ontact {" "}
          <span className="text-white">M</span>e
        </h1>
      </div>
      {/* form */}
      <div className='w-full max-w-2xl mx-auto'>
        <form action="#" className='flex flex-col text-center gap-2' onSubmit={handleSubmit}>
          <input type="text" placeholder='Your Name' className='px-5 w-full p-3 text-base sm:text-lg rounded-3xl' name='name' value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder='Your Email' className='px-5 w-full p-3 text-base sm:text-lg rounded-3xl' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <textarea
            id=""
            cols={30}
            rows={10}
            placeholder='Your Message'
            className='px-5 w-full p-3 text-base sm:text-lg rounded-3xl resize-none' 
            name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          <div className='mt-4'>
            <button
              type='submit'
              className='px-8 sm:px-10 py-2 sm:py-3 rounded-[50px] bg-[#ff0000] text-white hover:bg-[#ff3333] text-base sm:text-lg md:text-xl transition-colors duration-300 shadow-[0_0.0625rem_0.9375rem_#ff0000] cursor-pointer'
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>

  </>
)
}

export default MyContact