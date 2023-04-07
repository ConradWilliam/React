import React from 'react';
import NavBar from "../Components/NavBar";
import Footer from '../Components/Footer';
import Carousel from '../Components/Carousel';
import SideAmenities from '../Components/SideAmenities';
import TestimonialCarousel from '../Components/TestimonialCarousel';
import Info from '../Components/Info';
import Footer2 from '../Components/Footer2';

function About() {
    return (
      <>
      <NavBar/>
      <Carousel/>
      <Info/>
      <TestimonialCarousel/>
      <SideAmenities/>
      <Footer2/>
      <Footer/>
        </>
    );
  }
  
  export default About;
  