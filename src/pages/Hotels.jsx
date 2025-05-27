import React, { useState } from 'react'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Hotels() {
    const navigate = useNavigate()
    const [selectedAmenities, setSelectedAmenities] = useState([])
    const [priceRange, setPriceRange] = useState([0, 1000])

    const amenities = [
        'Free WiFi',
        'Swimming Pool',
        'Fitness Center',
        'Restaurant',
        'Spa',
        'Parking'
    ]

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Header Section */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hotel Rooms</h1>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl">
                        Take advantage of our limited-time offers and special packages to enhance your stay 
                        and create unforgettable memories.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
                    {/* Filters Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 sticky top-24">
                            <div className="space-y-6">
                                {/* Price Range Filter */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Range</h3>
                                    <div className="space-y-4">
                                        <input
                                            type="range"
                                            min="0"
                                            max="1000"
                                            value={priceRange[1]}
                                            onChange={(e) => setPriceRange([priceRange[0], e.target.value])}
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                        />
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <span>${priceRange[0]}</span>
                                            <span>${priceRange[1]}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Amenities Filter */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Amenities</h3>
                                    <div className="space-y-3">
                                        {amenities.map((amenity) => (
                                            <label key={amenity} className="flex items-center gap-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedAmenities.includes(amenity)}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setSelectedAmenities([...selectedAmenities, amenity])
                                                        } else {
                                                            setSelectedAmenities(selectedAmenities.filter(a => a !== amenity))
                                                        }
                                                    }}
                                                    className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                                                />
                                                <span className="text-sm text-gray-600">{amenity}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hotels List */}
                    <div className="lg:col-span-3 space-y-6">
                        {roomsDummyData.map((item) => (
                            <div 
                                key={item._id}
                                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="flex flex-col md:flex-row">
                                    {/* Image Section */}
                                    <div className="md:w-1/3">
                                        <img 
                                            src={item.images[0]} 
                                            alt={item.hotel.name}
                                            className="w-full h-48 md:h-full object-cover"
                                            onClick={() => navigate(`/hotels/${item._id}`)}
                                        />
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-4 md:p-6 md:w-2/3">
                                        <div className="flex flex-col h-full">
                                            <div>
                                                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                                    <img src={assets.locationIcon} alt="Location" className="w-4 h-4" />
                                                    <span>{item.hotel.address}</span>
                                                </div>
                                                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                                                    {item.hotel.name}
                                                </h2>
                                                <p className="text-gray-600 mb-4">{item.roomType}</p>
                                            </div>

                                            <div className="mt-auto">
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {item.amenities.slice(0, 3).map((amenity) => (
                                                        <span
                                                            key={amenity}
                                                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                                                        >
                                                            {amenity}
                                                        </span>
                                                    ))}
                                                    {item.amenities.length > 3 && (
                                                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                                            +{item.amenities.length - 3} more
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <span className="text-2xl font-bold text-gray-900">
                                                            ${item.pricePerNight}
                                                        </span>
                                                        <span className="text-sm text-gray-500 ml-1">per night</span>
                                                    </div>
                                                    <button 
                                                        onClick={() => navigate(`/hotels/${item._id}`)}
                                                        className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                                                    >
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hotels