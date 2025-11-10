import React from 'react'
import { Link } from 'react-router-dom'
import './events.css'

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Annual Christmas Concert',
      date: 'December 24, 2024',
      time: '7:00 PM - 9:00 PM',
      venue: 'Tamale Cultural Center',
      description: 'Join us for a magical evening of festive music and holiday cheer. The Tamale Youth Choir presents their annual Christmas concert, featuring a blend of traditional carols and contemporary holiday songs.',
      image: '/images/events/6.jpg',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Spring Music Festival',
      date: 'March 15, 2024',
      time: '6:00 PM - 8:30 PM',
      venue: 'Tamale Sports Stadium',
      description: 'Experience the beauty of spring through music. Our Spring Music Festival showcases the choir\'s versatility with classical pieces, contemporary arrangements, and traditional Ghanaian music.',
      image: '/images/events/7.jpg',
      status: 'past'
    },
    {
      id: 3,
      title: 'Easter Celebration Concert',
      date: 'April 10, 2024',
      time: '5:00 PM - 7:30 PM',
      venue: 'Tamale Central Church',
      description: 'A special Easter celebration featuring sacred music and hymns. Join us for an uplifting evening of worship and praise as we celebrate the resurrection through song.',
      image: '/images/events/8.jpg',
      status: 'past'
    },
    {
      id: 4,
      title: 'Summer Choral Workshop',
      date: 'July 20, 2024',
      time: '10:00 AM - 4:00 PM',
      venue: 'Tamale Youth Choir Hall',
      description: 'A day-long workshop for aspiring singers and choir enthusiasts. Learn vocal techniques, harmony, and performance skills from our experienced directors and members.',
      image: '/images/events/6.jpg',
      status: 'upcoming'
    },
    {
      id: 5,
      title: 'Independence Day Performance',
      date: 'March 6, 2024',
      time: '2:00 PM - 4:00 PM',
      venue: 'Independence Square, Tamale',
      description: 'Celebrate Ghana\'s independence with patriotic songs and national anthems. The choir performs alongside other cultural groups in this annual celebration.',
      image: '/images/events/7.jpg',
      status: 'past'
    },
    {
      id: 6,
      title: 'Youth Music Showcase',
      date: 'August 15, 2024',
      time: '6:30 PM - 9:00 PM',
      venue: 'Tamale Cultural Center',
      description: 'A showcase of young talent featuring the choir alongside other youth music groups. An evening of diverse musical performances celebrating the next generation of musicians.',
      image: '/images/events/8.jpg',
      status: 'upcoming'
    }
  ]

  const upcomingEvents = events.filter(event => event.status === 'upcoming')
  const pastEvents = events.filter(event => event.status === 'past')

  return (
    <section className="events-section">
      <div className="events-container">
        <h1 className="events-title">Concerts & Events</h1>
        <p className="events-subtitle">Join us for unforgettable musical experiences</p>

        {upcomingEvents.length > 0 && (
          <div className="events-category">
            <h2 className="category-title">Upcoming Events</h2>
            <div className="events-grid">
              {upcomingEvents.map(event => (
                <div key={event.id} className="event-card">
                  <div className="event-card-image">
                    <img src={event.image} alt={event.title} loading="lazy" />
                    <div className="event-status-badge upcoming">Upcoming</div>
                  </div>
                  <div className="event-card-content">
                    <h3 className="event-card-title">{event.title}</h3>
                    <div className="event-card-details">
                      <p className="event-detail">
                        <i className="fas fa-calendar-alt"></i>
                        <span>{event.date}</span>
                      </p>
                      <p className="event-detail">
                        <i className="fas fa-clock"></i>
                        <span>{event.time}</span>
                      </p>
                      <p className="event-detail">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{event.venue}</span>
                      </p>
                    </div>
                    <p className="event-card-description">{event.description}</p>
                    <button className="event-card-button">Book A Seat</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {pastEvents.length > 0 && (
          <div className="events-category">
            <h2 className="category-title">Past Events</h2>
            <div className="events-grid">
              {pastEvents.map(event => (
                <div key={event.id} className="event-card past">
                  <div className="event-card-image">
                    <img src={event.image} alt={event.title} loading="lazy" />
                    <div className="event-status-badge past">Past Event</div>
                  </div>
                  <div className="event-card-content">
                    <h3 className="event-card-title">{event.title}</h3>
                    <div className="event-card-details">
                      <p className="event-detail">
                        <i className="fas fa-calendar-alt"></i>
                        <span>{event.date}</span>
                      </p>
                      <p className="event-detail">
                        <i className="fas fa-clock"></i>
                        <span>{event.time}</span>
                      </p>
                      <p className="event-detail">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{event.venue}</span>
                      </p>
                    </div>
                    <p className="event-card-description">{event.description}</p>
                    <button className="event-card-button" disabled>Event Ended</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="events-cta">
          <p>Want to book the choir for your event?</p>
          <Link to="/contact" className="cta-button">Contact Us</Link>
        </div>
      </div>
    </section>
  )
}

export default Events

