import React from 'react';
import '../style.css';

function Skills(){
    return (
        <div className="d-flex flex-column h-100">
                 {/* Skills Section */}
                 <section>
                                {/* Skillset Card */}
                                <div className="card shadow border-0 rounded-4 mb-5">
                                    <div className="card-body p-5">
                                        {/* Professional skills list */}
                                        <div className="mb-5">
                                            <div className="d-flex align-items-center mb-4">
                                                {/* <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                                    <i className="bi bi-tools"></i>
                                                </div> */}
                                                <h3 className="fw-bolder mb-0">
                                                    <span className="text-gradient d-inline">Professional Skills</span>
                                                </h3>
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-3 mb-4">
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                        Backend Development
                                                    </div>
                                                </div>
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                        Frontend Development
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                        Data Structures and Algos
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row row-cols-1 row-cols-md-3 mb-4">
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                        Databases
                                                    </div>
                                                </div>
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                        Servers and OS
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                        Rest APIs & Version 
                                                        Control
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Languages list */}
                                        <div className="mb-5">
                                            <div className="d-flex align-items-center mb-4">
                                                {/* <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                                    <i className="bi bi-code-slash"></i>
                                                </div> */}
                                                <h3 className="fw-bolder mb-0">
                                                    <span className="text-gradient d-inline">Languages</span>
                                                </h3>
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-3 mb-4">
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                      JavaScript
                                                    </div>
                                                </div>
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                        Java
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                        C++
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-3">
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                        Python
                                                    </div>
                                                </div>
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                        C
                                                    </div>
                                                </div>
                                                {/* <div className="col">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                        Node.js
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                        {/* soft skills */}
                                        <div className="mb-0">
                                            <div className="d-flex align-items-center mb-4">
                                                {/* <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                                    <i className="bi bi-code-slash"></i>
                                                </div> */}
                                                <h3 className="fw-bolder mb-0">
                                                    <span className="text-gradient d-inline">Soft Skills</span>
                                                </h3>
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-3 mb-4">
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                     Research
                                                    </div>
                                                </div>
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                     Leadership  
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                    Management
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-3">
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                    Oratory
                                                    </div>
                                                </div>
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                    Creativity
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                    Acrylic Painting
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
        </div>
         
    )
}

export default Skills;