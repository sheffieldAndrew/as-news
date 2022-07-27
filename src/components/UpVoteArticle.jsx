import axios from "axios";
import { useState } from "react";


const UpVoteArticle = ({ newArticle, setNewArticle }) => {
  const itemToSend = { inc_votes: 1 };

  const [hasVoted, setHasVoted] = useState(false);
  const [error, setError] = useState(false);

  function handleClick() {

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
        });

        setHasVoted(true);
      })
      .catch((err) => setError(true));
  }

  if (error) {
    return <p>error - unable to vote at the moment</p>;
  }

  if (hasVoted) {
    return (<p>Already up voted</p>

      );

  }

  return (
    <button onClick={handleClick} className="voteArticle_button">
      Up vote this article
    </button>
  );
};

export default UpVoteArticle;
