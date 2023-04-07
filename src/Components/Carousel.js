import React, { useState } from 'react';
import './Carousel.css';


const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? 4 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === 4 ? 0 : activeIndex + 1);
  };

  const slides = [
    {
      id: 0,
      image: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      altText: 'Mexico'
    },
    {
      id: 1,
      image: "https://images.pexels.com/photos/6585747/pexels-photo-6585747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      altText: 'Jamaica'
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/6587838/pexels-photo-6587838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      altText: 'Parrot'
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      altText: 'Parrot'
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/6969833/pexels-photo-6969833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      altText: 'Parrot'
    }
  ];

  return (
    <div className="carousel-container">
      <h1>Experience modern living - 
        the Homehaven way</h1>
      <div className="carousel">
        {slides.map(slide => (
          <div
            key={slide.id}
            className={`carousel__slide ${slide.id === activeIndex ? 'active' : slide.id === (activeIndex + 1) % 5 ? 'next' : 'previous'}`}
          >
            <img src={slide.image} alt={slide.altText} />
          </div>
        ))}
        <button className="carousel__button carousel__button--prev" onClick={handlePrevClick}>
        &#8249;
        </button>
        <button className="carousel__button carousel__button--next" onClick={handleNextClick}>
        &#8250;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
