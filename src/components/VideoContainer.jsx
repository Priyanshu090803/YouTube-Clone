import { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_VIDEO_API } from '../utils/constants'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'

const VideoContainer = () => {
  const dispatch = useDispatch()
  const [video,setVideo]=useState([])
  const getVideos=async()=>{
    const data = await fetch(YOUTUBE_VIDEO_API)
    const json = await data.json()
    // console.log(json?.items)
    setVideo(json?.items)
  }
  
  useEffect(()=>{
    getVideos()
  },[])
  return (
    <div className=' flex flex-wrap pt-2 px-4 '
    onClick={()=>dispatch(closeMenu())}
    >
      {/* {video[0]&&<AdVideoCard info={video[0]}/>} */}
       {video.map((items)=> 
      <Link key={items.id} to={"/watch?v="+items?.id}>
      <VideoCard  info={items}/>
      </Link>
      )
       }
    </div>
  )
}

export default VideoContainer