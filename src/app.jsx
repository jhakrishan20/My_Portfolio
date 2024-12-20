import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
// import Footer from './components/footer';
// import Header from './pages/header';
import Home from './home'
import About from './pages/about';
import Projects from './pages/projects';
import Achievements from './pages/achievements';
import Contact from './pages/contact';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/about" element={<About />} /> */}
                {/* <Route path="/projects" element={<Projects />} /> */}
                {/* <Route path="/achievements" element={<Achievements />} /> */}
                {/* <Route path="/blogs" element={<Blogs />} /> */}
                {/* <Route path="/contact" element={<Contact />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
