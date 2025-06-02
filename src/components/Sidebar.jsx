import React from 'react'
import MenuItems from './MenuItems'
import { IoIosArrowForward } from 'react-icons/io'
import { MdHistory, MdOutlineSubscriptions, MdOutlineWatchLater, MdSubscriptions } from 'react-icons/md'
import { CgPlayList } from 'react-icons/cg'
import { GoVideo } from 'react-icons/go'
import { GiGraduateCap } from 'react-icons/gi'
import { SlLike } from 'react-icons/sl'
import { AiFillHome } from 'react-icons/ai'
import { SiYoutubeshorts } from 'react-icons/si'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'motion/react'
import { toggleMenu } from '../utils/appSlice'
import { IoMenu } from 'react-icons/io5'
import { VscHome } from 'react-icons/vsc'
import { HiMiniHome } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const {isMenuOpen} = useSelector((store)=>store.app)
  const dispatch = useDispatch()
  if(!isMenuOpen) return null
  return (
    <motion.div
    initial={{
      x:-100
    }}
    animate={{
      x:0,
      transition:{
        duration:0.5
      }
    }}
    transition={{
      duration:0.5
    }}
    className=' z-[100] absolute top-0 bg-white  shadow md:w-[16vw] w-[47vw]  flex flex-col  h-screen overflow-y-scroll scrollbar-hide  text-neutral-900'>
        <div className='  flex items-center  md:gap-4  gap-1 px-5 py-6 sticky top-0 h-20 bg-white'>
            <IoMenu 
            className=' cursor-pointer text-2xl md:text-4xl active:scale-95 duration-300 ease-in-out text-neutral-800 hover:bg-red-50 active:bg-red-50 rounded-full w-10 '
            onClick={()=>dispatch(toggleMenu())}
            />
            <img
            className=' md:w-24 md:h-12 w-20 h-10   cursor-pointer active:scale-95 duration-300 ease-in-out'
            src='https://www.gstatic.com/youtube/img/promos/growth/35c066fddfacc16c6f51ed39c9932fa55d03f2845d7cd3b5b298705d1e2c5c3c_244x112.webp'
            />
          </div>
          <div className=' border-b border-rose-200 w-full flex flex-col  gap-3 py-6 px-4'>
             <Link to={"/"} className=' cursor-pointer font-semibold md:text-xl text-sm flex items-center  md:gap-4 gap-2  hover:bg-red-50 active:bg-red-50 active:scale-95 duration-600 ease-in-out rounded-lg p-2'><HiMiniHome className=' md:text-[1.7vw]'/>Home</Link>
             <h2 className=' cursor-pointer font-semibold md:text-xl text-sm  flex items-center  md:gap-4 gap-2  hover:bg-red-50 active:bg-red-50 active:scale-95 duration-600 ease-in-out rounded-lg p-2'><SiYoutubeshorts className=' md:text-[1.7vw]'/>Shorts</h2>
             <h2 className=' cursor-pointer font-semibold md:text-xl text-sm flex items-center md:gap-4 gap-2  hover:bg-red-50 active:bg-red-50 active:scale-95 duration-600 ease-in-out rounded-lg p-2 '><MdOutlineSubscriptions  className=' md:text-[1.7vw]' />Subscription</h2>
          
          </div>

        <div className=' border-b border-rose-200 w-full flex flex-col px-2 gap-3 py-4 '>
        <h2 className=' cursor-pointer font-semibold md:text-2xl text-base   flex items-center  gap-2  hover:bg-red-50 active:bg-red-50 active:scale-95 duration-600 ease-in-out rounded-lg p-2'>You<IoIosArrowForward className='md:text-lg mt-1' /></h2>
        <ul className=' flex flex-col gap-2 cursor-pointer'>
          <li className=' flex items-center  md:gap-4 gap-2  hover:bg-red-50 active:bg-red-50 active:scale-95 duration-600 ease-in-out rounded-lg p-2 md:text-xl text-sm'><MdHistory />History</li>
          <li className='  flex items-center  md:gap-4 gap-2  hover:bg-red-50 active:bg-red-50 active:scale-95 duration-600 ease-in-out rounded-lg p-2 md:text-xl text-sm'><CgPlayList/>Playlists</li>
          <li className='  flex items-center  md:gap-4 gap-2  hover:bg-red-50 active:bg-red-50 active:scale-95 duration-600 ease-in-out rounded-lg p-2 md:text-xl text-sm'><GoVideo/>Your Videos</li>
          <li className='  flex items-center  md:gap-4 gap-2  hover:bg-red-50 active:bg-red-50 active:scale-95 duration-600 ease-in-out rounded-lg p-2 md:text-xl text-sm'><GiGraduateCap />Your Course</li>
          <li className='  flex items-center  md:gap-4 gap-2  hover:bg-red-50 active:bg-red-50 active:scale-95 duration-600 ease-in-out rounded-lg p-2 md:text-xl text-sm'><MdOutlineWatchLater/>Watch later</li>
          <li className='  flex items-center  md:gap-4 gap-2  hover:bg-red-50 active:bg-red-50 active:scale-95 duration-600 ease-in-out rounded-lg p-2 md:text-xl text-sm'><SlLike/>Liked Vidoes</li>
        </ul>
        </div>  
        <div className=' border-b border-rose-200 w-full flex flex-col px-2 gap-3 py-4 '>
        <h2 className=' cursor-pointer font-semibold md:text-2xl text-base '>Subscriptions</h2>
        <ul className=' flex flex-col gap-2 cursor-pointer'>
          <li className='  md:text-xl hover:bg-red-50 active:bg-red-50 active:scale-95 duration-600 ease-in-out rounded-lg p-2'>Music</li>
          <li className='  md:text-xl hover:bg-red-50 active:bg-red-50 active:scale-95 duration-600 ease-in-out rounded-lg p-2'>Sports</li>
          <li className='  md:text-xl hover:bg-red-50 active:bg-red-50 active:scale-95 duration-600 ease-in-out rounded-lg p-2'>Gaming</li>
          <li className='  md:text-xl hover:bg-red-50 active:bg-red-50 active:scale-95 duration-600 ease-in-out rounded-lg p-2'>Movies</li>
        </ul>
        </div>
        
    </motion.div>
  )
}

export default Sidebar