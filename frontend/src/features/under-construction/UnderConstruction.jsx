import React from 'react'
import { Link } from 'react-router-dom'
import './under-construction.css'

const UnderConstruction = ({ pageName = "This Page" }) => {
  return (
    <section className="under-construction-section">
      <div className="construction-container">
        <div className="construction-icon">
          <i className="fas fa-tools"></i>
        </div>
        <h1 className="construction-title">Under Construction</h1>
        <p className="construction-message">
          {pageName} Page is currently under construction. We're working hard to bring you something amazing!
        </p>
        <p className="construction-submessage">
          Please check back soon or visit our other pages.
        </p>
        <div className="construction-buttons">
          <Link to="/" className="construction-button primary">
            Go to Home
          </Link>
          <Link to="/contact" className="construction-button secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default UnderConstruction

