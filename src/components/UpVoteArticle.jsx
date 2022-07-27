import axios from "axios";
import { useState } from "react";

const UpVoteArticle = ({ newArticle, setNewArticle }) => {
  const itemToSend = { inc_votes: 1 };

  const [hasVoted, setHasVoted] = useState(false);
  const [error, setError] = useState(false);

  function handleClick() {
    console.log(itemToSend);
    axios
      .patch(
        `https://as-nc-news.herokuapp.com/api/articles/${newArticle.article_id}`,
        itemToSend
      )
      .then(() => {
        setNewArticle((currArticle) => {
          const newArticle = { ...currArticle };
          newArticle.votes += 1;
          return newArticle;
        }).catch((err) => setError(true));
        setHasVoted(true);
      });
  }

  if (error) {
    return <p className="vote_error">error</p>;
  }
  if (hasVoted) {
    return <p>Already up voted</p>;
  }

  return (
    <button onClick={handleClick} className="voteArticle_button">
      Up vote this article
    </button>
  );
};

export default UpVoteArticle;
