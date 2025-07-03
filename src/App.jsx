import React, { useState, Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BlendSlider from './components/BlendSlider';
import Start from './components/Start';
import Footer from './components/Footer';
import Discover from './components/Discover';
import './styles/globals.css';

const Choose = lazy(() => import('./components/Choose'));
const Contact = lazy(() => import('./components/Contact'));
const Map = lazy(() => import('./components/Map'));  
const Testimonials = lazy(() => import('./components/Testimonials'));

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header openContactModal={openModal} />
      {isModalOpen && (
        <Suspense fallback={<div>Loading contact form...</div>}>
          <Contact onClose={closeModal} />
        </Suspense>
      )}

      <Hero />
      <BlendSlider />

      <Suspense fallback={<div>Loading...</div>}>
        <Choose />
      </Suspense>

      <Suspense fallback={<div>Loading map...</div>}>
        <Map />
      </Suspense>

      <Discover />
      <Footer />
      <Start />
      
      <Suspense fallback={<div>Loading testimonials...</div>}>
      <Testimonials />
      </Suspense>

    </>
  );
}
