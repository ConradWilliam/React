import React from 'react';
import './Info.css';
import { FaSearch, FaBook, FaSuitcase, FaCouch } from 'react-icons/fa';

const Info= () => {
  return (
    <div className="about-container" style={{ backgroundColor: "#273656" }}>
      <h1 style={{ color: "#ffffff" }}>Fun Fact about Developers</h1>
      <p style={{ color: "#ffffff" }}>Why do programmers prefer dark mode?

Because light attracts bugs.</p>
    </div>
  );
};

export default Info;
