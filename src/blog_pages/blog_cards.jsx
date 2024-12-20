import React from 'react';
import '../style.css';
import image from '../assets/vaayu.jpg';

function BlogCards() {
    return (
        <div className="blog-cards-container">
            {[1, 2, 3, 4, 5, 6].map(card => (
                <div className="blog-card" key={card}>
                    <div className="card-image">
                        <img
                            src={image}
                            alt="Blog Image"
                        />
                    </div>
                    <div className="card-title">Blog Heading {card}</div>
                </div>
            ))}
        </div>
    );
}

export default BlogCards;
