import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

function HotelCards({room , _id}) {
  return (
      <Link to={"/rooms/" + _id} onClick={()=>scrollTo(0,0)} key={room._id}>
      

      <img src={room.images[0] }alt="" />
      <p>Best Seller</p>
      <div>
  
        <p>{room.hotel.name}</p>
      </div>
        <div>
            <img src={assets.starIconFilled} alt="" />
        </div>
        <div>
              <img src={assets.locationIcon} alt="" />
              <span>{room.hotel.address}</span>
        </div>
        <div>
            <p>${room.pricePerNight}</p>
            <button>Book Now</button>
        </div>
    
                </Link>
  )
}

export default HotelCards