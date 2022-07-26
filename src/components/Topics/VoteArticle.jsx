import axios from "axios";

const VoteArticle = ({ newArticle, setNewArticle }) => {
  const itemToSend = { inc_votes: 1 };

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
        });
      });
  }

  return (
    <button onClick={handleClick} className="voteArticle_button">
      Up vote this article
    </button>
  );
};

export default VoteArticle;
