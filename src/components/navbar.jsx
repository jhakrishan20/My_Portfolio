import React, { useState } from "react";
import '../style.css';

function Navbar() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

   const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 fixed-top">
            <div className="container px-5">
                <a className="navbar-brand" href="#header">
                    <span className="fw-bolder text-primary">Krishan Kumar Jha</span>
                </a>
                <div>
      {/* Navbar Toggler Button */}
      <button
        className="navbar-toggler"
        type="button"
        onClick={togglePopup} // Toggle the popup on click
        aria-controls="popupNav"
        aria-expanded={isPopupOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Popup Navigation */}
      {isPopupOpen && (
        <div className="popup-nav">
          <div className="popup-nav-content">
            <button className="close-btn" onClick={togglePopup}>
              &times;
            </button>
            <ul className="nav-list">
              <li>
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#achievements">Achievements</a>
              </li>
              <li>
                <a href="#blogs">Blogs</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#header">Home</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#achievements">Achievements</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#blogs">Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
