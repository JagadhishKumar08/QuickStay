import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'

import Footer from './Components/Footer'
import Home from './pages/Home'
import AllRooms from './pages/AllRooms'
import RoomDetails from './pages/RoomDetails'

const App = () => {
    const isOwnerPath = useLocation().pathname.includes("owner")
  return (
    <div>
        {!isOwnerPath && <Navbar/>}
        <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/rooms' element={<AllRooms/>}></Route>
          <Route path='/rooms/:id' element={<RoomDetails/>}></Route>

          

        </Routes>
        </div>
        <Footer/>
    </div>
  )
}

export default App