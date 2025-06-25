import React from 'react';

export default function Map() {
  return (
    <section className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13449.180165667647!2d-117.27611935!3d32.8399144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc01209ea27c1b%3A0x24437e27de6d62b5!2s909%20Prospect%20St%2C%20La%20Jolla%2C%20CA%2092037!5e0!3m2!1sen!2sus!4v1687648757234!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
