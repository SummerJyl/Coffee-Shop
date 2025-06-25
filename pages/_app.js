import React, { useState } from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import Map from './components/Map';
import '../styles/globals.css';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header openContactModal={openModal} />
      {/* other sections like Hero, BlendSlider, etc */}

      {/* Show modal only when open */}
      {isModalOpen && <Contact onClose={closeModal} />}

      {/* Show map separately in Contact section or wherever */}
      <Map />
    </>
  );
}


// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;
