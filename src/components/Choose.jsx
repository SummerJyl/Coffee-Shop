import React from 'react';

export default function Choose() {
  return (
    <section className="choose-bg" id="choose">
      <div className="choose container">
        <div className="heading column">
          <h2>NutriWell</h2>
          <p>
            Discover a symphony of flavors with our latest coffee and tea blends, meticulously crafted to redefine 
            your coffee or tea experience at The Bean and Tea.
          </p>
        </div>
      </div>

      <div className="choose-cards column grid">
        <div className="choose-card">
          <div className="choose-card-img">
            <img src="/images/Beans.png" alt="Blend Beans" />
          </div>
          <div className="choose-card-content column">
            <h3>Supreme Beans</h3>
            <p>Exceptional taste delivered fresh daily.</p>
          </div>
      </div>

      <div className="choose-card">
        <div className="choose-card-img">
          <img src="/images/TeaLeavesTG.png" alt="Blend TeaLeavesTG" />
        </div>
        <div className="choose-card-content column">
          <h3>High Quality Tea Leaves</h3>
          <p>Unparalleled excellence, Highest-Quality Coffee Beans.</p>
        </div>
      </div>

      <div className="choose-card">
        <div className="choose-card-img">
          <img src="/images/CoffeeMug.png" alt="Blend CoffeeMug" />
        </div>
        <div className="choose-card-content column">
          <h3>Exceptional Flavor</h3>
          <p>Experience exceptional flavor unlike any other.</p>
        </div>
      </div>

      <div className="choose-card">
        <div className="choose-card-img">
          <img src="/images/ESourced.png" alt="Blend ESourced" />
        </div>
        <div className="choose-card-content column">
          <h3>Ethically sourced and priced</h3>
          <p>Finest quality, every day.</p>
        </div>
      </div>
    </div>
</section>
);
}