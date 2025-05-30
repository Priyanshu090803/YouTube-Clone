import React from 'react'

const Comment = ({data}) => {
    const {author,text}=data
    // console.log(data)
  return (
    <div className=' flex flex-col shadow gap-2'>
        <div className=' flex gap-4  items-center text-lg font-medium'>
          <img
        className=' w-10'
        src='https://www.svgrepo.com/show/157823/user.svg'
        />
        <h2>{author}</h2>
        </div>
        <p>{text}</p>
    </div>
  )
}

export default Comment