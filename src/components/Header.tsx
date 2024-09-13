import React, { useState, useEffect } from 'react';

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
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href="/projects">Projects</a>
            <a className="nav-link" href="/about">About Me</a>
            <a className="nav-link" href="/resume">Resume</a>
          </div>
        </div>
        <button className="btn btn-secondary ms-auto" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </nav>
  );
}

export default Header;