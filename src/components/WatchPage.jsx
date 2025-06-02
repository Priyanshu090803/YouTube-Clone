

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu, toggleMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentSection from './CommentSection'
import ChatMessage from './ChatMessage'
import LiveChat from './LiveChat'

const WatchPage = () => {
  const dispatch = useDispatch()
  const [showChat, setShowChat] = useState(false)
  
  useEffect(() => {
    dispatch(closeMenu())
  }, [])
  
  const [searchParams] = useSearchParams()
  console.log(searchParams.get("v"))
  
  return (
    <div 
      className='w-full min-h-screen px-2 sm:px-4 lg:px-10 py-2 md:py-4 pb-20 overflow-y-auto scrollbar-hide'
      onClick={() => dispatch(closeMenu())}
    >
      {/* Mobile and Tablet Layout */}
      <div className='block xl:hidden'>
        {/* Video Section */}
        <div className='w-full mb-6'>
          <iframe
            className='w-full aspect-video rounded-lg sm:rounded-xl'
            src={`https://www.youtube.com/embed/${searchParams.get("v")}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        
        {/* Live Chat Toggle Button - Mobile/Tablet */}
        <div className='mb-4'>
          <button 
            className='bg-neutral-300 hover:bg-neutral-400 transition-colors py-2 px-4 rounded-lg shadow-sm cursor-pointer w-full sm:w-auto
            '
            onClick={() => setShowChat(!showChat)}
          >
            {showChat ? "Hide Live Chat" : "Show Live Chat"}
          </button>
        </div>
        
        {/* Live Chat Section - Mobile/Tablet */}
        {showChat && (
          <div className='mb-6 bg-white rounded-lg shadow-lg border'>
            <div className='h-64 sm:h-80 md:h-96'>
              <LiveChat />
            </div>
          </div>
        )}
        
        {/* Comments Section */}
        <div className='bg-white rounded-lg sm:rounded-2xl shadow-xl'>
          <CommentSection />
        </div>
      </div>
      
      {/* Desktop Layout (XL and above) */}
      <div className='hidden xl:flex gap-6'>
        {/* Left Column - Video and Comments */}
        <div className='flex-1 min-w-0'>
          {/* Video Section */}
          <div className='mb-8'>
            <iframe
              className='w-full aspect-video rounded-xl'
              src={`https://www.youtube.com/embed/${searchParams.get("v")}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          
          {/* Comments Section */}
          <div className='bg-white rounded-2xl shadow-xl'>
            <CommentSection />
          </div>
        </div>
        
        {/* Right Column - Live Chat */}
        <div className='w-80 2xl:w-96 flex-shrink-0'>
          <div className='sticky top-4'>
            <button 
              className='bg-neutral-300 hover:bg-neutral-400 transition-colors py-2 px-4 mb-4 rounded-lg shadow-sm cursor-pointer w-full'
              onClick={() => setShowChat(!showChat)}
            >
              {showChat ? "Hide Live Chat" : "Show Live Chat"}
            </button>
            
            {showChat && (
              <div className='bg-white rounded-2xl shadow-xl border overflow-hidden'>
                <div className='h-[calc(100vh-12rem)]'>
                  <LiveChat />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WatchPage