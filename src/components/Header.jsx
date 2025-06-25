import React from 'react';

export default function Header() {
  return (
    <header>
      <div className="header row container">
        <a href="/" className="logo">Bean &<span>Tea</span></a>
        <nav className="navigation row">
          {/* Left-aligned nav list */}
          <ul className="row">
            <li><a href="/">Home</a></li>
            <li><a href="#choose">Why</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button className="toggleMenu"></button>
      </div>
    </header>
  );
}
