import React, { useState } from 'react';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('Form submitted!');
    closeModal();
  }

  return (
    <section className="contact-bg" id="contact">
      <button
        onClick={openModal}
        className="bg-coffee text-white py-2 px-4 rounded hover:bg-coffee-dark"
        aria-haspopup="dialog"
        aria-expanded={isModalOpen}
      >
        Contact Us
      </button>

      {isModalOpen && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          onClick={e => e.target === e.currentTarget && closeModal()}
        >
          <div className="modal-content">
            <button
              onClick={closeModal}
              className="close"
              aria-label="Close contact form"
            >
              &times;
            </button>

            <h2 className="text-center text-xl font-semibold mb-4">Contact Us</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="tel"
                placeholder="Phone"
                required
                className="w-full p-2 border rounded"
              />
              <textarea
                placeholder="Message"
                required
                className="w-full p-2 border rounded"
                rows={4}
              />
              <button
                type="submit"
                className="w-full bg-coffee text-white py-2 rounded hover:bg-coffee-dark"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      <section className="map mt-8">
        <iframe
          title="Google Map"
          width="600"
          height="450"
          style={{ border: 0, width: '100%', height: '450px' }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.app.goo.gl/iZG3q2WiHjhj2tzN7"
        ></iframe>
      </section>
    </section>
  );
}
