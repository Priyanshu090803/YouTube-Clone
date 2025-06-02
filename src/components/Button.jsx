import React from 'react'

const Button = ({item}) => {
  return (
    <div>
        <button className=' bg-rose-50 min-w-[2vw]  capitalize md:px-5 px-3 py-1 md:py-2 m-1 rounded-xl whitespace-nowrap hover:bg-rose-100 duration-600 ease-in-out font-semibold cursor-pointer active:bg-black active:text-white text-sm md:text-lg'>{item}</button>
    </div>
  )
}

export default Button