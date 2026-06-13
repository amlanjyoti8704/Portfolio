import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import Hero from './sections/Hero';
import ShowcaseSection from './sections/ShowcaseSection';
import Navbar from './components/Navbar';
import TechUsed from './sections/TechUsed';
import AboutSection from './sections/AboutSection';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import CodingProfile from './components/CodingProfile'; // Adjust import path based on file location

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        {/* Main Single Page Portfolio Route */}
        <Route path="/" element={
          <>
            <Hero />
            <ShowcaseSection />
            <TechUsed />
            <AboutSection />
            <Contact />
          </>
        } />

        {/* Separate Isolated Coding Dashboard Page */}
        <Route path="/profile" element={<CodingProfile />} />
      </Routes>

      <Footer />
      <SpeedInsights />
      <Analytics />
    </Router>
  );
}

export default App;