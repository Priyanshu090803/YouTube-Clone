import Comment from './Comment'

const CommentList = ({comments}) => {

  
    console.log(comments)
    if(!comments)return
  return (
    comments.map((item,index)=>(
    <div className=' flex flex-col gap-10 flex-wrap'>

      <Comment data={item} key={index}/>
      <div className=' border-l border-neutral-400 ml-10'>
        <CommentList comments={item.replies}/>
      </div>
    </div>

  ))
)
}

export default CommentList