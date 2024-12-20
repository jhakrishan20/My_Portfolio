import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Header from './pages/header';
import About from './pages/about';
import Projects from './pages/projects';
import Achievements from './pages/achievements';
import Contact from './pages/contact';
import './style.css'; // Ensure you have any custom styles needed for spacing

function Home() {
    return (
        <div className="d-flex flex-column h-100">
            <main className="flex-shrink-0">
                {/* Navigation */}
                <Navbar />

                {/* Header */}
                <div id="header" className="section-spacing1">
                    <Header />
                </div>

                {/* About Section */}
                <div id="about" className="section-spacing2">
                    <About />
                </div>

                {/* Projects Section */}
                <div id="projects" className="section-spacing3">
                    <Projects />
                </div>

                {/* Achievements Section */}
                <div id="achievements" className="section-spacing4">
                    <Achievements />
                </div>

                {/* Contact Section */}
                <div id="contact" className="section-spacing5">
                    <Contact />
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home;
