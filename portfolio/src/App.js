import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HireMePage from './components/HireMePage';
import PortfolioPage from './components/PortfolioPage';

const App = () => {
  return (
    
      <>
        <Navbar />
          <HeroSection/>
        <Routes>
          <Route path="/hire" element={HireMePage} />
          <Route path="/portfolio" element={PortfolioPage} />
          <Route path="/" element={HeroSection} />
        </Routes>
          
      </>
    
  );
};

export default App;
