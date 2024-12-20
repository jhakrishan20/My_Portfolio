import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style.css'; // Ensure you have basic CSS styles defined here.
import achv1 from '../assets/achv2.jpg';
import achv2 from '../assets/achv3.jpg';
import achv3 from '../assets/achv4.jpg';
import achv4 from '../assets/achv5.jpg';
import achv5 from '../assets/achv6.jpg';

function Achievements() {
    const achievements = [
        {
            title: 'SIH-2024 Software-Edition Winner',
            description: '🏆 Won the SIH software edition 2024 under psid-1616 🎊',
            image: achv5,
        },
        {
            title: 'UPITS 2024 Hackathon Winner',
            description: '🏆 Won the Uttar Pradesh International Trade Show Hackathon 2024 🎊',
            image: achv1,
        },
        {
            title: 'AICSSYC 2024 Pithching Competition Winner',
            description: '🏆 Won the Pitching Competition at AICSSYC organised by IIT Kanpur and IEEE 🎊',
            image: achv2,
        },
        {
            title: 'Finallist at Hackshetra Hackathon 2024 NIT KKR ',
            description: 'Secured 5th position at Hackshetra Hackathon organised by NIT Kurukshetra',
            image: achv3,
        },
        {
            title: 'Internship Success',
            description: 'Grabbed an SDE intern at Sidak Defence and Aerospace.',
            image: achv4,
        },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="achievements-section">
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Achievements</span></h1>
            </div>
            <Slider {...sliderSettings}>
                {achievements.map((achievement, index) => (
                    <div key={index} className="card-container">
                        <div className="card shadow p-3 mb-5 bg-white rounded">
                            <img
                                src={achievement.image}
                                alt={achievement.title}
                                className="card-img-top"
                                style={{ width: '100%', height: '300px', objectFit: 'cover' }} // Adjusted to fit frame
                            />
                            <div className="card-body">
                                <h5 className="card-title">{achievement.title}</h5>
                                <p className="card-text">{achievement.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Achievements;
