import React from "react";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleMouseMove = (e) => {
    const footer = e.currentTarget;
    const rect = footer.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / footer.offsetWidth) * 100;
    const y = ((e.clientY - rect.top) / footer.offsetHeight) * 100;
    footer.style.setProperty("--x", `${x}%`);
    footer.style.setProperty("--y", `${y}%`);
  };

  return (
    <footer className="footer" onMouseMove={handleMouseMove}>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Heinrich Castro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
