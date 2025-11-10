import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './features/header/Header'
import Footer from './features/footer/Footer'
import Home from './features/home/Home'
import Contact from './features/contact/Contact'
import Events from './features/events/Events'
import UnderConstruction from './features/under-construction/UnderConstruction'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/our-history" element={<UnderConstruction pageName="Our History" />} />
          <Route path="/about-choir" element={<UnderConstruction pageName="About the Choir" />} />
          <Route path="/mission-vision" element={<UnderConstruction pageName="Our Mission & Vision" />} />
          <Route path="/choir-members" element={<UnderConstruction pageName="Choir Members" />} />
          <Route path="/artistic-director" element={<UnderConstruction pageName="Artistic Director" />} />
          <Route path="/our-team" element={<UnderConstruction pageName="Our Team" />} />
          <Route path="/music" element={<UnderConstruction pageName="Music" />} />
          <Route path="/videos" element={<UnderConstruction pageName="Videos" />} />
          <Route path="/images" element={<UnderConstruction pageName="Images" />} />
          <Route path="/discography" element={<UnderConstruction pageName="Discography" />} />
          <Route path="/tyc-academy" element={<UnderConstruction pageName="TYC Academy" />} />
          <Route path="/auditions" element={<UnderConstruction pageName="Auditions" />} />
          <Route path="/donate" element={<UnderConstruction pageName="Donate" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

