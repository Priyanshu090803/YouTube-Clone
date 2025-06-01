import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu, toggleMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentSection from './CommentSection'
import ChatMessage from './ChatMessage'
import LiveChat from './LiveChat'

const WatchPage = () => {
  const dispatch = useDispatch()
  const [showChat,SetShowChat]=useState(false)
  useEffect(()=>{
    dispatch(closeMenu())
  },[])
  const [searchParams] = useSearchParams(); // this will help to search the params
  console.log(searchParams.get("v"));  // used to get based on this . hmare Yt route k andr / k bad V tha for video and ye uske bad ki id get krega

  
  return (
    <div className=' w-full h-full px-10 py-4 pb-20 overflow-y-scroll  flex gap-10'
    onClick={()=>dispatch(closeMenu())}
    >
      <div className=' w-full'>     
       <iframe
      
      className=' w-full h-[35vw] rounded-xl'
      width="560"
       height="315"
       src={`https://www.youtube.com/embed/${searchParams.get("v")}?autoplay=1`}
        title="YouTube video player" 
         allow="accelerometer; autoplay;autoplay ;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
         allowFullScreen></iframe>
         <div className='  mt-10 rounded-2xl shadow-xl w-1/'>       
          <CommentSection/>
         </div>
        </div>
        
         <div className='  w-1/2  border border-neutral-400 h-full rounded-2xl pt-2 pb-10 px-2'>
         <button className='  bg-neutral-300 py-2 rounded-lg px-1 shadow-sm cursor-pointer  '
         onClick={()=>SetShowChat(!showChat)}
         >Show live chat</button>

         {showChat&&
          <LiveChat/>}
     
         </div>
    </div>
  )
}

export default WatchPage