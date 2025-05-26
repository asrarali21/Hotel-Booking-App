import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import Exclusiveoffer from '../components/Exclusiveoffer'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'

function Home() {
  return (
     <>
       <Hero/>
       <FeaturedDestination/>
       <Exclusiveoffer/>
       <Testimonial/>
       <NewsLetter/>
     </>
  )
}

export default Home