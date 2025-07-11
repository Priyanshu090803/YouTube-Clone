  import { view } from 'motion/react-client'
import React, { useEffect } from 'react'
import { CHANNEL_API } from '../utils/constants'
import { LuDot } from 'react-icons/lu'
import { getTimeAgo } from '../utils/getTimeAgo'
import { formatViewCount } from '../utils/formatViewCount'

  const VideoCard = ({info}) => {
    if(!info) return
    
    // console.log(info) 
    const {snippet,statistics} =info
    const {title ,channelTitle,thumbnails,publishedAt} = snippet
    const {viewCount} = statistics||[]
    

    return (
      <div className=' group'
      
      >
    {thumbnails?.maxres?.url&&<div className='  md:m-4 md:w-[27.3vw] w-full min-h-[25vw] p-2  rounded-2xl cursor-pointer hover:bg-rose-100 duration-300 delay-100 ease-in-out transition-all'>
        <img
        className=' rounded-2xl w-full h-5/8 group-hover:rounded-none'
        alt='thumbnail' src={thumbnails?.maxres?.url}/>
        <div className=' flex gap-4 mt-2'>
        <div className='  size-10  rounded-full bg-gray-200 border border-neutral-400 my-2'></div>
        <div className=' w-[90%] '>
        <h2 className=' md:text-lg text-md font-semibold'>{title}</h2>
        <p className=' md:text-lg text-md text-neutral-700'>{channelTitle}</p>  
        <div className=' flex'>
        <span className=' md:text-lg text-md font-normal text-neutral-700 mr-2'>{formatViewCount(viewCount)} views </span>
        <LuDot className=' mt-1'/>
        <span className=' text-neutral-700'>{getTimeAgo(publishedAt)}</span>
        </div>
        </div>
        </div>
      </div>}
    </div>
    )
  }
//  export const AdVideoCard = ({info})=>{  // higher order function
//     return (
//       <div className=' border-2 border-red-400'>
//         <VideoCard info={info}/>
//       </div>
//     )
//   }
  export default VideoCard