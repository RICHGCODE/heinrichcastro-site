import React, { useEffect, useState } from 'react';
import './navbar.css';  // Import your Navbar styles

function Navbar({ activeSection, onLinkClick }) {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Check for saved theme preference in localStorage
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        setTheme(savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <header>
            <nav className="container">
                <a href="#home" className="logo" data-text="HC" onClick={onLinkClick}>HC</a>
                <ul>
                    <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={onLinkClick}>Home</a></li>
                    <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={onLinkClick}>About</a></li>
                    <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={onLinkClick}>Projects</a></li>
                    <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={onLinkClick}>Skills</a></li>
                    <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={onLinkClick}>Contact</a></li>
                    <li className="dark-mode-toggle">
                        <button onClick={toggleTheme} className="theme-toggle-button">
                            {theme === 'dark' ? (
                                <img src="src/assets/moon.png" alt="Moon icon for dark mode" />
                            ) : (
                                <img src="src/assets/sun.png" alt="Sun icon for light mode" />
                            )}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
