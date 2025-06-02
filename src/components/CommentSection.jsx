import { useState } from "react"
import commentData from "../utils/comments.json"
import CommentList from "./CommentList"
const CommentSection = () => {
const [showComment,SetShowComment] = useState(false)

  return (
    <div className='  rounded-2xl w-full '>
        <h1 className=' font-medium md:text-2xl mb-10 cursor-pointer bg-red-100 py-4 px-3 rounded-2xl'
        onClick={()=>SetShowComment(!showComment)}
        >
        {showComment?"Hide comments":"Show comments"}
        </h1>
          {showComment&&<CommentList comments={commentData}/>}
    </div>

  )
}

export default CommentSection