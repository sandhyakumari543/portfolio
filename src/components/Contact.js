import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { IoIosCall } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { HiMapPin } from "react-icons/hi2";

const Contact = () => {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_l6hixei',
      'template_wlm96kc',
      form.current,
      'qEsJswHvM3xhYqwqX'
    )
      .then((result) => {
        console.log(result.text);
        setIsMessageSent(true);
        setFormData({
          user_name: '',
          user_email: '',
          subject: '',
          message: '',
        });
        setTimeout(() => {
          setIsMessageSent(false);
        }, 3000);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>
        <h3 className="contact-title padd-15">Have You Any Questions?</h3>
        <h4 className='contact-sub-title padd-15'>I'M AT YOUR SERVICES</h4>
        <div className="row1">
          <div className="contact-info-item  padd-15">
            <div className="icon">
              <IoIosCall className='fa' />
            </div>
            <h4>Call Me</h4>
            <p>+91 8709869296</p>
          </div>

          <div className="contact-info-item padd-15">
            <div className="icon">
              <MdMarkEmailUnread className='fa' />
            </div>
            <h4>Email</h4>
            <p>sandhyakum609@gmail.com</p>
          </div>

        </div>
        <h3 className="contact-title padd-15">SEND ME AN EMAIL?</h3>
        <h4 className='contact-sub-title padd-15'>I'M AT VERY RESPONSIVE TO MESSAGE</h4>

        {isMessageSent && (
          <div className={`message-box ${isMessageSent ? 'highlight' : ''}`}>
            <p>Message sent successfully!</p>
          </div>
        )}

        <form ref={form} onSubmit={sendEmail}>
          <div className="row">
            <div className="contact-form padd-15">
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className='form-control'
                      name="user_name"
                      placeholder='Name'
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      className='form-control'
                      name="user_email"
                      placeholder='Email'
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className='form-control'
                      name="subject"
                      placeholder='Subject'
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      className='form-control'
                      name="message"
                      placeholder='Message'
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-item col-12 padd-15">
                  <button type='submit' className='btn'>Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="row1">
          <div className="social-contact padd-15">
            <a href="https://linkedin.com/in/sandhya-kumari-17639b224" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com/sandhyakumari543" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="mailto:sandhyakum609@gmail.com" target="_blank" rel="noopener noreferrer">
              <AiOutlineMail className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
