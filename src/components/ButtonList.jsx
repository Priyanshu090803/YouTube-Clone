import React from 'react'
import Button from './Button'
import { button } from 'motion/react-client'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'


const buttonData= ["all","ai","javascript","computer programming","podcast","gaming","music","monetization","business idea","live","google","mixes","sales","pop music"]

const ButtonList = () => {
  const dispatch = useDispatch();
  return (
    <div className=' w-full flex mt-5 mx-2 md:gap-4 gap-2 px-1 sticky top-0 md:px-8 md:py-2 bg-white z-0'
    onClick={()=>dispatch(closeMenu())}
    >
      {
        buttonData.map((item,index)=><Button key={index} item={item}/>)}
    </div>
  )
}

export default ButtonList