'use client'

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Home1() {
  const [text, setText] = useState("Front-end Developer")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const texts = ["Front-end Developer", "Full Stack Developer"]

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length
      const fullText = texts[i]

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1))

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, texts])

  return (
    <section className="z-10 flex flex-col lg:flex-row min-h-[calc(100vh-50px)] w-full gap-8 sm:gap-12 md:gap-16 lg:gap-20 px-4 sm:px-6 md:px-8 lg:px-[8rem] justify-between items-center lg:items-start py-8 lg:py-[5rem]">
      <div className="flex flex-col gap-y-2 md:gap-y-4 mb-8 lg:mb-0 text-center lg:text-left max-w-2xl">
        <h5 className="text-[1rem] sm:text-[1.5rem] md:text-[2rem] font-bold text-white">
          Hey !
        </h5>
        <h1 className="text-4xl sm:text-4.5xl text-[#ff0000] lg:text-5xl xl:text-6xl font-bold">
          <span className="text-white">I</span> am{" "}
          <span className="shadow-lg">
            <span className="text-white">F</span>aiza{" "}
            <span className="text-white">N</span>aaz
          </span>
        </h1>
        <span className="text-white">
          <span className="TypistExample-message text-xl sm:text-2xl lg:text-3xl">
            <span>I&apos;m </span>
            <span className="font-bold text-[#ff0000]">
              {text}
            </span>
          </span>
        </span>
        <p className="text-sm sm:text-base lg:text-lg text-white max-w-md mx-auto lg:mx-0">
          I&apos;m a full-stack developer in the making, focused on building
          engaging and user-friendly interfaces.
        </p>
        <Link href="/static_resume" className="inline-block self-center lg:self-start">
          <button
            className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg font-semibold text-white bg-[#ff0000] rounded-full hover:bg-[#ff3333] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            style={{ boxShadow: "0px 1px 15px #ff0000" }}
          >
            View Resume
          </button>
        </Link>
      </div>

      <div className="lg:pl-20 relative flex justify-center lg:justify-end w-full max-w-md lg:max-w-lg xl:max-w-xl">
        <div className="w-[25rem] h-[25rem] absolute top-15 right-15 z-[-1]">
          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="shadow">
                <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#ff0000" />
              </filter>
            </defs>
            <path
              fill="#ff3333"
              filter="url(#shadow)"
            >
              <animate
                attributeName="d"
                dur="10000ms"
                repeatCount="indefinite"
                values="M360.5,284.5Q369,319,360.5,373Q352,427,301,413Q250,399,188.5,431Q127,463,83,417.5Q39,372,22.5,311Q6,250,78,221Q150,192,140.5,117.5Q131,43,190.5,61Q250,79,283.5,106.5Q317,134,377,138Q437,142,394.5,196Q352,250,360.5,284.5Z;
                M456.5,311.5Q463,373,401.5,389.5Q340,406,295,447Q250,488,203,450Q156,412,157,357.5Q158,303,118,276.5Q78,250,80,201.5Q82,153,112,108.5Q142,64,196,93.5Q250,123,312,78.5Q374,34,412,84.5Q450,135,450,192.5Q450,250,456.5,311.5Z;
                M416.5,291Q392,332,375.5,386Q359,440,304.5,425Q250,410,214.5,391.5Q179,373,168.5,338Q158,303,142,276.5Q126,250,123.5,213Q121,176,150.5,153Q180,130,215,98Q250,66,295.5,79.5Q341,93,352,139Q363,185,402,217.5Q441,250,416.5,291Z;
                M456.5,300.5Q426,351,383.5,379.5Q341,408,295.5,380Q250,352,207.5,374.5Q165,397,129.5,368.5Q94,340,117,295Q140,250,132,214Q124,178,131,117Q138,56,194,72.5Q250,89,276.5,123.5Q303,158,341,166.5Q379,175,433,212.5Q487,250,456.5,300.5Z;
                M436.5,308Q452,366,381.5,360.5Q311,355,280.5,387.5Q250,420,188,442.5Q126,465,94,411.5Q62,358,67.5,304Q73,250,72,198.5Q71,147,103,99Q135,51,192.5,32Q250,13,280,80Q310,147,356.5,154.5Q403,162,412,206Q421,250,436.5,308Z;
                M360.5,284.5Q369,319,360.5,373Q352,427,301,413Q250,399,188.5,431Q127,463,83,417.5Q39,372,22.5,311Q6,250,78,221Q150,192,140.5,117.5Q131,43,190.5,61Q250,79,283.5,106.5Q317,134,377,138Q437,142,394.5,196Q352,250,360.5,284.5Z;"
              ></animate>
            </path>
          </svg>
        </div>
        <div className="h-[20rem] w-[20rem] sm:h-68 sm:w-68 md:h-80 md:w-80 lg:h-[20rem] lg:w-[20rem] flex justify-center items-center md:pr-8 lg:mr-5">
          <Image
            src="/Images/profilep.png"
            alt="front-girl"
            width={1000}
            height={1000}
            className="shadow-red-600 lg:h-[30rem] lg:w-[30rem] h-[100%] w-[100%] object-contain"
          />
        </div>
      </div>
    </section>
  )
}