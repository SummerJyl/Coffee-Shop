import React from 'react';

export default function Map() {
  return (
    <section id="location" className="map-section">
      <div className="container">
        <h2>Find Us</h2>
        <p>Visit our NutriWell headquarters or store for expert advice and premium supplements.</p>
        <div className="map-container" style={{ width: '100%', height: '400px' }}>
          {/* Embed Google Map iframe or another map provider */}
          <iframe
            title="NutriWell Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.979278449394!2d-122.08185168469142!3d37.38605197983244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb732f1b16a07%3A0x850b0e82c1c3f5a9!2sGoogleplex!5e0!3m2!1sen!2sus!4v1688471915377!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
