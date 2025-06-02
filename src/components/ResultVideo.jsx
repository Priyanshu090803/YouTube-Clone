import React from 'react'
import { getTimeAgo } from '../utils/getTimeAgo'
import { LuDot } from 'react-icons/lu'

const ResultVideo = ({data}) => {
    if(!data)return
    const {snippet} = data
    const{title,channelTitle,description,publishedAt,thumbnails} = snippet
    const {high} =thumbnails
    console.log(data)
  return (
    <div className='  md:w-full h-full  overflow-y-hidden w-full min-h-[20vw] mt-2  md:rounded-2xl cursor-pointer  flex md:flex-row flex-col md:gap-7 gap-2 p-2'>
       <div className=' h-full md:rounded-lg  md:min-w-[35vw]  overflow-y-hidden  md:relative '>
            <img 
        className='  h-[135%] -mt-[33px] md:mt-0 w-full md:absolute md:-top-[17%] md:rounded-2xl object-cover'
        src={high.url}
        />
        </div>

        <div className='  flex flex-col gap-2 relative'>
          <div className=' flex gap-2'>
            <span className=' size-10 border border-neutral-400  rounded-full bg-gray-200 md:hidden block'></span>
            <h3 className=' md:text-2xl w-3/4 md:w-full'>{title}</h3>
            
            </div>
            <div className=' relative pl-10 md:pl-0'>            
            <span className=' md:text-lg text-sm md:static absolute left-32 ml-10'>{getTimeAgo(publishedAt)}</span>
           <div className=' flex items-center gap-4 text-lg text-neutral-700'>
            <span className=' size-10 border border-neutral-400  rounded-full bg-gray-200 md:block hidden'></span>
            <span className=' md:text-lg text-sm w-1/2'>{channelTitle}</span>
            </div>
            </div>

            <p className=' text-base text-neutral-700 hidden md:block'>{description}</p>
        </div>
    </div>
  )
}

export default ResultVideo