import React from 'react'
import Header from './features/header/Header'
import Carousel from './features/carousel/Carousel'
import Discover from './features/discover/Discover'
import Offers from './features/offers/Offers'
import NextEvent from './features/next-event/NextEvent'
import Footer from './features/footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Carousel />
      </main>
      <Discover />
      <Offers />
      <NextEvent />
      <Footer />
    </div>
  )
}

export default App

