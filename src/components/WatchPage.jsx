import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu, toggleMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentSection from './CommentSection'

const WatchPage = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(closeMenu())
  },[])
  const [searchParams] = useSearchParams(); // this will help to search the params
  console.log(searchParams.get("v"));  // used to get based on this . hmare Yt route k andr / k bad V tha for video and ye uske bad ki id get krega

  
  return (
    <div className=' w-full h-full px-10 py-4 pb-20 overflow-y-scroll'
    onClick={()=>dispatch(closeMenu())}
    >
      <iframe
      
      className=' w-[50%] h-[30vw] rounded-xl'
      width="560"
       height="315"
       src={`https://www.youtube.com/embed/${searchParams.get("v")}?autoplay=1`}
        title="YouTube video player" 
         allow="accelerometer; autoplay;autoplay ;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
         allowFullScreen></iframe>
         <div className='  mt-10 rounded-2xl shadow-xl w-1/2'>       
          <CommentSection/>
         </div>

    </div>
  )
}

export default WatchPage