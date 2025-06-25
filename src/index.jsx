import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/_app.js'; // ✅ Fixed path
import './styles/globals.css';

// import Hero from './components/Hero';
// import BlendSlider from './components/BlendSlider';
// import Choose from './components/Choose';
// import Start from './components/Start';
// import Testimonials from './components/Testimonials';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Map from './components/Map';


const root = createRoot(document.getElementById('root'));
root.render(<App />);