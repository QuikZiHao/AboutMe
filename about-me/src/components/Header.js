import React from 'react';
import '../styles/components/Header.css';

const Header = () => (
  <header className="header">
    <h1>About Me</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

export default Header;
