import React from 'react'
import './next-event.css'

const NextEvent = () => {
  return (
    <section className="next-event">
      <div className="next-event-container">
        <h2 className="next-event-title">Our Next Event</h2>
        <div className="event-details">
          <div className="event-info">
            <h3>Annual Christmas Concert</h3>
            <p><strong>Date:</strong> December 24, 2023</p>
            <p><strong>Time:</strong> 7:00 PM - 9:00 PM</p>
            <p><strong>Venue:</strong> Tamale Cultural Center</p>
            <p>Join us for a magical evening of festive music and holiday cheer. The Tamale Youth Choir presents their annual Christmas concert, featuring a blend of traditional carols and contemporary holiday songs.</p>
          </div>
          <div className="event-image">
            <img src="/images/events/6.jpg" alt="Christmas Concert" />
            <button className="book-seat-btn">Book A Seat</button>
          </div>
        </div>
        <a href="/events" className="event-button">View All Events</a>
      </div>
    </section>
  )
}

export default NextEvent

