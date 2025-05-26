import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCards from './HotelCards'

function FeaturedDestination() {
  return (
    <div className='text-center items-center'>
        <h1>Featured Destination</h1>
        <p>Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.
</p>
    <div className='grid grid-cols-4'>
        {roomsDummyData.slice(0,4).map((room, index)=>(
            <HotelCards key={room._id} room={room} index={index} /> 
        ))}
    </div>
    <button className=''>View All Destination</button>
        </div>
  )
}

export default FeaturedDestination