// MainLayout.js
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Passions from './Passions';
import Contact from './Contact';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <Hero />
      <div id="about">
        <About />
      </div>
      <Skills />
      <Passions />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainLayout;


