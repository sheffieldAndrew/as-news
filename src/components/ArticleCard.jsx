import { Link } from "react-router-dom";
import images from "../utils/images";
import userImages from "../utils/userImages";

const ArticleCard = ({ article }) => {
  const articleSnippet = article.body.slice(0, article.body.indexOf(".") + 1);

  return (
    <div className="articleList_articleCard">
      <h4 className="articleList_articleCard_created_at">
        Date posted: {article.created_at.toString().slice(0, 10)},{" "}
        {article.created_at.toString().slice(11, 19)}{" "}
      </h4>
      <h3 className="articleList_articleCard_title">{article.title}</h3>
      <h5 className="articleList_articleCard_author"><img src={userImages[article.author]} alt="user icon" height="18px"/>  by {article.author} </h5>

      <h5 className="articleList_articleCard_topic">Topic: {article.topic}</h5>
      <img
        src={images[article.topic]}
        alt="topic icon"
        className="articleList_articleCard_topic_icon"
      />

      <p className="articleList_articleCard_snippet ">
        {articleSnippet}.......
      </p>
      <Link to={`/articles/${article.article_id}`}>Read more</Link>

      <h5 className="articleList_articleCard_votes"> 🗳️ Votes: {article.votes}</h5>
      <h5 className="articleList_articleCard_comment_count">
      🗯️ Comments: {article.comment_count}
      </h5>
    </div>
  );
};

export default ArticleCard;
