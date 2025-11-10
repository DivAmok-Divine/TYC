import React from 'react'
import Carousel from '../carousel/Carousel'
import Discover from '../discover/Discover'
import Offers from '../offers/Offers'
import NextEvent from '../next-event/NextEvent'

const Home = () => {
  return (
    <>
      <main>
        <Carousel />
      </main>
      <Discover />
      <Offers />
      <NextEvent />
    </>
  )
}

export default Home

