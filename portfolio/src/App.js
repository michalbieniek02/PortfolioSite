// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HireMePage from './components/HireMePage';
import PortfolioPage from './components/PortfolioPage';

const App = () => {
  return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/hire" element={<HireMePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </>
  );
};

export default App;
