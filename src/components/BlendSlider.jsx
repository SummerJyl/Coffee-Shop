import React from 'react';

export default function BlendSlider() {
  return (
    <div className="blend-bg" id="menu">
      <div className="container">
        <div className="heading column">
          <h2>Savor a New Coffee or Tea Experience</h2>
          <p>Discover a symphony of flavors with our latest coffee blends, meticulously crafted to redefine your coffee experience at The Bean and Tea.</p>
        </div>
      </div>
      <div className="swiper mySwiper blend-slider">
        <div className="swiper-wrapper">
          {/* Repeat for each slide */}
          <div className="swiper-slide blend-card">
            <div className="blend-card-img">
              <img src="/images/E1.png" alt="Blend E1" />
            </div>
            <div className="blend-card-content column">
              <h3>Garuda</h3>
              <p>Tropical Fruit, Spiced Nuts, Earth Blend</p>
              <h5>$13.99</h5>
              <a href="#" className="page-btn">Explore More</a>
            </div>
          </div>
          {/* Add other slides here... */}
        </div>
      </div>
    </div>
  );
}
