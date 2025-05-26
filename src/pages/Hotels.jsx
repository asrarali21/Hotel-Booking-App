import React from 'react'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Hotels() {
    const navigate = useNavigate()
  return (
    < >
    <h1>Hotel Rooms</h1>
    <p>Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>
    <div>
        {roomsDummyData.map((item)=>(
            <div> 
                <img src={item.images[0]} alt="" className='h-50' onClick={()=>navigate(`/hotels/${item._id}`)}/>

                 <div>
                  <p>{item.hotel.city}</p>
                  <p>{item.hotel.name}</p>
                 </div>
                 <div>
                    <img src={assets.locationIcon} alt="" />
                    <span>{item.hotel.address}</span>
                 </div>
                 <div>
                    {item.amenities.map((item)=>(
                        <div>
                            <img src={facilityIcons[item]} alt="" />
                            <p>{item}</p>
                        </div>
                        
                    ))}
                    <div>
                        <p>${item.pricePerNight}</p>
                    </div>
                 </div>
            </div>
            
        ))}
    </div>
        </>
  )
}

export default Hotels