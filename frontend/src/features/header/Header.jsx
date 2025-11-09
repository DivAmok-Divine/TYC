import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="logo">
            <a href="/">
              <img src="/images/logo/logo.jpg" className="header-logo" alt="Tamale Youth Choir Logo" />
            </a>
            <a className="logo-text" href="/">
              Tamale Youth Choir <br /> 
              <span style={{ fontSize: '0.5em' }}>For God & Our Country</span>
            </a>
          </li>
          <li><a href="/">Home</a></li>
          <li><a href="/events">Concerts & Events</a></li>
          <li>
            <a href="#">TYC</a>
            <ul>
              <li><a href="/our-history">Our History</a></li>
              <li><a href="/about-choir">About the Choir</a></li>
              <li><a href="/mission-vision">Our Mission & Vision</a></li>
              <li><a href="/choir-members">Choir Members</a></li>
              <li><a href="/artistic-director">Artistic Director</a></li>
              <li><a href="/our-team">Our Team</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Gallery</a>
            <ul>
              <li><a href="/music">Music</a></li>
              <li><a href="/videos">Videos</a></li>
              <li><a href="/images">Images</a></li>
              <li><a href="/discography">Discography</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Learning & Connection</a>
            <ul>
              <li><a href="/tyc-academy">TYC Academy</a></li>
              <li><a href="/auditions">Auditions</a></li>
            </ul>
          </li>
          <li>
            <a href="#">More</a>
            <ul>
              <li><a href="/donate">Donate</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

