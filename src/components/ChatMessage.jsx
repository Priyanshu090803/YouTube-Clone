import { FaRegCircleUser } from 'react-icons/fa6'

const ChatMessage = ({name,message}) => {
  return (
    <div className=' flex items-top md:gap-3 min-h-10 shadow-sm  px-1 rounded-lg overflow-x-hidden'>
        <FaRegCircleUser
        className=' cursor-pointer  md:text-4xl text-2xl w-20  text-black mr-1'
         /> 
         <span className=' md:text-lg text-sm font-medium text-neutral-600'>{name}</span>
         <span className=' md:text-lg text-sm w-2/3 '>{message}</span>
    </div>
  )
}

export default ChatMessage