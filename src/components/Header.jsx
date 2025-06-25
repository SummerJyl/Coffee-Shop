import React from 'react';

export default function Header({ openContactModal }) {
  return (
    <header>
      <div className="header row container">
        <a href="/" className="logo">
          Bean &<span>Tea</span>
        </a>
        <nav className="navigation row">
          {/* Left-aligned nav list */}
          <ul className="row">
            <li><a href="/" className="page-btn">Home</a></li>
            <li><a href="#choose" className="page-btn">Why</a></li>
            <li><a href="#menu" className="page-btn">Menu</a></li>
            {/* Replace Contact link with a button that opens the modal */}
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
        <button className="toggleMenu"></button>
      </div>
    </header>
  );
}
