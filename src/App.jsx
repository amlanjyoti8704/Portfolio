import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import Navbar from './components/Navbar'
import TechUsed from './components/TechUsed'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <TechUsed />
    </>
  )
}

export default App
