import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { YOUTUBE_SEARCH_RESULTS_API } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import {addSearchResult} from '../utils/searchResultSlice.jsx'
import ResultVideo from './ResultVideo.jsx'
import StickySideBar from './StickySideBar.jsx'
const Results = () => {
  const [searchParams] = useSearchParams()
  const searchItems = useSelector(store=>store.searchResult)
  const {searchResult}= searchItems 
  const dispatch = useDispatch();
  // console.log(searchParams.get("search_query")) 
  const searchQuery = searchParams.get("search_query")
  if(!searchQuery)return;

  const searchData=async()=>{
    const data = await fetch(YOUTUBE_SEARCH_RESULTS_API(searchQuery))
    const json = await data.json()
    // console.log(json.items)
    dispatch(addSearchResult(json.items))
  }

  useEffect(()=>{
    searchData()
  },[searchQuery])
  if(!searchResult)return
  return (
    <div className=' flex h-full w-full '>
    <StickySideBar/>
    <div className=' h-full w-full flex flex-col  overflow-y-scroll gap-10 px-10 mt-10'> 
       {searchResult.map((items)=> 
      <Link key={items.id.videoId} to={"/watch?v="+items?.id.videoId}>
        <ResultVideo data={items}/>
      </Link>
      )
       }
       </div>
    </div>
  )
}

export default Results