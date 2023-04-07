import React from 'react';
import NavBar from "../Components/NavBar";
import Card from '../Components/Card';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';
import TestimonialCarousel from '../Components/TestimonialCarousel';
import CardsContainer from '../Cards/CardsContainer';
import Footer2 from '../Components/Footer2';
import Cities from '../Components/Cities';


function Home() {
  return (
    <>
    <NavBar/>
    <Card/>
    <Hero/>
    <CardsContainer/>
    <TestimonialCarousel/>
    <Footer2/>
    <Cities />
    <Footer/>
      </>
  );
}

export default Home;
