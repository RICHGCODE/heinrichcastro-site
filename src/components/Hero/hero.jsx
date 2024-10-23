import React from 'react';
import './hero.css'; // Import the CSS file for styles
import profileImage from '../../assets/PIC.jpg'; // Import your profile image

const Hero = () => {
    return (
        <section id="hero" className="hero-container">
            <div className="hero-content">
                {/* Left side with text */}
                <div className="hero-text">
                    <p className="greeting">Hi! I am <span className="name">Heinrich Gee Castro</span></p>
                    <h1 className="title">Web Developer<span className="dot">.</span></h1>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ratione necessitatibus optio perspiciatis tempore expedita earum esse assumenda tempora quod animi.</p>
                    {/* Buttons */}
                    <div className="hero-buttons">
                        <a href="#contact" className="btn btn-primary">Hire Me</a>
                        <a href="#projects" className="btn btn-secondary">View Project</a>
                    </div>
                </div>

                {/* Right side with glowing profile image */}
                <div className="hero-image">
                    <img src={profileImage} alt="Profile" className="glowing-img" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
