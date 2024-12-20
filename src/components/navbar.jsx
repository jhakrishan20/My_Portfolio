import React from 'react';
import '../style.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 fixed-top">
            <div className="container px-5">
                <a className="navbar-brand" href="#header">
                    <span className="fw-bolder text-primary">Krishan Kumar Jha</span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
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
