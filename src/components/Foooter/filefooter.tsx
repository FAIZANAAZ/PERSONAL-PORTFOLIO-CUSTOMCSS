import Link from "next/link";
import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import './footer.css';

const MyFooter = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-info">
                        <h2 className="footer-title">
                            <span className="footer-title-highlight">Faiza</span> Naaz
                        </h2>
                        <p className="footer-subtitle">Full Stack Developer</p>
                    </div>
                    <div className="footer-links">
                        <Link
                            href="https://www.linkedin.com/in/faiza-naaz-2421722b9/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            <FaLinkedin className="footer-icon" />
                        </Link>
                        <Link
                            href="https://vercel.com/faiza-naazs-projects"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            <IoLogoVercel className="footer-icon" />
                        </Link>
                        <Link href="mailto:mmfaizanhussain@gmail.com" className="footer-link">
                            <FaEnvelope className="footer-icon" />
                        </Link>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="footer-text">
                        <span className="footer-text-link">Privacy Policy</span>
                        {" | "}
                        <span className="footer-text-link">Terms of Service</span>
                    </p>
                    <a href="#top" className="back-to-top">
                        Back to Top
                    </a>
                </div>
            </footer>
        </>
    );
};

export default MyFooter;

