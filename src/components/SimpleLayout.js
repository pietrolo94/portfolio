// SimpleLayout.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';  // Per il rendering del contenuto specifico

const SimpleLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      {/* Il componente specifico (es. TableTennisResults) sarà caricato qui */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default SimpleLayout;

