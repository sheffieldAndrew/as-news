import axios from "axios";

import { useState } from "react";

const Vote = ({ newArticle, setNewArticle }) => {
  const UpVoteItemToSend = { inc_votes:1 };
  const downVoteItemToSend = { inc_votes:-1};

  const [hasVoted, setHasVoted] = useState(false);
  const [error, setError] = useState(false);

  function handleClick(data) {
    axios
      .patch(
        `https://as-nc-news.herokuapp.com/api/articles/${newArticle.article_id}`,
        data
      )
      .then(() => {
        setNewArticle((currArticle) => {
          const newArticle = { ...currArticle };
          newArticle.votes -= data.inc_votes;
          return newArticle;
        });
        setHasVoted(true);
      })
      .catch((err) => setError(true));
  }

  if (error) {
    return <p>error - unable to vote at the moment</p>;
  }
  if (hasVoted) {
    return <p>Already voted</p>;
  }

  return (
    <div>
    <button onClick={handleClick(downVoteItemToSend)} className="voteArticle_button">
      Down vote this article
    </button>
    <button onClick={handleClick(UpVoteItemToSend)} className="voteArticle_button">
      Up vote this article
    </button>
    </div>
  );
};

export default Vote;
