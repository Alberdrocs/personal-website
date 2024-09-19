import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Header() {
  // Retrieve the saved theme from localStorage or default to 'light'
  const savedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme); // Save the theme to localStorage
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className={`navbar sticky-top navbar-expand-lg ${theme === 'light' ? 'bg-body-tertiary' : 'bg-dark text-light'}`}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/projects">Projects</Link>
            <Link className="nav-link" to="/about">About Me</Link>
            <Link className="nav-link" to="/resume">Resume</Link>
          </div>
        </div>
        
      </div>
    </nav>
  );
}

export default Header;