import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCards from './HotelCards'

function FeaturedDestination() {
  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24'>
        <div className='text-center max-w-3xl mx-auto mb-12 md:mb-16'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                Featured Destinations
            </h2>
            <p className='text-gray-600 text-lg leading-relaxed'>
                Discover our handpicked selection of exceptional properties around the world, 
                offering unparalleled luxury and unforgettable experiences.
            </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12'>
            {roomsDummyData.slice(0,4).map((room, index) => (
                <HotelCards key={room._id} room={room} index={index} />
            ))}
        </div>

        <div className='text-center'>
            <button className='inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl'>
                View All Destinations
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>
        </div>
    </section>
  )
}

export default FeaturedDestination