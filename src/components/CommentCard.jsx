const CommentCard = ({comment}) => {
    return ( 
<div className="commentCard">
<h2 className="commentCard_header">{comment.title}</h2>
<p>{comment.body}</p>
<h3 className="commentCard_author">by: {comment.author}</h3>
</div>
     );
}
 
export default CommentCard; 