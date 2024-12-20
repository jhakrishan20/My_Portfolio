import React from 'react';
import '../style.css';
import sidak from '../assets/sidak.png';
import yaab from '../assets/yaab.png';

function Experience() {
    return (
        <div className="d-flex flex-column h-100">
            {/* Experience Section */}
            <section>
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <h2 className="text-primary fw-bolder mb-0">Experience</h2>
                    {/* Download resume button */}
                    {/* <a className="btn btn-primary px-4 py-3" href="#!">
                        <div className="d-inline-block bi bi-download me-2"></div>
                        Download Resume
                    </a> */}
                </div>
                {/* Experience Card 1 */}
                <div className="card shadow border-0 rounded-4 mb-5">
                    <div className="card-body p-5">
                        <div className="row align-items-center gx-5">
                            {/* Icon Column */}
                            <div className="col-auto text-center mb-4 mb-lg-0">
                                <img src={sidak} alt="Icon" className="icon-size" />
                            </div>
                            {/* Details Column */}
                            <div className="col text-center text-lg-start">
                                <div className="bg-light p-4 rounded-4">
                                    <div className="text-primary fw-bolder mb-2">Nov-2024 - Present (paid)</div>
                                    <div className="small fw-bolder">Software Developer Intern</div>
                                    <div className="small text-muted">Sidak Defence and Aerospace</div>
                                    <div className="small text-muted">Noida Sec-32, Delhi NCR</div>
                                </div>
                            </div>
                            {/* Description Column */}
                            <div className="col-lg-8">
                                <div>
                                    <ul className="list-unstyled mb-0">
                                        <li>- Developed a UAV based Tower Monitoring Software v1.0.0 in python.</li>
                                        <li>- Researched and Developed an optimized path algorithm for Tower inspection.</li>
                                        <li>- Improved and deployed visitor management system  (VMS) for corporate offices.</li>
                                        <li>- Project Spider - Sensors Ecosystem for pollutants/gas detection.</li>
                                        <li>- 3-Dimensional Path generation software to automate UAV missions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Experience Card 2 */}
                <div className="card shadow border-0 rounded-4 mb-5">
                    <div className="card-body p-5">
                        <div className="row align-items-center gx-5">
                            {/* Icon Column */}
                            <div className="col-auto text-center mb-4 mb-lg-0">
                                <img src={yaab} alt="Icon" className="icon-size" />
                            </div>
                            {/* Details Column */}
                            <div className="col text-center text-lg-start">
                                <div className="bg-light p-4 rounded-4">
                                    <div className="text-primary fw-bolder mb-2">Oct-2024 -</div>
                                    <div className="small fw-bolder">Web Developer Freelancer</div>
                                    <div className="small text-muted">Your Auto Affiliate</div>
                                    <div className="small text-muted">Remote</div>
                                </div>
                            </div>
                            {/* Description Column */}
                            <div className="col-lg-8">
                                <div>
                                    <ul className="list-unstyled mb-0">
                                        <li>- Integrated an email notification system for various user actions (Forgot Password, Welcome Mail, Free Trial Mail, Feature Updates) using Node-mailer..</li>
                                        <li>- Developed structured email templates using Handlebars for personalized and automated communication. .</li>
                                        <li>- Redesigned the Channel List UI and added partner connectors on the Home Page using React and Vite. </li>
                                        <li>- Implemented UPI Payment Gateway for seamless transactions, with the ability to manage subscriptions and payment updates</li>
                                        <li>- Improved the Analytics Dashboard using Moment.js and MongoDB to provide detailed insights into user subscriptions and engagement.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Experience;
