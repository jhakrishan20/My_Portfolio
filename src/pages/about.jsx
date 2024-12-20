import React from 'react';
import Experience from './experience';
import Education from './education';
import Skills from './skills';

function About() {
    return (
        <div className="d-flex flex-column h-100 bg-light">
            <main className="flex-shrink-0">
                {/* Page Content */}
                <div className="container px-5 my-5">
                    <section className="bg-light py-5">
                    <div className="text-center my-5">
                                        <h2 className="display-5 fw-bolder">
                                            <span className="text-gradient d-inline">About Me</span>
                                        </h2>
                                        <p className="lead fw-light mb-4">'Hey' this is Krishan, I am a Software Developer</p>
                                    </div>
                    </section>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-11 col-xl-9 col-xxl-8">
                            {/* Experience Section */}
                            <div className="mb-4">
                                <Experience />
                            </div>
                            {/* Skills Section */}
                            <div className="mb-4">
                                <Skills />
                            </div>
                            {/* Education Section */}
                            <div className="mb-4">
                                <Education />
                            </div>
                            <div className="pb-5"></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default About;
