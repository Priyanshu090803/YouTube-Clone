import commentData from "../utils/comments.json"
import CommentList from "./CommentList"
const CommentSection = () => {
  return (
    <div className='  rounded-2xl ml-4'>
        <h1 className=' font-medium text-2xl mb-10'>
            Comments
        </h1>
        <CommentList comments={commentData}/>
    </div>
  )
}

export default CommentSection