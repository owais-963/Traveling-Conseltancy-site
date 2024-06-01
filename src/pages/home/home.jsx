import React from 'react';
import RecipeReviewCard from '../card/card';
import ContactForm from '../contactForm/contactUs';
import About from '../About/aboutUs';
import Banner from '../banner/banner';
import ServicesSection from '../services/services';
import PackagesSection from '../packages/packages';

// Main component
const Home = () => {
  return (
    <>
  <div id='home'>
    <Banner />
  </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="packages">
        <PackagesSection />
      </div>
      <div id="blogs">
        <RecipeReviewCard />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
    </>
  );
};

export default Home;
