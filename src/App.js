import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"; // Importa Analytics
import MainLayout from './components/MainLayout';
import SimpleLayout from './components/SimpleLayout';
import TableTennisResults from './components/TableTennisResults';
import Trekking from './components/Trekking';
import Bitcoin from './components/Bitcoin';

function App() {
  return (
    <Router>
      {/* Aggiungi il componente Analytics qui */}
      <Analytics /> {/* Questo traccerà le visite alle pagine */}

      <Routes>
        <Route path="/" element={<MainLayout />} />
        
        {/* Rotte per le pagine secondarie */}
        <Route path="/table-tennis-results" element={<SimpleLayout />}>
          <Route index element={<TableTennisResults />} />
        </Route>
        <Route path="/trekking" element={<SimpleLayout />}>
          <Route index element={<Trekking />} />
        </Route>
        <Route path="/bitcoin" element={<SimpleLayout />}>
          <Route index element={<Bitcoin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;








