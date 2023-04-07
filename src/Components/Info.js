import React from 'react';
import './Info.css';
import { FaSearch, FaBook, FaSuitcase, FaCouch } from 'react-icons/fa';

const Info= () => {
  return (
    <div className="about-container" style={{ backgroundColor: "#273656" }}>
      <h1 style={{ color: "#ffffff" }}>Show up</h1>
      <p style={{ color: "#ffffff" }}>Rent an apartment today, and move in tomorrow. We'll take care of the legwork.</p>
      <div className="about-section">
        <div className="about-box">
          <FaSearch className="icon" />
          <h2 style={{ color: "#ffffff" }}>Search</h2>
          <p style={{ color: "#ffffff" }}>Browse our live website to see all our most up-to-date apartment listings, availability, pricing & photos.</p>
        </div>
        <div className="about-box">
          <FaBook className="icon" />
          <h2 style={{ color: "#ffffff" }}>Book</h2>
          <p style={{ color: "#ffffff" }}>Found your perfect home? Book online, confirm with a click, securely pay, and sign off on your new home instantly. It’s that easy.</p>
        </div>
        <div className="about-box">
          <FaSuitcase className="icon" />
          <h2 style={{ color: "#ffffff" }}>Check-in</h2>
          <p style={{ color: "#ffffff" }}>Digitally schedule check-in with your instant confirmation email, along with access to our Guest Αpp for all your rental needs.</p>
        </div>
        <div className="about-box">
          <FaCouch className="icon" />
          <h2 style={{ color: "#ffffff" }}>Settle in</h2>
          <p style={{ color: "#ffffff" }}>Move-in ready from Day 1 -- Wi-Fi, fully equipped kitchen, linens/towels, toiletries, and even a Welcome Gift on us.</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
