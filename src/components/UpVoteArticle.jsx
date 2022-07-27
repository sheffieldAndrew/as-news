import axios from "axios";

const UpVoteArticle = ({ newArticle, setNewArticle }) => {
  const itemToSend = { inc_votes: 1 };

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
      });
  }

  return (
    <button onClick={handleClick} className="voteArticle_button">
      Up vote this article
    </button>
  );
};

export default UpVoteArticle;
