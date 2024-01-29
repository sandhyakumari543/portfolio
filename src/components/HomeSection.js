import React from 'react';
import TypingAnimation from './TypingAnimation';

const HomeSection = () => {
    const downloadResume = () => {
        const url = process.env.PUBLIC_URL + 'image/SD_Resume.pdf';
        const a = document.createElement('a');
        a.href = url;
        a.download = 'your-resume.pdf';
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
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime cupiditate qui molestias!</p>
                        <a href="#" className="btn" onClick={downloadResume}>Download CV</a>
                    </div>
                    <div className="home-img padd-15">
                        <img src="Image/sandhya.jpg" alt="" />
                    </div>
                </div>
            </div>

        </>
    );
}

export default HomeSection;
