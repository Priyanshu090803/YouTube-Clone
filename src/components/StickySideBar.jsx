import React from 'react'
import { FaRegCircleUser } from 'react-icons/fa6'
import { HiMiniHome } from 'react-icons/hi2'
import { MdOutlineSubscriptions } from 'react-icons/md'
import { SiYoutubeshorts } from 'react-icons/si'
import { Link } from 'react-router-dom'

const StickySideBar = () => {
  return (
   <div className='md:flex flex-col mt-5 px-2 gap-4 sticky top-8 h-screen hidden  bg-white  '>
            <Link to={"/"} className='flex flex-col items-center cursor-pointer font-light md:text-xl text-sm md:gap-2 gap-2 hover:bg-red-50 active:bg-red-50 active:scale-95 duration-600 ease-in-out rounded-lg py-4 p-2'>
            <HiMiniHome className='md:text-[1.7vw] '/> <h2 className='text-sm font-normal'>Home</h2>
          </Link>
           <div className='flex flex-col items-center cursor-pointer font-light md:text-xl text-sm md:gap-2 gap-2 hover:bg-red-50 active:bg-red-50 active:scale-95 duration-600 ease-in-out rounded-lg py-4 p-2'>
            <SiYoutubeshorts className='md:text-[1.7vw] '/> <h2 className='text-sm font-normal'>Shorts</h2>
          </div>
           <div className='flex flex-col items-center cursor-pointer font-light md:text-xl text-sm md:gap-2 gap-2 hover:bg-red-50 active:bg-red-50 active:scale-95 duration-600 ease-in-out rounded-lg py-4 p-2'>
            <MdOutlineSubscriptions className='md:text-[1.7vw] '/> <h2 className='text-sm font-normal'>Subscriptions</h2>
          </div>
          <div className='flex flex-col items-center cursor-pointer font-light md:text-xl text-sm md:gap-2 gap-2 hover:bg-red-50 active:bg-red-50 active:scale-95 duration-600 ease-in-out rounded-lg py-4 p-2'>
            <FaRegCircleUser className='md:text-[1.7vw] '/> <h2 className='text-sm font-normal'>You</h2>
          </div>
          </div>
  )
}

export default StickySideBar