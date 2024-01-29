import React, { useState, useEffect } from 'react';
import '../Color.css';
import { IoMdHome } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { FaComment } from "react-icons/fa";
import HomeSection from './HomeSection';
import About from './About';
import Service from './Service';
import Portfolio from './Portfolio';
import Contact from './Contact';
import StyleSwitch from './StyleSwitch';
import StyleSwitcher from './StyleSwitcher';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleNavLinkClick = (section) => {
        setActiveSection(section);
        setIsSidebarOpen(false);
        setTimeout(() => {
            const sections = document.querySelectorAll('.section');
            sections.forEach((s) => s.classList.remove('slide-in', 'active'));

            const currentSection = document.getElementById(section);
            currentSection.classList.add('slide-in', 'active');
            currentSection.scrollIntoView({ behavior: 'smooth' });
            localStorage.setItem('activeSection', section);
        }, 500);
    };

    useEffect(() => {
        const storedActiveSection = localStorage.getItem('activeSection');
        if (storedActiveSection) {
            setActiveSection(storedActiveSection);
        }
    }, []);

    return (
        <>
            <div className="main-container">
                <div className={`aside ${isSidebarOpen ? 'open' : ''}`}>
                    <div className="logo">
                        <img src="image/logo.jpg" alt="" 
                        style={{width:"12vw",height:'12vh', borderRadius:"50%"}} />
                        {/* <a href="#"><span>S</span>qube</a> */}
                    </div>
                    <div className={`nav-toggle ${isSidebarOpen ? 'open' : ''}`} onClick={handleToggleSidebar}>
                        <span></span>
                    </div>

                    <ul className="nav">
                        <li>
                            <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => handleNavLinkClick('home')}>
                                <i><IoMdHome /></i>Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => handleNavLinkClick('about')}>
                                <i><FaUserCircle /></i>About
                            </a>
                        </li>
                        <li>
                            <a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={() => handleNavLinkClick('services')}>
                                <i><FaList /></i>Services
                            </a>
                        </li>
                        <li>
                            <Link to="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''} onClick={() => handleNavLinkClick('portfolio')}>
                                <i><FaBriefcase /></i>Portfolio
                            </Link>
                        </li>
                        <li>
                            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => handleNavLinkClick('contact')}>
                                <i><FaComment /></i>Contact
                            </a>
                        </li>
                    </ul>

                </div>

                <div className="main-content">
                    <section className={`home section ${activeSection === 'home' ? 'active' : ''}`} id='home'>
                        <HomeSection />
                    </section>
                    <section className={`about section ${activeSection === 'about' ? 'active' : ''}`} id='about'>
                        <About />
                    </section>
                    <section className={`service section ${activeSection === 'services' ? 'active' : ''}`} id='services'>
                        <Service />
                    </section>
                    <section className={`portfolio section ${activeSection === 'portfolio' ? 'active' : ''}`} id='portfolio'>
                        <Portfolio />
                    </section>
                    <section className={`contact section ${activeSection === 'contact' ? 'active' : ''}`} id='contact'>
                        <Contact />
                    </section>
                </div>

                <div className={`style-switcher ${isOpen && 'style-switcher--open '}`}>
                    <StyleSwitch setIsOpen={setIsOpen} />
                </div>
            </div>
        </>
    );
}

export default Sidebar;
