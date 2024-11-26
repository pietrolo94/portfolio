// Layout.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Passions from './Passions';
import Contact from './Contact';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Passions />
      <Contact />
      <div className="container mx-auto px-4 py-8">
        <Outlet /> {/* Qui carica le pagine secondarie */}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
