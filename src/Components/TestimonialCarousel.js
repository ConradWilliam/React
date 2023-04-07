import React, { useState } from 'react';
import testimonialData from './testimonialData';
import './TestimonialCarousel.css';

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? testimonialData.length - 1 : currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === testimonialData.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <>
    <div className="testimonial-carousel">
      <div className='Testimony'>
        <h1>Client Testimonials</h1>
      </div>
      <div className="testimonial-carousel-inner">
        {testimonialData.map((testimonial, index) => (
          <div
            className={`testimonial-slide ${
              index === currentSlide ? 'testimonial-slide--active' : ''
            }`}
            key={index}
          >
            <img className="testimonial-img" src={testimonial.img} alt={testimonial.author} />
            <div className="testimonial-content">{testimonial.content}</div>
            <div className="testimonial-author">{testimonial.author}</div>
          </div>
        ))}
      </div>
      <div className="testimonial-carousel-controls">
        <button className="testimonial-carousel-control testimonial-carousel-control--prev" onClick={handlePrevSlide}>
        <i class="fa fa-angle-left"></i>
        </button>
        <button className="testimonial-carousel-control testimonial-carousel-control--next" onClick={handleNextSlide}>
        <i class="fa fa-angle-right"></i>
        </button>
      </div>
    </div>
    </>
  );
};

export default TestimonialCarousel;
