import { useState, useContext } from "react";
import { UserProfile } from "../context/UserProfile";

const CommentCard = ({ comment, setArticleComments }) => {
  const [commentToDeleteID, setCommentToDeleteID] = useState();

  const { userProfile } = useContext(UserProfile);

const handleClick = (e) => {
    e.preventDefault()
    setCommentToDeleteID(e.target.value)
    console.log(commentToDeleteID);
}

  return (
    <div className="commentCard">
      <h2 className="commentCard_header">{comment.title}</h2>
      <p className="commentCard_commentB">{comment.body}</p>
      <h3 className="commentCard_author">by: {comment.author}</h3>
      <button
        onClick={handleClick}
        value={comment.comment_id}
        className="commentCard_delete"
      >
        {" "}
        Delete comment
      </button>
    </div>
  );
};

export default CommentCard;
