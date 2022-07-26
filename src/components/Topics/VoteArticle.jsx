import { useEffect } from "react";
import axios from "axios";

const VoteArticle = ({ newArticle }) => {
  console.log(newArticle);

  const handleClick = () => {
    useEffect(() => {
      axios.patch(`/api/articles/${newArticle.article_id}`, { inc_votes: 1 });
    }, []);
  };

  return (
    <button onClick={handleClick} className="voteArticle_button">
      Up vote this article
    </button>
  );
};

export default VoteArticle;