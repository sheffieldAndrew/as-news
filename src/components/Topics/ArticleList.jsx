import { useState, useEffect } from "react";
import ArticleCard from "../ArticleCard";

const ArticleList = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    fetch(`https://as-nc-news.herokuapp.com/api/articles`)
      .then((res) => res.json())
      .then(({ articles }) => setNewsArticles(articles));
  }, []);

  return (
    <main className="app_articlesList">
      <h2 className="app_articlesList_header">News Articles</h2>
      {newsArticles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </main>
  );
};

export default ArticleList;
