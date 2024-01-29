import React from 'react';
import { FaLaptopCode } from "react-icons/fa6";
import { IoMdColorPalette } from "react-icons/io";
import { FaCode } from "react-icons/fa6";


const Service = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="section-title padd-15" >
            <h2>Service</h2>
          </div>
        </div>
        <div className="row">
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <FaLaptopCode className='fa' />
              </div>
              <h4>Frontend Developer</h4>
              <p>
                As a frontend developer, my expertise lies in crafting captivating and responsive web applications, leveraging a keen eye for design to create visually stunning and seamlessly functional user interfaces.</p>
            </div>
          </div>

          {/* <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
              <PiDeviceMobileSpeakerFill className='fa' />
              </div>
              <h4>Web Design</h4>
              <p>
                As a web designer, I specialize in creating visually compelling and intuitive designs, bringing a harmonious blend of aesthetics and user experience to every project.</p>
            </div>
          </div> */}

          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <IoMdColorPalette className='fa' />
              </div>
              <h4>Fullstack Development</h4>
              <p>
                As a Fullstack Development, I specialize in creating visually compelling and intuitive designs, bringing a harmonious blend of aesthetics and user experience to every project.
              </p>
            </div>
          </div>

          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <FaCode className='fa' />
              </div>
              <h4>Web Design</h4>
              <p>  As a web designer, I specialize in creating visually compelling and intuitive designs, bringing a harmonious blend of aesthetics and user experience to every project.</p>
            </div>
          </div>

          {/* <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <IoSearchSharp className='fa' />
              </div>
              <h4>Backend Developement</h4>
              <p>As a backend developer, I channel my passion into crafting elegant web applications, focusing on the intricate architecture and functionality that powers seamless user experiences.</p>
            </div>
          </div> */}

          {/* <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <ImBullhorn className='fa' />
              </div>
              <h4>Web Design</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto numquam natus atque.</p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Service;
