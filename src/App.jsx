import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Hotels from './pages/Hotels'
import HotelDetails from './pages/HotelDetails'

function App() {
  return (
    <div>
      <Navbar/>
    <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/hotels' element={<Hotels/>} />
    <Route path='/hotels/:id' element={<HotelDetails/>} />
    </Routes>
    </div>
  )
}

export default App