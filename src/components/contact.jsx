import React from 'react';

export default function Contact({ onClose }) {
  function handleSubmit(event) {
    event.preventDefault();
    alert('Form submitted!');
    onClose(); // Close the modal on submit
  }

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal-content">
        <button
          onClick={onClose}
          className="close"
          aria-label="Close contact form"
        >
          &times;
        </button>

        <h2 className="text-center text-xl font-semibold mb-4">Contact Us</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required className="w-full p-2 border rounded" />
          <input type="email" placeholder="Email" required className="w-full p-2 border rounded" />
          <input type="tel" placeholder="Phone" required className="w-full p-2 border rounded" />
          <textarea placeholder="Message" required className="w-full p-2 border rounded" rows={4} />
          <button
            type="submit"
            className="w-full bg-coffee text-white py-2 rounded hover:bg-coffee-dark"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
