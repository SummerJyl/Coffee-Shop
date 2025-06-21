import React from 'react';

export default function Hero() {
  return (
    <main>
      <section className="hero-bg">
        <div className="hero row flex container">
          <div className="hero-content">
            <h4>Elevate your senses</h4>
            <h1>Coffee</h1>
            <p>
              Indulge in the exquisite world of coffee at Bean and Tea. Our meticulously crafted blends
              promise a sensory delight, capturing the essence of quality and passion in every sip. Join us
              for a coffee or tea experience that transcends the ordinary.
            </p>
            <a href="#" className="page-btn">Explore our blends</a>
          </div>
          <div className="hero-img">
            <img src="/images/Latte1.png" alt="Blend Latte1" />
          </div>
        </div>
      </section>
    </main>
  );
}
