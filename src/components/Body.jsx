import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Body = () => {
  return (
    <div className=' flex h-full w-full flex-col '>
            <Navbar/>
      
        <Sidebar/>          {/* Chahe to is side bar ko navbar k niche lga lo bcz ye na hi outlet k andr ara(which is having body) or
         Nahi router provider k andr ara
         */}

        <Outlet/>   {/* Yha se change honge route App wale */}
       
    </div>
  )
}

export default Body