import { useState, useContext } from "react";
import axios from "axios";
import { UserProfile } from "../context/UserProfile";

const AddComment = ({ newArticle }) => {
  const [commentAdded, setCommentAdded] = useState(false);
  const { userProfile } = useContext(UserProfile);
  const [newComment, setNewComment] = useState("");
  const [commentToSend, setCommentToSend] = useState({
    body: "this is a test comment",
    userName: "tickle122",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCommentToSend = { ...commentToSend };
    newCommentToSend.body = newComment;
    newCommentToSend.userName = userProfile.username;

    setCommentToSend(newCommentToSend);

    axios
      .post(
        `https://as-nc-news.herokuapp.com/api/articles/${newArticle.article_id}/comments`,
        newCommentToSend
      )
      .then((res) => {
        setCommentAdded(true);
      });
  };

  if (commentAdded) {
    return (
      <div className="addComment_tempComment">
        <p>{commentToSend.body}</p>
        <h3 className="addComment_tempComment_author">
          by: {commentToSend.userName}
        </h3>

        <p>You have now commented on this article, one comment per article</p>
      </div>
    );
  }

  return (
    <div className="addCommment">
      <h4 className="addComment_header">Add new comment here</h4>

      <form onSubmit={handleSubmit} className="addComment_form">
        <input
          value={newComment}
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
          type="text"
          className="addComment_commentBody"
          required
          placeholder="add comment here"
        />
        <br />
        <button className="addComment_submit">Submit</button>
      </form>
    </div>
  );
};

export default AddComment;
