const CommentCard = ({comment}) => {


    const handleClick = () => {

        
    }

    return ( 
<div className="commentCard">
<h2 className="commentCard_header">{comment.title}</h2>
<p className="commentCard_commentB">{comment.body}</p>
<h3 className="commentCard_author">by: {comment.author}</h3>
<button onClick={handleClick} value={comment.comment_id} className="commentCard_delete"> Delete comment</button>
</div>
     );
}
 
export default CommentCard; 