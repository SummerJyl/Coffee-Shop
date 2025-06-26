import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer column container">
        <a href="#" className="logo">Bean &<span>Tea</span></a>
        <p>Crafting coffee, one cup at a time.</p>
        <div className="contact-details column">
          <a href="tel:(858)123-4567">Phone: (858) 123-4567</a>
          <a href="mailto:info@beanandtea.com">Email: <strong>info@beanandtea.com</strong></a>
          <address>Address: <strong>123 Any Street, San Diego, CA 92037</strong></address>
          {/* <ul className="row">
            <li><a href="/">Home</a></li>
            <li><a href="#choose">Why</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul> */}
        </div>
        <p className="copy-right">&copy; 2025 Jylian Summers</p>
      </div>
    </footer>
  );
}
