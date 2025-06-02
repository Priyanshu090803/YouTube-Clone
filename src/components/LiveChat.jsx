import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addmessage } from '../utils/chatSlice'
import { generateRandomMessages, generateRandomName } from '../utils/helper'


const LiveChat = () => {
    const dispatch = useDispatch()
    const [liveMessage,SetLiveMessage] = useState("")
    const {message} = useSelector(store=> store.chat)
    useEffect(()=>{                 // api polling logic here

       const interval= setInterval(() => {
            dispatch(addmessage({                       // api polling(api call) har 2 sec m krenge
                name:generateRandomName(),
                message:generateRandomMessages(10),
            }))                           
        }, 2000);

        return ()=> clearInterval(interval) // state clear krenge note=> function k andr krna interval clear. wrna sabse pehle return clearinterval chla dega
    
    },[])
  return (
    <div className=' h-full w-full  flex flex-col gap-10 '>
    <div className=' h-[90%] w-full gap-4 flex  flex-col-reverse overflow-y-scroll scrollbar-hide'>
       
      {
      message.map((items,index)=>{
        return(
      <ChatMessage key={index} name={items.name} message={items.message}/>
        )
      })
      }

     
    </div>
     <form
      className=' w-full  gap-4 flex shadow-sm'
      
      onSubmit={(e)=>{
        e.preventDefault()
        SetLiveMessage("")
        setTimeout(() => {
           dispatch(addmessage({
          name:"Priyanshu's:",
          message:" our comment: "+liveMessage
        }))
        }, 1000);   // 1 sec bad dalenge
       
      }}
      >
        <input
        type='text'
        placeholder='Send message'
        className=' w-full px-4 py-2 text-lg border-0 outline-0'
        value={liveMessage}
        onChange={(e)=>{
          SetLiveMessage(e.target.value)
        }}
        />
        <button 
        className=' w-20 bg-neutral-300 rounded-lg px-2 cursor-pointer'
        >Message</button>
      </form>
      </div>
  )
}

export default LiveChat