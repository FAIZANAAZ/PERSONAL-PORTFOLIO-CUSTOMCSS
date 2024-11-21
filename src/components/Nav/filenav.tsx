"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ImMenu } from "react-icons/im";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const openmenu = () => {
    setMenu(!menu);
  };
// bg-gradient-to-r from-red-500 to-black
  return (
    <>
      <nav className=" z-10 top-0 w-[100%] flex justify-between items-center px-2  text-white opacity-[.05rem]">
        <div className="flex items-center ml-[.3125rem] sm:ml-[1.25rem]">
          <Image
            src={"/Images/logo.png"}
            width={500}
            height={500}
            alt="Gift logo"
            className="sm:w-[8.25rem] sm:h-[8.25rem] h-[3.125rem] w-[4.125rem] "
          />
        </div>
        <div className="sm:flex lg:space-x-[5rem] text-white lg:font-semibold lg:text-[1.5625rem] md:space-x-[1.875rem] md:text-[1.25rem] md:font-[600] sm:space-x-[1.875rem] sm:text-[1.125rem] sm:font-[500] absolute right-[3.125rem] hidden">
          <Link
            href={"/"}
            className="hover:underline hover:decoration-red-400 hover:font-bold transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href={"/Aboutrout"}
            className="hover:underline hover:decoration-red-400 hover:font-bold transition-all duration-300"
          >
            About
          </Link>
          <Link
            href={"/Skilrendering"}
            className="hover:underline hover:decoration-red-400 hover:font-bold transition-all duration-300"
          >
            Skill
          </Link>
          <Link
            href={"/Projects"}
            className="hover:underline hover:decoration-red-400 hover:font-bold transition-all duration-300"
          >
            Projects
          </Link>
          <Link
            href={"/Contact"}
            className="hover:underline hover:decoration-red-400 hover:font-bold transition-all duration-300"
          >
            Contact me
          </Link>
        </div>
        <div className="flex flex-col justify-center items-end">
          <button onClick={openmenu} className="sm:hidden block">
            <ImMenu size={30} color="#ff0000" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menu ? (
          <motion.div
            className="absolute z-20 top-[3.75rem] right-[.125rem] flex flex-col space-y-[1.25rem] text-center font-bold h-[16.25rem] w-[140px] bg-white text-black text-[1.25rem] sm:hidden p-4"
            key="menuu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "16.25rem", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href={"/"}
              className="hover:underline hover:decoration-red-400 hover:font-bold transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href={"/Aboutrout"}
              className="hover:underline hover:decoration-red-400 hover:font-bold transition-all duration-300"
            >
              About
            </Link>
            <Link
              href={"/Skilrendering"}
              className="hover:underline hover:decoration-red-400 hover:font-bold transition-all duration-300"
            >
              Skill
            </Link>
            <Link
              href={"/Projects"}
              className="hover:underline hover:decoration-red-400 hover:font-bold transition-all duration-300"
            >
              Projects
            </Link>
            <Link
              href={"/Contact"}
              className="hover:underline hover:decoration-red-400 hover:font-bold transition-all duration-300"
            >
              Contact me
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Nav;
