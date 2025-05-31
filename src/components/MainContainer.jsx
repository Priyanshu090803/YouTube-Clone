import  { useEffect } from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { HiMiniHome } from 'react-icons/hi2'
import { SiYoutubeshorts } from 'react-icons/si'
import { MdOutlineSubscriptions } from 'react-icons/md'
import { FaRegCircleUser } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import StickySideBar from './StickySideBar'

const MainContainer = () => {
   const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(closeMenu())
  },[])
  return (
    <div className='col-span-11 flex  text-neutral-900 h-screen overflow-y-hidden '>
       {/* Sidebar - Made sticky with proper constraints */}
       <StickySideBar/>
      {/* Main content */}
      <div className='flex flex-col  overflow-y-auto overflow-x-hidden '>
       <ButtonList/>
        <VideoContainer/>
        </div>
    </div>
  )
}

export default MainContainer