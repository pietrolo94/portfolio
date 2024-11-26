import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scorri verso l'inizio della pagina
  }, [pathname]);

  return null; // Questo componente non ha bisogno di renderizzare nulla
};

export default ScrollToTop;
