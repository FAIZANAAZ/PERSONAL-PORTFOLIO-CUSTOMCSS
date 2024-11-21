import Link from "next/link";
import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

const MyFooter = () => {
    return (
<>
    <footer className="bg-[#161515] text-white py-2 px-4 sm:px-6 lg:px-4 relative z-10 pb-6">
        <div className="max-w-6xl  mx-auto flex flex-col items-center lg:flex-row lg:justify-between">
            <div className="   lg:mb-0 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                    <span className="text-[#ff0000]">Faiza</span> Naaz
                </h2>
                <p className="text-sm sm:text-base mt-2">Full Stack Developer</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4  lg:mb-0">
                {/* <Link
                    href="https://github.com/FAIZANAAZ"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub
                        size={24}
                        className="sm:w-6 sm:h-6 lg:w-8 lg:h-8 hover:text-[#ff0000] transition-colors duration-300"
                    />
                </Link> */}
                <Link
                    href="https://www.linkedin.com/in/faiza-naaz-2421722b9/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin
                        size={24}
                        className="sm:w-6 sm:h-6 lg:w-8 lg:h-8 hover:text-[#ff0000] transition-colors duration-300"
                    />
                </Link>
                <Link
                    href="https://vercel.com/faiza-naazs-projects"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IoLogoVercel
                        size={24}
                        className="sm:w-6 sm:h-6 lg:w-8 lg:h-8 hover:text-[#ff0000] transition-colors duration-300"
                    />
                </Link>
                <Link href="mailto:mmfaizanhussain@gmail.com">
    <FaEnvelope
        size={24}
        className="sm:w-6 sm:h-6 lg:w-8 lg:h-8 hover:text-[#ff0000] transition-colors duration-300"
    />
</Link>

            </div>
        </div>
        <div className="mt-8 text-center flex items-center gap-5 justify-center">
            <p className="mt-2 text-xs sm:text-sm">
                <p
                   
                    className="hover:text-[#ff0000] inline-block transition-colors duration-300">
                    Privacy Policy
                </p>
                {" | "}
                <p
                    className="hover:text-[#ff0000] inline-block transition-colors duration-300">
                    Terms of Service
                </p>
            </p>

            <a
                href="#top"
                className="inline-block px-4 py-2 bg-[#ff0000] text-white rounded-full text-sm hover:bg-[#ff3333] transition-colors duration-300 shadow-[0_0.0625rem_0.9375rem_#ff0000]"
            >
                Back to Top
            </a>
        </div>
    </footer>
</>
    );
};

export default MyFooter;
