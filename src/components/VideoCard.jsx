  import { view } from 'motion/react-client'
import React, { useEffect } from 'react'
import { CHANNEL_API } from '../utils/constants'
import { LuDot } from 'react-icons/lu'

  const VideoCard = ({info}) => {
    if(!info) return
    
    // console.log(info) 
    const {snippet,statistics} =info
    const {title ,channelTitle,thumbnails,publishedAt} = snippet
    const {viewCount} = statistics
    const formatViewCount=(count)=>{
      if(count>= 1000000){
       return(count/1000000).toFixed(1)+"M"
      }
      if(count>=1000){
        return(count/1000).toFixed(1)+"k"
      }else{
        return count
      }
    }
   function getTimeAgo(isoDate) {
  const now = new Date();
  const date = new Date(isoDate);
  const seconds = Math.floor((now - date) / 1000);
  
  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) return `${interval} year${interval === 1 ? '' : 's'} ago`;
  
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) return `${interval} month${interval === 1 ? '' : 's'} ago`;
  
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) return `${interval} day${interval === 1 ? '' : 's'} ago`;
  
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) return `${interval} hour${interval === 1 ? '' : 's'} ago`;
  
  interval = Math.floor(seconds / 60);
  if (interval >= 1) return `${interval} minute${interval === 1 ? '' : 's'} ago`;
  
  return 'Just now';
}

    return (
      <div className=' group'
      
      >
    {thumbnails?.maxres?.url&&<div className='  m-4 md:w-[27.3vw] w-full min-h-[25vw] p-2  rounded-2xl cursor-pointer hover:bg-rose-100 duration-300 delay-100 ease-in-out transition-all'>
        <img
        className=' rounded-2xl w-full h-5/8 group-hover:rounded-none'
        alt='thumbnail' src={thumbnails?.maxres?.url}/>
        <div className=' flex gap-3  mt-2'>
        <div className=' w-12 h-12  rounded-full bg-gray-200'></div>
        <div className=' w-[90%] '>
        <h2 className=' text-lg font-semibold'>{title}</h2>
        <p className=' text-lg text-neutral-700'>{channelTitle}</p>  
        <div className=' flex'>
        <span className=' text-lg font-normal text-neutral-700 mr-2'>{formatViewCount(viewCount)} views </span>
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