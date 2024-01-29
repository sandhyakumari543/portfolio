import React, { useState } from 'react';
import { FaCalendar } from 'react-icons/fa';
import educationData from './Education';
import experienceData from './Experience';

const About = () => {
    const [education, setEducation] = useState(educationData);
    const [experience, setExperience] = useState(experienceData);
    const handleNavLinkClick = (section) => {

        setTimeout(() => {
            const sections = document.querySelectorAll('.section');
            sections.forEach((s) => s.classList.remove('slide-in', 'active'));

            const currentSection = document.getElementById(section);
            currentSection.classList.add('slide-in', 'active');
            currentSection.scrollIntoView({ behavior: 'smooth' });
        }, 500);
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>About Me</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="about-content padd-15">
                        <div className="row">
                            <div className="about-text padd-15">
                                <h3>I'm Saandhya Kumari and <span>Frontend Developer</span></h3>
                                <p>Hey there! I'm Sandhya Kumari, a passionate Frontend Developer based in [Your Location]. I love creating beautiful and responsive web experiences that leave a lasting impression.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="personal-info padd-15">
                                <div className="row">
                                    <div className="info-item padd-15">
                                        <p>Birthday : <span>22 Aug 2022</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Website : <span>www.domain.in</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Email : <span>sandhyakum609@gmail.com</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Degree : <span>BCA</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Phone : <span>  +91 8709869296</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>City : <span>Sasaram</span></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="buttons padd-15">
                                        <a href="#contact" data-section-index="1" className='btn hire-me' onClick={() => handleNavLinkClick('contact')}>
                                            Hire Me
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="skills padd-15">
                                <div className="row">
                                    <div className="skill-item padd-15">
                                        <h5>HTML</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '96%' }}></div>
                                            <div className="skill-percent">96%</div>
                                        </div>
                                    </div>

                                    <div className="skill-item padd-15">
                                        <h5>CSS</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '76%' }}></div>
                                            <div className="skill-percent">76%</div>
                                        </div>
                                    </div>
                                    <div className="skill-item padd-15">
                                        <h5>JS</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '86%' }}></div>
                                            <div className="skill-percent">86%</div>
                                        </div>
                                    </div>
                                    <div className="skill-item padd-15">
                                        <h5>REACT.JS</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '66%' }}></div>
                                            <div className="skill-percent">66%</div>
                                        </div>
                                    </div>
                                    <div className="skill-item padd-15">
                                        <h5>Bootstrap</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '66%' }}></div>
                                            <div className="skill-percent">66%</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="row">
                            <div className="education padd-15">
                                <h3 className="title">Education</h3>
                                <div className="row">
                                    <div className="timeline-box padd-15">
                                        <div className="timeline shadow-dark">
                                            {education.map((edu) => (
                                                <div key={edu.id} className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <FaCalendar className='fa' /> {edu.date}
                                                    </h3>
                                                    <h4 className="time-title">{edu.degree}</h4>
                                                    <p className='eduptag'>{edu.institution}</p>
                                                    <p className='eduptag' style={{ fontFamily: 'monospace', fontSize: "15px" }}>{edu.location}</p>
                                                    <p className='eduptag' style={{ fontFamily: 'cursive', fontSize: "12px" }}>Percentage: {edu.percentage}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="experience padd-15">
                                <h3 className="title">Experience</h3>
                                <div className="row">
                                    <div className="timeline-box padd-15">
                                        <div className="timeline shadow-dark">
                                            {experience.map((exp) => (
                                                <div key={exp.id} className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <FaCalendar className='fa' /> {exp.date}
                                                    </h3>
                                                    <h4 className="time-title">{exp.title}</h4>
                                                    <p className='eduptag'>{exp.company}</p>
                                                    <p className='eduptag'>{exp.description}</p>
                                                    <p className='eduptag'>{exp.details}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
