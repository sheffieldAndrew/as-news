import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import images from "../utils/images";
import UpVoteArticle from "./UpVoteArticle";
import DownVoteArticle from "./DownVoteArticle";

const ArticlePage = () => {
  const { article_id } = useParams();
  const [newArticle, setNewArticle] = useState([]);

  useEffect(() => {
    fetch(`https://as-nc-news.herokuapp.com/api/articles/${article_id}`)
      .then((res) => res.json())
      .then(({ article }) => setNewArticle(article));
  }, [article_id, newArticle.votes]);

  return (
    <div className="article_page">
      <h2>{newArticle.title}</h2>
      <h5 className="articlePage_author">by {newArticle.author}</h5>
      <h5 className="articlePage_topic">Topic: {newArticle.topic}</h5>
      <img
        src={images[newArticle.topic]}
        alt="topic icon"
        className="articlePage_topic_icon"
      />
      <h5 className="articlePage_votes">votes: {newArticle.votes}</h5>
      <UpVoteArticle newArticle={newArticle} setNewArticle={setNewArticle} />
      <DownVoteArticle newArticle={newArticle} setNewArticle={setNewArticle} />

      <p className="articlePage_article_body">{newArticle.body}</p>

      <h3>Comments</h3>
    </div>
  );
};

export default ArticlePage;
