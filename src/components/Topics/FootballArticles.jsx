import { useState, useEffect } from "react";
import ArticleCard from "../ArticleCard";

const FootballArticles = () => {
  const [footballArticles, setFootballArticles] = useState([]);

  useEffect(() => {
    fetch(`https://as-nc-news.herokuapp.com/api/articles`)
      .then((res) => res.json())
      .then(({ articles }) => setFootballArticles(articles));
  }, [FootballArticles]);

  return (
    <main className="app_articlesList">
      <h2 className="app_articlesList_header">Football Articles</h2>
      {footballArticles
        .filter((article) => article.topic === "football")
        .map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
    </main>
  );
};

export default FootballArticles;
