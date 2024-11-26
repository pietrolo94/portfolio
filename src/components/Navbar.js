import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Recupera il tema salvato o usa dark come predefinito
    return localStorage.getItem('theme') === 'light' ? false : true;
  });

  const navigate = useNavigate(); // Hook per navigare tra le pagine
  const location = useLocation(); // Hook per controllare la posizione attuale

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark'); // Salva il tema in localStorage
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light'); // Salva il tema in localStorage
    }
  }, [darkMode]);

  // Funzione per gestire la navigazione e lo scroll
  const handleNavigation = (sectionId) => {
    if (location.pathname !== '/') {
      // Se non siamo nella homepage, reindirizza alla homepage
      navigate('/');
    }

    // Aspetta un attimo per assicurarti che la homepage sia caricata
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  const scrollToHero = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 w-full z-20">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-300 cursor-pointer"
        onClick={scrollToHero}>
          My Portfolio
        </h1>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-indigo-600 dark:text-indigo-300 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Links */}
        <ul
          className={`absolute md:static bg-white dark:bg-gray-800 top-14 md:top-auto left-0 right-0 md:flex md:space-x-6 
            ${menuOpen ? 'block' : 'hidden'} md:block`}
        >
          {/* Sezioni della stessa pagina */}
          <li className="py-2 md:py-0">
            <button
              onClick={() => handleNavigation('about')} // Usa handleNavigation per navigare
              className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              About
            </button>
          </li>
          <li className="py-2 md:py-0">
            <button
              onClick={() => handleNavigation('skills')} // Usa handleNavigation per navigare
              className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Skills
            </button>
          </li>
          <li className="py-2 md:py-0">
            <button
              onClick={() => handleNavigation('contact')} // Usa handleNavigation per navigare
              className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Contact
            </button>
          </li>

          {/* Dark Mode Toggle */}
          <li className="py-2 md:py-0">
            <button
              onClick={() => setDarkMode(!darkMode)} // Cambia il tema
              className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500"
            >
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;




