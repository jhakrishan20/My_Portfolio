import '../style.css';

function Contact() {
    return (
        <div className="d-flex flex-column h-100">
            <section className="py-5">
                <div className="container px-5">
                    <div className="text-center mb-5">
                        <h1 className="display-5 fw-bolder mb-0">
                            <span className="text-gradient d-inline">Contact</span>
                        </h1>
                    </div>
                    <div className="bg-light rounded-4 py-5 px-4 px-md-5">
                        <div className="text-center mb-5">
                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
                                <i className="bi bi-envelope"></i>
                            </div>
                            <h1 className="fw-bolder">Get in touch</h1>
                            <p className="lead fw-normal text-muted mb-0">Drop a mail or just DM</p>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6 text-center">
                                {/* Email Contact */}
                                <div className="mb-4">
                                    <a
                                        href="krishanjha80@gmail.com"
                                        className="text-decoration-none text-dark d-flex align-items-center justify-content-center"
                                    >
                                        <i className="bi bi-envelope-fill me-2 fs-4 text-primary"></i>
                                        <span className="fs-5 fw-bold">krishanjha80@gmail.com</span>
                                    </a>
                                </div>
                                {/* LinkedIn Contact */}
                                <div className="mb-4">
                                    <a
                                        href="https://www.linkedin.com/in/krishan-jha/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-decoration-none text-dark d-flex align-items-center justify-content-center"
                                    >
                                         <i className="fab fa-linkedin fa-2x"></i>
                                        <span className="fs-5 fw-bold">LinkedIn DM</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;