import React from 'react';
import '../style.css';

function Footer(){
    return (
        <div className="d-flex flex-column h-100">
            <footer className="bg-white py-4 mt-auto">
                <div className="container px-5">
                    <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                        <div className="col-auto">
                            <div className="small m-0">Copyright &copy; Krishan Kumar Jha 2024</div>
                        </div>
                        <div className="col-auto">
                            <a className="small" href="#!">Privacy</a>
                            <span className="mx-1">&middot;</span>
                            <a className="small" href="#!">Terms</a>
                            <span className="mx-1">&middot;</span>
                            <a className="small" href="#contact">Contact</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
         
    )
}

export default Footer;