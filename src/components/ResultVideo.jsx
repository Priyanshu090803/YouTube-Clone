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
    <div className='  md:w-full h-full overflow-y-hidden w-full min-h-[20vw] mt-2  rounded-2xl cursor-pointer  flex gap-7'>
       <div className=' h-full rounded-lg  min-w-[35vw] overflow-y-hidden  relative '>
            <img 
        className='  h-[135%] w-full absolute -top-[17%] '
        src={high.url}
        />
        </div>

        <div className='  flex flex-col gap-2 '>
            <h3 className=' text-2xl'>{title}</h3>
            <span>{getTimeAgo(publishedAt)}</span>
           <div className=' flex items-center gap-4 text-lg text-neutral-700'>
            <div className=' w-12 h-12  rounded-full bg-gray-200'></div>
            <span>{channelTitle}</span>
            </div>
            <p className=' text-base text-neutral-700'>{description}</p>
        </div>
    </div>
  )
}

export default ResultVideo