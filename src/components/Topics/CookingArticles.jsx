import { useState, useEffect } from "react";
import ArticleCard from "../ArticleCard";

const CookingArticles = () => {
  const [cookingArticles, setCookingArticles] = useState([]);

  useEffect(() => {
    fetch(`https://as-nc-news.herokuapp.com/api/articles`)
      .then((res) => res.json())
      .then(({ articles }) => setCookingArticles(articles));
  }, [cookingArticles]);

  return (
    <main className="app_articlesList">
      <h2 className="app_articlesList_header">Cooking Articles</h2>
      {cookingArticles
        .filter((article) => article.topic === "cooking")
        .map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
    </main>
  );
};

export default CookingArticles;
