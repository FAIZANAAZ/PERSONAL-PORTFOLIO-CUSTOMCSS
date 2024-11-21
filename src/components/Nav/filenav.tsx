"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ImMenu } from "react-icons/im";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import './nav.css';

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const openmenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <nav className="nav">
        <div className="logo-container">
          <Image
            src={"/Images/logo.png"}
            width={500}
            height={500}
            alt="Gift logo"
            className="logo-image"
          />
        </div>
        <div className="nav-links">
          <Link href={"/"} className="nav-link">
            Home
          </Link>
          <Link href={"/Aboutrout"} className="nav-link">
            About
          </Link>
          <Link href={"/Skilrendering"} className="nav-link">
            Skill
          </Link>
          <Link href={"/Projects"} className="nav-link">
            Projects
          </Link>
          <Link href={"/Contact"} className="nav-link">
            Contact me
          </Link>
        </div>
        <div className="menu-button-container">
          <button onClick={openmenu} className="menu-button">
            <ImMenu size={30} color="#ff0000" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menu ? (
          <motion.div
            className="mobile-menu"
            key="menuu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "16.25rem", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href={"/"} className="mobile-nav-link">
              Home
            </Link>
            <Link href={"/Aboutrout"} className="mobile-nav-link">
              About
            </Link>
            <Link href={"/Skilrendering"} className="mobile-nav-link">
              Skill
            </Link>
            <Link href={"/Projects"} className="mobile-nav-link">
              Projects
            </Link>
            <Link href={"/Contact"} className="mobile-nav-link">
              Contact me
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Nav;

