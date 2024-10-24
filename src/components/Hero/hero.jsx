import React, { useState, useEffect } from 'react';
import './hero.css'; // Import the CSS file for styles
import profileImage from '../../assets/PIC.jpg'; // Import your profile image

const Hero = () => {
    const [text, setText] = useState('');
    const roles = ['UI/UX Designer', 'Web Developer', 'Freelancer']; // List of roles to rotate
    const [index, setIndex] = useState(0);
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        const handleTyping = () => {
            if (typing) {
                setText(roles[index].substring(0, text.length + 1)); // Typing the text
                if (text === roles[index]) {
                    setTyping(false);
                    setTimeout(() => setTyping(true), 2000); // Pause before erasing
                }
            } else {
                setText(text.substring(0, text.length - 1)); // Erasing the text
                if (text === '') {
                    setIndex((index + 1) % roles.length); // Switch to next role
                    setTyping(true);
                }
            }
        };
        const typingTimeout = setTimeout(handleTyping, 100); // Adjust typing speed
        return () => clearTimeout(typingTimeout); // Cleanup timeout on unmount
    }, [text, typing, index]);

    return (
        <section id="hero" className="hero-container">
            <div className="hero-content">
                {/* Left side with text */}
                <div className="hero-text">
                    <p className="greeting">Hi! It's <span className="name">Heinrich</span></p>
                    <h1 className="title">
                        I'm a <span className="dynamic-text">{text}</span><span className="dot">.</span>
                    </h1>
                    <p className="description">I specialize in building interactive, dynamic websites with modern designs. Let's create something amazing together!</p>
                    {/* Buttons */}
                    <div className="hero-buttons">
                        <a href="/Resume/Resume.docx" download className="btn btn-primary">Resume</a>
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

