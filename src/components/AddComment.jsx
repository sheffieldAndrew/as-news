import { useState } from "react";
import axios from "axios";

const AddComment = ({ newArticle }) => {
  const [comment, setComment] = useState("");
  const [commentToSend, setCommentToSend] = useState({
    body: "this is a test comment",
    userName: "tickle122",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCommentToSend = { ...commentToSend };
    newCommentToSend.body = comment;
    setCommentToSend(newCommentToSend);

    axios
      .post(
        `https://as-nc-news.herokuapp.com/api/articles/${newArticle.article_id}/comments`,
        itemToSend
      )
      .then(() => {
        setNewArticle((currArticle) => {
          return newArticle;
        });

      })
  };

  return (
    <div className="addCommment">
      <h4 className="addComment_header">Add new comment here</h4>

      <form onSubmit={handleSubmit} className="addComment_form">
        <input
          onChange={(e) => {
            setComment(e.target.value);
          }}
          type="text"
          className="addComment_commentBody"
          required
          placeholder="add comment here"
        />
        <button className="addComment_submit">Submit</button>
      </form>
    </div>
  );
};

export default AddComment;
// xx
