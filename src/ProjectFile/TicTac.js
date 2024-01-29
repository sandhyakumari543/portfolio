import React, { useRef } from 'react';
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const TicTac = () => {
  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  return (
    <>
      <div className="tictac-container">
        <div id="tictac" className="tic container section">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Tic Tac Toe Game</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15 left-column">
                  <h3>About the Game</h3>
                  <br />
                  <p>
                    Tic Tac Toe is a classic two-player game where the players take turns marking spaces in a 3x3 grid. The player who succeeds in placing three of their marks (X or O) in a horizontal, vertical, or diagonal row wins the game.
                  </p>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="about-details padd-15 left-column">
                  <h3>Game Details</h3>
                  <ul>
                    <li>Players: 2</li>
                    <li>Grid Size: 3x3</li>
                    <li>Objective: Form a line with three of your marks</li>
                  </ul>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="about-details padd-15 left-column">
                  <h3>Technology Used</h3>
                  <ul>
                    <li>React.js</li>
                    <li>CSS</li>
                    <li>Objective: Form a line with three of your marks</li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="about-image padd-15 right-column">
                  <video ref={videoRef} src="image/ticVideo.mp4" controls style={{ width: '43vw' }} />
                  <Link to="/portfolio">
                <IoArrowBackSharp />
              </Link>
                </div>
                
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TicTac;
