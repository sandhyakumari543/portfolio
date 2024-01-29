import React from 'react';
import tic from './Image/game.png';
import health from './Image/health.jpeg';
import tech from './Image/tech.jpeg';
import portfolio from './Image/portfolio4.jpg';
import portfolio3 from './Image/portfolio3.png';
import Netflix from './Image/NetFlix.jpg';
import calculator from './Image/calculator.jpg';
import text from './Image/text.jpg';
import todo from './Image/todo.png';
const Portfolio = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Portfolio</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="portfolio-heading padd-15">
                        <h2>My Projects :</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <img src={tech} alt="" />
                                <div className="image-details">
                                    <h3>E-commerce: Techno</h3>
                                    <p>Electronic devices only: watches, iPhone and more.</p>
                                    <p>Technologies: React.js, Tailwind CSS, CSS</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <img src={portfolio} alt="" />
                                <div className="image-details">
                                    <h3>Landing Page: Sandhya Fitness</h3>
                                    <p>
                                        One-month fitness program details with cost. Special offer countdown included.
                                    </p>
                                    <p>Technologies: HTML, CSS, JavaScript</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <img src={portfolio3} alt="" />
                                <div className="image-details">
                                    <h3>FoodHub - Online Food Delivery</h3>
                                    <p>
                                        FoodHub is a food delivery website that allows users to order their favorite meals online.</p>
                                    <p>Technologies: HTML, CSS, JavaScript.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <img src={tic} alt="" />
                                <div className="image-details">
                                    <h3>Project Title</h3>
                                    <p>Enjoy the timeless X and O gameplay, and witness the excitement as a player wins with a satisfying animated gif.
                                        Additionally, experience the thrill of a draw with a unique gif when the match ends in a tie</p>
                                    <p>Technologies: React.js ,CSS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <img src={health} alt="" />
                                <div className="image-details">
                                    <h3>Health Blog</h3>
                                    <p>This user-friendly website covers a range of health topics, promoting wellness and informed living through engaging articles and resources</p>
                                    <p>Technologies: React.js ,CSS, Html</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <img src={todo} alt="" />
                                <div className="image-details">
                                    <h3>Simple Todo List</h3>
                                    <p> An efficient and user-friendly task management app built using React.js, allowing users to easily create, edit, and delete tasks with a straightforward and intuitive interface</p>
                                    <p>Technologies: React.js , CSS</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <img src={calculator} alt="" />
                                <div className="image-details">
                                    <h3>Project Title</h3>
                                    <p>this responsive and intuitive calculator allows users to perform various arithmetic operations effortlessly. Experience smooth functionality and an aesthetically pleasing design for efficient calculations.</p>
                                    <p>Technologies: JavaScript,Html,CSS</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <img src={text} alt="" />
                                <div className="image-details">
                                    <h3>React TextEditor App</h3>
                                    <p>TextEditor app in React with uppercase, lowercase, delete, copy functions, adjustable font size, and a word counter</p>
                                    <p>Technologies: React.js , Css</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <img src={Netflix} alt="" />
                                <div className="image-details">
                                    <h3>Netflix Clone</h3>
                                    <p>This project replicating the popular streaming platform's UI, offering a user-friendly interface, dynamic content, and a seamless viewing experience.</p>
                                    <p>Technologies: Html,CSS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;
