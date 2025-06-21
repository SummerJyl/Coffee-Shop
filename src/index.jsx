// src/index.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/globals.css';
// import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      {/* ...rest of your sections */}
      <div
        className="choose-card"
        style={{ backgroundImage: 'url("/images/CoffeeSplash.png")' }}
      >
        {/* content */}
      </div>
      <Footer />
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<Home />);