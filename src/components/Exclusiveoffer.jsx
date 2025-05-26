import React from 'react'
import { exclusiveOffers } from '../assets/assets'

function Exclusiveoffer() {
  return (
    <div>
        <h1>Exclusive Offers</h1>
        <p>Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>
        <div className='grid grid-cols-3'>
            {exclusiveOffers.map((item)=>(
                <div key={item._id} className='w-50 group relative flex flex-col item-start justify-between gap-1 pt-12 md:pt18 px-4 rounded-2xl text-white bg-no-repeat bg-cover bg-center' style={{backgroundImage : `url(${item.image})`}}>
                 <p>{item.title}</p>
                 <p>{item.description}</p>
                 <p>Expires{item.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Exclusiveoffer