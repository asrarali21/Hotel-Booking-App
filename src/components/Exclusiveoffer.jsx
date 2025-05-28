import React from 'react'
import { exclusiveOffers } from '../assets/assets'

function Exclusiveoffer() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Exclusive Offers
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Take advantage of our limited-time offers and special packages to enhance your stay 
          and create unforgettable memories.
        </p>
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {exclusiveOffers.map((item) => (
          <div 
            key={item._id} 
            className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Background Image with Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
              {/* Top Content */}
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                  Limited Time
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mt-4">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm md:text-base line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Bottom Content */}
              <div className="space-y-4"> 
                {/* Expiry Date */}
                <div className="flex items-center gap-2 text-white/80">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">Expires {item.expiryDate}</span>
                </div>

             
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Exclusiveoffer