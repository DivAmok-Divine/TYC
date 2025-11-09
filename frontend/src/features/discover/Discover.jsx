import React from 'react'
import './discover.css'

const Discover = () => {
  return (
    <section className="discover-section">
      <div className="discover-container">
        <h2 className="discover-title">
          <span className="discover-title-span one">DISCOVER THE</span>
          <br />
          <span className="discover-title-span two">TAMALE YOUTH CHOIR</span>
        </h2>
        <div className="discover-buttons">
          <a href="#" className="discover-button">HISTORY</a>
          <a href="#" className="discover-button">IMAGES</a>
          <a href="#" className="discover-button">DISCOGRAPHY</a>
          <a href="#" className="discover-button">ARTISTIC DIRECTOR</a>
        </div>
        <div className="social-media-icons">
          <a href="#" className="social-media-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-media-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="social-media-icon">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Discover

