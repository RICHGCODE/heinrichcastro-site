import React from "react";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p>&copy; {currentYear} Heinrich Castro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
