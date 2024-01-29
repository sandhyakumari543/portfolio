import React from 'react';
import TypingAnimation from './TypingAnimation';
import sandhya from './Image/Sandhya.jpg'

const HomeSection = () => {
    const downloadResume = () => {
        const url = process.env.PUBLIC_URL + '/image/SD_Resume.pdf';
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Sandhya-resume.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="home-info padd-15">
                        <h3 className="hello">Hello, My name is <span className='name'>Sandhya Kumari</span></h3>
                        <h3 className='my-proffesion'>I'm a <spn className="typing"><TypingAnimation /></spn></h3>
                        <p> passionate  having an experience or building some Project with javaScript /Ract.js /Html / Css/ dot Net some other cool libraries and frameworks and I love creating beautiful and responsive web experiences that leave a lasting .</p>
                        <a href="#" className="btn" onClick={downloadResume}>Download CV</a>
                    </div>
                    <div className="home-img padd-15">
                        <img src={sandhya} alt="sandhya" />
                    </div>
                </div>
            </div>

        </>
    );
}

export default HomeSection;
