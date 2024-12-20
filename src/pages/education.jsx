import React from 'react';
import '../style.css';

function Education(){
    return (
        <div className="d-flex flex-column h-100">
                 {/* Education Section */}
                            
                            <section>
                                <h2 className="text-secondary fw-bolder mb-4">Education</h2>
                                {/* Education Card 1 */}
                                <div className="card shadow border-0 rounded-4 mb-5">
                                    <div className="card-body p-5">
                                        <div className="row align-items-center gx-5">
                                            <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                                <div className="bg-light p-4 rounded-4">
                                                    <div className="text-secondary fw-bolder mb-2">2015 - 2017</div>
                                                    <div className="mb-2">
                                                        <div className="small fw-bolder">Galgotias University</div>
                                                        <div className="small text-muted">Greater Noida, UP</div>
                                                    </div>
                                                    <div className="fst-italic">
                                                        <div className="small text-muted">Bachelors of Technology</div>
                                                        <div className="small text-muted">Computer Science Engneering</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div>
                                                    - Object Oriented Programming <br />
                                                    - Data base Management Systems  <br />
                                                    - Computer Networks  <br />
                                                    - Operating Systems  <br />
                                                    - Data Structures and Algos  <br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Education Card 2 */}
                                <div className="card shadow border-0 rounded-4 mb-5">
                                    <div className="card-body p-5">
                                        <div className="row align-items-center gx-5">
                                            <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                                <div className="bg-light p-4 rounded-4">
                                                    <div className="text-secondary fw-bolder mb-2">2015 - 2017</div>
                                                    <div className="mb-2">
                                                        <div className="small fw-bolder">D.A.V public School</div>
                                                        <div className="small text-muted">Faridabad, Haryana</div>
                                                    </div>
                                                    <div className="fst-italic">
                                                        <div className="small text-muted">Primary and Secondary</div>
                                                        {/* <div className="small text-muted">PCM, Artistry</div> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div>
                                                    - Physics <br />
                                                    - Mathematics  <br />
                                                    - Chemistry  <br />
                                                    - English  <br />
                                                    - Artistry  <br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>        
                        </div>
         
    )
}

export default Education;