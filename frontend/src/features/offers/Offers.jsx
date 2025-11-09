import React from 'react'
import './offer-section.css'

const Offers = () => {
  const offers = [
    {
      image: '/images/services/1.jpg',
      title: 'Public\nPerformances',
      description: 'We offer a wide range of music and concert experiences for our audience.'
    },
    {
      image: '/images/services/2.jpg',
      title: 'Weddings',
      description: 'Travel to different countries and experience different cultures.'
    },
    {
      image: '/images/services/3.jpg',
      title: 'Birthday Parties',
      description: 'We offer a wide range of music and concert experiences for our audience.'
    },
    {
      image: '/images/services/4.jpg',
      title: 'Anniversary Parties',
      description: 'We offer a wide range of music and concert experiences for our audience.'
    },
    {
      image: '/images/services/5.jpg',
      title: 'Workshops',
      description: 'We offer a wide range of music and concert experiences for our audience.'
    },
    {
      image: '/images/services/6.jpg',
      title: 'Funeral Services',
      description: 'We offer a wide range of music and concert experiences for our audience.'
    },
    {
      image: '/images/services/7.jpg',
      title: 'Theatre & Festivals',
      description: 'We offer a wide range of music and concert experiences for our audience.'
    },
    {
      image: '/images/services/8.jpg',
      title: 'Corporate Events',
      description: 'We offer a wide range of music and concert experiences for our audience.'
    }
  ]

  return (
    <section className="offers-section">
      <div className="offers-title">What We Offer!</div>
      <div className="row">
        {offers.map((offer, index) => (
          <div 
            key={index} 
            className="card" 
            style={{ backgroundImage: `url(${offer.image})` }}
          >
            <div className="card-content">
              <h2>{offer.title}</h2>
              <h1>{offer.description}</h1>
            </div>
            <a href="#" className="offer-button">Book Us</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Offers

