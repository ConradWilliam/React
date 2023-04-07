import React from 'react';
import './Footer2.css';

export default function Footer2() {
  return (
    <div className="home">
      <div className="home-content">
        <h2>Looking to move?</h2>
        <p>Experience one of our beautiful, move-in ready homes.</p>
        <div className="city-select">
          <button className="city-btn"><a href="/BookNow">Book Now</a></button>
        </div>
      </div>
    </div>
  );
}
