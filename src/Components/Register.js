import React, { useState } from "react";

import "./Register.css";

function Register() {
  const RoomSection = ({ title, rooms, amenities, slogan }) => {
    const [currentRoom, setCurrentRoom] = useState(0);

    const handlePrev = () => {
      setCurrentRoom((prev) => (prev === 0 ? rooms.length - 1 : prev - 1));
    };

    const handleNext = () => {
      setCurrentRoom((prev) => (prev === rooms.length - 1 ? 0 : prev + 1));
    };

    return (
      <div className="room-section">
        
        <div className="slideshow">
          <img src={rooms[currentRoom]} alt="" />
          <div className="slideshow-controls">
            <button onClick={handlePrev}>&lt;</button>
            <button onClick={handleNext}>&gt;</button>
          </div>
        </div>
        <h2>{title}</h2>
        <div className="amenities">
          <h3>Amenities:</h3>
          <ul>
            {amenities.map((amenity) => (
              <li key={amenity}>{amenity}</li>
            ))}
          </ul>
        </div>
        <div className="best-value">
          <h3>Best Value</h3>
          <p>{slogan}</p>
          <button>Book Now</button>
        </div>
      </div>
    );
  };

  const sections = [
    {
      title: "Luxury Suites",
      rooms: [
        "https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/8082193/pexels-photo-8082193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      ],
      amenities: [
        "King size bed",
        "En-suite bathroom",
        "Air conditioning",
        "Balcony with view",
      ],
      slogan: "Experience luxury like never before",
    },
    {
      title: "Studio Apartments",
      rooms: [
        "https://images.pexels.com/photos/15565137/pexels-photo-15565137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/13398869/pexels-photo-13398869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/9976128/pexels-photo-9976128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      ],
      amenities: [
        "Queen size bed",
        "Kitchenette",
        "Work desk",
        "Flat-screen TV",
      ],
      slogan: "Live like a local in the heart of the city",
    },
    {
      title: "Penthouse Suites",
      rooms: [
        "https://images.pexels.com/photos/2370932/pexels-photo-2370932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/7614542/pexels-photo-7614542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/8066334/pexels-photo-8066334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      ],
      amenities: [
        "Two bedrooms",
        "Private rooftop terrace",
        "Jacuzzi",
        "24-hour butler service",
      ],
      slogan: "Indulge in the ultimate luxury experience",
    },
  ];

  return (
    <div className="apartment-form">
      <h1>Choose your perfect apartment</h1>
      {sections.map((section, index) => (
        <RoomSection key={index} {...section} />
      ))}
    </div>
  );
}

export default Register;
