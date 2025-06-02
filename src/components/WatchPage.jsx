// import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { closeMenu, toggleMenu } from '../utils/appSlice'
// import { useSearchParams } from 'react-router-dom'
// import CommentSection from './CommentSection'
// import ChatMessage from './ChatMessage'
// import LiveChat from './LiveChat'

// const WatchPage = () => {
//   const dispatch = useDispatch()
//   const [showChat,SetShowChat]=useState(false)
//   useEffect(()=>{
//     dispatch(closeMenu())
//   },[])
//   const [searchParams] = useSearchParams(); // this will help to search the params
//   console.log(searchParams.get("v"));  // used to get based on this . hmare Yt route k andr / k bad V tha for video and ye uske bad ki id get krega

  
//   return (
//     <div className=' w-full h-full md:px-10 px-2 py-2 md:py-4 pb-20 overflow-y-scroll  flex md:flex-row flex-col md:gap-4 gap-2'
//     onClick={()=>dispatch(closeMenu())}
//     >
//       <div className=' w-full'>     
//        <iframe
//       className=' w-full md:h-[35vw] h-[48vw] aspect-video rounded-xl'
//       width="560"
//        height="315"
//        src={`https://www.youtube.com/embed/${searchParams.get("v")}?autoplay=1`}
//         title="YouTube video player" 
//          allow="accelerometer; autoplay;autoplay ;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
//          allowFullScreen></iframe>
//          <div className='  mt-10 rounded-2xl shadow-xl w-full px-2 overflow-x-hidden'>       
//           <CommentSection/>
//          </div>
//         </div>
        
//          <div className='  w-1/2  h-full rounded-2xl pt-2 pb-10 px-2'>
//          <button className='  bg-neutral-300 py-2 my-4 rounded-lg px-1 shadow-sm cursor-pointer '
//          onClick={()=>SetShowChat(!showChat)}
//          >{showChat?"Hide Live chat":"Show Live chat"}</button>

//          {showChat&&
//           <LiveChat/>}
     
//          </div>
//     </div>
//   )
// }

// export default WatchPage


import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentSection from './CommentSection'
import LiveChat from './LiveChat'

const WatchPage = () => {
  const dispatch = useDispatch()
  const [showChat, setShowChat] = useState(false)
  useEffect(() => {
    dispatch(closeMenu())
  }, [])
  const [searchParams] = useSearchParams()
  
  return (
    <div 
      className='w-full h-full px-2 md:px-10 py-2 md:py-4 pb-20 flex flex-col md:flex-row gap-2 md:gap-4 overflow-y-scroll'
      onClick={() => dispatch(closeMenu())}
    >
      {/* Main content (video + comments) - full width */}
      <div className='w-full md:w-2/3'>
        {/* Video player */}
        <iframe
          className='w-full h-[48vw] md:h-[35vw] rounded-xl'
          src={`https://www.youtube.com/embed/${searchParams.get("v")}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        
        {/* Comments section */}
        <div className='mt-6 md:mt-10 rounded-2xl  w-full px-2 overflow-x-hidden'>
          <CommentSection/>
        </div>
      </div>
      
      {/* Live chat sidebar - appears only on desktop by default */}
      <div className='w-full md:w-1/3'>
        {/* Chat toggle button - visible on all screens */}
        <button 
          className='bg-neutral-300 py-2 my-4 rounded-lg px-4 shadow-sm cursor-pointer w-full md:w-auto'
          onClick={() => setShowChat(!showChat)}
        >
          {showChat ? "Hide Live Chat" : "Show Live Chat"}
        </button>
        
        {/* Chat container - shown when toggled */}
        {showChat && (
          <div className='rounded-2xl pt-2 pb-10 h-[400px] md:h-[calc(100vh-200px)]'>
            <LiveChat/>
          </div>
        )}
      </div>
    </div>
  )
}

export default WatchPage