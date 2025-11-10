import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="logo">
            <Link to="/">
              <img src="/images/logo/tycLogo.png" className="header-logo" alt="Tamale Youth Choir Logo" />
            </Link>
            <Link className="logo-text" to="/">
              Tamale Youth Choir <br /> 
              <span style={{ fontSize: '0.5em' }}>For God & Our Country</span>
            </Link>
          </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/events">Concerts & Events</Link></li>
          <li>
            <a href="#">TYC</a>
            <ul>
              <li><Link to="/our-history">Our History</Link></li>
              <li><Link to="/about-choir">About the Choir</Link></li>
              <li><Link to="/mission-vision">Our Mission & Vision</Link></li>
              <li><Link to="/choir-members">Choir Members</Link></li>
              <li><Link to="/artistic-director">Artistic Director</Link></li>
              <li><Link to="/our-team">Our Team</Link></li>
            </ul>
          </li>
          <li>
            <a href="#">Gallery</a>
            <ul>
              <li><Link to="/music">Music</Link></li>
              <li><Link to="/videos">Videos</Link></li>
              <li><Link to="/images">Images</Link></li>
              <li><Link to="/discography">Discography</Link></li>
            </ul>
          </li>
          <li>
            <a href="#">Learning & Connection</a>
            <ul>
              <li><Link to="/tyc-academy">TYC Academy</Link></li>
              <li><Link to="/auditions">Auditions</Link></li>
            </ul>
          </li>
          <li>
            <a href="#">More</a>
            <ul>
              <li><Link to="/donate">Donate</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

