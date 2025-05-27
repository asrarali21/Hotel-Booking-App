import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

function HotelCards({room}) {

  return (
    <Link 
      to={"/hotels/" + room._id} 
      onClick={() => scrollTo(0,0)} 
      className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={room.images[0]} 
          alt={room.hotel.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-black/80 text-white text-xs font-medium px-3 py-1 rounded-full">
            Best Seller
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 space-y-3">
        {/* Hotel Name */}
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
          {room.hotel.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <img src={assets.starIconFilled} alt="Rating" className="w-4 h-4" />
          <span className="text-sm text-gray-600">4.8 (2.5k reviews)</span>
        </div>

        {/* Location */}
        <div className="flex items-start gap-2">
          <img src={assets.locationIcon} alt="Location" className="w-4 h-4 mt-0.5" />
          <span className="text-sm text-gray-600 line-clamp-2">{room.hotel.address}</span>
        </div>

        {/* Price and Book Button */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div>
            <p className="text-sm text-gray-500">Starting from</p>
            <p className="text-xl font-bold text-gray-900">${room.pricePerNight}</p>
          </div>
          <button className="cursor-pointer px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
            view Details
          </button>
        </div>
      </div>
    </Link>
  )
}

export default HotelCards