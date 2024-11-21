"use client"
import React, { useState } from 'react'
import { sendEmail } from '../../utils/emailServices'
import './contact.css'

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
      <section className="contact-section">
        <div className="contact-header">
          <h3>Ask Me Questions</h3>
          <h1>
            <span>C</span>ontact {" "}
            <span>M</span>e
          </h1>
        </div>
        <div className="form-container">
          <form action="#" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder='Your Name' 
              name='name' 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
            <input 
              type="email" 
              placeholder='Your Email' 
              name='email' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <textarea
              cols={30}
              rows={10}
              placeholder='Your Message'
              name="message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="button-container">
              <button type='submit'>
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

