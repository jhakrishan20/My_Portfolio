import React from 'react';
import '../style.css';
import me_img from '../assets/me.png';

function Header() {
    return (
        <div className="d-flex flex-column h-100">
            <header className="py-5">
                <div className="container px-5 pb-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-xxl-5">
                            {/* Header text content */}
                            <div className="text-center text-xxl-start">
                                <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                                    <div className="text-uppercase">Think &middot; Research &middot; Develop</div>
                                </div>
                                <div className="fs-3 fw-light text-muted">Building Applications that Matters.</div>
                                <h1 className="display-3 fw-bolder mb-5">
                                    <span className="text-gradient d-inline">Creative Developer, Orator and Artist</span>
                                </h1>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                    
                                    <a className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" href="https://drive.google.com/drive/folders/18aRs4EUCRwhrAXHLxUS0VJLcZB5Lb4Mj">Resume</a>
                                    <a className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" href="#projects">Projects</a>
                                </div>
                    

                                {/* Social media icons */}
                                <div className="social-icons mt-4">
                                    <a href="https://www.linkedin.com/in/krishan-jha/" target="_blank" rel="noopener noreferrer" className="text-dark me-4">
                                        <i className="fab fa-linkedin fa-2x"></i>
                                    </a>
                                    <a href="https://github.com/jhakrishan20" target="_blank" rel="noopener noreferrer" className="text-dark me-4">
                                        <i className="fab fa-github fa-2x"></i>
                                    </a>
                                    <a href="https://www.instagram.com/krishan__kumar__jha/" target="_blank" rel="noopener noreferrer" className="text-dark me-4">
                                        <i className="fab fa-instagram fa-2x"></i>
                                    </a>
                                    <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className="text-dark me-4">
                                        <i className="fab fa-twitter fa-2x"></i>
                                    </a>
                                    {/* Add other social icons as needed */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-7">
                            {/* Header profile picture */}
                            <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                                <div className="profile bg-gradient-primary-to-secondary">
                                    <img className="profile-img" src={me_img} alt="Profile" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
