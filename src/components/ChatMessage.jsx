import React from 'react'
import { FaRegCircleUser } from 'react-icons/fa6'

const ChatMessage = ({name,message}) => {
  return (
    <div className=' flex items-top gap-3 min-h-10 shadow-sm  px-1 rounded-lg overflow-x-hidden'>
        <FaRegCircleUser
        className=' cursor-pointer  text-4xl w-20  text-black mr-1'
         /> 
         <span className=' text-lg font-medium text-neutral-600'>{name}</span>
         <span className=' text-lg w-2/3 '>{message}</span>
    </div>
  )
}

export default ChatMessage