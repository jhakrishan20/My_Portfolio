import React from 'react';
import '../style.css';
import vaayu from '../assets/vaayu1.jpg';
import bitpay from '../assets/bitpay.jpg';
// Import any additional images as needed
function Projects() {
    const projects = [
        {
            title: 'VAAYU',
            description: 'The Vigillant Air Assessment and Yielding Unit aims to revolutionize the way air monitoring is done today. It leverages advanced UAVs with inbuilt gas and environmental sensors to detect pollution/gases, transmission module for real-time data transfer, adaptive ground control station (GCS), and machine learning models for predictive analysis and remediation strategies.',
            image: vaayu,
            github: 'https://github.com/jhakrishan20/Vigilant-Air-Assessment-and-Yielding-Unit', // GitHub link for VAAYU
        },
        {
            title: 'BitPay',
            description: "Developed a microtransaction system utilizing Bitcoin’s lightning network and Node.js for small-scale payments. Integrated secure, low-fee Bitcoin payments using Node.js with blockchain library bitcoin.js-lib for daily transactions on web platforms. Enabled real-time transaction processing with minimal latency using blockchain protocols and event-driven architecture in Node.js. Enhanced accessibility for small businesses.",
            image: bitpay,
            github: 'https://github.com/jhakrishan20/BitPay', // GitHub link for BitPay
        },
        // Add more project objects as needed
    ];

    return (
        <div className="projects-section py-5">
            <div className="container px-5 mb-5">
                <div className="text-center mb-5">
                    <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Projects</span></h1>
                </div>
                <div className="row gx-5 justify-content-center">
                    {projects.map((project, index) => (
                        <div key={index} className="col-lg-11 col-xl-9 col-xxl-8 mb-5">
                            <div className="card project-card overflow-hidden shadow rounded-4 border-0">
                                <div className="card-body p-0 d-flex flex-column flex-md-row align-items-center">
                                    <div className="p-4 flex-grow-1">
                                        <h2 className="fw-bolder">
                                            <a 
                                                href={project.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-decoration-none text-primary"
                                            >
                                                {project.title}
                                            </a>
                                        </h2>
                                        <p>{project.description}</p>
                                    </div>
                                    <img
                                        className="img-fluid"
                                        src={project.image}
                                        alt={project.title}
                                        style={{ maxWidth: '300px', objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action Section */}
            <section className="py-5 bg-gradient-primary-to-secondary text-white">
                <div className="container px-5 my-5">
                    <div className="text-center">
                        <h2 className="display-4 fw-bolder mb-4">Let's build something together</h2>
                        <a className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" href="#contact">
                            Contact Me
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projects;