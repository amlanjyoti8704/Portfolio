import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import Navbar from './components/Navbar'
import TechUsed from './sections/TechUsed'
import FeatureCards from './sections/FeatureCards'
import AboutSection from './sections/AboutSection'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <TechUsed />
      {/* <FeatureCards /> */}
      <AboutSection />
      <Contact />
      <Footer />
    </>
  )
}

export default App
