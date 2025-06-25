import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/globals.css';

import Header from './components/Header';
import Hero from './components/Hero';
import BlendSlider from './components/BlendSlider';
import Choose from './components/Choose';
import Start from './components/Start';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Map from './components/Map';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <BlendSlider />
      <Choose />
      <Start />
      <Testimonials />
      <Contact />
      <Map />
      <Footer />
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
