import { useState, useContext } from "react";
import { UserProfile } from "../context/UserProfile";
import axios from "axios";
import userImages from "../utils/userImages";

const CommentCard = ({ comment, setArticleComments }) => {
  const [commentToDeleteID, setCommentToDeleteID] = useState();

  const { userProfile } = useContext(UserProfile);

  const handleClick = (e) => {
    e.preventDefault();
    setCommentToDeleteID(e.target.value);

    axios
      .delete(
        `https://as-nc-news.herokuapp.com/api/comments/${commentToDeleteID}`
      )
      .then((res) => {
        console.log("article deleted");
        window.location.reload(true);
      });
  };

  return (
    <div className="commentCard">
      <h2 className="commentCard_header">{comment.title}</h2>
      <p className="commentCard_comment">{comment.body}</p>
      <h5 className="commentCard_author">
        <img
          className="miniUserIcon"
          src={userImages[comment.author]}
          alt="user icon"
          height="18px"
        />{" "}
        by: {comment.author}
      </h5>
      <h5 className="commentCard_created_at">
        Comment date: {comment.created_at.toString().slice(0, 10)},{" "}
        {comment.created_at.toString().slice(11, 19)}
      </h5>

      {userProfile.username === comment.author ? (
        <button
          onClick={handleClick}
          value={comment.comment_id}
          className="commentCard_delete"
        >
          Delete comment ❌
        </button>
      ) : null}
    </div>
  );
};

export default CommentCard;
