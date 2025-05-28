import React from 'react'
import { cities } from '../assets/assets'

function Hero() {
  return (
    <div className='relative flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center h-screen before:absolute before:inset-0 before:bg-black/40 before:z-0'>
      <div className='relative z-10 max-w-3xl'>
        <p className='text-white/90 text-lg md:text-xl font-medium mb-2'>The Ultimate Hotel Experience</p>
        <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight'>Discover Your Perfect Gateway Destination</h1>
        <p className='text-white/80 text-lg md:text-xl mb-8'>Find and book the best hotels around the world</p>
      </div>
      
      <form className='relative z-10 bg-white/95 backdrop-blur-sm text-gray-600 rounded-xl px-6 py-6 flex flex-col md:flex-row max-md:items-start gap-6 max-md:mx-auto shadow-xl'>
            <div className='flex-1'>
                <div className='flex items-center gap-2'>
                    <svg className="w-5 h-5 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                    </svg>
                    <label htmlFor="destinationInput" className='font-medium'>Destination</label>
                </div>
                <input list='destinations' id="destinationInput" type="text" className="w-full rounded-lg border border-gray-200 px-4 py-2.5 mt-1.5 text-sm outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200 transition-all" placeholder="Where are you going?" required />
                 <datalist>
                  {cities.map((item ,i )=>(
                  <option value={item} key={i}/>
                  ))}
                 </datalist>
            </div>

            <div className='flex-1'>
                <div className='flex items-center gap-2'>
                    <svg className="w-5 h-5 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                    </svg>
                    <label htmlFor="checkIn" className='font-medium'>Check in</label>
                </div>
                <input id="checkIn" type="date" className="w-full rounded-lg border border-gray-200 px-4 py-2.5 mt-1.5 text-sm outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200 transition-all" />
            </div>

            <div className='flex-1'>
                <div className='flex items-center gap-2'>
                    <svg className="w-5 h-5 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                    </svg>
                    <label htmlFor="checkOut" className='font-medium'>Check out</label>
                </div>
                <input id="checkOut" type="date" className="w-full rounded-lg border border-gray-200 px-4 py-2.5 mt-1.5 text-sm outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200 transition-all" />
            </div>

            <div className='flex-1'>
                <div className='flex items-center gap-2'>
                    <svg className="w-5 h-5 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <label htmlFor="guests" className='font-medium'>Guests</label>
                </div>
                <input min={1} max={4} id="guests" type="number" className="w-full rounded-lg border border-gray-200 px-4 py-2.5 mt-1.5 text-sm outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200 transition-all" placeholder="0" />
            </div>

            <button className='flex items-center justify-center gap-2 rounded-lg bg-black hover:bg-gray-800 transition-colors py-3 px-6 text-white font-medium my-auto cursor-pointer max-md:w-full max-md:py-2.5' >
                <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                </svg>
                <span >Search</span>
            </button>
        </form>
    </div>
  )
}

export default Hero