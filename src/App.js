import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeProvider from './components/ThemeContext'; // Importa il provider
import MainLayout from './components/MainLayout';
import SimpleLayout from './components/SimpleLayout';
import TableTennisResults from './components/TableTennisResults';
import Trekking from './components/Trekking';
import Bitcoin from './components/Bitcoin';
import StreamlitEmbed from './components/StreamlitEmbed';
import PowerBiEmbed from './components/PowerBiEmbed';  // Importa il componente PowerBIEmbed

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/table-tennis-results" element={<SimpleLayout />}>
            <Route index element={<TableTennisResults />} />
          </Route>
          <Route path="/trekking" element={<SimpleLayout />}>
            <Route index element={<Trekking />} />
          </Route>
          <Route path="/bitcoin" element={<SimpleLayout />}>
            <Route index element={<Bitcoin />} />
          </Route>
          <Route path="/streamlit" element={<SimpleLayout />}>
            <Route index element={<StreamlitEmbed />} />
          </Route>
          <Route path="/powerbi" element={<SimpleLayout />}>
            <Route index element={<PowerBiEmbed />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;








