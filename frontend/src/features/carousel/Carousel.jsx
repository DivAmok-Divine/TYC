import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './carousel.css'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const carouselItems = [
    {
      image: '/images/1.jpg',
      title: 'TAMALE YOUTH CHOIR',
      subtitle: 'A Chorale Experience Like No Other'
    },
    {
      image: '/images/2.jpg',
      title: 'ECHOES OF CULTURE AND TRADITION'
    },
    {
      image: '/images/3.jpg',
      title: 'FROM TAMALE TO THE WORLD'
    },
    {
      image: '/images/4.jpg',
      title: 'SINGING TOGETHER, GROWING TOGETHER'
    },
    {
      image: '/images/5.jpg',
      title: 'WHERE PASSION MEETS MELODY'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length)
    }, 60000) // 60 seconds

    return () => clearInterval(interval)
  }, [carouselItems.length])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length)
  }

  return (
    <div className="carousel">
      <div 
        className="carousel-inner" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselItems.map((item, index) => (
          <div key={index} className="carousel-item">
            <img 
              src={item.image} 
              alt={`Choir Image ${index + 1}`}
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="carousel-caption">
              <h2>{item.title}</h2>
              {item.subtitle && <h1>{item.subtitle}</h1>}
            </div>
            <Link to="/events" className="concert-events-btn">Concerts & Events</Link>
          </div>
        ))}
      </div>
      <button 
        className="carousel-control prev" 
        aria-label="Previous slide"
        onClick={handlePrev}
      >
        &lt;
      </button>
      <button 
        className="carousel-control next" 
        aria-label="Next slide"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  )
}

export default Carousel

