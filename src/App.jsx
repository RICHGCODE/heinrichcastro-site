import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/hero';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import  Skills  from './components/Skills/skills';
import Contact from './components/Contact/contact';
function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'home'; // Default to 'home'
  
      const scrollPosition = window.pageYOffset;
  
      // Special case for 'Home' when at the top of the page
      if (scrollPosition === 0) {
        currentSection = 'home';
      } else {
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
  
          if (
            scrollPosition >= sectionTop - sectionHeight / 3 &&
            scrollPosition < sectionTop + sectionHeight - sectionHeight / 3
          ) {
            currentSection = section.getAttribute('id');
          }
        });
      }
  
      setActiveSection(currentSection); // Set the active section
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href')?.substring(1);
    const target = document.getElementById(targetId);
  
    if (target) {
      if (targetId === 'home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      setActiveSection(targetId);
    }
  };
  
  
  
  
 
  return (
    <>
      <Navbar activeSection={activeSection} onLinkClick={handleClick} />
      <section id="home" ><Hero /></section>
      <section id="about"> <About /></section>
      <section id="projects"> <Projects /></section>
      <section id="skills"> <Skills /></section>
      <section id="contact"> <Contact /></section>
    </>
  );
}

export default App;
