// components/Discover.jsx
import React from 'react';

export default function Discover() {
  return (
                <section className="discover row flex container">
                  <div className="discover-img"><img src="/images/E1.png" alt="Blend E1" /></div>
                  <div className="discover-content">
                       <h2>Our unique offerings</h2>
                       <p>At The Bean and Tea, we invite you to explore beyond the extraordinary. Dive into a world of 
                        handcrafted brews and signature concoctions that redefine the coffee experience. From expertly 
                        brewed classics to innovative blends, each sip tells a story of passion and dedication. Join us 
                        on a journey of discovery where every cup is an adventure.</p>
                       <a href="#" className="page-btn">View our menu</a>
                  </div>
                </section>
              );
        }