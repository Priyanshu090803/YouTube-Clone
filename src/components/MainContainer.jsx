// import React, { useEffect } from 'react'
// import ButtonList from './ButtonList'
// import VideoContainer from './VideoContainer'
// import { VscHome } from 'react-icons/vsc'
// import { HiMiniHome } from 'react-icons/hi2'
// import { SiYoutubeshorts } from 'react-icons/si'
// import { MdOutlineSubscriptions } from 'react-icons/md'
// import { FaRegCircleUser } from 'react-icons/fa6'
// import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { closeMenu } from '../utils/appSlice'

// const MainContainer = () => {
//    const dispatch = useDispatch()
//   useEffect(()=>{
//     dispatch(closeMenu())
//   },[])
//   return (
//     <div className=' col-span-11 flex px-2 text-neutral-900'>
//        <div className=' flex flex-col  mt-5 px-2 gap-4 h-screen'>
//             <Link to={"/"} className=' flex flex-col items-center  cursor-pointer font-semibold md:text-xl text-sm  md:gap-2 gap-2  hover:bg-red-50 active:bg-red-50 active:scale-95 duration-600 ease-in-out rounded-lg p-2'>
//             <HiMiniHome className=' md:text-[2vw]'/> <h2 className=' text-sm  font-normal'>Home</h2>
//           </Link>
//            <div className=' flex flex-col items-center  cursor-pointer font-semibold md:text-xl text-sm  md:gap-2 gap-2  hover:bg-red-50 active:bg-red-50 active:scale-95 duration-600 ease-in-out rounded-lg p-2'>
//             <SiYoutubeshorts className=' md:text-[2vw]'/> <h2 className=' text-sm  font-normal'>Shorts</h2>
//           </div>
//            <div className=' flex flex-col items-center  cursor-pointer font-semibold md:text-xl text-sm  md:gap-2 gap-2  hover:bg-red-50 active:bg-red-50 active:scale-95 duration-600 ease-in-out rounded-lg p-2'>
//             <MdOutlineSubscriptions className=' md:text-[2vw]'/> <h2 className=' text-sm  font-normal'>Subscriptions</h2>
//           </div>
//           <div className=' flex flex-col items-center  cursor-pointer font-semibold md:text-xl text-sm  md:gap-2 gap-2  hover:bg-red-50 active:bg-red-50 active:scale-95 duration-600 ease-in-out rounded-lg p-2'>
//             <FaRegCircleUser className=' md:text-[2vw]'/> <h2 className=' text-sm  font-normal'>You</h2>
//           </div>
//           </div>
//       <div className=' flex flex-col px-2'>
//        <ButtonList/>
//         <VideoContainer/>
//         </div>
//     </div>
//   )
// }

// export default MainContainer

import React, { useEffect } from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { VscHome } from 'react-icons/vsc'
import { HiMiniHome } from 'react-icons/hi2'
import { SiYoutubeshorts } from 'react-icons/si'
import { MdOutlineSubscriptions } from 'react-icons/md'
import { FaRegCircleUser } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'

const MainContainer = () => {
   const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(closeMenu())
  },[])
  return (
    <div className='col-span-11 flex  text-neutral-900 h-screen overflow-y-hidden '>
       {/* Sidebar - Made sticky with proper constraints */}
       <div className='md:flex flex-col mt-5 px-2 gap-4 sticky top-8 h-[calc(100vh-4rem)]  hidden '>
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
      {/* Main content */}
      <div className='flex flex-col  overflow-y-auto overflow-x-hidden '>
       <ButtonList/>
        <VideoContainer/>
        </div>
    </div>
  )
}

export default MainContainer