import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, roomsDummyData, facilityIcons } from '../assets/assets';

function HotelDetails() {
    const {id} = useParams();
    const [hotels, setHotels] = useState();
    const [mainImage, setMainImage] = useState();
    
    useEffect(() => {
        const data = roomsDummyData.find((item) => item._id === id);
        data && setHotels(data);
        data && setMainImage(data.images[0]);
    }, [id]);
    
    if (!hotels) return null;

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Hero Section */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                                {hotels.hotel.name}
                            </h1>
                            <div className="flex items-center gap-3 mt-2">
                                <span className="text-base md:text-lg text-gray-600">{hotels.roomType}</span>
                                <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                                    20% OFF
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <img src={assets.locationIcon} alt="Location" className="w-5 h-5" />
                            <span className="text-base md:text-lg">{hotels.hotel.address}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Left Column - Image Gallery */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Main Image */}
                        <div className="relative rounded-xl overflow-hidden shadow-lg">
                            <img 
                                src={mainImage} 
                                alt={hotels.hotel.name}
                                className="w-full h-[300px] md:h-[400px] object-cover"
                            />
                        </div>

                        {/* Thumbnail Gallery */}
                        {hotels.images.length > 1 && (
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                                {hotels.images.map((image, index) => (
                                    <div 
                                        key={index}
                                        className={`relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                                            mainImage === image ? 'ring-2 ring-gray-900' : 'hover:opacity-80'
                                        }`}
                                        onClick={() => setMainImage(image)}
                                    >
                                        <img 
                                            src={image} 
                                            alt={`${hotels.hotel.name} - Image ${index + 1}`}
                                            className="w-full h-20 md:h-24 object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Amenities Section */}
                        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
                            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">Amenities</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                                {hotels.amenities.map((amenity) => (
                                    <div key={amenity} className="flex items-center gap-2 md:gap-3">
                                        <img 
                                            src={facilityIcons[amenity]} 
                                            alt={amenity} 
                                            className="w-5 h-5 md:w-6 md:h-6"
                                        />
                                        <span className="text-sm md:text-base text-gray-600">{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Booking Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 sticky top-24">
                            <div className="space-y-4 md:space-y-6">
                                {/* Price Section */}
                                <div className="border-b border-gray-100 pb-4 md:pb-6">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-2xl md:text-3xl font-bold text-gray-900">
                                            ${hotels.pricePerNight}
                                        </span>
                                        <span className="text-sm md:text-base text-gray-500">per night</span>
                                    </div>
                                    <p className="text-xs md:text-sm text-gray-500 mt-1">
                                        Includes taxes and fees
                                    </p>
                                </div>

                                {/* Booking Button */}
                                <button 
                                    className="w-full bg-gray-900 text-white py-2.5 md:py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm md:text-base"
                                >
                                    Book Now
                                </button>

                                {/* Additional Info */}
                                <div className="space-y-3 md:space-y-4 text-xs md:text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Free cancellation before check-in</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                        <span>Secure booking guaranteed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HotelDetails;