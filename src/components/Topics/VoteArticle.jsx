import axios from "axios";

const VoteArticle = ({ newArticle }) => {
  const itemToSend = { inc_votes: 1 };

  function handleClick(e) {
    console.log(itemToSend)
      axios
        .patch(
          `https://as-nc-news.herokuapp.com/api/articles/${newArticle.article_id}`,
          itemToSend
        )
        .then((response) => {});

  }

  return (
    <button
      onClick={
        handleClick
    }
      className="voteArticle_button"
    >
      Up vote this article
    </button>
  );
};

export default VoteArticle;
