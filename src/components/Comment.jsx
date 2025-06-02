import React from 'react'

const Comment = ({data}) => {
    const {author,text}=data
    // console.log(data)
  return (
    <div className=' flex flex-col shadow gap-2 px-1'>
        <div className=' flex gap-4  items-center text-lg font-medium flex-wrap'>
          <img
        className=' md:w-10 w-6'
        src='https://www.svgrepo.com/show/157823/user.svg'
        />
        <h2 className=' md:text-lg text-sm'>{author}</h2>
        </div>
        <p className=' md:text-base text-sm'>{text}</p>
    </div>
  )
}

export default Comment