import React from 'react';
import '../styles/components/Footer.css';

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} Quik Zi Hao. All Rights Reserved.</p>
    <p>
      <a href="https://github.com/QuikZiHao" target="_blank" rel="noopener noreferrer">GitHub</a> | 
      <a href="https://www.linkedin.com/in/quik-zi-hao-4aa40b207/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </p>
  </footer>
);

export default Footer;
