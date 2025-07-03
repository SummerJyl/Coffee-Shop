import React, { useState } from 'react';

export default function Header({ openContactModal }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <div className="header row container">
        <a href="/" className="logo">
          Nutri<span>Well</span>
        </a>
        <nav className={`navigation row ${menuOpen ? 'active' : ''}`}>
          <ul className="row">
            <li><a href="/" className="page-btn">Home</a></li>
            <li><a href="#choose" className="page-btn">Why</a></li>
            <li><a href="#menu" className="page-btn">Menu</a></li>
            <li>
              <button 
                onClick={openContactModal} 
                className="page-btn"
                aria-haspopup="dialog"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        <button 
          className="toggleMenu" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}
