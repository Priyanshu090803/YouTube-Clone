import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaRegUserCircle } from 'react-icons/fa'
import { FaRegCircleUser } from 'react-icons/fa6'
import { IoIosNotificationsOutline, IoMdAdd } from 'react-icons/io'
import { IoMenu } from 'react-icons/io5'
import { MdKeyboardVoice } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import {  cacheResults } from '../utils/searchSlice'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate()
  const formatSearchQuery=(query)=>{
    return query.trim().replace(/\s+/g, '+');
  }

  const dispatch = useDispatch()
  const searchCache = useSelector(store => store.search)
  
  const [searchQuerry,setSearchQuerry]= useState("")
  const[inputSuggestion,SetInputSuggestion] = useState([])
  const [showSuggestion,SetShowSuggestion] = useState(false)


  useEffect(()=>{
    const timer= setTimeout(()=>{
      if(searchCache[searchQuerry]){     // agr search k andr querry hogi to use hi dikha do h ye logic(redux k andr check krre h ham)
        SetInputSuggestion(searchCache[searchQuerry])
      }else{   // redux k andr nahi milega to yha pe is function call se dal denge  store k andr
      searchSuggestion()}
    },100)   // timeout set krre h, jse hi 200 ms honge to api call hogi

    return(()=>{      // this will work that time when component is unmounting
      clearTimeout(timer)                           // destroying timer , kuki jse jse component re-render hota h to wo khud ko destroy krta h 
                                               //    dobara render krta h 
    })
  },[searchQuerry])


  // jse hi input m ham 1st letter type krenge timer start hoga , bcz useeffect typing k usse set kiya h
  // or agr 200ms se phle dusra word type hoga , to component re-render krega
  // us re-render se phle unmounting phase chlega To us phase m ham clear timeout krre h.(useeffect m return unmounting phase hota h)
  // and jab bhi component re-render hoga to new timer bnega
  // and if 200 ms tk type ni krenge to timer 200 m pauch k api call kr dega

  const searchSuggestion=async()=>{
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuerry)  // seach suggestion api
    const json = await data.json()
     SetInputSuggestion(json[1])
     
     dispatch(cacheResults({
      [searchQuerry]:json[1]   // search slice k andr data dal do
     }))
  }
  return (
   <div 
   
   className=' w-full flex md:px-9 px-2 py-2 sticky  items-center justify-between  z-50'>
    <div className=' flex items-center  md:gap-4  gap-1  '>
      <IoMenu 
                  className=' cursor-pointer text-2xl md:text-4xl active:scale-95 duration-300 ease-in-out text-neutral-800 hover:bg-red-50 active:bg-red-50 rounded-full w-10 '
                  onClick={()=>dispatch(toggleMenu())}
                  />
      <a href='/'>    
       <img
      className=' md:w-24 md:h-12 w-16 h-8  cursor-pointer active:scale-95 duration-300 ease-in-out '
      src='https://www.gstatic.com/youtube/img/promos/growth/35c066fddfacc16c6f51ed39c9932fa55d03f2845d7cd3b5b298705d1e2c5c3c_244x112.webp'
      />
      </a>
 
    </div>
    <div className=' md:relative  w-[50vw]  flex   border border-neutral-400  items-center rounded-4xl ' >
      <input
      className=' w-full md:px-6  md:h-10 h-7 px-2 md:py-2 py-1  outline-0 rounded-l-4xl text-sm md:text-lg '
      type='text'
      placeholder='Search'
      value={searchQuerry}
      onChange={(e)=>setSearchQuerry(e.target.value)}
      onFocus={()=>SetShowSuggestion(true)}
      onBlur={()=>
        setTimeout(() => {
          SetShowSuggestion(false),
          setSearchQuerry("")     // changed this part
        }, 200)
        }
      onKeyDown={(e)=>{
        if(e.key=="Enter"){
             navigate(`/results?search_query=${formatSearchQuery(searchQuerry)}`)  
        }
      }}
      />
    
      <button
      onClick={()=> navigate(`/results?search_query=${formatSearchQuery(searchQuerry)}`)}
      className=' bg-rose-50 hover:bg-rose-100 md:px-6 md:text-3xl md:h-10 text-lg px-2 font-medium h-7 text-neutral-900 md:font-semibold  cursor-pointer active:scale-95 duration-300 ease-in-out  active:bg-neutral-100 rounded-r-4xl '
      ><CiSearch/></button>
        {showSuggestion&& searchQuerry&&
          <div className=' absolute top-10 bg-white md:w-[45vw] w-[100vw] z-[60] left-0  mt-2 rounded-2xl' > 
        <div className=' w-full text-xl py-6 font-semibold flex flex-col cursor-pointer gap-2 shadow-lg sh'>
          {inputSuggestion.map((item,index)=><div
          key={index}
          onClick={()=>navigate(`/results?search_query=${formatSearchQuery(item)}`)}

          className=' hover:bg-rose-50 flex gap-4 items-center px-6 py-2'><CiSearch className=' text-2xl mt-1'/><span className=' hover:bg-rose-50'>{item}</span></div>)}
        </div>
      </div>}
    </div>
    <div className=' flex  items-center gap-5'>
      <MdKeyboardVoice
      className=' cursor-pointer text-2xl md:text-4xl active:scale-95 duration-300 ease-in-out text-neutral-800 rounded-full bg-rose-50 hover:bg-rose-100 delay-300 w-10 md:block hidden'
      />
      <div
      className=' md:flex items-center cursor-pointer  active:scale-95 duration-300 ease-in-out text-neutral-800 text-2xl md:text-xl gap-2 rounded-full bg-rose-50 hover:bg-rose-100 delay-300 px-2 py-2 hidden'
      > <IoMdAdd
      />Create</div>
      <IoIosNotificationsOutline
      className=' cursor-pointer text-xl md:text-4xl active:scale-95 duration-300 ease-in-out text-neutral-800 hover:rounded-full hover:bg-rose-50 w-10 md:mr-0 -mr-4'
      
      />
      <FaRegCircleUser 
      className=' cursor-pointer text-xl md:text-4xl active:scale-95 duration-300 ease-in-out text-neutral-800 '
      />

    </div>
   </div>
  )
}

export default Navbar